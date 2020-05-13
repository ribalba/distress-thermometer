var Marionette = require('backbone.marionette');
var WelcomeTemplate = require('./welcome.hbs');
var UserModel = require('../../models/user');

module.exports = Marionette.View.extend({

    template: WelcomeTemplate,

    events: {
        'click .js-tstart': 'personal_start',
        'click .js-goto-done': 'goto_done'
    },

    personal_start: function(){
        this.triggerMethod('personal:start', this);
    },

    goto_done: function(){
        this.triggerMethod('questionnaire:finish', this);
    },


    onRender: function(){
        toupload = JSON.parse(localStorage.toupload || null)
        if (toupload){
            this.$('.js-goto-done').removeClass('hidden')
        }
    }

});