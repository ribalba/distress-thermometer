// Vendors
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// Globals
window.jQuery = $;
var _ = require('underscore');

require('../semantic/dist/semantic.min.js');

//App
var App = require('./modules/main/app');
var app = new App();
app.start();



document.addEventListener('deviceready', function () {
    console.log("Ready")
    //Remove this method to stop OneSignal Debugging
    window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

    var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal
        .startInit("3ec27349-1873-4324-9f60-49fdeb45d640")
        .handleNotificationOpened(notificationOpenedCallback)
        .iOSSettings(iosSettings)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
        .endInit();

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });

    window.plugins.OneSignal.getPermissionSubscriptionState(function(status) {
        window.idapp = status.subscriptionStatus.userId;
    });


}, false);
