var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./personal.hbs');
var UserModel = require('../../models/user');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,

    events: {
        'click .js-show-modal': 'show_modal',
        'click .js-tstart': 'thermo_start'
    },

    initialize: function(options){
        this.clinics = options.clinics
    },


    onAttach: function () {
        this.$('#user-checkbox').checkbox({
            onChecked: (function(_this) {
                return function() {
                  return _this.model.set({
                    'user_save': true
                  });
                };
              })(this),
              onUnchecked: (function(_this) {
                return function() {
                  return _this.model.set({
                    'user_save': false
                  });
                };
              })(this)
        });
        this.$('.selection.dropdown').dropdown();
    },

    show_modal: function(){
        window.jQuery('.privacy_modal').modal('show');
    },

    thermo_start: function(){
        pseudonym = this.$('#pseudonym').val().trim();
        diagnosis = this.$('#diagnosis').val().trim();
        phone_number = this.$('#phone_number').val().trim();
        provider_phone_number = this.$('#provider_phone_number').val().trim();
        clinic = this.$('#clinic').val();

        if(!(pseudonym && diagnosis && phone_number && provider_phone_number && clinic)){
            this.show_modal()
            return
        }

        um = {
            pseudonym: pseudonym,
            diagnosis: diagnosis,
            phone_number: phone_number,
            provider_phone_number: provider_phone_number,
            clinic_email:clinic,
            onesignal_id: window.idapp
        }

        this.model.set('user', um)

        if(this.model.get('user_save')){
            localStorage.user = JSON.stringify(um);
        }else{
            localStorage.user = JSON.stringify({});
        }


        this.triggerMethod('thermo:start', this);
    },

    templateContext: function(){
        var saveData = JSON.parse(localStorage.user || null) || {
            pseudonym: '',
            diagnosis: '',
            phone_number: '',
            provider_phone_number: '',
            clinic_email:''
        };

        selected_clinics = this.clinics.map(function(item){
            r = {name:item.get('name'), email:item.get('email')}
            if(saveData.clinic_email === item.get('email')){
                r['selected'] = "selected"
            }

            return r
        })

        return {
            "pseudonym": saveData.pseudonym,
            "diagnosis": saveData.diagnosis,
            "phone_number": saveData.phone_number,
            "provider_phone_number": saveData.provider_phone_number,
            "clinic": saveData.clinic,
            "clinics": selected_clinics
        }
    },

});