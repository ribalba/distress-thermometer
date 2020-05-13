var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./thermo.hbs');
var UserModel = require('../../models/user');
var $ = require('jquery')
var SessionStorage = require('../../models/session');
var _ = require('underscore');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,
    events: {
        'click .js-quality': 'save_quality',
    },

    save_quality: function(event){
        button = $(event.target).closest('button')

        key =  "quality of life"
        value =  button.data('value')
        event =  button.data('event') || 0
        group =  "quality of life"
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
            subheading: ""
        });
        SessionStorage.set("answers", answers);

        this.triggerMethod('distressquestions:start', this);
    }

});