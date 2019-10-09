var Backbone = require('backbone');
var Marionette = require ('backbone.marionette');
var LayoutView = require('./views/layout/layout');

module.exports = Marionette.Application.extend({
    region: '#app',

    onBeforeStart(app, options) {
        // In the future we will set the style to choose here
        //this.user_model = new UserModel();

        //resultStorage.fetch();
    },

    onStart() {
      this.showView(new LayoutView());
      Backbone.history.start();
    }
  });
