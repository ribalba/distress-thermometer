# Hello to distress thermometer

This is a little phonegap app that queries the user for some simple yes/no questions
and saves the results. The input is customizable through the datas.json file.

# To development

We only use standard libraries and so development is quite simple.

First you need to checkout the code via git. `git clone <<reponame>>`. Once you
have done this please install all required libraries with `npm install`. Now you
preview the app with `./node_modules/.bin/grunt run`. This will open a browser
window and you can test the app. If you want to distribute it yourself you can
either build the html files with `$ grunt builddev` or `$ grunt buildprod`.

# Building the app with phonegap

To test if also everything works in phonegap you can use `./node_modules/.bin/phonegap serve`
and then test it either in the browser or with the phonegap mobile app. You will have to have
build the app before with `./node_modules/.bin/grunt builddev`

## Hint

We also publish a html version of the app under https://distress-thermometer.netlify.com/
This might have limited functionality but we will try to make it as functional as possible.

## Build Server

We are using the PhoneGap build service to build our app automatically. The newest version
can be downloaded under https://build.phonegap.com/apps/3706225/share

## Self Build

### iOS
You will need to install XCode with all the libraries and command line tools.
XCode can be found in your local app store. You will need a mac to develop for
the iPhone. A good guide can be found under:
https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html

Please don't forget to run `xcode-select --install` and
`npm install -g ios-deploy`

#### Android
Please install https://developer.android.com/studio/ and make sure you have
downloaded all the required libs and VM images.

You will also need to install the Java Development Kit and
https://gradle.org/install/

A good guide can be found under:
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

### First run of the project
As we don't check in the platform and plugin directories into git you need to install them locally. Run this command:

```
phonegap prepare
```
