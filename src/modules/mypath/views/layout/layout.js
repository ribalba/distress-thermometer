var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var QuestionView = require('../questions/questions');
var DoneView = require('../done/done');
var PersonalView = require('../personal/personal');
var ThermoView = require('../thermo/thermo')
var SessionStorage = require('../../models/session');
var UserModel = require('../../models/user');
var questionCollection = require('../../collections/questions');
var Datas = require('../../../../../my_datas.json');

module.exports = Marionette.View.extend({
    template: LayoutTemplate,
    childViewEventPrefix: 'childview',

    regions: {
        mainContainer: '.my-main-container'
    },

    events: {
        'click .js-home': 'onRender',
    },

    onChildviewDistressquestionsStart(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new QuestionView({collection: new questionCollection(Datas.questions)}));
        window.scrollTo(0, 0);
    },

    onChildviewPersonalStart(childView) {
        if(!SessionStorage.has('user')){
            SessionStorage.set({'user': new UserModel()})
        }

        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new PersonalView({model: SessionStorage}));
        window.scrollTo(0, 0);

    },

    onChildviewThermoStart(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new ThermoView({model: SessionStorage}));
        window.scrollTo(0, 0);

    },


    onChildviewQuestionnaireFinish(childView){
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new DoneView({model: SessionStorage}));
        window.scrollTo(0, 0);

    },

    onChildviewMainStart(childView){
        this.triggerMethod('main:start', this)
    },


    onRender() {
        this.onChildviewThermoStart()
        //this.onChildviewQuestionnaireFinish()
    }
});