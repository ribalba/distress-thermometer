var Marionette = require('backbone.marionette');
var DoneTemplate = require('./done.hbs');
var resultStorage = require('../../collections/results');
var _= require('underscore');
var UserModel = require('../../models/user');
var $ = require('jquery');

module.exports = Marionette.View.extend({

    template: DoneTemplate,

    events: {
        'click .js-question': 'take_questionnaire',
        'click .js-upload': 'upload_results'
    },

    take_questionnaire: function(){
        this.triggerMethod('questionnaire:start', this);
    },

    upload_results: function(){
        var data = this.model.toJSON();
        data.user = data.user.toJSON();

        $.ajax({
            type: "POST",
            url: window.api_url + "/save",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (function(_this) {
                return function(data) {
                    $('body').toast({
                        message: 'Data uploaded'
                    });
                    _this.triggerMethod('splash:start', this)
                    _this.model.set('answers', [])
                    _this.model.set('other', "")
                    if(_this.model.get('save') !== true){
                        _this.model.set({'user': new UserModel()})
                    }

                };
              })(this),
            failure: function(errMsg) {
                alert("There was an error uploading. Please try again when you have network");
            }
        });
    },
});