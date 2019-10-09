var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var CategoryTemplate = require('./category.hbs');
var ItemTemplate = require('./item.hbs');
var HeaderTemplate = require('./header.hbs');
var ItemsTemplate = require('./items.hbs');
var _ = require('underscore');
var $ = require('jquery')
var questionCollection = require('../../collections/questions')
var SessionStorage = require('../../models/session');

var resultStorage = require('../../collections/results');
var resultModel = require('../../models/result');

const ItemView = Marionette.View.extend({
    template: ItemTemplate,

    onAttach: function () {
        this.$el.find('.ui.accordion').accordion();
        this.$el.find('.js-toggle').checkbox({
            onChecked: (function(_this) {
                return function() {
                    _this.$el.find('.ui.accordion').accordion('open', 0);
                };
              })(this),
              onUnchecked: (function(_this) {
                return function() {
                    _this.$el.find('.ui.accordion').accordion('close', 0);
                };
              })(this)
            })
        this.$el.find('.js-checkbox').checkbox({
            onChecked: (function(_this) {
                return function() {
                    key =  $(this).data('header')
                    value =  $(this).data('value')
                    _this.model.set({key, value})
                };
                })(this)
        });

    },

    templateContext: function(){
        return ({id: this.model.cid})
    }

});


const ItemGroup = Marionette.CollectionView.extend({
    template: _.template('<div class="hellos"></div>'),
    childView: ItemView,
    childViewContainer: '.hellos',
});



const ItemWrapper = Marionette.View.extend({

    template: ItemsTemplate,

    regions: {
        qg: '.js-items'
    },

    onRender: function () {
        this.showChildView('qg', new ItemGroup({ collection: new Backbone.Collection(this.model.get('questions')) }));
    }

})


const HeaderGroup = Marionette.CollectionView.extend({
    template: HeaderTemplate,
    childView: ItemWrapper,
    childViewContainer: '.js-header',
});

const CategoryWrapper = Marionette.View.extend({

    template: CategoryTemplate,

    regions: {
        qg: '.js-category'
    },

    onRender: function () {
        this.showChildView('qg', new HeaderGroup({ collection: new Backbone.Collection(this.model.get('questions')) }));
    }

})


module.exports = Marionette.View.extend({
    template: _.template('<div id="question_group"></div>'),

    regions: {
        qg: '#question_group'
    },

    events: {
        'click .js-next': 'show_next'
    },

    onAttach: function () {
        this.$el.find('.progress').progress({
            total: this.collection.length,
        });
    },

    show_next: function () {
        if (this.$el.find('textarea')){
            this.$el.find('textarea').each((function(_this) {
                return function(idx, li) {
                  if( $(li).val()){
                    key =  $(this).data('header')
                    value =  $(li).val()
                    _this.collection.at(_this.counter).set({key, value})
                  }
                };
              })(this));

            SessionStorage.set('other', this.$el.find('#inputtext').val() )
        }
        this.counter += 1
        if (this.collection.length === this.counter) {
            this.triggerMethod('questionnaire:finish', this);
        }else{
            this.render();
            window.scrollTo(0, 0);

        }
    },

    initialize: function (options) {
        this.collection = options.collection;
        this.counter = 0;
    },

    onRender: function () {
        this.showChildView('qg', new CategoryWrapper({ model: this.collection.at(this.counter) }));
        this.$el.find('.progress').progress({
            total: this.collection.length,
            value: this.counter
        });


    }

});
