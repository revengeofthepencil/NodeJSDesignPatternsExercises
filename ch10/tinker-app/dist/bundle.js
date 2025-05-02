/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/nunjucks/browser/nunjucks.js":
/*!***************************************************!*\
  !*** ./node_modules/nunjucks/browser/nunjucks.js ***!
  \***************************************************/
/***/ (function(module) {

/*! Browser bundle of nunjucks 3.2.4  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_617__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_617__);
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
/******/ 	__nested_webpack_require_617__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_617__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_617__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_617__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_617__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_617__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_617__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_617__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_617__(__nested_webpack_require_617__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var escapeMap = {
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&#39;',
  '<': '&lt;',
  '>': '&gt;',
  '\\': '&#92;'
};
var escapeRegex = /[&"'<>\\]/g;
var exports = module.exports = {};
function hasOwnProp(obj, k) {
  return ObjProto.hasOwnProperty.call(obj, k);
}
exports.hasOwnProp = hasOwnProp;
function lookupEscape(ch) {
  return escapeMap[ch];
}
function _prettifyError(path, withInternals, err) {
  if (!err.Update) {
    // not one of ours, cast it
    err = new exports.TemplateError(err);
  }
  err.Update(path);

  // Unless they marked the dev flag, show them a trace from here
  if (!withInternals) {
    var old = err;
    err = new Error(old.message);
    err.name = old.name;
  }
  return err;
}
exports._prettifyError = _prettifyError;
function TemplateError(message, lineno, colno) {
  var err;
  var cause;
  if (message instanceof Error) {
    cause = message;
    message = cause.name + ": " + cause.message;
  }
  if (Object.setPrototypeOf) {
    err = new Error(message);
    Object.setPrototypeOf(err, TemplateError.prototype);
  } else {
    err = this;
    Object.defineProperty(err, 'message', {
      enumerable: false,
      writable: true,
      value: message
    });
  }
  Object.defineProperty(err, 'name', {
    value: 'Template render error'
  });
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, this.constructor);
  }
  var getStack;
  if (cause) {
    var stackDescriptor = Object.getOwnPropertyDescriptor(cause, 'stack');
    getStack = stackDescriptor && (stackDescriptor.get || function () {
      return stackDescriptor.value;
    });
    if (!getStack) {
      getStack = function getStack() {
        return cause.stack;
      };
    }
  } else {
    var stack = new Error(message).stack;
    getStack = function getStack() {
      return stack;
    };
  }
  Object.defineProperty(err, 'stack', {
    get: function get() {
      return getStack.call(err);
    }
  });
  Object.defineProperty(err, 'cause', {
    value: cause
  });
  err.lineno = lineno;
  err.colno = colno;
  err.firstUpdate = true;
  err.Update = function Update(path) {
    var msg = '(' + (path || 'unknown path') + ')';

    // only show lineno + colno next to path of template
    // where error occurred
    if (this.firstUpdate) {
      if (this.lineno && this.colno) {
        msg += " [Line " + this.lineno + ", Column " + this.colno + "]";
      } else if (this.lineno) {
        msg += " [Line " + this.lineno + "]";
      }
    }
    msg += '\n ';
    if (this.firstUpdate) {
      msg += ' ';
    }
    this.message = msg + (this.message || '');
    this.firstUpdate = false;
    return this;
  };
  return err;
}
if (Object.setPrototypeOf) {
  Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
} else {
  TemplateError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: TemplateError
    }
  });
}
exports.TemplateError = TemplateError;
function escape(val) {
  return val.replace(escapeRegex, lookupEscape);
}
exports.escape = escape;
function isFunction(obj) {
  return ObjProto.toString.call(obj) === '[object Function]';
}
exports.isFunction = isFunction;
function isArray(obj) {
  return ObjProto.toString.call(obj) === '[object Array]';
}
exports.isArray = isArray;
function isString(obj) {
  return ObjProto.toString.call(obj) === '[object String]';
}
exports.isString = isString;
function isObject(obj) {
  return ObjProto.toString.call(obj) === '[object Object]';
}
exports.isObject = isObject;

/**
 * @param {string|number} attr
 * @returns {(string|number)[]}
 * @private
 */
function _prepareAttributeParts(attr) {
  if (!attr) {
    return [];
  }
  if (typeof attr === 'string') {
    return attr.split('.');
  }
  return [attr];
}

/**
 * @param {string}   attribute      Attribute value. Dots allowed.
 * @returns {function(Object): *}
 */
function getAttrGetter(attribute) {
  var parts = _prepareAttributeParts(attribute);
  return function attrGetter(item) {
    var _item = item;
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];

      // If item is not an object, and we still got parts to handle, it means
      // that something goes wrong. Just roll out to undefined in that case.
      if (hasOwnProp(_item, part)) {
        _item = _item[part];
      } else {
        return undefined;
      }
    }
    return _item;
  };
}
exports.getAttrGetter = getAttrGetter;
function groupBy(obj, val, throwOnUndefined) {
  var result = {};
  var iterator = isFunction(val) ? val : getAttrGetter(val);
  for (var i = 0; i < obj.length; i++) {
    var value = obj[i];
    var key = iterator(value, i);
    if (key === undefined && throwOnUndefined === true) {
      throw new TypeError("groupby: attribute \"" + val + "\" resolved to undefined");
    }
    (result[key] || (result[key] = [])).push(value);
  }
  return result;
}
exports.groupBy = groupBy;
function toArray(obj) {
  return Array.prototype.slice.call(obj);
}
exports.toArray = toArray;
function without(array) {
  var result = [];
  if (!array) {
    return result;
  }
  var length = array.length;
  var contains = toArray(arguments).slice(1);
  var index = -1;
  while (++index < length) {
    if (indexOf(contains, array[index]) === -1) {
      result.push(array[index]);
    }
  }
  return result;
}
exports.without = without;
function repeat(char_, n) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str += char_;
  }
  return str;
}
exports.repeat = repeat;
function each(obj, func, context) {
  if (obj == null) {
    return;
  }
  if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
    obj.forEach(func, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      func.call(context, obj[i], i, obj);
    }
  }
}
exports.each = each;
function map(obj, func) {
  var results = [];
  if (obj == null) {
    return results;
  }
  if (ArrayProto.map && obj.map === ArrayProto.map) {
    return obj.map(func);
  }
  for (var i = 0; i < obj.length; i++) {
    results[results.length] = func(obj[i], i);
  }
  if (obj.length === +obj.length) {
    results.length = obj.length;
  }
  return results;
}
exports.map = map;
function asyncIter(arr, iter, cb) {
  var i = -1;
  function next() {
    i++;
    if (i < arr.length) {
      iter(arr[i], i, next, cb);
    } else {
      cb();
    }
  }
  next();
}
exports.asyncIter = asyncIter;
function asyncFor(obj, iter, cb) {
  var keys = keys_(obj || {});
  var len = keys.length;
  var i = -1;
  function next() {
    i++;
    var k = keys[i];
    if (i < len) {
      iter(k, obj[k], i, len, next);
    } else {
      cb();
    }
  }
  next();
}
exports.asyncFor = asyncFor;
function indexOf(arr, searchElement, fromIndex) {
  return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
}
exports.indexOf = indexOf;
function keys_(obj) {
  /* eslint-disable no-restricted-syntax */
  var arr = [];
  for (var k in obj) {
    if (hasOwnProp(obj, k)) {
      arr.push(k);
    }
  }
  return arr;
}
exports.keys = keys_;
function _entries(obj) {
  return keys_(obj).map(function (k) {
    return [k, obj[k]];
  });
}
exports._entries = _entries;
function _values(obj) {
  return keys_(obj).map(function (k) {
    return obj[k];
  });
}
exports._values = _values;
function extend(obj1, obj2) {
  obj1 = obj1 || {};
  keys_(obj2).forEach(function (k) {
    obj1[k] = obj2[k];
  });
  return obj1;
}
exports._assign = exports.extend = extend;
function inOperator(key, val) {
  if (isArray(val) || isString(val)) {
    return val.indexOf(key) !== -1;
  } else if (isObject(val)) {
    return key in val;
  }
  throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
}
exports.inOperator = inOperator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_10801__) {

"use strict";


// A simple class system, more documentation to come
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var EventEmitter = __nested_webpack_require_10801__(16);
var lib = __nested_webpack_require_10801__(0);
function parentWrap(parent, prop) {
  if (typeof parent !== 'function' || typeof prop !== 'function') {
    return prop;
  }
  return function wrap() {
    // Save the current parent method
    var tmp = this.parent;

    // Set parent to the previous method, call, and restore
    this.parent = parent;
    var res = prop.apply(this, arguments);
    this.parent = tmp;
    return res;
  };
}
function extendClass(cls, name, props) {
  props = props || {};
  lib.keys(props).forEach(function (k) {
    props[k] = parentWrap(cls.prototype[k], props[k]);
  });
  var subclass = /*#__PURE__*/function (_cls) {
    _inheritsLoose(subclass, _cls);
    function subclass() {
      return _cls.apply(this, arguments) || this;
    }
    _createClass(subclass, [{
      key: "typename",
      get: function get() {
        return name;
      }
    }]);
    return subclass;
  }(cls);
  lib._assign(subclass.prototype, props);
  return subclass;
}
var Obj = /*#__PURE__*/function () {
  function Obj() {
    // Unfortunately necessary for backwards compatibility
    this.init.apply(this, arguments);
  }
  var _proto = Obj.prototype;
  _proto.init = function init() {};
  Obj.extend = function extend(name, props) {
    if (typeof name === 'object') {
      props = name;
      name = 'anonymous';
    }
    return extendClass(this, name, props);
  };
  _createClass(Obj, [{
    key: "typename",
    get: function get() {
      return this.constructor.name;
    }
  }]);
  return Obj;
}();
var EmitterObj = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(EmitterObj, _EventEmitter);
  function EmitterObj() {
    var _this2;
    var _this;
    _this = _EventEmitter.call(this) || this;
    // Unfortunately necessary for backwards compatibility
    (_this2 = _this).init.apply(_this2, arguments);
    return _this;
  }
  var _proto2 = EmitterObj.prototype;
  _proto2.init = function init() {};
  EmitterObj.extend = function extend(name, props) {
    if (typeof name === 'object') {
      props = name;
      name = 'anonymous';
    }
    return extendClass(this, name, props);
  };
  _createClass(EmitterObj, [{
    key: "typename",
    get: function get() {
      return this.constructor.name;
    }
  }]);
  return EmitterObj;
}(EventEmitter);
module.exports = {
  Obj: Obj,
  EmitterObj: EmitterObj
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_14843__) {

"use strict";


var lib = __nested_webpack_require_14843__(0);
var arrayFrom = Array.from;
var supportsIterators = typeof Symbol === 'function' && Symbol.iterator && typeof arrayFrom === 'function';

// Frames keep track of scoping both at compile-time and run-time so
// we know how to access variables. Block tags can introduce special
// variables, for example.
var Frame = /*#__PURE__*/function () {
  function Frame(parent, isolateWrites) {
    this.variables = Object.create(null);
    this.parent = parent;
    this.topLevel = false;
    // if this is true, writes (set) should never propagate upwards past
    // this frame to its parent (though reads may).
    this.isolateWrites = isolateWrites;
  }
  var _proto = Frame.prototype;
  _proto.set = function set(name, val, resolveUp) {
    // Allow variables with dots by automatically creating the
    // nested structure
    var parts = name.split('.');
    var obj = this.variables;
    var frame = this;
    if (resolveUp) {
      if (frame = this.resolve(parts[0], true)) {
        frame.set(name, val);
        return;
      }
    }
    for (var i = 0; i < parts.length - 1; i++) {
      var id = parts[i];
      if (!obj[id]) {
        obj[id] = {};
      }
      obj = obj[id];
    }
    obj[parts[parts.length - 1]] = val;
  };
  _proto.get = function get(name) {
    var val = this.variables[name];
    if (val !== undefined) {
      return val;
    }
    return null;
  };
  _proto.lookup = function lookup(name) {
    var p = this.parent;
    var val = this.variables[name];
    if (val !== undefined) {
      return val;
    }
    return p && p.lookup(name);
  };
  _proto.resolve = function resolve(name, forWrite) {
    var p = forWrite && this.isolateWrites ? undefined : this.parent;
    var val = this.variables[name];
    if (val !== undefined) {
      return this;
    }
    return p && p.resolve(name);
  };
  _proto.push = function push(isolateWrites) {
    return new Frame(this, isolateWrites);
  };
  _proto.pop = function pop() {
    return this.parent;
  };
  return Frame;
}();
function makeMacro(argNames, kwargNames, func) {
  return function macro() {
    for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      macroArgs[_key] = arguments[_key];
    }
    var argCount = numArgs(macroArgs);
    var args;
    var kwargs = getKeywordArgs(macroArgs);
    if (argCount > argNames.length) {
      args = macroArgs.slice(0, argNames.length);

      // Positional arguments that should be passed in as
      // keyword arguments (essentially default values)
      macroArgs.slice(args.length, argCount).forEach(function (val, i) {
        if (i < kwargNames.length) {
          kwargs[kwargNames[i]] = val;
        }
      });
      args.push(kwargs);
    } else if (argCount < argNames.length) {
      args = macroArgs.slice(0, argCount);
      for (var i = argCount; i < argNames.length; i++) {
        var arg = argNames[i];

        // Keyword arguments that should be passed as
        // positional arguments, i.e. the caller explicitly
        // used the name of a positional arg
        args.push(kwargs[arg]);
        delete kwargs[arg];
      }
      args.push(kwargs);
    } else {
      args = macroArgs;
    }
    return func.apply(this, args);
  };
}
function makeKeywordArgs(obj) {
  obj.__keywords = true;
  return obj;
}
function isKeywordArgs(obj) {
  return obj && Object.prototype.hasOwnProperty.call(obj, '__keywords');
}
function getKeywordArgs(args) {
  var len = args.length;
  if (len) {
    var lastArg = args[len - 1];
    if (isKeywordArgs(lastArg)) {
      return lastArg;
    }
  }
  return {};
}
function numArgs(args) {
  var len = args.length;
  if (len === 0) {
    return 0;
  }
  var lastArg = args[len - 1];
  if (isKeywordArgs(lastArg)) {
    return len - 1;
  } else {
    return len;
  }
}

// A SafeString object indicates that the string should not be
// autoescaped. This happens magically because autoescaping only
// occurs on primitive string objects.
function SafeString(val) {
  if (typeof val !== 'string') {
    return val;
  }
  this.val = val;
  this.length = val.length;
}
SafeString.prototype = Object.create(String.prototype, {
  length: {
    writable: true,
    configurable: true,
    value: 0
  }
});
SafeString.prototype.valueOf = function valueOf() {
  return this.val;
};
SafeString.prototype.toString = function toString() {
  return this.val;
};
function copySafeness(dest, target) {
  if (dest instanceof SafeString) {
    return new SafeString(target);
  }
  return target.toString();
}
function markSafe(val) {
  var type = typeof val;
  if (type === 'string') {
    return new SafeString(val);
  } else if (type !== 'function') {
    return val;
  } else {
    return function wrapSafe(args) {
      var ret = val.apply(this, arguments);
      if (typeof ret === 'string') {
        return new SafeString(ret);
      }
      return ret;
    };
  }
}
function suppressValue(val, autoescape) {
  val = val !== undefined && val !== null ? val : '';
  if (autoescape && !(val instanceof SafeString)) {
    val = lib.escape(val.toString());
  }
  return val;
}
function ensureDefined(val, lineno, colno) {
  if (val === null || val === undefined) {
    throw new lib.TemplateError('attempted to output null or undefined value', lineno + 1, colno + 1);
  }
  return val;
}
function memberLookup(obj, val) {
  if (obj === undefined || obj === null) {
    return undefined;
  }
  if (typeof obj[val] === 'function') {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return obj[val].apply(obj, args);
    };
  }
  return obj[val];
}
function callWrap(obj, name, context, args) {
  if (!obj) {
    throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
  } else if (typeof obj !== 'function') {
    throw new Error('Unable to call `' + name + '`, which is not a function');
  }
  return obj.apply(context, args);
}
function contextOrFrameLookup(context, frame, name) {
  var val = frame.lookup(name);
  return val !== undefined ? val : context.lookup(name);
}
function handleError(error, lineno, colno) {
  if (error.lineno) {
    return error;
  } else {
    return new lib.TemplateError(error, lineno, colno);
  }
}
function asyncEach(arr, dimen, iter, cb) {
  if (lib.isArray(arr)) {
    var len = arr.length;
    lib.asyncIter(arr, function iterCallback(item, i, next) {
      switch (dimen) {
        case 1:
          iter(item, i, len, next);
          break;
        case 2:
          iter(item[0], item[1], i, len, next);
          break;
        case 3:
          iter(item[0], item[1], item[2], i, len, next);
          break;
        default:
          item.push(i, len, next);
          iter.apply(this, item);
      }
    }, cb);
  } else {
    lib.asyncFor(arr, function iterCallback(key, val, i, len, next) {
      iter(key, val, i, len, next);
    }, cb);
  }
}
function asyncAll(arr, dimen, func, cb) {
  var finished = 0;
  var len;
  var outputArr;
  function done(i, output) {
    finished++;
    outputArr[i] = output;
    if (finished === len) {
      cb(null, outputArr.join(''));
    }
  }
  if (lib.isArray(arr)) {
    len = arr.length;
    outputArr = new Array(len);
    if (len === 0) {
      cb(null, '');
    } else {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        switch (dimen) {
          case 1:
            func(item, i, len, done);
            break;
          case 2:
            func(item[0], item[1], i, len, done);
            break;
          case 3:
            func(item[0], item[1], item[2], i, len, done);
            break;
          default:
            item.push(i, len, done);
            func.apply(this, item);
        }
      }
    }
  } else {
    var keys = lib.keys(arr || {});
    len = keys.length;
    outputArr = new Array(len);
    if (len === 0) {
      cb(null, '');
    } else {
      for (var _i = 0; _i < keys.length; _i++) {
        var k = keys[_i];
        func(k, arr[k], _i, len, done);
      }
    }
  }
}
function fromIterator(arr) {
  if (typeof arr !== 'object' || arr === null || lib.isArray(arr)) {
    return arr;
  } else if (supportsIterators && Symbol.iterator in arr) {
    return arrayFrom(arr);
  } else {
    return arr;
  }
}
module.exports = {
  Frame: Frame,
  makeMacro: makeMacro,
  makeKeywordArgs: makeKeywordArgs,
  numArgs: numArgs,
  suppressValue: suppressValue,
  ensureDefined: ensureDefined,
  memberLookup: memberLookup,
  contextOrFrameLookup: contextOrFrameLookup,
  callWrap: callWrap,
  handleError: handleError,
  isArray: lib.isArray,
  keys: lib.keys,
  SafeString: SafeString,
  copySafeness: copySafeness,
  markSafe: markSafe,
  asyncEach: asyncEach,
  asyncAll: asyncAll,
  inOperator: lib.inOperator,
  fromIterator: fromIterator
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_23832__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var _require = __nested_webpack_require_23832__(1),
  Obj = _require.Obj;
function traverseAndCheck(obj, type, results) {
  if (obj instanceof type) {
    results.push(obj);
  }
  if (obj instanceof Node) {
    obj.findAll(type, results);
  }
}
var Node = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Node, _Obj);
  function Node() {
    return _Obj.apply(this, arguments) || this;
  }
  var _proto = Node.prototype;
  _proto.init = function init(lineno, colno) {
    var _arguments = arguments,
      _this = this;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    this.lineno = lineno;
    this.colno = colno;
    this.fields.forEach(function (field, i) {
      // The first two args are line/col numbers, so offset by 2
      var val = _arguments[i + 2];

      // Fields should never be undefined, but null. It makes
      // testing easier to normalize values.
      if (val === undefined) {
        val = null;
      }
      _this[field] = val;
    });
  };
  _proto.findAll = function findAll(type, results) {
    var _this2 = this;
    results = results || [];
    if (this instanceof NodeList) {
      this.children.forEach(function (child) {
        return traverseAndCheck(child, type, results);
      });
    } else {
      this.fields.forEach(function (field) {
        return traverseAndCheck(_this2[field], type, results);
      });
    }
    return results;
  };
  _proto.iterFields = function iterFields(func) {
    var _this3 = this;
    this.fields.forEach(function (field) {
      func(_this3[field], field);
    });
  };
  return Node;
}(Obj); // Abstract nodes
var Value = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Value, _Node);
  function Value() {
    return _Node.apply(this, arguments) || this;
  }
  _createClass(Value, [{
    key: "typename",
    get: function get() {
      return 'Value';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['value'];
    }
  }]);
  return Value;
}(Node); // Concrete nodes
var NodeList = /*#__PURE__*/function (_Node2) {
  _inheritsLoose(NodeList, _Node2);
  function NodeList() {
    return _Node2.apply(this, arguments) || this;
  }
  var _proto2 = NodeList.prototype;
  _proto2.init = function init(lineno, colno, nodes) {
    _Node2.prototype.init.call(this, lineno, colno, nodes || []);
  };
  _proto2.addChild = function addChild(node) {
    this.children.push(node);
  };
  _createClass(NodeList, [{
    key: "typename",
    get: function get() {
      return 'NodeList';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['children'];
    }
  }]);
  return NodeList;
}(Node);
var Root = NodeList.extend('Root');
var Literal = Value.extend('Literal');
var _Symbol = Value.extend('Symbol');
var Group = NodeList.extend('Group');
var ArrayNode = NodeList.extend('Array');
var Pair = Node.extend('Pair', {
  fields: ['key', 'value']
});
var Dict = NodeList.extend('Dict');
var LookupVal = Node.extend('LookupVal', {
  fields: ['target', 'val']
});
var If = Node.extend('If', {
  fields: ['cond', 'body', 'else_']
});
var IfAsync = If.extend('IfAsync');
var InlineIf = Node.extend('InlineIf', {
  fields: ['cond', 'body', 'else_']
});
var For = Node.extend('For', {
  fields: ['arr', 'name', 'body', 'else_']
});
var AsyncEach = For.extend('AsyncEach');
var AsyncAll = For.extend('AsyncAll');
var Macro = Node.extend('Macro', {
  fields: ['name', 'args', 'body']
});
var Caller = Macro.extend('Caller');
var Import = Node.extend('Import', {
  fields: ['template', 'target', 'withContext']
});
var FromImport = /*#__PURE__*/function (_Node3) {
  _inheritsLoose(FromImport, _Node3);
  function FromImport() {
    return _Node3.apply(this, arguments) || this;
  }
  var _proto3 = FromImport.prototype;
  _proto3.init = function init(lineno, colno, template, names, withContext) {
    _Node3.prototype.init.call(this, lineno, colno, template, names || new NodeList(), withContext);
  };
  _createClass(FromImport, [{
    key: "typename",
    get: function get() {
      return 'FromImport';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['template', 'names', 'withContext'];
    }
  }]);
  return FromImport;
}(Node);
var FunCall = Node.extend('FunCall', {
  fields: ['name', 'args']
});
var Filter = FunCall.extend('Filter');
var FilterAsync = Filter.extend('FilterAsync', {
  fields: ['name', 'args', 'symbol']
});
var KeywordArgs = Dict.extend('KeywordArgs');
var Block = Node.extend('Block', {
  fields: ['name', 'body']
});
var Super = Node.extend('Super', {
  fields: ['blockName', 'symbol']
});
var TemplateRef = Node.extend('TemplateRef', {
  fields: ['template']
});
var Extends = TemplateRef.extend('Extends');
var Include = Node.extend('Include', {
  fields: ['template', 'ignoreMissing']
});
var Set = Node.extend('Set', {
  fields: ['targets', 'value']
});
var Switch = Node.extend('Switch', {
  fields: ['expr', 'cases', 'default']
});
var Case = Node.extend('Case', {
  fields: ['cond', 'body']
});
var Output = NodeList.extend('Output');
var Capture = Node.extend('Capture', {
  fields: ['body']
});
var TemplateData = Literal.extend('TemplateData');
var UnaryOp = Node.extend('UnaryOp', {
  fields: ['target']
});
var BinOp = Node.extend('BinOp', {
  fields: ['left', 'right']
});
var In = BinOp.extend('In');
var Is = BinOp.extend('Is');
var Or = BinOp.extend('Or');
var And = BinOp.extend('And');
var Not = UnaryOp.extend('Not');
var Add = BinOp.extend('Add');
var Concat = BinOp.extend('Concat');
var Sub = BinOp.extend('Sub');
var Mul = BinOp.extend('Mul');
var Div = BinOp.extend('Div');
var FloorDiv = BinOp.extend('FloorDiv');
var Mod = BinOp.extend('Mod');
var Pow = BinOp.extend('Pow');
var Neg = UnaryOp.extend('Neg');
var Pos = UnaryOp.extend('Pos');
var Compare = Node.extend('Compare', {
  fields: ['expr', 'ops']
});
var CompareOperand = Node.extend('CompareOperand', {
  fields: ['expr', 'type']
});
var CallExtension = Node.extend('CallExtension', {
  init: function init(ext, prop, args, contentArgs) {
    this.parent();
    this.extName = ext.__name || ext;
    this.prop = prop;
    this.args = args || new NodeList();
    this.contentArgs = contentArgs || [];
    this.autoescape = ext.autoescape;
  },
  fields: ['extName', 'prop', 'args', 'contentArgs']
});
var CallExtensionAsync = CallExtension.extend('CallExtensionAsync');

// This is hacky, but this is just a debugging function anyway
function print(str, indent, inline) {
  var lines = str.split('\n');
  lines.forEach(function (line, i) {
    if (line && (inline && i > 0 || !inline)) {
      process.stdout.write(' '.repeat(indent));
    }
    var nl = i === lines.length - 1 ? '' : '\n';
    process.stdout.write("" + line + nl);
  });
}

// Print the AST in a nicely formatted tree format for debuggin
function printNodes(node, indent) {
  indent = indent || 0;
  print(node.typename + ': ', indent);
  if (node instanceof NodeList) {
    print('\n');
    node.children.forEach(function (n) {
      printNodes(n, indent + 2);
    });
  } else if (node instanceof CallExtension) {
    print(node.extName + "." + node.prop + "\n");
    if (node.args) {
      printNodes(node.args, indent + 2);
    }
    if (node.contentArgs) {
      node.contentArgs.forEach(function (n) {
        printNodes(n, indent + 2);
      });
    }
  } else {
    var nodes = [];
    var props = null;
    node.iterFields(function (val, fieldName) {
      if (val instanceof Node) {
        nodes.push([fieldName, val]);
      } else {
        props = props || {};
        props[fieldName] = val;
      }
    });
    if (props) {
      print(JSON.stringify(props, null, 2) + '\n', null, true);
    } else {
      print('\n');
    }
    nodes.forEach(function (_ref) {
      var fieldName = _ref[0],
        n = _ref[1];
      print("[" + fieldName + "] =>", indent + 2);
      printNodes(n, indent + 4);
    });
  }
}
module.exports = {
  Node: Node,
  Root: Root,
  NodeList: NodeList,
  Value: Value,
  Literal: Literal,
  Symbol: _Symbol,
  Group: Group,
  Array: ArrayNode,
  Pair: Pair,
  Dict: Dict,
  Output: Output,
  Capture: Capture,
  TemplateData: TemplateData,
  If: If,
  IfAsync: IfAsync,
  InlineIf: InlineIf,
  For: For,
  AsyncEach: AsyncEach,
  AsyncAll: AsyncAll,
  Macro: Macro,
  Caller: Caller,
  Import: Import,
  FromImport: FromImport,
  FunCall: FunCall,
  Filter: Filter,
  FilterAsync: FilterAsync,
  KeywordArgs: KeywordArgs,
  Block: Block,
  Super: Super,
  Extends: Extends,
  Include: Include,
  Set: Set,
  Switch: Switch,
  Case: Case,
  LookupVal: LookupVal,
  BinOp: BinOp,
  In: In,
  Is: Is,
  Or: Or,
  And: And,
  Not: Not,
  Add: Add,
  Concat: Concat,
  Sub: Sub,
  Mul: Mul,
  Div: Div,
  FloorDiv: FloorDiv,
  Mod: Mod,
  Pow: Pow,
  Neg: Neg,
  Pos: Pos,
  Compare: Compare,
  CompareOperand: CompareOperand,
  CallExtension: CallExtension,
  CallExtensionAsync: CallExtensionAsync,
  printNodes: printNodes
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_34467__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var parser = __nested_webpack_require_34467__(8);
var transformer = __nested_webpack_require_34467__(17);
var nodes = __nested_webpack_require_34467__(3);
var _require = __nested_webpack_require_34467__(0),
  TemplateError = _require.TemplateError;
var _require2 = __nested_webpack_require_34467__(2),
  Frame = _require2.Frame;
var _require3 = __nested_webpack_require_34467__(1),
  Obj = _require3.Obj;

// These are all the same for now, but shouldn't be passed straight
// through
var compareOps = {
  '==': '==',
  '===': '===',
  '!=': '!=',
  '!==': '!==',
  '<': '<',
  '>': '>',
  '<=': '<=',
  '>=': '>='
};
var Compiler = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Compiler, _Obj);
  function Compiler() {
    return _Obj.apply(this, arguments) || this;
  }
  var _proto = Compiler.prototype;
  _proto.init = function init(templateName, throwOnUndefined) {
    this.templateName = templateName;
    this.codebuf = [];
    this.lastId = 0;
    this.buffer = null;
    this.bufferStack = [];
    this._scopeClosers = '';
    this.inBlock = false;
    this.throwOnUndefined = throwOnUndefined;
  };
  _proto.fail = function fail(msg, lineno, colno) {
    if (lineno !== undefined) {
      lineno += 1;
    }
    if (colno !== undefined) {
      colno += 1;
    }
    throw new TemplateError(msg, lineno, colno);
  };
  _proto._pushBuffer = function _pushBuffer() {
    var id = this._tmpid();
    this.bufferStack.push(this.buffer);
    this.buffer = id;
    this._emit("var " + this.buffer + " = \"\";");
    return id;
  };
  _proto._popBuffer = function _popBuffer() {
    this.buffer = this.bufferStack.pop();
  };
  _proto._emit = function _emit(code) {
    this.codebuf.push(code);
  };
  _proto._emitLine = function _emitLine(code) {
    this._emit(code + '\n');
  };
  _proto._emitLines = function _emitLines() {
    var _this = this;
    for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {
      lines[_key] = arguments[_key];
    }
    lines.forEach(function (line) {
      return _this._emitLine(line);
    });
  };
  _proto._emitFuncBegin = function _emitFuncBegin(node, name) {
    this.buffer = 'output';
    this._scopeClosers = '';
    this._emitLine("function " + name + "(env, context, frame, runtime, cb) {");
    this._emitLine("var lineno = " + node.lineno + ";");
    this._emitLine("var colno = " + node.colno + ";");
    this._emitLine("var " + this.buffer + " = \"\";");
    this._emitLine('try {');
  };
  _proto._emitFuncEnd = function _emitFuncEnd(noReturn) {
    if (!noReturn) {
      this._emitLine('cb(null, ' + this.buffer + ');');
    }
    this._closeScopeLevels();
    this._emitLine('} catch (e) {');
    this._emitLine('  cb(runtime.handleError(e, lineno, colno));');
    this._emitLine('}');
    this._emitLine('}');
    this.buffer = null;
  };
  _proto._addScopeLevel = function _addScopeLevel() {
    this._scopeClosers += '})';
  };
  _proto._closeScopeLevels = function _closeScopeLevels() {
    this._emitLine(this._scopeClosers + ';');
    this._scopeClosers = '';
  };
  _proto._withScopedSyntax = function _withScopedSyntax(func) {
    var _scopeClosers = this._scopeClosers;
    this._scopeClosers = '';
    func.call(this);
    this._closeScopeLevels();
    this._scopeClosers = _scopeClosers;
  };
  _proto._makeCallback = function _makeCallback(res) {
    var err = this._tmpid();
    return 'function(' + err + (res ? ',' + res : '') + ') {\n' + 'if(' + err + ') { cb(' + err + '); return; }';
  };
  _proto._tmpid = function _tmpid() {
    this.lastId++;
    return 't_' + this.lastId;
  };
  _proto._templateName = function _templateName() {
    return this.templateName == null ? 'undefined' : JSON.stringify(this.templateName);
  };
  _proto._compileChildren = function _compileChildren(node, frame) {
    var _this2 = this;
    node.children.forEach(function (child) {
      _this2.compile(child, frame);
    });
  };
  _proto._compileAggregate = function _compileAggregate(node, frame, startChar, endChar) {
    var _this3 = this;
    if (startChar) {
      this._emit(startChar);
    }
    node.children.forEach(function (child, i) {
      if (i > 0) {
        _this3._emit(',');
      }
      _this3.compile(child, frame);
    });
    if (endChar) {
      this._emit(endChar);
    }
  };
  _proto._compileExpression = function _compileExpression(node, frame) {
    // TODO: I'm not really sure if this type check is worth it or
    // not.
    this.assertType(node, nodes.Literal, nodes.Symbol, nodes.Group, nodes.Array, nodes.Dict, nodes.FunCall, nodes.Caller, nodes.Filter, nodes.LookupVal, nodes.Compare, nodes.InlineIf, nodes.In, nodes.Is, nodes.And, nodes.Or, nodes.Not, nodes.Add, nodes.Concat, nodes.Sub, nodes.Mul, nodes.Div, nodes.FloorDiv, nodes.Mod, nodes.Pow, nodes.Neg, nodes.Pos, nodes.Compare, nodes.NodeList);
    this.compile(node, frame);
  };
  _proto.assertType = function assertType(node) {
    for (var _len2 = arguments.length, types = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      types[_key2 - 1] = arguments[_key2];
    }
    if (!types.some(function (t) {
      return node instanceof t;
    })) {
      this.fail("assertType: invalid type: " + node.typename, node.lineno, node.colno);
    }
  };
  _proto.compileCallExtension = function compileCallExtension(node, frame, async) {
    var _this4 = this;
    var args = node.args;
    var contentArgs = node.contentArgs;
    var autoescape = typeof node.autoescape === 'boolean' ? node.autoescape : true;
    if (!async) {
      this._emit(this.buffer + " += runtime.suppressValue(");
    }
    this._emit("env.getExtension(\"" + node.extName + "\")[\"" + node.prop + "\"](");
    this._emit('context');
    if (args || contentArgs) {
      this._emit(',');
    }
    if (args) {
      if (!(args instanceof nodes.NodeList)) {
        this.fail('compileCallExtension: arguments must be a NodeList, ' + 'use `parser.parseSignature`');
      }
      args.children.forEach(function (arg, i) {
        // Tag arguments are passed normally to the call. Note
        // that keyword arguments are turned into a single js
        // object as the last argument, if they exist.
        _this4._compileExpression(arg, frame);
        if (i !== args.children.length - 1 || contentArgs.length) {
          _this4._emit(',');
        }
      });
    }
    if (contentArgs.length) {
      contentArgs.forEach(function (arg, i) {
        if (i > 0) {
          _this4._emit(',');
        }
        if (arg) {
          _this4._emitLine('function(cb) {');
          _this4._emitLine('if(!cb) { cb = function(err) { if(err) { throw err; }}}');
          var id = _this4._pushBuffer();
          _this4._withScopedSyntax(function () {
            _this4.compile(arg, frame);
            _this4._emitLine("cb(null, " + id + ");");
          });
          _this4._popBuffer();
          _this4._emitLine("return " + id + ";");
          _this4._emitLine('}');
        } else {
          _this4._emit('null');
        }
      });
    }
    if (async) {
      var res = this._tmpid();
      this._emitLine(', ' + this._makeCallback(res));
      this._emitLine(this.buffer + " += runtime.suppressValue(" + res + ", " + autoescape + " && env.opts.autoescape);");
      this._addScopeLevel();
    } else {
      this._emit(')');
      this._emit(", " + autoescape + " && env.opts.autoescape);\n");
    }
  };
  _proto.compileCallExtensionAsync = function compileCallExtensionAsync(node, frame) {
    this.compileCallExtension(node, frame, true);
  };
  _proto.compileNodeList = function compileNodeList(node, frame) {
    this._compileChildren(node, frame);
  };
  _proto.compileLiteral = function compileLiteral(node) {
    if (typeof node.value === 'string') {
      var val = node.value.replace(/\\/g, '\\\\');
      val = val.replace(/"/g, '\\"');
      val = val.replace(/\n/g, '\\n');
      val = val.replace(/\r/g, '\\r');
      val = val.replace(/\t/g, '\\t');
      val = val.replace(/\u2028/g, "\\u2028");
      this._emit("\"" + val + "\"");
    } else if (node.value === null) {
      this._emit('null');
    } else {
      this._emit(node.value.toString());
    }
  };
  _proto.compileSymbol = function compileSymbol(node, frame) {
    var name = node.value;
    var v = frame.lookup(name);
    if (v) {
      this._emit(v);
    } else {
      this._emit('runtime.contextOrFrameLookup(' + 'context, frame, "' + name + '")');
    }
  };
  _proto.compileGroup = function compileGroup(node, frame) {
    this._compileAggregate(node, frame, '(', ')');
  };
  _proto.compileArray = function compileArray(node, frame) {
    this._compileAggregate(node, frame, '[', ']');
  };
  _proto.compileDict = function compileDict(node, frame) {
    this._compileAggregate(node, frame, '{', '}');
  };
  _proto.compilePair = function compilePair(node, frame) {
    var key = node.key;
    var val = node.value;
    if (key instanceof nodes.Symbol) {
      key = new nodes.Literal(key.lineno, key.colno, key.value);
    } else if (!(key instanceof nodes.Literal && typeof key.value === 'string')) {
      this.fail('compilePair: Dict keys must be strings or names', key.lineno, key.colno);
    }
    this.compile(key, frame);
    this._emit(': ');
    this._compileExpression(val, frame);
  };
  _proto.compileInlineIf = function compileInlineIf(node, frame) {
    this._emit('(');
    this.compile(node.cond, frame);
    this._emit('?');
    this.compile(node.body, frame);
    this._emit(':');
    if (node.else_ !== null) {
      this.compile(node.else_, frame);
    } else {
      this._emit('""');
    }
    this._emit(')');
  };
  _proto.compileIn = function compileIn(node, frame) {
    this._emit('runtime.inOperator(');
    this.compile(node.left, frame);
    this._emit(',');
    this.compile(node.right, frame);
    this._emit(')');
  };
  _proto.compileIs = function compileIs(node, frame) {
    // first, we need to try to get the name of the test function, if it's a
    // callable (i.e., has args) and not a symbol.
    var right = node.right.name ? node.right.name.value
    // otherwise go with the symbol value
    : node.right.value;
    this._emit('env.getTest("' + right + '").call(context, ');
    this.compile(node.left, frame);
    // compile the arguments for the callable if they exist
    if (node.right.args) {
      this._emit(',');
      this.compile(node.right.args, frame);
    }
    this._emit(') === true');
  };
  _proto._binOpEmitter = function _binOpEmitter(node, frame, str) {
    this.compile(node.left, frame);
    this._emit(str);
    this.compile(node.right, frame);
  }

  // ensure concatenation instead of addition
  // by adding empty string in between
  ;
  _proto.compileOr = function compileOr(node, frame) {
    return this._binOpEmitter(node, frame, ' || ');
  };
  _proto.compileAnd = function compileAnd(node, frame) {
    return this._binOpEmitter(node, frame, ' && ');
  };
  _proto.compileAdd = function compileAdd(node, frame) {
    return this._binOpEmitter(node, frame, ' + ');
  };
  _proto.compileConcat = function compileConcat(node, frame) {
    return this._binOpEmitter(node, frame, ' + "" + ');
  };
  _proto.compileSub = function compileSub(node, frame) {
    return this._binOpEmitter(node, frame, ' - ');
  };
  _proto.compileMul = function compileMul(node, frame) {
    return this._binOpEmitter(node, frame, ' * ');
  };
  _proto.compileDiv = function compileDiv(node, frame) {
    return this._binOpEmitter(node, frame, ' / ');
  };
  _proto.compileMod = function compileMod(node, frame) {
    return this._binOpEmitter(node, frame, ' % ');
  };
  _proto.compileNot = function compileNot(node, frame) {
    this._emit('!');
    this.compile(node.target, frame);
  };
  _proto.compileFloorDiv = function compileFloorDiv(node, frame) {
    this._emit('Math.floor(');
    this.compile(node.left, frame);
    this._emit(' / ');
    this.compile(node.right, frame);
    this._emit(')');
  };
  _proto.compilePow = function compilePow(node, frame) {
    this._emit('Math.pow(');
    this.compile(node.left, frame);
    this._emit(', ');
    this.compile(node.right, frame);
    this._emit(')');
  };
  _proto.compileNeg = function compileNeg(node, frame) {
    this._emit('-');
    this.compile(node.target, frame);
  };
  _proto.compilePos = function compilePos(node, frame) {
    this._emit('+');
    this.compile(node.target, frame);
  };
  _proto.compileCompare = function compileCompare(node, frame) {
    var _this5 = this;
    this.compile(node.expr, frame);
    node.ops.forEach(function (op) {
      _this5._emit(" " + compareOps[op.type] + " ");
      _this5.compile(op.expr, frame);
    });
  };
  _proto.compileLookupVal = function compileLookupVal(node, frame) {
    this._emit('runtime.memberLookup((');
    this._compileExpression(node.target, frame);
    this._emit('),');
    this._compileExpression(node.val, frame);
    this._emit(')');
  };
  _proto._getNodeName = function _getNodeName(node) {
    switch (node.typename) {
      case 'Symbol':
        return node.value;
      case 'FunCall':
        return 'the return value of (' + this._getNodeName(node.name) + ')';
      case 'LookupVal':
        return this._getNodeName(node.target) + '["' + this._getNodeName(node.val) + '"]';
      case 'Literal':
        return node.value.toString();
      default:
        return '--expression--';
    }
  };
  _proto.compileFunCall = function compileFunCall(node, frame) {
    // Keep track of line/col info at runtime by settings
    // variables within an expression. An expression in javascript
    // like (x, y, z) returns the last value, and x and y can be
    // anything
    this._emit('(lineno = ' + node.lineno + ', colno = ' + node.colno + ', ');
    this._emit('runtime.callWrap(');
    // Compile it as normal.
    this._compileExpression(node.name, frame);

    // Output the name of what we're calling so we can get friendly errors
    // if the lookup fails.
    this._emit(', "' + this._getNodeName(node.name).replace(/"/g, '\\"') + '", context, ');
    this._compileAggregate(node.args, frame, '[', '])');
    this._emit(')');
  };
  _proto.compileFilter = function compileFilter(node, frame) {
    var name = node.name;
    this.assertType(name, nodes.Symbol);
    this._emit('env.getFilter("' + name.value + '").call(context, ');
    this._compileAggregate(node.args, frame);
    this._emit(')');
  };
  _proto.compileFilterAsync = function compileFilterAsync(node, frame) {
    var name = node.name;
    var symbol = node.symbol.value;
    this.assertType(name, nodes.Symbol);
    frame.set(symbol, symbol);
    this._emit('env.getFilter("' + name.value + '").call(context, ');
    this._compileAggregate(node.args, frame);
    this._emitLine(', ' + this._makeCallback(symbol));
    this._addScopeLevel();
  };
  _proto.compileKeywordArgs = function compileKeywordArgs(node, frame) {
    this._emit('runtime.makeKeywordArgs(');
    this.compileDict(node, frame);
    this._emit(')');
  };
  _proto.compileSet = function compileSet(node, frame) {
    var _this6 = this;
    var ids = [];

    // Lookup the variable names for each identifier and create
    // new ones if necessary
    node.targets.forEach(function (target) {
      var name = target.value;
      var id = frame.lookup(name);
      if (id === null || id === undefined) {
        id = _this6._tmpid();

        // Note: This relies on js allowing scope across
        // blocks, in case this is created inside an `if`
        _this6._emitLine('var ' + id + ';');
      }
      ids.push(id);
    });
    if (node.value) {
      this._emit(ids.join(' = ') + ' = ');
      this._compileExpression(node.value, frame);
      this._emitLine(';');
    } else {
      this._emit(ids.join(' = ') + ' = ');
      this.compile(node.body, frame);
      this._emitLine(';');
    }
    node.targets.forEach(function (target, i) {
      var id = ids[i];
      var name = target.value;

      // We are running this for every var, but it's very
      // uncommon to assign to multiple vars anyway
      _this6._emitLine("frame.set(\"" + name + "\", " + id + ", true);");
      _this6._emitLine('if(frame.topLevel) {');
      _this6._emitLine("context.setVariable(\"" + name + "\", " + id + ");");
      _this6._emitLine('}');
      if (name.charAt(0) !== '_') {
        _this6._emitLine('if(frame.topLevel) {');
        _this6._emitLine("context.addExport(\"" + name + "\", " + id + ");");
        _this6._emitLine('}');
      }
    });
  };
  _proto.compileSwitch = function compileSwitch(node, frame) {
    var _this7 = this;
    this._emit('switch (');
    this.compile(node.expr, frame);
    this._emit(') {');
    node.cases.forEach(function (c, i) {
      _this7._emit('case ');
      _this7.compile(c.cond, frame);
      _this7._emit(': ');
      _this7.compile(c.body, frame);
      // preserve fall-throughs
      if (c.body.children.length) {
        _this7._emitLine('break;');
      }
    });
    if (node.default) {
      this._emit('default:');
      this.compile(node.default, frame);
    }
    this._emit('}');
  };
  _proto.compileIf = function compileIf(node, frame, async) {
    var _this8 = this;
    this._emit('if(');
    this._compileExpression(node.cond, frame);
    this._emitLine(') {');
    this._withScopedSyntax(function () {
      _this8.compile(node.body, frame);
      if (async) {
        _this8._emit('cb()');
      }
    });
    if (node.else_) {
      this._emitLine('}\nelse {');
      this._withScopedSyntax(function () {
        _this8.compile(node.else_, frame);
        if (async) {
          _this8._emit('cb()');
        }
      });
    } else if (async) {
      this._emitLine('}\nelse {');
      this._emit('cb()');
    }
    this._emitLine('}');
  };
  _proto.compileIfAsync = function compileIfAsync(node, frame) {
    this._emit('(function(cb) {');
    this.compileIf(node, frame, true);
    this._emit('})(' + this._makeCallback());
    this._addScopeLevel();
  };
  _proto._emitLoopBindings = function _emitLoopBindings(node, arr, i, len) {
    var _this9 = this;
    var bindings = [{
      name: 'index',
      val: i + " + 1"
    }, {
      name: 'index0',
      val: i
    }, {
      name: 'revindex',
      val: len + " - " + i
    }, {
      name: 'revindex0',
      val: len + " - " + i + " - 1"
    }, {
      name: 'first',
      val: i + " === 0"
    }, {
      name: 'last',
      val: i + " === " + len + " - 1"
    }, {
      name: 'length',
      val: len
    }];
    bindings.forEach(function (b) {
      _this9._emitLine("frame.set(\"loop." + b.name + "\", " + b.val + ");");
    });
  };
  _proto.compileFor = function compileFor(node, frame) {
    var _this10 = this;
    // Some of this code is ugly, but it keeps the generated code
    // as fast as possible. ForAsync also shares some of this, but
    // not much.

    var i = this._tmpid();
    var len = this._tmpid();
    var arr = this._tmpid();
    frame = frame.push();
    this._emitLine('frame = frame.push();');
    this._emit("var " + arr + " = ");
    this._compileExpression(node.arr, frame);
    this._emitLine(';');
    this._emit("if(" + arr + ") {");
    this._emitLine(arr + ' = runtime.fromIterator(' + arr + ');');

    // If multiple names are passed, we need to bind them
    // appropriately
    if (node.name instanceof nodes.Array) {
      this._emitLine("var " + i + ";");

      // The object could be an arroy or object. Note that the
      // body of the loop is duplicated for each condition, but
      // we are optimizing for speed over size.
      this._emitLine("if(runtime.isArray(" + arr + ")) {");
      this._emitLine("var " + len + " = " + arr + ".length;");
      this._emitLine("for(" + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");

      // Bind each declared var
      node.name.children.forEach(function (child, u) {
        var tid = _this10._tmpid();
        _this10._emitLine("var " + tid + " = " + arr + "[" + i + "][" + u + "];");
        _this10._emitLine("frame.set(\"" + child + "\", " + arr + "[" + i + "][" + u + "]);");
        frame.set(node.name.children[u].value, tid);
      });
      this._emitLoopBindings(node, arr, i, len);
      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });
      this._emitLine('}');
      this._emitLine('} else {');
      // Iterate over the key/values of an object
      var _node$name$children = node.name.children,
        key = _node$name$children[0],
        val = _node$name$children[1];
      var k = this._tmpid();
      var v = this._tmpid();
      frame.set(key.value, k);
      frame.set(val.value, v);
      this._emitLine(i + " = -1;");
      this._emitLine("var " + len + " = runtime.keys(" + arr + ").length;");
      this._emitLine("for(var " + k + " in " + arr + ") {");
      this._emitLine(i + "++;");
      this._emitLine("var " + v + " = " + arr + "[" + k + "];");
      this._emitLine("frame.set(\"" + key.value + "\", " + k + ");");
      this._emitLine("frame.set(\"" + val.value + "\", " + v + ");");
      this._emitLoopBindings(node, arr, i, len);
      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });
      this._emitLine('}');
      this._emitLine('}');
    } else {
      // Generate a typical array iteration
      var _v = this._tmpid();
      frame.set(node.name.value, _v);
      this._emitLine("var " + len + " = " + arr + ".length;");
      this._emitLine("for(var " + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");
      this._emitLine("var " + _v + " = " + arr + "[" + i + "];");
      this._emitLine("frame.set(\"" + node.name.value + "\", " + _v + ");");
      this._emitLoopBindings(node, arr, i, len);
      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });
      this._emitLine('}');
    }
    this._emitLine('}');
    if (node.else_) {
      this._emitLine('if (!' + len + ') {');
      this.compile(node.else_, frame);
      this._emitLine('}');
    }
    this._emitLine('frame = frame.pop();');
  };
  _proto._compileAsyncLoop = function _compileAsyncLoop(node, frame, parallel) {
    var _this11 = this;
    // This shares some code with the For tag, but not enough to
    // worry about. This iterates across an object asynchronously,
    // but not in parallel.

    var i = this._tmpid();
    var len = this._tmpid();
    var arr = this._tmpid();
    var asyncMethod = parallel ? 'asyncAll' : 'asyncEach';
    frame = frame.push();
    this._emitLine('frame = frame.push();');
    this._emit('var ' + arr + ' = runtime.fromIterator(');
    this._compileExpression(node.arr, frame);
    this._emitLine(');');
    if (node.name instanceof nodes.Array) {
      var arrayLen = node.name.children.length;
      this._emit("runtime." + asyncMethod + "(" + arr + ", " + arrayLen + ", function(");
      node.name.children.forEach(function (name) {
        _this11._emit(name.value + ",");
      });
      this._emit(i + ',' + len + ',next) {');
      node.name.children.forEach(function (name) {
        var id = name.value;
        frame.set(id, id);
        _this11._emitLine("frame.set(\"" + id + "\", " + id + ");");
      });
    } else {
      var id = node.name.value;
      this._emitLine("runtime." + asyncMethod + "(" + arr + ", 1, function(" + id + ", " + i + ", " + len + ",next) {");
      this._emitLine('frame.set("' + id + '", ' + id + ');');
      frame.set(id, id);
    }
    this._emitLoopBindings(node, arr, i, len);
    this._withScopedSyntax(function () {
      var buf;
      if (parallel) {
        buf = _this11._pushBuffer();
      }
      _this11.compile(node.body, frame);
      _this11._emitLine('next(' + i + (buf ? ',' + buf : '') + ');');
      if (parallel) {
        _this11._popBuffer();
      }
    });
    var output = this._tmpid();
    this._emitLine('}, ' + this._makeCallback(output));
    this._addScopeLevel();
    if (parallel) {
      this._emitLine(this.buffer + ' += ' + output + ';');
    }
    if (node.else_) {
      this._emitLine('if (!' + arr + '.length) {');
      this.compile(node.else_, frame);
      this._emitLine('}');
    }
    this._emitLine('frame = frame.pop();');
  };
  _proto.compileAsyncEach = function compileAsyncEach(node, frame) {
    this._compileAsyncLoop(node, frame);
  };
  _proto.compileAsyncAll = function compileAsyncAll(node, frame) {
    this._compileAsyncLoop(node, frame, true);
  };
  _proto._compileMacro = function _compileMacro(node, frame) {
    var _this12 = this;
    var args = [];
    var kwargs = null;
    var funcId = 'macro_' + this._tmpid();
    var keepFrame = frame !== undefined;

    // Type check the definition of the args
    node.args.children.forEach(function (arg, i) {
      if (i === node.args.children.length - 1 && arg instanceof nodes.Dict) {
        kwargs = arg;
      } else {
        _this12.assertType(arg, nodes.Symbol);
        args.push(arg);
      }
    });
    var realNames = [].concat(args.map(function (n) {
      return "l_" + n.value;
    }), ['kwargs']);

    // Quoted argument names
    var argNames = args.map(function (n) {
      return "\"" + n.value + "\"";
    });
    var kwargNames = (kwargs && kwargs.children || []).map(function (n) {
      return "\"" + n.key.value + "\"";
    });

    // We pass a function to makeMacro which destructures the
    // arguments so support setting positional args with keywords
    // args and passing keyword args as positional args
    // (essentially default values). See runtime.js.
    var currFrame;
    if (keepFrame) {
      currFrame = frame.push(true);
    } else {
      currFrame = new Frame();
    }
    this._emitLines("var " + funcId + " = runtime.makeMacro(", "[" + argNames.join(', ') + "], ", "[" + kwargNames.join(', ') + "], ", "function (" + realNames.join(', ') + ") {", 'var callerFrame = frame;', 'frame = ' + (keepFrame ? 'frame.push(true);' : 'new runtime.Frame();'), 'kwargs = kwargs || {};', 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }');

    // Expose the arguments to the template. Don't need to use
    // random names because the function
    // will create a new run-time scope for us
    args.forEach(function (arg) {
      _this12._emitLine("frame.set(\"" + arg.value + "\", l_" + arg.value + ");");
      currFrame.set(arg.value, "l_" + arg.value);
    });

    // Expose the keyword arguments
    if (kwargs) {
      kwargs.children.forEach(function (pair) {
        var name = pair.key.value;
        _this12._emit("frame.set(\"" + name + "\", ");
        _this12._emit("Object.prototype.hasOwnProperty.call(kwargs, \"" + name + "\")");
        _this12._emit(" ? kwargs[\"" + name + "\"] : ");
        _this12._compileExpression(pair.value, currFrame);
        _this12._emit(');');
      });
    }
    var bufferId = this._pushBuffer();
    this._withScopedSyntax(function () {
      _this12.compile(node.body, currFrame);
    });
    this._emitLine('frame = ' + (keepFrame ? 'frame.pop();' : 'callerFrame;'));
    this._emitLine("return new runtime.SafeString(" + bufferId + ");");
    this._emitLine('});');
    this._popBuffer();
    return funcId;
  };
  _proto.compileMacro = function compileMacro(node, frame) {
    var funcId = this._compileMacro(node);

    // Expose the macro to the templates
    var name = node.name.value;
    frame.set(name, funcId);
    if (frame.parent) {
      this._emitLine("frame.set(\"" + name + "\", " + funcId + ");");
    } else {
      if (node.name.value.charAt(0) !== '_') {
        this._emitLine("context.addExport(\"" + name + "\");");
      }
      this._emitLine("context.setVariable(\"" + name + "\", " + funcId + ");");
    }
  };
  _proto.compileCaller = function compileCaller(node, frame) {
    // basically an anonymous "macro expression"
    this._emit('(function (){');
    var funcId = this._compileMacro(node, frame);
    this._emit("return " + funcId + ";})()");
  };
  _proto._compileGetTemplate = function _compileGetTemplate(node, frame, eagerCompile, ignoreMissing) {
    var parentTemplateId = this._tmpid();
    var parentName = this._templateName();
    var cb = this._makeCallback(parentTemplateId);
    var eagerCompileArg = eagerCompile ? 'true' : 'false';
    var ignoreMissingArg = ignoreMissing ? 'true' : 'false';
    this._emit('env.getTemplate(');
    this._compileExpression(node.template, frame);
    this._emitLine(", " + eagerCompileArg + ", " + parentName + ", " + ignoreMissingArg + ", " + cb);
    return parentTemplateId;
  };
  _proto.compileImport = function compileImport(node, frame) {
    var target = node.target.value;
    var id = this._compileGetTemplate(node, frame, false, false);
    this._addScopeLevel();
    this._emitLine(id + '.getExported(' + (node.withContext ? 'context.getVariables(), frame, ' : '') + this._makeCallback(id));
    this._addScopeLevel();
    frame.set(target, id);
    if (frame.parent) {
      this._emitLine("frame.set(\"" + target + "\", " + id + ");");
    } else {
      this._emitLine("context.setVariable(\"" + target + "\", " + id + ");");
    }
  };
  _proto.compileFromImport = function compileFromImport(node, frame) {
    var _this13 = this;
    var importedId = this._compileGetTemplate(node, frame, false, false);
    this._addScopeLevel();
    this._emitLine(importedId + '.getExported(' + (node.withContext ? 'context.getVariables(), frame, ' : '') + this._makeCallback(importedId));
    this._addScopeLevel();
    node.names.children.forEach(function (nameNode) {
      var name;
      var alias;
      var id = _this13._tmpid();
      if (nameNode instanceof nodes.Pair) {
        name = nameNode.key.value;
        alias = nameNode.value.value;
      } else {
        name = nameNode.value;
        alias = name;
      }
      _this13._emitLine("if(Object.prototype.hasOwnProperty.call(" + importedId + ", \"" + name + "\")) {");
      _this13._emitLine("var " + id + " = " + importedId + "." + name + ";");
      _this13._emitLine('} else {');
      _this13._emitLine("cb(new Error(\"cannot import '" + name + "'\")); return;");
      _this13._emitLine('}');
      frame.set(alias, id);
      if (frame.parent) {
        _this13._emitLine("frame.set(\"" + alias + "\", " + id + ");");
      } else {
        _this13._emitLine("context.setVariable(\"" + alias + "\", " + id + ");");
      }
    });
  };
  _proto.compileBlock = function compileBlock(node) {
    var id = this._tmpid();

    // If we are executing outside a block (creating a top-level
    // block), we really don't want to execute its code because it
    // will execute twice: once when the child template runs and
    // again when the parent template runs. Note that blocks
    // within blocks will *always* execute immediately *and*
    // wherever else they are invoked (like used in a parent
    // template). This may have behavioral differences from jinja
    // because blocks can have side effects, but it seems like a
    // waste of performance to always execute huge top-level
    // blocks twice
    if (!this.inBlock) {
      this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');
    }
    this._emit("context.getBlock(\"" + node.name.value + "\")");
    if (!this.inBlock) {
      this._emit(')');
    }
    this._emitLine('(env, context, frame, runtime, ' + this._makeCallback(id));
    this._emitLine(this.buffer + " += " + id + ";");
    this._addScopeLevel();
  };
  _proto.compileSuper = function compileSuper(node, frame) {
    var name = node.blockName.value;
    var id = node.symbol.value;
    var cb = this._makeCallback(id);
    this._emitLine("context.getSuper(env, \"" + name + "\", b_" + name + ", frame, runtime, " + cb);
    this._emitLine(id + " = runtime.markSafe(" + id + ");");
    this._addScopeLevel();
    frame.set(id, id);
  };
  _proto.compileExtends = function compileExtends(node, frame) {
    var k = this._tmpid();
    var parentTemplateId = this._compileGetTemplate(node, frame, true, false);

    // extends is a dynamic tag and can occur within a block like
    // `if`, so if this happens we need to capture the parent
    // template in the top-level scope
    this._emitLine("parentTemplate = " + parentTemplateId);
    this._emitLine("for(var " + k + " in parentTemplate.blocks) {");
    this._emitLine("context.addBlock(" + k + ", parentTemplate.blocks[" + k + "]);");
    this._emitLine('}');
    this._addScopeLevel();
  };
  _proto.compileInclude = function compileInclude(node, frame) {
    this._emitLine('var tasks = [];');
    this._emitLine('tasks.push(');
    this._emitLine('function(callback) {');
    var id = this._compileGetTemplate(node, frame, false, node.ignoreMissing);
    this._emitLine("callback(null," + id + ");});");
    this._emitLine('});');
    var id2 = this._tmpid();
    this._emitLine('tasks.push(');
    this._emitLine('function(template, callback){');
    this._emitLine('template.render(context.getVariables(), frame, ' + this._makeCallback(id2));
    this._emitLine('callback(null,' + id2 + ');});');
    this._emitLine('});');
    this._emitLine('tasks.push(');
    this._emitLine('function(result, callback){');
    this._emitLine(this.buffer + " += result;");
    this._emitLine('callback(null);');
    this._emitLine('});');
    this._emitLine('env.waterfall(tasks, function(){');
    this._addScopeLevel();
  };
  _proto.compileTemplateData = function compileTemplateData(node, frame) {
    this.compileLiteral(node, frame);
  };
  _proto.compileCapture = function compileCapture(node, frame) {
    var _this14 = this;
    // we need to temporarily override the current buffer id as 'output'
    // so the set block writes to the capture output instead of the buffer
    var buffer = this.buffer;
    this.buffer = 'output';
    this._emitLine('(function() {');
    this._emitLine('var output = "";');
    this._withScopedSyntax(function () {
      _this14.compile(node.body, frame);
    });
    this._emitLine('return output;');
    this._emitLine('})()');
    // and of course, revert back to the old buffer id
    this.buffer = buffer;
  };
  _proto.compileOutput = function compileOutput(node, frame) {
    var _this15 = this;
    var children = node.children;
    children.forEach(function (child) {
      // TemplateData is a special case because it is never
      // autoescaped, so simply output it for optimization
      if (child instanceof nodes.TemplateData) {
        if (child.value) {
          _this15._emit(_this15.buffer + " += ");
          _this15.compileLiteral(child, frame);
          _this15._emitLine(';');
        }
      } else {
        _this15._emit(_this15.buffer + " += runtime.suppressValue(");
        if (_this15.throwOnUndefined) {
          _this15._emit('runtime.ensureDefined(');
        }
        _this15.compile(child, frame);
        if (_this15.throwOnUndefined) {
          _this15._emit("," + node.lineno + "," + node.colno + ")");
        }
        _this15._emit(', env.opts.autoescape);\n');
      }
    });
  };
  _proto.compileRoot = function compileRoot(node, frame) {
    var _this16 = this;
    if (frame) {
      this.fail('compileRoot: root node can\'t have frame');
    }
    frame = new Frame();
    this._emitFuncBegin(node, 'root');
    this._emitLine('var parentTemplate = null;');
    this._compileChildren(node, frame);
    this._emitLine('if(parentTemplate) {');
    this._emitLine('parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);');
    this._emitLine('} else {');
    this._emitLine("cb(null, " + this.buffer + ");");
    this._emitLine('}');
    this._emitFuncEnd(true);
    this.inBlock = true;
    var blockNames = [];
    var blocks = node.findAll(nodes.Block);
    blocks.forEach(function (block, i) {
      var name = block.name.value;
      if (blockNames.indexOf(name) !== -1) {
        throw new Error("Block \"" + name + "\" defined more than once.");
      }
      blockNames.push(name);
      _this16._emitFuncBegin(block, "b_" + name);
      var tmpFrame = new Frame();
      _this16._emitLine('var frame = frame.push(true);');
      _this16.compile(block.body, tmpFrame);
      _this16._emitFuncEnd();
    });
    this._emitLine('return {');
    blocks.forEach(function (block, i) {
      var blockName = "b_" + block.name.value;
      _this16._emitLine(blockName + ": " + blockName + ",");
    });
    this._emitLine('root: root\n};');
  };
  _proto.compile = function compile(node, frame) {
    var _compile = this['compile' + node.typename];
    if (_compile) {
      _compile.call(this, node, frame);
    } else {
      this.fail("compile: Cannot compile node: " + node.typename, node.lineno, node.colno);
    }
  };
  _proto.getCode = function getCode() {
    return this.codebuf.join('');
  };
  return Compiler;
}(Obj);
module.exports = {
  compile: function compile(src, asyncFilters, extensions, name, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var c = new Compiler(name, opts.throwOnUndefined);

    // Run the extension preprocessors against the source.
    var preprocessors = (extensions || []).map(function (ext) {
      return ext.preprocess;
    }).filter(function (f) {
      return !!f;
    });
    var processedSrc = preprocessors.reduce(function (s, processor) {
      return processor(s);
    }, src);
    c.compile(transformer.transform(parser.parse(processedSrc, extensions, opts), asyncFilters, name));
    return c.getCode();
  },
  Compiler: Compiler
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_72309__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var path = __nested_webpack_require_72309__(4);
var _require = __nested_webpack_require_72309__(1),
  EmitterObj = _require.EmitterObj;
module.exports = /*#__PURE__*/function (_EmitterObj) {
  _inheritsLoose(Loader, _EmitterObj);
  function Loader() {
    return _EmitterObj.apply(this, arguments) || this;
  }
  var _proto = Loader.prototype;
  _proto.resolve = function resolve(from, to) {
    return path.resolve(path.dirname(from), to);
  };
  _proto.isRelative = function isRelative(filename) {
    return filename.indexOf('./') === 0 || filename.indexOf('../') === 0;
  };
  return Loader;
}(EmitterObj);

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_73377__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var asap = __nested_webpack_require_73377__(12);
var _waterfall = __nested_webpack_require_73377__(15);
var lib = __nested_webpack_require_73377__(0);
var compiler = __nested_webpack_require_73377__(5);
var filters = __nested_webpack_require_73377__(18);
var _require = __nested_webpack_require_73377__(10),
  FileSystemLoader = _require.FileSystemLoader,
  WebLoader = _require.WebLoader,
  PrecompiledLoader = _require.PrecompiledLoader;
var tests = __nested_webpack_require_73377__(20);
var globals = __nested_webpack_require_73377__(21);
var _require2 = __nested_webpack_require_73377__(1),
  Obj = _require2.Obj,
  EmitterObj = _require2.EmitterObj;
var globalRuntime = __nested_webpack_require_73377__(2);
var handleError = globalRuntime.handleError,
  Frame = globalRuntime.Frame;
var expressApp = __nested_webpack_require_73377__(22);

// If the user is using the async API, *always* call it
// asynchronously even if the template was synchronous.
function callbackAsap(cb, err, res) {
  asap(function () {
    cb(err, res);
  });
}

/**
 * A no-op template, for use with {% include ignore missing %}
 */
var noopTmplSrc = {
  type: 'code',
  obj: {
    root: function root(env, context, frame, runtime, cb) {
      try {
        cb(null, '');
      } catch (e) {
        cb(handleError(e, null, null));
      }
    }
  }
};
var Environment = /*#__PURE__*/function (_EmitterObj) {
  _inheritsLoose(Environment, _EmitterObj);
  function Environment() {
    return _EmitterObj.apply(this, arguments) || this;
  }
  var _proto = Environment.prototype;
  _proto.init = function init(loaders, opts) {
    var _this = this;
    // The dev flag determines the trace that'll be shown on errors.
    // If set to true, returns the full trace from the error point,
    // otherwise will return trace starting from Template.render
    // (the full trace from within nunjucks may confuse developers using
    //  the library)
    // defaults to false
    opts = this.opts = opts || {};
    this.opts.dev = !!opts.dev;

    // The autoescape flag sets global autoescaping. If true,
    // every string variable will be escaped by default.
    // If false, strings can be manually escaped using the `escape` filter.
    // defaults to true
    this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true;

    // If true, this will make the system throw errors if trying
    // to output a null or undefined value
    this.opts.throwOnUndefined = !!opts.throwOnUndefined;
    this.opts.trimBlocks = !!opts.trimBlocks;
    this.opts.lstripBlocks = !!opts.lstripBlocks;
    this.loaders = [];
    if (!loaders) {
      // The filesystem loader is only available server-side
      if (FileSystemLoader) {
        this.loaders = [new FileSystemLoader('views')];
      } else if (WebLoader) {
        this.loaders = [new WebLoader('/views')];
      }
    } else {
      this.loaders = lib.isArray(loaders) ? loaders : [loaders];
    }

    // It's easy to use precompiled templates: just include them
    // before you configure nunjucks and this will automatically
    // pick it up and use it
    if (typeof window !== 'undefined' && window.nunjucksPrecompiled) {
      this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
    }
    this._initLoaders();
    this.globals = globals();
    this.filters = {};
    this.tests = {};
    this.asyncFilters = [];
    this.extensions = {};
    this.extensionsList = [];
    lib._entries(filters).forEach(function (_ref) {
      var name = _ref[0],
        filter = _ref[1];
      return _this.addFilter(name, filter);
    });
    lib._entries(tests).forEach(function (_ref2) {
      var name = _ref2[0],
        test = _ref2[1];
      return _this.addTest(name, test);
    });
  };
  _proto._initLoaders = function _initLoaders() {
    var _this2 = this;
    this.loaders.forEach(function (loader) {
      // Caching and cache busting
      loader.cache = {};
      if (typeof loader.on === 'function') {
        loader.on('update', function (name, fullname) {
          loader.cache[name] = null;
          _this2.emit('update', name, fullname, loader);
        });
        loader.on('load', function (name, source) {
          _this2.emit('load', name, source, loader);
        });
      }
    });
  };
  _proto.invalidateCache = function invalidateCache() {
    this.loaders.forEach(function (loader) {
      loader.cache = {};
    });
  };
  _proto.addExtension = function addExtension(name, extension) {
    extension.__name = name;
    this.extensions[name] = extension;
    this.extensionsList.push(extension);
    return this;
  };
  _proto.removeExtension = function removeExtension(name) {
    var extension = this.getExtension(name);
    if (!extension) {
      return;
    }
    this.extensionsList = lib.without(this.extensionsList, extension);
    delete this.extensions[name];
  };
  _proto.getExtension = function getExtension(name) {
    return this.extensions[name];
  };
  _proto.hasExtension = function hasExtension(name) {
    return !!this.extensions[name];
  };
  _proto.addGlobal = function addGlobal(name, value) {
    this.globals[name] = value;
    return this;
  };
  _proto.getGlobal = function getGlobal(name) {
    if (typeof this.globals[name] === 'undefined') {
      throw new Error('global not found: ' + name);
    }
    return this.globals[name];
  };
  _proto.addFilter = function addFilter(name, func, async) {
    var wrapped = func;
    if (async) {
      this.asyncFilters.push(name);
    }
    this.filters[name] = wrapped;
    return this;
  };
  _proto.getFilter = function getFilter(name) {
    if (!this.filters[name]) {
      throw new Error('filter not found: ' + name);
    }
    return this.filters[name];
  };
  _proto.addTest = function addTest(name, func) {
    this.tests[name] = func;
    return this;
  };
  _proto.getTest = function getTest(name) {
    if (!this.tests[name]) {
      throw new Error('test not found: ' + name);
    }
    return this.tests[name];
  };
  _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
    var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
    return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
  };
  _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
    var _this3 = this;
    var that = this;
    var tmpl = null;
    if (name && name.raw) {
      // this fixes autoescape for templates referenced in symbols
      name = name.raw;
    }
    if (lib.isFunction(parentName)) {
      cb = parentName;
      parentName = null;
      eagerCompile = eagerCompile || false;
    }
    if (lib.isFunction(eagerCompile)) {
      cb = eagerCompile;
      eagerCompile = false;
    }
    if (name instanceof Template) {
      tmpl = name;
    } else if (typeof name !== 'string') {
      throw new Error('template names must be a string: ' + name);
    } else {
      for (var i = 0; i < this.loaders.length; i++) {
        var loader = this.loaders[i];
        tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];
        if (tmpl) {
          break;
        }
      }
    }
    if (tmpl) {
      if (eagerCompile) {
        tmpl.compile();
      }
      if (cb) {
        cb(null, tmpl);
        return undefined;
      } else {
        return tmpl;
      }
    }
    var syncResult;
    var createTemplate = function createTemplate(err, info) {
      if (!info && !err && !ignoreMissing) {
        err = new Error('template not found: ' + name);
      }
      if (err) {
        if (cb) {
          cb(err);
          return;
        } else {
          throw err;
        }
      }
      var newTmpl;
      if (!info) {
        newTmpl = new Template(noopTmplSrc, _this3, '', eagerCompile);
      } else {
        newTmpl = new Template(info.src, _this3, info.path, eagerCompile);
        if (!info.noCache) {
          info.loader.cache[name] = newTmpl;
        }
      }
      if (cb) {
        cb(null, newTmpl);
      } else {
        syncResult = newTmpl;
      }
    };
    lib.asyncIter(this.loaders, function (loader, i, next, done) {
      function handle(err, src) {
        if (err) {
          done(err);
        } else if (src) {
          src.loader = loader;
          done(null, src);
        } else {
          next();
        }
      }

      // Resolve name relative to parentName
      name = that.resolveTemplate(loader, parentName, name);
      if (loader.async) {
        loader.getSource(name, handle);
      } else {
        handle(null, loader.getSource(name));
      }
    }, createTemplate);
    return syncResult;
  };
  _proto.express = function express(app) {
    return expressApp(this, app);
  };
  _proto.render = function render(name, ctx, cb) {
    if (lib.isFunction(ctx)) {
      cb = ctx;
      ctx = null;
    }

    // We support a synchronous API to make it easier to migrate
    // existing code to async. This works because if you don't do
    // anything async work, the whole thing is actually run
    // synchronously.
    var syncResult = null;
    this.getTemplate(name, function (err, tmpl) {
      if (err && cb) {
        callbackAsap(cb, err);
      } else if (err) {
        throw err;
      } else {
        syncResult = tmpl.render(ctx, cb);
      }
    });
    return syncResult;
  };
  _proto.renderString = function renderString(src, ctx, opts, cb) {
    if (lib.isFunction(opts)) {
      cb = opts;
      opts = {};
    }
    opts = opts || {};
    var tmpl = new Template(src, this, opts.path);
    return tmpl.render(ctx, cb);
  };
  _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
    return _waterfall(tasks, callback, forceAsync);
  };
  return Environment;
}(EmitterObj);
var Context = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Context, _Obj);
  function Context() {
    return _Obj.apply(this, arguments) || this;
  }
  var _proto2 = Context.prototype;
  _proto2.init = function init(ctx, blocks, env) {
    var _this4 = this;
    // Has to be tied to an environment so we can tap into its globals.
    this.env = env || new Environment();

    // Make a duplicate of ctx
    this.ctx = lib.extend({}, ctx);
    this.blocks = {};
    this.exported = [];
    lib.keys(blocks).forEach(function (name) {
      _this4.addBlock(name, blocks[name]);
    });
  };
  _proto2.lookup = function lookup(name) {
    // This is one of the most called functions, so optimize for
    // the typical case where the name isn't in the globals
    if (name in this.env.globals && !(name in this.ctx)) {
      return this.env.globals[name];
    } else {
      return this.ctx[name];
    }
  };
  _proto2.setVariable = function setVariable(name, val) {
    this.ctx[name] = val;
  };
  _proto2.getVariables = function getVariables() {
    return this.ctx;
  };
  _proto2.addBlock = function addBlock(name, block) {
    this.blocks[name] = this.blocks[name] || [];
    this.blocks[name].push(block);
    return this;
  };
  _proto2.getBlock = function getBlock(name) {
    if (!this.blocks[name]) {
      throw new Error('unknown block "' + name + '"');
    }
    return this.blocks[name][0];
  };
  _proto2.getSuper = function getSuper(env, name, block, frame, runtime, cb) {
    var idx = lib.indexOf(this.blocks[name] || [], block);
    var blk = this.blocks[name][idx + 1];
    var context = this;
    if (idx === -1 || !blk) {
      throw new Error('no super block available for "' + name + '"');
    }
    blk(env, context, frame, runtime, cb);
  };
  _proto2.addExport = function addExport(name) {
    this.exported.push(name);
  };
  _proto2.getExported = function getExported() {
    var _this5 = this;
    var exported = {};
    this.exported.forEach(function (name) {
      exported[name] = _this5.ctx[name];
    });
    return exported;
  };
  return Context;
}(Obj);
var Template = /*#__PURE__*/function (_Obj2) {
  _inheritsLoose(Template, _Obj2);
  function Template() {
    return _Obj2.apply(this, arguments) || this;
  }
  var _proto3 = Template.prototype;
  _proto3.init = function init(src, env, path, eagerCompile) {
    this.env = env || new Environment();
    if (lib.isObject(src)) {
      switch (src.type) {
        case 'code':
          this.tmplProps = src.obj;
          break;
        case 'string':
          this.tmplStr = src.obj;
          break;
        default:
          throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
      }
    } else if (lib.isString(src)) {
      this.tmplStr = src;
    } else {
      throw new Error('src must be a string or an object describing the source');
    }
    this.path = path;
    if (eagerCompile) {
      try {
        this._compile();
      } catch (err) {
        throw lib._prettifyError(this.path, this.env.opts.dev, err);
      }
    } else {
      this.compiled = false;
    }
  };
  _proto3.render = function render(ctx, parentFrame, cb) {
    var _this6 = this;
    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    } else if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    }

    // If there is a parent frame, we are being called from internal
    // code of another template, and the internal system
    // depends on the sync/async nature of the parent template
    // to be inherited, so force an async callback
    var forceAsync = !parentFrame;

    // Catch compile errors for async rendering
    try {
      this.compile();
    } catch (e) {
      var err = lib._prettifyError(this.path, this.env.opts.dev, e);
      if (cb) {
        return callbackAsap(cb, err);
      } else {
        throw err;
      }
    }
    var context = new Context(ctx || {}, this.blocks, this.env);
    var frame = parentFrame ? parentFrame.push(true) : new Frame();
    frame.topLevel = true;
    var syncResult = null;
    var didError = false;
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err, res) {
      // TODO: this is actually a bug in the compiled template (because waterfall
      // tasks are both not passing errors up the chain of callbacks AND are not
      // causing a return from the top-most render function). But fixing that
      // will require a more substantial change to the compiler.
      if (didError && cb && typeof res !== 'undefined') {
        // prevent multiple calls to cb
        return;
      }
      if (err) {
        err = lib._prettifyError(_this6.path, _this6.env.opts.dev, err);
        didError = true;
      }
      if (cb) {
        if (forceAsync) {
          callbackAsap(cb, err, res);
        } else {
          cb(err, res);
        }
      } else {
        if (err) {
          throw err;
        }
        syncResult = res;
      }
    });
    return syncResult;
  };
  _proto3.getExported = function getExported(ctx, parentFrame, cb) {
    // eslint-disable-line consistent-return
    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    }
    if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    }

    // Catch compile errors for async rendering
    try {
      this.compile();
    } catch (e) {
      if (cb) {
        return cb(e);
      } else {
        throw e;
      }
    }
    var frame = parentFrame ? parentFrame.push() : new Frame();
    frame.topLevel = true;

    // Run the rootRenderFunc to populate the context with exported vars
    var context = new Context(ctx || {}, this.blocks, this.env);
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, context.getExported());
      }
    });
  };
  _proto3.compile = function compile() {
    if (!this.compiled) {
      this._compile();
    }
  };
  _proto3._compile = function _compile() {
    var props;
    if (this.tmplProps) {
      props = this.tmplProps;
    } else {
      var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
      var func = new Function(source); // eslint-disable-line no-new-func
      props = func();
    }
    this.blocks = this._getBlocks(props);
    this.rootRenderFunc = props.root;
    this.compiled = true;
  };
  _proto3._getBlocks = function _getBlocks(props) {
    var blocks = {};
    lib.keys(props).forEach(function (k) {
      if (k.slice(0, 2) === 'b_') {
        blocks[k.slice(2)] = props[k];
      }
    });
    return blocks;
  };
  return Template;
}(Obj);
module.exports = {
  Environment: Environment,
  Template: Template
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_90341__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var lexer = __nested_webpack_require_90341__(9);
var nodes = __nested_webpack_require_90341__(3);
var Obj = __nested_webpack_require_90341__(1).Obj;
var lib = __nested_webpack_require_90341__(0);
var Parser = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Parser, _Obj);
  function Parser() {
    return _Obj.apply(this, arguments) || this;
  }
  var _proto = Parser.prototype;
  _proto.init = function init(tokens) {
    this.tokens = tokens;
    this.peeked = null;
    this.breakOnBlocks = null;
    this.dropLeadingWhitespace = false;
    this.extensions = [];
  };
  _proto.nextToken = function nextToken(withWhitespace) {
    var tok;
    if (this.peeked) {
      if (!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE) {
        this.peeked = null;
      } else {
        tok = this.peeked;
        this.peeked = null;
        return tok;
      }
    }
    tok = this.tokens.nextToken();
    if (!withWhitespace) {
      while (tok && tok.type === lexer.TOKEN_WHITESPACE) {
        tok = this.tokens.nextToken();
      }
    }
    return tok;
  };
  _proto.peekToken = function peekToken() {
    this.peeked = this.peeked || this.nextToken();
    return this.peeked;
  };
  _proto.pushToken = function pushToken(tok) {
    if (this.peeked) {
      throw new Error('pushToken: can only push one token on between reads');
    }
    this.peeked = tok;
  };
  _proto.error = function error(msg, lineno, colno) {
    if (lineno === undefined || colno === undefined) {
      var tok = this.peekToken() || {};
      lineno = tok.lineno;
      colno = tok.colno;
    }
    if (lineno !== undefined) {
      lineno += 1;
    }
    if (colno !== undefined) {
      colno += 1;
    }
    return new lib.TemplateError(msg, lineno, colno);
  };
  _proto.fail = function fail(msg, lineno, colno) {
    throw this.error(msg, lineno, colno);
  };
  _proto.skip = function skip(type) {
    var tok = this.nextToken();
    if (!tok || tok.type !== type) {
      this.pushToken(tok);
      return false;
    }
    return true;
  };
  _proto.expect = function expect(type) {
    var tok = this.nextToken();
    if (tok.type !== type) {
      this.fail('expected ' + type + ', got ' + tok.type, tok.lineno, tok.colno);
    }
    return tok;
  };
  _proto.skipValue = function skipValue(type, val) {
    var tok = this.nextToken();
    if (!tok || tok.type !== type || tok.value !== val) {
      this.pushToken(tok);
      return false;
    }
    return true;
  };
  _proto.skipSymbol = function skipSymbol(val) {
    return this.skipValue(lexer.TOKEN_SYMBOL, val);
  };
  _proto.advanceAfterBlockEnd = function advanceAfterBlockEnd(name) {
    var tok;
    if (!name) {
      tok = this.peekToken();
      if (!tok) {
        this.fail('unexpected end of file');
      }
      if (tok.type !== lexer.TOKEN_SYMBOL) {
        this.fail('advanceAfterBlockEnd: expected symbol token or ' + 'explicit name to be passed');
      }
      name = this.nextToken().value;
    }
    tok = this.nextToken();
    if (tok && tok.type === lexer.TOKEN_BLOCK_END) {
      if (tok.value.charAt(0) === '-') {
        this.dropLeadingWhitespace = true;
      }
    } else {
      this.fail('expected block end in ' + name + ' statement');
    }
    return tok;
  };
  _proto.advanceAfterVariableEnd = function advanceAfterVariableEnd() {
    var tok = this.nextToken();
    if (tok && tok.type === lexer.TOKEN_VARIABLE_END) {
      this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.VARIABLE_END.length - 1) === '-';
    } else {
      this.pushToken(tok);
      this.fail('expected variable end');
    }
  };
  _proto.parseFor = function parseFor() {
    var forTok = this.peekToken();
    var node;
    var endBlock;
    if (this.skipSymbol('for')) {
      node = new nodes.For(forTok.lineno, forTok.colno);
      endBlock = 'endfor';
    } else if (this.skipSymbol('asyncEach')) {
      node = new nodes.AsyncEach(forTok.lineno, forTok.colno);
      endBlock = 'endeach';
    } else if (this.skipSymbol('asyncAll')) {
      node = new nodes.AsyncAll(forTok.lineno, forTok.colno);
      endBlock = 'endall';
    } else {
      this.fail('parseFor: expected for{Async}', forTok.lineno, forTok.colno);
    }
    node.name = this.parsePrimary();
    if (!(node.name instanceof nodes.Symbol)) {
      this.fail('parseFor: variable name expected for loop');
    }
    var type = this.peekToken().type;
    if (type === lexer.TOKEN_COMMA) {
      // key/value iteration
      var key = node.name;
      node.name = new nodes.Array(key.lineno, key.colno);
      node.name.addChild(key);
      while (this.skip(lexer.TOKEN_COMMA)) {
        var prim = this.parsePrimary();
        node.name.addChild(prim);
      }
    }
    if (!this.skipSymbol('in')) {
      this.fail('parseFor: expected "in" keyword for loop', forTok.lineno, forTok.colno);
    }
    node.arr = this.parseExpression();
    this.advanceAfterBlockEnd(forTok.value);
    node.body = this.parseUntilBlocks(endBlock, 'else');
    if (this.skipSymbol('else')) {
      this.advanceAfterBlockEnd('else');
      node.else_ = this.parseUntilBlocks(endBlock);
    }
    this.advanceAfterBlockEnd();
    return node;
  };
  _proto.parseMacro = function parseMacro() {
    var macroTok = this.peekToken();
    if (!this.skipSymbol('macro')) {
      this.fail('expected macro');
    }
    var name = this.parsePrimary(true);
    var args = this.parseSignature();
    var node = new nodes.Macro(macroTok.lineno, macroTok.colno, name, args);
    this.advanceAfterBlockEnd(macroTok.value);
    node.body = this.parseUntilBlocks('endmacro');
    this.advanceAfterBlockEnd();
    return node;
  };
  _proto.parseCall = function parseCall() {
    // a call block is parsed as a normal FunCall, but with an added
    // 'caller' kwarg which is a Caller node.
    var callTok = this.peekToken();
    if (!this.skipSymbol('call')) {
      this.fail('expected call');
    }
    var callerArgs = this.parseSignature(true) || new nodes.NodeList();
    var macroCall = this.parsePrimary();
    this.advanceAfterBlockEnd(callTok.value);
    var body = this.parseUntilBlocks('endcall');
    this.advanceAfterBlockEnd();
    var callerName = new nodes.Symbol(callTok.lineno, callTok.colno, 'caller');
    var callerNode = new nodes.Caller(callTok.lineno, callTok.colno, callerName, callerArgs, body);

    // add the additional caller kwarg, adding kwargs if necessary
    var args = macroCall.args.children;
    if (!(args[args.length - 1] instanceof nodes.KeywordArgs)) {
      args.push(new nodes.KeywordArgs());
    }
    var kwargs = args[args.length - 1];
    kwargs.addChild(new nodes.Pair(callTok.lineno, callTok.colno, callerName, callerNode));
    return new nodes.Output(callTok.lineno, callTok.colno, [macroCall]);
  };
  _proto.parseWithContext = function parseWithContext() {
    var tok = this.peekToken();
    var withContext = null;
    if (this.skipSymbol('with')) {
      withContext = true;
    } else if (this.skipSymbol('without')) {
      withContext = false;
    }
    if (withContext !== null) {
      if (!this.skipSymbol('context')) {
        this.fail('parseFrom: expected context after with/without', tok.lineno, tok.colno);
      }
    }
    return withContext;
  };
  _proto.parseImport = function parseImport() {
    var importTok = this.peekToken();
    if (!this.skipSymbol('import')) {
      this.fail('parseImport: expected import', importTok.lineno, importTok.colno);
    }
    var template = this.parseExpression();
    if (!this.skipSymbol('as')) {
      this.fail('parseImport: expected "as" keyword', importTok.lineno, importTok.colno);
    }
    var target = this.parseExpression();
    var withContext = this.parseWithContext();
    var node = new nodes.Import(importTok.lineno, importTok.colno, template, target, withContext);
    this.advanceAfterBlockEnd(importTok.value);
    return node;
  };
  _proto.parseFrom = function parseFrom() {
    var fromTok = this.peekToken();
    if (!this.skipSymbol('from')) {
      this.fail('parseFrom: expected from');
    }
    var template = this.parseExpression();
    if (!this.skipSymbol('import')) {
      this.fail('parseFrom: expected import', fromTok.lineno, fromTok.colno);
    }
    var names = new nodes.NodeList();
    var withContext;
    while (1) {
      // eslint-disable-line no-constant-condition
      var nextTok = this.peekToken();
      if (nextTok.type === lexer.TOKEN_BLOCK_END) {
        if (!names.children.length) {
          this.fail('parseFrom: Expected at least one import name', fromTok.lineno, fromTok.colno);
        }

        // Since we are manually advancing past the block end,
        // need to keep track of whitespace control (normally
        // this is done in `advanceAfterBlockEnd`
        if (nextTok.value.charAt(0) === '-') {
          this.dropLeadingWhitespace = true;
        }
        this.nextToken();
        break;
      }
      if (names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)) {
        this.fail('parseFrom: expected comma', fromTok.lineno, fromTok.colno);
      }
      var name = this.parsePrimary();
      if (name.value.charAt(0) === '_') {
        this.fail('parseFrom: names starting with an underscore cannot be imported', name.lineno, name.colno);
      }
      if (this.skipSymbol('as')) {
        var alias = this.parsePrimary();
        names.addChild(new nodes.Pair(name.lineno, name.colno, name, alias));
      } else {
        names.addChild(name);
      }
      withContext = this.parseWithContext();
    }
    return new nodes.FromImport(fromTok.lineno, fromTok.colno, template, names, withContext);
  };
  _proto.parseBlock = function parseBlock() {
    var tag = this.peekToken();
    if (!this.skipSymbol('block')) {
      this.fail('parseBlock: expected block', tag.lineno, tag.colno);
    }
    var node = new nodes.Block(tag.lineno, tag.colno);
    node.name = this.parsePrimary();
    if (!(node.name instanceof nodes.Symbol)) {
      this.fail('parseBlock: variable name expected', tag.lineno, tag.colno);
    }
    this.advanceAfterBlockEnd(tag.value);
    node.body = this.parseUntilBlocks('endblock');
    this.skipSymbol('endblock');
    this.skipSymbol(node.name.value);
    var tok = this.peekToken();
    if (!tok) {
      this.fail('parseBlock: expected endblock, got end of file');
    }
    this.advanceAfterBlockEnd(tok.value);
    return node;
  };
  _proto.parseExtends = function parseExtends() {
    var tagName = 'extends';
    var tag = this.peekToken();
    if (!this.skipSymbol(tagName)) {
      this.fail('parseTemplateRef: expected ' + tagName);
    }
    var node = new nodes.Extends(tag.lineno, tag.colno);
    node.template = this.parseExpression();
    this.advanceAfterBlockEnd(tag.value);
    return node;
  };
  _proto.parseInclude = function parseInclude() {
    var tagName = 'include';
    var tag = this.peekToken();
    if (!this.skipSymbol(tagName)) {
      this.fail('parseInclude: expected ' + tagName);
    }
    var node = new nodes.Include(tag.lineno, tag.colno);
    node.template = this.parseExpression();
    if (this.skipSymbol('ignore') && this.skipSymbol('missing')) {
      node.ignoreMissing = true;
    }
    this.advanceAfterBlockEnd(tag.value);
    return node;
  };
  _proto.parseIf = function parseIf() {
    var tag = this.peekToken();
    var node;
    if (this.skipSymbol('if') || this.skipSymbol('elif') || this.skipSymbol('elseif')) {
      node = new nodes.If(tag.lineno, tag.colno);
    } else if (this.skipSymbol('ifAsync')) {
      node = new nodes.IfAsync(tag.lineno, tag.colno);
    } else {
      this.fail('parseIf: expected if, elif, or elseif', tag.lineno, tag.colno);
    }
    node.cond = this.parseExpression();
    this.advanceAfterBlockEnd(tag.value);
    node.body = this.parseUntilBlocks('elif', 'elseif', 'else', 'endif');
    var tok = this.peekToken();
    switch (tok && tok.value) {
      case 'elseif':
      case 'elif':
        node.else_ = this.parseIf();
        break;
      case 'else':
        this.advanceAfterBlockEnd();
        node.else_ = this.parseUntilBlocks('endif');
        this.advanceAfterBlockEnd();
        break;
      case 'endif':
        node.else_ = null;
        this.advanceAfterBlockEnd();
        break;
      default:
        this.fail('parseIf: expected elif, else, or endif, got end of file');
    }
    return node;
  };
  _proto.parseSet = function parseSet() {
    var tag = this.peekToken();
    if (!this.skipSymbol('set')) {
      this.fail('parseSet: expected set', tag.lineno, tag.colno);
    }
    var node = new nodes.Set(tag.lineno, tag.colno, []);
    var target;
    while (target = this.parsePrimary()) {
      node.targets.push(target);
      if (!this.skip(lexer.TOKEN_COMMA)) {
        break;
      }
    }
    if (!this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
      if (!this.skip(lexer.TOKEN_BLOCK_END)) {
        this.fail('parseSet: expected = or block end in set tag', tag.lineno, tag.colno);
      } else {
        node.body = new nodes.Capture(tag.lineno, tag.colno, this.parseUntilBlocks('endset'));
        node.value = null;
        this.advanceAfterBlockEnd();
      }
    } else {
      node.value = this.parseExpression();
      this.advanceAfterBlockEnd(tag.value);
    }
    return node;
  };
  _proto.parseSwitch = function parseSwitch() {
    /*
     * Store the tag names in variables in case someone ever wants to
     * customize this.
     */
    var switchStart = 'switch';
    var switchEnd = 'endswitch';
    var caseStart = 'case';
    var caseDefault = 'default';

    // Get the switch tag.
    var tag = this.peekToken();

    // fail early if we get some unexpected tag.
    if (!this.skipSymbol(switchStart) && !this.skipSymbol(caseStart) && !this.skipSymbol(caseDefault)) {
      this.fail('parseSwitch: expected "switch," "case" or "default"', tag.lineno, tag.colno);
    }

    // parse the switch expression
    var expr = this.parseExpression();

    // advance until a start of a case, a default case or an endswitch.
    this.advanceAfterBlockEnd(switchStart);
    this.parseUntilBlocks(caseStart, caseDefault, switchEnd);

    // this is the first case. it could also be an endswitch, we'll check.
    var tok = this.peekToken();

    // create new variables for our cases and default case.
    var cases = [];
    var defaultCase;

    // while we're dealing with new cases nodes...
    do {
      // skip the start symbol and get the case expression
      this.skipSymbol(caseStart);
      var cond = this.parseExpression();
      this.advanceAfterBlockEnd(switchStart);
      // get the body of the case node and add it to the array of cases.
      var body = this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
      cases.push(new nodes.Case(tok.line, tok.col, cond, body));
      // get our next case
      tok = this.peekToken();
    } while (tok && tok.value === caseStart);

    // we either have a default case or a switch end.
    switch (tok.value) {
      case caseDefault:
        this.advanceAfterBlockEnd();
        defaultCase = this.parseUntilBlocks(switchEnd);
        this.advanceAfterBlockEnd();
        break;
      case switchEnd:
        this.advanceAfterBlockEnd();
        break;
      default:
        // otherwise bail because EOF
        this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
    }

    // and return the switch node.
    return new nodes.Switch(tag.lineno, tag.colno, expr, cases, defaultCase);
  };
  _proto.parseStatement = function parseStatement() {
    var tok = this.peekToken();
    var node;
    if (tok.type !== lexer.TOKEN_SYMBOL) {
      this.fail('tag name expected', tok.lineno, tok.colno);
    }
    if (this.breakOnBlocks && lib.indexOf(this.breakOnBlocks, tok.value) !== -1) {
      return null;
    }
    switch (tok.value) {
      case 'raw':
        return this.parseRaw();
      case 'verbatim':
        return this.parseRaw('verbatim');
      case 'if':
      case 'ifAsync':
        return this.parseIf();
      case 'for':
      case 'asyncEach':
      case 'asyncAll':
        return this.parseFor();
      case 'block':
        return this.parseBlock();
      case 'extends':
        return this.parseExtends();
      case 'include':
        return this.parseInclude();
      case 'set':
        return this.parseSet();
      case 'macro':
        return this.parseMacro();
      case 'call':
        return this.parseCall();
      case 'import':
        return this.parseImport();
      case 'from':
        return this.parseFrom();
      case 'filter':
        return this.parseFilterStatement();
      case 'switch':
        return this.parseSwitch();
      default:
        if (this.extensions.length) {
          for (var i = 0; i < this.extensions.length; i++) {
            var ext = this.extensions[i];
            if (lib.indexOf(ext.tags || [], tok.value) !== -1) {
              return ext.parse(this, nodes, lexer);
            }
          }
        }
        this.fail('unknown block tag: ' + tok.value, tok.lineno, tok.colno);
    }
    return node;
  };
  _proto.parseRaw = function parseRaw(tagName) {
    tagName = tagName || 'raw';
    var endTagName = 'end' + tagName;
    // Look for upcoming raw blocks (ignore all other kinds of blocks)
    var rawBlockRegex = new RegExp('([\\s\\S]*?){%\\s*(' + tagName + '|' + endTagName + ')\\s*(?=%})%}');
    var rawLevel = 1;
    var str = '';
    var matches = null;

    // Skip opening raw token
    // Keep this token to track line and column numbers
    var begun = this.advanceAfterBlockEnd();

    // Exit when there's nothing to match
    // or when we've found the matching "endraw" block
    while ((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {
      var all = matches[0];
      var pre = matches[1];
      var blockName = matches[2];

      // Adjust rawlevel
      if (blockName === tagName) {
        rawLevel += 1;
      } else if (blockName === endTagName) {
        rawLevel -= 1;
      }

      // Add to str
      if (rawLevel === 0) {
        // We want to exclude the last "endraw"
        str += pre;
        // Move tokenizer to beginning of endraw block
        this.tokens.backN(all.length - pre.length);
      } else {
        str += all;
      }
    }
    return new nodes.Output(begun.lineno, begun.colno, [new nodes.TemplateData(begun.lineno, begun.colno, str)]);
  };
  _proto.parsePostfix = function parsePostfix(node) {
    var lookup;
    var tok = this.peekToken();
    while (tok) {
      if (tok.type === lexer.TOKEN_LEFT_PAREN) {
        // Function call
        node = new nodes.FunCall(tok.lineno, tok.colno, node, this.parseSignature());
      } else if (tok.type === lexer.TOKEN_LEFT_BRACKET) {
        // Reference
        lookup = this.parseAggregate();
        if (lookup.children.length > 1) {
          this.fail('invalid index');
        }
        node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup.children[0]);
      } else if (tok.type === lexer.TOKEN_OPERATOR && tok.value === '.') {
        // Reference
        this.nextToken();
        var val = this.nextToken();
        if (val.type !== lexer.TOKEN_SYMBOL) {
          this.fail('expected name as lookup value, got ' + val.value, val.lineno, val.colno);
        }

        // Make a literal string because it's not a variable
        // reference
        lookup = new nodes.Literal(val.lineno, val.colno, val.value);
        node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup);
      } else {
        break;
      }
      tok = this.peekToken();
    }
    return node;
  };
  _proto.parseExpression = function parseExpression() {
    var node = this.parseInlineIf();
    return node;
  };
  _proto.parseInlineIf = function parseInlineIf() {
    var node = this.parseOr();
    if (this.skipSymbol('if')) {
      var condNode = this.parseOr();
      var bodyNode = node;
      node = new nodes.InlineIf(node.lineno, node.colno);
      node.body = bodyNode;
      node.cond = condNode;
      if (this.skipSymbol('else')) {
        node.else_ = this.parseOr();
      } else {
        node.else_ = null;
      }
    }
    return node;
  };
  _proto.parseOr = function parseOr() {
    var node = this.parseAnd();
    while (this.skipSymbol('or')) {
      var node2 = this.parseAnd();
      node = new nodes.Or(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseAnd = function parseAnd() {
    var node = this.parseNot();
    while (this.skipSymbol('and')) {
      var node2 = this.parseNot();
      node = new nodes.And(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseNot = function parseNot() {
    var tok = this.peekToken();
    if (this.skipSymbol('not')) {
      return new nodes.Not(tok.lineno, tok.colno, this.parseNot());
    }
    return this.parseIn();
  };
  _proto.parseIn = function parseIn() {
    var node = this.parseIs();
    while (1) {
      // eslint-disable-line no-constant-condition
      // check if the next token is 'not'
      var tok = this.nextToken();
      if (!tok) {
        break;
      }
      var invert = tok.type === lexer.TOKEN_SYMBOL && tok.value === 'not';
      // if it wasn't 'not', put it back
      if (!invert) {
        this.pushToken(tok);
      }
      if (this.skipSymbol('in')) {
        var node2 = this.parseIs();
        node = new nodes.In(node.lineno, node.colno, node, node2);
        if (invert) {
          node = new nodes.Not(node.lineno, node.colno, node);
        }
      } else {
        // if we'd found a 'not' but this wasn't an 'in', put back the 'not'
        if (invert) {
          this.pushToken(tok);
        }
        break;
      }
    }
    return node;
  }

  // I put this right after "in" in the operator precedence stack. That can
  // obviously be changed to be closer to Jinja.
  ;
  _proto.parseIs = function parseIs() {
    var node = this.parseCompare();
    // look for an is
    if (this.skipSymbol('is')) {
      // look for a not
      var not = this.skipSymbol('not');
      // get the next node
      var node2 = this.parseCompare();
      // create an Is node using the next node and the info from our Is node.
      node = new nodes.Is(node.lineno, node.colno, node, node2);
      // if we have a Not, create a Not node from our Is node.
      if (not) {
        node = new nodes.Not(node.lineno, node.colno, node);
      }
    }
    // return the node.
    return node;
  };
  _proto.parseCompare = function parseCompare() {
    var compareOps = ['==', '===', '!=', '!==', '<', '>', '<=', '>='];
    var expr = this.parseConcat();
    var ops = [];
    while (1) {
      // eslint-disable-line no-constant-condition
      var tok = this.nextToken();
      if (!tok) {
        break;
      } else if (compareOps.indexOf(tok.value) !== -1) {
        ops.push(new nodes.CompareOperand(tok.lineno, tok.colno, this.parseConcat(), tok.value));
      } else {
        this.pushToken(tok);
        break;
      }
    }
    if (ops.length) {
      return new nodes.Compare(ops[0].lineno, ops[0].colno, expr, ops);
    } else {
      return expr;
    }
  }

  // finds the '~' for string concatenation
  ;
  _proto.parseConcat = function parseConcat() {
    var node = this.parseAdd();
    while (this.skipValue(lexer.TOKEN_TILDE, '~')) {
      var node2 = this.parseAdd();
      node = new nodes.Concat(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseAdd = function parseAdd() {
    var node = this.parseSub();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
      var node2 = this.parseSub();
      node = new nodes.Add(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseSub = function parseSub() {
    var node = this.parseMul();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
      var node2 = this.parseMul();
      node = new nodes.Sub(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseMul = function parseMul() {
    var node = this.parseDiv();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '*')) {
      var node2 = this.parseDiv();
      node = new nodes.Mul(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseDiv = function parseDiv() {
    var node = this.parseFloorDiv();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '/')) {
      var node2 = this.parseFloorDiv();
      node = new nodes.Div(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseFloorDiv = function parseFloorDiv() {
    var node = this.parseMod();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '//')) {
      var node2 = this.parseMod();
      node = new nodes.FloorDiv(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseMod = function parseMod() {
    var node = this.parsePow();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '%')) {
      var node2 = this.parsePow();
      node = new nodes.Mod(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parsePow = function parsePow() {
    var node = this.parseUnary();
    while (this.skipValue(lexer.TOKEN_OPERATOR, '**')) {
      var node2 = this.parseUnary();
      node = new nodes.Pow(node.lineno, node.colno, node, node2);
    }
    return node;
  };
  _proto.parseUnary = function parseUnary(noFilters) {
    var tok = this.peekToken();
    var node;
    if (this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
      node = new nodes.Neg(tok.lineno, tok.colno, this.parseUnary(true));
    } else if (this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
      node = new nodes.Pos(tok.lineno, tok.colno, this.parseUnary(true));
    } else {
      node = this.parsePrimary();
    }
    if (!noFilters) {
      node = this.parseFilter(node);
    }
    return node;
  };
  _proto.parsePrimary = function parsePrimary(noPostfix) {
    var tok = this.nextToken();
    var val;
    var node = null;
    if (!tok) {
      this.fail('expected expression, got end of file');
    } else if (tok.type === lexer.TOKEN_STRING) {
      val = tok.value;
    } else if (tok.type === lexer.TOKEN_INT) {
      val = parseInt(tok.value, 10);
    } else if (tok.type === lexer.TOKEN_FLOAT) {
      val = parseFloat(tok.value);
    } else if (tok.type === lexer.TOKEN_BOOLEAN) {
      if (tok.value === 'true') {
        val = true;
      } else if (tok.value === 'false') {
        val = false;
      } else {
        this.fail('invalid boolean: ' + tok.value, tok.lineno, tok.colno);
      }
    } else if (tok.type === lexer.TOKEN_NONE) {
      val = null;
    } else if (tok.type === lexer.TOKEN_REGEX) {
      val = new RegExp(tok.value.body, tok.value.flags);
    }
    if (val !== undefined) {
      node = new nodes.Literal(tok.lineno, tok.colno, val);
    } else if (tok.type === lexer.TOKEN_SYMBOL) {
      node = new nodes.Symbol(tok.lineno, tok.colno, tok.value);
    } else {
      // See if it's an aggregate type, we need to push the
      // current delimiter token back on
      this.pushToken(tok);
      node = this.parseAggregate();
    }
    if (!noPostfix) {
      node = this.parsePostfix(node);
    }
    if (node) {
      return node;
    } else {
      throw this.error("unexpected token: " + tok.value, tok.lineno, tok.colno);
    }
  };
  _proto.parseFilterName = function parseFilterName() {
    var tok = this.expect(lexer.TOKEN_SYMBOL);
    var name = tok.value;
    while (this.skipValue(lexer.TOKEN_OPERATOR, '.')) {
      name += '.' + this.expect(lexer.TOKEN_SYMBOL).value;
    }
    return new nodes.Symbol(tok.lineno, tok.colno, name);
  };
  _proto.parseFilterArgs = function parseFilterArgs(node) {
    if (this.peekToken().type === lexer.TOKEN_LEFT_PAREN) {
      // Get a FunCall node and add the parameters to the
      // filter
      var call = this.parsePostfix(node);
      return call.args.children;
    }
    return [];
  };
  _proto.parseFilter = function parseFilter(node) {
    while (this.skip(lexer.TOKEN_PIPE)) {
      var name = this.parseFilterName();
      node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [node].concat(this.parseFilterArgs(node))));
    }
    return node;
  };
  _proto.parseFilterStatement = function parseFilterStatement() {
    var filterTok = this.peekToken();
    if (!this.skipSymbol('filter')) {
      this.fail('parseFilterStatement: expected filter');
    }
    var name = this.parseFilterName();
    var args = this.parseFilterArgs(name);
    this.advanceAfterBlockEnd(filterTok.value);
    var body = new nodes.Capture(name.lineno, name.colno, this.parseUntilBlocks('endfilter'));
    this.advanceAfterBlockEnd();
    var node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [body].concat(args)));
    return new nodes.Output(name.lineno, name.colno, [node]);
  };
  _proto.parseAggregate = function parseAggregate() {
    var tok = this.nextToken();
    var node;
    switch (tok.type) {
      case lexer.TOKEN_LEFT_PAREN:
        node = new nodes.Group(tok.lineno, tok.colno);
        break;
      case lexer.TOKEN_LEFT_BRACKET:
        node = new nodes.Array(tok.lineno, tok.colno);
        break;
      case lexer.TOKEN_LEFT_CURLY:
        node = new nodes.Dict(tok.lineno, tok.colno);
        break;
      default:
        return null;
    }
    while (1) {
      // eslint-disable-line no-constant-condition
      var type = this.peekToken().type;
      if (type === lexer.TOKEN_RIGHT_PAREN || type === lexer.TOKEN_RIGHT_BRACKET || type === lexer.TOKEN_RIGHT_CURLY) {
        this.nextToken();
        break;
      }
      if (node.children.length > 0) {
        if (!this.skip(lexer.TOKEN_COMMA)) {
          this.fail('parseAggregate: expected comma after expression', tok.lineno, tok.colno);
        }
      }
      if (node instanceof nodes.Dict) {
        // TODO: check for errors
        var key = this.parsePrimary();

        // We expect a key/value pair for dicts, separated by a
        // colon
        if (!this.skip(lexer.TOKEN_COLON)) {
          this.fail('parseAggregate: expected colon after dict key', tok.lineno, tok.colno);
        }

        // TODO: check for errors
        var value = this.parseExpression();
        node.addChild(new nodes.Pair(key.lineno, key.colno, key, value));
      } else {
        // TODO: check for errors
        var expr = this.parseExpression();
        node.addChild(expr);
      }
    }
    return node;
  };
  _proto.parseSignature = function parseSignature(tolerant, noParens) {
    var tok = this.peekToken();
    if (!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN) {
      if (tolerant) {
        return null;
      } else {
        this.fail('expected arguments', tok.lineno, tok.colno);
      }
    }
    if (tok.type === lexer.TOKEN_LEFT_PAREN) {
      tok = this.nextToken();
    }
    var args = new nodes.NodeList(tok.lineno, tok.colno);
    var kwargs = new nodes.KeywordArgs(tok.lineno, tok.colno);
    var checkComma = false;
    while (1) {
      // eslint-disable-line no-constant-condition
      tok = this.peekToken();
      if (!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN) {
        this.nextToken();
        break;
      } else if (noParens && tok.type === lexer.TOKEN_BLOCK_END) {
        break;
      }
      if (checkComma && !this.skip(lexer.TOKEN_COMMA)) {
        this.fail('parseSignature: expected comma after expression', tok.lineno, tok.colno);
      } else {
        var arg = this.parseExpression();
        if (this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
          kwargs.addChild(new nodes.Pair(arg.lineno, arg.colno, arg, this.parseExpression()));
        } else {
          args.addChild(arg);
        }
      }
      checkComma = true;
    }
    if (kwargs.children.length) {
      args.addChild(kwargs);
    }
    return args;
  };
  _proto.parseUntilBlocks = function parseUntilBlocks() {
    var prev = this.breakOnBlocks;
    for (var _len = arguments.length, blockNames = new Array(_len), _key = 0; _key < _len; _key++) {
      blockNames[_key] = arguments[_key];
    }
    this.breakOnBlocks = blockNames;
    var ret = this.parse();
    this.breakOnBlocks = prev;
    return ret;
  };
  _proto.parseNodes = function parseNodes() {
    var tok;
    var buf = [];
    while (tok = this.nextToken()) {
      if (tok.type === lexer.TOKEN_DATA) {
        var data = tok.value;
        var nextToken = this.peekToken();
        var nextVal = nextToken && nextToken.value;

        // If the last token has "-" we need to trim the
        // leading whitespace of the data. This is marked with
        // the `dropLeadingWhitespace` variable.
        if (this.dropLeadingWhitespace) {
          // TODO: this could be optimized (don't use regex)
          data = data.replace(/^\s*/, '');
          this.dropLeadingWhitespace = false;
        }

        // Same for the succeeding block start token
        if (nextToken && (nextToken.type === lexer.TOKEN_BLOCK_START && nextVal.charAt(nextVal.length - 1) === '-' || nextToken.type === lexer.TOKEN_VARIABLE_START && nextVal.charAt(this.tokens.tags.VARIABLE_START.length) === '-' || nextToken.type === lexer.TOKEN_COMMENT && nextVal.charAt(this.tokens.tags.COMMENT_START.length) === '-')) {
          // TODO: this could be optimized (don't use regex)
          data = data.replace(/\s*$/, '');
        }
        buf.push(new nodes.Output(tok.lineno, tok.colno, [new nodes.TemplateData(tok.lineno, tok.colno, data)]));
      } else if (tok.type === lexer.TOKEN_BLOCK_START) {
        this.dropLeadingWhitespace = false;
        var n = this.parseStatement();
        if (!n) {
          break;
        }
        buf.push(n);
      } else if (tok.type === lexer.TOKEN_VARIABLE_START) {
        var e = this.parseExpression();
        this.dropLeadingWhitespace = false;
        this.advanceAfterVariableEnd();
        buf.push(new nodes.Output(tok.lineno, tok.colno, [e]));
      } else if (tok.type === lexer.TOKEN_COMMENT) {
        this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.COMMENT_END.length - 1) === '-';
      } else {
        // Ignore comments, otherwise this should be an error
        this.fail('Unexpected token at top-level: ' + tok.type, tok.lineno, tok.colno);
      }
    }
    return buf;
  };
  _proto.parse = function parse() {
    return new nodes.NodeList(0, 0, this.parseNodes());
  };
  _proto.parseAsRoot = function parseAsRoot() {
    return new nodes.Root(0, 0, this.parseNodes());
  };
  return Parser;
}(Obj); // var util = require('util');
// var l = lexer.lex('{%- if x -%}\n hello {% endif %}');
// var t;
// while((t = l.nextToken())) {
//     console.log(util.inspect(t));
// }
// var p = new Parser(lexer.lex('hello {% filter title %}' +
//                              'Hello madam how are you' +
//                              '{% endfilter %}'));
// var n = p.parseAsRoot();
// nodes.printNodes(n);
module.exports = {
  parse: function parse(src, extensions, opts) {
    var p = new Parser(lexer.lex(src, opts));
    if (extensions !== undefined) {
      p.extensions = extensions;
    }
    return p.parseAsRoot();
  },
  Parser: Parser
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_125911__) {

"use strict";


var lib = __nested_webpack_require_125911__(0);
var whitespaceChars = " \n\t\r\xA0";
var delimChars = '()[]{}%*-+~/#,:|.<>=!';
var intChars = '0123456789';
var BLOCK_START = '{%';
var BLOCK_END = '%}';
var VARIABLE_START = '{{';
var VARIABLE_END = '}}';
var COMMENT_START = '{#';
var COMMENT_END = '#}';
var TOKEN_STRING = 'string';
var TOKEN_WHITESPACE = 'whitespace';
var TOKEN_DATA = 'data';
var TOKEN_BLOCK_START = 'block-start';
var TOKEN_BLOCK_END = 'block-end';
var TOKEN_VARIABLE_START = 'variable-start';
var TOKEN_VARIABLE_END = 'variable-end';
var TOKEN_COMMENT = 'comment';
var TOKEN_LEFT_PAREN = 'left-paren';
var TOKEN_RIGHT_PAREN = 'right-paren';
var TOKEN_LEFT_BRACKET = 'left-bracket';
var TOKEN_RIGHT_BRACKET = 'right-bracket';
var TOKEN_LEFT_CURLY = 'left-curly';
var TOKEN_RIGHT_CURLY = 'right-curly';
var TOKEN_OPERATOR = 'operator';
var TOKEN_COMMA = 'comma';
var TOKEN_COLON = 'colon';
var TOKEN_TILDE = 'tilde';
var TOKEN_PIPE = 'pipe';
var TOKEN_INT = 'int';
var TOKEN_FLOAT = 'float';
var TOKEN_BOOLEAN = 'boolean';
var TOKEN_NONE = 'none';
var TOKEN_SYMBOL = 'symbol';
var TOKEN_SPECIAL = 'special';
var TOKEN_REGEX = 'regex';
function token(type, value, lineno, colno) {
  return {
    type: type,
    value: value,
    lineno: lineno,
    colno: colno
  };
}
var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(str, opts) {
    this.str = str;
    this.index = 0;
    this.len = str.length;
    this.lineno = 0;
    this.colno = 0;
    this.in_code = false;
    opts = opts || {};
    var tags = opts.tags || {};
    this.tags = {
      BLOCK_START: tags.blockStart || BLOCK_START,
      BLOCK_END: tags.blockEnd || BLOCK_END,
      VARIABLE_START: tags.variableStart || VARIABLE_START,
      VARIABLE_END: tags.variableEnd || VARIABLE_END,
      COMMENT_START: tags.commentStart || COMMENT_START,
      COMMENT_END: tags.commentEnd || COMMENT_END
    };
    this.trimBlocks = !!opts.trimBlocks;
    this.lstripBlocks = !!opts.lstripBlocks;
  }
  var _proto = Tokenizer.prototype;
  _proto.nextToken = function nextToken() {
    var lineno = this.lineno;
    var colno = this.colno;
    var tok;
    if (this.in_code) {
      // Otherwise, if we are in a block parse it as code
      var cur = this.current();
      if (this.isFinished()) {
        // We have nothing else to parse
        return null;
      } else if (cur === '"' || cur === '\'') {
        // We've hit a string
        return token(TOKEN_STRING, this._parseString(cur), lineno, colno);
      } else if (tok = this._extract(whitespaceChars)) {
        // We hit some whitespace
        return token(TOKEN_WHITESPACE, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.BLOCK_END)) || (tok = this._extractString('-' + this.tags.BLOCK_END))) {
        // Special check for the block end tag
        //
        // It is a requirement that start and end tags are composed of
        // delimiter characters (%{}[] etc), and our code always
        // breaks on delimiters so we can assume the token parsing
        // doesn't consume these elsewhere
        this.in_code = false;
        if (this.trimBlocks) {
          cur = this.current();
          if (cur === '\n') {
            // Skip newline
            this.forward();
          } else if (cur === '\r') {
            // Skip CRLF newline
            this.forward();
            cur = this.current();
            if (cur === '\n') {
              this.forward();
            } else {
              // Was not a CRLF, so go back
              this.back();
            }
          }
        }
        return token(TOKEN_BLOCK_END, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.VARIABLE_END)) || (tok = this._extractString('-' + this.tags.VARIABLE_END))) {
        // Special check for variable end tag (see above)
        this.in_code = false;
        return token(TOKEN_VARIABLE_END, tok, lineno, colno);
      } else if (cur === 'r' && this.str.charAt(this.index + 1) === '/') {
        // Skip past 'r/'.
        this.forwardN(2);

        // Extract until the end of the regex -- / ends it, \/ does not.
        var regexBody = '';
        while (!this.isFinished()) {
          if (this.current() === '/' && this.previous() !== '\\') {
            this.forward();
            break;
          } else {
            regexBody += this.current();
            this.forward();
          }
        }

        // Check for flags.
        // The possible flags are according to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
        var POSSIBLE_FLAGS = ['g', 'i', 'm', 'y'];
        var regexFlags = '';
        while (!this.isFinished()) {
          var isCurrentAFlag = POSSIBLE_FLAGS.indexOf(this.current()) !== -1;
          if (isCurrentAFlag) {
            regexFlags += this.current();
            this.forward();
          } else {
            break;
          }
        }
        return token(TOKEN_REGEX, {
          body: regexBody,
          flags: regexFlags
        }, lineno, colno);
      } else if (delimChars.indexOf(cur) !== -1) {
        // We've hit a delimiter (a special char like a bracket)
        this.forward();
        var complexOps = ['==', '===', '!=', '!==', '<=', '>=', '//', '**'];
        var curComplex = cur + this.current();
        var type;
        if (lib.indexOf(complexOps, curComplex) !== -1) {
          this.forward();
          cur = curComplex;

          // See if this is a strict equality/inequality comparator
          if (lib.indexOf(complexOps, curComplex + this.current()) !== -1) {
            cur = curComplex + this.current();
            this.forward();
          }
        }
        switch (cur) {
          case '(':
            type = TOKEN_LEFT_PAREN;
            break;
          case ')':
            type = TOKEN_RIGHT_PAREN;
            break;
          case '[':
            type = TOKEN_LEFT_BRACKET;
            break;
          case ']':
            type = TOKEN_RIGHT_BRACKET;
            break;
          case '{':
            type = TOKEN_LEFT_CURLY;
            break;
          case '}':
            type = TOKEN_RIGHT_CURLY;
            break;
          case ',':
            type = TOKEN_COMMA;
            break;
          case ':':
            type = TOKEN_COLON;
            break;
          case '~':
            type = TOKEN_TILDE;
            break;
          case '|':
            type = TOKEN_PIPE;
            break;
          default:
            type = TOKEN_OPERATOR;
        }
        return token(type, cur, lineno, colno);
      } else {
        // We are not at whitespace or a delimiter, so extract the
        // text and parse it
        tok = this._extractUntil(whitespaceChars + delimChars);
        if (tok.match(/^[-+]?[0-9]+$/)) {
          if (this.current() === '.') {
            this.forward();
            var dec = this._extract(intChars);
            return token(TOKEN_FLOAT, tok + '.' + dec, lineno, colno);
          } else {
            return token(TOKEN_INT, tok, lineno, colno);
          }
        } else if (tok.match(/^(true|false)$/)) {
          return token(TOKEN_BOOLEAN, tok, lineno, colno);
        } else if (tok === 'none') {
          return token(TOKEN_NONE, tok, lineno, colno);
          /*
           * Added to make the test `null is null` evaluate truthily.
           * Otherwise, Nunjucks will look up null in the context and
           * return `undefined`, which is not what we want. This *may* have
           * consequences is someone is using null in their templates as a
           * variable.
           */
        } else if (tok === 'null') {
          return token(TOKEN_NONE, tok, lineno, colno);
        } else if (tok) {
          return token(TOKEN_SYMBOL, tok, lineno, colno);
        } else {
          throw new Error('Unexpected value while parsing: ' + tok);
        }
      }
    } else {
      // Parse out the template text, breaking on tag
      // delimiters because we need to look for block/variable start
      // tags (don't use the full delimChars for optimization)
      var beginChars = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
      if (this.isFinished()) {
        return null;
      } else if ((tok = this._extractString(this.tags.BLOCK_START + '-')) || (tok = this._extractString(this.tags.BLOCK_START))) {
        this.in_code = true;
        return token(TOKEN_BLOCK_START, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.VARIABLE_START + '-')) || (tok = this._extractString(this.tags.VARIABLE_START))) {
        this.in_code = true;
        return token(TOKEN_VARIABLE_START, tok, lineno, colno);
      } else {
        tok = '';
        var data;
        var inComment = false;
        if (this._matches(this.tags.COMMENT_START)) {
          inComment = true;
          tok = this._extractString(this.tags.COMMENT_START);
        }

        // Continually consume text, breaking on the tag delimiter
        // characters and checking to see if it's a start tag.
        //
        // We could hit the end of the template in the middle of
        // our looping, so check for the null return value from
        // _extractUntil
        while ((data = this._extractUntil(beginChars)) !== null) {
          tok += data;
          if ((this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !inComment) {
            if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= tok.length) {
              var lastLine = tok.slice(-this.colno);
              if (/^\s+$/.test(lastLine)) {
                // Remove block leading whitespace from beginning of the string
                tok = tok.slice(0, -this.colno);
                if (!tok.length) {
                  // All data removed, collapse to avoid unnecessary nodes
                  // by returning next token (block start)
                  return this.nextToken();
                }
              }
            }
            // If it is a start tag, stop looping
            break;
          } else if (this._matches(this.tags.COMMENT_END)) {
            if (!inComment) {
              throw new Error('unexpected end of comment');
            }
            tok += this._extractString(this.tags.COMMENT_END);
            break;
          } else {
            // It does not match any tag, so add the character and
            // carry on
            tok += this.current();
            this.forward();
          }
        }
        if (data === null && inComment) {
          throw new Error('expected end of comment, got end of file');
        }
        return token(inComment ? TOKEN_COMMENT : TOKEN_DATA, tok, lineno, colno);
      }
    }
  };
  _proto._parseString = function _parseString(delimiter) {
    this.forward();
    var str = '';
    while (!this.isFinished() && this.current() !== delimiter) {
      var cur = this.current();
      if (cur === '\\') {
        this.forward();
        switch (this.current()) {
          case 'n':
            str += '\n';
            break;
          case 't':
            str += '\t';
            break;
          case 'r':
            str += '\r';
            break;
          default:
            str += this.current();
        }
        this.forward();
      } else {
        str += cur;
        this.forward();
      }
    }
    this.forward();
    return str;
  };
  _proto._matches = function _matches(str) {
    if (this.index + str.length > this.len) {
      return null;
    }
    var m = this.str.slice(this.index, this.index + str.length);
    return m === str;
  };
  _proto._extractString = function _extractString(str) {
    if (this._matches(str)) {
      this.forwardN(str.length);
      return str;
    }
    return null;
  };
  _proto._extractUntil = function _extractUntil(charString) {
    // Extract all non-matching chars, with the default matching set
    // to everything
    return this._extractMatching(true, charString || '');
  };
  _proto._extract = function _extract(charString) {
    // Extract all matching chars (no default, so charString must be
    // explicit)
    return this._extractMatching(false, charString);
  };
  _proto._extractMatching = function _extractMatching(breakOnMatch, charString) {
    // Pull out characters until a breaking char is hit.
    // If breakOnMatch is false, a non-matching char stops it.
    // If breakOnMatch is true, a matching char stops it.

    if (this.isFinished()) {
      return null;
    }
    var first = charString.indexOf(this.current());

    // Only proceed if the first character doesn't meet our condition
    if (breakOnMatch && first === -1 || !breakOnMatch && first !== -1) {
      var t = this.current();
      this.forward();

      // And pull out all the chars one at a time until we hit a
      // breaking char
      var idx = charString.indexOf(this.current());
      while ((breakOnMatch && idx === -1 || !breakOnMatch && idx !== -1) && !this.isFinished()) {
        t += this.current();
        this.forward();
        idx = charString.indexOf(this.current());
      }
      return t;
    }
    return '';
  };
  _proto._extractRegex = function _extractRegex(regex) {
    var matches = this.currentStr().match(regex);
    if (!matches) {
      return null;
    }

    // Move forward whatever was matched
    this.forwardN(matches[0].length);
    return matches;
  };
  _proto.isFinished = function isFinished() {
    return this.index >= this.len;
  };
  _proto.forwardN = function forwardN(n) {
    for (var i = 0; i < n; i++) {
      this.forward();
    }
  };
  _proto.forward = function forward() {
    this.index++;
    if (this.previous() === '\n') {
      this.lineno++;
      this.colno = 0;
    } else {
      this.colno++;
    }
  };
  _proto.backN = function backN(n) {
    for (var i = 0; i < n; i++) {
      this.back();
    }
  };
  _proto.back = function back() {
    this.index--;
    if (this.current() === '\n') {
      this.lineno--;
      var idx = this.src.lastIndexOf('\n', this.index - 1);
      if (idx === -1) {
        this.colno = this.index;
      } else {
        this.colno = this.index - idx;
      }
    } else {
      this.colno--;
    }
  }

  // current returns current character
  ;
  _proto.current = function current() {
    if (!this.isFinished()) {
      return this.str.charAt(this.index);
    }
    return '';
  }

  // currentStr returns what's left of the unparsed string
  ;
  _proto.currentStr = function currentStr() {
    if (!this.isFinished()) {
      return this.str.substr(this.index);
    }
    return '';
  };
  _proto.previous = function previous() {
    return this.str.charAt(this.index - 1);
  };
  return Tokenizer;
}();
module.exports = {
  lex: function lex(src, opts) {
    return new Tokenizer(src, opts);
  },
  TOKEN_STRING: TOKEN_STRING,
  TOKEN_WHITESPACE: TOKEN_WHITESPACE,
  TOKEN_DATA: TOKEN_DATA,
  TOKEN_BLOCK_START: TOKEN_BLOCK_START,
  TOKEN_BLOCK_END: TOKEN_BLOCK_END,
  TOKEN_VARIABLE_START: TOKEN_VARIABLE_START,
  TOKEN_VARIABLE_END: TOKEN_VARIABLE_END,
  TOKEN_COMMENT: TOKEN_COMMENT,
  TOKEN_LEFT_PAREN: TOKEN_LEFT_PAREN,
  TOKEN_RIGHT_PAREN: TOKEN_RIGHT_PAREN,
  TOKEN_LEFT_BRACKET: TOKEN_LEFT_BRACKET,
  TOKEN_RIGHT_BRACKET: TOKEN_RIGHT_BRACKET,
  TOKEN_LEFT_CURLY: TOKEN_LEFT_CURLY,
  TOKEN_RIGHT_CURLY: TOKEN_RIGHT_CURLY,
  TOKEN_OPERATOR: TOKEN_OPERATOR,
  TOKEN_COMMA: TOKEN_COMMA,
  TOKEN_COLON: TOKEN_COLON,
  TOKEN_TILDE: TOKEN_TILDE,
  TOKEN_PIPE: TOKEN_PIPE,
  TOKEN_INT: TOKEN_INT,
  TOKEN_FLOAT: TOKEN_FLOAT,
  TOKEN_BOOLEAN: TOKEN_BOOLEAN,
  TOKEN_NONE: TOKEN_NONE,
  TOKEN_SYMBOL: TOKEN_SYMBOL,
  TOKEN_SPECIAL: TOKEN_SPECIAL,
  TOKEN_REGEX: TOKEN_REGEX
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_141814__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Loader = __nested_webpack_require_141814__(6);
var _require = __nested_webpack_require_141814__(19),
  PrecompiledLoader = _require.PrecompiledLoader;
var WebLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(WebLoader, _Loader);
  function WebLoader(baseURL, opts) {
    var _this;
    _this = _Loader.call(this) || this;
    _this.baseURL = baseURL || '.';
    opts = opts || {};

    // By default, the cache is turned off because there's no way
    // to "watch" templates over HTTP, so they are re-downloaded
    // and compiled each time. (Remember, PRECOMPILE YOUR
    // TEMPLATES in production!)
    _this.useCache = !!opts.useCache;

    // We default `async` to false so that the simple synchronous
    // API can be used when you aren't doing anything async in
    // your templates (which is most of the time). This performs a
    // sync ajax request, but that's ok because it should *only*
    // happen in development. PRECOMPILE YOUR TEMPLATES.
    _this.async = !!opts.async;
    return _this;
  }
  var _proto = WebLoader.prototype;
  _proto.resolve = function resolve(from, to) {
    throw new Error('relative templates not support in the browser yet');
  };
  _proto.getSource = function getSource(name, cb) {
    var _this2 = this;
    var useCache = this.useCache;
    var result;
    this.fetch(this.baseURL + '/' + name, function (err, src) {
      if (err) {
        if (cb) {
          cb(err.content);
        } else if (err.status === 404) {
          result = null;
        } else {
          throw err.content;
        }
      } else {
        result = {
          src: src,
          path: name,
          noCache: !useCache
        };
        _this2.emit('load', name, result);
        if (cb) {
          cb(null, result);
        }
      }
    });

    // if this WebLoader isn't running asynchronously, the
    // fetch above would actually run sync and we'll have a
    // result here
    return result;
  };
  _proto.fetch = function fetch(url, cb) {
    // Only in the browser please
    if (typeof window === 'undefined') {
      throw new Error('WebLoader can only by used in a browser');
    }
    var ajax = new XMLHttpRequest();
    var loading = true;
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && loading) {
        loading = false;
        if (ajax.status === 0 || ajax.status === 200) {
          cb(null, ajax.responseText);
        } else {
          cb({
            status: ajax.status,
            content: ajax.responseText
          });
        }
      }
    };
    url += (url.indexOf('?') === -1 ? '?' : '&') + 's=' + new Date().getTime();
    ajax.open('GET', url, this.async);
    ajax.send();
  };
  return WebLoader;
}(Loader);
module.exports = {
  WebLoader: WebLoader,
  PrecompiledLoader: PrecompiledLoader
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_145090__) {

"use strict";


var lib = __nested_webpack_require_145090__(0);
var _require = __nested_webpack_require_145090__(7),
  Environment = _require.Environment,
  Template = _require.Template;
var Loader = __nested_webpack_require_145090__(6);
var loaders = __nested_webpack_require_145090__(10);
var precompile = __nested_webpack_require_145090__(23);
var compiler = __nested_webpack_require_145090__(5);
var parser = __nested_webpack_require_145090__(8);
var lexer = __nested_webpack_require_145090__(9);
var runtime = __nested_webpack_require_145090__(2);
var nodes = __nested_webpack_require_145090__(3);
var installJinjaCompat = __nested_webpack_require_145090__(25);

// A single instance of an environment, since this is so commonly used
var e;
function configure(templatesPath, opts) {
  opts = opts || {};
  if (lib.isObject(templatesPath)) {
    opts = templatesPath;
    templatesPath = null;
  }
  var TemplateLoader;
  if (loaders.FileSystemLoader) {
    TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
      watch: opts.watch,
      noCache: opts.noCache
    });
  } else if (loaders.WebLoader) {
    TemplateLoader = new loaders.WebLoader(templatesPath, {
      useCache: opts.web && opts.web.useCache,
      async: opts.web && opts.web.async
    });
  }
  e = new Environment(TemplateLoader, opts);
  if (opts && opts.express) {
    e.express(opts.express);
  }
  return e;
}
module.exports = {
  Environment: Environment,
  Template: Template,
  Loader: Loader,
  FileSystemLoader: loaders.FileSystemLoader,
  NodeResolveLoader: loaders.NodeResolveLoader,
  PrecompiledLoader: loaders.PrecompiledLoader,
  WebLoader: loaders.WebLoader,
  compiler: compiler,
  parser: parser,
  lexer: lexer,
  runtime: runtime,
  lib: lib,
  nodes: nodes,
  installJinjaCompat: installJinjaCompat,
  configure: configure,
  reset: function reset() {
    e = undefined;
  },
  compile: function compile(src, env, path, eagerCompile) {
    if (!e) {
      configure();
    }
    return new Template(src, env, path, eagerCompile);
  },
  render: function render(name, ctx, cb) {
    if (!e) {
      configure();
    }
    return e.render(name, ctx, cb);
  },
  renderString: function renderString(src, ctx, cb) {
    if (!e) {
      configure();
    }
    return e.renderString(src, ctx, cb);
  },
  precompile: precompile ? precompile.precompile : undefined,
  precompileString: precompile ? precompile.precompileString : undefined
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_147456__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __nested_webpack_require_147456__(13);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_149726__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __nested_webpack_require_149726__(14)))

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MIT license (by Elan Shanker).
(function(globals) {
  'use strict';

  var executeSync = function(){
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'function'){
      args[0].apply(null, args.splice(1));
    }
  };

  var executeAsync = function(fn){
    if (typeof setImmediate === 'function') {
      setImmediate(fn);
    } else if (typeof process !== 'undefined' && process.nextTick) {
      process.nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  };

  var makeIterator = function (tasks) {
    var makeCallback = function (index) {
      var fn = function () {
        if (tasks.length) {
          tasks[index].apply(null, arguments);
        }
        return fn.next();
      };
      fn.next = function () {
        return (index < tasks.length - 1) ? makeCallback(index + 1): null;
      };
      return fn;
    };
    return makeCallback(0);
  };
  
  var _isArray = Array.isArray || function(maybeArray){
    return Object.prototype.toString.call(maybeArray) === '[object Array]';
  };

  var waterfall = function (tasks, callback, forceAsync) {
    var nextTick = forceAsync ? executeAsync : executeSync;
    callback = callback || function () {};
    if (!_isArray(tasks)) {
      var err = new Error('First argument to waterfall must be an array of functions');
      return callback(err);
    }
    if (!tasks.length) {
      return callback();
    }
    var wrapIterator = function (iterator) {
      return function (err) {
        if (err) {
          callback.apply(null, arguments);
          callback = function () {};
        } else {
          var args = Array.prototype.slice.call(arguments, 1);
          var next = iterator.next();
          if (next) {
            args.push(wrapIterator(next));
          } else {
            args.push(callback);
          }
          nextTick(function () {
            iterator.apply(null, args);
          });
        }
      };
    };
    wrapIterator(makeIterator(tasks))();
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return waterfall;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
  } else {}
})(this);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_177680__) {

"use strict";


var nodes = __nested_webpack_require_177680__(3);
var lib = __nested_webpack_require_177680__(0);
var sym = 0;
function gensym() {
  return 'hole_' + sym++;
}

// copy-on-write version of map
function mapCOW(arr, func) {
  var res = null;
  for (var i = 0; i < arr.length; i++) {
    var item = func(arr[i]);
    if (item !== arr[i]) {
      if (!res) {
        res = arr.slice();
      }
      res[i] = item;
    }
  }
  return res || arr;
}
function walk(ast, func, depthFirst) {
  if (!(ast instanceof nodes.Node)) {
    return ast;
  }
  if (!depthFirst) {
    var astT = func(ast);
    if (astT && astT !== ast) {
      return astT;
    }
  }
  if (ast instanceof nodes.NodeList) {
    var children = mapCOW(ast.children, function (node) {
      return walk(node, func, depthFirst);
    });
    if (children !== ast.children) {
      ast = new nodes[ast.typename](ast.lineno, ast.colno, children);
    }
  } else if (ast instanceof nodes.CallExtension) {
    var args = walk(ast.args, func, depthFirst);
    var contentArgs = mapCOW(ast.contentArgs, function (node) {
      return walk(node, func, depthFirst);
    });
    if (args !== ast.args || contentArgs !== ast.contentArgs) {
      ast = new nodes[ast.typename](ast.extName, ast.prop, args, contentArgs);
    }
  } else {
    var props = ast.fields.map(function (field) {
      return ast[field];
    });
    var propsT = mapCOW(props, function (prop) {
      return walk(prop, func, depthFirst);
    });
    if (propsT !== props) {
      ast = new nodes[ast.typename](ast.lineno, ast.colno);
      propsT.forEach(function (prop, i) {
        ast[ast.fields[i]] = prop;
      });
    }
  }
  return depthFirst ? func(ast) || ast : ast;
}
function depthWalk(ast, func) {
  return walk(ast, func, true);
}
function _liftFilters(node, asyncFilters, prop) {
  var children = [];
  var walked = depthWalk(prop ? node[prop] : node, function (descNode) {
    var symbol;
    if (descNode instanceof nodes.Block) {
      return descNode;
    } else if (descNode instanceof nodes.Filter && lib.indexOf(asyncFilters, descNode.name.value) !== -1 || descNode instanceof nodes.CallExtensionAsync) {
      symbol = new nodes.Symbol(descNode.lineno, descNode.colno, gensym());
      children.push(new nodes.FilterAsync(descNode.lineno, descNode.colno, descNode.name, descNode.args, symbol));
    }
    return symbol;
  });
  if (prop) {
    node[prop] = walked;
  } else {
    node = walked;
  }
  if (children.length) {
    children.push(node);
    return new nodes.NodeList(node.lineno, node.colno, children);
  } else {
    return node;
  }
}
function liftFilters(ast, asyncFilters) {
  return depthWalk(ast, function (node) {
    if (node instanceof nodes.Output) {
      return _liftFilters(node, asyncFilters);
    } else if (node instanceof nodes.Set) {
      return _liftFilters(node, asyncFilters, 'value');
    } else if (node instanceof nodes.For) {
      return _liftFilters(node, asyncFilters, 'arr');
    } else if (node instanceof nodes.If) {
      return _liftFilters(node, asyncFilters, 'cond');
    } else if (node instanceof nodes.CallExtension) {
      return _liftFilters(node, asyncFilters, 'args');
    } else {
      return undefined;
    }
  });
}
function liftSuper(ast) {
  return walk(ast, function (blockNode) {
    if (!(blockNode instanceof nodes.Block)) {
      return;
    }
    var hasSuper = false;
    var symbol = gensym();
    blockNode.body = walk(blockNode.body, function (node) {
      // eslint-disable-line consistent-return
      if (node instanceof nodes.FunCall && node.name.value === 'super') {
        hasSuper = true;
        return new nodes.Symbol(node.lineno, node.colno, symbol);
      }
    });
    if (hasSuper) {
      blockNode.body.children.unshift(new nodes.Super(0, 0, blockNode.name, new nodes.Symbol(0, 0, symbol)));
    }
  });
}
function convertStatements(ast) {
  return depthWalk(ast, function (node) {
    if (!(node instanceof nodes.If) && !(node instanceof nodes.For)) {
      return undefined;
    }
    var async = false;
    walk(node, function (child) {
      if (child instanceof nodes.FilterAsync || child instanceof nodes.IfAsync || child instanceof nodes.AsyncEach || child instanceof nodes.AsyncAll || child instanceof nodes.CallExtensionAsync) {
        async = true;
        // Stop iterating by returning the node
        return child;
      }
      return undefined;
    });
    if (async) {
      if (node instanceof nodes.If) {
        return new nodes.IfAsync(node.lineno, node.colno, node.cond, node.body, node.else_);
      } else if (node instanceof nodes.For && !(node instanceof nodes.AsyncAll)) {
        return new nodes.AsyncEach(node.lineno, node.colno, node.arr, node.name, node.body, node.else_);
      }
    }
    return undefined;
  });
}
function cps(ast, asyncFilters) {
  return convertStatements(liftSuper(liftFilters(ast, asyncFilters)));
}
function transform(ast, asyncFilters) {
  return cps(ast, asyncFilters || []);
}

// var parser = require('./parser');
// var src = 'hello {% foo %}{% endfoo %} end';
// var ast = transform(parser.parse(src, [new FooExtension()]), ['bar']);
// nodes.printNodes(ast);

module.exports = {
  transform: transform
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_182949__) {

"use strict";


var lib = __nested_webpack_require_182949__(0);
var r = __nested_webpack_require_182949__(2);
var exports = module.exports = {};
function normalize(value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue;
  }
  return value;
}
exports.abs = Math.abs;
function isNaN(num) {
  return num !== num; // eslint-disable-line no-self-compare
}

function batch(arr, linecount, fillWith) {
  var i;
  var res = [];
  var tmp = [];
  for (i = 0; i < arr.length; i++) {
    if (i % linecount === 0 && tmp.length) {
      res.push(tmp);
      tmp = [];
    }
    tmp.push(arr[i]);
  }
  if (tmp.length) {
    if (fillWith) {
      for (i = tmp.length; i < linecount; i++) {
        tmp.push(fillWith);
      }
    }
    res.push(tmp);
  }
  return res;
}
exports.batch = batch;
function capitalize(str) {
  str = normalize(str, '');
  var ret = str.toLowerCase();
  return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
}
exports.capitalize = capitalize;
function center(str, width) {
  str = normalize(str, '');
  width = width || 80;
  if (str.length >= width) {
    return str;
  }
  var spaces = width - str.length;
  var pre = lib.repeat(' ', spaces / 2 - spaces % 2);
  var post = lib.repeat(' ', spaces / 2);
  return r.copySafeness(str, pre + str + post);
}
exports.center = center;
function default_(val, def, bool) {
  if (bool) {
    return val || def;
  } else {
    return val !== undefined ? val : def;
  }
}

// TODO: it is confusing to export something called 'default'
exports['default'] = default_; // eslint-disable-line dot-notation

function dictsort(val, caseSensitive, by) {
  if (!lib.isObject(val)) {
    throw new lib.TemplateError('dictsort filter: val must be an object');
  }
  var array = [];
  // deliberately include properties from the object's prototype
  for (var k in val) {
    // eslint-disable-line guard-for-in, no-restricted-syntax
    array.push([k, val[k]]);
  }
  var si;
  if (by === undefined || by === 'key') {
    si = 0;
  } else if (by === 'value') {
    si = 1;
  } else {
    throw new lib.TemplateError('dictsort filter: You can only sort by either key or value');
  }
  array.sort(function (t1, t2) {
    var a = t1[si];
    var b = t2[si];
    if (!caseSensitive) {
      if (lib.isString(a)) {
        a = a.toUpperCase();
      }
      if (lib.isString(b)) {
        b = b.toUpperCase();
      }
    }
    return a > b ? 1 : a === b ? 0 : -1; // eslint-disable-line no-nested-ternary
  });

  return array;
}
exports.dictsort = dictsort;
function dump(obj, spaces) {
  return JSON.stringify(obj, null, spaces);
}
exports.dump = dump;
function escape(str) {
  if (str instanceof r.SafeString) {
    return str;
  }
  str = str === null || str === undefined ? '' : str;
  return r.markSafe(lib.escape(str.toString()));
}
exports.escape = escape;
function safe(str) {
  if (str instanceof r.SafeString) {
    return str;
  }
  str = str === null || str === undefined ? '' : str;
  return r.markSafe(str.toString());
}
exports.safe = safe;
function first(arr) {
  return arr[0];
}
exports.first = first;
function forceescape(str) {
  str = str === null || str === undefined ? '' : str;
  return r.markSafe(lib.escape(str.toString()));
}
exports.forceescape = forceescape;
function groupby(arr, attr) {
  return lib.groupBy(arr, attr, this.env.opts.throwOnUndefined);
}
exports.groupby = groupby;
function indent(str, width, indentfirst) {
  str = normalize(str, '');
  if (str === '') {
    return '';
  }
  width = width || 4;
  // let res = '';
  var lines = str.split('\n');
  var sp = lib.repeat(' ', width);
  var res = lines.map(function (l, i) {
    return i === 0 && !indentfirst ? l : "" + sp + l;
  }).join('\n');
  return r.copySafeness(str, res);
}
exports.indent = indent;
function join(arr, del, attr) {
  del = del || '';
  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }
  return arr.join(del);
}
exports.join = join;
function last(arr) {
  return arr[arr.length - 1];
}
exports.last = last;
function lengthFilter(val) {
  var value = normalize(val, '');
  if (value !== undefined) {
    if (typeof Map === 'function' && value instanceof Map || typeof Set === 'function' && value instanceof Set) {
      // ECMAScript 2015 Maps and Sets
      return value.size;
    }
    if (lib.isObject(value) && !(value instanceof r.SafeString)) {
      // Objects (besides SafeStrings), non-primative Arrays
      return lib.keys(value).length;
    }
    return value.length;
  }
  return 0;
}
exports.length = lengthFilter;
function list(val) {
  if (lib.isString(val)) {
    return val.split('');
  } else if (lib.isObject(val)) {
    return lib._entries(val || {}).map(function (_ref) {
      var key = _ref[0],
        value = _ref[1];
      return {
        key: key,
        value: value
      };
    });
  } else if (lib.isArray(val)) {
    return val;
  } else {
    throw new lib.TemplateError('list filter: type not iterable');
  }
}
exports.list = list;
function lower(str) {
  str = normalize(str, '');
  return str.toLowerCase();
}
exports.lower = lower;
function nl2br(str) {
  if (str === null || str === undefined) {
    return '';
  }
  return r.copySafeness(str, str.replace(/\r\n|\n/g, '<br />\n'));
}
exports.nl2br = nl2br;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
exports.random = random;

/**
 * Construct select or reject filter
 *
 * @param {boolean} expectedTestResult
 * @returns {function(array, string, *): array}
 */
function getSelectOrReject(expectedTestResult) {
  function filter(arr, testName, secondArg) {
    if (testName === void 0) {
      testName = 'truthy';
    }
    var context = this;
    var test = context.env.getTest(testName);
    return lib.toArray(arr).filter(function examineTestResult(item) {
      return test.call(context, item, secondArg) === expectedTestResult;
    });
  }
  return filter;
}
exports.reject = getSelectOrReject(false);
function rejectattr(arr, attr) {
  return arr.filter(function (item) {
    return !item[attr];
  });
}
exports.rejectattr = rejectattr;
exports.select = getSelectOrReject(true);
function selectattr(arr, attr) {
  return arr.filter(function (item) {
    return !!item[attr];
  });
}
exports.selectattr = selectattr;
function replace(str, old, new_, maxCount) {
  var originalStr = str;
  if (old instanceof RegExp) {
    return str.replace(old, new_);
  }
  if (typeof maxCount === 'undefined') {
    maxCount = -1;
  }
  var res = ''; // Output

  // Cast Numbers in the search term to string
  if (typeof old === 'number') {
    old = '' + old;
  } else if (typeof old !== 'string') {
    // If it is something other than number or string,
    // return the original string
    return str;
  }

  // Cast numbers in the replacement to string
  if (typeof str === 'number') {
    str = '' + str;
  }

  // If by now, we don't have a string, throw it back
  if (typeof str !== 'string' && !(str instanceof r.SafeString)) {
    return str;
  }

  // ShortCircuits
  if (old === '') {
    // Mimic the python behaviour: empty string is replaced
    // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
    res = new_ + str.split('').join(new_) + new_;
    return r.copySafeness(str, res);
  }
  var nextIndex = str.indexOf(old);
  // if # of replacements to perform is 0, or the string to does
  // not contain the old value, return the string
  if (maxCount === 0 || nextIndex === -1) {
    return str;
  }
  var pos = 0;
  var count = 0; // # of replacements made

  while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
    // Grab the next chunk of src string and add it with the
    // replacement, to the result
    res += str.substring(pos, nextIndex) + new_;
    // Increment our pointer in the src string
    pos = nextIndex + old.length;
    count++;
    // See if there are any more replacements to be made
    nextIndex = str.indexOf(old, pos);
  }

  // We've either reached the end, or done the max # of
  // replacements, tack on any remaining string
  if (pos < str.length) {
    res += str.substring(pos);
  }
  return r.copySafeness(originalStr, res);
}
exports.replace = replace;
function reverse(val) {
  var arr;
  if (lib.isString(val)) {
    arr = list(val);
  } else {
    // Copy it
    arr = lib.map(val, function (v) {
      return v;
    });
  }
  arr.reverse();
  if (lib.isString(val)) {
    return r.copySafeness(val, arr.join(''));
  }
  return arr;
}
exports.reverse = reverse;
function round(val, precision, method) {
  precision = precision || 0;
  var factor = Math.pow(10, precision);
  var rounder;
  if (method === 'ceil') {
    rounder = Math.ceil;
  } else if (method === 'floor') {
    rounder = Math.floor;
  } else {
    rounder = Math.round;
  }
  return rounder(val * factor) / factor;
}
exports.round = round;
function slice(arr, slices, fillWith) {
  var sliceLength = Math.floor(arr.length / slices);
  var extra = arr.length % slices;
  var res = [];
  var offset = 0;
  for (var i = 0; i < slices; i++) {
    var start = offset + i * sliceLength;
    if (i < extra) {
      offset++;
    }
    var end = offset + (i + 1) * sliceLength;
    var currSlice = arr.slice(start, end);
    if (fillWith && i >= extra) {
      currSlice.push(fillWith);
    }
    res.push(currSlice);
  }
  return res;
}
exports.slice = slice;
function sum(arr, attr, start) {
  if (start === void 0) {
    start = 0;
  }
  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }
  return start + arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}
exports.sum = sum;
exports.sort = r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function sortFilter(arr, reversed, caseSens, attr) {
  var _this = this;
  // Copy it
  var array = lib.map(arr, function (v) {
    return v;
  });
  var getAttribute = lib.getAttrGetter(attr);
  array.sort(function (a, b) {
    var x = attr ? getAttribute(a) : a;
    var y = attr ? getAttribute(b) : b;
    if (_this.env.opts.throwOnUndefined && attr && (x === undefined || y === undefined)) {
      throw new TypeError("sort: attribute \"" + attr + "\" resolved to undefined");
    }
    if (!caseSens && lib.isString(x) && lib.isString(y)) {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }
    if (x < y) {
      return reversed ? 1 : -1;
    } else if (x > y) {
      return reversed ? -1 : 1;
    } else {
      return 0;
    }
  });
  return array;
});
function string(obj) {
  return r.copySafeness(obj, obj);
}
exports.string = string;
function striptags(input, preserveLinebreaks) {
  input = normalize(input, '');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
  var trimmedInput = trim(input.replace(tags, ''));
  var res = '';
  if (preserveLinebreaks) {
    res = trimmedInput.replace(/^ +| +$/gm, '') // remove leading and trailing spaces
    .replace(/ +/g, ' ') // squash adjacent spaces
    .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
    .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
  } else {
    res = trimmedInput.replace(/\s+/gi, ' ');
  }
  return r.copySafeness(input, res);
}
exports.striptags = striptags;
function title(str) {
  str = normalize(str, '');
  var words = str.split(' ').map(function (word) {
    return capitalize(word);
  });
  return r.copySafeness(str, words.join(' '));
}
exports.title = title;
function trim(str) {
  return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
}
exports.trim = trim;
function truncate(input, length, killwords, end) {
  var orig = input;
  input = normalize(input, '');
  length = length || 255;
  if (input.length <= length) {
    return input;
  }
  if (killwords) {
    input = input.substring(0, length);
  } else {
    var idx = input.lastIndexOf(' ', length);
    if (idx === -1) {
      idx = length;
    }
    input = input.substring(0, idx);
  }
  input += end !== undefined && end !== null ? end : '...';
  return r.copySafeness(orig, input);
}
exports.truncate = truncate;
function upper(str) {
  str = normalize(str, '');
  return str.toUpperCase();
}
exports.upper = upper;
function urlencode(obj) {
  var enc = encodeURIComponent;
  if (lib.isString(obj)) {
    return enc(obj);
  } else {
    var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
    return keyvals.map(function (_ref2) {
      var k = _ref2[0],
        v = _ref2[1];
      return enc(k) + "=" + enc(v);
    }).join('&');
  }
}
exports.urlencode = urlencode;

// For the jinja regexp, see
// https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23
var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
// from http://blog.gerv.net/2011/05/html5_email_address_regexp/
var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
var httpHttpsRe = /^https?:\/\/.*$/;
var wwwRe = /^www\./;
var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;
function urlize(str, length, nofollow) {
  if (isNaN(length)) {
    length = Infinity;
  }
  var noFollowAttr = nofollow === true ? ' rel="nofollow"' : '';
  var words = str.split(/(\s+)/).filter(function (word) {
    // If the word has no length, bail. This can happen for str with
    // trailing whitespace.
    return word && word.length;
  }).map(function (word) {
    var matches = word.match(puncRe);
    var possibleUrl = matches ? matches[1] : word;
    var shortUrl = possibleUrl.substr(0, length);

    // url that starts with http or https
    if (httpHttpsRe.test(possibleUrl)) {
      return "<a href=\"" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    }

    // url that starts with www.
    if (wwwRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    }

    // an email address of the form username@domain.tld
    if (emailRe.test(possibleUrl)) {
      return "<a href=\"mailto:" + possibleUrl + "\">" + possibleUrl + "</a>";
    }

    // url that ends in .com, .org or .net that is not an email address
    if (tldRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    }
    return word;
  });
  return words.join('');
}
exports.urlize = urlize;
function wordcount(str) {
  str = normalize(str, '');
  var words = str ? str.match(/\w+/g) : null;
  return words ? words.length : null;
}
exports.wordcount = wordcount;
function float(val, def) {
  var res = parseFloat(val);
  return isNaN(res) ? def : res;
}
exports.float = float;
var intFilter = r.makeMacro(['value', 'default', 'base'], [], function doInt(value, defaultValue, base) {
  if (base === void 0) {
    base = 10;
  }
  var res = parseInt(value, base);
  return isNaN(res) ? defaultValue : res;
});
exports.int = intFilter;

// Aliases
exports.d = exports.default;
exports.e = exports.escape;

/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_197891__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Loader = __nested_webpack_require_197891__(6);
var PrecompiledLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(PrecompiledLoader, _Loader);
  function PrecompiledLoader(compiledTemplates) {
    var _this;
    _this = _Loader.call(this) || this;
    _this.precompiled = compiledTemplates || {};
    return _this;
  }
  var _proto = PrecompiledLoader.prototype;
  _proto.getSource = function getSource(name) {
    if (this.precompiled[name]) {
      return {
        src: {
          type: 'code',
          obj: this.precompiled[name]
        },
        path: name
      };
    }
    return null;
  };
  return PrecompiledLoader;
}(Loader);
module.exports = {
  PrecompiledLoader: PrecompiledLoader
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_199077__) {

"use strict";


var SafeString = __nested_webpack_require_199077__(2).SafeString;

/**
 * Returns `true` if the object is a function, otherwise `false`.
 * @param { any } value
 * @returns { boolean }
 */
function callable(value) {
  return typeof value === 'function';
}
exports.callable = callable;

/**
 * Returns `true` if the object is strictly not `undefined`.
 * @param { any } value
 * @returns { boolean }
 */
function defined(value) {
  return value !== undefined;
}
exports.defined = defined;

/**
 * Returns `true` if the operand (one) is divisble by the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function divisibleby(one, two) {
  return one % two === 0;
}
exports.divisibleby = divisibleby;

/**
 * Returns true if the string has been escaped (i.e., is a SafeString).
 * @param { any } value
 * @returns { boolean }
 */
function escaped(value) {
  return value instanceof SafeString;
}
exports.escaped = escaped;

/**
 * Returns `true` if the arguments are strictly equal.
 * @param { any } one
 * @param { any } two
 */
function equalto(one, two) {
  return one === two;
}
exports.equalto = equalto;

// Aliases
exports.eq = exports.equalto;
exports.sameas = exports.equalto;

/**
 * Returns `true` if the value is evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */
function even(value) {
  return value % 2 === 0;
}
exports.even = even;

/**
 * Returns `true` if the value is falsy - if I recall correctly, '', 0, false,
 * undefined, NaN or null. I don't know if we should stick to the default JS
 * behavior or attempt to replicate what Python believes should be falsy (i.e.,
 * empty arrays, empty dicts, not 0...).
 * @param { any } value
 * @returns { boolean }
 */
function falsy(value) {
  return !value;
}
exports.falsy = falsy;

/**
 * Returns `true` if the operand (one) is greater or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function ge(one, two) {
  return one >= two;
}
exports.ge = ge;

/**
 * Returns `true` if the operand (one) is greater than the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function greaterthan(one, two) {
  return one > two;
}
exports.greaterthan = greaterthan;

// alias
exports.gt = exports.greaterthan;

/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function le(one, two) {
  return one <= two;
}
exports.le = le;

/**
 * Returns `true` if the operand (one) is less than the test's passed argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function lessthan(one, two) {
  return one < two;
}
exports.lessthan = lessthan;

// alias
exports.lt = exports.lessthan;

/**
 * Returns `true` if the string is lowercased.
 * @param { string } value
 * @returns { boolean }
 */
function lower(value) {
  return value.toLowerCase() === value;
}
exports.lower = lower;

/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */
function ne(one, two) {
  return one !== two;
}
exports.ne = ne;

/**
 * Returns true if the value is strictly equal to `null`.
 * @param { any }
 * @returns { boolean }
 */
function nullTest(value) {
  return value === null;
}
exports.null = nullTest;

/**
 * Returns true if value is a number.
 * @param { any }
 * @returns { boolean }
 */
function number(value) {
  return typeof value === 'number';
}
exports.number = number;

/**
 * Returns `true` if the value is *not* evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */
function odd(value) {
  return value % 2 === 1;
}
exports.odd = odd;

/**
 * Returns `true` if the value is a string, `false` if not.
 * @param { any } value
 * @returns { boolean }
 */
function string(value) {
  return typeof value === 'string';
}
exports.string = string;

/**
 * Returns `true` if the value is not in the list of things considered falsy:
 * '', null, undefined, 0, NaN and false.
 * @param { any } value
 * @returns { boolean }
 */
function truthy(value) {
  return !!value;
}
exports.truthy = truthy;

/**
 * Returns `true` if the value is undefined.
 * @param { any } value
 * @returns { boolean }
 */
function undefinedTest(value) {
  return value === undefined;
}
exports.undefined = undefinedTest;

/**
 * Returns `true` if the string is uppercased.
 * @param { string } value
 * @returns { boolean }
 */
function upper(value) {
  return value.toUpperCase() === value;
}
exports.upper = upper;

/**
 * If ES6 features are available, returns `true` if the value implements the
 * `Symbol.iterator` method. If not, it's a string or Array.
 *
 * Could potentially cause issues if a browser exists that has Set and Map but
 * not Symbol.
 *
 * @param { any } value
 * @returns { boolean }
 */
function iterable(value) {
  if (typeof Symbol !== 'undefined') {
    return !!value[Symbol.iterator];
  } else {
    return Array.isArray(value) || typeof value === 'string';
  }
}
exports.iterable = iterable;

/**
 * If ES6 features are available, returns `true` if the value is an object hash
 * or an ES6 Map. Otherwise just return if it's an object hash.
 * @param { any } value
 * @returns { boolean }
 */
function mapping(value) {
  // only maps and object hashes
  var bool = value !== null && value !== undefined && typeof value === 'object' && !Array.isArray(value);
  if (Set) {
    return bool && !(value instanceof Set);
  } else {
    return bool;
  }
}
exports.mapping = mapping;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _cycler(items) {
  var index = -1;
  return {
    current: null,
    reset: function reset() {
      index = -1;
      this.current = null;
    },
    next: function next() {
      index++;
      if (index >= items.length) {
        index = 0;
      }
      this.current = items[index];
      return this.current;
    }
  };
}
function _joiner(sep) {
  sep = sep || ',';
  var first = true;
  return function () {
    var val = first ? '' : sep;
    first = false;
    return val;
  };
}

// Making this a function instead so it returns a new object
// each time it's called. That way, if something like an environment
// uses it, they will each have their own copy.
function globals() {
  return {
    range: function range(start, stop, step) {
      if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
        step = 1;
      } else if (!step) {
        step = 1;
      }
      var arr = [];
      if (step > 0) {
        for (var i = start; i < stop; i += step) {
          arr.push(i);
        }
      } else {
        for (var _i = start; _i > stop; _i += step) {
          // eslint-disable-line for-direction
          arr.push(_i);
        }
      }
      return arr;
    },
    cycler: function cycler() {
      return _cycler(Array.prototype.slice.call(arguments));
    },
    joiner: function joiner(sep) {
      return _joiner(sep);
    }
  };
}
module.exports = globals;

/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_206402__) {

var path = __nested_webpack_require_206402__(4);
module.exports = function express(env, app) {
  function NunjucksView(name, opts) {
    this.name = name;
    this.path = name;
    this.defaultEngine = opts.defaultEngine;
    this.ext = path.extname(name);
    if (!this.ext && !this.defaultEngine) {
      throw new Error('No default engine was specified and no extension was provided.');
    }
    if (!this.ext) {
      this.name += this.ext = (this.defaultEngine[0] !== '.' ? '.' : '') + this.defaultEngine;
    }
  }
  NunjucksView.prototype.render = function render(opts, cb) {
    env.render(this.name, opts, cb);
  };
  app.set('view', NunjucksView);
  app.set('nunjucksEnv', env);
  return env;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_207172__) {

"use strict";


var fs = __nested_webpack_require_207172__(4);
var path = __nested_webpack_require_207172__(4);
var _require = __nested_webpack_require_207172__(0),
  _prettifyError = _require._prettifyError;
var compiler = __nested_webpack_require_207172__(5);
var _require2 = __nested_webpack_require_207172__(7),
  Environment = _require2.Environment;
var precompileGlobal = __nested_webpack_require_207172__(24);
function match(filename, patterns) {
  if (!Array.isArray(patterns)) {
    return false;
  }
  return patterns.some(function (pattern) {
    return filename.match(pattern);
  });
}
function precompileString(str, opts) {
  opts = opts || {};
  opts.isString = true;
  var env = opts.env || new Environment([]);
  var wrapper = opts.wrapper || precompileGlobal;
  if (!opts.name) {
    throw new Error('the "name" option is required when compiling a string');
  }
  return wrapper([_precompile(str, opts.name, env)], opts);
}
function precompile(input, opts) {
  // The following options are available:
  //
  // * name: name of the template (auto-generated when compiling a directory)
  // * isString: input is a string, not a file path
  // * asFunction: generate a callable function
  // * force: keep compiling on error
  // * env: the Environment to use (gets extensions and async filters from it)
  // * include: which file/folders to include (folders are auto-included, files are auto-excluded)
  // * exclude: which file/folders to exclude (folders are auto-included, files are auto-excluded)
  // * wrapper: function(templates, opts) {...}
  //       Customize the output format to store the compiled template.
  //       By default, templates are stored in a global variable used by the runtime.
  //       A custom loader will be necessary to load your custom wrapper.

  opts = opts || {};
  var env = opts.env || new Environment([]);
  var wrapper = opts.wrapper || precompileGlobal;
  if (opts.isString) {
    return precompileString(input, opts);
  }
  var pathStats = fs.existsSync(input) && fs.statSync(input);
  var precompiled = [];
  var templates = [];
  function addTemplates(dir) {
    fs.readdirSync(dir).forEach(function (file) {
      var filepath = path.join(dir, file);
      var subpath = filepath.substr(path.join(input, '/').length);
      var stat = fs.statSync(filepath);
      if (stat && stat.isDirectory()) {
        subpath += '/';
        if (!match(subpath, opts.exclude)) {
          addTemplates(filepath);
        }
      } else if (match(subpath, opts.include)) {
        templates.push(filepath);
      }
    });
  }
  if (pathStats.isFile()) {
    precompiled.push(_precompile(fs.readFileSync(input, 'utf-8'), opts.name || input, env));
  } else if (pathStats.isDirectory()) {
    addTemplates(input);
    for (var i = 0; i < templates.length; i++) {
      var name = templates[i].replace(path.join(input, '/'), '');
      try {
        precompiled.push(_precompile(fs.readFileSync(templates[i], 'utf-8'), name, env));
      } catch (e) {
        if (opts.force) {
          // Don't stop generating the output if we're
          // forcing compilation.
          console.error(e); // eslint-disable-line no-console
        } else {
          throw e;
        }
      }
    }
  }
  return wrapper(precompiled, opts);
}
function _precompile(str, name, env) {
  env = env || new Environment([]);
  var asyncFilters = env.asyncFilters;
  var extensions = env.extensionsList;
  var template;
  name = name.replace(/\\/g, '/');
  try {
    template = compiler.compile(str, asyncFilters, extensions, name, env.opts);
  } catch (err) {
    throw _prettifyError(name, false, err);
  }
  return {
    name: name,
    template: template
  };
}
module.exports = {
  precompile: precompile,
  precompileString: precompileString
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function precompileGlobal(templates, opts) {
  var out = '';
  opts = opts || {};
  for (var i = 0; i < templates.length; i++) {
    var name = JSON.stringify(templates[i].name);
    var template = templates[i].template;
    out += '(function() {' + '(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})' + '[' + name + '] = (function() {\n' + template + '\n})();\n';
    if (opts.asFunction) {
      out += 'return function(ctx, cb) { return nunjucks.render(' + name + ', ctx, cb); }\n';
    }
    out += '})();\n';
  }
  return out;
}
module.exports = precompileGlobal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function installCompat() {
  'use strict';

  /* eslint-disable camelcase */

  // This must be called like `nunjucks.installCompat` so that `this`
  // references the nunjucks instance
  var runtime = this.runtime;
  var lib = this.lib;
  // Handle slim case where these 'modules' are excluded from the built source
  var Compiler = this.compiler.Compiler;
  var Parser = this.parser.Parser;
  var nodes = this.nodes;
  var lexer = this.lexer;
  var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
  var orig_memberLookup = runtime.memberLookup;
  var orig_Compiler_assertType;
  var orig_Parser_parseAggregate;
  if (Compiler) {
    orig_Compiler_assertType = Compiler.prototype.assertType;
  }
  if (Parser) {
    orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
  }
  function uninstall() {
    runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
    runtime.memberLookup = orig_memberLookup;
    if (Compiler) {
      Compiler.prototype.assertType = orig_Compiler_assertType;
    }
    if (Parser) {
      Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
    }
  }
  runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
    var val = orig_contextOrFrameLookup.apply(this, arguments);
    if (val !== undefined) {
      return val;
    }
    switch (key) {
      case 'True':
        return true;
      case 'False':
        return false;
      case 'None':
        return null;
      default:
        return undefined;
    }
  };
  function getTokensState(tokens) {
    return {
      index: tokens.index,
      lineno: tokens.lineno,
      colno: tokens.colno
    };
  }
  if ( true && nodes && Compiler && Parser) {
    // i.e., not slim mode
    var Slice = nodes.Node.extend('Slice', {
      fields: ['start', 'stop', 'step'],
      init: function init(lineno, colno, start, stop, step) {
        start = start || new nodes.Literal(lineno, colno, null);
        stop = stop || new nodes.Literal(lineno, colno, null);
        step = step || new nodes.Literal(lineno, colno, 1);
        this.parent(lineno, colno, start, stop, step);
      }
    });
    Compiler.prototype.assertType = function assertType(node) {
      if (node instanceof Slice) {
        return;
      }
      orig_Compiler_assertType.apply(this, arguments);
    };
    Compiler.prototype.compileSlice = function compileSlice(node, frame) {
      this._emit('(');
      this._compileExpression(node.start, frame);
      this._emit('),(');
      this._compileExpression(node.stop, frame);
      this._emit('),(');
      this._compileExpression(node.step, frame);
      this._emit(')');
    };
    Parser.prototype.parseAggregate = function parseAggregate() {
      var _this = this;
      var origState = getTokensState(this.tokens);
      // Set back one accounting for opening bracket/parens
      origState.colno--;
      origState.index--;
      try {
        return orig_Parser_parseAggregate.apply(this);
      } catch (e) {
        var errState = getTokensState(this.tokens);
        var rethrow = function rethrow() {
          lib._assign(_this.tokens, errState);
          return e;
        };

        // Reset to state before original parseAggregate called
        lib._assign(this.tokens, origState);
        this.peeked = false;
        var tok = this.peekToken();
        if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
          throw rethrow();
        } else {
          this.nextToken();
        }
        var node = new Slice(tok.lineno, tok.colno);

        // If we don't encounter a colon while parsing, this is not a slice,
        // so re-raise the original exception.
        var isSlice = false;
        for (var i = 0; i <= node.fields.length; i++) {
          if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
            break;
          }
          if (i === node.fields.length) {
            if (isSlice) {
              this.fail('parseSlice: too many slice components', tok.lineno, tok.colno);
            } else {
              break;
            }
          }
          if (this.skip(lexer.TOKEN_COLON)) {
            isSlice = true;
          } else {
            var field = node.fields[i];
            node[field] = this.parseExpression();
            isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
          }
        }
        if (!isSlice) {
          throw rethrow();
        }
        return new nodes.Array(tok.lineno, tok.colno, [node]);
      }
    };
  }
  function sliceLookup(obj, start, stop, step) {
    obj = obj || [];
    if (start === null) {
      start = step < 0 ? obj.length - 1 : 0;
    }
    if (stop === null) {
      stop = step < 0 ? -1 : obj.length;
    } else if (stop < 0) {
      stop += obj.length;
    }
    if (start < 0) {
      start += obj.length;
    }
    var results = [];
    for (var i = start;; i += step) {
      if (i < 0 || i > obj.length) {
        break;
      }
      if (step > 0 && i >= stop) {
        break;
      }
      if (step < 0 && i <= stop) {
        break;
      }
      results.push(runtime.memberLookup(obj, i));
    }
    return results;
  }
  function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  var ARRAY_MEMBERS = {
    pop: function pop(index) {
      if (index === undefined) {
        return this.pop();
      }
      if (index >= this.length || index < 0) {
        throw new Error('KeyError');
      }
      return this.splice(index, 1);
    },
    append: function append(element) {
      return this.push(element);
    },
    remove: function remove(element) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          return this.splice(i, 1);
        }
      }
      throw new Error('ValueError');
    },
    count: function count(element) {
      var count = 0;
      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          count++;
        }
      }
      return count;
    },
    index: function index(element) {
      var i;
      if ((i = this.indexOf(element)) === -1) {
        throw new Error('ValueError');
      }
      return i;
    },
    find: function find(element) {
      return this.indexOf(element);
    },
    insert: function insert(index, elem) {
      return this.splice(index, 0, elem);
    }
  };
  var OBJECT_MEMBERS = {
    items: function items() {
      return lib._entries(this);
    },
    values: function values() {
      return lib._values(this);
    },
    keys: function keys() {
      return lib.keys(this);
    },
    get: function get(key, def) {
      var output = this[key];
      if (output === undefined) {
        output = def;
      }
      return output;
    },
    has_key: function has_key(key) {
      return hasOwnProp(this, key);
    },
    pop: function pop(key, def) {
      var output = this[key];
      if (output === undefined && def !== undefined) {
        output = def;
      } else if (output === undefined) {
        throw new Error('KeyError');
      } else {
        delete this[key];
      }
      return output;
    },
    popitem: function popitem() {
      var keys = lib.keys(this);
      if (!keys.length) {
        throw new Error('KeyError');
      }
      var k = keys[0];
      var val = this[k];
      delete this[k];
      return [k, val];
    },
    setdefault: function setdefault(key, def) {
      if (def === void 0) {
        def = null;
      }
      if (!(key in this)) {
        this[key] = def;
      }
      return this[key];
    },
    update: function update(kwargs) {
      lib._assign(this, kwargs);
      return null; // Always returns None
    }
  };

  OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
  OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
  OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;
  runtime.memberLookup = function memberLookup(obj, val, autoescape) {
    if (arguments.length === 4) {
      return sliceLookup.apply(this, arguments);
    }
    obj = obj || {};

    // If the object is an object, return any of the methods that Python would
    // otherwise provide.
    if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
      return ARRAY_MEMBERS[val].bind(obj);
    }
    if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
      return OBJECT_MEMBERS[val].bind(obj);
    }
    return orig_memberLookup.apply(this, arguments);
  };
  return uninstall;
}
module.exports = installCompat;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nunjucks.js.map

/***/ }),

/***/ "./src/say-hello.js":
/*!**************************!*\
  !*** ./src/say-hello.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sayHello: () => (/* binding */ sayHello)
/* harmony export */ });
/* harmony import */ var nunjucks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nunjucks */ "./node_modules/nunjucks/browser/nunjucks.js");
/* eslint-disable import/prefer-default-export */

var template = '<h1>Hello <i>{{ name }}</i></h1>';
function sayHello(name) {
  return nunjucks__WEBPACK_IMPORTED_MODULE_0__.renderString(template, {
    name: name
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _say_hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./say-hello.js */ "./src/say-hello.js");

var body = document.getElementsByTagName('body')[0];
body.innerHTML = (0,_say_hello_js__WEBPACK_IMPORTED_MODULE_0__.sayHello)('Browser');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUt5QjtBQUMvQixDQUFDO0FBQ0QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4QkFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCLGVBQWUsOEJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFLDBDQUEwQztBQUMxQyxXQUFXLDhCQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CLGtDQUFrQztBQUMvRDtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQiw4QkFBbUIsQ0FBQyw4QkFBbUI7QUFDeEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkLGNBQWM7QUFDZCxZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsZ0NBQW1COztBQUVwRDs7O0FBR0E7QUFDQSw0Q0FBNEMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RDtBQUMvUCw4REFBOEQsc0VBQXNFLDhEQUE4RCxrREFBa0QsaUJBQWlCLEdBQUc7QUFDeFEsK0JBQStCLHVDQUF1QztBQUN0RSxxQ0FBcUMsK0RBQStELHNDQUFzQywwQkFBMEIsK0NBQStDLHlDQUF5Qyx1RUFBdUU7QUFDblUsZ0RBQWdELDBEQUEwRCwyQ0FBMkM7QUFDckosaUNBQWlDLDBHQUEwRyxpQkFBaUIsYUFBYTtBQUN6SyxtQkFBbUIsZ0NBQW1CO0FBQ3RDLFVBQVUsZ0NBQW1CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOzs7QUFHQSxVQUFVLGdDQUFtQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw2RUFBNkUsYUFBYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTixzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsZ0NBQW1COztBQUVwRDs7O0FBR0EsZ0RBQWdELDBEQUEwRCwyQ0FBMkM7QUFDckosaUNBQWlDLDBHQUEwRyxpQkFBaUIsYUFBYTtBQUN6SyxZQUFZLGdDQUFtQjtBQUMvQixZQUFZLGdDQUFtQjtBQUMvQixVQUFVLGdDQUFtQjtBQUM3QixVQUFVLGdDQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0RBQWtELEdBQUc7QUFDdEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixlQUFlLGlDQUFtQjs7QUFFOUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOzs7QUFH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NB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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW5rZXItYXBwLy4vbm9kZV9tb2R1bGVzL251bmp1Y2tzL2Jyb3dzZXIvbnVuanVja3MuanMiLCJ3ZWJwYWNrOi8vdGlua2VyLWFwcC8uL3NyYy9zYXktaGVsbG8uanMiLCJ3ZWJwYWNrOi8vdGlua2VyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW5rZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW5rZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGlua2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rpbmtlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEJyb3dzZXIgYnVuZGxlIG9mIG51bmp1Y2tzIDMuMi40ICAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibnVuanVja3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibnVuanVja3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGVzY2FwZU1hcCA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgJ1xcJyc6ICcmIzM5OycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1xcXFwnOiAnJiM5MjsnXG59O1xudmFyIGVzY2FwZVJlZ2V4ID0gL1smXCInPD5cXFxcXS9nO1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuZnVuY3Rpb24gaGFzT3duUHJvcChvYmosIGspIHtcbiAgcmV0dXJuIE9ialByb3RvLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKTtcbn1cbmV4cG9ydHMuaGFzT3duUHJvcCA9IGhhc093blByb3A7XG5mdW5jdGlvbiBsb29rdXBFc2NhcGUoY2gpIHtcbiAgcmV0dXJuIGVzY2FwZU1hcFtjaF07XG59XG5mdW5jdGlvbiBfcHJldHRpZnlFcnJvcihwYXRoLCB3aXRoSW50ZXJuYWxzLCBlcnIpIHtcbiAgaWYgKCFlcnIuVXBkYXRlKSB7XG4gICAgLy8gbm90IG9uZSBvZiBvdXJzLCBjYXN0IGl0XG4gICAgZXJyID0gbmV3IGV4cG9ydHMuVGVtcGxhdGVFcnJvcihlcnIpO1xuICB9XG4gIGVyci5VcGRhdGUocGF0aCk7XG5cbiAgLy8gVW5sZXNzIHRoZXkgbWFya2VkIHRoZSBkZXYgZmxhZywgc2hvdyB0aGVtIGEgdHJhY2UgZnJvbSBoZXJlXG4gIGlmICghd2l0aEludGVybmFscykge1xuICAgIHZhciBvbGQgPSBlcnI7XG4gICAgZXJyID0gbmV3IEVycm9yKG9sZC5tZXNzYWdlKTtcbiAgICBlcnIubmFtZSA9IG9sZC5uYW1lO1xuICB9XG4gIHJldHVybiBlcnI7XG59XG5leHBvcnRzLl9wcmV0dGlmeUVycm9yID0gX3ByZXR0aWZ5RXJyb3I7XG5mdW5jdGlvbiBUZW1wbGF0ZUVycm9yKG1lc3NhZ2UsIGxpbmVubywgY29sbm8pIHtcbiAgdmFyIGVycjtcbiAgdmFyIGNhdXNlO1xuICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY2F1c2UgPSBtZXNzYWdlO1xuICAgIG1lc3NhZ2UgPSBjYXVzZS5uYW1lICsgXCI6IFwiICsgY2F1c2UubWVzc2FnZTtcbiAgfVxuICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihlcnIsIFRlbXBsYXRlRXJyb3IucHJvdG90eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBlcnIgPSB0aGlzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdtZXNzYWdlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ25hbWUnLCB7XG4gICAgdmFsdWU6ICdUZW1wbGF0ZSByZW5kZXIgZXJyb3InXG4gIH0pO1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG4gIHZhciBnZXRTdGFjaztcbiAgaWYgKGNhdXNlKSB7XG4gICAgdmFyIHN0YWNrRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY2F1c2UsICdzdGFjaycpO1xuICAgIGdldFN0YWNrID0gc3RhY2tEZXNjcmlwdG9yICYmIChzdGFja0Rlc2NyaXB0b3IuZ2V0IHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdGFja0Rlc2NyaXB0b3IudmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKCFnZXRTdGFjaykge1xuICAgICAgZ2V0U3RhY2sgPSBmdW5jdGlvbiBnZXRTdGFjaygpIHtcbiAgICAgICAgcmV0dXJuIGNhdXNlLnN0YWNrO1xuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgIGdldFN0YWNrID0gZnVuY3Rpb24gZ2V0U3RhY2soKSB7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnc3RhY2snLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZ2V0U3RhY2suY2FsbChlcnIpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdjYXVzZScsIHtcbiAgICB2YWx1ZTogY2F1c2VcbiAgfSk7XG4gIGVyci5saW5lbm8gPSBsaW5lbm87XG4gIGVyci5jb2xubyA9IGNvbG5vO1xuICBlcnIuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICBlcnIuVXBkYXRlID0gZnVuY3Rpb24gVXBkYXRlKHBhdGgpIHtcbiAgICB2YXIgbXNnID0gJygnICsgKHBhdGggfHwgJ3Vua25vd24gcGF0aCcpICsgJyknO1xuXG4gICAgLy8gb25seSBzaG93IGxpbmVubyArIGNvbG5vIG5leHQgdG8gcGF0aCBvZiB0ZW1wbGF0ZVxuICAgIC8vIHdoZXJlIGVycm9yIG9jY3VycmVkXG4gICAgaWYgKHRoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLmxpbmVubyAmJiB0aGlzLmNvbG5vKSB7XG4gICAgICAgIG1zZyArPSBcIiBbTGluZSBcIiArIHRoaXMubGluZW5vICsgXCIsIENvbHVtbiBcIiArIHRoaXMuY29sbm8gKyBcIl1cIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5lbm8pIHtcbiAgICAgICAgbXNnICs9IFwiIFtMaW5lIFwiICsgdGhpcy5saW5lbm8gKyBcIl1cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbXNnICs9ICdcXG4gJztcbiAgICBpZiAodGhpcy5maXJzdFVwZGF0ZSkge1xuICAgICAgbXNnICs9ICcgJztcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlID0gbXNnICsgKHRoaXMubWVzc2FnZSB8fCAnJyk7XG4gICAgdGhpcy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICByZXR1cm4gZXJyO1xufVxuaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoVGVtcGxhdGVFcnJvci5wcm90b3R5cGUsIEVycm9yLnByb3RvdHlwZSk7XG59IGVsc2Uge1xuICBUZW1wbGF0ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBUZW1wbGF0ZUVycm9yXG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydHMuVGVtcGxhdGVFcnJvciA9IFRlbXBsYXRlRXJyb3I7XG5mdW5jdGlvbiBlc2NhcGUodmFsKSB7XG4gIHJldHVybiB2YWwucmVwbGFjZShlc2NhcGVSZWdleCwgbG9va3VwRXNjYXBlKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIE9ialByb3RvLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqUHJvdG8udG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGF0dHJcbiAqIEByZXR1cm5zIHsoc3RyaW5nfG51bWJlcilbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9wcmVwYXJlQXR0cmlidXRlUGFydHMoYXR0cikge1xuICBpZiAoIWF0dHIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKHR5cGVvZiBhdHRyID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBhdHRyLnNwbGl0KCcuJyk7XG4gIH1cbiAgcmV0dXJuIFthdHRyXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gICBhdHRyaWJ1dGUgICAgICBBdHRyaWJ1dGUgdmFsdWUuIERvdHMgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbihPYmplY3QpOiAqfVxuICovXG5mdW5jdGlvbiBnZXRBdHRyR2V0dGVyKGF0dHJpYnV0ZSkge1xuICB2YXIgcGFydHMgPSBfcHJlcGFyZUF0dHJpYnV0ZVBhcnRzKGF0dHJpYnV0ZSk7XG4gIHJldHVybiBmdW5jdGlvbiBhdHRyR2V0dGVyKGl0ZW0pIHtcbiAgICB2YXIgX2l0ZW0gPSBpdGVtO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFuIG9iamVjdCwgYW5kIHdlIHN0aWxsIGdvdCBwYXJ0cyB0byBoYW5kbGUsIGl0IG1lYW5zXG4gICAgICAvLyB0aGF0IHNvbWV0aGluZyBnb2VzIHdyb25nLiBKdXN0IHJvbGwgb3V0IHRvIHVuZGVmaW5lZCBpbiB0aGF0IGNhc2UuXG4gICAgICBpZiAoaGFzT3duUHJvcChfaXRlbSwgcGFydCkpIHtcbiAgICAgICAgX2l0ZW0gPSBfaXRlbVtwYXJ0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfaXRlbTtcbiAgfTtcbn1cbmV4cG9ydHMuZ2V0QXR0ckdldHRlciA9IGdldEF0dHJHZXR0ZXI7XG5mdW5jdGlvbiBncm91cEJ5KG9iaiwgdmFsLCB0aHJvd09uVW5kZWZpbmVkKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGl0ZXJhdG9yID0gaXNGdW5jdGlvbih2YWwpID8gdmFsIDogZ2V0QXR0ckdldHRlcih2YWwpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IG9ialtpXTtcbiAgICB2YXIga2V5ID0gaXRlcmF0b3IodmFsdWUsIGkpO1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCAmJiB0aHJvd09uVW5kZWZpbmVkID09PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZ3JvdXBieTogYXR0cmlidXRlIFxcXCJcIiArIHZhbCArIFwiXFxcIiByZXNvbHZlZCB0byB1bmRlZmluZWRcIik7XG4gICAgfVxuICAgIChyZXN1bHRba2V5XSB8fCAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmdyb3VwQnkgPSBncm91cEJ5O1xuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iaik7XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZnVuY3Rpb24gd2l0aG91dChhcnJheSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmICghYXJyYXkpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBjb250YWlucyA9IHRvQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKTtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4T2YoY29udGFpbnMsIGFycmF5W2luZGV4XSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJheVtpbmRleF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy53aXRob3V0ID0gd2l0aG91dDtcbmZ1bmN0aW9uIHJlcGVhdChjaGFyXywgbikge1xuICB2YXIgc3RyID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgc3RyICs9IGNoYXJfO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5leHBvcnRzLnJlcGVhdCA9IHJlcGVhdDtcbmZ1bmN0aW9uIGVhY2gob2JqLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXlQcm90by5mb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBBcnJheVByb3RvLmZvckVhY2gpIHtcbiAgICBvYmouZm9yRWFjaChmdW5jLCBjb250ZXh0KTtcbiAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydHMuZWFjaCA9IGVhY2g7XG5mdW5jdGlvbiBtYXAob2JqLCBmdW5jKSB7XG4gIHZhciByZXN1bHRzID0gW107XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG4gIGlmIChBcnJheVByb3RvLm1hcCAmJiBvYmoubWFwID09PSBBcnJheVByb3RvLm1hcCkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmMpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSBmdW5jKG9ialtpXSwgaSk7XG4gIH1cbiAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgcmVzdWx0cy5sZW5ndGggPSBvYmoubGVuZ3RoO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuZXhwb3J0cy5tYXAgPSBtYXA7XG5mdW5jdGlvbiBhc3luY0l0ZXIoYXJyLCBpdGVyLCBjYikge1xuICB2YXIgaSA9IC0xO1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGkrKztcbiAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgIGl0ZXIoYXJyW2ldLCBpLCBuZXh0LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG4gIG5leHQoKTtcbn1cbmV4cG9ydHMuYXN5bmNJdGVyID0gYXN5bmNJdGVyO1xuZnVuY3Rpb24gYXN5bmNGb3Iob2JqLCBpdGVyLCBjYikge1xuICB2YXIga2V5cyA9IGtleXNfKG9iaiB8fCB7fSk7XG4gIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpKys7XG4gICAgdmFyIGsgPSBrZXlzW2ldO1xuICAgIGlmIChpIDwgbGVuKSB7XG4gICAgICBpdGVyKGssIG9ialtrXSwgaSwgbGVuLCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cbiAgbmV4dCgpO1xufVxuZXhwb3J0cy5hc3luY0ZvciA9IGFzeW5jRm9yO1xuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnIgfHwgW10sIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG59XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuZnVuY3Rpb24ga2V5c18ob2JqKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcChvYmosIGspKSB7XG4gICAgICBhcnIucHVzaChrKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMua2V5cyA9IGtleXNfO1xuZnVuY3Rpb24gX2VudHJpZXMob2JqKSB7XG4gIHJldHVybiBrZXlzXyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBbaywgb2JqW2tdXTtcbiAgfSk7XG59XG5leHBvcnRzLl9lbnRyaWVzID0gX2VudHJpZXM7XG5mdW5jdGlvbiBfdmFsdWVzKG9iaikge1xuICByZXR1cm4ga2V5c18ob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn1cbmV4cG9ydHMuX3ZhbHVlcyA9IF92YWx1ZXM7XG5mdW5jdGlvbiBleHRlbmQob2JqMSwgb2JqMikge1xuICBvYmoxID0gb2JqMSB8fCB7fTtcbiAga2V5c18ob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIG9iajFba10gPSBvYmoyW2tdO1xuICB9KTtcbiAgcmV0dXJuIG9iajE7XG59XG5leHBvcnRzLl9hc3NpZ24gPSBleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmZ1bmN0aW9uIGluT3BlcmF0b3Ioa2V5LCB2YWwpIHtcbiAgaWYgKGlzQXJyYXkodmFsKSB8fCBpc1N0cmluZyh2YWwpKSB7XG4gICAgcmV0dXJuIHZhbC5pbmRleE9mKGtleSkgIT09IC0xO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICByZXR1cm4ga2V5IGluIHZhbDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgXCJpblwiIG9wZXJhdG9yIHRvIHNlYXJjaCBmb3IgXCInICsga2V5ICsgJ1wiIGluIHVuZXhwZWN0ZWQgdHlwZXMuJyk7XG59XG5leHBvcnRzLmluT3BlcmF0b3IgPSBpbk9wZXJhdG9yO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLy8gQSBzaW1wbGUgY2xhc3Mgc3lzdGVtLCBtb3JlIGRvY3VtZW50YXRpb24gdG8gY29tZVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBFdmVudEVtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBsaWIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuZnVuY3Rpb24gcGFyZW50V3JhcChwYXJlbnQsIHByb3ApIHtcbiAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHByb3AgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHBhcmVudCBtZXRob2RcbiAgICB2YXIgdG1wID0gdGhpcy5wYXJlbnQ7XG5cbiAgICAvLyBTZXQgcGFyZW50IHRvIHRoZSBwcmV2aW91cyBtZXRob2QsIGNhbGwsIGFuZCByZXN0b3JlXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdmFyIHJlcyA9IHByb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnBhcmVudCA9IHRtcDtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxuZnVuY3Rpb24gZXh0ZW5kQ2xhc3MoY2xzLCBuYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICBsaWIua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHByb3BzW2tdID0gcGFyZW50V3JhcChjbHMucHJvdG90eXBlW2tdLCBwcm9wc1trXSk7XG4gIH0pO1xuICB2YXIgc3ViY2xhc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9jbHMpIHtcbiAgICBfaW5oZXJpdHNMb29zZShzdWJjbGFzcywgX2Nscyk7XG4gICAgZnVuY3Rpb24gc3ViY2xhc3MoKSB7XG4gICAgICByZXR1cm4gX2Nscy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIF9jcmVhdGVDbGFzcyhzdWJjbGFzcywgW3tcbiAgICAgIGtleTogXCJ0eXBlbmFtZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gc3ViY2xhc3M7XG4gIH0oY2xzKTtcbiAgbGliLl9hc3NpZ24oc3ViY2xhc3MucHJvdG90eXBlLCBwcm9wcyk7XG4gIHJldHVybiBzdWJjbGFzcztcbn1cbnZhciBPYmogPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYmooKSB7XG4gICAgLy8gVW5mb3J0dW5hdGVseSBuZWNlc3NhcnkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgdmFyIF9wcm90byA9IE9iai5wcm90b3R5cGU7XG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHt9O1xuICBPYmouZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKG5hbWUsIHByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvcHMgPSBuYW1lO1xuICAgICAgbmFtZSA9ICdhbm9ueW1vdXMnO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kQ2xhc3ModGhpcywgbmFtZSwgcHJvcHMpO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoT2JqLCBbe1xuICAgIGtleTogXCJ0eXBlbmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE9iajtcbn0oKTtcbnZhciBFbWl0dGVyT2JqID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEVtaXR0ZXJPYmosIF9FdmVudEVtaXR0ZXIpO1xuICBmdW5jdGlvbiBFbWl0dGVyT2JqKCkge1xuICAgIHZhciBfdGhpczI7XG4gICAgdmFyIF90aGlzO1xuICAgIF90aGlzID0gX0V2ZW50RW1pdHRlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLy8gVW5mb3J0dW5hdGVseSBuZWNlc3NhcnkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgKF90aGlzMiA9IF90aGlzKS5pbml0LmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgdmFyIF9wcm90bzIgPSBFbWl0dGVyT2JqLnByb3RvdHlwZTtcbiAgX3Byb3RvMi5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHt9O1xuICBFbWl0dGVyT2JqLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChuYW1lLCBwcm9wcykge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByb3BzID0gbmFtZTtcbiAgICAgIG5hbWUgPSAnYW5vbnltb3VzJztcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuZENsYXNzKHRoaXMsIG5hbWUsIHByb3BzKTtcbiAgfTtcbiAgX2NyZWF0ZUNsYXNzKEVtaXR0ZXJPYmosIFt7XG4gICAga2V5OiBcInR5cGVuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW1pdHRlck9iajtcbn0oRXZlbnRFbWl0dGVyKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBPYmo6IE9iaixcbiAgRW1pdHRlck9iajogRW1pdHRlck9ialxufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBsaWIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGFycmF5RnJvbSA9IEFycmF5LmZyb207XG52YXIgc3VwcG9ydHNJdGVyYXRvcnMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvciAmJiB0eXBlb2YgYXJyYXlGcm9tID09PSAnZnVuY3Rpb24nO1xuXG4vLyBGcmFtZXMga2VlcCB0cmFjayBvZiBzY29waW5nIGJvdGggYXQgY29tcGlsZS10aW1lIGFuZCBydW4tdGltZSBzb1xuLy8gd2Uga25vdyBob3cgdG8gYWNjZXNzIHZhcmlhYmxlcy4gQmxvY2sgdGFncyBjYW4gaW50cm9kdWNlIHNwZWNpYWxcbi8vIHZhcmlhYmxlcywgZm9yIGV4YW1wbGUuXG52YXIgRnJhbWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGcmFtZShwYXJlbnQsIGlzb2xhdGVXcml0ZXMpIHtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50b3BMZXZlbCA9IGZhbHNlO1xuICAgIC8vIGlmIHRoaXMgaXMgdHJ1ZSwgd3JpdGVzIChzZXQpIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXB3YXJkcyBwYXN0XG4gICAgLy8gdGhpcyBmcmFtZSB0byBpdHMgcGFyZW50ICh0aG91Z2ggcmVhZHMgbWF5KS5cbiAgICB0aGlzLmlzb2xhdGVXcml0ZXMgPSBpc29sYXRlV3JpdGVzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBGcmFtZS5wcm90b3R5cGU7XG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsLCByZXNvbHZlVXApIHtcbiAgICAvLyBBbGxvdyB2YXJpYWJsZXMgd2l0aCBkb3RzIGJ5IGF1dG9tYXRpY2FsbHkgY3JlYXRpbmcgdGhlXG4gICAgLy8gbmVzdGVkIHN0cnVjdHVyZVxuICAgIHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICB2YXIgb2JqID0gdGhpcy52YXJpYWJsZXM7XG4gICAgdmFyIGZyYW1lID0gdGhpcztcbiAgICBpZiAocmVzb2x2ZVVwKSB7XG4gICAgICBpZiAoZnJhbWUgPSB0aGlzLnJlc29sdmUocGFydHNbMF0sIHRydWUpKSB7XG4gICAgICAgIGZyYW1lLnNldChuYW1lLCB2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmICghb2JqW2lkXSkge1xuICAgICAgICBvYmpbaWRdID0ge307XG4gICAgICB9XG4gICAgICBvYmogPSBvYmpbaWRdO1xuICAgIH1cbiAgICBvYmpbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dID0gdmFsO1xuICB9O1xuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICB2YXIgdmFsID0gdGhpcy52YXJpYWJsZXNbbmFtZV07XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLmxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChuYW1lKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhcmVudDtcbiAgICB2YXIgdmFsID0gdGhpcy52YXJpYWJsZXNbbmFtZV07XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gcCAmJiBwLmxvb2t1cChuYW1lKTtcbiAgfTtcbiAgX3Byb3RvLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKG5hbWUsIGZvcldyaXRlKSB7XG4gICAgdmFyIHAgPSBmb3JXcml0ZSAmJiB0aGlzLmlzb2xhdGVXcml0ZXMgPyB1bmRlZmluZWQgOiB0aGlzLnBhcmVudDtcbiAgICB2YXIgdmFsID0gdGhpcy52YXJpYWJsZXNbbmFtZV07XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHAgJiYgcC5yZXNvbHZlKG5hbWUpO1xuICB9O1xuICBfcHJvdG8ucHVzaCA9IGZ1bmN0aW9uIHB1c2goaXNvbGF0ZVdyaXRlcykge1xuICAgIHJldHVybiBuZXcgRnJhbWUodGhpcywgaXNvbGF0ZVdyaXRlcyk7XG4gIH07XG4gIF9wcm90by5wb3AgPSBmdW5jdGlvbiBwb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9O1xuICByZXR1cm4gRnJhbWU7XG59KCk7XG5mdW5jdGlvbiBtYWtlTWFjcm8oYXJnTmFtZXMsIGt3YXJnTmFtZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1hY3JvKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtYWNyb0FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBtYWNyb0FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHZhciBhcmdDb3VudCA9IG51bUFyZ3MobWFjcm9BcmdzKTtcbiAgICB2YXIgYXJncztcbiAgICB2YXIga3dhcmdzID0gZ2V0S2V5d29yZEFyZ3MobWFjcm9BcmdzKTtcbiAgICBpZiAoYXJnQ291bnQgPiBhcmdOYW1lcy5sZW5ndGgpIHtcbiAgICAgIGFyZ3MgPSBtYWNyb0FyZ3Muc2xpY2UoMCwgYXJnTmFtZXMubGVuZ3RoKTtcblxuICAgICAgLy8gUG9zaXRpb25hbCBhcmd1bWVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIGluIGFzXG4gICAgICAvLyBrZXl3b3JkIGFyZ3VtZW50cyAoZXNzZW50aWFsbHkgZGVmYXVsdCB2YWx1ZXMpXG4gICAgICBtYWNyb0FyZ3Muc2xpY2UoYXJncy5sZW5ndGgsIGFyZ0NvdW50KS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgaWYgKGkgPCBrd2FyZ05hbWVzLmxlbmd0aCkge1xuICAgICAgICAgIGt3YXJnc1trd2FyZ05hbWVzW2ldXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBhcmdzLnB1c2goa3dhcmdzKTtcbiAgICB9IGVsc2UgaWYgKGFyZ0NvdW50IDwgYXJnTmFtZXMubGVuZ3RoKSB7XG4gICAgICBhcmdzID0gbWFjcm9BcmdzLnNsaWNlKDAsIGFyZ0NvdW50KTtcbiAgICAgIGZvciAodmFyIGkgPSBhcmdDb3VudDsgaSA8IGFyZ05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmdOYW1lc1tpXTtcblxuICAgICAgICAvLyBLZXl3b3JkIGFyZ3VtZW50cyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgYXNcbiAgICAgICAgLy8gcG9zaXRpb25hbCBhcmd1bWVudHMsIGkuZS4gdGhlIGNhbGxlciBleHBsaWNpdGx5XG4gICAgICAgIC8vIHVzZWQgdGhlIG5hbWUgb2YgYSBwb3NpdGlvbmFsIGFyZ1xuICAgICAgICBhcmdzLnB1c2goa3dhcmdzW2FyZ10pO1xuICAgICAgICBkZWxldGUga3dhcmdzW2FyZ107XG4gICAgICB9XG4gICAgICBhcmdzLnB1c2goa3dhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncyA9IG1hY3JvQXJncztcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59XG5mdW5jdGlvbiBtYWtlS2V5d29yZEFyZ3Mob2JqKSB7XG4gIG9iai5fX2tleXdvcmRzID0gdHJ1ZTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGlzS2V5d29yZEFyZ3Mob2JqKSB7XG4gIHJldHVybiBvYmogJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgJ19fa2V5d29yZHMnKTtcbn1cbmZ1bmN0aW9uIGdldEtleXdvcmRBcmdzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICBpZiAobGVuKSB7XG4gICAgdmFyIGxhc3RBcmcgPSBhcmdzW2xlbiAtIDFdO1xuICAgIGlmIChpc0tleXdvcmRBcmdzKGxhc3RBcmcpKSB7XG4gICAgICByZXR1cm4gbGFzdEFyZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuZnVuY3Rpb24gbnVtQXJncyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBsYXN0QXJnID0gYXJnc1tsZW4gLSAxXTtcbiAgaWYgKGlzS2V5d29yZEFyZ3MobGFzdEFyZykpIHtcbiAgICByZXR1cm4gbGVuIC0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59XG5cbi8vIEEgU2FmZVN0cmluZyBvYmplY3QgaW5kaWNhdGVzIHRoYXQgdGhlIHN0cmluZyBzaG91bGQgbm90IGJlXG4vLyBhdXRvZXNjYXBlZC4gVGhpcyBoYXBwZW5zIG1hZ2ljYWxseSBiZWNhdXNlIGF1dG9lc2NhcGluZyBvbmx5XG4vLyBvY2N1cnMgb24gcHJpbWl0aXZlIHN0cmluZyBvYmplY3RzLlxuZnVuY3Rpb24gU2FmZVN0cmluZyh2YWwpIHtcbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB0aGlzLnZhbCA9IHZhbDtcbiAgdGhpcy5sZW5ndGggPSB2YWwubGVuZ3RoO1xufVxuU2FmZVN0cmluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN0cmluZy5wcm90b3R5cGUsIHtcbiAgbGVuZ3RoOiB7XG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAwXG4gIH1cbn0pO1xuU2FmZVN0cmluZy5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gIHJldHVybiB0aGlzLnZhbDtcbn07XG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdGhpcy52YWw7XG59O1xuZnVuY3Rpb24gY29weVNhZmVuZXNzKGRlc3QsIHRhcmdldCkge1xuICBpZiAoZGVzdCBpbnN0YW5jZW9mIFNhZmVTdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdHJpbmcodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0LnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBtYXJrU2FmZSh2YWwpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdHJpbmcodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcFNhZmUoYXJncykge1xuICAgICAgdmFyIHJldCA9IHZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN0cmluZyhyZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBzdXBwcmVzc1ZhbHVlKHZhbCwgYXV0b2VzY2FwZSkge1xuICB2YWwgPSB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgPyB2YWwgOiAnJztcbiAgaWYgKGF1dG9lc2NhcGUgJiYgISh2YWwgaW5zdGFuY2VvZiBTYWZlU3RyaW5nKSkge1xuICAgIHZhbCA9IGxpYi5lc2NhcGUodmFsLnRvU3RyaW5nKCkpO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5mdW5jdGlvbiBlbnN1cmVEZWZpbmVkKHZhbCwgbGluZW5vLCBjb2xubykge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdhdHRlbXB0ZWQgdG8gb3V0cHV0IG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlJywgbGluZW5vICsgMSwgY29sbm8gKyAxKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuZnVuY3Rpb24gbWVtYmVyTG9va3VwKG9iaiwgdmFsKSB7XG4gIGlmIChvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2Ygb2JqW3ZhbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbdmFsXS5hcHBseShvYmosIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIG9ialt2YWxdO1xufVxuZnVuY3Rpb24gY2FsbFdyYXAob2JqLCBuYW1lLCBjb250ZXh0LCBhcmdzKSB7XG4gIGlmICghb2JqKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY2FsbCBgJyArIG5hbWUgKyAnYCwgd2hpY2ggaXMgdW5kZWZpbmVkIG9yIGZhbHNleScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBjYWxsIGAnICsgbmFtZSArICdgLCB3aGljaCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG4gIHJldHVybiBvYmouYXBwbHkoY29udGV4dCwgYXJncyk7XG59XG5mdW5jdGlvbiBjb250ZXh0T3JGcmFtZUxvb2t1cChjb250ZXh0LCBmcmFtZSwgbmFtZSkge1xuICB2YXIgdmFsID0gZnJhbWUubG9va3VwKG5hbWUpO1xuICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgOiBjb250ZXh0Lmxvb2t1cChuYW1lKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBsaW5lbm8sIGNvbG5vKSB7XG4gIGlmIChlcnJvci5saW5lbm8pIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBsaWIuVGVtcGxhdGVFcnJvcihlcnJvciwgbGluZW5vLCBjb2xubyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzeW5jRWFjaChhcnIsIGRpbWVuLCBpdGVyLCBjYikge1xuICBpZiAobGliLmlzQXJyYXkoYXJyKSkge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGxpYi5hc3luY0l0ZXIoYXJyLCBmdW5jdGlvbiBpdGVyQ2FsbGJhY2soaXRlbSwgaSwgbmV4dCkge1xuICAgICAgc3dpdGNoIChkaW1lbikge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaXRlcihpdGVtLCBpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaXRlcihpdGVtWzBdLCBpdGVtWzFdLCBpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaXRlcihpdGVtWzBdLCBpdGVtWzFdLCBpdGVtWzJdLCBpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGl0ZW0ucHVzaChpLCBsZW4sIG5leHQpO1xuICAgICAgICAgIGl0ZXIuYXBwbHkodGhpcywgaXRlbSk7XG4gICAgICB9XG4gICAgfSwgY2IpO1xuICB9IGVsc2Uge1xuICAgIGxpYi5hc3luY0ZvcihhcnIsIGZ1bmN0aW9uIGl0ZXJDYWxsYmFjayhrZXksIHZhbCwgaSwgbGVuLCBuZXh0KSB7XG4gICAgICBpdGVyKGtleSwgdmFsLCBpLCBsZW4sIG5leHQpO1xuICAgIH0sIGNiKTtcbiAgfVxufVxuZnVuY3Rpb24gYXN5bmNBbGwoYXJyLCBkaW1lbiwgZnVuYywgY2IpIHtcbiAgdmFyIGZpbmlzaGVkID0gMDtcbiAgdmFyIGxlbjtcbiAgdmFyIG91dHB1dEFycjtcbiAgZnVuY3Rpb24gZG9uZShpLCBvdXRwdXQpIHtcbiAgICBmaW5pc2hlZCsrO1xuICAgIG91dHB1dEFycltpXSA9IG91dHB1dDtcbiAgICBpZiAoZmluaXNoZWQgPT09IGxlbikge1xuICAgICAgY2IobnVsbCwgb3V0cHV0QXJyLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cbiAgaWYgKGxpYi5pc0FycmF5KGFycikpIHtcbiAgICBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIG91dHB1dEFyciA9IG5ldyBBcnJheShsZW4pO1xuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIGNiKG51bGwsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBhcnJbaV07XG4gICAgICAgIHN3aXRjaCAoZGltZW4pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBmdW5jKGl0ZW0sIGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBmdW5jKGl0ZW1bMF0sIGl0ZW1bMV0sIGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBmdW5jKGl0ZW1bMF0sIGl0ZW1bMV0sIGl0ZW1bMl0sIGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaXRlbS5wdXNoKGksIGxlbiwgZG9uZSk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBrZXlzID0gbGliLmtleXMoYXJyIHx8IHt9KTtcbiAgICBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBvdXRwdXRBcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICBjYihudWxsLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgayA9IGtleXNbX2ldO1xuICAgICAgICBmdW5jKGssIGFycltrXSwgX2ksIGxlbiwgZG9uZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBmcm9tSXRlcmF0b3IoYXJyKSB7XG4gIGlmICh0eXBlb2YgYXJyICE9PSAnb2JqZWN0JyB8fCBhcnIgPT09IG51bGwgfHwgbGliLmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSBpZiAoc3VwcG9ydHNJdGVyYXRvcnMgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFycikge1xuICAgIHJldHVybiBhcnJheUZyb20oYXJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRnJhbWU6IEZyYW1lLFxuICBtYWtlTWFjcm86IG1ha2VNYWNybyxcbiAgbWFrZUtleXdvcmRBcmdzOiBtYWtlS2V5d29yZEFyZ3MsXG4gIG51bUFyZ3M6IG51bUFyZ3MsXG4gIHN1cHByZXNzVmFsdWU6IHN1cHByZXNzVmFsdWUsXG4gIGVuc3VyZURlZmluZWQ6IGVuc3VyZURlZmluZWQsXG4gIG1lbWJlckxvb2t1cDogbWVtYmVyTG9va3VwLFxuICBjb250ZXh0T3JGcmFtZUxvb2t1cDogY29udGV4dE9yRnJhbWVMb29rdXAsXG4gIGNhbGxXcmFwOiBjYWxsV3JhcCxcbiAgaGFuZGxlRXJyb3I6IGhhbmRsZUVycm9yLFxuICBpc0FycmF5OiBsaWIuaXNBcnJheSxcbiAga2V5czogbGliLmtleXMsXG4gIFNhZmVTdHJpbmc6IFNhZmVTdHJpbmcsXG4gIGNvcHlTYWZlbmVzczogY29weVNhZmVuZXNzLFxuICBtYXJrU2FmZTogbWFya1NhZmUsXG4gIGFzeW5jRWFjaDogYXN5bmNFYWNoLFxuICBhc3luY0FsbDogYXN5bmNBbGwsXG4gIGluT3BlcmF0b3I6IGxpYi5pbk9wZXJhdG9yLFxuICBmcm9tSXRlcmF0b3I6IGZyb21JdGVyYXRvclxufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLFxuICBPYmogPSBfcmVxdWlyZS5PYmo7XG5mdW5jdGlvbiB0cmF2ZXJzZUFuZENoZWNrKG9iaiwgdHlwZSwgcmVzdWx0cykge1xuICBpZiAob2JqIGluc3RhbmNlb2YgdHlwZSkge1xuICAgIHJlc3VsdHMucHVzaChvYmopO1xuICB9XG4gIGlmIChvYmogaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgb2JqLmZpbmRBbGwodHlwZSwgcmVzdWx0cyk7XG4gIH1cbn1cbnZhciBOb2RlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfT2JqKSB7XG4gIF9pbmhlcml0c0xvb3NlKE5vZGUsIF9PYmopO1xuICBmdW5jdGlvbiBOb2RlKCkge1xuICAgIHJldHVybiBfT2JqLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gTm9kZS5wcm90b3R5cGU7XG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdChsaW5lbm8sIGNvbG5vKSB7XG4gICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHMsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHRoaXMubGluZW5vID0gbGluZW5vO1xuICAgIHRoaXMuY29sbm8gPSBjb2xubztcbiAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCwgaSkge1xuICAgICAgLy8gVGhlIGZpcnN0IHR3byBhcmdzIGFyZSBsaW5lL2NvbCBudW1iZXJzLCBzbyBvZmZzZXQgYnkgMlxuICAgICAgdmFyIHZhbCA9IF9hcmd1bWVudHNbaSArIDJdO1xuXG4gICAgICAvLyBGaWVsZHMgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZCwgYnV0IG51bGwuIEl0IG1ha2VzXG4gICAgICAvLyB0ZXN0aW5nIGVhc2llciB0byBub3JtYWxpemUgdmFsdWVzLlxuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IG51bGw7XG4gICAgICB9XG4gICAgICBfdGhpc1tmaWVsZF0gPSB2YWw7XG4gICAgfSk7XG4gIH07XG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbCh0eXBlLCByZXN1bHRzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gdHJhdmVyc2VBbmRDaGVjayhjaGlsZCwgdHlwZSwgcmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRyYXZlcnNlQW5kQ2hlY2soX3RoaXMyW2ZpZWxkXSwgdHlwZSwgcmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG4gIF9wcm90by5pdGVyRmllbGRzID0gZnVuY3Rpb24gaXRlckZpZWxkcyhmdW5jKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIGZ1bmMoX3RoaXMzW2ZpZWxkXSwgZmllbGQpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gTm9kZTtcbn0oT2JqKTsgLy8gQWJzdHJhY3Qgbm9kZXNcbnZhciBWYWx1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX05vZGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoVmFsdWUsIF9Ob2RlKTtcbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgcmV0dXJuIF9Ob2RlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoVmFsdWUsIFt7XG4gICAga2V5OiBcInR5cGVuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ1ZhbHVlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmllbGRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gWyd2YWx1ZSddO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVmFsdWU7XG59KE5vZGUpOyAvLyBDb25jcmV0ZSBub2Rlc1xudmFyIE5vZGVMaXN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTm9kZTIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTm9kZUxpc3QsIF9Ob2RlMik7XG4gIGZ1bmN0aW9uIE5vZGVMaXN0KCkge1xuICAgIHJldHVybiBfTm9kZTIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHZhciBfcHJvdG8yID0gTm9kZUxpc3QucHJvdG90eXBlO1xuICBfcHJvdG8yLmluaXQgPSBmdW5jdGlvbiBpbml0KGxpbmVubywgY29sbm8sIG5vZGVzKSB7XG4gICAgX05vZGUyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcywgbGluZW5vLCBjb2xubywgbm9kZXMgfHwgW10pO1xuICB9O1xuICBfcHJvdG8yLmFkZENoaWxkID0gZnVuY3Rpb24gYWRkQ2hpbGQobm9kZSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgfTtcbiAgX2NyZWF0ZUNsYXNzKE5vZGVMaXN0LCBbe1xuICAgIGtleTogXCJ0eXBlbmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdOb2RlTGlzdCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpZWxkc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFsnY2hpbGRyZW4nXTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vZGVMaXN0O1xufShOb2RlKTtcbnZhciBSb290ID0gTm9kZUxpc3QuZXh0ZW5kKCdSb290Jyk7XG52YXIgTGl0ZXJhbCA9IFZhbHVlLmV4dGVuZCgnTGl0ZXJhbCcpO1xudmFyIF9TeW1ib2wgPSBWYWx1ZS5leHRlbmQoJ1N5bWJvbCcpO1xudmFyIEdyb3VwID0gTm9kZUxpc3QuZXh0ZW5kKCdHcm91cCcpO1xudmFyIEFycmF5Tm9kZSA9IE5vZGVMaXN0LmV4dGVuZCgnQXJyYXknKTtcbnZhciBQYWlyID0gTm9kZS5leHRlbmQoJ1BhaXInLCB7XG4gIGZpZWxkczogWydrZXknLCAndmFsdWUnXVxufSk7XG52YXIgRGljdCA9IE5vZGVMaXN0LmV4dGVuZCgnRGljdCcpO1xudmFyIExvb2t1cFZhbCA9IE5vZGUuZXh0ZW5kKCdMb29rdXBWYWwnLCB7XG4gIGZpZWxkczogWyd0YXJnZXQnLCAndmFsJ11cbn0pO1xudmFyIElmID0gTm9kZS5leHRlbmQoJ0lmJywge1xuICBmaWVsZHM6IFsnY29uZCcsICdib2R5JywgJ2Vsc2VfJ11cbn0pO1xudmFyIElmQXN5bmMgPSBJZi5leHRlbmQoJ0lmQXN5bmMnKTtcbnZhciBJbmxpbmVJZiA9IE5vZGUuZXh0ZW5kKCdJbmxpbmVJZicsIHtcbiAgZmllbGRzOiBbJ2NvbmQnLCAnYm9keScsICdlbHNlXyddXG59KTtcbnZhciBGb3IgPSBOb2RlLmV4dGVuZCgnRm9yJywge1xuICBmaWVsZHM6IFsnYXJyJywgJ25hbWUnLCAnYm9keScsICdlbHNlXyddXG59KTtcbnZhciBBc3luY0VhY2ggPSBGb3IuZXh0ZW5kKCdBc3luY0VhY2gnKTtcbnZhciBBc3luY0FsbCA9IEZvci5leHRlbmQoJ0FzeW5jQWxsJyk7XG52YXIgTWFjcm8gPSBOb2RlLmV4dGVuZCgnTWFjcm8nLCB7XG4gIGZpZWxkczogWyduYW1lJywgJ2FyZ3MnLCAnYm9keSddXG59KTtcbnZhciBDYWxsZXIgPSBNYWNyby5leHRlbmQoJ0NhbGxlcicpO1xudmFyIEltcG9ydCA9IE5vZGUuZXh0ZW5kKCdJbXBvcnQnLCB7XG4gIGZpZWxkczogWyd0ZW1wbGF0ZScsICd0YXJnZXQnLCAnd2l0aENvbnRleHQnXVxufSk7XG52YXIgRnJvbUltcG9ydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX05vZGUzKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZyb21JbXBvcnQsIF9Ob2RlMyk7XG4gIGZ1bmN0aW9uIEZyb21JbXBvcnQoKSB7XG4gICAgcmV0dXJuIF9Ob2RlMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgdmFyIF9wcm90bzMgPSBGcm9tSW1wb3J0LnByb3RvdHlwZTtcbiAgX3Byb3RvMy5pbml0ID0gZnVuY3Rpb24gaW5pdChsaW5lbm8sIGNvbG5vLCB0ZW1wbGF0ZSwgbmFtZXMsIHdpdGhDb250ZXh0KSB7XG4gICAgX05vZGUzLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcywgbGluZW5vLCBjb2xubywgdGVtcGxhdGUsIG5hbWVzIHx8IG5ldyBOb2RlTGlzdCgpLCB3aXRoQ29udGV4dCk7XG4gIH07XG4gIF9jcmVhdGVDbGFzcyhGcm9tSW1wb3J0LCBbe1xuICAgIGtleTogXCJ0eXBlbmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdGcm9tSW1wb3J0JztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmllbGRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gWyd0ZW1wbGF0ZScsICduYW1lcycsICd3aXRoQ29udGV4dCddO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRnJvbUltcG9ydDtcbn0oTm9kZSk7XG52YXIgRnVuQ2FsbCA9IE5vZGUuZXh0ZW5kKCdGdW5DYWxsJywge1xuICBmaWVsZHM6IFsnbmFtZScsICdhcmdzJ11cbn0pO1xudmFyIEZpbHRlciA9IEZ1bkNhbGwuZXh0ZW5kKCdGaWx0ZXInKTtcbnZhciBGaWx0ZXJBc3luYyA9IEZpbHRlci5leHRlbmQoJ0ZpbHRlckFzeW5jJywge1xuICBmaWVsZHM6IFsnbmFtZScsICdhcmdzJywgJ3N5bWJvbCddXG59KTtcbnZhciBLZXl3b3JkQXJncyA9IERpY3QuZXh0ZW5kKCdLZXl3b3JkQXJncycpO1xudmFyIEJsb2NrID0gTm9kZS5leHRlbmQoJ0Jsb2NrJywge1xuICBmaWVsZHM6IFsnbmFtZScsICdib2R5J11cbn0pO1xudmFyIFN1cGVyID0gTm9kZS5leHRlbmQoJ1N1cGVyJywge1xuICBmaWVsZHM6IFsnYmxvY2tOYW1lJywgJ3N5bWJvbCddXG59KTtcbnZhciBUZW1wbGF0ZVJlZiA9IE5vZGUuZXh0ZW5kKCdUZW1wbGF0ZVJlZicsIHtcbiAgZmllbGRzOiBbJ3RlbXBsYXRlJ11cbn0pO1xudmFyIEV4dGVuZHMgPSBUZW1wbGF0ZVJlZi5leHRlbmQoJ0V4dGVuZHMnKTtcbnZhciBJbmNsdWRlID0gTm9kZS5leHRlbmQoJ0luY2x1ZGUnLCB7XG4gIGZpZWxkczogWyd0ZW1wbGF0ZScsICdpZ25vcmVNaXNzaW5nJ11cbn0pO1xudmFyIFNldCA9IE5vZGUuZXh0ZW5kKCdTZXQnLCB7XG4gIGZpZWxkczogWyd0YXJnZXRzJywgJ3ZhbHVlJ11cbn0pO1xudmFyIFN3aXRjaCA9IE5vZGUuZXh0ZW5kKCdTd2l0Y2gnLCB7XG4gIGZpZWxkczogWydleHByJywgJ2Nhc2VzJywgJ2RlZmF1bHQnXVxufSk7XG52YXIgQ2FzZSA9IE5vZGUuZXh0ZW5kKCdDYXNlJywge1xuICBmaWVsZHM6IFsnY29uZCcsICdib2R5J11cbn0pO1xudmFyIE91dHB1dCA9IE5vZGVMaXN0LmV4dGVuZCgnT3V0cHV0Jyk7XG52YXIgQ2FwdHVyZSA9IE5vZGUuZXh0ZW5kKCdDYXB0dXJlJywge1xuICBmaWVsZHM6IFsnYm9keSddXG59KTtcbnZhciBUZW1wbGF0ZURhdGEgPSBMaXRlcmFsLmV4dGVuZCgnVGVtcGxhdGVEYXRhJyk7XG52YXIgVW5hcnlPcCA9IE5vZGUuZXh0ZW5kKCdVbmFyeU9wJywge1xuICBmaWVsZHM6IFsndGFyZ2V0J11cbn0pO1xudmFyIEJpbk9wID0gTm9kZS5leHRlbmQoJ0Jpbk9wJywge1xuICBmaWVsZHM6IFsnbGVmdCcsICdyaWdodCddXG59KTtcbnZhciBJbiA9IEJpbk9wLmV4dGVuZCgnSW4nKTtcbnZhciBJcyA9IEJpbk9wLmV4dGVuZCgnSXMnKTtcbnZhciBPciA9IEJpbk9wLmV4dGVuZCgnT3InKTtcbnZhciBBbmQgPSBCaW5PcC5leHRlbmQoJ0FuZCcpO1xudmFyIE5vdCA9IFVuYXJ5T3AuZXh0ZW5kKCdOb3QnKTtcbnZhciBBZGQgPSBCaW5PcC5leHRlbmQoJ0FkZCcpO1xudmFyIENvbmNhdCA9IEJpbk9wLmV4dGVuZCgnQ29uY2F0Jyk7XG52YXIgU3ViID0gQmluT3AuZXh0ZW5kKCdTdWInKTtcbnZhciBNdWwgPSBCaW5PcC5leHRlbmQoJ011bCcpO1xudmFyIERpdiA9IEJpbk9wLmV4dGVuZCgnRGl2Jyk7XG52YXIgRmxvb3JEaXYgPSBCaW5PcC5leHRlbmQoJ0Zsb29yRGl2Jyk7XG52YXIgTW9kID0gQmluT3AuZXh0ZW5kKCdNb2QnKTtcbnZhciBQb3cgPSBCaW5PcC5leHRlbmQoJ1BvdycpO1xudmFyIE5lZyA9IFVuYXJ5T3AuZXh0ZW5kKCdOZWcnKTtcbnZhciBQb3MgPSBVbmFyeU9wLmV4dGVuZCgnUG9zJyk7XG52YXIgQ29tcGFyZSA9IE5vZGUuZXh0ZW5kKCdDb21wYXJlJywge1xuICBmaWVsZHM6IFsnZXhwcicsICdvcHMnXVxufSk7XG52YXIgQ29tcGFyZU9wZXJhbmQgPSBOb2RlLmV4dGVuZCgnQ29tcGFyZU9wZXJhbmQnLCB7XG4gIGZpZWxkczogWydleHByJywgJ3R5cGUnXVxufSk7XG52YXIgQ2FsbEV4dGVuc2lvbiA9IE5vZGUuZXh0ZW5kKCdDYWxsRXh0ZW5zaW9uJywge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KGV4dCwgcHJvcCwgYXJncywgY29udGVudEFyZ3MpIHtcbiAgICB0aGlzLnBhcmVudCgpO1xuICAgIHRoaXMuZXh0TmFtZSA9IGV4dC5fX25hbWUgfHwgZXh0O1xuICAgIHRoaXMucHJvcCA9IHByb3A7XG4gICAgdGhpcy5hcmdzID0gYXJncyB8fCBuZXcgTm9kZUxpc3QoKTtcbiAgICB0aGlzLmNvbnRlbnRBcmdzID0gY29udGVudEFyZ3MgfHwgW107XG4gICAgdGhpcy5hdXRvZXNjYXBlID0gZXh0LmF1dG9lc2NhcGU7XG4gIH0sXG4gIGZpZWxkczogWydleHROYW1lJywgJ3Byb3AnLCAnYXJncycsICdjb250ZW50QXJncyddXG59KTtcbnZhciBDYWxsRXh0ZW5zaW9uQXN5bmMgPSBDYWxsRXh0ZW5zaW9uLmV4dGVuZCgnQ2FsbEV4dGVuc2lvbkFzeW5jJyk7XG5cbi8vIFRoaXMgaXMgaGFja3ksIGJ1dCB0aGlzIGlzIGp1c3QgYSBkZWJ1Z2dpbmcgZnVuY3Rpb24gYW55d2F5XG5mdW5jdGlvbiBwcmludChzdHIsIGluZGVudCwgaW5saW5lKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJyk7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGkpIHtcbiAgICBpZiAobGluZSAmJiAoaW5saW5lICYmIGkgPiAwIHx8ICFpbmxpbmUpKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnICcucmVwZWF0KGluZGVudCkpO1xuICAgIH1cbiAgICB2YXIgbmwgPSBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gJycgOiAnXFxuJztcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShcIlwiICsgbGluZSArIG5sKTtcbiAgfSk7XG59XG5cbi8vIFByaW50IHRoZSBBU1QgaW4gYSBuaWNlbHkgZm9ybWF0dGVkIHRyZWUgZm9ybWF0IGZvciBkZWJ1Z2dpblxuZnVuY3Rpb24gcHJpbnROb2Rlcyhub2RlLCBpbmRlbnQpIHtcbiAgaW5kZW50ID0gaW5kZW50IHx8IDA7XG4gIHByaW50KG5vZGUudHlwZW5hbWUgKyAnOiAnLCBpbmRlbnQpO1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgcHJpbnQoJ1xcbicpO1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgcHJpbnROb2RlcyhuLCBpbmRlbnQgKyAyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQ2FsbEV4dGVuc2lvbikge1xuICAgIHByaW50KG5vZGUuZXh0TmFtZSArIFwiLlwiICsgbm9kZS5wcm9wICsgXCJcXG5cIik7XG4gICAgaWYgKG5vZGUuYXJncykge1xuICAgICAgcHJpbnROb2Rlcyhub2RlLmFyZ3MsIGluZGVudCArIDIpO1xuICAgIH1cbiAgICBpZiAobm9kZS5jb250ZW50QXJncykge1xuICAgICAgbm9kZS5jb250ZW50QXJncy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHByaW50Tm9kZXMobiwgaW5kZW50ICsgMik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHByb3BzID0gbnVsbDtcbiAgICBub2RlLml0ZXJGaWVsZHMoZnVuY3Rpb24gKHZhbCwgZmllbGROYW1lKSB7XG4gICAgICBpZiAodmFsIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBub2Rlcy5wdXNoKFtmaWVsZE5hbWUsIHZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICAgICAgcHJvcHNbZmllbGROYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIHByaW50KEpTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKSArICdcXG4nLCBudWxsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbnQoJ1xcbicpO1xuICAgIH1cbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZmllbGROYW1lID0gX3JlZlswXSxcbiAgICAgICAgbiA9IF9yZWZbMV07XG4gICAgICBwcmludChcIltcIiArIGZpZWxkTmFtZSArIFwiXSA9PlwiLCBpbmRlbnQgKyAyKTtcbiAgICAgIHByaW50Tm9kZXMobiwgaW5kZW50ICsgNCk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOb2RlOiBOb2RlLFxuICBSb290OiBSb290LFxuICBOb2RlTGlzdDogTm9kZUxpc3QsXG4gIFZhbHVlOiBWYWx1ZSxcbiAgTGl0ZXJhbDogTGl0ZXJhbCxcbiAgU3ltYm9sOiBfU3ltYm9sLFxuICBHcm91cDogR3JvdXAsXG4gIEFycmF5OiBBcnJheU5vZGUsXG4gIFBhaXI6IFBhaXIsXG4gIERpY3Q6IERpY3QsXG4gIE91dHB1dDogT3V0cHV0LFxuICBDYXB0dXJlOiBDYXB0dXJlLFxuICBUZW1wbGF0ZURhdGE6IFRlbXBsYXRlRGF0YSxcbiAgSWY6IElmLFxuICBJZkFzeW5jOiBJZkFzeW5jLFxuICBJbmxpbmVJZjogSW5saW5lSWYsXG4gIEZvcjogRm9yLFxuICBBc3luY0VhY2g6IEFzeW5jRWFjaCxcbiAgQXN5bmNBbGw6IEFzeW5jQWxsLFxuICBNYWNybzogTWFjcm8sXG4gIENhbGxlcjogQ2FsbGVyLFxuICBJbXBvcnQ6IEltcG9ydCxcbiAgRnJvbUltcG9ydDogRnJvbUltcG9ydCxcbiAgRnVuQ2FsbDogRnVuQ2FsbCxcbiAgRmlsdGVyOiBGaWx0ZXIsXG4gIEZpbHRlckFzeW5jOiBGaWx0ZXJBc3luYyxcbiAgS2V5d29yZEFyZ3M6IEtleXdvcmRBcmdzLFxuICBCbG9jazogQmxvY2ssXG4gIFN1cGVyOiBTdXBlcixcbiAgRXh0ZW5kczogRXh0ZW5kcyxcbiAgSW5jbHVkZTogSW5jbHVkZSxcbiAgU2V0OiBTZXQsXG4gIFN3aXRjaDogU3dpdGNoLFxuICBDYXNlOiBDYXNlLFxuICBMb29rdXBWYWw6IExvb2t1cFZhbCxcbiAgQmluT3A6IEJpbk9wLFxuICBJbjogSW4sXG4gIElzOiBJcyxcbiAgT3I6IE9yLFxuICBBbmQ6IEFuZCxcbiAgTm90OiBOb3QsXG4gIEFkZDogQWRkLFxuICBDb25jYXQ6IENvbmNhdCxcbiAgU3ViOiBTdWIsXG4gIE11bDogTXVsLFxuICBEaXY6IERpdixcbiAgRmxvb3JEaXY6IEZsb29yRGl2LFxuICBNb2Q6IE1vZCxcbiAgUG93OiBQb3csXG4gIE5lZzogTmVnLFxuICBQb3M6IFBvcyxcbiAgQ29tcGFyZTogQ29tcGFyZSxcbiAgQ29tcGFyZU9wZXJhbmQ6IENvbXBhcmVPcGVyYW5kLFxuICBDYWxsRXh0ZW5zaW9uOiBDYWxsRXh0ZW5zaW9uLFxuICBDYWxsRXh0ZW5zaW9uQXN5bmM6IENhbGxFeHRlbnNpb25Bc3luYyxcbiAgcHJpbnROb2RlczogcHJpbnROb2Rlc1xufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIHBhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgdHJhbnNmb3JtZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbnZhciBub2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLFxuICBUZW1wbGF0ZUVycm9yID0gX3JlcXVpcmUuVGVtcGxhdGVFcnJvcjtcbnZhciBfcmVxdWlyZTIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLFxuICBGcmFtZSA9IF9yZXF1aXJlMi5GcmFtZTtcbnZhciBfcmVxdWlyZTMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLFxuICBPYmogPSBfcmVxdWlyZTMuT2JqO1xuXG4vLyBUaGVzZSBhcmUgYWxsIHRoZSBzYW1lIGZvciBub3csIGJ1dCBzaG91bGRuJ3QgYmUgcGFzc2VkIHN0cmFpZ2h0XG4vLyB0aHJvdWdoXG52YXIgY29tcGFyZU9wcyA9IHtcbiAgJz09JzogJz09JyxcbiAgJz09PSc6ICc9PT0nLFxuICAnIT0nOiAnIT0nLFxuICAnIT09JzogJyE9PScsXG4gICc8JzogJzwnLFxuICAnPic6ICc+JyxcbiAgJzw9JzogJzw9JyxcbiAgJz49JzogJz49J1xufTtcbnZhciBDb21waWxlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX09iaikge1xuICBfaW5oZXJpdHNMb29zZShDb21waWxlciwgX09iaik7XG4gIGZ1bmN0aW9uIENvbXBpbGVyKCkge1xuICAgIHJldHVybiBfT2JqLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gQ29tcGlsZXIucHJvdG90eXBlO1xuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQodGVtcGxhdGVOYW1lLCB0aHJvd09uVW5kZWZpbmVkKSB7XG4gICAgdGhpcy50ZW1wbGF0ZU5hbWUgPSB0ZW1wbGF0ZU5hbWU7XG4gICAgdGhpcy5jb2RlYnVmID0gW107XG4gICAgdGhpcy5sYXN0SWQgPSAwO1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLmJ1ZmZlclN0YWNrID0gW107XG4gICAgdGhpcy5fc2NvcGVDbG9zZXJzID0gJyc7XG4gICAgdGhpcy5pbkJsb2NrID0gZmFsc2U7XG4gICAgdGhpcy50aHJvd09uVW5kZWZpbmVkID0gdGhyb3dPblVuZGVmaW5lZDtcbiAgfTtcbiAgX3Byb3RvLmZhaWwgPSBmdW5jdGlvbiBmYWlsKG1zZywgbGluZW5vLCBjb2xubykge1xuICAgIGlmIChsaW5lbm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGluZW5vICs9IDE7XG4gICAgfVxuICAgIGlmIChjb2xubyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb2xubyArPSAxO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVGVtcGxhdGVFcnJvcihtc2csIGxpbmVubywgY29sbm8pO1xuICB9O1xuICBfcHJvdG8uX3B1c2hCdWZmZXIgPSBmdW5jdGlvbiBfcHVzaEJ1ZmZlcigpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl90bXBpZCgpO1xuICAgIHRoaXMuYnVmZmVyU3RhY2sucHVzaCh0aGlzLmJ1ZmZlcik7XG4gICAgdGhpcy5idWZmZXIgPSBpZDtcbiAgICB0aGlzLl9lbWl0KFwidmFyIFwiICsgdGhpcy5idWZmZXIgKyBcIiA9IFxcXCJcXFwiO1wiKTtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG4gIF9wcm90by5fcG9wQnVmZmVyID0gZnVuY3Rpb24gX3BvcEJ1ZmZlcigpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyU3RhY2sucG9wKCk7XG4gIH07XG4gIF9wcm90by5fZW1pdCA9IGZ1bmN0aW9uIF9lbWl0KGNvZGUpIHtcbiAgICB0aGlzLmNvZGVidWYucHVzaChjb2RlKTtcbiAgfTtcbiAgX3Byb3RvLl9lbWl0TGluZSA9IGZ1bmN0aW9uIF9lbWl0TGluZShjb2RlKSB7XG4gICAgdGhpcy5fZW1pdChjb2RlICsgJ1xcbicpO1xuICB9O1xuICBfcHJvdG8uX2VtaXRMaW5lcyA9IGZ1bmN0aW9uIF9lbWl0TGluZXMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbGluZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBsaW5lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgcmV0dXJuIF90aGlzLl9lbWl0TGluZShsaW5lKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLl9lbWl0RnVuY0JlZ2luID0gZnVuY3Rpb24gX2VtaXRGdW5jQmVnaW4obm9kZSwgbmFtZSkge1xuICAgIHRoaXMuYnVmZmVyID0gJ291dHB1dCc7XG4gICAgdGhpcy5fc2NvcGVDbG9zZXJzID0gJyc7XG4gICAgdGhpcy5fZW1pdExpbmUoXCJmdW5jdGlvbiBcIiArIG5hbWUgKyBcIihlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYikge1wiKTtcbiAgICB0aGlzLl9lbWl0TGluZShcInZhciBsaW5lbm8gPSBcIiArIG5vZGUubGluZW5vICsgXCI7XCIpO1xuICAgIHRoaXMuX2VtaXRMaW5lKFwidmFyIGNvbG5vID0gXCIgKyBub2RlLmNvbG5vICsgXCI7XCIpO1xuICAgIHRoaXMuX2VtaXRMaW5lKFwidmFyIFwiICsgdGhpcy5idWZmZXIgKyBcIiA9IFxcXCJcXFwiO1wiKTtcbiAgICB0aGlzLl9lbWl0TGluZSgndHJ5IHsnKTtcbiAgfTtcbiAgX3Byb3RvLl9lbWl0RnVuY0VuZCA9IGZ1bmN0aW9uIF9lbWl0RnVuY0VuZChub1JldHVybikge1xuICAgIGlmICghbm9SZXR1cm4pIHtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKCdjYihudWxsLCAnICsgdGhpcy5idWZmZXIgKyAnKTsnKTtcbiAgICB9XG4gICAgdGhpcy5fY2xvc2VTY29wZUxldmVscygpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd9IGNhdGNoIChlKSB7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJyAgY2IocnVudGltZS5oYW5kbGVFcnJvcihlLCBsaW5lbm8sIGNvbG5vKSk7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ30nKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnfScpO1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLl9hZGRTY29wZUxldmVsID0gZnVuY3Rpb24gX2FkZFNjb3BlTGV2ZWwoKSB7XG4gICAgdGhpcy5fc2NvcGVDbG9zZXJzICs9ICd9KSc7XG4gIH07XG4gIF9wcm90by5fY2xvc2VTY29wZUxldmVscyA9IGZ1bmN0aW9uIF9jbG9zZVNjb3BlTGV2ZWxzKCkge1xuICAgIHRoaXMuX2VtaXRMaW5lKHRoaXMuX3Njb3BlQ2xvc2VycyArICc7Jyk7XG4gICAgdGhpcy5fc2NvcGVDbG9zZXJzID0gJyc7XG4gIH07XG4gIF9wcm90by5fd2l0aFNjb3BlZFN5bnRheCA9IGZ1bmN0aW9uIF93aXRoU2NvcGVkU3ludGF4KGZ1bmMpIHtcbiAgICB2YXIgX3Njb3BlQ2xvc2VycyA9IHRoaXMuX3Njb3BlQ2xvc2VycztcbiAgICB0aGlzLl9zY29wZUNsb3NlcnMgPSAnJztcbiAgICBmdW5jLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY2xvc2VTY29wZUxldmVscygpO1xuICAgIHRoaXMuX3Njb3BlQ2xvc2VycyA9IF9zY29wZUNsb3NlcnM7XG4gIH07XG4gIF9wcm90by5fbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gX21ha2VDYWxsYmFjayhyZXMpIHtcbiAgICB2YXIgZXJyID0gdGhpcy5fdG1waWQoKTtcbiAgICByZXR1cm4gJ2Z1bmN0aW9uKCcgKyBlcnIgKyAocmVzID8gJywnICsgcmVzIDogJycpICsgJykge1xcbicgKyAnaWYoJyArIGVyciArICcpIHsgY2IoJyArIGVyciArICcpOyByZXR1cm47IH0nO1xuICB9O1xuICBfcHJvdG8uX3RtcGlkID0gZnVuY3Rpb24gX3RtcGlkKCkge1xuICAgIHRoaXMubGFzdElkKys7XG4gICAgcmV0dXJuICd0XycgKyB0aGlzLmxhc3RJZDtcbiAgfTtcbiAgX3Byb3RvLl90ZW1wbGF0ZU5hbWUgPSBmdW5jdGlvbiBfdGVtcGxhdGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlTmFtZSA9PSBudWxsID8gJ3VuZGVmaW5lZCcgOiBKU09OLnN0cmluZ2lmeSh0aGlzLnRlbXBsYXRlTmFtZSk7XG4gIH07XG4gIF9wcm90by5fY29tcGlsZUNoaWxkcmVuID0gZnVuY3Rpb24gX2NvbXBpbGVDaGlsZHJlbihub2RlLCBmcmFtZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIF90aGlzMi5jb21waWxlKGNoaWxkLCBmcmFtZSk7XG4gICAgfSk7XG4gIH07XG4gIF9wcm90by5fY29tcGlsZUFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIF9jb21waWxlQWdncmVnYXRlKG5vZGUsIGZyYW1lLCBzdGFydENoYXIsIGVuZENoYXIpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBpZiAoc3RhcnRDaGFyKSB7XG4gICAgICB0aGlzLl9lbWl0KHN0YXJ0Q2hhcik7XG4gICAgfVxuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBfdGhpczMuX2VtaXQoJywnKTtcbiAgICAgIH1cbiAgICAgIF90aGlzMy5jb21waWxlKGNoaWxkLCBmcmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKGVuZENoYXIpIHtcbiAgICAgIHRoaXMuX2VtaXQoZW5kQ2hhcik7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uX2NvbXBpbGVFeHByZXNzaW9uID0gZnVuY3Rpb24gX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUsIGZyYW1lKSB7XG4gICAgLy8gVE9ETzogSSdtIG5vdCByZWFsbHkgc3VyZSBpZiB0aGlzIHR5cGUgY2hlY2sgaXMgd29ydGggaXQgb3JcbiAgICAvLyBub3QuXG4gICAgdGhpcy5hc3NlcnRUeXBlKG5vZGUsIG5vZGVzLkxpdGVyYWwsIG5vZGVzLlN5bWJvbCwgbm9kZXMuR3JvdXAsIG5vZGVzLkFycmF5LCBub2Rlcy5EaWN0LCBub2Rlcy5GdW5DYWxsLCBub2Rlcy5DYWxsZXIsIG5vZGVzLkZpbHRlciwgbm9kZXMuTG9va3VwVmFsLCBub2Rlcy5Db21wYXJlLCBub2Rlcy5JbmxpbmVJZiwgbm9kZXMuSW4sIG5vZGVzLklzLCBub2Rlcy5BbmQsIG5vZGVzLk9yLCBub2Rlcy5Ob3QsIG5vZGVzLkFkZCwgbm9kZXMuQ29uY2F0LCBub2Rlcy5TdWIsIG5vZGVzLk11bCwgbm9kZXMuRGl2LCBub2Rlcy5GbG9vckRpdiwgbm9kZXMuTW9kLCBub2Rlcy5Qb3csIG5vZGVzLk5lZywgbm9kZXMuUG9zLCBub2Rlcy5Db21wYXJlLCBub2Rlcy5Ob2RlTGlzdCk7XG4gICAgdGhpcy5jb21waWxlKG5vZGUsIGZyYW1lKTtcbiAgfTtcbiAgX3Byb3RvLmFzc2VydFR5cGUgPSBmdW5jdGlvbiBhc3NlcnRUeXBlKG5vZGUpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHR5cGVzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHR5cGVzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICBpZiAoIXR5cGVzLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgdDtcbiAgICB9KSkge1xuICAgICAgdGhpcy5mYWlsKFwiYXNzZXJ0VHlwZTogaW52YWxpZCB0eXBlOiBcIiArIG5vZGUudHlwZW5hbWUsIG5vZGUubGluZW5vLCBub2RlLmNvbG5vKTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5jb21waWxlQ2FsbEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGNvbXBpbGVDYWxsRXh0ZW5zaW9uKG5vZGUsIGZyYW1lLCBhc3luYykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gbm9kZS5hcmdzO1xuICAgIHZhciBjb250ZW50QXJncyA9IG5vZGUuY29udGVudEFyZ3M7XG4gICAgdmFyIGF1dG9lc2NhcGUgPSB0eXBlb2Ygbm9kZS5hdXRvZXNjYXBlID09PSAnYm9vbGVhbicgPyBub2RlLmF1dG9lc2NhcGUgOiB0cnVlO1xuICAgIGlmICghYXN5bmMpIHtcbiAgICAgIHRoaXMuX2VtaXQodGhpcy5idWZmZXIgKyBcIiArPSBydW50aW1lLnN1cHByZXNzVmFsdWUoXCIpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0KFwiZW52LmdldEV4dGVuc2lvbihcXFwiXCIgKyBub2RlLmV4dE5hbWUgKyBcIlxcXCIpW1xcXCJcIiArIG5vZGUucHJvcCArIFwiXFxcIl0oXCIpO1xuICAgIHRoaXMuX2VtaXQoJ2NvbnRleHQnKTtcbiAgICBpZiAoYXJncyB8fCBjb250ZW50QXJncykge1xuICAgICAgdGhpcy5fZW1pdCgnLCcpO1xuICAgIH1cbiAgICBpZiAoYXJncykge1xuICAgICAgaWYgKCEoYXJncyBpbnN0YW5jZW9mIG5vZGVzLk5vZGVMaXN0KSkge1xuICAgICAgICB0aGlzLmZhaWwoJ2NvbXBpbGVDYWxsRXh0ZW5zaW9uOiBhcmd1bWVudHMgbXVzdCBiZSBhIE5vZGVMaXN0LCAnICsgJ3VzZSBgcGFyc2VyLnBhcnNlU2lnbmF0dXJlYCcpO1xuICAgICAgfVxuICAgICAgYXJncy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChhcmcsIGkpIHtcbiAgICAgICAgLy8gVGFnIGFyZ3VtZW50cyBhcmUgcGFzc2VkIG5vcm1hbGx5IHRvIHRoZSBjYWxsLiBOb3RlXG4gICAgICAgIC8vIHRoYXQga2V5d29yZCBhcmd1bWVudHMgYXJlIHR1cm5lZCBpbnRvIGEgc2luZ2xlIGpzXG4gICAgICAgIC8vIG9iamVjdCBhcyB0aGUgbGFzdCBhcmd1bWVudCwgaWYgdGhleSBleGlzdC5cbiAgICAgICAgX3RoaXM0Ll9jb21waWxlRXhwcmVzc2lvbihhcmcsIGZyYW1lKTtcbiAgICAgICAgaWYgKGkgIT09IGFyZ3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjb250ZW50QXJncy5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpczQuX2VtaXQoJywnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50QXJncy5sZW5ndGgpIHtcbiAgICAgIGNvbnRlbnRBcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZywgaSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICBfdGhpczQuX2VtaXQoJywnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgX3RoaXM0Ll9lbWl0TGluZSgnZnVuY3Rpb24oY2IpIHsnKTtcbiAgICAgICAgICBfdGhpczQuX2VtaXRMaW5lKCdpZighY2IpIHsgY2IgPSBmdW5jdGlvbihlcnIpIHsgaWYoZXJyKSB7IHRocm93IGVycjsgfX19Jyk7XG4gICAgICAgICAgdmFyIGlkID0gX3RoaXM0Ll9wdXNoQnVmZmVyKCk7XG4gICAgICAgICAgX3RoaXM0Ll93aXRoU2NvcGVkU3ludGF4KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzNC5jb21waWxlKGFyZywgZnJhbWUpO1xuICAgICAgICAgICAgX3RoaXM0Ll9lbWl0TGluZShcImNiKG51bGwsIFwiICsgaWQgKyBcIik7XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzNC5fcG9wQnVmZmVyKCk7XG4gICAgICAgICAgX3RoaXM0Ll9lbWl0TGluZShcInJldHVybiBcIiArIGlkICsgXCI7XCIpO1xuICAgICAgICAgIF90aGlzNC5fZW1pdExpbmUoJ30nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczQuX2VtaXQoJ251bGwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhc3luYykge1xuICAgICAgdmFyIHJlcyA9IHRoaXMuX3RtcGlkKCk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnLCAnICsgdGhpcy5fbWFrZUNhbGxiYWNrKHJlcykpO1xuICAgICAgdGhpcy5fZW1pdExpbmUodGhpcy5idWZmZXIgKyBcIiArPSBydW50aW1lLnN1cHByZXNzVmFsdWUoXCIgKyByZXMgKyBcIiwgXCIgKyBhdXRvZXNjYXBlICsgXCIgJiYgZW52Lm9wdHMuYXV0b2VzY2FwZSk7XCIpO1xuICAgICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbWl0KCcpJyk7XG4gICAgICB0aGlzLl9lbWl0KFwiLCBcIiArIGF1dG9lc2NhcGUgKyBcIiAmJiBlbnYub3B0cy5hdXRvZXNjYXBlKTtcXG5cIik7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uY29tcGlsZUNhbGxFeHRlbnNpb25Bc3luYyA9IGZ1bmN0aW9uIGNvbXBpbGVDYWxsRXh0ZW5zaW9uQXN5bmMobm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLmNvbXBpbGVDYWxsRXh0ZW5zaW9uKG5vZGUsIGZyYW1lLCB0cnVlKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVOb2RlTGlzdCA9IGZ1bmN0aW9uIGNvbXBpbGVOb2RlTGlzdChub2RlLCBmcmFtZSkge1xuICAgIHRoaXMuX2NvbXBpbGVDaGlsZHJlbihub2RlLCBmcmFtZSk7XG4gIH07XG4gIF9wcm90by5jb21waWxlTGl0ZXJhbCA9IGZ1bmN0aW9uIGNvbXBpbGVMaXRlcmFsKG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdmFsID0gbm9kZS52YWx1ZS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpO1xuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcbiAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG4gICAgICB2YWwgPSB2YWwucmVwbGFjZSgvXFxyL2csICdcXFxccicpO1xuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKTtcbiAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cXHUyMDI4L2csIFwiXFxcXHUyMDI4XCIpO1xuICAgICAgdGhpcy5fZW1pdChcIlxcXCJcIiArIHZhbCArIFwiXFxcIlwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2VtaXQoJ251bGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdChub2RlLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVTeW1ib2wgPSBmdW5jdGlvbiBjb21waWxlU3ltYm9sKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIG5hbWUgPSBub2RlLnZhbHVlO1xuICAgIHZhciB2ID0gZnJhbWUubG9va3VwKG5hbWUpO1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLl9lbWl0KHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbWl0KCdydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwKCcgKyAnY29udGV4dCwgZnJhbWUsIFwiJyArIG5hbWUgKyAnXCIpJyk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uY29tcGlsZUdyb3VwID0gZnVuY3Rpb24gY29tcGlsZUdyb3VwKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fY29tcGlsZUFnZ3JlZ2F0ZShub2RlLCBmcmFtZSwgJygnLCAnKScpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUFycmF5ID0gZnVuY3Rpb24gY29tcGlsZUFycmF5KG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fY29tcGlsZUFnZ3JlZ2F0ZShub2RlLCBmcmFtZSwgJ1snLCAnXScpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZURpY3QgPSBmdW5jdGlvbiBjb21waWxlRGljdChub2RlLCBmcmFtZSkge1xuICAgIHRoaXMuX2NvbXBpbGVBZ2dyZWdhdGUobm9kZSwgZnJhbWUsICd7JywgJ30nKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVQYWlyID0gZnVuY3Rpb24gY29tcGlsZVBhaXIobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIga2V5ID0gbm9kZS5rZXk7XG4gICAgdmFyIHZhbCA9IG5vZGUudmFsdWU7XG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIG5vZGVzLlN5bWJvbCkge1xuICAgICAga2V5ID0gbmV3IG5vZGVzLkxpdGVyYWwoa2V5LmxpbmVubywga2V5LmNvbG5vLCBrZXkudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoIShrZXkgaW5zdGFuY2VvZiBub2Rlcy5MaXRlcmFsICYmIHR5cGVvZiBrZXkudmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgdGhpcy5mYWlsKCdjb21waWxlUGFpcjogRGljdCBrZXlzIG11c3QgYmUgc3RyaW5ncyBvciBuYW1lcycsIGtleS5saW5lbm8sIGtleS5jb2xubyk7XG4gICAgfVxuICAgIHRoaXMuY29tcGlsZShrZXksIGZyYW1lKTtcbiAgICB0aGlzLl9lbWl0KCc6ICcpO1xuICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKHZhbCwgZnJhbWUpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUlubGluZUlmID0gZnVuY3Rpb24gY29tcGlsZUlubGluZUlmKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fZW1pdCgnKCcpO1xuICAgIHRoaXMuY29tcGlsZShub2RlLmNvbmQsIGZyYW1lKTtcbiAgICB0aGlzLl9lbWl0KCc/Jyk7XG4gICAgdGhpcy5jb21waWxlKG5vZGUuYm9keSwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJzonKTtcbiAgICBpZiAobm9kZS5lbHNlXyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb21waWxlKG5vZGUuZWxzZV8sIGZyYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdCgnXCJcIicpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0KCcpJyk7XG4gIH07XG4gIF9wcm90by5jb21waWxlSW4gPSBmdW5jdGlvbiBjb21waWxlSW4obm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLl9lbWl0KCdydW50aW1lLmluT3BlcmF0b3IoJyk7XG4gICAgdGhpcy5jb21waWxlKG5vZGUubGVmdCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJywnKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS5yaWdodCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJyknKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVJcyA9IGZ1bmN0aW9uIGNvbXBpbGVJcyhub2RlLCBmcmFtZSkge1xuICAgIC8vIGZpcnN0LCB3ZSBuZWVkIHRvIHRyeSB0byBnZXQgdGhlIG5hbWUgb2YgdGhlIHRlc3QgZnVuY3Rpb24sIGlmIGl0J3MgYVxuICAgIC8vIGNhbGxhYmxlIChpLmUuLCBoYXMgYXJncykgYW5kIG5vdCBhIHN5bWJvbC5cbiAgICB2YXIgcmlnaHQgPSBub2RlLnJpZ2h0Lm5hbWUgPyBub2RlLnJpZ2h0Lm5hbWUudmFsdWVcbiAgICAvLyBvdGhlcndpc2UgZ28gd2l0aCB0aGUgc3ltYm9sIHZhbHVlXG4gICAgOiBub2RlLnJpZ2h0LnZhbHVlO1xuICAgIHRoaXMuX2VtaXQoJ2Vudi5nZXRUZXN0KFwiJyArIHJpZ2h0ICsgJ1wiKS5jYWxsKGNvbnRleHQsICcpO1xuICAgIHRoaXMuY29tcGlsZShub2RlLmxlZnQsIGZyYW1lKTtcbiAgICAvLyBjb21waWxlIHRoZSBhcmd1bWVudHMgZm9yIHRoZSBjYWxsYWJsZSBpZiB0aGV5IGV4aXN0XG4gICAgaWYgKG5vZGUucmlnaHQuYXJncykge1xuICAgICAgdGhpcy5fZW1pdCgnLCcpO1xuICAgICAgdGhpcy5jb21waWxlKG5vZGUucmlnaHQuYXJncywgZnJhbWUpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0KCcpID09PSB0cnVlJyk7XG4gIH07XG4gIF9wcm90by5fYmluT3BFbWl0dGVyID0gZnVuY3Rpb24gX2Jpbk9wRW1pdHRlcihub2RlLCBmcmFtZSwgc3RyKSB7XG4gICAgdGhpcy5jb21waWxlKG5vZGUubGVmdCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoc3RyKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS5yaWdodCwgZnJhbWUpO1xuICB9XG5cbiAgLy8gZW5zdXJlIGNvbmNhdGVuYXRpb24gaW5zdGVhZCBvZiBhZGRpdGlvblxuICAvLyBieSBhZGRpbmcgZW1wdHkgc3RyaW5nIGluIGJldHdlZW5cbiAgO1xuICBfcHJvdG8uY29tcGlsZU9yID0gZnVuY3Rpb24gY29tcGlsZU9yKG5vZGUsIGZyYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jpbk9wRW1pdHRlcihub2RlLCBmcmFtZSwgJyB8fCAnKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVBbmQgPSBmdW5jdGlvbiBjb21waWxlQW5kKG5vZGUsIGZyYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jpbk9wRW1pdHRlcihub2RlLCBmcmFtZSwgJyAmJiAnKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVBZGQgPSBmdW5jdGlvbiBjb21waWxlQWRkKG5vZGUsIGZyYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jpbk9wRW1pdHRlcihub2RlLCBmcmFtZSwgJyArICcpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUNvbmNhdCA9IGZ1bmN0aW9uIGNvbXBpbGVDb25jYXQobm9kZSwgZnJhbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluT3BFbWl0dGVyKG5vZGUsIGZyYW1lLCAnICsgXCJcIiArICcpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZVN1YiA9IGZ1bmN0aW9uIGNvbXBpbGVTdWIobm9kZSwgZnJhbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluT3BFbWl0dGVyKG5vZGUsIGZyYW1lLCAnIC0gJyk7XG4gIH07XG4gIF9wcm90by5jb21waWxlTXVsID0gZnVuY3Rpb24gY29tcGlsZU11bChub2RlLCBmcmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9iaW5PcEVtaXR0ZXIobm9kZSwgZnJhbWUsICcgKiAnKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVEaXYgPSBmdW5jdGlvbiBjb21waWxlRGl2KG5vZGUsIGZyYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jpbk9wRW1pdHRlcihub2RlLCBmcmFtZSwgJyAvICcpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZU1vZCA9IGZ1bmN0aW9uIGNvbXBpbGVNb2Qobm9kZSwgZnJhbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluT3BFbWl0dGVyKG5vZGUsIGZyYW1lLCAnICUgJyk7XG4gIH07XG4gIF9wcm90by5jb21waWxlTm90ID0gZnVuY3Rpb24gY29tcGlsZU5vdChub2RlLCBmcmFtZSkge1xuICAgIHRoaXMuX2VtaXQoJyEnKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS50YXJnZXQsIGZyYW1lKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVGbG9vckRpdiA9IGZ1bmN0aW9uIGNvbXBpbGVGbG9vckRpdihub2RlLCBmcmFtZSkge1xuICAgIHRoaXMuX2VtaXQoJ01hdGguZmxvb3IoJyk7XG4gICAgdGhpcy5jb21waWxlKG5vZGUubGVmdCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJyAvICcpO1xuICAgIHRoaXMuY29tcGlsZShub2RlLnJpZ2h0LCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdCgnKScpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZVBvdyA9IGZ1bmN0aW9uIGNvbXBpbGVQb3cobm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLl9lbWl0KCdNYXRoLnBvdygnKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS5sZWZ0LCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdCgnLCAnKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS5yaWdodCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJyknKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVOZWcgPSBmdW5jdGlvbiBjb21waWxlTmVnKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fZW1pdCgnLScpO1xuICAgIHRoaXMuY29tcGlsZShub2RlLnRhcmdldCwgZnJhbWUpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZVBvcyA9IGZ1bmN0aW9uIGNvbXBpbGVQb3Mobm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLl9lbWl0KCcrJyk7XG4gICAgdGhpcy5jb21waWxlKG5vZGUudGFyZ2V0LCBmcmFtZSk7XG4gIH07XG4gIF9wcm90by5jb21waWxlQ29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBpbGVDb21wYXJlKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgdGhpcy5jb21waWxlKG5vZGUuZXhwciwgZnJhbWUpO1xuICAgIG5vZGUub3BzLmZvckVhY2goZnVuY3Rpb24gKG9wKSB7XG4gICAgICBfdGhpczUuX2VtaXQoXCIgXCIgKyBjb21wYXJlT3BzW29wLnR5cGVdICsgXCIgXCIpO1xuICAgICAgX3RoaXM1LmNvbXBpbGUob3AuZXhwciwgZnJhbWUpO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUxvb2t1cFZhbCA9IGZ1bmN0aW9uIGNvbXBpbGVMb29rdXBWYWwobm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLl9lbWl0KCdydW50aW1lLm1lbWJlckxvb2t1cCgoJyk7XG4gICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS50YXJnZXQsIGZyYW1lKTtcbiAgICB0aGlzLl9lbWl0KCcpLCcpO1xuICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUudmFsLCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdCgnKScpO1xuICB9O1xuICBfcHJvdG8uX2dldE5vZGVOYW1lID0gZnVuY3Rpb24gX2dldE5vZGVOYW1lKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUudHlwZW5hbWUpIHtcbiAgICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgICAgY2FzZSAnRnVuQ2FsbCc6XG4gICAgICAgIHJldHVybiAndGhlIHJldHVybiB2YWx1ZSBvZiAoJyArIHRoaXMuX2dldE5vZGVOYW1lKG5vZGUubmFtZSkgKyAnKSc7XG4gICAgICBjYXNlICdMb29rdXBWYWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZU5hbWUobm9kZS50YXJnZXQpICsgJ1tcIicgKyB0aGlzLl9nZXROb2RlTmFtZShub2RlLnZhbCkgKyAnXCJdJztcbiAgICAgIGNhc2UgJ0xpdGVyYWwnOlxuICAgICAgICByZXR1cm4gbm9kZS52YWx1ZS50b1N0cmluZygpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICctLWV4cHJlc3Npb24tLSc7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uY29tcGlsZUZ1bkNhbGwgPSBmdW5jdGlvbiBjb21waWxlRnVuQ2FsbChub2RlLCBmcmFtZSkge1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgbGluZS9jb2wgaW5mbyBhdCBydW50aW1lIGJ5IHNldHRpbmdzXG4gICAgLy8gdmFyaWFibGVzIHdpdGhpbiBhbiBleHByZXNzaW9uLiBBbiBleHByZXNzaW9uIGluIGphdmFzY3JpcHRcbiAgICAvLyBsaWtlICh4LCB5LCB6KSByZXR1cm5zIHRoZSBsYXN0IHZhbHVlLCBhbmQgeCBhbmQgeSBjYW4gYmVcbiAgICAvLyBhbnl0aGluZ1xuICAgIHRoaXMuX2VtaXQoJyhsaW5lbm8gPSAnICsgbm9kZS5saW5lbm8gKyAnLCBjb2xubyA9ICcgKyBub2RlLmNvbG5vICsgJywgJyk7XG4gICAgdGhpcy5fZW1pdCgncnVudGltZS5jYWxsV3JhcCgnKTtcbiAgICAvLyBDb21waWxlIGl0IGFzIG5vcm1hbC5cbiAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLm5hbWUsIGZyYW1lKTtcblxuICAgIC8vIE91dHB1dCB0aGUgbmFtZSBvZiB3aGF0IHdlJ3JlIGNhbGxpbmcgc28gd2UgY2FuIGdldCBmcmllbmRseSBlcnJvcnNcbiAgICAvLyBpZiB0aGUgbG9va3VwIGZhaWxzLlxuICAgIHRoaXMuX2VtaXQoJywgXCInICsgdGhpcy5fZ2V0Tm9kZU5hbWUobm9kZS5uYW1lKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCIsIGNvbnRleHQsICcpO1xuICAgIHRoaXMuX2NvbXBpbGVBZ2dyZWdhdGUobm9kZS5hcmdzLCBmcmFtZSwgJ1snLCAnXSknKTtcbiAgICB0aGlzLl9lbWl0KCcpJyk7XG4gIH07XG4gIF9wcm90by5jb21waWxlRmlsdGVyID0gZnVuY3Rpb24gY29tcGlsZUZpbHRlcihub2RlLCBmcmFtZSkge1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHRoaXMuYXNzZXJ0VHlwZShuYW1lLCBub2Rlcy5TeW1ib2wpO1xuICAgIHRoaXMuX2VtaXQoJ2Vudi5nZXRGaWx0ZXIoXCInICsgbmFtZS52YWx1ZSArICdcIikuY2FsbChjb250ZXh0LCAnKTtcbiAgICB0aGlzLl9jb21waWxlQWdncmVnYXRlKG5vZGUuYXJncywgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoJyknKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVGaWx0ZXJBc3luYyA9IGZ1bmN0aW9uIGNvbXBpbGVGaWx0ZXJBc3luYyhub2RlLCBmcmFtZSkge1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHZhciBzeW1ib2wgPSBub2RlLnN5bWJvbC52YWx1ZTtcbiAgICB0aGlzLmFzc2VydFR5cGUobmFtZSwgbm9kZXMuU3ltYm9sKTtcbiAgICBmcmFtZS5zZXQoc3ltYm9sLCBzeW1ib2wpO1xuICAgIHRoaXMuX2VtaXQoJ2Vudi5nZXRGaWx0ZXIoXCInICsgbmFtZS52YWx1ZSArICdcIikuY2FsbChjb250ZXh0LCAnKTtcbiAgICB0aGlzLl9jb21waWxlQWdncmVnYXRlKG5vZGUuYXJncywgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCcsICcgKyB0aGlzLl9tYWtlQ2FsbGJhY2soc3ltYm9sKSk7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUtleXdvcmRBcmdzID0gZnVuY3Rpb24gY29tcGlsZUtleXdvcmRBcmdzKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fZW1pdCgncnVudGltZS5tYWtlS2V5d29yZEFyZ3MoJyk7XG4gICAgdGhpcy5jb21waWxlRGljdChub2RlLCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdCgnKScpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZVNldCA9IGZ1bmN0aW9uIGNvbXBpbGVTZXQobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcbiAgICB2YXIgaWRzID0gW107XG5cbiAgICAvLyBMb29rdXAgdGhlIHZhcmlhYmxlIG5hbWVzIGZvciBlYWNoIGlkZW50aWZpZXIgYW5kIGNyZWF0ZVxuICAgIC8vIG5ldyBvbmVzIGlmIG5lY2Vzc2FyeVxuICAgIG5vZGUudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHZhciBuYW1lID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIGlkID0gZnJhbWUubG9va3VwKG5hbWUpO1xuICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWQgPSBfdGhpczYuX3RtcGlkKCk7XG5cbiAgICAgICAgLy8gTm90ZTogVGhpcyByZWxpZXMgb24ganMgYWxsb3dpbmcgc2NvcGUgYWNyb3NzXG4gICAgICAgIC8vIGJsb2NrcywgaW4gY2FzZSB0aGlzIGlzIGNyZWF0ZWQgaW5zaWRlIGFuIGBpZmBcbiAgICAgICAgX3RoaXM2Ll9lbWl0TGluZSgndmFyICcgKyBpZCArICc7Jyk7XG4gICAgICB9XG4gICAgICBpZHMucHVzaChpZCk7XG4gICAgfSk7XG4gICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgIHRoaXMuX2VtaXQoaWRzLmpvaW4oJyA9ICcpICsgJyA9ICcpO1xuICAgICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS52YWx1ZSwgZnJhbWUpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoJzsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdChpZHMuam9pbignID0gJykgKyAnID0gJyk7XG4gICAgICB0aGlzLmNvbXBpbGUobm9kZS5ib2R5LCBmcmFtZSk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnOycpO1xuICAgIH1cbiAgICBub2RlLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0LCBpKSB7XG4gICAgICB2YXIgaWQgPSBpZHNbaV07XG4gICAgICB2YXIgbmFtZSA9IHRhcmdldC52YWx1ZTtcblxuICAgICAgLy8gV2UgYXJlIHJ1bm5pbmcgdGhpcyBmb3IgZXZlcnkgdmFyLCBidXQgaXQncyB2ZXJ5XG4gICAgICAvLyB1bmNvbW1vbiB0byBhc3NpZ24gdG8gbXVsdGlwbGUgdmFycyBhbnl3YXlcbiAgICAgIF90aGlzNi5fZW1pdExpbmUoXCJmcmFtZS5zZXQoXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgXCIgKyBpZCArIFwiLCB0cnVlKTtcIik7XG4gICAgICBfdGhpczYuX2VtaXRMaW5lKCdpZihmcmFtZS50b3BMZXZlbCkgeycpO1xuICAgICAgX3RoaXM2Ll9lbWl0TGluZShcImNvbnRleHQuc2V0VmFyaWFibGUoXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgXCIgKyBpZCArIFwiKTtcIik7XG4gICAgICBfdGhpczYuX2VtaXRMaW5lKCd9Jyk7XG4gICAgICBpZiAobmFtZS5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICBfdGhpczYuX2VtaXRMaW5lKCdpZihmcmFtZS50b3BMZXZlbCkgeycpO1xuICAgICAgICBfdGhpczYuX2VtaXRMaW5lKFwiY29udGV4dC5hZGRFeHBvcnQoXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgXCIgKyBpZCArIFwiKTtcIik7XG4gICAgICAgIF90aGlzNi5fZW1pdExpbmUoJ30nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVTd2l0Y2ggPSBmdW5jdGlvbiBjb21waWxlU3dpdGNoKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG4gICAgdGhpcy5fZW1pdCgnc3dpdGNoICgnKTtcbiAgICB0aGlzLmNvbXBpbGUobm9kZS5leHByLCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdCgnKSB7Jyk7XG4gICAgbm9kZS5jYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICBfdGhpczcuX2VtaXQoJ2Nhc2UgJyk7XG4gICAgICBfdGhpczcuY29tcGlsZShjLmNvbmQsIGZyYW1lKTtcbiAgICAgIF90aGlzNy5fZW1pdCgnOiAnKTtcbiAgICAgIF90aGlzNy5jb21waWxlKGMuYm9keSwgZnJhbWUpO1xuICAgICAgLy8gcHJlc2VydmUgZmFsbC10aHJvdWdoc1xuICAgICAgaWYgKGMuYm9keS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXM3Ll9lbWl0TGluZSgnYnJlYWs7Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG5vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fZW1pdCgnZGVmYXVsdDonKTtcbiAgICAgIHRoaXMuY29tcGlsZShub2RlLmRlZmF1bHQsIGZyYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdCgnfScpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUlmID0gZnVuY3Rpb24gY29tcGlsZUlmKG5vZGUsIGZyYW1lLCBhc3luYykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuICAgIHRoaXMuX2VtaXQoJ2lmKCcpO1xuICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUuY29uZCwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCcpIHsnKTtcbiAgICB0aGlzLl93aXRoU2NvcGVkU3ludGF4KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzOC5jb21waWxlKG5vZGUuYm9keSwgZnJhbWUpO1xuICAgICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIF90aGlzOC5fZW1pdCgnY2IoKScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChub2RlLmVsc2VfKSB7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnfVxcbmVsc2UgeycpO1xuICAgICAgdGhpcy5fd2l0aFNjb3BlZFN5bnRheChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzOC5jb21waWxlKG5vZGUuZWxzZV8sIGZyYW1lKTtcbiAgICAgICAgaWYgKGFzeW5jKSB7XG4gICAgICAgICAgX3RoaXM4Ll9lbWl0KCdjYigpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYXN5bmMpIHtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKCd9XFxuZWxzZSB7Jyk7XG4gICAgICB0aGlzLl9lbWl0KCdjYigpJyk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRMaW5lKCd9Jyk7XG4gIH07XG4gIF9wcm90by5jb21waWxlSWZBc3luYyA9IGZ1bmN0aW9uIGNvbXBpbGVJZkFzeW5jKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fZW1pdCgnKGZ1bmN0aW9uKGNiKSB7Jyk7XG4gICAgdGhpcy5jb21waWxlSWYobm9kZSwgZnJhbWUsIHRydWUpO1xuICAgIHRoaXMuX2VtaXQoJ30pKCcgKyB0aGlzLl9tYWtlQ2FsbGJhY2soKSk7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICB9O1xuICBfcHJvdG8uX2VtaXRMb29wQmluZGluZ3MgPSBmdW5jdGlvbiBfZW1pdExvb3BCaW5kaW5ncyhub2RlLCBhcnIsIGksIGxlbikge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuICAgIHZhciBiaW5kaW5ncyA9IFt7XG4gICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgdmFsOiBpICsgXCIgKyAxXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnaW5kZXgwJyxcbiAgICAgIHZhbDogaVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdyZXZpbmRleCcsXG4gICAgICB2YWw6IGxlbiArIFwiIC0gXCIgKyBpXG4gICAgfSwge1xuICAgICAgbmFtZTogJ3JldmluZGV4MCcsXG4gICAgICB2YWw6IGxlbiArIFwiIC0gXCIgKyBpICsgXCIgLSAxXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZmlyc3QnLFxuICAgICAgdmFsOiBpICsgXCIgPT09IDBcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdsYXN0JyxcbiAgICAgIHZhbDogaSArIFwiID09PSBcIiArIGxlbiArIFwiIC0gMVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgICB2YWw6IGxlblxuICAgIH1dO1xuICAgIGJpbmRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgIF90aGlzOS5fZW1pdExpbmUoXCJmcmFtZS5zZXQoXFxcImxvb3AuXCIgKyBiLm5hbWUgKyBcIlxcXCIsIFwiICsgYi52YWwgKyBcIik7XCIpO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUZvciA9IGZ1bmN0aW9uIGNvbXBpbGVGb3Iobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG4gICAgLy8gU29tZSBvZiB0aGlzIGNvZGUgaXMgdWdseSwgYnV0IGl0IGtlZXBzIHRoZSBnZW5lcmF0ZWQgY29kZVxuICAgIC8vIGFzIGZhc3QgYXMgcG9zc2libGUuIEZvckFzeW5jIGFsc28gc2hhcmVzIHNvbWUgb2YgdGhpcywgYnV0XG4gICAgLy8gbm90IG11Y2guXG5cbiAgICB2YXIgaSA9IHRoaXMuX3RtcGlkKCk7XG4gICAgdmFyIGxlbiA9IHRoaXMuX3RtcGlkKCk7XG4gICAgdmFyIGFyciA9IHRoaXMuX3RtcGlkKCk7XG4gICAgZnJhbWUgPSBmcmFtZS5wdXNoKCk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ2ZyYW1lID0gZnJhbWUucHVzaCgpOycpO1xuICAgIHRoaXMuX2VtaXQoXCJ2YXIgXCIgKyBhcnIgKyBcIiA9IFwiKTtcbiAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLmFyciwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCc7Jyk7XG4gICAgdGhpcy5fZW1pdChcImlmKFwiICsgYXJyICsgXCIpIHtcIik7XG4gICAgdGhpcy5fZW1pdExpbmUoYXJyICsgJyA9IHJ1bnRpbWUuZnJvbUl0ZXJhdG9yKCcgKyBhcnIgKyAnKTsnKTtcblxuICAgIC8vIElmIG11bHRpcGxlIG5hbWVzIGFyZSBwYXNzZWQsIHdlIG5lZWQgdG8gYmluZCB0aGVtXG4gICAgLy8gYXBwcm9wcmlhdGVseVxuICAgIGlmIChub2RlLm5hbWUgaW5zdGFuY2VvZiBub2Rlcy5BcnJheSkge1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJ2YXIgXCIgKyBpICsgXCI7XCIpO1xuXG4gICAgICAvLyBUaGUgb2JqZWN0IGNvdWxkIGJlIGFuIGFycm95IG9yIG9iamVjdC4gTm90ZSB0aGF0IHRoZVxuICAgICAgLy8gYm9keSBvZiB0aGUgbG9vcCBpcyBkdXBsaWNhdGVkIGZvciBlYWNoIGNvbmRpdGlvbiwgYnV0XG4gICAgICAvLyB3ZSBhcmUgb3B0aW1pemluZyBmb3Igc3BlZWQgb3ZlciBzaXplLlxuICAgICAgdGhpcy5fZW1pdExpbmUoXCJpZihydW50aW1lLmlzQXJyYXkoXCIgKyBhcnIgKyBcIikpIHtcIik7XG4gICAgICB0aGlzLl9lbWl0TGluZShcInZhciBcIiArIGxlbiArIFwiID0gXCIgKyBhcnIgKyBcIi5sZW5ndGg7XCIpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJmb3IoXCIgKyBpICsgXCI9MDsgXCIgKyBpICsgXCIgPCBcIiArIGFyciArIFwiLmxlbmd0aDsgXCIgKyBpICsgXCIrKykge1wiKTtcblxuICAgICAgLy8gQmluZCBlYWNoIGRlY2xhcmVkIHZhclxuICAgICAgbm9kZS5uYW1lLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCB1KSB7XG4gICAgICAgIHZhciB0aWQgPSBfdGhpczEwLl90bXBpZCgpO1xuICAgICAgICBfdGhpczEwLl9lbWl0TGluZShcInZhciBcIiArIHRpZCArIFwiID0gXCIgKyBhcnIgKyBcIltcIiArIGkgKyBcIl1bXCIgKyB1ICsgXCJdO1wiKTtcbiAgICAgICAgX3RoaXMxMC5fZW1pdExpbmUoXCJmcmFtZS5zZXQoXFxcIlwiICsgY2hpbGQgKyBcIlxcXCIsIFwiICsgYXJyICsgXCJbXCIgKyBpICsgXCJdW1wiICsgdSArIFwiXSk7XCIpO1xuICAgICAgICBmcmFtZS5zZXQobm9kZS5uYW1lLmNoaWxkcmVuW3VdLnZhbHVlLCB0aWQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9lbWl0TG9vcEJpbmRpbmdzKG5vZGUsIGFyciwgaSwgbGVuKTtcbiAgICAgIHRoaXMuX3dpdGhTY29wZWRTeW50YXgoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczEwLmNvbXBpbGUobm9kZS5ib2R5LCBmcmFtZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKCd9Jyk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnfSBlbHNlIHsnKTtcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5L3ZhbHVlcyBvZiBhbiBvYmplY3RcbiAgICAgIHZhciBfbm9kZSRuYW1lJGNoaWxkcmVuID0gbm9kZS5uYW1lLmNoaWxkcmVuLFxuICAgICAgICBrZXkgPSBfbm9kZSRuYW1lJGNoaWxkcmVuWzBdLFxuICAgICAgICB2YWwgPSBfbm9kZSRuYW1lJGNoaWxkcmVuWzFdO1xuICAgICAgdmFyIGsgPSB0aGlzLl90bXBpZCgpO1xuICAgICAgdmFyIHYgPSB0aGlzLl90bXBpZCgpO1xuICAgICAgZnJhbWUuc2V0KGtleS52YWx1ZSwgayk7XG4gICAgICBmcmFtZS5zZXQodmFsLnZhbHVlLCB2KTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKGkgKyBcIiA9IC0xO1wiKTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwidmFyIFwiICsgbGVuICsgXCIgPSBydW50aW1lLmtleXMoXCIgKyBhcnIgKyBcIikubGVuZ3RoO1wiKTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiZm9yKHZhciBcIiArIGsgKyBcIiBpbiBcIiArIGFyciArIFwiKSB7XCIpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoaSArIFwiKys7XCIpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJ2YXIgXCIgKyB2ICsgXCIgPSBcIiArIGFyciArIFwiW1wiICsgayArIFwiXTtcIik7XG4gICAgICB0aGlzLl9lbWl0TGluZShcImZyYW1lLnNldChcXFwiXCIgKyBrZXkudmFsdWUgKyBcIlxcXCIsIFwiICsgayArIFwiKTtcIik7XG4gICAgICB0aGlzLl9lbWl0TGluZShcImZyYW1lLnNldChcXFwiXCIgKyB2YWwudmFsdWUgKyBcIlxcXCIsIFwiICsgdiArIFwiKTtcIik7XG4gICAgICB0aGlzLl9lbWl0TG9vcEJpbmRpbmdzKG5vZGUsIGFyciwgaSwgbGVuKTtcbiAgICAgIHRoaXMuX3dpdGhTY29wZWRTeW50YXgoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczEwLmNvbXBpbGUobm9kZS5ib2R5LCBmcmFtZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKCd9Jyk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnfScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHR5cGljYWwgYXJyYXkgaXRlcmF0aW9uXG4gICAgICB2YXIgX3YgPSB0aGlzLl90bXBpZCgpO1xuICAgICAgZnJhbWUuc2V0KG5vZGUubmFtZS52YWx1ZSwgX3YpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJ2YXIgXCIgKyBsZW4gKyBcIiA9IFwiICsgYXJyICsgXCIubGVuZ3RoO1wiKTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiZm9yKHZhciBcIiArIGkgKyBcIj0wOyBcIiArIGkgKyBcIiA8IFwiICsgYXJyICsgXCIubGVuZ3RoOyBcIiArIGkgKyBcIisrKSB7XCIpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJ2YXIgXCIgKyBfdiArIFwiID0gXCIgKyBhcnIgKyBcIltcIiArIGkgKyBcIl07XCIpO1xuICAgICAgdGhpcy5fZW1pdExpbmUoXCJmcmFtZS5zZXQoXFxcIlwiICsgbm9kZS5uYW1lLnZhbHVlICsgXCJcXFwiLCBcIiArIF92ICsgXCIpO1wiKTtcbiAgICAgIHRoaXMuX2VtaXRMb29wQmluZGluZ3Mobm9kZSwgYXJyLCBpLCBsZW4pO1xuICAgICAgdGhpcy5fd2l0aFNjb3BlZFN5bnRheChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTAuY29tcGlsZShub2RlLmJvZHksIGZyYW1lKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZW1pdExpbmUoJ30nKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdExpbmUoJ30nKTtcbiAgICBpZiAobm9kZS5lbHNlXykge1xuICAgICAgdGhpcy5fZW1pdExpbmUoJ2lmICghJyArIGxlbiArICcpIHsnKTtcbiAgICAgIHRoaXMuY29tcGlsZShub2RlLmVsc2VfLCBmcmFtZSk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnfScpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0TGluZSgnZnJhbWUgPSBmcmFtZS5wb3AoKTsnKTtcbiAgfTtcbiAgX3Byb3RvLl9jb21waWxlQXN5bmNMb29wID0gZnVuY3Rpb24gX2NvbXBpbGVBc3luY0xvb3Aobm9kZSwgZnJhbWUsIHBhcmFsbGVsKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuICAgIC8vIFRoaXMgc2hhcmVzIHNvbWUgY29kZSB3aXRoIHRoZSBGb3IgdGFnLCBidXQgbm90IGVub3VnaCB0b1xuICAgIC8vIHdvcnJ5IGFib3V0LiBUaGlzIGl0ZXJhdGVzIGFjcm9zcyBhbiBvYmplY3QgYXN5bmNocm9ub3VzbHksXG4gICAgLy8gYnV0IG5vdCBpbiBwYXJhbGxlbC5cblxuICAgIHZhciBpID0gdGhpcy5fdG1waWQoKTtcbiAgICB2YXIgbGVuID0gdGhpcy5fdG1waWQoKTtcbiAgICB2YXIgYXJyID0gdGhpcy5fdG1waWQoKTtcbiAgICB2YXIgYXN5bmNNZXRob2QgPSBwYXJhbGxlbCA/ICdhc3luY0FsbCcgOiAnYXN5bmNFYWNoJztcbiAgICBmcmFtZSA9IGZyYW1lLnB1c2goKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnZnJhbWUgPSBmcmFtZS5wdXNoKCk7Jyk7XG4gICAgdGhpcy5fZW1pdCgndmFyICcgKyBhcnIgKyAnID0gcnVudGltZS5mcm9tSXRlcmF0b3IoJyk7XG4gICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS5hcnIsIGZyYW1lKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnKTsnKTtcbiAgICBpZiAobm9kZS5uYW1lIGluc3RhbmNlb2Ygbm9kZXMuQXJyYXkpIHtcbiAgICAgIHZhciBhcnJheUxlbiA9IG5vZGUubmFtZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICB0aGlzLl9lbWl0KFwicnVudGltZS5cIiArIGFzeW5jTWV0aG9kICsgXCIoXCIgKyBhcnIgKyBcIiwgXCIgKyBhcnJheUxlbiArIFwiLCBmdW5jdGlvbihcIik7XG4gICAgICBub2RlLm5hbWUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBfdGhpczExLl9lbWl0KG5hbWUudmFsdWUgKyBcIixcIik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2VtaXQoaSArICcsJyArIGxlbiArICcsbmV4dCkgeycpO1xuICAgICAgbm9kZS5uYW1lLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGlkID0gbmFtZS52YWx1ZTtcbiAgICAgICAgZnJhbWUuc2V0KGlkLCBpZCk7XG4gICAgICAgIF90aGlzMTEuX2VtaXRMaW5lKFwiZnJhbWUuc2V0KFxcXCJcIiArIGlkICsgXCJcXFwiLCBcIiArIGlkICsgXCIpO1wiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWQgPSBub2RlLm5hbWUudmFsdWU7XG4gICAgICB0aGlzLl9lbWl0TGluZShcInJ1bnRpbWUuXCIgKyBhc3luY01ldGhvZCArIFwiKFwiICsgYXJyICsgXCIsIDEsIGZ1bmN0aW9uKFwiICsgaWQgKyBcIiwgXCIgKyBpICsgXCIsIFwiICsgbGVuICsgXCIsbmV4dCkge1wiKTtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKCdmcmFtZS5zZXQoXCInICsgaWQgKyAnXCIsICcgKyBpZCArICcpOycpO1xuICAgICAgZnJhbWUuc2V0KGlkLCBpZCk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRMb29wQmluZGluZ3Mobm9kZSwgYXJyLCBpLCBsZW4pO1xuICAgIHRoaXMuX3dpdGhTY29wZWRTeW50YXgoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJ1ZjtcbiAgICAgIGlmIChwYXJhbGxlbCkge1xuICAgICAgICBidWYgPSBfdGhpczExLl9wdXNoQnVmZmVyKCk7XG4gICAgICB9XG4gICAgICBfdGhpczExLmNvbXBpbGUobm9kZS5ib2R5LCBmcmFtZSk7XG4gICAgICBfdGhpczExLl9lbWl0TGluZSgnbmV4dCgnICsgaSArIChidWYgPyAnLCcgKyBidWYgOiAnJykgKyAnKTsnKTtcbiAgICAgIGlmIChwYXJhbGxlbCkge1xuICAgICAgICBfdGhpczExLl9wb3BCdWZmZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fdG1waWQoKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnfSwgJyArIHRoaXMuX21ha2VDYWxsYmFjayhvdXRwdXQpKTtcbiAgICB0aGlzLl9hZGRTY29wZUxldmVsKCk7XG4gICAgaWYgKHBhcmFsbGVsKSB7XG4gICAgICB0aGlzLl9lbWl0TGluZSh0aGlzLmJ1ZmZlciArICcgKz0gJyArIG91dHB1dCArICc7Jyk7XG4gICAgfVxuICAgIGlmIChub2RlLmVsc2VfKSB7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnaWYgKCEnICsgYXJyICsgJy5sZW5ndGgpIHsnKTtcbiAgICAgIHRoaXMuY29tcGlsZShub2RlLmVsc2VfLCBmcmFtZSk7XG4gICAgICB0aGlzLl9lbWl0TGluZSgnfScpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0TGluZSgnZnJhbWUgPSBmcmFtZS5wb3AoKTsnKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVBc3luY0VhY2ggPSBmdW5jdGlvbiBjb21waWxlQXN5bmNFYWNoKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fY29tcGlsZUFzeW5jTG9vcChub2RlLCBmcmFtZSk7XG4gIH07XG4gIF9wcm90by5jb21waWxlQXN5bmNBbGwgPSBmdW5jdGlvbiBjb21waWxlQXN5bmNBbGwobm9kZSwgZnJhbWUpIHtcbiAgICB0aGlzLl9jb21waWxlQXN5bmNMb29wKG5vZGUsIGZyYW1lLCB0cnVlKTtcbiAgfTtcbiAgX3Byb3RvLl9jb21waWxlTWFjcm8gPSBmdW5jdGlvbiBfY29tcGlsZU1hY3JvKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIF90aGlzMTIgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGt3YXJncyA9IG51bGw7XG4gICAgdmFyIGZ1bmNJZCA9ICdtYWNyb18nICsgdGhpcy5fdG1waWQoKTtcbiAgICB2YXIga2VlcEZyYW1lID0gZnJhbWUgIT09IHVuZGVmaW5lZDtcblxuICAgIC8vIFR5cGUgY2hlY2sgdGhlIGRlZmluaXRpb24gb2YgdGhlIGFyZ3NcbiAgICBub2RlLmFyZ3MuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYXJnLCBpKSB7XG4gICAgICBpZiAoaSA9PT0gbm9kZS5hcmdzLmNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgYXJnIGluc3RhbmNlb2Ygbm9kZXMuRGljdCkge1xuICAgICAgICBrd2FyZ3MgPSBhcmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczEyLmFzc2VydFR5cGUoYXJnLCBub2Rlcy5TeW1ib2wpO1xuICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVhbE5hbWVzID0gW10uY29uY2F0KGFyZ3MubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gXCJsX1wiICsgbi52YWx1ZTtcbiAgICB9KSwgWydrd2FyZ3MnXSk7XG5cbiAgICAvLyBRdW90ZWQgYXJndW1lbnQgbmFtZXNcbiAgICB2YXIgYXJnTmFtZXMgPSBhcmdzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiICsgbi52YWx1ZSArIFwiXFxcIlwiO1xuICAgIH0pO1xuICAgIHZhciBrd2FyZ05hbWVzID0gKGt3YXJncyAmJiBrd2FyZ3MuY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiICsgbi5rZXkudmFsdWUgKyBcIlxcXCJcIjtcbiAgICB9KTtcblxuICAgIC8vIFdlIHBhc3MgYSBmdW5jdGlvbiB0byBtYWtlTWFjcm8gd2hpY2ggZGVzdHJ1Y3R1cmVzIHRoZVxuICAgIC8vIGFyZ3VtZW50cyBzbyBzdXBwb3J0IHNldHRpbmcgcG9zaXRpb25hbCBhcmdzIHdpdGgga2V5d29yZHNcbiAgICAvLyBhcmdzIGFuZCBwYXNzaW5nIGtleXdvcmQgYXJncyBhcyBwb3NpdGlvbmFsIGFyZ3NcbiAgICAvLyAoZXNzZW50aWFsbHkgZGVmYXVsdCB2YWx1ZXMpLiBTZWUgcnVudGltZS5qcy5cbiAgICB2YXIgY3VyckZyYW1lO1xuICAgIGlmIChrZWVwRnJhbWUpIHtcbiAgICAgIGN1cnJGcmFtZSA9IGZyYW1lLnB1c2godHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJGcmFtZSA9IG5ldyBGcmFtZSgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0TGluZXMoXCJ2YXIgXCIgKyBmdW5jSWQgKyBcIiA9IHJ1bnRpbWUubWFrZU1hY3JvKFwiLCBcIltcIiArIGFyZ05hbWVzLmpvaW4oJywgJykgKyBcIl0sIFwiLCBcIltcIiArIGt3YXJnTmFtZXMuam9pbignLCAnKSArIFwiXSwgXCIsIFwiZnVuY3Rpb24gKFwiICsgcmVhbE5hbWVzLmpvaW4oJywgJykgKyBcIikge1wiLCAndmFyIGNhbGxlckZyYW1lID0gZnJhbWU7JywgJ2ZyYW1lID0gJyArIChrZWVwRnJhbWUgPyAnZnJhbWUucHVzaCh0cnVlKTsnIDogJ25ldyBydW50aW1lLkZyYW1lKCk7JyksICdrd2FyZ3MgPSBrd2FyZ3MgfHwge307JywgJ2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa3dhcmdzLCBcImNhbGxlclwiKSkgeycsICdmcmFtZS5zZXQoXCJjYWxsZXJcIiwga3dhcmdzLmNhbGxlcik7IH0nKTtcblxuICAgIC8vIEV4cG9zZSB0aGUgYXJndW1lbnRzIHRvIHRoZSB0ZW1wbGF0ZS4gRG9uJ3QgbmVlZCB0byB1c2VcbiAgICAvLyByYW5kb20gbmFtZXMgYmVjYXVzZSB0aGUgZnVuY3Rpb25cbiAgICAvLyB3aWxsIGNyZWF0ZSBhIG5ldyBydW4tdGltZSBzY29wZSBmb3IgdXNcbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgX3RoaXMxMi5fZW1pdExpbmUoXCJmcmFtZS5zZXQoXFxcIlwiICsgYXJnLnZhbHVlICsgXCJcXFwiLCBsX1wiICsgYXJnLnZhbHVlICsgXCIpO1wiKTtcbiAgICAgIGN1cnJGcmFtZS5zZXQoYXJnLnZhbHVlLCBcImxfXCIgKyBhcmcudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBrZXl3b3JkIGFyZ3VtZW50c1xuICAgIGlmIChrd2FyZ3MpIHtcbiAgICAgIGt3YXJncy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgIHZhciBuYW1lID0gcGFpci5rZXkudmFsdWU7XG4gICAgICAgIF90aGlzMTIuX2VtaXQoXCJmcmFtZS5zZXQoXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgXCIpO1xuICAgICAgICBfdGhpczEyLl9lbWl0KFwiT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGt3YXJncywgXFxcIlwiICsgbmFtZSArIFwiXFxcIilcIik7XG4gICAgICAgIF90aGlzMTIuX2VtaXQoXCIgPyBrd2FyZ3NbXFxcIlwiICsgbmFtZSArIFwiXFxcIl0gOiBcIik7XG4gICAgICAgIF90aGlzMTIuX2NvbXBpbGVFeHByZXNzaW9uKHBhaXIudmFsdWUsIGN1cnJGcmFtZSk7XG4gICAgICAgIF90aGlzMTIuX2VtaXQoJyk7Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGJ1ZmZlcklkID0gdGhpcy5fcHVzaEJ1ZmZlcigpO1xuICAgIHRoaXMuX3dpdGhTY29wZWRTeW50YXgoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMxMi5jb21waWxlKG5vZGUuYm9keSwgY3VyckZyYW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbWl0TGluZSgnZnJhbWUgPSAnICsgKGtlZXBGcmFtZSA/ICdmcmFtZS5wb3AoKTsnIDogJ2NhbGxlckZyYW1lOycpKTtcbiAgICB0aGlzLl9lbWl0TGluZShcInJldHVybiBuZXcgcnVudGltZS5TYWZlU3RyaW5nKFwiICsgYnVmZmVySWQgKyBcIik7XCIpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd9KTsnKTtcbiAgICB0aGlzLl9wb3BCdWZmZXIoKTtcbiAgICByZXR1cm4gZnVuY0lkO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZU1hY3JvID0gZnVuY3Rpb24gY29tcGlsZU1hY3JvKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIGZ1bmNJZCA9IHRoaXMuX2NvbXBpbGVNYWNybyhub2RlKTtcblxuICAgIC8vIEV4cG9zZSB0aGUgbWFjcm8gdG8gdGhlIHRlbXBsYXRlc1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lLnZhbHVlO1xuICAgIGZyYW1lLnNldChuYW1lLCBmdW5jSWQpO1xuICAgIGlmIChmcmFtZS5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiZnJhbWUuc2V0KFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIFwiICsgZnVuY0lkICsgXCIpO1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUubmFtZS52YWx1ZS5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICB0aGlzLl9lbWl0TGluZShcImNvbnRleHQuYWRkRXhwb3J0KFxcXCJcIiArIG5hbWUgKyBcIlxcXCIpO1wiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiY29udGV4dC5zZXRWYXJpYWJsZShcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBcIiArIGZ1bmNJZCArIFwiKTtcIik7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uY29tcGlsZUNhbGxlciA9IGZ1bmN0aW9uIGNvbXBpbGVDYWxsZXIobm9kZSwgZnJhbWUpIHtcbiAgICAvLyBiYXNpY2FsbHkgYW4gYW5vbnltb3VzIFwibWFjcm8gZXhwcmVzc2lvblwiXG4gICAgdGhpcy5fZW1pdCgnKGZ1bmN0aW9uICgpeycpO1xuICAgIHZhciBmdW5jSWQgPSB0aGlzLl9jb21waWxlTWFjcm8obm9kZSwgZnJhbWUpO1xuICAgIHRoaXMuX2VtaXQoXCJyZXR1cm4gXCIgKyBmdW5jSWQgKyBcIjt9KSgpXCIpO1xuICB9O1xuICBfcHJvdG8uX2NvbXBpbGVHZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9jb21waWxlR2V0VGVtcGxhdGUobm9kZSwgZnJhbWUsIGVhZ2VyQ29tcGlsZSwgaWdub3JlTWlzc2luZykge1xuICAgIHZhciBwYXJlbnRUZW1wbGF0ZUlkID0gdGhpcy5fdG1waWQoKTtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHRoaXMuX3RlbXBsYXRlTmFtZSgpO1xuICAgIHZhciBjYiA9IHRoaXMuX21ha2VDYWxsYmFjayhwYXJlbnRUZW1wbGF0ZUlkKTtcbiAgICB2YXIgZWFnZXJDb21waWxlQXJnID0gZWFnZXJDb21waWxlID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB2YXIgaWdub3JlTWlzc2luZ0FyZyA9IGlnbm9yZU1pc3NpbmcgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIHRoaXMuX2VtaXQoJ2Vudi5nZXRUZW1wbGF0ZSgnKTtcbiAgICB0aGlzLl9jb21waWxlRXhwcmVzc2lvbihub2RlLnRlbXBsYXRlLCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdExpbmUoXCIsIFwiICsgZWFnZXJDb21waWxlQXJnICsgXCIsIFwiICsgcGFyZW50TmFtZSArIFwiLCBcIiArIGlnbm9yZU1pc3NpbmdBcmcgKyBcIiwgXCIgKyBjYik7XG4gICAgcmV0dXJuIHBhcmVudFRlbXBsYXRlSWQ7XG4gIH07XG4gIF9wcm90by5jb21waWxlSW1wb3J0ID0gZnVuY3Rpb24gY29tcGlsZUltcG9ydChub2RlLCBmcmFtZSkge1xuICAgIHZhciB0YXJnZXQgPSBub2RlLnRhcmdldC52YWx1ZTtcbiAgICB2YXIgaWQgPSB0aGlzLl9jb21waWxlR2V0VGVtcGxhdGUobm9kZSwgZnJhbWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICAgIHRoaXMuX2VtaXRMaW5lKGlkICsgJy5nZXRFeHBvcnRlZCgnICsgKG5vZGUud2l0aENvbnRleHQgPyAnY29udGV4dC5nZXRWYXJpYWJsZXMoKSwgZnJhbWUsICcgOiAnJykgKyB0aGlzLl9tYWtlQ2FsbGJhY2soaWQpKTtcbiAgICB0aGlzLl9hZGRTY29wZUxldmVsKCk7XG4gICAgZnJhbWUuc2V0KHRhcmdldCwgaWQpO1xuICAgIGlmIChmcmFtZS5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiZnJhbWUuc2V0KFxcXCJcIiArIHRhcmdldCArIFwiXFxcIiwgXCIgKyBpZCArIFwiKTtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRMaW5lKFwiY29udGV4dC5zZXRWYXJpYWJsZShcXFwiXCIgKyB0YXJnZXQgKyBcIlxcXCIsIFwiICsgaWQgKyBcIik7XCIpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVGcm9tSW1wb3J0ID0gZnVuY3Rpb24gY29tcGlsZUZyb21JbXBvcnQobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIgX3RoaXMxMyA9IHRoaXM7XG4gICAgdmFyIGltcG9ydGVkSWQgPSB0aGlzLl9jb21waWxlR2V0VGVtcGxhdGUobm9kZSwgZnJhbWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICAgIHRoaXMuX2VtaXRMaW5lKGltcG9ydGVkSWQgKyAnLmdldEV4cG9ydGVkKCcgKyAobm9kZS53aXRoQ29udGV4dCA/ICdjb250ZXh0LmdldFZhcmlhYmxlcygpLCBmcmFtZSwgJyA6ICcnKSArIHRoaXMuX21ha2VDYWxsYmFjayhpbXBvcnRlZElkKSk7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICAgIG5vZGUubmFtZXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmFtZU5vZGUpIHtcbiAgICAgIHZhciBuYW1lO1xuICAgICAgdmFyIGFsaWFzO1xuICAgICAgdmFyIGlkID0gX3RoaXMxMy5fdG1waWQoKTtcbiAgICAgIGlmIChuYW1lTm9kZSBpbnN0YW5jZW9mIG5vZGVzLlBhaXIpIHtcbiAgICAgICAgbmFtZSA9IG5hbWVOb2RlLmtleS52YWx1ZTtcbiAgICAgICAgYWxpYXMgPSBuYW1lTm9kZS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBuYW1lTm9kZS52YWx1ZTtcbiAgICAgICAgYWxpYXMgPSBuYW1lO1xuICAgICAgfVxuICAgICAgX3RoaXMxMy5fZW1pdExpbmUoXCJpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXCIgKyBpbXBvcnRlZElkICsgXCIsIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIpKSB7XCIpO1xuICAgICAgX3RoaXMxMy5fZW1pdExpbmUoXCJ2YXIgXCIgKyBpZCArIFwiID0gXCIgKyBpbXBvcnRlZElkICsgXCIuXCIgKyBuYW1lICsgXCI7XCIpO1xuICAgICAgX3RoaXMxMy5fZW1pdExpbmUoJ30gZWxzZSB7Jyk7XG4gICAgICBfdGhpczEzLl9lbWl0TGluZShcImNiKG5ldyBFcnJvcihcXFwiY2Fubm90IGltcG9ydCAnXCIgKyBuYW1lICsgXCInXFxcIikpOyByZXR1cm47XCIpO1xuICAgICAgX3RoaXMxMy5fZW1pdExpbmUoJ30nKTtcbiAgICAgIGZyYW1lLnNldChhbGlhcywgaWQpO1xuICAgICAgaWYgKGZyYW1lLnBhcmVudCkge1xuICAgICAgICBfdGhpczEzLl9lbWl0TGluZShcImZyYW1lLnNldChcXFwiXCIgKyBhbGlhcyArIFwiXFxcIiwgXCIgKyBpZCArIFwiKTtcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczEzLl9lbWl0TGluZShcImNvbnRleHQuc2V0VmFyaWFibGUoXFxcIlwiICsgYWxpYXMgKyBcIlxcXCIsIFwiICsgaWQgKyBcIik7XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZUJsb2NrID0gZnVuY3Rpb24gY29tcGlsZUJsb2NrKG5vZGUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl90bXBpZCgpO1xuXG4gICAgLy8gSWYgd2UgYXJlIGV4ZWN1dGluZyBvdXRzaWRlIGEgYmxvY2sgKGNyZWF0aW5nIGEgdG9wLWxldmVsXG4gICAgLy8gYmxvY2spLCB3ZSByZWFsbHkgZG9uJ3Qgd2FudCB0byBleGVjdXRlIGl0cyBjb2RlIGJlY2F1c2UgaXRcbiAgICAvLyB3aWxsIGV4ZWN1dGUgdHdpY2U6IG9uY2Ugd2hlbiB0aGUgY2hpbGQgdGVtcGxhdGUgcnVucyBhbmRcbiAgICAvLyBhZ2FpbiB3aGVuIHRoZSBwYXJlbnQgdGVtcGxhdGUgcnVucy4gTm90ZSB0aGF0IGJsb2Nrc1xuICAgIC8vIHdpdGhpbiBibG9ja3Mgd2lsbCAqYWx3YXlzKiBleGVjdXRlIGltbWVkaWF0ZWx5ICphbmQqXG4gICAgLy8gd2hlcmV2ZXIgZWxzZSB0aGV5IGFyZSBpbnZva2VkIChsaWtlIHVzZWQgaW4gYSBwYXJlbnRcbiAgICAvLyB0ZW1wbGF0ZSkuIFRoaXMgbWF5IGhhdmUgYmVoYXZpb3JhbCBkaWZmZXJlbmNlcyBmcm9tIGppbmphXG4gICAgLy8gYmVjYXVzZSBibG9ja3MgY2FuIGhhdmUgc2lkZSBlZmZlY3RzLCBidXQgaXQgc2VlbXMgbGlrZSBhXG4gICAgLy8gd2FzdGUgb2YgcGVyZm9ybWFuY2UgdG8gYWx3YXlzIGV4ZWN1dGUgaHVnZSB0b3AtbGV2ZWxcbiAgICAvLyBibG9ja3MgdHdpY2VcbiAgICBpZiAoIXRoaXMuaW5CbG9jaykge1xuICAgICAgdGhpcy5fZW1pdCgnKHBhcmVudFRlbXBsYXRlID8gZnVuY3Rpb24oZSwgYywgZiwgciwgY2IpIHsgY2IoXCJcIik7IH0gOiAnKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdChcImNvbnRleHQuZ2V0QmxvY2soXFxcIlwiICsgbm9kZS5uYW1lLnZhbHVlICsgXCJcXFwiKVwiKTtcbiAgICBpZiAoIXRoaXMuaW5CbG9jaykge1xuICAgICAgdGhpcy5fZW1pdCgnKScpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0TGluZSgnKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsICcgKyB0aGlzLl9tYWtlQ2FsbGJhY2soaWQpKTtcbiAgICB0aGlzLl9lbWl0TGluZSh0aGlzLmJ1ZmZlciArIFwiICs9IFwiICsgaWQgKyBcIjtcIik7XG4gICAgdGhpcy5fYWRkU2NvcGVMZXZlbCgpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZVN1cGVyID0gZnVuY3Rpb24gY29tcGlsZVN1cGVyKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIG5hbWUgPSBub2RlLmJsb2NrTmFtZS52YWx1ZTtcbiAgICB2YXIgaWQgPSBub2RlLnN5bWJvbC52YWx1ZTtcbiAgICB2YXIgY2IgPSB0aGlzLl9tYWtlQ2FsbGJhY2soaWQpO1xuICAgIHRoaXMuX2VtaXRMaW5lKFwiY29udGV4dC5nZXRTdXBlcihlbnYsIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIGJfXCIgKyBuYW1lICsgXCIsIGZyYW1lLCBydW50aW1lLCBcIiArIGNiKTtcbiAgICB0aGlzLl9lbWl0TGluZShpZCArIFwiID0gcnVudGltZS5tYXJrU2FmZShcIiArIGlkICsgXCIpO1wiKTtcbiAgICB0aGlzLl9hZGRTY29wZUxldmVsKCk7XG4gICAgZnJhbWUuc2V0KGlkLCBpZCk7XG4gIH07XG4gIF9wcm90by5jb21waWxlRXh0ZW5kcyA9IGZ1bmN0aW9uIGNvbXBpbGVFeHRlbmRzKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIGsgPSB0aGlzLl90bXBpZCgpO1xuICAgIHZhciBwYXJlbnRUZW1wbGF0ZUlkID0gdGhpcy5fY29tcGlsZUdldFRlbXBsYXRlKG5vZGUsIGZyYW1lLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAvLyBleHRlbmRzIGlzIGEgZHluYW1pYyB0YWcgYW5kIGNhbiBvY2N1ciB3aXRoaW4gYSBibG9jayBsaWtlXG4gICAgLy8gYGlmYCwgc28gaWYgdGhpcyBoYXBwZW5zIHdlIG5lZWQgdG8gY2FwdHVyZSB0aGUgcGFyZW50XG4gICAgLy8gdGVtcGxhdGUgaW4gdGhlIHRvcC1sZXZlbCBzY29wZVxuICAgIHRoaXMuX2VtaXRMaW5lKFwicGFyZW50VGVtcGxhdGUgPSBcIiArIHBhcmVudFRlbXBsYXRlSWQpO1xuICAgIHRoaXMuX2VtaXRMaW5lKFwiZm9yKHZhciBcIiArIGsgKyBcIiBpbiBwYXJlbnRUZW1wbGF0ZS5ibG9ja3MpIHtcIik7XG4gICAgdGhpcy5fZW1pdExpbmUoXCJjb250ZXh0LmFkZEJsb2NrKFwiICsgayArIFwiLCBwYXJlbnRUZW1wbGF0ZS5ibG9ja3NbXCIgKyBrICsgXCJdKTtcIik7XG4gICAgdGhpcy5fZW1pdExpbmUoJ30nKTtcbiAgICB0aGlzLl9hZGRTY29wZUxldmVsKCk7XG4gIH07XG4gIF9wcm90by5jb21waWxlSW5jbHVkZSA9IGZ1bmN0aW9uIGNvbXBpbGVJbmNsdWRlKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5fZW1pdExpbmUoJ3ZhciB0YXNrcyA9IFtdOycpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd0YXNrcy5wdXNoKCcpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCdmdW5jdGlvbihjYWxsYmFjaykgeycpO1xuICAgIHZhciBpZCA9IHRoaXMuX2NvbXBpbGVHZXRUZW1wbGF0ZShub2RlLCBmcmFtZSwgZmFsc2UsIG5vZGUuaWdub3JlTWlzc2luZyk7XG4gICAgdGhpcy5fZW1pdExpbmUoXCJjYWxsYmFjayhudWxsLFwiICsgaWQgKyBcIik7fSk7XCIpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd9KTsnKTtcbiAgICB2YXIgaWQyID0gdGhpcy5fdG1waWQoKTtcbiAgICB0aGlzLl9lbWl0TGluZSgndGFza3MucHVzaCgnKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnZnVuY3Rpb24odGVtcGxhdGUsIGNhbGxiYWNrKXsnKTtcbiAgICB0aGlzLl9lbWl0TGluZSgndGVtcGxhdGUucmVuZGVyKGNvbnRleHQuZ2V0VmFyaWFibGVzKCksIGZyYW1lLCAnICsgdGhpcy5fbWFrZUNhbGxiYWNrKGlkMikpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCdjYWxsYmFjayhudWxsLCcgKyBpZDIgKyAnKTt9KTsnKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnfSk7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ3Rhc2tzLnB1c2goJyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ2Z1bmN0aW9uKHJlc3VsdCwgY2FsbGJhY2speycpO1xuICAgIHRoaXMuX2VtaXRMaW5lKHRoaXMuYnVmZmVyICsgXCIgKz0gcmVzdWx0O1wiKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnY2FsbGJhY2sobnVsbCk7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ30pOycpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCdlbnYud2F0ZXJmYWxsKHRhc2tzLCBmdW5jdGlvbigpeycpO1xuICAgIHRoaXMuX2FkZFNjb3BlTGV2ZWwoKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVUZW1wbGF0ZURhdGEgPSBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGVEYXRhKG5vZGUsIGZyYW1lKSB7XG4gICAgdGhpcy5jb21waWxlTGl0ZXJhbChub2RlLCBmcmFtZSk7XG4gIH07XG4gIF9wcm90by5jb21waWxlQ2FwdHVyZSA9IGZ1bmN0aW9uIGNvbXBpbGVDYXB0dXJlKG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIF90aGlzMTQgPSB0aGlzO1xuICAgIC8vIHdlIG5lZWQgdG8gdGVtcG9yYXJpbHkgb3ZlcnJpZGUgdGhlIGN1cnJlbnQgYnVmZmVyIGlkIGFzICdvdXRwdXQnXG4gICAgLy8gc28gdGhlIHNldCBibG9jayB3cml0ZXMgdG8gdGhlIGNhcHR1cmUgb3V0cHV0IGluc3RlYWQgb2YgdGhlIGJ1ZmZlclxuICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICB0aGlzLmJ1ZmZlciA9ICdvdXRwdXQnO1xuICAgIHRoaXMuX2VtaXRMaW5lKCcoZnVuY3Rpb24oKSB7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ3ZhciBvdXRwdXQgPSBcIlwiOycpO1xuICAgIHRoaXMuX3dpdGhTY29wZWRTeW50YXgoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMxNC5jb21waWxlKG5vZGUuYm9keSwgZnJhbWUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2VtaXRMaW5lKCdyZXR1cm4gb3V0cHV0OycpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd9KSgpJyk7XG4gICAgLy8gYW5kIG9mIGNvdXJzZSwgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9sZCBidWZmZXIgaWRcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVPdXRwdXQgPSBmdW5jdGlvbiBjb21waWxlT3V0cHV0KG5vZGUsIGZyYW1lKSB7XG4gICAgdmFyIF90aGlzMTUgPSB0aGlzO1xuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIC8vIFRlbXBsYXRlRGF0YSBpcyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGl0IGlzIG5ldmVyXG4gICAgICAvLyBhdXRvZXNjYXBlZCwgc28gc2ltcGx5IG91dHB1dCBpdCBmb3Igb3B0aW1pemF0aW9uXG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBub2Rlcy5UZW1wbGF0ZURhdGEpIHtcbiAgICAgICAgaWYgKGNoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgX3RoaXMxNS5fZW1pdChfdGhpczE1LmJ1ZmZlciArIFwiICs9IFwiKTtcbiAgICAgICAgICBfdGhpczE1LmNvbXBpbGVMaXRlcmFsKGNoaWxkLCBmcmFtZSk7XG4gICAgICAgICAgX3RoaXMxNS5fZW1pdExpbmUoJzsnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMxNS5fZW1pdChfdGhpczE1LmJ1ZmZlciArIFwiICs9IHJ1bnRpbWUuc3VwcHJlc3NWYWx1ZShcIik7XG4gICAgICAgIGlmIChfdGhpczE1LnRocm93T25VbmRlZmluZWQpIHtcbiAgICAgICAgICBfdGhpczE1Ll9lbWl0KCdydW50aW1lLmVuc3VyZURlZmluZWQoJyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMxNS5jb21waWxlKGNoaWxkLCBmcmFtZSk7XG4gICAgICAgIGlmIChfdGhpczE1LnRocm93T25VbmRlZmluZWQpIHtcbiAgICAgICAgICBfdGhpczE1Ll9lbWl0KFwiLFwiICsgbm9kZS5saW5lbm8gKyBcIixcIiArIG5vZGUuY29sbm8gKyBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMxNS5fZW1pdCgnLCBlbnYub3B0cy5hdXRvZXNjYXBlKTtcXG4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBpbGVSb290ID0gZnVuY3Rpb24gY29tcGlsZVJvb3Qobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIgX3RoaXMxNiA9IHRoaXM7XG4gICAgaWYgKGZyYW1lKSB7XG4gICAgICB0aGlzLmZhaWwoJ2NvbXBpbGVSb290OiByb290IG5vZGUgY2FuXFwndCBoYXZlIGZyYW1lJyk7XG4gICAgfVxuICAgIGZyYW1lID0gbmV3IEZyYW1lKCk7XG4gICAgdGhpcy5fZW1pdEZ1bmNCZWdpbihub2RlLCAncm9vdCcpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd2YXIgcGFyZW50VGVtcGxhdGUgPSBudWxsOycpO1xuICAgIHRoaXMuX2NvbXBpbGVDaGlsZHJlbihub2RlLCBmcmFtZSk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ2lmKHBhcmVudFRlbXBsYXRlKSB7Jyk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ3BhcmVudFRlbXBsYXRlLnJvb3RSZW5kZXJGdW5jKGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKTsnKTtcbiAgICB0aGlzLl9lbWl0TGluZSgnfSBlbHNlIHsnKTtcbiAgICB0aGlzLl9lbWl0TGluZShcImNiKG51bGwsIFwiICsgdGhpcy5idWZmZXIgKyBcIik7XCIpO1xuICAgIHRoaXMuX2VtaXRMaW5lKCd9Jyk7XG4gICAgdGhpcy5fZW1pdEZ1bmNFbmQodHJ1ZSk7XG4gICAgdGhpcy5pbkJsb2NrID0gdHJ1ZTtcbiAgICB2YXIgYmxvY2tOYW1lcyA9IFtdO1xuICAgIHZhciBibG9ja3MgPSBub2RlLmZpbmRBbGwobm9kZXMuQmxvY2spO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChibG9jaywgaSkge1xuICAgICAgdmFyIG5hbWUgPSBibG9jay5uYW1lLnZhbHVlO1xuICAgICAgaWYgKGJsb2NrTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmxvY2sgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBkZWZpbmVkIG1vcmUgdGhhbiBvbmNlLlwiKTtcbiAgICAgIH1cbiAgICAgIGJsb2NrTmFtZXMucHVzaChuYW1lKTtcbiAgICAgIF90aGlzMTYuX2VtaXRGdW5jQmVnaW4oYmxvY2ssIFwiYl9cIiArIG5hbWUpO1xuICAgICAgdmFyIHRtcEZyYW1lID0gbmV3IEZyYW1lKCk7XG4gICAgICBfdGhpczE2Ll9lbWl0TGluZSgndmFyIGZyYW1lID0gZnJhbWUucHVzaCh0cnVlKTsnKTtcbiAgICAgIF90aGlzMTYuY29tcGlsZShibG9jay5ib2R5LCB0bXBGcmFtZSk7XG4gICAgICBfdGhpczE2Ll9lbWl0RnVuY0VuZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2VtaXRMaW5lKCdyZXR1cm4geycpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChibG9jaywgaSkge1xuICAgICAgdmFyIGJsb2NrTmFtZSA9IFwiYl9cIiArIGJsb2NrLm5hbWUudmFsdWU7XG4gICAgICBfdGhpczE2Ll9lbWl0TGluZShibG9ja05hbWUgKyBcIjogXCIgKyBibG9ja05hbWUgKyBcIixcIik7XG4gICAgfSk7XG4gICAgdGhpcy5fZW1pdExpbmUoJ3Jvb3Q6IHJvb3RcXG59OycpO1xuICB9O1xuICBfcHJvdG8uY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUobm9kZSwgZnJhbWUpIHtcbiAgICB2YXIgX2NvbXBpbGUgPSB0aGlzWydjb21waWxlJyArIG5vZGUudHlwZW5hbWVdO1xuICAgIGlmIChfY29tcGlsZSkge1xuICAgICAgX2NvbXBpbGUuY2FsbCh0aGlzLCBub2RlLCBmcmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFpbChcImNvbXBpbGU6IENhbm5vdCBjb21waWxlIG5vZGU6IFwiICsgbm9kZS50eXBlbmFtZSwgbm9kZS5saW5lbm8sIG5vZGUuY29sbm8pO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmdldENvZGUgPSBmdW5jdGlvbiBnZXRDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvZGVidWYuam9pbignJyk7XG4gIH07XG4gIHJldHVybiBDb21waWxlcjtcbn0oT2JqKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKHNyYywgYXN5bmNGaWx0ZXJzLCBleHRlbnNpb25zLCBuYW1lLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgYyA9IG5ldyBDb21waWxlcihuYW1lLCBvcHRzLnRocm93T25VbmRlZmluZWQpO1xuXG4gICAgLy8gUnVuIHRoZSBleHRlbnNpb24gcHJlcHJvY2Vzc29ycyBhZ2FpbnN0IHRoZSBzb3VyY2UuXG4gICAgdmFyIHByZXByb2Nlc3NvcnMgPSAoZXh0ZW5zaW9ucyB8fCBbXSkubWFwKGZ1bmN0aW9uIChleHQpIHtcbiAgICAgIHJldHVybiBleHQucHJlcHJvY2VzcztcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiAhIWY7XG4gICAgfSk7XG4gICAgdmFyIHByb2Nlc3NlZFNyYyA9IHByZXByb2Nlc3NvcnMucmVkdWNlKGZ1bmN0aW9uIChzLCBwcm9jZXNzb3IpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzb3Iocyk7XG4gICAgfSwgc3JjKTtcbiAgICBjLmNvbXBpbGUodHJhbnNmb3JtZXIudHJhbnNmb3JtKHBhcnNlci5wYXJzZShwcm9jZXNzZWRTcmMsIGV4dGVuc2lvbnMsIG9wdHMpLCBhc3luY0ZpbHRlcnMsIG5hbWUpKTtcbiAgICByZXR1cm4gYy5nZXRDb2RlKCk7XG4gIH0sXG4gIENvbXBpbGVyOiBDb21waWxlclxufTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSksXG4gIEVtaXR0ZXJPYmogPSBfcmVxdWlyZS5FbWl0dGVyT2JqO1xubW9kdWxlLmV4cG9ydHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FbWl0dGVyT2JqKSB7XG4gIF9pbmhlcml0c0xvb3NlKExvYWRlciwgX0VtaXR0ZXJPYmopO1xuICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgcmV0dXJuIF9FbWl0dGVyT2JqLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gTG9hZGVyLnByb3RvdHlwZTtcbiAgX3Byb3RvLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoZnJvbSksIHRvKTtcbiAgfTtcbiAgX3Byb3RvLmlzUmVsYXRpdmUgPSBmdW5jdGlvbiBpc1JlbGF0aXZlKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZpbGVuYW1lLmluZGV4T2YoJy4vJykgPT09IDAgfHwgZmlsZW5hbWUuaW5kZXhPZignLi4vJykgPT09IDA7XG4gIH07XG4gIHJldHVybiBMb2FkZXI7XG59KEVtaXR0ZXJPYmopO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIGFzYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBfd2F0ZXJmYWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBjb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgZmlsdGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCksXG4gIEZpbGVTeXN0ZW1Mb2FkZXIgPSBfcmVxdWlyZS5GaWxlU3lzdGVtTG9hZGVyLFxuICBXZWJMb2FkZXIgPSBfcmVxdWlyZS5XZWJMb2FkZXIsXG4gIFByZWNvbXBpbGVkTG9hZGVyID0gX3JlcXVpcmUuUHJlY29tcGlsZWRMb2FkZXI7XG52YXIgdGVzdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBnbG9iYWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgX3JlcXVpcmUyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSxcbiAgT2JqID0gX3JlcXVpcmUyLk9iaixcbiAgRW1pdHRlck9iaiA9IF9yZXF1aXJlMi5FbWl0dGVyT2JqO1xudmFyIGdsb2JhbFJ1bnRpbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIGhhbmRsZUVycm9yID0gZ2xvYmFsUnVudGltZS5oYW5kbGVFcnJvcixcbiAgRnJhbWUgPSBnbG9iYWxSdW50aW1lLkZyYW1lO1xudmFyIGV4cHJlc3NBcHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuLy8gSWYgdGhlIHVzZXIgaXMgdXNpbmcgdGhlIGFzeW5jIEFQSSwgKmFsd2F5cyogY2FsbCBpdFxuLy8gYXN5bmNocm9ub3VzbHkgZXZlbiBpZiB0aGUgdGVtcGxhdGUgd2FzIHN5bmNocm9ub3VzLlxuZnVuY3Rpb24gY2FsbGJhY2tBc2FwKGNiLCBlcnIsIHJlcykge1xuICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICBjYihlcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgbm8tb3AgdGVtcGxhdGUsIGZvciB1c2Ugd2l0aCB7JSBpbmNsdWRlIGlnbm9yZSBtaXNzaW5nICV9XG4gKi9cbnZhciBub29wVG1wbFNyYyA9IHtcbiAgdHlwZTogJ2NvZGUnLFxuICBvYmo6IHtcbiAgICByb290OiBmdW5jdGlvbiByb290KGVudiwgY29udGV4dCwgZnJhbWUsIHJ1bnRpbWUsIGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYihudWxsLCAnJyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNiKGhhbmRsZUVycm9yKGUsIG51bGwsIG51bGwpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgRW52aXJvbm1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FbWl0dGVyT2JqKSB7XG4gIF9pbmhlcml0c0xvb3NlKEVudmlyb25tZW50LCBfRW1pdHRlck9iaik7XG4gIGZ1bmN0aW9uIEVudmlyb25tZW50KCkge1xuICAgIHJldHVybiBfRW1pdHRlck9iai5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgdmFyIF9wcm90byA9IEVudmlyb25tZW50LnByb3RvdHlwZTtcbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KGxvYWRlcnMsIG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIC8vIFRoZSBkZXYgZmxhZyBkZXRlcm1pbmVzIHRoZSB0cmFjZSB0aGF0J2xsIGJlIHNob3duIG9uIGVycm9ycy5cbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSwgcmV0dXJucyB0aGUgZnVsbCB0cmFjZSBmcm9tIHRoZSBlcnJvciBwb2ludCxcbiAgICAvLyBvdGhlcndpc2Ugd2lsbCByZXR1cm4gdHJhY2Ugc3RhcnRpbmcgZnJvbSBUZW1wbGF0ZS5yZW5kZXJcbiAgICAvLyAodGhlIGZ1bGwgdHJhY2UgZnJvbSB3aXRoaW4gbnVuanVja3MgbWF5IGNvbmZ1c2UgZGV2ZWxvcGVycyB1c2luZ1xuICAgIC8vICB0aGUgbGlicmFyeSlcbiAgICAvLyBkZWZhdWx0cyB0byBmYWxzZVxuICAgIG9wdHMgPSB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIHRoaXMub3B0cy5kZXYgPSAhIW9wdHMuZGV2O1xuXG4gICAgLy8gVGhlIGF1dG9lc2NhcGUgZmxhZyBzZXRzIGdsb2JhbCBhdXRvZXNjYXBpbmcuIElmIHRydWUsXG4gICAgLy8gZXZlcnkgc3RyaW5nIHZhcmlhYmxlIHdpbGwgYmUgZXNjYXBlZCBieSBkZWZhdWx0LlxuICAgIC8vIElmIGZhbHNlLCBzdHJpbmdzIGNhbiBiZSBtYW51YWxseSBlc2NhcGVkIHVzaW5nIHRoZSBgZXNjYXBlYCBmaWx0ZXIuXG4gICAgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgIHRoaXMub3B0cy5hdXRvZXNjYXBlID0gb3B0cy5hdXRvZXNjYXBlICE9IG51bGwgPyBvcHRzLmF1dG9lc2NhcGUgOiB0cnVlO1xuXG4gICAgLy8gSWYgdHJ1ZSwgdGhpcyB3aWxsIG1ha2UgdGhlIHN5c3RlbSB0aHJvdyBlcnJvcnMgaWYgdHJ5aW5nXG4gICAgLy8gdG8gb3V0cHV0IGEgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVcbiAgICB0aGlzLm9wdHMudGhyb3dPblVuZGVmaW5lZCA9ICEhb3B0cy50aHJvd09uVW5kZWZpbmVkO1xuICAgIHRoaXMub3B0cy50cmltQmxvY2tzID0gISFvcHRzLnRyaW1CbG9ja3M7XG4gICAgdGhpcy5vcHRzLmxzdHJpcEJsb2NrcyA9ICEhb3B0cy5sc3RyaXBCbG9ja3M7XG4gICAgdGhpcy5sb2FkZXJzID0gW107XG4gICAgaWYgKCFsb2FkZXJzKSB7XG4gICAgICAvLyBUaGUgZmlsZXN5c3RlbSBsb2FkZXIgaXMgb25seSBhdmFpbGFibGUgc2VydmVyLXNpZGVcbiAgICAgIGlmIChGaWxlU3lzdGVtTG9hZGVyKSB7XG4gICAgICAgIHRoaXMubG9hZGVycyA9IFtuZXcgRmlsZVN5c3RlbUxvYWRlcigndmlld3MnKV07XG4gICAgICB9IGVsc2UgaWYgKFdlYkxvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlcnMgPSBbbmV3IFdlYkxvYWRlcignL3ZpZXdzJyldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlcnMgPSBsaWIuaXNBcnJheShsb2FkZXJzKSA/IGxvYWRlcnMgOiBbbG9hZGVyc107XG4gICAgfVxuXG4gICAgLy8gSXQncyBlYXN5IHRvIHVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXM6IGp1c3QgaW5jbHVkZSB0aGVtXG4gICAgLy8gYmVmb3JlIHlvdSBjb25maWd1cmUgbnVuanVja3MgYW5kIHRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gcGljayBpdCB1cCBhbmQgdXNlIGl0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5udW5qdWNrc1ByZWNvbXBpbGVkKSB7XG4gICAgICB0aGlzLmxvYWRlcnMudW5zaGlmdChuZXcgUHJlY29tcGlsZWRMb2FkZXIod2luZG93Lm51bmp1Y2tzUHJlY29tcGlsZWQpKTtcbiAgICB9XG4gICAgdGhpcy5faW5pdExvYWRlcnMoKTtcbiAgICB0aGlzLmdsb2JhbHMgPSBnbG9iYWxzKCk7XG4gICAgdGhpcy5maWx0ZXJzID0ge307XG4gICAgdGhpcy50ZXN0cyA9IHt9O1xuICAgIHRoaXMuYXN5bmNGaWx0ZXJzID0gW107XG4gICAgdGhpcy5leHRlbnNpb25zID0ge307XG4gICAgdGhpcy5leHRlbnNpb25zTGlzdCA9IFtdO1xuICAgIGxpYi5fZW50cmllcyhmaWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbmFtZSA9IF9yZWZbMF0sXG4gICAgICAgIGZpbHRlciA9IF9yZWZbMV07XG4gICAgICByZXR1cm4gX3RoaXMuYWRkRmlsdGVyKG5hbWUsIGZpbHRlcik7XG4gICAgfSk7XG4gICAgbGliLl9lbnRyaWVzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmMlswXSxcbiAgICAgICAgdGVzdCA9IF9yZWYyWzFdO1xuICAgICAgcmV0dXJuIF90aGlzLmFkZFRlc3QobmFtZSwgdGVzdCk7XG4gICAgfSk7XG4gIH07XG4gIF9wcm90by5faW5pdExvYWRlcnMgPSBmdW5jdGlvbiBfaW5pdExvYWRlcnMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgdGhpcy5sb2FkZXJzLmZvckVhY2goZnVuY3Rpb24gKGxvYWRlcikge1xuICAgICAgLy8gQ2FjaGluZyBhbmQgY2FjaGUgYnVzdGluZ1xuICAgICAgbG9hZGVyLmNhY2hlID0ge307XG4gICAgICBpZiAodHlwZW9mIGxvYWRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uIChuYW1lLCBmdWxsbmFtZSkge1xuICAgICAgICAgIGxvYWRlci5jYWNoZVtuYW1lXSA9IG51bGw7XG4gICAgICAgICAgX3RoaXMyLmVtaXQoJ3VwZGF0ZScsIG5hbWUsIGZ1bGxuYW1lLCBsb2FkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGVyLm9uKCdsb2FkJywgZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSkge1xuICAgICAgICAgIF90aGlzMi5lbWl0KCdsb2FkJywgbmFtZSwgc291cmNlLCBsb2FkZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLmludmFsaWRhdGVDYWNoZSA9IGZ1bmN0aW9uIGludmFsaWRhdGVDYWNoZSgpIHtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAobG9hZGVyKSB7XG4gICAgICBsb2FkZXIuY2FjaGUgPSB7fTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLmFkZEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGFkZEV4dGVuc2lvbihuYW1lLCBleHRlbnNpb24pIHtcbiAgICBleHRlbnNpb24uX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLmV4dGVuc2lvbnNbbmFtZV0gPSBleHRlbnNpb247XG4gICAgdGhpcy5leHRlbnNpb25zTGlzdC5wdXNoKGV4dGVuc2lvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIF9wcm90by5yZW1vdmVFeHRlbnNpb24gPSBmdW5jdGlvbiByZW1vdmVFeHRlbnNpb24obmFtZSkge1xuICAgIHZhciBleHRlbnNpb24gPSB0aGlzLmdldEV4dGVuc2lvbihuYW1lKTtcbiAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4dGVuc2lvbnNMaXN0ID0gbGliLndpdGhvdXQodGhpcy5leHRlbnNpb25zTGlzdCwgZXh0ZW5zaW9uKTtcbiAgICBkZWxldGUgdGhpcy5leHRlbnNpb25zW25hbWVdO1xuICB9O1xuICBfcHJvdG8uZ2V0RXh0ZW5zaW9uID0gZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zW25hbWVdO1xuICB9O1xuICBfcHJvdG8uaGFzRXh0ZW5zaW9uID0gZnVuY3Rpb24gaGFzRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICByZXR1cm4gISF0aGlzLmV4dGVuc2lvbnNbbmFtZV07XG4gIH07XG4gIF9wcm90by5hZGRHbG9iYWwgPSBmdW5jdGlvbiBhZGRHbG9iYWwobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmdsb2JhbHNbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgX3Byb3RvLmdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbChuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdsb2JhbHNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsb2JhbCBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsc1tuYW1lXTtcbiAgfTtcbiAgX3Byb3RvLmFkZEZpbHRlciA9IGZ1bmN0aW9uIGFkZEZpbHRlcihuYW1lLCBmdW5jLCBhc3luYykge1xuICAgIHZhciB3cmFwcGVkID0gZnVuYztcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIHRoaXMuYXN5bmNGaWx0ZXJzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyc1tuYW1lXSA9IHdyYXBwZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIF9wcm90by5nZXRGaWx0ZXIgPSBmdW5jdGlvbiBnZXRGaWx0ZXIobmFtZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbHRlciBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyc1tuYW1lXTtcbiAgfTtcbiAgX3Byb3RvLmFkZFRlc3QgPSBmdW5jdGlvbiBhZGRUZXN0KG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnRlc3RzW25hbWVdID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgX3Byb3RvLmdldFRlc3QgPSBmdW5jdGlvbiBnZXRUZXN0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMudGVzdHNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGVzdCBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGVzdHNbbmFtZV07XG4gIH07XG4gIF9wcm90by5yZXNvbHZlVGVtcGxhdGUgPSBmdW5jdGlvbiByZXNvbHZlVGVtcGxhdGUobG9hZGVyLCBwYXJlbnROYW1lLCBmaWxlbmFtZSkge1xuICAgIHZhciBpc1JlbGF0aXZlID0gbG9hZGVyLmlzUmVsYXRpdmUgJiYgcGFyZW50TmFtZSA/IGxvYWRlci5pc1JlbGF0aXZlKGZpbGVuYW1lKSA6IGZhbHNlO1xuICAgIHJldHVybiBpc1JlbGF0aXZlICYmIGxvYWRlci5yZXNvbHZlID8gbG9hZGVyLnJlc29sdmUocGFyZW50TmFtZSwgZmlsZW5hbWUpIDogZmlsZW5hbWU7XG4gIH07XG4gIF9wcm90by5nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIGdldFRlbXBsYXRlKG5hbWUsIGVhZ2VyQ29tcGlsZSwgcGFyZW50TmFtZSwgaWdub3JlTWlzc2luZywgY2IpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHRtcGwgPSBudWxsO1xuICAgIGlmIChuYW1lICYmIG5hbWUucmF3KSB7XG4gICAgICAvLyB0aGlzIGZpeGVzIGF1dG9lc2NhcGUgZm9yIHRlbXBsYXRlcyByZWZlcmVuY2VkIGluIHN5bWJvbHNcbiAgICAgIG5hbWUgPSBuYW1lLnJhdztcbiAgICB9XG4gICAgaWYgKGxpYi5pc0Z1bmN0aW9uKHBhcmVudE5hbWUpKSB7XG4gICAgICBjYiA9IHBhcmVudE5hbWU7XG4gICAgICBwYXJlbnROYW1lID0gbnVsbDtcbiAgICAgIGVhZ2VyQ29tcGlsZSA9IGVhZ2VyQ29tcGlsZSB8fCBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxpYi5pc0Z1bmN0aW9uKGVhZ2VyQ29tcGlsZSkpIHtcbiAgICAgIGNiID0gZWFnZXJDb21waWxlO1xuICAgICAgZWFnZXJDb21waWxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChuYW1lIGluc3RhbmNlb2YgVGVtcGxhdGUpIHtcbiAgICAgIHRtcGwgPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlIG5hbWVzIG11c3QgYmUgYSBzdHJpbmc6ICcgKyBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGxvYWRlciA9IHRoaXMubG9hZGVyc1tpXTtcbiAgICAgICAgdG1wbCA9IGxvYWRlci5jYWNoZVt0aGlzLnJlc29sdmVUZW1wbGF0ZShsb2FkZXIsIHBhcmVudE5hbWUsIG5hbWUpXTtcbiAgICAgICAgaWYgKHRtcGwpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodG1wbCkge1xuICAgICAgaWYgKGVhZ2VyQ29tcGlsZSkge1xuICAgICAgICB0bXBsLmNvbXBpbGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYihudWxsLCB0bXBsKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0bXBsO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3luY1Jlc3VsdDtcbiAgICB2YXIgY3JlYXRlVGVtcGxhdGUgPSBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShlcnIsIGluZm8pIHtcbiAgICAgIGlmICghaW5mbyAmJiAhZXJyICYmICFpZ25vcmVNaXNzaW5nKSB7XG4gICAgICAgIGVyciA9IG5ldyBFcnJvcigndGVtcGxhdGUgbm90IGZvdW5kOiAnICsgbmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG5ld1RtcGw7XG4gICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgbmV3VG1wbCA9IG5ldyBUZW1wbGF0ZShub29wVG1wbFNyYywgX3RoaXMzLCAnJywgZWFnZXJDb21waWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RtcGwgPSBuZXcgVGVtcGxhdGUoaW5mby5zcmMsIF90aGlzMywgaW5mby5wYXRoLCBlYWdlckNvbXBpbGUpO1xuICAgICAgICBpZiAoIWluZm8ubm9DYWNoZSkge1xuICAgICAgICAgIGluZm8ubG9hZGVyLmNhY2hlW25hbWVdID0gbmV3VG1wbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKG51bGwsIG5ld1RtcGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3luY1Jlc3VsdCA9IG5ld1RtcGw7XG4gICAgICB9XG4gICAgfTtcbiAgICBsaWIuYXN5bmNJdGVyKHRoaXMubG9hZGVycywgZnVuY3Rpb24gKGxvYWRlciwgaSwgbmV4dCwgZG9uZSkge1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGVyciwgc3JjKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgICAgICAgc3JjLmxvYWRlciA9IGxvYWRlcjtcbiAgICAgICAgICBkb25lKG51bGwsIHNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc29sdmUgbmFtZSByZWxhdGl2ZSB0byBwYXJlbnROYW1lXG4gICAgICBuYW1lID0gdGhhdC5yZXNvbHZlVGVtcGxhdGUobG9hZGVyLCBwYXJlbnROYW1lLCBuYW1lKTtcbiAgICAgIGlmIChsb2FkZXIuYXN5bmMpIHtcbiAgICAgICAgbG9hZGVyLmdldFNvdXJjZShuYW1lLCBoYW5kbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlKG51bGwsIGxvYWRlci5nZXRTb3VyY2UobmFtZSkpO1xuICAgICAgfVxuICAgIH0sIGNyZWF0ZVRlbXBsYXRlKTtcbiAgICByZXR1cm4gc3luY1Jlc3VsdDtcbiAgfTtcbiAgX3Byb3RvLmV4cHJlc3MgPSBmdW5jdGlvbiBleHByZXNzKGFwcCkge1xuICAgIHJldHVybiBleHByZXNzQXBwKHRoaXMsIGFwcCk7XG4gIH07XG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIobmFtZSwgY3R4LCBjYikge1xuICAgIGlmIChsaWIuaXNGdW5jdGlvbihjdHgpKSB7XG4gICAgICBjYiA9IGN0eDtcbiAgICAgIGN0eCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gV2Ugc3VwcG9ydCBhIHN5bmNocm9ub3VzIEFQSSB0byBtYWtlIGl0IGVhc2llciB0byBtaWdyYXRlXG4gICAgLy8gZXhpc3RpbmcgY29kZSB0byBhc3luYy4gVGhpcyB3b3JrcyBiZWNhdXNlIGlmIHlvdSBkb24ndCBkb1xuICAgIC8vIGFueXRoaW5nIGFzeW5jIHdvcmssIHRoZSB3aG9sZSB0aGluZyBpcyBhY3R1YWxseSBydW5cbiAgICAvLyBzeW5jaHJvbm91c2x5LlxuICAgIHZhciBzeW5jUmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLmdldFRlbXBsYXRlKG5hbWUsIGZ1bmN0aW9uIChlcnIsIHRtcGwpIHtcbiAgICAgIGlmIChlcnIgJiYgY2IpIHtcbiAgICAgICAgY2FsbGJhY2tBc2FwKGNiLCBlcnIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3luY1Jlc3VsdCA9IHRtcGwucmVuZGVyKGN0eCwgY2IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzeW5jUmVzdWx0O1xuICB9O1xuICBfcHJvdG8ucmVuZGVyU3RyaW5nID0gZnVuY3Rpb24gcmVuZGVyU3RyaW5nKHNyYywgY3R4LCBvcHRzLCBjYikge1xuICAgIGlmIChsaWIuaXNGdW5jdGlvbihvcHRzKSkge1xuICAgICAgY2IgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICB2YXIgdG1wbCA9IG5ldyBUZW1wbGF0ZShzcmMsIHRoaXMsIG9wdHMucGF0aCk7XG4gICAgcmV0dXJuIHRtcGwucmVuZGVyKGN0eCwgY2IpO1xuICB9O1xuICBfcHJvdG8ud2F0ZXJmYWxsID0gZnVuY3Rpb24gd2F0ZXJmYWxsKHRhc2tzLCBjYWxsYmFjaywgZm9yY2VBc3luYykge1xuICAgIHJldHVybiBfd2F0ZXJmYWxsKHRhc2tzLCBjYWxsYmFjaywgZm9yY2VBc3luYyk7XG4gIH07XG4gIHJldHVybiBFbnZpcm9ubWVudDtcbn0oRW1pdHRlck9iaik7XG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX09iaikge1xuICBfaW5oZXJpdHNMb29zZShDb250ZXh0LCBfT2JqKTtcbiAgZnVuY3Rpb24gQ29udGV4dCgpIHtcbiAgICByZXR1cm4gX09iai5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgdmFyIF9wcm90bzIgPSBDb250ZXh0LnByb3RvdHlwZTtcbiAgX3Byb3RvMi5pbml0ID0gZnVuY3Rpb24gaW5pdChjdHgsIGJsb2NrcywgZW52KSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgLy8gSGFzIHRvIGJlIHRpZWQgdG8gYW4gZW52aXJvbm1lbnQgc28gd2UgY2FuIHRhcCBpbnRvIGl0cyBnbG9iYWxzLlxuICAgIHRoaXMuZW52ID0gZW52IHx8IG5ldyBFbnZpcm9ubWVudCgpO1xuXG4gICAgLy8gTWFrZSBhIGR1cGxpY2F0ZSBvZiBjdHhcbiAgICB0aGlzLmN0eCA9IGxpYi5leHRlbmQoe30sIGN0eCk7XG4gICAgdGhpcy5ibG9ja3MgPSB7fTtcbiAgICB0aGlzLmV4cG9ydGVkID0gW107XG4gICAgbGliLmtleXMoYmxvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfdGhpczQuYWRkQmxvY2sobmFtZSwgYmxvY2tzW25hbWVdKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvMi5sb29rdXAgPSBmdW5jdGlvbiBsb29rdXAobmFtZSkge1xuICAgIC8vIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNhbGxlZCBmdW5jdGlvbnMsIHNvIG9wdGltaXplIGZvclxuICAgIC8vIHRoZSB0eXBpY2FsIGNhc2Ugd2hlcmUgdGhlIG5hbWUgaXNuJ3QgaW4gdGhlIGdsb2JhbHNcbiAgICBpZiAobmFtZSBpbiB0aGlzLmVudi5nbG9iYWxzICYmICEobmFtZSBpbiB0aGlzLmN0eCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudi5nbG9iYWxzW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jdHhbbmFtZV07XG4gICAgfVxuICB9O1xuICBfcHJvdG8yLnNldFZhcmlhYmxlID0gZnVuY3Rpb24gc2V0VmFyaWFibGUobmFtZSwgdmFsKSB7XG4gICAgdGhpcy5jdHhbbmFtZV0gPSB2YWw7XG4gIH07XG4gIF9wcm90bzIuZ2V0VmFyaWFibGVzID0gZnVuY3Rpb24gZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN0eDtcbiAgfTtcbiAgX3Byb3RvMi5hZGRCbG9jayA9IGZ1bmN0aW9uIGFkZEJsb2NrKG5hbWUsIGJsb2NrKSB7XG4gICAgdGhpcy5ibG9ja3NbbmFtZV0gPSB0aGlzLmJsb2Nrc1tuYW1lXSB8fCBbXTtcbiAgICB0aGlzLmJsb2Nrc1tuYW1lXS5wdXNoKGJsb2NrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgX3Byb3RvMi5nZXRCbG9jayA9IGZ1bmN0aW9uIGdldEJsb2NrKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuYmxvY2tzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxvY2sgXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ibG9ja3NbbmFtZV1bMF07XG4gIH07XG4gIF9wcm90bzIuZ2V0U3VwZXIgPSBmdW5jdGlvbiBnZXRTdXBlcihlbnYsIG5hbWUsIGJsb2NrLCBmcmFtZSwgcnVudGltZSwgY2IpIHtcbiAgICB2YXIgaWR4ID0gbGliLmluZGV4T2YodGhpcy5ibG9ja3NbbmFtZV0gfHwgW10sIGJsb2NrKTtcbiAgICB2YXIgYmxrID0gdGhpcy5ibG9ja3NbbmFtZV1baWR4ICsgMV07XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGlmIChpZHggPT09IC0xIHx8ICFibGspIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VwZXIgYmxvY2sgYXZhaWxhYmxlIGZvciBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgfVxuICAgIGJsayhlbnYsIGNvbnRleHQsIGZyYW1lLCBydW50aW1lLCBjYik7XG4gIH07XG4gIF9wcm90bzIuYWRkRXhwb3J0ID0gZnVuY3Rpb24gYWRkRXhwb3J0KG5hbWUpIHtcbiAgICB0aGlzLmV4cG9ydGVkLnB1c2gobmFtZSk7XG4gIH07XG4gIF9wcm90bzIuZ2V0RXhwb3J0ZWQgPSBmdW5jdGlvbiBnZXRFeHBvcnRlZCgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICB2YXIgZXhwb3J0ZWQgPSB7fTtcbiAgICB0aGlzLmV4cG9ydGVkLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGV4cG9ydGVkW25hbWVdID0gX3RoaXM1LmN0eFtuYW1lXTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXhwb3J0ZWQ7XG4gIH07XG4gIHJldHVybiBDb250ZXh0O1xufShPYmopO1xudmFyIFRlbXBsYXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfT2JqMikge1xuICBfaW5oZXJpdHNMb29zZShUZW1wbGF0ZSwgX09iajIpO1xuICBmdW5jdGlvbiBUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gX09iajIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHZhciBfcHJvdG8zID0gVGVtcGxhdGUucHJvdG90eXBlO1xuICBfcHJvdG8zLmluaXQgPSBmdW5jdGlvbiBpbml0KHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpIHtcbiAgICB0aGlzLmVudiA9IGVudiB8fCBuZXcgRW52aXJvbm1lbnQoKTtcbiAgICBpZiAobGliLmlzT2JqZWN0KHNyYykpIHtcbiAgICAgIHN3aXRjaCAoc3JjLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgdGhpcy50bXBsUHJvcHMgPSBzcmMub2JqO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIHRoaXMudG1wbFN0ciA9IHNyYy5vYmo7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0ZW1wbGF0ZSBvYmplY3QgdHlwZSBcIiArIHNyYy50eXBlICsgXCI7IGV4cGVjdGVkICdjb2RlJywgb3IgJ3N0cmluZydcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsaWIuaXNTdHJpbmcoc3JjKSkge1xuICAgICAgdGhpcy50bXBsU3RyID0gc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NyYyBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdCBkZXNjcmliaW5nIHRoZSBzb3VyY2UnKTtcbiAgICB9XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICBpZiAoZWFnZXJDb21waWxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9jb21waWxlKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbGliLl9wcmV0dGlmeUVycm9yKHRoaXMucGF0aCwgdGhpcy5lbnYub3B0cy5kZXYsIGVycik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGlsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGN0eCwgcGFyZW50RnJhbWUsIGNiKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBjdHggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gY3R4O1xuICAgICAgY3R4ID0ge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyZW50RnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gcGFyZW50RnJhbWU7XG4gICAgICBwYXJlbnRGcmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBwYXJlbnQgZnJhbWUsIHdlIGFyZSBiZWluZyBjYWxsZWQgZnJvbSBpbnRlcm5hbFxuICAgIC8vIGNvZGUgb2YgYW5vdGhlciB0ZW1wbGF0ZSwgYW5kIHRoZSBpbnRlcm5hbCBzeXN0ZW1cbiAgICAvLyBkZXBlbmRzIG9uIHRoZSBzeW5jL2FzeW5jIG5hdHVyZSBvZiB0aGUgcGFyZW50IHRlbXBsYXRlXG4gICAgLy8gdG8gYmUgaW5oZXJpdGVkLCBzbyBmb3JjZSBhbiBhc3luYyBjYWxsYmFja1xuICAgIHZhciBmb3JjZUFzeW5jID0gIXBhcmVudEZyYW1lO1xuXG4gICAgLy8gQ2F0Y2ggY29tcGlsZSBlcnJvcnMgZm9yIGFzeW5jIHJlbmRlcmluZ1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBpbGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgZXJyID0gbGliLl9wcmV0dGlmeUVycm9yKHRoaXMucGF0aCwgdGhpcy5lbnYub3B0cy5kZXYsIGUpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0FzYXAoY2IsIGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoY3R4IHx8IHt9LCB0aGlzLmJsb2NrcywgdGhpcy5lbnYpO1xuICAgIHZhciBmcmFtZSA9IHBhcmVudEZyYW1lID8gcGFyZW50RnJhbWUucHVzaCh0cnVlKSA6IG5ldyBGcmFtZSgpO1xuICAgIGZyYW1lLnRvcExldmVsID0gdHJ1ZTtcbiAgICB2YXIgc3luY1Jlc3VsdCA9IG51bGw7XG4gICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgdGhpcy5yb290UmVuZGVyRnVuYyh0aGlzLmVudiwgY29udGV4dCwgZnJhbWUsIGdsb2JhbFJ1bnRpbWUsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgLy8gVE9ETzogdGhpcyBpcyBhY3R1YWxseSBhIGJ1ZyBpbiB0aGUgY29tcGlsZWQgdGVtcGxhdGUgKGJlY2F1c2Ugd2F0ZXJmYWxsXG4gICAgICAvLyB0YXNrcyBhcmUgYm90aCBub3QgcGFzc2luZyBlcnJvcnMgdXAgdGhlIGNoYWluIG9mIGNhbGxiYWNrcyBBTkQgYXJlIG5vdFxuICAgICAgLy8gY2F1c2luZyBhIHJldHVybiBmcm9tIHRoZSB0b3AtbW9zdCByZW5kZXIgZnVuY3Rpb24pLiBCdXQgZml4aW5nIHRoYXRcbiAgICAgIC8vIHdpbGwgcmVxdWlyZSBhIG1vcmUgc3Vic3RhbnRpYWwgY2hhbmdlIHRvIHRoZSBjb21waWxlci5cbiAgICAgIGlmIChkaWRFcnJvciAmJiBjYiAmJiB0eXBlb2YgcmVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBwcmV2ZW50IG11bHRpcGxlIGNhbGxzIHRvIGNiXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyID0gbGliLl9wcmV0dGlmeUVycm9yKF90aGlzNi5wYXRoLCBfdGhpczYuZW52Lm9wdHMuZGV2LCBlcnIpO1xuICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgaWYgKGZvcmNlQXN5bmMpIHtcbiAgICAgICAgICBjYWxsYmFja0FzYXAoY2IsIGVyciwgcmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihlcnIsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgc3luY1Jlc3VsdCA9IHJlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3luY1Jlc3VsdDtcbiAgfTtcbiAgX3Byb3RvMy5nZXRFeHBvcnRlZCA9IGZ1bmN0aW9uIGdldEV4cG9ydGVkKGN0eCwgcGFyZW50RnJhbWUsIGNiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIGlmICh0eXBlb2YgY3R4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGN0eDtcbiAgICAgIGN0eCA9IHt9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmVudEZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IHBhcmVudEZyYW1lO1xuICAgICAgcGFyZW50RnJhbWUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIENhdGNoIGNvbXBpbGUgZXJyb3JzIGZvciBhc3luYyByZW5kZXJpbmdcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21waWxlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBmcmFtZSA9IHBhcmVudEZyYW1lID8gcGFyZW50RnJhbWUucHVzaCgpIDogbmV3IEZyYW1lKCk7XG4gICAgZnJhbWUudG9wTGV2ZWwgPSB0cnVlO1xuXG4gICAgLy8gUnVuIHRoZSByb290UmVuZGVyRnVuYyB0byBwb3B1bGF0ZSB0aGUgY29udGV4dCB3aXRoIGV4cG9ydGVkIHZhcnNcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KGN0eCB8fCB7fSwgdGhpcy5ibG9ja3MsIHRoaXMuZW52KTtcbiAgICB0aGlzLnJvb3RSZW5kZXJGdW5jKHRoaXMuZW52LCBjb250ZXh0LCBmcmFtZSwgZ2xvYmFsUnVudGltZSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYihlcnIsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IobnVsbCwgY29udGV4dC5nZXRFeHBvcnRlZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvMy5jb21waWxlID0gZnVuY3Rpb24gY29tcGlsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29tcGlsZWQpIHtcbiAgICAgIHRoaXMuX2NvbXBpbGUoKTtcbiAgICB9XG4gIH07XG4gIF9wcm90bzMuX2NvbXBpbGUgPSBmdW5jdGlvbiBfY29tcGlsZSgpIHtcbiAgICB2YXIgcHJvcHM7XG4gICAgaWYgKHRoaXMudG1wbFByb3BzKSB7XG4gICAgICBwcm9wcyA9IHRoaXMudG1wbFByb3BzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc291cmNlID0gY29tcGlsZXIuY29tcGlsZSh0aGlzLnRtcGxTdHIsIHRoaXMuZW52LmFzeW5jRmlsdGVycywgdGhpcy5lbnYuZXh0ZW5zaW9uc0xpc3QsIHRoaXMucGF0aCwgdGhpcy5lbnYub3B0cyk7XG4gICAgICB2YXIgZnVuYyA9IG5ldyBGdW5jdGlvbihzb3VyY2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBwcm9wcyA9IGZ1bmMoKTtcbiAgICB9XG4gICAgdGhpcy5ibG9ja3MgPSB0aGlzLl9nZXRCbG9ja3MocHJvcHMpO1xuICAgIHRoaXMucm9vdFJlbmRlckZ1bmMgPSBwcm9wcy5yb290O1xuICAgIHRoaXMuY29tcGlsZWQgPSB0cnVlO1xuICB9O1xuICBfcHJvdG8zLl9nZXRCbG9ja3MgPSBmdW5jdGlvbiBfZ2V0QmxvY2tzKHByb3BzKSB7XG4gICAgdmFyIGJsb2NrcyA9IHt9O1xuICAgIGxpYi5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAoay5zbGljZSgwLCAyKSA9PT0gJ2JfJykge1xuICAgICAgICBibG9ja3Nbay5zbGljZSgyKV0gPSBwcm9wc1trXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmxvY2tzO1xuICB9O1xuICByZXR1cm4gVGVtcGxhdGU7XG59KE9iaik7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuICBUZW1wbGF0ZTogVGVtcGxhdGVcbn07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgbGV4ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIG5vZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBPYmogPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLk9iajtcbnZhciBsaWIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX09iaikge1xuICBfaW5oZXJpdHNMb29zZShQYXJzZXIsIF9PYmopO1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgcmV0dXJuIF9PYmouYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlO1xuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQodG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5wZWVrZWQgPSBudWxsO1xuICAgIHRoaXMuYnJlYWtPbkJsb2NrcyA9IG51bGw7XG4gICAgdGhpcy5kcm9wTGVhZGluZ1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBbXTtcbiAgfTtcbiAgX3Byb3RvLm5leHRUb2tlbiA9IGZ1bmN0aW9uIG5leHRUb2tlbih3aXRoV2hpdGVzcGFjZSkge1xuICAgIHZhciB0b2s7XG4gICAgaWYgKHRoaXMucGVla2VkKSB7XG4gICAgICBpZiAoIXdpdGhXaGl0ZXNwYWNlICYmIHRoaXMucGVla2VkLnR5cGUgPT09IGxleGVyLlRPS0VOX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgdGhpcy5wZWVrZWQgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rID0gdGhpcy5wZWVrZWQ7XG4gICAgICAgIHRoaXMucGVla2VkID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRvaztcbiAgICAgIH1cbiAgICB9XG4gICAgdG9rID0gdGhpcy50b2tlbnMubmV4dFRva2VuKCk7XG4gICAgaWYgKCF3aXRoV2hpdGVzcGFjZSkge1xuICAgICAgd2hpbGUgKHRvayAmJiB0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fV0hJVEVTUEFDRSkge1xuICAgICAgICB0b2sgPSB0aGlzLnRva2Vucy5uZXh0VG9rZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvaztcbiAgfTtcbiAgX3Byb3RvLnBlZWtUb2tlbiA9IGZ1bmN0aW9uIHBlZWtUb2tlbigpIHtcbiAgICB0aGlzLnBlZWtlZCA9IHRoaXMucGVla2VkIHx8IHRoaXMubmV4dFRva2VuKCk7XG4gICAgcmV0dXJuIHRoaXMucGVla2VkO1xuICB9O1xuICBfcHJvdG8ucHVzaFRva2VuID0gZnVuY3Rpb24gcHVzaFRva2VuKHRvaykge1xuICAgIGlmICh0aGlzLnBlZWtlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwdXNoVG9rZW46IGNhbiBvbmx5IHB1c2ggb25lIHRva2VuIG9uIGJldHdlZW4gcmVhZHMnKTtcbiAgICB9XG4gICAgdGhpcy5wZWVrZWQgPSB0b2s7XG4gIH07XG4gIF9wcm90by5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1zZywgbGluZW5vLCBjb2xubykge1xuICAgIGlmIChsaW5lbm8gPT09IHVuZGVmaW5lZCB8fCBjb2xubyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdG9rID0gdGhpcy5wZWVrVG9rZW4oKSB8fCB7fTtcbiAgICAgIGxpbmVubyA9IHRvay5saW5lbm87XG4gICAgICBjb2xubyA9IHRvay5jb2xubztcbiAgICB9XG4gICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lbm8gKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbG5vICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbG5vICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbGliLlRlbXBsYXRlRXJyb3IobXNnLCBsaW5lbm8sIGNvbG5vKTtcbiAgfTtcbiAgX3Byb3RvLmZhaWwgPSBmdW5jdGlvbiBmYWlsKG1zZywgbGluZW5vLCBjb2xubykge1xuICAgIHRocm93IHRoaXMuZXJyb3IobXNnLCBsaW5lbm8sIGNvbG5vKTtcbiAgfTtcbiAgX3Byb3RvLnNraXAgPSBmdW5jdGlvbiBza2lwKHR5cGUpIHtcbiAgICB2YXIgdG9rID0gdGhpcy5uZXh0VG9rZW4oKTtcbiAgICBpZiAoIXRvayB8fCB0b2sudHlwZSAhPT0gdHlwZSkge1xuICAgICAgdGhpcy5wdXNoVG9rZW4odG9rKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIF9wcm90by5leHBlY3QgPSBmdW5jdGlvbiBleHBlY3QodHlwZSkge1xuICAgIHZhciB0b2sgPSB0aGlzLm5leHRUb2tlbigpO1xuICAgIGlmICh0b2sudHlwZSAhPT0gdHlwZSkge1xuICAgICAgdGhpcy5mYWlsKCdleHBlY3RlZCAnICsgdHlwZSArICcsIGdvdCAnICsgdG9rLnR5cGUsIHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgfVxuICAgIHJldHVybiB0b2s7XG4gIH07XG4gIF9wcm90by5za2lwVmFsdWUgPSBmdW5jdGlvbiBza2lwVmFsdWUodHlwZSwgdmFsKSB7XG4gICAgdmFyIHRvayA9IHRoaXMubmV4dFRva2VuKCk7XG4gICAgaWYgKCF0b2sgfHwgdG9rLnR5cGUgIT09IHR5cGUgfHwgdG9rLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMucHVzaFRva2VuKHRvayk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBfcHJvdG8uc2tpcFN5bWJvbCA9IGZ1bmN0aW9uIHNraXBTeW1ib2wodmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcFZhbHVlKGxleGVyLlRPS0VOX1NZTUJPTCwgdmFsKTtcbiAgfTtcbiAgX3Byb3RvLmFkdmFuY2VBZnRlckJsb2NrRW5kID0gZnVuY3Rpb24gYWR2YW5jZUFmdGVyQmxvY2tFbmQobmFtZSkge1xuICAgIHZhciB0b2s7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgICAgaWYgKCF0b2spIHtcbiAgICAgICAgdGhpcy5mYWlsKCd1bmV4cGVjdGVkIGVuZCBvZiBmaWxlJyk7XG4gICAgICB9XG4gICAgICBpZiAodG9rLnR5cGUgIT09IGxleGVyLlRPS0VOX1NZTUJPTCkge1xuICAgICAgICB0aGlzLmZhaWwoJ2FkdmFuY2VBZnRlckJsb2NrRW5kOiBleHBlY3RlZCBzeW1ib2wgdG9rZW4gb3IgJyArICdleHBsaWNpdCBuYW1lIHRvIGJlIHBhc3NlZCcpO1xuICAgICAgfVxuICAgICAgbmFtZSA9IHRoaXMubmV4dFRva2VuKCkudmFsdWU7XG4gICAgfVxuICAgIHRvayA9IHRoaXMubmV4dFRva2VuKCk7XG4gICAgaWYgKHRvayAmJiB0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fQkxPQ0tfRU5EKSB7XG4gICAgICBpZiAodG9rLnZhbHVlLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG4gICAgICAgIHRoaXMuZHJvcExlYWRpbmdXaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYWlsKCdleHBlY3RlZCBibG9jayBlbmQgaW4gJyArIG5hbWUgKyAnIHN0YXRlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rO1xuICB9O1xuICBfcHJvdG8uYWR2YW5jZUFmdGVyVmFyaWFibGVFbmQgPSBmdW5jdGlvbiBhZHZhbmNlQWZ0ZXJWYXJpYWJsZUVuZCgpIHtcbiAgICB2YXIgdG9rID0gdGhpcy5uZXh0VG9rZW4oKTtcbiAgICBpZiAodG9rICYmIHRvay50eXBlID09PSBsZXhlci5UT0tFTl9WQVJJQUJMRV9FTkQpIHtcbiAgICAgIHRoaXMuZHJvcExlYWRpbmdXaGl0ZXNwYWNlID0gdG9rLnZhbHVlLmNoYXJBdCh0b2sudmFsdWUubGVuZ3RoIC0gdGhpcy50b2tlbnMudGFncy5WQVJJQUJMRV9FTkQubGVuZ3RoIC0gMSkgPT09ICctJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoVG9rZW4odG9rKTtcbiAgICAgIHRoaXMuZmFpbCgnZXhwZWN0ZWQgdmFyaWFibGUgZW5kJyk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8ucGFyc2VGb3IgPSBmdW5jdGlvbiBwYXJzZUZvcigpIHtcbiAgICB2YXIgZm9yVG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICB2YXIgbm9kZTtcbiAgICB2YXIgZW5kQmxvY2s7XG4gICAgaWYgKHRoaXMuc2tpcFN5bWJvbCgnZm9yJykpIHtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuRm9yKGZvclRvay5saW5lbm8sIGZvclRvay5jb2xubyk7XG4gICAgICBlbmRCbG9jayA9ICdlbmRmb3InO1xuICAgIH0gZWxzZSBpZiAodGhpcy5za2lwU3ltYm9sKCdhc3luY0VhY2gnKSkge1xuICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Bc3luY0VhY2goZm9yVG9rLmxpbmVubywgZm9yVG9rLmNvbG5vKTtcbiAgICAgIGVuZEJsb2NrID0gJ2VuZGVhY2gnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5za2lwU3ltYm9sKCdhc3luY0FsbCcpKSB7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLkFzeW5jQWxsKGZvclRvay5saW5lbm8sIGZvclRvay5jb2xubyk7XG4gICAgICBlbmRCbG9jayA9ICdlbmRhbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZhaWwoJ3BhcnNlRm9yOiBleHBlY3RlZCBmb3J7QXN5bmN9JywgZm9yVG9rLmxpbmVubywgZm9yVG9rLmNvbG5vKTtcbiAgICB9XG4gICAgbm9kZS5uYW1lID0gdGhpcy5wYXJzZVByaW1hcnkoKTtcbiAgICBpZiAoIShub2RlLm5hbWUgaW5zdGFuY2VvZiBub2Rlcy5TeW1ib2wpKSB7XG4gICAgICB0aGlzLmZhaWwoJ3BhcnNlRm9yOiB2YXJpYWJsZSBuYW1lIGV4cGVjdGVkIGZvciBsb29wJyk7XG4gICAgfVxuICAgIHZhciB0eXBlID0gdGhpcy5wZWVrVG9rZW4oKS50eXBlO1xuICAgIGlmICh0eXBlID09PSBsZXhlci5UT0tFTl9DT01NQSkge1xuICAgICAgLy8ga2V5L3ZhbHVlIGl0ZXJhdGlvblxuICAgICAgdmFyIGtleSA9IG5vZGUubmFtZTtcbiAgICAgIG5vZGUubmFtZSA9IG5ldyBub2Rlcy5BcnJheShrZXkubGluZW5vLCBrZXkuY29sbm8pO1xuICAgICAgbm9kZS5uYW1lLmFkZENoaWxkKGtleSk7XG4gICAgICB3aGlsZSAodGhpcy5za2lwKGxleGVyLlRPS0VOX0NPTU1BKSkge1xuICAgICAgICB2YXIgcHJpbSA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG4gICAgICAgIG5vZGUubmFtZS5hZGRDaGlsZChwcmltKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnNraXBTeW1ib2woJ2luJykpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VGb3I6IGV4cGVjdGVkIFwiaW5cIiBrZXl3b3JkIGZvciBsb29wJywgZm9yVG9rLmxpbmVubywgZm9yVG9rLmNvbG5vKTtcbiAgICB9XG4gICAgbm9kZS5hcnIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoZm9yVG9rLnZhbHVlKTtcbiAgICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlVW50aWxCbG9ja3MoZW5kQmxvY2ssICdlbHNlJyk7XG4gICAgaWYgKHRoaXMuc2tpcFN5bWJvbCgnZWxzZScpKSB7XG4gICAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKCdlbHNlJyk7XG4gICAgICBub2RlLmVsc2VfID0gdGhpcy5wYXJzZVVudGlsQmxvY2tzKGVuZEJsb2NrKTtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCgpO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VNYWNybyA9IGZ1bmN0aW9uIHBhcnNlTWFjcm8oKSB7XG4gICAgdmFyIG1hY3JvVG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCgnbWFjcm8nKSkge1xuICAgICAgdGhpcy5mYWlsKCdleHBlY3RlZCBtYWNybycpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VQcmltYXJ5KHRydWUpO1xuICAgIHZhciBhcmdzID0gdGhpcy5wYXJzZVNpZ25hdHVyZSgpO1xuICAgIHZhciBub2RlID0gbmV3IG5vZGVzLk1hY3JvKG1hY3JvVG9rLmxpbmVubywgbWFjcm9Ub2suY29sbm8sIG5hbWUsIGFyZ3MpO1xuICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQobWFjcm9Ub2sudmFsdWUpO1xuICAgIG5vZGUuYm9keSA9IHRoaXMucGFyc2VVbnRpbEJsb2NrcygnZW5kbWFjcm8nKTtcbiAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZUNhbGwgPSBmdW5jdGlvbiBwYXJzZUNhbGwoKSB7XG4gICAgLy8gYSBjYWxsIGJsb2NrIGlzIHBhcnNlZCBhcyBhIG5vcm1hbCBGdW5DYWxsLCBidXQgd2l0aCBhbiBhZGRlZFxuICAgIC8vICdjYWxsZXInIGt3YXJnIHdoaWNoIGlzIGEgQ2FsbGVyIG5vZGUuXG4gICAgdmFyIGNhbGxUb2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIGlmICghdGhpcy5za2lwU3ltYm9sKCdjYWxsJykpIHtcbiAgICAgIHRoaXMuZmFpbCgnZXhwZWN0ZWQgY2FsbCcpO1xuICAgIH1cbiAgICB2YXIgY2FsbGVyQXJncyA9IHRoaXMucGFyc2VTaWduYXR1cmUodHJ1ZSkgfHwgbmV3IG5vZGVzLk5vZGVMaXN0KCk7XG4gICAgdmFyIG1hY3JvQ2FsbCA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZChjYWxsVG9rLnZhbHVlKTtcbiAgICB2YXIgYm9keSA9IHRoaXMucGFyc2VVbnRpbEJsb2NrcygnZW5kY2FsbCcpO1xuICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoKTtcbiAgICB2YXIgY2FsbGVyTmFtZSA9IG5ldyBub2Rlcy5TeW1ib2woY2FsbFRvay5saW5lbm8sIGNhbGxUb2suY29sbm8sICdjYWxsZXInKTtcbiAgICB2YXIgY2FsbGVyTm9kZSA9IG5ldyBub2Rlcy5DYWxsZXIoY2FsbFRvay5saW5lbm8sIGNhbGxUb2suY29sbm8sIGNhbGxlck5hbWUsIGNhbGxlckFyZ3MsIGJvZHkpO1xuXG4gICAgLy8gYWRkIHRoZSBhZGRpdGlvbmFsIGNhbGxlciBrd2FyZywgYWRkaW5nIGt3YXJncyBpZiBuZWNlc3NhcnlcbiAgICB2YXIgYXJncyA9IG1hY3JvQ2FsbC5hcmdzLmNoaWxkcmVuO1xuICAgIGlmICghKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIG5vZGVzLktleXdvcmRBcmdzKSkge1xuICAgICAgYXJncy5wdXNoKG5ldyBub2Rlcy5LZXl3b3JkQXJncygpKTtcbiAgICB9XG4gICAgdmFyIGt3YXJncyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICBrd2FyZ3MuYWRkQ2hpbGQobmV3IG5vZGVzLlBhaXIoY2FsbFRvay5saW5lbm8sIGNhbGxUb2suY29sbm8sIGNhbGxlck5hbWUsIGNhbGxlck5vZGUpKTtcbiAgICByZXR1cm4gbmV3IG5vZGVzLk91dHB1dChjYWxsVG9rLmxpbmVubywgY2FsbFRvay5jb2xubywgW21hY3JvQ2FsbF0pO1xuICB9O1xuICBfcHJvdG8ucGFyc2VXaXRoQ29udGV4dCA9IGZ1bmN0aW9uIHBhcnNlV2l0aENvbnRleHQoKSB7XG4gICAgdmFyIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgdmFyIHdpdGhDb250ZXh0ID0gbnVsbDtcbiAgICBpZiAodGhpcy5za2lwU3ltYm9sKCd3aXRoJykpIHtcbiAgICAgIHdpdGhDb250ZXh0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2tpcFN5bWJvbCgnd2l0aG91dCcpKSB7XG4gICAgICB3aXRoQ29udGV4dCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAod2l0aENvbnRleHQgIT09IG51bGwpIHtcbiAgICAgIGlmICghdGhpcy5za2lwU3ltYm9sKCdjb250ZXh0JykpIHtcbiAgICAgICAgdGhpcy5mYWlsKCdwYXJzZUZyb206IGV4cGVjdGVkIGNvbnRleHQgYWZ0ZXIgd2l0aC93aXRob3V0JywgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpdGhDb250ZXh0O1xuICB9O1xuICBfcHJvdG8ucGFyc2VJbXBvcnQgPSBmdW5jdGlvbiBwYXJzZUltcG9ydCgpIHtcbiAgICB2YXIgaW1wb3J0VG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCgnaW1wb3J0JykpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VJbXBvcnQ6IGV4cGVjdGVkIGltcG9ydCcsIGltcG9ydFRvay5saW5lbm8sIGltcG9ydFRvay5jb2xubyk7XG4gICAgfVxuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgaWYgKCF0aGlzLnNraXBTeW1ib2woJ2FzJykpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VJbXBvcnQ6IGV4cGVjdGVkIFwiYXNcIiBrZXl3b3JkJywgaW1wb3J0VG9rLmxpbmVubywgaW1wb3J0VG9rLmNvbG5vKTtcbiAgICB9XG4gICAgdmFyIHRhcmdldCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgdmFyIHdpdGhDb250ZXh0ID0gdGhpcy5wYXJzZVdpdGhDb250ZXh0KCk7XG4gICAgdmFyIG5vZGUgPSBuZXcgbm9kZXMuSW1wb3J0KGltcG9ydFRvay5saW5lbm8sIGltcG9ydFRvay5jb2xubywgdGVtcGxhdGUsIHRhcmdldCwgd2l0aENvbnRleHQpO1xuICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoaW1wb3J0VG9rLnZhbHVlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlRnJvbSA9IGZ1bmN0aW9uIHBhcnNlRnJvbSgpIHtcbiAgICB2YXIgZnJvbVRvayA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgaWYgKCF0aGlzLnNraXBTeW1ib2woJ2Zyb20nKSkge1xuICAgICAgdGhpcy5mYWlsKCdwYXJzZUZyb206IGV4cGVjdGVkIGZyb20nKTtcbiAgICB9XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCgnaW1wb3J0JykpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VGcm9tOiBleHBlY3RlZCBpbXBvcnQnLCBmcm9tVG9rLmxpbmVubywgZnJvbVRvay5jb2xubyk7XG4gICAgfVxuICAgIHZhciBuYW1lcyA9IG5ldyBub2Rlcy5Ob2RlTGlzdCgpO1xuICAgIHZhciB3aXRoQ29udGV4dDtcbiAgICB3aGlsZSAoMSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgIHZhciBuZXh0VG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICAgIGlmIChuZXh0VG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX0JMT0NLX0VORCkge1xuICAgICAgICBpZiAoIW5hbWVzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuZmFpbCgncGFyc2VGcm9tOiBFeHBlY3RlZCBhdCBsZWFzdCBvbmUgaW1wb3J0IG5hbWUnLCBmcm9tVG9rLmxpbmVubywgZnJvbVRvay5jb2xubyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5jZSB3ZSBhcmUgbWFudWFsbHkgYWR2YW5jaW5nIHBhc3QgdGhlIGJsb2NrIGVuZCxcbiAgICAgICAgLy8gbmVlZCB0byBrZWVwIHRyYWNrIG9mIHdoaXRlc3BhY2UgY29udHJvbCAobm9ybWFsbHlcbiAgICAgICAgLy8gdGhpcyBpcyBkb25lIGluIGBhZHZhbmNlQWZ0ZXJCbG9ja0VuZGBcbiAgICAgICAgaWYgKG5leHRUb2sudmFsdWUuY2hhckF0KDApID09PSAnLScpIHtcbiAgICAgICAgICB0aGlzLmRyb3BMZWFkaW5nV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobmFtZXMuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAhdGhpcy5za2lwKGxleGVyLlRPS0VOX0NPTU1BKSkge1xuICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlRnJvbTogZXhwZWN0ZWQgY29tbWEnLCBmcm9tVG9rLmxpbmVubywgZnJvbVRvay5jb2xubyk7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG4gICAgICBpZiAobmFtZS52YWx1ZS5jaGFyQXQoMCkgPT09ICdfJykge1xuICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlRnJvbTogbmFtZXMgc3RhcnRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlIGNhbm5vdCBiZSBpbXBvcnRlZCcsIG5hbWUubGluZW5vLCBuYW1lLmNvbG5vKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNraXBTeW1ib2woJ2FzJykpIHtcbiAgICAgICAgdmFyIGFsaWFzID0gdGhpcy5wYXJzZVByaW1hcnkoKTtcbiAgICAgICAgbmFtZXMuYWRkQ2hpbGQobmV3IG5vZGVzLlBhaXIobmFtZS5saW5lbm8sIG5hbWUuY29sbm8sIG5hbWUsIGFsaWFzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lcy5hZGRDaGlsZChuYW1lKTtcbiAgICAgIH1cbiAgICAgIHdpdGhDb250ZXh0ID0gdGhpcy5wYXJzZVdpdGhDb250ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbm9kZXMuRnJvbUltcG9ydChmcm9tVG9rLmxpbmVubywgZnJvbVRvay5jb2xubywgdGVtcGxhdGUsIG5hbWVzLCB3aXRoQ29udGV4dCk7XG4gIH07XG4gIF9wcm90by5wYXJzZUJsb2NrID0gZnVuY3Rpb24gcGFyc2VCbG9jaygpIHtcbiAgICB2YXIgdGFnID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCgnYmxvY2snKSkge1xuICAgICAgdGhpcy5mYWlsKCdwYXJzZUJsb2NrOiBleHBlY3RlZCBibG9jaycsIHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgfVxuICAgIHZhciBub2RlID0gbmV3IG5vZGVzLkJsb2NrKHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgbm9kZS5uYW1lID0gdGhpcy5wYXJzZVByaW1hcnkoKTtcbiAgICBpZiAoIShub2RlLm5hbWUgaW5zdGFuY2VvZiBub2Rlcy5TeW1ib2wpKSB7XG4gICAgICB0aGlzLmZhaWwoJ3BhcnNlQmxvY2s6IHZhcmlhYmxlIG5hbWUgZXhwZWN0ZWQnLCB0YWcubGluZW5vLCB0YWcuY29sbm8pO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKHRhZy52YWx1ZSk7XG4gICAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVVudGlsQmxvY2tzKCdlbmRibG9jaycpO1xuICAgIHRoaXMuc2tpcFN5bWJvbCgnZW5kYmxvY2snKTtcbiAgICB0aGlzLnNraXBTeW1ib2wobm9kZS5uYW1lLnZhbHVlKTtcbiAgICB2YXIgdG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRvaykge1xuICAgICAgdGhpcy5mYWlsKCdwYXJzZUJsb2NrOiBleHBlY3RlZCBlbmRibG9jaywgZ290IGVuZCBvZiBmaWxlJyk7XG4gICAgfVxuICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQodG9rLnZhbHVlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlRXh0ZW5kcyA9IGZ1bmN0aW9uIHBhcnNlRXh0ZW5kcygpIHtcbiAgICB2YXIgdGFnTmFtZSA9ICdleHRlbmRzJztcbiAgICB2YXIgdGFnID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCh0YWdOYW1lKSkge1xuICAgICAgdGhpcy5mYWlsKCdwYXJzZVRlbXBsYXRlUmVmOiBleHBlY3RlZCAnICsgdGFnTmFtZSk7XG4gICAgfVxuICAgIHZhciBub2RlID0gbmV3IG5vZGVzLkV4dGVuZHModGFnLmxpbmVubywgdGFnLmNvbG5vKTtcbiAgICBub2RlLnRlbXBsYXRlID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKHRhZy52YWx1ZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZUluY2x1ZGUgPSBmdW5jdGlvbiBwYXJzZUluY2x1ZGUoKSB7XG4gICAgdmFyIHRhZ05hbWUgPSAnaW5jbHVkZSc7XG4gICAgdmFyIHRhZyA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgaWYgKCF0aGlzLnNraXBTeW1ib2wodGFnTmFtZSkpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VJbmNsdWRlOiBleHBlY3RlZCAnICsgdGFnTmFtZSk7XG4gICAgfVxuICAgIHZhciBub2RlID0gbmV3IG5vZGVzLkluY2x1ZGUodGFnLmxpbmVubywgdGFnLmNvbG5vKTtcbiAgICBub2RlLnRlbXBsYXRlID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICBpZiAodGhpcy5za2lwU3ltYm9sKCdpZ25vcmUnKSAmJiB0aGlzLnNraXBTeW1ib2woJ21pc3NpbmcnKSkge1xuICAgICAgbm9kZS5pZ25vcmVNaXNzaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCh0YWcudmFsdWUpO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VJZiA9IGZ1bmN0aW9uIHBhcnNlSWYoKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRoaXMuc2tpcFN5bWJvbCgnaWYnKSB8fCB0aGlzLnNraXBTeW1ib2woJ2VsaWYnKSB8fCB0aGlzLnNraXBTeW1ib2woJ2Vsc2VpZicpKSB7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLklmKHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNraXBTeW1ib2woJ2lmQXN5bmMnKSkge1xuICAgICAgbm9kZSA9IG5ldyBub2Rlcy5JZkFzeW5jKHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VJZjogZXhwZWN0ZWQgaWYsIGVsaWYsIG9yIGVsc2VpZicsIHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgfVxuICAgIG5vZGUuY29uZCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCh0YWcudmFsdWUpO1xuICAgIG5vZGUuYm9keSA9IHRoaXMucGFyc2VVbnRpbEJsb2NrcygnZWxpZicsICdlbHNlaWYnLCAnZWxzZScsICdlbmRpZicpO1xuICAgIHZhciB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIHN3aXRjaCAodG9rICYmIHRvay52YWx1ZSkge1xuICAgICAgY2FzZSAnZWxzZWlmJzpcbiAgICAgIGNhc2UgJ2VsaWYnOlxuICAgICAgICBub2RlLmVsc2VfID0gdGhpcy5wYXJzZUlmKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWxzZSc6XG4gICAgICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoKTtcbiAgICAgICAgbm9kZS5lbHNlXyA9IHRoaXMucGFyc2VVbnRpbEJsb2NrcygnZW5kaWYnKTtcbiAgICAgICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VuZGlmJzpcbiAgICAgICAgbm9kZS5lbHNlXyA9IG51bGw7XG4gICAgICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlSWY6IGV4cGVjdGVkIGVsaWYsIGVsc2UsIG9yIGVuZGlmLCBnb3QgZW5kIG9mIGZpbGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVNldCA9IGZ1bmN0aW9uIHBhcnNlU2V0KCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIGlmICghdGhpcy5za2lwU3ltYm9sKCdzZXQnKSkge1xuICAgICAgdGhpcy5mYWlsKCdwYXJzZVNldDogZXhwZWN0ZWQgc2V0JywgdGFnLmxpbmVubywgdGFnLmNvbG5vKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBuZXcgbm9kZXMuU2V0KHRhZy5saW5lbm8sIHRhZy5jb2xubywgW10pO1xuICAgIHZhciB0YXJnZXQ7XG4gICAgd2hpbGUgKHRhcmdldCA9IHRoaXMucGFyc2VQcmltYXJ5KCkpIHtcbiAgICAgIG5vZGUudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICBpZiAoIXRoaXMuc2tpcChsZXhlci5UT0tFTl9DT01NQSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fT1BFUkFUT1IsICc9JykpIHtcbiAgICAgIGlmICghdGhpcy5za2lwKGxleGVyLlRPS0VOX0JMT0NLX0VORCkpIHtcbiAgICAgICAgdGhpcy5mYWlsKCdwYXJzZVNldDogZXhwZWN0ZWQgPSBvciBibG9jayBlbmQgaW4gc2V0IHRhZycsIHRhZy5saW5lbm8sIHRhZy5jb2xubyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLmJvZHkgPSBuZXcgbm9kZXMuQ2FwdHVyZSh0YWcubGluZW5vLCB0YWcuY29sbm8sIHRoaXMucGFyc2VVbnRpbEJsb2NrcygnZW5kc2V0JykpO1xuICAgICAgICBub2RlLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnZhbHVlID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQodGFnLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVN3aXRjaCA9IGZ1bmN0aW9uIHBhcnNlU3dpdGNoKCkge1xuICAgIC8qXG4gICAgICogU3RvcmUgdGhlIHRhZyBuYW1lcyBpbiB2YXJpYWJsZXMgaW4gY2FzZSBzb21lb25lIGV2ZXIgd2FudHMgdG9cbiAgICAgKiBjdXN0b21pemUgdGhpcy5cbiAgICAgKi9cbiAgICB2YXIgc3dpdGNoU3RhcnQgPSAnc3dpdGNoJztcbiAgICB2YXIgc3dpdGNoRW5kID0gJ2VuZHN3aXRjaCc7XG4gICAgdmFyIGNhc2VTdGFydCA9ICdjYXNlJztcbiAgICB2YXIgY2FzZURlZmF1bHQgPSAnZGVmYXVsdCc7XG5cbiAgICAvLyBHZXQgdGhlIHN3aXRjaCB0YWcuXG4gICAgdmFyIHRhZyA9IHRoaXMucGVla1Rva2VuKCk7XG5cbiAgICAvLyBmYWlsIGVhcmx5IGlmIHdlIGdldCBzb21lIHVuZXhwZWN0ZWQgdGFnLlxuICAgIGlmICghdGhpcy5za2lwU3ltYm9sKHN3aXRjaFN0YXJ0KSAmJiAhdGhpcy5za2lwU3ltYm9sKGNhc2VTdGFydCkgJiYgIXRoaXMuc2tpcFN5bWJvbChjYXNlRGVmYXVsdCkpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VTd2l0Y2g6IGV4cGVjdGVkIFwic3dpdGNoLFwiIFwiY2FzZVwiIG9yIFwiZGVmYXVsdFwiJywgdGFnLmxpbmVubywgdGFnLmNvbG5vKTtcbiAgICB9XG5cbiAgICAvLyBwYXJzZSB0aGUgc3dpdGNoIGV4cHJlc3Npb25cbiAgICB2YXIgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG5cbiAgICAvLyBhZHZhbmNlIHVudGlsIGEgc3RhcnQgb2YgYSBjYXNlLCBhIGRlZmF1bHQgY2FzZSBvciBhbiBlbmRzd2l0Y2guXG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZChzd2l0Y2hTdGFydCk7XG4gICAgdGhpcy5wYXJzZVVudGlsQmxvY2tzKGNhc2VTdGFydCwgY2FzZURlZmF1bHQsIHN3aXRjaEVuZCk7XG5cbiAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCBjYXNlLiBpdCBjb3VsZCBhbHNvIGJlIGFuIGVuZHN3aXRjaCwgd2UnbGwgY2hlY2suXG4gICAgdmFyIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IHZhcmlhYmxlcyBmb3Igb3VyIGNhc2VzIGFuZCBkZWZhdWx0IGNhc2UuXG4gICAgdmFyIGNhc2VzID0gW107XG4gICAgdmFyIGRlZmF1bHRDYXNlO1xuXG4gICAgLy8gd2hpbGUgd2UncmUgZGVhbGluZyB3aXRoIG5ldyBjYXNlcyBub2Rlcy4uLlxuICAgIGRvIHtcbiAgICAgIC8vIHNraXAgdGhlIHN0YXJ0IHN5bWJvbCBhbmQgZ2V0IHRoZSBjYXNlIGV4cHJlc3Npb25cbiAgICAgIHRoaXMuc2tpcFN5bWJvbChjYXNlU3RhcnQpO1xuICAgICAgdmFyIGNvbmQgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZChzd2l0Y2hTdGFydCk7XG4gICAgICAvLyBnZXQgdGhlIGJvZHkgb2YgdGhlIGNhc2Ugbm9kZSBhbmQgYWRkIGl0IHRvIHRoZSBhcnJheSBvZiBjYXNlcy5cbiAgICAgIHZhciBib2R5ID0gdGhpcy5wYXJzZVVudGlsQmxvY2tzKGNhc2VTdGFydCwgY2FzZURlZmF1bHQsIHN3aXRjaEVuZCk7XG4gICAgICBjYXNlcy5wdXNoKG5ldyBub2Rlcy5DYXNlKHRvay5saW5lLCB0b2suY29sLCBjb25kLCBib2R5KSk7XG4gICAgICAvLyBnZXQgb3VyIG5leHQgY2FzZVxuICAgICAgdG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICB9IHdoaWxlICh0b2sgJiYgdG9rLnZhbHVlID09PSBjYXNlU3RhcnQpO1xuXG4gICAgLy8gd2UgZWl0aGVyIGhhdmUgYSBkZWZhdWx0IGNhc2Ugb3IgYSBzd2l0Y2ggZW5kLlxuICAgIHN3aXRjaCAodG9rLnZhbHVlKSB7XG4gICAgICBjYXNlIGNhc2VEZWZhdWx0OlxuICAgICAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKCk7XG4gICAgICAgIGRlZmF1bHRDYXNlID0gdGhpcy5wYXJzZVVudGlsQmxvY2tzKHN3aXRjaEVuZCk7XG4gICAgICAgIHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN3aXRjaEVuZDpcbiAgICAgICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIG90aGVyd2lzZSBiYWlsIGJlY2F1c2UgRU9GXG4gICAgICAgIHRoaXMuZmFpbCgncGFyc2VTd2l0Y2g6IGV4cGVjdGVkIFwiY2FzZSxcIiBcImRlZmF1bHRcIiBvciBcImVuZHN3aXRjaCxcIiBnb3QgRU9GLicpO1xuICAgIH1cblxuICAgIC8vIGFuZCByZXR1cm4gdGhlIHN3aXRjaCBub2RlLlxuICAgIHJldHVybiBuZXcgbm9kZXMuU3dpdGNoKHRhZy5saW5lbm8sIHRhZy5jb2xubywgZXhwciwgY2FzZXMsIGRlZmF1bHRDYXNlKTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlU3RhdGVtZW50ID0gZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQoKSB7XG4gICAgdmFyIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKHRvay50eXBlICE9PSBsZXhlci5UT0tFTl9TWU1CT0wpIHtcbiAgICAgIHRoaXMuZmFpbCgndGFnIG5hbWUgZXhwZWN0ZWQnLCB0b2subGluZW5vLCB0b2suY29sbm8pO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmVha09uQmxvY2tzICYmIGxpYi5pbmRleE9mKHRoaXMuYnJlYWtPbkJsb2NrcywgdG9rLnZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRvay52YWx1ZSkge1xuICAgICAgY2FzZSAncmF3JzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSYXcoKTtcbiAgICAgIGNhc2UgJ3ZlcmJhdGltJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSYXcoJ3ZlcmJhdGltJyk7XG4gICAgICBjYXNlICdpZic6XG4gICAgICBjYXNlICdpZkFzeW5jJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJZigpO1xuICAgICAgY2FzZSAnZm9yJzpcbiAgICAgIGNhc2UgJ2FzeW5jRWFjaCc6XG4gICAgICBjYXNlICdhc3luY0FsbCc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRm9yKCk7XG4gICAgICBjYXNlICdibG9jayc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQmxvY2soKTtcbiAgICAgIGNhc2UgJ2V4dGVuZHMnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUV4dGVuZHMoKTtcbiAgICAgIGNhc2UgJ2luY2x1ZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUluY2x1ZGUoKTtcbiAgICAgIGNhc2UgJ3NldCc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2V0KCk7XG4gICAgICBjYXNlICdtYWNybyc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTWFjcm8oKTtcbiAgICAgIGNhc2UgJ2NhbGwnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNhbGwoKTtcbiAgICAgIGNhc2UgJ2ltcG9ydCc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW1wb3J0KCk7XG4gICAgICBjYXNlICdmcm9tJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGcm9tKCk7XG4gICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZpbHRlclN0YXRlbWVudCgpO1xuICAgICAgY2FzZSAnc3dpdGNoJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTd2l0Y2goKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLmV4dGVuc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleHQgPSB0aGlzLmV4dGVuc2lvbnNbaV07XG4gICAgICAgICAgICBpZiAobGliLmluZGV4T2YoZXh0LnRhZ3MgfHwgW10sIHRvay52YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBleHQucGFyc2UodGhpcywgbm9kZXMsIGxleGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mYWlsKCd1bmtub3duIGJsb2NrIHRhZzogJyArIHRvay52YWx1ZSwgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVJhdyA9IGZ1bmN0aW9uIHBhcnNlUmF3KHRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZSB8fCAncmF3JztcbiAgICB2YXIgZW5kVGFnTmFtZSA9ICdlbmQnICsgdGFnTmFtZTtcbiAgICAvLyBMb29rIGZvciB1cGNvbWluZyByYXcgYmxvY2tzIChpZ25vcmUgYWxsIG90aGVyIGtpbmRzIG9mIGJsb2NrcylcbiAgICB2YXIgcmF3QmxvY2tSZWdleCA9IG5ldyBSZWdFeHAoJyhbXFxcXHNcXFxcU10qPyl7JVxcXFxzKignICsgdGFnTmFtZSArICd8JyArIGVuZFRhZ05hbWUgKyAnKVxcXFxzKig/PSV9KSV9Jyk7XG4gICAgdmFyIHJhd0xldmVsID0gMTtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIG1hdGNoZXMgPSBudWxsO1xuXG4gICAgLy8gU2tpcCBvcGVuaW5nIHJhdyB0b2tlblxuICAgIC8vIEtlZXAgdGhpcyB0b2tlbiB0byB0cmFjayBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICAgIHZhciBiZWd1biA9IHRoaXMuYWR2YW5jZUFmdGVyQmxvY2tFbmQoKTtcblxuICAgIC8vIEV4aXQgd2hlbiB0aGVyZSdzIG5vdGhpbmcgdG8gbWF0Y2hcbiAgICAvLyBvciB3aGVuIHdlJ3ZlIGZvdW5kIHRoZSBtYXRjaGluZyBcImVuZHJhd1wiIGJsb2NrXG4gICAgd2hpbGUgKChtYXRjaGVzID0gdGhpcy50b2tlbnMuX2V4dHJhY3RSZWdleChyYXdCbG9ja1JlZ2V4KSkgJiYgcmF3TGV2ZWwgPiAwKSB7XG4gICAgICB2YXIgYWxsID0gbWF0Y2hlc1swXTtcbiAgICAgIHZhciBwcmUgPSBtYXRjaGVzWzFdO1xuICAgICAgdmFyIGJsb2NrTmFtZSA9IG1hdGNoZXNbMl07XG5cbiAgICAgIC8vIEFkanVzdCByYXdsZXZlbFxuICAgICAgaWYgKGJsb2NrTmFtZSA9PT0gdGFnTmFtZSkge1xuICAgICAgICByYXdMZXZlbCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChibG9ja05hbWUgPT09IGVuZFRhZ05hbWUpIHtcbiAgICAgICAgcmF3TGV2ZWwgLT0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRvIHN0clxuICAgICAgaWYgKHJhd0xldmVsID09PSAwKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gZXhjbHVkZSB0aGUgbGFzdCBcImVuZHJhd1wiXG4gICAgICAgIHN0ciArPSBwcmU7XG4gICAgICAgIC8vIE1vdmUgdG9rZW5pemVyIHRvIGJlZ2lubmluZyBvZiBlbmRyYXcgYmxvY2tcbiAgICAgICAgdGhpcy50b2tlbnMuYmFja04oYWxsLmxlbmd0aCAtIHByZS5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyICs9IGFsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBub2Rlcy5PdXRwdXQoYmVndW4ubGluZW5vLCBiZWd1bi5jb2xubywgW25ldyBub2Rlcy5UZW1wbGF0ZURhdGEoYmVndW4ubGluZW5vLCBiZWd1bi5jb2xubywgc3RyKV0pO1xuICB9O1xuICBfcHJvdG8ucGFyc2VQb3N0Zml4ID0gZnVuY3Rpb24gcGFyc2VQb3N0Zml4KG5vZGUpIHtcbiAgICB2YXIgbG9va3VwO1xuICAgIHZhciB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIHdoaWxlICh0b2spIHtcbiAgICAgIGlmICh0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fTEVGVF9QQVJFTikge1xuICAgICAgICAvLyBGdW5jdGlvbiBjYWxsXG4gICAgICAgIG5vZGUgPSBuZXcgbm9kZXMuRnVuQ2FsbCh0b2subGluZW5vLCB0b2suY29sbm8sIG5vZGUsIHRoaXMucGFyc2VTaWduYXR1cmUoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9MRUZUX0JSQUNLRVQpIHtcbiAgICAgICAgLy8gUmVmZXJlbmNlXG4gICAgICAgIGxvb2t1cCA9IHRoaXMucGFyc2VBZ2dyZWdhdGUoKTtcbiAgICAgICAgaWYgKGxvb2t1cC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKCdpbnZhbGlkIGluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Mb29rdXBWYWwodG9rLmxpbmVubywgdG9rLmNvbG5vLCBub2RlLCBsb29rdXAuY2hpbGRyZW5bMF0pO1xuICAgICAgfSBlbHNlIGlmICh0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fT1BFUkFUT1IgJiYgdG9rLnZhbHVlID09PSAnLicpIHtcbiAgICAgICAgLy8gUmVmZXJlbmNlXG4gICAgICAgIHRoaXMubmV4dFRva2VuKCk7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLm5leHRUb2tlbigpO1xuICAgICAgICBpZiAodmFsLnR5cGUgIT09IGxleGVyLlRPS0VOX1NZTUJPTCkge1xuICAgICAgICAgIHRoaXMuZmFpbCgnZXhwZWN0ZWQgbmFtZSBhcyBsb29rdXAgdmFsdWUsIGdvdCAnICsgdmFsLnZhbHVlLCB2YWwubGluZW5vLCB2YWwuY29sbm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBhIGxpdGVyYWwgc3RyaW5nIGJlY2F1c2UgaXQncyBub3QgYSB2YXJpYWJsZVxuICAgICAgICAvLyByZWZlcmVuY2VcbiAgICAgICAgbG9va3VwID0gbmV3IG5vZGVzLkxpdGVyYWwodmFsLmxpbmVubywgdmFsLmNvbG5vLCB2YWwudmFsdWUpO1xuICAgICAgICBub2RlID0gbmV3IG5vZGVzLkxvb2t1cFZhbCh0b2subGluZW5vLCB0b2suY29sbm8sIG5vZGUsIGxvb2t1cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VFeHByZXNzaW9uID0gZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXJzZUlubGluZUlmKCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZUlubGluZUlmID0gZnVuY3Rpb24gcGFyc2VJbmxpbmVJZigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VPcigpO1xuICAgIGlmICh0aGlzLnNraXBTeW1ib2woJ2lmJykpIHtcbiAgICAgIHZhciBjb25kTm9kZSA9IHRoaXMucGFyc2VPcigpO1xuICAgICAgdmFyIGJvZHlOb2RlID0gbm9kZTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuSW5saW5lSWYobm9kZS5saW5lbm8sIG5vZGUuY29sbm8pO1xuICAgICAgbm9kZS5ib2R5ID0gYm9keU5vZGU7XG4gICAgICBub2RlLmNvbmQgPSBjb25kTm9kZTtcbiAgICAgIGlmICh0aGlzLnNraXBTeW1ib2woJ2Vsc2UnKSkge1xuICAgICAgICBub2RlLmVsc2VfID0gdGhpcy5wYXJzZU9yKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLmVsc2VfID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZU9yID0gZnVuY3Rpb24gcGFyc2VPcigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VBbmQoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwU3ltYm9sKCdvcicpKSB7XG4gICAgICB2YXIgbm9kZTIgPSB0aGlzLnBhcnNlQW5kKCk7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLk9yKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VBbmQgPSBmdW5jdGlvbiBwYXJzZUFuZCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VOb3QoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwU3ltYm9sKCdhbmQnKSkge1xuICAgICAgdmFyIG5vZGUyID0gdGhpcy5wYXJzZU5vdCgpO1xuICAgICAgbm9kZSA9IG5ldyBub2Rlcy5BbmQobm9kZS5saW5lbm8sIG5vZGUuY29sbm8sIG5vZGUsIG5vZGUyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZU5vdCA9IGZ1bmN0aW9uIHBhcnNlTm90KCkge1xuICAgIHZhciB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIGlmICh0aGlzLnNraXBTeW1ib2woJ25vdCcpKSB7XG4gICAgICByZXR1cm4gbmV3IG5vZGVzLk5vdCh0b2subGluZW5vLCB0b2suY29sbm8sIHRoaXMucGFyc2VOb3QoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlSW4oKTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlSW4gPSBmdW5jdGlvbiBwYXJzZUluKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXJzZUlzKCk7XG4gICAgd2hpbGUgKDEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAvLyBjaGVjayBpZiB0aGUgbmV4dCB0b2tlbiBpcyAnbm90J1xuICAgICAgdmFyIHRvayA9IHRoaXMubmV4dFRva2VuKCk7XG4gICAgICBpZiAoIXRvaykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciBpbnZlcnQgPSB0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fU1lNQk9MICYmIHRvay52YWx1ZSA9PT0gJ25vdCc7XG4gICAgICAvLyBpZiBpdCB3YXNuJ3QgJ25vdCcsIHB1dCBpdCBiYWNrXG4gICAgICBpZiAoIWludmVydCkge1xuICAgICAgICB0aGlzLnB1c2hUb2tlbih0b2spO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2tpcFN5bWJvbCgnaW4nKSkge1xuICAgICAgICB2YXIgbm9kZTIgPSB0aGlzLnBhcnNlSXMoKTtcbiAgICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Jbihub2RlLmxpbmVubywgbm9kZS5jb2xubywgbm9kZSwgbm9kZTIpO1xuICAgICAgICBpZiAoaW52ZXJ0KSB7XG4gICAgICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Ob3Qobm9kZS5saW5lbm8sIG5vZGUuY29sbm8sIG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB3ZSdkIGZvdW5kIGEgJ25vdCcgYnV0IHRoaXMgd2Fzbid0IGFuICdpbicsIHB1dCBiYWNrIHRoZSAnbm90J1xuICAgICAgICBpZiAoaW52ZXJ0KSB7XG4gICAgICAgICAgdGhpcy5wdXNoVG9rZW4odG9rKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBJIHB1dCB0aGlzIHJpZ2h0IGFmdGVyIFwiaW5cIiBpbiB0aGUgb3BlcmF0b3IgcHJlY2VkZW5jZSBzdGFjay4gVGhhdCBjYW5cbiAgLy8gb2J2aW91c2x5IGJlIGNoYW5nZWQgdG8gYmUgY2xvc2VyIHRvIEppbmphLlxuICA7XG4gIF9wcm90by5wYXJzZUlzID0gZnVuY3Rpb24gcGFyc2VJcygpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VDb21wYXJlKCk7XG4gICAgLy8gbG9vayBmb3IgYW4gaXNcbiAgICBpZiAodGhpcy5za2lwU3ltYm9sKCdpcycpKSB7XG4gICAgICAvLyBsb29rIGZvciBhIG5vdFxuICAgICAgdmFyIG5vdCA9IHRoaXMuc2tpcFN5bWJvbCgnbm90Jyk7XG4gICAgICAvLyBnZXQgdGhlIG5leHQgbm9kZVxuICAgICAgdmFyIG5vZGUyID0gdGhpcy5wYXJzZUNvbXBhcmUoKTtcbiAgICAgIC8vIGNyZWF0ZSBhbiBJcyBub2RlIHVzaW5nIHRoZSBuZXh0IG5vZGUgYW5kIHRoZSBpbmZvIGZyb20gb3VyIElzIG5vZGUuXG4gICAgICBub2RlID0gbmV3IG5vZGVzLklzKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgICAvLyBpZiB3ZSBoYXZlIGEgTm90LCBjcmVhdGUgYSBOb3Qgbm9kZSBmcm9tIG91ciBJcyBub2RlLlxuICAgICAgaWYgKG5vdCkge1xuICAgICAgICBub2RlID0gbmV3IG5vZGVzLk5vdChub2RlLmxpbmVubywgbm9kZS5jb2xubywgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgbm9kZS5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlQ29tcGFyZSA9IGZ1bmN0aW9uIHBhcnNlQ29tcGFyZSgpIHtcbiAgICB2YXIgY29tcGFyZU9wcyA9IFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJz4nLCAnPD0nLCAnPj0nXTtcbiAgICB2YXIgZXhwciA9IHRoaXMucGFyc2VDb25jYXQoKTtcbiAgICB2YXIgb3BzID0gW107XG4gICAgd2hpbGUgKDEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICB2YXIgdG9rID0gdGhpcy5uZXh0VG9rZW4oKTtcbiAgICAgIGlmICghdG9rKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChjb21wYXJlT3BzLmluZGV4T2YodG9rLnZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgb3BzLnB1c2gobmV3IG5vZGVzLkNvbXBhcmVPcGVyYW5kKHRvay5saW5lbm8sIHRvay5jb2xubywgdGhpcy5wYXJzZUNvbmNhdCgpLCB0b2sudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaFRva2VuKHRvayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3BzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBub2Rlcy5Db21wYXJlKG9wc1swXS5saW5lbm8sIG9wc1swXS5jb2xubywgZXhwciwgb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuICB9XG5cbiAgLy8gZmluZHMgdGhlICd+JyBmb3Igc3RyaW5nIGNvbmNhdGVuYXRpb25cbiAgO1xuICBfcHJvdG8ucGFyc2VDb25jYXQgPSBmdW5jdGlvbiBwYXJzZUNvbmNhdCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VBZGQoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fVElMREUsICd+JykpIHtcbiAgICAgIHZhciBub2RlMiA9IHRoaXMucGFyc2VBZGQoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuQ29uY2F0KG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VBZGQgPSBmdW5jdGlvbiBwYXJzZUFkZCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VTdWIoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fT1BFUkFUT1IsICcrJykpIHtcbiAgICAgIHZhciBub2RlMiA9IHRoaXMucGFyc2VTdWIoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuQWRkKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VTdWIgPSBmdW5jdGlvbiBwYXJzZVN1YigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VNdWwoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fT1BFUkFUT1IsICctJykpIHtcbiAgICAgIHZhciBub2RlMiA9IHRoaXMucGFyc2VNdWwoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuU3ViKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VNdWwgPSBmdW5jdGlvbiBwYXJzZU11bCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VEaXYoKTtcbiAgICB3aGlsZSAodGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fT1BFUkFUT1IsICcqJykpIHtcbiAgICAgIHZhciBub2RlMiA9IHRoaXMucGFyc2VEaXYoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuTXVsKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLCBub2RlMik7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VEaXYgPSBmdW5jdGlvbiBwYXJzZURpdigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMucGFyc2VGbG9vckRpdigpO1xuICAgIHdoaWxlICh0aGlzLnNraXBWYWx1ZShsZXhlci5UT0tFTl9PUEVSQVRPUiwgJy8nKSkge1xuICAgICAgdmFyIG5vZGUyID0gdGhpcy5wYXJzZUZsb29yRGl2KCk7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLkRpdihub2RlLmxpbmVubywgbm9kZS5jb2xubywgbm9kZSwgbm9kZTIpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlRmxvb3JEaXYgPSBmdW5jdGlvbiBwYXJzZUZsb29yRGl2KCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXJzZU1vZCgpO1xuICAgIHdoaWxlICh0aGlzLnNraXBWYWx1ZShsZXhlci5UT0tFTl9PUEVSQVRPUiwgJy8vJykpIHtcbiAgICAgIHZhciBub2RlMiA9IHRoaXMucGFyc2VNb2QoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuRmxvb3JEaXYobm9kZS5saW5lbm8sIG5vZGUuY29sbm8sIG5vZGUsIG5vZGUyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZU1vZCA9IGZ1bmN0aW9uIHBhcnNlTW9kKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXJzZVBvdygpO1xuICAgIHdoaWxlICh0aGlzLnNraXBWYWx1ZShsZXhlci5UT0tFTl9PUEVSQVRPUiwgJyUnKSkge1xuICAgICAgdmFyIG5vZGUyID0gdGhpcy5wYXJzZVBvdygpO1xuICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Nb2Qobm9kZS5saW5lbm8sIG5vZGUuY29sbm8sIG5vZGUsIG5vZGUyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVBvdyA9IGZ1bmN0aW9uIHBhcnNlUG93KCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG4gICAgd2hpbGUgKHRoaXMuc2tpcFZhbHVlKGxleGVyLlRPS0VOX09QRVJBVE9SLCAnKionKSkge1xuICAgICAgdmFyIG5vZGUyID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLlBvdyhub2RlLmxpbmVubywgbm9kZS5jb2xubywgbm9kZSwgbm9kZTIpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlVW5hcnkgPSBmdW5jdGlvbiBwYXJzZVVuYXJ5KG5vRmlsdGVycykge1xuICAgIHZhciB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIHZhciBub2RlO1xuICAgIGlmICh0aGlzLnNraXBWYWx1ZShsZXhlci5UT0tFTl9PUEVSQVRPUiwgJy0nKSkge1xuICAgICAgbm9kZSA9IG5ldyBub2Rlcy5OZWcodG9rLmxpbmVubywgdG9rLmNvbG5vLCB0aGlzLnBhcnNlVW5hcnkodHJ1ZSkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5za2lwVmFsdWUobGV4ZXIuVE9LRU5fT1BFUkFUT1IsICcrJykpIHtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuUG9zKHRvay5saW5lbm8sIHRvay5jb2xubywgdGhpcy5wYXJzZVVuYXJ5KHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG4gICAgfVxuICAgIGlmICghbm9GaWx0ZXJzKSB7XG4gICAgICBub2RlID0gdGhpcy5wYXJzZUZpbHRlcihub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVByaW1hcnkgPSBmdW5jdGlvbiBwYXJzZVByaW1hcnkobm9Qb3N0Zml4KSB7XG4gICAgdmFyIHRvayA9IHRoaXMubmV4dFRva2VuKCk7XG4gICAgdmFyIHZhbDtcbiAgICB2YXIgbm9kZSA9IG51bGw7XG4gICAgaWYgKCF0b2spIHtcbiAgICAgIHRoaXMuZmFpbCgnZXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IGVuZCBvZiBmaWxlJyk7XG4gICAgfSBlbHNlIGlmICh0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fU1RSSU5HKSB7XG4gICAgICB2YWwgPSB0b2sudmFsdWU7XG4gICAgfSBlbHNlIGlmICh0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fSU5UKSB7XG4gICAgICB2YWwgPSBwYXJzZUludCh0b2sudmFsdWUsIDEwKTtcbiAgICB9IGVsc2UgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9GTE9BVCkge1xuICAgICAgdmFsID0gcGFyc2VGbG9hdCh0b2sudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX0JPT0xFQU4pIHtcbiAgICAgIGlmICh0b2sudmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0b2sudmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhaWwoJ2ludmFsaWQgYm9vbGVhbjogJyArIHRvay52YWx1ZSwgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9OT05FKSB7XG4gICAgICB2YWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX1JFR0VYKSB7XG4gICAgICB2YWwgPSBuZXcgUmVnRXhwKHRvay52YWx1ZS5ib2R5LCB0b2sudmFsdWUuZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuTGl0ZXJhbCh0b2subGluZW5vLCB0b2suY29sbm8sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fU1lNQk9MKSB7XG4gICAgICBub2RlID0gbmV3IG5vZGVzLlN5bWJvbCh0b2subGluZW5vLCB0b2suY29sbm8sIHRvay52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZSBpZiBpdCdzIGFuIGFnZ3JlZ2F0ZSB0eXBlLCB3ZSBuZWVkIHRvIHB1c2ggdGhlXG4gICAgICAvLyBjdXJyZW50IGRlbGltaXRlciB0b2tlbiBiYWNrIG9uXG4gICAgICB0aGlzLnB1c2hUb2tlbih0b2spO1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VBZ2dyZWdhdGUoKTtcbiAgICB9XG4gICAgaWYgKCFub1Bvc3RmaXgpIHtcbiAgICAgIG5vZGUgPSB0aGlzLnBhcnNlUG9zdGZpeChub2RlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLmVycm9yKFwidW5leHBlY3RlZCB0b2tlbjogXCIgKyB0b2sudmFsdWUsIHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8ucGFyc2VGaWx0ZXJOYW1lID0gZnVuY3Rpb24gcGFyc2VGaWx0ZXJOYW1lKCkge1xuICAgIHZhciB0b2sgPSB0aGlzLmV4cGVjdChsZXhlci5UT0tFTl9TWU1CT0wpO1xuICAgIHZhciBuYW1lID0gdG9rLnZhbHVlO1xuICAgIHdoaWxlICh0aGlzLnNraXBWYWx1ZShsZXhlci5UT0tFTl9PUEVSQVRPUiwgJy4nKSkge1xuICAgICAgbmFtZSArPSAnLicgKyB0aGlzLmV4cGVjdChsZXhlci5UT0tFTl9TWU1CT0wpLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IG5vZGVzLlN5bWJvbCh0b2subGluZW5vLCB0b2suY29sbm8sIG5hbWUpO1xuICB9O1xuICBfcHJvdG8ucGFyc2VGaWx0ZXJBcmdzID0gZnVuY3Rpb24gcGFyc2VGaWx0ZXJBcmdzKG5vZGUpIHtcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50eXBlID09PSBsZXhlci5UT0tFTl9MRUZUX1BBUkVOKSB7XG4gICAgICAvLyBHZXQgYSBGdW5DYWxsIG5vZGUgYW5kIGFkZCB0aGUgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgIC8vIGZpbHRlclxuICAgICAgdmFyIGNhbGwgPSB0aGlzLnBhcnNlUG9zdGZpeChub2RlKTtcbiAgICAgIHJldHVybiBjYWxsLmFyZ3MuY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlRmlsdGVyID0gZnVuY3Rpb24gcGFyc2VGaWx0ZXIobm9kZSkge1xuICAgIHdoaWxlICh0aGlzLnNraXAobGV4ZXIuVE9LRU5fUElQRSkpIHtcbiAgICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZUZpbHRlck5hbWUoKTtcbiAgICAgIG5vZGUgPSBuZXcgbm9kZXMuRmlsdGVyKG5hbWUubGluZW5vLCBuYW1lLmNvbG5vLCBuYW1lLCBuZXcgbm9kZXMuTm9kZUxpc3QobmFtZS5saW5lbm8sIG5hbWUuY29sbm8sIFtub2RlXS5jb25jYXQodGhpcy5wYXJzZUZpbHRlckFyZ3Mobm9kZSkpKSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBfcHJvdG8ucGFyc2VGaWx0ZXJTdGF0ZW1lbnQgPSBmdW5jdGlvbiBwYXJzZUZpbHRlclN0YXRlbWVudCgpIHtcbiAgICB2YXIgZmlsdGVyVG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICBpZiAoIXRoaXMuc2tpcFN5bWJvbCgnZmlsdGVyJykpIHtcbiAgICAgIHRoaXMuZmFpbCgncGFyc2VGaWx0ZXJTdGF0ZW1lbnQ6IGV4cGVjdGVkIGZpbHRlcicpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VGaWx0ZXJOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlRmlsdGVyQXJncyhuYW1lKTtcbiAgICB0aGlzLmFkdmFuY2VBZnRlckJsb2NrRW5kKGZpbHRlclRvay52YWx1ZSk7XG4gICAgdmFyIGJvZHkgPSBuZXcgbm9kZXMuQ2FwdHVyZShuYW1lLmxpbmVubywgbmFtZS5jb2xubywgdGhpcy5wYXJzZVVudGlsQmxvY2tzKCdlbmRmaWx0ZXInKSk7XG4gICAgdGhpcy5hZHZhbmNlQWZ0ZXJCbG9ja0VuZCgpO1xuICAgIHZhciBub2RlID0gbmV3IG5vZGVzLkZpbHRlcihuYW1lLmxpbmVubywgbmFtZS5jb2xubywgbmFtZSwgbmV3IG5vZGVzLk5vZGVMaXN0KG5hbWUubGluZW5vLCBuYW1lLmNvbG5vLCBbYm9keV0uY29uY2F0KGFyZ3MpKSk7XG4gICAgcmV0dXJuIG5ldyBub2Rlcy5PdXRwdXQobmFtZS5saW5lbm8sIG5hbWUuY29sbm8sIFtub2RlXSk7XG4gIH07XG4gIF9wcm90by5wYXJzZUFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIHBhcnNlQWdncmVnYXRlKCkge1xuICAgIHZhciB0b2sgPSB0aGlzLm5leHRUb2tlbigpO1xuICAgIHZhciBub2RlO1xuICAgIHN3aXRjaCAodG9rLnR5cGUpIHtcbiAgICAgIGNhc2UgbGV4ZXIuVE9LRU5fTEVGVF9QQVJFTjpcbiAgICAgICAgbm9kZSA9IG5ldyBub2Rlcy5Hcm91cCh0b2subGluZW5vLCB0b2suY29sbm8pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbGV4ZXIuVE9LRU5fTEVGVF9CUkFDS0VUOlxuICAgICAgICBub2RlID0gbmV3IG5vZGVzLkFycmF5KHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBsZXhlci5UT0tFTl9MRUZUX0NVUkxZOlxuICAgICAgICBub2RlID0gbmV3IG5vZGVzLkRpY3QodG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgd2hpbGUgKDEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICB2YXIgdHlwZSA9IHRoaXMucGVla1Rva2VuKCkudHlwZTtcbiAgICAgIGlmICh0eXBlID09PSBsZXhlci5UT0tFTl9SSUdIVF9QQVJFTiB8fCB0eXBlID09PSBsZXhlci5UT0tFTl9SSUdIVF9CUkFDS0VUIHx8IHR5cGUgPT09IGxleGVyLlRPS0VOX1JJR0hUX0NVUkxZKSB7XG4gICAgICAgIHRoaXMubmV4dFRva2VuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc2tpcChsZXhlci5UT0tFTl9DT01NQSkpIHtcbiAgICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlQWdncmVnYXRlOiBleHBlY3RlZCBjb21tYSBhZnRlciBleHByZXNzaW9uJywgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5EaWN0KSB7XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZvciBlcnJvcnNcbiAgICAgICAgdmFyIGtleSA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG5cbiAgICAgICAgLy8gV2UgZXhwZWN0IGEga2V5L3ZhbHVlIHBhaXIgZm9yIGRpY3RzLCBzZXBhcmF0ZWQgYnkgYVxuICAgICAgICAvLyBjb2xvblxuICAgICAgICBpZiAoIXRoaXMuc2tpcChsZXhlci5UT0tFTl9DT0xPTikpIHtcbiAgICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlQWdncmVnYXRlOiBleHBlY3RlZCBjb2xvbiBhZnRlciBkaWN0IGtleScsIHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgZXJyb3JzXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQobmV3IG5vZGVzLlBhaXIoa2V5LmxpbmVubywga2V5LmNvbG5vLCBrZXksIHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgZXJyb3JzXG4gICAgICAgIHZhciBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICAgICAgbm9kZS5hZGRDaGlsZChleHByKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIF9wcm90by5wYXJzZVNpZ25hdHVyZSA9IGZ1bmN0aW9uIHBhcnNlU2lnbmF0dXJlKHRvbGVyYW50LCBub1BhcmVucykge1xuICAgIHZhciB0b2sgPSB0aGlzLnBlZWtUb2tlbigpO1xuICAgIGlmICghbm9QYXJlbnMgJiYgdG9rLnR5cGUgIT09IGxleGVyLlRPS0VOX0xFRlRfUEFSRU4pIHtcbiAgICAgIGlmICh0b2xlcmFudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFpbCgnZXhwZWN0ZWQgYXJndW1lbnRzJywgdG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9MRUZUX1BBUkVOKSB7XG4gICAgICB0b2sgPSB0aGlzLm5leHRUb2tlbigpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IG5ldyBub2Rlcy5Ob2RlTGlzdCh0b2subGluZW5vLCB0b2suY29sbm8pO1xuICAgIHZhciBrd2FyZ3MgPSBuZXcgbm9kZXMuS2V5d29yZEFyZ3ModG9rLmxpbmVubywgdG9rLmNvbG5vKTtcbiAgICB2YXIgY2hlY2tDb21tYSA9IGZhbHNlO1xuICAgIHdoaWxlICgxKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgdG9rID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICAgIGlmICghbm9QYXJlbnMgJiYgdG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX1JJR0hUX1BBUkVOKSB7XG4gICAgICAgIHRoaXMubmV4dFRva2VuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChub1BhcmVucyAmJiB0b2sudHlwZSA9PT0gbGV4ZXIuVE9LRU5fQkxPQ0tfRU5EKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ29tbWEgJiYgIXRoaXMuc2tpcChsZXhlci5UT0tFTl9DT01NQSkpIHtcbiAgICAgICAgdGhpcy5mYWlsKCdwYXJzZVNpZ25hdHVyZTogZXhwZWN0ZWQgY29tbWEgYWZ0ZXIgZXhwcmVzc2lvbicsIHRvay5saW5lbm8sIHRvay5jb2xubyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYXJnID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICAgICAgaWYgKHRoaXMuc2tpcFZhbHVlKGxleGVyLlRPS0VOX09QRVJBVE9SLCAnPScpKSB7XG4gICAgICAgICAga3dhcmdzLmFkZENoaWxkKG5ldyBub2Rlcy5QYWlyKGFyZy5saW5lbm8sIGFyZy5jb2xubywgYXJnLCB0aGlzLnBhcnNlRXhwcmVzc2lvbigpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJncy5hZGRDaGlsZChhcmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja0NvbW1hID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGt3YXJncy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGFyZ3MuYWRkQ2hpbGQoa3dhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH07XG4gIF9wcm90by5wYXJzZVVudGlsQmxvY2tzID0gZnVuY3Rpb24gcGFyc2VVbnRpbEJsb2NrcygpIHtcbiAgICB2YXIgcHJldiA9IHRoaXMuYnJlYWtPbkJsb2NrcztcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYmxvY2tOYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGJsb2NrTmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHRoaXMuYnJlYWtPbkJsb2NrcyA9IGJsb2NrTmFtZXM7XG4gICAgdmFyIHJldCA9IHRoaXMucGFyc2UoKTtcbiAgICB0aGlzLmJyZWFrT25CbG9ja3MgPSBwcmV2O1xuICAgIHJldHVybiByZXQ7XG4gIH07XG4gIF9wcm90by5wYXJzZU5vZGVzID0gZnVuY3Rpb24gcGFyc2VOb2RlcygpIHtcbiAgICB2YXIgdG9rO1xuICAgIHZhciBidWYgPSBbXTtcbiAgICB3aGlsZSAodG9rID0gdGhpcy5uZXh0VG9rZW4oKSkge1xuICAgICAgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9EQVRBKSB7XG4gICAgICAgIHZhciBkYXRhID0gdG9rLnZhbHVlO1xuICAgICAgICB2YXIgbmV4dFRva2VuID0gdGhpcy5wZWVrVG9rZW4oKTtcbiAgICAgICAgdmFyIG5leHRWYWwgPSBuZXh0VG9rZW4gJiYgbmV4dFRva2VuLnZhbHVlO1xuXG4gICAgICAgIC8vIElmIHRoZSBsYXN0IHRva2VuIGhhcyBcIi1cIiB3ZSBuZWVkIHRvIHRyaW0gdGhlXG4gICAgICAgIC8vIGxlYWRpbmcgd2hpdGVzcGFjZSBvZiB0aGUgZGF0YS4gVGhpcyBpcyBtYXJrZWQgd2l0aFxuICAgICAgICAvLyB0aGUgYGRyb3BMZWFkaW5nV2hpdGVzcGFjZWAgdmFyaWFibGUuXG4gICAgICAgIGlmICh0aGlzLmRyb3BMZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgICAgIC8vIFRPRE86IHRoaXMgY291bGQgYmUgb3B0aW1pemVkIChkb24ndCB1c2UgcmVnZXgpXG4gICAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXlxccyovLCAnJyk7XG4gICAgICAgICAgdGhpcy5kcm9wTGVhZGluZ1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhbWUgZm9yIHRoZSBzdWNjZWVkaW5nIGJsb2NrIHN0YXJ0IHRva2VuXG4gICAgICAgIGlmIChuZXh0VG9rZW4gJiYgKG5leHRUb2tlbi50eXBlID09PSBsZXhlci5UT0tFTl9CTE9DS19TVEFSVCAmJiBuZXh0VmFsLmNoYXJBdChuZXh0VmFsLmxlbmd0aCAtIDEpID09PSAnLScgfHwgbmV4dFRva2VuLnR5cGUgPT09IGxleGVyLlRPS0VOX1ZBUklBQkxFX1NUQVJUICYmIG5leHRWYWwuY2hhckF0KHRoaXMudG9rZW5zLnRhZ3MuVkFSSUFCTEVfU1RBUlQubGVuZ3RoKSA9PT0gJy0nIHx8IG5leHRUb2tlbi50eXBlID09PSBsZXhlci5UT0tFTl9DT01NRU5UICYmIG5leHRWYWwuY2hhckF0KHRoaXMudG9rZW5zLnRhZ3MuQ09NTUVOVF9TVEFSVC5sZW5ndGgpID09PSAnLScpKSB7XG4gICAgICAgICAgLy8gVE9ETzogdGhpcyBjb3VsZCBiZSBvcHRpbWl6ZWQgKGRvbid0IHVzZSByZWdleClcbiAgICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICBidWYucHVzaChuZXcgbm9kZXMuT3V0cHV0KHRvay5saW5lbm8sIHRvay5jb2xubywgW25ldyBub2Rlcy5UZW1wbGF0ZURhdGEodG9rLmxpbmVubywgdG9rLmNvbG5vLCBkYXRhKV0pKTtcbiAgICAgIH0gZWxzZSBpZiAodG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX0JMT0NLX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuZHJvcExlYWRpbmdXaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgIHZhciBuID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xuICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBidWYucHVzaChuKTtcbiAgICAgIH0gZWxzZSBpZiAodG9rLnR5cGUgPT09IGxleGVyLlRPS0VOX1ZBUklBQkxFX1NUQVJUKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5kcm9wTGVhZGluZ1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZHZhbmNlQWZ0ZXJWYXJpYWJsZUVuZCgpO1xuICAgICAgICBidWYucHVzaChuZXcgbm9kZXMuT3V0cHV0KHRvay5saW5lbm8sIHRvay5jb2xubywgW2VdKSk7XG4gICAgICB9IGVsc2UgaWYgKHRvay50eXBlID09PSBsZXhlci5UT0tFTl9DT01NRU5UKSB7XG4gICAgICAgIHRoaXMuZHJvcExlYWRpbmdXaGl0ZXNwYWNlID0gdG9rLnZhbHVlLmNoYXJBdCh0b2sudmFsdWUubGVuZ3RoIC0gdGhpcy50b2tlbnMudGFncy5DT01NRU5UX0VORC5sZW5ndGggLSAxKSA9PT0gJy0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWdub3JlIGNvbW1lbnRzLCBvdGhlcndpc2UgdGhpcyBzaG91bGQgYmUgYW4gZXJyb3JcbiAgICAgICAgdGhpcy5mYWlsKCdVbmV4cGVjdGVkIHRva2VuIGF0IHRvcC1sZXZlbDogJyArIHRvay50eXBlLCB0b2subGluZW5vLCB0b2suY29sbm8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9O1xuICBfcHJvdG8ucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSgpIHtcbiAgICByZXR1cm4gbmV3IG5vZGVzLk5vZGVMaXN0KDAsIDAsIHRoaXMucGFyc2VOb2RlcygpKTtcbiAgfTtcbiAgX3Byb3RvLnBhcnNlQXNSb290ID0gZnVuY3Rpb24gcGFyc2VBc1Jvb3QoKSB7XG4gICAgcmV0dXJuIG5ldyBub2Rlcy5Sb290KDAsIDAsIHRoaXMucGFyc2VOb2RlcygpKTtcbiAgfTtcbiAgcmV0dXJuIFBhcnNlcjtcbn0oT2JqKTsgLy8gdmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG4vLyB2YXIgbCA9IGxleGVyLmxleCgneyUtIGlmIHggLSV9XFxuIGhlbGxvIHslIGVuZGlmICV9Jyk7XG4vLyB2YXIgdDtcbi8vIHdoaWxlKCh0ID0gbC5uZXh0VG9rZW4oKSkpIHtcbi8vICAgICBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QodCkpO1xuLy8gfVxuLy8gdmFyIHAgPSBuZXcgUGFyc2VyKGxleGVyLmxleCgnaGVsbG8geyUgZmlsdGVyIHRpdGxlICV9JyArXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdIZWxsbyBtYWRhbSBob3cgYXJlIHlvdScgK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneyUgZW5kZmlsdGVyICV9JykpO1xuLy8gdmFyIG4gPSBwLnBhcnNlQXNSb290KCk7XG4vLyBub2Rlcy5wcmludE5vZGVzKG4pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzcmMsIGV4dGVuc2lvbnMsIG9wdHMpIHtcbiAgICB2YXIgcCA9IG5ldyBQYXJzZXIobGV4ZXIubGV4KHNyYywgb3B0cykpO1xuICAgIGlmIChleHRlbnNpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHAuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgfVxuICAgIHJldHVybiBwLnBhcnNlQXNSb290KCk7XG4gIH0sXG4gIFBhcnNlcjogUGFyc2VyXG59O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgd2hpdGVzcGFjZUNoYXJzID0gXCIgXFxuXFx0XFxyXFx4QTBcIjtcbnZhciBkZWxpbUNoYXJzID0gJygpW117fSUqLSt+LyMsOnwuPD49ISc7XG52YXIgaW50Q2hhcnMgPSAnMDEyMzQ1Njc4OSc7XG52YXIgQkxPQ0tfU1RBUlQgPSAneyUnO1xudmFyIEJMT0NLX0VORCA9ICclfSc7XG52YXIgVkFSSUFCTEVfU1RBUlQgPSAne3snO1xudmFyIFZBUklBQkxFX0VORCA9ICd9fSc7XG52YXIgQ09NTUVOVF9TVEFSVCA9ICd7Iyc7XG52YXIgQ09NTUVOVF9FTkQgPSAnI30nO1xudmFyIFRPS0VOX1NUUklORyA9ICdzdHJpbmcnO1xudmFyIFRPS0VOX1dISVRFU1BBQ0UgPSAnd2hpdGVzcGFjZSc7XG52YXIgVE9LRU5fREFUQSA9ICdkYXRhJztcbnZhciBUT0tFTl9CTE9DS19TVEFSVCA9ICdibG9jay1zdGFydCc7XG52YXIgVE9LRU5fQkxPQ0tfRU5EID0gJ2Jsb2NrLWVuZCc7XG52YXIgVE9LRU5fVkFSSUFCTEVfU1RBUlQgPSAndmFyaWFibGUtc3RhcnQnO1xudmFyIFRPS0VOX1ZBUklBQkxFX0VORCA9ICd2YXJpYWJsZS1lbmQnO1xudmFyIFRPS0VOX0NPTU1FTlQgPSAnY29tbWVudCc7XG52YXIgVE9LRU5fTEVGVF9QQVJFTiA9ICdsZWZ0LXBhcmVuJztcbnZhciBUT0tFTl9SSUdIVF9QQVJFTiA9ICdyaWdodC1wYXJlbic7XG52YXIgVE9LRU5fTEVGVF9CUkFDS0VUID0gJ2xlZnQtYnJhY2tldCc7XG52YXIgVE9LRU5fUklHSFRfQlJBQ0tFVCA9ICdyaWdodC1icmFja2V0JztcbnZhciBUT0tFTl9MRUZUX0NVUkxZID0gJ2xlZnQtY3VybHknO1xudmFyIFRPS0VOX1JJR0hUX0NVUkxZID0gJ3JpZ2h0LWN1cmx5JztcbnZhciBUT0tFTl9PUEVSQVRPUiA9ICdvcGVyYXRvcic7XG52YXIgVE9LRU5fQ09NTUEgPSAnY29tbWEnO1xudmFyIFRPS0VOX0NPTE9OID0gJ2NvbG9uJztcbnZhciBUT0tFTl9USUxERSA9ICd0aWxkZSc7XG52YXIgVE9LRU5fUElQRSA9ICdwaXBlJztcbnZhciBUT0tFTl9JTlQgPSAnaW50JztcbnZhciBUT0tFTl9GTE9BVCA9ICdmbG9hdCc7XG52YXIgVE9LRU5fQk9PTEVBTiA9ICdib29sZWFuJztcbnZhciBUT0tFTl9OT05FID0gJ25vbmUnO1xudmFyIFRPS0VOX1NZTUJPTCA9ICdzeW1ib2wnO1xudmFyIFRPS0VOX1NQRUNJQUwgPSAnc3BlY2lhbCc7XG52YXIgVE9LRU5fUkVHRVggPSAncmVnZXgnO1xuZnVuY3Rpb24gdG9rZW4odHlwZSwgdmFsdWUsIGxpbmVubywgY29sbm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsaW5lbm86IGxpbmVubyxcbiAgICBjb2xubzogY29sbm9cbiAgfTtcbn1cbnZhciBUb2tlbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUb2tlbml6ZXIoc3RyLCBvcHRzKSB7XG4gICAgdGhpcy5zdHIgPSBzdHI7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5sZW4gPSBzdHIubGVuZ3RoO1xuICAgIHRoaXMubGluZW5vID0gMDtcbiAgICB0aGlzLmNvbG5vID0gMDtcbiAgICB0aGlzLmluX2NvZGUgPSBmYWxzZTtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICB2YXIgdGFncyA9IG9wdHMudGFncyB8fCB7fTtcbiAgICB0aGlzLnRhZ3MgPSB7XG4gICAgICBCTE9DS19TVEFSVDogdGFncy5ibG9ja1N0YXJ0IHx8IEJMT0NLX1NUQVJULFxuICAgICAgQkxPQ0tfRU5EOiB0YWdzLmJsb2NrRW5kIHx8IEJMT0NLX0VORCxcbiAgICAgIFZBUklBQkxFX1NUQVJUOiB0YWdzLnZhcmlhYmxlU3RhcnQgfHwgVkFSSUFCTEVfU1RBUlQsXG4gICAgICBWQVJJQUJMRV9FTkQ6IHRhZ3MudmFyaWFibGVFbmQgfHwgVkFSSUFCTEVfRU5ELFxuICAgICAgQ09NTUVOVF9TVEFSVDogdGFncy5jb21tZW50U3RhcnQgfHwgQ09NTUVOVF9TVEFSVCxcbiAgICAgIENPTU1FTlRfRU5EOiB0YWdzLmNvbW1lbnRFbmQgfHwgQ09NTUVOVF9FTkRcbiAgICB9O1xuICAgIHRoaXMudHJpbUJsb2NrcyA9ICEhb3B0cy50cmltQmxvY2tzO1xuICAgIHRoaXMubHN0cmlwQmxvY2tzID0gISFvcHRzLmxzdHJpcEJsb2NrcztcbiAgfVxuICB2YXIgX3Byb3RvID0gVG9rZW5pemVyLnByb3RvdHlwZTtcbiAgX3Byb3RvLm5leHRUb2tlbiA9IGZ1bmN0aW9uIG5leHRUb2tlbigpIHtcbiAgICB2YXIgbGluZW5vID0gdGhpcy5saW5lbm87XG4gICAgdmFyIGNvbG5vID0gdGhpcy5jb2xubztcbiAgICB2YXIgdG9rO1xuICAgIGlmICh0aGlzLmluX2NvZGUpIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgaWYgd2UgYXJlIGluIGEgYmxvY2sgcGFyc2UgaXQgYXMgY29kZVxuICAgICAgdmFyIGN1ciA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgaWYgKHRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgbm90aGluZyBlbHNlIHRvIHBhcnNlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChjdXIgPT09ICdcIicgfHwgY3VyID09PSAnXFwnJykge1xuICAgICAgICAvLyBXZSd2ZSBoaXQgYSBzdHJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuKFRPS0VOX1NUUklORywgdGhpcy5fcGFyc2VTdHJpbmcoY3VyKSwgbGluZW5vLCBjb2xubyk7XG4gICAgICB9IGVsc2UgaWYgKHRvayA9IHRoaXMuX2V4dHJhY3Qod2hpdGVzcGFjZUNoYXJzKSkge1xuICAgICAgICAvLyBXZSBoaXQgc29tZSB3aGl0ZXNwYWNlXG4gICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9XSElURVNQQUNFLCB0b2ssIGxpbmVubywgY29sbm8pO1xuICAgICAgfSBlbHNlIGlmICgodG9rID0gdGhpcy5fZXh0cmFjdFN0cmluZyh0aGlzLnRhZ3MuQkxPQ0tfRU5EKSkgfHwgKHRvayA9IHRoaXMuX2V4dHJhY3RTdHJpbmcoJy0nICsgdGhpcy50YWdzLkJMT0NLX0VORCkpKSB7XG4gICAgICAgIC8vIFNwZWNpYWwgY2hlY2sgZm9yIHRoZSBibG9jayBlbmQgdGFnXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEl0IGlzIGEgcmVxdWlyZW1lbnQgdGhhdCBzdGFydCBhbmQgZW5kIHRhZ3MgYXJlIGNvbXBvc2VkIG9mXG4gICAgICAgIC8vIGRlbGltaXRlciBjaGFyYWN0ZXJzICgle31bXSBldGMpLCBhbmQgb3VyIGNvZGUgYWx3YXlzXG4gICAgICAgIC8vIGJyZWFrcyBvbiBkZWxpbWl0ZXJzIHNvIHdlIGNhbiBhc3N1bWUgdGhlIHRva2VuIHBhcnNpbmdcbiAgICAgICAgLy8gZG9lc24ndCBjb25zdW1lIHRoZXNlIGVsc2V3aGVyZVxuICAgICAgICB0aGlzLmluX2NvZGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudHJpbUJsb2Nrcykge1xuICAgICAgICAgIGN1ciA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgIGlmIChjdXIgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAvLyBTa2lwIG5ld2xpbmVcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VyID09PSAnXFxyJykge1xuICAgICAgICAgICAgLy8gU2tpcCBDUkxGIG5ld2xpbmVcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgICAgICAgICAgY3VyID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAoY3VyID09PSAnXFxuJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcndhcmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdhcyBub3QgYSBDUkxGLCBzbyBnbyBiYWNrXG4gICAgICAgICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW4oVE9LRU5fQkxPQ0tfRU5ELCB0b2ssIGxpbmVubywgY29sbm8pO1xuICAgICAgfSBlbHNlIGlmICgodG9rID0gdGhpcy5fZXh0cmFjdFN0cmluZyh0aGlzLnRhZ3MuVkFSSUFCTEVfRU5EKSkgfHwgKHRvayA9IHRoaXMuX2V4dHJhY3RTdHJpbmcoJy0nICsgdGhpcy50YWdzLlZBUklBQkxFX0VORCkpKSB7XG4gICAgICAgIC8vIFNwZWNpYWwgY2hlY2sgZm9yIHZhcmlhYmxlIGVuZCB0YWcgKHNlZSBhYm92ZSlcbiAgICAgICAgdGhpcy5pbl9jb2RlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9WQVJJQUJMRV9FTkQsIHRvaywgbGluZW5vLCBjb2xubyk7XG4gICAgICB9IGVsc2UgaWYgKGN1ciA9PT0gJ3InICYmIHRoaXMuc3RyLmNoYXJBdCh0aGlzLmluZGV4ICsgMSkgPT09ICcvJykge1xuICAgICAgICAvLyBTa2lwIHBhc3QgJ3IvJy5cbiAgICAgICAgdGhpcy5mb3J3YXJkTigyKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHVudGlsIHRoZSBlbmQgb2YgdGhlIHJlZ2V4IC0tIC8gZW5kcyBpdCwgXFwvIGRvZXMgbm90LlxuICAgICAgICB2YXIgcmVnZXhCb2R5ID0gJyc7XG4gICAgICAgIHdoaWxlICghdGhpcy5pc0ZpbmlzaGVkKCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50KCkgPT09ICcvJyAmJiB0aGlzLnByZXZpb3VzKCkgIT09ICdcXFxcJykge1xuICAgICAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVnZXhCb2R5ICs9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGZsYWdzLlxuICAgICAgICAvLyBUaGUgcG9zc2libGUgZmxhZ3MgYXJlIGFjY29yZGluZyB0byBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHApXG4gICAgICAgIHZhciBQT1NTSUJMRV9GTEFHUyA9IFsnZycsICdpJywgJ20nLCAneSddO1xuICAgICAgICB2YXIgcmVnZXhGbGFncyA9ICcnO1xuICAgICAgICB3aGlsZSAoIXRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICAgICAgdmFyIGlzQ3VycmVudEFGbGFnID0gUE9TU0lCTEVfRkxBR1MuaW5kZXhPZih0aGlzLmN1cnJlbnQoKSkgIT09IC0xO1xuICAgICAgICAgIGlmIChpc0N1cnJlbnRBRmxhZykge1xuICAgICAgICAgICAgcmVnZXhGbGFncyArPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuKFRPS0VOX1JFR0VYLCB7XG4gICAgICAgICAgYm9keTogcmVnZXhCb2R5LFxuICAgICAgICAgIGZsYWdzOiByZWdleEZsYWdzXG4gICAgICAgIH0sIGxpbmVubywgY29sbm8pO1xuICAgICAgfSBlbHNlIGlmIChkZWxpbUNoYXJzLmluZGV4T2YoY3VyKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gV2UndmUgaGl0IGEgZGVsaW1pdGVyIChhIHNwZWNpYWwgY2hhciBsaWtlIGEgYnJhY2tldClcbiAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICAgIHZhciBjb21wbGV4T3BzID0gWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzw9JywgJz49JywgJy8vJywgJyoqJ107XG4gICAgICAgIHZhciBjdXJDb21wbGV4ID0gY3VyICsgdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIHZhciB0eXBlO1xuICAgICAgICBpZiAobGliLmluZGV4T2YoY29tcGxleE9wcywgY3VyQ29tcGxleCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICAgICAgY3VyID0gY3VyQ29tcGxleDtcblxuICAgICAgICAgIC8vIFNlZSBpZiB0aGlzIGlzIGEgc3RyaWN0IGVxdWFsaXR5L2luZXF1YWxpdHkgY29tcGFyYXRvclxuICAgICAgICAgIGlmIChsaWIuaW5kZXhPZihjb21wbGV4T3BzLCBjdXJDb21wbGV4ICsgdGhpcy5jdXJyZW50KCkpICE9PSAtMSkge1xuICAgICAgICAgICAgY3VyID0gY3VyQ29tcGxleCArIHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoY3VyKSB7XG4gICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICB0eXBlID0gVE9LRU5fTEVGVF9QQVJFTjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgdHlwZSA9IFRPS0VOX1JJR0hUX1BBUkVOO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICB0eXBlID0gVE9LRU5fTEVGVF9CUkFDS0VUO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgICB0eXBlID0gVE9LRU5fUklHSFRfQlJBQ0tFVDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgdHlwZSA9IFRPS0VOX0xFRlRfQ1VSTFk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9SSUdIVF9DVVJMWTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgdHlwZSA9IFRPS0VOX0NPTU1BO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICB0eXBlID0gVE9LRU5fQ09MT047XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd+JzpcbiAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9USUxERTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3wnOlxuICAgICAgICAgICAgdHlwZSA9IFRPS0VOX1BJUEU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdHlwZSA9IFRPS0VOX09QRVJBVE9SO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbih0eXBlLCBjdXIsIGxpbmVubywgY29sbm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UgYXJlIG5vdCBhdCB3aGl0ZXNwYWNlIG9yIGEgZGVsaW1pdGVyLCBzbyBleHRyYWN0IHRoZVxuICAgICAgICAvLyB0ZXh0IGFuZCBwYXJzZSBpdFxuICAgICAgICB0b2sgPSB0aGlzLl9leHRyYWN0VW50aWwod2hpdGVzcGFjZUNoYXJzICsgZGVsaW1DaGFycyk7XG4gICAgICAgIGlmICh0b2subWF0Y2goL15bLStdP1swLTldKyQvKSkge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQoKSA9PT0gJy4nKSB7XG4gICAgICAgICAgICB0aGlzLmZvcndhcmQoKTtcbiAgICAgICAgICAgIHZhciBkZWMgPSB0aGlzLl9leHRyYWN0KGludENoYXJzKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9GTE9BVCwgdG9rICsgJy4nICsgZGVjLCBsaW5lbm8sIGNvbG5vKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuKFRPS0VOX0lOVCwgdG9rLCBsaW5lbm8sIGNvbG5vKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodG9rLm1hdGNoKC9eKHRydWV8ZmFsc2UpJC8pKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuKFRPS0VOX0JPT0xFQU4sIHRvaywgbGluZW5vLCBjb2xubyk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rID09PSAnbm9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW4oVE9LRU5fTk9ORSwgdG9rLCBsaW5lbm8sIGNvbG5vKTtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIEFkZGVkIHRvIG1ha2UgdGhlIHRlc3QgYG51bGwgaXMgbnVsbGAgZXZhbHVhdGUgdHJ1dGhpbHkuXG4gICAgICAgICAgICogT3RoZXJ3aXNlLCBOdW5qdWNrcyB3aWxsIGxvb2sgdXAgbnVsbCBpbiB0aGUgY29udGV4dCBhbmRcbiAgICAgICAgICAgKiByZXR1cm4gYHVuZGVmaW5lZGAsIHdoaWNoIGlzIG5vdCB3aGF0IHdlIHdhbnQuIFRoaXMgKm1heSogaGF2ZVxuICAgICAgICAgICAqIGNvbnNlcXVlbmNlcyBpcyBzb21lb25lIGlzIHVzaW5nIG51bGwgaW4gdGhlaXIgdGVtcGxhdGVzIGFzIGFcbiAgICAgICAgICAgKiB2YXJpYWJsZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgfSBlbHNlIGlmICh0b2sgPT09ICdudWxsJykge1xuICAgICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9OT05FLCB0b2ssIGxpbmVubywgY29sbm8pO1xuICAgICAgICB9IGVsc2UgaWYgKHRvaykge1xuICAgICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9TWU1CT0wsIHRvaywgbGluZW5vLCBjb2xubyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHZhbHVlIHdoaWxlIHBhcnNpbmc6ICcgKyB0b2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBhcnNlIG91dCB0aGUgdGVtcGxhdGUgdGV4dCwgYnJlYWtpbmcgb24gdGFnXG4gICAgICAvLyBkZWxpbWl0ZXJzIGJlY2F1c2Ugd2UgbmVlZCB0byBsb29rIGZvciBibG9jay92YXJpYWJsZSBzdGFydFxuICAgICAgLy8gdGFncyAoZG9uJ3QgdXNlIHRoZSBmdWxsIGRlbGltQ2hhcnMgZm9yIG9wdGltaXphdGlvbilcbiAgICAgIHZhciBiZWdpbkNoYXJzID0gdGhpcy50YWdzLkJMT0NLX1NUQVJULmNoYXJBdCgwKSArIHRoaXMudGFncy5WQVJJQUJMRV9TVEFSVC5jaGFyQXQoMCkgKyB0aGlzLnRhZ3MuQ09NTUVOVF9TVEFSVC5jaGFyQXQoMCkgKyB0aGlzLnRhZ3MuQ09NTUVOVF9FTkQuY2hhckF0KDApO1xuICAgICAgaWYgKHRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmICgodG9rID0gdGhpcy5fZXh0cmFjdFN0cmluZyh0aGlzLnRhZ3MuQkxPQ0tfU1RBUlQgKyAnLScpKSB8fCAodG9rID0gdGhpcy5fZXh0cmFjdFN0cmluZyh0aGlzLnRhZ3MuQkxPQ0tfU1RBUlQpKSkge1xuICAgICAgICB0aGlzLmluX2NvZGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdG9rZW4oVE9LRU5fQkxPQ0tfU1RBUlQsIHRvaywgbGluZW5vLCBjb2xubyk7XG4gICAgICB9IGVsc2UgaWYgKCh0b2sgPSB0aGlzLl9leHRyYWN0U3RyaW5nKHRoaXMudGFncy5WQVJJQUJMRV9TVEFSVCArICctJykpIHx8ICh0b2sgPSB0aGlzLl9leHRyYWN0U3RyaW5nKHRoaXMudGFncy5WQVJJQUJMRV9TVEFSVCkpKSB7XG4gICAgICAgIHRoaXMuaW5fY29kZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0b2tlbihUT0tFTl9WQVJJQUJMRV9TVEFSVCwgdG9rLCBsaW5lbm8sIGNvbG5vKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvayA9ICcnO1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgdmFyIGluQ29tbWVudCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbWF0Y2hlcyh0aGlzLnRhZ3MuQ09NTUVOVF9TVEFSVCkpIHtcbiAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xuICAgICAgICAgIHRvayA9IHRoaXMuX2V4dHJhY3RTdHJpbmcodGhpcy50YWdzLkNPTU1FTlRfU1RBUlQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udGludWFsbHkgY29uc3VtZSB0ZXh0LCBicmVha2luZyBvbiB0aGUgdGFnIGRlbGltaXRlclxuICAgICAgICAvLyBjaGFyYWN0ZXJzIGFuZCBjaGVja2luZyB0byBzZWUgaWYgaXQncyBhIHN0YXJ0IHRhZy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgY291bGQgaGl0IHRoZSBlbmQgb2YgdGhlIHRlbXBsYXRlIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAgICAgLy8gb3VyIGxvb3BpbmcsIHNvIGNoZWNrIGZvciB0aGUgbnVsbCByZXR1cm4gdmFsdWUgZnJvbVxuICAgICAgICAvLyBfZXh0cmFjdFVudGlsXG4gICAgICAgIHdoaWxlICgoZGF0YSA9IHRoaXMuX2V4dHJhY3RVbnRpbChiZWdpbkNoYXJzKSkgIT09IG51bGwpIHtcbiAgICAgICAgICB0b2sgKz0gZGF0YTtcbiAgICAgICAgICBpZiAoKHRoaXMuX21hdGNoZXModGhpcy50YWdzLkJMT0NLX1NUQVJUKSB8fCB0aGlzLl9tYXRjaGVzKHRoaXMudGFncy5WQVJJQUJMRV9TVEFSVCkgfHwgdGhpcy5fbWF0Y2hlcyh0aGlzLnRhZ3MuQ09NTUVOVF9TVEFSVCkpICYmICFpbkNvbW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxzdHJpcEJsb2NrcyAmJiB0aGlzLl9tYXRjaGVzKHRoaXMudGFncy5CTE9DS19TVEFSVCkgJiYgdGhpcy5jb2xubyA+IDAgJiYgdGhpcy5jb2xubyA8PSB0b2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZhciBsYXN0TGluZSA9IHRvay5zbGljZSgtdGhpcy5jb2xubyk7XG4gICAgICAgICAgICAgIGlmICgvXlxccyskLy50ZXN0KGxhc3RMaW5lKSkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBibG9jayBsZWFkaW5nIHdoaXRlc3BhY2UgZnJvbSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHRvayA9IHRvay5zbGljZSgwLCAtdGhpcy5jb2xubyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0b2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBBbGwgZGF0YSByZW1vdmVkLCBjb2xsYXBzZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBub2Rlc1xuICAgICAgICAgICAgICAgICAgLy8gYnkgcmV0dXJuaW5nIG5leHQgdG9rZW4gKGJsb2NrIHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dFRva2VuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBhIHN0YXJ0IHRhZywgc3RvcCBsb29waW5nXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hdGNoZXModGhpcy50YWdzLkNPTU1FTlRfRU5EKSkge1xuICAgICAgICAgICAgaWYgKCFpbkNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmV4cGVjdGVkIGVuZCBvZiBjb21tZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2sgKz0gdGhpcy5fZXh0cmFjdFN0cmluZyh0aGlzLnRhZ3MuQ09NTUVOVF9FTkQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0IGRvZXMgbm90IG1hdGNoIGFueSB0YWcsIHNvIGFkZCB0aGUgY2hhcmFjdGVyIGFuZFxuICAgICAgICAgICAgLy8gY2Fycnkgb25cbiAgICAgICAgICAgIHRvayArPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCAmJiBpbkNvbW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGVuZCBvZiBjb21tZW50LCBnb3QgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW4oaW5Db21tZW50ID8gVE9LRU5fQ09NTUVOVCA6IFRPS0VOX0RBVEEsIHRvaywgbGluZW5vLCBjb2xubyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfcHJvdG8uX3BhcnNlU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlU3RyaW5nKGRlbGltaXRlcikge1xuICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB3aGlsZSAoIXRoaXMuaXNGaW5pc2hlZCgpICYmIHRoaXMuY3VycmVudCgpICE9PSBkZWxpbWl0ZXIpIHtcbiAgICAgIHZhciBjdXIgPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgIGlmIChjdXIgPT09ICdcXFxcJykge1xuICAgICAgICB0aGlzLmZvcndhcmQoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnQoKSkge1xuICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgc3RyICs9ICdcXG4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICBzdHIgKz0gJ1xcdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIHN0ciArPSAnXFxyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdHIgKz0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgKz0gY3VyO1xuICAgICAgICB0aGlzLmZvcndhcmQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3J3YXJkKCk7XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcbiAgX3Byb3RvLl9tYXRjaGVzID0gZnVuY3Rpb24gX21hdGNoZXMoc3RyKSB7XG4gICAgaWYgKHRoaXMuaW5kZXggKyBzdHIubGVuZ3RoID4gdGhpcy5sZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbSA9IHRoaXMuc3RyLnNsaWNlKHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyBzdHIubGVuZ3RoKTtcbiAgICByZXR1cm4gbSA9PT0gc3RyO1xuICB9O1xuICBfcHJvdG8uX2V4dHJhY3RTdHJpbmcgPSBmdW5jdGlvbiBfZXh0cmFjdFN0cmluZyhzdHIpIHtcbiAgICBpZiAodGhpcy5fbWF0Y2hlcyhzdHIpKSB7XG4gICAgICB0aGlzLmZvcndhcmROKHN0ci5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIF9wcm90by5fZXh0cmFjdFVudGlsID0gZnVuY3Rpb24gX2V4dHJhY3RVbnRpbChjaGFyU3RyaW5nKSB7XG4gICAgLy8gRXh0cmFjdCBhbGwgbm9uLW1hdGNoaW5nIGNoYXJzLCB3aXRoIHRoZSBkZWZhdWx0IG1hdGNoaW5nIHNldFxuICAgIC8vIHRvIGV2ZXJ5dGhpbmdcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdE1hdGNoaW5nKHRydWUsIGNoYXJTdHJpbmcgfHwgJycpO1xuICB9O1xuICBfcHJvdG8uX2V4dHJhY3QgPSBmdW5jdGlvbiBfZXh0cmFjdChjaGFyU3RyaW5nKSB7XG4gICAgLy8gRXh0cmFjdCBhbGwgbWF0Y2hpbmcgY2hhcnMgKG5vIGRlZmF1bHQsIHNvIGNoYXJTdHJpbmcgbXVzdCBiZVxuICAgIC8vIGV4cGxpY2l0KVxuICAgIHJldHVybiB0aGlzLl9leHRyYWN0TWF0Y2hpbmcoZmFsc2UsIGNoYXJTdHJpbmcpO1xuICB9O1xuICBfcHJvdG8uX2V4dHJhY3RNYXRjaGluZyA9IGZ1bmN0aW9uIF9leHRyYWN0TWF0Y2hpbmcoYnJlYWtPbk1hdGNoLCBjaGFyU3RyaW5nKSB7XG4gICAgLy8gUHVsbCBvdXQgY2hhcmFjdGVycyB1bnRpbCBhIGJyZWFraW5nIGNoYXIgaXMgaGl0LlxuICAgIC8vIElmIGJyZWFrT25NYXRjaCBpcyBmYWxzZSwgYSBub24tbWF0Y2hpbmcgY2hhciBzdG9wcyBpdC5cbiAgICAvLyBJZiBicmVha09uTWF0Y2ggaXMgdHJ1ZSwgYSBtYXRjaGluZyBjaGFyIHN0b3BzIGl0LlxuXG4gICAgaWYgKHRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gY2hhclN0cmluZy5pbmRleE9mKHRoaXMuY3VycmVudCgpKTtcblxuICAgIC8vIE9ubHkgcHJvY2VlZCBpZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGRvZXNuJ3QgbWVldCBvdXIgY29uZGl0aW9uXG4gICAgaWYgKGJyZWFrT25NYXRjaCAmJiBmaXJzdCA9PT0gLTEgfHwgIWJyZWFrT25NYXRjaCAmJiBmaXJzdCAhPT0gLTEpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICB0aGlzLmZvcndhcmQoKTtcblxuICAgICAgLy8gQW5kIHB1bGwgb3V0IGFsbCB0aGUgY2hhcnMgb25lIGF0IGEgdGltZSB1bnRpbCB3ZSBoaXQgYVxuICAgICAgLy8gYnJlYWtpbmcgY2hhclxuICAgICAgdmFyIGlkeCA9IGNoYXJTdHJpbmcuaW5kZXhPZih0aGlzLmN1cnJlbnQoKSk7XG4gICAgICB3aGlsZSAoKGJyZWFrT25NYXRjaCAmJiBpZHggPT09IC0xIHx8ICFicmVha09uTWF0Y2ggJiYgaWR4ICE9PSAtMSkgJiYgIXRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICAgIHQgKz0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgICAgICBpZHggPSBjaGFyU3RyaW5nLmluZGV4T2YodGhpcy5jdXJyZW50KCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfTtcbiAgX3Byb3RvLl9leHRyYWN0UmVnZXggPSBmdW5jdGlvbiBfZXh0cmFjdFJlZ2V4KHJlZ2V4KSB7XG4gICAgdmFyIG1hdGNoZXMgPSB0aGlzLmN1cnJlbnRTdHIoKS5tYXRjaChyZWdleCk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBNb3ZlIGZvcndhcmQgd2hhdGV2ZXIgd2FzIG1hdGNoZWRcbiAgICB0aGlzLmZvcndhcmROKG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfTtcbiAgX3Byb3RvLmlzRmluaXNoZWQgPSBmdW5jdGlvbiBpc0ZpbmlzaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4ID49IHRoaXMubGVuO1xuICB9O1xuICBfcHJvdG8uZm9yd2FyZE4gPSBmdW5jdGlvbiBmb3J3YXJkTihuKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuZm9yd2FyZCgpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgICBpZiAodGhpcy5wcmV2aW91cygpID09PSAnXFxuJykge1xuICAgICAgdGhpcy5saW5lbm8rKztcbiAgICAgIHRoaXMuY29sbm8gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG5vKys7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uYmFja04gPSBmdW5jdGlvbiBiYWNrTihuKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmJhY2sgPSBmdW5jdGlvbiBiYWNrKCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgICBpZiAodGhpcy5jdXJyZW50KCkgPT09ICdcXG4nKSB7XG4gICAgICB0aGlzLmxpbmVuby0tO1xuICAgICAgdmFyIGlkeCA9IHRoaXMuc3JjLmxhc3RJbmRleE9mKCdcXG4nLCB0aGlzLmluZGV4IC0gMSk7XG4gICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICB0aGlzLmNvbG5vID0gdGhpcy5pbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbm8gPSB0aGlzLmluZGV4IC0gaWR4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG5vLS07XG4gICAgfVxuICB9XG5cbiAgLy8gY3VycmVudCByZXR1cm5zIGN1cnJlbnQgY2hhcmFjdGVyXG4gIDtcbiAgX3Byb3RvLmN1cnJlbnQgPSBmdW5jdGlvbiBjdXJyZW50KCkge1xuICAgIGlmICghdGhpcy5pc0ZpbmlzaGVkKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0ci5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIGN1cnJlbnRTdHIgcmV0dXJucyB3aGF0J3MgbGVmdCBvZiB0aGUgdW5wYXJzZWQgc3RyaW5nXG4gIDtcbiAgX3Byb3RvLmN1cnJlbnRTdHIgPSBmdW5jdGlvbiBjdXJyZW50U3RyKCkge1xuICAgIGlmICghdGhpcy5pc0ZpbmlzaGVkKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0ci5zdWJzdHIodGhpcy5pbmRleCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfTtcbiAgX3Byb3RvLnByZXZpb3VzID0gZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyLmNoYXJBdCh0aGlzLmluZGV4IC0gMSk7XG4gIH07XG4gIHJldHVybiBUb2tlbml6ZXI7XG59KCk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGV4OiBmdW5jdGlvbiBsZXgoc3JjLCBvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoc3JjLCBvcHRzKTtcbiAgfSxcbiAgVE9LRU5fU1RSSU5HOiBUT0tFTl9TVFJJTkcsXG4gIFRPS0VOX1dISVRFU1BBQ0U6IFRPS0VOX1dISVRFU1BBQ0UsXG4gIFRPS0VOX0RBVEE6IFRPS0VOX0RBVEEsXG4gIFRPS0VOX0JMT0NLX1NUQVJUOiBUT0tFTl9CTE9DS19TVEFSVCxcbiAgVE9LRU5fQkxPQ0tfRU5EOiBUT0tFTl9CTE9DS19FTkQsXG4gIFRPS0VOX1ZBUklBQkxFX1NUQVJUOiBUT0tFTl9WQVJJQUJMRV9TVEFSVCxcbiAgVE9LRU5fVkFSSUFCTEVfRU5EOiBUT0tFTl9WQVJJQUJMRV9FTkQsXG4gIFRPS0VOX0NPTU1FTlQ6IFRPS0VOX0NPTU1FTlQsXG4gIFRPS0VOX0xFRlRfUEFSRU46IFRPS0VOX0xFRlRfUEFSRU4sXG4gIFRPS0VOX1JJR0hUX1BBUkVOOiBUT0tFTl9SSUdIVF9QQVJFTixcbiAgVE9LRU5fTEVGVF9CUkFDS0VUOiBUT0tFTl9MRUZUX0JSQUNLRVQsXG4gIFRPS0VOX1JJR0hUX0JSQUNLRVQ6IFRPS0VOX1JJR0hUX0JSQUNLRVQsXG4gIFRPS0VOX0xFRlRfQ1VSTFk6IFRPS0VOX0xFRlRfQ1VSTFksXG4gIFRPS0VOX1JJR0hUX0NVUkxZOiBUT0tFTl9SSUdIVF9DVVJMWSxcbiAgVE9LRU5fT1BFUkFUT1I6IFRPS0VOX09QRVJBVE9SLFxuICBUT0tFTl9DT01NQTogVE9LRU5fQ09NTUEsXG4gIFRPS0VOX0NPTE9OOiBUT0tFTl9DT0xPTixcbiAgVE9LRU5fVElMREU6IFRPS0VOX1RJTERFLFxuICBUT0tFTl9QSVBFOiBUT0tFTl9QSVBFLFxuICBUT0tFTl9JTlQ6IFRPS0VOX0lOVCxcbiAgVE9LRU5fRkxPQVQ6IFRPS0VOX0ZMT0FULFxuICBUT0tFTl9CT09MRUFOOiBUT0tFTl9CT09MRUFOLFxuICBUT0tFTl9OT05FOiBUT0tFTl9OT05FLFxuICBUT0tFTl9TWU1CT0w6IFRPS0VOX1NZTUJPTCxcbiAgVE9LRU5fU1BFQ0lBTDogVE9LRU5fU1BFQ0lBTCxcbiAgVE9LRU5fUkVHRVg6IFRPS0VOX1JFR0VYXG59O1xuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBMb2FkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSksXG4gIFByZWNvbXBpbGVkTG9hZGVyID0gX3JlcXVpcmUuUHJlY29tcGlsZWRMb2FkZXI7XG52YXIgV2ViTG9hZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTG9hZGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKFdlYkxvYWRlciwgX0xvYWRlcik7XG4gIGZ1bmN0aW9uIFdlYkxvYWRlcihiYXNlVVJMLCBvcHRzKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF90aGlzID0gX0xvYWRlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuYmFzZVVSTCA9IGJhc2VVUkwgfHwgJy4nO1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgdGhlIGNhY2hlIGlzIHR1cm5lZCBvZmYgYmVjYXVzZSB0aGVyZSdzIG5vIHdheVxuICAgIC8vIHRvIFwid2F0Y2hcIiB0ZW1wbGF0ZXMgb3ZlciBIVFRQLCBzbyB0aGV5IGFyZSByZS1kb3dubG9hZGVkXG4gICAgLy8gYW5kIGNvbXBpbGVkIGVhY2ggdGltZS4gKFJlbWVtYmVyLCBQUkVDT01QSUxFIFlPVVJcbiAgICAvLyBURU1QTEFURVMgaW4gcHJvZHVjdGlvbiEpXG4gICAgX3RoaXMudXNlQ2FjaGUgPSAhIW9wdHMudXNlQ2FjaGU7XG5cbiAgICAvLyBXZSBkZWZhdWx0IGBhc3luY2AgdG8gZmFsc2Ugc28gdGhhdCB0aGUgc2ltcGxlIHN5bmNocm9ub3VzXG4gICAgLy8gQVBJIGNhbiBiZSB1c2VkIHdoZW4geW91IGFyZW4ndCBkb2luZyBhbnl0aGluZyBhc3luYyBpblxuICAgIC8vIHlvdXIgdGVtcGxhdGVzICh3aGljaCBpcyBtb3N0IG9mIHRoZSB0aW1lKS4gVGhpcyBwZXJmb3JtcyBhXG4gICAgLy8gc3luYyBhamF4IHJlcXVlc3QsIGJ1dCB0aGF0J3Mgb2sgYmVjYXVzZSBpdCBzaG91bGQgKm9ubHkqXG4gICAgLy8gaGFwcGVuIGluIGRldmVsb3BtZW50LiBQUkVDT01QSUxFIFlPVVIgVEVNUExBVEVTLlxuICAgIF90aGlzLmFzeW5jID0gISFvcHRzLmFzeW5jO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gV2ViTG9hZGVyLnByb3RvdHlwZTtcbiAgX3Byb3RvLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKGZyb20sIHRvKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZWxhdGl2ZSB0ZW1wbGF0ZXMgbm90IHN1cHBvcnQgaW4gdGhlIGJyb3dzZXIgeWV0Jyk7XG4gIH07XG4gIF9wcm90by5nZXRTb3VyY2UgPSBmdW5jdGlvbiBnZXRTb3VyY2UobmFtZSwgY2IpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICB2YXIgdXNlQ2FjaGUgPSB0aGlzLnVzZUNhY2hlO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdGhpcy5mZXRjaCh0aGlzLmJhc2VVUkwgKyAnLycgKyBuYW1lLCBmdW5jdGlvbiAoZXJyLCBzcmMpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgY2IoZXJyLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICBwYXRoOiBuYW1lLFxuICAgICAgICAgIG5vQ2FjaGU6ICF1c2VDYWNoZVxuICAgICAgICB9O1xuICAgICAgICBfdGhpczIuZW1pdCgnbG9hZCcsIG5hbWUsIHJlc3VsdCk7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGlmIHRoaXMgV2ViTG9hZGVyIGlzbid0IHJ1bm5pbmcgYXN5bmNocm9ub3VzbHksIHRoZVxuICAgIC8vIGZldGNoIGFib3ZlIHdvdWxkIGFjdHVhbGx5IHJ1biBzeW5jIGFuZCB3ZSdsbCBoYXZlIGFcbiAgICAvLyByZXN1bHQgaGVyZVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIF9wcm90by5mZXRjaCA9IGZ1bmN0aW9uIGZldGNoKHVybCwgY2IpIHtcbiAgICAvLyBPbmx5IGluIHRoZSBicm93c2VyIHBsZWFzZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJMb2FkZXIgY2FuIG9ubHkgYnkgdXNlZCBpbiBhIGJyb3dzZXInKTtcbiAgICB9XG4gICAgdmFyIGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZGluZyA9IHRydWU7XG4gICAgYWpheC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYWpheC5yZWFkeVN0YXRlID09PSA0ICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoYWpheC5zdGF0dXMgPT09IDAgfHwgYWpheC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNiKG51bGwsIGFqYXgucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYih7XG4gICAgICAgICAgICBzdGF0dXM6IGFqYXguc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogYWpheC5yZXNwb25zZVRleHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgYWpheC5vcGVuKCdHRVQnLCB1cmwsIHRoaXMuYXN5bmMpO1xuICAgIGFqYXguc2VuZCgpO1xuICB9O1xuICByZXR1cm4gV2ViTG9hZGVyO1xufShMb2FkZXIpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYkxvYWRlcjogV2ViTG9hZGVyLFxuICBQcmVjb21waWxlZExvYWRlcjogUHJlY29tcGlsZWRMb2FkZXJcbn07XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGxpYiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLFxuICBFbnZpcm9ubWVudCA9IF9yZXF1aXJlLkVudmlyb25tZW50LFxuICBUZW1wbGF0ZSA9IF9yZXF1aXJlLlRlbXBsYXRlO1xudmFyIExvYWRlciA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgbG9hZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIHByZWNvbXBpbGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcbnZhciBjb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgcGFyc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBsZXhlciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgcnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgbm9kZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIGluc3RhbGxKaW5qYUNvbXBhdCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG4vLyBBIHNpbmdsZSBpbnN0YW5jZSBvZiBhbiBlbnZpcm9ubWVudCwgc2luY2UgdGhpcyBpcyBzbyBjb21tb25seSB1c2VkXG52YXIgZTtcbmZ1bmN0aW9uIGNvbmZpZ3VyZSh0ZW1wbGF0ZXNQYXRoLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBpZiAobGliLmlzT2JqZWN0KHRlbXBsYXRlc1BhdGgpKSB7XG4gICAgb3B0cyA9IHRlbXBsYXRlc1BhdGg7XG4gICAgdGVtcGxhdGVzUGF0aCA9IG51bGw7XG4gIH1cbiAgdmFyIFRlbXBsYXRlTG9hZGVyO1xuICBpZiAobG9hZGVycy5GaWxlU3lzdGVtTG9hZGVyKSB7XG4gICAgVGVtcGxhdGVMb2FkZXIgPSBuZXcgbG9hZGVycy5GaWxlU3lzdGVtTG9hZGVyKHRlbXBsYXRlc1BhdGgsIHtcbiAgICAgIHdhdGNoOiBvcHRzLndhdGNoLFxuICAgICAgbm9DYWNoZTogb3B0cy5ub0NhY2hlXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobG9hZGVycy5XZWJMb2FkZXIpIHtcbiAgICBUZW1wbGF0ZUxvYWRlciA9IG5ldyBsb2FkZXJzLldlYkxvYWRlcih0ZW1wbGF0ZXNQYXRoLCB7XG4gICAgICB1c2VDYWNoZTogb3B0cy53ZWIgJiYgb3B0cy53ZWIudXNlQ2FjaGUsXG4gICAgICBhc3luYzogb3B0cy53ZWIgJiYgb3B0cy53ZWIuYXN5bmNcbiAgICB9KTtcbiAgfVxuICBlID0gbmV3IEVudmlyb25tZW50KFRlbXBsYXRlTG9hZGVyLCBvcHRzKTtcbiAgaWYgKG9wdHMgJiYgb3B0cy5leHByZXNzKSB7XG4gICAgZS5leHByZXNzKG9wdHMuZXhwcmVzcyk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuICBUZW1wbGF0ZTogVGVtcGxhdGUsXG4gIExvYWRlcjogTG9hZGVyLFxuICBGaWxlU3lzdGVtTG9hZGVyOiBsb2FkZXJzLkZpbGVTeXN0ZW1Mb2FkZXIsXG4gIE5vZGVSZXNvbHZlTG9hZGVyOiBsb2FkZXJzLk5vZGVSZXNvbHZlTG9hZGVyLFxuICBQcmVjb21waWxlZExvYWRlcjogbG9hZGVycy5QcmVjb21waWxlZExvYWRlcixcbiAgV2ViTG9hZGVyOiBsb2FkZXJzLldlYkxvYWRlcixcbiAgY29tcGlsZXI6IGNvbXBpbGVyLFxuICBwYXJzZXI6IHBhcnNlcixcbiAgbGV4ZXI6IGxleGVyLFxuICBydW50aW1lOiBydW50aW1lLFxuICBsaWI6IGxpYixcbiAgbm9kZXM6IG5vZGVzLFxuICBpbnN0YWxsSmluamFDb21wYXQ6IGluc3RhbGxKaW5qYUNvbXBhdCxcbiAgY29uZmlndXJlOiBjb25maWd1cmUsXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBlID0gdW5kZWZpbmVkO1xuICB9LFxuICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIGNvbmZpZ3VyZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlKHNyYywgZW52LCBwYXRoLCBlYWdlckNvbXBpbGUpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihuYW1lLCBjdHgsIGNiKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBjb25maWd1cmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGUucmVuZGVyKG5hbWUsIGN0eCwgY2IpO1xuICB9LFxuICByZW5kZXJTdHJpbmc6IGZ1bmN0aW9uIHJlbmRlclN0cmluZyhzcmMsIGN0eCwgY2IpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIGNvbmZpZ3VyZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZS5yZW5kZXJTdHJpbmcoc3JjLCBjdHgsIGNiKTtcbiAgfSxcbiAgcHJlY29tcGlsZTogcHJlY29tcGlsZSA/IHByZWNvbXBpbGUucHJlY29tcGlsZSA6IHVuZGVmaW5lZCxcbiAgcHJlY29tcGlsZVN0cmluZzogcHJlY29tcGlsZSA/IHByZWNvbXBpbGUucHJlY29tcGlsZVN0cmluZyA6IHVuZGVmaW5lZFxufTtcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyByYXdBc2FwIHByb3ZpZGVzIGV2ZXJ5dGhpbmcgd2UgbmVlZCBleGNlcHQgZXhjZXB0aW9uIG1hbmFnZW1lbnQuXG52YXIgcmF3QXNhcCA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG4vLyBVc2UgdGhlIGZhc3Rlc3QgbWVhbnMgcG9zc2libGUgdG8gZXhlY3V0ZSBhIHRhc2sgaW4gaXRzIG93biB0dXJuLCB3aXRoXG4vLyBwcmlvcml0eSBvdmVyIG90aGVyIGV2ZW50cyBpbmNsdWRpbmcgSU8sIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVkcmF3XG4vLyBldmVudHMgaW4gYnJvd3NlcnMuXG4vL1xuLy8gQW4gZXhjZXB0aW9uIHRocm93biBieSBhIHRhc2sgd2lsbCBwZXJtYW5lbnRseSBpbnRlcnJ1cHQgdGhlIHByb2Nlc3Npbmcgb2Zcbi8vIHN1YnNlcXVlbnQgdGFza3MuIFRoZSBoaWdoZXIgbGV2ZWwgYGFzYXBgIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93biBieSBhIHRhc2ssIHRoYXQgdGhlIHRhc2sgcXVldWUgd2lsbCBjb250aW51ZSBmbHVzaGluZyBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZSwgYnV0IGlmIHlvdSB1c2UgYHJhd0FzYXBgIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIHRvXG4vLyBlaXRoZXIgZW5zdXJlIHRoYXQgbm8gZXhjZXB0aW9ucyBhcmUgdGhyb3duIGZyb20geW91ciB0YXNrLCBvciB0byBtYW51YWxseVxuLy8gY2FsbCBgcmF3QXNhcC5yZXF1ZXN0Rmx1c2hgIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5tb2R1bGUuZXhwb3J0cyA9IHJhd0FzYXA7XG5mdW5jdGlvbiByYXdBc2FwKHRhc2spIHtcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0Rmx1c2goKTtcbiAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFcXVpdmFsZW50IHRvIHB1c2gsIGJ1dCBhdm9pZHMgYSBmdW5jdGlvbiBjYWxsLlxuICAgIHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB0YXNrO1xufVxuXG52YXIgcXVldWUgPSBbXTtcbi8vIE9uY2UgYSBmbHVzaCBoYXMgYmVlbiByZXF1ZXN0ZWQsIG5vIGZ1cnRoZXIgY2FsbHMgdG8gYHJlcXVlc3RGbHVzaGAgYXJlXG4vLyBuZWNlc3NhcnkgdW50aWwgdGhlIG5leHQgYGZsdXNoYCBjb21wbGV0ZXMuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGFuIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG1ldGhvZCB0aGF0IGF0dGVtcHRzIHRvIGtpY2tcbi8vIG9mZiBhIGBmbHVzaGAgZXZlbnQgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gYGZsdXNoYCB3aWxsIGF0dGVtcHQgdG8gZXhoYXVzdFxuLy8gdGhlIGV2ZW50IHF1ZXVlIGJlZm9yZSB5aWVsZGluZyB0byB0aGUgYnJvd3NlcidzIG93biBldmVudCBsb29wLlxudmFyIHJlcXVlc3RGbHVzaDtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCB0YXNrIHRvIGV4ZWN1dGUgaW4gdGhlIHRhc2sgcXVldWUuIFRoaXMgaXNcbi8vIHByZXNlcnZlZCBiZXR3ZWVuIGNhbGxzIHRvIGBmbHVzaGAgc28gdGhhdCBpdCBjYW4gYmUgcmVzdW1lZCBpZlxuLy8gYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24uXG52YXIgaW5kZXggPSAwO1xuLy8gSWYgYSB0YXNrIHNjaGVkdWxlcyBhZGRpdGlvbmFsIHRhc2tzIHJlY3Vyc2l2ZWx5LCB0aGUgdGFzayBxdWV1ZSBjYW4gZ3Jvd1xuLy8gdW5ib3VuZGVkLiBUbyBwcmV2ZW50IG1lbW9yeSBleGhhdXN0aW9uLCB0aGUgdGFzayBxdWV1ZSB3aWxsIHBlcmlvZGljYWxseVxuLy8gdHJ1bmNhdGUgYWxyZWFkeS1jb21wbGV0ZWQgdGFza3MuXG52YXIgY2FwYWNpdHkgPSAxMDI0O1xuXG4vLyBUaGUgZmx1c2ggZnVuY3Rpb24gcHJvY2Vzc2VzIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgd2l0aFxuLy8gYHJhd0FzYXBgIHVubGVzcyBhbmQgdW50aWwgb25lIG9mIHRob3NlIHRhc2tzIHRocm93cyBhbiBleGNlcHRpb24uXG4vLyBJZiBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgYGZsdXNoYCBlbnN1cmVzIHRoYXQgaXRzIHN0YXRlIHdpbGwgcmVtYWluXG4vLyBjb25zaXN0ZW50IGFuZCB3aWxsIHJlc3VtZSB3aGVyZSBpdCBsZWZ0IG9mZiB3aGVuIGNhbGxlZCBhZ2Fpbi5cbi8vIEhvd2V2ZXIsIGBmbHVzaGAgZG9lcyBub3QgbWFrZSBhbnkgYXJyYW5nZW1lbnRzIHRvIGJlIGNhbGxlZCBhZ2FpbiBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93bi5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIGluZGV4IGJlZm9yZSBjYWxsaW5nIHRoZSB0YXNrLiBUaGlzIGVuc3VyZXMgdGhhdCB3ZSB3aWxsXG4gICAgICAgIC8vIGJlZ2luIGZsdXNoaW5nIG9uIHRoZSBuZXh0IHRhc2sgdGhlIHRhc2sgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgcXVldWVbY3VycmVudEluZGV4XS5jYWxsKCk7XG4gICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgYXNhcGAuXG4gICAgICAgIC8vIElmIHdlIGNhbGwgYGFzYXBgIHdpdGhpbiB0YXNrcyBzY2hlZHVsZWQgYnkgYGFzYXBgLCB0aGUgcXVldWUgd2lsbFxuICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHBlcmlvZGljYWxseSBzaGlmdCAxMDI0IHRhc2tzIG9mZiB0aGUgcXVldWUuXG4gICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwLCBuZXdMZW5ndGggPSBxdWV1ZS5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgcXVldWVbc2Nhbl0gPSBxdWV1ZVtzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgaW5kZXggPSAwO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGltcGxlbWVudGVkIHVzaW5nIGEgc3RyYXRlZ3kgYmFzZWQgb24gZGF0YSBjb2xsZWN0ZWQgZnJvbVxuLy8gZXZlcnkgYXZhaWxhYmxlIFNhdWNlTGFicyBTZWxlbml1bSB3ZWIgZHJpdmVyIHdvcmtlciBhdCB0aW1lIG9mIHdyaXRpbmcuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUctNVVZR3VwNXF4R2RFTVdraFA2QldDejA1M05VYjJFMVFvVVRVMTZ1QS9lZGl0I2dpZD03ODM3MjQ1OTNcblxuLy8gU2FmYXJpIDYgYW5kIDYuMSBmb3IgZGVza3RvcCwgaVBhZCwgYW5kIGlQaG9uZSBhcmUgdGhlIG9ubHkgYnJvd3NlcnMgdGhhdFxuLy8gaGF2ZSBXZWJLaXRNdXRhdGlvbk9ic2VydmVyIGJ1dCBub3QgdW4tcHJlZml4ZWQgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11c3QgdXNlIGBnbG9iYWxgIG9yIGBzZWxmYCBpbnN0ZWFkIG9mIGB3aW5kb3dgIHRvIHdvcmsgaW4gYm90aCBmcmFtZXMgYW5kIHdlYlxuLy8gd29ya2Vycy4gYGdsb2JhbGAgaXMgYSBwcm92aXNpb24gb2YgQnJvd3NlcmlmeSwgTXIsIE1ycywgb3IgTW9wLlxuXG4vKiBnbG9iYWxzIHNlbGYgKi9cbnZhciBzY29wZSA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiBzZWxmO1xudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gc2NvcGUuTXV0YXRpb25PYnNlcnZlciB8fCBzY29wZS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4vLyBNdXRhdGlvbk9ic2VydmVycyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBoYXZlIGhpZ2ggcHJpb3JpdHkgYW5kIHdvcmtcbi8vIHJlbGlhYmx5IGV2ZXJ5d2hlcmUgdGhleSBhcmUgaW1wbGVtZW50ZWQuXG4vLyBUaGV5IGFyZSBpbXBsZW1lbnRlZCBpbiBhbGwgbW9kZXJuIGJyb3dzZXJzLlxuLy9cbi8vIC0gQW5kcm9pZCA0LTQuM1xuLy8gLSBDaHJvbWUgMjYtMzRcbi8vIC0gRmlyZWZveCAxNC0yOVxuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciAxMVxuLy8gLSBpUGFkIFNhZmFyaSA2LTcuMVxuLy8gLSBpUGhvbmUgU2FmYXJpIDctNy4xXG4vLyAtIFNhZmFyaSA2LTdcbmlmICh0eXBlb2YgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcblxuLy8gTWVzc2FnZUNoYW5uZWxzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGdpdmUgZGlyZWN0IGFjY2VzcyB0byB0aGUgSFRNTFxuLy8gdGFzayBxdWV1ZSwgYXJlIGltcGxlbWVudGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLCBTYWZhcmkgNS4wLTEsIGFuZCBPcGVyYVxuLy8gMTEtMTIsIGFuZCBpbiB3ZWIgd29ya2VycyBpbiBtYW55IGVuZ2luZXMuXG4vLyBBbHRob3VnaCBtZXNzYWdlIGNoYW5uZWxzIHlpZWxkIHRvIGFueSBxdWV1ZWQgcmVuZGVyaW5nIGFuZCBJTyB0YXNrcywgdGhleVxuLy8gd291bGQgYmUgYmV0dGVyIHRoYW4gaW1wb3NpbmcgdGhlIDRtcyBkZWxheSBvZiB0aW1lcnMuXG4vLyBIb3dldmVyLCB0aGV5IGRvIG5vdCB3b3JrIHJlbGlhYmx5IGluIEludGVybmV0IEV4cGxvcmVyIG9yIFNhZmFyaS5cblxuLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTAgaXMgdGhlIG9ubHkgYnJvd3NlciB0aGF0IGhhcyBzZXRJbW1lZGlhdGUgYnV0IGRvZXNcbi8vIG5vdCBoYXZlIE11dGF0aW9uT2JzZXJ2ZXJzLlxuLy8gQWx0aG91Z2ggc2V0SW1tZWRpYXRlIHlpZWxkcyB0byB0aGUgYnJvd3NlcidzIHJlbmRlcmVyLCBpdCB3b3VsZCBiZVxuLy8gcHJlZmVycmFibGUgdG8gZmFsbGluZyBiYWNrIHRvIHNldFRpbWVvdXQgc2luY2UgaXQgZG9lcyBub3QgaGF2ZVxuLy8gdGhlIG1pbmltdW0gNG1zIHBlbmFsdHkuXG4vLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGFwcGVhcnMgdG8gYmUgYSBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgTW9iaWxlIChhbmRcbi8vIERlc2t0b3AgdG8gYSBsZXNzZXIgZXh0ZW50KSB0aGF0IHJlbmRlcnMgYm90aCBzZXRJbW1lZGlhdGUgYW5kXG4vLyBNZXNzYWdlQ2hhbm5lbCB1c2VsZXNzIGZvciB0aGUgcHVycG9zZXMgb2YgQVNBUC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvcS9pc3N1ZXMvMzk2XG5cbi8vIFRpbWVycyBhcmUgaW1wbGVtZW50ZWQgdW5pdmVyc2FsbHkuXG4vLyBXZSBmYWxsIGJhY2sgdG8gdGltZXJzIGluIHdvcmtlcnMgaW4gbW9zdCBlbmdpbmVzLCBhbmQgaW4gZm9yZWdyb3VuZFxuLy8gY29udGV4dHMgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vycy5cbi8vIEhvd2V2ZXIsIG5vdGUgdGhhdCBldmVuIHRoaXMgc2ltcGxlIGNhc2UgcmVxdWlyZXMgbnVhbmNlcyB0byBvcGVyYXRlIGluIGFcbi8vIGJyb2FkIHNwZWN0cnVtIG9mIGJyb3dzZXJzLlxuLy9cbi8vIC0gRmlyZWZveCAzLTEzXG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDYtOVxuLy8gLSBpUGFkIFNhZmFyaSA0LjNcbi8vIC0gTHlueCAyLjguN1xufSBlbHNlIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoZmx1c2gpO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCByZXF1ZXN0cyB0aGF0IHRoZSBoaWdoIHByaW9yaXR5IGV2ZW50IHF1ZXVlIGJlIGZsdXNoZWQgYXNcbi8vIHNvb24gYXMgcG9zc2libGUuXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IGFuIGVycm9yIHRocm93biBpbiBhIHRhc2sgZnJvbSBzdGFsbGluZyB0aGUgZXZlbnRcbi8vIHF1ZXVlIGlmIHRoZSBleGNlcHRpb24gaGFuZGxlZCBieSBOb2RlLmpz4oCZc1xuLy8gYHByb2Nlc3Mub24oXCJ1bmNhdWdodEV4Y2VwdGlvblwiKWAgb3IgYnkgYSBkb21haW4uXG5yYXdBc2FwLnJlcXVlc3RGbHVzaCA9IHJlcXVlc3RGbHVzaDtcblxuLy8gVG8gcmVxdWVzdCBhIGhpZ2ggcHJpb3JpdHkgZXZlbnQsIHdlIGluZHVjZSBhIG11dGF0aW9uIG9ic2VydmVyIGJ5IHRvZ2dsaW5nXG4vLyB0aGUgdGV4dCBvZiBhIHRleHQgbm9kZSBiZXR3ZWVuIFwiMVwiIGFuZCBcIi0xXCIuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHZhciB0b2dnbGUgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICB0b2dnbGUgPSAtdG9nZ2xlO1xuICAgICAgICBub2RlLmRhdGEgPSB0b2dnbGU7XG4gICAgfTtcbn1cblxuLy8gVGhlIG1lc3NhZ2UgY2hhbm5lbCB0ZWNobmlxdWUgd2FzIGRpc2NvdmVyZWQgYnkgTWFsdGUgVWJsIGFuZCB3YXMgdGhlXG4vLyBvcmlnaW5hbCBmb3VuZGF0aW9uIGZvciB0aGlzIGxpYnJhcnkuXG4vLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuXG4vLyBTYWZhcmkgNi4wLjUgKGF0IGxlYXN0KSBpbnRlcm1pdHRlbnRseSBmYWlscyB0byBjcmVhdGUgbWVzc2FnZSBwb3J0cyBvbiBhXG4vLyBwYWdlJ3MgZmlyc3QgbG9hZC4gVGhhbmtmdWxseSwgdGhpcyB2ZXJzaW9uIG9mIFNhZmFyaSBzdXBwb3J0c1xuLy8gTXV0YXRpb25PYnNlcnZlcnMsIHNvIHdlIGRvbid0IG5lZWQgdG8gZmFsbCBiYWNrIGluIHRoYXQgY2FzZS5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU1lc3NhZ2VDaGFubmVsKGNhbGxiYWNrKSB7XG4vLyAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbi8vICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBGb3IgcmVhc29ucyBleHBsYWluZWQgYWJvdmUsIHdlIGFyZSBhbHNvIHVuYWJsZSB0byB1c2UgYHNldEltbWVkaWF0ZWBcbi8vIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzLlxuLy8gRXZlbiBpZiB3ZSB3ZXJlLCB0aGVyZSBpcyBhbm90aGVyIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbi8vIEl0IGlzIG5vdCBzdWZmaWNpZW50IHRvIGFzc2lnbiBgc2V0SW1tZWRpYXRlYCB0byBgcmVxdWVzdEZsdXNoYCBiZWNhdXNlXG4vLyBgc2V0SW1tZWRpYXRlYCBtdXN0IGJlIGNhbGxlZCAqYnkgbmFtZSogYW5kIHRoZXJlZm9yZSBtdXN0IGJlIHdyYXBwZWQgaW4gYVxuLy8gY2xvc3VyZS5cbi8vIE5ldmVyIGZvcmdldC5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBTYWZhcmkgNi4wIGhhcyBhIHByb2JsZW0gd2hlcmUgdGltZXJzIHdpbGwgZ2V0IGxvc3Qgd2hpbGUgdGhlIHVzZXIgaXNcbi8vIHNjcm9sbGluZy4gVGhpcyBwcm9ibGVtIGRvZXMgbm90IGltcGFjdCBBU0FQIGJlY2F1c2UgU2FmYXJpIDYuMCBzdXBwb3J0c1xuLy8gbXV0YXRpb24gb2JzZXJ2ZXJzLCBzbyB0aGF0IGltcGxlbWVudGF0aW9uIGlzIHVzZWQgaW5zdGVhZC5cbi8vIEhvd2V2ZXIsIGlmIHdlIGV2ZXIgZWxlY3QgdG8gdXNlIHRpbWVycyBpbiBTYWZhcmksIHRoZSBwcmV2YWxlbnQgd29yay1hcm91bmRcbi8vIGlzIHRvIGFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0aGF0IGNhbGxzIGZvciBhIGZsdXNoLlxuXG4vLyBgc2V0VGltZW91dGAgZG9lcyBub3QgY2FsbCB0aGUgcGFzc2VkIGNhbGxiYWNrIGlmIHRoZSBkZWxheSBpcyBsZXNzIHRoYW5cbi8vIGFwcHJveGltYXRlbHkgNyBpbiB3ZWIgd29ya2VycyBpbiBGaXJlZm94IDggdGhyb3VnaCAxOCwgYW5kIHNvbWV0aW1lcyBub3Rcbi8vIGV2ZW4gdGhlbi5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICAvLyBXZSBkaXNwYXRjaCBhIHRpbWVvdXQgd2l0aCBhIHNwZWNpZmllZCBkZWxheSBvZiAwIGZvciBlbmdpbmVzIHRoYXRcbiAgICAgICAgLy8gY2FuIHJlbGlhYmx5IGFjY29tbW9kYXRlIHRoYXQgcmVxdWVzdC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgc25hcHBlZFxuICAgICAgICAvLyB0byBhIDQgbWlsaXNlY29uZCBkZWxheSwgYnV0IG9uY2Ugd2UncmUgZmx1c2hpbmcsIHRoZXJlJ3Mgbm8gZGVsYXlcbiAgICAgICAgLy8gYmV0d2VlbiBldmVudHMuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChoYW5kbGVUaW1lciwgMCk7XG4gICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoaXMgdGltZXIgZ2V0cyBmcmVxdWVudGx5IGRyb3BwZWQgaW4gRmlyZWZveFxuICAgICAgICAvLyB3b3JrZXJzLCB3ZSBlbmxpc3QgYW4gaW50ZXJ2YWwgaGFuZGxlIHRoYXQgd2lsbCB0cnkgdG8gZmlyZVxuICAgICAgICAvLyBhbiBldmVudCAyMCB0aW1lcyBwZXIgc2Vjb25kIHVudGlsIGl0IHN1Y2NlZWRzLlxuICAgICAgICB2YXIgaW50ZXJ2YWxIYW5kbGUgPSBzZXRJbnRlcnZhbChoYW5kbGVUaW1lciwgNTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRpbWVyKCkge1xuICAgICAgICAgICAgLy8gV2hpY2hldmVyIHRpbWVyIHN1Y2NlZWRzIHdpbGwgY2FuY2VsIGJvdGggdGltZXJzIGFuZFxuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUaGlzIGlzIGZvciBgYXNhcC5qc2Agb25seS5cbi8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdCBkZXBlbmRzIG9uXG4vLyBpdHMgZXhpc3RlbmNlLlxucmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIgPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXI7XG5cbi8vIEFTQVAgd2FzIG9yaWdpbmFsbHkgYSBuZXh0VGljayBzaGltIGluY2x1ZGVkIGluIFEuIFRoaXMgd2FzIGZhY3RvcmVkIG91dFxuLy8gaW50byB0aGlzIEFTQVAgcGFja2FnZS4gSXQgd2FzIGxhdGVyIGFkYXB0ZWQgdG8gUlNWUCB3aGljaCBtYWRlIGZ1cnRoZXJcbi8vIGFtZW5kbWVudHMuIFRoZXNlIGRlY2lzaW9ucywgcGFydGljdWxhcmx5IHRvIG1hcmdpbmFsaXplIE1lc3NhZ2VDaGFubmVsIGFuZFxuLy8gdG8gY2FwdHVyZSB0aGUgTXV0YXRpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbiBpbiBhIGNsb3N1cmUsIHdlcmUgaW50ZWdyYXRlZFxuLy8gYmFjayBpbnRvIEFTQVAgcHJvcGVyLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL2NkZGY3MjMyNTQ2YTljZjg1ODUyNGI3NWNkZTZmOWVkZjcyNjIwYTcvbGliL3JzdnAvYXNhcC5qc1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKVxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvLyBNSVQgbGljZW5zZSAoYnkgRWxhbiBTaGFua2VyKS5cbihmdW5jdGlvbihnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZXhlY3V0ZVN5bmMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpe1xuICAgICAgYXJnc1swXS5hcHBseShudWxsLCBhcmdzLnNwbGljZSgxKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBleGVjdXRlQXN5bmMgPSBmdW5jdGlvbihmbil7XG4gICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljaykge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWFrZUl0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgIH07XG4gICAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZm47XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xuICB9O1xuICBcbiAgdmFyIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihtYXliZUFycmF5KXtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1heWJlQXJyYXkpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIHZhciB3YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrLCBmb3JjZUFzeW5jKSB7XG4gICAgdmFyIG5leHRUaWNrID0gZm9yY2VBc3luYyA/IGV4ZWN1dGVBc3luYyA6IGV4ZWN1dGVTeW5jO1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgaWYgKCFfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIHdyYXBJdGVyYXRvcihtYWtlSXRlcmF0b3IodGFza3MpKSgpO1xuICB9O1xuXG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3YXRlcmZhbGw7XG4gICAgfSkuYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTsgLy8gUmVxdWlyZUpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdhdGVyZmFsbDsgLy8gQ29tbW9uSlNcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxzLndhdGVyZmFsbCA9IHdhdGVyZmFsbDsgLy8gPHNjcmlwdD5cbiAgfVxufSkodGhpcyk7XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5cblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBub2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBzeW0gPSAwO1xuZnVuY3Rpb24gZ2Vuc3ltKCkge1xuICByZXR1cm4gJ2hvbGVfJyArIHN5bSsrO1xufVxuXG4vLyBjb3B5LW9uLXdyaXRlIHZlcnNpb24gb2YgbWFwXG5mdW5jdGlvbiBtYXBDT1coYXJyLCBmdW5jKSB7XG4gIHZhciByZXMgPSBudWxsO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gZnVuYyhhcnJbaV0pO1xuICAgIGlmIChpdGVtICE9PSBhcnJbaV0pIHtcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJlcyA9IGFyci5zbGljZSgpO1xuICAgICAgfVxuICAgICAgcmVzW2ldID0gaXRlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcyB8fCBhcnI7XG59XG5mdW5jdGlvbiB3YWxrKGFzdCwgZnVuYywgZGVwdGhGaXJzdCkge1xuICBpZiAoIShhc3QgaW5zdGFuY2VvZiBub2Rlcy5Ob2RlKSkge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cbiAgaWYgKCFkZXB0aEZpcnN0KSB7XG4gICAgdmFyIGFzdFQgPSBmdW5jKGFzdCk7XG4gICAgaWYgKGFzdFQgJiYgYXN0VCAhPT0gYXN0KSB7XG4gICAgICByZXR1cm4gYXN0VDtcbiAgICB9XG4gIH1cbiAgaWYgKGFzdCBpbnN0YW5jZW9mIG5vZGVzLk5vZGVMaXN0KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbWFwQ09XKGFzdC5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiB3YWxrKG5vZGUsIGZ1bmMsIGRlcHRoRmlyc3QpO1xuICAgIH0pO1xuICAgIGlmIChjaGlsZHJlbiAhPT0gYXN0LmNoaWxkcmVuKSB7XG4gICAgICBhc3QgPSBuZXcgbm9kZXNbYXN0LnR5cGVuYW1lXShhc3QubGluZW5vLCBhc3QuY29sbm8sIGNoaWxkcmVuKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXN0IGluc3RhbmNlb2Ygbm9kZXMuQ2FsbEV4dGVuc2lvbikge1xuICAgIHZhciBhcmdzID0gd2Fsayhhc3QuYXJncywgZnVuYywgZGVwdGhGaXJzdCk7XG4gICAgdmFyIGNvbnRlbnRBcmdzID0gbWFwQ09XKGFzdC5jb250ZW50QXJncywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiB3YWxrKG5vZGUsIGZ1bmMsIGRlcHRoRmlyc3QpO1xuICAgIH0pO1xuICAgIGlmIChhcmdzICE9PSBhc3QuYXJncyB8fCBjb250ZW50QXJncyAhPT0gYXN0LmNvbnRlbnRBcmdzKSB7XG4gICAgICBhc3QgPSBuZXcgbm9kZXNbYXN0LnR5cGVuYW1lXShhc3QuZXh0TmFtZSwgYXN0LnByb3AsIGFyZ3MsIGNvbnRlbnRBcmdzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb3BzID0gYXN0LmZpZWxkcy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICByZXR1cm4gYXN0W2ZpZWxkXTtcbiAgICB9KTtcbiAgICB2YXIgcHJvcHNUID0gbWFwQ09XKHByb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIHdhbGsocHJvcCwgZnVuYywgZGVwdGhGaXJzdCk7XG4gICAgfSk7XG4gICAgaWYgKHByb3BzVCAhPT0gcHJvcHMpIHtcbiAgICAgIGFzdCA9IG5ldyBub2Rlc1thc3QudHlwZW5hbWVdKGFzdC5saW5lbm8sIGFzdC5jb2xubyk7XG4gICAgICBwcm9wc1QuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgICBhc3RbYXN0LmZpZWxkc1tpXV0gPSBwcm9wO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXB0aEZpcnN0ID8gZnVuYyhhc3QpIHx8IGFzdCA6IGFzdDtcbn1cbmZ1bmN0aW9uIGRlcHRoV2Fsayhhc3QsIGZ1bmMpIHtcbiAgcmV0dXJuIHdhbGsoYXN0LCBmdW5jLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIF9saWZ0RmlsdGVycyhub2RlLCBhc3luY0ZpbHRlcnMsIHByb3ApIHtcbiAgdmFyIGNoaWxkcmVuID0gW107XG4gIHZhciB3YWxrZWQgPSBkZXB0aFdhbGsocHJvcCA/IG5vZGVbcHJvcF0gOiBub2RlLCBmdW5jdGlvbiAoZGVzY05vZGUpIHtcbiAgICB2YXIgc3ltYm9sO1xuICAgIGlmIChkZXNjTm9kZSBpbnN0YW5jZW9mIG5vZGVzLkJsb2NrKSB7XG4gICAgICByZXR1cm4gZGVzY05vZGU7XG4gICAgfSBlbHNlIGlmIChkZXNjTm9kZSBpbnN0YW5jZW9mIG5vZGVzLkZpbHRlciAmJiBsaWIuaW5kZXhPZihhc3luY0ZpbHRlcnMsIGRlc2NOb2RlLm5hbWUudmFsdWUpICE9PSAtMSB8fCBkZXNjTm9kZSBpbnN0YW5jZW9mIG5vZGVzLkNhbGxFeHRlbnNpb25Bc3luYykge1xuICAgICAgc3ltYm9sID0gbmV3IG5vZGVzLlN5bWJvbChkZXNjTm9kZS5saW5lbm8sIGRlc2NOb2RlLmNvbG5vLCBnZW5zeW0oKSk7XG4gICAgICBjaGlsZHJlbi5wdXNoKG5ldyBub2Rlcy5GaWx0ZXJBc3luYyhkZXNjTm9kZS5saW5lbm8sIGRlc2NOb2RlLmNvbG5vLCBkZXNjTm9kZS5uYW1lLCBkZXNjTm9kZS5hcmdzLCBzeW1ib2wpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfSk7XG4gIGlmIChwcm9wKSB7XG4gICAgbm9kZVtwcm9wXSA9IHdhbGtlZDtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gd2Fsa2VkO1xuICB9XG4gIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIHJldHVybiBuZXcgbm9kZXMuTm9kZUxpc3Qobm9kZS5saW5lbm8sIG5vZGUuY29sbm8sIGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuZnVuY3Rpb24gbGlmdEZpbHRlcnMoYXN0LCBhc3luY0ZpbHRlcnMpIHtcbiAgcmV0dXJuIGRlcHRoV2Fsayhhc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5PdXRwdXQpIHtcbiAgICAgIHJldHVybiBfbGlmdEZpbHRlcnMobm9kZSwgYXN5bmNGaWx0ZXJzKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5TZXQpIHtcbiAgICAgIHJldHVybiBfbGlmdEZpbHRlcnMobm9kZSwgYXN5bmNGaWx0ZXJzLCAndmFsdWUnKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5Gb3IpIHtcbiAgICAgIHJldHVybiBfbGlmdEZpbHRlcnMobm9kZSwgYXN5bmNGaWx0ZXJzLCAnYXJyJyk7XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2Ygbm9kZXMuSWYpIHtcbiAgICAgIHJldHVybiBfbGlmdEZpbHRlcnMobm9kZSwgYXN5bmNGaWx0ZXJzLCAnY29uZCcpO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIG5vZGVzLkNhbGxFeHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBfbGlmdEZpbHRlcnMobm9kZSwgYXN5bmNGaWx0ZXJzLCAnYXJncycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBsaWZ0U3VwZXIoYXN0KSB7XG4gIHJldHVybiB3YWxrKGFzdCwgZnVuY3Rpb24gKGJsb2NrTm9kZSkge1xuICAgIGlmICghKGJsb2NrTm9kZSBpbnN0YW5jZW9mIG5vZGVzLkJsb2NrKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaGFzU3VwZXIgPSBmYWxzZTtcbiAgICB2YXIgc3ltYm9sID0gZ2Vuc3ltKCk7XG4gICAgYmxvY2tOb2RlLmJvZHkgPSB3YWxrKGJsb2NrTm9kZS5ib2R5LCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5GdW5DYWxsICYmIG5vZGUubmFtZS52YWx1ZSA9PT0gJ3N1cGVyJykge1xuICAgICAgICBoYXNTdXBlciA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgbm9kZXMuU3ltYm9sKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBzeW1ib2wpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChoYXNTdXBlcikge1xuICAgICAgYmxvY2tOb2RlLmJvZHkuY2hpbGRyZW4udW5zaGlmdChuZXcgbm9kZXMuU3VwZXIoMCwgMCwgYmxvY2tOb2RlLm5hbWUsIG5ldyBub2Rlcy5TeW1ib2woMCwgMCwgc3ltYm9sKSkpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVtZW50cyhhc3QpIHtcbiAgcmV0dXJuIGRlcHRoV2Fsayhhc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIG5vZGVzLklmKSAmJiAhKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5Gb3IpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgYXN5bmMgPSBmYWxzZTtcbiAgICB3YWxrKG5vZGUsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2Ygbm9kZXMuRmlsdGVyQXN5bmMgfHwgY2hpbGQgaW5zdGFuY2VvZiBub2Rlcy5JZkFzeW5jIHx8IGNoaWxkIGluc3RhbmNlb2Ygbm9kZXMuQXN5bmNFYWNoIHx8IGNoaWxkIGluc3RhbmNlb2Ygbm9kZXMuQXN5bmNBbGwgfHwgY2hpbGQgaW5zdGFuY2VvZiBub2Rlcy5DYWxsRXh0ZW5zaW9uQXN5bmMpIHtcbiAgICAgICAgYXN5bmMgPSB0cnVlO1xuICAgICAgICAvLyBTdG9wIGl0ZXJhdGluZyBieSByZXR1cm5pbmcgdGhlIG5vZGVcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygbm9kZXMuSWYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBub2Rlcy5JZkFzeW5jKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLmNvbmQsIG5vZGUuYm9keSwgbm9kZS5lbHNlXyk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBub2Rlcy5Gb3IgJiYgIShub2RlIGluc3RhbmNlb2Ygbm9kZXMuQXN5bmNBbGwpKSB7XG4gICAgICAgIHJldHVybiBuZXcgbm9kZXMuQXN5bmNFYWNoKG5vZGUubGluZW5vLCBub2RlLmNvbG5vLCBub2RlLmFyciwgbm9kZS5uYW1lLCBub2RlLmJvZHksIG5vZGUuZWxzZV8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNwcyhhc3QsIGFzeW5jRmlsdGVycykge1xuICByZXR1cm4gY29udmVydFN0YXRlbWVudHMobGlmdFN1cGVyKGxpZnRGaWx0ZXJzKGFzdCwgYXN5bmNGaWx0ZXJzKSkpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtKGFzdCwgYXN5bmNGaWx0ZXJzKSB7XG4gIHJldHVybiBjcHMoYXN0LCBhc3luY0ZpbHRlcnMgfHwgW10pO1xufVxuXG4vLyB2YXIgcGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcbi8vIHZhciBzcmMgPSAnaGVsbG8geyUgZm9vICV9eyUgZW5kZm9vICV9IGVuZCc7XG4vLyB2YXIgYXN0ID0gdHJhbnNmb3JtKHBhcnNlci5wYXJzZShzcmMsIFtuZXcgRm9vRXh0ZW5zaW9uKCldKSwgWydiYXInXSk7XG4vLyBub2Rlcy5wcmludE5vZGVzKGFzdCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufTtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgbGliID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciByID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5hYnMgPSBNYXRoLmFicztcbmZ1bmN0aW9uIGlzTmFOKG51bSkge1xuICByZXR1cm4gbnVtICE9PSBudW07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbmZ1bmN0aW9uIGJhdGNoKGFyciwgbGluZWNvdW50LCBmaWxsV2l0aCkge1xuICB2YXIgaTtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgdG1wID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSAlIGxpbmVjb3VudCA9PT0gMCAmJiB0bXAubGVuZ3RoKSB7XG4gICAgICByZXMucHVzaCh0bXApO1xuICAgICAgdG1wID0gW107XG4gICAgfVxuICAgIHRtcC5wdXNoKGFycltpXSk7XG4gIH1cbiAgaWYgKHRtcC5sZW5ndGgpIHtcbiAgICBpZiAoZmlsbFdpdGgpIHtcbiAgICAgIGZvciAoaSA9IHRtcC5sZW5ndGg7IGkgPCBsaW5lY291bnQ7IGkrKykge1xuICAgICAgICB0bXAucHVzaChmaWxsV2l0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcy5wdXNoKHRtcCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuYmF0Y2ggPSBiYXRjaDtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgdmFyIHJldCA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCByZXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXQuc2xpY2UoMSkpO1xufVxuZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbmZ1bmN0aW9uIGNlbnRlcihzdHIsIHdpZHRoKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgd2lkdGggPSB3aWR0aCB8fCA4MDtcbiAgaWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHZhciBzcGFjZXMgPSB3aWR0aCAtIHN0ci5sZW5ndGg7XG4gIHZhciBwcmUgPSBsaWIucmVwZWF0KCcgJywgc3BhY2VzIC8gMiAtIHNwYWNlcyAlIDIpO1xuICB2YXIgcG9zdCA9IGxpYi5yZXBlYXQoJyAnLCBzcGFjZXMgLyAyKTtcbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKHN0ciwgcHJlICsgc3RyICsgcG9zdCk7XG59XG5leHBvcnRzLmNlbnRlciA9IGNlbnRlcjtcbmZ1bmN0aW9uIGRlZmF1bHRfKHZhbCwgZGVmLCBib29sKSB7XG4gIGlmIChib29sKSB7XG4gICAgcmV0dXJuIHZhbCB8fCBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDogZGVmO1xuICB9XG59XG5cbi8vIFRPRE86IGl0IGlzIGNvbmZ1c2luZyB0byBleHBvcnQgc29tZXRoaW5nIGNhbGxlZCAnZGVmYXVsdCdcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRfOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG5mdW5jdGlvbiBkaWN0c29ydCh2YWwsIGNhc2VTZW5zaXRpdmUsIGJ5KSB7XG4gIGlmICghbGliLmlzT2JqZWN0KHZhbCkpIHtcbiAgICB0aHJvdyBuZXcgbGliLlRlbXBsYXRlRXJyb3IoJ2RpY3Rzb3J0IGZpbHRlcjogdmFsIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGFycmF5ID0gW107XG4gIC8vIGRlbGliZXJhdGVseSBpbmNsdWRlIHByb3BlcnRpZXMgZnJvbSB0aGUgb2JqZWN0J3MgcHJvdG90eXBlXG4gIGZvciAodmFyIGsgaW4gdmFsKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgYXJyYXkucHVzaChbaywgdmFsW2tdXSk7XG4gIH1cbiAgdmFyIHNpO1xuICBpZiAoYnkgPT09IHVuZGVmaW5lZCB8fCBieSA9PT0gJ2tleScpIHtcbiAgICBzaSA9IDA7XG4gIH0gZWxzZSBpZiAoYnkgPT09ICd2YWx1ZScpIHtcbiAgICBzaSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGxpYi5UZW1wbGF0ZUVycm9yKCdkaWN0c29ydCBmaWx0ZXI6IFlvdSBjYW4gb25seSBzb3J0IGJ5IGVpdGhlciBrZXkgb3IgdmFsdWUnKTtcbiAgfVxuICBhcnJheS5zb3J0KGZ1bmN0aW9uICh0MSwgdDIpIHtcbiAgICB2YXIgYSA9IHQxW3NpXTtcbiAgICB2YXIgYiA9IHQyW3NpXTtcbiAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICAgIGlmIChsaWIuaXNTdHJpbmcoYSkpIHtcbiAgICAgICAgYSA9IGEudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChsaWIuaXNTdHJpbmcoYikpIHtcbiAgICAgICAgYiA9IGIudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPT09IGIgPyAwIDogLTE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuZXhwb3J0cy5kaWN0c29ydCA9IGRpY3Rzb3J0O1xuZnVuY3Rpb24gZHVtcChvYmosIHNwYWNlcykge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBzcGFjZXMpO1xufVxuZXhwb3J0cy5kdW1wID0gZHVtcDtcbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgaWYgKHN0ciBpbnN0YW5jZW9mIHIuU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgc3RyID0gc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkID8gJycgOiBzdHI7XG4gIHJldHVybiByLm1hcmtTYWZlKGxpYi5lc2NhcGUoc3RyLnRvU3RyaW5nKCkpKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuZnVuY3Rpb24gc2FmZShzdHIpIHtcbiAgaWYgKHN0ciBpbnN0YW5jZW9mIHIuU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgc3RyID0gc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkID8gJycgOiBzdHI7XG4gIHJldHVybiByLm1hcmtTYWZlKHN0ci50b1N0cmluZygpKTtcbn1cbmV4cG9ydHMuc2FmZSA9IHNhZmU7XG5mdW5jdGlvbiBmaXJzdChhcnIpIHtcbiAgcmV0dXJuIGFyclswXTtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmZ1bmN0aW9uIGZvcmNlZXNjYXBlKHN0cikge1xuICBzdHIgPSBzdHIgPT09IG51bGwgfHwgc3RyID09PSB1bmRlZmluZWQgPyAnJyA6IHN0cjtcbiAgcmV0dXJuIHIubWFya1NhZmUobGliLmVzY2FwZShzdHIudG9TdHJpbmcoKSkpO1xufVxuZXhwb3J0cy5mb3JjZWVzY2FwZSA9IGZvcmNlZXNjYXBlO1xuZnVuY3Rpb24gZ3JvdXBieShhcnIsIGF0dHIpIHtcbiAgcmV0dXJuIGxpYi5ncm91cEJ5KGFyciwgYXR0ciwgdGhpcy5lbnYub3B0cy50aHJvd09uVW5kZWZpbmVkKTtcbn1cbmV4cG9ydHMuZ3JvdXBieSA9IGdyb3VwYnk7XG5mdW5jdGlvbiBpbmRlbnQoc3RyLCB3aWR0aCwgaW5kZW50Zmlyc3QpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICBpZiAoc3RyID09PSAnJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICB3aWR0aCA9IHdpZHRoIHx8IDQ7XG4gIC8vIGxldCByZXMgPSAnJztcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKTtcbiAgdmFyIHNwID0gbGliLnJlcGVhdCgnICcsIHdpZHRoKTtcbiAgdmFyIHJlcyA9IGxpbmVzLm1hcChmdW5jdGlvbiAobCwgaSkge1xuICAgIHJldHVybiBpID09PSAwICYmICFpbmRlbnRmaXJzdCA/IGwgOiBcIlwiICsgc3AgKyBsO1xuICB9KS5qb2luKCdcXG4nKTtcbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKHN0ciwgcmVzKTtcbn1cbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xuZnVuY3Rpb24gam9pbihhcnIsIGRlbCwgYXR0cikge1xuICBkZWwgPSBkZWwgfHwgJyc7XG4gIGlmIChhdHRyKSB7XG4gICAgYXJyID0gbGliLm1hcChhcnIsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdlthdHRyXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYXJyLmpvaW4oZGVsKTtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG5mdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5mdW5jdGlvbiBsZW5ndGhGaWx0ZXIodmFsKSB7XG4gIHZhciB2YWx1ZSA9IG5vcm1hbGl6ZSh2YWwsICcnKTtcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIE1hcCB8fCB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAvLyBFQ01BU2NyaXB0IDIwMTUgTWFwcyBhbmQgU2V0c1xuICAgICAgcmV0dXJuIHZhbHVlLnNpemU7XG4gICAgfVxuICAgIGlmIChsaWIuaXNPYmplY3QodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpKSB7XG4gICAgICAvLyBPYmplY3RzIChiZXNpZGVzIFNhZmVTdHJpbmdzKSwgbm9uLXByaW1hdGl2ZSBBcnJheXNcbiAgICAgIHJldHVybiBsaWIua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufVxuZXhwb3J0cy5sZW5ndGggPSBsZW5ndGhGaWx0ZXI7XG5mdW5jdGlvbiBsaXN0KHZhbCkge1xuICBpZiAobGliLmlzU3RyaW5nKHZhbCkpIHtcbiAgICByZXR1cm4gdmFsLnNwbGl0KCcnKTtcbiAgfSBlbHNlIGlmIChsaWIuaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiBsaWIuX2VudHJpZXModmFsIHx8IHt9KS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmWzBdLFxuICAgICAgICB2YWx1ZSA9IF9yZWZbMV07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxpYi5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBsaWIuVGVtcGxhdGVFcnJvcignbGlzdCBmaWx0ZXI6IHR5cGUgbm90IGl0ZXJhYmxlJyk7XG4gIH1cbn1cbmV4cG9ydHMubGlzdCA9IGxpc3Q7XG5mdW5jdGlvbiBsb3dlcihzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLmxvd2VyID0gbG93ZXI7XG5mdW5jdGlvbiBubDJicihzdHIpIHtcbiAgaWYgKHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCBzdHIucmVwbGFjZSgvXFxyXFxufFxcbi9nLCAnPGJyIC8+XFxuJykpO1xufVxuZXhwb3J0cy5ubDJiciA9IG5sMmJyO1xuZnVuY3Rpb24gcmFuZG9tKGFycikge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cbmV4cG9ydHMucmFuZG9tID0gcmFuZG9tO1xuXG4vKipcbiAqIENvbnN0cnVjdCBzZWxlY3Qgb3IgcmVqZWN0IGZpbHRlclxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhwZWN0ZWRUZXN0UmVzdWx0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oYXJyYXksIHN0cmluZywgKik6IGFycmF5fVxuICovXG5mdW5jdGlvbiBnZXRTZWxlY3RPclJlamVjdChleHBlY3RlZFRlc3RSZXN1bHQpIHtcbiAgZnVuY3Rpb24gZmlsdGVyKGFyciwgdGVzdE5hbWUsIHNlY29uZEFyZykge1xuICAgIGlmICh0ZXN0TmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICB0ZXN0TmFtZSA9ICd0cnV0aHknO1xuICAgIH1cbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgdmFyIHRlc3QgPSBjb250ZXh0LmVudi5nZXRUZXN0KHRlc3ROYW1lKTtcbiAgICByZXR1cm4gbGliLnRvQXJyYXkoYXJyKS5maWx0ZXIoZnVuY3Rpb24gZXhhbWluZVRlc3RSZXN1bHQoaXRlbSkge1xuICAgICAgcmV0dXJuIHRlc3QuY2FsbChjb250ZXh0LCBpdGVtLCBzZWNvbmRBcmcpID09PSBleHBlY3RlZFRlc3RSZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcjtcbn1cbmV4cG9ydHMucmVqZWN0ID0gZ2V0U2VsZWN0T3JSZWplY3QoZmFsc2UpO1xuZnVuY3Rpb24gcmVqZWN0YXR0cihhcnIsIGF0dHIpIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW1bYXR0cl07XG4gIH0pO1xufVxuZXhwb3J0cy5yZWplY3RhdHRyID0gcmVqZWN0YXR0cjtcbmV4cG9ydHMuc2VsZWN0ID0gZ2V0U2VsZWN0T3JSZWplY3QodHJ1ZSk7XG5mdW5jdGlvbiBzZWxlY3RhdHRyKGFyciwgYXR0cikge1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAhIWl0ZW1bYXR0cl07XG4gIH0pO1xufVxuZXhwb3J0cy5zZWxlY3RhdHRyID0gc2VsZWN0YXR0cjtcbmZ1bmN0aW9uIHJlcGxhY2Uoc3RyLCBvbGQsIG5ld18sIG1heENvdW50KSB7XG4gIHZhciBvcmlnaW5hbFN0ciA9IHN0cjtcbiAgaWYgKG9sZCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShvbGQsIG5ld18pO1xuICB9XG4gIGlmICh0eXBlb2YgbWF4Q291bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbWF4Q291bnQgPSAtMTtcbiAgfVxuICB2YXIgcmVzID0gJyc7IC8vIE91dHB1dFxuXG4gIC8vIENhc3QgTnVtYmVycyBpbiB0aGUgc2VhcmNoIHRlcm0gdG8gc3RyaW5nXG4gIGlmICh0eXBlb2Ygb2xkID09PSAnbnVtYmVyJykge1xuICAgIG9sZCA9ICcnICsgb2xkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvbGQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgaXQgaXMgc29tZXRoaW5nIG90aGVyIHRoYW4gbnVtYmVyIG9yIHN0cmluZyxcbiAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIHN0cmluZ1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICAvLyBDYXN0IG51bWJlcnMgaW4gdGhlIHJlcGxhY2VtZW50IHRvIHN0cmluZ1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ251bWJlcicpIHtcbiAgICBzdHIgPSAnJyArIHN0cjtcbiAgfVxuXG4gIC8vIElmIGJ5IG5vdywgd2UgZG9uJ3QgaGF2ZSBhIHN0cmluZywgdGhyb3cgaXQgYmFja1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgJiYgIShzdHIgaW5zdGFuY2VvZiByLlNhZmVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8vIFNob3J0Q2lyY3VpdHNcbiAgaWYgKG9sZCA9PT0gJycpIHtcbiAgICAvLyBNaW1pYyB0aGUgcHl0aG9uIGJlaGF2aW91cjogZW1wdHkgc3RyaW5nIGlzIHJlcGxhY2VkXG4gICAgLy8gYnkgcmVwbGFjZW1lbnQgZS5nLiBcImFiY1wifHJlcGxhY2UoXCJcIiwgXCIuXCIpIC0+IC5hLmIuYy5cbiAgICByZXMgPSBuZXdfICsgc3RyLnNwbGl0KCcnKS5qb2luKG5ld18pICsgbmV3XztcbiAgICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCByZXMpO1xuICB9XG4gIHZhciBuZXh0SW5kZXggPSBzdHIuaW5kZXhPZihvbGQpO1xuICAvLyBpZiAjIG9mIHJlcGxhY2VtZW50cyB0byBwZXJmb3JtIGlzIDAsIG9yIHRoZSBzdHJpbmcgdG8gZG9lc1xuICAvLyBub3QgY29udGFpbiB0aGUgb2xkIHZhbHVlLCByZXR1cm4gdGhlIHN0cmluZ1xuICBpZiAobWF4Q291bnQgPT09IDAgfHwgbmV4dEluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIHBvcyA9IDA7XG4gIHZhciBjb3VudCA9IDA7IC8vICMgb2YgcmVwbGFjZW1lbnRzIG1hZGVcblxuICB3aGlsZSAobmV4dEluZGV4ID4gLTEgJiYgKG1heENvdW50ID09PSAtMSB8fCBjb3VudCA8IG1heENvdW50KSkge1xuICAgIC8vIEdyYWIgdGhlIG5leHQgY2h1bmsgb2Ygc3JjIHN0cmluZyBhbmQgYWRkIGl0IHdpdGggdGhlXG4gICAgLy8gcmVwbGFjZW1lbnQsIHRvIHRoZSByZXN1bHRcbiAgICByZXMgKz0gc3RyLnN1YnN0cmluZyhwb3MsIG5leHRJbmRleCkgKyBuZXdfO1xuICAgIC8vIEluY3JlbWVudCBvdXIgcG9pbnRlciBpbiB0aGUgc3JjIHN0cmluZ1xuICAgIHBvcyA9IG5leHRJbmRleCArIG9sZC5sZW5ndGg7XG4gICAgY291bnQrKztcbiAgICAvLyBTZWUgaWYgdGhlcmUgYXJlIGFueSBtb3JlIHJlcGxhY2VtZW50cyB0byBiZSBtYWRlXG4gICAgbmV4dEluZGV4ID0gc3RyLmluZGV4T2Yob2xkLCBwb3MpO1xuICB9XG5cbiAgLy8gV2UndmUgZWl0aGVyIHJlYWNoZWQgdGhlIGVuZCwgb3IgZG9uZSB0aGUgbWF4ICMgb2ZcbiAgLy8gcmVwbGFjZW1lbnRzLCB0YWNrIG9uIGFueSByZW1haW5pbmcgc3RyaW5nXG4gIGlmIChwb3MgPCBzdHIubGVuZ3RoKSB7XG4gICAgcmVzICs9IHN0ci5zdWJzdHJpbmcocG9zKTtcbiAgfVxuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob3JpZ2luYWxTdHIsIHJlcyk7XG59XG5leHBvcnRzLnJlcGxhY2UgPSByZXBsYWNlO1xuZnVuY3Rpb24gcmV2ZXJzZSh2YWwpIHtcbiAgdmFyIGFycjtcbiAgaWYgKGxpYi5pc1N0cmluZyh2YWwpKSB7XG4gICAgYXJyID0gbGlzdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIENvcHkgaXRcbiAgICBhcnIgPSBsaWIubWFwKHZhbCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH0pO1xuICB9XG4gIGFyci5yZXZlcnNlKCk7XG4gIGlmIChsaWIuaXNTdHJpbmcodmFsKSkge1xuICAgIHJldHVybiByLmNvcHlTYWZlbmVzcyh2YWwsIGFyci5qb2luKCcnKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG5mdW5jdGlvbiByb3VuZCh2YWwsIHByZWNpc2lvbiwgbWV0aG9kKSB7XG4gIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCAwO1xuICB2YXIgZmFjdG9yID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHZhciByb3VuZGVyO1xuICBpZiAobWV0aG9kID09PSAnY2VpbCcpIHtcbiAgICByb3VuZGVyID0gTWF0aC5jZWlsO1xuICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2Zsb29yJykge1xuICAgIHJvdW5kZXIgPSBNYXRoLmZsb29yO1xuICB9IGVsc2Uge1xuICAgIHJvdW5kZXIgPSBNYXRoLnJvdW5kO1xuICB9XG4gIHJldHVybiByb3VuZGVyKHZhbCAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5leHBvcnRzLnJvdW5kID0gcm91bmQ7XG5mdW5jdGlvbiBzbGljZShhcnIsIHNsaWNlcywgZmlsbFdpdGgpIHtcbiAgdmFyIHNsaWNlTGVuZ3RoID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gc2xpY2VzKTtcbiAgdmFyIGV4dHJhID0gYXJyLmxlbmd0aCAlIHNsaWNlcztcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZXM7IGkrKykge1xuICAgIHZhciBzdGFydCA9IG9mZnNldCArIGkgKiBzbGljZUxlbmd0aDtcbiAgICBpZiAoaSA8IGV4dHJhKSB7XG4gICAgICBvZmZzZXQrKztcbiAgICB9XG4gICAgdmFyIGVuZCA9IG9mZnNldCArIChpICsgMSkgKiBzbGljZUxlbmd0aDtcbiAgICB2YXIgY3VyclNsaWNlID0gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIGlmIChmaWxsV2l0aCAmJiBpID49IGV4dHJhKSB7XG4gICAgICBjdXJyU2xpY2UucHVzaChmaWxsV2l0aCk7XG4gICAgfVxuICAgIHJlcy5wdXNoKGN1cnJTbGljZSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuc2xpY2UgPSBzbGljZTtcbmZ1bmN0aW9uIHN1bShhcnIsIGF0dHIsIHN0YXJ0KSB7XG4gIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGlmIChhdHRyKSB7XG4gICAgYXJyID0gbGliLm1hcChhcnIsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdlthdHRyXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc3RhcnQgKyBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xuICB9LCAwKTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuZXhwb3J0cy5zb3J0ID0gci5tYWtlTWFjcm8oWyd2YWx1ZScsICdyZXZlcnNlJywgJ2Nhc2Vfc2Vuc2l0aXZlJywgJ2F0dHJpYnV0ZSddLCBbXSwgZnVuY3Rpb24gc29ydEZpbHRlcihhcnIsIHJldmVyc2VkLCBjYXNlU2VucywgYXR0cikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICAvLyBDb3B5IGl0XG4gIHZhciBhcnJheSA9IGxpYi5tYXAoYXJyLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2O1xuICB9KTtcbiAgdmFyIGdldEF0dHJpYnV0ZSA9IGxpYi5nZXRBdHRyR2V0dGVyKGF0dHIpO1xuICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIHggPSBhdHRyID8gZ2V0QXR0cmlidXRlKGEpIDogYTtcbiAgICB2YXIgeSA9IGF0dHIgPyBnZXRBdHRyaWJ1dGUoYikgOiBiO1xuICAgIGlmIChfdGhpcy5lbnYub3B0cy50aHJvd09uVW5kZWZpbmVkICYmIGF0dHIgJiYgKHggPT09IHVuZGVmaW5lZCB8fCB5ID09PSB1bmRlZmluZWQpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwic29ydDogYXR0cmlidXRlIFxcXCJcIiArIGF0dHIgKyBcIlxcXCIgcmVzb2x2ZWQgdG8gdW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgICBpZiAoIWNhc2VTZW5zICYmIGxpYi5pc1N0cmluZyh4KSAmJiBsaWIuaXNTdHJpbmcoeSkpIHtcbiAgICAgIHggPSB4LnRvTG93ZXJDYXNlKCk7XG4gICAgICB5ID0geS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAoeCA8IHkpIHtcbiAgICAgIHJldHVybiByZXZlcnNlZCA/IDEgOiAtMTtcbiAgICB9IGVsc2UgaWYgKHggPiB5KSB7XG4gICAgICByZXR1cm4gcmV2ZXJzZWQgPyAtMSA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhcnJheTtcbn0pO1xuZnVuY3Rpb24gc3RyaW5nKG9iaikge1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob2JqLCBvYmopO1xufVxuZXhwb3J0cy5zdHJpbmcgPSBzdHJpbmc7XG5mdW5jdGlvbiBzdHJpcHRhZ3MoaW5wdXQsIHByZXNlcnZlTGluZWJyZWFrcykge1xuICBpbnB1dCA9IG5vcm1hbGl6ZShpbnB1dCwgJycpO1xuICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj58PCEtLVtcXHNcXFNdKj8tLT4vZ2k7XG4gIHZhciB0cmltbWVkSW5wdXQgPSB0cmltKGlucHV0LnJlcGxhY2UodGFncywgJycpKTtcbiAgdmFyIHJlcyA9ICcnO1xuICBpZiAocHJlc2VydmVMaW5lYnJlYWtzKSB7XG4gICAgcmVzID0gdHJpbW1lZElucHV0LnJlcGxhY2UoL14gK3wgKyQvZ20sICcnKSAvLyByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzXG4gICAgLnJlcGxhY2UoLyArL2csICcgJykgLy8gc3F1YXNoIGFkamFjZW50IHNwYWNlc1xuICAgIC5yZXBsYWNlKC8oXFxyXFxuKS9nLCAnXFxuJykgLy8gbm9ybWFsaXplIGxpbmVicmVha3MgKENSTEYgLT4gTEYpXG4gICAgLnJlcGxhY2UoL1xcblxcblxcbisvZywgJ1xcblxcbicpOyAvLyBzcXVhc2ggYWJub3JtYWwgYWRqYWNlbnQgbGluZWJyZWFrc1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHRyaW1tZWRJbnB1dC5yZXBsYWNlKC9cXHMrL2dpLCAnICcpO1xuICB9XG4gIHJldHVybiByLmNvcHlTYWZlbmVzcyhpbnB1dCwgcmVzKTtcbn1cbmV4cG9ydHMuc3RyaXB0YWdzID0gc3RyaXB0YWdzO1xuZnVuY3Rpb24gdGl0bGUoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgdmFyIHdvcmRzID0gc3RyLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemUod29yZCk7XG4gIH0pO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Moc3RyLCB3b3Jkcy5qb2luKCcgJykpO1xufVxuZXhwb3J0cy50aXRsZSA9IHRpdGxlO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHIuY29weVNhZmVuZXNzKHN0ciwgc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKSk7XG59XG5leHBvcnRzLnRyaW0gPSB0cmltO1xuZnVuY3Rpb24gdHJ1bmNhdGUoaW5wdXQsIGxlbmd0aCwga2lsbHdvcmRzLCBlbmQpIHtcbiAgdmFyIG9yaWcgPSBpbnB1dDtcbiAgaW5wdXQgPSBub3JtYWxpemUoaW5wdXQsICcnKTtcbiAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI1NTtcbiAgaWYgKGlucHV0Lmxlbmd0aCA8PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKGtpbGx3b3Jkcykge1xuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlkeCA9IGlucHV0Lmxhc3RJbmRleE9mKCcgJywgbGVuZ3RoKTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgaWR4ID0gbGVuZ3RoO1xuICAgIH1cbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZygwLCBpZHgpO1xuICB9XG4gIGlucHV0ICs9IGVuZCAhPT0gdW5kZWZpbmVkICYmIGVuZCAhPT0gbnVsbCA/IGVuZCA6ICcuLi4nO1xuICByZXR1cm4gci5jb3B5U2FmZW5lc3Mob3JpZywgaW5wdXQpO1xufVxuZXhwb3J0cy50cnVuY2F0ZSA9IHRydW5jYXRlO1xuZnVuY3Rpb24gdXBwZXIoc3RyKSB7XG4gIHN0ciA9IG5vcm1hbGl6ZShzdHIsICcnKTtcbiAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuZXhwb3J0cy51cHBlciA9IHVwcGVyO1xuZnVuY3Rpb24gdXJsZW5jb2RlKG9iaikge1xuICB2YXIgZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICBpZiAobGliLmlzU3RyaW5nKG9iaikpIHtcbiAgICByZXR1cm4gZW5jKG9iaik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGtleXZhbHMgPSBsaWIuaXNBcnJheShvYmopID8gb2JqIDogbGliLl9lbnRyaWVzKG9iaik7XG4gICAgcmV0dXJuIGtleXZhbHMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGsgPSBfcmVmMlswXSxcbiAgICAgICAgdiA9IF9yZWYyWzFdO1xuICAgICAgcmV0dXJuIGVuYyhrKSArIFwiPVwiICsgZW5jKHYpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfVxufVxuZXhwb3J0cy51cmxlbmNvZGUgPSB1cmxlbmNvZGU7XG5cbi8vIEZvciB0aGUgamluamEgcmVnZXhwLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taXRzdWhpa28vamluamEyL2Jsb2IvZjE1YjgxNGRjYmE2YWExMmJjNzRkMWY3ZDBjODgxZDU1ZjcxMjZiZS9qaW5qYTIvdXRpbHMucHkjTDIwLUwyM1xudmFyIHB1bmNSZSA9IC9eKD86XFwofDx8Jmx0Oyk/KC4qPykoPzpcXC58LHxcXCl8XFxufCZndDspPyQvO1xuLy8gZnJvbSBodHRwOi8vYmxvZy5nZXJ2Lm5ldC8yMDExLzA1L2h0bWw1X2VtYWlsX2FkZHJlc3NfcmVnZXhwL1xudmFyIGVtYWlsUmUgPSAvXltcXHcuISMkJSYnKitcXC1cXC89P1xcXmB7fH1+XStAW2EtelxcZFxcLV0rKFxcLlthLXpcXGRcXC1dKykrJC9pO1xudmFyIGh0dHBIdHRwc1JlID0gL15odHRwcz86XFwvXFwvLiokLztcbnZhciB3d3dSZSA9IC9ed3d3XFwuLztcbnZhciB0bGRSZSA9IC9cXC4oPzpvcmd8bmV0fGNvbSkoPzpcXDp8XFwvfCQpLztcbmZ1bmN0aW9uIHVybGl6ZShzdHIsIGxlbmd0aCwgbm9mb2xsb3cpIHtcbiAgaWYgKGlzTmFOKGxlbmd0aCkpIHtcbiAgICBsZW5ndGggPSBJbmZpbml0eTtcbiAgfVxuICB2YXIgbm9Gb2xsb3dBdHRyID0gbm9mb2xsb3cgPT09IHRydWUgPyAnIHJlbD1cIm5vZm9sbG93XCInIDogJyc7XG4gIHZhciB3b3JkcyA9IHN0ci5zcGxpdCgvKFxccyspLykuZmlsdGVyKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgLy8gSWYgdGhlIHdvcmQgaGFzIG5vIGxlbmd0aCwgYmFpbC4gVGhpcyBjYW4gaGFwcGVuIGZvciBzdHIgd2l0aFxuICAgIC8vIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgcmV0dXJuIHdvcmQgJiYgd29yZC5sZW5ndGg7XG4gIH0pLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgIHZhciBtYXRjaGVzID0gd29yZC5tYXRjaChwdW5jUmUpO1xuICAgIHZhciBwb3NzaWJsZVVybCA9IG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogd29yZDtcbiAgICB2YXIgc2hvcnRVcmwgPSBwb3NzaWJsZVVybC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIC8vIHVybCB0aGF0IHN0YXJ0cyB3aXRoIGh0dHAgb3IgaHR0cHNcbiAgICBpZiAoaHR0cEh0dHBzUmUudGVzdChwb3NzaWJsZVVybCkpIHtcbiAgICAgIHJldHVybiBcIjxhIGhyZWY9XFxcIlwiICsgcG9zc2libGVVcmwgKyBcIlxcXCJcIiArIG5vRm9sbG93QXR0ciArIFwiPlwiICsgc2hvcnRVcmwgKyBcIjwvYT5cIjtcbiAgICB9XG5cbiAgICAvLyB1cmwgdGhhdCBzdGFydHMgd2l0aCB3d3cuXG4gICAgaWYgKHd3d1JlLnRlc3QocG9zc2libGVVcmwpKSB7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJodHRwOi8vXCIgKyBwb3NzaWJsZVVybCArIFwiXFxcIlwiICsgbm9Gb2xsb3dBdHRyICsgXCI+XCIgKyBzaG9ydFVybCArIFwiPC9hPlwiO1xuICAgIH1cblxuICAgIC8vIGFuIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGZvcm0gdXNlcm5hbWVAZG9tYWluLnRsZFxuICAgIGlmIChlbWFpbFJlLnRlc3QocG9zc2libGVVcmwpKSB7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJtYWlsdG86XCIgKyBwb3NzaWJsZVVybCArIFwiXFxcIj5cIiArIHBvc3NpYmxlVXJsICsgXCI8L2E+XCI7XG4gICAgfVxuXG4gICAgLy8gdXJsIHRoYXQgZW5kcyBpbiAuY29tLCAub3JnIG9yIC5uZXQgdGhhdCBpcyBub3QgYW4gZW1haWwgYWRkcmVzc1xuICAgIGlmICh0bGRSZS50ZXN0KHBvc3NpYmxlVXJsKSkge1xuICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiaHR0cDovL1wiICsgcG9zc2libGVVcmwgKyBcIlxcXCJcIiArIG5vRm9sbG93QXR0ciArIFwiPlwiICsgc2hvcnRVcmwgKyBcIjwvYT5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH0pO1xuICByZXR1cm4gd29yZHMuam9pbignJyk7XG59XG5leHBvcnRzLnVybGl6ZSA9IHVybGl6ZTtcbmZ1bmN0aW9uIHdvcmRjb3VudChzdHIpIHtcbiAgc3RyID0gbm9ybWFsaXplKHN0ciwgJycpO1xuICB2YXIgd29yZHMgPSBzdHIgPyBzdHIubWF0Y2goL1xcdysvZykgOiBudWxsO1xuICByZXR1cm4gd29yZHMgPyB3b3Jkcy5sZW5ndGggOiBudWxsO1xufVxuZXhwb3J0cy53b3JkY291bnQgPSB3b3JkY291bnQ7XG5mdW5jdGlvbiBmbG9hdCh2YWwsIGRlZikge1xuICB2YXIgcmVzID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4ocmVzKSA/IGRlZiA6IHJlcztcbn1cbmV4cG9ydHMuZmxvYXQgPSBmbG9hdDtcbnZhciBpbnRGaWx0ZXIgPSByLm1ha2VNYWNybyhbJ3ZhbHVlJywgJ2RlZmF1bHQnLCAnYmFzZSddLCBbXSwgZnVuY3Rpb24gZG9JbnQodmFsdWUsIGRlZmF1bHRWYWx1ZSwgYmFzZSkge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9IDEwO1xuICB9XG4gIHZhciByZXMgPSBwYXJzZUludCh2YWx1ZSwgYmFzZSk7XG4gIHJldHVybiBpc05hTihyZXMpID8gZGVmYXVsdFZhbHVlIDogcmVzO1xufSk7XG5leHBvcnRzLmludCA9IGludEZpbHRlcjtcblxuLy8gQWxpYXNlc1xuZXhwb3J0cy5kID0gZXhwb3J0cy5kZWZhdWx0O1xuZXhwb3J0cy5lID0gZXhwb3J0cy5lc2NhcGU7XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIExvYWRlciA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgUHJlY29tcGlsZWRMb2FkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Mb2FkZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoUHJlY29tcGlsZWRMb2FkZXIsIF9Mb2FkZXIpO1xuICBmdW5jdGlvbiBQcmVjb21waWxlZExvYWRlcihjb21waWxlZFRlbXBsYXRlcykge1xuICAgIHZhciBfdGhpcztcbiAgICBfdGhpcyA9IF9Mb2FkZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLnByZWNvbXBpbGVkID0gY29tcGlsZWRUZW1wbGF0ZXMgfHwge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBQcmVjb21waWxlZExvYWRlci5wcm90b3R5cGU7XG4gIF9wcm90by5nZXRTb3VyY2UgPSBmdW5jdGlvbiBnZXRTb3VyY2UobmFtZSkge1xuICAgIGlmICh0aGlzLnByZWNvbXBpbGVkW25hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IHtcbiAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgb2JqOiB0aGlzLnByZWNvbXBpbGVkW25hbWVdXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6IG5hbWVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICByZXR1cm4gUHJlY29tcGlsZWRMb2FkZXI7XG59KExvYWRlcik7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUHJlY29tcGlsZWRMb2FkZXI6IFByZWNvbXBpbGVkTG9hZGVyXG59O1xuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBTYWZlU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5TYWZlU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gY2FsbGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuY2FsbGFibGUgPSBjYWxsYWJsZTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIHN0cmljdGx5IG5vdCBgdW5kZWZpbmVkYC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBkZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5kZWZpbmVkID0gZGVmaW5lZDtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3BlcmFuZCAob25lKSBpcyBkaXZpc2JsZSBieSB0aGUgdGVzdCdzIGFyZ3VtZW50XG4gKiAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBkaXZpc2libGVieShvbmUsIHR3bykge1xuICByZXR1cm4gb25lICUgdHdvID09PSAwO1xufVxuZXhwb3J0cy5kaXZpc2libGVieSA9IGRpdmlzaWJsZWJ5O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGhhcyBiZWVuIGVzY2FwZWQgKGkuZS4sIGlzIGEgU2FmZVN0cmluZykuXG4gKiBAcGFyYW0geyBhbnkgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gZXNjYXBlZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTYWZlU3RyaW5nO1xufVxuZXhwb3J0cy5lc2NhcGVkID0gZXNjYXBlZDtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqIEBwYXJhbSB7IGFueSB9IG9uZVxuICogQHBhcmFtIHsgYW55IH0gdHdvXG4gKi9cbmZ1bmN0aW9uIGVxdWFsdG8ob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA9PT0gdHdvO1xufVxuZXhwb3J0cy5lcXVhbHRvID0gZXF1YWx0bztcblxuLy8gQWxpYXNlc1xuZXhwb3J0cy5lcSA9IGV4cG9ydHMuZXF1YWx0bztcbmV4cG9ydHMuc2FtZWFzID0gZXhwb3J0cy5lcXVhbHRvO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBldmVubHkgZGl2aXNpYmxlIGJ5IDIuXG4gKiBAcGFyYW0geyBudW1iZXIgfSB2YWx1ZVxuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gZXZlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAyID09PSAwO1xufVxuZXhwb3J0cy5ldmVuID0gZXZlbjtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgZmFsc3kgLSBpZiBJIHJlY2FsbCBjb3JyZWN0bHksICcnLCAwLCBmYWxzZSxcbiAqIHVuZGVmaW5lZCwgTmFOIG9yIG51bGwuIEkgZG9uJ3Qga25vdyBpZiB3ZSBzaG91bGQgc3RpY2sgdG8gdGhlIGRlZmF1bHQgSlNcbiAqIGJlaGF2aW9yIG9yIGF0dGVtcHQgdG8gcmVwbGljYXRlIHdoYXQgUHl0aG9uIGJlbGlldmVzIHNob3VsZCBiZSBmYWxzeSAoaS5lLixcbiAqIGVtcHR5IGFycmF5cywgZW1wdHkgZGljdHMsIG5vdCAwLi4uKS5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBmYWxzeSh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlO1xufVxuZXhwb3J0cy5mYWxzeSA9IGZhbHN5O1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvcGVyYW5kIChvbmUpIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIHRlc3Qnc1xuICogYXJndW1lbnQgKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gZ2Uob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA+PSB0d287XG59XG5leHBvcnRzLmdlID0gZ2U7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgZ3JlYXRlciB0aGFuIHRoZSB0ZXN0J3MgYXJndW1lbnRcbiAqICh0d28pLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gb25lXG4gKiBAcGFyYW0geyBudW1iZXIgfSB0d29cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIGdyZWF0ZXJ0aGFuKG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUgPiB0d287XG59XG5leHBvcnRzLmdyZWF0ZXJ0aGFuID0gZ3JlYXRlcnRoYW47XG5cbi8vIGFsaWFzXG5leHBvcnRzLmd0ID0gZXhwb3J0cy5ncmVhdGVydGhhbjtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3BlcmFuZCAob25lKSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRlc3Qnc1xuICogYXJndW1lbnQgKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gbGUob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSA8PSB0d287XG59XG5leHBvcnRzLmxlID0gbGU7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9wZXJhbmQgKG9uZSkgaXMgbGVzcyB0aGFuIHRoZSB0ZXN0J3MgcGFzc2VkIGFyZ3VtZW50XG4gKiAodHdvKS5cbiAqIEBwYXJhbSB7IG51bWJlciB9IG9uZVxuICogQHBhcmFtIHsgbnVtYmVyIH0gdHdvXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBsZXNzdGhhbihvbmUsIHR3bykge1xuICByZXR1cm4gb25lIDwgdHdvO1xufVxuZXhwb3J0cy5sZXNzdGhhbiA9IGxlc3N0aGFuO1xuXG4vLyBhbGlhc1xuZXhwb3J0cy5sdCA9IGV4cG9ydHMubGVzc3RoYW47XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHN0cmluZyBpcyBsb3dlcmNhc2VkLlxuICogQHBhcmFtIHsgc3RyaW5nIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIGxvd2VyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZTtcbn1cbmV4cG9ydHMubG93ZXIgPSBsb3dlcjtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb3BlcmFuZCAob25lKSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRlc3Qnc1xuICogYXJndW1lbnQgKHR3bykuXG4gKiBAcGFyYW0geyBudW1iZXIgfSBvbmVcbiAqIEBwYXJhbSB7IG51bWJlciB9IHR3b1xuICogQHJldHVybnMgeyBib29sZWFuIH1cbiAqL1xuZnVuY3Rpb24gbmUob25lLCB0d28pIHtcbiAgcmV0dXJuIG9uZSAhPT0gdHdvO1xufVxuZXhwb3J0cy5uZSA9IG5lO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgc3RyaWN0bHkgZXF1YWwgdG8gYG51bGxgLlxuICogQHBhcmFtIHsgYW55IH1cbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIG51bGxUZXN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn1cbmV4cG9ydHMubnVsbCA9IG51bGxUZXN0O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBwYXJhbSB7IGFueSB9XG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBudW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLm51bWJlciA9IG51bWJlcjtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgKm5vdCogZXZlbmx5IGRpdmlzaWJsZSBieSAyLlxuICogQHBhcmFtIHsgbnVtYmVyIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIG9kZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAyID09PSAxO1xufVxuZXhwb3J0cy5vZGQgPSBvZGQ7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCBgZmFsc2VgIGlmIG5vdC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBzdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLnN0cmluZyA9IHN0cmluZztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgbm90IGluIHRoZSBsaXN0IG9mIHRoaW5ncyBjb25zaWRlcmVkIGZhbHN5OlxuICogJycsIG51bGwsIHVuZGVmaW5lZCwgMCwgTmFOIGFuZCBmYWxzZS5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiB0cnV0aHkodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU7XG59XG5leHBvcnRzLnRydXRoeSA9IHRydXRoeTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIHVuZGVmaW5lZFRlc3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnVuZGVmaW5lZCA9IHVuZGVmaW5lZFRlc3Q7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHN0cmluZyBpcyB1cHBlcmNhc2VkLlxuICogQHBhcmFtIHsgc3RyaW5nIH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIHVwcGVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZTtcbn1cbmV4cG9ydHMudXBwZXIgPSB1cHBlcjtcblxuLyoqXG4gKiBJZiBFUzYgZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSwgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGltcGxlbWVudHMgdGhlXG4gKiBgU3ltYm9sLml0ZXJhdG9yYCBtZXRob2QuIElmIG5vdCwgaXQncyBhIHN0cmluZyBvciBBcnJheS5cbiAqXG4gKiBDb3VsZCBwb3RlbnRpYWxseSBjYXVzZSBpc3N1ZXMgaWYgYSBicm93c2VyIGV4aXN0cyB0aGF0IGhhcyBTZXQgYW5kIE1hcCBidXRcbiAqIG5vdCBTeW1ib2wuXG4gKlxuICogQHBhcmFtIHsgYW55IH0gdmFsdWVcbiAqIEByZXR1cm5zIHsgYm9vbGVhbiB9XG4gKi9cbmZ1bmN0aW9uIGl0ZXJhYmxlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAhIXZhbHVlW1N5bWJvbC5pdGVyYXRvcl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cbn1cbmV4cG9ydHMuaXRlcmFibGUgPSBpdGVyYWJsZTtcblxuLyoqXG4gKiBJZiBFUzYgZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSwgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBoYXNoXG4gKiBvciBhbiBFUzYgTWFwLiBPdGhlcndpc2UganVzdCByZXR1cm4gaWYgaXQncyBhbiBvYmplY3QgaGFzaC5cbiAqIEBwYXJhbSB7IGFueSB9IHZhbHVlXG4gKiBAcmV0dXJucyB7IGJvb2xlYW4gfVxuICovXG5mdW5jdGlvbiBtYXBwaW5nKHZhbHVlKSB7XG4gIC8vIG9ubHkgbWFwcyBhbmQgb2JqZWN0IGhhc2hlc1xuICB2YXIgYm9vbCA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChTZXQpIHtcbiAgICByZXR1cm4gYm9vbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2V0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYm9vbDtcbiAgfVxufVxuZXhwb3J0cy5tYXBwaW5nID0gbWFwcGluZztcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfY3ljbGVyKGl0ZW1zKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaW5kZXggPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaW5kZXgrKztcbiAgICAgIGlmIChpbmRleCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50ID0gaXRlbXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBfam9pbmVyKHNlcCkge1xuICBzZXAgPSBzZXAgfHwgJywnO1xuICB2YXIgZmlyc3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWwgPSBmaXJzdCA/ICcnIDogc2VwO1xuICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn1cblxuLy8gTWFraW5nIHRoaXMgYSBmdW5jdGlvbiBpbnN0ZWFkIHNvIGl0IHJldHVybnMgYSBuZXcgb2JqZWN0XG4vLyBlYWNoIHRpbWUgaXQncyBjYWxsZWQuIFRoYXQgd2F5LCBpZiBzb21ldGhpbmcgbGlrZSBhbiBlbnZpcm9ubWVudFxuLy8gdXNlcyBpdCwgdGhleSB3aWxsIGVhY2ggaGF2ZSB0aGVpciBvd24gY29weS5cbmZ1bmN0aW9uIGdsb2JhbHMoKSB7XG4gIHJldHVybiB7XG4gICAgcmFuZ2U6IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0b3AgPSBzdGFydDtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICBzdGVwID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0ZXApIHtcbiAgICAgICAgc3RlcCA9IDE7XG4gICAgICB9XG4gICAgICB2YXIgYXJyID0gW107XG4gICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgYXJyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gc3RhcnQ7IF9pID4gc3RvcDsgX2kgKz0gc3RlcCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZm9yLWRpcmVjdGlvblxuICAgICAgICAgIGFyci5wdXNoKF9pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIGN5Y2xlcjogZnVuY3Rpb24gY3ljbGVyKCkge1xuICAgICAgcmV0dXJuIF9jeWNsZXIoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBqb2luZXI6IGZ1bmN0aW9uIGpvaW5lcihzZXApIHtcbiAgICAgIHJldHVybiBfam9pbmVyKHNlcCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxzO1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwcmVzcyhlbnYsIGFwcCkge1xuICBmdW5jdGlvbiBOdW5qdWNrc1ZpZXcobmFtZSwgb3B0cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXRoID0gbmFtZTtcbiAgICB0aGlzLmRlZmF1bHRFbmdpbmUgPSBvcHRzLmRlZmF1bHRFbmdpbmU7XG4gICAgdGhpcy5leHQgPSBwYXRoLmV4dG5hbWUobmFtZSk7XG4gICAgaWYgKCF0aGlzLmV4dCAmJiAhdGhpcy5kZWZhdWx0RW5naW5lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRlZmF1bHQgZW5naW5lIHdhcyBzcGVjaWZpZWQgYW5kIG5vIGV4dGVuc2lvbiB3YXMgcHJvdmlkZWQuJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5leHQpIHtcbiAgICAgIHRoaXMubmFtZSArPSB0aGlzLmV4dCA9ICh0aGlzLmRlZmF1bHRFbmdpbmVbMF0gIT09ICcuJyA/ICcuJyA6ICcnKSArIHRoaXMuZGVmYXVsdEVuZ2luZTtcbiAgICB9XG4gIH1cbiAgTnVuanVja3NWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIob3B0cywgY2IpIHtcbiAgICBlbnYucmVuZGVyKHRoaXMubmFtZSwgb3B0cywgY2IpO1xuICB9O1xuICBhcHAuc2V0KCd2aWV3JywgTnVuanVja3NWaWV3KTtcbiAgYXBwLnNldCgnbnVuanVja3NFbnYnLCBlbnYpO1xuICByZXR1cm4gZW52O1xufTtcblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIHBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSxcbiAgX3ByZXR0aWZ5RXJyb3IgPSBfcmVxdWlyZS5fcHJldHRpZnlFcnJvcjtcbnZhciBjb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgX3JlcXVpcmUyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KSxcbiAgRW52aXJvbm1lbnQgPSBfcmVxdWlyZTIuRW52aXJvbm1lbnQ7XG52YXIgcHJlY29tcGlsZUdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuZnVuY3Rpb24gbWF0Y2goZmlsZW5hbWUsIHBhdHRlcm5zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXR0ZXJucykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZmlsZW5hbWUubWF0Y2gocGF0dGVybik7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHJlY29tcGlsZVN0cmluZyhzdHIsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMuaXNTdHJpbmcgPSB0cnVlO1xuICB2YXIgZW52ID0gb3B0cy5lbnYgfHwgbmV3IEVudmlyb25tZW50KFtdKTtcbiAgdmFyIHdyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgcHJlY29tcGlsZUdsb2JhbDtcbiAgaWYgKCFvcHRzLm5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBcIm5hbWVcIiBvcHRpb24gaXMgcmVxdWlyZWQgd2hlbiBjb21waWxpbmcgYSBzdHJpbmcnKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcihbX3ByZWNvbXBpbGUoc3RyLCBvcHRzLm5hbWUsIGVudildLCBvcHRzKTtcbn1cbmZ1bmN0aW9uIHByZWNvbXBpbGUoaW5wdXQsIG9wdHMpIHtcbiAgLy8gVGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBhdmFpbGFibGU6XG4gIC8vXG4gIC8vICogbmFtZTogbmFtZSBvZiB0aGUgdGVtcGxhdGUgKGF1dG8tZ2VuZXJhdGVkIHdoZW4gY29tcGlsaW5nIGEgZGlyZWN0b3J5KVxuICAvLyAqIGlzU3RyaW5nOiBpbnB1dCBpcyBhIHN0cmluZywgbm90IGEgZmlsZSBwYXRoXG4gIC8vICogYXNGdW5jdGlvbjogZ2VuZXJhdGUgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAvLyAqIGZvcmNlOiBrZWVwIGNvbXBpbGluZyBvbiBlcnJvclxuICAvLyAqIGVudjogdGhlIEVudmlyb25tZW50IHRvIHVzZSAoZ2V0cyBleHRlbnNpb25zIGFuZCBhc3luYyBmaWx0ZXJzIGZyb20gaXQpXG4gIC8vICogaW5jbHVkZTogd2hpY2ggZmlsZS9mb2xkZXJzIHRvIGluY2x1ZGUgKGZvbGRlcnMgYXJlIGF1dG8taW5jbHVkZWQsIGZpbGVzIGFyZSBhdXRvLWV4Y2x1ZGVkKVxuICAvLyAqIGV4Y2x1ZGU6IHdoaWNoIGZpbGUvZm9sZGVycyB0byBleGNsdWRlIChmb2xkZXJzIGFyZSBhdXRvLWluY2x1ZGVkLCBmaWxlcyBhcmUgYXV0by1leGNsdWRlZClcbiAgLy8gKiB3cmFwcGVyOiBmdW5jdGlvbih0ZW1wbGF0ZXMsIG9wdHMpIHsuLi59XG4gIC8vICAgICAgIEN1c3RvbWl6ZSB0aGUgb3V0cHV0IGZvcm1hdCB0byBzdG9yZSB0aGUgY29tcGlsZWQgdGVtcGxhdGUuXG4gIC8vICAgICAgIEJ5IGRlZmF1bHQsIHRlbXBsYXRlcyBhcmUgc3RvcmVkIGluIGEgZ2xvYmFsIHZhcmlhYmxlIHVzZWQgYnkgdGhlIHJ1bnRpbWUuXG4gIC8vICAgICAgIEEgY3VzdG9tIGxvYWRlciB3aWxsIGJlIG5lY2Vzc2FyeSB0byBsb2FkIHlvdXIgY3VzdG9tIHdyYXBwZXIuXG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHZhciBlbnYgPSBvcHRzLmVudiB8fCBuZXcgRW52aXJvbm1lbnQoW10pO1xuICB2YXIgd3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCBwcmVjb21waWxlR2xvYmFsO1xuICBpZiAob3B0cy5pc1N0cmluZykge1xuICAgIHJldHVybiBwcmVjb21waWxlU3RyaW5nKGlucHV0LCBvcHRzKTtcbiAgfVxuICB2YXIgcGF0aFN0YXRzID0gZnMuZXhpc3RzU3luYyhpbnB1dCkgJiYgZnMuc3RhdFN5bmMoaW5wdXQpO1xuICB2YXIgcHJlY29tcGlsZWQgPSBbXTtcbiAgdmFyIHRlbXBsYXRlcyA9IFtdO1xuICBmdW5jdGlvbiBhZGRUZW1wbGF0ZXMoZGlyKSB7XG4gICAgZnMucmVhZGRpclN5bmMoZGlyKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB2YXIgZmlsZXBhdGggPSBwYXRoLmpvaW4oZGlyLCBmaWxlKTtcbiAgICAgIHZhciBzdWJwYXRoID0gZmlsZXBhdGguc3Vic3RyKHBhdGguam9pbihpbnB1dCwgJy8nKS5sZW5ndGgpO1xuICAgICAgdmFyIHN0YXQgPSBmcy5zdGF0U3luYyhmaWxlcGF0aCk7XG4gICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgc3VicGF0aCArPSAnLyc7XG4gICAgICAgIGlmICghbWF0Y2goc3VicGF0aCwgb3B0cy5leGNsdWRlKSkge1xuICAgICAgICAgIGFkZFRlbXBsYXRlcyhmaWxlcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWF0Y2goc3VicGF0aCwgb3B0cy5pbmNsdWRlKSkge1xuICAgICAgICB0ZW1wbGF0ZXMucHVzaChmaWxlcGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhdGhTdGF0cy5pc0ZpbGUoKSkge1xuICAgIHByZWNvbXBpbGVkLnB1c2goX3ByZWNvbXBpbGUoZnMucmVhZEZpbGVTeW5jKGlucHV0LCAndXRmLTgnKSwgb3B0cy5uYW1lIHx8IGlucHV0LCBlbnYpKTtcbiAgfSBlbHNlIGlmIChwYXRoU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgIGFkZFRlbXBsYXRlcyhpbnB1dCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBuYW1lID0gdGVtcGxhdGVzW2ldLnJlcGxhY2UocGF0aC5qb2luKGlucHV0LCAnLycpLCAnJyk7XG4gICAgICB0cnkge1xuICAgICAgICBwcmVjb21waWxlZC5wdXNoKF9wcmVjb21waWxlKGZzLnJlYWRGaWxlU3luYyh0ZW1wbGF0ZXNbaV0sICd1dGYtOCcpLCBuYW1lLCBlbnYpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKG9wdHMuZm9yY2UpIHtcbiAgICAgICAgICAvLyBEb24ndCBzdG9wIGdlbmVyYXRpbmcgdGhlIG91dHB1dCBpZiB3ZSdyZVxuICAgICAgICAgIC8vIGZvcmNpbmcgY29tcGlsYXRpb24uXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gd3JhcHBlcihwcmVjb21waWxlZCwgb3B0cyk7XG59XG5mdW5jdGlvbiBfcHJlY29tcGlsZShzdHIsIG5hbWUsIGVudikge1xuICBlbnYgPSBlbnYgfHwgbmV3IEVudmlyb25tZW50KFtdKTtcbiAgdmFyIGFzeW5jRmlsdGVycyA9IGVudi5hc3luY0ZpbHRlcnM7XG4gIHZhciBleHRlbnNpb25zID0gZW52LmV4dGVuc2lvbnNMaXN0O1xuICB2YXIgdGVtcGxhdGU7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgdHJ5IHtcbiAgICB0ZW1wbGF0ZSA9IGNvbXBpbGVyLmNvbXBpbGUoc3RyLCBhc3luY0ZpbHRlcnMsIGV4dGVuc2lvbnMsIG5hbWUsIGVudi5vcHRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgX3ByZXR0aWZ5RXJyb3IobmFtZSwgZmFsc2UsIGVycik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWNvbXBpbGU6IHByZWNvbXBpbGUsXG4gIHByZWNvbXBpbGVTdHJpbmc6IHByZWNvbXBpbGVTdHJpbmdcbn07XG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gcHJlY29tcGlsZUdsb2JhbCh0ZW1wbGF0ZXMsIG9wdHMpIHtcbiAgdmFyIG91dCA9ICcnO1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IEpTT04uc3RyaW5naWZ5KHRlbXBsYXRlc1tpXS5uYW1lKTtcbiAgICB2YXIgdGVtcGxhdGUgPSB0ZW1wbGF0ZXNbaV0udGVtcGxhdGU7XG4gICAgb3V0ICs9ICcoZnVuY3Rpb24oKSB7JyArICcod2luZG93Lm51bmp1Y2tzUHJlY29tcGlsZWQgPSB3aW5kb3cubnVuanVja3NQcmVjb21waWxlZCB8fCB7fSknICsgJ1snICsgbmFtZSArICddID0gKGZ1bmN0aW9uKCkge1xcbicgKyB0ZW1wbGF0ZSArICdcXG59KSgpO1xcbic7XG4gICAgaWYgKG9wdHMuYXNGdW5jdGlvbikge1xuICAgICAgb3V0ICs9ICdyZXR1cm4gZnVuY3Rpb24oY3R4LCBjYikgeyByZXR1cm4gbnVuanVja3MucmVuZGVyKCcgKyBuYW1lICsgJywgY3R4LCBjYik7IH1cXG4nO1xuICAgIH1cbiAgICBvdXQgKz0gJ30pKCk7XFxuJztcbiAgfVxuICByZXR1cm4gb3V0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVjb21waWxlR2xvYmFsO1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmZ1bmN0aW9uIGluc3RhbGxDb21wYXQoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuICAvLyBUaGlzIG11c3QgYmUgY2FsbGVkIGxpa2UgYG51bmp1Y2tzLmluc3RhbGxDb21wYXRgIHNvIHRoYXQgYHRoaXNgXG4gIC8vIHJlZmVyZW5jZXMgdGhlIG51bmp1Y2tzIGluc3RhbmNlXG4gIHZhciBydW50aW1lID0gdGhpcy5ydW50aW1lO1xuICB2YXIgbGliID0gdGhpcy5saWI7XG4gIC8vIEhhbmRsZSBzbGltIGNhc2Ugd2hlcmUgdGhlc2UgJ21vZHVsZXMnIGFyZSBleGNsdWRlZCBmcm9tIHRoZSBidWlsdCBzb3VyY2VcbiAgdmFyIENvbXBpbGVyID0gdGhpcy5jb21waWxlci5Db21waWxlcjtcbiAgdmFyIFBhcnNlciA9IHRoaXMucGFyc2VyLlBhcnNlcjtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIGxleGVyID0gdGhpcy5sZXhlcjtcbiAgdmFyIG9yaWdfY29udGV4dE9yRnJhbWVMb29rdXAgPSBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwO1xuICB2YXIgb3JpZ19tZW1iZXJMb29rdXAgPSBydW50aW1lLm1lbWJlckxvb2t1cDtcbiAgdmFyIG9yaWdfQ29tcGlsZXJfYXNzZXJ0VHlwZTtcbiAgdmFyIG9yaWdfUGFyc2VyX3BhcnNlQWdncmVnYXRlO1xuICBpZiAoQ29tcGlsZXIpIHtcbiAgICBvcmlnX0NvbXBpbGVyX2Fzc2VydFR5cGUgPSBDb21waWxlci5wcm90b3R5cGUuYXNzZXJ0VHlwZTtcbiAgfVxuICBpZiAoUGFyc2VyKSB7XG4gICAgb3JpZ19QYXJzZXJfcGFyc2VBZ2dyZWdhdGUgPSBQYXJzZXIucHJvdG90eXBlLnBhcnNlQWdncmVnYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICBydW50aW1lLmNvbnRleHRPckZyYW1lTG9va3VwID0gb3JpZ19jb250ZXh0T3JGcmFtZUxvb2t1cDtcbiAgICBydW50aW1lLm1lbWJlckxvb2t1cCA9IG9yaWdfbWVtYmVyTG9va3VwO1xuICAgIGlmIChDb21waWxlcikge1xuICAgICAgQ29tcGlsZXIucHJvdG90eXBlLmFzc2VydFR5cGUgPSBvcmlnX0NvbXBpbGVyX2Fzc2VydFR5cGU7XG4gICAgfVxuICAgIGlmIChQYXJzZXIpIHtcbiAgICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VBZ2dyZWdhdGUgPSBvcmlnX1BhcnNlcl9wYXJzZUFnZ3JlZ2F0ZTtcbiAgICB9XG4gIH1cbiAgcnVudGltZS5jb250ZXh0T3JGcmFtZUxvb2t1cCA9IGZ1bmN0aW9uIGNvbnRleHRPckZyYW1lTG9va3VwKGNvbnRleHQsIGZyYW1lLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gb3JpZ19jb250ZXh0T3JGcmFtZUxvb2t1cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ1RydWUnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ0ZhbHNlJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSAnTm9uZSc6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGdldFRva2Vuc1N0YXRlKHRva2Vucykge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogdG9rZW5zLmluZGV4LFxuICAgICAgbGluZW5vOiB0b2tlbnMubGluZW5vLFxuICAgICAgY29sbm86IHRva2Vucy5jb2xub1xuICAgIH07XG4gIH1cbiAgaWYgKFwiU1REXCIgIT09ICdTTElNJyAmJiBub2RlcyAmJiBDb21waWxlciAmJiBQYXJzZXIpIHtcbiAgICAvLyBpLmUuLCBub3Qgc2xpbSBtb2RlXG4gICAgdmFyIFNsaWNlID0gbm9kZXMuTm9kZS5leHRlbmQoJ1NsaWNlJywge1xuICAgICAgZmllbGRzOiBbJ3N0YXJ0JywgJ3N0b3AnLCAnc3RlcCddLFxuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdChsaW5lbm8sIGNvbG5vLCBzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgICBzdGFydCA9IHN0YXJ0IHx8IG5ldyBub2Rlcy5MaXRlcmFsKGxpbmVubywgY29sbm8sIG51bGwpO1xuICAgICAgICBzdG9wID0gc3RvcCB8fCBuZXcgbm9kZXMuTGl0ZXJhbChsaW5lbm8sIGNvbG5vLCBudWxsKTtcbiAgICAgICAgc3RlcCA9IHN0ZXAgfHwgbmV3IG5vZGVzLkxpdGVyYWwobGluZW5vLCBjb2xubywgMSk7XG4gICAgICAgIHRoaXMucGFyZW50KGxpbmVubywgY29sbm8sIHN0YXJ0LCBzdG9wLCBzdGVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBDb21waWxlci5wcm90b3R5cGUuYXNzZXJ0VHlwZSA9IGZ1bmN0aW9uIGFzc2VydFR5cGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTbGljZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvcmlnX0NvbXBpbGVyX2Fzc2VydFR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIENvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlU2xpY2UgPSBmdW5jdGlvbiBjb21waWxlU2xpY2Uobm9kZSwgZnJhbWUpIHtcbiAgICAgIHRoaXMuX2VtaXQoJygnKTtcbiAgICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUuc3RhcnQsIGZyYW1lKTtcbiAgICAgIHRoaXMuX2VtaXQoJyksKCcpO1xuICAgICAgdGhpcy5fY29tcGlsZUV4cHJlc3Npb24obm9kZS5zdG9wLCBmcmFtZSk7XG4gICAgICB0aGlzLl9lbWl0KCcpLCgnKTtcbiAgICAgIHRoaXMuX2NvbXBpbGVFeHByZXNzaW9uKG5vZGUuc3RlcCwgZnJhbWUpO1xuICAgICAgdGhpcy5fZW1pdCgnKScpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZUFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIHBhcnNlQWdncmVnYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBvcmlnU3RhdGUgPSBnZXRUb2tlbnNTdGF0ZSh0aGlzLnRva2Vucyk7XG4gICAgICAvLyBTZXQgYmFjayBvbmUgYWNjb3VudGluZyBmb3Igb3BlbmluZyBicmFja2V0L3BhcmVuc1xuICAgICAgb3JpZ1N0YXRlLmNvbG5vLS07XG4gICAgICBvcmlnU3RhdGUuaW5kZXgtLTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvcmlnX1BhcnNlcl9wYXJzZUFnZ3JlZ2F0ZS5hcHBseSh0aGlzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIGVyclN0YXRlID0gZ2V0VG9rZW5zU3RhdGUodGhpcy50b2tlbnMpO1xuICAgICAgICB2YXIgcmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coKSB7XG4gICAgICAgICAgbGliLl9hc3NpZ24oX3RoaXMudG9rZW5zLCBlcnJTdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVzZXQgdG8gc3RhdGUgYmVmb3JlIG9yaWdpbmFsIHBhcnNlQWdncmVnYXRlIGNhbGxlZFxuICAgICAgICBsaWIuX2Fzc2lnbih0aGlzLnRva2Vucywgb3JpZ1N0YXRlKTtcbiAgICAgICAgdGhpcy5wZWVrZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRvayA9IHRoaXMucGVla1Rva2VuKCk7XG4gICAgICAgIGlmICh0b2sudHlwZSAhPT0gbGV4ZXIuVE9LRU5fTEVGVF9CUkFDS0VUKSB7XG4gICAgICAgICAgdGhyb3cgcmV0aHJvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmV4dFRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgU2xpY2UodG9rLmxpbmVubywgdG9rLmNvbG5vKTtcblxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBlbmNvdW50ZXIgYSBjb2xvbiB3aGlsZSBwYXJzaW5nLCB0aGlzIGlzIG5vdCBhIHNsaWNlLFxuICAgICAgICAvLyBzbyByZS1yYWlzZSB0aGUgb3JpZ2luYWwgZXhjZXB0aW9uLlxuICAgICAgICB2YXIgaXNTbGljZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBub2RlLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnNraXAobGV4ZXIuVE9LRU5fUklHSFRfQlJBQ0tFVCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PT0gbm9kZS5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGljZSkge1xuICAgICAgICAgICAgICB0aGlzLmZhaWwoJ3BhcnNlU2xpY2U6IHRvbyBtYW55IHNsaWNlIGNvbXBvbmVudHMnLCB0b2subGluZW5vLCB0b2suY29sbm8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnNraXAobGV4ZXIuVE9LRU5fQ09MT04pKSB7XG4gICAgICAgICAgICBpc1NsaWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZpZWxkID0gbm9kZS5maWVsZHNbaV07XG4gICAgICAgICAgICBub2RlW2ZpZWxkXSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpc1NsaWNlID0gdGhpcy5za2lwKGxleGVyLlRPS0VOX0NPTE9OKSB8fCBpc1NsaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU2xpY2UpIHtcbiAgICAgICAgICB0aHJvdyByZXRocm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBub2Rlcy5BcnJheSh0b2subGluZW5vLCB0b2suY29sbm8sIFtub2RlXSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBzbGljZUxvb2t1cChvYmosIHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgb2JqID0gb2JqIHx8IFtdO1xuICAgIGlmIChzdGFydCA9PT0gbnVsbCkge1xuICAgICAgc3RhcnQgPSBzdGVwIDwgMCA/IG9iai5sZW5ndGggLSAxIDogMDtcbiAgICB9XG4gICAgaWYgKHN0b3AgPT09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGVwIDwgMCA/IC0xIDogb2JqLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHN0b3AgPCAwKSB7XG4gICAgICBzdG9wICs9IG9iai5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgIHN0YXJ0ICs9IG9iai5sZW5ndGg7XG4gICAgfVxuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OzsgaSArPSBzdGVwKSB7XG4gICAgICBpZiAoaSA8IDAgfHwgaSA+IG9iai5sZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoc3RlcCA+IDAgJiYgaSA+PSBzdG9wKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHN0ZXAgPCAwICYmIGkgPD0gc3RvcCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaChydW50aW1lLm1lbWJlckxvb2t1cChvYmosIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFzT3duUHJvcChvYmosIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9XG4gIHZhciBBUlJBWV9NRU1CRVJTID0ge1xuICAgIHBvcDogZnVuY3Rpb24gcG9wKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXlFcnJvcicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2goZWxlbWVudCk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXNbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWVFcnJvcicpO1xuICAgIH0sXG4gICAgY291bnQ6IGZ1bmN0aW9uIGNvdW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXNbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24gaW5kZXgoZWxlbWVudCkge1xuICAgICAgdmFyIGk7XG4gICAgICBpZiAoKGkgPSB0aGlzLmluZGV4T2YoZWxlbWVudCkpID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIH0sXG4gICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoaW5kZXgsIGVsZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMCwgZWxlbSk7XG4gICAgfVxuICB9O1xuICB2YXIgT0JKRUNUX01FTUJFUlMgPSB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIGxpYi5fZW50cmllcyh0aGlzKTtcbiAgICB9LFxuICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIGxpYi5fdmFsdWVzKHRoaXMpO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBsaWIua2V5cyh0aGlzKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSwgZGVmKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdGhpc1trZXldO1xuICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IGRlZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcbiAgICBoYXNfa2V5OiBmdW5jdGlvbiBoYXNfa2V5KGtleSkge1xuICAgICAgcmV0dXJuIGhhc093blByb3AodGhpcywga2V5KTtcbiAgICB9LFxuICAgIHBvcDogZnVuY3Rpb24gcG9wKGtleSwgZGVmKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdGhpc1trZXldO1xuICAgICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkICYmIGRlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IGRlZjtcbiAgICAgIH0gZWxzZSBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXlFcnJvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcbiAgICBwb3BpdGVtOiBmdW5jdGlvbiBwb3BpdGVtKCkge1xuICAgICAgdmFyIGtleXMgPSBsaWIua2V5cyh0aGlzKTtcbiAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXlFcnJvcicpO1xuICAgICAgfVxuICAgICAgdmFyIGsgPSBrZXlzWzBdO1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICBkZWxldGUgdGhpc1trXTtcbiAgICAgIHJldHVybiBbaywgdmFsXTtcbiAgICB9LFxuICAgIHNldGRlZmF1bHQ6IGZ1bmN0aW9uIHNldGRlZmF1bHQoa2V5LCBkZWYpIHtcbiAgICAgIGlmIChkZWYgPT09IHZvaWQgMCkge1xuICAgICAgICBkZWYgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCEoa2V5IGluIHRoaXMpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IGRlZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShrd2FyZ3MpIHtcbiAgICAgIGxpYi5fYXNzaWduKHRoaXMsIGt3YXJncyk7XG4gICAgICByZXR1cm4gbnVsbDsgLy8gQWx3YXlzIHJldHVybnMgTm9uZVxuICAgIH1cbiAgfTtcblxuICBPQkpFQ1RfTUVNQkVSUy5pdGVyaXRlbXMgPSBPQkpFQ1RfTUVNQkVSUy5pdGVtcztcbiAgT0JKRUNUX01FTUJFUlMuaXRlcnZhbHVlcyA9IE9CSkVDVF9NRU1CRVJTLnZhbHVlcztcbiAgT0JKRUNUX01FTUJFUlMuaXRlcmtleXMgPSBPQkpFQ1RfTUVNQkVSUy5rZXlzO1xuICBydW50aW1lLm1lbWJlckxvb2t1cCA9IGZ1bmN0aW9uIG1lbWJlckxvb2t1cChvYmosIHZhbCwgYXV0b2VzY2FwZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gc2xpY2VMb29rdXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb2JqID0gb2JqIHx8IHt9O1xuXG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBhbiBvYmplY3QsIHJldHVybiBhbnkgb2YgdGhlIG1ldGhvZHMgdGhhdCBQeXRob24gd291bGRcbiAgICAvLyBvdGhlcndpc2UgcHJvdmlkZS5cbiAgICBpZiAobGliLmlzQXJyYXkob2JqKSAmJiBoYXNPd25Qcm9wKEFSUkFZX01FTUJFUlMsIHZhbCkpIHtcbiAgICAgIHJldHVybiBBUlJBWV9NRU1CRVJTW3ZhbF0uYmluZChvYmopO1xuICAgIH1cbiAgICBpZiAobGliLmlzT2JqZWN0KG9iaikgJiYgaGFzT3duUHJvcChPQkpFQ1RfTUVNQkVSUywgdmFsKSkge1xuICAgICAgcmV0dXJuIE9CSkVDVF9NRU1CRVJTW3ZhbF0uYmluZChvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZ19tZW1iZXJMb29rdXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHVuaW5zdGFsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zdGFsbENvbXBhdDtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1udW5qdWNrcy5qcy5tYXAiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgbnVuanVja3MgZnJvbSAnbnVuanVja3MnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9ICc8aDE+SGVsbG8gPGk+e3sgbmFtZSB9fTwvaT48L2gxPic7XG5leHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZSkge1xuXHRyZXR1cm4gbnVuanVja3MucmVuZGVyU3RyaW5nKHRlbXBsYXRlLCB7IG5hbWUgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSAnLi9zYXktaGVsbG8uanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmJvZHkuaW5uZXJIVE1MID0gc2F5SGVsbG8oJ0Jyb3dzZXInKTtcbiJdLCJuYW1lcyI6WyJudW5qdWNrcyIsInRlbXBsYXRlIiwic2F5SGVsbG8iLCJuYW1lIiwicmVuZGVyU3RyaW5nIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9