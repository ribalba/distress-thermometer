var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./personal.hbs');
var UserModel = require('../../models/user');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,

    events: {
        'click .js-show-modal': 'show_modal',
        'click .js-tstart': 'thermo_start'
    },
    onAttach: function () {
        this.$('#user-checkbox').checkbox({
            onChecked: (function(_this) {
                return function() {
                  return _this.model.set({
                    'save': true
                  });
                };
              })(this),
              onUnchecked: (function(_this) {
                return function() {
                  return _this.model.set({
                    'save': false
                  });
                };
              })(this)
        });
    },
    show_modal: function(){
        this.$('.privacy_modal').modal('show');
    },

    thermo_start: function(){
        um = this.model.get('user')
        um.set({
            "lname": this.$('#last-name').val(),
            "fname": this.$('#first-name').val()
        });
        this.model.set('user',um)

        this.triggerMethod('distressthermometer:start', this);
    },

    templateContext: function(){
        return {
            "fname": this.model.get('user').get('fname'),
            "lname": this.model.get('user').get('lname')
        }
    },

    onRender: function(){
        //console.log(this.model)
    }

});