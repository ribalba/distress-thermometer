var Backbone = require('backbone');
var clinic = require('../models/clinic');


const ClinicStorage = Backbone.Collection.extend({
    model: clinic,
    url: window.api_url + "/clinics"
});

clinicStorage= new ClinicStorage()

module.exports = clinicStorage;
