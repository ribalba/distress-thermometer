var Marionette = require('backbone.marionette');
var StartTemplate = require('./start.hbs');
var resultStorage = require('../../collections/results');
var _= require('underscore');

module.exports = Marionette.View.extend({

    template: StartTemplate,

    events: {
        'click .js-question': 'take_questionnaire',
        'click .js-results': 'show_results'
    },

    take_questionnaire: function(){
        this.triggerMethod('questionnaire:start', this);
    },
    show_results: function(){
        this.triggerMethod('results:show', this);
    },


});