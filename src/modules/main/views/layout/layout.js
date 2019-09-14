var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var StartView = require('../start/start');
var QuestionView = require('../questions/questions');
var ResultsView = require('../results/results')

var questionCollection = require('../../collections/questions')
var Datas = require('../../../../../datas.json');

module.exports = Marionette.View.extend({
    template: LayoutTemplate,
    childViewEventPrefix: 'childview',

    regions: {
        mainContainer: '.main-container'
    },

    onChildviewQuestionnaireStart(childView) {
        this.showChildView('mainContainer', new QuestionView({collection: new questionCollection(Datas.questions)}));
    },
    onChildviewQuestionnaireFinish(childView) {
        this.showChildView('mainContainer', new StartView());
    },

    onChildviewResultsShow(childView) {
        this.showChildView('mainContainer', new ResultsView());
    },

    onChildviewStartShow(childView) {
        this.showChildView('mainContainer', new StartView());
    },

    onRender() {
        this.showChildView('mainContainer', new StartView());
    }
});