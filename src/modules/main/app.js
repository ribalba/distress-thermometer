var Backbone = require('backbone');
var Marionette = require ('backbone.marionette');
var UserModel = require('./models/user');
var LayoutView = require('./views/layout/layout');
var resultStorage = require('./collections/results');

module.exports = Marionette.Application.extend({
    region: '#app',

    onBeforeStart(app, options) {
        // In the future we will set the style to choose here
        this.user_model = new UserModel();

        resultStorage.fetch();
    },

    onStart() {
      this.showView(new LayoutView({model: this.user_model}));
      Backbone.history.start();
    }
  });
