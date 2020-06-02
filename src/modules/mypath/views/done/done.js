var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

var DoneTemplate = require('./done.hbs');
var resultStorage = require('../../collections/results');
var _ = require('underscore');
var UserModel = require('../../models/user');
var $ = require('jquery');
var ProgressBar = require('progressbar.js')
var SessionStorage = require('../../models/session');
var event_triggers = require('../../../../../event_triggers.json')


const ResultView = Marionette.View.extend({
	template: _.template('<p><div><%- response.text %></div></p>'),
})

const NoResultView = Marionette.View.extend({
	template: _.template('<p>Thank you for taking the assessment.</p>'),
})


const ResultCollection = Marionette.CollectionView.extend({
	childView: ResultView,
	emptyView: NoResultView
});


const DetailView = Marionette.View.extend({
    className: 'item',

    template: _.template(`
            <div class="content">
                <div class="header"><%- answer.question %></div>
                <div class="description"><%- answer.answer %></div>
            </div>`),
    })

const NoDetailView = Marionette.View.extend({
	template: _.template('<p>Thank you for taking the assessment.</p>'),
})


const DetailCollection = Marionette.CollectionView.extend({
	childView: DetailView,
    emptyView: NoDetailView,

    childViewContainer: '.js-list',
    template: _.template('<h4>Your Answers</h4><div class="ui divided list js-list"></div>')

});


module.exports = Marionette.View.extend({

	template: DoneTemplate,

	regions: {
		'result-container': '.result-container',
		'detail-container': '.detail-container'
	},

	generate_text: function(){
		return _.compact(_.map(this.model.get("answers"), function(answer){
			if(_.has(event_triggers, answer.event)){
				return{
					answer: answer,
					response: event_triggers[answer.event]
				}
			}
		}))
	},

	events: {
		'click .js-done': 'take_questionnaire',
	},

	take_questionnaire: function () {
		this.triggerMethod('welcome:view', this);
	},



	onAttach: function () {
        this.$('.ui.accordion').accordion();
	},

	onRender: function () {

		// Check events
		result_set = this.generate_text()


		// Display messages
		result_uni = _.uniq(result_set, false, function(i){
			return i.response.text
		})

		this.showChildView('result-container', new ResultCollection({ collection: new Backbone.Collection(result_uni)}));
        this.showChildView('detail-container', new DetailCollection({ collection: new Backbone.Collection(result_set)}));


		// Upload
		upload_data={
			result_set: result_set,
			user: this.model.get('user')
		}

        this.upload_results(upload_data)

	},

	upload_results: function (data) {

		$('.js-loading').addClass('active');

        data_upload = JSON.parse(localStorage.toupload || null) || []
        console.log(data_upload)

        if(data['user'] !== null){
            data_upload.push(data)
        }

		$.ajax({
			type: "POST",
			url: window.api_url + "/save",
			data: JSON.stringify(data_upload),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			complete: (function(_this, _data_upload) {
				return function(data, status) {
					$('.js-loading').removeClass('active');

					if (status === 'success'){
						$('body').toast({
							message: 'Data uploaded'
						});

						localStorage.toupload = []

					}else{
						$(".js-error-uploading").removeClass('hidden')
						$(".js-error-uploading").addClass('visible')

						$('.js-loading').removeClass('active');

						localStorage.toupload = JSON.stringify(_data_upload);
                    }

                    _this.model.set('answers', [])
                    _this.model.set('other', "")
                    _this.model.set({'user': null})


				};
				})(this, data_upload)
		})
	},
});
