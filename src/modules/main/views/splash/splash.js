var Marionette = require('backbone.marionette');
var SplashTemplate = require('./splash.hbs');

module.exports = Marionette.View.extend({

    template: SplashTemplate,

    events: {
        'click .getstarted-js': 'distressthermometer_start'
    },

    distressthermometer_start: function(){
        this.triggerMethod('personal:start', this);
    }
});