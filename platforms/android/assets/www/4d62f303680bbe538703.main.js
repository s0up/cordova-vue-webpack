/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + "4d62f303680bbe538703" + "." + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************************************!*\
  !*** ./node_modules/vue-loader/lib/component-normalizer.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 2 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(/*! vuetify */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(/*! ./App */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(/*! ./routes */ 11);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, /*! material-design-icons/iconfont/material-icons.css */ 22));

__webpack_require__(/*! vuetify/dist/vuetify.min.css */ 18);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});


/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
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
/* 4 */
/*!**********************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.js ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vuetify"] = factory();
	else
		root["Vuetify"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    dark: Boolean,
    light: Boolean
  },

  computed: {
    themeClasses: function themeClasses() {
      return {
        'theme--light': this.light,
        'theme--dark': this.dark
      };
    }
  }
});
'filehash ne83oApYm1gwvuNq3vhYMZVtpxU=';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = createSimpleFunctional;
/* harmony export (immutable) */ __webpack_exports__["e"] = createSimpleTransition;
/* harmony export (immutable) */ __webpack_exports__["b"] = createJavaScriptTransition;
/* harmony export (immutable) */ __webpack_exports__["f"] = directiveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = addOnceEventListener;
/* harmony export (immutable) */ __webpack_exports__["g"] = getObjectValueByPath;
/* harmony export (immutable) */ __webpack_exports__["c"] = createRange;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';

  var name = c.replace(/__/g, '-');
  return {
    name: 'v-' + name,
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

function createSimpleTransition(name) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
  var mode = arguments[2];

  return {
    name: name,

    functional: true,

    props: {
      origin: {
        type: String,
        default: origin
      }
    },

    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};

      if (mode) context.data.props.mode = mode;

      context.data.on.beforeEnter = function (el) {
        el.style.transformOrigin = origin;
        el.style.webkitTransformOrigin = origin;
      };

      return h('transition', context.data, context.children);
    }
  };
}

function createJavaScriptTransition(name, functions) {
  var css = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'in-out';

  return {
    name: name,

    functional: true,

    props: {
      css: {
        type: Boolean,
        default: css
      },
      mode: {
        type: String,
        default: mode
      }
    },

    render: function render(h, context) {
      var data = {
        props: _extends({}, context.props, {
          name: name
        }),
        on: functions
      };

      return h('transition', data, context.children);
    }
  };
}

function directiveConfig(binding) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, defaults, binding.modifiers, { value: binding.arg }, binding.value || {});
}

function addOnceEventListener(el, event, cb) {
  var once = function once() {
    cb();
    el.removeEventListener(event, once, false);
  };

  el.addEventListener(event, once, false);
}

function getObjectValueByPath(obj, path) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  var a = path.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (obj instanceof Object && k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }
  return obj;
}

function createRange(length) {
  return [].concat(_toConsumableArray(Array.from({ length: length }, function (v, k) {
    return k;
  })));
}
'filehash v6vo/ydndj/Q6ADKaNy68zaVGL4=';

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VIcon__);


__WEBPACK_IMPORTED_MODULE_0__VIcon___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VIcon___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VIcon___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VIcon___default.a);
'filehash m4DTVIaNsaV1q4rgutEr2rdqV8Y=';

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = factory;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function factory() {
  var _watch;

  var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';

  return {
    model: { prop: prop, event: event },

    props: _defineProperty({}, prop, { required: false }),

    data: function data() {
      return {
        isActive: !!this[prop]
      };
    },


    watch: (_watch = {}, _defineProperty(_watch, prop, function (val) {
      this.isActive = !!val;
    }), _defineProperty(_watch, 'isActive', function isActive(val) {
      !!val !== this[prop] && this.$emit(event, val);
    }), _watch)
  };
}

var Toggleable = factory();

/* harmony default export */ __webpack_exports__["a"] = (Toggleable);
'filehash nVJMSpWgquFl9KvbRsDd6fO6ayg=';

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VBottomSheetTranstion */
/* unused harmony export VCarouselTransition */
/* unused harmony export VCarouselReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VTabTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VTabReverseTransition; });
/* unused harmony export VMenuTransition */
/* unused harmony export VFabTransition */
/* unused harmony export VDialogTransition */
/* unused harmony export VDialogBottomTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VFadeTransition; });
/* unused harmony export VScaleTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VSlideXTransition; });
/* unused harmony export VSlideXReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VSlideYTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VSlideYReverseTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VExpandTransition; });
/* harmony export (immutable) */ __webpack_exports__["h"] = install;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expand_transition__ = __webpack_require__(93);




// Component specific transitions
var VBottomSheetTranstion = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('bottom-sheet-transition');
var VCarouselTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('carousel-transition');
var VCarouselReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('carousel-reverse-transition');
var VTabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('tab-transition');
var VTabReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('tab-reverse-transition');
var VMenuTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('menu-transition');
var VFabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('fab-transition', 'center center', 'out-in');

// Generic transitions
var VDialogTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('dialog-transition');
var VDialogBottomTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('dialog-bottom-transition');
var VFadeTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('fade-transition');
var VScaleTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('scale-transition');
var VSlideXTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-x-transition');
var VSlideXReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-x-reverse-transition');
var VSlideYTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-y-transition');
var VSlideYReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-y-reverse-transition');

// JavaScript transitions
var VExpandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["b" /* createJavaScriptTransition */])('expand-transition', __WEBPACK_IMPORTED_MODULE_1__expand_transition__["a" /* default */]);

function install(Vue) {
  Vue.component('v-bottom-sheet-transition', VBottomSheetTranstion);
  Vue.component('v-carousel-transition', VCarouselTransition);
  Vue.component('v-carousel-reverse-transition', VCarouselReverseTransition);
  Vue.component('v-dialog-transition', VDialogTransition);
  Vue.component('v-dialog-bottom-transition', VDialogBottomTransition);
  Vue.component('v-fab-transition', VFabTransition);
  Vue.component('v-fade-transition', VFadeTransition);
  Vue.component('v-menu-transition', VMenuTransition);
  Vue.component('v-scale-transition', VScaleTransition);
  Vue.component('v-slide-x-transition', VSlideXTransition);
  Vue.component('v-slide-x-reverse-transition', VSlideXReverseTransition);
  Vue.component('v-slide-y-transition', VSlideYTransition);
  Vue.component('v-slide-y-reverse-transition', VSlideYReverseTransition);
  Vue.component('v-tab-reverse-transition', VTabReverseTransition);
  Vue.component('v-tab-transition', VTabTransition);
  Vue.component('v-expand-transition', VExpandTransition);
}
'filehash 5j+FTbE0/YfyIaPYRtVg2FLQK3Y=';

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function directive(e, el, binding, v) {
  var cb = function cb() {
    return true;
  };

  if (binding.value) cb = binding.value;

  if (v.context.isActive && e && e.target && e.target !== el && !el.contains(e.target) && cb(e)) {
    v.context.isActive = false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'click-outside',

  bind: function bind(el, binding, v) {
    v.context.$vuetify.load(function () {
      var outside = document.querySelector('[data-app]');
      var click = function click(e) {
        return directive(e, el, binding, v);
      };
      outside && outside.addEventListener('click', click, false);
      el._clickOutside = click;
    });
  },
  unbind: function unbind(el) {
    var outside = document.querySelector('[data-app]');
    outside && outside.removeEventListener('click', el._clickOutside, false);
  }
});
'filehash Y5JphhYQJtvL9EUheioKs2AHk5I=';

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function style(el, value) {
  ['transform', 'webkitTransform'].forEach(function (i) {
    el.style[i] = value;
  });
}

var ripple = {
  show: function show(e, el, _ref) {
    var _ref$value = _ref.value,
        value = _ref$value === undefined ? {} : _ref$value;

    var container = document.createElement('span');
    var animation = document.createElement('span');

    container.appendChild(animation);
    container.className = 'ripple__container';

    if (value.class) {
      container.className += ' ' + value.class;
    }

    var size = el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight;
    animation.className = 'ripple__animation';
    animation.style.width = size * (value.center ? 1 : 2) + 'px';
    animation.style.height = animation.style.width;

    el.appendChild(container);
    var computed = window.getComputedStyle(el);
    if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

    var offset = el.getBoundingClientRect();
    var x = value.center ? '50%' : e.clientX - offset.left + 'px';
    var y = value.center ? '50%' : e.clientY - offset.top + 'px';

    animation.classList.add('ripple__animation--enter');
    animation.classList.add('ripple__animation--visible');
    style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ') scale3d(0.01,0.01,0.01)');
    animation.dataset.activated = Date.now();

    setTimeout(function () {
      animation.classList.remove('ripple__animation--enter');
      style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ')  scale3d(0.99,0.99,0.99)');
    }, 0);
  },

  hide: function hide(el) {
    var ripples = el.getElementsByClassName('ripple__animation');

    if (ripples.length === 0) return;
    var animation = ripples[ripples.length - 1];
    var diff = Date.now() - Number(animation.dataset.activated);
    var delay = 400 - diff;

    delay = delay < 0 ? 0 : delay;

    setTimeout(function () {
      animation.classList.remove('ripple__animation--visible');

      setTimeout(function () {
        // Need to figure out a new way to do this
        try {
          if (ripples.length < 1) el.style.position = null;
          animation.parentNode && el.removeChild(animation.parentNode);
        } catch (e) {}
      }, 300);
    }, delay);
  }
};

function directive(el, binding, v) {
  if (binding.value === false) return;

  if ('ontouchstart' in window) {
    el.addEventListener('touchend', function () {
      return ripple.hide(el);
    }, false);
    el.addEventListener('touchcancel', function () {
      return ripple.hide(el);
    }, false);
  }

  el.addEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.addEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.addEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

function unbind(el, binding) {
  el.removeEventListener('touchstart', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('touchend', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('touchcancel', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ripple',
  bind: directive,
  unbind: unbind
});
'filehash aA0bja+HaZFp4jnQeinzhhF73cs=';

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function inserted(el, binding) {
  var cb = binding.value;
  var debounce = 200;

  if (typeof binding.value !== 'function') {
    cb = binding.value.value;
    debounce = binding.value.debounce;
  }

  var fn = function fn(cb) {
    return setTimeout(cb, debounce);
  };
  var onResize = function onResize() {
    clearTimeout(fn);
    fn(cb);
  };

  window.addEventListener('resize', onResize, { passive: true });
  el._onResize = onResize;

  onResize();
}

function unbind(el, binding) {
  window.removeEventListener('resize', el._onResize);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'resize',
  inserted: inserted,
  unbind: unbind
});
'filehash GOGmTO1vTCEbrqoJW1grjgcp3Fs=';

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VBtn__);


__WEBPACK_IMPORTED_MODULE_0__VBtn___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBtn___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VBtn___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBtn___default.a);
'filehash ELnx8Fd3D/iwrnjEGQ+VwVpHtUA=';

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var touchstart = function touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;

  wrapper.start && wrapper.start(Object.assign(event, wrapper));
};

var touchend = function touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;

  wrapper.end && wrapper.end(Object.assign(event, wrapper));

  handleGesture(wrapper);
};

var touchmove = function touchmove(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;

  wrapper.move && wrapper.move(Object.assign(event, wrapper));
};

var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;

  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;

  if (touchendX < touchstartX) {
    wrapper.left && wrapper.left(wrapper);
  }
  if (touchendX > touchstartX) {
    wrapper.right && wrapper.right(wrapper);
  }
  if (touchendY < touchstartY) {
    wrapper.up && wrapper.up(wrapper);
  }
  if (touchendY > touchstartY) {
    wrapper.down && wrapper.down(wrapper);
  }
};

function inserted(el, _ref) {
  var value = _ref.value;

  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };

  var target = value.parent ? el.parentNode : el;
  var options = value.options || { passive: true

    // Needed to pass unit tests
  };if (!target) return;
  target.addEventListener('touchstart', function (e) {
    return touchstart(e, wrapper);
  }, options);
  target.addEventListener('touchend', function (e) {
    return touchend(e, wrapper);
  }, options);
  target.addEventListener('touchmove', function (e) {
    return touchmove(e, wrapper);
  }, options);
}

function unbind(el, _ref2) {
  var value = _ref2.value;

  var target = value.parent ? el.parentNode : el;

  if (!target) return;

  target.removeEventListener('touchstart', touchstart);
  target.removeEventListener('touchend', touchend);
  target.removeEventListener('touchmove', touchmove);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'touch',
  inserted: inserted,
  unbind: unbind
});
'filehash 6/jz1m2V5VWZdfe7724NOs+3V+Y=';

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validatable__ = __webpack_require__(94);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__validatable__["a" /* default */]],

  data: function data() {
    return {
      focused: false,
      tabFocused: false,
      internalTabIndex: null,
      lazyValue: this.value
    };
  },


  props: {
    appendIcon: String,
    appendIconCb: Function,
    disabled: Boolean,
    hint: String,
    hideDetails: Boolean,
    label: String,
    persistentHint: Boolean,
    placeholder: String,
    prependIcon: String,
    prependIconCb: Function,
    required: Boolean,
    tabindex: {
      default: 0
    },
    toggleKeys: {
      type: Array,
      default: function _default() {
        return [13, 32];
      }
    },
    value: {
      required: false
    }
  },

  computed: {
    inputGroupClasses: function inputGroupClasses() {
      return Object.assign({
        'input-group': true,
        'input-group--focused': this.focused,
        'input-group--dirty': this.isDirty,
        'input-group--tab-focused': this.tabFocused,
        'input-group--disabled': this.disabled,
        'input-group--error': this.hasError,
        'input-group--append-icon': this.appendIcon,
        'input-group--prepend-icon': this.prependIcon,
        'input-group--required': this.required,
        'input-group--hide-details': this.hideDetails,
        'input-group--placeholder': !!this.placeholder,
        'theme--dark': this.dark,
        'theme--light': this.light
      }, this.classes);
    },
    isDirty: function isDirty() {
      return !!this.inputValue;
    }
  },

  methods: {
    groupFocus: function groupFocus(e) {},
    groupBlur: function groupBlur(e) {
      this.tabFocused = false;
    },
    genLabel: function genLabel() {
      return this.$createElement('label', {
        attrs: {
          for: this.$attrs.id
        }
      }, this.$slots.label || this.label);
    },
    genMessages: function genMessages() {
      var messages = [];

      if ((this.hint && this.focused || this.hint && this.persistentHint) && this.validations.length === 0) {
        messages = [this.genHint()];
      } else if (this.validations.length) {
        messages = [this.genError(this.validations[0])];
      }

      return this.$createElement('transition-group', {
        'class': 'input-group__messages',
        props: {
          tag: 'div',
          name: 'slide-y-transition'
        }
      }, messages);
    },
    genHint: function genHint() {
      return this.$createElement('div', {
        'class': 'input-group__hint',
        key: this.hint,
        domProps: { innerHTML: this.hint }
      });
    },
    genError: function genError(error) {
      return this.$createElement('div', {
        'class': 'input-group__error',
        key: error
      }, error);
    },
    genIcon: function genIcon(type) {
      var _class;

      var icon = this[type + 'Icon'];
      var cb = this[type + 'IconCb'];
      var hasCallback = typeof cb === 'function';

      return this.$createElement('v-icon', {
        'class': (_class = {}, _defineProperty(_class, 'input-group__' + type + '-icon', true), _defineProperty(_class, 'input-group__icon-cb', hasCallback), _class),
        on: {
          click: function click(e) {
            hasCallback && cb(e);
          }
        }
      }, icon);
    },
    genInputGroup: function genInputGroup(input) {
      var _this = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var children = [];
      var wrapperChildren = [];
      var detailsChildren = [];

      data = Object.assign({}, {
        'class': this.inputGroupClasses,
        attrs: {
          tabindex: this.disabled ? -1 : this.internalTabIndex || this.tabindex
        },
        on: {
          focus: this.groupFocus,
          blur: this.groupBlur,
          click: function click() {
            return _this.tabFocused = false;
          },
          keyup: function keyup(e) {
            if ([9, 16].includes(e.keyCode)) {
              _this.tabFocused = true;
            }
          },
          keydown: function keydown(e) {
            if (!_this.toggle) return;

            if (_this.toggleKeys.includes(e.keyCode)) {
              e.preventDefault();
              _this.toggle();
            }
          }
        }
      }, data);

      if (this.$slots.label || this.label) {
        children.push(this.genLabel());
      }

      wrapperChildren.push(input);

      if (this.prependIcon) {
        wrapperChildren.unshift(this.genIcon('prepend'));
      }

      if (this.appendIcon) {
        wrapperChildren.push(this.genIcon('append'));
      }

      children.push(this.$createElement('div', {
        'class': 'input-group__input',
        on: {
          click: function click() {
            // Proprietary for v-text-field with box prop
            if (!_this.box) return;

            _this.focus();
          }
        }
      }, wrapperChildren));
      detailsChildren.push(this.genMessages());

      if (typeof this.counter !== 'undefined') {
        detailsChildren.push(this.genCounter());
      }

      children.push(this.$createElement('div', {
        'class': 'input-group__details'
      }, detailsChildren));

      return this.$createElement('div', data, children);
    }
  }
});
'filehash x/6x/aeIWGqBSaH047OoZN2jTSw=';

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    primary: Boolean,
    secondary: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    error: Boolean
  }
});
"filehash E5Txp588xJpPh2gZeE13LIQHvz4=";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_ripple__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_0__directives_ripple__["a" /* default */]
  },

  props: {
    append: Boolean,
    disabled: Boolean,
    exact: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    router: Boolean,
    ripple: Boolean,
    tag: String
  },

  methods: {
    click: function click() {},
    generateRouteLink: function generateRouteLink() {
      var exact = this.exact;
      var tag = void 0;

      var data = {
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.ripple || false
        }],
        on: _extends({}, this.$listeners || {}, {
          click: this.click
        })
      };

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        data.props.to = this.to;
        data.props.exact = exact;
        data.props.activeClass = this.activeClass;
        data.props.append = this.append;
        data.props.replace = this.replace;
      } else {
        tag = this.href && 'a' || this.tag || 'a';

        if (tag === 'a') {
          data.attrs.href = this.href || 'javascript:;';
        }
      }

      return { tag: tag, data: data };
    }
  }
});
'filehash ClgIfaFJzgJg0kpO9sgfpQ7GAco=';

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VCardMedia__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VCardTitle__ = __webpack_require__(83);
/* unused harmony reexport VCard */
/* unused harmony reexport VCardMedia */
/* unused harmony reexport VCardTitle */







__WEBPACK_IMPORTED_MODULE_1__VCard___default.a.install = function install(Vue) {
  var VCardActions = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('card__actions');
  var VCardText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('card__text');

  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VCard___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VCard___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__VCardMedia__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VCardMedia__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__VCardTitle__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VCardTitle__["a" /* default */]);
  Vue.component('v-card-actions', VCardActions);
  Vue.component('v-card-text', VCardText);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VCard___default.a);
'filehash KNcR1LzJDEAfUwqrjV6i9tksm+g=';

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isBooted: false
    };
  },


  watch: {
    isActive: function isActive() {
      this.isBooted = true;
    }
  },

  methods: {
    showLazyContent: function showLazyContent(content) {
      return this.lazy && this.isBooted || !this.lazy ? content : null;
    }
  }
});
"filehash ebt+ks7uR/zBYOTA8OR5u7EJY/o=";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      buttons: [],
      listeners: []
    };
  },


  methods: {
    getValue: function getValue(i) {
      return 'value' in this.buttons[i] && !!this.buttons[i].value ? this.buttons[i].value : i;
    },
    update: function update() {
      var _this = this;

      this.buttons.forEach(function (elm, i) {
        // Fix for testing, dataset does not exist on elm?
        if (!elm.dataset) elm.dataset = {};

        if (_this.isSelected(i)) {
          elm.setAttribute('data-selected', true);
          elm.classList.add('btn--active');
        } else {
          elm.removeAttribute('data-selected');
          elm.classList.remove('btn--active');
        }

        elm.dataset.index = i;
      });
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    var options = { passive: true };
    this.$vuetify.load(function () {
      _this2.buttons = _this2.$slots.default.filter(function (vnode) {
        return vnode.tag !== undefined;
      }).map(function (vnode, i) {
        _this2.listeners.push(_this2.updateValue.bind(_this2, i));
        vnode.elm.addEventListener('click', _this2.listeners[i], options);
        return vnode.elm;
      });

      _this2.update();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;

    this.buttons.forEach(function (elm, i) {
      elm.removeEventListener('click', _this3.listeners[i]);
    });
  }
});
'filehash CUfPyK3qisiilt0ohBRUyZHZCNM=';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VDialog/VDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6742802e", Component.options)
  } else {
    hotAPI.reload("data-v-6742802e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    contentClass: {
      default: ''
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      if (_this._isDestroyed) return;

      var app = document.querySelector('[data-app]');

      if (!app) {
        return console.warn('Application is missing <v-app> component.');
      }

      app.insertBefore(_this.$refs.content, app.firstChild);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.$refs.content) return;

    // IE11 Fix
    try {
      this.$refs.content.parentNode.removeChild(this.$refs.content);
    } catch (e) {}
  }
});
'filehash GkgKxitFGoEI4n95UdzI2Lxo5lM=';

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_overlay_styl__);
 // eslint-disable-line no-unused-vars

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      overlay: null,
      overlayOffset: 0,
      overlayTimeout: null,
      overlayTransitionDuration: 500
    };
  },


  props: {
    hideOverlay: Boolean
  },

  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },


  methods: {
    genOverlay: function genOverlay() {
      var _this = this;

      // If fn is called and timeout is active
      // cancel removal of overlay and re-add active
      if (!this.isActive || this.hideOverlay || this.isActive && this.overlayTimeout) {
        clearTimeout(this.overlayTimeout);

        return this.overlay && this.overlay.classList.add('overlay--active');
      }

      this.overlay = document.createElement('div');
      this.overlay.className = 'overlay';
      this.overlay.onclick = function () {
        if (_this.permanent) return;else if (!_this.persistent) _this.isActive = false;else if (_this.isMobile) _this.isActive = false;
      };

      if (this.absolute) this.overlay.className += ' overlay--absolute';

      this.hideScroll();

      if (this.absolute) {
        // Required for IE11
        var parent = this.$el.parentNode;
        parent.insertBefore(this.overlay, parent.firstChild);
      } else {
        document.querySelector('[data-app]').appendChild(this.overlay);
      }

      this.overlay.clientHeight; // Force repaint
      requestAnimationFrame(function () {
        _this.overlay.className += ' overlay--active';
      });

      return true;
    },
    removeOverlay: function removeOverlay() {
      var _this2 = this;

      if (!this.overlay) {
        return this.showScroll();
      }

      this.overlay.classList.remove('overlay--active');

      this.overlayTimeout = setTimeout(function () {
        // IE11 Fix
        try {
          _this2.overlay.parentNode.removeChild(_this2.overlay);
          _this2.overlay = null;
          _this2.showScroll();
        } catch (e) {}

        clearTimeout(_this2.overlayTimeout);
        _this2.overlayTimeout = null;
      }, this.overlayTransitionDuration);
    },
    scrollListener: function scrollListener(e) {
      if (e.type === 'keydown') {
        var up = [38, 33, 36];
        var down = [40, 34, 35];

        if (up.includes(e.keyCode)) {
          e.deltaY = -1;
        } else if (down.includes(e.keyCode)) {
          e.deltaY = 1;
        } else {
          return;
        }
      }

      if (e.target === this.overlay || e.type !== 'keydown' && e.target === document.body || this.checkPath(e)) e.preventDefault();
    },
    composedPath: function composedPath(e) {
      var path = [];
      var el = e.target;

      while (el) {
        path.push(el);

        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);

          return path;
        }

        el = el.parentElement;
      }
    },
    hasScrollbar: function hasScrollbar(el) {
      var style = window.getComputedStyle(el);
      return ['auto', 'scroll'].includes(style['overflow-y']);
    },
    shouldScroll: function shouldScroll(el, delta) {
      if (el.scrollTop === 0 && delta < 0) return true;else if (el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0) return true;else return false;
    },
    isInside: function isInside(el, parent) {
      if (el === parent) {
        return true;
      } else if (el === null || el === document.body) {
        return false;
      } else {
        return this.isInside(el.parentNode, parent);
      }
    },
    checkPath: function checkPath(e) {
      var path = e.path || this.composedPath(e);
      var delta = e.deltaY || -e.wheelDelta;

      if (e.type === 'keydown' && path[0] === document.body) {
        var dialog = this.$refs.content.querySelector('.dialog');
        var selected = window.getSelection().anchorNode;
        if (this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
          return this.shouldScroll(dialog, delta);
        }
        return true;
      }

      for (var i = 0; i < path.length; i++) {
        var el = path[i];

        if (el === document) return true;else if (this.hasScrollbar(el)) {
          return this.shouldScroll(el, delta);
        } else if (el === this.$refs.content) return true;
      }

      return true;
    },
    hideScroll: function hideScroll() {
      if (this.$vuetify.breakpoint.mdAndDown) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        window.addEventListener('mousewheel', this.scrollListener);
        window.addEventListener('keydown', this.scrollListener);
      }
    },
    showScroll: function showScroll() {
      if (this.$vuetify.breakpoint.mdAndDown) {
        document.documentElement.removeAttribute('style');
      } else {
        window.removeEventListener('mousewheel', this.scrollListener);
        window.removeEventListener('keydown', this.scrollListener);
      }
    }
  }
});
'filehash otiWjzcA1Ap/pLSvVZB3ASSn7qM=';

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    absolute: Boolean,
    bottom: Boolean,
    fixed: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean
  }
});
"filehash RWcYr/NzB/69D6qSBMUx9Gx8GNg=";

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckbox__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VCheckbox__);


__WEBPACK_IMPORTED_MODULE_0__VCheckbox___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VCheckbox___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VCheckbox___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VCheckbox___default.a);
'filehash k2tAyw5NZqw/Beu4yTNyxGc+Ws4=';

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colorable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__colorable__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: null,
    falseValue: null,
    trueValue: null
  },

  computed: {
    isActive: function isActive() {
      if (Array.isArray(this.inputValue)) {
        return this.inputValue.indexOf(this.value) !== -1;
      }

      if (!this.trueValue || !this.falseValue) {
        return this.value ? this.value === this.inputValue : Boolean(this.inputValue);
      }

      return this.inputValue === this.trueValue;
    },
    isDirty: function isDirty() {
      return this.isActive;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      this.inputIndeterminate = val;
    }
  },

  methods: {
    genLabel: function genLabel() {
      return this.$createElement('label', {
        on: { click: this.toggle },
        attrs: {
          for: this.$attrs.id
        }
      }, this.$slots.label || this.label);
    },
    toggle: function toggle() {
      if (this.disabled) {
        return;
      }

      var input = this.inputValue;
      if (Array.isArray(input)) {
        input = input.slice();
        var i = input.indexOf(this.value);

        if (i === -1) {
          input.push(this.value);
        } else {
          input.splice(i, 1);
        }
      } else if (this.trueValue || this.falseValue) {
        input = input === this.trueValue ? this.falseValue : this.trueValue;
      } else if (this.value) {
        input = this.value === this.inputValue ? null : this.value;
      } else {
        input = !input;
      }

      this.validate(true, input);

      this.$emit('change', input);
    }
  }
});
'filehash 0/ecO8tCUIMxE1wdAYWtthnz2zg=';

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    color: String
  },
  methods: {
    addColorClassChecks: function addColorClassChecks(classes) {
      var parts = this.color ? this.color.trim().split(' ') : [''];
      var color = parts[0] + '--text';
      if (parts.length > 1) color += ' text--' + parts[1];
      classes[color] = !!this.color;
      return classes;
    }
  }
});
'filehash UyKRmoo+K9AB9rhVki84MauRsBY=';

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressLinear__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressLinear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VProgressLinear__);


__WEBPACK_IMPORTED_MODULE_0__VProgressLinear___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VProgressLinear___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VProgressLinear___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VProgressLinear___default.a);
'filehash 4+f1MK2LXzRXTKFaBM0uJWMY7SI=';

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSelect__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSelect__);


__WEBPACK_IMPORTED_MODULE_0__VSelect___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSelect___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSelect___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSelect___default.a);
'filehash ZEUY8tLtDgY8Hi9NrCiPpWhhzbo=';

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VListTileActionText */
/* unused harmony export VListTileAvatar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VListTileContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VListTileTitle; });
/* unused harmony export VListTileSubTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VList__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VListGroup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VListTile__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VListTileAction__ = __webpack_require__(117);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__VList___default.a; });
/* unused harmony reexport VListGroup */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__VListTile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a"]; });








var VListTileActionText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__action-text', 'span');
var VListTileAvatar = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__avatar', 'v-avatar');
var VListTileContent = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__content', 'div');
var VListTileTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__title', 'div');
var VListTileSubTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__sub-title', 'div');

__WEBPACK_IMPORTED_MODULE_1__VList___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VList___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VList___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__VListGroup__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VListGroup__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__VListTile__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VListTile__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a" /* default */]);
  Vue.component('v-list-tile-action-text', VListTileActionText);
  Vue.component('v-list-tile-avatar', VListTileAvatar);
  Vue.component('v-list-tile-content', VListTileContent);
  Vue.component('v-list-tile-sub-title', VListTileSubTitle);
  Vue.component('v-list-tile-title', VListTileTitle);
};

/* harmony default export */ __webpack_exports__["f"] = (__WEBPACK_IMPORTED_MODULE_1__VList___default.a);
'filehash zIe+KSXROM6cI6f0bHoeSXUeFp0=';

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VMenu__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VMenu__);


__WEBPACK_IMPORTED_MODULE_0__VMenu___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VMenu___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VMenu___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VMenu___default.a);
'filehash dfqzBB8QQ4Es+/2W/nNnJbYduuk=';

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    noDataText: {
      type: String,
      default: 'No data available'
    }
  }
});
'filehash 9tbI0hnFbs6FnNnBCPreI0nSqGE=';

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__themeable__["a" /* default */]],

  data: function data() {
    return {
      isSaving: false
    };
  },


  props: {
    actions: Boolean,
    autosave: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    scrollable: Boolean,
    value: {
      required: true
    },
    light: {
      type: Boolean,
      default: true
    },
    dark: Boolean
  },

  methods: {
    save: function save() {},
    cancel: function cancel() {},
    genSlot: function genSlot() {
      return this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      });
    }
  }
});
'filehash ltP97w4aMFL9HX71orMQnualPQM=';

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semver__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package_json__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(244);
__webpack_require__(31);





function Vuetify(Vue) {
  var Vuetify = __WEBPACK_IMPORTED_MODULE_2__components__["Vuetify"];

  Vue.use(Vuetify, {
    components: __WEBPACK_IMPORTED_MODULE_2__components__,
    directives: __WEBPACK_IMPORTED_MODULE_3__directives__
  });
}

Vuetify.version = __WEBPACK_IMPORTED_MODULE_1__package_json__["version"];

function checkVueVersion() {
  var vueDep = __WEBPACK_IMPORTED_MODULE_1__package_json__["devDependencies"].vue;
  if (!__WEBPACK_IMPORTED_MODULE_0_semver___default.a.satisfies(window.Vue.version, vueDep)) {
    console.warn('Vuetify requires Vue version ' + vueDep);
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.version && checkVueVersion();
  window.Vue.use(Vuetify);
}

/* harmony default export */ __webpack_exports__["default"] = (Vuetify);
'filehash q6gQSZ4F3XheuVvCpErL4IorwmA=';

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function(comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, loose) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, loose) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function(range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  })
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  })
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose)
  r2 = new Range(r2, loose)
  return r1.intersects(r2)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {"name":"vuetify","version":"0.15.0-beta.4","author":{"name":"John Leider","email":"john.j.leider@gmail.com"},"license":"MIT","homepage":"http://vuetifyjs.com","main":"dist/vuetify.js","unpkg":"dist/vuetify.js","types":"index.d.ts","scripts":{"watch":"cross-env TARGET=development webpack --config build/config.js --progress --hide-modules --watch","dev":"cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.config.js --open --hot","build:dev":"cross-env NODE_ENV=production node build/webpack.dev.config.js","build":"rimraf dist && cross-env NODE_ENV=production webpack --config build/config.js --progress --hide-modules","debug-build":"node --inspect --debug-brk build/config.js","test":"cross-env NODE_ENV=test jest --no-cache --verbose","test-coverage":"cross-env NODE_ENV=test jest --no-cache --coverage --verbose","lint":"eslint --ext .js,.vue src","precommit":"yarn run lint && yarn test","prepush":"yarn run lint && yarn test"},"description":"Vue.js 2 Semantic Component Framework","devDependencies":{"autoprefixer":"^6.6.0","avoriaz":"^3.2.0","babel-cli":"^6.24.1","babel-core":"^6.24.1","babel-eslint":"^7.1.1","babel-jest":"^20.0.3","babel-loader":"^7.1.1","babel-plugin-add-filehash":"^6.9.4","babel-plugin-module-resolver":"^2.7.1","babel-plugin-transform-async-to-generator":"^6.24.1","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.5.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","chalk":"^1.1.3","chromedriver":"^2.21.2","cross-env":"^3.1.3","cross-spawn":"^4.0.2","css-loader":"^0.23.1","css-mqpacker":"^6.0.1","cssnano":"^3.10.0","eslint":"^3.7.1","eslint-config-standard":"^6.1.0","eslint-config-vue":"^2.0.2","eslint-friendly-formatter":"^2.0.5","eslint-loader":"^1.6.1","eslint-plugin-html":"^1.3.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-pug":"^1.0.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^2.1.0","eventsource-polyfill":"^0.9.6","extract-text-webpack-plugin":"^3.0.0","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","husky":"^0.14.3","jest":"^20.0.4","jest-cli":"^20.0.4","jest-css-modules":"^1.1.0","jest-serializer-html":"^4.0.0","jest-vue-preprocessor":"^0.2.0","lolex":"^1.4.0","nightwatch":"^0.9.8","opn":"^4.0.2","optimize-css-assets-webpack-plugin":"^2.0.0","optimize-js-plugin":"^0.0.4","ora":"^0.3.0","phantomjs-prebuilt":"^2.1.3","postcss-loader":"^1.2.1","precss":"^1.4.0","progress-bar-webpack-plugin":"^1.10.0","pug":"^2.0.0-beta3","pug-loader":"^2.3.0","ress":"^1.1.1","rimraf":"^2.5.4","selenium-server":"2.53.1","semver":"^5.3.0","serialize-javascript":"^1.3.0","shelljs":"^0.7.4","style-loader":"^0.13.1","stylus":"^0.54.5","stylus-loader":"^2.1.1","uglifyjs-webpack-plugin":"^0.4.6","vue":"^2.4.1","vue-loader":"^10.1.0","vue-router":"^2.7.0","vue-server-renderer":"^2.4.1","vue-template-compiler":"^2.4.1","webpack":"^3.2.0","webpack-bundle-analyzer":"^2.9.0","webpack-bundle-size-analyzer":"^2.7.0","webpack-dev-server":"^2.7.1","webpack-merge":"^4.1.0","write-file-webpack-plugin":"^4.1.0"},"dependencies":{},"engines":{"node":">= 4.0.0","npm":">= 3.0.0"},"jest":{"verbose":false,"roots":["<rootDir>/src"],"moduleFileExtensions":["js","vue"],"moduleDirectories":["node_modules"],"moduleNameMapper":{"src/(.*)":"<rootDir>/src/$1"},"transform":{".*\\.(vue)$":"<rootDir>/node_modules/jest-vue-preprocessor","\\.(styl)$":"<rootDir>/node_modules/jest-css-modules",".*\\.(vue|js)$":"<rootDir>/node_modules/babel-jest"},"transformIgnorePatterns":["node_modules/(?!vue-router)"],"snapshotSerializers":["jest-serializer-html"]}}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vuetify__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vuetify", function() { return __WEBPACK_IMPORTED_MODULE_0__Vuetify__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VApp__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VApp", function() { return __WEBPACK_IMPORTED_MODULE_1__VApp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VAlert__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VAlert", function() { return __WEBPACK_IMPORTED_MODULE_2__VAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VAvatar__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VAvatar", function() { return __WEBPACK_IMPORTED_MODULE_3__VAvatar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VBottomNav__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBottomNav", function() { return __WEBPACK_IMPORTED_MODULE_4__VBottomNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VBottomSheet__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBottomSheet", function() { return __WEBPACK_IMPORTED_MODULE_5__VBottomSheet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VBreadcrumbs__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBreadcrumbs", function() { return __WEBPACK_IMPORTED_MODULE_6__VBreadcrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VBtn__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBtn", function() { return __WEBPACK_IMPORTED_MODULE_7__VBtn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VBtnToggle__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VBtnToggle", function() { return __WEBPACK_IMPORTED_MODULE_8__VBtnToggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VCard__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCard", function() { return __WEBPACK_IMPORTED_MODULE_9__VCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__VCarousel__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCarousel", function() { return __WEBPACK_IMPORTED_MODULE_10__VCarousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VCheckbox__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_11__VCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__VChip__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VChip", function() { return __WEBPACK_IMPORTED_MODULE_12__VChip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__VDataTable__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDataTable", function() { return __WEBPACK_IMPORTED_MODULE_13__VDataTable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__VDatePicker__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDatePicker", function() { return __WEBPACK_IMPORTED_MODULE_14__VDatePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__VDialog__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDialog", function() { return __WEBPACK_IMPORTED_MODULE_15__VDialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__VDivider__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VDivider", function() { return __WEBPACK_IMPORTED_MODULE_16__VDivider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__VExpansionPanel__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VExpansionPanel", function() { return __WEBPACK_IMPORTED_MODULE_17__VExpansionPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__VFooter__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VFooter", function() { return __WEBPACK_IMPORTED_MODULE_18__VFooter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__VForm__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VForm", function() { return __WEBPACK_IMPORTED_MODULE_19__VForm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__VGrid__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VGrid", function() { return __WEBPACK_IMPORTED_MODULE_20__VGrid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__VIcon__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VIcon", function() { return __WEBPACK_IMPORTED_MODULE_21__VIcon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__VList__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VList", function() { return __WEBPACK_IMPORTED_MODULE_22__VList__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__VMenu__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMenu", function() { return __WEBPACK_IMPORTED_MODULE_23__VMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__VNavigationDrawer__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VNavigationDrawer", function() { return __WEBPACK_IMPORTED_MODULE_24__VNavigationDrawer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__VPagination__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VPagination", function() { return __WEBPACK_IMPORTED_MODULE_25__VPagination__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__VParallax__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VParallax", function() { return __WEBPACK_IMPORTED_MODULE_26__VParallax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__VProgressCircular__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VProgressCircular", function() { return __WEBPACK_IMPORTED_MODULE_27__VProgressCircular__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__VProgressLinear__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VProgressLinear", function() { return __WEBPACK_IMPORTED_MODULE_28__VProgressLinear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__VRadioGroup__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VRadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_29__VRadioGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__VSelect__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSelect", function() { return __WEBPACK_IMPORTED_MODULE_30__VSelect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__VSlider__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSlider", function() { return __WEBPACK_IMPORTED_MODULE_31__VSlider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__VSnackbar__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSnackbar", function() { return __WEBPACK_IMPORTED_MODULE_32__VSnackbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__VSpeedDial__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSpeedDial", function() { return __WEBPACK_IMPORTED_MODULE_33__VSpeedDial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__VStepper__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VStepper", function() { return __WEBPACK_IMPORTED_MODULE_34__VStepper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__VSubheader__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSubheader", function() { return __WEBPACK_IMPORTED_MODULE_35__VSubheader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__VSwitch__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSwitch", function() { return __WEBPACK_IMPORTED_MODULE_36__VSwitch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__VSystemBar__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VSystemBar", function() { return __WEBPACK_IMPORTED_MODULE_37__VSystemBar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__VTabs__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTabs", function() { return __WEBPACK_IMPORTED_MODULE_38__VTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__VTextField__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTextField", function() { return __WEBPACK_IMPORTED_MODULE_39__VTextField__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__VTimePicker__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VTimePicker", function() { return __WEBPACK_IMPORTED_MODULE_40__VTimePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__VToolbar__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VToolbar", function() { return __WEBPACK_IMPORTED_MODULE_41__VToolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__transitions__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Transitions", function() { return __WEBPACK_IMPORTED_MODULE_42__transitions__["h"]; });











































'filehash 7GZ5ujFhHlc1NIwpiPXHV2yYYtY=';

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_load__ = __webpack_require__(37);


var Vuetify = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $vuetify = {
      load: __WEBPACK_IMPORTED_MODULE_0__util_load__["a" /* default */],
      breakpoint: {}
    };

    Vue.util.defineReactive({}, 'breakpoint', $vuetify);

    Vue.prototype.$vuetify = $vuetify;

    if (opts.transitions) {
      Object.keys(opts.transitions).forEach(function (key) {
        var t = opts.transitions[key];
        if (t.name !== undefined && t.name.startsWith('v-')) {
          Vue.component(t.name, t);
        }
      });
    }

    if (opts.directives) {
      Object.keys(opts.directives).forEach(function (key) {
        var d = opts.directives[key];
        Vue.directive(d.name, d);
      });
    }

    if (opts.components) {
      Object.keys(opts.components).forEach(function (key) {
        var c = opts.components[key];
        Vue.use(c);
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Vuetify);
'filehash C7E0363S2DEShy2bDxbvxa8EqJs=';

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function load(cb) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (document.readyState === 'complete') {
    return setTimeout(cb, 0);
  }

  if (document.readyState === 'interactive' && i <= 10) {
    return setTimeout(function () {
      return load(cb, i + 1);
    }, 200);
  }

  window.addEventListener('load', cb);
}

/* harmony default export */ __webpack_exports__["a"] = (load);
'filehash lMWG9Qpvnl3NMMPHvQC+4MFkNb8=';

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VApp__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VApp__);


__WEBPACK_IMPORTED_MODULE_0__VApp___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VApp___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VApp___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VApp___default.a);
'filehash wivPw4N4tLVvF4Ab+4HuFSvgYm4=';

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VApp/VApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ccbc7e0", Component.options)
  } else {
    hotAPI.reload("data-v-6ccbc7e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_breakpoint__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_resize__ = __webpack_require__(8);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-app',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__util_breakpoint__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]],

  directives: {
    Resize: __WEBPACK_IMPORTED_MODULE_2__directives_resize__["a" /* default */]
  },

  data: function data() {
    return {
      resizeTimeout: {}
    };
  },

  props: {
    fixedFooter: Boolean,
    footer: Boolean,
    id: {
      type: String,
      default: 'app'
    },
    toolbar: Boolean
  },

  methods: {
    resizeDebounce: function resizeDebounce() {
      clearTimeout(this.resizeTimeout);

      this.resizeTimeout = setTimeout(this.onResize, 200);
    }
  },

  mounted: function mounted() {
    this.onResize();
  },
  render: function render(h) {
    var data = {
      staticClass: 'application',
      'class': {
        'application--dark': this.dark,
        'application--light': !this.dark,
        'application--footer': this.footer || this.fixedFooter,
        'application--footer-fixed': this.fixedFooter,
        'application--toolbar': this.toolbar
      },
      attrs: { 'data-app': true },
      domProps: { id: this.id },
      directives: [{
        name: 'resize',
        value: this.resizeDebounce
      }]
    };

    return h('div', data, this.$slots.default);
  }
});
'filehash aMosyfBPTv34hPNTT0TRbD2/K1U=';

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A modified version of https://gist.github.com/cb109/b074a65f7595cffc21cea59ce8d15f9b
 */

/**
 * A Vue mixin to get the current width/height and the associated breakpoint.
 *
 * Useful to e.g. adapt the user interface from inside a Vue component
 * as opposed to using CSS classes. The breakpoint pixel values and
 * range names are taken from Vuetify (https://github.com/vuetifyjs).
 *
 * Use within a component:
 *
 *   import breakpoint from './breakpoint.js'
 *
 *   export default {
 *     name: 'my-component',
 *     mixins: [breakpoint],
 *     ...
 *
 * Then inside a template:
 *
 *   <div v-if="$breakpoint.smAndDown">...</div>
 */
var breakpoint = {
  data: function data() {
    return {
      clientWidth: 0,
      clientHeight: 0
    };
  },


  computed: {
    breakpoint: function breakpoint() {
      var xs = this.clientWidth < 600;
      var sm = this.clientWidth < 960 && !xs;
      var md = this.clientWidth < 1280 - 16 && !(sm || xs);
      var lg = this.clientWidth < 1920 - 16 && !(md || sm || xs);
      var xl = this.clientWidth >= 1920 - 16 && !(lg || md || sm || xs);

      var xsOnly = xs;
      var smOnly = sm;
      var smAndDown = (xs || sm) && !(md || lg || xl);
      var smAndUp = !xs && (sm || md || lg || xl);
      var mdOnly = md;
      var mdAndDown = (xs || sm || md) && !(lg || xl);
      var mdAndUp = !(xs || sm) && (md || lg || xl);
      var lgOnly = lg;
      var lgAndDown = (xs || sm || md || lg) && !xl;
      var lgAndUp = !(xs || sm || md) && (lg || xl);
      var xlOnly = xl;

      var name = void 0;
      switch (true) {
        case xs:
          name = 'xs';
          break;
        case sm:
          name = 'sm';
          break;
        case md:
          name = 'md';
          break;
        case lg:
          name = 'lg';
          break;
        default:
          name = 'xl';
          break;
      }

      var result = {
        // Definite breakpoint.
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,

        // Useful e.g. to construct CSS class names dynamically.
        name: name,

        // Breakpoint ranges.
        xsOnly: xsOnly,
        smOnly: smOnly,
        smAndDown: smAndDown,
        smAndUp: smAndUp,
        mdOnly: mdOnly,
        mdAndDown: mdAndDown,
        mdAndUp: mdAndUp,
        lgOnly: lgOnly,
        lgAndDown: lgAndDown,
        lgAndUp: lgAndUp,
        xlOnly: xlOnly,

        // For custom breakpoint logic.
        width: this.clientWidth,
        height: this.clientHeight
      };

      return result;
    }
  },

  watch: {
    breakpoint: function breakpoint(val) {
      this.$vuetify.breakpoint = val;
    }
  },

  methods: {
    onResize: function onResize() {
      // Cross-browser support as described in:
      // https://stackoverflow.com/questions/1248081
      this.clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      this.clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (breakpoint);
'filehash Axj5SJd+AnRqzk7i+FsLkDYQhuA=';

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAlert__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAlert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VAlert__);


__WEBPACK_IMPORTED_MODULE_0__VAlert___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VAlert___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VAlert___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VAlert___default.a);
'filehash tA2AUx9/oHGZc/SjJtQSNisNQzg=';

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VAlert/VAlert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50245e30", Component.options)
  } else {
    hotAPI.reload("data-v-50245e30", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_transitionable__ = __webpack_require__(50);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-alert',

  components: {
    VIcon: __WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_transitionable__["a" /* default */]],

  props: {
    dismissible: Boolean,
    hideIcon: Boolean,
    icon: String
  },

  computed: {
    classes: function classes() {
      return {
        'alert': true,
        'alert--dismissible': this.dismissible,
        'error': this.error,
        'info': this.info,
        'primary': this.primary,
        'secondary': this.secondary,
        'success': this.success,
        'warning': this.warning
      };
    },
    mdIcon: function mdIcon() {
      switch (true) {
        case !!this.icon:
          return this.icon;
        case this.error:
          return 'warning';
        case this.info:
          return 'info';
        case this.success:
          return 'check_circle';
        case this.warning:
          return 'priority_high';
      }
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [h('div', this.$slots.default)];

    if (!this.hideIcon && this.mdIcon) {
      children.unshift(h('v-icon', {
        'class': 'alert__icon'
      }, this.mdIcon));
    }

    if (this.dismissible) {
      var close = h('a', {
        'class': 'alert__dismissible',
        domProps: { href: 'javascript:;' },
        on: { click: function click() {
            return _this.$emit('input', false);
          } }
      }, [h('v-icon', {
        props: {
          right: true
        }
      }, 'cancel')]);

      children.push(close);
    }

    var alert = h('div', {
      'class': this.classes,
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }, children);

    if (!this.transition) return alert;

    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [alert]);
  }
});
'filehash qIMr5iMU0dTOiDGAatITEPnJs7o=';

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VIcon/VIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3828fc10", Component.options)
  } else {
    hotAPI.reload("data-v-3828fc10", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-icon',

  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__["a" /* default */]],

  props: {
    disabled: Boolean,
    fa: Boolean,
    mdi: Boolean,
    large: Boolean,
    left: Boolean,
    medium: Boolean,
    right: Boolean,
    xLarge: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        _ref$children = _ref.children,
        children = _ref$children === undefined ? [] : _ref$children;

    if (props.fa || props.mdi) console.warn('The v-icon prop \'fa\' and \'mdi\' will be deprecated in the next release. Use \'fa\' or \'mdi\' prefix in icon name instead.');
    var iconName = '';
    var iconType = 'material-icons';

    if (children.length) {
      iconName = children.pop().text;
    } else if (data.domProps && data.domProps.textContent) {
      iconName = data.domProps.textContent;
      delete data.domProps.textContent;
    } else if (data.domProps && data.domProps.innerHTML) {
      iconName = data.domProps.innerHTML;
      delete data.domProps.innerHTML;
    }

    var thirdPartyIcon = iconName.indexOf('-') > -1;
    if (thirdPartyIcon) iconType = iconName.slice(0, iconName.indexOf('-'));

    // To keep things backwards compatible for now
    iconType = props.fa ? 'fa' : props.mdi ? 'mdi' : iconType;

    data.staticClass = (iconType + ' icon ' + (data.staticClass || '')).trim();
    data.attrs = data.attrs || {};

    var classes = {
      'icon--large': props.large,
      'icon--left': props.left,
      'icon--medium': props.medium,
      'icon--right': props.right,
      'icon--x-large': props.xLarge,
      'primary--text': props.primary,
      'secondary--text': props.secondary,
      'success--text': props.success,
      'info--text': props.info,
      'warning--text': props.warning,
      'error--text': props.error,
      'theme--dark': props.dark,
      'theme--light': props.light
    };

    var iconClasses = Object.keys(classes).filter(function (k) {
      return classes[k];
    }).join(' ');
    iconClasses && (data.staticClass += ' ' + iconClasses);

    // To keep things backwards compatible for now
    if (props.fa || props.mdi) {
      var comparison = props.fa ? 'fa' : 'mdi';

      if (iconName.indexOf(' ') > -1) data.staticClass += ' ' + comparison + '-' + iconName;else data.staticClass += ' ' + comparison + '-' + iconName.split(' ').join('-');
    }

    if (thirdPartyIcon) data.staticClass += ' ' + iconName;
    if (props.disabled) data.attrs.disabled = props.disabled;
    !(thirdPartyIcon || props.fa || props.mdi) && children.push(iconName);

    return h('i', data, children);
  }
});
'filehash E3j3PHuDaSKjFZfTIw2haUd/z5E=';

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mode: String,
    origin: String,
    transition: String
  }
});
"filehash wMS9DPlZFCtTelbWHDXiLmjPAIo=";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAvatar__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAvatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VAvatar__);


__WEBPACK_IMPORTED_MODULE_0__VAvatar___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VAvatar___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VAvatar___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VAvatar___default.a);
'filehash kMt6ZS/YMZSOBN5D4ZEkMiTEaRM=';

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VAvatar/VAvatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-210f0650", Component.options)
  } else {
    hotAPI.reload("data-v-210f0650", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-avatar',

  functional: true,

  props: {
    size: {
      type: String,
      default: '48px'
    },
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('avatar ' + (data.staticClass || '')).trim();
    data.style = data.style || {};

    if (props.tile) data.staticClass += ' avatar--tile';

    data.style.height = props.size;
    data.style.width = props.size;

    return h('div', data, children);
  }
});
'filehash 3f6KZ0TbIbgZSZ/HkP4L2enyvGY=';

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomNav__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VBottomNav__);


__WEBPACK_IMPORTED_MODULE_0__VBottomNav___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBottomNav___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VBottomNav___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBottomNav___default.a);
'filehash h1NTaIy+UvYzLPflaU+ZCmAn35Q=';

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBottomNav/VBottomNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2087bf30", Component.options)
  } else {
    hotAPI.reload("data-v-2087bf30", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_button_group__ = __webpack_require__(16);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-bottom-nav',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_button_group__["a" /* default */]],

  props: {
    absolute: Boolean,
    active: [Number, String],
    shift: Boolean,
    value: { required: false }
  },

  watch: {
    active: function active() {
      this.update();
    }
  },

  computed: {
    classes: function classes() {
      return {
        'bottom-nav': true,
        'bottom-nav--absolute': this.absolute,
        'bottom-nav--shift': this.shift,
        'bottom-nav--active': this.value
      };
    }
  },

  methods: {
    isSelected: function isSelected(i) {
      var item = this.getValue(i);
      return this.active === item;
    },
    updateValue: function updateValue(i) {
      var item = this.getValue(i);
      this.$emit('update:active', item);
    }
  },

  render: function render(h) {
    return h('div', {
      class: this.classes
    }, this.$slots.default);
  }
});
'filehash chGR+U/AcHJa7P7bO8toGvoH+4A=';

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomSheet__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBottomSheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VBottomSheet__);


__WEBPACK_IMPORTED_MODULE_0__VBottomSheet___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBottomSheet___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VBottomSheet___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBottomSheet___default.a);
'filehash +ggLWPxAkGzk+ucjeeT0SRLWwvI=';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBottomSheet/VBottomSheet.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c92a4f0", Component.options)
  } else {
    hotAPI.reload("data-v-3c92a4f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog_VDialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog_VDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VDialog_VDialog__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-bottom-sheet',

  components: {
    VDialog: __WEBPACK_IMPORTED_MODULE_0__VDialog_VDialog___default.a
  },

  props: {
    inset: Boolean,
    value: null
  },

  render: function render(h) {
    var activator = h('template', {
      slot: 'activator'
    }, this.$slots.activator);

    var contentClass = ['bottom-sheet', this.inset ? 'bottom-sheet--inset' : ''].join(' ');

    return h(__WEBPACK_IMPORTED_MODULE_0__VDialog_VDialog___default.a, {
      attrs: _extends({}, this.$attrs),
      on: _extends({}, this.$listeners),
      props: {
        contentClass: contentClass,
        transition: 'bottom-sheet-transition',
        value: this.value
      }
    }, [activator, this.$slots.default]);
  }
});
'filehash TnyrHZ/e6yvidhKUxdPoIvqPZdY=';

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__ = __webpack_require__(6);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-dialog',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__["a" /* default */]],

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__["a" /* default */]
  },

  props: {
    disabled: Boolean,
    persistent: Boolean,
    fullscreen: Boolean,
    fullWidth: Boolean,
    lazy: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    width: {
      type: [String, Number],
      default: 290
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    }
  },

  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, ('dialog ' + this.contentClass).trim(), true), _defineProperty(_ref, 'dialog--active', this.isActive), _defineProperty(_ref, 'dialog--persistent', this.persistent), _defineProperty(_ref, 'dialog--fullscreen', this.fullscreen), _defineProperty(_ref, 'dialog--stacked-actions', this.stackedActions && !this.fullscreen), _defineProperty(_ref, 'dialog--scrollable', this.scrollable), _ref;
    }
  },

  watch: {
    isActive: function isActive(val) {
      if (val) {
        !this.fullscreen && !this.hideOverlay && this.genOverlay();
        this.fullscreen && this.hideScroll();
        this.$refs.content.focus();
      } else {
        if (!this.fullscreen) this.removeOverlay();else this.showScroll();
      }
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.isBooted = this.isActive;
    this.$vuetify.load(function () {
      return _this.isActive && _this.genOverlay();
    });
  },


  methods: {
    closeConditional: function closeConditional(e) {
      // close dialog if !persistent and clicked outside
      return !this.persistent;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var children = [];
    var data = {
      'class': this.classes,
      ref: 'dialog',
      directives: [{ name: 'click-outside', value: this.closeConditional }, { name: 'show', value: this.isActive }]
    };

    if (!this.fullscreen) {
      data.style = {
        width: isNaN(this.width) ? this.width : this.width + 'px'
      };
    }

    if (this.$slots.activator) {
      children.push(h('div', {
        'class': 'dialog__activator',
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (!_this2.disabled) _this2.isActive = !_this2.isActive;
          }
        }
      }, [this.$slots.activator]));
    }

    var dialog = h('transition', {
      props: {
        name: this.transition || '', // If false, show nothing
        origin: this.origin
      }
    }, [h('div', data, this.lazy && this.isBooted || !this.lazy ? this.$slots.default : null)]);

    children.push(h('div', {
      'class': 'dialog__content',
      ref: 'content'
    }, [dialog]));

    return h('div', {
      'class': 'dialog__container',
      style: {
        display: !this.$slots.activator && 'none' || this.fullWidth ? 'block' : 'inline-block'
      }
    }, children);
  }
});
'filehash Q6xpayCWDj+l3AdDlGEto+WqjzQ=';

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__);
/* unused harmony reexport VBreadcrumbs */
/* unused harmony reexport VBreadcrumbsItem */





__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs___default.a);
'filehash lT97j3X547AduNF40pUYMhyljAU=';

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-466f6a70", Component.options)
  } else {
    hotAPI.reload("data-v-466f6a70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-breadcrumbs',

  provide: function provide() {
    return {
      divider: this.divider
    };
  },


  props: {
    divider: {
      type: String,
      default: '/'
    },
    icons: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'breadcrumbs': true,
        'breadcrumbs--with-icons': this.icons
      };
    }
  },

  render: function render(h) {
    return h('ul', {
      'class': this.classes,
      props: { items: this.items }
    }, this.$slots.default);
  }
});
'filehash 53LPgL39X7uEQvPhCljY3Cf+A48=';

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBreadcrumbs/VBreadcrumbsItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79fc47ba", Component.options)
  } else {
    hotAPI.reload("data-v-79fc47ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(13);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-breadcrumbs-item',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */]],

  inject: ['divider'],

  props: {
    activeClass: {
      type: String,
      default: 'breadcrumbs__item--disabled'
    }
  },

  computed: {
    classes: function classes() {
      var classes = {
        'breadcrumbs__item': true
      };

      classes[this.activeClass] = this.disabled;

      return classes;
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    return h('li', {
      attrs: { 'data-divider': this.divider }
    }, [h(tag, data, this.$slots.default)]);
  }
});
'filehash E9EqHpDNWwfIIB9IbgPjMooYx1E=';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBtn/VBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77e918f0", Component.options)
  } else {
    hotAPI.reload("data-v-77e918f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-btn',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__["b" /* factory */])('inputValue')],

  props: {
    activeClass: {
      type: String,
      default: 'btn--active'
    },
    block: Boolean,
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    large: Boolean,
    loading: Boolean,
    outline: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    round: Boolean,
    small: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    classes: function classes() {
      return _extends({
        'btn': true,
        'btn--active': this.isActive,
        'btn--absolute': this.absolute,
        'btn--block': this.block,
        'btn--bottom': this.bottom,
        'btn--disabled': this.disabled,
        'btn--flat': this.flat,
        'btn--floating': this.fab,
        'btn--fixed': this.fixed,
        'btn--hover': this.hover,
        'btn--icon': this.icon,
        'btn--large': this.large,
        'btn--left': this.left,
        'btn--loader': this.loading,
        'btn--outline': this.outline,
        'btn--raised': !this.flat,
        'btn--right': this.right,
        'btn--round': this.round,
        'btn--small': this.small,
        'btn--top': this.top,
        'primary': this.primary && !this.outline && !this.flat,
        'secondary': this.secondary && !this.outline && !this.flat,
        'success': this.success && !this.outline && !this.flat,
        'info': this.info && !this.outline && !this.flat,
        'warning': this.warning && !this.outline && !this.flat,
        'error': this.error && !this.outline && !this.flat,
        'primary--text': this.primary && (this.outline || this.flat),
        'secondary--text': this.secondary && (this.outline || this.flat),
        'success--text': this.success && (this.outline || this.flat),
        'info--text': this.info && (this.outline || this.flat),
        'warning--text': this.warning && (this.outline || this.flat),
        'error--text': this.error && (this.outline || this.flat)
      }, this.themeClasses);
    }
  },

  methods: {
    // Prevent focus to match md spec
    click: function click(e) {
      !this.fab && e.detail && this.$el.blur();

      this.$emit('click', e);
    },
    genContent: function genContent() {
      return this.$createElement('div', { 'class': 'btn__content' }, [this.$slots.default]);
    },
    genLoader: function genLoader() {
      var children = [];

      if (!this.$slots.loader) {
        children.push(this.$createElement('v-progress-circular', {
          props: {
            indeterminate: true,
            size: 26
          }
        }));
      } else {
        children.push(this.$slots.loader);
      }

      return this.$createElement('span', { 'class': 'btn__loading' }, children);
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    var children = [this.genContent()];

    tag === 'button' && (data.attrs.type = this.type);
    this.loading && children.push(this.genLoader());

    return h(tag, data, children);
  }
});
'filehash UQXQgSoePgYvW9EOFH8S5oOw8Uo=';

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtnToggle__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtnToggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VBtnToggle__);


__WEBPACK_IMPORTED_MODULE_0__VBtnToggle___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VBtnToggle___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VBtnToggle___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VBtnToggle___default.a);
'filehash Sp9il0GzI/s6dDiIQFkQbyzpeeA=';

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VBtnToggle/VBtnToggle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9d6afa0", Component.options)
  } else {
    hotAPI.reload("data-v-b9d6afa0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_button_group__ = __webpack_require__(16);
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-btn-toggle',

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_button_group__["a" /* default */]],

  props: {
    inputValue: {
      required: false
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mandatory: Boolean,
    multiple: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'btn-toggle': true,
        'btn-toggle--selected': this.hasValue
      };
    },
    hasValue: function hasValue() {
      return this.multiple && this.inputValue.length || !this.multiple && this.inputValue !== null && typeof this.inputValue !== 'undefined';
    }
  },

  watch: {
    inputValue: {
      handler: function handler() {
        this.update();
      },

      deep: true
    }
  },

  methods: {
    isSelected: function isSelected(i) {
      var item = this.getValue(i);
      if (!this.multiple) {
        return this.inputValue === item;
      }

      return this.inputValue.includes(item);
    },
    updateValue: function updateValue(i) {
      var item = this.getValue(i);
      if (!this.multiple) {
        if (this.mandatory && this.inputValue === item) return;
        return this.$emit('change', this.inputValue === item ? null : item);
      }

      var items = this.inputValue.slice();

      var index = items.indexOf(item);
      if (index > -1) {
        if (this.mandatory && items.length === 1) return;
        items.length >= 1 && items.splice(index, 1);
      } else {
        items.push(item);
      }

      this.$emit('change', items);
    }
  },

  mounted: function mounted() {
    if (this.items.length > 0) {
      console.warn('The \'items\' props has been deprecated. v-btn-toggle now has a default slot where you can place buttons.');
    }
  },
  render: function render(h) {
    return h('div', { class: this.classes }, this.$slots.default);
  }
});
'filehash z+4HpIcY2rPIxhK8BLKRfissvso=';

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VCard/VCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fcd77604", Component.options)
  } else {
    hotAPI.reload("data-v-fcd77604", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-card',

  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card ' + (data.staticClass || '')).trim();
    data.style = data.style || {};
    data.style.height = props.height;

    if (props.flat) data.staticClass += ' card--flat';
    if (props.horizontal) data.staticClass += ' card--horizontal';
    if (props.hover) data.staticClass += ' card--hover';
    if (props.raised) data.staticClass += ' card--raised';
    if (props.tile) data.staticClass += ' card--tile';
    if (props.light) data.staticClass += ' theme--light';
    if (props.dark) data.staticClass += ' theme--dark';

    if (props.img) {
      data.style.background = 'url(' + props.img + ') center center / cover no-repeat';
    }

    return h('div', data, children);
  }
});
'filehash J2Kk3pgkalfYVxS3TvrCebghXJY=';

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-card-media',

  props: {
    contain: Boolean,
    height: {
      type: [Number, String],
      default: 'auto'
    },
    src: {
      type: String
    }
  },

  render: function render(h) {
    var data = {
      'class': 'card__media',
      style: {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      },
      on: this.$listeners
    };

    var children = [];

    if (this.src) {
      children.push(h('div', {
        'class': 'card__media__background',
        style: {
          background: 'url(' + this.src + ') center center / ' + (this.contain ? 'contain' : 'cover') + ' no-repeat'
        }
      }));
    }

    children.push(h('div', {
      'class': 'card__media__content'
    }, this.$slots.default));

    return h('div', data, children);
  }
});
'filehash lBej+l5GZJ85CjDyCC7RIUtQGyw=';

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-card-title',

  functional: true,

  props: {
    primaryTitle: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card__title ' + (data.staticClass || '')).trim();

    if (props.primaryTitle) data.staticClass += ' card__title--primary';

    return h('div', data, children);
  }
});
'filehash Mu/k0Gr2qKWUs0kRZKecOxxcLsY=';

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCarousel__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCarousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VCarousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCarouselItem__ = __webpack_require__(88);
/* unused harmony reexport VCarousel */
/* unused harmony reexport VCarouselItem */





__WEBPACK_IMPORTED_MODULE_0__VCarousel___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VCarousel___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VCarousel___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VCarouselItem__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VCarouselItem__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VCarousel___default.a);
'filehash 8rYPZqak4kdgVivnDM1J6WyATbo=';

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VCarousel/VCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb4cc9c4", Component.options)
  } else {
    hotAPI.reload("data-v-bb4cc9c4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_bootable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_touch__ = __webpack_require__(10);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-carousel',

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */]],

  directives: { Touch: __WEBPACK_IMPORTED_MODULE_4__directives_touch__["a" /* default */] },

  data: function data() {
    return {
      inputValue: null,
      items: [],
      slideTimeout: null,
      reverse: false
    };
  },


  props: {
    value: Number,
    cycle: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'fiber_manual_record'
    },
    interval: {
      type: [Number, String],
      default: 6000,
      validator: function validator(value) {
        return value > 0;
      }
    },
    leftControlIcon: {
      type: [Boolean, String],
      default: 'chevron_left'
    },
    rightControlIcon: {
      type: [Boolean, String],
      default: 'chevron_right'
    }
  },

  watch: {
    inputValue: function inputValue() {
      var _this = this;

      // Evaluate items when inputValue changes to account for
      // dynamic changing of children
      this.items = this.$children.filter(function (i) {
        return i.$el.classList && i.$el.classList.contains('carousel__item');
      });

      this.items.forEach(function (i) {
        return i.open(_this.items[_this.inputValue]._uid, _this.reverse);
      });

      this.$emit('input', this.inputValue);
      this.restartTimeout();
    },
    value: function value() {
      this.init();
    },
    interval: function interval() {
      this.restartTimeout();
    },
    cycle: function cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = null;
      }
    }
  },

  mounted: function mounted() {
    this.init();
  },


  methods: {
    genControls: function genControls() {
      return this.$createElement('div', {
        staticClass: 'carousel__controls'
      }, this.genItems());
    },
    genIcon: function genIcon(direction, icon, fn) {
      if (!icon) return null;

      return this.$createElement('div', {
        staticClass: 'carousel__' + direction
      }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */], {
        props: {
          icon: true,
          dark: this.dark || !this.light,
          light: this.light
        },
        on: { click: fn }
      }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], icon)])]);
    },
    genItems: function genItems() {
      var _this2 = this;

      return this.items.map(function (item, index) {
        return _this2.$createElement(__WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */], {
          class: {
            'carousel__controls__item': true,
            'carousel__controls__item--active': index === _this2.inputValue
          },
          props: {
            icon: true,
            dark: _this2.dark || !_this2.light,
            light: _this2.light
          },
          key: index,
          on: { click: _this2.select.bind(_this2, index) }
        }, [_this2.$createElement(__WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */], _this2.icon)]);
      });
    },
    restartTimeout: function restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = null;

      var raf = requestAnimationFrame || setTimeout;
      raf(this.startTimeout);
    },
    init: function init() {
      this.inputValue = this.value || 0;
    },
    next: function next() {
      this.reverse = false;
      this.inputValue = (this.inputValue + 1) % this.items.length;
    },
    prev: function prev() {
      this.reverse = true;
      this.inputValue = (this.inputValue + this.items.length - 1) % this.items.length;
    },
    select: function select(index) {
      this.reverse = index < this.inputValue;
      this.inputValue = index;
    },
    startTimeout: function startTimeout() {
      var _this3 = this;

      this.slideTimeout = setTimeout(function () {
        return _this3.next();
      }, this.interval > 0 ? this.interval : 6000);
    }
  },

  render: function render(h) {
    return h('div', {
      staticClass: 'carousel',
      directives: [{
        name: 'touch',
        value: {
          left: this.next,
          right: this.prev
        }
      }]
    }, [this.genIcon('left', this.leftControlIcon, this.prev), this.genIcon('right', this.rightControlIcon, this.next), this.genControls(), this.$slots.default]);
  }
});
'filehash DfCu3mUhcH3yCh59Ep0AcSZQUUU=';

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-carousel-item',

  data: function data() {
    return {
      active: false,
      reverse: false
    };
  },


  props: {
    src: {
      type: String,
      required: true
    },

    transition: {
      type: String,
      default: 'tab-transition'
    },

    reverseTransition: {
      type: String,
      default: 'tab-reverse-transition'
    }
  },

  computed: {
    computedTransition: function computedTransition() {
      return this.reverse ? this.reverseTransition : this.transition;
    },
    styles: function styles() {
      return {
        backgroundImage: 'url(' + this.src + ')'
      };
    }
  },

  methods: {
    open: function open(id, reverse) {
      this.active = this._uid === id;
      this.reverse = reverse;
    }
  },

  render: function render(h) {
    var item = h('div', {
      class: {
        'carousel__item': true,
        'reverse': this.reverse
      },
      style: this.styles,
      on: this.$listeners,
      directives: [{
        name: 'show',
        value: this.active
      }]
    }, [this.$slots.default]);

    return h('transition', { props: { name: this.computedTransition } }, [item]);
  }
});
'filehash GVb08NjZlmm9V76JKBg1g5MxOu0=';

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)
__webpack_require__(91)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VCheckbox/VCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-716c85b8", Component.options)
  } else {
    hotAPI.reload("data-v-716c85b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_selectable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_ripple__ = __webpack_require__(7);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-checkbox',

  components: {
    VFadeTransition: __WEBPACK_IMPORTED_MODULE_1__transitions__["b" /* VFadeTransition */],
    VIcon: __WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */]
  },

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_3__directives_ripple__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_selectable__["a" /* default */]],

  data: function data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },


  props: {
    indeterminate: Boolean
  },

  computed: {
    classes: function classes() {
      return this.addColorClassChecks({
        'checkbox': true,
        'input-group--selection-controls': true,
        'input-group--active': this.isActive
      });
    },
    icon: function icon() {
      if (this.inputIndeterminate) {
        return 'indeterminate_check_box';
      } else if (this.isActive) {
        return 'check_box';
      } else {
        return 'check_box_outline_blank';
      }
    }
  },

  methods: {
    groupFocus: function groupFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    groupBlur: function groupBlur(e) {
      this.focused = false;
      this.tabFocused = false;
      this.$emit('blur', this.inputValue);
    }
  },

  render: function render(h) {
    var transition = h('v-fade-transition', [h('v-icon', {
      'class': {
        'icon--checkbox': this.icon === 'check_box'
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    var data = {
      attrs: {
        tabindex: this.disabled ? -1 : this.internalTabIndex || this.tabindex,
        role: 'checkbox',
        'aria-checked': this.inputIndeterminate && 'mixed' || this.isActive && 'true' || 'false',
        'aria-label': this.label
      }
    };

    return this.genInputGroup([transition, ripple], data);
  }
});
'filehash GvPrZ8augstYpij6of4fWLCGBSE=';

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  enter: function enter(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Get height that is to be scrolled
    el.style.overflow = 'hidden';
    el.style.height = null;
    el.style.display = 'block';
    var height = el.clientHeight + 'px';
    el.style.height = 0;
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = height;
    }, 50);
  },
  afterEnter: function afterEnter(el) {
    el.style.height = 'auto';
    el.style.overflow = null;
  },
  leave: function leave(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Set height before we transition to 0
    el.style.overflow = 'hidden';
    el.style.height = el.clientHeight + 'px';
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = 0;
    }, 50);
  }
});
'filehash vFtFxwdIjTOmWfzO6v7/lyjWBUQ=';

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      errorBucket: [],
      hasFocused: false,
      hasInput: false,
      shouldValidate: false,
      valid: false
    };
  },


  props: {
    error: {
      type: Boolean,
      default: true
    },
    errorMessages: {
      type: [String, Array],
      default: function _default() {
        return [];
      }
    },
    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    validateOnBlur: Boolean
  },

  computed: {
    validations: function validations() {
      if (!Array.isArray(this.errorMessages)) {
        return [this.errorMessages];
      } else if (this.errorMessages.length > 0) {
        return this.errorMessages;
      } else if (this.shouldValidate) {
        return this.errorBucket;
      } else {
        return [];
      }
    },
    hasError: function hasError() {
      return this.validations.length > 0 || this.errorMessages.length > 0;
    }
  },

  watch: {
    rules: {
      handler: function handler(newVal, oldVal) {
        // TODO: This handler seems to trigger when input changes, even though
        // rules array stays the same? Solved it like this for now
        if (newVal.length === oldVal.length) return;

        this.validate();
      },

      deep: true
    },
    inputValue: function inputValue(val) {
      // If it's the first time we're setting input,
      // mark it with hasInput
      if (!!val && !this.hasInput) this.hasInput = true;

      if (this.hasInput && !this.validateOnBlur) this.shouldValidate = true;
    },
    focused: function focused(val) {
      // If we're not focused, and it's the first time
      // we're defocusing, set shouldValidate to true
      if (!val && !this.hasFocused) {
        this.hasFocused = true;
        this.shouldValidate = true;

        this.$emit('update:error', this.errorBucket.length > 0);
      }
    },
    hasError: function hasError(val) {
      if (this.shouldValidate) {
        this.$emit('update:error', val);
      }
    }
  },

  mounted: function mounted() {
    this.validate();
  },


  methods: {
    reset: function reset() {
      var _this = this;

      // TODO: Do this another way!
      // This is so that we can reset all types of inputs
      this.$emit('input', this.multiple ? [] : null);
      this.$emit('change', null);

      this.$nextTick(function () {
        _this.shouldValidate = false;
        _this.hasFocused = false;
      });
    },
    validate: function validate() {
      var _this2 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var value = arguments[1];

      if (force) this.shouldValidate = true;

      this.errorBucket = [];

      this.rules.forEach(function (rule) {
        var valid = typeof rule === 'function' ? rule(typeof value !== 'undefined' ? value : _this2.inputValue) : rule;

        if (valid !== true) {
          _this2.errorBucket.push(valid);
        }
      });

      this.valid = this.errorBucket.length === 0;

      return this.valid;
    }
  }
});
'filehash 3rPEDaVqlKH9Hzs9ascnlbFOMYg=';

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VChip__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VChip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VChip__);


__WEBPACK_IMPORTED_MODULE_0__VChip___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VChip___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VChip___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VChip___default.a);
'filehash aGVQnZH/m6pgJAFcHcy6LJx5Tws=';

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VChip/VChip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-203c1e76", Component.options)
  } else {
    hotAPI.reload("data-v-203c1e76", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-chip',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    close: Boolean,
    label: Boolean,
    outline: Boolean,
    small: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'chip': true,
        'chip--label': this.label,
        'chip--outline': this.outline,
        'chip--small': this.small,
        'chip--removable': this.close
      };
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [this.$slots.default];
    var data = {
      'class': this.classes,
      attrs: { tabindex: -1 },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    };

    if (this.close) {
      children.push(h('a', {
        'class': 'chip__close',
        domProps: { href: 'javascript:;' },
        on: {
          click: function click(e) {
            e.stopPropagation();

            _this.$emit('input', false);
          }
        }
      }, [h('v-icon', { props: { right: true } }, 'cancel')]));
    }

    return h('span', data, children);
  }
});
'filehash hbmWKlXafXYHo4q0B32Ey6M6y64=';

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDataTable__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDataTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VDataTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VEditDialog__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VEditDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__VEditDialog__);





__WEBPACK_IMPORTED_MODULE_1__VDataTable___default.a.install = function install(Vue) {
  var VTableOverflow = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('table__overflow');

  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VDataTable___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VDataTable___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__VEditDialog___default.a.name, __WEBPACK_IMPORTED_MODULE_2__VEditDialog___default.a);
  Vue.component('v-table-overflow', VTableOverflow);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VDataTable___default.a);
'filehash WlFtGNCRaVP9qqojOA1abtFmYoc=';

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)
__webpack_require__(102)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VDataTable/VDataTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b5290a0", Component.options)
  } else {
    hotAPI.reload("data-v-3b5290a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VProgressLinear__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VSelect__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_head__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_body__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_foot__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_progress__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_helpers__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };















/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-data-table',

  components: {
    VBtn: __WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */],
    VIcon: __WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */],
    VProgressLinear: __WEBPACK_IMPORTED_MODULE_2__VProgressLinear__["a" /* default */],
    VSelect: __WEBPACK_IMPORTED_MODULE_3__VSelect__["a" /* default */],
    // Importing does not work properly
    'v-table-overflow': Object(__WEBPACK_IMPORTED_MODULE_10__util_helpers__["d" /* createSimpleFunctional */])('table__overflow')
  },

  data: function data() {
    return {
      all: false,
      searchLength: 0,
      defaultPagination: {
        page: 1,
        rowsPerPage: 5,
        descending: false,
        totalItems: 0
      }
    };
  },


  mixins: [__WEBPACK_IMPORTED_MODULE_6__mixins_head__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_foot__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__mixins_progress__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_themeable__["a" /* default */]],

  props: {
    headers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    headerText: {
      type: String,
      default: 'text'
    },
    hideActions: Boolean,
    noResultsText: {
      type: String,
      default: 'No matching records found'
    },
    rowsPerPageItems: {
      type: Array,
      default: function _default() {
        return [5, 10, 25, { text: 'All', value: -1 }];
      }
    },
    rowsPerPageText: {
      type: String,
      default: 'Rows per page:'
    },
    selectAll: [Boolean, String],
    search: {
      required: false
    },
    filter: {
      type: Function,
      default: function _default(val, search) {
        return val !== null && ['undefined', 'boolean'].indexOf(typeof val === 'undefined' ? 'undefined' : _typeof(val)) === -1 && val.toString().toLowerCase().indexOf(search) !== -1;
      }
    },
    customFilter: {
      type: Function,
      default: function _default(items, search, filter) {
        search = search.toString().toLowerCase();
        return items.filter(function (i) {
          return Object.keys(i).some(function (j) {
            return filter(i[j], search);
          });
        });
      }
    },
    customSort: {
      type: Function,
      default: function _default(items, index, isDescending) {
        if (index === null) return items;

        return items.sort(function (a, b) {
          var sortA = Object(__WEBPACK_IMPORTED_MODULE_10__util_helpers__["g" /* getObjectValueByPath */])(a, index);
          var sortB = Object(__WEBPACK_IMPORTED_MODULE_10__util_helpers__["g" /* getObjectValueByPath */])(b, index);

          if (isDescending) {
            var _ref = [sortB, sortA];
            sortA = _ref[0];
            sortB = _ref[1];
          }

          // Check if both are numbers
          if (!isNaN(sortA) && !isNaN(sortB)) {
            return sortA - sortB;
          }

          // Check if both cannot be evaluated
          if (sortA === null && sortB === null) {
            return 0;
          }

          var _map = [sortA, sortB].map(function (s) {
            return (s || '').toString().toLocaleLowerCase();
          });

          var _map2 = _slicedToArray(_map, 2);

          sortA = _map2[0];
          sortB = _map2[1];


          if (sortA > sortB) return 1;
          if (sortA < sortB) return -1;

          return 0;
        });
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    totalItems: {
      type: Number,
      default: null
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
    selectedKey: {
      type: String,
      default: 'id'
    },
    pagination: {
      type: Object,
      default: null
    }
  },

  computed: {
    classes: function classes() {
      return {
        'datatable table': true,
        'datatable--select-all': this.selectAll !== false,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    },
    computedPagination: function computedPagination() {
      return this.pagination || this.defaultPagination;
    },
    hasSelectAll: function hasSelectAll() {
      return this.selectAll !== undefined && this.selectAll !== false;
    },
    itemsLength: function itemsLength() {
      if (this.search) return this.searchLength;
      return this.totalItems || this.items.length;
    },
    indeterminate: function indeterminate() {
      return this.hasSelectAll && this.someItems && !this.everyItem;
    },
    everyItem: function everyItem() {
      var _this = this;

      return this.filteredItems.length && this.filteredItems.every(function (i) {
        return _this.isSelected(i);
      });
    },
    someItems: function someItems() {
      var _this2 = this;

      return this.filteredItems.some(function (i) {
        return _this2.isSelected(i);
      });
    },
    getPage: function getPage() {
      var rowsPerPage = this.computedPagination.rowsPerPage;


      return rowsPerPage === Object(rowsPerPage) ? rowsPerPage.value : rowsPerPage;
    },
    pageStart: function pageStart() {
      return this.getPage === -1 ? 0 : (this.computedPagination.page - 1) * this.getPage;
    },
    pageStop: function pageStop() {
      return this.getPage === -1 ? this.itemsLength : this.computedPagination.page * this.getPage;
    },
    filteredItems: function filteredItems() {
      if (this.totalItems) return this.items;

      var items = this.items.slice();
      var hasSearch = typeof this.search !== 'undefined' && this.search !== null;

      if (hasSearch) {
        items = this.customFilter(items, this.search, this.filter);
        this.searchLength = items.length;
      }

      items = this.customSort(items, this.computedPagination.sortBy, this.computedPagination.descending);

      return this.hideActions && !this.pagination ? items : items.slice(this.pageStart, this.pageStop);
    },
    selected: function selected() {
      var _this3 = this;

      var selected = {};
      this.value.forEach(function (i) {
        return selected[i[_this3.selectedKey]] = true;
      });
      return selected;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      if (val) this.all = true;
    },
    someItems: function someItems(val) {
      if (!val) this.all = false;
    },
    search: function search() {
      this.updatePagination({ page: 1 });
    },
    everyItem: function everyItem(val) {
      if (val) this.all = true;
    }
  },

  methods: {
    updatePagination: function updatePagination(val) {
      var pagination = this.pagination || this.defaultPagination;
      var updatedPagination = Object.assign({}, pagination, val);

      if (this.pagination) {
        this.$emit('update:pagination', updatedPagination);
      } else {
        this.defaultPagination = updatedPagination;
      }
    },
    isSelected: function isSelected(item) {
      return this.selected[item[this.selectedKey]];
    },
    sort: function sort(index) {
      var _computedPagination = this.computedPagination,
          sortBy = _computedPagination.sortBy,
          descending = _computedPagination.descending;

      if (sortBy === null) {
        this.updatePagination({ sortBy: index, descending: false });
      } else if (sortBy === index && !descending) {
        this.updatePagination({ descending: true });
      } else if (sortBy !== index) {
        this.updatePagination({ sortBy: index, descending: false });
      } else {
        this.updatePagination({ sortBy: null, descending: null });
      }
    },
    needsTR: function needsTR(row) {
      return row.length && row.find(function (c) {
        return c.tag === 'td';
      });
    },
    genTR: function genTR(children) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.$createElement('tr', data, children);
    },
    toggle: function toggle(value) {
      var _this4 = this;

      var selected = Object.assign({}, this.selected);
      this.filteredItems.forEach(function (i) {
        return selected[i[_this4.selectedKey]] = value;
      });

      this.$emit('input', this.items.filter(function (i) {
        return selected[i[_this4.selectedKey]];
      }));
    }
  },

  created: function created() {
    var firstSortable = this.headers.find(function (h) {
      return !('sortable' in h) || h.sortable;
    });

    this.defaultPagination.sortBy = firstSortable ? firstSortable.value : null;

    if (!this.rowsPerPageItems.length) {
      console.warn('The prop \'rows-per-page-items\' in v-data-table can not be empty.');
    } else {
      this.defaultPagination.rowsPerPage = this.rowsPerPageItems[0];
    }

    this.updatePagination(Object.assign({}, this.defaultPagination, this.pagination));
  },
  render: function render(h) {
    return h('v-table-overflow', {}, [h('table', {
      'class': this.classes
    }, [this.genTHead(), this.genTProgress(), this.genTBody(), this.genTFoot()])]);
  }
});
'filehash Ipm/9voxQd8KRcK+LFNPxg78kTI=';

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(106),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VProgressLinear/VProgressLinear.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24da0bfc", Component.options)
  } else {
    hotAPI.reload("data-v-24da0bfc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-progress-linear',

  components: {
    VFadeTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["b" /* VFadeTransition */],
    VSlideXTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["c" /* VSlideXTransition */]
  },

  props: {
    active: {
      type: Boolean,
      default: true
    },
    buffer: Boolean,
    bufferValue: Number,
    error: Boolean,
    height: {
      type: [Number, String],
      default: 7
    },
    indeterminate: Boolean,
    info: Boolean,
    secondary: Boolean,
    success: Boolean,
    query: Boolean,
    warning: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    colorFront: {
      type: String,
      default: null
    },
    colorBack: {
      type: String,
      default: null
    }
  },

  computed: {
    classes: function classes() {
      return {
        'progress-linear--query': this.query,
        'progress-linear--secondary': this.secondary,
        'progress-linear--success': this.success,
        'progress-linear--info': this.info,
        'progress-linear--warning': this.warning,
        'progress-linear--error': this.error
      };
    },
    styles: function styles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (this.buffer) {
        styles.width = this.bufferValue + '%';
      }

      return styles;
    },
    bufferStyles: function bufferStyles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      return styles;
    }
  },

  methods: {
    genDeterminate: function genDeterminate(h) {
      return h('div', {
        ref: 'front',
        class: ['progress-linear__bar__determinate', this.colorFront],
        style: { width: this.value + '%' }
      });
    },
    genBar: function genBar(h, name) {
      return h('div', {
        class: ['progress-linear__bar__indeterminate', name, this.colorFront]
      });
    },
    genIndeterminate: function genIndeterminate(h) {
      return h('div', {
        ref: 'front',
        class: {
          'progress-linear__bar__indeterminate': true,
          'progress-linear__bar__indeterminate--active': this.active
        }
      }, [this.genBar(h, 'long'), this.genBar(h, 'short')]);
    }
  },

  render: function render(h) {
    var fade = h('v-fade-transition', [this.indeterminate && this.genIndeterminate(h)]);
    var slide = h('v-slide-x-transition', [!this.indeterminate && this.genDeterminate(h)]);

    var bar = h('div', { class: ['progress-linear__bar', this.colorBack], style: this.styles }, [fade, slide]);

    return h('div', {
      class: ['progress-linear', this.classes],
      style: { height: this.height + 'px' },
      on: this.$listeners
    }, [bar]);
  }
});
'filehash LXeLToR0PipKcTnIyy4eZ3OePV0=';

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)
__webpack_require__(109)
__webpack_require__(110)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSelect/VSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b880796", Component.options)
  } else {
    hotAPI.reload("data-v-5b880796", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VCheckbox__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VList__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VMenu__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_filterable__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_input__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_autocomplete__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_generators__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_click_outside__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
















/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-select',

  inheritAttrs: false,

  components: {
    VCard: __WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */],
    VCheckbox: __WEBPACK_IMPORTED_MODULE_2__VCheckbox__["a" /* default */],
    VIcon: __WEBPACK_IMPORTED_MODULE_3__VIcon__["a" /* default */],
    VList: __WEBPACK_IMPORTED_MODULE_4__VList__["a" /* VList */],
    VListTile: __WEBPACK_IMPORTED_MODULE_4__VList__["b" /* VListTile */],
    VListTileAction: __WEBPACK_IMPORTED_MODULE_4__VList__["c" /* VListTileAction */],
    VListTileContent: __WEBPACK_IMPORTED_MODULE_4__VList__["d" /* VListTileContent */],
    VListTileTitle: __WEBPACK_IMPORTED_MODULE_4__VList__["e" /* VListTileTitle */],
    VMenu: __WEBPACK_IMPORTED_MODULE_5__VMenu__["a" /* default */]
  },

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_10__directives_click_outside__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_8__mixins_autocomplete__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__mixins_generators__["a" /* default */]],

  data: function data() {
    return {
      content: {},
      hasFocused: false,
      inputValue: this.multiple && !this.value ? [] : this.value,
      isBooted: false,
      lastItem: 20,
      lazySearch: null,
      isActive: false,
      shouldBreak: false
    };
  },


  props: {
    appendIcon: {
      type: String,
      default: 'arrow_drop_down'
    },
    auto: Boolean,
    autocomplete: Boolean,
    bottom: Boolean,
    chips: Boolean,
    close: Boolean,
    debounce: {
      type: Number,
      default: 200
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    itemDisabled: {
      type: String,
      default: 'disabled'
    },
    maxHeight: {
      type: [Number, String],
      default: 300
    },
    minWidth: {
      type: [Boolean, Number, String],
      default: false
    },
    multiple: Boolean,
    multiLine: Boolean,
    offset: Boolean,
    solo: Boolean,
    searchInput: {
      default: null
    },
    singleLine: Boolean,
    top: Boolean,
    returnObject: Boolean,
    overflow: Boolean,
    segmented: Boolean,
    editable: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field input-group--select': true,
        'input-group--auto': this.auto,
        'input-group--overflow': this.overflow,
        'input-group--segmented': this.segmented,
        'input-group--editable': this.editable,
        'input-group--autocomplete': this.isAutocomplete,
        'input-group--single-line': this.singleLine || this.isDropdown,
        'input-group--multi-line': this.multiLine,
        'input-group--chips': this.chips,
        'input-group--solo': this.solo,
        'input-group--multiple': this.multiple
      };
    },
    computedContentClass: function computedContentClass() {
      var children = ['menu__content--select', this.auto ? 'menu__content--auto' : '', this.isDropdown ? 'menu__content--dropdown' : ''];

      return children.join(' ');
    },
    computedItems: function computedItems() {
      return this.items;
    },
    filteredItems: function filteredItems() {
      var items = this.filterSearch();

      return !this.auto ? items.slice(0, this.lastItem) : items;
    },
    isAutocomplete: function isAutocomplete() {
      return this.autocomplete || this.editable;
    },
    isDirty: function isDirty() {
      return this.selectedItems.length;
    },
    isDropdown: function isDropdown() {
      return this.segmented || this.overflow || this.editable || this.solo;
    },

    searchValue: {
      get: function get() {
        return this.lazySearch;
      },
      set: function set(val) {
        this.lazySearch = val;

        // Do not emit input changes if not booted
        val !== this.searchInput && this.isBooted && this.$emit('update:searchInput', val);
      }
    },
    selectedItem: function selectedItem() {
      var _this = this;

      if (this.multiple) return null;

      return this.selectedItems.find(function (i) {
        return _this.getValue(i) === _this.getValue(_this.inputValue);
      });
    },
    selectedItems: function selectedItems() {
      var _this2 = this;

      if (!this.multiple && (this.inputValue === null || typeof this.inputValue === 'undefined')) return [];

      return this.items.filter(function (i) {
        if (!_this2.multiple) {
          return _this2.getValue(i) === _this2.getValue(_this2.inputValue);
        } else {
          // Always return Boolean
          return _this2.inputValue.find(function (j) {
            return _this2.getValue(j) === _this2.getValue(i);
          }) !== undefined;
        }
      });
    }
  },

  watch: {
    inputValue: function inputValue(val) {
      // Async calls may not have data ready at boot
      if (!this.multiple && this.isAutocomplete && this.selectedItems.length) this.searchValue = this.getText(this.selectedItems[0]);

      this.$emit('input', val);
    },
    value: function value(val) {
      this.inputValue = val;
      this.validate();

      if (this.isAutocomplete) {
        this.$nextTick(this.$refs.menu.updateDimensions);
      }
    },
    multiple: function multiple(val) {
      this.inputValue = val ? [] : null;
    },
    isActive: function isActive(val) {
      !val && this.isAutocomplete && (this.searchValue = this.getText(this.selectedItem));
      this.focused = val;
      this.isBooted = true;
      this.lastItem += !val ? 20 : 0;
    },
    isBooted: function isBooted() {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.content) {
          _this3.content.addEventListener('scroll', _this3.onScroll, false);
        }
      });
    },
    items: function items() {
      var _this4 = this;

      if (this.focused && !this.isActive) this.isActive = true;
      this.$refs.menu.listIndex = -1;

      this.searchValue && this.$nextTick(function () {
        _this4.$refs.menu.listIndex = 0;
      });
    },
    searchValue: function searchValue(val) {
      var _this5 = this;

      // Wrap input to next line if overflowing
      if (this.$refs.input.scrollWidth > this.$refs.input.clientWidth) {
        this.shouldBreak = true;
        this.$nextTick(this.$refs.menu.updateDimensions);
      } else if (val === null) {
        this.shouldBreak = false;
      }

      // This could change externally
      // avoid accidental re-activation
      // when dealing with async items
      if (!this.isActive && this.computedItems.length && val !== null && val !== this.getText(this.selectedItem)) {
        this.isActive = true;
        this.focused = true;
      }
      this.$refs.menu.listIndex = null;

      this.$nextTick(function () {
        _this5.$refs.menu.listIndex = val ? 0 : -1;
      });
    }
  },

  mounted: function mounted() {
    var _this6 = this;

    this.$vuetify.load(function () {
      if (_this6._isDestroyed) return;

      _this6.content = _this6.$refs.menu.$refs.content;
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isBooted) {
      if (this.content) {
        this.content.removeEventListener('scroll', this.onScroll, false);
      }
    }
  },


  methods: {
    blur: function blur(e) {
      var _this7 = this;

      this.$nextTick(function () {
        _this7.isActive = false;
        _this7.focused = false;
        _this7.$emit('blur', _this7.inputValue);
      });
    },
    focus: function focus(e) {
      this.focused = true;
      if (this.$refs.input && this.isAutocomplete) {
        this.multiple && this.$refs.input.focus() || this.$refs.input.setSelectionRange(0, (this.searchValue || '').toString().length);
      }

      this.$emit('focus', e);
    },
    genLabel: function genLabel() {
      var singleLine = this.singleLine || this.isDropdown;
      if (singleLine && this.isDirty || singleLine && this.focused && this.searchValue) return null;

      var data = {};

      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.$slots.label || this.label);
    },
    getPropertyFromItem: function getPropertyFromItem(item, field) {
      if (item !== Object(item)) return item;

      var value = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["g" /* getObjectValueByPath */])(item, field);

      return typeof value === 'undefined' ? item : value;
    },
    getText: function getText(item) {
      return this.getPropertyFromItem(item, this.itemText);
    },
    getValue: function getValue(item) {
      return this.getPropertyFromItem(item, this.itemValue);
    },
    onAutocompleteFocus: function onAutocompleteFocus() {
      this.focus();
    },
    onScroll: function onScroll() {
      var _this8 = this;

      if (!this.isActive) {
        requestAnimationFrame(function () {
          return _this8.content.scrollTop = 0;
        });
      } else {
        var showMoreItems = this.content.scrollHeight - (this.content.scrollTop + this.content.clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },
    selectItem: function selectItem(item) {
      var _this9 = this;

      if (!this.multiple) {
        this.inputValue = this.returnObject ? item : this.getValue(item);
      } else {
        var inputValue = this.inputValue.slice();
        var i = this.inputValue.findIndex(function (i) {
          return _this9.getValue(i) === _this9.getValue(item);
        });

        i !== -1 && inputValue.splice(i, 1) || inputValue.push(item);
        this.inputValue = inputValue.map(function (i) {
          return _this9.returnObject ? i : _this9.getValue(i);
        });
      }

      if (this.isAutocomplete && this.multiple) {
        this.$nextTick(function () {
          _this9.$refs.input && _this9.$refs.input.focus();
        });
      } else if (!this.multiple) {
        this.blur();
      }

      if (this.multiple) this.searchValue = null;

      this.$emit('change', this.inputValue);
    }
  },

  render: function render(h) {
    var _this10 = this;

    var listeners = Object.assign({}, this.$listeners);
    delete listeners.input;

    return this.genInputGroup([this.genSelectionsAndSearch(), this.genMenu()], {
      attrs: {
        tabindex: this.isAutocomplete || this.disabled ? -1 : 0
      },
      directives: [{
        name: 'click-outside',
        value: function value() {
          _this10.isActive = false;
          _this10.$emit('change', _this10.inputValue);
        }
      }],
      on: _extends({}, listeners, {
        focus: !this.isAutocomplete ? this.focus : this.onAutocompleteFocus,
        blur: function blur() {
          if (_this10.isActive) return;

          _this10.blur();
        },
        click: function click(e) {
          if (!_this10.isActive) _this10.isActive = true;
        },
        keydown: this.onKeyDown // Located in mixins/autocomplete.js
      })
    });
  }
});
'filehash dZXn8qao22QNT+hRoHR2TZv1c04=';

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VList/VList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5afc0cc", Component.options)
  } else {
    hotAPI.reload("data-v-e5afc0cc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-list',

  provide: function provide() {
    return {
      listClick: this.listClick,
      listClose: this.listClose
    };
  },


  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      uid: null,
      groups: []
    };
  },


  props: {
    dense: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list': true,
        'list--two-line': this.twoLine,
        'list--dense': this.dense,
        'list--three-line': this.threeLine,
        'list--subheader': this.subheader,
        'theme--dark dark--bg': this.dark,
        'theme--light light--bg': this.light
      };
    }
  },

  watch: {
    uid: function uid() {
      var _this = this;

      this.$children.filter(function (i) {
        return i.$options._componentTag === 'v-list-group';
      }).forEach(function (i) {
        return i.toggle(_this.uid);
      });
    }
  },

  methods: {
    listClick: function listClick(uid, force) {
      if (force) {
        this.uid = uid;
      } else {
        this.uid = this.uid === uid ? null : uid;
      }
    },
    listClose: function listClose(uid) {
      if (this.uid === uid) {
        this.uid = null;
      }
    }
  },

  render: function render(h) {
    var data = {
      'class': this.classes,
      attrs: { 'data-uid': this._uid }
    };

    return h('ul', data, [this.$slots.default]);
  }
});
'filehash o8JZYqQt9d4yX4iZQyewSf28jtE=';

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-list-group',

  inject: ['listClick', 'listClose'],

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      isBooted: this.value
    };
  },


  props: {
    group: String,
    lazy: Boolean,
    noAction: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list--group__header': true,
        'list--group__header--active': this.isActive,
        'list--group__header--no-action': this.noAction
      };
    }
  },

  watch: {
    isActive: function isActive() {
      this.isBooted = true;

      if (!this.isActive) {
        this.listClose(this._uid);
      }
    },
    $route: function $route(to) {
      var isActive = this.matchRoute(to.path);

      if (this.group) {
        if (isActive && this.isActive !== isActive) {
          this.listClick(this._uid);
        }
        this.isActive = isActive;
      }
    }
  },

  mounted: function mounted() {
    if (this.group) {
      this.isActive = this.matchRoute(this.$route.path);
    }

    if (this.isActive) {
      this.listClick(this._uid);
    }
  },


  methods: {
    click: function click() {
      var _this = this;

      if (!this.$refs.item.querySelector('.list__tile--disabled')) {
        requestAnimationFrame(function () {
          return _this.listClick(_this._uid);
        });
      }
    },
    toggle: function toggle(uid) {
      this.isActive = this._uid === uid;
    },
    matchRoute: function matchRoute(to) {
      if (!this.group) return false;
      return to.match(this.group) !== null;
    }
  },

  render: function render(h) {
    var group = h('ul', {
      'class': 'list list--group',
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      ref: 'group'
    }, [this.lazy && !this.isBooted ? null : this.$slots.default]);

    var item = h('div', {
      'class': this.classes,
      on: Object.assign({}, { click: this.click }, this.$listeners),
      ref: 'item'
    }, [this.$slots.item]);

    var transition = h(__WEBPACK_IMPORTED_MODULE_0__transitions__["a" /* VExpandTransition */], [group]);

    return h('div', { 'class': 'list--group__container' }, [item, transition]);
  }
});
'filehash Md3P9R/OysQmyKBlIEksLx8pTts=';

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ripple__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-list-tile',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_2__directives_ripple__["a" /* default */]
  },

  inheritAttrs: false,

  props: {
    activeClass: {
      type: String,
      default: 'list__tile--active'
    },
    avatar: Boolean,
    tag: String
  },

  computed: {
    classes: function classes() {
      return _defineProperty({
        'list__tile': true,
        'list__tile--link': this.isLink,
        'list__tile--avatar': this.avatar,
        'list__tile--disabled': this.disabled
      }, this.activeClass, this.isActive);
    },
    isLink: function isLink() {
      return this.href || this.to || this.$listeners && (this.$listeners.click || this.$listeners['!click']);
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    var newTag = tag;

    data.attrs = Object.assign({}, data.attrs, this.$attrs);

    if (!this.href && !this.to && !this.tag) newTag = 'div';

    return h('li', {
      attrs: {
        disabled: this.disabled
      },
      on: _extends({}, this.$listeners)
    }, [h(newTag, data, this.$slots.default)]);
  }
});
'filehash xGUa7EKUtwsNzoB+mH1PNRM1jjU=';

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  name: 'v-list-tile-action',

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = data.staticClass ? 'list__tile__action ' + (data.staticClass || '') : 'list__tile__action';
    if ((children || []).length > 1) data.staticClass += ' list__tile__action--stack';

    return h('div', data, children);
  }
});
'filehash K1zOT+HiFte/Fpr81wYG9E4UBiA=';

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VMenu/VMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1973948", Component.options)
  } else {
    hotAPI.reload("data-v-a1973948", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_detachable__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_activator__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_generators__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_position__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_utils__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_resize__ = __webpack_require__(8);












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-menu',

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_activator__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_generators__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_position__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__["a" /* default */],
    Resize: __WEBPACK_IMPORTED_MODULE_8__directives_resize__["a" /* default */]
  },

  data: function data() {
    return {
      autoIndex: null,
      defaultOffset: 8,
      dimensions: {
        activator: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        content: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        list: null,
        selected: null
      },
      direction: { vert: 'bottom', horiz: 'right' },
      isContentActive: false,
      isBooted: false,
      maxHeightAutoDefault: '200px',
      resizeTimeout: {},
      startIndex: 3,
      stopIndex: 0,
      tileLength: 0,
      window: {},
      absoluteX: 0,
      absoluteY: 0,
      pageYOffset: 0,
      insideContent: false,
      hasJustFocused: false,
      focusedTimeout: {}
    };
  },


  props: {
    allowOverflow: Boolean,
    top: Boolean,
    left: Boolean,
    bottom: Boolean,
    right: Boolean,
    fullWidth: Boolean,
    auto: Boolean,
    offsetX: Boolean,
    offsetY: Boolean,
    disabled: Boolean,
    maxHeight: {
      default: 'auto'
    },
    nudgeTop: {
      type: Number,
      default: 0
    },
    nudgeBottom: {
      type: Number,
      default: 0
    },
    nudgeLeft: {
      type: Number,
      default: 0
    },
    nudgeRight: {
      type: Number,
      default: 0
    },
    nudgeWidth: {
      type: Number,
      default: 0
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: {
      type: Boolean,
      default: false
    },
    lazy: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    activator: {
      default: null
    },
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: String,
      default: 'menu-transition'
    },
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    positionAbsolutely: {
      type: Boolean,
      default: false
    },
    maxWidth: [Number, String],
    minWidth: [Number, String],
    zIndex: {
      type: [Number, String],
      default: 6
    }
  },

  computed: {
    calculatedMinWidth: function calculatedMinWidth() {
      var minWidth = parseInt(this.minWidth) || this.dimensions.activator.width + this.nudgeWidth + (this.auto ? 16 : 0);

      if (!this.maxWidth) return minWidth;

      var maxWidth = parseInt(this.maxWidth);

      return maxWidth < minWidth ? maxWidth : minWidth;
    },
    styles: function styles() {
      return {
        maxHeight: this.auto ? '200px' : isNaN(this.maxHeight) ? this.maxHeight : this.maxHeight + 'px',
        minWidth: this.calculatedMinWidth + 'px',
        maxWidth: parseInt(this.maxWidth) + 'px',
        top: this.calcYOverflow(this.calcTop()) + 'px',
        left: this.calcXOverflow(this.calcLeft()) + 'px',
        transformOrigin: this.origin,
        zIndex: this.zIndex
      };
    },
    hasActivator: function hasActivator() {
      return !!this.$slots.activator || this.activator;
    }
  },

  watch: {
    activator: function activator(newActivator, oldActivator) {
      this.removeActivatorEvents(oldActivator);
      this.addActivatorEvents(newActivator);
    },
    disabled: function disabled(val) {
      val && this.deactivate();
    },
    isContentActive: function isContentActive(val) {
      this.hasJustFocused = val;
    },
    isActive: function isActive(val) {
      if (this.disabled) return;

      val && this.activate() || this.deactivate();
    },
    windowResizeHandler: function windowResizeHandler() {
      this.isBooted = false;
    }
  },

  methods: {
    activate: function activate() {
      if (typeof window === 'undefined') return;
      this.pageYOffset = this.getOffsetTop();
      this.isBooted = true;
      this.insideContent = true;
      this.getTiles();
      this.updateDimensions();
      requestAnimationFrame(this.startTransition);
    },
    deactivate: function deactivate() {
      this.isContentActive = false;
    },
    onResize: function onResize() {
      clearTimeout(this.resizeTimeout);
      if (!this.isActive) return;
      this.resizeTimeout = setTimeout(this.updateDimensions, 200);
    },
    getOffsetTop: function getOffsetTop() {
      if (typeof window === 'undefined') return 0;

      return window.pageYOffset || document.documentElement.scrollTop;
    },
    startTransition: function startTransition() {
      var _this = this;

      requestAnimationFrame(function () {
        return _this.isContentActive = true;
      });
      requestAnimationFrame(this.calculateScroll);
    }
  },

  render: function render(h) {
    var _this2 = this;

    var directives = !this.openOnHover ? [{
      name: 'click-outside',
      value: function value() {
        return _this2.closeOnClick;
      }
    }] : [];

    directives.push({
      name: 'resize',
      value: this.onResize
    });

    var data = {
      staticClass: 'menu',
      class: {
        'menu--disabled': this.disabled
      },
      style: {
        display: this.fullWidth ? 'block' : 'inline-block'
      },
      directives: directives,
      on: {
        keydown: function keydown(e) {
          if (e.keyCode === 27) _this2.isActive = false;else _this2.changeListIndex(e);
        }
      }
    };

    return h('div', data, [this.genActivator(), this.genTransition()]);
  }
});
'filehash 1eXlSDtmQMuSbaYAkTAO7E6rZXo=';

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    getActivator: function getActivator() {
      if (this.activator) return this.activator;
      return this.$refs.activator.children ? this.$refs.activator.children[0] : this.$refs.activator;
    },
    activatorClickHandler: function activatorClickHandler(e) {
      if (this.disabled) return;else if (this.openOnClick && !this.isActive) {
        this.isActive = true;
        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY;
      } else if (this.closeOnClick && this.isActive) this.isActive = false;
    },
    mouseEnterHandler: function mouseEnterHandler(e) {
      clearTimeout(this.focusedTimeout);

      if (this.disabled || this.hasJustFocused) return;
      this.hasJustFocused = true;
      this.isActive = true;
    },
    mouseLeaveHandler: function mouseLeaveHandler(e) {
      var _this = this;

      clearTimeout(this.focusedTimeout);

      if (this.disabled || this.$refs.content.contains(e.relatedTarget)) return;

      this.focusedTimeout = setTimeout(function () {
        return _this.isActive = false;
      }, 500);
    },
    addActivatorEvents: function addActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.addEventListener('click', this.activatorClickHandler);
    },
    removeActivatorEvents: function removeActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.removeEventListener('click', this.activatorClickHandler);
    }
  }
});
'filehash e0KmNttrE1/3PjhbZA1Z8ZJ6GIU=';

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genActivator: function genActivator() {
      if (!this.$slots.activator) return null;

      var options = {
        'class': {
          'menu__activator--active': this.hasJustFocused || this.isActive
        },
        staticClass: 'menu__activator',
        ref: 'activator',
        on: {}
      };

      if (this.openOnHover) {
        options.on['mouseenter'] = this.mouseEnterHandler;
        options.on['mouseleave'] = this.mouseLeaveHandler;
      } else if (this.openOnClick) {
        options.on['click'] = this.activatorClickHandler;
      }

      return this.$createElement('div', options, this.$slots.activator);
    },
    genTransition: function genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genContent()]);
    },
    genContent: function genContent() {
      var _this = this;

      var booted = this.lazy && this.isBooted || !this.lazy;
      return this.$createElement('div', {
        'class': ('menu__content ' + this.contentClass).trim(),
        ref: 'content',
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (e.target.getAttribute('disabled')) return;
            if (_this.closeOnContentClick) _this.isActive = false;
          },
          mouseenter: this.mouseEnterHandler,
          mouseleave: function mouseleave(e) {
            _this.openOnHover && _this.mouseLeaveHandler(e);
          }
        }
      }, [booted ? this.$slots.default : null]);
    }
  }
});
'filehash qDhWyJq4KhH6svGHfuq1VWrPdrw=';

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Revisit this
    calculateScroll: function calculateScroll() {
      if (this.selectedIndex === null) return;

      var scrollTop = 0;

      if (this.selectedIndex >= this.stopIndex) {
        scrollTop = this.$refs.content.scrollHeight;
      } else if (this.selectedIndex > this.startIndex) {
        scrollTop = this.selectedIndex * (this.defaultOffset * 6) - this.defaultOffset * 7;
      }

      this.$refs.content.scrollTop = scrollTop;
    },
    calcLeftAuto: function calcLeftAuto() {
      var a = this.dimensions.activator;

      // Off by 1 px here as well, (┛ಠ_ಠ)┛彡┻━┻
      return parseInt(a.left - this.defaultOffset * 2) + 1;
    },
    calcTopAuto: function calcTopAuto() {
      if (!this.hasActivator) return this.calcTop(true);

      var selectedIndex = Array.from(this.tiles).findIndex(function (n) {
        return n.classList.contains('list__tile--active');
      });

      if (selectedIndex === -1) {
        this.selectedIndex = null;

        return this.calcTop(true);
      }

      this.selectedIndex = selectedIndex;
      var actingIndex = selectedIndex;

      var offsetPadding = -(this.defaultOffset * 2);
      // #708 Stop index should vary by tile length
      this.stopIndex = this.tiles.length > 4 ? this.tiles.length - 4 : this.tiles.length;

      if (selectedIndex > this.startIndex && selectedIndex < this.stopIndex) {
        actingIndex = 2;
        offsetPadding = this.defaultOffset * 3;
      } else if (selectedIndex >= this.stopIndex) {
        offsetPadding = -this.defaultOffset;
        actingIndex = selectedIndex - this.stopIndex;
      }

      // Is always off by 1 pixel, send help
      offsetPadding--;

      return this.calcTop(true) + offsetPadding - actingIndex * (this.defaultOffset * 6);
    },
    calcLeft: function calcLeft() {
      if (this.auto) return this.calcLeftAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var left = this.left ? a.right - c.width : a.left;

      if (this.offsetX) left += this.left ? -a.width : a.width;
      if (this.nudgeLeft) left += this.nudgeLeft;
      if (this.nudgeRight) left -= this.nudgeRight;

      return left;
    },
    calcTop: function calcTop(force) {
      if (this.auto && !force) return this.calcTopAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var top = this.top ? a.bottom - c.height : a.top;

      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= this.nudgeTop;
      if (this.nudgeBottom) top += this.nudgeBottom;

      return top + this.pageYOffset;
    },
    calcXOverflow: function calcXOverflow(left) {
      var hasWindow = typeof window !== 'undefined';
      var innerWidth = hasWindow ? window.innerWidth : 0;
      var maxWidth = Math.max(this.dimensions.content.width, this.calculatedMinWidth, parseInt(this.maxWidth) || 0);
      var totalWidth = left + maxWidth;
      var availableWidth = totalWidth - innerWidth;

      if ((!this.left || this.right) && availableWidth > 0) {
        left = innerWidth - maxWidth - (innerWidth > 1024 ? 30 : 12) // Account for scrollbar
        ;
      } else if (this.left && left < 0) left = 12;

      return left;
    },
    calcYOverflow: function calcYOverflow(top) {
      var documentHeight = typeof window !== 'undefined' ? window.innerHeight || document.documentElement.clientHeight : 0;
      var toTop = this.pageYOffset + documentHeight;
      var contentHeight = this.dimensions.content.height;
      var totalHeight = top + contentHeight;

      // If overflowing bottom
      if (toTop < totalHeight && !this.allowOverflow) top = toTop - contentHeight - 12;
      // If overflowing top
      else if (top < this.pageYOffset && !this.allowOverflow) top = this.pageYOffset + 12;

      return top < 12 ? 12 : top;
    },
    sneakPeek: function sneakPeek(cb) {
      var _this = this;

      requestAnimationFrame(function () {
        var el = _this.$refs.content;
        var currentDisplay = el.style.display;

        el.style.display = 'inline-block';
        cb();
        el.style.display = currentDisplay;
      });
    },
    absolutePosition: function absolutePosition() {
      return {
        offsetTop: 0,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },
    updateDimensions: function updateDimensions() {
      var _this2 = this;

      this.sneakPeek(function () {
        _this2.dimensions = {
          activator: !_this2.hasActivator || _this2.positionAbsolutely ? _this2.absolutePosition() : _this2.measure(_this2.getActivator()),
          content: _this2.measure(_this2.$refs.content)
        };
      });
    }
  }
});
'filehash IzqPZizsKSojHdrp0Ai01am7hog=';

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    measure: function measure(el, selector) {
      var getParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      el = selector ? el.querySelector(selector) : el;

      if (!el) return null;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          top = _el$getBoundingClient.top,
          bottom = _el$getBoundingClient.bottom,
          left = _el$getBoundingClient.left,
          right = _el$getBoundingClient.right,
          height = _el$getBoundingClient.height,
          width = _el$getBoundingClient.width;

      return {
        offsetTop: el.offsetTop,
        scrollHeight: el.scrollHeight,
        top: top, bottom: bottom, left: left, right: right, height: height, width: width
      };
    }
  }
});
"filehash 8/FEVZW/ddCL1oDDemlUnIRshMM=";

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      listIndex: -1,
      isUsingKeys: false,
      tiles: []
    };
  },

  watch: {
    isActive: function isActive(val) {
      if (!val) this.listIndex = -1;
    },
    listIndex: function listIndex(next, prev) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (next in this.tiles) {
        this.tiles[next].classList.add('list__tile--highlighted');
        this.$refs.content.scrollTop = next * 48;
      }

      prev in this.tiles && this.tiles[prev].classList.remove('list__tile--highlighted');
    }
  },

  methods: {
    changeListIndex: function changeListIndex(e) {
      [40, 38, 13].includes(e.keyCode) && e.preventDefault();
      e.keyCode === 32 && !this.isActive && e.preventDefault();

      if ([27, 9].includes(e.keyCode)) return this.isActive = false;else if (!this.isActive && [13, 32].includes(e.keyCode)) {
        return this.isActive = true;
      }

      if (e.keyCode === 40 && this.listIndex < this.tiles.length - 1) {
        this.listIndex++;
      } else if (e.keyCode === 38 && this.listIndex > 0) {
        this.listIndex--;
      } else if (e.keyCode === 13 && this.listIndex !== -1) {
        this.tiles[this.listIndex].click();
      }

      if (this.listIndex === -1) this.setActiveListIndex();
    },
    getTiles: function getTiles() {
      this.tiles = this.$refs.content.querySelectorAll('.list__tile');
    },
    setActiveListIndex: function setActiveListIndex() {
      var _this = this;

      var tiles = Array.from(this.tiles || []);
      tiles.forEach(function (t, i) {
        if (t.classList.contains('list__tile--active')) {
          _this.listIndex = i;
          return;
        }
      });
    }
  }
});
'filehash FKW6aFY/sqdtzlhRdQzmolXlRQo=';

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    filter: {
      type: Function,
      default: function _default(item, queryText, itemText) {
        var hasValue = function hasValue(val) {
          return [undefined, null].includes(val);
        };

        var text = hasValue(itemText) ? '' : itemText;
        var query = hasValue(queryText) ? '' : queryText;

        return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
      }
    }
  },

  methods: {
    filterSearch: function filterSearch() {
      var _this = this;

      if (!this.isAutocomplete) return this.computedItems;

      return this.computedItems.filter(function (i) {
        return _this.filter(i, _this.searchValue, _this.getText(i));
      });
    },
    onKeyDown: function onKeyDown(e) {
      this.$refs.menu.changeListIndex(e);
    }
  }
});
'filehash wNnEQ04O2YvUNjbFljvvQrMZ8YU=';

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genMenu: function genMenu() {
      var _this = this;

      var offsetY = this.isAutocomplete || this.offset || this.isDropdown;
      var data = {
        ref: 'menu',
        props: {
          activator: this.$refs.activator,
          allowOverflow: this.isAutocomplete,
          openOnClick: false,
          auto: this.auto,
          closeOnClick: false,
          closeOnContentClick: !this.multiple,
          contentClass: this.computedContentClass,
          disabled: this.disabled,
          maxHeight: this.maxHeight,
          nudgeTop: this.isDropdown ? -12 : offsetY ? -2 : 0,
          nudgeRight: this.isDropdown ? 16 : 0,
          nudgeWidth: this.isDropdown ? 56 : 24,
          offsetY: offsetY,
          value: this.isActive && this.computedItems.length,
          zIndex: this.menuZIndex
        },
        on: { input: function input(val) {
            return _this.isActive = val;
          } }
      };

      this.minWidth && (data.props.minWidth = this.minWidth);

      return this.$createElement('v-menu', data, [this.genList()]);
    },
    genSelectionsAndSearch: function genSelectionsAndSearch() {
      var _this2 = this;

      var input = void 0;

      if (this.isAutocomplete) {
        input = this.$createElement('input', {
          'class': 'input-group--select__autocomplete',
          style: {
            flex: this.shouldBreak ? '1 0 100%' : null
          },
          attrs: _extends({}, this.$attrs, {
            tabindex: this.disabled ? -1 : 0
          }),
          domProps: { value: this.lazySearch },
          on: {
            focus: this.focus,
            blur: function blur() {
              if (_this2.isActive) return;

              _this2.blur();
            },
            input: function input(e) {
              return _this2.searchValue = e.target.value;
            }
          },
          ref: 'input',
          key: 'input'
        });
      }

      var selections = this.genSelections();

      input && selections.push(input);

      return this.$createElement('div', {
        'class': 'input-group__selections',
        style: { 'overflow': 'hidden' },
        ref: 'activator'
      }, [selections]);
    },
    genSelections: function genSelections() {
      var _this3 = this;

      if (this.isAutocomplete && !this.multiple) return [];

      var children = [];
      var chips = this.chips;
      var slots = this.$scopedSlots.selection;
      var length = this.selectedItems.length;

      this.selectedItems.forEach(function (item, i) {
        if (slots) {
          children.push(_this3.genSlotSelection(item));
        } else if (chips) {
          children.push(_this3.genChipSelection(item));
        } else {
          children.push(_this3.genCommaSelection(item, i < length - 1));
        }
      });

      return children;
    },
    genSlotSelection: function genSlotSelection(item) {
      return this.$scopedSlots.selection({ parent: this, item: item });
    },
    genChipSelection: function genChipSelection(item) {
      var _this4 = this;

      return this.$createElement('v-chip', {
        'class': 'chip--select-multi',
        props: { close: true },
        on: {
          input: function input() {
            return _this4.selectItem(item);
          },
          click: function click(e) {
            return e.stopPropagation();
          }
        },
        key: this.getValue(item)
      }, this.getText(item));
    },
    genCommaSelection: function genCommaSelection(item, comma) {
      return this.$createElement('div', {
        'class': 'input-group__selections__comma',
        key: JSON.stringify(this.getValue(item)) // Item may be an object
      }, '' + this.getText(item) + (comma ? ', ' : ''));
    },
    genList: function genList() {
      var _this5 = this;

      var children = this.filteredItems.map(function (o) {
        if (o.header) return _this5.genHeader(o);
        if (o.divider) return _this5.genDivider(o);else return _this5.genTile(o);
      });

      if (!children.length) {
        children.push(this.genTile(this.noDataText, true));
      }

      return this.$createElement('v-card', [this.$createElement('v-list', {
        ref: 'list'
      }, children)]);
    },
    genHeader: function genHeader(item) {
      return this.$createElement('v-subheader', {
        props: item
      }, item.header);
    },
    genDivider: function genDivider(item) {
      return this.$createElement('v-divider', {
        props: item
      });
    },
    genTile: function genTile(item, disabled) {
      var _this6 = this;

      var active = this.selectedItems.indexOf(item) !== -1;

      if (typeof disabled === 'undefined') {
        disabled = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["g" /* getObjectValueByPath */])(item, this.itemDisabled);
      }

      var data = {
        on: {
          click: function click(e) {
            if (disabled) return;

            _this6.selectItem(item);
          }
        },
        props: {
          avatar: item === Object(item) && 'avatar' in item,
          ripple: true,
          value: active
        }
      };

      if (disabled) {
        data.props.disabled = disabled;
      }

      if (this.$scopedSlots.item) {
        return this.$createElement('v-list-tile', data, [this.$scopedSlots.item({ parent: this, item: item })]);
      }

      return this.$createElement('v-list-tile', data, [this.genAction(item, active && !disabled), this.genContent(item)]);
    },
    genAction: function genAction(item, active) {
      var _this7 = this;

      if (!this.multiple) return null;

      var data = {
        'class': {
          'list__tile__action--select-multi': this.multiple
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this7.selectItem(item);
          }
        }
      };

      return this.$createElement('v-list-tile-action', data, [this.$createElement('v-checkbox', { props: { inputValue: active } })]);
    },
    genContent: function genContent(item) {
      return this.$createElement('v-list-tile-content', [this.$createElement('v-list-tile-title', this.getText(item))]);
    }
  }
});
'filehash MENYKYwGZzK2l5rdhKLll5f4QIA=';

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTHead: function genTHead() {
      var _this = this;

      var children = [];

      if (this.$scopedSlots.headers) {
        var row = this.$scopedSlots.headers({
          headers: this.headers,
          indeterminate: this.indeterminate,
          all: this.all
        });

        children = this.needsTR(row) ? this.genTR(row) : row;
      } else {
        var _row = this.headers.map(function (o) {
          return _this.genHeader(o);
        });
        var checkbox = this.$createElement('v-checkbox', {
          props: {
            dark: this.dark,
            light: this.light,
            color: this.selectAll === true && '' || this.selectAll,
            hideDetails: true,
            inputValue: this.all,
            indeterminate: this.indeterminate
          },
          on: { change: this.toggle }
        });

        this.hasSelectAll && _row.unshift(this.$createElement('th', [checkbox]));

        children = this.genTR(_row);
      }

      return this.$createElement('thead', [children]);
    },
    genHeader: function genHeader(header) {
      var array = [this.$scopedSlots.headerCell ? this.$scopedSlots.headerCell({ header: header }) : header[this.headerText]];

      return this.$createElement.apply(this, ['th'].concat(_toConsumableArray(this.genHeaderData(header, array))));
    },
    genHeaderData: function genHeaderData(header, children) {
      var _this2 = this;

      var classes = ['column'];
      var data = {};
      var pagination = this.computedPagination;

      if ('sortable' in header && header.sortable || !('sortable' in header)) {
        data.on = { click: function click() {
            return _this2.sort(header.value);
          } };
        if (!('value' in header)) {
          console.warn('Data table headers must have a value property that corresponds to a value in the v-model array');
        }

        classes.push('sortable');
        var icon = this.$createElement('v-icon', 'arrow_upward');
        if (header.align && header.align === 'left') {
          children.push(icon);
        } else {
          children.unshift(icon);
        }

        var beingSorted = pagination.sortBy === header.value;
        if (beingSorted) {
          classes.push('active');
          classes.push(pagination.descending ? 'desc' : 'asc');
        }
      }

      classes.push('text-xs-' + (header.align || 'right'));
      data.class = classes;

      return [data, children];
    }
  }
});
'filehash 9PCeOVfonaBSAIJWf59Ivonh9q8=';

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTBody: function genTBody() {
      var children = [];

      if (!this.itemsLength) {
        children.push(this.genEmptyBody(this.noDataText));
      } else if (!this.filteredItems.length) {
        children.push(this.genEmptyBody(this.noResultsText));
      } else {
        children.push(this.genFilteredItems());
      }

      return this.$createElement('tbody', children);
    },
    genFilteredItems: function genFilteredItems() {
      var _this = this;

      return this.filteredItems.map(function (item, index) {
        var props = { item: item, index: index };
        var key = _this.selectedKey;

        Object.defineProperty(props, 'selected', {
          get: function get() {
            return _this.selected[item[_this.selectedKey]];
          },
          set: function set(value) {
            var selected = _this.value.slice();
            if (value) selected.push(item);else selected = selected.filter(function (i) {
              return i[key] !== item[key];
            });

            _this.$emit('input', selected);
          }
        });

        var row = _this.$scopedSlots.items(props);

        return _this.needsTR(row) ? _this.genTR(row, {
          attrs: { active: _this.isSelected(item) }
        }) : row;
      });
    },
    genEmptyBody: function genEmptyBody(text) {
      return this.genTR([this.$createElement('td', {
        'class': 'text-xs-center',
        attrs: { colspan: '100%' }
      }, text)]);
    }
  }
});
'filehash qvMV05OAjPC8QWACq93tuB/IfXI=';

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genPrevIcon: function genPrevIcon() {
      var _this = this;

      return this.$createElement('v-btn', {
        props: {
          disabled: this.computedPagination.page === 1,
          icon: true,
          flat: true,
          dark: this.dark,
          light: this.light
        },
        on: {
          click: function click() {
            var page = _this.computedPagination.page;
            _this.updatePagination({ page: page - 1 });
          }
        }
      }, [this.$createElement('v-icon', 'chevron_left')]);
    },
    genNextIcon: function genNextIcon() {
      var _this2 = this;

      var pagination = this.computedPagination;
      var disabled = pagination.rowsPerPage < 0 || pagination.page * pagination.rowsPerPage >= this.itemsLength || this.pageStop < 0;

      return this.$createElement('v-btn', {
        props: {
          disabled: disabled,
          icon: true,
          flat: true,
          dark: this.dark,
          light: this.light
        },
        on: {
          click: function click() {
            var page = _this2.computedPagination.page;
            _this2.updatePagination({ page: page + 1 });
          }
        }
      }, [this.$createElement('v-icon', 'chevron_right')]);
    },
    genSelect: function genSelect() {
      var _this3 = this;

      return this.$createElement('div', {
        'class': 'datatable__actions__select'
      }, [this.rowsPerPageText, this.$createElement('v-select', {
        props: {
          items: this.rowsPerPageItems,
          value: this.computedPagination.rowsPerPage,
          hideDetails: true,
          auto: true,
          minWidth: '75px'
        },
        on: {
          input: function input(val) {
            _this3.updatePagination({
              page: 1,
              rowsPerPage: val
            });
          }
        }
      })]);
    },
    genPagination: function genPagination() {
      var pagination = '–';

      if (this.itemsLength) {
        var stop = this.itemsLength < this.pageStop || this.pageStop < 0 ? this.itemsLength : this.pageStop;

        pagination = this.$scopedSlots.pageText ? this.$scopedSlots.pageText({
          pageStart: this.pageStart + 1,
          pageStop: stop,
          itemsLength: this.itemsLength
        }) : this.pageStart + 1 + '-' + stop + ' of ' + this.itemsLength;
      }

      return this.$createElement('div', {
        'class': 'datatable__actions__pagination'
      }, [pagination]);
    },
    genActions: function genActions() {
      return [this.$createElement('div', {
        'class': 'datatable__actions'
      }, [this.genSelect(), this.genPagination(), this.genPrevIcon(), this.genNextIcon()])];
    },
    genTFoot: function genTFoot() {
      var children = [];

      if (this.$slots.footer) {
        var footer = this.$slots.footer;
        var row = this.needsTR(footer) ? this.genTR(footer) : footer;

        children.push(row);
      }

      if (!this.hideActions) {
        children.push(this.genTR([this.$createElement('td', {
          attrs: { colspan: '100%' }
        }, this.genActions())]));
      }

      if (!children.length) return null;
      return this.$createElement('tfoot', children);
    }
  }
});
'filehash 5AfWX/RBg0+g6GVlFc3d7uLSY8g=';

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      color: ''
    };
  },


  watch: {
    loading: function loading(val) {
      if (val) this.color = val;
    }
  },

  methods: {
    genTProgress: function genTProgress() {
      var loader = this.$createElement('v-progress-linear', {
        props: {
          primary: this.color === 'primary',
          secondary: this.color === 'secondary',
          success: this.color === 'success',
          info: this.color === 'info',
          warning: this.color === 'warning',
          error: this.color === 'error',
          indeterminate: true,
          height: 3,
          active: !!this.loading
        }
      });

      var col = this.$createElement('th', {
        class: 'column',
        attrs: {
          colspan: '100%'
        }
      }, [loader]);

      return this.$createElement('thead', {
        class: 'datatable__progress'
      }, [this.genTR([col])]);
    }
  }
});
'filehash Ku0s50rHlTMJQPyai0ER7BuHvBc=';

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(133)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(134),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VDataTable/VEditDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50070994", Component.options)
  } else {
    hotAPI.reload("data-v-50070994", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-edit-dialog',

  data: function data() {
    return {
      isActive: false,
      isSaving: false
    };
  },


  props: {
    cancelText: {
      default: 'Cancel'
    },
    large: Boolean,
    lazy: Boolean,
    saveText: {
      default: 'Save'
    },
    transition: {
      type: String,
      default: 'slide-x-reverse-transition'
    }
  },

  watch: {
    isActive: function isActive(val) {
      val && this.$emit('open') && setTimeout(this.focus, 50); // Give DOM time to paint

      if (!val) {
        !this.isSaving && this.$emit('cancel');
        this.isSaving && this.$emit('close');
        this.isSaving = false;
      }
    }
  },

  methods: {
    cancel: function cancel() {
      this.isActive = false;
    },
    focus: function focus() {
      var input = this.$refs.content.querySelector('input');
      input && input.focus();
    },
    save: function save() {
      this.isSaving = true;
      this.isActive = false;
      this.$emit('save');
    },
    genButton: function genButton(fn, text) {
      return this.$createElement('v-btn', {
        props: {
          flat: true,
          primary: true,
          light: true
        },
        on: { click: fn }
      }, text);
    },
    genActions: function genActions() {
      return this.$createElement('div', {
        'class': 'small-dialog__actions',
        directives: [{
          name: 'show',
          value: this.large
        }]
      }, [this.genButton(this.cancel, this.cancelText), this.genButton(this.save, this.saveText)]);
    },
    genContent: function genContent() {
      var _this = this;

      return this.$createElement('div', {
        on: {
          keydown: function keydown(e) {
            e.keyCode === 27 && _this.cancel();
            e.keyCode === 13 && _this.save();
          }
        },
        ref: 'content'
      }, [this.$slots.input]);
    }
  },

  render: function render(h) {
    var _this2 = this;

    return h('v-menu', {
      'class': 'small-dialog',
      props: {
        contentClass: 'small-dialog__content',
        transition: this.transition,
        origin: 'top right',
        right: true,
        value: this.isActive,
        closeOnContentClick: false,
        lazy: this.lazy
      },
      on: {
        input: function input(val) {
          return _this2.isActive = val;
        }
      }
    }, [h('a', {
      domProps: { href: 'javascript:;' },
      slot: 'activator'
    }, this.$slots.default), this.genContent(), this.genActions()]);
  }
});
'filehash Xsr36foZmNJDwmUjKGPpktt46xE=';

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDatePicker__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDatePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VDatePicker__);


__WEBPACK_IMPORTED_MODULE_0__VDatePicker___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDatePicker___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VDatePicker___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDatePicker___default.a);
'filehash +6AuQT3iqTiVDWqRQmEb6b9w4Kk=';

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(137)
__webpack_require__(138)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(139),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VDatePicker/VDatePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a2148d6", Component.options)
  } else {
    hotAPI.reload("data-v-3a2148d6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_picker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_date_title__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_date_header__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_date_table__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_date_years__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VBtn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VCard__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_touch__ = __webpack_require__(10);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };














var defaultDateFormat = function defaultDateFormat(val) {
  return new Date(val).toISOString().substr(0, 10);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-date-picker',

  components: {
    VBtn: __WEBPACK_IMPORTED_MODULE_6__VBtn__["a" /* default */],
    VCard: __WEBPACK_IMPORTED_MODULE_7__VCard__["a" /* default */],
    VIcon: __WEBPACK_IMPORTED_MODULE_8__VIcon__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_date_title__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_date_header__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_date_table__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_date_years__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_picker__["a" /* default */]],

  directives: { Touch: __WEBPACK_IMPORTED_MODULE_9__directives_touch__["a" /* default */] },

  data: function data() {
    return {
      tableDate: new Date(),
      originalDate: this.value,
      currentDay: null,
      currentMonth: null,
      currentYear: null,
      isSelected: false,
      isReversing: false,
      narrowDays: []
    };
  },


  props: {
    locale: {
      type: String,
      default: 'en-us'
    },
    dateFormat: {
      type: Function,
      default: defaultDateFormat
    },
    titleDateFormat: {
      type: Object,
      default: function _default() {
        return { weekday: 'short', month: 'short', day: 'numeric' };
      }
    },
    headerDateFormat: {
      type: Object,
      default: function _default() {
        return { month: 'long', year: 'numeric' };
      }
    },
    formattedValue: {
      required: false
    },
    allowedDates: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    yearIcon: String
  },

  computed: {
    firstAllowedDate: function firstAllowedDate() {
      var date = new Date();
      date.setHours(12, 0, 0, 0);

      if (this.allowedDates) {
        var millisecondOffset = 1 * 24 * 60 * 60 * 1000;
        var valid = new Date(date);
        for (var i = 0; i < 31; i++) {
          if (this.isAllowed(valid)) return valid;

          valid.setTime(valid.getTime() + millisecondOffset);
        }
      }

      return date;
    },

    inputDate: {
      get: function get() {
        if (!this.value) return this.firstAllowedDate;
        if (this.value instanceof Date) return this.value;
        if (!isNaN(this.value) || typeof this.value === 'string' && this.value.indexOf(':') !== -1) return new Date(this.value);

        return new Date(this.value + 'T12:00:00');
      },
      set: function set(val) {
        this.$emit('input', val ? defaultDateFormat(val) : this.originalDate);
        this.$emit('update:formattedValue', val ? this.dateFormat(val) : this.dateFormat(this.originalDate));
      }
    },
    day: function day() {
      return this.inputDate.getDate();
    },
    month: function month() {
      return this.inputDate.getMonth();
    },
    year: function year() {
      return this.inputDate.getFullYear();
    },
    tableMonth: function tableMonth() {
      return this.tableDate.getMonth();
    },
    tableYear: function tableYear() {
      return this.tableDate.getFullYear();
    },
    computedTransition: function computedTransition() {
      return this.isReversing ? 'tab-reverse-transition' : 'tab-transition';
    }
  },

  watch: {
    isSelected: function isSelected(val) {
      var _this = this;

      val && this.$nextTick(function () {
        _this.$refs.years.scrollTop = _this.$refs.years.scrollHeight / 2 - 125;
      });
    },
    tableDate: function tableDate(val, prev) {
      this.isReversing = val < prev;
    },
    value: function value(val) {
      if (val) this.tableDate = this.inputDate;
    }
  },

  methods: {
    save: function save() {
      if (this.originalDate) {
        this.originalDate = this.value;
      } else {
        this.originalDate = this.inputDate;
      }

      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    cancel: function cancel() {
      this.inputDate = this.originalDate;
      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    isAllowed: function isAllowed(date) {
      if (!this.allowedDates) return true;

      if (Array.isArray(this.allowedDates)) {
        return !!this.allowedDates.find(function (allowedDate) {
          var d = new Date(allowedDate);
          d.setHours(12, 0, 0, 0);

          return d - date === 0;
        });
      } else if (this.allowedDates instanceof Function) {
        return this.allowedDates(date);
      } else if (this.allowedDates instanceof Object) {
        var min = new Date(this.allowedDates.min);
        min.setHours(12, 0, 0, 0);
        var max = new Date(this.allowedDates.max);
        max.setHours(12, 0, 0, 0);

        return date >= min && date <= max;
      }

      return true;
    }
  },

  created: function created() {
    var _this2 = this;

    var date = new Date();
    date.setDate(date.getDate() - date.getDay() + parseInt(this.firstDayOfWeek));

    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createRange */])(7).forEach(function () {
      var narrow = date.toLocaleString(_this2.locale, { weekday: 'narrow' });
      _this2.narrowDays.push(narrow);

      date.setDate(date.getDate() + 1);
    });

    this.tableDate = this.inputDate;
  },
  mounted: function mounted() {
    var date = new Date();
    this.currentDay = date.getDate();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
  },
  render: function render(h) {
    var children = [];

    !this.noTitle && children.push(this.genTitle());

    if (!this.isSelected) {
      var bodyChildren = [];

      bodyChildren.push(this.genHeader());
      bodyChildren.push(this.genTable());

      children.push(h('div', {
        'class': 'picker__body'
      }, bodyChildren));
    } else {
      children.push(this.genYears());
    }

    this.$scopedSlots.default && children.push(this.genSlot());

    return h('v-card', {
      'class': _extends({
        'picker picker--date': true,
        'picker--landscape': this.landscape
      }, this.themeClasses)
    }, children);
  }
});
'filehash Md4QZxvXBS2eMUY5dhWTwy+nnFw=';

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genYearIcon: function genYearIcon() {
      return this.yearIcon ? this.$createElement('v-icon', {
        props: {
          dark: true
        }
      }, this.yearIcon) : null;
    },
    genTitle: function genTitle() {
      var _this = this;

      var date = new Date(this.year, this.month, this.day);

      // Workaround for #1409
      date.setHours(1);

      date = date.toLocaleString(this.locale, this.titleDateFormat);

      if (this.landscape) {
        if (date.indexOf(',') > -1) date = date.replace(',', ',<br>');else if (date.indexOf(' ') > -1) date = date.replace(' ', '<br>');
      }

      var text = this.$createElement('transition', {
        props: {
          name: 'slide-x-transition',
          mode: 'out-in'
        }
      }, [this.$createElement('div', {
        domProps: { innerHTML: date },
        key: date
      })]);

      return this.$createElement('div', {
        'class': 'picker__title'
      }, [this.$createElement('div', {
        'class': {
          'picker--date__title-year': true,
          'active': this.isSelected
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this.isSelected = true;
          }
        }
      }, [this.year, this.genYearIcon()]), this.$createElement('div', {
        'class': {
          'picker--date__title-date': true,
          'active': !this.isSelected
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this.isSelected = false;
          }
        }
      }, [text])]);
    }
  }
});
'filehash /iDKt4pwJa8upGM4/KeSSzZrAz4=';

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genHeader: function genHeader() {
      return this.$createElement('div', {
        'class': 'picker--date__header'
      }, [this.genSelector()]);
    },
    genBtn: function genBtn(change, children) {
      var _this = this;

      return this.$createElement('v-btn', {
        props: {
          dark: this.dark,
          icon: true
        },
        nativeOn: {
          click: function click(e) {
            e.stopPropagation();
            _this.tableDate = new Date(_this.tableYear, change);
          }
        }
      }, children);
    },
    genSelector: function genSelector() {
      var date = new Date(this.tableYear, this.tableMonth);

      // Workaround for #1409
      date.setHours(1);

      var header = this.$createElement('div', {
        'class': 'picker--date__header-selector-date'
      }, [this.$createElement('transition', {
        props: { name: this.computedTransition }
      }, [this.$createElement('strong', {
        key: this.tableMonth
      }, date.toLocaleString(this.locale, this.headerDateFormat))])]);

      return this.$createElement('div', {
        'class': 'picker--date__header-selector'
      }, [this.genBtn(this.tableMonth - 1, [this.$createElement('v-icon', 'chevron_left')]), header, this.genBtn(this.tableMonth + 1, [this.$createElement('v-icon', 'chevron_right')])]);
    }
  }
});
'filehash 1EkBuEN7kP3OKDcaIy8Y9gR6VmQ=';

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    wheelScroll: function wheelScroll(e) {
      e.preventDefault();

      var month = this.tableMonth;

      if (e.deltaY < 0) month++;else month--;

      this.tableDate = new Date(this.tableYear, month);
    },
    touch: function touch(value) {
      this.tableDate = new Date(this.tableYear, this.tableMonth + value);
    },
    genTable: function genTable() {
      var _this = this;

      var children = [];
      var data = {
        'class': 'picker--date__table',
        directives: [{
          name: 'touch',
          value: {
            left: function left(e) {
              return e.offsetX < -15 && _this.touch(1);
            },
            right: function right(e) {
              return e.offsetX > 15 && _this.touch(-1);
            }
          }
        }]
      };

      if (this.scrollable) {
        data.on = { wheel: this.wheelScroll };
      }

      children.push(this.$createElement('table', {
        key: this.tableMonth
      }, [this.genTHead(), this.genTBody()]));

      return this.$createElement('div', data, [this.$createElement('transition', {
        props: { name: this.computedTransition }
      }, children)]);
    },
    genTHead: function genTHead() {
      var _this2 = this;

      var days = this.narrowDays.map(function (day) {
        return _this2.$createElement('th', day);
      });
      return this.$createElement('thead', this.genTR(days));
    },
    genTBody: function genTBody() {
      var _this3 = this;

      var children = [];
      var rows = [];
      var length = new Date(this.tableYear, this.tableMonth + 1, 0).getDate();

      var day = new Date(this.tableYear, this.tableMonth).getDay();
      day = day < 1 ? 6 : day - parseInt(this.firstDayOfWeek);

      for (var i = 0; i < day; i++) {
        rows.push(this.$createElement('td'));
      }

      var _loop = function _loop(_i) {
        var date = new Date(_this3.tableYear, _this3.tableMonth, _i, 12, 0, 0, 0);
        rows.push(_this3.$createElement('td', [_this3.$createElement('button', {
          'class': {
            'btn btn--floating btn--small btn--flat': true,
            'btn--active': _this3.isActive(_i),
            'btn--current': _this3.isCurrent(_i),
            'btn--light': _this3.dark,
            'btn--disabled': !_this3.isAllowed(date)
          },
          attrs: {
            type: 'button'
          },
          domProps: {
            innerHTML: '<span class="btn__content">' + _i + '</span>'
          },
          on: {
            click: function click() {
              var day = _i < 10 ? '0' + _i : _i;
              var tableYear = _this3.tableYear;
              var tableMonth = _this3.tableMonth + 1;
              tableMonth = tableMonth < 10 ? '0' + tableMonth : tableMonth;

              _this3.inputDate = tableYear + '-' + tableMonth + '-' + day + 'T12:00:00';
              _this3.$nextTick(function () {
                return _this3.autosave && _this3.save();
              });
            }
          }
        })]));

        if (rows.length % 7 === 0) {
          children.push(_this3.genTR(rows));
          rows = [];
        }
      };

      for (var _i = 1; _i <= length; _i++) {
        _loop(_i);
      }

      if (rows.length) {
        children.push(this.genTR(rows));
      }

      children.length < 6 && children.push(this.genTR([this.$createElement('td', { domProps: { innerHTML: '&nbsp;' } })]));

      return this.$createElement('tbody', children);
    },
    genTR: function genTR() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return [this.$createElement('tr', data, children)];
    },
    isActive: function isActive(i) {
      return this.tableYear === this.year && this.tableMonth === this.month && this.day === i;
    },
    isCurrent: function isCurrent(i) {
      return this.currentYear === this.tableYear && this.currentMonth === this.tableMonth && this.currentDay === i;
    }
  }
});
'filehash zvBHWDrQPAT2XCizyVSS6P0DtTE=';

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genYears: function genYears() {
      return this.$createElement('ul', {
        'class': 'picker--date__years',
        ref: 'years'
      }, this.genYearItems());
    },
    genYearItems: function genYearItems() {
      var _this = this;

      var children = [];

      var _loop = function _loop(i, length) {
        children.push(_this.$createElement('li', {
          'class': {
            active: _this.year === i
          },
          on: {
            click: function click(e) {
              e.stopPropagation();

              var tableMonth = _this.tableMonth + 1;
              var day = _this.day;
              tableMonth = tableMonth < 10 ? '0' + tableMonth : tableMonth;
              day = day < 10 ? '0' + day : day;

              _this.inputDate = i + '-' + tableMonth + '-' + day;
              _this.isSelected = false;
            }
          }
        }, i));
      };

      for (var i = this.year + 100, length = this.year - 100; i > length; i--) {
        _loop(i, length);
      }
      return children;
    }
  }
});
'filehash r7+b6hMMGrxzsWyD5hLo1Tmb6w4=';

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VDialog__);


__WEBPACK_IMPORTED_MODULE_0__VDialog___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDialog___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VDialog___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDialog___default.a);
'filehash m9r2vAgyZCVKKAqQRrnLZMNHufM=';

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDivider__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDivider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VDivider__);


__WEBPACK_IMPORTED_MODULE_0__VDivider___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VDivider___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VDivider___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VDivider___default.a);
'filehash /P8vVrA2qH7zBZhPWUaX96qdg/o=';

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(147)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VDivider/VDivider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ab0afe0", Component.options)
  } else {
    hotAPI.reload("data-v-1ab0afe0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-divider',

  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    inset: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    data.staticClass = ('divider ' + (data.staticClass || '')).trim();

    if (props.inset) data.staticClass += ' divider--inset';
    if (props.light) data.staticClass += ' theme--light';
    if (props.dark) data.staticClass += ' theme--dark';

    return h('hr', data);
  }
});
'filehash M/EaYtHrRoxnR+/WK3jMqM/LNg4=';

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__ = __webpack_require__(153);



__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VExpansionPanel___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__VExpansionPanelContent__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VExpansionPanel___default.a);
'filehash JMBZjg+sIcxP/0CZu5Z2HTqvl60=';

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(151)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VExpansionPanel/VExpansionPanel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fc98ab0", Component.options)
  } else {
    hotAPI.reload("data-v-3fc98ab0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-expansion-panel',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  provide: function provide() {
    return {
      panelClick: this.panelClick
    };
  },


  props: {
    expand: Boolean,
    focusable: Boolean,
    inset: Boolean,
    popout: Boolean
  },

  methods: {
    getChildren: function getChildren() {
      return this.$children.filter(function (c) {
        if (!c.$options) return;

        return c.$options._componentTag === 'v-expansion-panel-content';
      });
    },
    panelClick: function panelClick(uid) {
      if (!this.expand) {
        return this.getChildren().forEach(function (e) {
          return e.toggle(uid);
        });
      }

      var panel = this.$children.find(function (e) {
        return e._uid === uid;
      });

      panel && panel.toggle(uid);
    }
  },

  render: function render(h) {
    return h('ul', {
      staticClass: 'expansion-panel',
      'class': _extends({
        'expansion-panel--focusable': this.focusable,
        'expansion-panel--popout': this.popout,
        'expansion-panel--inset': this.inset
      }, this.themeClasses)
    }, this.$slots.default);
  }
});
'filehash ieI5D7wcKmRoFqPAMGkgNFngn9s=';

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_ripple__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__ = __webpack_require__(6);









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-expansion-panel-content',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  components: {
    VIcon: __WEBPACK_IMPORTED_MODULE_2__VIcon__["a" /* default */]
  },

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_3__directives_ripple__["a" /* default */],
    ClickOutside: __WEBPACK_IMPORTED_MODULE_4__directives_click_outside__["a" /* default */]
  },

  inject: ['panelClick'],

  data: function data() {
    return {
      height: 'auto'
    };
  },


  props: {
    hideActions: Boolean,
    ripple: Boolean
  },

  methods: {
    genBody: function genBody() {
      return this.$createElement('div', {
        ref: 'body',
        class: 'expansion-panel__body',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, this.$slots.default);
    },
    genHeader: function genHeader() {
      var _this = this;

      return this.$createElement('div', {
        staticClass: 'expansion-panel__header',
        directives: [{
          name: 'ripple',
          value: this.ripple
        }],
        on: {
          click: function click() {
            return _this.panelClick(_this._uid);
          }
        }
      }, [this.$slots.header, this.genIcon()]);
    },
    genIcon: function genIcon(h) {
      if (this.hideActions) return null;

      var icon = this.$slots.actions || this.$createElement('v-icon', 'keyboard_arrow_down');

      return this.$createElement('div', {
        staticClass: 'header__icon'
      }, [icon]);
    },
    toggle: function toggle(uid) {
      this.isActive = this._uid === uid && !this.isActive;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var children = [];

    this.$slots.header && children.push(this.genHeader());
    children.push(h(__WEBPACK_IMPORTED_MODULE_0__transitions__["a" /* VExpandTransition */], [this.genBody()]));

    return h('li', {
      staticClass: 'expansion-panel__container',
      'class': {
        'expansion-panel__container--active': this.isActive
      },
      attrs: {
        tabindex: 0
      },
      on: {
        keydown: function keydown(e) {
          if (e.keyCode === 13) _this2.panelClick(_this2._uid);
        }
      }
    }, children);
  }
});
'filehash 7AKp6TWtLRjS69B/muucKYekuEA=';

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VFooter__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VFooter__);


__WEBPACK_IMPORTED_MODULE_0__VFooter___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VFooter___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VFooter___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VFooter___default.a);
'filehash KbLRCIls9leJ9zo5721Ryg98tdw=';

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(156)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(157),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VFooter/VFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d68aad4", Component.options)
  } else {
    hotAPI.reload("data-v-0d68aad4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-footer',

  functional: true,

  props: {
    absolute: Boolean,
    fixed: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('footer ' + (data.staticClass || '')).trim();

    if (props.absolute) data.staticClass += ' footer--absolute';
    if (props.fixed) data.staticClass += ' footer--fixed';

    return h('footer', data, children);
  }
});
'filehash HXINaWrPk0RLbs7ZLzdOutSKVYo=';

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VForm__ = __webpack_require__(159);


__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */].install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VForm__["a" /* default */]);
'filehash 3AQwjM7VVTHwK6mZx11FO9Ch798=';

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-form',

  inheritAttrs: false,

  data: function data() {
    return {
      inputs: 0,
      errorBag: {}
    };
  },


  props: {
    value: Boolean
  },

  watch: {
    errorBag: {
      handler: function handler() {
        var _this = this;

        var keys = Object.keys(this.errorBag);
        if (keys.length < this.inputs) return false;

        var errors = keys.reduce(function (errors, key) {
          errors = errors || _this.errorBag[key];
          return errors;
        }, false);

        this.$emit('input', !errors);

        return !errors;
      },

      deep: true
    }
  },

  methods: {
    getInputs: function getInputs() {
      return this.$children.filter(function (child) {
        return typeof child.errorBucket !== 'undefined';
      });
    },
    validate: function validate() {
      var errors = this.getInputs().reduce(function (errors, child) {
        var error = !child.validate(true);
        return errors || error;
      }, false);

      return !errors;
    },
    reset: function reset() {
      this.getInputs().forEach(function (input) {
        return input.reset();
      });
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.$vuetify.load(function () {
      _this2.getInputs().forEach(function (child) {
        _this2.inputs += 1;

        // Only start watching inputs if we need to
        child.$watch('shouldValidate', function (val) {
          if (!val) return;

          // Only watch if we're not already doing it
          if (_this2.errorBag.hasOwnProperty(child._uid)) return;

          child.$watch('valid', function (val) {
            _this2.$set(_this2.errorBag, child._uid, !val);
          }, { immediate: true });
        });
      });
    });
  },
  render: function render(h) {
    return h('form', {
      attrs: this.$attrs
    }, this.$slots.default);
  }
});
'filehash MUniFHIDOfGggHSNeoUmimz99vg=';

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VContainer */
/* unused harmony export VFlex */
/* unused harmony export VLayout */
/* unused harmony export VSpacer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_grid_styl__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylus_components_grid_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylus_components_grid_styl__);


var Grid = function Grid(name) {
  return {
    name: 'v-' + name,

    functional: true,

    props: {
      id: String
    },

    render: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;

      data.staticClass = (name + ' ' + (data.staticClass || '')).trim();

      if (data.attrs) {
        data.staticClass += ' ' + Object.keys(data.attrs).join(' ');
        delete data.attrs;
      }

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h('div', data, children);
    }
  };
};

// TODO: Do this another way?
 // eslint-disable-line no-unused-vars

var VContainer = Grid('container');
var VFlex = Grid('flex');
var VLayout = Grid('layout');
var VSpacer = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('spacer');

var VGrid = {};

VGrid.install = function install(Vue) {
  Vue.component(VContainer.name, VContainer);
  Vue.component(VFlex.name, VFlex);
  Vue.component(VLayout.name, VLayout);
  Vue.component(VSpacer.name, VSpacer);
};

/* harmony default export */ __webpack_exports__["a"] = (VGrid);
'filehash MtC20VHaXxas6Xl4Uv/C5OWjqq0=';

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__);


__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer___default.a);
'filehash 4VOn5nSRfdIbXMCIDhh5AHD4NsM=';

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(164)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(165),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb073130", Component.options)
  } else {
    hotAPI.reload("data-v-fb073130", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_resize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_touch__ = __webpack_require__(10);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-navigation-drawer',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_themeable__["a" /* default */]],

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__["a" /* default */],
    Resize: __WEBPACK_IMPORTED_MODULE_3__directives_resize__["a" /* default */],
    Touch: __WEBPACK_IMPORTED_MODULE_4__directives_touch__["a" /* default */]
  },

  data: function data() {
    return {
      isActive: this.value,
      isBooted: false,
      isMobile: false,
      touchArea: {
        left: 0,
        right: 0
      }
    };
  },


  props: {
    absolute: Boolean,
    clipped: Boolean,
    disableRouteWatcher: Boolean,
    enableResizeWatcher: Boolean,
    height: String,
    floating: Boolean,
    miniVariant: Boolean,
    mobileBreakPoint: {
      type: Number,
      default: 1280
    },
    permanent: Boolean,
    persistent: Boolean,
    right: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    value: { required: false }
  },

  computed: {
    calculatedHeight: function calculatedHeight() {
      return this.height || '100%';
    },
    classes: function classes() {
      return {
        'navigation-drawer': true,
        'navigation-drawer--absolute': this.absolute,
        'navigation-drawer--clipped': this.clipped,
        'navigation-drawer--close': !this.isActive,
        'navigation-drawer--floating': this.floating,
        'navigation-drawer--is-booted': this.isBooted,
        'navigation-drawer--is-mobile': this.isMobile,
        'navigation-drawer--mini-variant': this.miniVariant,
        'navigation-drawer--open': this.isActive,
        'navigation-drawer--permanent': this.permanent,
        'navigation-drawer--persistent': this.persistent,
        'navigation-drawer--right': this.right,
        'navigation-drawer--temporary': this.temporary,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    },
    showOverlay: function showOverlay() {
      return !this.permanent && this.isActive && (this.temporary || this.isMobile);
    }
  },

  watch: {
    $route: function $route() {
      if (!this.disableRouteWatcher) {
        this.isActive = !this.closeConditional();
      }
    },
    isActive: function isActive(val) {
      this.$emit('input', val);
      this.showOverlay && val && this.genOverlay() || this.removeOverlay();
      this.$el.scrollTop = 0;
    },
    isMobile: function isMobile(val) {
      !val && this.removeOverlay();
    },
    permanent: function permanent(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (this.permanent) return;
      if (val !== this.isActive) this.isActive = val;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },


  methods: {
    init: function init() {
      var _this = this;

      this.checkIfMobile();
      setTimeout(function () {
        return _this.isBooted = true;
      }, 0);

      if (this.permanent) this.isActive = true;else if (this.isMobile) this.isActive = false;else if (!this.value && (this.persistent || this.temporary)) this.isActive = false;else this.isActive = true;
    },
    checkIfMobile: function checkIfMobile() {
      this.isMobile = window.innerWidth < parseInt(this.mobileBreakPoint);
    },
    closeConditional: function closeConditional() {
      return !this.permanent && (this.temporary || this.isMobile);
    },
    onResize: function onResize() {
      if (!this.enableResizeWatcher || this.permanent || this.temporary) return;

      this.checkIfMobile();
      this.isActive = !this.isMobile;
    },
    swipeRight: function swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },
    swipeLeft: function swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },
    calculateTouchArea: function calculateTouchArea() {
      if (!this.$el.parentNode) return;
      var parentRect = this.$el.parentNode.getBoundingClientRect();

      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },
    genDirectives: function genDirectives() {
      var directives = [{
        name: 'click-outside',
        value: this.closeConditional
      }, {
        name: 'resize',
        value: this.onResize
      }];

      !this.touchless && directives.push({
        name: 'touch',
        value: {
          parent: true,
          left: this.swipeLeft,
          right: this.swipeRight
        }
      });

      return directives;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var data = {
      'class': this.classes,
      style: { height: this.calculatedHeight },
      directives: this.genDirectives(),
      on: {
        click: function click() {
          return _this2.$emit('update:miniVariant', false);
        }
      }
    };

    return h('aside', data, [this.$slots.default, h('div', { 'class': 'navigation-drawer__border' })]);
  }
});
'filehash pM+r+4NSvlvM/+lbRQ09QZ8jeQQ=';

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VPagination__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VPagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VPagination__);


__WEBPACK_IMPORTED_MODULE_0__VPagination___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VPagination___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VPagination___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VPagination___default.a);
'filehash PLwavMl8Ttdkg1gx7JIthQgmyL8=';

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(169),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VPagination/VPagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ec79952", Component.options)
  } else {
    hotAPI.reload("data-v-4ec79952", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_resize__ = __webpack_require__(8);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-pagination',

  directives: { Resize: __WEBPACK_IMPORTED_MODULE_1__directives_resize__["a" /* default */] },

  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val % 1 === 0;
      }
    },
    totalVisible: Number,
    nextIcon: {
      type: String,
      default: 'chevron_right'
    },
    prevIcon: {
      type: String,
      default: 'chevron_left'
    },
    value: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      maxButtons: 0
    };
  },


  watch: {
    value: function value() {
      this.init();
    }
  },

  computed: {
    classes: function classes() {
      return {
        'pagination': true,
        'pagination--circle': this.circle,
        'pagination--disabled': this.disabled
      };
    },
    items: function items() {
      var maxLength = this.totalVisible || this.maxButtons;
      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      var even = maxLength % 2 === 0 ? 1 : 0;
      var left = Math.floor(maxLength / 2);
      var right = this.length - left + 1 + even;

      if (this.value >= left && this.value <= right) {
        var start = this.value - left + 2;
        var end = this.value + left - 2 - even;

        return [1, '...'].concat(_toConsumableArray(this.range(start, end)), ['...', this.length]);
      } else {
        return [].concat(_toConsumableArray(this.range(1, left)), ['...'], _toConsumableArray(this.range(this.length - left + 1 + even, this.length)));
      }
    }
  },

  mounted: function mounted() {
    this.$vuetify.load.call(this, this.init);
  },


  methods: {
    onResize: function onResize() {
      var width = this.$el && this.$el.parentNode ? this.$el.parentNode.clientWidth : window.innerWidth;

      this.maxButtons = Math.floor((width - 96) / 42);
    },
    init: function init() {
      var _this = this;

      this.selected = null;

      // Change this
      setTimeout(function () {
        return _this.selected = _this.value;
      }, 100);
    },
    next: function next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },
    previous: function previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },
    range: function range(from, to) {
      var range = [];

      from = from > 0 ? from : 1;

      for (var i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },
    genIcon: function genIcon(h, icon, disabled, fn) {
      return h('li', [h('a', {
        class: {
          'pagination__navigation': true,
          'pagination__navigation--disabled': disabled
        },
        attrs: { href: '#!' },
        on: { click: fn }
      }, [h(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */], [icon])])]);
    },
    genItem: function genItem(h, i) {
      var _this2 = this;

      return h('a', {
        class: {
          'pagination__item': true,
          'pagination__item--active': i === this.value
        },
        attrs: { href: '#!' },
        on: {
          click: function click(e) {
            e.preventDefault();
            _this2.$emit('input', i);
          }
        }
      }, [i]);
    },
    genItems: function genItems(h) {
      var _this3 = this;

      return this.items.map(function (i) {
        return h('li', [isNaN(i) && h('span', { class: 'pagination__more' }, [i]) || _this3.genItem(h, i)]);
      });
    }
  },

  render: function render(h) {
    var children = [this.genIcon(h, this.prevIcon, this.value === 1, this.previous), this.genItems(h), this.genIcon(h, this.nextIcon, this.value === this.length, this.next)];

    return h('ul', {
      directives: [{ name: 'resize', value: this.onResize }],
      class: this.classes
    }, children);
  }
});
'filehash w5RCLKlO7lRIcByEqsU3Amfk41c=';

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VParallax__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VParallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VParallax__);


__WEBPACK_IMPORTED_MODULE_0__VParallax___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VParallax___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VParallax___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VParallax___default.a);
'filehash aY1LLxsKmvHjToNNtgK8PmiyQ3c=';

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(172)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(173),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VParallax/VParallax.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a15d868", Component.options)
  } else {
    hotAPI.reload("data-v-1a15d868", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__ = __webpack_require__(174);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-parallax',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_translatable__["a" /* default */]],

  props: {
    height: {
      type: [String, Number],
      default: 500
    },
    src: String
  },

  computed: {
    styles: function styles() {
      return {
        display: 'block',
        transform: 'translate3d(-50%, ' + this.parallax + 'px, 0)'
      };
    }
  },

  methods: {
    init: function init() {
      var _this = this;

      if (!this.$refs.img) return;

      if (this.$refs.img.complete) {
        this.translate();
        this.listeners();
      } else {
        this.$refs.img.addEventListener('load', function () {
          _this.translate();
          _this.listeners();
        }, false);
      }
    },
    objHeight: function objHeight() {
      return this.$refs.img.naturalHeight;
    },
    elOffsetTop: function elOffsetTop() {
      return this.$el.offsetTop;
    }
  },

  render: function render(h) {
    var container = h('div', {
      staticClass: 'parallax__image-container'
    }, [h('img', {
      staticClass: 'parallax__image',
      style: this.styles,
      attrs: {
        src: this.src
      },
      ref: 'img'
    })]);

    var content = h('div', {
      staticClass: 'parallax__content'
    }, this.$slots.default);

    return h('div', {
      staticClass: 'parallax',
      style: {
        height: parseInt(this.normalizedHeight) + 'px'
      },
      on: this.$listeners
    }, [container, content]);
  }
});
'filehash zSyf9KMZaQhkcD4tvOy48EZ8kvE=';

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      parallax: null,
      parallaxDist: null,
      percentScrolled: null,
      scrollTop: null,
      windowHeight: null,
      windowBottom: null
    };
  },


  computed: {
    normalizedHeight: function normalizedHeight() {
      return Number(this.height.toString().replace(/(^[0-9]*$)/, '$1'));
    },
    imgHeight: function imgHeight() {
      return this.objHeight();
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.translate, false);
    window.removeEventListener('resize', this.translate, false);
  },


  methods: {
    listeners: function listeners() {
      window.addEventListener('scroll', this.translate, false);
      window.addEventListener('resize', this.translate, false);
    },
    translate: function translate() {
      this.calcDimensions();

      this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (this.normalizedHeight + this.windowHeight);

      this.parallax = Math.round(this.parallaxDist * this.percentScrolled);

      if (this.translated) {
        this.translated();
      }
    },
    calcDimensions: function calcDimensions() {
      var offset = this.$el.getBoundingClientRect();

      this.scrollTop = window.pageYOffset;
      this.parallaxDist = this.imgHeight - this.normalizedHeight;
      this.elOffsetTop = offset.top + this.scrollTop;
      this.windowHeight = window.innerHeight;
      this.windowBottom = this.scrollTop + this.windowHeight;
    }
  }
});
'filehash xxlcpsBJsAigwMY3LGE0PjodEVM=';

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressCircular__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VProgressCircular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VProgressCircular__);


__WEBPACK_IMPORTED_MODULE_0__VProgressCircular___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VProgressCircular___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VProgressCircular___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VProgressCircular___default.a);
'filehash 3pJ5dJX5IrSymZ4PA/8X0xdd46E=';

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VProgressCircular/VProgressCircular.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73916794", Component.options)
  } else {
    hotAPI.reload("data-v-73916794", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _this = this;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-progress-circular',

  props: {
    button: Boolean,

    fill: {
      type: String,
      default: function _default() {
        return _this.indeterminate ? 'none' : 'transparent';
      }
    },

    indeterminate: Boolean,

    rotate: {
      type: Number,
      default: 0
    },

    size: {
      type: [Number, String],
      default: 32
    },

    width: {
      type: Number,
      default: 4
    },

    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    calculatedSize: function calculatedSize() {
      var size = Number(this.size);

      if (this.button) {
        size += 8;
      }

      return size;
    },
    circumference: function circumference() {
      return 2 * Math.PI * this.radius;
    },
    classes: function classes() {
      return {
        'progress-circular': true,
        'progress-circular--indeterminate': this.indeterminate,
        'progress-circular--button': this.button
      };
    },
    cxy: function cxy() {
      return this.indeterminate && !this.button ? 50 : this.calculatedSize / 2;
    },
    normalizedValue: function normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return this.value;
    },
    radius: function radius() {
      return this.indeterminate && !this.button ? 20 : (this.calculatedSize - this.width) / 2;
    },
    strokeDashArray: function strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },
    strokeDashOffset: function strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },
    styles: function styles() {
      return {
        height: this.calculatedSize + 'px',
        width: this.calculatedSize + 'px'
      };
    },
    svgSize: function svgSize() {
      return this.indeterminate ? false : this.calculatedSize;
    },
    svgStyles: function svgStyles() {
      return {
        transform: 'rotate(' + this.rotate + 'deg)'
      };
    },
    viewBox: function viewBox() {
      return this.indeterminate ? '25 25 50 50' : false;
    }
  },

  methods: {
    genCircle: function genCircle(h, name, offset) {
      return h('circle', {
        class: 'progress-circular__' + name,
        attrs: {
          fill: 'transparent',
          cx: this.cxy,
          cy: this.cxy,
          r: this.radius,
          'stroke-width': this.width,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },
    genSvg: function genSvg(h) {
      var children = [!this.indeterminate && this.genCircle(h, 'underlay', 0), this.genCircle(h, 'overlay', this.strokeDashOffset)];

      return h('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          height: this.svgSize,
          width: this.svgSize,
          viewBox: this.viewBox
        }
      }, children);
    }
  },

  render: function render(h) {
    var info = h('div', { class: 'progress-circular__info' }, [this.$slots.default]);
    var svg = this.genSvg(h);

    return h('div', {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    }, [svg, info]);
  }
});
'filehash CpcUNaTr6QwNwmEkqHQmeEuRCnA=';

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VRadioGroup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VRadioGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VRadioGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VRadio__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VRadio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VRadio__);
/* unused harmony reexport VRadioGroup */
/* unused harmony reexport VRadio */





__WEBPACK_IMPORTED_MODULE_0__VRadioGroup___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VRadioGroup___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VRadioGroup___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VRadio___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VRadio___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VRadioGroup___default.a);
'filehash fpbqFXYd8jSvzTymI/bIMDypDS4=';

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)
__webpack_require__(182)
__webpack_require__(183)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VRadioGroup/VRadioGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3235c0b4", Component.options)
  } else {
    hotAPI.reload("data-v-3235c0b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-radio-group',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  provide: function provide() {
    var _this = this;

    return {
      isMandatory: function isMandatory() {
        return _this.mandatory;
      }
    };
  },


  props: {
    column: {
      type: Boolean,
      default: true
    },
    inputValue: null,
    mandatory: {
      type: Boolean,
      default: true
    },
    row: Boolean
  },

  data: function data() {
    return {
      internalTabIndex: -1
    };
  },


  watch: {
    inputValue: function inputValue(val) {
      this.getRadios().forEach(function (radio) {
        radio.isActive = val === radio.value;
      });
    }
  },

  computed: {
    classes: function classes() {
      return {
        'radio-group': true,
        'radio-group--column': this.column,
        'radio-group--row': this.row
      };
    }
  },

  methods: {
    getRadios: function getRadios() {
      return this.$children.filter(function (child) {
        return child.$el.classList.contains('radio');
      });
    },
    toggle: function toggle(value) {
      var _this2 = this;

      if (this.disabled) {
        return;
      }

      this.shouldValidate = true;
      this.$emit('change', value);
      this.$nextTick(function () {
        return _this2.validate();
      });

      this.getRadios().filter(function (r) {
        return r.value !== value;
      }).forEach(function (r) {
        return r.isActive = false;
      });
    },
    radioBlur: function radioBlur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('radio')) {
        this.shouldValidate = true;
        this.$emit('blur', this.inputValue);
      }
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.getRadios().forEach(function (radio) {
      radio.isActive = _this3.inputValue === radio.value;
      radio.$el.tabIndex = radio.$el.tabIndex > 0 ? radio.$el.tabIndex : 0;
      radio.$on('change', _this3.toggle);
      radio.$on('blur', _this3.radioBlur);
      radio.$on('focus', _this3.radioFocus);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this4 = this;

    this.getRadios().forEach(function (radio) {
      radio.$off('change', _this4.toggle);
      radio.$off('blur', _this4.radioBlur);
      radio.$off('focus', _this4.radioFocus);
    });
  },
  render: function render(h) {
    var data = {
      attrs: {
        role: 'radiogroup'
      }
    };
    return this.genInputGroup(this.$slots.default, data);
  }
});
'filehash Unhvagv4gQesWUi55EEQ4pukIqg=';

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(186),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VRadioGroup/VRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0417a309", Component.options)
  } else {
    hotAPI.reload("data-v-0417a309", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_colorable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_tab_focusable__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_ripple__ = __webpack_require__(7);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-radio',

  inheritAttrs: false,

  inject: ['isMandatory'],

  components: {
    VFadeTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["b" /* VFadeTransition */],
    VIcon: __WEBPACK_IMPORTED_MODULE_1__VIcon__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_colorable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_tab_focusable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_themeable__["a" /* default */]],

  directives: { Ripple: __WEBPACK_IMPORTED_MODULE_5__directives_ripple__["a" /* default */] },

  props: {
    disabled: Boolean,
    value: null,
    label: String
  },

  data: function data() {
    return {
      isActive: false
    };
  },


  computed: {
    classes: function classes() {
      return this.addColorClassChecks({
        'input-group': true,
        'input-group--active': this.isActive,
        'input-group--selection-controls': true,
        'input-group--tab-focused': this.tabFocused,
        'radio': true,
        'theme--dark': this.dark,
        'theme--light': this.light
      });
    },
    icon: function icon() {
      return this.isActive ? 'radio_button_checked' : 'radio_button_unchecked';
    }
  },

  methods: {
    genInput: function genInput(radio) {
      var value = JSON.stringify(this.value);
      var input = this.$createElement('input', {
        ref: 'input',
        style: {
          display: 'none'
        },
        attrs: Object.assign({
          name: 'test', // from parent?
          id: this.id,
          type: 'radio',
          value: value
        }, this.$attrs)
      }, [value]);

      radio.push(input);

      return this.$createElement('div', {
        class: 'input-group__input'
      }, radio);
    },
    genWrapper: function genWrapper(radio) {
      var _this = this;

      var children = [];

      children.push(this.genLabel());
      children.push(this.genInput(radio));

      return this.$createElement('div', {
        class: this.classes,
        attrs: {
          role: 'radio',
          'aria-checked': this.isActive && 'true' || 'false',
          'aria-label': this.label
        },
        on: {
          keydown: function keydown(e) {
            if ([13, 32].includes(e.keyCode)) {
              e.preventDefault();
              _this.click();
            }
          },
          blur: function blur(e) {
            _this.$emit('blur', e);
            _this.tabFocused = false;
          }
        }
      }, children);
    },
    genLabel: function genLabel() {
      return this.$createElement('label', {
        on: {
          click: this.click
        }
      }, this.$slots.label || this.label);
    },
    click: function click() {
      var mandatory = this.isMandatory && this.isMandatory() || false;

      if (!this.disabled && (!this.isActive || !mandatory)) {
        this.$refs.input.checked = true;
        this.isActive = true;
        this.$emit('change', this.value);
      }
    }
  },

  created: function created() {
    // Semantic check to help people identify the reason for the inject error above it.
    if (!this.$parent || !this.$parent.$vnode || !this.$parent.$vnode.tag || !this.$parent.$vnode.tag.endsWith("v-radio-group")) {
      console.warn("[Vuetify] Warn: The v-radio component must have an immediate parent of v-radio-group.");
    }
  },
  render: function render(h) {
    var transition = h('v-fade-transition', {}, [h('v-icon', {
      'class': {
        'icon--radio': this.isActive
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.click
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    return this.genWrapper([transition, ripple]);
  }
});
'filehash DymHPOALq51c0x6tWYWTXCVOjiY=';

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      tabFocused: false
    };
  }
});
"filehash m17QSBGWOTj1r87QIqROY/RaKBg=";

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSlider__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSlider__);


__WEBPACK_IMPORTED_MODULE_0__VSlider___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSlider___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSlider___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSlider___default.a);
'filehash euYeVBd7EUHtrnV2efTArMJndpA=';

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(191),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSlider/VSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cf46560", Component.options)
  } else {
    hotAPI.reload("data-v-1cf46560", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_input__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__ = __webpack_require__(6);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-slider',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_input__["a" /* default */]],

  directives: { ClickOutside: __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__["a" /* default */] },

  data: function data() {
    return {
      app: {},
      isActive: false,
      inputWidth: 0,
      keyPressed: 0
    };
  },


  props: {
    inverted: Boolean,
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: null
    },
    thumbLabel: Boolean,
    value: [Number, String],
    vertical: Boolean,
    snap: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--slider': true,
        'input-group--active': this.isActive,
        'input-group--dirty': this.inputWidth > 0,
        'input-group--disabled': this.disabled,
        'input-group--ticks': !this.disabled && this.step
      };
    },

    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        var min = this.min,
            max = this.max,
            step = this.step,
            snap = this.snap;

        val = val < min ? min : val > max ? max : val;
        if (Math.ceil(val) % Math.ceil(this.lazyValue) < 2) {
          this.inputWidth = this.calculateWidth(val);
        }

        var value = snap ? Math.round(val / step) * step : parseInt(val);
        this.lazyValue = value;

        if (value !== this.value) {
          this.$emit('input', value);
        }
      }
    },
    interval: function interval() {
      return 100 / (this.max - this.min) * this.step;
    },
    thumbContainerClasses: function thumbContainerClasses() {
      return {
        'slider__thumb-container': true,
        'slider__thumb-container--label': this.thumbLabel
      };
    },
    thumbStyles: function thumbStyles() {
      return {
        transition: this.keyPressed >= 2 ? 'none' : '',
        left: this.inputWidth + '%'
      };
    },
    tickContainerStyles: function tickContainerStyles() {
      return {
        transform: 'translate3d(0, -50%, 0)'
      };
    },
    trackStyles: function trackStyles() {
      var scaleX = this.calculateScale(1 - this.inputWidth / 100);
      var offsetX = this.thumbLabel ? 0 : !this.isActive ? 8 : 12;
      var translateX = offsetX + 'px';
      return {
        transition: this.keyPressed >= 2 ? 'none' : '',
        transform: 'scaleX(' + scaleX + ') translateX(' + translateX + ')'
      };
    },
    trackFillStyles: function trackFillStyles() {
      var inputWidth = this.inputWidth;
      var scaleX = this.calculateScale(inputWidth / 100);
      var translateX = inputWidth > 99 && !this.thumbLabel ? -8 + 'px' : 0;
      return {
        transition: this.keyPressed >= 2 ? 'none' : '',
        transform: 'scaleX(' + scaleX + ') translateX(' + translateX + ')'
      };
    },
    numTicks: function numTicks() {
      return parseInt((this.max - this.min) / this.step);
    }
  },

  watch: {
    value: function value() {
      this.inputValue = this.value;
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.inputValue = this.value;
    this.$nextTick(function () {
      _this.inputWidth = _this.calculateWidth(_this.inputValue);
    });

    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || console.warn('The v-slider component requires the present of v-app or a non-body wrapping element with the [data-app] attribute.');
  },


  methods: {
    calculateWidth: function calculateWidth(val) {
      if (this.snap) {
        val = Math.round(val / this.step) * this.step;
      }

      val = (val - this.min) / (this.max - this.min) * 100;

      return val < 0.15 ? 0 : val;
    },
    calculateScale: function calculateScale(scale) {
      return this.disabled ? scale - 0.015 : scale;
    },
    onMouseDown: function onMouseDown(e) {
      this.keyPressed = 2;
      var options = { passive: true };
      this.isActive = true;

      if ('touches' in e) {
        this.app.addEventListener('touchmove', this.onMouseMove, options);
        Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(this.app, 'touchend', this.onMouseUp);
      } else {
        this.app.addEventListener('mousemove', this.onMouseMove, options);
        Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(this.app, 'mouseup', this.onMouseUp);
      }
    },
    onMouseUp: function onMouseUp() {
      this.keyPressed = 0;
      var options = { passive: true };
      this.isActive = false;
      this.app.removeEventListener('touchmove', this.onMouseMove, options);
      this.app.removeEventListener('mousemove', this.onMouseMove, options);
    },
    onMouseMove: function onMouseMove(e) {
      var _$refs$track$getBound = this.$refs.track.getBoundingClientRect(),
          offsetLeft = _$refs$track$getBound.left,
          trackWidth = _$refs$track$getBound.width;

      var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      var left = (clientX - offsetLeft) / trackWidth * 100;

      left = left < 0 ? 0 : left > 100 ? 100 : left;

      this.inputValue = parseInt(this.min, 10) + left / 100 * (this.max - this.min);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 37 || e.keyCode === 39) {

        this.keyPressed += 1;

        var direction = e.keyCode === 37 && -1 || e.keyCode === 39 && 1 || 0;
        var multiplier = e.shiftKey && 3 || e.ctrlKey && 2 || 1;
        var amount = this.snap && this.step || 1;

        this.inputValue = this.inputValue + direction * amount * multiplier;
      }
    },
    onKeyUp: function onKeyUp(e) {
      this.keyPressed = 0;
    },
    sliderMove: function sliderMove(e) {
      if (!this.isActive) {
        this.onMouseMove(e);
      }
    },
    genThumbLabel: function genThumbLabel(h) {
      return h('v-scale-transition', {
        props: { origin: 'bottom center' }
      }, [h('div', {
        'class': 'slider__thumb--label__container',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, [h('div', { 'class': 'slider__thumb--label' }, [h('span', {}, parseInt(this.inputValue))])])]);
    },
    genThumbContainer: function genThumbContainer(h) {
      var children = [];
      children.push(h('div', { 'class': 'slider__thumb' }));

      this.thumbLabel && children.push(this.genThumbLabel(h));

      return h('div', {
        'class': this.thumbContainerClasses,
        style: this.thumbStyles,
        on: {
          touchstart: this.onMouseDown,
          mousedown: this.onMouseDown
        },
        ref: 'thumb'
      }, children);
    },
    genSteps: function genSteps(h) {
      var _this2 = this;

      var ticks = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createRange */])(this.numTicks + 1).map(function (i) {
        var span = h('span', {
          class: 'slider__tick',
          style: {
            left: i * (100 / _this2.numTicks) + '%'
          }
        });

        return span;
      });

      return h('div', {
        'class': 'slider__ticks-container',
        style: this.tickContainerStyles
      }, ticks);
    },
    genTrackContainer: function genTrackContainer(h) {
      var children = [h('div', {
        'class': 'slider__track',
        style: this.trackStyles
      }), h('div', {
        'class': 'slider__track-fill',
        style: this.trackFillStyles
      })];

      return h('div', {
        'class': 'slider__track__container',
        ref: 'track'
      }, children);
    }
  },

  render: function render(h) {
    var children = [];

    children.push(this.genTrackContainer(h));
    this.step && children.push(this.genSteps(h));
    children.push(this.genThumbContainer(h));

    var slider = h('div', { 'class': 'slider' }, children);

    return this.genInputGroup([slider], {
      attrs: {
        role: 'slider',
        tabindex: this.tabindex
      },
      on: Object.assign({}, {
        mouseup: this.sliderMove,
        keydown: this.onKeyDown,
        keyup: this.onKeyUp
      }, this.$listeners),
      directives: [{
        name: 'click-outside'
      }]
    });
  }
});
'filehash pYlIkBGqY1AjZO4keWYjtxaE3ic=';

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSnackbar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSnackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSnackbar__);


__WEBPACK_IMPORTED_MODULE_0__VSnackbar___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSnackbar___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSnackbar___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSnackbar___default.a);
'filehash kh4ZCWSkncuLzoTjES4z8NK9G3k=';

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(195),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSnackbar/VSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aad8b28", Component.options)
  } else {
    hotAPI.reload("data-v-7aad8b28", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__ = __webpack_require__(4);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-snackbar',

  components: {
    VSlideYTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["e" /* VSlideYTransition */],
    VSlideYReverseTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["d" /* VSlideYReverseTransition */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      activeTimeout: {}
    };
  },


  props: {
    absolute: Boolean,
    bottom: Boolean,
    left: Boolean,
    multiLine: Boolean,
    right: Boolean,
    top: Boolean,
    timeout: {
      type: Number,
      default: 6000
    },
    vertical: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'snack': true,
        'snack--active': this.isActive,
        'snack--absolute': this.absolute,
        'snack--bottom': this.bottom || !this.top,
        'snack--left': this.left,
        'snack--multi-line': this.multiLine && !this.vertical,
        'snack--right': this.right,
        'snack--top': this.top,
        'snack--vertical': this.vertical,
        'primary': this.primary,
        'secondary': this.secondary,
        'success': this.success,
        'info': this.info,
        'warning': this.warning,
        'error': this.error
      };
    },
    computedTransition: function computedTransition() {
      return this.top ? 'v-slide-y-transition' : 'v-slide-y-reverse-transition';
    }
  },

  watch: {
    isActive: function isActive() {
      var _this = this;

      clearTimeout(this.activeTimeout);

      if (this.isActive && this.timeout) {
        this.activeTimeout = setTimeout(function () {
          _this.isActive = false;
        }, this.timeout);
      }
    }
  },

  render: function render(h) {
    var children = [];

    if (this.isActive) {
      children.push(h('div', {
        'class': 'snack__content'
      }, this.$slots.default));
    }

    return h('div', {
      'class': this.classes,
      on: this.$listeners
    }, [h(this.computedTransition, children)]);
  }
});
'filehash bW6EEFQqk2M80tEWcfBWReMWNtM=';

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSpeedDial__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSpeedDial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSpeedDial__);


__WEBPACK_IMPORTED_MODULE_0__VSpeedDial___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSpeedDial___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSpeedDial___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSpeedDial___default.a);
'filehash F0i0GJvSgOBVv6Pa3EHX843oxFQ=';

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(198)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(199),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSpeedDial/VSpeedDial.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1435a460", Component.options)
  } else {
    hotAPI.reload("data-v-1435a460", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__ = __webpack_require__(6);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-speed-dial',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  directives: { ClickOutside: __WEBPACK_IMPORTED_MODULE_2__directives_click_outside__["a" /* default */] },

  props: {
    direction: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    hover: Boolean,
    transition: {
      type: String,
      default: 'scale-transition'
    }
  },

  computed: {
    classes: function classes() {
      return _defineProperty({
        'speed-dial': true,
        'speed-dial--top': this.top,
        'speed-dial--right': this.right,
        'speed-dial--bottom': this.bottom,
        'speed-dial--left': this.left,
        'speed-dial--absolute': this.absolute,
        'speed-dial--fixed': this.fixed
      }, 'speed-dial--direction-' + this.direction, true);
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [];
    var data = {
      'class': this.classes,
      directives: [{
        name: 'click-outside'
      }],
      on: {
        click: function click() {
          return _this.isActive = !_this.isActive;
        }
      }
    };

    if (this.hover) {
      data.on.mouseenter = function () {
        return _this.isActive = true;
      };
      data.on.mouseleave = function () {
        return _this.isActive = false;
      };
    }

    if (this.isActive) {
      children = (this.$slots.default || []).map(function (b, i) {
        b.key = i;

        return b;
      });
    }

    var list = h('transition-group', {
      'class': 'speed-dial__list',
      props: {
        name: this.transition,
        tag: 'div'
      }
    }, children);

    return h('div', data, [this.$slots.activator, list]);
  }
});
'filehash pxMAmOHf49QsxeXzstGBAHLSkDo=';

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VStepper__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VStepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VStepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VStepperStep__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VStepperContent__ = __webpack_require__(205);





__WEBPACK_IMPORTED_MODULE_1__VStepper___default.a.install = function install(Vue) {
  var VStepperHeader = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('stepper__header');

  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VStepper___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VStepper___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__VStepperContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VStepperContent__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__VStepperStep__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VStepperStep__["a" /* default */]);
  Vue.component('v-stepper-header', VStepperHeader);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VStepper___default.a);
'filehash sky9sFCvnDmVUpURXBH/ZaH+C+w=';

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(203),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VStepper/VStepper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-719251e0", Component.options)
  } else {
    hotAPI.reload("data-v-719251e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-stepper',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  provide: function provide() {
    return {
      stepClick: this.stepClick
    };
  },
  data: function data() {
    return {
      inputValue: null,
      isBooted: false,
      steps: [],
      content: [],
      isReverse: false
    };
  },


  props: {
    nonLinear: Boolean,
    altLabels: Boolean,
    vertical: Boolean,
    value: [Number, String]
  },

  computed: {
    classes: function classes() {
      return {
        'stepper': true,
        'stepper--is-booted': this.isBooted,
        'stepper--vertical': this.vertical,
        'stepper--alt-labels': this.altLabels,
        'stepper--non-linear': this.nonLinear,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  watch: {
    inputValue: function inputValue(val, prev) {
      var _this = this;

      this.isReverse = Number(val) < Number(prev);
      this.steps.forEach(function (i) {
        return i.toggle(_this.inputValue);
      });
      this.content.forEach(function (i) {
        return i.toggle(_this.inputValue, _this.isReverse);
      });

      this.$emit('input', this.inputValue);
      prev && (this.isBooted = true);
    },
    value: function value() {
      this.inputValue = this.value;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },


  methods: {
    init: function init() {
      var _this2 = this;

      this.$children.forEach(function (i) {
        if (i.$options._componentTag === 'v-stepper-step') {
          _this2.steps.push(i);
        } else if (i.$options._componentTag === 'v-stepper-content') {
          i.isVertical = _this2.vertical;
          _this2.content.push(i);
        }
      });

      this.inputValue = this.value || this.steps[0].step || 1;
    },
    stepClick: function stepClick(step) {
      this.inputValue = step;
    }
  },

  render: function render(h) {
    return h('div', {
      'class': this.classes
    }, this.$slots.default);
  }
});
'filehash MfsIWT+ygc1j5HkkmLzfg2vPzsE=';

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-stepper-step',

  components: { VIcon: __WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */] },

  directives: { Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */] },

  inject: ['stepClick'],

  data: function data() {
    return {
      isActive: false,
      isInactive: true
    };
  },


  props: {
    complete: Boolean,
    completeIcon: {
      type: String,
      default: 'check'
    },
    editIcon: {
      type: String,
      default: 'edit'
    },
    errorIcon: {
      type: String,
      default: 'warning'
    },
    editable: Boolean,
    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    step: [Number, String]
  },

  computed: {
    classes: function classes() {
      return {
        'stepper__step': true,
        'stepper__step--active': this.isActive,
        'stepper__step--editable': this.editable,
        'stepper__step--inactive': this.isInactive,
        'stepper__step--error': this.hasError,
        'stepper__step--complete': this.complete
      };
    },
    hasError: function hasError() {
      return this.rules.some(function (i) {
        return i() !== true;
      });
    }
  },

  methods: {
    click: function click(e) {
      e.stopPropagation();

      if (this.editable) {
        this.stepClick(this.step);
      }
    },
    toggle: function toggle(step) {
      this.isActive = step.toString() === this.step.toString();
      this.isInactive = Number(step) < Number(this.step);
    }
  },

  render: function render(h) {
    var data = {
      'class': this.classes,
      directives: [{
        name: 'ripple',
        value: this.editable
      }],
      on: { click: this.click }
    };
    var stepContent = void 0;

    if (this.hasError) {
      stepContent = [h('v-icon', {}, this.errorIcon)];
    } else if (this.complete) {
      if (this.editable) {
        stepContent = [h('v-icon', {}, this.editIcon)];
      } else {
        stepContent = [h('v-icon', {}, this.completeIcon)];
      }
    } else {
      stepContent = this.step;
    }

    var step = h('span', { 'class': 'stepper__step__step' }, stepContent);
    var label = h('div', { 'class': 'stepper__label' }, this.$slots.default);

    return h('div', data, [step, label]);
  }
});
'filehash egmbGo44SWcL9S5ESOQ9yttKsyA=';

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transitions__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-stepper-content',

  components: {
    VTabTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["g" /* VTabTransition */],
    VTabReverseTransition: __WEBPACK_IMPORTED_MODULE_0__transitions__["f" /* VTabReverseTransition */]
  },

  data: function data() {
    return {
      height: 0,
      isActive: false,
      isReverse: false,
      isVertical: false
    };
  },


  props: {
    step: {
      type: [Number, String],
      required: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'stepper__content': true
      };
    },
    computedTransition: function computedTransition() {
      return this.isReverse ? 'v-tab-reverse-transition' : 'v-tab-transition';
    },
    styles: function styles() {
      if (!this.isVertical) return {};

      return {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      };
    },
    wrapperClasses: function wrapperClasses() {
      return {
        'stepper__wrapper': true
      };
    }
  },

  watch: {
    isActive: function isActive() {
      if (!this.isVertical) {
        return;
      }

      if (this.isActive) {
        this.enter();
      } else {
        this.leave();
      }
    }
  },

  mounted: function mounted() {
    this.$refs.wrapper.addEventListener('transitionend', this.onTransition, false);
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.wrapper.removeEventListener('transitionend', this.onTransition, false);
  },


  methods: {
    onTransition: function onTransition() {
      if (!this.isActive) return;

      this.height = 'auto';
    },
    enter: function enter() {
      var _this = this;

      var scrollHeight = 0;

      // Render bug with height
      setTimeout(function () {
        scrollHeight = _this.$refs.wrapper.scrollHeight;
      }, 0);

      this.height = 0;

      // Give the collapsing element time to collapse
      setTimeout(function () {
        return _this.height = scrollHeight || 'auto';
      }, 450);
    },
    leave: function leave() {
      var _this2 = this;

      this.height = this.$refs.wrapper.clientHeight;
      setTimeout(function () {
        return _this2.height = 0;
      }, 0);
    },
    toggle: function toggle(step, reverse) {
      this.isActive = step.toString() === this.step.toString();
      this.isReverse = reverse;
    }
  },

  render: function render(h) {
    var contentData = {
      'class': this.classes
    };
    var wrapperData = {
      'class': this.wrapperClasses,
      style: this.styles,
      ref: 'wrapper'
    };

    if (!this.isVertical) {
      contentData.directives = [{
        name: 'show',
        value: this.isActive
      }];
    }

    var wrapper = h('div', wrapperData, [this.$slots.default]);
    var content = h('div', contentData, [wrapper]);

    return h(this.computedTransition, {
      on: this.$listeners
    }, [content]);
  }
});
'filehash sMASUkj1fYOppc2PLsV0eC/rwdQ=';

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSubheader__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSubheader__);


__WEBPACK_IMPORTED_MODULE_0__VSubheader___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSubheader___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSubheader___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSubheader___default.a);
'filehash h5FJqEmxBknaaQnh9b1NVwMI/yM=';

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(208)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(209),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSubheader/VSubheader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff566fe0", Component.options)
  } else {
    hotAPI.reload("data-v-ff566fe0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 208 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-subheader',

  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    inset: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children,
        props = _ref.props;

    data.staticClass = ('subheader ' + (data.staticClass || '')).trim();

    if (props.inset) data.staticClass += ' subheader--inset';
    if (props.light) data.staticClass += ' theme--light';
    if (props.dark) data.staticClass += ' theme--dark';

    return h('li', data, children);
  }
});
'filehash IXXI+V7lmZjQpQgU5A2zltZVbMQ=';

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSwitch__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSwitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSwitch__);


__WEBPACK_IMPORTED_MODULE_0__VSwitch___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSwitch___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSwitch___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSwitch___default.a);
'filehash W/KV/lLyaKmBQVQa2qAZTtj5tNk=';

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(212)
__webpack_require__(213)
__webpack_require__(214)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(215),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSwitch/VSwitch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7308c7f4", Component.options)
  } else {
    hotAPI.reload("data-v-7308c7f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_selectable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(7);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-switch',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_selectable__["a" /* default */]],

  directives: { Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */] },

  computed: {
    classes: function classes() {
      return {
        'input-group--selection-controls switch': true
      };
    },
    rippleClasses: function rippleClasses() {
      return {
        'input-group--selection-controls__ripple': true,
        'input-group--selection-controls__ripple--active': this.isActive
      };
    },
    containerClasses: function containerClasses() {
      return this.addColorClassChecks({
        'input-group--selection-controls__container': true,
        'input-group--selection-controls__container--light': this.light,
        'input-group--selection-controls__container--disabled': this.disabled
      });
    },
    toggleClasses: function toggleClasses() {
      return {
        'input-group--selection-controls__toggle': true,
        'input-group--selection-controls__toggle--active': this.isActive
      };
    }
  },

  render: function render(h) {
    var ripple = h('div', {
      'class': this.rippleClasses,
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    var container = h('div', {
      'class': this.containerClasses
    }, [h('div', { 'class': this.toggleClasses }), ripple]);

    return this.genInputGroup([container]);
  }
});
'filehash mOSrAfu3ZW0UEGxkBqt2saI3kW4=';

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSystemBar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSystemBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VSystemBar__);


__WEBPACK_IMPORTED_MODULE_0__VSystemBar___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VSystemBar___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VSystemBar___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VSystemBar___default.a);
'filehash SwsQKEqK3AWNIk9wnQx+fGSBwNs=';

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(218)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(219),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VSystemBar/VSystemBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88a878a0", Component.options)
  } else {
    hotAPI.reload("data-v-88a878a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-system-bar',

  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    lightsOut: Boolean,
    status: Boolean,
    window: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('system-bar ' + (data.staticClass || '')).trim();

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.light) data.staticClass += ' theme--light';
    if (props.status) data.staticClass += ' system-bar--status';
    if (props.window) data.staticClass += ' system-bar--window';
    if (props.lightsOut) data.staticClass += ' system-bar--lights-out';

    return h('div', data, children);
  }
});
'filehash W0KuuY1zNgkrlsnWe9ZCg5Zdz/c=';

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTabs__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VTabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VTabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VTabsItem__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VTabsContent__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VTabsBar__ = __webpack_require__(226);







__WEBPACK_IMPORTED_MODULE_1__VTabs___default.a.install = function install(Vue) {
  var VTabsSlider = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('tabs__slider', 'li');
  var VTabsItems = {
    name: 'v-tabs-items',

    functional: true,

    render: function render(h, _ref) {
      var slots = _ref.slots;

      return h('div', { 'class': { 'tabs__items': true } }, [slots().default]);
    }
  };

  Vue.component(__WEBPACK_IMPORTED_MODULE_1__VTabs___default.a.name, __WEBPACK_IMPORTED_MODULE_1__VTabs___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_4__VTabsBar__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__VTabsBar__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__VTabsContent__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__VTabsContent__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__VTabsItem__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__VTabsItem__["a" /* default */]);
  Vue.component(VTabsSlider.name, VTabsSlider);
  Vue.component(VTabsItems.name, VTabsItems);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VTabs___default.a);
'filehash J+SCvrYiuZsgGj5yZZ0QjeQxuto=';

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(223),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VTabs/VTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9d6c54c", Component.options)
  } else {
    hotAPI.reload("data-v-e9d6c54c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_resize__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-tabs',

  directives: {
    Resize: __WEBPACK_IMPORTED_MODULE_1__directives_resize__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  provide: function provide() {
    var _this = this;

    return {
      registerContent: this.registerContent,
      unregisterContent: this.unregisterContent,
      registerTabItem: this.registerTabItem,
      unregisterTabItem: this.unregisterTabItem,
      slider: this.slider,
      tabClick: this.tabClick,
      isScrollable: function isScrollable() {
        return _this.scrollable;
      },
      isMobile: function isMobile() {
        return _this.isMobile;
      }
    };
  },
  data: function data() {
    return {
      content: [],
      tabItems: [],
      activeIndex: null,
      isMobile: false,
      reverse: false,
      target: null,
      tabsSlider: null,
      targetEl: null,
      tabsContainer: null
    };
  },


  props: {
    centered: Boolean,
    fixed: Boolean,
    grow: Boolean,
    icons: Boolean,
    mobileBreakPoint: {
      type: [Number, String],
      default: 1024
    },
    value: String,
    scrollable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'tabs': true,
        'tabs--centered': this.centered,
        'tabs--fixed': this.fixed,
        'tabs--grow': this.grow,
        'tabs--icons': this.icons,
        'tabs--mobile': this.isMobile,
        'tabs--scroll-bars': this.scrollable,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  watch: {
    value: function value() {
      this.tabClick(this.value);
    },
    activeIndex: function activeIndex() {
      this.updateTabs();
      this.$emit('input', this.target);
      this.isBooted = true;
    },
    tabItems: function tabItems(newItems, oldItems) {
      var _this2 = this;

      // Tab item got removed
      if (oldItems.length > newItems.length) {
        if (!newItems.find(function (o) {
          return o.id === _this2.target;
        })) {
          var i = oldItems.findIndex(function (o) {
            return o.id === _this2.target;
          });

          this.$nextTick(function () {
            _this2.activeIndex = _this2.tabItems[i > 0 ? i - 1 : 0].id;
            _this2.target = _this2.activeIndex;
          });
        }
      }
      this.slider();
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$vuetify.load(function () {
      // // This is a workaround to detect if link is active
      // // when being used as a router or nuxt link
      var i = _this3.tabItems.findIndex(function (_ref) {
        var el = _ref.el;

        return el.firstChild.classList.contains('tabs__item--active');
      });

      var tab = _this3.value || (_this3.tabItems[i !== -1 ? i : 0] || {}).id;

      tab && _this3.tabClick(tab) && _this3.onResize();
    });
  },


  methods: {
    registerContent: function registerContent(id, toggle) {
      this.content.push({ id: id, toggle: toggle });
    },
    registerTabItem: function registerTabItem(id, toggle, el) {
      this.tabItems.push({ id: id, toggle: toggle, el: el });
    },
    unregisterContent: function unregisterContent(id) {
      this.content = this.content.filter(function (o) {
        return o.id !== id;
      });
    },
    unregisterTabItem: function unregisterTabItem(id) {
      this.tabItems = this.tabItems.filter(function (o) {
        return o.id !== id;
      });
    },
    onResize: function onResize() {
      this.isMobile = window.innerWidth < this.mobileBreakPoint;
      this.slider();
    },
    slider: function slider(el) {
      var _this4 = this;

      this.tabsSlider = this.tabsSlider || this.$el.querySelector('.tabs__slider');

      this.tabsContainer = this.tabsContainer || this.$el.querySelector('.tabs__container');

      if (!this.tabsSlider || !this.tabsContainer) return;

      this.targetEl = el || this.targetEl;

      if (!this.targetEl) return;

      // Gives DOM time to paint when
      // processing slider for
      // dynamic tabs
      this.$nextTick(function () {
        // #684 Calculate width as %
        var width = _this4.targetEl.scrollWidth / _this4.tabsContainer.clientWidth * 100;

        _this4.tabsSlider.style.width = width + '%';
        _this4.tabsSlider.style.left = _this4.targetEl.offsetLeft + 'px';
      });
    },
    tabClick: function tabClick(target) {
      var _this5 = this;

      var setActiveIndex = function setActiveIndex(index) {
        if (_this5.activeIndex === index) {
          // #762 update tabs display
          // In case tabs count got changed but activeIndex didn't
          _this5.updateTabs();
        } else {
          _this5.activeIndex = index;
        }
      };

      this.target = target;

      this.$nextTick(function () {
        var nextIndex = _this5.content.findIndex(function (o) {
          return o.id === target;
        });
        _this5.reverse = nextIndex < _this5.activeIndex;
        setActiveIndex(nextIndex);
      });
    },
    updateTabs: function updateTabs() {
      var _this6 = this;

      this.content.forEach(function (_ref2) {
        var toggle = _ref2.toggle;

        toggle(_this6.target, _this6.reverse, _this6.isBooted);
      });

      this.tabItems.forEach(function (_ref3) {
        var toggle = _ref3.toggle;

        toggle(_this6.target);
      });
    }
  },

  render: function render(h) {
    return h('div', {
      'class': this.classes,
      directives: [{
        name: 'resize',
        value: this.onResize
      }]
    }, this.$slots.default);
  }
});
'filehash UmRq6zLOyE/PMSGjosavN3PE3ks=';

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-tabs-item',

  inject: ['slider', 'tabClick', 'registerTabItem', 'unregisterTabItem'],

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */]],

  data: function data() {
    return {
      isActive: false
    };
  },


  props: {
    activeClass: {
      type: String,
      default: 'tabs__item--active'
    }
  },

  computed: {
    classes: function classes() {
      var classes = {
        'tabs__item': true,
        'tabs__item--disabled': this.disabled
      };

      classes[this.activeClass] = !this.to && this.isActive;

      return classes;
    },
    action: function action() {
      var to = this.to || this.href;

      if (!to || to === Object(to)) return this._uid;

      return to.replace('#', '');
    }
  },

  watch: {
    $route: function $route() {
      this.to && this.callSlider();
    }
  },

  mounted: function mounted() {
    this.registerTabItem(this.action, this.toggle, this.$el);
    this.callSlider();
  },
  beforeDestroy: function beforeDestroy() {
    this.unregisterTabItem(this.action);
  },


  methods: {
    callSlider: function callSlider() {
      var _this = this;

      setTimeout(function () {
        _this.$el.firstChild.classList.contains('tabs__item--active') && _this.slider(_this.$el);
      }, 0);
    },
    click: function click(e) {
      e.preventDefault();

      if (!this.to && !this.href) return;

      if (!this.to) {
        this.tabClick(this.action);
      }

      this.callSlider();
    },
    toggle: function toggle(action) {
      var _this2 = this;

      this.isActive = this.action === action;

      this.$nextTick(function () {
        _this2.isActive && _this2.slider(_this2.$el);
      });
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    return h('li', {
      'class': 'tabs__li'
    }, [h(tag, data, this.$slots.default)]);
  }
});
'filehash PYBxVjJrVeK5ZRj/b1Li/141f7I=';

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-tabs-content',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */]],

  inject: ['registerContent', 'unregisterContent'],

  components: {
    VTabTransition: __WEBPACK_IMPORTED_MODULE_1__transitions__["g" /* VTabTransition */],
    VTabReverseTransition: __WEBPACK_IMPORTED_MODULE_1__transitions__["f" /* VTabReverseTransition */]
  },

  data: function data() {
    return {
      isActive: false,
      reverse: false
    };
  },


  props: {
    id: {
      type: String,
      required: true
    },
    lazy: Boolean,
    transition: {
      type: [Boolean, String],
      default: 'tab-transition'
    },
    reverseTransition: {
      type: [Boolean, String],
      default: 'tab-reverse-transition'
    }
  },

  computed: {
    computedTransition: function computedTransition() {
      return this.reverse ? this.reverseTransition : this.transition;
    }
  },

  methods: {
    toggle: function toggle(target, reverse, showTransition) {
      this.$el.style.transition = !showTransition ? 'none' : null;
      this.reverse = reverse;
      this.isActive = this.id === target;
    }
  },

  mounted: function mounted() {
    this.registerContent(this.id, this.toggle);
  },
  beforeDestroy: function beforeDestroy() {
    this.unregisterContent(this.id);
  },
  render: function render(h) {
    var div = h('div', {
      'class': 'tabs__content',
      domProps: { id: this.id },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }, this.showLazyContent(this.$slots.default));

    if (!this.computedTransition) {
      return div;
    }

    return h('transition', {
      props: {
        name: this.computedTransition
      }
    }, [div]);
  }
});
'filehash Bg2jxjOMHvnzifyyXgY/OZOMn9g=';

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_resize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_touch__ = __webpack_require__(10);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-tabs-bar',

  directives: {
    Resize: __WEBPACK_IMPORTED_MODULE_1__directives_resize__["a" /* default */],
    Touch: __WEBPACK_IMPORTED_MODULE_2__directives_touch__["a" /* default */]
  },

  inject: ['isScrollable', 'isMobile'],

  data: function data() {
    return {
      isOverflowing: false,
      scrollOffset: 0,
      itemOffset: 0,
      startX: 0
    };
  },


  computed: {
    classes: function classes() {
      return {
        'tabs__bar': true
      };
    },
    containerClasses: function containerClasses() {
      return {
        'tabs__container': true
      };
    },
    wrapperClasses: function wrapperClasses() {
      return {
        'tabs__wrapper': true,
        'tabs__wrapper--scrollable': this.isScrollable(),
        'tabs__wrapper--overflow': this.isOverflowing
      };
    },
    containerStyles: function containerStyles() {
      return {
        'transform': 'translateX(' + -this.scrollOffset + 'px)'
      };
    },
    leftIconVisible: function leftIconVisible() {
      return !this.isMobile() && this.isScrollable() && this.isOverflowing && this.scrollOffset > 0;
    },
    rightIconVisible: function rightIconVisible() {
      if (this.isMobile() || !this.isScrollable() || !this.isOverflowing) return;

      // Check one scroll ahead to know the width of right-most item
      var container = this.$refs.container;
      var item = this.newOffsetRight(this.scrollOffset, this.itemOffset);
      var itemWidth = item && container.children[item.index].clientWidth || 0;
      var scrollOffset = this.scrollOffset + container.clientWidth;

      return container.scrollWidth - scrollOffset > itemWidth * 0.30;
    }
  },

  methods: {
    genContainer: function genContainer() {
      return this.$createElement('ul', {
        'class': this.containerClasses,
        'style': this.containerStyles,
        ref: 'container'
      }, this.$slots.default);
    },
    genIcon: function genIcon(direction) {
      var capitalize = direction.charAt(0).toUpperCase() + direction.slice(1);
      return this.$createElement(__WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */], {
        props: _defineProperty({}, '' + direction, true),
        style: { display: 'inline-flex' },
        on: {
          click: this['scroll' + capitalize]
        }
      }, 'chevron_' + direction);
    },
    genWrapper: function genWrapper() {
      return this.$createElement('div', {
        class: this.wrapperClasses,
        directives: [{
          name: 'touch',
          value: {
            start: this.start,
            move: this.move,
            end: this.end
          }
        }]
      }, [this.genContainer()]);
    },
    start: function start(e) {
      this.startX = this.scrollOffset + e.touchstartX;
      this.$refs.container.style.transition = 'none';
    },
    move: function move(e) {
      var offset = this.startX - e.touchmoveX;
      this.scrollOffset = offset;
    },
    end: function end(e) {
      this.onResize();
      var container = this.$refs.container;
      var scrollWidth = container.scrollWidth - this.$el.clientWidth / 2;
      container.style.transition = null;

      if (this.scrollOffset < 0 || !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.scrollOffset >= scrollWidth) {
        var lastItem = container.children[container.children.length - 1];
        this.scrollOffset = scrollWidth - lastItem.clientWidth;
      }
    },
    scrollLeft: function scrollLeft() {
      var _newOffset = this.newOffset('Left'),
          offset = _newOffset.offset,
          index = _newOffset.index;

      this.scrollOffset = offset;
      this.itemOffset = index;
    },
    scrollRight: function scrollRight() {
      var _newOffset2 = this.newOffset('Right'),
          offset = _newOffset2.offset,
          index = _newOffset2.index;

      this.scrollOffset = offset;
      this.itemOffset = index;
    },
    onResize: function onResize() {
      if (this._isDestroyed) return;

      var container = this.$refs.container;
      this.isOverflowing = container.clientWidth < container.scrollWidth;
    },
    newOffset: function newOffset(direction) {
      return this['newOffset' + direction](this.scrollOffset, this.itemOffset);
    },
    newOffsetLeft: function newOffsetLeft(currentOffset, currentIndex) {
      var container = this.$refs.container;
      var items = container.children;
      var offset = 0;

      for (var index = currentIndex - 1; index >= 0; index--) {
        if (!items[index].classList.contains('tabs__slider')) {
          var newOffset = offset + items[index].clientWidth;
          if (newOffset >= container.clientWidth) {
            return { offset: currentOffset - offset, index: index + 1 };
          }
          offset = newOffset;
        }
      }

      return { offset: 0, index: 0 };
    },
    newOffsetRight: function newOffsetRight(currentOffset, currentIndex) {
      var container = this.$refs.container;
      var items = container.children;
      var offset = currentOffset;

      for (var index = currentIndex; index < items.length; index++) {
        if (!items[index].classList.contains('tabs__slider')) {
          var newOffset = offset + items[index].clientWidth;
          if (newOffset > currentOffset + container.clientWidth) {
            return { offset: offset, index: index };
          }
          offset = newOffset;
        }
      }

      return null;
    }
  },

  render: function render(h) {
    return h('div', {
      'class': this.classes,
      directives: [{
        name: 'resize',
        value: this.onResize
      }]
    }, [this.genWrapper(), this.leftIconVisible ? this.genIcon('left') : null, this.rightIconVisible ? this.genIcon('right') : null]);
  }
});
'filehash NCggb73AGVzg+U6RiLWIcPgnJ5o=';

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTextField__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VTextField__);


__WEBPACK_IMPORTED_MODULE_0__VTextField___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTextField___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VTextField___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTextField___default.a);
'filehash 4SM6+Pebmvpt4JlP45sBBenCwOQ=';

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)
__webpack_require__(230)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(231),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VTextField/VTextField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41316810", Component.options)
  } else {
    hotAPI.reload("data-v-41316810", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-text-field',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */]],

  inheritAttrs: false,

  data: function data() {
    return {
      inputHeight: null,
      badInput: false
    };
  },


  props: {
    autofocus: Boolean,
    autoGrow: Boolean,
    box: Boolean,
    counter: [Number, String],
    fullWidth: Boolean,
    multiLine: Boolean,
    placeholder: String,
    prefix: String,
    rows: {
      default: 5
    },
    singleLine: Boolean,
    solo: Boolean,
    suffix: String,
    textarea: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field': true,
        'input-group--text-field-box': this.box,
        'input-group--single-line': this.singleLine || this.solo,
        'input-group--solo': this.solo,
        'input-group--multi-line': this.multiLine,
        'input-group--full-width': this.fullWidth,
        'input-group--prefix': this.prefix,
        'input-group--suffix': this.suffix,
        'input-group--textarea': this.textarea
      };
    },
    count: function count() {
      var inputLength = void 0;
      if (this.inputValue) inputLength = this.inputValue.toString().length;else inputLength = 0;

      return inputLength + ' / ' + this.counterLength;
    },
    counterLength: function counterLength() {
      var parsedLength = parseInt(this.counter, 10);
      return isNaN(parsedLength) ? 25 : parsedLength;
    },

    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);

        this.lazyValue = val;
      }
    },
    isDirty: function isDirty() {
      return this.lazyValue !== null && typeof this.lazyValue !== 'undefined' && this.lazyValue.toString().length > 0 || this.placeholder || this.badInput || ['time', 'date', 'datetime-local', 'week', 'month'].includes(this.type);
    }
  },

  watch: {
    focused: function focused(val) {
      !val && this.$emit('change', this.lazyValue);
    },
    value: function value() {
      this.lazyValue = this.value;
      !this.validateOnBlur && this.validate();
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      _this.multiLine && _this.autoGrow && _this.calculateInputHeight();
      _this.autofocus && _this.focus();
    });
  },


  methods: {
    calculateInputHeight: function calculateInputHeight() {
      var _this2 = this;

      this.inputHeight = null;

      this.$nextTick(function () {
        var height = _this2.$refs.input ? _this2.$refs.input.scrollHeight : 0;
        var minHeight = _this2.rows * 24;
        var inputHeight = height < minHeight ? minHeight : height;
        _this2.inputHeight = inputHeight;
      });
    },
    onInput: function onInput(e) {
      this.inputValue = e.target.value;
      this.badInput = e.target.validity && e.target.validity.badInput;
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    },
    blur: function blur(e) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.focused = false;
        _this3.validate();
      });
      this.$emit('blur', e);
    },
    focus: function focus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    genCounter: function genCounter() {
      return this.$createElement('div', {
        'class': {
          'input-group__counter': true,
          'input-group__counter--error': this.hasError
        }
      }, this.count);
    },
    genInput: function genInput() {
      var tag = this.multiLine || this.textarea ? 'textarea' : 'input';

      var data = {
        style: {
          'height': this.inputHeight && this.inputHeight + 'px'
        },
        domProps: {
          autofocus: this.autofocus,
          disabled: this.disabled,
          required: this.required,
          value: this.lazyValue
        },
        attrs: _extends({}, this.$attrs, {
          tabindex: this.tabindex,
          'aria-label': (!this.$attrs || !this.$attrs.id) && this.label // Label `for` will be set if we have an id
        }),
        on: _extends({}, this.$listeners, {
          blur: this.blur,
          input: this.onInput,
          focus: this.focus
        }),
        ref: 'input'
      };

      if (this.placeholder) data.domProps.placeholder = this.placeholder;

      if (!this.textarea && !this.multiLine) {
        data.domProps.type = this.type;
      } else {
        data.domProps.rows = this.rows;
      }

      var children = [this.$createElement(tag, data)];

      this.prefix && children.unshift(this.genFix('prefix'));
      this.suffix && children.push(this.genFix('suffix'));

      return children;
    },
    genFix: function genFix(type) {
      return this.$createElement('span', {
        'class': 'input-group--text-field__' + type
      }, this[type]);
    }
  },

  render: function render() {
    return this.genInputGroup(this.genInput(), { attrs: { tabindex: false } });
  }
});
'filehash 3pQswjDABRduYbHPr63ApQTLowY=';

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTimePicker__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTimePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VTimePicker__);


__WEBPACK_IMPORTED_MODULE_0__VTimePicker___default.a.install = function install(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VTimePicker___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VTimePicker___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__VTimePicker___default.a);
'filehash uY+i9uzhh2iEoSMoaWx5krBaIN8=';

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)
__webpack_require__(235)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(236),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VTimePicker/VTimePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d7179d8", Component.options)
  } else {
    hotAPI.reload("data-v-1d7179d8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VCard__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_picker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_time_title__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_time_body__ = __webpack_require__(238);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-time-picker',

  components: {
    VCard: __WEBPACK_IMPORTED_MODULE_1__VCard__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_time_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_time_title__["a" /* default */]],

  data: function data() {
    return {
      isDragging: false,
      rotate: 0,
      originalTime: this.value,
      period: 'am',
      selectingHour: true,
      ranges: {
        hours: Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createRange */])(24),
        minutes: Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createRange */])(60)
      }
    };
  },


  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].includes(val);
      }
    },
    allowedHours: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    },
    allowedMinutes: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    }
  },

  computed: {
    is24hr: function is24hr() {
      return this.format !== 'ampm';
    },
    is24hrAfter12: function is24hrAfter12() {
      return this.selectingHour && this.is24hr && this.hour >= 12;
    },
    divider: function divider() {
      return this.selectingHour ? 12 : 60;
    },
    degrees: function degrees() {
      return this.degreesPerUnit * Math.PI / 180;
    },
    degreesPerUnit: function degreesPerUnit() {
      return 360 / this.divider;
    },

    inputTime: {
      get: function get() {
        if (this.value && !(this.value instanceof Date)) {
          if (!this.is24hr) {
            this.period = this.value.match(/pm/i) ? 'pm' : 'am';
          }

          return this.value;
        }
        var value = new Date();

        if (this.value instanceof Date) {
          value = this.value;
        }

        var hour = value.getHours();
        var minute = value.getMinutes();
        var period = '';

        if (!this.is24hr) {
          period = hour >= 12 ? 'pm' : 'am';
          hour = hour > 12 ? hour - 12 : hour;
          hour = hour === 0 ? 12 : hour;
        }

        period && (this.period = period);

        hour = this.firstAllowed('hour', hour);
        minute = this.firstAllowed('minute', minute);

        minute = minute < 10 ? '0' + minute : minute > 59 ? '00' : minute;

        return hour + ':' + minute + period;
      },
      set: function set(val) {
        return this.$emit('input', val);
      }
    },
    timeArray: function timeArray() {
      return this.inputTime.replace(/(am|pm)/, '').split(':');
    },

    hour: {
      get: function get() {
        return parseInt(this.timeArray[0]);
      },
      set: function set(val) {
        if (!this.is24hr) {
          val = val > 12 ? val - 12 : val < 1 ? 12 : val;
        } else {
          val = val < 10 ? '0' + val : val > 23 ? '00' : val;
        }

        this.inputTime = val + ':' + this.minute + (!this.is24hr ? this.period : '');
      }
    },
    minute: {
      get: function get() {
        var minute = parseInt(this.timeArray[1]);

        return minute < 10 ? '0' + minute : minute > 59 ? '00' : minute;
      },
      set: function set(val) {
        val = val < 10 ? '0' + parseInt(val) : val > 59 ? '00' : val;
        var hour = this.hour;

        if (this.is24hr && hour < 10) {
          hour = '0' + hour;
        }

        this.inputTime = hour + ':' + val + (!this.is24hr ? this.period : '');
      }
    },
    clockHand: function clockHand() {
      if (this.selectingHour) return this.degreesPerUnit * this.hour;
      return this.degreesPerUnit * this.minute;
    },
    radius: function radius() {
      return this.clockSize / 2;
    },

    clockSize: {
      get: function get() {
        return this.size;
      },
      set: function set(val) {
        this.size = val;
      }
    },
    size: function size() {
      return this.landscape ? 250 : 280;
    }
  },

  watch: {
    period: function period(val) {
      var hour = !!this.allowedHours && this.selectingHour ? this.firstAllowed('hour', this.hour - 1) : this.hour;
      this.inputTime = hour + ':' + this.minute + val;
    },
    value: function value(val) {
      if (this.isSaving) {
        this.originalTime = this.inputTime;
        this.isSaving = false;
      }
    }
  },

  methods: {
    save: function save() {
      if (this.originalTime) {
        this.originalTime = this.value;
      } else {
        this.inputTime = this.inputTime;
        this.originalTime = this.inputTime;
      }

      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    cancel: function cancel() {
      this.inputTime = this.originalTime;
      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    isAllowed: function isAllowed(type, value) {
      var allowed = this['allowed' + (type.charAt(0).toUpperCase() + type.slice(1)) + 's'];

      if (!allowed) return true;

      if (Array.isArray(allowed)) {
        return !!allowed.find(function (v) {
          return v === value;
        });
      } else if (allowed instanceof Function) {
        return allowed(value);
      } else if (allowed === Object(allowed)) {
        var range = type === 'minute' ? this.ranges.minutes : this.ranges.hours;
        var mod = type === 'minute' ? 60 : 24;

        if (allowed.min === String(allowed.min)) {
          allowed.min = this.convert12to24hr(allowed.min);
        }

        if (allowed.max === String(allowed.max)) {
          allowed.max = this.convert12to24hr(allowed.max);
        }

        var steps = allowed.max - allowed.min;
        value = type === 'hour' && !this.is24hr && this.period === 'pm' ? value + 12 : value;

        for (var i = 0; i <= steps; i++) {
          var index = (allowed.min + i) % mod;
          if (range[index] === value) return true;
        }

        return false;
      }

      return true;
    },
    convert12to24hr: function convert12to24hr(input) {
      input = input.toLowerCase();
      var pm = input.indexOf('pm') !== -1;
      var hour = parseInt(input.slice(0, input.indexOf(pm ? 'pm' : 'am')));

      return pm ? hour + 12 : hour;
    },
    generateRange: function generateRange(type, start) {
      var range = type === 'hour' ? this.ranges.hours : this.ranges.minutes;
      var offset = 1;

      if (type === 'hour' && !this.is24hr) {
        range = range.slice(1, 13);
        offset = 0;
      }

      return range.slice(start + offset, range.length).concat(range.slice(0, start + offset));
    },
    firstAllowed: function firstAllowed(type, value) {
      var _this = this;

      var allowed = this['allowed' + (type.charAt(0).toUpperCase() + type.slice(1)) + 's'];

      if (!allowed) return value;

      var range = this.generateRange(type, value);

      var first = range.find(function (v) {
        return _this.isAllowed(type, v);
      });

      return first || value;
    }
  },

  render: function render(h) {
    var children = [this.genBody()];

    !this.noTitle && children.unshift(this.genTitle());
    this.$scopedSlots.default && children.push(this.genSlot());

    return h('v-card', {
      'class': _extends({
        'picker picker--time': true,
        'picker--landscape': this.landscape,
        'picker--time--hours': this.selectingHour
      }, this.themeClasses)
    }, children);
  }
});
'filehash wmD0jfUwfesCbzNfB86tMTXPb2I=';

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTitle: function genTitle() {
      var children = [this.genTime()];

      if (this.format === 'ampm') {
        children.push(this.genAMPM());
      }

      return this.$createElement('div', {
        'class': 'picker__title'
      }, children);
    },
    genTime: function genTime() {
      var _this = this;

      var hour = this.hour;

      if (this.is24hr && hour < 10) {
        hour = '0' + hour;
      }

      return this.$createElement('div', {
        'class': 'picker--time__title'
      }, [this.$createElement('span', {
        'class': { active: this.selectingHour },
        on: {
          click: function click() {
            return _this.selectingHour = true;
          }
        }
      }, hour), this.$createElement('span', {
        'class': { active: !this.selectingHour },
        on: {
          click: function click() {
            return _this.selectingHour = false;
          }
        }
      }, ':' + this.minute)]);
    },
    genAMPM: function genAMPM() {
      return this.$createElement('div', [this.genPeriod('am'), this.genPeriod('pm')]);
    },
    genPeriod: function genPeriod(period) {
      var _this2 = this;

      return this.$createElement('span', {
        'class': { active: this.period === period },
        on: { click: function click() {
            return _this2.period = period;
          } }
      }, period.toUpperCase());
    }
  }
});
'filehash TW+o5PF6jFWNnr9XmMNmO2BXhoY=';

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      hasChanged: false
    };
  },

  methods: {
    genBody: function genBody() {
      var _this = this;

      var children = [this.genHand(this.selectingHour ? 'hour' : 'minute')];
      var data = {
        'class': 'picker--time__clock',
        on: {
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp,
          mouseleave: function mouseleave() {
            _this.isDragging && _this.onMouseUp();
          },
          touchstart: this.onMouseDown,
          touchend: this.onMouseUp,
          mousemove: this.onDragMove,
          touchmove: this.onDragMove
        },
        key: this.selectingHour ? 'hour' : 'minute',
        ref: 'clock'
      };

      this.selectingHour && children.push(this.genHours()) || children.push(this.genMinutes());

      if (this.scrollable) {
        data.on.wheel = function (e) {
          e.preventDefault();

          var diff = e.wheelDelta > 0 ? 1 : -1;
          var changing = _this.selectingHour ? 'changeHour' : 'changeMinute';

          _this[changing](diff);
        };
      }

      return this.$createElement('div', {
        'class': 'picker__body'
      }, [this.$createElement('transition', {
        props: {
          name: 'fade-transition',
          mode: 'out-in'
        }
      }, [this.$createElement('div', data, children)])]);
    },
    genHand: function genHand(type) {
      var scale = this.is24hrAfter12 ? 'scaleY(0.6)' : '';
      return [this.$createElement('div', {
        'class': 'picker--time__clock-hand ' + type,
        style: {
          transform: 'rotate(' + this.clockHand + 'deg) ' + scale
        }
      })];
    },
    genHours: function genHours() {
      var hours = this.is24hr ? 24 : 12;
      var children = [];
      var start = 0;

      if (hours === 12) {
        hours++;
        start = 1;
      }

      for (var i = start; i < hours; i++) {
        children.push(this.$createElement('span', {
          'class': {
            'active': i === this.hour,
            'disabled': !this.isAllowed('hour', i)
          },
          style: this.getTransform(i),
          domProps: { innerHTML: '<span>' + i + '</span>' }
        }));
      }

      return children;
    },
    genMinutes: function genMinutes() {
      var children = [];

      for (var i = 0; i < 60; i = i + 5) {
        var num = i;

        if (num < 10) num = '0' + num;
        if (num === 60) num = '00';

        children.push(this.$createElement('span', {
          'class': {
            'active': num.toString() === this.minute.toString(),
            'disabled': !this.isAllowed('minute', i)
          },
          style: this.getTransform(i),
          domProps: { innerHTML: '<span>' + num + '</span>' }
        }));
      }

      return children;
    },
    getTransform: function getTransform(i) {
      var _getPosition = this.getPosition(i),
          x = _getPosition.x,
          y = _getPosition.y;

      return { transform: 'translate(' + x + 'px, ' + y + 'px)' };
    },
    getPosition: function getPosition(i) {
      var radiusPercentage = this.selectingHour && this.is24hr && i >= 12 ? 0.5 : 0.8;
      var r = this.radius * radiusPercentage;
      i = this.selectingHour && this.is24hr ? i % 12 : i;
      return {
        x: Math.round(Math.sin(i * this.degrees) * r),
        y: Math.round(-Math.cos(i * this.degrees) * r)
      };
    },
    changeHour: function changeHour(time) {
      var _this2 = this;

      var range = this.generateRange('hour', this.hour);

      time < 0 && (range = range.reverse().slice(1));
      this.hour = range.find(function (h) {
        return _this2.allowedHours ? _this2.isAllowed('hour', h) : true;
      });

      return true;
    },
    changeMinute: function changeMinute(time) {
      var _this3 = this;

      var current = Number(this.minute);
      var range = this.generateRange('minute', current);

      time < 0 && (range = range.reverse().slice(1));
      var minute = range.find(function (m) {
        return _this3.allowedMinutes ? _this3.isAllowed('minute', m) : true;
      });

      this.minute = minute < 10 ? '0' + minute : minute;

      return true;
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();

      this.isDragging = true;
      this.onDragMove(e);
    },
    onMouseUp: function onMouseUp() {
      this.isDragging = false;
      !this.selectingHour && this.autosave && this.save();
      if (this.hasChanged) {
        this.selectingHour = false;
        this.hasChanged = false;
      }
    },
    onDragMove: function onDragMove(e) {
      e.preventDefault();
      if (!this.isDragging && e.type !== 'click') return;

      var rect = this.$refs.clock.getBoundingClientRect();
      var center = { x: rect.width / 2, y: 0 - rect.width / 2 };
      var clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      var coords = {
        y: rect.top - clientY,
        x: clientX - rect.left
      };

      var selecting = this.selectingHour ? 'hour' : 'minute';
      var value = Math.round(this.angle(center, coords) / this.degreesPerUnit);

      if (this.selectingHour && this.is24hr) {
        var insideClick = this.euclidean(center, coords) / this.radius < 0.65;
        value = insideClick ? value + 12 : value;

        // Necessary to fix edge case when selecting left part of 0 and 12
        value = this.angle(center, coords) >= 345 ? (value + 12) % 24 : value;
      }

      if (this.isAllowed(selecting, value)) {
        this[selecting] = value;
        this.hasChanged = true;
      }
    },
    euclidean: function euclidean(p0, p1) {
      var dx = Math.abs(p1.x - p0.x);
      var dy = Math.abs(p1.y - p0.y);

      return Math.sqrt(dx * dx + dy * dy);
    },
    angle: function angle(center, p1) {
      var p0 = {
        x: center.x,
        y: center.y + Math.sqrt(Math.abs(p1.x - center.x) * Math.abs(p1.x - center.x) + Math.abs(p1.y - center.y) * Math.abs(p1.y - center.y))
      };

      var value = 2 * Math.atan2(p1.y - p0.y, p1.x - p0.x);
      return Math.abs(value * 180 / Math.PI);
    }
  }
});
'filehash Ty049LFdB7mNHuyBnbCbExcTJBo=';

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VToolbarTitle */
/* unused harmony export VToolbarItems */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VToolbar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VToolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VToolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VToolbarSideIcon__ = __webpack_require__(243);
/* unused harmony reexport VToolbar */
/* unused harmony reexport VToolbarSideIcon */






var VToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('toolbar__title');
var VToolbarItems = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('toolbar__items');

__WEBPACK_IMPORTED_MODULE_1__VToolbar___default.a.install = function install(Vue) {
  Vue.component('v-toolbar', __WEBPACK_IMPORTED_MODULE_1__VToolbar___default.a);
  Vue.component('v-toolbar-items', VToolbarItems);
  Vue.component('v-toolbar-title', VToolbarTitle);
  Vue.component('v-toolbar-side-icon', __WEBPACK_IMPORTED_MODULE_2__VToolbarSideIcon__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__VToolbar___default.a);
'filehash 7cbbcPrk44KOBsc1+G00aBAue4c=';

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(241)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(242),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/homeserver/Sites/vuetify.js/vuetify/src/components/VToolbar/VToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-675ad650", Component.options)
  } else {
    hotAPI.reload("data-v-675ad650", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 241 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-toolbar',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      isExtended: false
    };
  },

  props: {
    absolute: Boolean,
    card: Boolean,
    dense: Boolean,
    extended: Boolean,
    fixed: Boolean,
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'toolbar': true,
        'elevation-0': this.flat,
        'toolbar--absolute': this.absolute,
        'toolbar--card': this.card,
        'toolbar--dense': this.dense,
        'toolbar--fixed': this.fixed,
        'toolbar--floating': this.floating,
        'toolbar--prominent': this.prominent,
        'toolbar--extended': this.isExtended,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  render: function render(h) {
    this.isExtended = this.extended || !!this.$slots.extension;
    var children = [];
    var data = {
      'class': this.classes,
      on: this.$listeners
    };

    children.push(h('div', {
      'class': 'toolbar__content'
    }, this.$slots.default));

    if (this.isExtended) {
      children.push(h('div', {
        'class': 'toolbar__extension'
      }, this.$slots.extension));
    }

    return h('nav', data, children);
  }
});
'filehash G+QSmG7tHR8nuzZOW68JHCy6YkY=';

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VBtn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VIcon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-toolbar-side-icon',

  functional: true,

  render: function render(h, _ref) {
    var slots = _ref.slots,
        listeners = _ref.listeners,
        props = _ref.props,
        data = _ref.data;

    var classes = data.staticClass ? data.staticClass + ' toolbar__side-icon' : 'toolbar__side-icon';

    var d = Object.assign(data, {
      staticClass: classes,
      props: Object.assign(props, {
        icon: true
      }),
      on: listeners
    });

    var defaultSlot = slots().default;

    return h(__WEBPACK_IMPORTED_MODULE_0__components_VBtn__["a" /* default */], d, defaultSlot || [h(__WEBPACK_IMPORTED_MODULE_1__components_VIcon__["a" /* default */], 'menu')]);
  }
});
'filehash 6TBvVt1Ftd4owkWuYb8NzSQwD3k=';

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = install;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__click_outside__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ripple__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scroll__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tooltip__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__touch__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_0__badge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return __WEBPACK_IMPORTED_MODULE_1__click_outside__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return __WEBPACK_IMPORTED_MODULE_3__ripple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Resize", function() { return __WEBPACK_IMPORTED_MODULE_2__resize__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return __WEBPACK_IMPORTED_MODULE_4__scroll__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_5__tooltip__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_6__touch__["a"]; });










function install(Vue) {
  Vue.directive('badge', __WEBPACK_IMPORTED_MODULE_0__badge__["a" /* default */]);
  Vue.directive('click-outside', __WEBPACK_IMPORTED_MODULE_1__click_outside__["a" /* default */]);
  Vue.directive('ripple', __WEBPACK_IMPORTED_MODULE_3__ripple__["a" /* default */]);
  Vue.directive('resize', __WEBPACK_IMPORTED_MODULE_2__resize__["a" /* default */]);
  Vue.directive('scroll', __WEBPACK_IMPORTED_MODULE_4__scroll__["a" /* default */]);
  Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_5__tooltip__["a" /* default */]);
  Vue.directive('touch', __WEBPACK_IMPORTED_MODULE_6__touch__["a" /* default */]);
}
'filehash BOgk2qigvcHLW+gNTkyk4BUHW6A=';

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);


__webpack_require__(246);

function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* directiveConfig */])(binding, {
    icon: false,
    left: false,
    bottom: false,
    overlap: false,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  if (config.overlap) el.classList.add('badge--overlap');
  if (config.icon) el.classList.add('badge--icon');
  if (config.left) el.classList.add('badge--left');
  if (config.bottom) el.classList.add('badge--bottom');

  el.dataset.badge = config.value;
  el.classList.add('badge');
}

function unbind(el) {
  el.removeAttribute('data-badge');
  el.classList.remove('badge');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'badge',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});
'filehash HbQFZEoqrzYhCFZz9N53/mMUsSk=';

/***/ }),
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function inserted(el, binding) {
  var callback = typeof binding.value === 'function' ? binding.value : binding.value.callback;
  var options = binding.value.options || { passive: true };
  var target = binding.value.target || window;
  if (target === 'undefined') return;

  if (target !== window) {
    target = document.querySelector(target);
  }

  target.addEventListener('scroll', callback, options);

  el._onScroll = {
    target: target,
    options: options
  };
}

function unbind(el, binding) {
  var _el$_onScroll = el._onScroll,
      target = _el$_onScroll.target,
      options = _el$_onScroll.options;


  target.removeEventListener('scroll', binding.callback, options);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'scroll',
  inserted: inserted,
  unbind: unbind
});
'filehash VK/ahE0J60Bl+je039colxbZAGI=';

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(2);


__webpack_require__(249);

function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* directiveConfig */])(binding, {
    top: true,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  unbind(el, binding, config);

  el.dataset.tooltip = config.html;
  el.dataset['tooltipLocation'] = config.value;
}

function unbind(el) {
  el.removeAttribute('data-tooltip');
  el.removeAttribute('data-tooltip-location');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tooltip',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});
'filehash 0kOu5bT4vxj/0ojDHh/AuFCA5GY=';

/***/ }),
/* 249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=vuetify.js.map

/***/ }),
/* 5 */
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 6),
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-243264a5","hasScoped":false}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 10),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/s0up/Documents/web_workspace/happyseller-mobile/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-243264a5", Component.options)
  } else {
    hotAPI.reload("data-v-243264a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dashboard__ = __webpack_require__(/*! ./components/Dashboard */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Dashboard__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    };
  },
  components: {
    dashboard: __WEBPACK_IMPORTED_MODULE_0__components_Dashboard___default.a
  }
});


/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./src/components/Dashboard.vue ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Dashboard.vue */ 8),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-59164672","hasScoped":false}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Dashboard.vue */ 9),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/s0up/Documents/web_workspace/happyseller-mobile/src/components/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59164672", Component.options)
  } else {
    hotAPI.reload("data-v-59164672", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Dashboard.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard',
  data: () => ({
    drawer: true,
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'featured_play_list', text: 'Playlists' },
      { icon: 'watch_later', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ]
  }),
  methods: {
    goTo(link){
      this.$router.push(link);
    }
  }
});


/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59164672","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Dashboard.vue ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "id": "example-2",
      "toolbar": ""
    }
  }, [_c('v-navigation-drawer', {
    attrs: {
      "fixed": "",
      "persistent": "",
      "light": "",
      "overflow": "",
      "enable-resize-watcher": "",
      "clipped": ""
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-list', {
    attrs: {
      "dense": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return _c('v-list-tile', {
      key: item.text
    }, [_c('v-list-tile-action', [_c('v-icon', [_vm._v(_vm._s(item.icon))])], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v("\n          " + _vm._s(item.text) + "\n        ")])], 1)], 1)
  }), _vm._v(" "), _c('v-subheader', {
    staticClass: "mt-3 grey--text text--darken-1"
  }, [_vm._v("SUBSCRIPTIONS")]), _vm._v(" "), _c('v-list', _vm._l((_vm.items2), function(item) {
    return _c('v-list-tile', {
      key: item.text,
      attrs: {
        "avatar": ""
      }
    }, [_c('v-list-tile-avatar', [_c('img', {
      attrs: {
        "src": ("https://randomuser.me/api/portraits/men/" + (item.picture) + ".jpg"),
        "alt": ""
      }
    })]), _vm._v(" "), _c('v-list-tile-title', {
      domProps: {
        "textContent": _vm._s(item.text)
      }
    })], 1)
  })), _vm._v(" "), _c('v-list-tile', {
    staticClass: "mt-3"
  }, [_c('v-list-tile-action', [_c('v-icon', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("add_circle_outline")])], 1), _vm._v(" "), _c('v-list-tile-title', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("Browse Channels")])], 1), _vm._v(" "), _c('v-list-tile', [_c('v-list-tile-action', [_c('v-icon', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("settings")])], 1), _vm._v(" "), _c('v-list-tile-title', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("Manage Subscriptions")])], 1)], 2)], 1), _vm._v(" "), _c('v-toolbar', {
    staticClass: "light-blue",
    attrs: {
      "dark": ""
    }
  }, [_c('v-toolbar-side-icon', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  }), _vm._v(" "), _c('v-toolbar-title', [_vm._v("HappySeller.com")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', {
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', [_vm._v("search")])], 1), _vm._v(" "), _c('v-btn', {
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', [_vm._v("view_module")])], 1)], 1), _vm._v(" "), _c('main', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59164672", module.exports)
  }
}

/***/ }),
/* 10 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-243264a5","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('dashboard')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-243264a5", module.exports)
  }
}

/***/ }),
/* 11 */
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(/*! vue-router */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_About__ = __webpack_require__(/*! ./components/About */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_About___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_About__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(/*! ./components/Home */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Home__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/about',
      component: __WEBPACK_IMPORTED_MODULE_2__components_About___default.a
    },
    {
      path: '/',
      component: __WEBPACK_IMPORTED_MODULE_3__components_Home___default.a
    }
  ]
}));


/***/ }),
/* 12 */
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (true) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 13 */
/*!**********************************!*\
  !*** ./src/components/About.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-b78a1280","hasScoped":false}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./About.vue */ 14),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/s0up/Documents/web_workspace/happyseller-mobile/src/components/About.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] About.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b78a1280", Component.options)
  } else {
    hotAPI.reload("data-v-b78a1280", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b78a1280","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/About.vue ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('v-card', {
    attrs: {
      "dark": ""
    }
  }, [_vm._v("This is the about page")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b78a1280", module.exports)
  }
}

/***/ }),
/* 15 */
/*!*********************************!*\
  !*** ./src/components/Home.vue ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Home.vue */ 16),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-141ea17c","hasScoped":false}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Home.vue */ 17),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/s0up/Documents/web_workspace/happyseller-mobile/src/components/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-141ea17c", Component.options)
  } else {
    hotAPI.reload("data-v-141ea17c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Home.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data () {
    return {
      tabs: ['tab-1', 'tab-2', 'tab-3'],
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    next () {
      this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
    }
  }
});


/***/ }),
/* 17 */
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-141ea17c","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Home.vue ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('v-tabs', {
    attrs: {
      "dark": ""
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, [_c('v-tabs-bar', {
    staticClass: "light-blue"
  }, [_vm._l((_vm.tabs), function(tab) {
    return _c('v-tabs-item', {
      key: tab,
      attrs: {
        "href": '#' + tab,
        "ripple": ""
      }
    }, [_vm._v("\n        Item " + _vm._s(tab.slice(-1)) + "\n      ")])
  }), _vm._v(" "), _c('v-tabs-slider', {
    staticClass: "yellow"
  })], 2), _vm._v(" "), _c('v-tabs-items', _vm._l((_vm.tabs), function(tab) {
    return _c('v-tabs-content', {
      key: tab,
      attrs: {
        "id": tab
      }
    }, [_c('v-card', {
      attrs: {
        "flat": ""
      }
    }, [_c('v-card-text', [_vm._v(_vm._s(_vm.text))])], 1)], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "text-xs-center mt-3"
  }, [_c('v-btn', {
    nativeOn: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  }, [_vm._v("next tab")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-141ea17c", module.exports)
  }
}

/***/ }),
/* 18 */
/*!***************************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.min.css ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 21 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 19);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);