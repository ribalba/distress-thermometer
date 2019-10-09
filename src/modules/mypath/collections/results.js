var Backbone = require('backbone');
var resultModel = require('../models/result');

var localStorage = require('backbone.localstorage');
var LocalStorage = localStorage.LocalStorage;

const ResultStorage = Backbone.Collection.extend({
    model: resultModel,
    localStorage: new LocalStorage('ResultStorage')
});

var resultStorage = new ResultStorage();
resultStorage.fetch();

module.exports = resultStorage;
