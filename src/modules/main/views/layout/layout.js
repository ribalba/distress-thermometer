var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var SplashView = require('../splash/splash');

var NccnLayout = require('../../../nccn/views/layout/layout');
var MyLayout = require('../../../mypath/views/layout/layout')
module.exports = Marionette.View.extend({
    template: LayoutTemplate,
    childViewEventPrefix: 'view',

    regions: {
        mainContainer: '.main-wrapper-container'
    },

    onViewStartNccn(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new NccnLayout());

    },
    onViewStartMypath(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new MyLayout());

    },
    onViewStartCareMypath(childView){
        this.$('.js-not-implemented').modal('show')
    },

    onViewMainStart(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new SplashView());

    },

    onRender() {
        this.onViewMainStart()
        //this.onViewStartMypath()
    }
});