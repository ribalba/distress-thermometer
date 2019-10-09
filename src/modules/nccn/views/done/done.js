var Marionette = require('backbone.marionette');
var DoneTemplate = require('./done.hbs');
var UserModel = require('../../models/user');
var $ = require('jquery');

module.exports = Marionette.View.extend({

    template: DoneTemplate,

    events: {
        'click .js-upload': 'upload_results'
    },

    upload_results: function(){
        this.$el.find('.js-loading').addClass('active');
        var data = this.model.toJSON();
//        data.user = data.user.toJSON();

        $.ajax({
            type: "POST",
            url: window.api_url + "/save",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            complete: (function(_this) {
                return function(data, status) {
                    _this.$el.find('.js-loading').removeClass('active');

                    if (status === 'success'){
                        $('body').toast({
                            message: 'Data uploaded'
                        });
                        _this.model.set('answers', [])
                        _this.model.set('other', "")
                        if(_this.model.get('save') !== true){
                            _this.model.set({'user': new UserModel()})
                        }

                        _this.triggerMethod('main:start', this)
                    }else{
                        alert("There was an error uploading. Please try again when you have network");
                    }
                };
              })(this)
        })
    },
});