var Marionette = require('backbone.marionette');
var QuestionsTemplate = require('./questions.hbs');
var QuestionTemplate = require('./question.hbs');

var resultStorage = require('../../collections/results');
var resultModel = require('../../models/result');

const QuestionView = Marionette.View.extend({
    template: QuestionTemplate,
    className: 'item',

    events: {
        'click .js-save': 'save_answer'
    },

    save_answer: function (event) {
        this.$el.find('.button').removeClass('primary');
        this.$(event.target).addClass('primary');

        if (this.$(event.target).hasClass('js-yes')) {
            this.model.set('answer', true);
        } else {
            this.model.set('answer', false);
        }
    }
});


module.exports = Marionette.CollectionView.extend({

    template: QuestionsTemplate,
    childView: QuestionView,
    childViewContainer: '.js-items',

    collectionEvents: {
        'change': 'update_progress'
    },

    onAttach: function(){
        this.$el.find('.progress').progress({
            total: this.collection.length,
        });
        this.$('.ui.sticky').sticky({
            context: '.js-items'
        });

    },

    update_progress: function () {
        null_questions = this.collection.where({answer: null}).length;
        open_questions = this.collection.length - null_questions
        this.$el.find('.progress').progress('set progress', open_questions)

        if (null_questions === 0){
            window.jQuery('body').toast({
                class: 'success',
                title: 'Brilliant',
                message: 'You have finished the questionnaire',
                showProgress: 'bottom'
            });

            result = new resultModel({
                data: this.collection.toJSON(),
                time: new Date().toISOString()
            });

            resultStorage.add(result);
            result.save();

            this.triggerMethod('questionnaire:finish', this);
        }
    },


});