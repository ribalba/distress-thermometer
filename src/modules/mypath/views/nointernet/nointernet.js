var Marionette = require('backbone.marionette');
var NoInternetTemplate = require('./nointernet.hbs');
var UserModel = require('../../models/user');

module.exports = Marionette.View.extend({

    template: NoInternetTemplate,

    events: {
        'click .js-tstart': 'personal_start'
    },


    personal_start: function(){
        this.triggerMethod('personal:start', this);
    },


});