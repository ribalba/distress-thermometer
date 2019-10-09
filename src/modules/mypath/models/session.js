var Backbone = require('backbone');

const SessionStorage =  Backbone.Model.extend({
	defaults: {
        answers: [],
        save:true
    },
});

 var session = new SessionStorage;

 module.exports = session;
