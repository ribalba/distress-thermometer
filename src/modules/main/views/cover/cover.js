var Marionette = require('backbone.marionette');
var CoverTemplate = require('./cover.hbs');


module.exports = Marionette.View.extend({

    template: CoverTemplate,
    tagName: 'section',
    className: 'blog-preview',
    ui: {
    	slider: '[data-slider]',
        gallery: '[data-gallery]'
    },

    onShow: function() {

    },


});