var Marionette = require('backbone.marionette');
var SplashTemplate = require('./splash.hbs');

module.exports = Marionette.View.extend({

    template: SplashTemplate,

    triggers: {
        'click .js-nccn-start': 'start:nccn',
        'click .js-mypath-start': 'start:mypath',
        'click .js-mypath-care-start': 'start:care:mypath'
    },
});