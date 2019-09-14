var Marionette = require('backbone.marionette');
var ResultTemplate = require('./results.hbs');
var resultStorage = require('../../collections/results');


module.exports = Marionette.View.extend({

    template: ResultTemplate,

    onAttach: function(){
        this.$el.find('.progress').progress();
    },

    templateContext : function(){
        resultArray = resultStorage.map(function(item){
            return [
                _.where(item.get('data'), {'answer':true}).length,
                _.where(item.get('data'), {'answer':false}).length
            ]
        }).reduce(function(a,b){
            return [a[0]+b[0], a[1]+b[1]];
        })
        return {
            'total': resultStorage.length,
            'total_yn': resultArray[0] + resultArray[1],
            'yes': resultArray[0],
            'no': resultArray[1]
        }
    }
});