var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var StartView = require('../done/done');
var QuestionView = require('../questions/questions');
var ResultsView = require('../results/results');
var SplashView = require('../splash/splash');
var ThermoView = require('../thermo/thermo');
var DoneView = require('../done/done');
var PersonalView = require('../personal/personal');
var SessionStorage = require('../../models/session');
var UserModel = require('../../models/user');
var questionCollection = require('../../collections/questions');
var Datas = require('../../../../../datas.json');

module.exports = Marionette.View.extend({
    template: LayoutTemplate,
    childViewEventPrefix: 'childview',

    regions: {
        mainContainer: '.main-container'
    },

    events: {
        'click .js-home': 'onRender',
    },

    onChildviewDistressquestionsStart(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new QuestionView({collection: new questionCollection(Datas.questions)}));
    },
    onChildviewDistressthermometerStart(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new ThermoView({model: SessionStorage}));
    },

    onChildviewPersonalStart(childView) {
        if(!SessionStorage.has('user')){
            SessionStorage.set({'user': new UserModel()})
        }

        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new PersonalView({model: SessionStorage}));
    },

    onChildviewStartShow(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new StartView());
    },
    onChildviewQuestionnaireFinish(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new DoneView({model: SessionStorage}));
    },
    onChildviewSplashStart(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new SplashView());

    },

    onRender() {
        this.showChildView('mainContainer', new SplashView());
        //this.showChildView('mainContainer', new PersonalView());
        //this.onChildviewQuestionnaireFinish()

    }
});