var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

var DoneTemplate = require('./done.hbs');
var resultStorage = require('../../collections/results');
var _ = require('underscore');
var UserModel = require('../../models/user');
var $ = require('jquery');
var ProgressBar = require('progressbar.js')
var SessionStorage = require('../../models/session');
var event_triggers = require('../../../../../event_triggers.json')


const ResultView = Marionette.View.extend({
	template: _.template('<p><div><%- response.text %></div></p>'),
})

const NoResultView = Marionette.View.extend({
	template: _.template('<p>Thank you for taking the assessment.</p>'),
})


const ResultCollection = Marionette.CollectionView.extend({
	childView: ResultView,
	emptyView: NoResultView
});


module.exports = Marionette.View.extend({

	template: DoneTemplate,

	regions: {
		'result-container': '.result-container'
	},

	generate_text: function(){
		return _.compact(_.map(this.model.get("answers"), function(answer){
			if(_.has(event_triggers, answer.event)){
				return{
					answer: answer,
					response: event_triggers[answer.event]
				}
			}
		}))
	},

	events: {
		'click .js-done': 'take_questionnaire',
	},

	take_questionnaire: function () {
		this.triggerMethod('welcome:view', this);
	},



	onAttach: function () {

	},

	onRender: function () {

		// Check events
		result_set = this.generate_text()


		// Display messages
		result_uni = _.uniq(result_set, false, function(i){
			return i.response.text
		})

		this.showChildView('result-container', new ResultCollection({ collection: new Backbone.Collection(result_uni)}));


		// Upload
		upload_data={
			result_set: result_set,
			user: this.model.get('user')
		}


        dummp_data = '{"result_set":[{"answer":{"question":"quality of life","answer":1,"event":5,"heading":"quality of life","subheading":""},"response":{"text":"An oncology social worker will contact you at their earliest convenience. The number for the oncology social worker is (859)323-2798. If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I have fatigue","answer":"Very much","event":7,"heading":"Body","subheading":"Whole Body","value":5},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I have tingling in my hands or feet","answer":"Very much","event":1,"heading":"Body","subheading":"Whole Body","value":5},"response":{"text":"Please call the oncology nurses today at (859) 562-2386 (for CT surgery patients) or UK Markey Cancer Center (859) 257-4488 during regular business hours (M-F, 8am-5pm). If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mypath@launchhealth.org"]}},{"answer":{"question":"I have difficulty chewing or eating","answer":"Quite a bit","event":1,"heading":"Body","subheading":"Head, Face, Neck","value":4},"response":{"text":"Please call the oncology nurses today at (859) 562-2386 (for CT surgery patients) or UK Markey Cancer Center (859) 257-4488 during regular business hours (M-F, 8am-5pm). If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mypath@launchhealth.org"]}},{"answer":{"question":"I have had diarrhea for longer than 24 hours","answer":"Quite a bit","event":1,"heading":"Body","subheading":"Stomach and Gut","value":4},"response":{"text":"Please call the oncology nurses today at (859) 562-2386 (for CT surgery patients) or UK Markey Cancer Center (859) 257-4488 during regular business hours (M-F, 8am-5pm). If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mypath@launchhealth.org"]}},{"answer":{"question":"I have changes in sexual function and/or intimacy","answer":"Very much","event":7,"heading":"Body","subheading":"Other","value":5},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I have increased or decreased urination","answer":"Quite a bit","event":7,"heading":"Body","subheading":"Other","value":4},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"Felt left out","answer":"Often","event":7,"heading":"Mind","subheading":"Over the last 2 weeks, how often have you been bothered by the following problems:","value":3},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"Would you like to make an appointment to get spiritual or faith-based support?","answer":"Yes, I would","event":5,"heading":"Mind","subheading":"Over the last 2 weeks, how often have you been bothered by the following problems:","value":1},"response":{"text":"An oncology social worker will contact you at their earliest convenience. The number for the oncology social worker is (859)323-2798. If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I can bathe and dress myself","answer":"Strongly Disagree","event":7,"heading":"Living","subheading":"Household","value":5},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I can work/go to school","answer":"Disagree","event":7,"heading":"Living","subheading":"Household","value":4},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I have health insurance to cover me during my diagnosis","answer":"Strongly Disagree","event":7,"heading":"Living","subheading":"Finances","value":5},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"I have someone to help/support me while I am going through treatment","answer":"Disagree","event":7,"heading":"Living","subheading":"Relationships","value":4},"response":{"text":"Please discuss this with your provider at your next visit. A reminder will be entered into your medical record.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"Would you like to schedule time to talk with someone about coping with your diagnosis?","answer":"Yes, I would","event":5,"heading":"Extra","value":1},"response":{"text":"An oncology social worker will contact you at their earliest convenience. The number for the oncology social worker is (859)323-2798. If you need to speak with someone outside regular business hours, please call the UK Paging Operator at (859)323-5321.","email_to":["mccsocialworker@uky.edu","mypath@launchhealth.org"]}},{"answer":{"question":"Is there any other information you want to tell us about?","answer":"info tell us","event":8,"heading":"Extra"},"response":{"text":"","email_to":["mypath@launchhealth.org"]}}],"user":{"pseudonym":"Pseudonym","diagnosis":"Diagnosis","phone_number":"Phone Number","provider_phone_number":"Providers’ Phone Number","clinic_email":"test_b@xyz.com"}}'
        upload_data = JSON.parse(dummp_data)

        this.upload_results(upload_data)

	},

	upload_results: function (data) {

		$('.js-loading').addClass('active');

		data_upload = JSON.parse(localStorage.toupload || null) || []
		data_upload.push(data)

		$.ajax({
			type: "POST",
			url: window.api_url + "/save",
			data: JSON.stringify(data_upload),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			complete: (function(_this, _data_upload) {
				return function(data, status) {
					$('.js-loading').removeClass('active');

					if (status === 'success'){
						$('body').toast({
							message: 'Data uploaded'
						});

						_this.model.set('answers', [])
						_this.model.set('other', "")
						_this.model.set({'user': new UserModel()})

						localStorage.toupload = []

					}else{
						$(".js-error-uploading").removeClass('hidden')
						$(".js-error-uploading").addClass('visible')

						$('.js-loading').removeClass('active');

						localStorage.toupload = JSON.stringify(_data_upload);
					}
				};
				})(this, data_upload)
		})
	},
});
