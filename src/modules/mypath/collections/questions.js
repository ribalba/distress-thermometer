var Backbone = require('backbone');
var questionModel = require('../models/question');

module.exports = Backbone.Collection.extend({
    model: questionModel
});