// Vendors
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// Globals
window.jQuery = $;
var _ = require('underscore');

require('../semantic/dist/semantic.min.js');

//App
var App = require('./modules/main/app');
var app = new App();
app.start();
