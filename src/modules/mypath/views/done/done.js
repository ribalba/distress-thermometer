var Marionette = require('backbone.marionette');
var DoneTemplate = require('./done.hbs');
var resultStorage = require('../../collections/results');
var _= require('underscore');
var UserModel = require('../../models/user');
var $ = require('jquery');
var ProgressBar = require('progressbar.js')

module.exports = Marionette.View.extend({

    template: DoneTemplate,

    events: {
        'click .js-question': 'take_questionnaire',
        'click .js-upload': 'upload_results'
    },

    take_questionnaire: function(){
        this.triggerMethod('questionnaire:start', this);
    },

    onAttach: function(){
        this.$el.find('.js-loading').addClass('active');
        setTimeout(function () {
            $('.js-loading').removeClass('active');
          }, 1000);

        circle_options ={
            color: '#bc0fe0',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 3000,
            text: {
              autoStyleContainer: false
            },
            // Set default step function for all animate calls
            step: function(state, circle) {

              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }

            }
          }

        new ProgressBar.Circle('#ql1', circle_options).animate(0.9);

        new ProgressBar.Circle('#ql2', circle_options).animate(0.4);
        new ProgressBar.Circle('#ql3', circle_options).animate(0.7);

        optionsBar = {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: 3000,
            color: '#bc0fe0',
            trailColor: '#eee',
            trailWidth: 10,
            svgStyle: {width: '100%', height: '100%'}
        }
        new ProgressBar.Line('#progress1', optionsBar).animate(1.0);
        new ProgressBar.Line('#progress2', optionsBar).animate(0.2);
        new ProgressBar.Line('#progress3', optionsBar).animate(0.7);
        new ProgressBar.Line('#progress4', optionsBar).animate(0.1);
        new ProgressBar.Line('#progress5', optionsBar).animate(0.5);
        new ProgressBar.Line('#progress6', optionsBar).animate(0.2);
        new ProgressBar.Line('#progress7', optionsBar).animate(0.9);
        new ProgressBar.Line('#progress8', optionsBar).animate(0.5);
        new ProgressBar.Line('#progress9', optionsBar).animate(0.1);
        new ProgressBar.Line('#progress10', optionsBar).animate(0.8);
        new ProgressBar.Line('#progress11', optionsBar).animate(0.5);
        new ProgressBar.Line('#progress12', optionsBar).animate(0.8);

    },

    upload_results: function(){
        this.triggerMethod('main:start', this)
        // this.$el.find('.js-loading').addClass('active');
        // var data = this.model.toJSON();
        // data.user = data.user.toJSON();

        // $.ajax({
        //     type: "POST",
        //     url: window.api_url + "/save",
        //     data: JSON.stringify(data),
        //     contentType: "application/json; charset=utf-8",
        //     dataType: "json",
        //     complete: (function(_this) {
        //         return function(data, status) {
        //             _this.$el.find('.js-loading').removeClass('active');

        //             if (status === 'success'){
        //                 $('body').toast({
        //                     message: 'Data uploaded'
        //                 });
        //                 _this.model.set('answers', [])
        //                 _this.model.set('other', "")
        //                 if(_this.model.get('save') !== true){
        //                     _this.model.set({'user': new UserModel()})
        //                 }else{
        //                     um = _this.model.get('user')
        //                     um.set({
        //                         "alias": ""
        //                     });
        //                     _this.model.set('user',um)
        //                 }
        //                 _this.triggerMethod('main:start', this)
        //             }else{
        //                 alert("There was an error uploading. Please try again when you have network");
        //             }
        //         };
        //       })(this)
        // })
    },
});