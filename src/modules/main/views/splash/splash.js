var Marionette = require('backbone.marionette');
var SplashTemplate = require('./splash.hbs');
var $ = require('jquery');

module.exports = Marionette.View.extend({

    template: SplashTemplate,

	events: {
		'input #js-input': 'test_token',
	},

	test_token: function (e) {
        if($(e.target).val().toLowerCase() === 'launch123'){
            localStorage.token = 'true'
            this.triggerMethod('start:mypath', this);
        };
	},
});