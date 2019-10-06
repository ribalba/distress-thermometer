(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "questions": [
        {
            "title": "Practical Problems",
            "items": [
                {
                    "title": "Child care"
                },
                {
                    "title": "Housing"
                },
                {
                    "title": "Insurance/ financial"
                },
                {
                    "title": "Transportation"
                },
                {
                    "title": "Work/ school"
                },
                {
                    "title": "Treatment decisions"
                }
            ]
        },
        {
            "title": "Family Problems",
            "items": [
                {
                    "title": "Dealing with children"
                },
                {
                    "title": "Dealing with partner"
                },
                {
                    "title": "Ability to have children"
                },
                {
                    "title": "Family health issues"
                }
            ]
        },
        {
            "title": "Emotional Problems",
            "items": [
                {
                    "title": "Depression"
                },
                {
                    "title": "Fears"
                },
                {
                    "title": "Nervousness"
                },
                {
                    "title": "Sadness"
                },
                {
                    "title": "Worry"
                },
                {
                    "title": "Loss of interest in usual activities"
                }
            ]
        },
        {
            "title": "Physical Problems",
            "items": [
                {
                    "title": "Appearance"
                },
                {
                    "title": "Bathing/ dressing"
                },
                {
                    "title": "Breathing"
                },
                {
                    "title": "Changes in urination"
                },
                {
                    "title": "Constipation"
                },
                {
                    "title": "Diarrhea"
                },
                {
                    "title": "Eating"
                },
                {
                    "title": "Fatigue"
                },
                {
                    "title": "Feeling swollen"
                },
                {
                    "title": "Fevers"
                },
                {
                    "title": "Getting around"
                },
                {
                    "title": "Indigestion"
                },
                {
                    "title": "Memory/ concentration"
                },
                {
                    "title": "Mouth sores"
                },
                {
                    "title": "Nausea"
                },
                {
                    "title": "Nose dry/ congested"
                },
                {
                    "title": "Pain"
                },
                {
                    "title": "Sexual"
                },
                {
                    "title": "Skin dry/ itchy"
                },
                {
                    "title": "Sleep"
                },
                {
                    "title": "Substance use"
                },
                {
                    "title": "Tingling in hands/ feet"
                }
            ]
        },
        {
            "title": "Other Problems",
            "items": [
                {
                    "title": "Spiritual/ Religious concerns",
                    "input": "What other problems are you facing?"
                }
            ]
        }
    ]
}
},{}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("backbone"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "backbone"], factory);
	else if(typeof exports === 'object')
		exports["Backbone.LocalStorage"] = factory(require("underscore"), require("backbone"));
	else
		root["Backbone.LocalStorage"] = factory(root["_"], root["Backbone"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guid = guid;
exports.getLocalStorage = getLocalStorage;
exports.getWindow = getWindow;

var _underscore = __webpack_require__(1);

/** Generates 4 random hex digits
 * @returns {string} 4 Random hex digits
*/
function s4() {
  var rand = (1 + Math.random()) * 0x10000;
  return (rand | 0).toString(16).substring(1);
}

/** Generate a pseudo-guid
 * @returns {string} A GUID-like string.
 */
function guid() {
  return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/** Returns the localStorage attribute for a model
 * @param {Model} model - Model to get localStorage
 * @returns {Storage} The localstorage
 */
function getLocalStorage(model) {
  return (0, _underscore.result)(model, 'localStorage') || (0, _underscore.result)(model.collection, 'localStorage');
}

/** Return the window or global object.
 * @returns {window} Window object
 */
function getWindow() {
  return (0, _underscore.isUndefined)(window) ? global : window;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = undefined;

var _backbone = __webpack_require__(2);

var _backbone2 = _interopRequireDefault(_backbone);

var _localstorage = __webpack_require__(4);

var _sync = __webpack_require__(5);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_backbone2.default.LocalStorage = _localstorage.LocalStorage;
var ajaxSync = _backbone2.default.sync;

/** Get the local or ajax sync call
 * @param {Model} model - Model to sync
 * @param {object} options - Options to pass, takes ajaxSync
 * @returns {function} The sync method that will be called
 */
function getSyncMethod(model) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var forceAjaxSync = options.ajaxSync;
  var hasLocalStorage = (0, _utils.getLocalStorage)(model);

  return !forceAjaxSync && hasLocalStorage ? _sync.sync : ajaxSync;
}

_backbone2.default.sync = function (method, model, options) {
  return getSyncMethod(model, options).apply(this, [method, model, options]);
};

exports.LocalStorage = _localstorage.LocalStorage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** The default serializer for transforming your saved data to localStorage */
var defaultSerializer = {

  /** Return a JSON-serialized string representation of item
   * @param {Object} item - The encoded model data
   * @returns {string} A JSON-encoded string
   */
  serialize: function serialize(item) {
    return (0, _underscore.isObject)(item) ? JSON.stringify(item) : item;
  },


  /** Custom deserialization for data. This includes a fix for an Android bug
   * which raises an error attempting to deserialize null
   * @param {string} data - JSON-encoded string
   * @returns {Object} The object result of parsing data
   */
  deserialize: function deserialize(data) {
    return data && JSON.parse(data);
  }
};

/** LocalStorage proxy class for Backbone models.
 * Usage:
 *   export const MyModel = Backbone.Model.extend({
 *     localStorage: new LocalStorage('MyModelName')
 *   });
 */

var LocalStorage = exports.LocalStorage = function () {
  function LocalStorage() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var serializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSerializer;

    _classCallCheck(this, LocalStorage);

    this.name = name;
    this.serializer = serializer;

    if (!this.localStorage) {
      throw 'Backbone.localStorage: Environment does not support localStorage.';
    }

    var store = this._getItem(this.name);
    this.records = store && store.split(',') || [];
  }

  /** Return the global localStorage variable
   * @returns {Object} Local Storage reference.
  */


  _createClass(LocalStorage, [{
    key: 'localStorage',
    value: function localStorage() {
      return (0, _utils.getWindow)().localStorage;
    }

    /** Save the current status to localStorage
     * @returns {undefined}
     */

  }, {
    key: 'save',
    value: function save() {
      this._setItem(this.name, this.records.join(','));
    }

    /** Add a new model with a unique GUID, if it doesn't already have its own ID
     * @param {Model} model - The Backbone Model to save to LocalStorage
     * @returns {Model} The saved model
     */

  }, {
    key: 'create',
    value: function create(model) {
      if (!model.id && model.id !== 0) {
        model.id = (0, _utils.guid)();
        model.set(model.idAttribute, model.id);
      }

      this._setItem(this._itemName(model.id), this.serializer.serialize(model));
      this.records.push(model.id.toString());
      this.save();

      return this.find(model);
    }

    /** Update an existing model in LocalStorage
     * @param {Model} model - The model to update
     * @returns {Model} The updated model
     */

  }, {
    key: 'update',
    value: function update(model) {
      this._setItem(this._itemName(model.id), this.serializer.serialize(model));

      var modelId = model.id.toString();

      if (!(0, _underscore.contains)(this.records, modelId)) {
        this.records.push(modelId);
        this.save();
      }
      return this.find(model);
    }

    /** Retrieve a model from local storage by model id
     * @param {Model} model - The Backbone Model to lookup
     * @returns {Model} The model from LocalStorage
     */

  }, {
    key: 'find',
    value: function find(model) {
      return this.serializer.deserialize(this._getItem(this._itemName(model.id)));
    }

    /** Return all models from LocalStorage
     * @returns {Array} The array of models stored
     */

  }, {
    key: 'findAll',
    value: function findAll() {
      var _this = this;

      return (0, _underscore.chain)(this.records).map(function (id) {
        return _this.serializer.deserialize(_this._getItem(_this._itemName(id)));
      }).filter(function (item) {
        return item != null;
      }).value();
    }

    /** Delete a model from `this.data`, returning it.
     * @param {Model} model - Model to delete
     * @returns {Model} Model removed from this.data
    */

  }, {
    key: 'destroy',
    value: function destroy(model) {
      this._removeItem(this._itemName(model.id));
      var newRecords = (0, _underscore.without)(this.records, model);

      this.records = newRecords;
      this.save();

      return model;
    }

    /** Clear localStorage for a collection
     * @returns {undefined}
     */

  }, {
    key: '_clear',
    value: function _clear() {
      var local = this.localStorage();
      var itemRe = new RegExp('^' + this.name + '-');

      // Remove id-tracking item (e.g., "foo").
      local.removeItem(this.name);

      // Match all data items (e.g., "foo-ID") and remove.
      for (var k in local) {
        if (itemRe.test(k)) {
          local.removeItem(k);
        }
      }

      this.records.length = 0;
    }

    /** Number of items in localStorage
     * @returns {integer} - Number of items
     */

  }, {
    key: '_storageSize',
    value: function _storageSize() {
      return this.localStorage().length;
    }

    /** Return the item from localStorage
     * @param {string} name - Name to lookup
     * @returns {string} Value from localStorage
     */

  }, {
    key: '_getItem',
    value: function _getItem(name) {
      return this.localStorage().getItem(name);
    }

    /** Return the item name to lookup in localStorage
     * @param {integer} id - Item ID
     * @returns {string} Item name
    */

  }, {
    key: '_itemName',
    value: function _itemName(id) {
      return this.name + '-' + id;
    }

    /** Proxy to the localStorage setItem value method
     * @param {string} key - LocalStorage key to set
     * @param {string} value - LocalStorage value to set
     * @returns {undefined}
     */

  }, {
    key: '_setItem',
    value: function _setItem(key, value) {
      this.localStorage().setItem(key, value);
    }

    /** Proxy to the localStorage removeItem method
     * @param {string} key - LocalStorage key to remove
     * @returns {undefined}
     */

  }, {
    key: '_removeItem',
    value: function _removeItem(key) {
      this.localStorage().removeItem(key);
    }
  }]);

  return LocalStorage;
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sync = sync;

var _backbone = __webpack_require__(2);

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get the Deferred status from $ if we have jQuery, otherwise use Backbone's
 *  @returns {boolean} - Whether the request was deferred
*/
function getDeferred() {
  if (_backbone2.default.$) {
    return (0, _underscore.result)(_backbone2.default.$, 'Deferred', false);
  }
  return (0, _underscore.result)(_backbone2.default, 'Deferred', false);
}

/** Override Backbone's `sync` method to run against localStorage
 * @param {string} method - One of read/create/update/delete
 * @param {Model} model - Backbone model to sync
 * @param {Object} options - Options object, use `ajaxSync: true` to run the
 *  operation against the server in which case, options will also be passed into
 *  `jQuery.ajax`
 * @returns {undefined}
 */
function sync(method, model) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var store = (0, _utils.getLocalStorage)(model);
  var resp = void 0,
      errorMessage = void 0;
  var syncDfd = getDeferred();

  try {
    switch (method) {
      case 'read':
        resp = (0, _underscore.isUndefined)(model.id) ? store.findAll() : store.find(model);
        break;
      case 'create':
        resp = store.create(model);
        break;
      case 'patch':
      case 'update':
        resp = store.update(model);
        break;
      case 'delete':
        resp = store.destroy(model);
        break;
    }
  } catch (error) {
    if (error.code === 22 && store._storageSize() === 0) {
      errorMessage = 'Private browsing is unsupported';
    } else {
      errorMessage = error.message;
    }
  }

  if (resp) {
    if (options.success) {
      options.success.call(model, resp, options);
    }
    if (syncDfd) {
      syncDfd.resolve(resp);
    }
  } else {
    errorMessage = errorMessage ? errorMessage : 'Record Not Found';

    if (options.error) {
      options.error.call(model, errorMessage, options);
    }
    if (syncDfd) {
      syncDfd.reject(errorMessage);
    }
  }

  // add compatibility with $.ajax
  // always execute callback for success and error
  if (options.complete) {
    options.complete.call(model, resp);
  }

  return syncDfd && syncDfd.promise();
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
},{"backbone":5,"underscore":9}],3:[function(require,module,exports){
/**
* @license
* MarionetteJS (Backbone.Marionette)
* ----------------------------------
* v4.1.2
*
* Copyright (c)2019 Derick Bailey, Muted Solutions, LLC.
* Distributed under MIT license
*
* http://marionettejs.com
*/


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('backbone'), require('underscore'), require('backbone.radio')) :
  typeof define === 'function' && define.amd ? define(['exports', 'backbone', 'underscore', 'backbone.radio'], factory) :
  (global = global || self, (function () {
    var current = global.Marionette;
    var exports = global.Marionette = {};
    factory(exports, global.Backbone, global._, global.Backbone.Radio);
    exports.noConflict = function () { global.Marionette = current; return exports; };
  }()));
}(this, function (exports, Backbone, _, Radio) { 'use strict';

  Backbone = Backbone && Backbone.hasOwnProperty('default') ? Backbone['default'] : Backbone;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  Radio = Radio && Radio.hasOwnProperty('default') ? Radio['default'] : Radio;

  var version = "4.1.2";

  //Internal utility for creating context style global utils
  var proxy = function proxy(method) {
    return function (context) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return method.apply(context, args);
    };
  };

  // Marionette.extend

  var extend = Backbone.Model.extend;

  // ----------------------
  // Pass in a mapping of events => functions or function names
  // and return a mapping of events => functions

  var normalizeMethods = function normalizeMethods(hash) {
    var _this = this;

    if (!hash) {
      return;
    }

    return _.reduce(hash, function (normalizedHash, method, name) {
      if (!_.isFunction(method)) {
        method = _this[method];
      }

      if (method) {
        normalizedHash[name] = method;
      }

      return normalizedHash;
    }, {});
  };

  // Error
  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number', 'url'];
  var MarionetteError = extend.call(Error, {
    urlRoot: "http://marionettejs.com/docs/v".concat(version, "/"),
    url: '',
    constructor: function constructor(options) {
      var error = Error.call(this, options.message);

      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));

      if (Error.captureStackTrace) {
        this.captureStackTrace();
      }

      this.url = this.urlRoot + this.url;
    },
    captureStackTrace: function captureStackTrace() {
      Error.captureStackTrace(this, MarionetteError);
    },
    toString: function toString() {
      return "".concat(this.name, ": ").concat(this.message, " See: ").concat(this.url);
    }
  });

  // Bind Entity Events & Unbind Entity Events

  function normalizeBindings(context, bindings) {
    if (!_.isObject(bindings)) {
      throw new MarionetteError({
        message: 'Bindings must be an object.',
        url: 'common.html#bindevents'
      });
    }

    return normalizeMethods.call(context, bindings);
  }

  function bindEvents(entity, bindings) {
    if (!entity || !bindings) {
      return this;
    }

    this.listenTo(entity, normalizeBindings(this, bindings));
    return this;
  }

  function unbindEvents(entity, bindings) {
    if (!entity) {
      return this;
    }

    if (!bindings) {
      this.stopListening(entity);
      return this;
    }

    this.stopListening(entity, normalizeBindings(this, bindings));
    return this;
  } // Export Public API

  // Bind/Unbind Radio Requests

  function normalizeBindings$1(context, bindings) {
    if (!_.isObject(bindings)) {
      throw new MarionetteError({
        message: 'Bindings must be an object.',
        url: 'common.html#bindrequests'
      });
    }

    return normalizeMethods.call(context, bindings);
  }

  function bindRequests(channel, bindings) {
    if (!channel || !bindings) {
      return this;
    }

    channel.reply(normalizeBindings$1(this, bindings), this);
    return this;
  }

  function unbindRequests(channel, bindings) {
    if (!channel) {
      return this;
    }

    if (!bindings) {
      channel.stopReplying(null, null, this);
      return this;
    }

    channel.stopReplying(normalizeBindings$1(this, bindings));
    return this;
  }

  // Marionette.getOption
  // --------------------
  // Retrieve an object, function or other value from the
  // object or its `options`, with `options` taking precedence.
  var getOption = function getOption(optionName) {
    if (!optionName) {
      return;
    }

    if (this.options && this.options[optionName] !== undefined) {
      return this.options[optionName];
    } else {
      return this[optionName];
    }
  };

  var mergeOptions = function mergeOptions(options, keys) {
    var _this = this;

    if (!options) {
      return;
    }

    _.each(keys, function (key) {
      var option = options[key];

      if (option !== undefined) {
        _this[key] = option;
      }
    });
  };

  // DOM Refresh

  function triggerMethodChildren(view, event, shouldTrigger) {
    if (!view._getImmediateChildren) {
      return;
    }

    _.each(view._getImmediateChildren(), function (child) {
      if (!shouldTrigger(child)) {
        return;
      }

      child.triggerMethod(event, child);
    });
  }

  function shouldTriggerAttach(view) {
    return !view._isAttached;
  }

  function shouldAttach(view) {
    if (!shouldTriggerAttach(view)) {
      return false;
    }

    view._isAttached = true;
    return true;
  }

  function shouldTriggerDetach(view) {
    return view._isAttached;
  }

  function shouldDetach(view) {
    view._isAttached = false;
    return true;
  }

  function triggerDOMRefresh(view) {
    if (view._isAttached && view._isRendered) {
      view.triggerMethod('dom:refresh', view);
    }
  }

  function triggerDOMRemove(view) {
    if (view._isAttached && view._isRendered) {
      view.triggerMethod('dom:remove', view);
    }
  }

  function handleBeforeAttach() {
    triggerMethodChildren(this, 'before:attach', shouldTriggerAttach);
  }

  function handleAttach() {
    triggerMethodChildren(this, 'attach', shouldAttach);
    triggerDOMRefresh(this);
  }

  function handleBeforeDetach() {
    triggerMethodChildren(this, 'before:detach', shouldTriggerDetach);
    triggerDOMRemove(this);
  }

  function handleDetach() {
    triggerMethodChildren(this, 'detach', shouldDetach);
  }

  function handleBeforeRender() {
    triggerDOMRemove(this);
  }

  function handleRender() {
    triggerDOMRefresh(this);
  } // Monitor a view's state, propagating attach/detach events to children and firing dom:refresh
  // whenever a rendered view is attached or an attached view is rendered.


  function monitorViewEvents(view) {
    if (view._areViewEventsMonitored || view.monitorViewEvents === false) {
      return;
    }

    view._areViewEventsMonitored = true;
    view.on({
      'before:attach': handleBeforeAttach,
      'attach': handleAttach,
      'before:detach': handleBeforeDetach,
      'detach': handleDetach,
      'before:render': handleBeforeRender,
      'render': handleRender
    });
  }

  // Trigger Method

  var splitter = /(^|:)(\w)/gi; // Only calc getOnMethodName once

  var methodCache = {}; // take the event section ("section1:section2:section3")
  // and turn it in to uppercase name onSection1Section2Section3

  function getEventName(match, prefix, eventName) {
    return eventName.toUpperCase();
  }

  var getOnMethodName = function getOnMethodName(event) {
    if (!methodCache[event]) {
      methodCache[event] = 'on' + event.replace(splitter, getEventName);
    }

    return methodCache[event];
  }; // Trigger an event and/or a corresponding method name. Examples:
  //
  // `this.triggerMethod("foo")` will trigger the "foo" event and
  // call the "onFoo" method.
  //
  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
  // call the "onFooBar" method.


  function triggerMethod(event) {
    // get the method name from the event name
    var methodName = getOnMethodName(event);
    var method = getOption.call(this, methodName);
    var result; // call the onMethodName if it exists

    if (_.isFunction(method)) {
      // pass all args, except the event name
      result = method.apply(this, _.drop(arguments));
    } // trigger the event


    this.trigger.apply(this, arguments);
    return result;
  }

  var Events = {
    triggerMethod: triggerMethod
  };

  var CommonMixin = {
    // Imports the "normalizeMethods" to transform hashes of
    // events=>function references/names to a hash of events=>function references
    normalizeMethods: normalizeMethods,
    _setOptions: function _setOptions(options, classOptions) {
      this.options = _.extend({}, _.result(this, 'options'), options);
      this.mergeOptions(options, classOptions);
    },
    // A handy way to merge passed-in options onto the instance
    mergeOptions: mergeOptions,
    // Enable getting options from this or this.options by name.
    getOption: getOption,
    // Enable binding view's events from another entity.
    bindEvents: bindEvents,
    // Enable unbinding view's events from another entity.
    unbindEvents: unbindEvents,
    // Enable binding view's requests.
    bindRequests: bindRequests,
    // Enable unbinding view's requests.
    unbindRequests: unbindRequests,
    triggerMethod: triggerMethod
  };

  _.extend(CommonMixin, Backbone.Events);

  var DestroyMixin = {
    _isDestroyed: false,
    isDestroyed: function isDestroyed() {
      return this._isDestroyed;
    },
    destroy: function destroy(options) {
      if (this._isDestroyed) {
        return this;
      }

      this.triggerMethod('before:destroy', this, options);
      this._isDestroyed = true;
      this.triggerMethod('destroy', this, options);
      this.stopListening();
      return this;
    }
  };

  // - channelName
  // - radioEvents
  // - radioRequests

  var RadioMixin = {
    _initRadio: function _initRadio() {
      var channelName = _.result(this, 'channelName');

      if (!channelName) {
        return;
      }
      /* istanbul ignore next */


      if (!Radio) {
        throw new MarionetteError({
          message: 'The dependency "backbone.radio" is missing.',
          url: 'backbone.radio.html#marionette-integration'
        });
      }

      var channel = this._channel = Radio.channel(channelName);

      var radioEvents = _.result(this, 'radioEvents');

      this.bindEvents(channel, radioEvents);

      var radioRequests = _.result(this, 'radioRequests');

      this.bindRequests(channel, radioRequests);
      this.on('destroy', this._destroyRadio);
    },
    _destroyRadio: function _destroyRadio() {
      this._channel.stopReplying(null, null, this);
    },
    getChannel: function getChannel() {
      return this._channel;
    }
  };

  // Object
  var ClassOptions = ['channelName', 'radioEvents', 'radioRequests']; // Object borrows many conventions and utilities from Backbone.

  var MarionetteObject = function MarionetteObject(options) {
    this._setOptions(options, ClassOptions);

    this.cid = _.uniqueId(this.cidPrefix);

    this._initRadio();

    this.initialize.apply(this, arguments);
  };

  MarionetteObject.extend = extend; // Object Methods
  // --------------

  _.extend(MarionetteObject.prototype, CommonMixin, DestroyMixin, RadioMixin, {
    cidPrefix: 'mno',
    // This is a noop method intended to be overridden
    initialize: function initialize() {}
  });

  // Implementation of the invoke method (http://underscorejs.org/#invoke) with support for
  var _invoke = _.invokeMap || _.invoke;

  // - behaviors
  // Takes care of getting the behavior class
  // given options and a key.
  // If a user passes in options.behaviorClass
  // default to using that.
  // If a user passes in a Behavior Class directly, use that
  // Otherwise an error is thrown

  function getBehaviorClass(options) {
    if (options.behaviorClass) {
      return {
        BehaviorClass: options.behaviorClass,
        options: options
      };
    } //treat functions as a Behavior constructor


    if (_.isFunction(options)) {
      return {
        BehaviorClass: options,
        options: {}
      };
    }

    throw new MarionetteError({
      message: 'Unable to get behavior class. A Behavior constructor should be passed directly or as behaviorClass property of options',
      url: 'marionette.behavior.html#defining-and-attaching-behaviors'
    });
  } // Iterate over the behaviors object, for each behavior
  // instantiate it and get its grouped behaviors.
  // This accepts a list of behaviors in either an object or array form


  function parseBehaviors(view, behaviors, allBehaviors) {
    return _.reduce(behaviors, function (reducedBehaviors, behaviorDefiniton) {
      var _getBehaviorClass = getBehaviorClass(behaviorDefiniton),
          BehaviorClass = _getBehaviorClass.BehaviorClass,
          options = _getBehaviorClass.options;

      var behavior = new BehaviorClass(options, view);
      reducedBehaviors.push(behavior);
      return parseBehaviors(view, _.result(behavior, 'behaviors'), reducedBehaviors);
    }, allBehaviors);
  }

  var BehaviorsMixin = {
    _initBehaviors: function _initBehaviors() {
      this._behaviors = parseBehaviors(this, _.result(this, 'behaviors'), []);
    },
    _getBehaviorTriggers: function _getBehaviorTriggers() {
      var triggers = _invoke(this._behaviors, '_getTriggers');

      return _.reduce(triggers, function (memo, _triggers) {
        return _.extend(memo, _triggers);
      }, {});
    },
    _getBehaviorEvents: function _getBehaviorEvents() {
      var events = _invoke(this._behaviors, '_getEvents');

      return _.reduce(events, function (memo, _events) {
        return _.extend(memo, _events);
      }, {});
    },
    // proxy behavior $el to the view's $el.
    _proxyBehaviorViewProperties: function _proxyBehaviorViewProperties() {
      _invoke(this._behaviors, 'proxyViewProperties');
    },
    // delegate modelEvents and collectionEvents
    _delegateBehaviorEntityEvents: function _delegateBehaviorEntityEvents() {
      _invoke(this._behaviors, 'delegateEntityEvents');
    },
    // undelegate modelEvents and collectionEvents
    _undelegateBehaviorEntityEvents: function _undelegateBehaviorEntityEvents() {
      _invoke(this._behaviors, 'undelegateEntityEvents');
    },
    _destroyBehaviors: function _destroyBehaviors(options) {
      // Call destroy on each behavior after
      // destroying the view.
      // This unbinds event listeners
      // that behaviors have registered for.
      _invoke(this._behaviors, 'destroy', options);
    },
    // Remove a behavior
    _removeBehavior: function _removeBehavior(behavior) {
      // Don't worry about the clean up if the view is destroyed
      if (this._isDestroyed) {
        return;
      } // Remove behavior-only triggers and events


      this.undelegate(".trig".concat(behavior.cid, " .").concat(behavior.cid));
      this._behaviors = _.without(this._behaviors, behavior);
    },
    _bindBehaviorUIElements: function _bindBehaviorUIElements() {
      _invoke(this._behaviors, 'bindUIElements');
    },
    _unbindBehaviorUIElements: function _unbindBehaviorUIElements() {
      _invoke(this._behaviors, 'unbindUIElements');
    },
    _triggerEventOnBehaviors: function _triggerEventOnBehaviors(eventName, view, options) {
      _invoke(this._behaviors, 'triggerMethod', eventName, view, options);
    }
  };

  // - collectionEvents
  // - modelEvents

  var DelegateEntityEventsMixin = {
    // Handle `modelEvents`, and `collectionEvents` configuration
    _delegateEntityEvents: function _delegateEntityEvents(model, collection) {
      if (model) {
        this._modelEvents = _.result(this, 'modelEvents');
        this.bindEvents(model, this._modelEvents);
      }

      if (collection) {
        this._collectionEvents = _.result(this, 'collectionEvents');
        this.bindEvents(collection, this._collectionEvents);
      }
    },
    // Remove any previously delegate entity events
    _undelegateEntityEvents: function _undelegateEntityEvents(model, collection) {
      if (this._modelEvents) {
        this.unbindEvents(model, this._modelEvents);
        delete this._modelEvents;
      }

      if (this._collectionEvents) {
        this.unbindEvents(collection, this._collectionEvents);
        delete this._collectionEvents;
      }
    },
    // Remove cached event handlers
    _deleteEntityEventHandlers: function _deleteEntityEventHandlers() {
      delete this._modelEvents;
      delete this._collectionEvents;
    }
  };

  // - template
  // - templateContext

  var TemplateRenderMixin = {
    // Internal method to render the template with the serialized data
    // and template context
    _renderTemplate: function _renderTemplate(template) {
      // Add in entity data and template context
      var data = this.mixinTemplateContext(this.serializeData()) || {}; // Render and add to el

      var html = this._renderHtml(template, data);

      if (typeof html !== 'undefined') {
        this.attachElContent(html);
      }
    },
    // Get the template for this view instance.
    // You can set a `template` attribute in the view definition
    // or pass a `template: TemplateFunction` parameter in
    // to the constructor options.
    getTemplate: function getTemplate() {
      return this.template;
    },
    // Mix in template context methods. Looks for a
    // `templateContext` attribute, which can either be an
    // object literal, or a function that returns an object
    // literal. All methods and attributes from this object
    // are copies to the object passed in.
    mixinTemplateContext: function mixinTemplateContext(serializedData) {
      var templateContext = _.result(this, 'templateContext');

      if (!templateContext) {
        return serializedData;
      }

      if (!serializedData) {
        return templateContext;
      }

      return _.extend({}, serializedData, templateContext);
    },
    // Serialize the view's model *or* collection, if
    // it exists, for the template
    serializeData: function serializeData() {
      // If we have a model, we serialize that
      if (this.model) {
        return this.serializeModel();
      } // Otherwise, we serialize the collection,
      // making it available under the `items` property


      if (this.collection) {
        return {
          items: this.serializeCollection()
        };
      }
    },
    // Prepares the special `model` property of a view
    // for being displayed in the template. Override this if
    // you need a custom transformation for your view's model
    serializeModel: function serializeModel() {
      return this.model.attributes;
    },
    // Serialize a collection
    serializeCollection: function serializeCollection() {
      return _.map(this.collection.models, function (model) {
        return model.attributes;
      });
    },
    // Renders the data into the template
    _renderHtml: function _renderHtml(template, data) {
      return template(data);
    },
    // Attaches the content of a given view.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent(html) {
    //   this.el.innerHTML = html;
    // }
    // ```
    attachElContent: function attachElContent(html) {
      this.Dom.setContents(this.el, html, this.$el);
    }
  };

  // Borrow event splitter from Backbone
  var delegateEventSplitter = /^(\S+)\s*(.*)$/; // Set event name to be namespaced using a unique index
  // to generate a non colliding event namespace
  // http://api.jquery.com/event.namespace/

  var getNamespacedEventName = function getNamespacedEventName(eventName, namespace) {
    var match = eventName.match(delegateEventSplitter);
    return "".concat(match[1], ".").concat(namespace, " ").concat(match[2]);
  };

  // Add Feature flags here
  // e.g. 'class' => false
  var FEATURES = {
    childViewEventPrefix: false,
    triggersStopPropagation: true,
    triggersPreventDefault: true,
    DEV_MODE: false
  };

  function isEnabled(name) {
    return !!FEATURES[name];
  }

  function setEnabled(name, state) {
    return FEATURES[name] = state;
  }

  // 'click:foo'

  function buildViewTrigger(view, triggerDef) {
    if (_.isString(triggerDef)) {
      triggerDef = {
        event: triggerDef
      };
    }

    var eventName = triggerDef.event;
    var shouldPreventDefault = !!triggerDef.preventDefault;

    if (isEnabled('triggersPreventDefault')) {
      shouldPreventDefault = triggerDef.preventDefault !== false;
    }

    var shouldStopPropagation = !!triggerDef.stopPropagation;

    if (isEnabled('triggersStopPropagation')) {
      shouldStopPropagation = triggerDef.stopPropagation !== false;
    }

    return function (event) {
      if (shouldPreventDefault) {
        event.preventDefault();
      }

      if (shouldStopPropagation) {
        event.stopPropagation();
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      view.triggerMethod.apply(view, [eventName, view, event].concat(args));
    };
  }

  var TriggersMixin = {
    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    _getViewTriggers: function _getViewTriggers(view, triggers) {
      var _this = this;

      // Configure the triggers, prevent default
      // action and stop propagation of DOM events
      return _.reduce(triggers, function (events, value, key) {
        key = getNamespacedEventName(key, "trig".concat(_this.cid));
        events[key] = buildViewTrigger(view, value);
        return events;
      }, {});
    }
  };

  // a given key for triggers and events
  // swaps the @ui with the associated selector.
  // Returns a new, non-mutated, parsed events hash.

  var _normalizeUIKeys = function normalizeUIKeys(hash, ui) {
    return _.reduce(hash, function (memo, val, key) {
      var normalizedKey = _normalizeUIString(key, ui);

      memo[normalizedKey] = val;
      return memo;
    }, {});
  };

  var uiRegEx = /@ui\.[a-zA-Z-_$0-9]*/g; // utility method for parsing @ui. syntax strings
  // into associated selector

  var _normalizeUIString = function normalizeUIString(uiString, ui) {
    return uiString.replace(uiRegEx, function (r) {
      return ui[r.slice(4)];
    });
  }; // allows for the use of the @ui. syntax within
  // a given value for regions
  // swaps the @ui with the associated selector


  var _normalizeUIValues = function normalizeUIValues(hash, ui, property) {
    _.each(hash, function (val, key) {
      if (_.isString(val)) {
        hash[key] = _normalizeUIString(val, ui);
      } else if (val) {
        var propertyVal = val[property];

        if (_.isString(propertyVal)) {
          val[property] = _normalizeUIString(propertyVal, ui);
        }
      }
    });

    return hash;
  };

  var UIMixin = {
    // normalize the keys of passed hash with the views `ui` selectors.
    // `{"@ui.foo": "bar"}`
    normalizeUIKeys: function normalizeUIKeys(hash) {
      var uiBindings = this._getUIBindings();

      return _normalizeUIKeys(hash, uiBindings);
    },
    // normalize the passed string with the views `ui` selectors.
    // `"@ui.bar"`
    normalizeUIString: function normalizeUIString(uiString) {
      var uiBindings = this._getUIBindings();

      return _normalizeUIString(uiString, uiBindings);
    },
    // normalize the values of passed hash with the views `ui` selectors.
    // `{foo: "@ui.bar"}`
    normalizeUIValues: function normalizeUIValues(hash, property) {
      var uiBindings = this._getUIBindings();

      return _normalizeUIValues(hash, uiBindings, property);
    },
    _getUIBindings: function _getUIBindings() {
      var uiBindings = _.result(this, '_uiBindings');

      return uiBindings || _.result(this, 'ui');
    },
    // This method binds the elements specified in the "ui" hash inside the view's code with
    // the associated jQuery selectors.
    _bindUIElements: function _bindUIElements() {
      var _this = this;

      if (!this.ui) {
        return;
      } // store the ui hash in _uiBindings so they can be reset later
      // and so re-rendering the view will be able to find the bindings


      if (!this._uiBindings) {
        this._uiBindings = this.ui;
      } // get the bindings result, as a function or otherwise


      var bindings = _.result(this, '_uiBindings'); // empty the ui so we don't have anything to start with


      this._ui = {}; // bind each of the selectors

      _.each(bindings, function (selector, key) {
        _this._ui[key] = _this.$(selector);
      });

      this.ui = this._ui;
    },
    _unbindUIElements: function _unbindUIElements() {
      var _this2 = this;

      if (!this.ui || !this._uiBindings) {
        return;
      } // delete all of the existing ui bindings


      _.each(this.ui, function ($el, name) {
        delete _this2.ui[name];
      }); // reset the ui element to the original bindings configuration


      this.ui = this._uiBindings;
      delete this._uiBindings;
      delete this._ui;
    },
    _getUI: function _getUI(name) {
      return this._ui[name];
    }
  };

  // DomApi

  function _getEl(el) {
    return el instanceof Backbone.$ ? el : Backbone.$(el);
  } // Static setter


  function setDomApi(mixin) {
    this.prototype.Dom = _.extend({}, this.prototype.Dom, mixin);
    return this;
  }
  var DomApi = {
    // Returns a new HTML DOM node instance
    createBuffer: function createBuffer() {
      return document.createDocumentFragment();
    },
    // Returns the document element for a given DOM element
    getDocumentEl: function getDocumentEl(el) {
      return el.ownerDocument.documentElement;
    },
    // Lookup the `selector` string
    // Selector may also be a DOM element
    // Returns an array-like object of nodes
    getEl: function getEl(selector) {
      return _getEl(selector);
    },
    // Finds the `selector` string with the el
    // Returns an array-like object of nodes
    findEl: function findEl(el, selector) {
      return _getEl(el).find(selector);
    },
    // Returns true if the el contains the node childEl
    hasEl: function hasEl(el, childEl) {
      return el.contains(childEl && childEl.parentNode);
    },
    // Detach `el` from the DOM without removing listeners
    detachEl: function detachEl(el) {
      var _$el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getEl(el);

      _$el.detach();
    },
    // Remove `oldEl` from the DOM and put `newEl` in its place
    replaceEl: function replaceEl(newEl, oldEl) {
      if (newEl === oldEl) {
        return;
      }

      var parent = oldEl.parentNode;

      if (!parent) {
        return;
      }

      parent.replaceChild(newEl, oldEl);
    },
    // Swaps the location of `el1` and `el2` in the DOM
    swapEl: function swapEl(el1, el2) {
      if (el1 === el2) {
        return;
      }

      var parent1 = el1.parentNode;
      var parent2 = el2.parentNode;

      if (!parent1 || !parent2) {
        return;
      }

      var next1 = el1.nextSibling;
      var next2 = el2.nextSibling;
      parent1.insertBefore(el2, next1);
      parent2.insertBefore(el1, next2);
    },
    // Replace the contents of `el` with the HTML string of `html`
    setContents: function setContents(el, html) {
      var _$el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getEl(el);

      _$el.html(html);
    },
    // Takes the DOM node `el` and appends the DOM node `contents`
    // to the end of the element's contents.
    appendContents: function appendContents(el, contents) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$_$el = _ref._$el,
          _$el = _ref$_$el === void 0 ? _getEl(el) : _ref$_$el,
          _ref$_$contents = _ref._$contents,
          _$contents = _ref$_$contents === void 0 ? _getEl(contents) : _ref$_$contents;

      _$el.append(_$contents);
    },
    // Does the el have child nodes
    hasContents: function hasContents(el) {
      return !!el && el.hasChildNodes();
    },
    // Remove the inner contents of `el` from the DOM while leaving
    // `el` itself in the DOM.
    detachContents: function detachContents(el) {
      var _$el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getEl(el);

      _$el.contents().detach();
    }
  };

  // ViewMixin
  // - behaviors
  // - childViewEventPrefix
  // - childViewEvents
  // - childViewTriggers
  // - collectionEvents
  // - modelEvents
  // - triggers
  // - ui

  var ViewMixin = {
    Dom: DomApi,
    _isElAttached: function _isElAttached() {
      return !!this.el && this.Dom.hasEl(this.Dom.getDocumentEl(this.el), this.el);
    },
    supportsRenderLifecycle: true,
    supportsDestroyLifecycle: true,
    _isDestroyed: false,
    isDestroyed: function isDestroyed() {
      return !!this._isDestroyed;
    },
    _isRendered: false,
    isRendered: function isRendered() {
      return !!this._isRendered;
    },
    _isAttached: false,
    isAttached: function isAttached() {
      return !!this._isAttached;
    },
    // Overriding Backbone.View's `delegateEvents` to handle
    // `events` and `triggers`
    delegateEvents: function delegateEvents(events) {
      this._proxyBehaviorViewProperties();

      this._buildEventProxies();

      var combinedEvents = _.extend({}, this._getBehaviorEvents(), this._getEvents(events), this._getBehaviorTriggers(), this._getTriggers());

      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
      return this;
    },
    // Allows Backbone.View events to utilize `@ui.` selectors
    _getEvents: function _getEvents(events) {
      if (events) {
        return this.normalizeUIKeys(events);
      }

      if (!this.events) {
        return;
      }

      return this.normalizeUIKeys(_.result(this, 'events'));
    },
    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    _getTriggers: function _getTriggers() {
      if (!this.triggers) {
        return;
      } // Allow `triggers` to be configured as a function


      var triggers = this.normalizeUIKeys(_.result(this, 'triggers')); // Configure the triggers, prevent default
      // action and stop propagation of DOM events

      return this._getViewTriggers(this, triggers);
    },
    // Handle `modelEvents`, and `collectionEvents` configuration
    delegateEntityEvents: function delegateEntityEvents() {
      this._delegateEntityEvents(this.model, this.collection); // bind each behaviors model and collection events


      this._delegateBehaviorEntityEvents();

      return this;
    },
    // Handle unbinding `modelEvents`, and `collectionEvents` configuration
    undelegateEntityEvents: function undelegateEntityEvents() {
      this._undelegateEntityEvents(this.model, this.collection); // unbind each behaviors model and collection events


      this._undelegateBehaviorEntityEvents();

      return this;
    },
    // Handle destroying the view and its children.
    destroy: function destroy(options) {
      if (this._isDestroyed || this._isDestroying) {
        return this;
      }

      this._isDestroying = true;
      var shouldTriggerDetach = this._isAttached && !this._disableDetachEvents;
      this.triggerMethod('before:destroy', this, options);

      if (shouldTriggerDetach) {
        this.triggerMethod('before:detach', this);
      } // unbind UI elements


      this.unbindUIElements(); // remove the view from the DOM

      this._removeElement();

      if (shouldTriggerDetach) {
        this._isAttached = false;
        this.triggerMethod('detach', this);
      } // remove children after the remove to prevent extra paints


      this._removeChildren();

      this._isDestroyed = true;
      this._isRendered = false; // Destroy behaviors after _isDestroyed flag

      this._destroyBehaviors(options);

      this._deleteEntityEventHandlers();

      this.triggerMethod('destroy', this, options);

      this._triggerEventOnBehaviors('destroy', this, options);

      this.stopListening();
      return this;
    },
    // Equates to this.$el.remove
    _removeElement: function _removeElement() {
      this.$el.off().removeData();
      this.Dom.detachEl(this.el, this.$el);
    },
    // This method binds the elements specified in the "ui" hash
    bindUIElements: function bindUIElements() {
      this._bindUIElements();

      this._bindBehaviorUIElements();

      return this;
    },
    // This method unbinds the elements specified in the "ui" hash
    unbindUIElements: function unbindUIElements() {
      this._unbindUIElements();

      this._unbindBehaviorUIElements();

      return this;
    },
    getUI: function getUI(name) {
      return this._getUI(name);
    },
    // Cache `childViewEvents` and `childViewTriggers`
    _buildEventProxies: function _buildEventProxies() {
      this._childViewEvents = this.normalizeMethods(_.result(this, 'childViewEvents'));
      this._childViewTriggers = _.result(this, 'childViewTriggers');
      this._eventPrefix = this._getEventPrefix();
    },
    _getEventPrefix: function _getEventPrefix() {
      var defaultPrefix = isEnabled('childViewEventPrefix') ? 'childview' : false;

      var prefix = _.result(this, 'childViewEventPrefix', defaultPrefix);

      return prefix === false ? prefix : prefix + ':';
    },
    _proxyChildViewEvents: function _proxyChildViewEvents(view) {
      if (this._childViewEvents || this._childViewTriggers || this._eventPrefix) {
        this.listenTo(view, 'all', this._childViewEventHandler);
      }
    },
    _childViewEventHandler: function _childViewEventHandler(eventName) {
      var childViewEvents = this._childViewEvents; // call collectionView childViewEvent if defined

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (childViewEvents && childViewEvents[eventName]) {
        childViewEvents[eventName].apply(this, args);
      } // use the parent view's proxyEvent handlers


      var childViewTriggers = this._childViewTriggers; // Call the event with the proxy name on the parent layout

      if (childViewTriggers && childViewTriggers[eventName]) {
        this.triggerMethod.apply(this, [childViewTriggers[eventName]].concat(args));
      }

      if (this._eventPrefix) {
        this.triggerMethod.apply(this, [this._eventPrefix + eventName].concat(args));
      }
    }
  };

  _.extend(ViewMixin, BehaviorsMixin, CommonMixin, DelegateEntityEventsMixin, TemplateRenderMixin, TriggersMixin, UIMixin);

  function renderView(view) {
    if (view._isRendered) {
      return;
    }

    if (!view.supportsRenderLifecycle) {
      view.triggerMethod('before:render', view);
    }

    view.render();
    view._isRendered = true;

    if (!view.supportsRenderLifecycle) {
      view.triggerMethod('render', view);
    }
  }
  function destroyView(view, disableDetachEvents) {
    if (view.destroy) {
      // Attach flag for public destroy function internal check
      view._disableDetachEvents = disableDetachEvents;
      view.destroy();
      return;
    } // Destroy for non-Marionette Views


    if (!view.supportsDestroyLifecycle) {
      view.triggerMethod('before:destroy', view);
    }

    var shouldTriggerDetach = view._isAttached && !disableDetachEvents;

    if (shouldTriggerDetach) {
      view.triggerMethod('before:detach', view);
    }

    view.remove();

    if (shouldTriggerDetach) {
      view._isAttached = false;
      view.triggerMethod('detach', view);
    }

    view._isDestroyed = true;

    if (!view.supportsDestroyLifecycle) {
      view.triggerMethod('destroy', view);
    }
  }

  // Region
  var classErrorName = 'RegionError';
  var ClassOptions$1 = ['allowMissingEl', 'parentEl', 'replaceElement'];

  var Region = function Region(options) {
    this._setOptions(options, ClassOptions$1);

    this.cid = _.uniqueId(this.cidPrefix); // getOption necessary because options.el may be passed as undefined

    this._initEl = this.el = this.getOption('el'); // Handle when this.el is passed in as a $ wrapped element.

    this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
    this.$el = this._getEl(this.el);
    this.initialize.apply(this, arguments);
  };

  Region.extend = extend;
  Region.setDomApi = setDomApi; // Region Methods
  // --------------

  _.extend(Region.prototype, CommonMixin, {
    Dom: DomApi,
    cidPrefix: 'mnr',
    replaceElement: false,
    _isReplaced: false,
    _isSwappingView: false,
    // This is a noop method intended to be overridden
    initialize: function initialize() {},
    // Displays a view instance inside of the region. If necessary handles calling the `render`
    // method for you. Reads content directly from the `el` attribute.
    show: function show(view, options) {
      if (!this._ensureElement(options)) {
        return;
      }

      view = this._getView(view, options);

      if (view === this.currentView) {
        return this;
      }

      if (view._isShown) {
        throw new MarionetteError({
          name: classErrorName,
          message: 'View is already shown in a Region or CollectionView',
          url: 'marionette.region.html#showing-a-view'
        });
      }

      this._isSwappingView = !!this.currentView;
      this.triggerMethod('before:show', this, view, options); // Assume an attached view is already in the region for pre-existing DOM

      if (this.currentView || !view._isAttached) {
        this.empty(options);
      }

      this._setupChildView(view);

      this.currentView = view;
      renderView(view);

      this._attachView(view, options);

      this.triggerMethod('show', this, view, options);
      this._isSwappingView = false;
      return this;
    },
    _getEl: function _getEl(el) {
      if (!el) {
        throw new MarionetteError({
          name: classErrorName,
          message: 'An "el" must be specified for a region.',
          url: 'marionette.region.html#additional-options'
        });
      }

      return this.getEl(el);
    },
    _setEl: function _setEl() {
      this.$el = this._getEl(this.el);

      if (this.$el.length) {
        this.el = this.$el[0];
      } // Make sure the $el contains only the el


      if (this.$el.length > 1) {
        this.$el = this.Dom.getEl(this.el);
      }
    },
    // Set the `el` of the region and move any current view to the new `el`.
    _setElement: function _setElement(el) {
      if (el === this.el) {
        return this;
      }

      var shouldReplace = this._isReplaced;

      this._restoreEl();

      this.el = el;

      this._setEl();

      if (this.currentView) {
        var view = this.currentView;

        if (shouldReplace) {
          this._replaceEl(view);
        } else {
          this.attachHtml(view);
        }
      }

      return this;
    },
    _setupChildView: function _setupChildView(view) {
      monitorViewEvents(view);

      this._proxyChildViewEvents(view); // We need to listen for if a view is destroyed in a way other than through the region.
      // If this happens we need to remove the reference to the currentView since once a view
      // has been destroyed we can not reuse it.


      view.on('destroy', this._empty, this);
    },
    _proxyChildViewEvents: function _proxyChildViewEvents(view) {
      var parentView = this._parentView;

      if (!parentView) {
        return;
      }

      parentView._proxyChildViewEvents(view);
    },
    // If the regions parent view is not monitoring its attach/detach events
    _shouldDisableMonitoring: function _shouldDisableMonitoring() {
      return this._parentView && this._parentView.monitorViewEvents === false;
    },
    _isElAttached: function _isElAttached() {
      return this.Dom.hasEl(this.Dom.getDocumentEl(this.el), this.el);
    },
    _attachView: function _attachView(view) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          replaceElement = _ref.replaceElement;

      var shouldTriggerAttach = !view._isAttached && this._isElAttached() && !this._shouldDisableMonitoring();
      var shouldReplaceEl = typeof replaceElement === 'undefined' ? !!_.result(this, 'replaceElement') : !!replaceElement;

      if (shouldTriggerAttach) {
        view.triggerMethod('before:attach', view);
      }

      if (shouldReplaceEl) {
        this._replaceEl(view);
      } else {
        this.attachHtml(view);
      }

      if (shouldTriggerAttach) {
        view._isAttached = true;
        view.triggerMethod('attach', view);
      } // Corresponds that view is shown in a marionette Region or CollectionView


      view._isShown = true;
    },
    _ensureElement: function _ensureElement() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!_.isObject(this.el)) {
        this._setEl();
      }

      if (!this.$el || this.$el.length === 0) {
        var allowMissingEl = typeof options.allowMissingEl === 'undefined' ? !!_.result(this, 'allowMissingEl') : !!options.allowMissingEl;

        if (allowMissingEl) {
          return false;
        } else {
          throw new MarionetteError({
            name: classErrorName,
            message: "An \"el\" must exist in DOM for this region ".concat(this.cid),
            url: 'marionette.region.html#additional-options'
          });
        }
      }

      return true;
    },
    _getView: function _getView(view) {
      if (!view) {
        throw new MarionetteError({
          name: classErrorName,
          message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.',
          url: 'marionette.region.html#showing-a-view'
        });
      }

      if (view._isDestroyed) {
        throw new MarionetteError({
          name: classErrorName,
          message: "View (cid: \"".concat(view.cid, "\") has already been destroyed and cannot be used."),
          url: 'marionette.region.html#showing-a-view'
        });
      }

      if (view instanceof Backbone.View) {
        return view;
      }

      var viewOptions = this._getViewOptions(view);

      return new View(viewOptions);
    },
    // This allows for a template or a static string to be
    // used as a template
    _getViewOptions: function _getViewOptions(viewOptions) {
      if (_.isFunction(viewOptions)) {
        return {
          template: viewOptions
        };
      }

      if (_.isObject(viewOptions)) {
        return viewOptions;
      }

      var template = function template() {
        return viewOptions;
      };

      return {
        template: template
      };
    },
    // Override this method to change how the region finds the DOM element that it manages. Return
    // a jQuery selector object scoped to a provided parent el or the document if none exists.
    getEl: function getEl(el) {
      var context = _.result(this, 'parentEl');

      if (context && _.isString(el)) {
        return this.Dom.findEl(context, el);
      }

      return this.Dom.getEl(el);
    },
    _replaceEl: function _replaceEl(view) {
      // Always restore the el to ensure the regions el is present before replacing
      this._restoreEl();

      view.on('before:destroy', this._restoreEl, this);
      this.Dom.replaceEl(view.el, this.el);
      this._isReplaced = true;
    },
    // Restore the region's element in the DOM.
    _restoreEl: function _restoreEl() {
      // There is nothing to replace
      if (!this._isReplaced) {
        return;
      }

      var view = this.currentView;

      if (!view) {
        return;
      }

      this._detachView(view);

      this._isReplaced = false;
    },
    // Check to see if the region's el was replaced.
    isReplaced: function isReplaced() {
      return !!this._isReplaced;
    },
    // Check to see if a view is being swapped by another
    isSwappingView: function isSwappingView() {
      return !!this._isSwappingView;
    },
    // Override this method to change how the new view is appended to the `$el` that the
    // region is managing
    attachHtml: function attachHtml(view) {
      this.Dom.appendContents(this.el, view.el, {
        _$el: this.$el,
        _$contents: view.$el
      });
    },
    // Destroy the current view, if there is one. If there is no current view,
    // it will detach any html inside the region's `el`.
    empty: function empty() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        allowMissingEl: true
      };
      var view = this.currentView; // If there is no view in the region we should only detach current html

      if (!view) {
        if (this._ensureElement(options)) {
          this.detachHtml();
        }

        return this;
      }

      this._empty(view, true);

      return this;
    },
    _empty: function _empty(view, shouldDestroy) {
      view.off('destroy', this._empty, this);
      this.triggerMethod('before:empty', this, view);

      this._restoreEl();

      delete this.currentView;

      if (!view._isDestroyed) {
        if (shouldDestroy) {
          this.removeView(view);
        } else {
          this._detachView(view);
        }

        view._isShown = false;

        this._stopChildViewEvents(view);
      }

      this.triggerMethod('empty', this, view);
    },
    _stopChildViewEvents: function _stopChildViewEvents(view) {
      var parentView = this._parentView;

      if (!parentView) {
        return;
      }

      this._parentView.stopListening(view);
    },
    // Non-Marionette safe view.destroy
    destroyView: function destroyView$1(view) {
      if (view._isDestroyed) {
        return view;
      }

      destroyView(view, this._shouldDisableMonitoring());

      return view;
    },
    // Override this method to determine what happens when the view
    // is removed from the region when the view is not being detached
    removeView: function removeView(view) {
      this.destroyView(view);
    },
    // Empties the Region without destroying the view
    // Returns the detached view
    detachView: function detachView() {
      var view = this.currentView;

      if (!view) {
        return;
      }

      this._empty(view);

      return view;
    },
    _detachView: function _detachView(view) {
      var shouldTriggerDetach = view._isAttached && !this._shouldDisableMonitoring();
      var shouldRestoreEl = this._isReplaced;

      if (shouldTriggerDetach) {
        view.triggerMethod('before:detach', view);
      }

      if (shouldRestoreEl) {
        this.Dom.replaceEl(this.el, view.el);
      } else {
        this.detachHtml();
      }

      if (shouldTriggerDetach) {
        view._isAttached = false;
        view.triggerMethod('detach', view);
      }
    },
    // Override this method to change how the region detaches current content
    detachHtml: function detachHtml() {
      this.Dom.detachContents(this.el, this.$el);
    },
    // Checks whether a view is currently present within the region. Returns `true` if there is
    // and `false` if no view is present.
    hasView: function hasView() {
      return !!this.currentView;
    },
    // Reset the region by destroying any existing view and clearing out the cached `$el`.
    // The next time a view is shown via this region, the region will re-query the DOM for
    // the region's `el`.
    reset: function reset(options) {
      this.empty(options);
      this.el = this._initEl;
      delete this.$el;
      return this;
    },
    _isDestroyed: false,
    isDestroyed: function isDestroyed() {
      return this._isDestroyed;
    },
    // Destroy the region, remove any child view
    // and remove the region from any associated view
    destroy: function destroy(options) {
      if (this._isDestroyed) {
        return this;
      }

      this.triggerMethod('before:destroy', this, options);
      this._isDestroyed = true;
      this.reset(options);

      if (this._name) {
        this._parentView._removeReferences(this._name);
      }

      delete this._parentView;
      delete this._name;
      this.triggerMethod('destroy', this, options);
      this.stopListening();
      return this;
    }
  });

  function buildRegion (definition, defaults) {
    if (definition instanceof Region) {
      return definition;
    }

    if (_.isString(definition)) {
      return buildRegionFromObject(defaults, {
        el: definition
      });
    }

    if (_.isFunction(definition)) {
      return buildRegionFromObject(defaults, {
        regionClass: definition
      });
    }

    if (_.isObject(definition)) {
      return buildRegionFromObject(defaults, definition);
    }

    throw new MarionetteError({
      message: 'Improper region configuration type.',
      url: 'marionette.region.html#defining-regions'
    });
  }

  function buildRegionFromObject(defaults, definition) {
    var options = _.extend({}, defaults, definition);

    var RegionClass = options.regionClass;
    delete options.regionClass;
    return new RegionClass(options);
  }

  // - regions
  // - regionClass

  var RegionsMixin = {
    regionClass: Region,
    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on this View.
    _initRegions: function _initRegions() {
      // init regions hash
      this.regions = this.regions || {};
      this._regions = {};
      this.addRegions(_.result(this, 'regions'));
    },
    // Internal method to re-initialize all of the regions by updating
    // the `el` that they point to
    _reInitRegions: function _reInitRegions() {
      _invoke(this._regions, 'reset');
    },
    // Add a single region, by name, to the View
    addRegion: function addRegion(name, definition) {
      var regions = {};
      regions[name] = definition;
      return this.addRegions(regions)[name];
    },
    // Add multiple regions as a {name: definition, name2: def2} object literal
    addRegions: function addRegions(regions) {
      // If there's nothing to add, stop here.
      if (_.isEmpty(regions)) {
        return;
      } // Normalize region selectors hash to allow
      // a user to use the @ui. syntax.


      regions = this.normalizeUIValues(regions, 'el'); // Add the regions definitions to the regions property

      this.regions = _.extend({}, this.regions, regions);
      return this._addRegions(regions);
    },
    // internal method to build and add regions
    _addRegions: function _addRegions(regionDefinitions) {
      var _this = this;

      var defaults = {
        regionClass: this.regionClass,
        parentEl: _.partial(_.result, this, 'el')
      };
      return _.reduce(regionDefinitions, function (regions, definition, name) {
        regions[name] = buildRegion(definition, defaults);

        _this._addRegion(regions[name], name);

        return regions;
      }, {});
    },
    _addRegion: function _addRegion(region, name) {
      this.triggerMethod('before:add:region', this, name, region);
      region._parentView = this;
      region._name = name;
      this._regions[name] = region;
      this.triggerMethod('add:region', this, name, region);
    },
    // Remove a single region from the View, by name
    removeRegion: function removeRegion(name) {
      var region = this._regions[name];

      this._removeRegion(region, name);

      return region;
    },
    // Remove all regions from the View
    removeRegions: function removeRegions() {
      var regions = this._getRegions();

      _.each(this._regions, this._removeRegion.bind(this));

      return regions;
    },
    _removeRegion: function _removeRegion(region, name) {
      this.triggerMethod('before:remove:region', this, name, region);
      region.destroy();
      this.triggerMethod('remove:region', this, name, region);
    },
    // Called in a region's destroy
    _removeReferences: function _removeReferences(name) {
      delete this.regions[name];
      delete this._regions[name];
    },
    // Empty all regions in the region manager, but
    // leave them attached
    emptyRegions: function emptyRegions() {
      var regions = this.getRegions();

      _invoke(regions, 'empty');

      return regions;
    },
    // Checks to see if view contains region
    // Accepts the region name
    // hasRegion('main')
    hasRegion: function hasRegion(name) {
      return !!this.getRegion(name);
    },
    // Provides access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function getRegion(name) {
      if (!this._isRendered) {
        this.render();
      }

      return this._regions[name];
    },
    _getRegions: function _getRegions() {
      return _.clone(this._regions);
    },
    // Get all regions
    getRegions: function getRegions() {
      if (!this._isRendered) {
        this.render();
      }

      return this._getRegions();
    },
    showChildView: function showChildView(name, view, options) {
      var region = this.getRegion(name);
      region.show(view, options);
      return view;
    },
    detachChildView: function detachChildView(name) {
      return this.getRegion(name).detachView();
    },
    getChildView: function getChildView(name) {
      return this.getRegion(name).currentView;
    }
  };

  // Static setter for the renderer
  function setRenderer(renderer) {
    this.prototype._renderHtml = renderer;
    return this;
  }

  // View
  var ClassOptions$2 = ['behaviors', 'childViewEventPrefix', 'childViewEvents', 'childViewTriggers', 'collectionEvents', 'events', 'modelEvents', 'regionClass', 'regions', 'template', 'templateContext', 'triggers', 'ui']; // Used by _getImmediateChildren

  function childReducer(children, region) {
    if (region.currentView) {
      children.push(region.currentView);
    }

    return children;
  } // The standard view. Includes view events, automatic rendering
  // templates, nested views, and more.


  var View = Backbone.View.extend({
    constructor: function constructor(options) {
      this._setOptions(options, ClassOptions$2);

      monitorViewEvents(this);

      this._initBehaviors();

      this._initRegions();

      Backbone.View.prototype.constructor.apply(this, arguments);
      this.delegateEntityEvents();

      this._triggerEventOnBehaviors('initialize', this, options);
    },
    // Overriding Backbone.View's `setElement` to handle
    // if an el was previously defined. If so, the view might be
    // rendered or attached on setElement.
    setElement: function setElement() {
      Backbone.View.prototype.setElement.apply(this, arguments);
      this._isRendered = this.Dom.hasContents(this.el);
      this._isAttached = this._isElAttached();

      if (this._isRendered) {
        this.bindUIElements();
      }

      return this;
    },
    // If a template is available, renders it into the view's `el`
    // Re-inits regions and binds UI.
    render: function render() {
      var template = this.getTemplate();

      if (template === false || this._isDestroyed) {
        return this;
      }

      this.triggerMethod('before:render', this); // If this is not the first render call, then we need to
      // re-initialize the `el` for each region

      if (this._isRendered) {
        this._reInitRegions();
      }

      this._renderTemplate(template);

      this.bindUIElements();
      this._isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },
    // called by ViewMixin destroy
    _removeChildren: function _removeChildren() {
      this.removeRegions();
    },
    _getImmediateChildren: function _getImmediateChildren() {
      return _.reduce(this._regions, childReducer, []);
    }
  }, {
    setRenderer: setRenderer,
    setDomApi: setDomApi
  });

  _.extend(View.prototype, ViewMixin, RegionsMixin);

  // shut down child views.

  var Container = function Container() {
    this._init();
  }; // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L962


  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck', 'reduce', 'partition'];

  _.each(methods, function (method) {
    Container.prototype[method] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _[method].apply(_, [this._views].concat(args));
    };
  });

  function stringComparator(comparator, view) {
    return view.model && view.model.get(comparator);
  } // Container Methods
  // -----------------


  _.extend(Container.prototype, {
    // Initializes an empty container
    _init: function _init() {
      this._views = [];
      this._viewsByCid = {};
      this._indexByModel = {};

      this._updateLength();
    },
    // Add a view to this container. Stores the view
    // by `cid` and makes it searchable by the model
    // cid (and model itself). Additionally it stores
    // the view by index in the _views array
    _add: function _add(view) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._views.length;

      this._addViewIndexes(view); // add to end by default


      this._views.splice(index, 0, view);

      this._updateLength();
    },
    _addViewIndexes: function _addViewIndexes(view) {
      // store the view
      this._viewsByCid[view.cid] = view; // index it by model

      if (view.model) {
        this._indexByModel[view.model.cid] = view;
      }
    },
    // Sort (mutate) and return the array of the child views.
    _sort: function _sort(comparator, context) {
      if (typeof comparator === 'string') {
        comparator = _.partial(stringComparator, comparator);
        return this._sortBy(comparator);
      }

      if (comparator.length === 1) {
        return this._sortBy(comparator.bind(context));
      }

      return this._views.sort(comparator.bind(context));
    },
    // Makes `_.sortBy` mutate the array to match `this._views.sort`
    _sortBy: function _sortBy(comparator) {
      var sortedViews = _.sortBy(this._views, comparator);

      this._set(sortedViews);

      return sortedViews;
    },
    // Replace array contents without overwriting the reference.
    // Should not add/remove views
    _set: function _set(views, shouldReset) {
      this._views.length = 0;

      this._views.push.apply(this._views, views.slice(0));

      if (shouldReset) {
        this._viewsByCid = {};
        this._indexByModel = {};

        _.each(views, this._addViewIndexes.bind(this));

        this._updateLength();
      }
    },
    // Swap views by index
    _swap: function _swap(view1, view2) {
      var view1Index = this.findIndexByView(view1);
      var view2Index = this.findIndexByView(view2);

      if (view1Index === -1 || view2Index === -1) {
        return;
      }

      var swapView = this._views[view1Index];
      this._views[view1Index] = this._views[view2Index];
      this._views[view2Index] = swapView;
    },
    // Find a view by the model that was attached to it.
    // Uses the model's `cid` to find it.
    findByModel: function findByModel(model) {
      return this.findByModelCid(model.cid);
    },
    // Find a view by the `cid` of the model that was attached to it.
    findByModelCid: function findByModelCid(modelCid) {
      return this._indexByModel[modelCid];
    },
    // Find a view by index.
    findByIndex: function findByIndex(index) {
      return this._views[index];
    },
    // Find the index of a view instance
    findIndexByView: function findIndexByView(view) {
      return this._views.indexOf(view);
    },
    // Retrieve a view by its `cid` directly
    findByCid: function findByCid(cid) {
      return this._viewsByCid[cid];
    },
    hasView: function hasView(view) {
      return !!this.findByCid(view.cid);
    },
    // Remove a view and clean up index references.
    _remove: function _remove(view) {
      if (!this._viewsByCid[view.cid]) {
        return;
      } // delete model index


      if (view.model) {
        delete this._indexByModel[view.model.cid];
      } // remove the view from the container


      delete this._viewsByCid[view.cid];
      var index = this.findIndexByView(view);

      this._views.splice(index, 1);

      this._updateLength();
    },
    // Update the `.length` attribute on this container
    _updateLength: function _updateLength() {
      this.length = this._views.length;
    }
  });

  // Collection View
  var classErrorName$1 = 'CollectionViewError';
  var ClassOptions$3 = ['behaviors', 'childView', 'childViewContainer', 'childViewEventPrefix', 'childViewEvents', 'childViewOptions', 'childViewTriggers', 'collectionEvents', 'emptyView', 'emptyViewOptions', 'events', 'modelEvents', 'sortWithCollection', 'template', 'templateContext', 'triggers', 'ui', 'viewComparator', 'viewFilter']; // A view that iterates over a Backbone.Collection
  // and renders an individual child view for each model.

  var CollectionView = Backbone.View.extend({
    // flag for maintaining the sorted order of the collection
    sortWithCollection: true,
    // constructor
    constructor: function constructor(options) {
      this._setOptions(options, ClassOptions$3);

      monitorViewEvents(this);

      this._initChildViewStorage();

      this._initBehaviors();

      Backbone.View.prototype.constructor.apply(this, arguments); // Init empty region

      this.getEmptyRegion();
      this.delegateEntityEvents();

      this._triggerEventOnBehaviors('initialize', this, options);
    },
    // Internal method to set up the `children` object for storing all of the child views
    // `_children` represents all child views
    // `children` represents only views filtered to be shown
    _initChildViewStorage: function _initChildViewStorage() {
      this._children = new Container();
      this.children = new Container();
    },
    // Create an region to show the emptyView
    getEmptyRegion: function getEmptyRegion() {
      var $emptyEl = this.$container || this.$el;

      if (this._emptyRegion && !this._emptyRegion.isDestroyed()) {
        this._emptyRegion._setElement($emptyEl[0]);

        return this._emptyRegion;
      }

      this._emptyRegion = new Region({
        el: $emptyEl[0],
        replaceElement: false
      });
      this._emptyRegion._parentView = this;
      return this._emptyRegion;
    },
    // Configured the initial events that the collection view binds to.
    _initialEvents: function _initialEvents() {
      if (this._isRendered) {
        return;
      }

      this.listenTo(this.collection, {
        'sort': this._onCollectionSort,
        'reset': this._onCollectionReset,
        'update': this._onCollectionUpdate
      });
    },
    // Internal method. This checks for any changes in the order of the collection.
    // If the index of any view doesn't match, it will re-sort.
    _onCollectionSort: function _onCollectionSort(collection, _ref) {
      var add = _ref.add,
          merge = _ref.merge,
          remove = _ref.remove;

      if (!this.sortWithCollection || this.viewComparator === false) {
        return;
      } // If the data is changing we will handle the sort later in `_onCollectionUpdate`


      if (add || remove || merge) {
        return;
      } // If the only thing happening here is sorting, sort.


      this.sort();
    },
    _onCollectionReset: function _onCollectionReset() {
      this._destroyChildren();

      this._addChildModels(this.collection.models);

      this.sort();
    },
    // Handle collection update model additions and  removals
    _onCollectionUpdate: function _onCollectionUpdate(collection, options) {
      var changes = options.changes; // Remove first since it'll be a shorter array lookup.

      var removedViews = changes.removed.length && this._removeChildModels(changes.removed);

      this._addedViews = changes.added.length && this._addChildModels(changes.added);

      this._detachChildren(removedViews);

      this.sort(); // Destroy removed child views after all of the render is complete

      this._removeChildViews(removedViews);
    },
    _removeChildModels: function _removeChildModels(models) {
      var _this = this;

      return _.reduce(models, function (views, model) {
        var removeView = _this._removeChildModel(model);

        if (removeView) {
          views.push(removeView);
        }

        return views;
      }, []);
    },
    _removeChildModel: function _removeChildModel(model) {
      var view = this._children.findByModel(model);

      if (view) {
        this._removeChild(view);
      }

      return view;
    },
    _removeChild: function _removeChild(view) {
      this.triggerMethod('before:remove:child', this, view);

      this.children._remove(view);

      this._children._remove(view);

      this.triggerMethod('remove:child', this, view);
    },
    // Added views are returned for consistency with _removeChildModels
    _addChildModels: function _addChildModels(models) {
      return _.map(models, this._addChildModel.bind(this));
    },
    _addChildModel: function _addChildModel(model) {
      var view = this._createChildView(model);

      this._addChild(view);

      return view;
    },
    _createChildView: function _createChildView(model) {
      var ChildView = this._getChildView(model);

      var childViewOptions = this._getChildViewOptions(model);

      var view = this.buildChildView(model, ChildView, childViewOptions);
      return view;
    },
    _addChild: function _addChild(view, index) {
      this.triggerMethod('before:add:child', this, view);

      this._setupChildView(view);

      this._children._add(view, index);

      this.children._add(view, index);

      this.triggerMethod('add:child', this, view);
    },
    // Retrieve the `childView` class
    // The `childView` property can be either a view class or a function that
    // returns a view class. If it is a function, it will receive the model that
    // will be passed to the view instance (created from the returned view class)
    _getChildView: function _getChildView(child) {
      var childView = this.childView;

      if (!childView) {
        throw new MarionetteError({
          name: classErrorName$1,
          message: 'A "childView" must be specified',
          url: 'marionette.collectionview.html#collectionviews-childview'
        });
      }

      childView = this._getView(childView, child);

      if (!childView) {
        throw new MarionetteError({
          name: classErrorName$1,
          message: '"childView" must be a view class or a function that returns a view class',
          url: 'marionette.collectionview.html#collectionviews-childview'
        });
      }

      return childView;
    },
    // First check if the `view` is a view class (the common case)
    // Then check if it's a function (which we assume that returns a view class)
    _getView: function _getView(view, child) {
      if (view.prototype instanceof Backbone.View || view === Backbone.View) {
        return view;
      } else if (_.isFunction(view)) {
        return view.call(this, child);
      }
    },
    _getChildViewOptions: function _getChildViewOptions(child) {
      if (_.isFunction(this.childViewOptions)) {
        return this.childViewOptions(child);
      }

      return this.childViewOptions;
    },
    // Build a `childView` for a model in the collection.
    // Override to customize the build
    buildChildView: function buildChildView(child, ChildViewClass, childViewOptions) {
      var options = _.extend({
        model: child
      }, childViewOptions);

      return new ChildViewClass(options);
    },
    _setupChildView: function _setupChildView(view) {
      monitorViewEvents(view); // We need to listen for if a view is destroyed in a way other
      // than through the CollectionView.
      // If this happens we need to remove the reference to the view
      // since once a view has been destroyed we can not reuse it.

      view.on('destroy', this.removeChildView, this); // set up the child view event forwarding

      this._proxyChildViewEvents(view);
    },
    // used by ViewMixin's `_childViewEventHandler`
    _getImmediateChildren: function _getImmediateChildren() {
      return this.children._views;
    },
    // Overriding Backbone.View's `setElement` to handle
    // if an el was previously defined. If so, the view might be
    // attached on setElement.
    setElement: function setElement() {
      Backbone.View.prototype.setElement.apply(this, arguments);
      this._isAttached = this._isElAttached();
      return this;
    },
    // Render children views.
    render: function render() {
      if (this._isDestroyed) {
        return this;
      }

      this.triggerMethod('before:render', this);

      this._destroyChildren();

      if (this.collection) {
        this._addChildModels(this.collection.models);

        this._initialEvents();
      }

      var template = this.getTemplate();

      if (template) {
        this._renderTemplate(template);

        this.bindUIElements();
      }

      this._getChildViewContainer();

      this.sort();
      this._isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },
    // Get a container within the template to add the children within
    _getChildViewContainer: function _getChildViewContainer() {
      var childViewContainer = _.result(this, 'childViewContainer');

      this.$container = childViewContainer ? this.$(childViewContainer) : this.$el;

      if (!this.$container.length) {
        throw new MarionetteError({
          name: classErrorName$1,
          message: "The specified \"childViewContainer\" was not found: ".concat(childViewContainer),
          url: 'marionette.collectionview.html#defining-the-childviewcontainer'
        });
      }
    },
    // Sorts the children then filters and renders the results.
    sort: function sort() {
      this._sortChildren();

      this.filter();
      return this;
    },
    // Sorts views by viewComparator and sets the children to the new order
    _sortChildren: function _sortChildren() {
      if (!this._children.length) {
        return;
      }

      var viewComparator = this.getComparator();

      if (!viewComparator) {
        return;
      } // If children are sorted prevent added to end perf


      delete this._addedViews;
      this.triggerMethod('before:sort', this);

      this._children._sort(viewComparator, this);

      this.triggerMethod('sort', this);
    },
    // Sets the view's `viewComparator` and applies the sort if the view is ready.
    // To prevent the render pass `{ preventRender: true }` as the 2nd argument.
    setComparator: function setComparator(comparator) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          preventRender = _ref2.preventRender;

      var comparatorChanged = this.viewComparator !== comparator;
      var shouldSort = comparatorChanged && !preventRender;
      this.viewComparator = comparator;

      if (shouldSort) {
        this.sort();
      }

      return this;
    },
    // Clears the `viewComparator` and follows the same rules for rendering as `setComparator`.
    removeComparator: function removeComparator(options) {
      return this.setComparator(null, options);
    },
    // If viewComparator is overriden it will be returned here.
    // Additionally override this function to provide custom
    // viewComparator logic
    getComparator: function getComparator() {
      if (this.viewComparator) {
        return this.viewComparator;
      }

      if (!this.sortWithCollection || this.viewComparator === false || !this.collection) {
        return false;
      }

      return this._viewComparator;
    },
    // Default internal view comparator that order the views by
    // the order of the collection
    _viewComparator: function _viewComparator(view) {
      return this.collection.indexOf(view.model);
    },
    // This method filters the children views and renders the results
    filter: function filter() {
      if (this._isDestroyed) {
        return this;
      }

      this._filterChildren();

      this._renderChildren();

      return this;
    },
    _filterChildren: function _filterChildren() {
      var _this2 = this;

      if (!this._children.length) {
        return;
      }

      var viewFilter = this._getFilter();

      if (!viewFilter) {
        var shouldReset = this.children.length !== this._children.length;

        this.children._set(this._children._views, shouldReset);

        return;
      } // If children are filtered prevent added to end perf


      delete this._addedViews;
      this.triggerMethod('before:filter', this);
      var attachViews = [];
      var detachViews = [];

      _.each(this._children._views, function (view, key, children) {
        (viewFilter.call(_this2, view, key, children) ? attachViews : detachViews).push(view);
      });

      this._detachChildren(detachViews); // reset children


      this.children._set(attachViews, true);

      this.triggerMethod('filter', this, attachViews, detachViews);
    },
    // This method returns a function for the viewFilter
    _getFilter: function _getFilter() {
      var viewFilter = this.getFilter();

      if (!viewFilter) {
        return false;
      }

      if (_.isFunction(viewFilter)) {
        return viewFilter;
      } // Support filter predicates `{ fooFlag: true }`


      if (_.isObject(viewFilter)) {
        var matcher = _.matches(viewFilter);

        return function (view) {
          return matcher(view.model && view.model.attributes);
        };
      } // Filter by model attribute


      if (_.isString(viewFilter)) {
        return function (view) {
          return view.model && view.model.get(viewFilter);
        };
      }

      throw new MarionetteError({
        name: classErrorName$1,
        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy',
        url: 'marionette.collectionview.html#defining-the-viewfilter'
      });
    },
    // Override this function to provide custom
    // viewFilter logic
    getFilter: function getFilter() {
      return this.viewFilter;
    },
    // Sets the view's `viewFilter` and applies the filter if the view is ready.
    // To prevent the render pass `{ preventRender: true }` as the 2nd argument.
    setFilter: function setFilter(filter) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          preventRender = _ref3.preventRender;

      var filterChanged = this.viewFilter !== filter;
      var shouldRender = filterChanged && !preventRender;
      this.viewFilter = filter;

      if (shouldRender) {
        this.filter();
      }

      return this;
    },
    // Clears the `viewFilter` and follows the same rules for rendering as `setFilter`.
    removeFilter: function removeFilter(options) {
      return this.setFilter(null, options);
    },
    _detachChildren: function _detachChildren(detachingViews) {
      _.each(detachingViews, this._detachChildView.bind(this));
    },
    _detachChildView: function _detachChildView(view) {
      var shouldTriggerDetach = view._isAttached && this.monitorViewEvents !== false;

      if (shouldTriggerDetach) {
        view.triggerMethod('before:detach', view);
      }

      this.detachHtml(view);

      if (shouldTriggerDetach) {
        view._isAttached = false;
        view.triggerMethod('detach', view);
      }

      view._isShown = false;
    },
    // Override this method to change how the collectionView detaches a child view
    detachHtml: function detachHtml(view) {
      this.Dom.detachEl(view.el, view.$el);
    },
    _renderChildren: function _renderChildren() {
      // If there are unrendered views prevent add to end perf
      if (this._hasUnrenderedViews) {
        delete this._addedViews;
        delete this._hasUnrenderedViews;
      }

      var views = this._addedViews || this.children._views;
      this.triggerMethod('before:render:children', this, views);

      if (this.isEmpty()) {
        this._showEmptyView();
      } else {
        this._destroyEmptyView();

        var els = this._getBuffer(views);

        this._attachChildren(els, views);
      }

      delete this._addedViews;
      this.triggerMethod('render:children', this, views);
    },
    // Renders each view and creates a fragment buffer from them
    _getBuffer: function _getBuffer(views) {
      var _this3 = this;

      var elBuffer = this.Dom.createBuffer();

      _.each(views, function (view) {
        renderView(view); // corresponds that view is shown in a Region or CollectionView

        view._isShown = true;

        _this3.Dom.appendContents(elBuffer, view.el, {
          _$contents: view.$el
        });
      });

      return elBuffer;
    },
    _attachChildren: function _attachChildren(els, views) {
      var shouldTriggerAttach = this._isAttached && this.monitorViewEvents !== false;
      views = shouldTriggerAttach ? views : [];

      _.each(views, function (view) {
        if (view._isAttached) {
          return;
        }

        view.triggerMethod('before:attach', view);
      });

      this.attachHtml(els, this.$container);

      _.each(views, function (view) {
        if (view._isAttached) {
          return;
        }

        view._isAttached = true;
        view.triggerMethod('attach', view);
      });
    },
    // Override this method to do something other than `.append`.
    // You can attach any HTML at this point including the els.
    attachHtml: function attachHtml(els, $container) {
      this.Dom.appendContents($container[0], els, {
        _$el: $container
      });
    },
    isEmpty: function isEmpty() {
      return !this.children.length;
    },
    _showEmptyView: function _showEmptyView() {
      var EmptyView = this._getEmptyView();

      if (!EmptyView) {
        return;
      }

      var options = this._getEmptyViewOptions();

      var emptyRegion = this.getEmptyRegion();
      emptyRegion.show(new EmptyView(options));
    },
    // Retrieve the empty view class
    _getEmptyView: function _getEmptyView() {
      var emptyView = this.emptyView;

      if (!emptyView) {
        return;
      }

      return this._getView(emptyView);
    },
    // Remove the emptyView
    _destroyEmptyView: function _destroyEmptyView() {
      var emptyRegion = this.getEmptyRegion(); // Only empty if a view is show so the region
      // doesn't detach any other unrelated HTML

      if (emptyRegion.hasView()) {
        emptyRegion.empty();
      }
    },
    //
    _getEmptyViewOptions: function _getEmptyViewOptions() {
      var emptyViewOptions = this.emptyViewOptions || this.childViewOptions;

      if (_.isFunction(emptyViewOptions)) {
        return emptyViewOptions.call(this);
      }

      return emptyViewOptions;
    },
    swapChildViews: function swapChildViews(view1, view2) {
      if (!this._children.hasView(view1) || !this._children.hasView(view2)) {
        throw new MarionetteError({
          name: classErrorName$1,
          message: 'Both views must be children of the collection view to swap.',
          url: 'marionette.collectionview.html#swapping-child-views'
        });
      }

      this._children._swap(view1, view2);

      this.Dom.swapEl(view1.el, view2.el); // If the views are not filtered the same, refilter

      if (this.children.hasView(view1) !== this.children.hasView(view2)) {
        this.filter();
      } else {
        this.children._swap(view1, view2);
      }

      return this;
    },
    // Render the child's view and add it to the HTML for the collection view at a given index, based on the current sort
    addChildView: function addChildView(view, index) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!view || view._isDestroyed) {
        return view;
      }

      if (view._isShown) {
        throw new MarionetteError({
          name: classErrorName$1,
          message: 'View is already shown in a Region or CollectionView',
          url: 'marionette.region.html#showing-a-view'
        });
      }

      if (_.isObject(index)) {
        options = index;
      } // If options has defined index we should use it


      if (options.index != null) {
        index = options.index;
      }

      if (!this._isRendered) {
        this.render();
      }

      this._addChild(view, index);

      if (options.preventRender) {
        this._hasUnrenderedViews = true;
        return view;
      }

      var hasIndex = typeof index !== 'undefined';
      var isAddedToEnd = !hasIndex || index >= this._children.length; // Only cache views if added to the end and there is no unrendered views

      if (isAddedToEnd && !this._hasUnrenderedViews) {
        this._addedViews = [view];
      }

      if (hasIndex) {
        this._renderChildren();
      } else {
        this.sort();
      }

      return view;
    },
    // Detach a view from the children.  Best used when adding a
    // childView from `addChildView`
    detachChildView: function detachChildView(view) {
      this.removeChildView(view, {
        shouldDetach: true
      });
      return view;
    },
    // Remove the child view and destroy it.  Best used when adding a
    // childView from `addChildView`
    // The options argument is for internal use only
    removeChildView: function removeChildView(view, options) {
      if (!view) {
        return view;
      }

      this._removeChildView(view, options);

      this._removeChild(view);

      if (this.isEmpty()) {
        this._showEmptyView();
      }

      return view;
    },
    _removeChildViews: function _removeChildViews(views) {
      _.each(views, this._removeChildView.bind(this));
    },
    _removeChildView: function _removeChildView(view) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          shouldDetach = _ref4.shouldDetach;

      view.off('destroy', this.removeChildView, this);

      if (shouldDetach) {
        this._detachChildView(view);
      } else {
        this._destroyChildView(view);
      }

      this.stopListening(view);
    },
    _destroyChildView: function _destroyChildView(view) {
      if (view._isDestroyed) {
        return;
      }

      var shouldDisableEvents = this.monitorViewEvents === false;
      destroyView(view, shouldDisableEvents);
    },
    // called by ViewMixin destroy
    _removeChildren: function _removeChildren() {
      this._destroyChildren();

      var emptyRegion = this.getEmptyRegion();
      emptyRegion.destroy();
      delete this._addedViews;
    },
    // Destroy the child views that this collection view is holding on to, if any
    _destroyChildren: function _destroyChildren() {
      if (!this._children.length) {
        return;
      }

      this.triggerMethod('before:destroy:children', this);

      if (this.monitorViewEvents === false) {
        this.Dom.detachContents(this.el, this.$el);
      }

      this._removeChildViews(this._children._views); // After all children have been destroyed re-init the container


      this._children._init();

      this.children._init();

      this.triggerMethod('destroy:children', this);
    }
  }, {
    setDomApi: setDomApi,
    setRenderer: setRenderer
  });

  _.extend(CollectionView.prototype, ViewMixin);

  // Behavior
  var ClassOptions$4 = ['collectionEvents', 'events', 'modelEvents', 'triggers', 'ui'];

  var Behavior = function Behavior(options, view) {
    // Setup reference to the view.
    // this comes in handle when a behavior
    // wants to directly talk up the chain
    // to the view.
    this.view = view;

    this._setOptions(options, ClassOptions$4);

    this.cid = _.uniqueId(this.cidPrefix); // Construct an internal UI hash using the behaviors UI
    // hash combined and overridden by the view UI hash.
    // This allows the user to use UI hash elements defined
    // in the parent view as well as those defined in the behavior.
    // This order will help the reuse and share of a behavior
    // between multiple views, while letting a view override
    // a selector under an UI key.

    this.ui = _.extend({}, _.result(this, 'ui'), _.result(view, 'ui')); // Proxy view triggers

    this.listenTo(view, 'all', this.triggerMethod);
    this.initialize.apply(this, arguments);
  };

  Behavior.extend = extend; // Behavior Methods
  // --------------

  _.extend(Behavior.prototype, CommonMixin, DelegateEntityEventsMixin, TriggersMixin, UIMixin, {
    cidPrefix: 'mnb',
    // This is a noop method intended to be overridden
    initialize: function initialize() {},
    // proxy behavior $ method to the view
    // this is useful for doing jquery DOM lookups
    // scoped to behaviors view.
    $: function $() {
      return this.view.$.apply(this.view, arguments);
    },
    // Stops the behavior from listening to events.
    destroy: function destroy() {
      this.stopListening();

      this.view._removeBehavior(this);

      this._deleteEntityEventHandlers();

      return this;
    },
    proxyViewProperties: function proxyViewProperties() {
      this.$el = this.view.$el;
      this.el = this.view.el;
      return this;
    },
    bindUIElements: function bindUIElements() {
      this._bindUIElements();

      return this;
    },
    unbindUIElements: function unbindUIElements() {
      this._unbindUIElements();

      return this;
    },
    getUI: function getUI(name) {
      return this._getUI(name);
    },
    // Handle `modelEvents`, and `collectionEvents` configuration
    delegateEntityEvents: function delegateEntityEvents() {
      this._delegateEntityEvents(this.view.model, this.view.collection);

      return this;
    },
    undelegateEntityEvents: function undelegateEntityEvents() {
      this._undelegateEntityEvents(this.view.model, this.view.collection);

      return this;
    },
    _getEvents: function _getEvents() {
      var _this = this;

      if (!this.events) {
        return;
      } // Normalize behavior events hash to allow
      // a user to use the @ui. syntax.


      var behaviorEvents = this.normalizeUIKeys(_.result(this, 'events')); // binds the handler to the behavior and builds a unique eventName

      return _.reduce(behaviorEvents, function (events, behaviorHandler, key) {
        if (!_.isFunction(behaviorHandler)) {
          behaviorHandler = _this[behaviorHandler];
        }

        if (!behaviorHandler) {
          return events;
        }

        key = getNamespacedEventName(key, _this.cid);
        events[key] = behaviorHandler.bind(_this);
        return events;
      }, {});
    },
    // Internal method to build all trigger handlers for a given behavior
    _getTriggers: function _getTriggers() {
      if (!this.triggers) {
        return;
      } // Normalize behavior triggers hash to allow
      // a user to use the @ui. syntax.


      var behaviorTriggers = this.normalizeUIKeys(_.result(this, 'triggers'));
      return this._getViewTriggers(this.view, behaviorTriggers);
    }
  });

  // Application
  var ClassOptions$5 = ['channelName', 'radioEvents', 'radioRequests', 'region', 'regionClass'];

  var Application = function Application(options) {
    this._setOptions(options, ClassOptions$5);

    this.cid = _.uniqueId(this.cidPrefix);

    this._initRegion();

    this._initRadio();

    this.initialize.apply(this, arguments);
  };

  Application.extend = extend; // Application Methods
  // --------------

  _.extend(Application.prototype, CommonMixin, DestroyMixin, RadioMixin, {
    cidPrefix: 'mna',
    // This is a noop method intended to be overridden
    initialize: function initialize() {},
    // Kick off all of the application's processes.
    start: function start(options) {
      this.triggerMethod('before:start', this, options);
      this.triggerMethod('start', this, options);
      return this;
    },
    regionClass: Region,
    _initRegion: function _initRegion() {
      var region = this.region;

      if (!region) {
        return;
      }

      var defaults = {
        regionClass: this.regionClass
      };
      this._region = buildRegion(region, defaults);
    },
    getRegion: function getRegion() {
      return this._region;
    },
    showView: function showView(view) {
      var region = this.getRegion();

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      region.show.apply(region, [view].concat(args));
      return view;
    },
    getView: function getView() {
      return this.getRegion().currentView;
    }
  });

  var bindEvents$1 = proxy(bindEvents);
  var unbindEvents$1 = proxy(unbindEvents);
  var bindRequests$1 = proxy(bindRequests);
  var unbindRequests$1 = proxy(unbindRequests);
  var mergeOptions$1 = proxy(mergeOptions);
  var getOption$1 = proxy(getOption);
  var normalizeMethods$1 = proxy(normalizeMethods);
  var triggerMethod$1 = proxy(triggerMethod); // Configuration

  var setDomApi$1 = function setDomApi(mixin) {
    CollectionView.setDomApi(mixin);
    Region.setDomApi(mixin);
    View.setDomApi(mixin);
  };
  var setRenderer$1 = function setRenderer(renderer) {
    CollectionView.setRenderer(renderer);
    View.setRenderer(renderer);
  };
  var backbone_marionette = {
    View: View,
    CollectionView: CollectionView,
    MnObject: MarionetteObject,
    Object: MarionetteObject,
    Region: Region,
    Behavior: Behavior,
    Application: Application,
    isEnabled: isEnabled,
    setEnabled: setEnabled,
    monitorViewEvents: monitorViewEvents,
    Events: Events,
    extend: extend,
    DomApi: DomApi,
    VERSION: version
  };

  exports.Application = Application;
  exports.Behavior = Behavior;
  exports.CollectionView = CollectionView;
  exports.DomApi = DomApi;
  exports.Events = Events;
  exports.MnObject = MarionetteObject;
  exports.Region = Region;
  exports.VERSION = version;
  exports.View = View;
  exports.bindEvents = bindEvents$1;
  exports.bindRequests = bindRequests$1;
  exports.default = backbone_marionette;
  exports.extend = extend;
  exports.getOption = getOption$1;
  exports.isEnabled = isEnabled;
  exports.mergeOptions = mergeOptions$1;
  exports.monitorViewEvents = monitorViewEvents;
  exports.normalizeMethods = normalizeMethods$1;
  exports.setDomApi = setDomApi$1;
  exports.setEnabled = setEnabled;
  exports.setRenderer = setRenderer$1;
  exports.triggerMethod = triggerMethod$1;
  exports.unbindEvents = unbindEvents$1;
  exports.unbindRequests = unbindRequests$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
this && this.Marionette && (this.Mn = this.Marionette);


},{"backbone":5,"backbone.radio":4,"underscore":9}],4:[function(require,module,exports){
// Backbone.Radio v2.0.0

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('underscore'), require('backbone')) :
  typeof define === 'function' && define.amd ? define(['underscore', 'backbone'], factory) :
  (global.Backbone = global.Backbone || {}, global.Backbone.Radio = factory(global._,global.Backbone));
}(this, function (_,Backbone) { 'use strict';

  _ = 'default' in _ ? _['default'] : _;
  Backbone = 'default' in Backbone ? Backbone['default'] : Backbone;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var previousRadio = Backbone.Radio;

  var Radio = Backbone.Radio = {};

  Radio.VERSION = '2.0.0';

  // This allows you to run multiple instances of Radio on the same
  // webapp. After loading the new version, call `noConflict()` to
  // get a reference to it. At the same time the old version will be
  // returned to Backbone.Radio.
  Radio.noConflict = function () {
    Backbone.Radio = previousRadio;
    return this;
  };

  // Whether or not we're in DEBUG mode or not. DEBUG mode helps you
  // get around the issues of lack of warnings when events are mis-typed.
  Radio.DEBUG = false;

  // Format debug text.
  Radio._debugText = function (warning, eventName, channelName) {
    return warning + (channelName ? ' on the ' + channelName + ' channel' : '') + ': "' + eventName + '"';
  };

  // This is the method that's called when an unregistered event was called.
  // By default, it logs warning to the console. By overriding this you could
  // make it throw an Error, for instance. This would make firing a nonexistent event
  // have the same consequence as firing a nonexistent method on an Object.
  Radio.debugLog = function (warning, eventName, channelName) {
    if (Radio.DEBUG && console && console.warn) {
      console.warn(Radio._debugText(warning, eventName, channelName));
    }
  };

  var eventSplitter = /\s+/;

  // An internal method used to handle Radio's method overloading for Requests.
  // It's borrowed from Backbone.Events. It differs from Backbone's overload
  // API (which is used in Backbone.Events) in that it doesn't support space-separated
  // event names.
  Radio._eventsApi = function (obj, action, name, rest) {
    if (!name) {
      return false;
    }

    var results = {};

    // Handle event maps.
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
      for (var key in name) {
        var result = obj[action].apply(obj, [key, name[key]].concat(rest));
        eventSplitter.test(key) ? _.extend(results, result) : results[key] = result;
      }
      return results;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        results[names[i]] = obj[action].apply(obj, [names[i]].concat(rest));
      }
      return results;
    }

    return false;
  };

  // An optimized way to execute callbacks.
  Radio._callHandler = function (callback, context, args) {
    var a1 = args[0],
        a2 = args[1],
        a3 = args[2];
    switch (args.length) {
      case 0:
        return callback.call(context);
      case 1:
        return callback.call(context, a1);
      case 2:
        return callback.call(context, a1, a2);
      case 3:
        return callback.call(context, a1, a2, a3);
      default:
        return callback.apply(context, args);
    }
  };

  // A helper used by `off` methods to the handler from the store
  function removeHandler(store, name, callback, context) {
    var event = store[name];
    if ((!callback || callback === event.callback || callback === event.callback._callback) && (!context || context === event.context)) {
      delete store[name];
      return true;
    }
  }

  function removeHandlers(store, name, callback, context) {
    store || (store = {});
    var names = name ? [name] : _.keys(store);
    var matched = false;

    for (var i = 0, length = names.length; i < length; i++) {
      name = names[i];

      // If there's no event by this name, log it and continue
      // with the loop
      if (!store[name]) {
        continue;
      }

      if (removeHandler(store, name, callback, context)) {
        matched = true;
      }
    }

    return matched;
  }

  /*
   * tune-in
   * -------
   * Get console logs of a channel's activity
   *
   */

  var _logs = {};

  // This is to produce an identical function in both tuneIn and tuneOut,
  // so that Backbone.Events unregisters it.
  function _partial(channelName) {
    return _logs[channelName] || (_logs[channelName] = _.bind(Radio.log, Radio, channelName));
  }

  _.extend(Radio, {

    // Log information about the channel and event
    log: function log(channelName, eventName) {
      if (typeof console === 'undefined') {
        return;
      }
      var args = _.toArray(arguments).slice(2);
      console.log('[' + channelName + '] "' + eventName + '"', args);
    },

    // Logs all events on this channel to the console. It sets an
    // internal value on the channel telling it we're listening,
    // then sets a listener on the Backbone.Events
    tuneIn: function tuneIn(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = true;
      channel.on('all', _partial(channelName));
      return this;
    },

    // Stop logging all of the activities on this channel to the console
    tuneOut: function tuneOut(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = false;
      channel.off('all', _partial(channelName));
      delete _logs[channelName];
      return this;
    }
  });

  /*
   * Backbone.Radio.Requests
   * -----------------------
   * A messaging system for requesting data.
   *
   */

  function makeCallback(callback) {
    return _.isFunction(callback) ? callback : function () {
      return callback;
    };
  }

  Radio.Requests = {

    // Make a request
    request: function request(name) {
      var args = _.toArray(arguments).slice(1);
      var results = Radio._eventsApi(this, 'request', name, args);
      if (results) {
        return results;
      }
      var channelName = this.channelName;
      var requests = this._requests;

      // Check if we should log the request, and if so, do it
      if (channelName && this._tunedIn) {
        Radio.log.apply(this, [channelName, name].concat(args));
      }

      // If the request isn't handled, log it in DEBUG mode and exit
      if (requests && (requests[name] || requests['default'])) {
        var handler = requests[name] || requests['default'];
        args = requests[name] ? args : arguments;
        return Radio._callHandler(handler.callback, handler.context, args);
      } else {
        Radio.debugLog('An unhandled request was fired', name, channelName);
      }
    },

    // Set up a handler for a request
    reply: function reply(name, callback, context) {
      if (Radio._eventsApi(this, 'reply', name, [callback, context])) {
        return this;
      }

      this._requests || (this._requests = {});

      if (this._requests[name]) {
        Radio.debugLog('A request was overwritten', name, this.channelName);
      }

      this._requests[name] = {
        callback: makeCallback(callback),
        context: context || this
      };

      return this;
    },

    // Set up a handler that can only be requested once
    replyOnce: function replyOnce(name, callback, context) {
      if (Radio._eventsApi(this, 'replyOnce', name, [callback, context])) {
        return this;
      }

      var self = this;

      var once = _.once(function () {
        self.stopReplying(name);
        return makeCallback(callback).apply(this, arguments);
      });

      return this.reply(name, once, context);
    },

    // Remove handler(s)
    stopReplying: function stopReplying(name, callback, context) {
      if (Radio._eventsApi(this, 'stopReplying', name)) {
        return this;
      }

      // Remove everything if there are no arguments passed
      if (!name && !callback && !context) {
        delete this._requests;
      } else if (!removeHandlers(this._requests, name, callback, context)) {
        Radio.debugLog('Attempted to remove the unregistered request', name, this.channelName);
      }

      return this;
    }
  };

  /*
   * Backbone.Radio.channel
   * ----------------------
   * Get a reference to a channel by name.
   *
   */

  Radio._channels = {};

  Radio.channel = function (channelName) {
    if (!channelName) {
      throw new Error('You must provide a name for the channel.');
    }

    if (Radio._channels[channelName]) {
      return Radio._channels[channelName];
    } else {
      return Radio._channels[channelName] = new Radio.Channel(channelName);
    }
  };

  /*
   * Backbone.Radio.Channel
   * ----------------------
   * A Channel is an object that extends from Backbone.Events,
   * and Radio.Requests.
   *
   */

  Radio.Channel = function (channelName) {
    this.channelName = channelName;
  };

  _.extend(Radio.Channel.prototype, Backbone.Events, Radio.Requests, {

    // Remove all handlers from the messaging systems of this channel
    reset: function reset() {
      this.off();
      this.stopListening();
      this.stopReplying();
      return this;
    }
  });

  /*
   * Top-level API
   * -------------
   * Supplies the 'top-level API' for working with Channels directly
   * from Backbone.Radio.
   *
   */

  var channel;
  var args;
  var systems = [Backbone.Events, Radio.Requests];
  _.each(systems, function (system) {
    _.each(system, function (method, methodName) {
      Radio[methodName] = function (channelName) {
        args = _.toArray(arguments).slice(1);
        channel = this.channel(channelName);
        return channel[methodName].apply(channel, args);
      };
    });
  });

  Radio.reset = function (channelName) {
    var channels = !channelName ? this._channels : [this._channels[channelName]];
    _.each(channels, function (channel) {
      channel.reset();
    });
  };

  return Radio;

}));

},{"backbone":5,"underscore":9}],5:[function(require,module,exports){
(function (global){
//     Backbone.js 1.4.0

//     (c) 2010-2019 Jeremy Ashkenas and DocumentCloud
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global;

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
  }

})(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.4.0';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // A private global variable to share between listeners and listenees.
  var _listening;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space-separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    this._events = eventsApi(onApi, this._events || {}, name, callback, {
      context: context,
      ctx: this,
      listening: _listening
    });

    if (_listening) {
      var listeners = this._listeners || (this._listeners = {});
      listeners[_listening.id] = _listening;
      // Allow the listening to use a counter, instead of tracking
      // callbacks for library interop
      _listening.interop = false;
    }

    return this;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo = function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = _listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      this._listenId || (this._listenId = _.uniqueId('l'));
      listening = _listening = listeningTo[id] = new Listening(this, obj);
    }

    // Bind callbacks on obj.
    var error = tryCatchOn(obj, name, callback, this);
    _listening = void 0;

    if (error) throw error;
    // If the target obj is not Backbone.Events, track events manually.
    if (listening.interop) listening.on(name, callback);

    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
    }
    return events;
  };

  // An try-catch guarded #on function, to prevent poisoning the global
  // `_listening` variable.
  var tryCatchOn = function(obj, name, callback, context) {
    try {
      obj.on(name, callback, context);
    } catch (e) {
      return e;
    }
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off = function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });

    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening = function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);
    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
      if (listening.interop) listening.off(name, callback);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var context = options.context, listeners = options.listeners;
    var i = 0, names;

    // Delete all event listeners and "drop" events.
    if (!name && !context && !callback) {
      for (names = _.keys(listeners); i < names.length; i++) {
        listeners[names[i]].cleanup();
      }
      return;
    }

    names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Find any remaining events.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          var listening = handler.listening;
          if (listening) listening.off(name, callback);
        }
      }

      // Replace events if there are any remaining.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }

    return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once = function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
    if (typeof name === 'string' && context == null) callback = void 0;
    return this.on(events, callback, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce = function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger = function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, callback, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // A listening class that tracks and cleans up memory bindings
  // when all callbacks have been offed.
  var Listening = function(listener, obj) {
    this.id = listener._listenId;
    this.listener = listener;
    this.obj = obj;
    this.interop = true;
    this.count = 0;
    this._events = void 0;
  };

  Listening.prototype.on = Events.on;

  // Offs a callback (or several).
  // Uses an optimized counter if the listenee uses Backbone.Events.
  // Otherwise, falls back to manual tracking to support events
  // library interop.
  Listening.prototype.off = function(name, callback) {
    var cleanup;
    if (this.interop) {
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: void 0,
        listeners: void 0
      });
      cleanup = !this._events;
    } else {
      this.count--;
      cleanup = this.count === 0;
    }
    if (cleanup) this.cleanup();
  };

  // Cleans up memory bindings between the listener and the listenee.
  Listening.prototype.cleanup = function() {
    delete this.listener._listeningTo[this.obj._listenId];
    if (!this.interop) delete this.obj._listeners[this.id];
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    var defaults = _.result(this, 'defaults');
    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Model.
    preinitialize: function(){},

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      var hasChanged;
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
        hasChanged = true;
      }
      return hasChanged ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend({}, options, {validate: true}));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    var i;
    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,


    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Collection.
    preinitialize: function(){},

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();
      var removed = this._removeModels(models, options);
      if (!options.silent && removed.length) {
        options.changes = {added: [], merged: [], removed: removed};
        this.trigger('update', this, options);
      }
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.extend({}, setOptions, options);
      if (options.parse && !this._isModel(models)) {
        models = this.parse(models, options) || [];
      }

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at > this.length) at = this.length;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toMerge = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model, i;
      for (i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            toMerge.push(existing);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
          return m !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort/update events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length || toMerge.length) {
          options.changes = {
            added: toAdd,
            removed: toRemove,
            merged: toMerge
          };
          this.trigger('update', this, options);
        }
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id, cid, model object with id or cid
    // properties, or an attributes object that is transformed through modelId.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] ||
        this._byId[this.modelId(this._isModel(obj) ? obj.attributes : obj)] ||
        obj.cid && this._byId[obj.cid];
    },

    // Returns `true` if the model is in the collection.
    has: function(obj) {
      return this.get(obj) != null;
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = comparator.bind(this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return this.map(attr + '');
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(m, resp, callbackOpts) {
        if (wait) collection.add(m, callbackOpts);
        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function(attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Get an iterator of all models in this collection.
    values: function() {
      return new CollectionIterator(this, ITERATOR_VALUES);
    },

    // Get an iterator of all model IDs in this collection.
    keys: function() {
      return new CollectionIterator(this, ITERATOR_KEYS);
    },

    // Get an iterator of all [ID, model] tuples in this collection.
    entries: function() {
      return new CollectionIterator(this, ITERATOR_KEYSVALUES);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        // Remove references before triggering 'remove' event to prevent an
        // infinite loop. #3693
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function(model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if (model) {
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);
        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);
          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = model;
          }
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Defining an @@iterator method implements JavaScript's Iterable protocol.
  // In modern ES2015 browsers, this value is found at Symbol.iterator.
  /* global Symbol */
  var $$iterator = typeof Symbol === 'function' && Symbol.iterator;
  if ($$iterator) {
    Collection.prototype[$$iterator] = Collection.prototype.values;
  }

  // CollectionIterator
  // ------------------

  // A CollectionIterator implements JavaScript's Iterator protocol, allowing the
  // use of `for of` loops in modern browsers and interoperation between
  // Backbone.Collection and other JavaScript functions and third-party libraries
  // which can operate on Iterables.
  var CollectionIterator = function(collection, kind) {
    this._collection = collection;
    this._kind = kind;
    this._index = 0;
  };

  // This "enum" defines the three possible kinds of values which can be emitted
  // by a CollectionIterator that correspond to the values(), keys() and entries()
  // methods on Collection, respectively.
  var ITERATOR_VALUES = 1;
  var ITERATOR_KEYS = 2;
  var ITERATOR_KEYSVALUES = 3;

  // All Iterators should themselves be Iterable.
  if ($$iterator) {
    CollectionIterator.prototype[$$iterator] = function() {
      return this;
    };
  }

  CollectionIterator.prototype.next = function() {
    if (this._collection) {

      // Only continue iterating if the iterated collection is long enough.
      if (this._index < this._collection.length) {
        var model = this._collection.at(this._index);
        this._index++;

        // Construct a value depending on what kind of values should be iterated.
        var value;
        if (this._kind === ITERATOR_VALUES) {
          value = model;
        } else {
          var id = this._collection.modelId(model.attributes);
          if (this._kind === ITERATOR_KEYS) {
            value = id;
          } else { // ITERATOR_KEYSVALUES
            value = [id, model];
          }
        }
        return {value: value, done: false};
      }

      // Once exhausted, remove the reference to the collection so future
      // calls to the next method always return done.
      this._collection = void 0;
    }

    return {value: void 0, done: true};
  };

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this.preinitialize.apply(this, arguments);
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the View
    preinitialize: function(){},

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], method.bind(this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(base, length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return base[method](this[attribute]);
      };
      case 2: return function(value) {
        return base[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return base[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return base[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return base[method].apply(base, args);
      };
    }
  };

  var addUnderscoreMethods = function(Class, base, methods, attribute) {
    _.each(methods, function(length, method) {
      if (base[method]) Class.prototype[method] = addMethod(base, length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
    foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
    select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
    contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
    head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
    without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
    isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
    sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};


  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
    omit: 0, chain: 1, isEmpty: 1};

  // Mix in each Underscore method as a proxy to `Collection#models`.

  _.each([
    [Collection, collectionMethods, 'models'],
    [Model, modelMethods, 'attributes']
  ], function(config) {
    var Base = config[0],
        methods = config[1],
        attribute = config[2];

    Base.mixin = function(obj) {
      var mappings = _.reduce(_.functions(obj), function(memo, name) {
        memo[name] = 0;
        return memo;
      }, {});
      addUnderscoreMethods(Base, obj, mappings, attribute);
    };

    addUnderscoreMethods(Base, _, methods, attribute);
  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    create: 'POST',
    update: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
    read: 'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Router.
    preinitialize: function(){},

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
        .replace(optionalParam, '(?:$1)?')
        .replace(namedParam, function(match, optional) {
          return optional ? match : '([^/?]+)';
        })
        .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = this.checkUrl.bind(this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var rootPath = path.slice(0, this.root.length - 1) + '/';
      return rootPath === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = this.root.slice(0, -1) || '/';
          this.location.replace(rootPath + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function(eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function(eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var rootPath = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        rootPath = rootPath.slice(0, -1) || '/';
      }
      var url = rootPath + fragment;

      // Strip the fragment of the query and hash for matching.
      fragment = fragment.replace(pathStripper, '');

      // Decode for matching.
      var decodedFragment = this.decodeFragment(fragment);

      if (this.fragment === decodedFragment) return;
      this.fragment = decodedFragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.
    child.prototype = _.create(parent.prototype, protoProps);
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jquery":8,"underscore":9}],6:[function(require,module,exports){
/**!

 @license
 handlebars v4.2.0

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(20),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(21),p=e(o),q=c(33),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(9),j=c(17),k=c(19),l=e(k),m="4.2.0";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0;c&&(g=c.start.line,h=c.start.column,a+=" - "+g+":"+h);for(var i=Error.prototype.constructor.call(this,a),j=0;j<f.length;j++)this[f[j]]=i[f[j]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,e?Object.defineProperty(this,"column",{value:h,enumerable:!0}):this.column=h)}catch(k){}}var e=c(6)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(7),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(10),g=e(f),h=c(11),i=e(h),j=c(12),k=e(j),l=c(13),m=e(l),n=c(14),o=e(n),p=c(15),q=e(p),r=c(16),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){if(!a)return a;if("constructor"!==b||a.propertyIsEnumerable(b))return a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(18),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=s.COMPILER_REVISION;if(b!==c){if(b<c){var d=s.REVISION_CHANGES[c],e=s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=p.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new r["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!=f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new r["default"]("No environment passed to template");if(!a||!a.main)throw new r["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new r["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:p.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=p.extend({},b,a)),c},nullContext:l({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new r["default"]("must pass block params");if(a.useDepths&&!g)throw new r["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=s.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=s.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=p.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new r["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?s.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),p.extend(b,g)}return b}var l=c(22)["default"],m=c(1)["default"],n=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var o=c(4),p=m(o),q=c(5),r=n(q),s=c(3)},function(a,b,c){a.exports={"default":c(23),__esModule:!0}},function(a,b,c){c(24),a.exports=c(29).Object.seal},function(a,b,c){var d=c(25);c(26)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b,c){var d=c(27),e=c(29),f=c(32);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(28),e=c(29),f=c(30),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(31);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
},{}],7:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":6}],8:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}],9:[function(require,module,exports){
(function (global){
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define == 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
 /*
 * # Fomantic UI - 2.7.8
 * https://github.com/fomantic/Fomantic-UI
 * http://fomantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.isFunction=p.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},p.site=p.fn.site=function(e){var s,l,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,c=[].slice.call(arguments,1),u=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=u.namespace,d=u.error,r="module-"+a,f=p(v),m=this,g=f.data(r);return s={initialize:function(){s.instantiate()},instantiate:function(){s.verbose("Storing instance of site",s),g=s,f.data(r,s)},normalize:function(){s.fix.console(),s.fix.requestAnimationFrame()},fix:{console:function(){s.debug("Normalizing window.console"),console!==b&&console.log!==b||(s.verbose("Console not available, normalizing events"),s.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(s.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(s.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){s.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){s.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(s.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?u.modules:[e]:e||u.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!s.moduleExists(t)||(p.fn[t].settings.namespace||!1);s.moduleExists(t)&&(s.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||u.modules,o=o===b||o,p.each(e,function(e,t){var n;s.moduleExists(t)&&(s.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){s.console(!0)},debug:function(e,t){e=e||u.modules,s.debug("Enabling debug for modules",e),s.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Enabling verbose debug for modules",e),s.change.setting("verbose",!0,e,t)}},disable:{console:function(){s.console(!1)},debug:function(e,t){e=e||u.modules,s.debug("Disabling debug for modules",e),s.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Disabling verbose debug for modules",e),s.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(g.cache.console===b)return void s.error(d.console);s.debug("Restoring console function"),h.console=g.cache.console}else s.debug("Disabling console function"),g.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){s.verbose("Destroying previous site for",f),f.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,u,e);else{if(t===b)return u[e];u[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,s,e);else{if(t===b)return s[e];s[e]=t}},debug:function(){u.debug&&(u.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,u.name+":"),s.debug.apply(console,arguments)))},verbose:function(){u.verbose&&u.debug&&(u.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),s.verbose.apply(console,arguments)))},error:function(){s.error=Function.prototype.bind.call(console.error,console,u.name+":"),s.error.apply(console,arguments)},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:m,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=u.name+":",n=0;i=!1,clearTimeout(s.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||c,t=m||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:s.error(d.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),Array.isArray(l)?l.push(n):l!==b?l=[l,n]:n!==b&&(l=n),a}},n?(g===b&&s.initialize(),s.invoke(t)):(g!==b&&s.destroy(),s.initialize()),l!==b?l:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","calendar","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","slider","rating","shape","sidebar","state","sticky","tab","toast","transition","visibility","visit"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(M,I,j,q){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.form=function(k){var T,S=M(this),D=S.selector||"",A=(new Date).getTime(),E=[],F=k,P=arguments[1],R="string"==typeof F,O=[].slice.call(arguments,1);return S.each(function(){var n,f,t,e,g,c,m,p,h,i,u,o,a,s,l,v,d=M(this),b=this,y=[],x=!1,r=!1,w=!1,C=["clean","clean"];(v={initialize:function(){v.get.settings(),R?(l===q&&v.instantiate(),v.invoke(F)):(l!==q&&l.invoke("destroy"),v.verbose("Initializing form validation",d,g),v.bindEvents(),v.set.defaults(),v.instantiate())},instantiate:function(){v.verbose("Storing instance of module",v),l=v,d.data(a,v)},destroy:function(){v.verbose("Destroying previous module",l),v.removeEvents(),d.removeData(a)},refresh:function(){v.verbose("Refreshing selector cache"),n=d.find(p.field),f=d.find(p.group),t=d.find(p.message),d.find(p.prompt),e=d.find(p.submit),d.find(p.clear),d.find(p.reset)},submit:function(){v.verbose("Submitting form",d),r=!0,d.submit()},attachEvents:function(e,t){t=t||"submit",M(e).on("click"+s,function(e){v[t](),e.preventDefault()})},bindEvents:function(){v.verbose("Attaching form events"),d.on("submit"+s,v.validate.form).on("blur"+s,p.field,v.event.field.blur).on("click"+s,p.submit,v.submit).on("click"+s,p.reset,v.reset).on("click"+s,p.clear,v.clear),g.keyboardShortcuts&&d.on("keydown"+s,p.field,v.event.field.keydown),n.each(function(e,t){var n=M(t),i=n.prop("type"),o=v.get.changeEvent(i,n);n.on(o+s,v.event.field.change)}),g.preventLeaving&&M(I).on("beforeunload"+s,v.event.beforeUnload),n.on("change click keyup keydown blur",function(e){M(this).trigger(e.type+".dirty")}),n.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty",v.determine.isDirty),d.on("dirty"+s,function(e){g.onDirty.call()}),d.on("clean"+s,function(e){g.onClean.call()})},clear:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=o.find(p.prompt),r=n.closest(p.uiCalendar),s=n.data(m.defaultValue)||"",l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<r.length&&v.can.useElement("calendar");o.hasClass(h.error)&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),a.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("clear")):l?n.prop("checked",!1):u?r.calendar("clear"):(v.verbose("Resetting field value",n,s),n.val(""))})},reset:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=n.closest(p.uiCalendar),r=o.find(p.prompt),s=n.data(m.defaultValue),l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<a.length&&v.can.useElement("calendar"),d=o.hasClass(h.error);s!==q&&(d&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),r.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("restore defaults")):l?(v.verbose("Resetting checkbox value",i,s),n.prop("checked",s)):u?a.calendar("set date",s):(v.verbose("Resetting field value",n,s),n.val(s)))}),v.determine.isDirty()},determine:{isValid:function(){var n=!0;return M.each(c,function(e,t){v.validate.field(t,e,!0)||(n=!1)}),n},isDirty:function(e){var o=!1;n.each(function(e,t){var n,i=M(t);n=0<i.filter(p.checkbox).length?v.is.checkboxDirty(i):v.is.fieldDirty(i),i.data(g.metadata.isDirty,n),o|=n}),o?v.set.dirty():v.set.clean(),e&&"dirty"===e.namespace&&(e.stopImmediatePropagation(),e.preventDefault())}},is:{bracketedRule:function(e){return e.type&&e.type.match(g.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return v.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||Array.isArray(e)},empty:function(e){return!e||0===e.length||(e.is(p.checkbox)?!e.is(":checked"):v.is.blank(e))},blank:function(e){return""===M.trim(e.val())},valid:function(e){var n=!0;return e?(v.verbose("Checking if field is valid",e),v.validate.field(c[e],e,!1)):(v.verbose("Checking if form is valid"),M.each(c,function(e,t){v.is.valid(e)||(n=!1)}),n)},dirty:function(){return w},clean:function(){return!w},fieldDirty:function(e){var t=e.data(m.defaultValue);null==t&&(t="");var n=e.val();null==n&&(n="");var i=/^(true|false)$/i;return i.test(t)&&i.test(n)?!new RegExp("^"+t+"$","i").test(n):n!==t},checkboxDirty:function(e){return e.data(m.defaultValue)!==e.is(":checked")},justDirty:function(){return"dirty"===C[0]},justClean:function(){return"clean"===C[0]}},removeEvents:function(){d.off(s),n.off(s),e.off(s),n.off(s)},event:{field:{keydown:function(e){var t=M(this),n=e.which,i=t.is(p.input),o=t.is(p.checkbox),a=0<t.closest(p.uiDropdown).length,r=13;n==27&&(v.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(x||(t.one("keyup"+s,v.event.field.keyup),v.submit(),v.debug("Enter pressed on input submitting form")),x=!0)},keyup:function(){x=!1},blur:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);n.hasClass(h.error)?(v.debug("Revalidating field",t,i),i&&v.validate.field(i)):"blur"==g.on&&i&&v.validate.field(i)},change:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);i&&("change"==g.on||n.hasClass(h.error)&&g.revalidate)&&(clearTimeout(v.timer),v.timer=setTimeout(function(){v.debug("Revalidating field",t,v.get.validation(t)),v.validate.field(i)},g.delay))}},beforeUnload:function(e){if(v.is.dirty()&&!r)return(e=e||I.event)&&(e.returnValue=g.text.leavingMessage),g.text.leavingMessage}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!v.is.bracketedRule(e))&&(e.value!==q?e.value:e.type.match(g.regExp.bracket)[1]+"")},ruleName:function(e){return v.is.bracketedRule(e)?e.type.replace(e.type.match(g.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":v.get.inputEvent()},inputEvent:function(){return j.createElement("input").oninput!==q?"input":j.createElement("input").onpropertychange!==q?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return M.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},M.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=v.get.ruleName(e),a=v.get.ancillaryValue(e),r=v.get.field(t.identifier),s=r.val(),l=M.isFunction(e.prompt)?e.prompt(s):e.prompt||g.prompt[o]||g.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace("{value}",r.val())),u&&(i=1==(n=r.closest(p.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||g.text.unspecifiedField,l=l.replace("{name}",i)),l=(l=l.replace("{identifier}",t.identifier)).replace("{ruleValue}",a),e.prompt||v.verbose("Using default validation prompt for type",l,o),l},settings:function(){if(M.isPlainObject(k)){var e=Object.keys(k);0<e.length&&(k[e[0]].identifier!==q&&k[e[0]].rules!==q)?(g=M.extend(!0,{},M.fn.form.settings,P),c=M.extend({},M.fn.form.settings.defaults,k),v.error(g.error.oldSyntax,b),v.verbose("Extending settings from legacy parameters",c,g)):(k.fields&&v.is.shorthandFields(k.fields)&&(k.fields=v.get.fieldsFromShorthand(k.fields)),g=M.extend(!0,{},M.fn.form.settings,k),c=M.extend({},M.fn.form.settings.defaults,g.fields),v.verbose("Extending settings",c,g))}else g=M.fn.form.settings,c=M.fn.form.settings.defaults,v.verbose("Using default form validation",c,g);o=g.namespace,m=g.metadata,p=g.selector,h=g.className,i=g.regExp,u=g.error,a="module-"+o,s="."+o,l=d.data(a),v.refresh()},field:function(e){var t;return v.verbose("Finding field with identifier",e),e=v.escape.string(e),0<(t=n.filter("#"+e)).length?t:0<(t=n.filter('[name="'+e+'"]')).length?t:0<(t=n.filter('[name="'+e+'[]"]')).length?t:0<(t=n.filter("[data-"+m.validate+'="'+e+'"]')).length?t:M("<input/>")},fields:function(e){var n=M();return M.each(e,function(e,t){n=n.add(v.get.field(t))}),n},validation:function(i){var o,a;return!!c&&(M.each(c,function(e,n){a=n.identifier||e,M.each(v.get.field(a),function(e,t){if(t==i[0])return n.identifier=a,o=n,!1})}),o||!1)},value:function(e){var t=[];return t.push(e),v.get.values.call(b,t)[e]},values:function(e){var t=Array.isArray(e)?v.get.fields(e):n,m={};return t.each(function(e,t){var n=M(t),i=n.closest(p.uiCalendar),o=n.prop("name"),a=n.val(),r=n.is(p.checkbox),s=n.is(p.radio),l=-1!==o.indexOf("[]"),c=0<i.length&&v.can.useElement("calendar"),u=!!r&&n.is(":checked");if(o)if(l)o=o.replace("[]",""),m[o]||(m[o]=[]),r?u?m[o].push(a||!0):m[o].push(!1):m[o].push(a);else if(s)m[o]!==q&&0!=m[o]||(m[o]=!!u&&(a||!0));else if(r)m[o]=!!u&&(a||!0);else if(c){var d=i.calendar("get date");if(null!==d){if("date"==g.dateHandling)m[o]=d;else if("input"==g.dateHandling)m[o]=i.calendar("get input date");else if("formatter"==g.dateHandling){var f=i.calendar("setting","type");switch(f){case"date":m[o]=g.formatter.date(d);break;case"datetime":m[o]=g.formatter.datetime(d);break;case"time":m[o]=g.formatter.time(d);break;case"month":m[o]=g.formatter.month(d);break;case"year":m[o]=g.formatter.year(d);break;default:v.debug("Wrong calendar mode",i,f),m[o]=""}}}else m[o]=""}else m[o]=a}),m},dirtyFields:function(){return n.filter(function(e,t){return M(t).data(m.isDirty)})}},has:{field:function(e){return v.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=v.escape.string(e))&&v.error(u.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+m.validate+'="'+e+'"]').length)}},can:{useElement:function(e){return M.fn[e]!==q||(v.error(u.noElement.replace("{element}",e)),!1)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){v.add.field(e,t)},field:function(n,e){var i={};v.is.shorthandRules(e)?(e=Array.isArray(e)?e:[e],i[n]={rules:[]},M.each(e,function(e,t){i[n].rules.push({type:t})})):i[n]=e,c=M.extend({},c,i),v.debug("Adding rules",i,c)},fields:function(e){var t;t=e&&v.is.shorthandFields(e)?v.get.fieldsFromShorthand(e):e,c=M.extend({},c,t)},prompt:function(e,t,n){var i=v.get.field(e).closest(f),o=i.children(p.prompt),a=0!==o.length;t="string"==typeof t?[t]:t,v.verbose("Adding field error state",e),n||i.addClass(h.error),g.inline&&(a||(o=g.templates.prompt(t,h.label)).appendTo(i),o.html(t[0]),a?v.verbose("Inline errors are disabled, no inline error added",e):g.transition&&v.can.useElement("transition")&&d.transition("is supported")?(v.verbose("Displaying error with css transition",g.transition),o.transition(g.transition+" in",g.duration)):(v.verbose("Displaying error with fallback javascript animation"),o.fadeIn(g.duration)))},errors:function(e){v.debug("Adding form error messages",e),v.set.error(),t.html(g.templates.error(e))}},remove:{rule:function(n,e){var i=Array.isArray(e)?e:[e];if(c[n]!==q&&Array.isArray(c[n].rules))return e===q?(v.debug("Removed all rules"),void(c[n].rules=[])):void M.each(c[n].rules,function(e,t){t&&-1!==i.indexOf(t.type)&&(v.debug("Removed rule",t.type),c[n].rules.splice(e,1))})},field:function(e){var t=Array.isArray(e)?e:[e];M.each(t,function(e,t){v.remove.rule(t)})},rules:function(e,n){Array.isArray(e)?M.each(e,function(e,t){v.remove.rule(t,n)}):v.remove.rule(e,n)},fields:function(e){v.remove.field(e)},prompt:function(e){var t=v.get.field(e).closest(f),n=t.children(p.prompt);t.removeClass(h.error),g.inline&&n.is(":visible")&&(v.verbose("Removing prompt for field",e),g.transition&&v.can.useElement("transition")&&d.transition("is supported")?n.transition(g.transition+" out",g.duration,function(){n.remove()}):n.fadeOut(g.duration,function(){n.remove()}))}},set:{success:function(){d.removeClass(h.error).addClass(h.success)},defaults:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=0<n.filter(p.checkbox).length,a=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),r=o?n.is(":checked"):n.val();a&&i.dropdown("save defaults"),n.data(m.defaultValue,r),n.data(m.isDirty,!1)})},error:function(){d.removeClass(h.success).addClass(h.error)},value:function(e,t){var n={};return n[e]=t,v.set.values.call(b,n)},values:function(e){M.isEmptyObject(e)||M.each(e,function(e,t){var n,i=v.get.field(e),o=i.parent(),a=i.closest(p.uiCalendar),r=Array.isArray(t),s=o.is(p.uiCheckbox)&&v.can.useElement("checkbox"),l=o.is(p.uiDropdown)&&v.can.useElement("dropdown"),c=i.is(p.radio)&&s,u=0<a.length&&v.can.useElement("calendar");0<i.length&&(r&&s?(v.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),M.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):c?(v.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(p.uiCheckbox).checkbox("check")):s?(v.verbose("Setting checkbox value",t,o),!0===t?o.checkbox("check"):o.checkbox("uncheck")):l?(v.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):u?a.calendar("set date",t):(v.verbose("Setting field value",t,i),i.val(t)))})},dirty:function(){v.verbose("Setting state dirty"),w=!0,C[0]=C[1],C[1]="dirty",v.is.justClean()&&d.trigger("dirty")},clean:function(){v.verbose("Setting state clean"),w=!1,C[0]=C[1],C[1]="clean",v.is.justDirty()&&d.trigger("clean")},asClean:function(){v.set.defaults(),v.set.clean()},asDirty:function(){v.set.defaults(),v.set.dirty()}},validate:{form:function(e,t){var n=v.get.values();if(x)return!1;if(y=[],v.determine.isValid()){if(v.debug("Form has no validation errors, submitting"),v.set.success(),!0!==t)return g.onSuccess.call(b,e,n)}else if(v.debug("Form has errors"),v.set.error(),g.inline||v.add.errors(y),e&&d.data("moduleApi")!==q&&e.stopImmediatePropagation(),!0!==t)return g.onFailure.call(b,y,n)},field:function(i,e,o){o=o===q||o,"string"==typeof i&&(v.verbose("Validating field",i),i=c[e=i]);var a=i.identifier||e,t=v.get.field(a),n=!!i.depends&&v.get.field(i.depends),r=!0,s=[];i.identifier||(v.debug("Using field name as identifier",a),i.identifier=a);var l=!0;return M.each(t,function(){if(!M(this).prop("disabled"))return l=!1}),l?v.debug("Field is disabled. Skipping",a):i.optional&&v.is.blank(t)?v.debug("Field is optional and blank. Skipping",a):i.depends&&v.is.empty(n)?v.debug("Field depends on another value that is not present or empty. Skipping",n):i.rules!==q&&(t.closest(f).removeClass(h.error),M.each(i.rules,function(e,t){if(v.has.field(a)){var n=v.validate.rule(i,t,!0)||[];0<n.length&&(v.debug("Field is invalid",a,t.type),s.push(v.get.prompt(t,i)),r=!1,o&&M(n).closest(f).addClass(h.error))}})),r?(o&&(v.remove.prompt(a,s),g.onValid.call(t)),!0):(o&&(y=y.concat(s),v.add.prompt(a,s,!0),g.onInvalid.call(t,s)),!1)},rule:function(e,t,n){function i(e){var t=c?M(e).filter(":checked").val():M(e).val();return t=t===q||""===t||null===t?"":g.shouldTrim?M.trim(t+""):String(t+""),s.call(e,t,a,d)}var o=v.get.field(e.identifier),a=v.get.ancillaryValue(t),r=v.get.ruleName(t),s=g.rules[r],l=[],c=o.is(p.checkbox);if(M.isFunction(s))return c?i(o)||(l=o):M.each(o,function(e,t){i(t)||l.push(t)}),n?l:!(0<l.length);v.error(u.noRule,r)}},setting:function(e,t){if(M.isPlainObject(e))M.extend(!0,g,e);else{if(t===q)return g[e];g[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,v,e);else{if(t===q)return v[e];v[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,g.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),v.verbose.apply(console,arguments)))},error:function(){g.silent||(v.error=Function.prototype.bind.call(console.error,console,g.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var e=g.name+":",n=0;A=!1,clearTimeout(v.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),1<S.length&&(e+=" ("+S.length+")"),(console.group!==q||console.table!==q)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||O,t=b||t,"string"==typeof i&&r!==q&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==q)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==q&&(a=r[t]),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==q&&(n=a),Array.isArray(T)?T.push(n):T!==q?T=[T,n]:n!==q&&(T=n),a}}).initialize()}),T!==q?T:this},M.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,shouldTrim:!0,transition:"scale",duration:200,preventLeaving:!1,dateHandling:"date",onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},onDirty:function(){},onClean:function(){},metadata:{defaultValue:"default",validate:"validate",isDirty:"isDirty"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field",leavingMessage:"There are unsaved changes on this page which will be discarded if you continue."},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown",uiCalendar:".ui.calendar"},className:{error:"error",label:"ui basic red pointing prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",noElement:"This module requires ui {element}"},templates:{error:function(e){var n='<ul class="list">';return M.each(e,function(e,t){n+="<li>"+t+"</li>"}),M(n+="</ul>")},prompt:function(e,t){return M("<div/>").addClass(t).html(e[0])}},formatter:{date:function(e){return Intl.DateTimeFormat("en-GB").format(e)},datetime:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},time:function(e){return Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},month:function(e){return Intl.DateTimeFormat("en-GB",{month:"2-digit",year:"numeric"}).format(e)},year:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(e)}},rules:{empty:function(e){return!(e===q||""===e||Array.isArray(e)&&0===e.length)},checked:function(){return 0<M(this).filter(":checked").length},email:function(e){return M.fn.form.settings.regExp.email.test(e)},url:function(e){return M.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(M.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=M.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(i=o[1]-0))),a.test(e)&&(n===q||n<=e)&&(i===q||e<=i)},decimal:function(e){return M.fn.form.settings.regExp.decimal.test(e)},number:function(e){return M.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==q&&e.length>=t},length:function(e,t){return e!==q&&e.length>=t},exactLength:function(e,t){return e!==q&&e.length==t},maxLength:function(e,t){return e!==q&&e.length<=t},match:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==q&&e.toString()==i.toString()},different:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==q&&e.toString()!==i.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(M.each(s,function(e,t){(i=o[t])&&(a={length:-1!==M.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==M.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(k,T,e,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},T=void 0!==T&&T.Math==Math?T:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.accordion=function(a){var v,r=k(this),b=(new Date).getTime(),y=[],x=a,w="string"==typeof x,C=[].slice.call(arguments,1);return r.each(function(){var e,c,u=k.isPlainObject(a)?k.extend(!0,{},k.fn.accordion.settings,a):k.extend({},k.fn.accordion.settings),d=u.className,t=u.namespace,f=u.selector,s=u.error,n="."+t,i="module-"+t,o=r.selector||"",m=k(this),g=m.find(f.title),p=m.find(f.content),l=this,h=m.data(i);c={initialize:function(){c.debug("Initializing",m),c.bind.events(),u.observeChanges&&c.observeChanges(),c.instantiate()},instantiate:function(){h=c,m.data(i,c)},destroy:function(){c.debug("Destroying previous instance",m),m.off(n).removeData(i)},refresh:function(){g=m.find(f.title),p=m.find(f.content)},observeChanges:function(){"MutationObserver"in T&&((e=new MutationObserver(function(e){c.debug("DOM tree modified, updating selector cache"),c.refresh()})).observe(l,{childList:!0,subtree:!0}),c.debug("Setting up mutation observer",e))},bind:{events:function(){c.debug("Binding delegated events"),m.on(u.on+n,f.trigger,c.event.click)}},event:{click:function(){c.toggle.call(this)}},toggle:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active),a=o&&!i,r=!o&&i;c.debug("Toggling visibility of content",t),a||r?u.collapsible?c.close.call(t):c.debug("Cannot close accordion content collapsing is disabled"):c.open.call(t)},open:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating);n.hasClass(d.active)||i?c.debug("Accordion already open, skipping",n):(c.debug("Opening accordion content",t),u.onOpening.call(n),u.onChanging.call(n),u.exclusive&&c.closeOthers.call(t),t.addClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0,onComplete:function(){n.children().removeClass(d.transition)}}):n.children().stop(!0,!0).animate({opacity:1},u.duration,c.resetOpacity)),n.slideDown(u.duration,u.easing,function(){n.removeClass(d.animating).addClass(d.active),c.reset.display.call(this),u.onOpen.call(this),u.onChange.call(this)}))},close:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active);!o&&!(!o&&i)||o&&i||(c.debug("Closing accordion content",n),u.onClosing.call(n),u.onChanging.call(n),t.removeClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):n.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),n.slideUp(u.duration,u.easing,function(){n.removeClass(d.animating).removeClass(d.active),c.reset.display.call(this),u.onClose.call(this),u.onChange.call(this)}))},closeOthers:function(e){var t,n,i,o=e!==S?g.eq(e):k(this).closest(f.title),a=o.parents(f.content).prev(f.title),r=o.closest(f.accordion),s=f.title+"."+d.active+":visible",l=f.content+"."+d.active+":visible";i=u.closeNested?(t=r.find(s).not(a)).next(p):(t=r.find(s).not(a),n=r.find(l).find(s).not(a),(t=t.not(n)).next(p)),0<t.length&&(c.debug("Exclusive enabled, closing other content",t),t.removeClass(d.active),i.removeClass(d.animating).stop(!0,!0),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?i.children().transition({animation:"fade out",useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):i.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),i.slideUp(u.duration,u.easing,function(){k(this).removeClass(d.active),c.reset.display.call(this)}))},reset:{display:function(){c.verbose("Removing inline display from element",this),k(this).css("display",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")},opacity:function(){c.verbose("Removing inline opacity from element",this),k(this).css("opacity",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(c.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,u,e);else{if(t===S)return u[e];k.isPlainObject(u[e])?k.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(c.debug("Changing internal",e,t),t===S)return c[e];k.isPlainObject(e)?k.extend(!0,c,e):c[e]=t},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;b=!1,clearTimeout(c.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||C,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:c.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(v)?v.push(n):v!==S?v=[v,n]:n!==S&&(v=n),a}},w?(h===S&&c.initialize(),c.invoke(x)):(h!==S&&h.invoke("destroy"),c.initialize())}),v!==S?v:this},k.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating",transition:"transition"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},k.extend(k.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(pe,e,k,T){"use strict";pe.isFunction=pe.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),pe.fn.calendar=function(o){var h,e=pe(this),a=e.selector||"",v=(new Date).getTime(),b=[],y=o,x="string"==typeof y,w=[].slice.call(arguments,1),C={5:{row:4,column:3},10:{row:3,column:2},15:{row:2,column:2},20:{row:3,column:1},30:{row:2,column:1}};return e.each(function(){var f,le,ce=pe.isPlainObject(o)?pe.extend(!0,{},pe.fn.calendar.settings,o):pe.extend({},pe.fn.calendar.settings),ue=ce.className,e=ce.namespace,r=ce.selector,de=ce.formatter,n=ce.parser,fe=ce.metadata,me=C[ce.minTimeGap],s=ce.error,t="."+e,i="module-"+e,l=pe(this),c=l.find(r.input),ge=l.find(r.popup),u=l.find(r.activator),d=this,m=l.data(i),g=!1,p=!1;le={initialize:function(){le.debug("Initializing calendar for",d,l),f=le.get.isTouch(),le.setup.config(),le.setup.popup(),le.setup.inline(),le.setup.input(),le.setup.date(),le.create.calendar(),le.bind.events(),le.instantiate()},instantiate:function(){le.verbose("Storing instance of calendar"),m=le,l.data(i,m)},destroy:function(){le.verbose("Destroying previous calendar for",d),l.removeData(i),le.unbind.events()},setup:{config:function(){null!==le.get.minDate()&&le.set.minDate(l.data(fe.minDate)),null!==le.get.maxDate()&&le.set.maxDate(l.data(fe.maxDate))},popup:function(){if(!ce.inline&&(u.length||(u=l.children().first()).length))if(pe.fn.popup!==T){if(!ge.length){var e=u.parent(),t=0!==e.closest(r.append).length?"appendTo":"prependTo";ge=pe("<div/>").addClass(ue.popup)[t](e)}ge.addClass(ue.calendar);var n=ce.onVisible,i=ce.onHidden;c.length||(ge.attr("tabindex","0"),n=function(){return le.focus(),ce.onVisible.apply(ge,arguments)},i=function(){return le.blur(),ce.onHidden.apply(ge,arguments)});var o=ce.on||(c.length?"focus":"click"),a=pe.extend({},ce.popupOptions,{popup:ge,on:o,hoverable:"hover"===o,onShow:function(){return le.set.focusDate(le.get.date()),le.set.mode(ce.startMode),ce.onShow.apply(ge,arguments)},onVisible:n,onHide:ce.onHide,onHidden:i});le.popup(a)}else le.error(s.popup)},inline:function(){u.length&&!ce.inline||(ge=pe("<div/>").addClass(ue.calendar).appendTo(l),c.length||ge.attr("tabindex","0"))},input:function(){ce.touchReadonly&&c.length&&f&&c.prop("readonly",!0)},date:function(){if(ce.initialDate){var e=n.date(ce.initialDate,ce);le.set.date(e,ce.formatInput,!1)}else if(l.data(fe.date)!==T){e=n.date(l.data(fe.date),ce);le.set.date(e,ce.formatInput,!1)}else if(c.length){var t=c.val();e=n.date(t,ce);le.set.date(e,ce.formatInput,!1)}}},create:{calendar:function(){var e,t,n,i,o,a,r,s=le.get.mode(),l=new Date,c=le.get.date(),u=le.get.focusDate(),d=u||c||ce.initialDate||l;d=le.helper.dateInRange(d),u||(u=d,le.set.focusDate(u,!1,!1));var f="year"===s,m="month"===s,g="day"===s,p="hour"===s,h="minute"===s,v="time"===ce.type,b=Math.max(ce.multiMonth,1),y=g?le.get.monthOffset():0,x=d.getMinutes(),w=d.getHours(),C=d.getDate(),k=d.getMonth()+y,T=d.getFullYear(),S=g?ce.showWeekNumbers?8:7:p?4:me.column,D=g||p?6:me.row,A=g?b:1,E=ge,F=E.hasClass("left")?"right center":"left center";for(E.empty(),1<A&&(r=pe("<div/>").addClass(ue.grid).appendTo(E)),i=0;i<A;i++){if(1<A)E=pe("<div/>").addClass(ue.column).appendTo(r);var P=k+i,R=(new Date(T,P,1).getDay()-ce.firstDayOfWeek%7+7)%7;if(!ce.constantHeight&&g){var O=new Date(T,P+1,0).getDate()+R;D=Math.ceil(O/7)}var M=f?10:m?1:0,I=g?1:0,j=p||h?1:0,q=p||h?C:1,L=new Date(T-M,P-I,q-j,w),V=new Date(T+M,P+I,q+j,w),N=f?new Date(10*Math.ceil(T/10)-9,0,0):m?new Date(T,0,0):g?new Date(T,P,0):new Date(T,P,C,-1),z=f?new Date(10*Math.ceil(T/10)+1,0,1):m?new Date(T+1,0,1):g?new Date(T,P+1,1):new Date(T,P,C+1),H=s;g&&ce.showWeekNumbers&&(H+=" andweek");var U=pe("<table/>").addClass(ue.table).addClass(H).appendTo(E),W=S;if(!v){var B=pe("<thead/>").appendTo(U);o=pe("<tr/>").appendTo(B),a=pe("<th/>").attr("colspan",""+S).appendTo(o);var Y=f||m?new Date(T,0,1):g?new Date(T,P,1):new Date(T,P,C,w,x),X=pe("<span/>").addClass(ue.link).appendTo(a);X.text(de.header(Y,s,ce));var Q=m?ce.disableYear?"day":"year":g?ce.disableMonth?"year":"month":"day";if(X.data(fe.mode,Q),0===i){var G=pe("<span/>").addClass(ue.prev).appendTo(a);G.data(fe.focusDate,L),G.toggleClass(ue.disabledCell,!le.helper.isDateInRange(N,s)),pe("<i/>").addClass(ue.prevIcon).appendTo(G)}if(i===A-1){var K=pe("<span/>").addClass(ue.next).appendTo(a);K.data(fe.focusDate,V),K.toggleClass(ue.disabledCell,!le.helper.isDateInRange(z,s)),pe("<i/>").addClass(ue.nextIcon).appendTo(K)}if(g)for(o=pe("<tr/>").appendTo(B),ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(ce.text.weekNo),a.addClass(ue.weekCell),W--),e=0;e<W;e++)(a=pe("<th/>").appendTo(o)).text(de.dayColumnHeader((e+ce.firstDayOfWeek)%7,ce))}var $=pe("<tbody/>").appendTo(U);for(e=f?10*Math.ceil(T/10)-9:g?1-R:0,t=0;t<D;t++)for(o=pe("<tr/>").appendTo($),g&&ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(le.get.weekOfYear(T,P,e+1-ce.firstDayOfWeek)),a.addClass(ue.weekCell)),n=0;n<W;n++,e++){var J=f?new Date(e,P,1,w,x):m?new Date(T,e,1,w,x):g?new Date(T,P,e,w,x):p?new Date(T,P,C,e):new Date(T,P,C,w,e*ce.minTimeGap),Z=f?e:m?ce.text.monthsShort[e]:g?J.getDate():de.time(J,ce,!0);(a=pe("<td/>").addClass(ue.cell).appendTo(o)).text(Z),a.data(fe.date,J);var _=g&&J.getMonth()!==(P+12)%12,ee=!ce.selectAdjacentDays&&_||!le.helper.isDateInRange(J,s)||ce.isDisabled(J,s)||le.helper.isDisabled(J,s)||!le.helper.isEnabled(J,s);if(ee){var te=le.helper.findDayAsObject(J,s,ce.disabledDates);null!==te&&te[fe.message]&&(a.attr("data-tooltip",te[fe.message]),a.attr("data-position",F))}else{var ne=le.helper.findDayAsObject(J,s,ce.eventDates);null!==ne&&(a.addClass(ne[fe.class]||ce.eventClass),ne[fe.message]&&(a.attr("data-tooltip",ne[fe.message]),a.attr("data-position",F)))}var ie=le.helper.dateEqual(J,c,s),oe=le.helper.dateEqual(J,l,s);a.toggleClass(ue.adjacentCell,_),a.toggleClass(ue.disabledCell,ee),a.toggleClass(ue.activeCell,ie&&!_),p||h||a.toggleClass(ue.todayCell,!_&&oe);var ae={mode:s,adjacent:_,disabled:ee,active:ie,today:oe};de.cell(a,J,ae),le.helper.dateEqual(J,u,s)&&le.set.focusDate(J,!1,!1)}if(ce.today){var re=pe("<tr/>").appendTo($),se=pe("<td/>").attr("colspan",""+S).addClass(ue.today).appendTo(re);se.text(de.today(ce)),se.data(fe.date,l)}le.update.focus(!1,U)}}},update:{focus:function(e,t){t=t||ge;var s=le.get.mode(),n=le.get.date(),l=le.get.focusDate(),c=le.get.startDate(),u=le.get.endDate(),d=(e?l:null)||n||(f?null:l);t.find("td").each(function(){var e=pe(this),t=e.data(fe.date);if(t){var n=e.hasClass(ue.disabledCell),i=e.hasClass(ue.activeCell),o=e.hasClass(ue.adjacentCell),a=le.helper.dateEqual(t,l,s),r=!!d&&(!!c&&le.helper.isDateInRange(t,s,c,d)||!!u&&le.helper.isDateInRange(t,s,d,u));e.toggleClass(ue.focusCell,a&&(!f||g)&&(!o||ce.selectAdjacentDays&&o)&&!n),e.toggleClass(ue.rangeCell,r&&!i&&!n)}})}},refresh:function(){le.create.calendar()},bind:{events:function(){le.debug("Binding events"),ge.on("mousedown"+t,le.event.mousedown),ge.on("touchstart"+t,le.event.mousedown),ge.on("mouseup"+t,le.event.mouseup),ge.on("touchend"+t,le.event.mouseup),ge.on("mouseover"+t,le.event.mouseover),c.length?(c.on("input"+t,le.event.inputChange),c.on("focus"+t,le.event.inputFocus),c.on("blur"+t,le.event.inputBlur),c.on("click"+t,le.event.inputClick),c.on("keydown"+t,le.event.keydown)):ge.on("keydown"+t,le.event.keydown)}},unbind:{events:function(){le.debug("Unbinding events"),ge.off(t),c.length&&c.off(t)}},event:{mouseover:function(e){var t=pe(e.target).data(fe.date),n=1===e.buttons;t&&le.set.focusDate(t,!1,!0,n)},mousedown:function(e){c.length&&e.preventDefault(),g=0<=e.type.indexOf("touch");var t=pe(e.target).data(fe.date);t&&le.set.focusDate(t,!1,!0,!0)},mouseup:function(e){le.focus(),e.preventDefault(),e.stopPropagation(),g=!1;var t=pe(e.target);if(!t.hasClass("disabled")){var n=t.parent();(n.data(fe.date)||n.data(fe.focusDate)||n.data(fe.mode))&&(t=n);var i=t.data(fe.date),o=t.data(fe.focusDate),a=t.data(fe.mode);if(i&&!1!==ce.onSelect.call(d,i,le.get.mode())){var r=t.hasClass(ue.today);le.selectDate(i,r)}else o?le.set.focusDate(o):a&&le.set.mode(a)}},keydown:function(e){var t=e.which;if(27!==t&&9!==t||le.popup("hide"),le.popup("is visible"))if(37===t||38===t||39===t||40===t){var n="day"===(d=le.get.mode())?7:"hour"===d?4:"minute"===d?me.column:3,i=37===t?-1:38===t?-n:39==t?1:n;i*="minute"===d?ce.minTimeGap:1;var o=le.get.focusDate()||le.get.date()||new Date,a=o.getFullYear()+("year"===d?i:0),r=o.getMonth()+("month"===d?i:0),s=o.getDate()+("day"===d?i:0),l=o.getHours()+("hour"===d?i:0),c=o.getMinutes()+("minute"===d?i:0),u=new Date(a,r,s,l,c);"time"===ce.type&&(u=le.helper.mergeDateTime(o,u)),le.helper.isDateInRange(u,d)&&le.set.focusDate(u)}else if(13===t){var d=le.get.mode(),f=le.get.focusDate();f&&!ce.isDisabled(f,d)&&!le.helper.isDisabled(f,d)&&le.helper.isEnabled(f,d)&&le.selectDate(f),e.preventDefault(),e.stopPropagation()}38!==t&&40!==t||(e.preventDefault(),le.popup("show"))},inputChange:function(){var e=c.val(),t=n.date(e,ce);le.set.date(t,!1)},inputFocus:function(){ge.addClass(ue.active)},inputBlur:function(){if(ge.removeClass(ue.active),ce.formatInput){var e=le.get.date(),t=de.datetime(e,ce);c.val(t)}},inputClick:function(){le.popup("show")}},get:{weekOfYear:function(e,t,n){var i,o,a;return i=Date.UTC(e,t,n+3)/864e5,o=Math.floor(i/7),a=new Date(6048e5*o).getUTCFullYear(),o-Math.floor(Date.UTC(a,0,7)/6048e5)+1},date:function(){return le.helper.sanitiseDate(l.data(fe.date))||null},inputDate:function(){return c.val()},focusDate:function(){return l.data(fe.focusDate)||null},startDate:function(){var e=le.get.calendarModule(ce.startCalendar);return(e?e.get.date():l.data(fe.startDate))||null},endDate:function(){var e=le.get.calendarModule(ce.endCalendar);return(e?e.get.date():l.data(fe.endDate))||null},minDate:function(){return l.data(fe.minDate)||null},maxDate:function(){return l.data(fe.maxDate)||null},monthOffset:function(){return l.data(fe.monthOffset)||0},mode:function(){var e=l.data(fe.mode)||ce.startMode,t=le.get.validModes();return 0<=pe.inArray(e,t)?e:"time"===ce.type?"hour":"month"===ce.type?"month":"year"===ce.type?"year":"day"},validModes:function(){var e=[];return"time"!==ce.type&&(ce.disableYear&&"year"!==ce.type||e.push("year"),(ce.disableMonth||"year"===ce.type)&&"month"!==ce.type||e.push("month"),0<=ce.type.indexOf("date")&&e.push("day")),0<=ce.type.indexOf("time")&&(e.push("hour"),ce.disableMinute||e.push("minute")),e},isTouch:function(){try{return k.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(e){return e?(e instanceof pe||(e=pe(e).first()),e.data(i)):null}},set:{date:function(e,t,n){t=!1!==t,n=!1!==n,e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var i=le.get.mode(),o=de.datetime(e,ce);if(n&&!1===ce.onChange.call(d,e,o,i))return!1;if(le.set.focusDate(e),ce.isDisabled(e,i))return!1;var a=le.get.endDate();a&&e&&a<e&&le.set.endDate(T),le.set.dataKeyValue(fe.date,e),t&&c.length&&c.val(o)},startDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.startCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.startDate,e,t)},endDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.endCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.endDate,e,t)},focusDate:function(e,t,n,i){e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var o="day"===le.get.mode(),a=le.get.focusDate();if(o&&e&&a){var r=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth();if(r){var s=le.get.monthOffset()-r;le.set.monthOffset(s,!1)}}var l=le.set.dataKeyValue(fe.focusDate,e,t);n=!1!==n&&l&&!1===t||p!=i,p=i,n&&le.update.focus(i)},minDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.maxDate&&ce.maxDate<=e?le.verbose("Unable to set minDate variable bigger that maxDate variable",e,ce.maxDate):(le.setting("minDate",e),le.set.dataKeyValue(fe.minDate,e))},maxDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.minDate&&ce.minDate>=e?le.verbose("Unable to set maxDate variable lower that minDate variable",e,ce.minDate):(le.setting("maxDate",e),le.set.dataKeyValue(fe.maxDate,e))},monthOffset:function(e,t){var n=Math.max(ce.multiMonth,1);e=Math.max(1-n,Math.min(0,e)),le.set.dataKeyValue(fe.monthOffset,e,t)},mode:function(e,t){le.set.dataKeyValue(fe.mode,e,t)},dataKeyValue:function(e,t,n){var i=l.data(e),o=i===t||i<=t&&t<=i;return t?l.data(e,t):l.removeData(e),(n=!1!==n&&!o)&&le.refresh(),!o}},selectDate:function(e,t){le.verbose("New date selection",e);var n=le.get.mode();if(t||"minute"===n||ce.disableMinute&&"hour"===n||"date"===ce.type&&"day"===n||"month"===ce.type&&"month"===n||"year"===ce.type&&"year"===n){if(!(!1===le.set.date(e))&&ce.closable){le.popup("hide");var i=le.get.calendarModule(ce.endCalendar);i&&(i.popup("show"),i.focus())}}else{var o="year"===n?ce.disableMonth?"day":"month":"month"===n?"day":"day"===n?"hour":"minute";le.set.mode(o),"hour"===n||"day"===n&&le.get.date()?le.set.date(e):le.set.focusDate(e)}},changeDate:function(e){le.set.date(e)},clear:function(){le.set.date(T)},popup:function(){return u.popup.apply(u,arguments)},focus:function(){c.length?c.focus():ge.focus()},blur:function(){c.length?c.blur():ge.blur()},helper:{isDisabled:function(t,n){return"day"===n&&(-1!==ce.disabledDaysOfWeek.indexOf(t.getDay())||ce.disabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},isEnabled:function(t,n){return"day"!==n||(0===ce.enabledDates.length||ce.enabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},findDayAsObject:function(e,t,n){if("day"===t)for(var i,o=0,a=n.length;o<a;o++){if("string"==typeof(i=n[o])&&(i=le.helper.sanitiseDate(i)),i instanceof Date&&le.helper.dateEqual(e,i,t)){var r={};return r[fe.date]=i,r}if(null!==i&&"object"==typeof i&&i[fe.date]&&le.helper.dateEqual(e,le.helper.sanitiseDate(i[fe.date]),t))return i}return null},sanitiseDate:function(e){return e?(e instanceof Date||(e=n.date(""+e,ce)),!e||null===e||isNaN(e.getTime())?T:e):T},dateDiff:function(e,t,n){n=n||"day";var i="time"===ce.type,o="year"===n,a=o||"month"===n,r="minute"===n,s=r||"hour"===n;return e=new Date(i?2e3:e.getFullYear(),i?0:o?0:e.getMonth(),i?1:a?1:e.getDate(),s?e.getHours():0,r?ce.minTimeGap*Math.floor(e.getMinutes()/ce.minTimeGap):0),(t=new Date(i?2e3:t.getFullYear(),i?0:o?0:t.getMonth(),i?1:a?1:t.getDate(),s?t.getHours():0,r?ce.minTimeGap*Math.floor(t.getMinutes()/ce.minTimeGap):0)).getTime()-e.getTime()},dateEqual:function(e,t,n){return!!e&&!!t&&0===le.helper.dateDiff(e,t,n)},isDateInRange:function(e,t,n,i){if(!n&&!i){var o=le.get.startDate();n=o&&ce.minDate?new Date(Math.max(o,ce.minDate)):o||ce.minDate,i=ce.maxDate}return n=n&&new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),ce.minTimeGap*Math.ceil(n.getMinutes()/ce.minTimeGap)),!(!e||n&&0<le.helper.dateDiff(e,n,t)||i&&0<le.helper.dateDiff(i,e,t))},dateInRange:function(e,t,n){if(!t&&!n){var i=le.get.startDate();t=i&&ce.minDate?new Date(Math.max(i,ce.minDate)):i||ce.minDate,n=ce.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),ce.minTimeGap*Math.ceil(t.getMinutes()/ce.minTimeGap));var o="time"===ce.type;return e?t&&0<le.helper.dateDiff(e,t,"minute")?o?le.helper.mergeDateTime(e,t):t:n&&0<le.helper.dateDiff(n,e,"minute")?o?le.helper.mergeDateTime(e,n):n:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t}},setting:function(e,t){if(le.debug("Changing setting",e,t),pe.isPlainObject(e))pe.extend(!0,ce,e);else{if(t===T)return ce[e];pe.isPlainObject(ce[e])?pe.extend(!0,ce[e],t):ce[e]=t}},internal:function(e,t){if(pe.isPlainObject(e))pe.extend(!0,le,e);else{if(t===T)return le[e];le[e]=t}},debug:function(){!ce.silent&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.debug=Function.prototype.bind.call(console.info,console,ce.name+":"),le.debug.apply(console,arguments)))},verbose:function(){!ce.silent&&ce.verbose&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.verbose=Function.prototype.bind.call(console.info,console,ce.name+":"),le.verbose.apply(console,arguments)))},error:function(){ce.silent||(le.error=Function.prototype.bind.call(console.error,console,ce.name+":"),le.error.apply(console,arguments))},performance:{log:function(e){var t,n;ce.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(le.performance.timer),le.performance.timer=setTimeout(le.performance.display,500)},display:function(){var e=ce.name+":",n=0;v=!1,clearTimeout(le.performance.timer),pe.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",a&&(e+=" '"+a+"'"),(console.group!==T||console.table!==T)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):pe.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||w,t=d||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,pe.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(pe.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!pe.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:le.error(s.method,i),!1;r=r[t]}})),pe.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(h)?h.push(n):h!==T?h=[h,n]:n!==T&&(h=n),a}},x?(m===T&&le.initialize(),le.invoke(y)):(m!==T&&m.invoke("destroy"),le.initialize())}),h!==T?h:this},pe.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,minTimeGap:5,showWeekNumbers:null,disabledDates:[],disabledDaysOfWeek:[],enabledDates:[],eventDates:[],centuryBreak:60,currentCentury:2e3,selectAdjacentDays:!1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM",weekNo:"Week"},formatter:{header:function(e,t,n){return"year"===t?n.formatter.yearHeader(e,n):"month"===t?n.formatter.monthHeader(e,n):"day"===t?n.formatter.dayHeader(e,n):"hour"===t?n.formatter.hourHeader(e,n):n.formatter.minuteHeader(e,n)},yearHeader:function(e,t){var n=10*Math.ceil(e.getFullYear()/10);return n-9+" - "+(2+n)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){return t.text.months[e.getMonth()]+" "+e.getFullYear()},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var n="time"===t.type?"":t.formatter.date(e,t),i=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1);return n+("datetime"===t.type?" ":"")+i},date:function(e,t){if(!e)return"";var n=e.getDate(),i=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?i+" "+o:(t.monthFirst?i+" "+n:n+" "+i)+", "+o},time:function(e,t,n){if(!e)return"";var i=e.getHours(),o=e.getMinutes(),a="";return t.ampm&&(a=" "+(i<12?t.text.am:t.text.pm),i=0===i?12:12<i?i-12:i),i+":"+(o<10?"0":"")+o+a},today:function(e){return"date"===e.type?e.text.today:e.text.now},cell:function(e,t,n){}},parser:{date:function(e,t){if(e instanceof Date)return e;if(!e)return null;if(0===(e=(""+e).trim().toLowerCase()).length)return null;var n,i,o,a=new Date(e);if(!isNaN(a.getDate()))return a;var r=-1,s=-1,l=-1,c=-1,u=-1,d=T,f="time"===t.type,m=t.type.indexOf("time")<0,g=e.split(t.regExp.dateWords),p=e.split(t.regExp.dateNumbers);if(!m)for(d=0<=pe.inArray(t.text.am.toLowerCase(),g)||!(0<=pe.inArray(t.text.pm.toLowerCase(),g))&&T,n=0;n<p.length;n++){var h=p[n];if(0<=h.indexOf(":")){if(s<0||r<0){var v=h.split(":");for(o=0;o<Math.min(2,v.length);o++)i=parseInt(v[o]),isNaN(i)&&(i=0),0===o?s=i%24:r=i%60}p.splice(n,1)}}if(!f){for(n=0;n<g.length;n++){var b=g[n];if(!(b.length<=0)){for(b=b.substring(0,Math.min(b.length,3)),i=0;i<t.text.months.length;i++){var y=t.text.months[i];if((y=y.substring(0,Math.min(b.length,Math.min(y.length,3))).toLowerCase())===b){c=i+1;break}}if(0<=c)break}}for(n=0;n<p.length;n++)if(i=parseInt(p[n]),!isNaN(i)&&i>=t.centuryBreak&&n===p.length-1){i<=99&&(i+=t.currentCentury-100),u=i,p.splice(n,1);break}if(c<0)for(n=0;n<p.length;n++)if(o=1<n||t.monthFirst?n:1===n?0:1,i=parseInt(p[o]),!isNaN(i)&&1<=i&&i<=12){c=i,p.splice(o,1);break}for(n=0;n<p.length;n++)if(i=parseInt(p[n]),!isNaN(i)&&1<=i&&i<=31){l=i,p.splice(n,1);break}if(u<0)for(n=p.length-1;0<=n;n--)if(i=parseInt(p[n]),!isNaN(i)){i<=99&&(i+=t.currentCentury),u=i,p.splice(n,1);break}}if(!m){if(s<0)for(n=0;n<p.length;n++)if(i=parseInt(p[n]),!isNaN(i)&&0<=i&&i<=23){s=i,p.splice(n,1);break}if(r<0)for(n=0;n<p.length;n++)if(i=parseInt(p[n]),!isNaN(i)&&0<=i&&i<=59){r=i,p.splice(n,1);break}}if(r<0&&s<0&&l<0&&c<0&&u<0)return null;r<0&&(r=0),s<0&&(s=0),l<0&&(l=1),c<0&&(c=1),u<0&&(u=(new Date).getFullYear()),d!==T&&(d?12===s&&(s=0):s<12&&(s+=12));var x=new Date(u,c-1,l,s,r);return x.getMonth()===c-1&&x.getFullYear()===u||(x=new Date(u,c,0,s,r)),isNaN(x.getTime())?null:x}},onChange:function(e,t,n){return!0},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},onSelect:function(e,t){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input",append:".inline.field,.inline.fields"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",weekCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",minDate:"minDate",maxDate:"maxDate",mode:"mode",monthOffset:"monthOffset",message:"message",class:"class"},eventClass:"blue"}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.checkbox=function(u){var d,e=S(this),f=e.selector||"",x=(new Date).getTime(),w=[],C=u,k="string"==typeof C,T=[].slice.call(arguments,1);return e.each(function(){var e,m,g=S.extend(!0,{},S.fn.checkbox.settings,u),t=g.className,n=g.namespace,p=g.selector,s=g.error,i="."+n,o="module-"+n,h=S(this),a=S(this).children(p.label),v=S(this).children(p.input),b=v[0],r=!1,y=!1,l=h.data(o),c=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),l=m,h.data(o,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),h.removeData(o)},fix:{reference:function(){h.is(p.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),h=h.closest(p.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){a=h.children(p.label),v=h.children(p.input),b=v[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),v.addClass(t.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),v.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in D&&((e=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()})).observe(c,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=S(e);t=S.isFunction(m[t])?m[t]:m.toggle,0<n.length?(m.debug("Attaching checkbox events to element",e,t),n.on("click"+i,t)):m.error(s.notFound)},preventDefaultOnInputTarget:function(){"undefined"!=typeof event&&S(event.target).is(p.input)&&(m.verbose("Preventing default check action after manual check action"),event.preventDefault())},event:{change:function(e){m.should.ignoreCallbacks()||g.onChange.call(b)},click:function(e){var t=S(e.target);t.is(p.input)?m.verbose("Using default check action on initialized checkbox"):t.is(p.link)?m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),v.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32,o=27,a=37,r=38,s=39,l=40,c=m.get.radios(),u=c.index(h),d=c.length,f=!1;if(t==a||t==r?f=(0===u?d:u)-1:t!=s&&t!=l||(f=u===d-1?0:u+1),!m.should.ignoreCallbacks()&&!1!==f){if(!1===g.beforeUnchecked.apply(b))return m.verbose("Option not allowed to be unchecked, cancelling key navigation"),!1;if(!1===g.beforeChecked.apply(S(c[f]).children(p.input)[0]))return m.verbose("Next option should not allow check, cancelling key navigation"),!1}y=t==o?(m.verbose("Escape key pressed blurring field"),v.blur(),!0):!(e.ctrlKey||!(t==i||t==n&&g.enableEnterKey))&&(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),!0)},keyup:function(e){y&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",v),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},indeterminate:function(){m.should.allowIndeterminate()?m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),m.should.ignoreCallbacks()||(g.onIndeterminate.call(b),m.trigger.change()))},determinate:function(){m.should.allowDeterminate()?m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),m.should.ignoreCallbacks()||(g.onDeterminate.call(b),m.trigger.change()))},enable:function(){m.is.enabled()?m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),m.should.ignoreCallbacks()||(g.onEnable.call(b),g.onEnabled.call(b),m.trigger.change()))},disable:function(){m.is.disabled()?m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),m.should.ignoreCallbacks()||(g.onDisable.call(b),g.onDisabled.call(b),m.trigger.change()))},get:{radios:function(){var e=m.get.name();return S('input[name="'+e+'"]').closest(p.checkbox)},otherRadios:function(){return m.get.radios().not(h)},name:function(){return v.attr("name")}},is:{initialLoad:function(){return r},radio:function(){return v.hasClass(t.radio)||"radio"==v.attr("type")},indeterminate:function(){return v.prop("indeterminate")!==E&&v.prop("indeterminate")},checked:function(){return v.prop("checked")!==E&&v.prop("checked")},disabled:function(){return v.prop("disabled")!==E&&v.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.is.initialLoad()?(m.debug("Should not allow check, checkbox is already checked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeChecked.apply(b))||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.is.initialLoad()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeUnchecked.apply(b))||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.is.initialLoad()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeIndeterminate.apply(b))||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.is.initialLoad()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeDeterminate.apply(b))||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},ignoreCallbacks:function(){return r&&!g.fireOnInit}},can:{change:function(){return!(h.hasClass(t.disabled)||h.hasClass(t.readOnly)||v.prop("disabled")||v.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){r=!0},checked:function(){m.verbose("Setting class to checked"),h.removeClass(t.indeterminate).addClass(t.checked),m.is.radio()&&m.uncheckOthers(),m.is.indeterminate()||!m.is.checked()?(m.verbose("Setting state to checked",b),v.prop("indeterminate",!1).prop("checked",!0)):m.debug("Input is already checked, skipping input property change")},unchecked:function(){m.verbose("Removing checked class"),h.removeClass(t.indeterminate).removeClass(t.checked),m.is.indeterminate()||!m.is.unchecked()?(m.debug("Setting state to unchecked"),v.prop("indeterminate",!1).prop("checked",!1)):m.debug("Input is already unchecked")},indeterminate:function(){m.verbose("Setting class to indeterminate"),h.addClass(t.indeterminate),m.is.indeterminate()?m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),v.prop("indeterminate",!0))},determinate:function(){m.verbose("Removing indeterminate class"),h.removeClass(t.indeterminate),m.is.determinate()?m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),v.prop("indeterminate",!1))},disabled:function(){m.verbose("Setting class to disabled"),h.addClass(t.disabled),m.is.disabled()?m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),v.prop("disabled","disabled"))},enabled:function(){m.verbose("Removing disabled class"),h.removeClass(t.disabled),m.is.enabled()?m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),v.prop("disabled",!1))},tabbable:function(){m.verbose("Adding tabindex to checkbox"),v.attr("tabindex")===E&&v.attr("tabindex",0)}},remove:{initialLoad:function(){r=!1}},trigger:{change:function(){var e=A.createEvent("HTMLEvents"),t=v[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){0<v.prevAll(p.label).length?(v.prev(p.label).detach().insertAfter(v),m.debug("Moving existing label",a)):m.has.label()||(a=S("<label>").insertAfter(v),m.debug("Creating label",a))}},has:{label:function(){return 0<a.length}},bind:{events:function(){m.verbose("Attaching checkbox events"),h.on("click"+i,m.event.click).on("change"+i,m.event.change).on("keydown"+i,p.input,m.event.keydown).on("keyup"+i,p.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),h.off(i)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(t.checked)},toggle:function(){m.can.change()?m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck()):m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(e,t){if(m.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,g,e);else{if(t===E)return g[e];S.isPlainObject(g[e])?S.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,m,e);else{if(t===E)return m[e];m[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var e=g.name+":",n=0;x=!1,clearTimeout(m.performance.timer),S.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==E||console.table!==E)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):S.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||T,t=c||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E?a=r[t]:m.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(d)?d.push(n):d!==E?d=[d,n]:n!==E&&(d=n),a}},k?(l===E&&m.initialize(),m.invoke(C)):(l!==E&&l.invoke("destroy"),m.initialize())}),d!==E?d:this},S.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,enableEnterKey:!0,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(k,e,T,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.dimmer=function(p){var h,v=k(this),b=(new Date).getTime(),y=[],x=p,w="string"==typeof x,C=[].slice.call(arguments,1);return v.each(function(){var a,t,s,r=k.isPlainObject(p)?k.extend(!0,{},k.fn.dimmer.settings,p):k.extend({},k.fn.dimmer.settings),n=r.selector,e=r.namespace,i=r.className,l=r.error,o="."+e,c="module-"+e,u=v.selector||"",d="ontouchstart"in T.documentElement?"touchstart":"click",f=k(this),m=this,g=f.data(c);(s={preinitialize:function(){a=s.is.dimmer()?(t=f.parent(),f):(t=f,s.has.dimmer()?r.dimmerName?t.find(n.dimmer).filter("."+r.dimmerName):t.find(n.dimmer):s.create())},initialize:function(){s.debug("Initializing dimmer",r),s.bind.events(),s.set.dimmable(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,f.data(c,g)},destroy:function(){s.verbose("Destroying previous module",a),s.unbind.events(),s.remove.variation(),t.off(o)},bind:{events:function(){"hover"==r.on?t.on("mouseenter"+o,s.show).on("mouseleave"+o,s.hide):"click"==r.on&&t.on(d+o,s.toggle),s.is.page()&&(s.debug("Setting as a page dimmer",t),s.set.pageDimmer()),s.is.closable()&&(s.verbose("Adding dimmer close event",a),t.on(d+o,n.dimmer,s.event.click))}},unbind:{events:function(){f.removeData(c),t.off(o)}},event:{click:function(e){s.verbose("Determining if event occured on dimmer",e),0!==a.find(e.target).length&&!k(e.target).is(n.content)||(s.hide(),e.stopImmediatePropagation())}},addContent:function(e){var t=k(e);s.debug("Add content to dimmer",t),t.parent()[0]!==a[0]&&t.detach().appendTo(a)},create:function(){var e=k(r.template.dimmer(r));return r.dimmerName&&(s.debug("Creating named dimmer",r.dimmerName),e.addClass(r.dimmerName)),e.appendTo(t),e},show:function(e){e=k.isFunction(e)?e:function(){},s.debug("Showing dimmer",a,r),s.set.variation(),s.is.dimmed()&&!s.is.animating()||!s.is.enabled()?s.debug("Dimmer is already shown or disabled"):(s.animate.show(e),r.onShow.call(m),r.onChange.call(m))},hide:function(e){e=k.isFunction(e)?e:function(){},s.is.dimmed()||s.is.animating()?(s.debug("Hiding dimmer",a),s.animate.hide(e),r.onHide.call(m),r.onChange.call(m)):s.debug("Dimmer is not visible")},toggle:function(){s.verbose("Toggling dimmer visibility",a),s.is.dimmed()?s.is.closable()&&s.hide():s.show()},animate:{show:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(r.useFlex?(s.debug("Using flex dimmer"),s.remove.legacy()):(s.debug("Using legacy non-flex dimmer"),s.set.legacy()),"auto"!==r.opacity&&s.set.opacity(),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" in",queue:!1,duration:s.get.duration(),useFailSafe:!0,onStart:function(){s.set.dimmed()},onComplete:function(){s.set.active(),e()}})):(s.verbose("Showing dimmer animation with javascript"),s.set.dimmed(),"auto"==r.opacity&&(r.opacity=.8),a.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(s.get.duration(),r.opacity,function(){a.removeAttr("style"),s.set.active(),e()}))},hide:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(s.verbose("Hiding dimmer with css"),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" out",queue:!1,duration:s.get.duration(),useFailSafe:!0,onComplete:function(){s.remove.dimmed(),s.remove.variation(),s.remove.active(),e()}})):(s.verbose("Hiding dimmer with javascript"),a.stop().fadeOut(s.get.duration(),function(){s.remove.dimmed(),s.remove.active(),a.removeAttr("style"),e()}))}},get:{dimmer:function(){return a},duration:function(){return"object"==typeof r.duration?s.is.active()?r.duration.hide:r.duration.show:r.duration}},has:{dimmer:function(){return r.dimmerName?0<f.find(n.dimmer).filter("."+r.dimmerName).length:0<f.find(n.dimmer).length}},is:{active:function(){return a.hasClass(i.active)},animating:function(){return a.is(":animated")||a.hasClass(i.animating)},closable:function(){return"auto"==r.closable?"hover"!=r.on:r.closable},dimmer:function(){return f.hasClass(i.dimmer)},dimmable:function(){return f.hasClass(i.dimmable)},dimmed:function(){return t.hasClass(i.dimmed)},disabled:function(){return t.hasClass(i.disabled)},enabled:function(){return!s.is.disabled()},page:function(){return t.is("body")},pageDimmer:function(){return a.hasClass(i.pageDimmer)}},can:{show:function(){return!a.hasClass(i.disabled)}},set:{opacity:function(e){var t=a.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===r.opacity?0:r.opacity||e,t=i||o?(n[3]=e+")",n.join(",")):"rgba(0, 0, 0, "+e+")",s.debug("Setting opacity to",e),a.css("background-color",t)},legacy:function(){a.addClass(i.legacy)},active:function(){a.addClass(i.active)},dimmable:function(){t.addClass(i.dimmable)},dimmed:function(){t.addClass(i.dimmed)},pageDimmer:function(){a.addClass(i.pageDimmer)},disabled:function(){a.addClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.addClass(e)}},remove:{active:function(){a.removeClass(i.active)},legacy:function(){a.removeClass(i.legacy)},dimmed:function(){t.removeClass(i.dimmed)},disabled:function(){a.removeClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.removeClass(e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===S)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,r.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),s.verbose.apply(console,arguments)))},error:function(){r.silent||(s.error=Function.prototype.bind.call(console.error,console,r.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(s.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",u&&(e+=" '"+u+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||C,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}}).preinitialize(),w?(g===S&&s.initialize(),s.invoke(x)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},k.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},displayLoader:!1,loaderText:!1,loaderVariation:"",onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show",loader:"ui loader"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(e){var t,n=k("<div/>").addClass("ui dimmer");return e.displayLoader&&(t=k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation),e.loaderText&&(t.text(e.loaderText),t.addClass("text")),n.append(t)),n}}}}(jQuery,window,document),function(Z,_,ee,te){"use strict";Z.isFunction=Z.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},_=void 0!==_&&_.Math==Math?_:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),Z.fn.dropdown=function(H){var U,W=Z(this),B=Z(ee),Y=W.selector||"",X="ontouchstart"in ee.documentElement,Q=(new Date).getTime(),G=[],K=H,$="string"==typeof K,J=[].slice.call(arguments,1);return W.each(function(n){var c,e,t,i,o,a,r,s,p,g=Z.isPlainObject(H)?Z.extend(!0,{},Z.fn.dropdown.settings,H):Z.extend({},Z.fn.dropdown.settings),h=g.className,u=g.message,l=g.fields,v=g.keys,b=g.metadata,d=g.namespace,f=g.regExp,y=g.selector,m=g.error,x=g.templates,w="."+d,C="module-"+d,k=Z(this),T=Z(g.context),S=k.find(y.text),D=k.find(y.search),A=k.find(y.sizer),E=k.find(y.input),F=k.find(y.icon),P=k.find(y.clearIcon),R=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),O=k.children(y.menu),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):Z(),j=!1,q=!1,L=!1,V=!1,N=this,z=k.data(C);p={initialize:function(){p.debug("Initializing dropdown",g),p.is.alreadySetup()?p.setup.reference():(g.ignoreDiacritics&&!String.prototype.normalize&&(g.ignoreDiacritics=!1,p.error(m.noNormalize,N)),p.setup.layout(),g.values&&p.change.values(g.values),p.refreshData(),p.save.defaults(),p.restore.selected(),p.create.id(),p.bind.events(),p.observeChanges(),p.instantiate())},instantiate:function(){p.verbose("Storing instance of dropdown",p),z=p,k.data(C,p)},destroy:function(){p.verbose("Destroying previous dropdown",k),p.remove.tabbable(),p.remove.active(),O.transition("stop all"),O.removeClass(h.visible).addClass(h.hidden),k.off(w).removeData(C),O.off(w),B.off(o),p.disconnect.menuObserver(),p.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in _&&(r=new MutationObserver(p.event.select.mutation),s=new MutationObserver(p.event.menu.mutation),p.debug("Setting up mutation observer",r,s),p.observe.select(),p.observe.menu())},disconnect:{menuObserver:function(){s&&s.disconnect()},selectObserver:function(){r&&r.disconnect()}},observe:{select:function(){p.has.input()&&r&&r.observe(k[0],{childList:!0,subtree:!0})},menu:function(){p.has.menu()&&s&&s.observe(O[0],{childList:!0,subtree:!0})}},create:{id:function(){a=(Math.random().toString(16)+"000000000").substr(2,8),o="."+a,p.verbose("Creating unique id for element",a)},userChoice:function(e){var n,i,o;return!!(e=e||p.get.userValues())&&(e=Array.isArray(e)?e:[e],Z.each(e,function(e,t){!1===p.get.item(t)&&(o=g.templates.addition(p.add.variables(u.addResult,t)),i=Z("<div />").html(o).attr("data-"+b.value,t).attr("data-"+b.text,t).addClass(h.addition).addClass(h.item),g.hideAdditions&&i.addClass(h.hidden),n=n===te?i:n.add(i),p.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=p.get.userValues();t&&(p.debug("Adding user labels",t),Z.each(t,function(e,t){p.verbose("Adding custom user value"),p.add.label(t,t)}))},menu:function(){O=Z("<div />").addClass(h.menu).appendTo(k)},sizer:function(){A=Z("<span />").addClass(h.sizer).insertAfter(D)}},search:function(e){e=e!==te?e:p.get.query(),p.verbose("Searching for query",e),p.has.minCharacters(e)?p.filter(e):p.hide()},select:{firstUnfiltered:function(){p.verbose("Selecting first non-filtered element"),p.remove.selectedItem(),M.not(y.unselectable).not(y.addition+y.hidden).eq(0).addClass(h.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),n=e.prevAll(y.item).not(y.unselectable).eq(0);0<t.length?(p.verbose("Moving selection to",t),t.addClass(h.selected)):(p.verbose("Moving selection to",n),n.addClass(h.selected))}},setup:{api:function(){var e={debug:g.debug,urlData:{value:p.get.value(),query:p.get.query()},on:!1};p.verbose("First request, initializing API"),k.api(e)},layout:function(){k.is("select")&&(p.setup.select(),p.setup.returnedObject()),p.has.menu()||p.create.menu(),p.is.selection()&&p.is.clearable()&&!p.has.clearItem()&&(p.verbose("Adding clear icon"),P=Z("<i />").addClass("remove icon").insertBefore(S)),p.is.search()&&!p.has.search()&&(p.verbose("Adding search input"),D=Z("<input />").addClass(h.search).prop("autocomplete","off").insertBefore(S)),p.is.multiple()&&p.is.searchSelection()&&!p.has.sizer()&&p.create.sizer(),g.allowTab&&p.set.tabbable()},select:function(){var e=p.get.selectValues();p.debug("Dropdown initialized on a select",e),k.is("select")&&(E=k),0<E.parent(y.dropdown).length?(p.debug("UI dropdown already exists. Creating dropdown menu only"),k=E.closest(y.dropdown),p.has.menu()||p.create.menu(),O=k.children(y.menu),p.setup.menu(e)):(p.debug("Creating entire dropdown from select"),k=Z("<div />").attr("class",E.attr("class")).addClass(h.selection).addClass(h.dropdown).html(x.dropdown(e,l,g.preserveHTML,g.className)).insertBefore(E),E.hasClass(h.multiple)&&!1===E.prop("multiple")&&(p.error(m.missingMultiple),E.prop("multiple",!0)),E.is("[multiple]")&&p.set.multiple(),E.prop("disabled")&&(p.debug("Disabling dropdown"),k.addClass(h.disabled)),E.removeAttr("class").detach().prependTo(k)),p.refresh()},menu:function(e){O.html(x.menu(e,l,g.preserveHTML,g.className)),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):Z()},reference:function(){p.debug("Dropdown behavior was called on select, replacing with closest dropdown"),k=k.parent(y.dropdown),z=k.data(C),N=k.get(0),p.refresh(),p.setup.returnedObject()},returnedObject:function(){var e=W.slice(0,n),t=W.slice(n+1);W=e.add(k).add(t)}},refresh:function(){p.refreshSelectors(),p.refreshData()},refreshItems:function(){M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):Z()},refreshSelectors:function(){p.verbose("Refreshing selector cache"),S=k.find(y.text),D=k.find(y.search),E=k.find(y.input),F=k.find(y.icon),R=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),O=k.children(y.menu),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):Z()},refreshData:function(){p.verbose("Refreshing cached metadata"),M.removeData(b.text).removeData(b.value)},clearData:function(){p.verbose("Clearing metadata"),M.removeData(b.text).removeData(b.value),k.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)},toggle:function(){p.verbose("Toggling menu visibility"),p.is.active()?p.hide():p.show()},show:function(e){if(e=Z.isFunction(e)?e:function(){},!p.can.show()&&p.is.remote()&&(p.debug("No API results retrieved, searching before show"),p.queryRemote(p.get.query(),p.show)),p.can.show()&&!p.is.active()){if(p.debug("Showing dropdown"),!p.has.message()||p.has.maxSelections()||p.has.allResultsFiltered()||p.remove.message(),p.is.allFiltered())return!0;!1!==g.onShow.call(N)&&p.animate.show(function(){p.can.click()&&p.bind.intent(),p.has.search()&&p.focusSearch(),p.set.visible(),e.call(N)})}},hide:function(e){e=Z.isFunction(e)?e:function(){},p.is.active()&&!p.is.animatingOutward()?(p.debug("Hiding dropdown"),!1!==g.onHide.call(N)&&p.animate.hide(function(){p.remove.visible(),p.is.focusedOnSearch()&&D.blur(),e.call(N)})):p.can.click()&&p.unbind.intent()},hideOthers:function(){p.verbose("Finding other dropdowns to hide"),W.not(k).has(y.menu+"."+h.visible).dropdown("hide")},hideMenu:function(){p.verbose("Hiding menu  instantaneously"),p.remove.active(),p.remove.visible(),O.transition("hide")},hideSubMenus:function(){var e=O.children(y.item).find(y.menu);p.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){X&&p.bind.touchEvents(),p.bind.keyboardEvents(),p.bind.inputEvents(),p.bind.mouseEvents()},touchEvents:function(){p.debug("Touch device detected binding additional touch events"),p.is.searchSelection()||p.is.single()&&k.on("touchstart"+w,p.event.test.toggle),O.on("touchstart"+w,y.item,p.event.item.mouseenter)},keyboardEvents:function(){p.verbose("Binding keyboard events"),k.on("keydown"+w,p.event.keydown),p.has.search()&&k.on(p.get.inputEvent()+w,y.search,p.event.input),p.is.multiple()&&B.on("keydown"+o,p.event.document.keydown)},inputEvents:function(){p.verbose("Binding input change events"),k.on("change"+w,y.input,p.event.change)},mouseEvents:function(){p.verbose("Binding mouse events"),p.is.multiple()&&k.on("click"+w,y.label,p.event.label.click).on("click"+w,y.remove,p.event.remove.click),p.is.searchSelection()?(k.on("mousedown"+w,p.event.mousedown).on("mouseup"+w,p.event.mouseup).on("mousedown"+w,y.menu,p.event.menu.mousedown).on("mouseup"+w,y.menu,p.event.menu.mouseup).on("click"+w,y.icon,p.event.icon.click).on("click"+w,y.clearIcon,p.event.clearIcon.click).on("focus"+w,y.search,p.event.search.focus).on("click"+w,y.search,p.event.search.focus).on("blur"+w,y.search,p.event.search.blur).on("click"+w,y.text,p.event.text.focus),p.is.multiple()&&k.on("click"+w,p.event.click)):("click"==g.on?k.on("click"+w,y.icon,p.event.icon.click).on("click"+w,p.event.test.toggle):"hover"==g.on?k.on("mouseenter"+w,p.delay.show).on("mouseleave"+w,p.delay.hide):k.on(g.on+w,p.toggle),k.on("mousedown"+w,p.event.mousedown).on("mouseup"+w,p.event.mouseup).on("focus"+w,p.event.focus).on("click"+w,y.clearIcon,p.event.clearIcon.click),p.has.menuSearch()?k.on("blur"+w,y.search,p.event.search.blur):k.on("blur"+w,p.event.blur)),O.on("mouseenter"+w,y.item,p.event.item.mouseenter).on("mouseleave"+w,y.item,p.event.item.mouseleave).on("click"+w,y.item,p.event.item.click)},intent:function(){p.verbose("Binding hide intent event to document"),X&&B.on("touchstart"+o,p.event.test.touch).on("touchmove"+o,p.event.test.touch),B.on("click"+o,p.event.test.hide)}},unbind:{intent:function(){p.verbose("Removing hide intent event from document"),X&&B.off("touchstart"+o).off("touchmove"+o),B.off("click"+o)}},filter:function(e){function t(){p.is.multiple()&&p.filterActive(),(e||!e&&0==p.get.activeItem().length)&&p.select.firstUnfiltered(),p.has.allResultsFiltered()?g.onNoResults.call(N,n)?g.allowAdditions?g.hideAdditions&&(p.verbose("User addition with no menu, setting empty style"),p.set.empty(),p.hideMenu()):(p.verbose("All items filtered, showing message",n),p.add.message(u.noResults)):(p.verbose("All items filtered, hiding dropdown",n),p.hideMenu()):(p.remove.empty(),p.remove.message()),g.allowAdditions&&p.add.userSuggestion(p.escape.htmlEntities(e)),p.is.searchSelection()&&p.can.show()&&p.is.focusedOnSearch()&&p.show()}var n=e!==te?e:p.get.query();g.useLabels&&p.has.maxSelections()||(g.apiSettings?p.can.useAPI()?p.queryRemote(n,function(){g.filterRemoteData&&p.filterItems(n);var e=E.val();Array.isArray(e)||(e=e&&""!==e?e.split(g.delimiter):[]),Z.each(e,function(e,t){M.filter('[data-value="'+t+'"]').addClass(h.filtered)}),t()}):p.error(m.noAPI):(p.filterItems(n),t()))},queryRemote:function(e,n){var t={errorDuration:!1,cache:"local",throttle:g.throttle,urlData:{query:e},onError:function(){p.add.message(u.serverError),n()},onFailure:function(){p.add.message(u.serverError),n()},onSuccess:function(e){var t=e[l.remoteValues];Array.isArray(t)||(t=[]),p.remove.message(),p.setup.menu({values:t}),0!==t.length||g.allowAdditions||p.add.message(u.noResults),n()}};k.api("get request")||p.setup.api(),t=Z.extend(!0,{},t,g.apiSettings),k.api("setting",t).api("query")},filterItems:function(e){var i=p.remove.diacritics(e!==te?e:p.get.query()),o=null,t=p.escape.string(i),a=new RegExp("^"+t,"igm");p.has.query()&&(o=[],p.verbose("Searching for matching values",i),M.each(function(){var e,t,n=Z(this);if("both"===g.match||"text"===g.match){if(-1!==(e=p.remove.diacritics(String(p.get.choiceText(n,!1)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,e))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,e))return o.push(this),!0}if("both"===g.match||"value"===g.match){if(-1!==(t=p.remove.diacritics(String(p.get.choiceValue(n,e)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,t))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,t))return o.push(this),!0}})),p.debug("Showing only matched items",i),p.remove.filteredItem(),o&&M.not(o).addClass(h.filtered),p.has.query()?!0===g.hideDividers?I.addClass(h.hidden):"empty"===g.hideDividers&&I.removeClass(h.hidden).filter(function(){var e=Z(this).nextUntil(y.item);return 0===(e.length?e:Z(this)).nextUntil(y.divider).filter(y.item+":not(."+h.filtered+")").length}).addClass(h.hidden):I.removeClass(h.hidden)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},filterActive:function(){g.useLabels&&M.filter("."+h.active).addClass(h.filtered)},focusSearch:function(e){p.has.search()&&!p.is.focusedOnSearch()&&(e?(k.off("focus"+w,y.search),D.focus(),k.on("focus"+w,y.search,p.event.search.focus)):D.focus())},blurSearch:function(){p.has.search()&&D.blur()},forceSelection:function(){var e=M.not(h.filtered).filter("."+h.selected).eq(0),t=M.not(h.filtered).filter("."+h.active).eq(0),n=0<e.length?e:t;0<n.length&&!p.is.multiple()?(p.debug("Forcing partial selection to selected item",n),p.event.item.click.call(n,{},!0)):(g.allowAdditions&&p.set.selected(p.get.query()),p.remove.searchTerm())},change:{values:function(e){g.allowAdditions||p.clear(),p.debug("Creating dropdown with specified values",e),p.setup.menu({values:e}),Z.each(e,function(e,t){if(1==t.selected&&(p.debug("Setting initial selection to",t[l.value]),p.set.selected(t[l.value]),!p.is.multiple()))return!1})}},event:{change:function(){L||(p.debug("Input changed, updating selection"),p.set.selected())},focus:function(){g.showOnFocus&&!j&&p.is.hidden()&&!t&&p.show()},blur:function(e){t=ee.activeElement===this,j||t||(p.remove.activeLabel(),p.hide())},mousedown:function(){p.is.searchSelection()?i=!0:j=!0},mouseup:function(){p.is.searchSelection()?i=!1:j=!1},click:function(e){Z(e.target).is(k)&&(p.is.focusedOnSearch()?p.show():p.focusSearch())},search:{focus:function(e){j=!0,p.is.multiple()&&p.remove.activeLabel(),(g.showOnFocus||"focus"!==e.type&&"focusin"!==e.type)&&p.search()},blur:function(e){t=ee.activeElement===this,p.is.searchSelection()&&!i&&(q||t||(g.forceSelection&&p.forceSelection(),p.hide())),i=!1}},clearIcon:{click:function(e){p.clear(),p.is.searchSelection()&&p.remove.searchTerm(),p.hide(),e.stopPropagation()}},icon:{click:function(e){V=!0,p.has.search()?p.is.active()?p.blurSearch():g.showOnFocus?p.focusSearch():p.toggle():p.toggle()}},text:{focus:function(e){j=!0,p.focusSearch()}},input:function(e){(p.is.multiple()||p.is.searchSelection())&&p.set.filtered(),clearTimeout(p.timer),p.timer=setTimeout(p.search,g.delay.search)},label:{click:function(e){var t=Z(this),n=k.find(y.label),i=n.filter("."+h.active),o=t.nextAll("."+h.active),a=t.prevAll("."+h.active),r=0<o.length?t.nextUntil(o).add(i).add(t):t.prevUntil(a).add(i).add(t);e.shiftKey?(i.removeClass(h.active),r.addClass(h.active)):e.ctrlKey?t.toggleClass(h.active):(i.removeClass(h.active),t.addClass(h.active)),g.onLabelSelect.apply(this,n.filter("."+h.active))}},remove:{click:function(){var e=Z(this).parent();e.hasClass(h.active)?p.remove.activeLabels():p.remove.activeLabels(e)}},test:{toggle:function(e){var t=p.is.multiple()?p.show:p.toggle;p.is.bubbledLabelClick(e)||p.is.bubbledIconClick(e)||p.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){p.determine.eventOnElement(e,function(){"touchstart"==e.type?p.timer=setTimeout(function(){p.hide()},g.delay.touch):"touchmove"==e.type&&clearTimeout(p.timer)}),e.stopPropagation()},hide:function(e){p.determine.eventInModule(e,p.hide)&&N.id&&Z(e.target).attr("for")===N.id&&e.preventDefault()}},select:{mutation:function(e){p.debug("<select> modified, recreating menu"),p.is.selectMutation(e)&&(p.disconnect.selectObserver(),p.refresh(),p.setup.select(),p.set.selected(),p.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?Z(t.addedNodes[0]):Z(!1),i=t.removedNodes?Z(t.removedNodes[0]):Z(!1),o=n.add(i),a=o.is(y.addition)||0<o.closest(y.addition).length,r=o.is(y.message)||0<o.closest(y.message).length;a||r?(p.debug("Updating item selector cache"),p.refreshItems()):(p.debug("Menu modified, updating selector cache"),p.refresh())},mousedown:function(){q=!0},mouseup:function(){q=!1}},item:{mouseenter:function(e){var t=Z(e.target),n=Z(this),i=n.children(y.menu),o=n.siblings(y.item).children(y.menu),a=0<i.length;0<i.find(t).length||!a||(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Showing sub-menu",i),Z.each(o,function(){p.animate.hide(!1,Z(this))}),p.animate.show(!1,i)},g.delay.show),e.preventDefault())},mouseleave:function(e){var t=Z(this).children(y.menu);0<t.length&&(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Hiding sub-menu",t),p.animate.hide(!1,t)},g.delay.hide))},click:function(e,t){var n=Z(this),i=Z(e?e.target:""),o=n.find(y.menu),a=p.get.choiceText(n),r=p.get.choiceValue(n,a),s=0<o.length,l=0<o.find(i).length;"input"!==ee.activeElement.tagName.toLowerCase()&&Z(ee.activeElement).blur(),l||s&&!g.allowCategorySelection||(p.is.searchSelection()&&(g.allowAdditions&&p.remove.userAddition(),p.remove.searchTerm(),p.is.focusedOnSearch()||1==t||p.focusSearch(!0)),g.useLabels||(p.remove.filteredItem(),p.set.scrollPosition(n)),p.determine.selectAction.call(this,a,r))}},document:{keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n=k.find(y.label),i=n.filter("."+h.active),o=(i.data(b.value),n.index(i)),a=n.length,r=0<i.length,s=1<i.length,l=0===o,c=o+1==a,u=p.is.searchSelection(),d=p.is.focusedOnSearch(),f=p.is.focused(),m=d&&0===p.get.caretPosition(!1),g=m&&0!==p.get.caretPosition(!0);if(u&&!r&&!d)return;t==v.leftArrow?!f&&!m||r?r&&(e.shiftKey?p.verbose("Adding previous label to selection"):(p.verbose("Selecting previous label"),n.removeClass(h.active)),l&&!s?i.addClass(h.active):i.prev(y.siblingLabel).addClass(h.active).end(),e.preventDefault()):(p.verbose("Selecting previous label"),n.last().addClass(h.active)):t==v.rightArrow?(f&&!r&&n.first().addClass(h.active),r&&(e.shiftKey?p.verbose("Adding next label to selection"):(p.verbose("Selecting next label"),n.removeClass(h.active)),c?u?d?n.removeClass(h.active):p.focusSearch():s?i.next(y.siblingLabel).addClass(h.active):i.addClass(h.active):i.next(y.siblingLabel).addClass(h.active),e.preventDefault())):t==v.deleteKey||t==v.backspace?r?(p.verbose("Removing active labels"),c&&u&&!d&&p.focusSearch(),i.last().next(y.siblingLabel).addClass(h.active),p.remove.activeLabels(i),e.preventDefault()):!m||g||r||t!=v.backspace||(p.verbose("Removing last label on input backspace"),i=n.last().addClass(h.active),p.remove.activeLabels(i)):i.removeClass(h.active)}}},keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n,i=M.not(y.unselectable).filter("."+h.selected).eq(0),o=O.children("."+h.active).eq(0),a=0<i.length?i:o,r=0<a.length?a.siblings(":not(."+h.filtered+")").addBack():O.children(":not(."+h.filtered+")"),s=a.children(y.menu),l=a.closest(y.menu),c=l.hasClass(h.visible)||l.hasClass(h.animating)||0<l.parent(y.menu).length,u=0<s.length,d=0<a.length,f=0<a.not(y.unselectable).length,m=t==v.delimiter&&g.allowAdditions&&p.is.multiple();if(g.allowAdditions&&g.hideAdditions&&(t==v.enter||m)&&f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&p.remove.searchTerm(),p.is.multiple()&&e.preventDefault()),p.is.visible()){if(t!=v.enter&&!m||(t==v.enter&&d&&u&&!g.allowCategorySelection?(p.verbose("Pressed enter on unselectable category, opening sub menu"),t=v.rightArrow):f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&(p.remove.searchTerm(),p.is.multiple()&&D.focus())),e.preventDefault()),d&&(t==v.leftArrow&&l[0]!==O[0]&&(p.verbose("Left key pressed, closing sub-menu"),p.animate.hide(!1,l),a.removeClass(h.selected),l.closest(y.item).addClass(h.selected),e.preventDefault()),t==v.rightArrow&&u&&(p.verbose("Right key pressed, opening sub-menu"),p.animate.show(!1,s),a.removeClass(h.selected),s.find(y.item).eq(0).addClass(h.selected),e.preventDefault())),t==v.upArrow){if(n=d&&c?a.prevAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0),r.index(n)<0)return p.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();p.verbose("Up key pressed, changing active item"),a.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}if(t==v.downArrow){if(0===(n=d&&c?n=a.nextAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0)).length)return p.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();p.verbose("Down key pressed, changing active item"),M.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}t==v.pageUp&&(p.scrollPage("up"),e.preventDefault()),t==v.pageDown&&(p.scrollPage("down"),e.preventDefault()),t==v.escape&&(p.verbose("Escape key pressed, closing dropdown"),p.hide())}else m&&e.preventDefault(),t!=v.downArrow||p.is.visible()||(p.verbose("Down key pressed, showing dropdown"),p.show(),e.preventDefault())}else p.has.search()||p.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=ee.createEvent("HTMLEvents"),t=E[0];t&&(p.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(e,t){c=!0,p.verbose("Determining action",g.action),Z.isFunction(p.action[g.action])?(p.verbose("Triggering preset action",g.action,e,t),p.action[g.action].call(N,e,t,this)):Z.isFunction(g.action)?(p.verbose("Triggering user action",g.action,e,t),g.action.call(N,e,t,this)):p.error(m.action,g.action),c=!1},eventInModule:function(e,t){var n=Z(e.target),i=0<n.closest(ee.documentElement).length,o=0<n.closest(k).length;return t=Z.isFunction(t)?t:function(){},i&&!o?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=Z(e.target),i=n.closest(y.siblingLabel),o=ee.body.contains(e.target),a=0===k.find(i).length||!(p.is.multiple()&&g.useLabels),r=0===n.closest(O).length;return t=Z.isFunction(t)?t:function(){},o&&a&&r?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){t=t!==te?t:e,p.can.activate(Z(n))&&(p.set.selected(t,Z(n)),p.is.multiple()||p.hideAndClear())},select:function(e,t,n){t=t!==te?t:e,p.can.activate(Z(n))&&(p.set.value(t,e,Z(n)),p.is.multiple()||p.hideAndClear())},combo:function(e,t,n){t=t!==te?t:e,p.set.selected(t,Z(n)),p.hideAndClear()},hide:function(e,t,n){p.set.value(t,e,Z(n)),p.hideAndClear()}},get:{id:function(){return a},defaultText:function(){return k.data(b.defaultText)},defaultValue:function(){return k.data(b.defaultValue)},placeholderText:function(){return"auto"!=g.placeholder&&"string"==typeof g.placeholder?g.placeholder:k.data(b.placeholderText)||""},text:function(){return S.text()},query:function(){return Z.trim(D.val())},searchWidth:function(e){return e=e!==te?e:D.val(),A.text(e),Math.ceil(A.width()+1)},selectionCount:function(){var e=p.get.values();return p.is.multiple()?Array.isArray(e)?e.length:0:""!==p.get.value()?1:0},transition:function(e){return"auto"==g.transition?p.is.upward(e)?"slide up":"slide down":g.transition},userValues:function(){var e=p.get.values();return!!e&&(e=Array.isArray(e)?e:[e],Z.grep(e,function(e){return!1===p.get.item(e)}))},uniqueArray:function(n){return Z.grep(n,function(e,t){return Z.inArray(e,n)===t})},caretPosition:function(e){var t,n,i=D.get(0);return e&&"selectionEnd"in i?i.selectionEnd:!e&&"selectionStart"in i?i.selectionStart:ee.selection?(i.focus(),n=(t=ee.selection.createRange()).text.length,e?n:(t.moveStart("character",-i.value.length),t.text.length-n)):void 0},value:function(){var e=0<E.length?E.val():k.data(b.value),t=Array.isArray(e)&&1===e.length&&""===e[0];return e===te||t?"":e},values:function(){var e=p.get.value();return""===e?"":!p.has.selectInput()&&p.is.multiple()?"string"==typeof e?p.escape.htmlEntities(e).split(g.delimiter):"":e},remoteValues:function(){var e=p.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),Z.each(e,function(e,t){var n=p.read.remoteData(t);p.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==te?t:g.preserveHTML,e)return 0<e.find(y.menu).length&&(p.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(y.menu).remove(),e.find(y.menuIcon).remove()),e.data(b.text)!==te?e.data(b.text):t?Z.trim(e.html()):Z.trim(e.text())},choiceValue:function(e,t){return t=t||p.get.choiceText(e),!!e&&(e.data(b.value)!==te?String(e.data(b.value)):"string"==typeof t?Z.trim(t.toLowerCase()):String(t))},inputEvent:function(){var e=D[0];return!!e&&(e.oninput!==te?"input":e.onpropertychange!==te?"propertychange":"keyup")},selectValues:function(){var a={},r=[];return a.values=[],k.find("option").each(function(){var e=Z(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==te?e.attr("value"):t,o=e.parent("optgroup");"auto"===g.placeholder&&""===i?a.placeholder=t:(o.length===r.length&&o[0]===r[0]||(a.values.push({type:"header",divider:g.headerDivider,name:o.attr("label")||""}),r=o),a.values.push({name:t,value:i,disabled:n}))}),g.placeholder&&"auto"!==g.placeholder&&(p.debug("Setting placeholder value to",g.placeholder),a.placeholder=g.placeholder),g.sortSelect?(!0===g.sortSelect?a.values.sort(function(e,t){return e.name.localeCompare(t.name)}):"natural"===g.sortSelect?a.values.sort(function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}):Z.isFunction(g.sortSelect)&&a.values.sort(g.sortSelect),p.debug("Retrieved and sorted values from select",a)):p.debug("Retrieved values from select",a),a},activeItem:function(){return M.filter("."+h.active)},selectedItem:function(){var e=M.not(y.unselectable).filter("."+h.selected);return 0<e.length?e:M.eq(0)},itemWithAdditions:function(e){var t=p.get.item(e),n=p.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,o){var e,a,r=!1;return i=i!==te?i:p.get.values()!==te?p.get.values():p.get.text(),e=(a=p.is.multiple()&&Array.isArray(i))?0<i.length:i!==te&&null!==i,o=""===i||!1===i||!0===i||(o||!1),e&&M.each(function(){var e=Z(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);if(null!==n&&n!==te)if(a)-1!==Z.inArray(String(n),i)&&(r=r?r.add(e):e);else if(o){if(p.verbose("Ambiguous dropdown value using strict type check",e,i),n===i)return r=e,!0}else if(String(n)==String(i))return p.verbose("Found select item by value",n,i),r=e,!0}),r}},check:{maxSelections:function(e){return!g.maxSelections||((e=e!==te?e:p.get.selectionCount())>=g.maxSelections?(p.debug("Maximum selection count reached"),g.useLabels&&(M.addClass(h.filtered),p.add.message(u.maxSelections)),!0):(p.verbose("No longer at maximum selection count"),p.remove.message(),p.remove.filteredItem(),p.is.searchSelection()&&p.filterItems(),!1))}},restore:{defaults:function(){p.clear(),p.restore.defaultText(),p.restore.defaultValue()},defaultText:function(){var e=p.get.defaultText();e===p.get.placeholderText?(p.debug("Restoring default placeholder text",e),p.set.placeholderText(e)):(p.debug("Restoring default text",e),p.set.text(e))},placeholderText:function(){p.set.placeholderText()},defaultValue:function(){var e=p.get.defaultValue();e!==te&&(p.debug("Restoring default value",e),""!==e?(p.set.value(e),p.set.selected()):(p.remove.activeItem(),p.remove.selectedItem()))},labels:function(){g.allowAdditions&&(g.useLabels||(p.error(m.labels),g.useLabels=!0),p.debug("Restoring selected values"),p.create.userLabels()),p.check.maxSelections()},selected:function(){p.restore.values(),p.is.multiple()?(p.debug("Restoring previously selected values and labels"),p.restore.labels()):p.debug("Restoring previously selected values")},values:function(){p.set.initialLoad(),g.apiSettings&&g.saveRemoteData&&p.get.remoteValues()?p.restore.remoteValues():p.set.selected();var e=p.get.value();!e||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection),p.remove.initialLoad()},remoteValues:function(){var e=p.get.remoteValues();p.debug("Recreating selected from session data",e),e&&(p.is.single()?Z.each(e,function(e,t){p.set.text(t)}):Z.each(e,function(e,t){p.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(_.Storage!==te)return(t=sessionStorage.getItem(e))!==te&&t;p.error(m.noStorage)}},save:{defaults:function(){p.save.defaultText(),p.save.placeholderText(),p.save.defaultValue()},defaultValue:function(){var e=p.get.value();p.verbose("Saving default value as",e),k.data(b.defaultValue,e)},defaultText:function(){var e=p.get.text();p.verbose("Saving default text as",e),k.data(b.defaultText,e)},placeholderText:function(){var e;!1!==g.placeholder&&S.hasClass(h.placeholder)&&(e=p.get.text(),p.verbose("Saving placeholder text as",e),k.data(b.placeholderText,e))},remoteData:function(e,t){_.Storage!==te?(p.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):p.error(m.noStorage)}},clear:function(){p.is.multiple()&&g.useLabels?p.remove.labels():(p.remove.activeItem(),p.remove.selectedItem(),p.remove.filteredItem()),p.set.placeholderText(),p.clearValue()},clearValue:function(){p.set.value("")},scrollPage:function(e,t){var n,i,o=t||p.get.selectedItem(),a=o.closest(y.menu),r=a.outerHeight(),s=a.scrollTop(),l=M.eq(0).outerHeight(),c=Math.floor(r/l),u=(a.prop("scrollHeight"),"up"==e?s-l*c:s+l*c),d=M.not(y.unselectable);i="up"==e?d.index(o)-c:d.index(o)+c,0<(n=("up"==e?0<=i:i<d.length)?d.eq(i):"up"==e?d.first():d.last()).length&&(p.debug("Scrolling page",e,n),o.removeClass(h.selected),n.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),a.scrollTop(u))},set:{filtered:function(){var e=p.is.multiple(),t=p.is.searchSelection(),n=e&&t,i=t?p.get.query():"",o="string"==typeof i&&0<i.length,a=p.get.searchWidth(),r=""!==i;e&&o&&(p.verbose("Adjusting input width",a,g.glyphWidth),D.css("width",a)),o||n&&r?(p.verbose("Hiding placeholder text"),S.addClass(h.filtered)):e&&(!n||r)||(p.verbose("Showing placeholder text"),S.removeClass(h.filtered))},empty:function(){k.addClass(h.empty)},loading:function(){k.addClass(h.loading)},placeholderText:function(e){e=e||p.get.placeholderText(),p.debug("Setting placeholder text",e),p.set.text(e),S.addClass(h.placeholder)},tabbable:function(){p.is.searchSelection()?(p.debug("Added tabindex to searchable dropdown"),D.val("").attr("tabindex",0),O.attr("tabindex",-1)):(p.debug("Added tabindex to dropdown"),k.attr("tabindex")===te&&(k.attr("tabindex",0),O.attr("tabindex",-1)))},initialLoad:function(){p.verbose("Setting initial load"),e=!0},activeItem:function(e){g.allowAdditions&&0<e.filter(y.addition).length?e.addClass(h.filtered):e.addClass(h.active)},partialSearch:function(e){var t=p.get.query().length;D.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r,s;n=(e=e||p.get.selectedItem()).closest(y.menu),i=e&&0<e.length,t=t!==te&&t,0===p.get.activeItem().length&&(t=!1),e&&0<n.length&&i&&(e.position().top,n.addClass(h.loading),o=(a=n.scrollTop())-n.offset().top+e.offset().top,t||(s=a+n.height()<o+5,r=o-5<a),p.debug("Scrolling to active item",o),(t||r||s)&&n.scrollTop(o),n.removeClass(h.loading))},text:function(e){"combo"===g.action?(p.debug("Changing combo button text",e,R),g.preserveHTML?R.html(e):R.text(e)):"activate"===g.action&&(e!==p.get.placeholderText()&&S.removeClass(h.placeholder),p.debug("Changing text",e,S),S.removeClass(h.filtered),g.preserveHTML?S.html(e):S.text(e))},selectedItem:function(e){var t=p.get.choiceValue(e),n=p.get.choiceText(e,!1),i=p.get.choiceText(e,!0);p.debug("Setting user selection to item",e),p.remove.activeItem(),p.set.partialSearch(n),p.set.activeItem(e),p.set.selected(t,e),p.set.text(i)},selectedLetter:function(e){var t,n=M.filter("."+h.selected),i=0<n.length&&p.has.firstLetter(n,e),o=!1;i&&(t=n.nextAll(M).eq(0),p.has.firstLetter(t,e)&&(o=t)),o||M.each(function(){if(p.has.firstLetter(Z(this),e))return o=Z(this),!1}),o&&(p.verbose("Scrolling to next value with letter",e),p.set.scrollPosition(o),n.removeClass(h.selected),o.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(o))},direction:function(e){"auto"==g.direction?(e?p.is.upward(e)&&p.remove.upward(e):p.remove.upward(),p.can.openDownward(e)?p.remove.upward(e):p.set.upward(e),p.is.leftward(e)||p.can.openRightward(e)||p.set.leftward(e)):"upward"==g.direction&&p.set.upward(e)},upward:function(e){(e||k).addClass(h.upward)},leftward:function(e){(e||O).addClass(h.leftward)},value:function(e,t,n){e===te||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection);var i=p.escape.value(e),o=0<E.length,a=p.get.values(),r=e!==te?String(e):e;if(o){if(!g.allowReselection&&r==a&&(p.verbose("Skipping value update already same value",e,a),!p.is.initialLoad()))return;p.is.single()&&p.has.selectInput()&&p.can.extendSelect()&&(p.debug("Adding user option",e),p.add.optionValue(e)),p.debug("Updating input value",i,a),L=!0,E.val(i),!1===g.fireOnInit&&p.is.initialLoad()?p.debug("Input native change event ignored on initial load"):p.trigger.change(),L=!1}else p.verbose("Storing value in metadata",i,E),i!==a&&k.data(b.value,r);!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onChange):g.onChange.call(N,e,t,n)},active:function(){k.addClass(h.active)},multiple:function(){k.addClass(h.multiple)},visible:function(){k.addClass(h.visible)},exactly:function(e,t){p.debug("Setting selected to exact values"),p.clear(),p.set.selected(e,t)},selected:function(e,s){var l=p.is.multiple();(s=g.allowAdditions?s||p.get.itemWithAdditions(e):s||p.get.item(e))&&(p.debug("Setting selected menu item to",s),p.is.multiple()&&p.remove.searchWidth(),p.is.single()?(p.remove.activeItem(),p.remove.selectedItem()):g.useLabels&&p.remove.selectedItem(),s.each(function(){var e=Z(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t),i=e.hasClass(h.filtered),o=e.hasClass(h.active),a=e.hasClass(h.addition),r=l&&1==s.length;l?!o||a?(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),g.useLabels?(p.add.label(n,t,r),p.add.value(n,t,e),p.set.activeItem(e),p.filterActive(),p.select.nextAvailable(s)):(p.add.value(n,t,e),p.set.text(p.add.variables(u.count)),p.set.activeItem(e))):i||!g.useLabels&&!c||(p.debug("Selected active value, removing label"),p.remove.selected(n)):(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),p.set.text(t),p.set.value(n,t,e),e.addClass(h.active).addClass(h.selected))}))}},add:{label:function(e,t,n){var i,o=p.is.searchSelection()?D:S,a=p.escape.value(e);g.ignoreCase&&(a=a.toLowerCase()),i=Z("<a />").addClass(h.label).attr("data-"+b.value,a).html(x.label(a,t,g.preserveHTML,g.className)),i=g.onLabelCreate.call(i,a,t),p.has.label(e)?p.debug("User selection already exists, skipping",a):(g.label.variation&&i.addClass(g.label.variation),!0===n?(p.debug("Animating in label",i),i.addClass(h.hidden).insertBefore(o).transition({animation:g.label.transition,debug:g.debug,verbose:g.verbose,duration:g.label.duration})):(p.debug("Adding selection label",i),i.insertBefore(o)))},message:function(e){var t=O.children(y.message),n=g.templates.message(p.add.variables(e));0<t.length?t.html(n):t=Z("<div/>").html(n).addClass(h.message).appendTo(O)},optionValue:function(e){var t=p.escape.value(e);0<E.find('option[value="'+p.escape.string(t)+'"]').length||(p.disconnect.selectObserver(),p.is.single()&&(p.verbose("Removing previous user addition"),E.find("option."+h.addition).remove()),Z("<option/>").prop("value",t).addClass(h.addition).html(e).appendTo(E),p.verbose("Adding user addition as an <option>",e),p.observe.select())},userSuggestion:function(e){var t,n=O.children(y.addition),i=p.get.item(e),o=i&&i.not(y.addition).length,a=0<n.length;g.useLabels&&p.has.maxSelections()||(""===e||o?n.remove():(a?(n.data(b.value,e).data(b.text,e).attr("data-"+b.value,e).attr("data-"+b.text,e).removeClass(h.filtered),g.hideAdditions||(t=g.templates.addition(p.add.variables(u.addResult,e)),n.html(t)),p.verbose("Replacing user suggestion with new value",n)):((n=p.create.userChoice(e)).prependTo(O),p.verbose("Adding item choice to menu corresponding with user choice addition",n)),g.hideAdditions&&!p.is.allFiltered()||n.addClass(h.selected).siblings().removeClass(h.selected),p.refreshItems()))},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return p.verbose("Adding templated variables to message",e),o&&(n=p.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=p.get.selectionCount(),e=e.replace("{maxCount}",g.maxSelections)),r&&(i=t||p.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,o=p.get.values();p.has.value(e)?p.debug("Value already selected"):""!==e?(i=Array.isArray(o)?(i=o.concat([e]),p.get.uniqueArray(i)):[e],p.has.selectInput()?p.can.extendSelect()&&(p.debug("Adding value to select",e,i,E),p.add.optionValue(e)):(i=i.join(g.delimiter),p.debug("Setting hidden input to delimited value",i,E)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("Skipping onadd callback on initial load",g.onAdd):g.onAdd.call(N,e,t,n),p.set.value(i,e,t,n),p.check.maxSelections()):p.debug("Cannot select blank values from multiselect")}},remove:{active:function(){k.removeClass(h.active)},activeLabel:function(){k.find(y.label).removeClass(h.active)},empty:function(){k.removeClass(h.empty)},loading:function(){k.removeClass(h.loading)},initialLoad:function(){e=!1},upward:function(e){(e||k).removeClass(h.upward)},leftward:function(e){(e||O).removeClass(h.leftward)},visible:function(){k.removeClass(h.visible)},activeItem:function(){M.removeClass(h.active)},filteredItem:function(){g.useLabels&&p.has.maxSelections()||(g.useLabels&&p.is.multiple()?M.not("."+h.active).removeClass(h.filtered):M.removeClass(h.filtered),g.hideDividers&&I.removeClass(h.hidden),p.remove.empty())},optionValue:function(e){var t=p.escape.value(e),n=E.find('option[value="'+p.escape.string(t)+'"]');0<n.length&&n.hasClass(h.addition)&&(r&&(r.disconnect(),p.verbose("Temporarily disconnecting mutation observer")),n.remove(),p.verbose("Removing user addition as an <option>",t),r&&r.observe(E[0],{childList:!0,subtree:!0}))},message:function(){O.children(y.message).remove()},searchWidth:function(){D.css("width","")},searchTerm:function(){p.verbose("Cleared search term"),D.val(""),p.set.filtered()},userAddition:function(){M.filter(y.addition).remove()},selected:function(e,t){if(!(t=g.allowAdditions?t||p.get.itemWithAdditions(e):t||p.get.item(e)))return!1;t.each(function(){var e=Z(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);p.is.multiple()?g.useLabels?(p.remove.value(n,t,e),p.remove.label(n)):(p.remove.value(n,t,e),0===p.get.selectionCount()?p.set.placeholderText():p.set.text(p.add.variables(u.count))):p.remove.value(n,t,e),e.removeClass(h.filtered).removeClass(h.active),g.useLabels&&e.removeClass(h.selected)})},selectedItem:function(){M.removeClass(h.selected)},value:function(e,t,n){var i,o=p.get.values();p.has.selectInput()?(p.verbose("Input is <select> removing selected option",e),i=p.remove.arrayValue(e,o),p.remove.optionValue(e)):(p.verbose("Removing from delimited values",e),i=(i=p.remove.arrayValue(e,o)).join(g.delimiter)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onRemove):g.onRemove.call(N,e,t,n),p.set.value(i,t,n),p.check.maxSelections()},arrayValue:function(t,e){return Array.isArray(e)||(e=[e]),e=Z.grep(e,function(e){return t!=e}),p.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=k.find(y.label).filter("[data-"+b.value+'="'+p.escape.string(e)+'"]');p.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||k.find(y.label).filter("."+h.active),p.verbose("Removing active label selections",e),p.remove.labels(e)},labels:function(e){e=e||k.find(y.label),p.verbose("Removing labels",e),e.each(function(){var e=Z(this),t=e.data(b.value),n=t!==te?String(t):t,i=p.is.userValue(n);!1!==g.onLabelRemove.call(e,t)?(p.remove.message(),i?(p.remove.value(n),p.remove.label(n)):p.remove.selected(n)):p.debug("Label remove callback cancelled removal")})},tabbable:function(){p.is.searchSelection()?(p.debug("Searchable dropdown initialized"),D.removeAttr("tabindex")):(p.debug("Simple selection dropdown initialized"),k.removeAttr("tabindex")),O.removeAttr("tabindex")},diacritics:function(e){return g.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},has:{menuSearch:function(){return p.has.search()&&0<D.closest(O).length},clearItem:function(){return 0<P.length},search:function(){return 0<D.length},sizer:function(){return 0<A.length},selectInput:function(){return E.is("select")},minCharacters:function(e){return g.minCharacters&&!V?(e=e!==te?String(e):String(p.get.query())).length>=g.minCharacters:!(V=!1)},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=p.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<E.length},items:function(){return 0<M.length},menu:function(){return 0<O.length},message:function(){return 0!==O.children(y.message).length},label:function(e){var t=p.escape.value(e),n=k.find(y.label);return g.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+b.value+'="'+p.escape.string(t)+'"]').length},maxSelections:function(){return g.maxSelections&&p.get.selectionCount()>=g.maxSelections},allResultsFiltered:function(){var e=M.not(y.addition);return e.filter(y.unselectable).length===e.length},userSuggestion:function(){return 0<O.children(y.addition).length},query:function(){return""!==p.get.query()},value:function(e){return g.ignoreCase?p.has.valueIgnoringCase(e):p.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=p.get.values();return!!(Array.isArray(t)?t&&-1!==Z.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=p.get.values(),i=!1;return Array.isArray(e)||(e=[e]),Z.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return k.hasClass(h.active)},animatingInward:function(){return O.transition("is inward")},animatingOutward:function(){return O.transition("is outward")},bubbledLabelClick:function(e){return Z(e.target).is("select, input")&&0<k.closest("label").length},bubbledIconClick:function(e){return 0<Z(e.target).closest(F).length},alreadySetup:function(){return k.is("select")&&k.parent(y.dropdown).data(C)!==te&&0===k.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):O.transition&&O.transition("is animating")},leftward:function(e){return(e||O).hasClass(h.leftward)},clearable:function(){return k.hasClass(h.clearable)||g.clearable},disabled:function(){return k.hasClass(h.disabled)},focused:function(){return ee.activeElement===k[0]},focusedOnSearch:function(){return ee.activeElement===D[0]},allFiltered:function(){return(p.is.multiple()||p.has.search())&&!(0==g.hideAdditions&&p.has.userSuggestion())&&!p.has.message()&&p.has.allResultsFiltered()},hidden:function(e){return!p.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return Z.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return k.hasClass(h.multiple)},remote:function(){return g.apiSettings&&p.can.useAPI()},single:function(){return!p.is.multiple()},selectMutation:function(e){var n=!1;return Z.each(e,function(e,t){if(Z(t.target).is("select")||Z(t.addedNodes).is("select"))return!(n=!0)}),n},search:function(){return k.hasClass(h.search)},searchSelection:function(){return p.has.search()&&1===D.parent(y.dropdown).length},selection:function(){return k.hasClass(h.selection)},userValue:function(e){return-1!==Z.inArray(e,p.get.userValues())},upward:function(e){return(e||k).hasClass(h.upward)},visible:function(e){return e?e.hasClass(h.visible):O.hasClass(h.visible)},verticallyScrollableContext:function(){var e=T.get(0)!==_&&T.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=T.get(0)!==_&&T.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!g.useLabels||(!p.has.maxSelections()||!(!p.has.maxSelections()||!e.hasClass(h.active)))},openDownward:function(e){var t,n,i=e||O,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===_?{top:0,left:0}:T.offset(),scrollTop:T.scrollTop(),height:T.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},p.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),o=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(p.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(p.verbose("Dropdown cannot fit below, opening upward",t),!1):(p.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(h.loading),o},openRightward:function(e){var t,n,i=e||O,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===_?{top:0,left:0}:T.offset(),scrollLeft:T.scrollLeft(),width:T.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},p.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(p.verbose("Dropdown cannot fit in context rightward",t),o=!1),i.removeClass(h.loading),o},click:function(){return X||"click"==g.on},extendSelect:function(){return g.allowAdditions||g.apiSettings},show:function(){return!p.is.disabled()&&(p.has.items()||p.has.message())},useAPI:function(){return Z.fn.api!==te}},animate:{show:function(e,t){var n,i=t||O,o=t?function(){}:function(){p.hideSubMenus(),p.hideOthers(),p.set.active()};e=Z.isFunction(e)?e:function(){},p.verbose("Doing menu show animation",i),p.set.direction(t),n=p.get.transition(t),p.is.selection()&&p.set.scrollPosition(p.get.selectedItem(),!0),(p.is.hidden(i)||p.is.animating(i))&&("none"==n?(o(),i.transition("show"),e.call(N)):Z.fn.transition!==te&&k.transition("is supported")?i.transition({animation:n+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0,onStart:o,onComplete:function(){e.call(N)}}):p.error(m.noTransition,n))},hide:function(e,t){var n=t||O,i=t?function(){}:function(){p.can.click()&&p.unbind.intent(),p.remove.active()},o=p.get.transition(t);e=Z.isFunction(e)?e:function(){},(p.is.visible(n)||p.is.animating(n))&&(p.verbose("Doing menu hide animation",n),"none"==o?(i(),n.transition("hide"),e.call(N)):Z.fn.transition!==te&&k.transition("is supported")?n.transition({animation:o+" out",duration:g.duration,debug:g.debug,verbose:g.verbose,queue:!1,onStart:i,onComplete:function(){e.call(N)}}):p.error(m.transition))}},hideAndClear:function(){p.remove.searchTerm(),p.has.maxSelections()||(p.has.search()?p.hide(function(){p.remove.filteredItem()}):p.hide())},delay:{show:function(){p.verbose("Delaying show event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.show,g.delay.show)},hide:function(){p.verbose("Delaying hide event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.hide,g.delay.hide)}},escape:{value:function(e){var t=Array.isArray(e),n="string"==typeof e,i=!n&&!t,o=n&&-1!==e.search(f.quote),a=[];return i||!o?e:(p.debug("Encoding quote values for use in select",e),t?(Z.each(e,function(e,t){a.push(t.replace(f.quote,"&quot;"))}),a):e.replace(f.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(f.escape,"\\$&")},htmlEntities:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return t[e]}):e}},setting:function(e,t){if(p.debug("Changing setting",e,t),Z.isPlainObject(e))Z.extend(!0,g,e);else{if(t===te)return g[e];Z.isPlainObject(g[e])?Z.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(Z.isPlainObject(e))Z.extend(!0,p,e);else{if(t===te)return p[e];p[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,g.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),p.verbose.apply(console,arguments)))},error:function(){g.silent||(p.error=Function.prototype.bind.call(console.error,console,g.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(Q||t),Q=t,G.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:N,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var e=g.name+":",n=0;Q=!1,clearTimeout(p.performance.timer),Z.each(G,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",Y&&(e+=" '"+Y+"'"),(console.group!==te||console.table!==te)&&0<G.length&&(console.groupCollapsed(e),console.table?console.table(G):Z.each(G,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),G=[]}},invoke:function(i,e,t){var o,a,n,r=z;return e=e||J,t=N||t,"string"==typeof i&&r!==te&&(i=i.split(/[\. ]/),o=i.length-1,Z.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(Z.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==te)return a=r[n],!1;if(!Z.isPlainObject(r[t])||e==o)return r[t]!==te?a=r[t]:p.error(m.method,i),!1;r=r[t]}})),Z.isFunction(a)?n=a.apply(t,e):a!==te&&(n=a),Array.isArray(U)?U.push(n):U!==te?U=[U,n]:n!==te&&(U=n),a}},$?(z===te&&p.initialize(),p.invoke(K)):(z!==te&&z.invoke("destroy"),p.initialize())}),U!==te?U:W},Z.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:_,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,ignoreDiacritics:!1,hideDividers:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,headerDivider:!0,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return Z(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text",type:"type",image:"image",imageClass:"imageClass",icon:"icon",iconClass:"iconClass",class:"class",divider:"divider"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",divider:".divider, .header",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered",clearIcon:"> .remove.icon"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",icon:"icon",image:"image",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible",clearable:"clearable",noselection:"noselection",delete:"delete",header:"header",divider:"divider",groupIcon:""}},Z.fn.dropdown.settings.templates={deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return n[e]}):e},dropdown:function(e,t,n,i){var o=e.placeholder||!1,a="",r=Z.fn.dropdown.settings.templates.escape;return a+='<i class="dropdown icon"></i>',a+=o?'<div class="default text">'+r(o,n)+"</div>":'<div class="text"></div>',a+='<div class="'+i.menu+'">',a+=Z.fn.dropdown.settings.templates.menu(e,t,n,i),a+="</div>"},menu:function(e,s,l,c){var t=e[s.values]||[],u="",d=Z.fn.dropdown.settings.templates.escape,f=Z.fn.dropdown.settings.templates.deQuote;return Z.each(t,function(e,t){var n=t[s.type]?t[s.type]:"item";if("item"===n){var i=t[s.text]?' data-text="'+f(t[s.text])+'"':"",o=t[s.disabled]?c.disabled+" ":"";u+='<div class="'+o+(t[s.class]?f(t[s.class]):c.item)+'" data-value="'+f(t[s.value])+'"'+i+">",t[s.image]&&(u+='<img class="'+(t[s.imageClass]?f(t[s.imageClass]):c.image)+'" src="'+f(t[s.image])+'">'),t[s.icon]&&(u+='<i class="'+f(t[s.icon])+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=d(t[s.name],l),u+="</div>"}else if("header"===n){var a=d(t[s.name],l),r=t[s.icon]?f(t[s.icon]):c.groupIcon;""===a&&""===r||(u+='<div class="'+(t[s.class]?f(t[s.class]):c.header)+'">',""!==r&&(u+='<i class="'+r+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=a,u+="</div>"),t[s.divider]&&(u+='<div class="'+c.divider+'"></div>')}}),u},label:function(e,t,n,i){return(0,Z.fn.dropdown.settings.templates.escape)(t,n)+'<i class="'+i.delete+' icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(T,e,t,S){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.embed=function(p){var h,v=T(this),b=v.selector||"",y=(new Date).getTime(),x=[],w=p,C="string"==typeof w,k=[].slice.call(arguments,1);return v.each(function(){var s,i=T.isPlainObject(p)?T.extend(!0,{},T.fn.embed.settings,p):T.extend({},T.fn.embed.settings),e=i.selector,t=i.className,o=i.sources,l=i.error,a=i.metadata,n=i.namespace,r=i.templates,c="."+n,u="module-"+n,d=T(this),f=(d.find(e.placeholder),d.find(e.icon),d.find(e.embed)),m=this,g=d.data(u);s={initialize:function(){s.debug("Initializing embed"),s.determine.autoplay(),s.create(),s.bind.events(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,d.data(u,s)},destroy:function(){s.verbose("Destroying previous instance of embed"),s.reset(),d.removeData(u).off(c)},refresh:function(){s.verbose("Refreshing selector cache"),d.find(e.placeholder),d.find(e.icon),f=d.find(e.embed)},bind:{events:function(){s.has.placeholder()&&(s.debug("Adding placeholder events"),d.on("click"+c,e.placeholder,s.createAndShow).on("click"+c,e.icon,s.createAndShow))}},create:function(){s.get.placeholder()?s.createPlaceholder():s.createAndShow()},createPlaceholder:function(e){var t=s.get.icon(),n=s.get.url();s.generate.embed(n);e=e||s.get.placeholder(),d.html(r.placeholder(e,t)),s.debug("Creating placeholder for embed",e,t)},createEmbed:function(e){s.refresh(),e=e||s.get.url(),f=T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d),i.onCreate.call(m,e),s.debug("Creating embed object",f)},changeEmbed:function(e){f.html(s.generate.embed(e))},createAndShow:function(){s.createEmbed(),s.show()},change:function(e,t,n){s.debug("Changing video to ",e,t,n),d.data(a.source,e).data(a.id,t),n?d.data(a.url,n):d.removeData(a.url),s.has.embed()?s.changeEmbed():s.create()},reset:function(){s.debug("Clearing embed and showing placeholder"),s.remove.data(),s.remove.active(),s.remove.embed(),s.showPlaceholder(),i.onReset.call(m)},show:function(){s.debug("Showing embed"),s.set.active(),i.onDisplay.call(m)},hide:function(){s.debug("Hiding embed"),s.showPlaceholder()},showPlaceholder:function(){s.debug("Showing placeholder image"),s.remove.active(),i.onPlaceholderDisplay.call(m)},get:{id:function(){return i.id||d.data(a.id)},placeholder:function(){return i.placeholder||d.data(a.placeholder)},icon:function(){return i.icon?i.icon:d.data(a.icon)!==S?d.data(a.icon):s.determine.icon()},source:function(e){return i.source?i.source:d.data(a.source)!==S?d.data(a.source):s.determine.source()},type:function(){var e=s.get.source();return o[e]!==S&&o[e].type},url:function(){return i.url?i.url:d.data(a.url)!==S?d.data(a.url):s.determine.url()}},determine:{autoplay:function(){s.should.autoplay()&&(i.autoplay=!0)},source:function(n){var i=!1;return(n=n||s.get.url())&&T.each(o,function(e,t){if(-1!==n.search(t.domain))return i=e,!1}),i},icon:function(){var e=s.get.source();return o[e]!==S&&o[e].icon},url:function(){var e,t=i.id||d.data(a.id),n=i.source||d.data(a.source);return(e=o[n]!==S&&o[n].url.replace("{id}",t))&&d.data(a.url,e),e}},set:{active:function(){d.addClass(t.active)}},remove:{data:function(){d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)},active:function(){d.removeClass(t.active)},embed:function(){f.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){s.debug("Generating embed html");var t,n,i=s.get.source();return(e=s.get.url(e))?(n=s.generate.parameters(i),t=r.iframe(e,n)):s.error(l.noURL,d),t},parameters:function(e,t){var n=o[e]&&o[e].parameters!==S?o[e].parameters(i):{};return(t=t||i.parameters)&&(n=T.extend({},n,t)),n=i.onEmbed(n),s.encode.parameters(n)}},has:{embed:function(){return 0<f.length},placeholder:function(){return i.placeholder||d.data(a.placeholder)}},should:{autoplay:function(){return"auto"===i.autoplay?i.placeholder||d.data(a.placeholder)!==S:i.autoplay}},is:{video:function(){return"video"==s.get.type()}},setting:function(e,t){if(s.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,i,e);else{if(t===S)return i[e];T.isPlainObject(i[e])?T.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(s.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}},C?(g===S&&s.initialize(),s.invoke(w)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},T.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||S,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||S,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(L,V,N,z){"use strict";L.isFunction=L.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},V=void 0!==V&&V.Math==Math?V:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),L.fn.modal=function(S){var D,e=L(this),A=L(V),E=L(N),F=L("body"),P=e.selector||"",R=(new Date).getTime(),O=[],M=S,I="string"==typeof M,j=[].slice.call(arguments,1),q=V.requestAnimationFrame||V.mozRequestAnimationFrame||V.webkitRequestAnimationFrame||V.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var o,a,e,i,n,r,s,t,l,c,u,d=L.isPlainObject(S)?L.extend(!0,{},L.fn.modal.settings,S):L.extend({},L.fn.modal.settings),f=d.selector,m=d.className,g=d.namespace,p=d.error,h="."+g,v="module-"+g,b=L(this),y=L(d.context),x=b.find(f.close),w=this,C=b.data(v),k=!1,T="";u={initialize:function(){u.verbose("Initializing dimmer",y),u.create.id(),u.create.dimmer(),d.allowMultiple&&u.create.innerDimmer(),d.centered||b.addClass("top aligned"),u.refreshModals(),u.bind.events(),d.observeChanges&&u.observeChanges(),u.instantiate()},instantiate:function(){u.verbose("Storing instance of modal"),C=u,b.data(v,C)},create:{dimmer:function(){var e={debug:d.debug,dimmerName:"modals"},t=L.extend(!0,e,d.dimmerSettings);L.fn.dimmer!==z?(u.debug("Creating dimmer"),i=y.dimmer(t),d.detachable?(u.verbose("Modal is detachable, moving content into dimmer"),i.dimmer("add content",b)):u.set.undetached(),n=i.dimmer("get dimmer")):u.error(p.dimmer)},id:function(){l=(Math.random().toString(16)+"000000000").substr(2,8),t="."+l,u.verbose("Creating unique id for element",l)},innerDimmer:function(){0==b.find(f.dimmer).length&&b.prepend('<div class="ui inverted dimmer"></div>')}},destroy:function(){c&&c.disconnect(),u.verbose("Destroying previous modal"),b.removeData(v).off(h),A.off(t),n.off(t),x.off(h),y.dimmer("destroy")},observeChanges:function(){"MutationObserver"in V&&((c=new MutationObserver(function(e){u.debug("DOM tree modified, refreshing"),u.refresh()})).observe(w,{childList:!0,subtree:!0}),u.debug("Setting up mutation observer",c))},refresh:function(){u.remove.scrolling(),u.cacheSizes(),u.can.useFlex()||u.set.modalOffset(),u.set.screenHeight(),u.set.type()},refreshModals:function(){a=b.siblings(f.modal),o=a.add(b)},attachEvents:function(e,t){var n=L(e);t=L.isFunction(u[t])?u[t]:u.toggle,0<n.length?(u.debug("Attaching modal events to element",e,t),n.off(h).on("click"+h,t)):u.error(p.notFound,e)},bind:{events:function(){u.verbose("Attaching events"),b.on("click"+h,f.close,u.event.close).on("click"+h,f.approve,u.event.approve).on("click"+h,f.deny,u.event.deny),A.on("resize"+t,u.event.resize)},scrollLock:function(){i.get(0).addEventListener("touchmove",u.event.preventScroll,{passive:!1})}},unbind:{scrollLock:function(){i.get(0).removeEventListener("touchmove",u.event.preventScroll,{passive:!1})}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){k||!1===d.onApprove.call(w,L(this))?u.verbose("Approve callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},preventScroll:function(e){-1!==e.target.className.indexOf("dimmer")&&e.preventDefault()},deny:function(){k||!1===d.onDeny.call(w,L(this))?u.verbose("Deny callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},close:function(){u.hide()},mousedown:function(e){var t=L(e.target);(r=0<t.closest(f.modal).length)&&u.verbose("Mouse down event registered inside the modal"),(s=u.is.scrolling()&&L(V).outerWidth()-d.scrollbarWidth<=e.clientX)&&u.verbose("Mouse down event registered inside the scrollbar")},mouseup:function(e){if(d.closable)if(r)u.debug("Dimmer clicked but mouse down was initially registered inside the modal");else if(s)u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");else{var t=0<L(e.target).closest(f.modal).length,n=L.contains(N.documentElement,e.target);if(!t&&n&&u.is.active()&&b.hasClass(m.front)){if(u.debug("Dimmer clicked, hiding all modals"),d.allowMultiple){if(!u.hideAll())return}else if(!u.hide())return;u.remove.clickaway()}}else u.verbose("Dimmer clicked but closable setting is disabled")},debounce:function(e,t){clearTimeout(u.timer),u.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(d.closable?(u.debug("Escape key pressed hiding modal"),b.hasClass(m.front)&&u.hide()):u.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){i.dimmer("is active")&&(u.is.animating()||u.is.active())&&q(u.refresh)}},toggle:function(){u.is.active()||u.is.animating()?u.hide():u.show()},show:function(e){e=L.isFunction(e)?e:function(){},u.refreshModals(),u.set.dimmerSettings(),u.set.dimmerStyles(),u.showModal(e)},hide:function(e){return e=L.isFunction(e)?e:function(){},u.refreshModals(),u.hideModal(e)},showModal:function(e){e=L.isFunction(e)?e:function(){},u.is.animating()||!u.is.active()?(u.showDimmer(),u.cacheSizes(),u.can.useFlex()?u.remove.legacy():(u.set.legacy(),u.set.modalOffset(),u.debug("Using non-flex legacy modal positioning.")),u.set.screenHeight(),u.set.type(),u.set.clickaway(),!d.allowMultiple&&u.others.active()?u.hideOthers(u.showModal):(k=!1,d.allowMultiple&&(u.others.active()&&a.filter("."+m.active).find(f.dimmer).addClass("active"),d.detachable&&b.detach().appendTo(n)),d.onShow.call(w),d.transition&&L.fn.transition!==z&&b.transition("is supported")?(u.debug("Showing modal with css animations"),b.transition({debug:d.debug,animation:d.transition+" in",queue:d.queue,duration:d.duration,useFailSafe:!0,onComplete:function(){d.onVisible.apply(w),d.keyboardShortcuts&&u.add.keyboardShortcuts(),u.save.focus(),u.set.active(),d.autofocus&&u.set.autofocus(),e()}})):u.error(p.noTransition))):u.debug("Modal is already visible")},hideModal:function(e,t,n){var i=a.filter("."+m.active).last();if(e=L.isFunction(e)?e:function(){},u.debug("Hiding modal"),!1===d.onHide.call(w,L(this)))return u.verbose("Hide callback returned false cancelling hide"),k=!1;(u.is.animating()||u.is.active())&&(d.transition&&L.fn.transition!==z&&b.transition("is supported")?(u.remove.active(),b.transition({debug:d.debug,animation:d.transition+" out",queue:d.queue,duration:d.duration,useFailSafe:!0,onStart:function(){u.others.active()||u.others.animating()||t||u.hideDimmer(),d.keyboardShortcuts&&!u.others.active()&&u.remove.keyboardShortcuts()},onComplete:function(){u.unbind.scrollLock(),d.allowMultiple&&(i.addClass(m.front),b.removeClass(m.front),n?o.find(f.dimmer).removeClass("active"):i.find(f.dimmer).removeClass("active")),d.onHidden.call(w),u.remove.dimmerStyles(),u.restore.focus(),e()}})):u.error(p.noTransition))},showDimmer:function(){i.dimmer("is animating")||!i.dimmer("is active")?(u.save.bodyMargin(),u.debug("Showing dimmer"),i.dimmer("show")):u.debug("Dimmer already visible")},hideDimmer:function(){i.dimmer("is animating")||i.dimmer("is active")?(u.unbind.scrollLock(),i.dimmer("hide",function(){u.restore.bodyMargin(),u.remove.clickaway(),u.remove.screenHeight()})):u.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var e=o.filter("."+m.active+", ."+m.animating);if(n=L.isFunction(n)?n:function(){},0<e.length){u.debug("Hiding all visible modals");var i=!0;return L(e.get().reverse()).each(function(e,t){i=i&&L(t).modal("hide modal",n,!1,!0)}),i&&u.hideDimmer(),i}},hideOthers:function(e){var t=a.filter("."+m.active+", ."+m.animating);e=L.isFunction(e)?e:function(){},0<t.length&&(u.debug("Hiding other modals",a),t.modal("hide modal",e,!0))},others:{active:function(){return 0<a.filter("."+m.active).length},animating:function(){return 0<a.filter("."+m.animating).length}},add:{keyboardShortcuts:function(){u.verbose("Adding keyboard shortcuts"),E.on("keyup"+h,u.event.keyboard)}},save:{focus:function(){0<L(N.activeElement).closest(b).length||(e=L(N.activeElement).blur())},bodyMargin:function(){T=F.css("margin-right");var e=parseInt(T.replace(/[^\d.]/g,""))+(V.innerWidth-N.documentElement.clientWidth);F.css("margin-right",e+"px"),F.find(f.bodyFixed).css("padding-right",e+"px")}},restore:{focus:function(){e&&0<e.length&&d.restoreFocus&&e.focus()},bodyMargin:function(){F.css("margin-right",T),F.find(f.bodyFixed).css("padding-right",T)}},remove:{active:function(){b.removeClass(m.active)},legacy:function(){b.removeClass(m.legacy)},clickaway:function(){n.off("mousedown"+t),n.off("mouseup"+t)},dimmerStyles:function(){n.removeClass(m.inverted),i.removeClass(m.blurring)},bodyStyle:function(){""===F.attr("style")&&(u.verbose("Removing style attribute"),F.removeAttr("style"))},screenHeight:function(){u.debug("Removing page height"),F.css("height","")},keyboardShortcuts:function(){u.verbose("Removing keyboard shortcuts"),E.off("keyup"+h)},scrolling:function(){i.removeClass(m.scrolling),b.removeClass(m.scrolling)}},cacheSizes:function(){b.addClass(m.loading);var e=b.prop("scrollHeight"),t=b.outerWidth(),n=b.outerHeight();u.cache!==z&&0===n||(u.cache={pageHeight:L(N).outerHeight(),width:t,height:n+d.offset,scrollHeight:e+d.offset,contextHeight:"body"==d.context?L(V).height():i.height()},u.cache.topOffset=-u.cache.height/2),b.removeClass(m.loading),u.debug("Caching modal and container sizes",u.cache)},can:{useFlex:function(){return"auto"==d.useFlex?d.detachable&&!u.is.ie():d.useFlex},fit:function(){var e=u.cache.contextHeight,t=u.cache.contextHeight/2,n=u.cache.topOffset,i=u.cache.scrollHeight,o=u.cache.height,a=d.padding;return o<i?t+n+i+a<e:o+2*a<e}},is:{active:function(){return b.hasClass(m.active)},ie:function(){return!V.ActiveXObject&&"ActiveXObject"in V||"ActiveXObject"in V},animating:function(){return b.transition("is supported")?b.transition("is animating"):b.is(":visible")},scrolling:function(){return i.hasClass(m.scrolling)},modernBrowser:function(){return!(V.ActiveXObject||"ActiveXObject"in V)}},set:{autofocus:function(){var e=b.find("[tabindex], :input").filter(":visible").filter(function(){return 0===L(this).closest(".disabled").length}),t=e.filter("[autofocus]"),n=0<t.length?t.first():e.first();0<n.length&&n.focus()},clickaway:function(){n.on("mousedown"+t,u.event.mousedown),n.on("mouseup"+t,u.event.mouseup)},dimmerSettings:function(){if(L.fn.dimmer!==z){var e={debug:d.debug,dimmerName:"modals",closable:"auto",useFlex:u.can.useFlex(),duration:{show:d.duration,hide:d.duration}},t=L.extend(!0,e,d.dimmerSettings);d.inverted&&(t.variation=t.variation!==z?t.variation+" inverted":"inverted"),y.dimmer("setting",t)}else u.error(p.dimmer)},dimmerStyles:function(){d.inverted?n.addClass(m.inverted):n.removeClass(m.inverted),d.blurring?i.addClass(m.blurring):i.removeClass(m.blurring)},modalOffset:function(){var e=u.cache.width,t=u.cache.height;b.css({marginTop:!b.hasClass("aligned")&&u.can.fit()?-t/2:0,marginLeft:-e/2}),u.verbose("Setting modal offset for legacy mode")},screenHeight:function(){u.can.fit()?F.css("height",""):b.hasClass("bottom")||(u.debug("Modal is taller than page content, resizing page height"),F.css("height",u.cache.height+2*d.padding))},active:function(){b.addClass(m.active+" "+m.front),a.filter("."+m.active).removeClass(m.front)},scrolling:function(){i.addClass(m.scrolling),b.addClass(m.scrolling),u.unbind.scrollLock()},legacy:function(){b.addClass(m.legacy)},type:function(){u.can.fit()?(u.verbose("Modal fits on screen"),u.others.active()||u.others.animating()||(u.remove.scrolling(),u.bind.scrollLock())):b.hasClass("bottom")?u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling"):(u.verbose("Modal cannot fit on screen setting to scrolling"),u.set.scrolling())},undetached:function(){i.addClass(m.undetached)}},setting:function(e,t){if(u.debug("Changing setting",e,t),L.isPlainObject(e))L.extend(!0,d,e);else{if(t===z)return d[e];L.isPlainObject(d[e])?L.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(L.isPlainObject(e))L.extend(!0,u,e);else{if(t===z)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,O.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;R=!1,clearTimeout(u.performance.timer),L.each(O,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",P&&(e+=" '"+P+"'"),(console.group!==z||console.table!==z)&&0<O.length&&(console.groupCollapsed(e),console.table?console.table(O):L.each(O,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),O=[]}},invoke:function(i,e,t){var o,a,n,r=C;return e=e||j,t=w||t,"string"==typeof i&&r!==z&&(i=i.split(/[\. ]/),o=i.length-1,L.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(L.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==z)return a=r[n],!1;if(!L.isPlainObject(r[t])||e==o)return r[t]!==z&&(a=r[t]),!1;r=r[t]}})),L.isFunction(a)?n=a.apply(t,e):a!==z&&(n=a),Array.isArray(D)?D.push(n):D!==z?D=[D,n]:n!==z&&(D=n),a}},I?(C===z&&u.initialize(),u.invoke(M)):(C!==z&&C.invoke("destroy"),u.initialize())}),D!==z?D:this},L.fn.modal.settings={name:"Modal",namespace:"modal",useFlex:"auto",offset:0,silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,restoreFocus:!0,inverted:!1,blurring:!1,centered:!0,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,transition:"scale",padding:50,scrollbarWidth:10,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal",dimmer:"> .ui.dimmer",bodyFixed:"> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",legacy:"legacy",loading:"loading",scrolling:"scrolling",undetached:"undetached",front:"front"}}}(jQuery,window,document),function(y,x,e,w){"use strict";y.isFunction=y.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=void 0!==x&&x.Math==Math?x:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),y.fn.nag=function(d){var f,e=y(this),m=e.selector||"",g=(new Date).getTime(),p=[],h=d,v="string"==typeof h,b=[].slice.call(arguments,1);return e.each(function(){var s,i=y.isPlainObject(d)?y.extend(!0,{},y.fn.nag.settings,d):y.extend({},y.fn.nag.settings),e=i.selector,l=i.error,t=i.namespace,n="."+t,o=t+"-module",a=y(this),r=i.context?y(i.context):y("body"),c=this,u=a.data(o);s={initialize:function(){s.verbose("Initializing element"),a.on("click"+n,e.close,s.dismiss).data(o,s),i.detachable&&a.parent()[0]!==r[0]&&a.detach().prependTo(r),0<i.displayTime&&setTimeout(s.hide,i.displayTime),s.show()},destroy:function(){s.verbose("Destroying instance"),a.removeData(o).off(n)},show:function(){s.should.show()&&!a.is(":visible")&&(s.debug("Showing nag",i.animation.show),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideDown(i.duration,i.easing))},hide:function(){s.debug("Showing nag",i.animation.hide),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideUp(i.duration,i.easing)},onHide:function(){s.debug("Removing nag",i.animation.hide),a.remove(),i.onHide&&i.onHide()},dismiss:function(e){i.storageMethod&&s.storage.set(i.key,i.value),s.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return i.persist?(s.debug("Persistent nag is set, can show nag"),!0):s.storage.get(i.key)!=i.value.toString()?(s.debug("Stored value is not set, can show nag",s.storage.get(i.key)),!0):(s.debug("Stored value is set, cannot show nag",s.storage.get(i.key)),!1)}},get:{storageOptions:function(){var e={};return i.expires&&(e.expires=i.expires),i.domain&&(e.domain=i.domain),i.path&&(e.path=i.path),e}},clear:function(){s.storage.remove(i.key)},storage:{set:function(e,t){var n=s.get.storageOptions();if("localstorage"==i.storageMethod&&x.localStorage!==w)x.localStorage.setItem(e,t),s.debug("Value stored using local storage",e,t);else if("sessionstorage"==i.storageMethod&&x.sessionStorage!==w)x.sessionStorage.setItem(e,t),s.debug("Value stored using session storage",e,t);else{if(y.cookie===w)return void s.error(l.noCookieStorage);y.cookie(e,t,n),s.debug("Value stored using cookie",e,t,n)}},get:function(e,t){var n;return"localstorage"==i.storageMethod&&x.localStorage!==w?n=x.localStorage.getItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==w?n=x.sessionStorage.getItem(e):y.cookie!==w?n=y.cookie(e):s.error(l.noCookieStorage),"undefined"!=n&&"null"!=n&&n!==w&&null!==n||(n=w),n},remove:function(e){var t=s.get.storageOptions();"localstorage"==i.storageMethod&&x.localStorage!==w?x.localStorage.removeItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==w?x.sessionStorage.removeItem(e):y.cookie!==w?y.removeCookie(e,t):s.error(l.noStorage)}},setting:function(e,t){if(s.debug("Changing setting",e,t),y.isPlainObject(e))y.extend(!0,i,e);else{if(t===w)return i[e];y.isPlainObject(i[e])?y.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(y.isPlainObject(e))y.extend(!0,s,e);else{if(t===w)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(g||t),g=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;g=!1,clearTimeout(s.performance.timer),y.each(p,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",m&&(e+=" '"+m+"'"),(console.group!==w||console.table!==w)&&0<p.length&&(console.groupCollapsed(e),console.table?console.table(p):y.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(i,e,t){var o,a,n,r=u;return e=e||b,t=c||t,"string"==typeof i&&r!==w&&(i=i.split(/[\. ]/),o=i.length-1,y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==w)return a=r[n],!1;if(!y.isPlainObject(r[t])||e==o)return r[t]!==w?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),y.isFunction(a)?n=a.apply(t,e):a!==w&&(n=a),Array.isArray(f)?f.push(n):f!==w?f=[f,n]:n!==w&&(f=n),a}},v?(u===w&&s.initialize(),s.invoke(h)):(u!==w&&u.invoke("destroy"),s.initialize())}),f!==w?f:this},y.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},y.extend(y.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(q,L,V,N){"use strict";q.isFunction=q.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},L=void 0!==L&&L.Math==Math?L:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),q.fn.popup=function(T){var S,e=q(this),D=q(V),A=q(L),E=q("body"),F=e.selector||"",P="ontouchstart"in V.documentElement?"touchstart":"click",R=(new Date).getTime(),O=[],M=T,I="string"==typeof M,j=[].slice.call(arguments,1);return e.each(function(){var u,c,e,t,n,d,f=q.isPlainObject(T)?q.extend(!0,{},q.fn.popup.settings,T):q.extend({},q.fn.popup.settings),o=f.selector,m=f.className,g=f.error,p=f.metadata,i=f.namespace,a="."+f.namespace,r="module-"+i,h=q(this),s=q(f.context),l=q(f.scrollContext),v=q(f.boundary),b=f.target?q(f.target):h,y=0,x=!1,w=!1,C=this,k=h.data(r);d={initialize:function(){d.debug("Initializing",h),d.createID(),d.bind.events(),!d.exists()&&f.preserve&&d.create(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance",d),k=d,h.data(r,k)},observeChanges:function(){"MutationObserver"in L&&((e=new MutationObserver(d.event.documentChanged)).observe(V,{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",e))},refresh:function(){f.popup?u=q(f.popup).eq(0):f.inline&&(u=b.nextAll(o.popup).eq(0),f.popup=u),f.popup?(u.addClass(m.loading),c=d.get.offsetParent(),u.removeClass(m.loading),f.movePopup&&d.has.popup()&&d.get.offsetParent(u)[0]!==c[0]&&(d.debug("Moving popup to the same offset parent as target"),u.detach().appendTo(c))):c=f.inline?d.get.offsetParent(b):d.has.popup()?d.get.offsetParent(u):E,c.is("html")&&c[0]!==E[0]&&(d.debug("Setting page as offset parent"),c=E),d.get.variation()&&d.set.variation()},reposition:function(){d.refresh(),d.set.position()},destroy:function(){d.debug("Destroying previous module"),e&&e.disconnect(),u&&!f.preserve&&d.removePopup(),clearTimeout(d.hideTimer),clearTimeout(d.showTimer),d.unbind.close(),d.unbind.events(),h.removeData(r)},event:{start:function(e){var t=q.isPlainObject(f.delay)?f.delay.show:f.delay;clearTimeout(d.hideTimer),(!w||w&&f.addTouchEvents)&&(d.showTimer=setTimeout(d.show,t))},end:function(){var e=q.isPlainObject(f.delay)?f.delay.hide:f.delay;clearTimeout(d.showTimer),d.hideTimer=setTimeout(d.hide,e)},touchstart:function(e){w=!0,f.addTouchEvents&&d.show()},resize:function(){d.is.visible()&&d.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==C||0<q(e).find(C).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},hideGracefully:function(e){var t=q(e.target),n=q.contains(V.documentElement,e.target),i=0<t.closest(o.popup).length;e&&!i&&n?(d.debug("Click occurred outside popup hiding popup"),d.hide()):d.debug("Click was inside popup, keeping popup open")}},create:function(){var e=d.get.html(),t=d.get.title(),n=d.get.content();e||n||t?(d.debug("Creating pop-up html"),e=e||f.templates.popup({title:t,content:n}),u=q("<div/>").addClass(m.popup).data(p.activator,h).html(e),f.inline?(d.verbose("Inserting popup element inline",u),u.insertAfter(h)):(d.verbose("Appending popup element to body",u),u.appendTo(s)),d.refresh(),d.set.variation(),f.hoverable&&d.bind.popup(),f.onCreate.call(u,C)):0!==b.next(o.popup).length?(d.verbose("Pre-existing popup found"),f.inline=!0,f.popup=b.next(o.popup).data(p.activator,h),d.refresh(),f.hoverable&&d.bind.popup()):f.popup?(q(f.popup).data(p.activator,h),d.verbose("Used popup specified in settings"),d.refresh(),f.hoverable&&d.bind.popup()):d.debug("No content specified skipping display",C)},createID:function(){n=(Math.random().toString(16)+"000000000").substr(2,8),t="."+n,d.verbose("Creating unique id for element",n)},toggle:function(){d.debug("Toggling pop-up"),d.is.hidden()?(d.debug("Popup is hidden, showing pop-up"),d.unbind.close(),d.show()):(d.debug("Popup is visible, hiding pop-up"),d.hide())},show:function(e){if(e=e||function(){},d.debug("Showing pop-up",f.transition),d.is.hidden()&&(!d.is.active()||!d.is.dropdown())){if(d.exists()||d.create(),!1===f.onShow.call(u,C))return void d.debug("onShow callback returned false, cancelling popup animation");f.preserve||f.popup||d.refresh(),u&&d.set.position()&&(d.save.conditions(),f.exclusive&&d.hideAll(),d.animate.show(e))}},hide:function(e){if(e=e||function(){},d.is.visible()||d.is.animating()){if(!1===f.onHide.call(u,C))return void d.debug("onHide callback returned false, cancelling popup animation");d.remove.visible(),d.unbind.close(),d.restore.conditions(),d.animate.hide(e)}},hideAll:function(){q(o.popup).filter("."+m.popupVisible).each(function(){q(this).data(p.activator).popup("hide")})},exists:function(){return!!u&&(f.inline||f.popup?d.has.popup():1<=u.closest(s).length)},removePopup:function(){d.has.popup()&&!f.popup&&(d.debug("Removing popup",u),u.remove(),u=N,f.onRemove.call(u,C))},save:{conditions:function(){d.cache={title:h.attr("title")},d.cache.title&&h.removeAttr("title"),d.verbose("Saving original attributes",d.cache.title)}},restore:{conditions:function(){return d.cache&&d.cache.title&&(h.attr("title",d.cache.title),d.verbose("Restoring original attributes",d.cache.title)),!0}},supports:{svg:function(){return"undefined"!=typeof SVGGraphicsElement}},animate:{show:function(e){e=q.isFunction(e)?e:function(){},f.transition&&q.fn.transition!==N&&h.transition("is supported")?(d.set.visible(),u.transition({animation:f.transition+" in",queue:!1,debug:f.debug,verbose:f.verbose,duration:f.duration,onComplete:function(){d.bind.close(),e.call(u,C),f.onVisible.call(u,C)}})):d.error(g.noTransition)},hide:function(e){e=q.isFunction(e)?e:function(){},d.debug("Hiding pop-up"),f.transition&&q.fn.transition!==N&&h.transition("is supported")?u.transition({animation:f.transition+" out",queue:!1,duration:f.duration,debug:f.debug,verbose:f.verbose,onComplete:function(){d.reset(),e.call(u,C),f.onHidden.call(u,C)}}):d.error(g.noTransition)}},change:{content:function(e){u.html(e)}},get:{html:function(){return h.removeData(p.html),h.data(p.html)||f.html},title:function(){return h.removeData(p.title),h.data(p.title)||f.title},content:function(){return h.removeData(p.content),h.data(p.content)||f.content||h.attr("title")},variation:function(){return h.removeData(p.variation),h.data(p.variation)||f.variation},popup:function(){return u},popupOffset:function(){return u.offset()},calculations:function(){var e,t=d.get.offsetParent(u),n=b[0],i=v[0]==L,o=f.inline||f.popup&&f.movePopup?b.position():b.offset(),a=i?{top:0,left:0}:v.offset(),r={},s=i?{top:A.scrollTop(),left:A.scrollLeft()}:{top:0,left:0};if(r={target:{element:b[0],width:b.outerWidth(),height:b.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:u.outerWidth(),height:u.outerHeight()},parent:{width:c.outerWidth(),height:c.outerHeight()},screen:{top:a.top,left:a.left,scroll:{top:s.top,left:s.left},width:v.width(),height:v.height()}},t.get(0)!==c.get(0)){var l=t.offset();r.target.top-=l.top,r.target.left-=l.left,r.parent.width=t.outerWidth(),r.parent.height=t.outerHeight()}return f.setFluidWidth&&d.is.fluid()&&(r.container={width:u.parent().outerWidth()},r.popup.width=r.container.width),r.target.margin.top=f.inline?parseInt(L.getComputedStyle(n).getPropertyValue("margin-top"),10):0,r.target.margin.left=f.inline?d.is.rtl()?parseInt(L.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(L.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=r.screen,r.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},r},id:function(){return n},startEvent:function(){return"hover"==f.on?"mouseenter":"focus"==f.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==f.on?"mouseleave":"focus"==f.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return n=(t=t||d.get.calculations()).popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},d.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(e){var t=(e!==N?e[0]:b[0]).parentNode,n=q(t);if(t)for(var i="none"===n.css("transform"),o="static"===n.css("position"),a=n.is("body");t&&!a&&o&&i;)t=t.parentNode,i="none"===(n=q(t)).css("transform"),o="static"===n.css("position"),a=n.is("body");return n&&0<n.length?n:q()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o="top"==n||"bottom"==n,a=!1,r=!1,s=!1;return x||(d.verbose("All available positions available"),x=d.get.positions()),d.debug("Recording last position tried",e),x[e]=!0,"opposite"===f.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[n],i]).join(" "),a=!0===x[s],d.debug("Trying opposite strategy",s)),"adjacent"===f.prefer&&o&&(s=(s=[n,{left:"center",center:"right",right:"left"}[i]]).join(" "),r=!0===x[s],d.debug("Trying adjacent strategy",s)),(r||a)&&(d.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[e]),s}},set:{position:function(e,t){if(0!==b.length&&0!==u.length){var n,i,o,a,r,s,l,c;if(t=t||d.get.calculations(),e=e||h.data(p.position)||f.position,n=h.data(p.offset)||f.offset,i=f.distanceAway,o=t.target,a=t.popup,r=t.parent,d.should.centerArrow(t)&&(d.verbose("Adjusting offset to center arrow on small target element"),"top left"!=e&&"bottom left"!=e||(n+=o.width/2,n-=f.arrowPixelsFromEdge),"top right"!=e&&"bottom right"!=e||(n-=o.width/2,n+=f.arrowPixelsFromEdge)),0===o.width&&0===o.height&&!d.is.svg(o.element))return d.debug("Popup target is hidden, no action taken"),!1;switch(f.inline&&(d.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),d.debug("Determining popup position from calculations",e,t),d.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),d.debug("RTL: Popup position updated",e)),y==f.maxSearchDepth&&"string"==typeof f.lastResort&&(e=f.lastResort),e){case"top left":s={top:"auto",bottom:r.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":s={bottom:r.height-o.top+i,left:o.left+o.width/2-a.width/2+n,top:"auto",right:"auto"};break;case"top right":s={bottom:r.height-o.top+i,right:r.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":s={top:o.top+o.height/2-a.height/2+n,right:r.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":s={top:o.top+o.height/2-a.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":s={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":s={top:o.top+o.height+i,left:o.left+o.width/2-a.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":s={top:o.top+o.height+i,right:r.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(s===N&&d.error(g.invalidPosition,e),d.debug("Calculated popup positioning values",s),u.css(s).removeClass(m.position).addClass(e).addClass(m.loading),l=d.get.popupOffset(),c=d.get.distanceFromBoundary(l,t),!f.forcePosition&&d.is.offstage(c,e)){if(d.debug("Position is outside viewport",e),y<f.maxSearchDepth)return y++,e=d.get.nextPosition(e),d.debug("Trying new position",e),!!u&&d.set.position(e,t);if(!f.lastResort)return d.debug("Popup could not find a position to display",u),d.error(g.cannotPlace,C),d.remove.attempts(),d.remove.loading(),d.reset(),f.onUnplaceable.call(u,C),!1;d.debug("No position found, showing with last position")}return d.debug("Position is on stage",e),d.remove.attempts(),d.remove.loading(),f.setFluidWidth&&d.is.fluid()&&d.set.fluidWidth(t),!0}d.error(g.notFound)},fluidWidth:function(e){e=e||d.get.calculations(),d.debug("Automatically setting element width to parent width",e.parent.width),u.css("width",e.container.width)},variation:function(e){(e=e||d.get.variation())&&d.has.popup()&&(d.verbose("Adding variation to popup",e),u.addClass(e))},visible:function(){h.addClass(m.visible)}},remove:{loading:function(){u.removeClass(m.loading)},variation:function(e){(e=e||d.get.variation())&&(d.verbose("Removing variation",e),u.removeClass(e))},visible:function(){h.removeClass(m.visible)},attempts:function(){d.verbose("Resetting all searched positions"),y=0,x=!1}},bind:{events:function(){d.debug("Binding popup events to module"),"click"==f.on&&h.on(P+a,d.toggle),"hover"==f.on&&h.on("touchstart"+a,d.event.touchstart),d.get.startEvent()&&h.on(d.get.startEvent()+a,d.event.start).on(d.get.endEvent()+a,d.event.end),f.target&&d.debug("Target set to element",b),A.on("resize"+t,d.event.resize)},popup:function(){d.verbose("Allowing hover events on popup to prevent closing"),u&&d.has.popup()&&u.on("mouseenter"+a,d.event.start).on("mouseleave"+a,d.event.end)},close:function(){(!0===f.hideOnScroll||"auto"==f.hideOnScroll&&"click"!=f.on)&&d.bind.closeOnScroll(),d.is.closable()?d.bind.clickaway():"hover"==f.on&&w&&d.bind.touchClose()},closeOnScroll:function(){d.verbose("Binding scroll close event to document"),l.one(d.get.scrollEvent()+t,d.event.hideGracefully)},touchClose:function(){d.verbose("Binding popup touchclose event to document"),D.on("touchstart"+t,function(e){d.verbose("Touched away from popup"),d.event.hideGracefully.call(C,e)})},clickaway:function(){d.verbose("Binding popup close event to document"),D.on(P+t,function(e){d.verbose("Clicked away from popup"),d.event.hideGracefully.call(C,e)})}},unbind:{events:function(){A.off(t),h.off(a)},close:function(){D.off(t),l.off(t)}},has:{popup:function(){return u&&0<u.length}},should:{centerArrow:function(e){return!d.is.basic()&&e.target.width<=2*f.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==f.closable?"hover"!=f.on:f.closable},offstage:function(e,n){var i=[];return q.each(e,function(e,t){t<-f.jitter&&(d.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),0<i.length},svg:function(e){return d.supports.svg()&&e instanceof SVGGraphicsElement},basic:function(){return h.hasClass(m.basic)},active:function(){return h.hasClass(m.active)},animating:function(){return u!==N&&u.hasClass(m.animating)},fluid:function(){return u!==N&&u.hasClass(m.fluid)},visible:function(){return u!==N&&u.hasClass(m.popupVisible)},dropdown:function(){return h.hasClass(m.dropdown)},hidden:function(){return!d.is.visible()},rtl:function(){return"rtl"==h.css("direction")}},reset:function(){d.remove.visible(),f.preserve?q.fn.transition!==N&&u.transition("remove transition"):d.removePopup()},setting:function(e,t){if(q.isPlainObject(e))q.extend(!0,f,e);else{if(t===N)return f[e];f[e]=t}},internal:function(e,t){if(q.isPlainObject(e))q.extend(!0,d,e);else{if(t===N)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,O.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var e=f.name+":",n=0;R=!1,clearTimeout(d.performance.timer),q.each(O,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",F&&(e+=" '"+F+"'"),(console.group!==N||console.table!==N)&&0<O.length&&(console.groupCollapsed(e),console.table?console.table(O):q.each(O,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),O=[]}},invoke:function(i,e,t){var o,a,n,r=k;return e=e||j,t=C||t,"string"==typeof i&&r!==N&&(i=i.split(/[\. ]/),o=i.length-1,q.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(q.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==N)return a=r[n],!1;if(!q.isPlainObject(r[t])||e==o)return r[t]!==N&&(a=r[t]),!1;r=r[t]}})),q.isFunction(a)?n=a.apply(t,e):a!==N&&(n=a),Array.isArray(S)?S.push(n):S!==N?S=[S,n]:n!==N&&(S=n),a}},I?(k===N&&d.initialize(),d.invoke(M)):(k!==N&&k.invoke("destroy"),d.initialize())}),S!==N?S:this},q.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:L,addTouchEvents:!0,position:"top left",forcePosition:!1,variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:L,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return t[e]}):e},popup:function(e){var t="",n=q.fn.popup.settings.templates.escape;return typeof e!==N&&(typeof e.title!==N&&e.title&&(e.title=n(e.title),t+='<div class="header">'+e.title+"</div>"),typeof e.content!==N&&e.content&&(e.content=n(e.content),t+='<div class="content">'+e.content+"</div>")),t}}}}(jQuery,window,document),function(T,e,S,D){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.progress=function(h){var v,e=T(this),b=e.selector||"",y=(new Date).getTime(),x=[],w=h,C="string"==typeof w,k=[].slice.call(arguments,1);return e.each(function(){var c,s=T.isPlainObject(h)?T.extend(!0,{},T.fn.progress.settings,h):T.extend({},T.fn.progress.settings),t=s.className,n=s.metadata,e=s.namespace,i=s.selector,l=s.error,o="."+e,a="module-"+e,u=T(this),d=T(this).find(i.bar),r=T(this).find(i.progress),f=T(this).find(i.label),m=this,g=u.data(a),p=!1;c={helper:{sum:function(e){return Array.isArray(e)?e.reduce(function(e,t){return e+Number(t)},0):0},derivePrecision:function(e,t){for(var n=0,i=1,o=e/t;n<10&&!(1<(o*=i));)i=Math.pow(10,n++);return i},forceArray:function(e){return Array.isArray(e)?e:isNaN(e)?"string"==typeof e?e.split(","):[]:[e]}},initialize:function(){c.set.duration(),c.set.transitionEvent(),c.debug(m),c.read.metadata(),c.read.settings(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of progress",c),g=c,u.data(a,c)},destroy:function(){c.verbose("Destroying previous progress for",u),clearInterval(g.interval),c.remove.state(),u.removeData(a),g=D},reset:function(){c.remove.nextValue(),c.update.progress(0)},complete:function(){(c.percent===D||c.percent<100)&&(c.remove.progressPoll(),c.set.percent(100))},read:{metadata:function(){var e={percent:c.helper.forceArray(u.data(n.percent)),total:u.data(n.total),value:c.helper.forceArray(u.data(n.value))};e.total&&(c.debug("Total value set from metadata",e.total),c.set.total(e.total)),0<e.value.length&&(c.debug("Current value set from metadata",e.value),c.set.value(e.value),c.set.progress(e.value)),0<e.percent.length&&(c.debug("Current percent value set from metadata",e.percent),c.set.percent(e.percent))},settings:function(){!1!==s.total&&(c.debug("Current total set in settings",s.total),c.set.total(s.total)),!1!==s.value&&(c.debug("Current value set in settings",s.value),c.set.value(s.value),c.set.progress(c.value)),!1!==s.percent&&(c.debug("Current percent set in settings",s.percent),c.set.percent(s.percent))}},bind:{transitionEnd:function(t){var e=c.get.transitionEnd();d.one(e+o,function(e){clearTimeout(c.failSafeTimer),t.call(this,e)}),c.failSafeTimer=setTimeout(function(){d.triggerHandler(e)},s.duration+s.failSafeDelay),c.verbose("Adding fail safe timer",c.timer)}},increment:function(e){var t,n;e=c.has.total()?(t=c.get.value(),e||1):(t=c.get.percent(),e||c.get.randomValue()),n=t+e,c.debug("Incrementing percentage by",t,n,e),n=c.get.normalizedValue(n),c.set.progress(n)},decrement:function(e){var t,n;c.get.total()?(n=(t=c.get.value())-(e=e||1),c.debug("Decrementing value by",e,t)):(n=(t=c.get.percent())-(e=e||c.get.randomValue()),c.debug("Decrementing percentage by",e,t)),n=c.get.normalizedValue(n),c.set.progress(n)},has:{progressPoll:function(){return c.progressPoll},total:function(){return!1!==c.get.total()}},get:{text:function(e,t){var n=t||0,i=c.get.value(n),o=c.total||0,a=p?c.get.displayPercent(n):c.get.percent(n),r=0<c.total?o-i:100-a;return e=(e=e||"").replace("{value}",i).replace("{total}",o).replace("{left}",r).replace("{percent}",a).replace("{bar}",s.text.bars[n]||""),c.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return c.debug("Value cannot decrement below 0"),0;if(c.has.total()){if(e>c.total)return c.debug("Value cannot increment above total",c.total),c.total}else if(100<e)return c.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==s.updateInterval?s.duration:s.updateInterval},randomValue:function(){return c.debug("Generating random increment percentage"),Math.floor(Math.random()*s.random.max+s.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=S.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==D)return n[e]},displayPercent:function(e){var t=T(d[e]),n=t.width(),i=u.width(),o=parseInt(t.css("min-width"),10)<n?n/i*100:c.percent;return 0<s.precision?Math.round(o*(10*s.precision))/(10*s.precision):Math.round(o)},percent:function(e){return c.percent&&c.percent[e||0]||0},value:function(e){return c.nextValue||c.value&&c.value[e||0]||0},total:function(){return c.total||!1}},create:{progressPoll:function(){c.progressPoll=setTimeout(function(){c.update.toNextValue(),c.remove.progressPoll()},c.get.updateInterval())}},is:{complete:function(){return c.is.success()||c.is.warning()||c.is.error()},success:function(){return u.hasClass(t.success)},warning:function(){return u.hasClass(t.warning)},error:function(){return u.hasClass(t.error)},active:function(){return u.hasClass(t.active)},visible:function(){return u.is(":visible")}},remove:{progressPoll:function(){c.verbose("Removing progress poll timer"),c.progressPoll&&(clearTimeout(c.progressPoll),delete c.progressPoll)},nextValue:function(){c.verbose("Removing progress value stored for next update"),delete c.nextValue},state:function(){c.verbose("Removing stored state"),delete c.total,delete c.percent,delete c.value},active:function(){c.verbose("Removing active state"),u.removeClass(t.active)},success:function(){c.verbose("Removing success state"),u.removeClass(t.success)},warning:function(){c.verbose("Removing warning state"),u.removeClass(t.warning)},error:function(){c.verbose("Removing error state"),u.removeClass(t.error)}},set:{barWidth:function(e){c.debug("set bar width with ",e),e=c.helper.forceArray(e);var o=-1,a=-1,r=c.helper.sum(e),s=d.length,l=1<s,t=e.map(function(e,t){var n=t===s-1&&0===r,i=T(d[t]);return 0===e&&l&&!n?i.css("display","none"):(l&&n&&i.css("background","transparent"),-1==o&&(o=t),a=t,i.css({display:"block",width:e+"%"})),parseFloat(e)});e.forEach(function(e,t){T(d[t]).css({borderTopLeftRadius:t==o?"":0,borderBottomLeftRadius:t==o?"":0,borderTopRightRadius:t==a?"":0,borderBottomRightRadius:t==a?"":0})}),u.attr("data-percent",t)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,c.verbose("Setting progress bar transition duration",e),d.css({"transition-duration":e})},percent:function(e){e=c.helper.forceArray(e).map(function(e){return"string"==typeof e?+e.replace("%",""):e});var t=c.has.total(),n=c.helper.sum(e),i=1<e.length&&t,o=c.helper.sum(c.helper.forceArray(c.value));if(i&&o>c.total)c.error(l.sumExceedsTotal,o,c.total);else if(!i&&100<n)c.error(l.tooHigh,n);else if(n<0)c.error(l.tooLow,n);else{var a=0<s.precision?s.precision:i?c.helper.derivePrecision(Math.min.apply(null,c.value),c.total):D,r=e.map(function(e){return 0<a?Math.round(e*(10*a))/(10*a):Math.round(e)});c.percent=r,t||(c.value=r.map(function(e){return 0<a?Math.round(e/100*c.total*(10*a))/(10*a):Math.round(e/100*c.total*10)/10}),s.limitValues&&(c.value=c.value.map(function(e){return 100<e?100:c.value<0?0:c.value}))),c.set.barWidth(e),c.set.labelInterval(),c.set.labels()}s.onChange.call(m,e,c.value,c.total)},labelInterval:function(){clearInterval(c.interval),c.bind.transitionEnd(function(){c.verbose("Bar finished animating, removing continuous label updates"),clearInterval(c.interval),p=!1,c.set.labels()}),p=!0,c.interval=setInterval(function(){T.contains(S.documentElement,m)||(clearInterval(c.interval),p=!1),c.set.labels()},s.framerate)},labels:function(){c.verbose("Setting both bar progress and outer label text"),c.set.barLabel(),c.set.state()},label:function(e){(e=e||"")&&(e=c.get.text(e),c.verbose("Setting label to text",e),f.text(e))},state:function(e){100===(e=e!==D?e:c.helper.sum(c.percent))?s.autoSuccess&&1===d.length&&!(c.is.warning()||c.is.error()||c.is.success())?(c.set.success(),c.debug("Automatically triggering success at 100%")):(c.verbose("Reached 100% removing active state"),c.remove.active(),c.remove.progressPoll()):0<e?(c.verbose("Adjusting active progress bar label",e),c.set.active()):(c.remove.active(),c.set.label(s.text.active))},barLabel:function(i){r.map(function(e,t){var n=T(t);i!==D?n.text(c.get.text(i,e)):"ratio"==s.label&&c.total?(c.verbose("Adding ratio to bar label"),n.text(c.get.text(s.text.ratio,e))):"percent"==s.label&&(c.verbose("Adding percentage to bar label"),n.text(c.get.text(s.text.percent,e)))})},active:function(e){e=e||s.text.active,c.debug("Setting active state"),s.showActivity&&!c.is.active()&&u.addClass(t.active),c.remove.warning(),c.remove.error(),c.remove.success(),(e=s.onLabelUpdate("active",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onActive.call(m,c.value,c.total)})},success:function(e){e=e||s.text.success||s.text.active,c.debug("Setting success state"),u.addClass(t.success),c.remove.active(),c.remove.warning(),c.remove.error(),c.complete(),e=s.text.success?s.onLabelUpdate("success",e,c.value,c.total):s.onLabelUpdate("active",e,c.value,c.total),c.set.label(e),c.bind.transitionEnd(function(){s.onSuccess.call(m,c.total)})},warning:function(e){e=e||s.text.warning,c.debug("Setting warning state"),u.addClass(t.warning),c.remove.active(),c.remove.success(),c.remove.error(),c.complete(),(e=s.onLabelUpdate("warning",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onWarning.call(m,c.value,c.total)})},error:function(e){e=e||s.text.error,c.debug("Setting error state"),u.addClass(t.error),c.remove.active(),c.remove.success(),c.remove.warning(),c.complete(),(e=s.onLabelUpdate("error",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onError.call(m,c.value,c.total)})},transitionEvent:function(){c.get.transitionEnd()},total:function(e){c.total=e},value:function(e){c.value=c.helper.forceArray(e)},progress:function(e){c.has.progressPoll()?(c.debug("Updated within interval, setting next update to use new value",e),c.set.nextValue(e)):(c.debug("First update in progress update interval, immediately updating",e),c.update.progress(e),c.create.progressPoll())},nextValue:function(e){c.nextValue=e}},update:{toNextValue:function(){var e=c.nextValue;e&&(c.debug("Update interval complete using last updated value",e),c.update.progress(e),c.remove.nextValue())},progress:function(e){var n=c.has.total();n&&c.set.value(e);var t=c.helper.forceArray(e).map(function(e){var t;return!1===(e=c.get.numericValue(e))&&c.error(l.nonNumeric,e),e=c.get.normalizedValue(e),n?(t=e/c.total*100,c.debug("Calculating percent complete from total",t)):(t=e,c.debug("Setting value to exact percentage value",t)),t});c.set.percent(t)}},setting:function(e,t){if(c.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,s,e);else{if(t===D)return s[e];T.isPlainObject(s[e])?T.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,c,e);else{if(t===D)return c[e];c[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,s.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),c.verbose.apply(console,arguments)))},error:function(){s.silent||(c.error=Function.prototype.bind.call(console.error,console,s.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=s.name+":",n=0;y=!1,clearTimeout(c.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==D||console.table!==D)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:c.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),Array.isArray(v)?v.push(n):v!==D?v=[v,n]:n!==D&&(v=n),a}},C?(g===D&&c.initialize(),c.invoke(w)):(g!==D&&g.invoke("destroy"),c.initialize())}),v!==D?v:this},T.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%",sumExceedsTotal:"Sum of multple values exceed total"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}",bars:[""]},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(N,t,z,H){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),N.fn.slider=function(E){var F,e=N(this),P=N(t),R=e.selector||"",O=(new Date).getTime(),M=[],I=E,j="string"==typeof I,q=[].slice.call(arguments,1),L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],V=0;return e.each(function(){var m,o,a,e,g,r,t,s,p,h,v,l,n,b,c=N.isPlainObject(E)?N.extend(!0,{},N.fn.slider.settings,E):N.extend({},N.fn.slider.settings),i=c.className,u=c.metadata,d=c.namespace,f=c.error,y=c.keys,x=c.interpretLabel,w=!1,C="."+d,k="module-"+d,T=N(this),S=this,D=T.data(k),A=1;b={initialize:function(){b.debug("Initializing slider",c),t=V+=1,n=b.setup.testOutTouch(),b.setup.layout(),b.setup.labels(),b.is.disabled()||b.bind.events(),b.read.metadata(),b.read.settings(),b.instantiate()},instantiate:function(){b.verbose("Storing instance of slider",b),D=b,T.data(k,b)},destroy:function(){b.verbose("Destroying previous slider for",T),clearInterval(D.interval),b.unbind.events(),b.unbind.slidingEvents(),T.removeData(k),D=H},setup:{layout:function(){T.attr("tabindex")===H&&T.attr("tabindex",0),0==T.find(".inner").length&&T.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"),l=b.get.precision(),o=T.find(".thumb:not(.second)"),m=o,b.is.range()&&(0==T.find(".thumb.second").length&&T.find(".inner").append("<div class='thumb second'></div>"),a=T.find(".thumb.second")),e=T.find(".track"),g=T.find(".track-fill"),v=o.width()/2},labels:function(){b.is.labeled()&&(0!=(r=T.find(".labels:not(.auto)")).length?b.setup.customLabel():b.setup.autoLabel(),c.showLabelTicks&&T.addClass(i.ticked))},testOutTouch:function(){try{return z.createEvent("TouchEvent"),!0}catch(e){return!1}},customLabel:function(){var n,e=r.find(".label"),i=e.length,o=b.get.min(),a=b.get.max();e.each(function(e){var t=N(this).attr("data-value");n=t?((t=a<t?a:t<o?o:t)-o)/(a-o):(e+1)/(i+1),b.update.labelPosition(n,N(this))})},autoLabel:function(){if(0!=b.get.step()){0!=(r=T.find(".labels")).length?r.empty():r=T.append('<ul class="auto labels"></ul>').find(".labels");for(var e=0,t=b.get.numLabels();e<=t;e++){var n=b.get.label(e),i=""!==n?e%b.get.gapRatio()?N('<li class="halftick label"></li>'):N('<li class="label">'+n+"</li>"):null,o=e/t;i&&(b.update.labelPosition(o,i),r.append(i))}}}},bind:{events:function(){b.bind.globalKeyboardEvents(),b.bind.keyboardEvents(),b.bind.mouseEvents(),b.is.touch()&&b.bind.touchEvents(),c.autoAdjustLabels&&b.bind.windowEvents()},keyboardEvents:function(){b.verbose("Binding keyboard events"),T.on("keydown"+C,b.event.keydown)},globalKeyboardEvents:function(){N(z).on("keydown"+C+t,b.event.activateFocus)},mouseEvents:function(){b.verbose("Binding mouse events"),T.find(".track, .thumb, .inner").on("mousedown"+C,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),T.on("mousedown"+C,b.event.down),T.on("mouseenter"+C,function(e){w=!0}),T.on("mouseleave"+C,function(e){w=!1})},touchEvents:function(){b.verbose("Binding touch events"),T.find(".track, .thumb, .inner").on("touchstart"+C,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),T.on("touchstart"+C,b.event.down)},slidingEvents:function(){b.verbose("Binding page wide events while handle is being draged"),b.is.touch()?(N(z).on("touchmove"+C,b.event.move),N(z).on("touchend"+C,b.event.up)):(N(z).on("mousemove"+C,b.event.move),N(z).on("mouseup"+C,b.event.up))},windowEvents:function(){P.on("resize"+C,b.event.resize)}},unbind:{events:function(){T.find(".track, .thumb, .inner").off("mousedown"+C),T.find(".track, .thumb, .inner").off("touchstart"+C),T.off("mousedown"+C),T.off("mouseenter"+C),T.off("mouseleave"+C),T.off("touchstart"+C),T.off("keydown"+C),T.off("focusout"+C),N(z).off("keydown"+C+t,b.event.activateFocus),P.off("resize"+C)},slidingEvents:function(){b.is.touch()?(N(z).off("touchmove"+C),N(z).off("touchend"+C)):(N(z).off("mousemove"+C),N(z).off("mouseup"+C))}},event:{down:function(e,t){if(e.preventDefault(),b.is.range()){var n=b.determine.eventPos(e,t),i=b.determine.pos(n);m=b.determine.closestThumb(i)}b.is.disabled()||b.bind.slidingEvents()},move:function(e,t){e.preventDefault();var n=b.determine.valueFromEvent(e,t);if(0==b.get.step()||b.is.smooth()){var i=b.thumbVal,o=b.secondThumbVal,a=b.determine.smoothValueFromEvent(e,t);m.hasClass("second")?o=n:i=n,n=Math.abs(i-(o||0)),b.update.position(a),c.onMove.call(S,n,i,o)}else b.update.value(n,function(e,t,n){c.onMove.call(S,e,t,n)})},up:function(e,t){e.preventDefault();var n=b.determine.valueFromEvent(e,t);b.set.value(n),b.unbind.slidingEvents()},keydown:function(e,t){if(b.is.focused()&&N(z).trigger(e),t||b.is.focused()){var n=b.determine.keyMovement(e);if(0!=n)switch(e.preventDefault(),n){case 1:b.takeStep();break;case 2:b.takeStep(b.get.multiplier());break;case-1:b.backStep();break;case-2:b.backStep(b.get.multiplier())}}},activateFocus:function(e){!b.is.focused()&&b.is.hover()&&0!=b.determine.keyMovement(e)&&(e.preventDefault(),b.event.keydown(e,!0),T.focus())},resize:function(e){A!=b.get.gapRatio()&&(b.setup.labels(),A=b.get.gapRatio())}},resync:function(){b.verbose("Resyncing thumb position based on value"),b.is.range()&&b.update.position(b.secondThumbVal,a),b.update.position(b.thumbVal,o),b.setup.labels()},takeStep:function(e){e=e!=H?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Taking a step"),0<t)b.set.value(n+t*e);else if(0==t){var i=b.get.precision(),o=n+e/i;b.set.value(Math.round(o*i)/i)}},backStep:function(e){e=e!=H?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Going back a step"),0<t)b.set.value(n-t*e);else if(0==t){var i=b.get.precision(),o=n-e/i;b.set.value(Math.round(o*i)/i)}},is:{range:function(){return T.hasClass(c.className.range)},hover:function(){return w},focused:function(){return T.is(":focus")},disabled:function(){return T.hasClass(c.className.disabled)},labeled:function(){return T.hasClass(c.className.labeled)},reversed:function(){return T.hasClass(c.className.reversed)},vertical:function(){return T.hasClass(c.className.vertical)},smooth:function(){return c.smooth||T.hasClass(c.className.smooth)},touch:function(){return n}},get:{trackOffset:function(){return b.is.vertical()?e.offset().top:e.offset().left},trackLength:function(){return b.is.vertical()?e.height():e.width()},trackLeft:function(){return b.is.vertical()?e.position().top:e.position().left},trackStartPos:function(){return b.is.reversed()?b.get.trackLeft()+b.get.trackLength():b.get.trackLeft()},trackEndPos:function(){return b.is.reversed()?b.get.trackLeft():b.get.trackLeft()+b.get.trackLength()},trackStartMargin:function(){return(b.is.vertical()?b.is.reversed()?T.css("padding-bottom"):T.css("padding-top"):b.is.reversed()?T.css("padding-right"):T.css("padding-left"))||"0px"},trackEndMargin:function(){return(b.is.vertical()?b.is.reversed()?T.css("padding-top"):T.css("padding-bottom"):b.is.reversed()?T.css("padding-left"):T.css("padding-right"))||"0px"},precision:function(){var e,t=b.get.step();if(0!=t){var n=String(t).split(".");e=2==n.length?n[1].length:0}else e=c.decimalPlaces;var i=Math.pow(10,e);return b.debug("Precision determined",i),i},min:function(){return c.min},max:function(){var e=b.get.step(),t=b.get.min(),n=0===e?0:Math.floor((c.max-t)/e);return 0==(0===e?0:(c.max-t)%e)?c.max:t+n*e},step:function(){return c.step},numLabels:function(){var e=Math.round((b.get.max()-b.get.min())/b.get.step());return b.debug("Determined that there should be "+e+" labels"),e},labelType:function(){return c.labelType},label:function(e){if(x)return x(e);switch(c.labelType){case c.labelTypes.number:return Math.round((e*b.get.step()+b.get.min())*l)/l;case c.labelTypes.letter:return L[e%26];default:return e}},value:function(){return s},currentThumbValue:function(){return m.hasClass("second")?b.secondThumbVal:b.thumbVal},thumbValue:function(e){switch(e){case"second":if(b.is.range())return b.secondThumbVal;b.error(f.notrange);break;case"first":default:return b.thumbVal}},multiplier:function(){return c.pageMultiplier},thumbPosition:function(e){switch(e){case"second":if(b.is.range())return h;b.error(f.notrange);break;case"first":default:return p}},gapRatio:function(){var e=1;if(c.autoAdjustLabels){for(var t=b.get.numLabels(),n=1;b.get.trackLength()/t*n<c.labelDistance;)t%n||(e=n),n+=1;return e}return 1}},determine:{pos:function(e){return b.is.reversed()?b.get.trackStartPos()-e+b.get.trackOffset():e-b.get.trackOffset()-b.get.trackStartPos()},closestThumb:function(e){var t=parseFloat(b.determine.thumbPos(o)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(a));return n<=Math.abs(e-i)?o:a},closestThumbPos:function(e){var t=parseFloat(b.determine.thumbPos(o)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(a));return n<=Math.abs(e-i)?t:i},thumbPos:function(e){return b.is.vertical()?b.is.reversed()?e.css("bottom"):e.css("top"):b.is.reversed()?e.css("right"):e.css("left")},positionFromValue:function(e){var t=b.get.min(),n=b.get.max(),i=(e=n<e?n:e<t?t:e,b.get.trackLength()),o=(e-t)/(n-t),a=Math.round(o*i);return b.verbose("Determined position: "+a+" from value: "+e),a},positionFromRatio:function(e){var t=b.get.trackLength(),n=b.get.step(),i=Math.round(e*t);return 0==n?i:Math.round(i/n)*n},valueFromEvent:function(e,t){var n=b.determine.eventPos(e,t),i=b.determine.pos(n);return n<b.get.trackOffset()?b.is.reversed()?b.get.max():b.get.min():n>b.get.trackOffset()+b.get.trackLength()?b.is.reversed()?b.get.min():b.get.max():b.determine.value(i)},smoothValueFromEvent:function(e,t){var n,i=b.get.min(),o=b.get.max(),a=b.get.trackLength(),r=b.determine.eventPos(e,t)-b.get.trackOffset();return n=(r=r<0?0:a<r?a:r)/a,b.is.reversed()&&(n=1-n),n*(o-i)+i},eventPos:function(e,t){if(b.is.touch()){var n=e.changedTouches[0].pageY||e.touches[0].pageY,i=e.changedTouches[0].pageX||e.touches[0].pageX;return b.is.vertical()?n:i}var o=e.pageY||t.pageY,a=e.pageX||t.pageX;return b.is.vertical()?o:a},value:function(e){var t=b.is.reversed()?b.get.trackEndPos():b.get.trackStartPos(),n=(e-t)/((b.is.reversed()?b.get.trackStartPos():b.get.trackEndPos())-t),i=b.get.max()-b.get.min(),o=b.get.step(),a=n*i,r=0==o?a:Math.round(a/o)*o;return b.verbose("Determined value based upon position: "+e+" as: "+a),a!=r&&b.verbose("Rounding value to closest step: "+r),r=Math.round(r*l)/l,b.verbose("Cutting off additional decimal places"),r+b.get.min()},keyMovement:function(e){var t=e.which,n=b.is.vertical()?b.is.reversed()?y.downArrow:y.upArrow:y.downArrow,i=b.is.vertical()?b.is.reversed()?y.upArrow:y.downArrow:y.upArrow,o=b.is.vertical()?y.leftArrow:b.is.reversed()?y.rightArrow:y.leftArrow,a=b.is.vertical()?y.rightArrow:b.is.reversed()?y.leftArrow:y.rightArrow;return t==n||t==o?-1:t==i||t==a?1:t==y.pageDown?-2:t==y.pageUp?2:0}},handleNewValuePosition:function(e){var t=b.get.min(),n=b.get.max();return e<=t?e=t:n<=e&&(e=n),b.determine.positionFromValue(e)},set:{value:function(e){b.update.value(e,function(e,t,n){c.onChange.call(S,e,t,n),c.onMove.call(S,e,t,n)})},rangeValue:function(e,t){if(b.is.range()){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),t<=n?t=n:i<=t&&(t=i),b.thumbVal=e,b.secondThumbVal=t,s=Math.abs(b.thumbVal-b.secondThumbVal),b.update.position(b.thumbVal,o),b.update.position(b.secondThumbVal,a),c.onChange.call(S,s,b.thumbVal,b.secondThumbVal),c.onMove.call(S,s,b.thumbVal,b.secondThumbVal)}else b.error(f.notrange)},position:function(e,t){var n=b.determine.value(e);switch(t){case"second":b.secondThumbVal=n,b.update.position(n,a);break;default:b.thumbVal=n,b.update.position(n,o)}s=Math.abs(b.thumbVal-(b.secondThumbVal||0)),b.set.value(s)}},update:{value:function(e,t){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),b.is.range()?(m.hasClass("second")?b.secondThumbVal=e:b.thumbVal=e,s=Math.abs(b.thumbVal-b.secondThumbVal)):(s=e,b.thumbVal=s),b.update.position(e),b.debug("Setting slider value to "+s),"function"==typeof t&&t(s,b.thumbVal,b.secondThumbVal)},position:function(e,t){var n=b.handleNewValuePosition(e),i=t!=H?t:m,o=b.thumbVal||b.get.min(),a=b.secondThumbVal||b.get.min();b.is.range()&&i.hasClass("second")?(h=n,a=e):(p=n,o=e);var r,s,l=b.get.min(),c=b.get.max(),u=100*(e-l)/(c-l),d=100*(Math.min(o,a)-l)/(c-l),f=100*(1-(Math.max(o,a)-l)/(c-l));r=b.is.vertical()?b.is.reversed()?(s={bottom:"calc("+u+"% - "+v+"px)",top:"auto"},{bottom:d+"%",top:f+"%"}):(s={top:"calc("+u+"% - "+v+"px)",bottom:"auto"},{top:d+"%",bottom:f+"%"}):b.is.reversed()?(s={right:"calc("+u+"% - "+v+"px)",left:"auto"},{right:d+"%",left:f+"%"}):(s={left:"calc("+u+"% - "+v+"px)",right:"auto"},{left:d+"%",right:f+"%"}),i.css(s),g.css(r),b.debug("Setting slider position to "+n)},labelPosition:function(e,t){var n=b.get.trackStartMargin(),i=b.get.trackEndMargin(),o=b.is.vertical()?b.is.reversed()?"bottom":"top":b.is.reversed()?"right":"left",a=b.is.reversed()&&!b.is.vertical()?" - ":" + ",r="(100% - "+n+" - "+i+") * "+e;t.css(o,"calc("+r+a+n+")")}},goto:{max:function(){b.set.value(b.get.max())},min:function(){b.set.value(b.get.min())}},read:{metadata:function(){var e={thumbVal:T.data(u.thumbVal),secondThumbVal:T.data(u.secondThumbVal)};e.thumbVal&&(b.is.range()&&e.secondThumbVal?(b.debug("Current value set from metadata",e.thumbVal,e.secondThumbVal),b.set.rangeValue(e.thumbVal,e.secondThumbVal)):(b.debug("Current value set from metadata",e.thumbVal),b.set.value(e.thumbVal)))},settings:function(){!1!==c.start&&(b.is.range()?(b.debug("Start position set from settings",c.start,c.end),b.set.rangeValue(c.start,c.end)):(b.debug("Start position set from settings",c.start),b.set.value(c.start)))}},setting:function(e,t){if(b.debug("Changing setting",e,t),N.isPlainObject(e))N.extend(!0,c,e);else{if(t===H)return c[e];N.isPlainObject(c[e])?N.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(N.isPlainObject(e))N.extend(!0,b,e);else{if(t===H)return b[e];b[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,c.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),b.verbose.apply(console,arguments)))},error:function(){c.silent||(b.error=Function.prototype.bind.call(console.error,console,c.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(O||t),O=t,M.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=c.name+":",n=0;O=!1,clearTimeout(b.performance.timer),N.each(M,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",R&&(e+=" '"+R+"'"),(console.group!==H||console.table!==H)&&0<M.length&&(console.groupCollapsed(e),console.table?console.table(M):N.each(M,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),M=[]}},invoke:function(i,e,t){var o,a,n,r=D;return e=e||q,t=S||t,"string"==typeof i&&r!==H&&(i=i.split(/[\. ]/),o=i.length-1,N.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(N.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==H)return a=r[n],!1;if(!N.isPlainObject(r[t])||e==o)return r[t]!==H?a=r[t]:b.error(f.method,i),!1;r=r[t]}})),N.isFunction(a)?n=a.apply(t,e):a!==H&&(n=a),N.isArray(F)?F.push(n):F!==H?F=[F,n]:n!==H&&(F=n),a}},j?(D===H&&b.initialize(),b.invoke(I)):(D!==H&&D.invoke("destroy"),b.initialize())}),F!==H?F:this},N.fn.slider.settings={silent:!1,debug:!1,verbose:!1,performance:!0,name:"Slider",namespace:"slider",error:{method:"The method you called is not defined.",notrange:"This slider is not a range slider"},metadata:{thumbVal:"thumbVal",secondThumbVal:"secondThumbVal"},min:0,max:20,step:1,start:0,end:20,labelType:"number",showLabelTicks:!1,smooth:!1,autoAdjustLabels:!0,labelDistance:100,decimalPlaces:2,pageMultiplier:2,selector:{},className:{reversed:"reversed",disabled:"disabled",labeled:"labeled",ticked:"ticked",vertical:"vertical",range:"range",smooth:"smooth"},keys:{pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},labelTypes:{number:"number",letter:"letter"},onChange:function(e,t,n){},onMove:function(e,t,n){}}}(jQuery,window,document),function(C,e,t,k){"use strict";C.isFunction=C.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.rating=function(m){var g,p=C(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,w=[].slice.call(arguments,1);return p.each(function(){var e,i,o=C.isPlainObject(m)?C.extend(!0,{},C.fn.rating.settings,m):C.extend({},C.fn.rating.settings),t=o.namespace,a=o.className,n=o.metadata,r=o.selector,s="."+t,l="module-"+t,c=this,u=C(this).data(l),d=C(this),f=d.find(r.icon);i={initialize:function(){i.verbose("Initializing rating module",o),0===f.length&&i.setup.layout(),o.interactive&&!i.is.disabled()?i.enable():i.disable(),i.set.initialLoad(),i.set.rating(i.get.initialRating()),i.remove.initialLoad(),i.instantiate()},instantiate:function(){i.verbose("Instantiating module",o),u=i,d.data(l,i)},destroy:function(){i.verbose("Destroying previous instance",u),i.remove.events(),d.removeData(l)},refresh:function(){f=d.find(r.icon)},setup:{layout:function(){var e=i.get.maxRating(),t=i.get.icon(),n=C.fn.rating.settings.templates.icon(e,t);i.debug("Generating icon html dynamically"),d.html(n),i.refresh()}},event:{mouseenter:function(){var e=C(this);e.nextAll().removeClass(a.selected),d.addClass(a.selected),e.addClass(a.selected).prevAll().addClass(a.selected)},mouseleave:function(){d.removeClass(a.selected),f.removeClass(a.selected)},click:function(){var e=C(this),t=i.get.rating(),n=f.index(e)+1;("auto"==o.clearable?1===f.length:o.clearable)&&t==n?i.clearRating():i.set.rating(n)}},clearRating:function(){i.debug("Clearing current rating"),i.set.rating(0)},bind:{events:function(){i.verbose("Binding events"),d.on("mouseenter"+s,r.icon,i.event.mouseenter).on("mouseleave"+s,r.icon,i.event.mouseleave).on("click"+s,r.icon,i.event.click)}},remove:{events:function(){i.verbose("Removing events"),d.off(s)},initialLoad:function(){e=!1}},enable:function(){i.debug("Setting rating to interactive mode"),i.bind.events(),d.removeClass(a.disabled)},disable:function(){i.debug("Setting rating to read-only mode"),i.remove.events(),d.addClass(a.disabled)},is:{initialLoad:function(){return e},disabled:function(){return d.hasClass(a.disabled)}},get:{icon:function(){var e=d.data(n.icon);return e&&d.removeData(n.icon),e||o.icon},initialRating:function(){return d.data(n.rating)!==k?(d.removeData(n.rating),d.data(n.rating)):o.initialRating},maxRating:function(){return d.data(n.maxRating)!==k?(d.removeData(n.maxRating),d.data(n.maxRating)):o.maxRating},rating:function(){var e=f.filter("."+a.active).length;return i.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=0<=e-1?e-1:0,n=f.eq(t);d.removeClass(a.selected),f.removeClass(a.selected).removeClass(a.active),0<e&&(i.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(a.active)),i.is.initialLoad()||o.onRate.call(c,e)},initialLoad:function(){e=!0}},setting:function(e,t){if(i.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,o,e);else{if(t===k)return o[e];C.isPlainObject(o[e])?C.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,i,e);else{if(t===k)return i[e];i[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?i.performance.log(arguments):(i.debug=Function.prototype.bind.call(console.info,console,o.name+":"),i.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?i.performance.log(arguments):(i.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),i.verbose.apply(console,arguments)))},error:function(){o.silent||(i.error=Function.prototype.bind.call(console.error,console,o.name+":"),i.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(i.performance.timer),i.performance.timer=setTimeout(i.performance.display,500)},display:function(){var e=o.name+":",n=0;v=!1,clearTimeout(i.performance.timer),C.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),1<p.length&&(e+=" ("+p.length+")"),(console.group!==k||console.table!==k)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):C.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=u;return e=e||w,t=c||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==k&&(a=r[t]),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(g)?g.push(n):g!==k?g=[g,n]:n!==k&&(g=n),a}},x?(u===k&&i.initialize(),i.invoke(y)):(u!==k&&u.invoke("destroy"),i.initialize())}),g!==k?g:this},C.fn.rating.settings={name:"Rating",namespace:"rating",icon:"star",silent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating",icon:"icon"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e,t){for(var n=1,i="";n<=e;)i+='<i class="'+t+' icon"></i>',n++;return i}}}}(jQuery,window,document),function(F,P,R,O){"use strict";F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},P=void 0!==P&&P.Math==Math?P:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.search=function(x){var w,C=F(this),k=C.selector||"",T=(new Date).getTime(),S=[],D=x,A="string"==typeof D,E=[].slice.call(arguments,1);return F(this).each(function(){var f,u=F.isPlainObject(x)?F.extend(!0,{},F.fn.search.settings,x):F.extend({},F.fn.search.settings),m=u.className,c=u.metadata,i=u.regExp,a=u.fields,g=u.selector,d=u.error,e=u.namespace,o="."+e,t=e+"-module",p=F(this),h=p.find(g.prompt),n=p.find(g.searchButton),r=p.find(g.results),s=p.find(g.result),v=(p.find(g.category),this),l=p.data(t),b=!1,y=!1;f={initialize:function(){f.verbose("Initializing module"),f.get.settings(),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),l=f,p.data(t,f)},destroy:function(){f.verbose("Destroying instance"),p.off(o).removeData(t)},refresh:function(){f.debug("Refreshing selector cache"),h=p.find(g.prompt),n=p.find(g.searchButton),p.find(g.category),r=p.find(g.results),s=p.find(g.result)},refreshResults:function(){r=p.find(g.results),s=p.find(g.result)},bind:{events:function(){f.verbose("Binding events to search"),u.automatic&&(p.on(f.get.inputEvent()+o,g.prompt,f.event.input),h.attr("autocomplete","off")),p.on("focus"+o,g.prompt,f.event.focus).on("blur"+o,g.prompt,f.event.blur).on("keydown"+o,g.prompt,f.handleKeyboard).on("click"+o,g.searchButton,f.query).on("mousedown"+o,g.results,f.event.result.mousedown).on("mouseup"+o,g.results,f.event.result.mouseup).on("click"+o,g.result,f.event.result.click)}},determine:{searchFields:function(){x&&x.searchFields!==O&&(u.searchFields=x.searchFields)}},event:{input:function(){u.searchDelay?(clearTimeout(f.timer),f.timer=setTimeout(function(){f.is.focused()&&f.query()},u.searchDelay)):f.query()},focus:function(){f.set.focus(),u.searchOnFocus&&f.has.minimumCharacters()&&f.query(function(){f.can.show()&&f.showResults()})},blur:function(e){function t(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,u.hideDelay)}var n=R.activeElement===this;n||(y=!1,f.resultsClicked?(f.debug("Determining if user action caused search to close"),p.one("click.close"+o,g.results,function(e){f.is.inMessage(e)||b?h.focus():(b=!1,f.is.animating()||f.is.hidden()||t())})):(f.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(e){f.debug("Search result selected");var t=F(this),n=t.find(g.title).eq(0),i=t.is("a[href]")?t:t.find("a[href]").eq(0),o=i.attr("href")||!1,a=i.attr("target")||!1,r=0<n.length&&n.text(),s=f.get.results(),l=t.data(c.result)||f.get.result(r,s);if(r&&f.set.value(r),F.isFunction(u.onSelect)&&!1===u.onSelect.call(v,l,s))return f.debug("Custom onSelect callback cancelled default select action"),void(b=!0);f.hideResults(),o&&(f.verbose("Opening search link found in result",i),"_blank"==a||e.ctrlKey?P.open(o):P.location.href=o)}}},handleKeyboard:function(e){var t,n=p.find(g.result),i=p.find(g.category),o=n.filter("."+m.active),a=n.index(o),r=n.length,s=0<o.length,l=e.which,c=13,u=38,d=40;if(l==27&&(f.verbose("Escape key pressed, blurring search field"),f.hideResults(),y=!0),f.is.visible())if(l==c){if(f.verbose("Enter key pressed, selecting active result"),0<n.filter("."+m.active).length)return f.event.result.click.call(n.filter("."+m.active),e),e.preventDefault(),!1}else l==u&&s?(f.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),e.preventDefault()):l==d&&(f.verbose("Down key pressed, changing active result"),t=r<=a+1?a:a+1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),e.preventDefault());else l==c&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),h.one("keyup",f.remove.buttonFocus))},setup:{api:function(t,n){var e={debug:u.debug,on:!1,cache:u.cache,action:"search",urlData:{query:t},onSuccess:function(e){f.parse.response.call(v,e,t),n()},onFailure:function(){f.displayMessage(d.serverError),n()},onAbort:function(e){},onError:f.error};F.extend(!0,e,u.apiSettings),f.verbose("Setting up API request",e),p.api(e)}},can:{useAPI:function(){return F.fn.api!==O},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return u.transition&&F.fn.transition!==O&&p.transition("is supported")}},is:{animating:function(){return r.hasClass(m.animating)},hidden:function(){return r.hasClass(m.hidden)},inMessage:function(e){if(e.target){var t=F(e.target);return F.contains(R.documentElement,e.target)&&0<t.closest(g.message).length}},empty:function(){return""===r.html()},visible:function(){return 0<r.filter(":visible").length},focused:function(){return 0<h.filter(":focus").length}},get:{settings:function(){F.isPlainObject(x)&&x.searchFullText&&(u.fullTextSearch=x.searchFullText,f.error(u.error.oldSearchSyntax,v)),u.ignoreDiacritics&&!String.prototype.normalize&&(u.ignoreDiacritics=!1,f.error(d.noNormalize,v))},inputEvent:function(){var e=h[0];return e!==O&&e.oninput!==O?"input":e!==O&&e.onpropertychange!==O?"propertychange":"keyup"},value:function(){return h.val()},results:function(){return p.data(c.results)},result:function(n,e){var i=!1;return n=n!==O?n:f.get.value(),e=e!==O?e:f.get.results(),"category"===u.type?(f.debug("Finding result that matches",n),F.each(e,function(e,t){if(Array.isArray(t.results)&&(i=f.search.object(n,t.results)[0]))return!1})):(f.debug("Finding result in results object",n),i=f.search.object(n,e)[0]),i||!1}},select:{firstResult:function(){f.verbose("Selecting first result"),s.first().addClass(m.active)}},set:{focus:function(){p.addClass(m.focus)},loading:function(){p.addClass(m.loading)},value:function(e){f.verbose("Setting search input value",e),h.val(e)},type:function(e){e=e||u.type,"category"==u.type&&p.addClass(u.type)},buttonPressed:function(){n.addClass(m.pressed)}},remove:{loading:function(){p.removeClass(m.loading)},focus:function(){p.removeClass(m.focus)},buttonPressed:function(){n.removeClass(m.pressed)},diacritics:function(e){return u.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},query:function(e){e=F.isFunction(e)?e:function(){};var t=f.get.value(),n=f.read.cache(t);e=e||function(){},f.has.minimumCharacters()?(n?(f.debug("Reading result from cache",t),f.save.results(n.results),f.addResults(n.html),f.inject.id(n.results),e()):(f.debug("Querying for",t),F.isPlainObject(u.source)||Array.isArray(u.source)?(f.search.local(t),e()):f.can.useAPI()?f.search.remote(t,e):(f.error(d.source),e())),u.onSearchQuery.call(v,t)):f.hideResults()},search:{local:function(e){var t,n=f.search.object(e,u.source);f.set.loading(),f.save.results(n),f.debug("Returned full local search results",n),0<u.maxResults&&(f.debug("Using specified max results",n),n=n.slice(0,u.maxResults)),"category"==u.type&&(n=f.create.categoryResults(n)),t=f.generateResults({results:n}),f.remove.loading(),f.addResults(t),f.inject.id(n),f.write.cache(e,{html:t,results:n})},remote:function(e,t){t=F.isFunction(t)?t:function(){},p.api("is loading")&&p.api("abort"),f.setup.api(e,t),p.api("query")},object:function(o,t,e){o=f.remove.diacritics(String(o));function a(e,t){var n=-1==F.inArray(t,r),i=-1==F.inArray(t,l),o=-1==F.inArray(t,s);n&&i&&o&&e.push(t)}var r=[],s=[],l=[],n=o.replace(i.escape,"\\$&"),c=new RegExp(i.beginsWith+n,"i");return t=t||u.source,e=e!==O?e:u.searchFields,Array.isArray(e)||(e=[e]),t===O||!1===t?(f.error(d.source),[]):(F.each(e,function(e,i){F.each(t,function(e,t){var n;"string"!=typeof t[i]&&"number"!=typeof t[i]||(-1!==(n="string"==typeof t[i]?f.remove.diacritics(t[i]):t[i].toString()).search(c)?a(r,t):"exact"===u.fullTextSearch&&f.exactSearch(o,n)?a(s,t):1==u.fullTextSearch&&f.fuzzySearch(o,n)&&a(l,t))})}),F.merge(s,l),F.merge(r,s),r)}},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){if(Array.isArray(e)){var n={};n[a.results]=e,e=n}var i=f.generateResults(e);f.verbose("Parsing server response",e),e!==O&&t!==O&&e[a.results]!==O&&(f.addResults(i),f.inject.id(e[a.results]),f.write.cache(t,{html:i,results:e[a.results]}),f.save.results(e[a.results]))}},cancel:{query:function(){f.can.useAPI()&&p.api("abort")}},has:{minimumCharacters:function(){return f.get.value().length>=u.minCharacters},results:function(){return 0!==r.length&&""!=r.html()}},clear:{cache:function(e){var t=p.data(c.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],p.data(c.cache,t)):(f.debug("Clearing cache",e),p.removeData(c.cache))}},read:{cache:function(e){var t=p.data(c.cache);return!!u.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==O&&t[e])}},create:{categoryResults:function(e){var n={};return F.each(e,function(e,t){t.category&&(n[t.category]===O?(f.verbose("Creating new category of results",t.category),n[t.category]={name:t.category,results:[t]}):n[t.category].results.push(t))}),n},id:function(e,t){var n,i=e+1;return t!==O?(n=String.fromCharCode(97+t)+i,f.verbose("Creating category result id",n)):(n=i,f.verbose("Creating result id",n)),n},results:function(){0===r.length&&(r=F("<div />").addClass(m.results).appendTo(p))}},inject:{result:function(e,t,n){f.verbose("Injecting result into results");var i=n!==O?r.children().eq(n).children(g.results).first().children(g.result).eq(t):r.children(g.result).eq(t);f.verbose("Injecting results metadata",i),i.data(c.result,e)},id:function(e){f.debug("Injecting unique ids into results");var n=0,i=0;return"category"===u.type?F.each(e,function(e,t){0<t.results.length&&(i=0,F.each(t.results,function(e,t){t.id===O&&(t.id=f.create.id(i,n)),f.inject.result(t,i,n),i++}),n++)}):F.each(e,function(e,t){t.id===O&&(t.id=f.create.id(i)),f.inject.result(t,i),i++}),e}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),p.data(c.results,e)}},write:{cache:function(e,t){var n=p.data(c.cache)!==O?p.data(c.cache):{};u.cache&&(f.verbose("Writing generated html to cache",e,t),n[e]=t,p.data(c.cache,n))}},addResults:function(e){if(F.isFunction(u.onResultsAdd)&&!1===u.onResultsAdd.call(r,e))return f.debug("onResultsAdd callback cancelled default action"),!1;e?(r.html(e),f.refreshResults(),u.selectFirstResult&&f.select.firstResult(),f.showResults()):f.hideResults(function(){r.empty()})},showResults:function(e){e=F.isFunction(e)?e:function(){},y||!f.is.visible()&&f.has.results()&&(f.can.transition()?(f.debug("Showing results with css animations"),r.transition({animation:u.transition+" in",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Showing results with javascript"),r.stop().fadeIn(u.duration,u.easing)),u.onResultsOpen.call(r))},hideResults:function(e){e=F.isFunction(e)?e:function(){},f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),r.transition({animation:u.transition+" out",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Hiding results with javascript"),r.stop().fadeOut(u.duration,u.easing)),u.onResultsClose.call(r))},generateResults:function(e){f.debug("Generating html from response",e);var t=u.templates[u.type],n=F.isPlainObject(e[a.results])&&!F.isEmptyObject(e[a.results]),i=Array.isArray(e[a.results])&&0<e[a.results].length,o="";return n||i?(0<u.maxResults&&(n?"standard"==u.type&&f.error(d.maxResults):e[a.results]=e[a.results].slice(0,u.maxResults)),F.isFunction(t)?o=t(e,a,u.preserveHTML):f.error(d.noTemplate,!1)):u.showNoResults&&(o=f.displayMessage(d.noResults,"empty",d.noResultsHeader)),u.onResults.call(v,e),o},displayMessage:function(e,t,n){return t=t||"standard",f.debug("Displaying message",e,t,n),f.addResults(u.templates.message(e,t,n)),u.templates.message(e,t,n)},setting:function(e,t){if(F.isPlainObject(e))F.extend(!0,u,e);else{if(t===O)return u[e];u[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,f,e);else{if(t===O)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;T=!1,clearTimeout(f.performance.timer),F.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),1<C.length&&(e+=" ("+C.length+")"),(console.group!==O||console.table!==O)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):F.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=v||t,"string"==typeof i&&r!==O&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==O)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==O&&(a=r[t]),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==O&&(n=a),Array.isArray(w)?w.push(n):w!==O?w=[w,n]:n!==O&&(w=n),a}},A?(l===O&&f.initialize(),f.invoke(D)):(l!==O&&l.invoke("destroy"),f.initialize())}),w!==O?w:this},F.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["id","title","description"],displayField:"",fullTextSearch:"exact",ignoreDiacritics:!1,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,preserveHTML:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResultsHeader:"No Results",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",oldSearchSyntax:"searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined.",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e,t){if(t)return e;var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return n[e]}):e},message:function(e,t,n){var i="";return e!==O&&t!==O&&(i+='<div class="message '+t+'">',n&&(i+='<div class="header">'+n+"</div>"),i+=' <div class="description">'+e+"</div>",i+="</div>"),i},category:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.categoryResults]!==O&&(F.each(e[n.categoryResults],function(e,t){t[n.results]!==O&&0<t.results.length&&(o+='<div class="category">',t[n.categoryName]!==O&&(o+='<div class="name">'+a(t[n.categoryName],i)+"</div>"),o+='<div class="results">',F.each(t.results,function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==O&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==O&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==O&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==O&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),o+="</div>",o+="</div>")}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)},standard:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.results]!==O&&(F.each(e[n.results],function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==O&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==O&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==O&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==O&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)}}}}(jQuery,window,document),function(A,e,E,F){"use strict";A.isFunction=A.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A.fn.shape=function(b){var y,x=A(this),w=(new Date).getTime(),C=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)};return x.each(function(){var i,o,r,t=x.selector||"",s=A.isPlainObject(b)?A.extend(!0,{},A.fn.shape.settings,b):A.extend({},A.fn.shape.settings),e=s.namespace,l=s.selector,n=s.error,c=s.className,a="."+e,u="module-"+e,d=A(this),f=d.find(">"+l.sides),m=f.find(">"+l.side),g=!1,p=this,h=d.data(u);if(r={initialize:function(){r.verbose("Initializing module for",p),r.set.defaultSide(),r.instantiate()},instantiate:function(){r.verbose("Storing instance of module",r),h=r,d.data(u,h)},destroy:function(){r.verbose("Destroying previous module for",p),d.removeData(u).off(a)},refresh:function(){r.verbose("Refreshing selector cache for",p),d=A(p),f=A(this).find(l.sides),m=A(this).find(l.side)},repaint:function(){r.verbose("Forcing repaint event");(f[0]||E.createElement("div")).offsetWidth},animate:function(e,t){r.verbose("Animating box with properties",e),t=t||function(e){r.verbose("Executing animation callback"),e!==F&&e.stopPropagation(),r.reset(),r.set.active()},s.beforeChange.call(o[0]),r.get.transitionEvent()?(r.verbose("Starting CSS animation"),d.addClass(c.animating),f.css(e).one(r.get.transitionEvent(),t),r.set.duration(s.duration),D(function(){d.addClass(c.animating),i.addClass(c.hidden)})):t()},queue:function(e){r.debug("Queueing animation of",e),f.one(r.get.transitionEvent(),function(){r.debug("Executing queued animation"),setTimeout(function(){d.shape(e)},0)})},reset:function(){r.verbose("Animating states reset"),d.removeClass(c.animating).attr("style","").removeAttr("style"),f.attr("style","").removeAttr("style"),m.attr("style","").removeAttr("style").removeClass(c.hidden),o.removeClass(c.animating).attr("style","").removeAttr("style")},is:{complete:function(){return m.filter("."+c.active)[0]==o[0]},animating:function(){return d.hasClass(c.animating)},hidden:function(){return 0<d.closest(":hidden").length}},set:{defaultSide:function(){i=m.filter("."+s.className.active),o=0<i.next(l.side).length?i.next(l.side):m.first(),g=!1,r.verbose("Active side set to",i),r.verbose("Next side set to",o)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,r.verbose("Setting animation duration",e),!s.duration&&0!==s.duration||f.add(m).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=m.filter("."+s.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);d.css({width:t,height:n})},stageSize:function(){var e=d.clone().addClass(c.loading),t=e.find(">"+l.sides+">"+l.side),n=t.filter("."+s.className.active),i=g?t.eq(g):0<n.next(l.side).length?n.next(l.side):t.first(),o="next"===s.width?i.outerWidth(!0):"initial"===s.width?d.width():s.width,a="next"===s.height?i.outerHeight(!0):"initial"===s.height?d.height():s.height;n.removeClass(c.active),i.addClass(c.active),e.insertAfter(d),e.remove(),"auto"!==s.width&&(d.css("width",o+s.jitter),r.verbose("Specifying width during animation",o)),"auto"!==s.height&&(d.css("height",a+s.jitter),r.verbose("Specifying height during animation",a))},nextSide:function(e){g=e,o=m.filter(e),g=m.index(o),0===o.length&&(r.set.defaultSide(),r.error(n.side)),r.verbose("Next side manually set to",o)},active:function(){r.verbose("Setting new side to active",o),m.removeClass(c.active),o.addClass(c.active),s.onChange.call(o[0]),r.set.defaultSide()}},flip:{to:function(e,t){if(r.is.hidden())r.debug("Module not visible",o);else if(!r.is.complete()||r.is.animating()||s.allowRepeats){var n=r.get.transform[e]();r.is.animating()?r.queue("flip "+e):(r.debug("Flipping "+e,o),r.set.stageSize(),r.stage[t](),r.animate(n))}else r.debug("Side already visible",o)},up:function(){r.flip.to("up","above")},down:function(){r.flip.to("down","below")},left:function(){r.flip.to("left","left")},right:function(){r.flip.to("right","right")},over:function(){r.flip.to("over","behind")},back:function(){r.flip.to("back","behind")}},get:{transform:{up:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY("+(o.outerHeight(!0)-e)+"px) translateZ(-"+e+"px) rotateX(-90deg)"}},down:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY(-"+e+"px) translateZ(-"+e+"px) rotateX(90deg)"}},left:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX("+(o.outerWidth(!0)-e)+"px) translateZ(-"+e+"px) rotateY(90deg)"}},right:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX(-"+e+"px) translateZ(-"+e+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=E.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==F)return n[e]},nextSide:function(){return 0<i.next(l.side).length?i.next(l.side):m.first()}},stage:{above:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as above",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px) translateY(-"+e.depth.active+"px)"})},below:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as below",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px) translateY("+e.depth.active+"px)"})},left:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as left",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px) translateX(-"+n.depth.active+"px)"})},right:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as right",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px) translateX("+n.depth.active+"px)"})},behind:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as behind",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(r.debug("Changing setting",e,t),A.isPlainObject(e))A.extend(!0,s,e);else{if(t===F)return s[e];A.isPlainObject(s[e])?A.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(A.isPlainObject(e))A.extend(!0,r,e);else{if(t===F)return r[e];r[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?r.performance.log(arguments):(r.debug=Function.prototype.bind.call(console.info,console,s.name+":"),r.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?r.performance.log(arguments):(r.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),r.verbose.apply(console,arguments)))},error:function(){s.silent||(r.error=Function.prototype.bind.call(console.error,console,s.name+":"),r.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(w||t),w=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(r.performance.timer),r.performance.timer=setTimeout(r.performance.display,500)},display:function(){var e=s.name+":",n=0;w=!1,clearTimeout(r.performance.timer),A.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",t&&(e+=" '"+t+"'"),1<x.length&&(e+=" ("+x.length+")"),(console.group!==F||console.table!==F)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):A.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||S,t=p||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,A.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(A.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!A.isPlainObject(r[t])||e==o)return r[t]!==F&&(a=r[t]),!1;r=r[t]}})),A.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),Array.isArray(y)?y.push(n):y!==F?y=[y,n]:n!==F&&(y=n),a}},T){h===F&&r.initialize();var v=d.find("input");0<v.length?(v.blur(),setTimeout(function(){r.invoke(k)},150)):r.invoke(k)}else h!==F&&h.invoke("destroy"),r.initialize()}),y!==F?y:this},A.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(M,I,j,q){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.sidebar=function(x){var w,e=M(this),C=M(I),k=M(j),T=M("html"),S=M("head"),D=e.selector||"",A=(new Date).getTime(),E=[],F=x,P="string"==typeof F,R=[].slice.call(arguments,1),O=I.requestAnimationFrame||I.mozRequestAnimationFrame||I.webkitRequestAnimationFrame||I.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var r,s,e,t,l,c,u=M.isPlainObject(x)?M.extend(!0,{},M.fn.sidebar.settings,x):M.extend({},M.fn.sidebar.settings),n=u.selector,a=u.className,i=u.namespace,o=u.regExp,d=u.error,f="."+i,m="module-"+i,g=M(this),p=M(u.context),h=g.children(n.sidebar),v=(p.children(n.fixed),p.children(n.pusher)),b=this,y=g.data(m);c={initialize:function(){c.debug("Initializing sidebar",x),c.create.id(),l=c.get.transitionEvent(),u.delaySetup?O(c.setup.layout):c.setup.layout(),O(function(){c.setup.cache()}),c.instantiate()},instantiate:function(){c.verbose("Storing instance of module",c),y=c,g.data(m,c)},create:{id:function(){e=(Math.random().toString(16)+"000000000").substr(2,8),s="."+e,c.verbose("Creating unique id for element",e)}},destroy:function(){c.verbose("Destroying previous module for",g),g.off(f).removeData(m),c.is.ios()&&c.remove.ios(),p.off(s),C.off(s),k.off(s)},event:{clickaway:function(e){if(u.closable){var t=0<v.find(e.target).length||v.is(e.target),n=p.is(e.target);t&&(c.verbose("User clicked on dimmed page"),c.hide()),n&&(c.verbose("User clicked on dimmable context (scaled out page)"),c.hide())}},touch:function(e){},containScroll:function(e){b.scrollTop<=0&&(b.scrollTop=1),b.scrollTop+b.offsetHeight>=b.scrollHeight&&(b.scrollTop=b.scrollHeight-b.offsetHeight-1)},scroll:function(e){0===M(e.target).closest(n.sidebar).length&&e.preventDefault()}},bind:{clickaway:function(){c.verbose("Adding clickaway events to context",p),p.on("click"+s,c.event.clickaway).on("touchend"+s,c.event.clickaway)},scrollLock:function(){u.scrollLock&&(c.debug("Disabling page scroll"),C.on("DOMMouseScroll"+s,c.event.scroll)),c.verbose("Adding events to contain sidebar scroll"),k.on("touchmove"+s,c.event.touch),g.on("scroll"+f,c.event.containScroll)}},unbind:{clickaway:function(){c.verbose("Removing clickaway events from context",p),p.off(s)},scrollLock:function(){c.verbose("Removing scroll lock from page"),k.off(s),C.off(s),g.off("scroll"+f)}},add:{inlineCSS:function(){var e,t=c.cache.width||g.outerWidth(),n=c.cache.height||g.outerHeight(),i=c.is.rtl(),o=c.get.direction(),a={left:t,right:-t,top:n,bottom:-n};i&&(c.verbose("RTL detected, flipping widths"),a.left=-t,a.right=t),e="<style>","left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),c.is.ie()&&("left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),e+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"),r=M(e+="</style>").appendTo(S),c.debug("Adding sizing css to head",r)}},refresh:function(){c.verbose("Refreshing selector cache"),p=M(u.context),h=p.children(n.sidebar),v=p.children(n.pusher),p.children(n.fixed),c.clear.cache()},refreshSidebars:function(){c.verbose("Refreshing other sidebars"),h=p.children(n.sidebar)},repaint:function(){c.verbose("Forcing repaint event"),b.style.display="none";b.offsetHeight;b.scrollTop=b.scrollTop,b.style.display=""},setup:{cache:function(){c.cache={width:g.outerWidth(),height:g.outerHeight(),rtl:"rtl"==g.css("direction")}},layout:function(){0===p.children(n.pusher).length&&(c.debug("Adding wrapper element for sidebar"),c.error(d.pusher),v=M('<div class="pusher" />'),p.children().not(n.omitted).not(h).wrapAll(v),c.refresh()),0!==g.nextAll(n.pusher).length&&g.nextAll(n.pusher)[0]===v[0]||(c.debug("Moved sidebar to correct parent element"),c.error(d.movedSidebar,b),g.detach().prependTo(p),c.refresh()),c.clear.cache(),c.set.pushable(),c.set.direction()}},attachEvents:function(e,t){var n=M(e);t=M.isFunction(c[t])?c[t]:c.toggle,0<n.length?(c.debug("Attaching sidebar events to element",e,t),n.on("click"+f,t)):c.error(d.notFound,e)},show:function(e){if(e=M.isFunction(e)?e:function(){},c.is.hidden()){if(c.refreshSidebars(),u.overlay&&(c.error(d.overlay),u.transition="overlay"),c.refresh(),c.othersActive())if(c.debug("Other sidebars currently visible"),u.exclusive){if("overlay"!=u.transition)return void c.hideOthers(c.show);c.hideOthers()}else u.transition="overlay";c.pushPage(function(){e.call(b),u.onShow.call(b)}),u.onChange.call(b),u.onVisible.call(b)}else c.debug("Sidebar is already visible")},hide:function(e){e=M.isFunction(e)?e:function(){},(c.is.visible()||c.is.animating())&&(c.debug("Hiding sidebar",e),c.refreshSidebars(),c.pullPage(function(){e.call(b),u.onHidden.call(b)}),u.onChange.call(b),u.onHide.call(b))},othersAnimating:function(){return 0<h.not(g).filter("."+a.animating).length},othersVisible:function(){return 0<h.not(g).filter("."+a.visible).length},othersActive:function(){return c.othersVisible()||c.othersAnimating()},hideOthers:function(e){var t=h.not(g).filter("."+a.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){c.verbose("Determining toggled direction"),c.is.hidden()?c.show():c.hide()},pushPage:function(t){var e,n,i,o=c.get.transition(),a="overlay"===o||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},"scale down"==u.transition&&c.scrollToTop(),c.set.transition(o),c.repaint(),e=function(){c.bind.clickaway(),c.add.inlineCSS(),c.set.animating(),c.set.visible()},n=function(){c.set.dimmed()},i=function(e){e.target==a[0]&&(a.off(l+s,i),c.remove.animating(),c.bind.scrollLock(),t.call(b))},a.off(l+s),a.on(l+s,i),O(e),u.dimPage&&!c.othersVisible()&&O(n)},pullPage:function(t){var e,n,i=c.get.transition(),o="overlay"==i||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},c.verbose("Removing context push state",c.get.direction()),c.unbind.clickaway(),c.unbind.scrollLock(),e=function(){c.set.transition(i),c.set.animating(),c.remove.visible(),u.dimPage&&!c.othersVisible()&&v.removeClass(a.dimmed)},n=function(e){e.target==o[0]&&(o.off(l+s,n),c.remove.animating(),c.remove.transition(),c.remove.inlineCSS(),("scale down"==i||u.returnScroll&&c.is.mobile())&&c.scrollBack(),t.call(b))},o.off(l+s),o.on(l+s,n),O(e)},scrollToTop:function(){c.verbose("Scrolling to top of page to avoid animation issues"),t=M(I).scrollTop(),g.scrollTop(0),I.scrollTo(0,0)},scrollBack:function(){c.verbose("Scrolling back to original page position"),I.scrollTo(0,t)},clear:{cache:function(){c.verbose("Clearing cached dimensions"),c.cache={}}},set:{ios:function(){T.addClass(a.ios)},pushed:function(){p.addClass(a.pushed)},pushable:function(){p.addClass(a.pushable)},dimmed:function(){v.addClass(a.dimmed)},active:function(){g.addClass(a.active)},animating:function(){g.addClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.addClass(e)},direction:function(e){e=e||c.get.direction(),g.addClass(a[e])},visible:function(){g.addClass(a.visible)},overlay:function(){g.addClass(a.overlay)}},remove:{inlineCSS:function(){c.debug("Removing inline css styles",r),r&&0<r.length&&r.remove()},ios:function(){T.removeClass(a.ios)},pushed:function(){p.removeClass(a.pushed)},pushable:function(){p.removeClass(a.pushable)},active:function(){g.removeClass(a.active)},animating:function(){g.removeClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.removeClass(e)},direction:function(e){e=e||c.get.direction(),g.removeClass(a[e])},visible:function(){g.removeClass(a.visible)},overlay:function(){g.removeClass(a.overlay)}},get:{direction:function(){return g.hasClass(a.top)?a.top:g.hasClass(a.right)?a.right:g.hasClass(a.bottom)?a.bottom:a.left},transition:function(){var e,t=c.get.direction();return e=c.is.mobile()?"auto"==u.mobileTransition?u.defaultTransition.mobile[t]:u.mobileTransition:"auto"==u.transition?u.defaultTransition.computer[t]:u.transition,c.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=j.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==q)return n[e]}},is:{ie:function(){return!I.ActiveXObject&&"ActiveXObject"in I||"ActiveXObject"in I},ios:function(){var e=navigator.userAgent,t=e.match(o.ios),n=e.match(o.mobileChrome);return!(!t||n)&&(c.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(o.mobile)?(c.verbose("Browser was found to be mobile",e),!0):(c.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!c.is.visible()},visible:function(){return g.hasClass(a.visible)},open:function(){return c.is.visible()},closed:function(){return c.is.hidden()},vertical:function(){return g.hasClass(a.top)},animating:function(){return p.hasClass(a.animating)},rtl:function(){return c.cache.rtl===q&&(c.cache.rtl="rtl"==g.css("direction")),c.cache.rtl}},setting:function(e,t){if(c.debug("Changing setting",e,t),M.isPlainObject(e))M.extend(!0,u,e);else{if(t===q)return u[e];M.isPlainObject(u[e])?M.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,c,e);else{if(t===q)return c[e];c[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;A=!1,clearTimeout(c.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),(console.group!==q||console.table!==q)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||R,t=b||t,"string"==typeof i&&r!==q&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==q)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==q?a=r[t]:c.error(d.method,i),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==q&&(n=a),Array.isArray(w)?w.push(n):w!==q?w=[w,n]:n!==q&&(w=n),a}},P?(y===q&&c.initialize(),c.invoke(F)):(y!==q&&c.invoke("destroy"),c.initialize())}),w!==q?w:this},M.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.sticky=function(v){var b,e=S(this),y=e.selector||"",x=(new Date).getTime(),w=[],C=v,k="string"==typeof C,T=[].slice.call(arguments,1);return e.each(function(){var t,i,e,n,d,f=S.isPlainObject(v)?S.extend(!0,{},S.fn.sticky.settings,v):S.extend({},S.fn.sticky.settings),o=f.className,a=f.namespace,r=f.error,s="."+a,l="module-"+a,c=S(this),u=S(D),m=S(f.scrollContext),g=c.data(l),p=D.requestAnimationFrame||D.mozRequestAnimationFrame||D.webkitRequestAnimationFrame||D.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this;d={initialize:function(){d.determineContainer(),d.determineContext(),d.verbose("Initializing sticky",f,t),d.save.positions(),d.checkErrors(),d.bind.events(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),g=d,c.data(l,d)},destroy:function(){d.verbose("Destroying previous instance"),d.reset(),e&&e.disconnect(),n&&n.disconnect(),u.off("load"+s,d.event.load).off("resize"+s,d.event.resize),m.off("scrollchange"+s,d.event.scrollchange),c.removeData(l)},observeChanges:function(){"MutationObserver"in D&&(e=new MutationObserver(d.event.documentChanged),n=new MutationObserver(d.event.changed),e.observe(A,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),n.observe(i[0],{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",n))},determineContainer:function(){t=f.container?S(f.container):c.offsetParent()},determineContext:function(){0!==(i=f.context?S(f.context):t).length||d.error(r.invalidContext,f.context,c)},checkErrors:function(){if(d.is.hidden()&&d.error(r.visible,c),d.cache.element.height>d.cache.context.height)return d.reset(),void d.error(r.elementSize,c)},bind:{events:function(){u.on("load"+s,d.event.load).on("resize"+s,d.event.resize),m.off("scroll"+s).on("scroll"+s,d.event.scroll).on("scrollchange"+s,d.event.scrollchange)}},event:{changed:function(e){clearTimeout(d.timer),d.timer=setTimeout(function(){d.verbose("DOM tree modified, updating sticky menu",e),d.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<S(e).find(h).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},load:function(){d.verbose("Page contents finished loading"),p(d.refresh)},resize:function(){d.verbose("Window resized"),p(d.refresh)},scroll:function(){p(function(){m.triggerHandler("scrollchange"+s,m.scrollTop())})},scrollchange:function(e,t){d.stick(t),f.onScroll.call(h)}},refresh:function(e){d.reset(),f.context||d.determineContext(),e&&d.determineContainer(),d.save.positions(),d.stick(),f.onReposition.call(h)},supports:{sticky:function(){var e=S("<div/>");return e.addClass(o.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){d.lastScroll=e},elementScroll:function(e){d.elementScroll=e},positions:function(){var e={height:m.height()},t={margin:{top:parseInt(c.css("margin-top"),10),bottom:parseInt(c.css("margin-bottom"),10)},offset:c.offset(),width:c.outerWidth(),height:c.outerHeight()},n={offset:i.offset(),height:i.outerHeight()};d.is.standardScroll()||(d.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=m.scrollTop(),e.left=m.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),d.cache={fits:t.height+f.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},d.set.containerSize(),d.stick(),d.debug("Caching element positions",d.cache)}},get:{direction:function(e){var t="down";return e=e||m.scrollTop(),d.lastScroll!==E&&(d.lastScroll<e?t="down":d.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||m.scrollTop(),d.lastScroll?e-d.lastScroll:0},currentElementScroll:function(){return d.elementScroll?d.elementScroll:d.is.top()?Math.abs(parseInt(c.css("top"),10))||0:Math.abs(parseInt(c.css("bottom"),10))||0},elementScroll:function(e){e=e||m.scrollTop();var t=d.cache.element,n=d.cache.scrollContext,i=d.get.scrollChange(e),o=t.height-n.height+f.offset,a=d.get.currentElementScroll(),r=a+i;return a=d.cache.fits||r<0?0:o<r?o:r}},remove:{lastScroll:function(){delete d.lastScroll},elementScroll:function(e){delete d.elementScroll},minimumSize:function(){t.css("min-height","")},offset:function(){c.css("margin-top","")}},set:{offset:function(){d.verbose("Setting offset on element",f.offset),c.css("margin-top",f.offset)},containerSize:function(){var e=t.get(0).tagName;"HTML"===e||"body"==e?d.determineContainer():Math.abs(t.outerHeight()-d.cache.context.height)>f.jitter&&(d.debug("Context has padding, specifying exact height for container",d.cache.context.height),t.css({height:d.cache.context.height}))},minimumSize:function(){var e=d.cache.element;t.css("min-height",e.height)},scroll:function(e){d.debug("Setting scroll on element",e),d.elementScroll!=e&&(d.is.top()&&c.css("bottom","").css("top",-e),d.is.bottom()&&c.css("top","").css("bottom",e))},size:function(){0!==d.cache.element.height&&0!==d.cache.element.width&&(h.style.setProperty("width",d.cache.element.width+"px","important"),h.style.setProperty("height",d.cache.element.height+"px","important"))}},is:{standardScroll:function(){return m[0]==D},top:function(){return c.hasClass(o.top)},bottom:function(){return c.hasClass(o.bottom)},initialPosition:function(){return!d.is.fixed()&&!d.is.bound()},hidden:function(){return!c.is(":visible")},bound:function(){return c.hasClass(o.bound)},fixed:function(){return c.hasClass(o.fixed)}},stick:function(e){var t=e||m.scrollTop(),n=d.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=d.is.bottom()&&f.pushing?f.bottomOffset:f.offset,c=(e={top:t+l,bottom:t+l+r.height},i?0:d.get.elementScroll(e.top)),u=!i;0===a.height||o||(d.is.initialPosition()?e.top>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):(d.debug("Initial element position is fixed"),d.fixTop())):d.is.fixed()?d.is.top()?e.top<=a.top?(d.debug("Fixed element reached top of container"),d.setInitialPosition()):a.height+e.top-c>=s.bottom?(d.debug("Fixed element reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c)):d.is.bottom()&&(e.bottom-a.height<=a.top?(d.debug("Bottom fixed rail has reached top of container"),d.setInitialPosition()):e.bottom>=s.bottom?(d.debug("Bottom fixed rail has reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c))):d.is.bottom()&&(e.top<=a.top?(d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),d.setInitialPosition()):f.pushing?d.is.bound()&&e.bottom<=s.bottom&&(d.debug("Fixing bottom attached element to bottom of browser."),d.fixBottom()):d.is.bound()&&e.top<=s.bottom-a.height&&(d.debug("Fixing bottom attached element to top of browser."),d.fixTop())))},bindTop:function(){d.debug("Binding element to top of parent container"),d.remove.offset(),c.css({left:"",top:"",marginBottom:""}).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top),f.onTop.call(h),f.onUnstick.call(h)},bindBottom:function(){d.debug("Binding element to bottom of parent container"),d.remove.offset(),c.css({left:"",top:""}).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom),f.onBottom.call(h),f.onUnstick.call(h)},setInitialPosition:function(){d.debug("Returning to initial position"),d.unfix(),d.unbind()},fixTop:function(){d.debug("Fixing element to top of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top),f.onStick.call(h)},fixBottom:function(){d.debug("Sticking element to bottom of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom),f.onStick.call(h)},unbind:function(){d.is.bound()&&(d.debug("Removing container bound position on element"),d.remove.offset(),c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))},unfix:function(){d.is.fixed()&&(d.debug("Removing fixed position on element"),d.remove.minimumSize(),d.remove.offset(),c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom),f.onUnstick.call(h))},reset:function(){d.debug("Resetting elements position"),d.unbind(),d.unfix(),d.resetCSS(),d.remove.offset(),d.remove.lastScroll()},resetCSS:function(){c.css({width:"",height:""}),t.css({height:""})},setting:function(e,t){if(S.isPlainObject(e))S.extend(!0,f,e);else{if(t===E)return f[e];f[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,d,e);else{if(t===E)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,0)},display:function(){var e=f.name+":",n=0;x=!1,clearTimeout(d.performance.timer),S.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==E||console.table!==E)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):S.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||T,t=h||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E&&(a=r[t]),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(b)?b.push(n):b!==E?b=[b,n]:n!==E&&(b=n),a}},k?(g===E&&d.initialize(),d.invoke(C)):(g!==E&&g.invoke("destroy"),d.initialize())}),b!==E?b:this},S.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:D,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(P,R,O,M){"use strict";P.isWindow=P.isWindow||function(e){return null!=e&&e===e.window},P.isFunction=P.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},R=void 0!==R&&R.Math==Math?R:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.tab=function(c){var u,d=P.isFunction(this)?P(R):P(this),f=d.selector||"",m=(new Date).getTime(),g=[],D=c,A="string"==typeof D,E=[].slice.call(arguments,1),F=!1;return d.each(function(){var p,a,h,v,b,y,x=P.isPlainObject(c)?P.extend(!0,{},P.fn.tab.settings,c):P.extend({},P.fn.tab.settings),w=x.className,C=x.metadata,t=x.selector,k=x.error,n=x.regExp,e="."+x.namespace,i="module-"+x.namespace,T=P(this),o={},S=!0,r=0,s=this,l=T.data(i);b={initialize:function(){b.debug("Initializing tab menu item",T),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,a),x.auto&&b.set.auto(),b.bind.events(),x.history&&!F&&(b.initializeHistory(),F=!0),null==b.determine.activeTab()&&(b.debug("No active tab detected, setting first tab active",b.get.initialPath()),b.changeTab(b.get.initialPath())),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),l=b,T.data(i,b)},destroy:function(){b.debug("Destroying tabs",T),T.removeData(i).off(e)},bind:{events:function(){P.isWindow(s)||(b.debug("Attaching tab activation events to element",T),T.on("click"+e,b.event.click))}},determineTabs:function(){var e;"parent"===x.context?(0<T.closest(t.ui).length?(e=T.closest(t.ui),b.verbose("Using closest UI element as parent",e)):e=T,p=e.parent(),b.verbose("Determined parent element for creating context",p)):x.context?(p=P(x.context),b.verbose("Using selector for tab context",x.context,p)):p=P("body"),x.childrenOnly?(a=p.children(t.tabs),b.debug("Searching tab context children for tabs",p,a)):(a=p.find(t.tabs),b.debug("Searching tab context for tabs",p,a))},fix:{callbacks:function(){P.isPlainObject(c)&&(c.onTabLoad||c.onTabInit)&&(c.onTabLoad&&(c.onLoad=c.onTabLoad,delete c.onTabLoad,b.error(k.legacyLoad,c.onLoad)),c.onTabInit&&(c.onFirstLoad=c.onTabInit,delete c.onTabInit,b.error(k.legacyInit,c.onFirstLoad)),x=P.extend(!0,{},P.fn.tab.settings,c))}},initializeHistory:function(){if(b.debug("Initializing page state"),P.address===M)return b.error(k.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),!1===x.path)return b.error(k.path),!1;P.address.history(!0).state(x.path)}P.address.bind("change",b.event.history.change)},event:{click:function(e){var t=P(this).data(C.tab);t!==M?(x.history?(b.verbose("Updating page state",e),P.address.value(t)):(b.verbose("Changing tab",e),b.changeTab(t)),e.preventDefault()):b.debug("No tab specified")},history:{change:function(e){var t=e.pathNames.join("/")||b.get.initialPath(),n=x.templates.determineTitle(t)||!1;b.performance.display(),b.debug("History change event",t,e),y=e,t!==M&&b.changeTab(t),n&&P.address.title(n)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==M&&o[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),o[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete o[e]}},escape:{string:function(e){return(e=String(e)).replace(n.escape,"\\$&")}},set:{auto:function(){var e="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",e),P.isPlainObject(x.apiSettings)?x.apiSettings.url=e:x.apiSettings={url:e}},loading:function(e){var t=b.get.tabElement(e);t.hasClass(w.loading)||(b.verbose("Setting loading state for",t),t.addClass(w.loading).siblings(a).removeClass(w.active+" "+w.loading),0<t.length&&x.onRequest.call(t[0],e))},state:function(e){P.address.value(e)}},changeTab:function(d){var f=R.history&&R.history.pushState&&x.ignoreFirstLoad&&S,m=x.auto||P.isPlainObject(x.apiSettings),g=m&&!f?b.utilities.pathToArray(d):b.get.defaultPathArray(d);d=b.utilities.arrayToPath(g),P.each(g,function(e,t){var n,i,o,a,r=g.slice(0,e+1),s=b.utilities.arrayToPath(r),l=b.is.tab(s),c=e+1==g.length,u=b.get.tabElement(s);if(b.verbose("Looking for tab",t),l){if(b.verbose("Tab was found",t),h=s,v=b.utilities.filterArray(g,r),c?a=!0:(i=g.slice(0,e+2),o=b.utilities.arrayToPath(i),(a=!b.is.tab(o))&&b.verbose("Tab parameters found",i)),a&&m)return f?(b.debug("Ignoring remote content on first tab load",s),S=!1,b.cache.add(d,u.html()),b.activate.all(s),x.onFirstLoad.call(u[0],s,v,y),x.onLoad.call(u[0],s,v,y)):(b.activate.navigation(s),b.fetch.content(s,d)),!1;b.debug("Opened local tab",s),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y)}else{if(-1!=d.search("/")||""===d)return b.error(k.missingTab,T,p,s),!1;if(d=b.escape.string(d),s=(n=P("#"+d+', a[name="'+d+'"]')).closest("[data-tab]").data(C.tab),u=b.get.tabElement(s),n&&0<n.length&&s)return b.debug("Anchor link used, opening parent tab",u,n),u.hasClass(w.active)||setTimeout(function(){b.scrollTo(n)},0),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y),!1}})},scrollTo:function(e){var t=!!(e&&0<e.length)&&e.offset().top;!1!==t&&(b.debug("Forcing scroll to an in-page link in a hidden tab",t,e),P(O).scrollTop(t))},update:{content:function(e,t,n){var i=b.get.tabElement(e),o=i[0];n=n!==M?n:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof t?i.empty().append(P(t).clone(!0)):n?(b.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(b.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,n){var e,i,o=b.get.tabElement(t),a={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(o[0],t,v,y),x.onLoad.call(o[0],t,v,y),x.loadOnce?b.cache.add(n,!0):"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&0<o.children().length?setTimeout(function(){var e=o.children().clone(!0);e=e.not("script"),b.cache.add(n,e)},0):b.cache.add(n,o.html())},urlData:{tab:n}},r=o.api("get request")||!1,s=r&&"pending"===r.state();n=n||t,i=b.cache.read(n),x.cache&&i?(b.activate.tab(t),b.debug("Adding cached content",n),x.loadOnce||("once"==x.evaluateScripts?b.update.content(t,i,!1):b.update.content(t,i)),x.onLoad.call(o[0],t,v,y)):s?(b.set.loading(t),b.debug("Content is already loading",n)):P.api!==M?(e=P.extend(!0,{},x.apiSettings,a),b.debug("Retrieving remote content",n,e),b.set.loading(t),o.api(e)):b.error(k.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(a):a.not(t),i=t.hasClass(w.active);b.verbose("Showing tab content for",t),i||(t.addClass(w.active),n.removeClass(w.active+" "+w.loading),0<t.length&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(d):d.not(t),i=t.hasClass(w.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(w.active),n.removeClass(w.active+" "+w.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){d.removeClass(w.active)},tabs:function(){a.removeClass(w.active+" "+w.loading)}},is:{tab:function(e){return e!==M&&0<b.get.tabElement(e).length}},get:{initialPath:function(){return d.eq(0).data(C.tab)||a.eq(0).data(C.tab)},path:function(){return P.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=d.filter("[data-"+C.tab+'^="'+b.escape.string(e)+'/"]').eq(0).data(C.tab)||!1;if(t){if(b.debug("Found default tab",t),r<x.maxDepth)return r++,b.get.defaultPath(t);b.error(k.recursion)}else b.debug("No default tabs found for",e,a);return r=0,e},navElement:function(e){return e=e||h,d.filter("[data-"+C.tab+'="'+b.escape.string(e)+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=a.filter("[data-"+C.tab+'="'+b.escape.string(e)+'"]'),n=a.filter("[data-"+C.tab+'="'+b.escape.string(o)+'"]'),0<t.length?t:n},tab:function(){return h}},determine:{activeTab:function(){var i=null;return a.each(function(e,t){if(P(t).hasClass(w.active)){var n=P(this).data(C.tab);d.filter("[data-"+C.tab+'="'+b.escape.string(n)+'"]').hasClass(w.active)&&(i=n)}}),i}},utilities:{filterArray:function(e,t){return P.grep(e,function(e){return-1==P.inArray(e,t)})},last:function(e){return!!Array.isArray(e)&&e[e.length-1]},pathToArray:function(e){return e===M&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(e){return!!Array.isArray(e)&&e.join("/")}},setting:function(e,t){if(b.debug("Changing setting",e,t),P.isPlainObject(e))P.extend(!0,x,e);else{if(t===M)return x[e];P.isPlainObject(x[e])?P.extend(!0,x[e],t):x[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,b,e);else{if(t===M)return b[e];b[e]=t}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;x.performance&&(n=(t=(new Date).getTime())-(m||t),m=t,g.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:s,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=x.name+":",n=0;m=!1,clearTimeout(b.performance.timer),P.each(g,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==M||console.table!==M)&&0<g.length&&(console.groupCollapsed(e),console.table?console.table(g):P.each(g,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),g=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=s||t,"string"==typeof i&&r!==M&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==M)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==M?a=r[t]:b.error(k.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==M&&(n=a),Array.isArray(u)?u.push(n):u!==M?u=[u,n]:n!==M&&(u=n),a}},A?(l===M&&b.initialize(),b.invoke(D)):(l!==M&&l.invoke("destroy"),b.initialize())}),u!==M?u:this},P.tab=function(){P(R).tab.apply(this,arguments)},P.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(S,e,t,D){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.toast=function(v){var b,e=S(this),y=e.selector||"",x=(new Date).getTime(),w=[],C=v,k="string"==typeof C,T=[].slice.call(arguments,1);return e.each(function(){var s,o=S.isPlainObject(v)?S.extend(!0,{},S.fn.toast.settings,v):S.extend({},S.fn.toast.settings),a=o.className,e=o.selector,l=o.error,t=o.namespace,n="."+t,i=t+"-module",r=S(this),c=S("<div/>",{class:o.className.box}),u=S("<div/>"),d=S("<div/>",{class:o.className.progress+" "+o.class}),f=S("<div/>",{class:"bar"}),m=S("<i/>",{class:"close icon"}),g=o.context?S(o.context):S("body"),p=this,h=r.data(i);s={initialize:function(){s.verbose("Initializing element"),"string"==typeof o.showProgress&&-1!==["top","bottom"].indexOf(o.showProgress)||(o.showProgress=!1),s.has.container()||s.create.container(),s.create.toast(),s.bind.events(),0<o.displayTime&&(s.closeTimer=setTimeout(s.close,o.displayTime+(o.showProgress?300:0))),s.show()},destroy:function(){s.debug("Removing toast",u),u.remove(),u=D,o.onRemove.call(u,p)},show:function(e){e=e||function(){},s.debug("Showing toast"),!1!==o.onShow.call(u,p)?s.animate.show(e):s.debug("onShow callback returned false, cancelling toast animation")},close:function(e){s.closeTimer&&clearTimeout(s.closeTimer),e=e||function(){},s.remove.visible(),s.unbind.events(),s.animate.close(e)},create:{container:function(){s.verbose("Creating container"),g.append('<div class="ui '+o.position+" "+a.container+'"></div>')},toast:function(){var e=S("<div/>").addClass(a.content);s.verbose("Creating toast"),o.closeIcon&&(u.append(m),u.css("cursor","default"));var t="string"==typeof o.showIcon?o.showIcon:o.showIcon&&o.icons[o.class]?o.icons[o.class]:"";if(""!=t){var n=S("<i/>").addClass(t+" "+a.icon);u.addClass(a.icon).append(n)}if(""!==o.title){var i=S("<div/>").addClass(a.title).text(o.title);e.append(i)}e.append(S("<div/>").html(o.message)),u.addClass(o.class+" "+a.toast).append(e),u.css("opacity",o.opacity),(o.compact||u.hasClass("compact"))&&c.addClass("compact"),u.hasClass("toast")&&!u.hasClass("inverted")?d.addClass("inverted"):d.removeClass("inverted"),u=c.append(u),o.showProgress&&0<o.displayTime&&(d.addClass(o.showProgress).append(f),d.hasClass("top")?u.prepend(d):u.append(d),f.css("transition","width "+o.displayTime/1e3+"s linear"),f.width(o.progressUp?"0%":"100%"),setTimeout(function(){void 0!==d&&f.width(o.progressUp?"100%":"0%")},300)),o.newestOnTop?u.prependTo(s.get.container()):u.appendTo(s.get.container())}},bind:{events:function(){s.debug("Binding events to toast"),(o.closeIcon?m:u).on("click"+n,s.event.click)}},unbind:{events:function(){s.debug("Unbinding events to toast"),(o.closeIcon?m:u).off("click"+n)}},animate:{show:function(e){e=S.isFunction(e)?e:function(){},o.transition&&S.fn.transition!==D&&r.transition("is supported")?(s.set.visible(),u.transition({animation:o.transition.showMethod+" in",queue:!1,debug:o.debug,verbose:o.verbose,duration:o.transition.showDuration,onComplete:function(){e.call(u,p),o.onVisible.call(u,p)}})):s.error(l.noTransition)},close:function(e){e=S.isFunction(e)?e:function(){},s.debug("Closing toast"),!1!==o.onHide.call(u,p)?o.transition&&S.fn.transition!==D&&r.transition("is supported")?u.transition({animation:o.transition.hideMethod+" out",queue:!1,duration:o.transition.hideDuration,debug:o.debug,verbose:o.verbose,onBeforeHide:function(e){e=S.isFunction(e)?e:function(){},""!==o.transition.closeEasing?(u.css("opacity",0),u.wrap("<div/>").parent().slideUp(500,o.transition.closeEasing,function(){u.parent().remove(),e.call(u)})):e.call(u)},onComplete:function(){s.destroy(),e.call(u,p),o.onHidden.call(u,p)}}):s.error(l.noTransition):s.debug("onHide callback returned false, cancelling toast animation")}},has:{container:function(){return s.verbose("Determining if there is already a container"),0<g.find(s.helpers.toClass(o.position)+e.container).length}},get:{container:function(){return g.find(s.helpers.toClass(o.position)+e.container)[0]}},set:{visible:function(){u.addClass(a.visible)}},remove:{visible:function(){u.removeClass(a.visible)}},event:{click:function(){o.onClick.call(u,p),s.close()}},helpers:{toClass:function(e){var t=e.split(" "),n="";return t.forEach(function(e){n+="."+e}),n}},setting:function(e,t){if(s.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,o,e);else{if(t===D)return o[e];S.isPlainObject(o[e])?S.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,s,e);else{if(t===D)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;x=!1,clearTimeout(s.performance.timer),S.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==D||console.table!==D)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):S.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||T,t=p||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),Array.isArray(b)?b.push(n):b!==D?b=[b,n]:n!==D&&(b=n),a}},k?(h===D&&s.initialize(),s.invoke(C)):(h!==D&&h.invoke("destroy"),s.initialize())}),b!==D?b:this},S.fn.toast.settings={name:"Toast",namespace:"toast",silent:!1,debug:!1,verbose:!1,performance:!0,context:"body",position:"top right",class:"info",title:"",message:"",displayTime:3e3,showIcon:!0,newestOnTop:!1,showProgress:!1,progressUp:!0,opacity:1,compact:!0,closeIcon:!1,transition:{showMethod:"scale",showDuration:500,hideMethod:"scale",hideDuration:500,closeEasing:"easeOutBounce"},error:{method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},className:{container:"toast-container",box:"toast-box",progress:"ui attached active progress",toast:"ui toast",icon:"icon",visible:"visible",content:"content",title:"header"},icons:{info:"info",success:"checkmark",warning:"warning",error:"times"},selector:{container:".toast-container",box:".toast-box",toast:".ui.toast"},onShow:function(){},onVisible:function(){},onClick:function(){},onHide:function(){},onHidden:function(){},onRemove:function(){}},S.extend(S.easing,{easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?i*(7.5625*t*t)+n:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n}})}(jQuery,window,document),function(w,e,C,k){"use strict";w.isFunction=w.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w.fn.transition=function(){var c,r=w(this),g=r.selector||"",p=(new Date).getTime(),h=[],v=arguments,b=v[0],y=[].slice.call(arguments,1),x="string"==typeof b;return r.each(function(i){var u,s,t,d,n,o,e,a,f,m=w(this),l=this;(f={initialize:function(){u=f.get.settings.apply(l,v),d=u.className,t=u.error,n=u.metadata,a="."+u.namespace,e="module-"+u.namespace,s=m.data(e)||f,o=f.get.animationEndEvent(),!1===(x=x&&f.invoke(b))&&(f.verbose("Converted arguments into settings object",u),u.interval?f.delay(u.animate):f.animate(),f.instantiate())},instantiate:function(){f.verbose("Storing instance of module",f),s=f,m.data(e,s)},destroy:function(){f.verbose("Destroying previous module for",l),m.removeData(e)},refresh:function(){f.verbose("Refreshing display type on next animation"),delete f.displayType},forceRepaint:function(){f.verbose("Forcing element repaint");var e=m.parent(),t=m.next();0===t.length?m.detach().appendTo(e):m.detach().insertBefore(t)},repaint:function(){f.verbose("Repainting element");l.offsetWidth},delay:function(e){var t,n=f.get.animationDirection();n=n||(f.can.transition()?f.get.direction():"static"),e=e!==k?e:u.interval,t="auto"==u.reverse&&n==d.outward||1==u.reverse?(r.length-i)*u.interval:i*u.interval,f.debug("Delaying animation by",t),setTimeout(f.animate,t)},animate:function(e){if(u=e||u,!f.is.supported())return f.error(t.support),!1;if(f.debug("Preparing animation",u.animation),f.is.animating()){if(u.queue)return!u.allowRepeats&&f.has.direction()&&f.is.occurring()&&!0!==f.queuing?f.debug("Animation is currently occurring, preventing queueing same animation",u.animation):f.queue(u.animation),!1;if(!u.allowRepeats&&f.is.occurring())return f.debug("Animation is already occurring, will not execute repeated animation",u.animation),!1;f.debug("New animation started, completing previous early",u.animation),s.complete()}f.can.animate()?f.set.animating(u.animation):f.error(t.noAnimation,u.animation,l)},reset:function(){f.debug("Resetting animation to beginning conditions"),f.remove.animationCallbacks(),f.restore.conditions(),f.remove.animating()},queue:function(e){f.debug("Queueing animation of",e),f.queuing=!0,m.one(o+".queue"+a,function(){f.queuing=!1,f.repaint(),f.animate.apply(this,u)})},complete:function(e){e&&e.target===l&&e.stopPropagation(),f.debug("Animation complete",u.animation),f.remove.completeCallback(),f.remove.failSafe(),f.is.looping()||(f.is.outward()?(f.verbose("Animation is outward, hiding element"),f.restore.conditions(),f.hide()):f.is.inward()?(f.verbose("Animation is outward, showing element"),f.restore.conditions(),f.show()):(f.verbose("Static animation completed"),f.restore.conditions(),u.onComplete.call(l)))},force:{visible:function(){var e=m.attr("style"),t=f.get.userStyle(e),n=f.get.displayType(),i=t+"display: "+n+" !important;",o=m[0].style.display;return!n||"none"===o&&u.skipInlineHidden||m[0].tagName.match(/(script|link|style)/i)?(f.remove.transition(),!1):(f.verbose("Overriding default display to show element",n),m.attr("style",i),!0)},hidden:function(){var e=m.attr("style"),t=m.css("display"),n=e===k||""===e;"none"===t||f.is.hidden()?n&&m.removeAttr("style"):(f.verbose("Overriding default display to hide element"),m.css("display","none"))}},has:{direction:function(e){var n=!1;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),w.each(e,function(e,t){t!==d.inward&&t!==d.outward||(n=!0)})),n},inlineDisplay:function(){var e=m.attr("style")||"";return Array.isArray(e.match(/display.*?;/,""))}},set:{animating:function(e){f.remove.completeCallback(),e=e||u.animation;var t=f.get.animationClass(e);f.save.animation(t),f.force.visible()&&(f.remove.hidden(),f.remove.direction(),f.start.animation(t))},duration:function(e,t){!(t="number"==typeof(t=t||u.duration)?t+"ms":t)&&0!==t||(f.verbose("Setting animation duration",t),m.css({"animation-duration":t}))},direction:function(e){(e=e||f.get.direction())==d.inward?f.set.inward():f.set.outward()},looping:function(){f.debug("Transition set to loop"),m.addClass(d.looping)},hidden:function(){m.addClass(d.transition).addClass(d.hidden)},inward:function(){f.debug("Setting direction to inward"),m.removeClass(d.outward).addClass(d.inward)},outward:function(){f.debug("Setting direction to outward"),m.removeClass(d.inward).addClass(d.outward)},visible:function(){m.addClass(d.transition).addClass(d.visible)}},start:{animation:function(e){e=e||f.get.animationClass(),f.debug("Starting tween",e),m.addClass(e).one(o+".complete"+a,f.complete),u.useFailSafe&&f.add.failSafe(),f.set.duration(u.duration),u.onStart.call(l)}},save:{animation:function(e){f.cache||(f.cache={}),f.cache.animation=e},displayType:function(e){"none"!==e&&m.data(n.displayType,e)},transitionExists:function(e,t){w.fn.transition.exists[e]=t,f.verbose("Saving existence of transition",e,t)}},restore:{conditions:function(){var e=f.get.currentAnimation();e&&(m.removeClass(e),f.verbose("Removing animation class",f.cache)),f.remove.duration()}},add:{failSafe:function(){var e=f.get.duration();f.timer=setTimeout(function(){m.triggerHandler(o)},e+u.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},remove:{animating:function(){m.removeClass(d.animating)},animationCallbacks:function(){f.remove.queueCallback(),f.remove.completeCallback()},queueCallback:function(){m.off(".queue"+a)},completeCallback:function(){m.off(".complete"+a)},display:function(){m.css("display","")},direction:function(){m.removeClass(d.inward).removeClass(d.outward)},duration:function(){m.css("animation-duration","")},failSafe:function(){f.verbose("Removing fail safe timer",f.timer),f.timer&&clearTimeout(f.timer)},hidden:function(){m.removeClass(d.hidden)},visible:function(){m.removeClass(d.visible)},looping:function(){f.debug("Transitions are no longer looping"),f.is.looping()&&(f.reset(),m.removeClass(d.looping))},transition:function(){m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)}},get:{settings:function(e,t,n){return"object"==typeof e?w.extend(!0,{},w.fn.transition.settings,e):"function"==typeof n?w.extend({},w.fn.transition.settings,{animation:e,onComplete:n,duration:t}):"string"==typeof t||"number"==typeof t?w.extend({},w.fn.transition.settings,{animation:e,duration:t}):"object"==typeof t?w.extend({},w.fn.transition.settings,t,{animation:e}):"function"==typeof t?w.extend({},w.fn.transition.settings,{animation:e,onComplete:t}):w.extend({},w.fn.transition.settings,{animation:e})},animationClass:function(e){var t=e||u.animation,n=f.can.transition()&&!f.has.direction()?f.get.direction()+" ":"";return d.animating+" "+d.transition+" "+n+t},currentAnimation:function(){return!(!f.cache||f.cache.animation===k)&&f.cache.animation},currentDirection:function(){return f.is.inward()?d.inward:d.outward},direction:function(){return f.is.hidden()||!f.is.visible()?d.inward:d.outward},animationDirection:function(e){var n;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),w.each(e,function(e,t){t===d.inward?n=d.inward:t===d.outward&&(n=d.outward)})),n||!1},duration:function(e){return!1===(e=e||u.duration)&&(e=m.css("animation-duration")||0),"string"==typeof e?-1<e.indexOf("ms")?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){if(e=e===k||e,u.displayType)return u.displayType;if(e&&m.data(n.displayType)===k){var t=m.css("display");""===t||"none"===t?f.can.transition(!0):f.save.displayType(t)}return m.data(n.displayType)},userStyle:function(e){return(e=e||m.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(e){return w.fn.transition.exists[e]},animationStartEvent:function(){var e,t=C.createElement("div"),n={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in n)if(t.style[e]!==k)return n[e];return!1},animationEndEvent:function(){var e,t=C.createElement("div"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(t.style[e]!==k)return n[e];return!1}},can:{transition:function(e){var t,n,i,o,a,r,s=u.animation,l=f.get.transitionExists(s),c=f.get.displayType(!1);if(l===k||e){if(f.verbose("Determining whether animation exists"),t=m.attr("class"),n=m.prop("tagName"),o=(i=w("<"+n+" />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"),a=i.addClass(d.inward).css("animationName"),c||(c=i.attr("class",t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"),f.verbose("Determining final display state",c),f.save.displayType(c)),i.remove(),o!=a)f.debug("Direction exists for animation",s),r=!0;else{if("none"==o||!o)return void f.debug("No animation defined in css",s);f.debug("Static animation found",s,c),r=!1}f.save.transitionExists(s,r)}return l!==k?l:r},animate:function(){return f.can.transition()!==k}},is:{animating:function(){return m.hasClass(d.animating)},inward:function(){return m.hasClass(d.inward)},outward:function(){return m.hasClass(d.outward)},looping:function(){return m.hasClass(d.looping)},occurring:function(e){return e="."+(e=e||u.animation).replace(" ","."),0<m.filter(e).length},visible:function(){return m.is(":visible")},hidden:function(){return"hidden"===m.css("visibility")},supported:function(){return!1!==o}},hide:function(){f.verbose("Hiding element"),f.is.animating()&&f.reset(),l.blur(),f.remove.display(),f.remove.visible(),w.isFunction(u.onBeforeHide)?u.onBeforeHide.call(l,function(){f.hideNow()}):f.hideNow()},hideNow:function(){f.set.hidden(),f.force.hidden(),u.onHide.call(l),u.onComplete.call(l)},show:function(e){f.verbose("Showing element",e),f.force.visible()&&(f.remove.hidden(),f.set.visible(),u.onShow.call(l),u.onComplete.call(l))},toggle:function(){f.is.visible()?f.hide():f.show()},stop:function(){f.debug("Stopping current animation"),m.triggerHandler(o)},stopAll:function(){f.debug("Stopping all animation"),f.remove.queueCallback(),m.triggerHandler(o)},clear:{queue:function(){f.debug("Clearing animation queue"),f.remove.queueCallback()}},enable:function(){f.verbose("Starting animation"),m.removeClass(d.disabled)},disable:function(){f.debug("Stopping animation"),m.addClass(d.disabled)},setting:function(e,t){if(f.debug("Changing setting",e,t),w.isPlainObject(e))w.extend(!0,u,e);else{if(t===k)return u[e];w.isPlainObject(u[e])?w.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(w.isPlainObject(e))w.extend(!0,f,e);else{if(t===k)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(p||t),p=t,h.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;p=!1,clearTimeout(f.performance.timer),w.each(h,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",g&&(e+=" '"+g+"'"),1<r.length&&(e+=" ("+r.length+")"),(console.group!==k||console.table!==k)&&0<h.length&&(console.groupCollapsed(e),console.table?console.table(h):w.each(h,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||y,t=l||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,w.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(w.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!w.isPlainObject(r[t])||e==o)return r[t]!==k&&(a=r[t]),!1;r=r[t]}})),w.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(c)?c.push(n):c!==k?c=[c,n]:n!==k&&(c=n),a!==k&&a}}).initialize()}),c!==k?c:this},w.fn.transition.exists={},w.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,skipInlineHidden:!1,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(E,F,e,P){"use strict";E.isWindow=E.isWindow||function(e){return null!=e&&e===e.window},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.api=E.fn.api=function(x){var w,e=E.isFunction(this)?E(F):E(this),C=e.selector||"",k=(new Date).getTime(),T=[],S=x,D="string"==typeof S,A=[].slice.call(arguments,1);return e.each(function(){var a,r,n,e,s,l,c=E.isPlainObject(x)?E.extend(!0,{},E.fn.api.settings,x):E.extend({},E.fn.api.settings),t=c.namespace,i=c.metadata,o=c.selector,u=c.error,d=c.className,f="."+t,m="module-"+t,g=E(this),p=g.closest(o.form),h=c.stateContext?E(c.stateContext):g,v=this,b=h[0],y=g.data(m);l={initialize:function(){D||l.bind.events(),l.instantiate()},instantiate:function(){l.verbose("Storing instance of module",l),y=l,g.data(m,y)},destroy:function(){l.verbose("Destroying previous module for",v),g.removeData(m).off(f)},bind:{events:function(){var e=l.get.event();e?(l.verbose("Attaching API events to element",e),g.on(e+f,l.event.trigger)):"now"==c.on&&(l.debug("Querying API endpoint immediately"),l.query())}},decode:{json:function(e){if(e!==P&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var t;if(F.Storage!==P)return t=sessionStorage.getItem(e),l.debug("Using cached response",e,t),t=l.decode.json(t);l.error(u.noStorage)}},write:{cachedResponse:function(e,t){t&&""===t?l.debug("Response empty, not caching",t):F.Storage!==P?(E.isPlainObject(t)&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t),l.verbose("Storing cached response for url",e,t)):l.error(u.noStorage)}},query:function(){if(l.is.disabled())l.debug("Element is disabled API request aborted");else{if(l.is.loading()){if(!c.interruptRequests)return void l.debug("Cancelling request, previous request is still pending");l.debug("Interrupting previous request"),l.abort()}if(c.defaultData&&E.extend(!0,c.urlData,l.get.defaultData()),c.serializeForm&&(c.data=l.add.formData(c.data)),!1===(r=l.get.settings()))return l.cancelled=!0,void l.error(u.beforeSend);if(l.cancelled=!1,(n=l.get.templatedURL())||l.is.mocked()){if((n=l.add.urlData(n))||l.is.mocked()){if(r.url=c.base+n,a=E.extend(!0,{},c,{type:c.method||c.type,data:e,url:c.base+n,beforeSend:c.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),l.debug("Querying URL",a.url),l.verbose("Using AJAX settings",a),"local"===c.cache&&l.read.cachedResponse(n))return l.debug("Response returned from local cache"),l.request=l.create.request(),void l.request.resolveWith(b,[l.read.cachedResponse(n)]);c.throttle?c.throttleFirstRequest||l.timer?(l.debug("Throttling request",c.throttle),clearTimeout(l.timer),l.timer=setTimeout(function(){l.timer&&delete l.timer,l.debug("Sending throttled request",e,a.method),l.send.request()},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request(),l.timer=setTimeout(function(){},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request())}}else l.error(u.missingURL)}},should:{removeError:function(){return!0===c.hideError||"auto"===c.hideError&&!l.is.form()}},is:{disabled:function(){return 0<g.filter(o.disabled).length},expectingJSON:function(){return"json"===c.dataType||"jsonp"===c.dataType},form:function(){return g.is("form")||h.is("form")},mocked:function(){return c.mockResponse||c.mockResponseAsync||c.response||c.responseAsync},input:function(){return g.is("input")},loading:function(){return!!l.request&&"pending"==l.request.state()},abortedRequest:function(e){return e&&e.readyState!==P&&0===e.readyState?(l.verbose("XHR request determined to be aborted"),!0):(l.verbose("XHR request was not aborted"),!1)},validResponse:function(e){return l.is.expectingJSON()&&E.isFunction(c.successTest)?(l.debug("Checking JSON returned success",c.successTest,e),c.successTest(e)?(l.debug("Response passed success test",e),!0):(l.debug("Response failed success test",e),!1)):(l.verbose("Response is not JSON, skipping validation",c.successTest,e),!0)}},was:{cancelled:function(){return l.cancelled||!1},succesful:function(){return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'),l.was.successful()},successful:function(){return l.request&&"resolved"==l.request.state()},failure:function(){return l.request&&"rejected"==l.request.state()},complete:function(){return l.request&&("resolved"==l.request.state()||"rejected"==l.request.state())}},add:{urlData:function(o,a){var e,t;return o&&(e=o.match(c.regExp.required),t=o.match(c.regExp.optional),a=a||c.urlData,e&&(l.debug("Looking for required URL variables",e),E.each(e,function(e,t){var n=-1!==t.indexOf("$")?t.substr(2,t.length-3):t.substr(1,t.length-2),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];if(i===P)return l.error(u.requiredParameter,n,o),o=!1;l.verbose("Found required variable",n,i),i=c.encodeParameters?l.get.urlEncodedValue(i):i,o=o.replace(t,i)})),t&&(l.debug("Looking for optional URL variables",e),E.each(t,function(e,t){var n=-1!==t.indexOf("$")?t.substr(3,t.length-4):t.substr(2,t.length-3),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];o=i!==P?(l.verbose("Optional variable Found",n,i),o.replace(t,i)):(l.verbose("Optional variable not found",n),-1!==o.indexOf("/"+t)?o.replace("/"+t,""):o.replace(t,""))}))),o},formData:function(e){var t=E.fn.serializeObject!==P,n=t?p.serializeObject():p.serialize();return e=e||c.data,e=E.isPlainObject(e)?t?(l.debug("Extending existing data with form data",e,n),E.extend(!0,{},e,n)):(l.error(u.missingSerialize),l.debug("Cant extend data. Replacing data with form data",e,n),n):(l.debug("Adding form data",n),n)}},send:{request:function(){l.set.loading(),l.request=l.create.request(),l.is.mocked()?l.mockedXHR=l.create.mockedXHR():l.xhr=l.create.xhr(),c.onRequest.call(b,l.request,l.xhr)}},event:{trigger:function(e){l.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o,r=!!E.isFunction(c.onResponse)&&(l.is.expectingJSON()&&!c.rawResponse?c.onResponse.call(i,E.extend(!0,{},e)):c.onResponse.call(i,e));a=0<a?a:0,r&&(l.debug("Modified API response in onResponse callback",c.onResponse,r,e),e=r),0<a&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.validResponse(e)?l.request.resolveWith(i,[e,n]):l.request.rejectWith(i,[n,"invalid"])},a)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o;0<(a=0<a?a:0)&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.abortedRequest(e)?l.request.rejectWith(i,[e,"aborted",n]):l.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){l.debug("Successful API Response",e),"local"===c.cache&&n&&(l.write.cachedResponse(n,e),l.debug("Saving server response locally",l.cache)),c.onSuccess.call(b,e,g,t)},complete:function(e,t){var n,i;l.was.successful()?(i=e,n=t):(n=e,i=l.get.responseFromXHR(n)),l.remove.loading(),c.onComplete.call(b,i,g,n)},fail:function(e,t,n){var i=l.get.responseFromXHR(e),o=l.get.errorFromRequest(i,t,n);if("aborted"==t)return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),c.onAbort.call(b,t,g,e),!0;"invalid"==t?l.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&e!==P&&(l.debug("XHR produced a server error",t,n),(e.status<200||300<=e.status)&&n!==P&&""!==n&&l.error(u.statusMessage+n,a.url),c.onError.call(b,o,g,e)),c.errorDuration&&"aborted"!==t&&(l.debug("Adding error state"),l.set.error(),l.should.removeError()&&setTimeout(l.remove.error,c.errorDuration)),l.debug("API Request failed",o,e),c.onFailure.call(b,i,g,e)}}},create:{request:function(){return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)},mockedXHR:function(){var e,t,n,i=c.mockResponse||c.response,o=c.mockResponseAsync||c.responseAsync;return n=E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail),i?(t=E.isFunction(i)?(l.debug("Using specified synchronous callback",i),i.call(b,r)):(l.debug("Using settings specified response",i),i),n.resolveWith(b,[t,!1,{responseText:t}])):E.isFunction(o)&&(e=function(e){l.debug("Async callback returned response",e),e?n.resolveWith(b,[e,!1,{responseText:e}]):n.rejectWith(b,[{responseText:e},!1,!1])},l.debug("Using specified async response callback",o),o.call(b,r,e)),n},xhr:function(){var e;return e=E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail),l.verbose("Created server request",e,a),e}},set:{error:function(){l.verbose("Adding error state to element",h),h.addClass(d.error)},loading:function(){l.verbose("Adding loading state to element",h),h.addClass(d.loading),s=(new Date).getTime()}},remove:{error:function(){l.verbose("Removing error state from element",h),h.removeClass(d.error)},loading:function(){l.verbose("Removing loading state from element",h),h.removeClass(d.loading)}},get:{responseFromXHR:function(e){return!!E.isPlainObject(e)&&(l.is.expectingJSON()?l.decode.json(e.responseText):e.responseText)},errorFromRequest:function(e,t,n){return E.isPlainObject(e)&&e.error!==P?e.error:c.error[t]!==P?c.error[t]:n},request:function(){return l.request||!1},xhr:function(){return l.xhr||!1},settings:function(){var e;return(e=c.beforeSend.call(b,c))&&(e.success!==P&&(l.debug("Legacy success callback detected",e),l.error(u.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==P&&(l.debug("Legacy failure callback detected",e),l.error(u.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==P&&(l.debug("Legacy complete callback detected",e),l.error(u.legacyParameters,e.complete),e.onComplete=e.complete)),e===P&&l.error(u.noReturnedValue),!1===e?e:e!==P?E.extend(!0,{},e):E.extend(!0,{},c)},urlEncodedValue:function(e){var t=F.decodeURIComponent(e),n=F.encodeURIComponent(e);return t!==e?(l.debug("URL value is already encoded, avoiding double encoding",e),e):(l.verbose("Encoding value using encodeURIComponent",e,n),n)},defaultData:function(){var e={};return E.isWindow(v)||(l.is.input()?e.value=g.val():l.is.form()||(e.text=g.text())),e},event:function(){return E.isWindow(v)||"now"==c.on?(l.debug("API called without element, no events attached"),!1):"auto"==c.on?g.is("input")?v.oninput!==P?"input":v.onpropertychange!==P?"propertychange":"keyup":g.is("form")?"submit":"click":c.on},templatedURL:function(e){if(e=e||g.data(i.action)||c.action||!1,n=g.data(i.url)||c.url||!1)return l.debug("Using specified url",n),n;if(e){if(l.debug("Looking up url for action",e,c.api),c.api[e]===P&&!l.is.mocked())return void l.error(u.missingAction,c.action,c.api);n=c.api[e]}else l.is.form()&&(n=g.attr("action")||h.attr("action")||!1,l.debug("No url or action specified, defaulting to form action",n));return n}},abort:function(){var e=l.get.xhr();e&&"resolved"!==e.state()&&(l.debug("Cancelling API request"),e.abort())},reset:function(){l.remove.error(),l.remove.loading()},setting:function(e,t){if(l.debug("Changing setting",e,t),E.isPlainObject(e))E.extend(!0,c,e);else{if(t===P)return c[e];E.isPlainObject(c[e])?E.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,l,e);else{if(t===P)return l[e];l[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?l.performance.log(arguments):(l.debug=Function.prototype.bind.call(console.info,console,c.name+":"),l.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?l.performance.log(arguments):(l.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),l.verbose.apply(console,arguments)))},error:function(){c.silent||(l.error=Function.prototype.bind.call(console.error,console,c.name+":"),l.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(l.performance.timer),l.performance.timer=setTimeout(l.performance.display,500)},display:function(){var e=c.name+":",n=0;k=!1,clearTimeout(l.performance.timer),E.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",C&&(e+=" '"+C+"'"),(console.group!==P||console.table!==P)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):E.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||A,t=v||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:l.error(u.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(w)?w.push(n):w!==P?w=[w,n]:n!==P&&(w=n),a}},D?(y===P&&l.initialize(),l.invoke(S)):(y!==P&&y.invoke("destroy"),l.initialize())}),w!==P?w:this},E.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,rawResponse:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(C,e,t,k){"use strict";C.isFunction=C.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.state=function(m){var g,p=C(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,w=[].slice.call(arguments,1);return p.each(function(){var s,o=C.isPlainObject(m)?C.extend(!0,{},C.fn.state.settings,m):C.extend({},C.fn.state.settings),l=o.error,n=o.metadata,t=o.className,e=o.namespace,i=o.states,a=o.text,r="."+e,c=e+"-module",u=C(this),d=this,f=u.data(c);s={initialize:function(){s.verbose("Initializing module"),o.automatic&&s.add.defaults(),o.context&&""!==h?C(o.context).on(h,"mouseenter"+r,s.change.text).on(h,"mouseleave"+r,s.reset.text).on(h,"click"+r,s.toggle.state):u.on("mouseenter"+r,s.change.text).on("mouseleave"+r,s.reset.text).on("click"+r,s.toggle.state),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),f=s,u.data(c,s)},destroy:function(){s.verbose("Destroying previous module",f),u.off(r).removeData(c)},refresh:function(){s.verbose("Refreshing selector cache"),u=C(d)},add:{defaults:function(){var n=m&&C.isPlainObject(m.states)?m.states:{};C.each(o.defaults,function(e,t){s.is[e]!==k&&s.is[e]()&&(s.verbose("Adding default states",e,d),C.extend(o.states,t,n))})}},is:{active:function(){return u.hasClass(t.active)},loading:function(){return u.hasClass(t.loading)},inactive:function(){return!u.hasClass(t.active)},state:function(e){return t[e]!==k&&u.hasClass(t[e])},enabled:function(){return!u.is(o.filter.active)},disabled:function(){return u.is(o.filter.active)},textEnabled:function(){return!u.is(o.filter.text)},button:function(){return u.is(".button:not(a, .submit)")},input:function(){return u.is("input")},progress:function(){return u.is(".ui.progress")}},allow:function(e){s.debug("Now allowing state",e),i[e]=!0},disallow:function(e){s.debug("No longer allowing",e),i[e]=!1},allows:function(e){return i[e]||!1},enable:function(){u.removeClass(t.disabled)},disable:function(){u.addClass(t.disabled)},setState:function(e){s.allows(e)&&u.addClass(t[e])},removeState:function(e){s.allows(e)&&u.removeClass(t[e])},toggle:{state:function(){var e;if(s.allows("active")&&s.is.enabled()){if(s.refresh(),C.fn.api!==k)if(e=u.api("get request"),u.api("was cancelled"))s.debug("API Request cancelled by beforesend"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1};else if(e)return void s.listenTo(e);s.change.state()}}},listenTo:function(e){s.debug("API request detected, waiting for state signal",e),e&&(a.loading&&s.update.text(a.loading),C.when(e).then(function(){"resolved"==e.state()?(s.debug("API request succeeded"),o.activateTest=function(){return!0},o.deactivateTest=function(){return!0}):(s.debug("API request failed"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1}),s.change.state()}))},change:{state:function(){s.debug("Determining state change direction"),s.is.inactive()?s.activate():s.deactivate(),o.sync&&s.sync(),o.onChange.call(d)},text:function(){s.is.textEnabled()&&(s.is.disabled()?(s.verbose("Changing text to disabled text",a.hover),s.update.text(a.disabled)):s.is.active()?a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.deactivate&&(s.verbose("Changing text to deactivating text",a.deactivate),s.update.text(a.deactivate)):a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.activate&&(s.verbose("Changing text to activating text",a.activate),s.update.text(a.activate)))}},activate:function(){o.activateTest.call(d)&&(s.debug("Setting state to active"),u.addClass(t.active),s.update.text(a.active),o.onActivate.call(d))},deactivate:function(){o.deactivateTest.call(d)&&(s.debug("Setting state to inactive"),u.removeClass(t.active),s.update.text(a.inactive),o.onDeactivate.call(d))},sync:function(){s.verbose("Syncing other buttons to current state"),s.is.active()?p.not(u).state("activate"):p.not(u).state("deactivate")},get:{text:function(){return o.selector.text?u.find(o.selector.text).text():u.html()},textFor:function(e){return a[e]||!1}},flash:{text:function(e,t,n){var i=s.get.text();s.debug("Flashing text message",e,t),e=e||o.text.flash,t=t||o.flashDuration,n=n||function(){},s.update.text(e),setTimeout(function(){s.update.text(i),n.call(d)},t)}},reset:{text:function(){var e=a.active||u.data(n.storedText),t=a.inactive||u.data(n.storedText);s.is.textEnabled()&&(s.is.active()&&e?(s.verbose("Resetting active text",e),s.update.text(e)):t&&(s.verbose("Resetting inactive text",e),s.update.text(t)))}},update:{text:function(e){var t=s.get.text();e&&e!==t?(s.debug("Updating text",e),o.selector.text?u.data(n.storedText,e).find(o.selector.text).text(e):u.data(n.storedText,e).html(e)):s.debug("Text is already set, ignoring update",e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,o,e);else{if(t===k)return o[e];C.isPlainObject(o[e])?C.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,s,e);else{if(t===k)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;v=!1,clearTimeout(s.performance.timer),C.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),(console.group!==k||console.table!==k)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):C.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=f;return e=e||w,t=d||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==k?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(g)?g.push(n):g!==k?g=[g,n]:n!==k&&(g=n),a}},x?(f===k&&s.initialize(),s.invoke(y)):(f!==k&&f.invoke("destroy"),s.initialize())}),g!==k?g:this},C.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(E,F,P,R){"use strict";E.isFunction=E.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.visibility=function(b){var y,e=E(this),x=e.selector||"",w=(new Date).getTime(),C=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.length,A=0;return e.each(function(){var e,t,n,s,o=E.isPlainObject(b)?E.extend(!0,{},E.fn.visibility.settings,b):E.extend({},E.fn.visibility.settings),i=o.className,a=o.namespace,l=o.error,r=o.metadata,c="."+a,u="module-"+a,d=E(F),f=E(this),m=E(o.context),g=f.data(u),p=F.requestAnimationFrame||F.mozRequestAnimationFrame||F.webkitRequestAnimationFrame||F.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this,v=!1;s={initialize:function(){s.debug("Initializing",o),s.setup.cache(),s.should.trackChanges()&&("image"==o.type&&s.setup.image(),"fixed"==o.type&&s.setup.fixed(),o.observeChanges&&s.observeChanges(),s.bind.events()),s.save.position(),s.is.visible()||s.error(l.visible,f),o.initialCheck&&s.checkVisibility(),s.instantiate()},instantiate:function(){s.debug("Storing instance",s),f.data(u,s),g=s},destroy:function(){s.verbose("Destroying previous module"),n&&n.disconnect(),t&&t.disconnect(),d.off("load"+c,s.event.load).off("resize"+c,s.event.resize),m.off("scroll"+c,s.event.scroll).off("scrollchange"+c,s.event.scrollchange),"fixed"==o.type&&(s.resetFixed(),s.remove.placeholder()),f.off(c).removeData(u)},observeChanges:function(){"MutationObserver"in F&&(t=new MutationObserver(s.event.contextChanged),n=new MutationObserver(s.event.changed),t.observe(P,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),s.debug("Setting up mutation observer",n))},bind:{events:function(){s.verbose("Binding visibility events to scroll and resize"),o.refreshOnLoad&&d.on("load"+c,s.event.load),d.on("resize"+c,s.event.resize),m.off("scroll"+c).on("scroll"+c,s.event.scroll).on("scrollchange"+c,s.event.scrollchange)}},event:{changed:function(e){s.verbose("DOM tree modified, updating visibility calculations"),s.timer=setTimeout(function(){s.verbose("DOM tree modified, updating sticky menu"),s.refresh()},100)},contextChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<E(e).find(h).length)&&(s.debug("Element removed from DOM, tearing down events"),s.destroy())})})},resize:function(){s.debug("Window resized"),o.refreshOnResize&&p(s.refresh)},load:function(){s.debug("Page finished loading"),p(s.refresh)},scroll:function(){o.throttle?(clearTimeout(s.timer),s.timer=setTimeout(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])},o.throttle)):p(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])})},scrollchange:function(e,t){s.checkVisibility(t)}},precache:function(e,t){e instanceof Array||(e=[e]);for(var n=e.length,i=0,o=[],a=P.createElement("img"),r=function(){++i>=e.length&&E.isFunction(t)&&t()};n--;)(a=P.createElement("img")).onload=r,a.onerror=r,a.src=e[n],o.push(a)},enableCallbacks:function(){s.debug("Allowing callbacks to occur"),v=!1},disableCallbacks:function(){s.debug("Disabling all callbacks temporarily"),v=!0},should:{trackChanges:function(){return T?(s.debug("One time query, no need to bind events"),!1):(s.debug("Callbacks being attached"),!0)}},setup:{cache:function(){s.cache={occurred:{},screen:{},element:{}}},image:function(){var e=f.data(r.src);e&&(s.verbose("Lazy loading image",e),o.once=!0,o.observeChanges=!1,o.onOnScreen=function(){s.debug("Image on screen",h),s.precache(e,function(){s.set.image(e,function(){++A==D&&o.onAllLoaded.call(this),o.onLoad.call(this)})})})},fixed:function(){s.debug("Setting up fixed"),o.once=!1,o.observeChanges=!1,o.initialCheck=!0,o.refreshOnLoad=!0,b.transition||(o.transition=!1),s.create.placeholder(),s.debug("Added placeholder",e),o.onTopPassed=function(){s.debug("Element passed, adding fixed position",f),s.show.placeholder(),s.set.fixed(),o.transition&&E.fn.transition!==R&&f.transition(o.transition,o.duration)},o.onTopPassedReverse=function(){s.debug("Element returned to position, removing fixed",f),s.hide.placeholder(),s.remove.fixed()}}},create:{placeholder:function(){s.verbose("Creating fixed position placeholder"),e=f.clone(!1).css("display","none").addClass(i.placeholder).insertAfter(f)}},show:{placeholder:function(){s.verbose("Showing placeholder"),e.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){s.verbose("Hiding placeholder"),e.css("display","none").css("visibility","")}},set:{fixed:function(){s.verbose("Setting element to fixed position"),f.addClass(i.fixed).css({position:"fixed",top:o.offset+"px",left:"auto",zIndex:o.zIndex}),o.onFixed.call(h)},image:function(e,t){if(f.attr("src",e),o.transition)if(E.fn.transition!==R){if(f.hasClass(i.visible))return void s.debug("Transition already occurred on this image, skipping animation");f.transition(o.transition,o.duration,t)}else f.fadeIn(o.duration,t);else f.show()}},is:{onScreen:function(){return s.get.elementCalculations().onScreen},offScreen:function(){return s.get.elementCalculations().offScreen},visible:function(){return!(!s.cache||!s.cache.element)&&!(0===s.cache.element.width&&0===s.cache.element.offset.top)},verticallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){s.debug("Refreshing constants (width/height)"),"fixed"==o.type&&s.resetFixed(),s.reset(),s.save.position(),o.checkOnRefresh&&s.checkVisibility(),o.onRefresh.call(h)},resetFixed:function(){s.remove.fixed(),s.remove.occurred()},reset:function(){s.verbose("Resetting all cached values"),E.isPlainObject(s.cache)&&(s.cache.screen={},s.cache.element={})},checkVisibility:function(e){s.verbose("Checking visibility of element",s.cache.element),!v&&s.is.visible()&&(s.save.scroll(e),s.save.calculations(),s.passed(),s.passingReverse(),s.topVisibleReverse(),s.bottomVisibleReverse(),s.topPassedReverse(),s.bottomPassedReverse(),s.onScreen(),s.offScreen(),s.passing(),s.topVisible(),s.bottomVisible(),s.topPassed(),s.bottomPassed(),o.onUpdate&&o.onUpdate.call(h,s.get.elementCalculations()))},passed:function(e,t){var n=s.get.elementCalculations();if(e&&t)o.onPassed[e]=t;else{if(e!==R)return s.get.pixelsPassed(e)>n.pixelsPassed;n.passing&&E.each(o.onPassed,function(e,t){n.bottomVisible||n.pixelsPassed>s.get.pixelsPassed(e)?s.execute(t,e):o.once||s.remove.occurred(t)})}},onScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOnScreen;if(e&&(s.debug("Adding callback for onScreen",e),o.onOnScreen=e),t.onScreen?s.execute(n,"onScreen"):o.once||s.remove.occurred("onScreen"),e!==R)return t.onOnScreen},offScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOffScreen;if(e&&(s.debug("Adding callback for offScreen",e),o.onOffScreen=e),t.offScreen?s.execute(n,"offScreen"):o.once||s.remove.occurred("offScreen"),e!==R)return t.onOffScreen},passing:function(e){var t=s.get.elementCalculations(),n=e||o.onPassing;if(e&&(s.debug("Adding callback for passing",e),o.onPassing=e),t.passing?s.execute(n,"passing"):o.once||s.remove.occurred("passing"),e!==R)return t.passing},topVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisible,i="topVisible";if(e&&(s.debug("Adding callback for top visible",e),o.onTopVisible=e),t.topVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.topVisible},bottomVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisible,i="bottomVisible";if(e&&(s.debug("Adding callback for bottom visible",e),o.onBottomVisible=e),t.bottomVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.bottomVisible},topPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassed;if(e&&(s.debug("Adding callback for top passed",e),o.onTopPassed=e),t.topPassed?s.execute(n,"topPassed"):o.once||s.remove.occurred("topPassed"),e===R)return t.topPassed},bottomPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassed,i="bottomPassed";if(e&&(s.debug("Adding callback for bottom passed",e),o.onBottomPassed=e),t.bottomPassed?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.bottomPassed},passingReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onPassingReverse,i="passingReverse";if(e&&(s.debug("Adding callback for passing reverse",e),o.onPassingReverse=e),t.passing?o.once||s.remove.occurred(i):s.get.occurred("passing")&&s.execute(n,i),e!==R)return!t.passing},topVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisibleReverse,i="topVisibleReverse";if(e&&(s.debug("Adding callback for top visible reverse",e),o.onTopVisibleReverse=e),t.topVisible?o.once||s.remove.occurred(i):s.get.occurred("topVisible")&&s.execute(n,i),e===R)return!t.topVisible},bottomVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(s.debug("Adding callback for bottom visible reverse",e),o.onBottomVisibleReverse=e),t.bottomVisible?o.once||s.remove.occurred(i):s.get.occurred("bottomVisible")&&s.execute(n,i),e===R)return!t.bottomVisible},topPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassedReverse,i="topPassedReverse";if(e&&(s.debug("Adding callback for top passed reverse",e),o.onTopPassedReverse=e),t.topPassed?o.once||s.remove.occurred(i):s.get.occurred("topPassed")&&s.execute(n,i),e===R)return!t.onTopPassed},bottomPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(s.debug("Adding callback for bottom passed reverse",e),o.onBottomPassedReverse=e),t.bottomPassed?o.once||s.remove.occurred(i):s.get.occurred("bottomPassed")&&s.execute(n,i),e===R)return!t.bottomPassed},execute:function(e,t){var n=s.get.elementCalculations(),i=s.get.screenCalculations();(e=e||!1)&&(o.continuous?(s.debug("Callback being called continuously",t,n),e.call(h,n,i)):s.get.occurred(t)||(s.debug("Conditions met",t,n),e.call(h,n,i))),s.save.occurred(t)},remove:{fixed:function(){s.debug("Removing fixed position"),f.removeClass(i.fixed).css({position:"",top:"",left:"",zIndex:""}),o.onUnfixed.call(h)},placeholder:function(){s.debug("Removing placeholder content"),e&&e.remove()},occurred:function(e){if(e){var t=s.cache.occurred;t[e]!==R&&!0===t[e]&&(s.debug("Callback can now be called again",e),s.cache.occurred[e]=!1)}else s.cache.occurred={}}},save:{calculations:function(){s.verbose("Saving all calculations necessary to determine positioning"),s.save.direction(),s.save.screenCalculations(),s.save.elementCalculations()},occurred:function(e){e&&(s.cache.occurred[e]!==R&&!0===s.cache.occurred[e]||(s.verbose("Saving callback occurred",e),s.cache.occurred[e]=!0))},scroll:function(e){e=e+o.offset||m.scrollTop()+o.offset,s.cache.scroll=e},direction:function(){var e,t=s.get.scroll(),n=s.get.lastScroll();return e=n<t&&n?"down":t<n&&n?"up":"static",s.cache.direction=e,s.cache.direction},elementPosition:function(){var e=s.cache.element,t=s.get.screenSize();return s.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=f.offset(),e.width=f.outerWidth(),e.height=f.outerHeight(),s.is.verticallyScrollableContext()&&(e.offset.top+=m.scrollTop()-m.offset().top),s.is.horizontallyScrollableContext()&&(e.offset.left+=m.scrollLeft-m.offset().left),s.cache.element=e},elementCalculations:function(){var e=s.get.screenCalculations(),t=s.get.elementPosition();return o.includeMargin?(t.margin={},t.margin.top=parseInt(f.css("margin-top"),10),t.margin.bottom=parseInt(f.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.topPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.bottomPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=(t.topVisible||t.passing)&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),s.cache.element=t,s.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=s.get.scroll();return s.save.direction(),s.cache.screen.top=e,s.cache.screen.bottom=e+s.cache.screen.height,s.cache.screen},screenSize:function(){s.verbose("Saving window position"),s.cache.screen={height:m.height()}},position:function(){s.save.screenSize(),s.save.elementPosition()}},get:{pixelsPassed:function(e){var t=s.get.elementCalculations();return-1<e.search("%")?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return s.cache.occurred!==R&&s.cache.occurred[e]||!1},direction:function(){return s.cache.direction===R&&s.save.direction(),s.cache.direction},elementPosition:function(){return s.cache.element===R&&s.save.elementPosition(),s.cache.element},elementCalculations:function(){return s.cache.element===R&&s.save.elementCalculations(),s.cache.element},screenCalculations:function(){return s.cache.screen===R&&s.save.screenCalculations(),s.cache.screen},screenSize:function(){return s.cache.screen===R&&s.save.screenSize(),s.cache.screen},scroll:function(){return s.cache.scroll===R&&s.save.scroll(),s.cache.scroll},lastScroll:function(){return s.cache.screen===R?(s.debug("First scroll event, no last scroll could be found"),!1):s.cache.screen.top}},setting:function(e,t){if(E.isPlainObject(e))E.extend(!0,o,e);else{if(t===R)return o[e];o[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,s,e);else{if(t===R)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(w||t),w=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;w=!1,clearTimeout(s.performance.timer),E.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",x&&(e+=" '"+x+"'"),(console.group!==R||console.table!==R)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):E.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||S,t=h||t,"string"==typeof i&&r!==R&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==R)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==R?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==R&&(n=a),Array.isArray(y)?y.push(n):y!==R?y=[y,n]:n!==R&&(y=n),a}},T?(g===R&&s.initialize(),g.save.scroll(),g.save.calculations(),s.invoke(k)):(g!==R&&g.invoke("destroy"),s.initialize())}),y!==R?y:this},E.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:F,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"constraint",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
},{}],11:[function(require,module,exports){
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

},{"../semantic/dist/semantic.min.js":10,"./modules/main/app":12,"backbone":5,"jquery":8,"underscore":9}],12:[function(require,module,exports){
var Backbone = require('backbone');
var Marionette = require ('backbone.marionette');
var UserModel = require('./models/user');
var LayoutView = require('./views/layout/layout');
var resultStorage = require('./collections/results');

module.exports = Marionette.Application.extend({
    region: '#app',

    onBeforeStart(app, options) {
        // In the future we will set the style to choose here
        this.user_model = new UserModel();

        resultStorage.fetch();
    },

    onStart() {
      this.showView(new LayoutView({model: this.user_model}));
      Backbone.history.start();
    }
  });

},{"./collections/results":14,"./models/user":17,"./views/layout/layout":21,"backbone":5,"backbone.marionette":3}],13:[function(require,module,exports){
var Backbone = require('backbone');
var questionModel = require('../models/question');

module.exports = Backbone.Collection.extend({
    model: questionModel
});
},{"../models/question":15,"backbone":5}],14:[function(require,module,exports){
var Backbone = require('backbone');
var resultModel = require('../models/result');

var localStorage = require('backbone.localstorage');
var LocalStorage = localStorage.LocalStorage;

const ResultStorage = Backbone.Collection.extend({
    model: resultModel,
    localStorage: new LocalStorage('ResultStorage')
});

var resultStorage = new ResultStorage();
resultStorage.fetch();

module.exports = resultStorage;

},{"../models/result":16,"backbone":5,"backbone.localstorage":2}],15:[function(require,module,exports){
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
});
},{"backbone":5}],16:[function(require,module,exports){
var Backbone = require('backbone');
var localStorage = require('backbone.localstorage');
var LocalStorage = localStorage.LocalStorage;

module.exports = Backbone.Model.extend({
});
},{"backbone":5,"backbone.localstorage":2}],17:[function(require,module,exports){
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: "Hellos",
	}
});
},{"backbone":5}],18:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"topbox\">\n    <h1 class=\"vcentre\">Awesome! <br> You're all done</h1>\n\n</div>\n<button class=\"circular primary ui icon right floated button js-home\">\n    <i class=\"angle right icon\"></i>\n</button>\n";
},"useData":true});

},{"hbsfy/runtime":7}],19:[function(require,module,exports){
var Marionette = require('backbone.marionette');
var DoneTemplate = require('./done.hbs');
var resultStorage = require('../../collections/results');
var _= require('underscore');

module.exports = Marionette.View.extend({

    template: DoneTemplate,

    events: {
        'click .js-question': 'take_questionnaire',
        'click .js-results': 'show_results'
    },

    take_questionnaire: function(){
        this.triggerMethod('questionnaire:start', this);
    },
    show_results: function(){
        this.triggerMethod('results:show', this);
    },


});
},{"../../collections/results":14,"./done.hbs":18,"backbone.marionette":3,"underscore":9}],20:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"main-container\"></div>\n";
},"useData":true});

},{"hbsfy/runtime":7}],21:[function(require,module,exports){
var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');
var StartView = require('../done/done');
var QuestionView = require('../questions/questions');
var ResultsView = require('../results/results');
var SplashView = require('../splash/splash');
var ThermoView = require('../thermo/thermo');
var DoneView = require('../done/done');

var questionCollection = require('../../collections/questions')
var Datas = require('../../../../../datas.json');

module.exports = Marionette.View.extend({
    template: LayoutTemplate,
    childViewEventPrefix: 'childview',

    regions: {
        mainContainer: '.main-container'
    },

    events: {
        'click .js-help': 'show_help',
        'click .js-home': 'onRender',
    },

    show_help(){
        console.log('Hello', this.$('.ui.basic.modal'))
        this.$('.ui.basic.modal').modal('show');
    },

    onChildviewDistressquestionsStart(childView) {
        this.showChildView('mainContainer', new QuestionView({collection: new questionCollection(Datas.questions)}));
    },
    onChildviewDistressthermometerStart(childView) {
        this.showChildView('mainContainer', new ThermoView());
    },

    onChildviewResultsShow(childView) {
        this.showChildView('mainContainer', new ResultsView());
    },

    onChildviewStartShow(childView) {
        this.showChildView('mainContainer', new StartView());
    },
    onChildviewQuestionnaireFinish(childView){
        this.showChildView('mainContainer', new DoneView());
    },

    onRender() {
        this.showChildView('mainContainer', new SplashView());
        //this.showChildView('mainContainer', new QuestionView({collection: new questionCollection(Datas.questions)}));
    }
});
},{"../../../../../datas.json":1,"../../collections/questions":13,"../done/done":19,"../questions/questions":24,"../results/results":26,"../splash/splash":28,"../thermo/thermo":30,"./layout.hbs":20,"backbone.marionette":3}],22:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<br>\n<div class=\"item\">\n    <div class=\"ui form\">\n          <div class=\"field\">\n\n        <label>"
    + container.escapeExpression(((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"input","hash":{},"data":data}) : helper)))
    + "</label>\n        <textarea></textarea>\n        </div>\n\n    </div>\n</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"item\">\n    <div class=\"right floated content\">\n        <div class=\"ui toggle checkbox\">\n            <input type=\"checkbox\" name=\"newsletter\">\n            <label></label>\n        </div>\n    </div>\n    <div class=\"content\">\n        "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.input : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":7}],23:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"topbox\">\n    <h2>Problem List</h2>\n    <div>\n        Over the past week, including today, have any of the following been a problem for you?    </div>\n    </div>\n\n</div>\n\n<div class=\"bottombox \">\n    <h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\n        <div class=\"ui tiny progress\">\n            <div class=\"bar\"></div>\n        </div>\n    </h3>\n\n    <div class=\"js-items\"></div>\n\n</div>\n\n\n<button class=\"circular primary ui icon right floated button js-next\">\n    <i class=\"angle right icon\"></i>\n</button>\n";
},"useData":true});

},{"hbsfy/runtime":7}],24:[function(require,module,exports){
var Marionette = require('backbone.marionette');
var QuestionsTemplate = require('./questions.hbs');
var QuestionTemplate = require('./question.hbs');
var _ = require('underscore');
var questionCollection = require('../../collections/questions')

var resultStorage = require('../../collections/results');
var resultModel = require('../../models/result');

const QuestionView = Marionette.View.extend({
    template: QuestionTemplate,
    className: 'item',

    events: {
        'click .js-save': 'save_answer'
    },

    save_answer: function (event) {
        this.$el.find('.button').removeClass('primary');
        this.$(event.target).addClass('primary');

        if (this.$(event.target).hasClass('js-yes')) {
            this.model.set('answer', true);
        } else {
            this.model.set('answer', false);
        }
    }
});


const QuestionGroup = Marionette.CollectionView.extend({

    template: _.template('<div id="question-items" class="ui middle aligned list"></div>'),
    childView: QuestionView,
    childViewContainer: '#question-items',

    collectionEvents: {
        'change': 'update_progress'
    },


    update_progress: function () {
        null_questions = this.collection.where({ answer: null }).length;
        open_questions = this.collection.length - null_questions
        this.$el.find('.progress').progress('set progress', open_questions)

        if (null_questions === 0) {
            window.jQuery('body').toast({
                class: 'success',
                title: 'Brilliant',
                message: 'You have finished the questionnaire',
                showProgress: 'bottom'
            });

            result = new resultModel({
                data: this.collection.toJSON(),
                time: new Date().toISOString()
            });

            resultStorage.add(result);
            result.save();

            this.triggerMethod('questionnaire:finish', this);
        }
    }
});

const QuestionWrapper = Marionette.View.extend({

    template: QuestionsTemplate,
    regions: {
        qg: '.js-items'
    },

    onRender: function () {
        this.showChildView('qg', new QuestionGroup({ collection: new questionCollection(this.model.get('items')) }));
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
        this.counter += 1
        if (this.collection.length === this.counter) {
            this.triggerMethod('questionnaire:finish', this);
        }
        this.render()
    },

    initialize: function (options) {
        this.collection = options.collection;
        this.counter = 0;
    },

    onRender: function () {
        this.showChildView('qg', new QuestionWrapper({ model: this.collection.at(this.counter) }));
        this.$el.find('.progress').progress({
            total: this.collection.length,
            value: this.counter
        });


    }

});

},{"../../collections/questions":13,"../../collections/results":14,"../../models/result":16,"./question.hbs":22,"./questions.hbs":23,"backbone.marionette":3,"underscore":9}],25:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n\n<h1 class=\"ui header\">Your results</h1>\n<div class=\"ui segment\">\n\n    <div class=\"ui statistics\">\n\n        <div class=\"statistic\">\n            <div class=\"value\">\n                <i class=\"question  icon\"></i> "
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"label\">\n                Questionnaires\n            </div>\n        </div>\n\n        <div class=\"statistic\">\n            <div class=\"value\">\n                <i class=\"check  icon\"></i> "
    + alias4(((helper = (helper = helpers.yes || (depth0 != null ? depth0.yes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yes","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"label\">\n                Yes Answers\n            </div>\n        </div>\n\n        <div class=\"statistic\">\n            <div class=\"value\">\n                <i class=\"times  icon\"></i> "
    + alias4(((helper = (helper = helpers.no || (depth0 != null ? depth0.no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"no","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"label\">\n                No Answers\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"ui multiple progress\" data-value=\""
    + alias4(((helper = (helper = helpers.yes || (depth0 != null ? depth0.yes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yes","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.no || (depth0 != null ? depth0.no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"no","hash":{},"data":data}) : helper)))
    + "\" data-total='"
    + alias4(((helper = (helper = helpers.total_yn || (depth0 != null ? depth0.total_yn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_yn","hash":{},"data":data}) : helper)))
    + "'>\n  <div class=\"green bar\"></div>\n  <div class=\"yellow bar\"></div>\n</div>\n\n\n<div>\n    <button class=\"ui labeled icon button js-home\">\n        <i class=\"arrow left icon\"></i>\n        Back\n    </button>\n</div>";
},"useData":true});

},{"hbsfy/runtime":7}],26:[function(require,module,exports){
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
},{"../../collections/results":14,"./results.hbs":25,"backbone.marionette":3}],27:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "        <input id=\"anPageName\" name=\"page\" type=\"hidden\" value=\"a10000nccnsplash\"/>\n        <div class=\"a10000nccnsplash\">\n            <div style=\"width: 375px; height: 100%; position:relative; margin:auto;\">\n                <img src=\"./img/nccn/10000---nccn---splash-rectangle-6.png\" class=\"rectangle6\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\"/>\n                <img src=\"./img/nccn/10000---nccn---splash-rectangle@2x.png\" class=\"rectangle getstarted-js\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\"/>\n                <div class=\"getstarted getstarted-js\">\n                    Get Started\n                </div>\n                <div class=\"nccn\">\n                    NCCN\n                </div>\n                <div class=\"distressthermometer\">\n                    Distress Thermometer\n                </div>\n            </div>\n        </div>\n";
},"useData":true});

},{"hbsfy/runtime":7}],28:[function(require,module,exports){
var Marionette = require('backbone.marionette');
var SplashTemplate = require('./splash.hbs');

module.exports = Marionette.View.extend({

    template: SplashTemplate,

    events: {
        'click .getstarted-js': 'distressthermometer_start'
    },

    distressthermometer_start: function(){
        this.triggerMethod('distressthermometer:start', this);
    }
});
},{"./splash.hbs":27,"backbone.marionette":3}],29:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"topbox\">\n    <h2>Distress Thermometer</h2>\n    <div>\n        What number best describes how much distress you have been experiencing in the past week, including today?\n    </div>\n</div>\n\n<div class=\"bottombox\">\n    <div class=\"ui labeled slider\"></div>\n    <div class=\"ui grid\">\n    <div class=\"four wide column\">No distress</div>\n    <div class=\"four wide column\"></div>\n    <div class=\"four wide column\"></div>\n    <div class=\"four wide column\">Extreme distress</div>\n    </div>\n</div>\n\n<button class=\"circular primary ui icon right floated button js-qstart\">\n    <i class=\"angle right icon\"></i>\n</button>\n";
},"useData":true});

},{"hbsfy/runtime":7}],30:[function(require,module,exports){
var Marionette = require('backbone.marionette');
var ThermoTemplate = require('./thermo.hbs');

module.exports = Marionette.View.extend({

    template: ThermoTemplate,

    events: {
        'click .js-qstart': 'distressthermometer_start'
    },

    onAttach: function(){
        this.$el.find('.ui.slider').slider({min: 0,
            max: 10,
            step: 1
        });
    },



    distressthermometer_start: function(){
        this.triggerMethod('distressquestions:start', this);
    }
});
},{"./thermo.hbs":29,"backbone.marionette":3}]},{},[11]);
