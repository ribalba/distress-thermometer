var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var CategoryTemplate = require('./category.hbs');
var ItemTemplate = require('./item.hbs');
var HeaderTemplate = require('./header.hbs');
var ItemsTemplate = require('./items.hbs');
var _ = require('underscore');
var $ = require('jquery')
var questionCollection = require('../../collections/questions')
var SessionStorage = require('../../models/session');

var resultStorage = require('../../collections/results');
var resultModel = require('../../models/result');

const ItemView = Marionette.View.extend({
    initialize: function(options){
        if(options.heading){
            this.heading = options.heading
        }
    },

    template: ItemTemplate,

    onAttach: function () {
        this.$el.find('.ui.accordion').accordion();
        this.$el.find('.js-toggle').checkbox({
            onChecked: (function(_this) {
                return function() {
                    _this.$el.find('.ui.accordion').accordion('open', 0);
                };
              })(this),
              onUnchecked: (function(_this) {
                return function() {
                    _this.$el.find('.ui.accordion').accordion('close', 0);
                };
              })(this)
            })
        this.$el.find('.js-checkbox').checkbox({
            onChecked: (function(_this) {
                return function() {
                    key =    $(this).data('header')
                    answer = $(this).data('answer')
                    event =  $(this).data('event')
                    group =  $(this).data('group')
                    value =  $(this).data('value')



                    answers = SessionStorage.get("answers");

                    // As the unchecked event isn't fired we need to check
                    // if there is already a model with the question and
                    // remove it
                    answers = _.reject(answers, function(el) { return el.question === key; });

                    answers.push({
                        question: key,
                        answer:answer,
                        event: event,
                        heading: group,
                        subheading: _this.heading,
                        value: value
                    });

                    SessionStorage.set("answers", answers);
                };
                })(this)
        });

    },

    templateContext: function(){
        return ({id: this.model.cid})
    }

});


const ItemGroup = Marionette.CollectionView.extend({
    initialize: function(options){
        if(options.heading){
            this.heading = options.heading
        }
    },

    template: _.template('<div class="hellos"></div>'),
    childView: ItemView,
    childViewContainer: '.hellos',
    childViewOptions: function(model) {
        return {
          heading: this.heading
        }
    }

});



const ItemWrapper = Marionette.View.extend({

    template: ItemsTemplate,

    regions: {
        qg: '.js-items'
    },

    onRender: function () {
        this.showChildView('qg', new ItemGroup({ collection: new Backbone.Collection(this.model.get('questions')), heading: this.model.get('title') }));
    }

})


const HeaderGroup = Marionette.CollectionView.extend({
    template: HeaderTemplate,
    childView: ItemWrapper,
    childViewContainer: '.js-header',
});

const CategoryWrapper = Marionette.View.extend({

    template: CategoryTemplate,

    regions: {
        qg: '.js-category'
    },

    onRender: function () {
        this.showChildView('qg', new HeaderGroup({ collection: new Backbone.Collection(this.model.get('questions')) }));
    }

})


module.exports = Marionette.View.extend({
    template: _.template('<div id="question_group"></div>'),

    regions: {
        qg: '#question_group'
    },

    events: {
        'click .js-next': 'show_next',
        'click .js-back': 'show_prev'
    },

    onAttach: function () {
        this.$el.find('.progress').progress({
            total: this.collection.length,
        });
    },


    show_prev: function() {
        this.counter -= 1
        console.log(this.counter)
        if (this.counter === -1) {
            this.triggerMethod('thermo:start', this);
        }else{
            this.render();
            window.scrollTo(0, 0);

        }

    },
    show_next: function () {
        if (this.$el.find('textarea')){
            this.$el.find('textarea').each((function(_this) {
                return function(idx, li) {
                  if( $(li).val()){

                    key =  $(this).data('header')
                    value =  $(li).val()
                    event =  $(this).data('event')
                    group =  $(this).data('group')

                    answers = SessionStorage.get("answers");
                    // As the unchecked event isn't fired we need to check
                    // if there is already a model with the question and
                    // remove it
                    answers = _.reject(answers, function(el) { return el.question === key; });

                    answers.push({
                        question: key,
                        answer:value,
                        event: event,
                        heading: group,
                        subheading: _this.heading
                    });
                    SessionStorage.set("answers", answers);

                  }
                };
              })(this));

            //SessionStorage.set('other', this.$el.find('#inputtext').val() )
        }
        this.counter += 1
        if (this.collection.length === this.counter) {
            this.triggerMethod('questionnaire:finish', this);
        }else{
            this.render();
            window.scrollTo(0, 0);

        }
    },

    initialize: function (options) {
        this.collection = options.collection;
        this.counter = 0;
    },

    onRender: function () {
        this.showChildView('qg', new CategoryWrapper({ model: this.collection.at(this.counter) }));
        this.$el.find('.progress').progress({
            total: this.collection.length,
            value: this.counter
        });


    }

});
