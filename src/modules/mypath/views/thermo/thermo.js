var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./thermo.hbs');
var UserModel = require('../../models/user');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,
    triggers: {
        'click .js-quality': 'distressquestions:start',
    },

});