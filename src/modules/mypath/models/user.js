var Backbone = require('backbone');

module.exports =  Backbone.Model.extend({
	defaults: {
        fname: "",
        lname: ""
    },
});

// var userStorage = new User();
// userStorage.fetch();

// module.exports = userStorage;
