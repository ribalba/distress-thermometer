var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var QuestionView = require('../questions/questions');
var DoneView = require('../done/done');
var PersonalView = require('../personal/personal');
var NoInternetView = require('../nointernet/nointernet');
var ThermoView = require('../thermo/thermo')
var WelcomeView = require('../welcome/welcome')
var SessionStorage = require('../../models/session');
var UserModel = require('../../models/user');
var questionCollection = require('../../collections/questions');
var clinicCollection = require('../../collections/clinics');
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
        this.showChildView('mainContainer', new QuestionView({ collection: new questionCollection(Datas.questions) }));
        window.scrollTo(0, 0);
    },

    onChildviewPersonalStart(childView) {
        if (!SessionStorage.has('user')) {
            SessionStorage.set({ 'user': new UserModel() })
        }

        clinicCollection.fetch({
            reset: true,
            success: (function (_this) {
                return function (collection, response, options) {
                    _this.detachChildView('mainContainer');
                    _this.clinic_collection = collection
                    _this.showChildView('mainContainer', new PersonalView({ model: SessionStorage, clinics: collection }));
                    window.scrollTo(0, 0);
                };
            })(this),
            error: (function (_this) {
                return function (collection, response, options) {
                    _this.detachChildView('mainContainer');

                    if (_this.clinic_collection) {
                        _this.showChildView('mainContainer', new PersonalView({ model: SessionStorage, clinics: _this.clinic_collection }));
                    } else {
                        _this.showChildView('mainContainer', new NoInternetView);
                    }
                    window.scrollTo(0, 0);
                };
            })(this)
        });
        //  this.detachChildView('mainContainer');
        //  this.showChildView('mainContainer', new PersonalView({model: SessionStorage}));
        //  window.scrollTo(0, 0);

    },

    onChildviewThermoStart(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new ThermoView({ model: SessionStorage }));
        window.scrollTo(0, 0);

    },


    onChildviewQuestionnaireFinish(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new DoneView({ model: SessionStorage }));
        window.scrollTo(0, 0);
    },

    onChildviewWelcomeView(childView) {
        this.detachChildView('mainContainer');
        this.showChildView('mainContainer', new WelcomeView({ model: SessionStorage }));
        window.scrollTo(0, 0);
    },


    onChildviewMainStart(childView) {
        this.triggerMethod('main:start', this)
    },


    onRender() {
        this.onChildviewQuestionnaireFinish()
        //this.onChildviewPersonalStart()
    }
});