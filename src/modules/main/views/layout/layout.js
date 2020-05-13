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
        window.scrollTo(0, 0);


    },
    onViewStartMypath(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new MyLayout());
        window.scrollTo(0, 0);

    },
    onViewStartCareMypath(childView){
        this.$('.js-not-implemented').modal('show')
    },

    onViewMainStart(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new SplashView());
        window.scrollTo(0, 0);

    },

    onRender() {
        //this.onViewMainStart()
        this.onViewStartMypath()
    }
});