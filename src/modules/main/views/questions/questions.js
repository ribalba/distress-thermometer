var Marionette = require('backbone.marionette');
var QuestionsTemplate = require('./questions.hbs');
var QuestionTemplate = require('./question.hbs');
var _ = require('underscore');
var questionCollection = require('../../collections/questions')
var SessionStorage = require('../../models/session');

var resultStorage = require('../../collections/results');
var resultModel = require('../../models/result');

const QuestionView = Marionette.View.extend({
    template: QuestionTemplate,
    className: 'item',

    onAttach: function () {
        this.$el.find('#answer-js').checkbox({
            onChecked: (function(_this) {
                return function() {
                    answers = SessionStorage.get("answers");
                    answers.push(_this.model.get('title'));
                    SessionStorage.set("answers", answers);
                };
              })(this),
              onUnchecked: (function(_this) {
                return function() {
                    answers = SessionStorage.get("answers");
                    answers = _.without(answers, _this.model.get('title'));
                    SessionStorage.set("answers", answers);
                };
              })(this)
        });
    },
});


const QuestionGroup = Marionette.CollectionView.extend({

    template: _.template('<div id="question-items" class="ui middle aligned list"></div>'),
    childView: QuestionView,
    childViewContainer: '#question-items',

});

const QuestionWrapper = Marionette.View.extend({

    template: QuestionsTemplate,
    regions: {
        qg: '.js-items'
    },

    onRender: function () {
        this.showChildView('qg', new QuestionGroup({ collection: new questionCollection(this.model.get('items')) }));
    }

})


module.exports = Marionette.View.extend({
    template: _.template('<div id="question_group"></div>'),

    regions: {
        qg: '#question_group'
    },

    events: {
        'click .js-next': 'show_next'
    },

    onAttach: function () {
        this.$el.find('.progress').progress({
            total: this.collection.length,
        });
    },

    show_next: function () {
        if (this.$el.find('#inputtext')){
            SessionStorage.set('other', this.$el.find('#inputtext').val() )
        }
        this.counter += 1
        if (this.collection.length === this.counter) {
            this.triggerMethod('questionnaire:finish', this);
        }else{
            this.render();
        }
    },

    initialize: function (options) {
        this.collection = options.collection;
        this.counter = 0;
    },

    onRender: function () {
        this.showChildView('qg', new QuestionWrapper({ model: this.collection.at(this.counter) }));
        this.$el.find('.progress').progress({
            total: this.collection.length,
            value: this.counter
        });


    }

});
