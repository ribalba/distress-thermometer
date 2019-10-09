var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./thermo.hbs');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,

    events: {
        'click .js-qstart': 'distressthermometer_start'
    },

    onAttach: function(){
        this.$('.js-slider').slider({min: 0,
            max: 10,
            step: 1,
            smooth: true
        });
    },

    distressthermometer_start: function(){
        this.model.set('thermo', this.$('.js-slider').slider('get value'))
        this.triggerMethod('distressquestions:start', this);
    }
});