(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MMProcessorTaskWorker"] = factory();
	else
		root["MMProcessorTaskWorker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Move to Objec-TS long-term
Object.defineProperty(exports, "__esModule", { value: true });
var PREFIX_ROOT = 'mm';
var LOGGER_CONFIG_STORAGE_KEY = 'mmjs:LoggerConfig';
var DEBUG = false;
var noop = function () { };
var getPrefix = function (type, category) {
    var prefix = "[" + PREFIX_ROOT + "]:[" + type + "]:[" + category + "] >";
    return prefix;
};
var regExpEscape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
function persistConfig(config) {
    if (window && !localStorage) {
        console.error('mmjs:Logger (ERROR) > Failed to persist configuration, no localStorage API found');
        return false;
    }
    else if (!localStorage) {
        // might happen in Worker
        return false;
    }
    try {
        localStorage.setItem(LOGGER_CONFIG_STORAGE_KEY, JSON.stringify(config));
    }
    catch (err) {
        console.error('mmjs:Logger (ERROR) > Failed to persist configuration, internal error:', err);
        return false;
    }
    return true;
}
var DEFAULT_GLOBAL_LEVEL;
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["ON"] = Infinity] = "ON";
    LoggerLevel[LoggerLevel["DEBUG"] = 5] = "DEBUG";
    LoggerLevel[LoggerLevel["LOG"] = 4] = "LOG";
    LoggerLevel[LoggerLevel["INFO"] = 3] = "INFO";
    LoggerLevel[LoggerLevel["WARN"] = 2] = "WARN";
    LoggerLevel[LoggerLevel["ERROR"] = 1] = "ERROR";
    LoggerLevel[LoggerLevel["OFF"] = 0] = "OFF";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
DEFAULT_GLOBAL_LEVEL = LoggerLevel.ON;
exports.defaultGlobalConfig = { '*': DEFAULT_GLOBAL_LEVEL };
exports.loggerConfig = createAndGetLocalLoggerConfig();
function createAndGetLocalLoggerConfig() {
    var config;
    var globalScope = self;
    if (globalScope.localStorage) {
        var object = localStorage.getItem(LOGGER_CONFIG_STORAGE_KEY) || '{}';
        try {
            config = JSON.parse(object);
        }
        catch (err) {
            console.warn('mmjs:Logger (WARN) > Got most likely corrupt logger config data! Running recovery routine...');
            removeLocalLoggerConfig();
            return createAndGetLocalLoggerConfig();
        }
        // persist if creating state first time
        persistConfig(config);
    }
    else { // fallback for workers (or no LocalStorage API support)
        config = globalScope[LOGGER_CONFIG_STORAGE_KEY] || exports.defaultGlobalConfig;
        globalScope[LOGGER_CONFIG_STORAGE_KEY] = config;
    }
    return config;
}
exports.createAndGetLocalLoggerConfig = createAndGetLocalLoggerConfig;
function removeLocalLoggerConfig() {
    delete self[LOGGER_CONFIG_STORAGE_KEY];
    localStorage.removeItem(LOGGER_CONFIG_STORAGE_KEY);
}
exports.removeLocalLoggerConfig = removeLocalLoggerConfig;
function setLocalLoggerLevel(categoryMatcher, level) {
    var config = createAndGetLocalLoggerConfig();
    config[categoryMatcher] = level;
    // store with changes
    persistConfig(config);
    return config;
}
exports.setLocalLoggerLevel = setLocalLoggerLevel;
function getConfiguredLoggerLevelForCategory(category, defaultLevel, config) {
    if (defaultLevel === void 0) { defaultLevel = LoggerLevel.OFF; }
    if (config === void 0) { config = createAndGetLocalLoggerConfig(); }
    var retLevel = defaultLevel;
    Object.keys(config).forEach(function (catMatcher) {
        // to avoid any possible error or regex-dos
        catMatcher = regExpEscape(catMatcher);
        var level = config[catMatcher];
        var isCatMatching = (new RegExp('^' + catMatcher.split('*').join('.*') + '$')).test(category);
        if (isCatMatching && level < retLevel) { // we are enforcing the lowest level specified by any matching category wildcard
            retLevel = level;
        }
    });
    return retLevel;
}
exports.getConfiguredLoggerLevelForCategory = getConfiguredLoggerLevelForCategory;
function checkLogLevel(level, catLevel) {
    switch (catLevel) {
        case LoggerLevel.DEBUG: return (level >= LoggerLevel.DEBUG) && console.debug;
        case LoggerLevel.LOG: return (level >= LoggerLevel.LOG) && console.log;
        case LoggerLevel.INFO: return (level >= LoggerLevel.INFO) && console.info;
        case LoggerLevel.WARN: return (level >= LoggerLevel.WARN) && console.warn;
        case LoggerLevel.ERROR: return (level >= LoggerLevel.ERROR) && console.error;
    }
}
exports.checkLogLevel = checkLogLevel;
exports.getLogger = function (category, level) {
    if (level === void 0) { level = LoggerLevel.ON; }
    level = getConfiguredLoggerLevelForCategory(category, level);
    if (DEBUG) {
        console.log("mmjs:Logger (DEBUG mode) > Set-up category <" + category + "> with level " + level);
    }
    return {
        debug: checkLogLevel(level, LoggerLevel.DEBUG) ? console.debug.bind(console, getPrefix('d', category)) : noop,
        log: checkLogLevel(level, LoggerLevel.LOG) ? console.log.bind(console, getPrefix('l', category)) : noop,
        info: checkLogLevel(level, LoggerLevel.INFO) ? console.info.bind(console, getPrefix('i', category)) : noop,
        warn: checkLogLevel(level, LoggerLevel.WARN) ? console.warn.bind(console, getPrefix('w', category)) : noop,
        error: checkLogLevel(level, LoggerLevel.ERROR) ? console.error.bind(console, getPrefix('e', category)) : noop
    };
};
function makeLogTimestamped() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var message = "[" + (new Date()).toISOString() + "]";
    args.forEach(function (arg) {
        message += ' ' + arg;
    });
    return message;
}
exports.makeLogTimestamped = makeLogTimestamped;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_utils_1 = __webpack_require__(3);
/*
export function isValidMimeTypeString(mimeType: string) {
  //
}
*/
// ADD common codec-strings
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
 *
 */
var CommonMimeTypes;
(function (CommonMimeTypes) {
    CommonMimeTypes["AUDIO_MP3"] = "audio/mpeg";
    CommonMimeTypes["AUDIO_AAC"] = "audio/aac";
    CommonMimeTypes["AUDIO_OPUS"] = "audio/opus";
    CommonMimeTypes["VIDEO_MP4"] = "video/mp4";
    CommonMimeTypes["VIDEO_AVC"] = "video/avc";
    CommonMimeTypes["VIDEO_AAC"] = "video/aac";
})(CommonMimeTypes = exports.CommonMimeTypes || (exports.CommonMimeTypes = {}));
var MimetypePrefix;
(function (MimetypePrefix) {
    MimetypePrefix["AUDIO"] = "audio";
    MimetypePrefix["VIDEO"] = "video";
    MimetypePrefix["TEXT"] = "text";
    MimetypePrefix["APPLICATION"] = "application";
})(MimetypePrefix = exports.MimetypePrefix || (exports.MimetypePrefix = {}));
exports.UNKNOWN_MIMETYPE = 'unknown/*';
// TODO: parse & validate mime-types and codec strings
/**
 * @see https://en.wikipedia.org/wiki/Media_type
 *
 */
/**
 *
 * @param mimeType
 * @param codec
 * @returns example: 'video/mp4; codecs=avc1.64001f'
 * // TODO: for several codecs in one container
 */
function appendCodecToMimeType(mimeType, codec) {
    return mimeType + '; codecs=' + codec;
}
function doesMimetypeHaveCodec(mimeType) {
    return mimeType.indexOf('codecs=') >= 0;
}
var PayloadDescriptor = /** @class */ (function () {
    function PayloadDescriptor(mimeType, sampleRateInteger, sampleDepth, sampleDurationNumerator) {
        if (sampleRateInteger === void 0) { sampleRateInteger = 0; }
        if (sampleDepth === void 0) { sampleDepth = 0; }
        if (sampleDurationNumerator === void 0) { sampleDurationNumerator = 1; }
        /**
         * mime-type if defined
         */
        this.mimeType = null;
        /**
         * integer bit-depth of one sample
         */
        this.sampleDepth = SampleBitDepth.UNSPECIFIED;
        /**
         * data format/layout applicable for raw signal packets
         */
        this.dataFormat = PayloadDataFormat.UNSPECIFIED;
        this.dataLayout = PayloadDataLayout.UNSPECIFIED;
        /**
         * payload specific details (applicable to audio/video/text etc only e.g or codec-data related)
         */
        this.details = new PayloadDetails();
        this.elementaryStreamId = NaN; // FIXME: make this a string
        /**
         * codec (if applicable)
         */
        this.codec = null;
        if (!common_utils_1.isIntegerIEEE754(sampleRateInteger) || !common_utils_1.isInteger(sampleDurationNumerator)) {
            throw new Error("sample-rate has to be safe-int (=" + sampleRateInteger + ") and duration-numerator has to be int too (=" + this.sampleDurationNumerator + ").");
        }
        this.mimeType = mimeType.toLowerCase();
        this.sampleDurationNumerator = sampleDurationNumerator;
        this.sampleDepth = sampleDepth;
        this.sampleRateInteger = sampleRateInteger;
        this.dataFormat = PayloadDataFormat.UNSPECIFIED;
        this.dataLayout = PayloadDataLayout.UNSPECIFIED;
    }
    // TODO: put mime-type specific stuff in child object that specializes on mime-types?
    PayloadDescriptor.prototype.getFullMimeType = function () {
        if (!this.codec) {
            return this.mimeType;
        }
        if (doesMimetypeHaveCodec(this.mimeType)) { // FIXME: we should maybe rather throw here
            return this.mimeType;
        }
        return appendCodecToMimeType(this.mimeType, this.codec);
    };
    PayloadDescriptor.prototype.getMediaSubtype = function () {
        return this._getMimeTypePart(1);
    };
    PayloadDescriptor.prototype.getMediaType = function () {
        return this._getMimeTypePart(0);
    };
    PayloadDescriptor.prototype._getMimeTypePart = function (i) {
        try {
            return this.mimeType.split('/')[i];
        }
        catch (err) {
            throw new Error('Malformed mime-type: ' + this.mimeType);
        }
    };
    PayloadDescriptor.prototype.hasCodec = function () {
        return !!this.codec;
    };
    /**
     * Sample-duration in normal units ([1/Hz] <=> [s])
     *
     * By default the sampleRate is expected to be in 1*Hz. The unit to expect can be scaled using
     * the optional unit-less numerator property to N*Hz. Meaning that the unit is not 1/[s] anymore but 1/(N*[s]),
     * representing the number of sample in N seconds.
     *
     * That means that any sample-rates of the form no-of-samples-per-N-seconds [Hz],
     * where no-of-samples and N is should be integers, can be represented without precision loss.
     *
     * Also floating point values may be used but this may yield precision loss when computing the duration here.
     */
    PayloadDescriptor.prototype.getSampleDuration = function () {
        return this.sampleDurationNumerator / this.sampleRateInteger;
    };
    /**
     * Sampling-rate in normal units ([Hz] <=> [1/s])
     *
     * see getSampleDuration, simply the inverted value
     */
    PayloadDescriptor.prototype.getSamplingRate = function () {
        return this.sampleRateInteger / this.sampleDurationNumerator;
    };
    /**
     * Returns size of one sample in bytes
     */
    PayloadDescriptor.prototype.getSampleSize = function () {
        return this.sampleDepth / 8;
    };
    PayloadDescriptor.prototype.isAudio = function () {
        return this.mimeType.startsWith('audio/');
    };
    PayloadDescriptor.prototype.isVideo = function () {
        return this.mimeType.startsWith('video/');
    };
    PayloadDescriptor.prototype.isText = function () {
        return this.mimeType.startsWith('text/');
    };
    PayloadDescriptor.prototype.isImage = function () {
        return this.mimeType.startsWith('image/');
    };
    PayloadDescriptor.prototype.isApplicationSpecific = function () {
        return this.mimeType.startsWith('application/');
    };
    PayloadDescriptor.prototype.isFont = function () {
        return this.mimeType.startsWith('font/');
    };
    PayloadDescriptor.prototype.isJson = function () {
        return this.mimeType === ('application/json');
    };
    PayloadDescriptor.prototype.isXml = function () {
        return this.mimeType === ('application/xml');
    };
    PayloadDescriptor.prototype.toString = function () {
        return "[<" + this.mimeType + " codec=\"" + this.codec + "\"> @" + this.getSamplingRate() + "[Hz]|1/(" + this.getSampleDuration().toExponential() + "[s]) * " + this.sampleDepth + "bit #{" + this.details.toString() + "}]";
    };
    return PayloadDescriptor;
}());
exports.PayloadDescriptor = PayloadDescriptor;
var PayloadDetails = /** @class */ (function () {
    function PayloadDetails() {
        /*
        clone(details: PayloadDetails) {
      
        }
        */
        this.sequenceDurationInSeconds = NaN;
        // place to put generic codec init-data // TODO: get rid of number[] here
        this.codecConfigurationData = null;
        // video
        this.width = 0;
        this.height = 0;
        // color-domains/channels
        // audio
        this.samplesPerFrame = 1;
        this.numChannels = 0;
        this.constantBitrate = NaN;
    }
    // text
    // ...
    // time-vs-frequency domains
    // ...
    PayloadDetails.prototype.toString = function () {
        return "width=" + this.width + "[px];height=" + this.height + "[px];samplesPerFrame=" + this.samplesPerFrame + ";cbr=" + this.constantBitrate + "[b/s];numChannels=" + this.numChannels + ";codecConfigSize=" + (this.codecConfigurationData ? this.codecConfigurationData.length : 0);
    };
    return PayloadDetails;
}());
exports.PayloadDetails = PayloadDetails;
var PayloadCodec = /** @class */ (function () {
    function PayloadCodec() {
    }
    PayloadCodec.isAvc = function (codec) {
        return codec.startsWith('avc1');
    };
    PayloadCodec.isAac = function (codec) {
        return codec.startsWith('mp4a');
    };
    PayloadCodec.isMp3 = function (codec) {
        return codec.startsWith('mp3a');
    };
    return PayloadCodec;
}());
exports.PayloadCodec = PayloadCodec;
var PayloadDataFormat;
(function (PayloadDataFormat) {
    PayloadDataFormat[PayloadDataFormat["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PayloadDataFormat[PayloadDataFormat["S_LE"] = 1] = "S_LE";
    PayloadDataFormat[PayloadDataFormat["S_BE"] = 2] = "S_BE";
    PayloadDataFormat[PayloadDataFormat["U_LE"] = 3] = "U_LE";
    PayloadDataFormat[PayloadDataFormat["U_BE"] = 4] = "U_BE";
})(PayloadDataFormat = exports.PayloadDataFormat || (exports.PayloadDataFormat = {}));
var PayloadDataLayout;
(function (PayloadDataLayout) {
    PayloadDataLayout[PayloadDataLayout["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PayloadDataLayout[PayloadDataLayout["INTERLEAVED"] = 1] = "INTERLEAVED";
    PayloadDataLayout[PayloadDataLayout["PROGRESSIVE"] = 2] = "PROGRESSIVE";
})(PayloadDataLayout = exports.PayloadDataLayout || (exports.PayloadDataLayout = {}));
var SampleBitDepth;
(function (SampleBitDepth) {
    SampleBitDepth[SampleBitDepth["UNSPECIFIED"] = NaN] = "UNSPECIFIED";
    SampleBitDepth[SampleBitDepth["VARIABLE"] = 0] = "VARIABLE";
    SampleBitDepth[SampleBitDepth["FOUR"] = 4] = "FOUR";
    SampleBitDepth[SampleBitDepth["EIGHT"] = 8] = "EIGHT";
    SampleBitDepth[SampleBitDepth["TWELVE"] = 12] = "TWELVE";
    SampleBitDepth[SampleBitDepth["SIXTEEN"] = 16] = "SIXTEEN";
    SampleBitDepth[SampleBitDepth["THIRTYTWO"] = 32] = "THIRTYTWO";
})(SampleBitDepth = exports.SampleBitDepth || (exports.SampleBitDepth = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var payload_description_1 = __webpack_require__(1);
/**
 * @class
 * Describes the payload of a buffer, how many samples it contains of that, and time-contextual information
 * for decrypting/decoding/presentation of the buffer.
 *
 * Generic media-key and parameters can be included as metadata around the buffer.
 *
 * Many buffer "slices" can (but must not) share one buffer-properties object instance, where that has advantages.
 *
 */
var BufferProperties = /** @class */ (function (_super) {
    __extends(BufferProperties, _super);
    function BufferProperties(mimeType, sampleRateInteger, sampleDepth, sampleDurationNumerator, samplesCount, isBitstreamHeader, isKeyframe, timestampDelta, mediaKey, tags) {
        if (mimeType === void 0) { mimeType = payload_description_1.UNKNOWN_MIMETYPE; }
        if (sampleRateInteger === void 0) { sampleRateInteger = 0; }
        if (sampleDepth === void 0) { sampleDepth = 0; }
        if (sampleDurationNumerator === void 0) { sampleDurationNumerator = 1; }
        if (samplesCount === void 0) { samplesCount = 0; }
        if (isBitstreamHeader === void 0) { isBitstreamHeader = false; }
        if (isKeyframe === void 0) { isKeyframe = false; }
        if (timestampDelta === void 0) { timestampDelta = 0; }
        if (mediaKey === void 0) { mediaKey = null; }
        if (tags === void 0) { tags = new Set(); }
        var _this = _super.call(this, mimeType, sampleRateInteger, sampleDepth, sampleDurationNumerator) || this;
        _this.samplesCount = samplesCount;
        _this.isBitstreamHeader = isBitstreamHeader;
        _this.isKeyframe = isKeyframe;
        _this.timestampDelta = timestampDelta;
        _this.mediaKey = mediaKey;
        _this.tags = tags;
        _this.samplesCount = samplesCount;
        return _this;
    }
    BufferProperties.clone = function (props) {
        var newProps = new BufferProperties(props.mimeType, props.sampleRateInteger, props.sampleDepth, props.sampleDurationNumerator, props.samplesCount, props.isBitstreamHeader, props.isKeyframe, props.timestampDelta, props.mediaKey, props.tags);
        newProps.elementaryStreamId = props.elementaryStreamId;
        newProps.details = props.details;
        newProps.codec = props.codec;
        return newProps;
    };
    BufferProperties.fromTransferable = function (props) {
        return BufferProperties.clone(props);
    };
    BufferProperties.prototype.clone = function () {
        var newProps = BufferProperties.clone(this);
        return newProps;
    };
    /**
     * Normal units [s]
     */
    BufferProperties.prototype.getSliceDuration = function () {
        return this.samplesCount * this.getSampleDuration();
    };
    BufferProperties.prototype.toString = function () {
        var payloadToString = _super.prototype.toString.call(this);
        return "[[#" + this.samplesCount + " x " + (this.isKeyframe ? 'KEY' : 'P/B') + "-" + (this.isBitstreamHeader ? 'HEADER(s)' : 'FRAME(s)') + " => " + payloadToString + "]]";
    };
    return BufferProperties;
}(payload_description_1.PayloadDescriptor));
exports.BufferProperties = BufferProperties;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () { };
/**
 *
 * @param s template-able string value.
 * ex: template ```var s = `${myvar}` ``` is equivalent to ```var t = makeTemplate("${myvar}"); s = eval(t)```
 * sometimes it can be useful to define the form of a template without evaluating it,
 * but pass it to the component that will do that later and thus separate these two steps as shown above.
 * notice that the variables used in the prepared template can only relate to the scope(s) in which
 * the template effectively gets evaluated, not where it gets created with this function here.
 * if you want to evaluate values from one specific context to a string, but delegate the evaluation, use OOP or a closure.
 * @returns {string} value that can be passed to `eval` in order to be evaluated as a template.
 *
 */
function makeTemplate(s) { return "`" + s + "`"; }
exports.makeTemplate = makeTemplate;
/**
 *
 * @returns true on finite values, false on Infinity
 *          returns false on anything that is not convertible to a number (when not a number type), see isConvertibleToNumber
 */
function isNumber(n) {
    return Number.isFinite(n);
}
exports.isNumber = isNumber;
/**
 *
 * @returns true on: empty string, booleans, null, finite number values and +/- Infinity
 *          false on: everything else -> objects, non-empty string, undefined, NaN (obviously)
 */
function isConvertibleToNumber(n) {
    return !isNaN(n);
}
exports.isConvertibleToNumber = isConvertibleToNumber;
function isInteger(n) { return Number.isInteger(n); }
exports.isInteger = isInteger;
function isIntegerIEEE754(n) { return Number.isSafeInteger(n); }
exports.isIntegerIEEE754 = isIntegerIEEE754;
/**
 *
 * @returns a finite number or +/- Infinity (if n was that value)
 * @throws error when value is not convertible to a number
 */
function toNumber(n) {
    if (isConvertibleToNumber(n)) {
        return Number(n);
    }
    throw new Error('Value does not convert to number: ' + n);
}
exports.toNumber = toNumber;
function flattenOneDeepNestedArray(a) {
    return [].concat.apply([], a);
}
exports.flattenOneDeepNestedArray = flattenOneDeepNestedArray;
function unsafeFlattenAnyNestedArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? unsafeFlattenAnyNestedArray(toFlatten) : toFlatten);
    }, []);
}
exports.unsafeFlattenAnyNestedArray = unsafeFlattenAnyNestedArray;
function lastOfArray(a) {
    if (!a.length) {
        return null;
    }
    return a[a.length - 1];
}
exports.lastOfArray = lastOfArray;
// TODO: allocation methods
// TODO: allow using "fast but unsafe" allocation methods in V8/Nodejs via Buffer.allocUnsafe
/**
 * Copies source data into a previously allocated destination buffer (see memcpy)
 */
function copyArrayBuffer(src, dest, length, srcOffset, destOffset) {
    if (length === void 0) { length = src.byteLength; }
    if (srcOffset === void 0) { srcOffset = 0; }
    if (destOffset === void 0) { destOffset = 0; }
    if (srcOffset + length >= src.byteLength) {
        throw new Error("Source buffer is too small for copy target of " + length + " bytes at offset " + srcOffset);
    }
    if (destOffset + length >= dest.byteLength) {
        throw new Error("Destination buffer is too small for copy target of " + length + " bytes to offset at " + destOffset);
    }
    var destView = new Uint8Array(dest);
    var srcView = new Uint8Array(src, srcOffset, length);
    destView.set(srcView, destOffset);
}
exports.copyArrayBuffer = copyArrayBuffer;
/**
 * Copies all data from one buffer into a new one, optionnally with offset and size arguments
 * @param buffer
 * @param begin
 * @param end
 */
function copyToNewArrayBuffer(buffer, offset, size) {
    if (offset === void 0) { offset = 0; }
    if (offset >= buffer.byteLength || offset + size > buffer.byteLength) {
        throw new Error("Offset or size are out of array-buffer bounds: " + offset + "/" + size + ", but byte-length is " + buffer.byteLength);
    }
    /**
     * The slice() method returns a shallow copy of a portion of an array
     * into a new array object selected from begin to end (end not included).
     * The original array will not be modified.
     */
    return buffer.slice(offset, offset + size);
}
exports.copyToNewArrayBuffer = copyToNewArrayBuffer;
function copyArrayBufferCollection(abs) {
    return abs.map(function (ab) { return copyToNewArrayBuffer(ab); });
}
exports.copyArrayBufferCollection = copyArrayBufferCollection;
/**
 * Copies only the window that the view points to into a new buffer
 * @param typedArray
 */
function allocAndCopyTypedArraySlice(typedArray) {
    return copyToNewArrayBuffer(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
}
exports.allocAndCopyTypedArraySlice = allocAndCopyTypedArraySlice;
/**
 * Concatenates two existing buffers into a newly allocated third one
 * @param buffer1
 * @param buffer2
 */
function concatArrayBuffers(buffer1, buffer2) {
    if (!buffer1) {
        return buffer2;
    }
    else if (!buffer2) {
        return buffer1;
    }
    var newBuffer = new ArrayBuffer(buffer1.byteLength + buffer2.byteLength);
    var view = new Uint8Array(newBuffer);
    view.set(new Uint8Array(buffer1), 0);
    view.set(new Uint8Array(buffer2), buffer1.byteLength);
    return newBuffer;
}
exports.concatArrayBuffers = concatArrayBuffers;
function concatArrays(arg0) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return Array.prototype.concat.apply(arg0, args);
}
exports.concatArrays = concatArrays;
// tslint:disable-next-line: ban-types
function forEachOwnPropKeyInObject(object, callback) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var element = object[key];
            callback(element);
        }
    }
}
exports.forEachOwnPropKeyInObject = forEachOwnPropKeyInObject;
function dispatchAsyncTask(func, timeoutSeconds) {
    if (timeoutSeconds === void 0) { timeoutSeconds = 0; }
    return setTimeout(func, timeoutSeconds * 1000);
}
exports.dispatchAsyncTask = dispatchAsyncTask;
function cancelAsyncTask(id) {
    clearTimeout(id);
}
exports.cancelAsyncTask = cancelAsyncTask;
function parseOptionsFromQueryString(query, validProperties) {
    if (query === void 0) { query = window.location.search; }
    if (validProperties === void 0) { validProperties = null; }
    if (!query) {
        return {};
    }
    if (!query.startsWith('?')) {
        throw new Error('Malformed query string, should start with a `?`');
    }
    query = query.substr(1);
    var queryTokens = query.split(/&|=/);
    if (queryTokens.length % 2 !== 0) {
        throw new Error('Invalid query string in URL, uneven amount of tokens');
    }
    var options = {};
    var i = 0;
    while (i <= queryTokens.length) {
        if (validProperties) {
            var validPropsIndex = validProperties.indexOf(queryTokens[i]);
            if (validPropsIndex >= 0) {
                options[validProperties[validPropsIndex]] = queryTokens[i + 1];
            }
        }
        else if (queryTokens[i]) {
            options[queryTokens[i]] = queryTokens[i + 1];
        }
        i = i + 2;
    }
    return options;
}
exports.parseOptionsFromQueryString = parseOptionsFromQueryString;
function arrayBufferToHexdump(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), function (x) { return ('00' + x.toString(16)) // map each by to a a string with base16
        .slice(-2); })
        .join(' ');
}
exports.arrayBufferToHexdump = arrayBufferToHexdump;
exports.utf8CharsToString = function (bytes) {
    return String.fromCharCode.apply(null, bytes);
};
exports.unicodeCharsToString = function (hexChars) {
    return String.fromCharCode.apply(null, hexChars);
};
function utf8StringToBuffer(str) {
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i_1 = 0, strLen = str.length; i_1 < strLen; i_1++) {
        bufView[i_1] = str.charCodeAt(i_1);
    }
    return buf;
}
exports.utf8StringToBuffer = utf8StringToBuffer;
/**
 * Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hexToBytes(s) {
    var len = s.length >> 1;
    var arr = new Uint8Array(len);
    for (var i_2 = 0; i_2 < len; i_2++) {
        arr[i_2] = parseInt(s.substr(i_2 * 2, 2), 16);
    }
    return arr;
}
exports.hexToBytes = hexToBytes;
function utf8decode(str) {
    var bytes = new Uint8Array(str.length * 4);
    var b = 0;
    for (var i_3 = 0, j = str.length; i_3 < j; i_3++) {
        var code = str.charCodeAt(i_3);
        if (code <= 0x7f) {
            bytes[b++] = code;
            continue;
        }
        if (code >= 0xD800 && code <= 0xDBFF) {
            var codeLow = str.charCodeAt(i_3 + 1);
            if (codeLow >= 0xDC00 && codeLow <= 0xDFFF) {
                // convert only when both high and low surrogates are present
                code = ((code & 0x3FF) << 10) + (codeLow & 0x3FF) + 0x10000;
                ++i_3;
            }
        }
        if ((code & 0xFFE00000) !== 0) {
            bytes[b++] = 0xF8 | ((code >>> 24) & 0x03);
            bytes[b++] = 0x80 | ((code >>> 18) & 0x3F);
            bytes[b++] = 0x80 | ((code >>> 12) & 0x3F);
            bytes[b++] = 0x80 | ((code >>> 6) & 0x3F);
            bytes[b++] = 0x80 | (code & 0x3F);
        }
        else if ((code & 0xFFFF0000) !== 0) {
            bytes[b++] = 0xF0 | ((code >>> 18) & 0x07);
            bytes[b++] = 0x80 | ((code >>> 12) & 0x3F);
            bytes[b++] = 0x80 | ((code >>> 6) & 0x3F);
            bytes[b++] = 0x80 | (code & 0x3F);
        }
        else if ((code & 0xFFFFF800) !== 0) {
            bytes[b++] = 0xE0 | ((code >>> 12) & 0x0F);
            bytes[b++] = 0x80 | ((code >>> 6) & 0x3F);
            bytes[b++] = 0x80 | (code & 0x3F);
        }
        else {
            bytes[b++] = 0xC0 | ((code >>> 6) & 0x1F);
            bytes[b++] = 0x80 | (code & 0x3F);
        }
    }
    return bytes.subarray(0, b);
}
exports.utf8decode = utf8decode;
exports.MAX_UINT_32 = 4294967296;
exports.MAX_UINT_16 = 65536;
exports.readUint16 = function (buffer, offset) {
    var val = buffer[offset] << 8 |
        buffer[offset + 1];
    return val < 0 ? exports.MAX_UINT_16 + val : val;
};
exports.readUint32 = function (buffer, offset) {
    var val = buffer[offset] << 24 |
        buffer[offset + 1] << 16 |
        buffer[offset + 2] << 8 |
        buffer[offset + 3];
    return val < 0 ? exports.MAX_UINT_32 + val : val;
};
function writeUint32(buffer, offset, value) {
    buffer[offset] = value >> 24;
    buffer[offset + 1] = (value >> 16) & 0xff;
    buffer[offset + 2] = (value >> 8) & 0xff;
    buffer[offset + 3] = value & 0xff;
    return 4;
}
exports.writeUint32 = writeUint32;
function writeInt32(data, offset, value) {
    data[offset] = (value >> 24) & 255;
    data[offset + 1] = (value >> 16) & 255;
    data[offset + 2] = (value >> 8) & 255;
    data[offset + 3] = value & 255;
    return 4;
}
exports.writeInt32 = writeInt32;
function decodeInt32(s) {
    return (s.charCodeAt(0) << 24) | (s.charCodeAt(1) << 16) |
        (s.charCodeAt(2) << 8) | s.charCodeAt(3);
}
exports.decodeInt32 = decodeInt32;
/**
 *
 * @param d
 * @param referenceDae defaults to midnight after Jan. 1, 1904
 */
function encodeDate(d, referenceDae) {
    if (referenceDae === void 0) { referenceDae = -2082844800000; }
    return ((d - referenceDae) / 1000) | 0;
}
exports.encodeDate = encodeDate;
function encodeFloat_16_16(f) {
    return (f * 0x10000) | 0;
}
exports.encodeFloat_16_16 = encodeFloat_16_16;
function encodeFloat_2_30(f) {
    return (f * 0x40000000) | 0;
}
exports.encodeFloat_2_30 = encodeFloat_2_30;
function encodeFloat_8_8(f) {
    return (f * 0x100) | 0;
}
exports.encodeFloat_8_8 = encodeFloat_8_8;
function encodeLang(s) {
    return ((s.charCodeAt(0) & 0x1F) << 10) | ((s.charCodeAt(1) & 0x1F) << 5) | (s.charCodeAt(2) & 0x1F);
}
exports.encodeLang = encodeLang;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var common_utils_1 = __webpack_require__(3);
var buffer_props_1 = __webpack_require__(2);
/**
 * @class
 * A BufferSlice wraps a buffer of binary data (as an ArrayBuffer).
 *
 * The slice is what is represented by the offset and length properties (r/w),
 *
 * which can be modified at any time.
 *
 * These values are in turn used by the various DataView getters to form the data-representation window.
 * Those methods have optional arguments that overload the latter values.
 *
 * BufferSlice can be deep-copied (except properties), and ArrayBuffer.prototype.slice will be called. See `copy` methods.
 *
 * To actually get a clone of a BufferSlice instance with different offset/length window and new properties,
 * use the `unwrap` method.
 *
 * The `unwrap` method is convenient when building zero-copy parsers/demuxers to create new buffer instances
 * to push to outputs based on one input buffer slice type and the new buffers are simply windows into the input data.
 *
 */
var BufferSlice = /** @class */ (function () {
    function BufferSlice(arrayBuffer, offset, length, props) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = arrayBuffer.byteLength; }
        if (props === void 0) { props = new buffer_props_1.BufferProperties(); }
        this.arrayBuffer = arrayBuffer;
        if (offset < 0 || length < 0) {
            throw new Error('Illegal parameters for BufferSlice window');
        }
        this.offset = offset;
        this.length = length;
        this.props = props;
    }
    BufferSlice.mapArrayBuffers = function (bufferSlices) {
        return bufferSlices.map(function (bs) { return bs.arrayBuffer; });
    };
    BufferSlice.fromTypedArray = function (typedArray, props) {
        return new BufferSlice(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength, props);
    };
    /**
       * Awakes transferable zombies from the dead
       *
       * bufferSlice A possibly "dead" BufferSlice that has been
       *                    cloned to be transferred into or out of a Worker
       *                    and stripped of his methods
       * @returns A new and alive BufferSlice
       */
    BufferSlice.fromTransferable = function (bufferSlice) {
        return new BufferSlice(bufferSlice.arrayBuffer, bufferSlice.offset, bufferSlice.length, buffer_props_1.BufferProperties.fromTransferable(bufferSlice.props));
    };
    /**
      * original existing BufferSlice representing a data window into an existing ArrayBuffer
      * @returns a new slice with a newly allocated underlying ArrayBuffer that is a copy of the original slice window data
      */
    BufferSlice.copy = function (original) {
        var slice = new BufferSlice(common_utils_1.copyToNewArrayBuffer(original.arrayBuffer, original.offset, original.length));
        slice.props = original.props;
        return slice;
    };
    /**
     *
    characterSizeBits
    {number} Number of characters needed in a specific encoding (default 8-bit === 1bytes)
     */
    BufferSlice.prototype.size = function (characterSizeBits) {
        if (characterSizeBits === void 0) { characterSizeBits = 8; }
        if (characterSizeBits === 8) {
            return this.length;
        }
        if (characterSizeBits === 16) {
            return this.length / 2;
        }
        if (characterSizeBits === 32) {
            return this.length / 4;
        }
        if (characterSizeBits === 64) {
            return this.length / 8;
        }
        throw new Error('Invalid character bitsize: ' + characterSizeBits);
    };
    /**
     * Returns a *new* slice instance around the exact same data buffer with a fresh vanilla properties object (by default),
     * and the given offset/length window _relative_ to the orignal one (*important*).
     *
     * That means that one can only restrain the window from the previous point of view, but not extend it.
     * Hence the method name.
     *
     * The offset is relative and will be added to the original slice one to form the new absolute offset.
     * The length is arbitrary but can not exceed the length of the original slice (and error will be thrown).
     * By default (no length passed), the length will correspond to the remainder of the slice based on its new offset.
     *
     * Optionally new properties can be passed directly here.
     *
    offset
    length
    props
     * @returns new BufferSlice
     */
    BufferSlice.prototype.unwrap = function (offset, length, props) {
        if (isNaN(offset)) {
            throw new Error('data bytes offset must be a number');
        }
        if (length > this.length) {
            throw new Error("can not unwrap longer slice (" + length + ") than original length: " + this.length);
        }
        offset += this.offset;
        if (isNaN(length)) {
            length = this.arrayBuffer.byteLength - offset;
        }
        var slice = new BufferSlice(this.arrayBuffer, offset, length, props);
        return slice;
    };
    /**
     * offsetIncrement Amount of bytes to move front of window forward
     * @see unwrap called internally, same limitations apply
     * @returns new BufferSlice
     */
    BufferSlice.prototype.shrinkFront = function (offsetIncrement) {
        return this.unwrap(this.offset + offsetIncrement, this.length - offsetIncrement);
    };
    /**
     * lengthReduction Amount of bytes to move back of window in retreat
     * @returns new BufferSlice
     */
    BufferSlice.prototype.shrinkBack = function (lengthReduction) {
        return this.unwrap(this.offset, this.length - lengthReduction);
    };
    /**
     * Copies the actual underlying data and creates a new slice with the same properties.
     *
     * @see BufferSlice.copy (static method)
     */
    BufferSlice.prototype.copy = function () {
        return BufferSlice.copy(this);
    };
    /**
     * Returns an ArrayBufferView for the internal buffer based on the current offset/length of this slice.
     *
     * This should be the default method to pass the data slice into nested components for processing.
     *
     */
    BufferSlice.prototype.getUint8Array = function () {
        return new Uint8Array(this.arrayBuffer, this.offset, this.length);
    };
    /**
     *
     * Returns an ArrayBufferView for the internal buffer based on the current offset/length of this slice.
     *
     * This should be the default method to pass the data slice into nested components for deep-analysis or manipulation.
     *
     */
    BufferSlice.prototype.getDataView = function () {
        return new DataView(this.arrayBuffer, this.offset, this.length);
    };
    /**
     *
     * Creates a view of the slice without copying but exposing the Node.js Buffer interface instead of Uint8Array or ArrayBufferView
     *
     * May be an alternative to getUint8Array in certain cases when interacting with Nodejs APIs or streams.
     *
     * This might only work on Node.js or browser envs that have a Buffer constructor.
     *
     */
    BufferSlice.prototype.getBuffer = function () {
        if (!Buffer) {
            throw new Error('`Buffer` is not supported as built-in class');
        }
        return Buffer.from(this.arrayBuffer, this.offset, this.length);
    };
    /**
     * allocates a new ArrayBuffer from the current slice
     */
    BufferSlice.prototype.newArrayBuffer = function () {
        return common_utils_1.allocAndCopyTypedArraySlice(this.getDataView());
    };
    BufferSlice.prototype.toString = function () {
        return "slice @" + this.offset + " of length " + this.length + " in buffer of " + this.arrayBuffer.byteLength + " bytes";
    };
    return BufferSlice;
}());
exports.BufferSlice = BufferSlice;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_crypto_1 = __webpack_require__(6);
var logger_1 = __webpack_require__(0);
var ts_demuxer_task_1 = __webpack_require__(10);
var context = self;
var workerId = common_crypto_1.makeUUID_v1();
var log = logger_1.getLogger("base-worker-" + workerId).log;
(function () {
    var nextJobId = 0;
    // Respond to message from parent thread
    context.addEventListener('message', onMessage);
    function onMessage(event) {
        log('Got message passed:', event);
        processTask(event.data);
    }
    function processTask(task) {
        task.workerContext = context;
        log("Processing task \"" + task.name + "\" under job-id " + nextJobId + " now ...");
        var startTime = performance.now();
        switch (task.name) {
            case 'tsdemuxer':
                ts_demuxer_task_1.processTSDemuxerAppend(task);
                break;
            default:
                throw new Error('Unknown task: ' + task.name);
        }
        var endTime = performance.now();
        var latencyMs = endTime - startTime;
        log("Processed task in " + latencyMs.toFixed(3) + " ms, done with job-id " + nextJobId);
        nextJobId++;
    }
})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuidv1 = __webpack_require__(7);
function makeUUID_v1() {
    return uuidv1();
}
exports.makeUUID_v1 = makeUUID_v1;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(8);
var bytesToUuid = __webpack_require__(9);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var processor_task_1 = __webpack_require__(11);
var payload_description_1 = __webpack_require__(1);
var packet_1 = __webpack_require__(12);
var buffer_1 = __webpack_require__(4);
var logger_1 = __webpack_require__(0);
var ts_demuxer_1 = __webpack_require__(18);
var buffer_props_1 = __webpack_require__(2);
var log = logger_1.getLogger('TSDemuxerTask').log;
function processTSDemuxerAppend(task) {
    var demuxer = new ts_demuxer_1.TSDemuxer(function (audioTrack, avcTrack, id3Track, txtTrack, timeOffset, contiguous, accurateTimeOffset) {
        log(audioTrack, avcTrack);
        audioTrack.samples.forEach(function (sample) {
            var unit = sample.unit;
            var bufferSlice = new buffer_1.BufferSlice(unit.buffer.slice(0), unit.byteOffset, unit.byteLength);
            var mimeType = audioTrack.isAAC ? payload_description_1.CommonMimeTypes.AUDIO_AAC : payload_description_1.CommonMimeTypes.AUDIO_MP3;
            bufferSlice.props = new buffer_props_1.BufferProperties(mimeType);
            bufferSlice.props.codec = audioTrack.isAAC ? audioTrack.codec : 'mp3a'; // FIXME
            bufferSlice.props.elementaryStreamId = audioTrack.pid;
            bufferSlice.props.details.codecConfigurationData = audioTrack.config;
            var packet = packet_1.Packet.fromSlice(bufferSlice, sample.dts, sample.dts - sample.pts);
            processor_task_1.postTaskMessage(task.workerContext, {
                packet: packet
            });
        });
        avcTrack.samples.forEach(function (sample) {
            sample.units.forEach(function (unit) {
                var bufferSlice = new buffer_1.BufferSlice(unit.data.buffer.slice(0), unit.data.byteOffset, unit.data.byteLength);
                bufferSlice.props = new buffer_props_1.BufferProperties(payload_description_1.CommonMimeTypes.VIDEO_AVC);
                bufferSlice.props.codec = avcTrack.codec;
                bufferSlice.props.elementaryStreamId = avcTrack.pid;
                bufferSlice.props.isKeyframe = sample.key || unit.type === 5; // IDR
                bufferSlice.props.isBitstreamHeader = unit.type >= 7 && unit.type <= 8; // SPS/PPS
                bufferSlice.props.details.width = avcTrack.width;
                bufferSlice.props.details.height = avcTrack.height;
                if (unit.type === 5) {
                    bufferSlice.props.tags.add('idr');
                }
                else if (unit.type === 6) {
                    bufferSlice.props.tags.add('sei');
                }
                else if (unit.type === 7) {
                    bufferSlice.props.tags.add('sps');
                }
                else if (unit.type === 8) {
                    bufferSlice.props.tags.add('pps');
                }
                var packet = packet_1.Packet.fromSlice(bufferSlice, sample.dts, sample.dts - sample.pts);
                processor_task_1.postTaskMessage(task.workerContext, {
                    packet: packet
                });
            });
        });
        processor_task_1.postTaskMessage(task.workerContext, {
            packet: packet_1.Packet.newFlush()
        });
        return void 0;
    });
    demuxer.reset();
    var p = packet_1.Packet.fromTransferable(task.packet);
    p.forEachBufferSlice(function (bufferSlice) {
        demuxer.append(bufferSlice.getUint8Array(), 0, true, 0);
    });
}
exports.processTSDemuxerAppend = processTSDemuxerAppend;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function postTaskMessage(context, wm) {
    context.postMessage(wm, wm.packet.mapArrayBuffers());
}
exports.postTaskMessage = postTaskMessage;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = __webpack_require__(4);
var payload_description_1 = __webpack_require__(1);
var buffer_props_1 = __webpack_require__(2);
/**
 * Symbols are passed into sockets and thus processors to convey in-band
 * information on the stream of packets.
 */
var PacketSymbol;
(function (PacketSymbol) {
    PacketSymbol[PacketSymbol["VOID"] = 0] = "VOID";
    PacketSymbol[PacketSymbol["WAIT"] = 1] = "WAIT";
    PacketSymbol[PacketSymbol["WAIT_BUT_Q"] = 2] = "WAIT_BUT_Q";
    PacketSymbol[PacketSymbol["RESUME"] = 3] = "RESUME";
    PacketSymbol[PacketSymbol["FLUSH"] = 4] = "FLUSH";
    PacketSymbol[PacketSymbol["GAP"] = 5] = "GAP";
    PacketSymbol[PacketSymbol["EOS"] = 6] = "EOS";
    PacketSymbol[PacketSymbol["DROP"] = 7] = "DROP";
    PacketSymbol[PacketSymbol["DROP_Q"] = 8] = "DROP_Q";
    PacketSymbol[PacketSymbol["SYNC"] = 9] = "SYNC"; // after this, a new packet sync-id may appear (the symbolic packet SHOULD carry its value already)
})(PacketSymbol = exports.PacketSymbol || (exports.PacketSymbol = {}));
var Packet = /** @class */ (function () {
    function Packet(data, timestamp, presentationTimeOffset, createdAt, synchronizationId) {
        if (data === void 0) { data = []; }
        if (timestamp === void 0) { timestamp = 0; }
        if (presentationTimeOffset === void 0) { presentationTimeOffset = 0; }
        if (createdAt === void 0) { createdAt = new Date(); }
        if (synchronizationId === void 0) { synchronizationId = null; }
        this.data = data;
        this.timestamp = timestamp;
        this.presentationTimeOffset = presentationTimeOffset;
        this.createdAt = createdAt;
        this.synchronizationId = synchronizationId;
        this._symbol = PacketSymbol.VOID;
        this._timescale = 1; // maybe not have a default value?
        this._hasDefaultBufferProps = true;
        this._timestampOffset = 0;
        if (synchronizationId !== null && !Number.isSafeInteger(synchronizationId)) {
            throw new Error('Synchronization-id must be a safe integer value');
        }
    }
    /**
     * used to recover a packet that was transferred from a another thread (worker) context (passed via a message-event).
     * the object is then a "dead" structure of metadata and needs to be reconstructed so it has "methods"
     * again on its instance. all buffer-slices need to be recovered as well. in JS terms, we have lost all of our
     * prototypical nature and are more of a 1-to-1 serialized snapshot of the object state from which we create
     * a new instance with the identical properties.
     * @param p
     */
    Packet.fromTransferable = function (p) {
        return Packet.fromData(p, p.data.map(function (bs) { return buffer_1.BufferSlice.fromTransferable(bs); }));
    };
    /**
     * same as above but we are creating copies of the buffer data as well.
     * this is usually done when we pass data from a processing thread (worker) into the control/user thread via a message.
     * the message is attached a copy of the original data which was processed in the thread in this case.
     * @param p
     */
    Packet.makeTransferableCopy = function (p) {
        return Packet.fromData(p, p.data.map(function (bs) { return buffer_1.BufferSlice.copy(bs); }));
    };
    /**
     * Creates a new packet based on an existing ("dead") packets metadata and some arbitrary data that is passed in.
     * This is used to convert back and for packet-data to be attached to inter-thread messages.
     * @param p Expected to be only a state snapshot of a packet without the actual prototype applied (no methods)
     * @param data
     */
    Packet.fromData = function (p, data) {
        var newPacket = new Packet(data, p.timestamp, p.presentationTimeOffset, p.createdAt, p.synchronizationId);
        if (p._symbol > 0) { // we need to access the private member here because the properties
            // and methods are not present when the prototype wasn't called
            // same for the methods below
            // note: if we would apply the constructor on `p` it would also reset the values
            newPacket.symbol = p._symbol;
        }
        newPacket.setTimestampOffset(p._timestampOffset);
        newPacket.setTimescale(p._timescale);
        return newPacket;
    };
    Packet.fromArrayBuffer = function (arrayBuffer, mimeType, bufferProps) {
        if (bufferProps === void 0) { bufferProps = new buffer_props_1.BufferProperties(mimeType); }
        return Packet.fromSlice(new buffer_1.BufferSlice(arrayBuffer, 0, arrayBuffer.byteLength, bufferProps));
    };
    Packet.fromSlice = function (bufferSlice, timestamp, pto) {
        var p = new Packet([], timestamp, pto);
        p.data.push(bufferSlice);
        return p;
    };
    Packet.fromSlices = function (timestamp, pto) {
        var bufferSlices = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            bufferSlices[_i - 2] = arguments[_i];
        }
        var p = new Packet([], timestamp, pto);
        Array.prototype.push.apply(p.data, bufferSlices);
        return p;
    };
    Packet.fromSymbol = function (symbol) {
        var p = new Packet();
        p.symbol = symbol;
        return p;
    };
    Packet.newEos = function () {
        return Packet.fromSymbol(PacketSymbol.EOS);
    };
    Packet.newFlush = function () {
        return Packet.fromSymbol(PacketSymbol.FLUSH);
    };
    Packet.newGap = function () {
        return Packet.fromSymbol(PacketSymbol.GAP);
    };
    Packet.newResume = function () {
        return Packet.fromSymbol(PacketSymbol.RESUME);
    };
    Packet.prototype.mapArrayBuffers = function () {
        return buffer_1.BufferSlice.mapArrayBuffers(this.data);
    };
    Packet.prototype.forEachBufferSlice = function (method, errorHandler, context) {
        if (errorHandler === void 0) { errorHandler = null; }
        if (context === void 0) { context = null; }
        var abort = false;
        // we use an on-stack shallow copy of the array to prevent any
        // side-effects on other manipulation of the packet itself from within
        // the loop we will run here.
        this.data.slice().forEach(function (bufferSlice) {
            if (abort) {
                return;
            }
            if (context) {
                method = method.bind(context);
                if (errorHandler) {
                    errorHandler = errorHandler.bind(context);
                }
            }
            try {
                method(bufferSlice);
            }
            catch (err) {
                if (errorHandler) {
                    if (!errorHandler(bufferSlice, err)) {
                        abort = true;
                        console.error('Packet-buffers loop aborted: ', err);
                    }
                }
                else {
                    throw err;
                }
            }
        });
    };
    Object.defineProperty(Packet.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (symbol) {
            if (this.data.length > 0) {
                throw new Error('Symbolic packets should not carry data');
            }
            this._symbol = symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Packet.prototype, "defaultPayloadInfo", {
        // TODO: allow to inject default payload as well from the packet
        get: function () {
            if (!this.hasDefaultPayloadInfo) {
                throw new Error('packet has no default payload description');
            }
            return this.data[0] ? this.data[0].props : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Packet.prototype, "hasDefaultPayloadInfo", {
        // TODO: check if other buffers have other infos etc..
        get: function () {
            return this._hasDefaultBufferProps;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Packet.prototype, "cto", {
        /**
         * alias for presentationTimeOffset
         */
        get: function () {
            return this.presentationTimeOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Packet.prototype, "pto", {
        /**
         * alias for presentationTimeOffset
         */
        get: function () {
            return this.presentationTimeOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Packet.prototype, "dts", {
        /**
         * alias for timestamp (caution: not including timestamp-offset)
         */
        get: function () {
            return this.timestamp;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * CT <==> PTS
     *
     * CT(n)  =  DT(n)  +  CTO(n)
     */
    Packet.prototype.getPresentationTimestamp = function () {
        return this._timestampOffset + this.timestamp + this.presentationTimeOffset;
    };
    Packet.prototype.getDecodingTimestamp = function () {
        return this._timestampOffset + this.timestamp;
    };
    Packet.prototype.setTimescale = function (timescale) {
        this._timescale = timescale;
    };
    Packet.prototype.getTimescale = function () {
        return this._timescale;
    };
    Packet.prototype.setTimestampOffset = function (tOffset) {
        this._timestampOffset = tOffset;
    };
    Packet.prototype.getTimestampOffset = function () {
        return this._timestampOffset;
    };
    /**
     * CTO == PTO == presentationTimeOffset
     */
    Packet.prototype.getNormalizedCto = function () {
        return this.presentationTimeOffset / this._timescale;
    };
    Packet.prototype.getNormalizedTimestampOffset = function () {
        return this._timestampOffset / this._timescale;
    };
    Packet.prototype.getNormalizedPts = function () {
        return this.getPresentationTimestamp() / this._timescale;
    };
    Packet.prototype.getNormalizedDts = function () {
        return this.getDecodingTimestamp() / this._timescale;
    };
    Packet.prototype.getScaledPts = function (timescale) {
        return this.getNormalizedPts() * timescale;
    };
    Packet.prototype.getScaledDts = function (timescale) {
        return this.getNormalizedDts() * timescale;
    };
    /**
     * CTO == PTO == presentationTimeOffset
     */
    Packet.prototype.getScaledCto = function (timescale) {
        return this.getNormalizedCto() * timescale;
    };
    Packet.prototype.getTotalBytes = function () {
        return this.data.reduce(function (accu, buf) {
            return accu + buf.length;
        }, 0);
    };
    Packet.prototype.isSymbolic = function () {
        return this._symbol !== PacketSymbol.VOID && this.data.length === 0;
    };
    Packet.prototype.toString = function () {
        var p = this;
        var description = "<" + (p.defaultPayloadInfo ? p.defaultPayloadInfo.mimeType : payload_description_1.UNKNOWN_MIMETYPE) + ">"
            + (" #{(@" + p.getTimestampOffset() + " + " + p.timestamp + " + \u2202" + p.presentationTimeOffset + ") / " + p.getTimescale())
            + (" -> " + p.getNormalizedDts() + " + \u2202" + p.getNormalizedCto() + " [s]} ");
        return description;
    };
    return Packet;
}());
exports.Packet = Packet;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(15)
var ieee754 = __webpack_require__(16)
var isArray = __webpack_require__(17)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

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

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * highly optimized TS demuxer:
 * parse PAT, PMT
 * extract PES packet from audio and video PIDs
 * extract AVC/H264 NAL units and AAC/ADTS samples from PES packet
 * trigger the remuxer upon parsing completion
 * it also tries to workaround as best as it can audio codec switch (HE-AAC to AAC and vice versa), without having to restart the MediaSource.
 * it also controls the remuxing process :
 * upon discontinuity or level switch detection, it will also notifies the remuxer so that it can reset its state.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ADTS = __webpack_require__(19);
var mpeg_audio_parser_1 = __webpack_require__(20);
var exp_golomb_reader_1 = __webpack_require__(21);
var sample_aes_decrypter_1 = __webpack_require__(22);
var logger_1 = __webpack_require__(0);
// import Hex from '../utils/hex';
var _a = logger_1.getLogger('TSDemuxer'), log = _a.log, warn = _a.warn, error = _a.error;
// We are using fixed track IDs for driving the MP4 remuxer
// instead of following the TS PIDs.
// There is no reason not to do this and some browsers/SourceBuffer-demuxers
// may not like if there are TrackID "switches"
// See https://github.com/video-dev/hls.js/issues/1331
// Here we are mapping our internal track types to constant MP4 track IDs
// With MSE currently one can only have one track of each, and we are muxing
// whatever video/audio rendition in them.
var RemuxerTrackIdConfig = {
    video: 1,
    audio: 2,
    id3: 3,
    text: 4
};
var TSDemuxer = /** @class */ (function () {
    function TSDemuxer(onDemux, config, typeSupported) {
        if (config === void 0) { config = {}; }
        if (typeSupported === void 0) { typeSupported = { mpeg: true, mp3: true }; }
        this.config = config;
        this.typeSupported = typeSupported;
        this.onDemux = onDemux;
        this.sampleAes = null;
    }
    TSDemuxer.probe = function (data) {
        var syncOffset = TSDemuxer.findSyncOffset(data);
        if (syncOffset < 0) {
            return false;
        }
        else {
            if (syncOffset) {
                warn("MPEG2-TS detected but first sync word found @ offset " + syncOffset + ", junk ahead ?");
            }
            return true;
        }
    };
    TSDemuxer.findSyncOffset = function (data) {
        // scan 4096 first bytes
        var scanwindow = Math.min(4096, data.length - 3 * 188);
        var i = 0;
        while (i < scanwindow) {
            // a TS fragment should contain at least 3 TS packets, a PAT, a PMT, and one PID, each starting with 0x47
            if (data[i] === 0x47 && data[i + 188] === 0x47 && data[i + 2 * 188] === 0x47) {
                if (i > 0) {
                    log('sync-offset at:', i);
                }
                return i;
            }
            else {
                i++;
            }
        }
        return -1;
    };
    /**
     * Creates a track model internal to demuxer used to drive remuxing input
     *
    {string} type 'audio' | 'video' | 'id3' | 'text'
    {number} duration
    {object} TSDemuxer's internal track model
     */
    TSDemuxer._createTrack = function (type, duration) {
        return {
            container: type === 'video' || type === 'audio' ? 'video/mp2t' : undefined,
            type: type,
            id: RemuxerTrackIdConfig[type],
            pid: -1,
            inputTimeScale: 90000,
            sequenceNumber: 0,
            samples: [],
            len: 0,
            dropped: type === 'video' ? 0 : undefined,
            isAAC: type === 'audio' ? true : undefined,
            duration: type === 'audio' ? duration : undefined
        };
    };
    TSDemuxer.prototype.setDecryptionInfo = function (decryptdata) {
        if ((decryptdata != null) && (decryptdata.key != null) && (decryptdata.method === 'SAMPLE-AES')) {
            this.sampleAes = new sample_aes_decrypter_1.default(this.observer, this.config, decryptdata, this.discardEPB);
        }
        else {
            this.sampleAes = null;
        }
    };
    /**
     * Initializes a new init segment on the demuxer. Needed for discontinuities/track-switches (or at stream start)
     * Resets all internal track instances of the demuxer.
     *
    {string} audioCodec
    {string} videoCodec
    {number} duration (in TS timescale = 90kHz)
     */
    TSDemuxer.prototype.reset = function (duration) {
        if (duration === void 0) { duration = 0; }
        this.pmtParsed = false;
        this._pmtId = -1;
        this._avcTrack = TSDemuxer._createTrack('video', duration);
        this._audioTrack = TSDemuxer._createTrack('audio', duration);
        this._id3Track = TSDemuxer._createTrack('id3', duration);
        this._txtTrack = TSDemuxer._createTrack('text', duration);
        // flush any partial content
        this.aacOverFlow = null;
        this.aacLastPTS = null;
        this.avcSample = null;
        this._duration = duration;
    };
    // feed incoming data to the front of the parsing pipeline
    TSDemuxer.prototype.append = function (data, timeOffset, contiguous, accurateTimeOffset) {
        var start = 0;
        var len = data.length;
        var stt;
        var pid;
        var atf;
        var offset;
        var pes;
        var unknownPIDs = false;
        var pmtParsed = this.pmtParsed;
        var avcTrack = this._avcTrack;
        var audioTrack = this._audioTrack;
        var id3Track = this._id3Track;
        var avcId = avcTrack.pid;
        var audioId = audioTrack.pid;
        var id3Id = id3Track.pid;
        var pmtId = this._pmtId;
        var avcData = avcTrack.pesData;
        var audioData = audioTrack.pesData;
        var id3Data = id3Track.pesData;
        var parsePAT = this._parsePAT;
        var parsePMT = this._parsePMT;
        var parsePES = this._parsePES;
        var parseAVCPES = this._parseAVCPES.bind(this);
        var parseAACPES = this._parseAACPES.bind(this);
        var parseMPEGPES = this._parseMPEGPES.bind(this);
        var parseID3PES = this._parseID3PES.bind(this);
        this.contiguous = contiguous;
        var syncOffset = TSDemuxer.findSyncOffset(data);
        if (syncOffset < 0) {
            throw new Error('No ts-packet found in stream');
        }
        // don't parse last TS packet if incomplete
        len -= (len + syncOffset) % 188;
        // loop through TS packets
        for (start = syncOffset; start < len; start += 188) {
            if (data[start] !== 0x47) { // try to skip until next sync-byte
                for (var i_1 = start; i_1 < len; i_1++) {
                    if (data[i_1] === 0x47) {
                        warn("Skipped " + (i_1 - start) + " bytes in stream to find next TS package");
                        start = i_1;
                        break;
                    }
                }
            }
            stt = !!(data[start + 1] & 0x40);
            // pid is a 13-bit field starting at the last bit of TS[1]
            pid = ((data[start + 1] & 0x1f) << 8) + data[start + 2];
            atf = (data[start + 3] & 0x30) >> 4;
            // if an adaption field is present, its length is specified by the fifth byte of the TS packet header.
            if (atf > 1) {
                offset = start + 5 + data[start + 4];
                // continue if there is only adaptation field
                if (offset === (start + 188)) {
                    continue;
                }
            }
            else {
                offset = start + 4;
            }
            switch (pid) {
                case avcId:
                    if (stt) {
                        if (avcData && (pes = parsePES(avcData)) && pes.pts !== undefined) {
                            parseAVCPES(pes, false);
                        }
                        avcData = { data: [], size: 0 };
                    }
                    if (avcData) {
                        avcData.data.push(data.subarray(offset, start + 188));
                        avcData.size += start + 188 - offset;
                    }
                    break;
                case audioId:
                    if (stt) {
                        if (audioData && (pes = parsePES(audioData)) && pes.pts !== undefined) {
                            if (audioTrack.isAAC) {
                                parseAACPES(pes);
                            }
                            else {
                                parseMPEGPES(pes);
                            }
                        }
                        audioData = { data: [], size: 0 };
                    }
                    if (audioData) {
                        audioData.data.push(data.subarray(offset, start + 188));
                        audioData.size += start + 188 - offset;
                    }
                    break;
                case id3Id:
                    if (stt) {
                        if (id3Data && (pes = parsePES(id3Data)) && pes.pts !== undefined) {
                            parseID3PES(pes);
                        }
                        id3Data = { data: [], size: 0 };
                    }
                    if (id3Data) {
                        id3Data.data.push(data.subarray(offset, start + 188));
                        id3Data.size += start + 188 - offset;
                    }
                    break;
                case 0:
                    if (stt) {
                        offset += data[offset] + 1;
                    }
                    pmtId = this._pmtId = parsePAT(data, offset);
                    break;
                case pmtId:
                    if (stt) {
                        offset += data[offset] + 1;
                    }
                    var parsedPIDs = parsePMT(data, offset, this.typeSupported.mpeg || this.typeSupported.mp3, this.sampleAes != null);
                    // only update track id if track PID found while parsing PMT
                    // this is to avoid resetting the PID to -1 in case
                    // track PID transiently disappears from the stream
                    // this could happen in case of transient missing audio samples for example
                    // NOTE this is only the PID of the track as found in TS,
                    // but we are not using this for MP4 track IDs.
                    avcId = parsedPIDs.avc;
                    if (avcId > 0) {
                        avcTrack.pid = avcId;
                    }
                    audioId = parsedPIDs.audio;
                    if (audioId > 0) {
                        audioTrack.pid = audioId;
                        audioTrack.isAAC = parsedPIDs.isAAC;
                    }
                    id3Id = parsedPIDs.id3;
                    if (id3Id > 0) {
                        id3Track.pid = id3Id;
                    }
                    if (unknownPIDs && !pmtParsed) {
                        log('reparse from beginning');
                        unknownPIDs = false;
                        // we set it to -188, the += 188 in the for loop will reset start to 0
                        start = syncOffset - 188;
                    }
                    pmtParsed = this.pmtParsed = true;
                    break;
                case 17:
                case 0x1fff:
                    break;
                default:
                    unknownPIDs = true;
                    break;
            }
        }
        // try to parse last PES packets
        if (avcData && (pes = parsePES(avcData)) && pes.pts !== undefined) {
            parseAVCPES(pes, true);
            avcTrack.pesData = null;
        }
        else {
            // either avcData null or PES truncated, keep it for next frag parsing
            avcTrack.pesData = avcData;
        }
        if (audioData && (pes = parsePES(audioData)) && pes.pts !== undefined) {
            if (audioTrack.isAAC) {
                parseAACPES(pes);
            }
            else {
                parseMPEGPES(pes);
            }
            audioTrack.pesData = null;
        }
        else {
            if (audioData && audioData.size) {
                log('last AAC PES packet truncated,might overlap between fragments');
            }
            // either audioData null or PES truncated, keep it for next frag parsing
            audioTrack.pesData = audioData;
        }
        if (id3Data && (pes = parsePES(id3Data)) && pes.pts !== undefined) {
            parseID3PES(pes);
            id3Track.pesData = null;
        }
        else {
            // either id3Data null or PES truncated, keep it for next frag parsing
            id3Track.pesData = id3Data;
        }
        if (this.sampleAes == null) {
            this.onDemux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
        }
        else {
            this.decryptAndRemux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
        }
    };
    TSDemuxer.prototype.decryptAndRemux = function (audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
        if (audioTrack.samples && audioTrack.isAAC) {
            this.sampleAes.decryptAacSamples(audioTrack.samples, 0, function () {
                this.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
            }.bind(this));
        }
        else {
            this.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
        }
    };
    TSDemuxer.prototype.decryptAndRemuxAvc = function (audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
        if (videoTrack.samples) {
            this.sampleAes.decryptAvcSamples(videoTrack.samples, 0, 0, function () {
                this.onDemux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
            }.bind(this));
        }
        else {
            this.onDemux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
        }
    };
    TSDemuxer.prototype.destroy = function () {
        this._initPTS = this._initDTS = undefined;
        this._duration = 0;
    };
    TSDemuxer.prototype._parsePAT = function (data, offset) {
        // skip the PSI header and parse the first PMT entry
        return (data[offset + 10] & 0x1F) << 8 | data[offset + 11];
        // log('PMT PID:'  + this._pmtId);
    };
    TSDemuxer.prototype._parsePMT = function (data, offset, mpegSupported, isSampleAes) {
        var sectionLength;
        var tableEnd;
        var programInfoLength;
        var pid;
        var result = { audio: -1, avc: -1, id3: -1, isAAC: true };
        sectionLength = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
        tableEnd = offset + 3 + sectionLength - 4;
        // to determine where the table is, we have to figure out how
        // long the program info descriptors are
        programInfoLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
        // advance the offset to the first entry in the mapping table
        offset += 12 + programInfoLength;
        while (offset < tableEnd) {
            pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];
            switch (data[offset]) {
                case 0xcf: // SAMPLE-AES AAC
                    if (!isSampleAes) {
                        log('unkown stream type:' + data[offset]);
                        break;
                    }
                /* falls through */
                // ISO/IEC 13818-7 ADTS AAC (MPEG-2 lower bit-rate audio)
                case 0x0f:
                    // log('AAC PID:'  + pid);
                    if (result.audio === -1) {
                        result.audio = pid;
                    }
                    break;
                // Packetized metadata (ID3)
                case 0x15:
                    // log('ID3 PID:'  + pid);
                    if (result.id3 === -1) {
                        result.id3 = pid;
                    }
                    break;
                case 0xdb: // SAMPLE-AES AVC
                    if (!isSampleAes) {
                        log('unkown stream type:' + data[offset]);
                        break;
                    }
                /* falls through */
                // ITU-T Rec. H.264 and ISO/IEC 14496-10 (lower bit-rate video)
                case 0x1b:
                    // log('AVC PID:'  + pid);
                    if (result.avc === -1) {
                        result.avc = pid;
                    }
                    break;
                // ISO/IEC 11172-3 (MPEG-1 audio)
                // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
                case 0x03:
                case 0x04:
                    // log('MPEG PID:'  + pid);
                    if (!mpegSupported) {
                        log('MPEG audio found, not supported in this browser for now');
                    }
                    else if (result.audio === -1) {
                        result.audio = pid;
                        result.isAAC = false;
                    }
                    break;
                case 0x24:
                    warn('HEVC stream type found, not supported for now');
                    break;
                default:
                    log('unkown stream type:' + data[offset]);
                    break;
            }
            // move to the next table entry
            // skip past the elementary stream descriptors, if present
            offset += ((data[offset + 3] & 0x0F) << 8 | data[offset + 4]) + 5;
        }
        return result;
    };
    TSDemuxer.prototype._parsePES = function (stream) {
        var i = 0;
        var frag;
        var pesFlags;
        var pesPrefix;
        var pesLen;
        var pesHdrLen;
        var pesData;
        var pesPts;
        var pesDts;
        var payloadStartOffset;
        var data = stream.data;
        // safety check
        if (!stream || stream.size === 0) {
            return null;
        }
        // we might need up to 19 bytes to read PES header
        // if first chunk of data is less than 19 bytes, let's merge it with following ones until we get 19 bytes
        // usually only one merge is needed (and this is rare ...)
        while (data[0].length < 19 && data.length > 1) {
            var newData = new Uint8Array(data[0].length + data[1].length);
            newData.set(data[0]);
            newData.set(data[1], data[0].length);
            data[0] = newData;
            data.splice(1, 1);
        }
        // retrieve PTS/DTS from first fragment
        frag = data[0];
        pesPrefix = (frag[0] << 16) + (frag[1] << 8) + frag[2];
        if (pesPrefix === 1) {
            pesLen = (frag[4] << 8) + frag[5];
            // if PES parsed length is not zero and greater than total received length, stop parsing. PES might be truncated
            // minus 6 : PES header size
            if (pesLen && pesLen > stream.size - 6) {
                return null;
            }
            pesFlags = frag[7];
            if (pesFlags & 0xC0) {
                /* PES header described here : http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
                    as PTS / DTS is 33 bit we cannot use bitwise operator in JS,
                    as Bitwise operators treat their operands as a sequence of 32 bits */
                pesPts = (frag[9] & 0x0E) * 536870912 + // 1 << 29
                    (frag[10] & 0xFF) * 4194304 + // 1 << 22
                    (frag[11] & 0xFE) * 16384 + // 1 << 14
                    (frag[12] & 0xFF) * 128 + // 1 << 7
                    (frag[13] & 0xFE) / 2;
                // check if greater than 2^32 -1
                if (pesPts > 4294967295) {
                    // decrement 2^33
                    pesPts -= 8589934592;
                }
                if (pesFlags & 0x40) {
                    pesDts = (frag[14] & 0x0E) * 536870912 + // 1 << 29
                        (frag[15] & 0xFF) * 4194304 + // 1 << 22
                        (frag[16] & 0xFE) * 16384 + // 1 << 14
                        (frag[17] & 0xFF) * 128 + // 1 << 7
                        (frag[18] & 0xFE) / 2;
                    // check if greater than 2^32 -1
                    if (pesDts > 4294967295) {
                        // decrement 2^33
                        pesDts -= 8589934592;
                    }
                    if (pesPts - pesDts > 60 * 90000) {
                        warn(Math.round((pesPts - pesDts) / 90000) + "s delta between PTS and DTS, align them");
                        pesPts = pesDts;
                    }
                }
                else {
                    pesDts = pesPts;
                }
            }
            pesHdrLen = frag[8];
            // 9 bytes : 6 bytes for PES header + 3 bytes for PES extension
            payloadStartOffset = pesHdrLen + 9;
            stream.size -= payloadStartOffset;
            // reassemble PES packet
            pesData = new Uint8Array(stream.size);
            for (var j = 0, dataLen = data.length; j < dataLen; j++) {
                frag = data[j];
                var len = frag.byteLength;
                if (payloadStartOffset) {
                    if (payloadStartOffset > len) {
                        // trim full frag if PES header bigger than frag
                        payloadStartOffset -= len;
                        continue;
                    }
                    else {
                        // trim partial frag if PES header smaller than frag
                        frag = frag.subarray(payloadStartOffset);
                        len -= payloadStartOffset;
                        payloadStartOffset = 0;
                    }
                }
                pesData.set(frag, i);
                i += len;
            }
            if (pesLen) {
                // payload size : remove PES header + PES extension
                pesLen -= pesHdrLen + 3;
            }
            return { data: pesData, pts: pesPts, dts: pesDts, len: pesLen };
        }
        else {
            return null;
        }
    };
    TSDemuxer.prototype.pushAccesUnit = function (avcSample, avcTrack) {
        if (avcSample.units.length && avcSample.frame) {
            var samples = avcTrack.samples;
            var nbSamples = samples.length;
            // only push AVC sample if starting with a keyframe is not mandatory OR
            //    if keyframe already found in this fragment OR
            //       keyframe found in last fragment (track.sps) AND
            //          samples already appended (we already found a keyframe in this fragment) OR fragment is contiguous
            if (!this.config.forceKeyFrameOnDiscontinuity ||
                avcSample.key === true ||
                (avcTrack.sps && (nbSamples || this.contiguous))) {
                avcSample.id = nbSamples;
                samples.push(avcSample);
            }
            else {
                // dropped samples, track it
                avcTrack.dropped++;
            }
        }
        if (avcSample.debug.length) {
            log(avcSample.pts + '/' + avcSample.dts + ':' + avcSample.debug);
        }
    };
    TSDemuxer.prototype._parseAVCPES = function (pes, last) {
        var _this = this;
        var debug = false;
        // log('parse new PES');
        var track = this._avcTrack;
        var units = this._parseAVCNALu(pes.data);
        var expGolombDecoder;
        var avcSample = this.avcSample;
        var push;
        var spsfound = false;
        var i;
        var pushAccesUnit = this.pushAccesUnit.bind(this);
        var createAVCSample = function (key, pts, dts, debug) {
            return { key: key, pts: pts, dts: dts, units: [], debug: debug };
        };
        // free pes.data to save up some memory
        pes.data = null;
        // if new NAL units found and last sample still there, let's push ...
        // this helps parsing streams with missing AUD (only do this if AUD never found)
        if (avcSample && units.length && !track.audFound) {
            pushAccesUnit(avcSample, track);
            avcSample = this.avcSample = createAVCSample(false, pes.pts, pes.dts, '');
        }
        units.forEach(function (unit) {
            switch (unit.type) {
                // NDR
                case 1:
                    push = true;
                    if (!avcSample) {
                        avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
                    }
                    if (debug) {
                        avcSample.debug += 'NDR ';
                    }
                    avcSample.frame = true;
                    var data = unit.data;
                    // only check slice type to detect KF in case SPS found in same packet (any keyframe is preceded by SPS ...)
                    if (spsfound && data.length > 4) {
                        // retrieve slice type by parsing beginning of NAL unit (follow H264 spec, slice_header definition) to detect keyframe embedded in NDR
                        var sliceType = new exp_golomb_reader_1.default(data).readSliceType();
                        // 2 : I slice, 4 : SI slice, 7 : I slice, 9: SI slice
                        // SI slice : A slice that is coded using intra prediction only and using quantisation of the prediction samples.
                        // An SI slice can be coded such that its decoded samples can be constructed identically to an SP slice.
                        // I slice: A slice that is not an SI slice that is decoded using intra prediction only.
                        // if (sliceType === 2 || sliceType === 7) {
                        if (sliceType === 2 || sliceType === 4 || sliceType === 7 || sliceType === 9) {
                            avcSample.key = true;
                        }
                    }
                    break;
                // IDR
                case 5:
                    push = true;
                    // handle PES not starting with AUD
                    if (!avcSample) {
                        avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, '');
                    }
                    if (debug) {
                        avcSample.debug += 'IDR ';
                    }
                    avcSample.key = true;
                    avcSample.frame = true;
                    break;
                // SEI
                case 6:
                    push = true;
                    if (debug && avcSample) {
                        avcSample.debug += 'SEI ';
                    }
                    expGolombDecoder = new exp_golomb_reader_1.default(_this.discardEPB(unit.data));
                    // skip frameType
                    expGolombDecoder.readUByte();
                    var payloadType = 0;
                    var payloadSize = 0;
                    var endOfCaptions = false;
                    var b = 0;
                    while (!endOfCaptions && expGolombDecoder.bytesAvailable > 1) {
                        payloadType = 0;
                        do {
                            b = expGolombDecoder.readUByte();
                            payloadType += b;
                        } while (b === 0xFF);
                        // Parse payload size.
                        payloadSize = 0;
                        do {
                            b = expGolombDecoder.readUByte();
                            payloadSize += b;
                        } while (b === 0xFF);
                        // TODO: there can be more than one payload in an SEI packet...
                        // TODO: need to read type and size in a while loop to get them all
                        if (payloadType === 4 && expGolombDecoder.bytesAvailable !== 0) {
                            endOfCaptions = true;
                            var countryCode = expGolombDecoder.readUByte();
                            if (countryCode === 181) {
                                var providerCode = expGolombDecoder.readUShort();
                                if (providerCode === 49) {
                                    var userStructure = expGolombDecoder.readUInt();
                                    if (userStructure === 0x47413934) {
                                        var userDataType = expGolombDecoder.readUByte();
                                        // Raw CEA-608 bytes wrapped in CEA-708 packet
                                        if (userDataType === 3) {
                                            var firstByte = expGolombDecoder.readUByte();
                                            var secondByte = expGolombDecoder.readUByte();
                                            var totalCCs = 31 & firstByte;
                                            var byteArray = [firstByte, secondByte];
                                            for (i = 0; i < totalCCs; i++) {
                                                // 3 bytes per CC
                                                byteArray.push(expGolombDecoder.readUByte());
                                                byteArray.push(expGolombDecoder.readUByte());
                                                byteArray.push(expGolombDecoder.readUByte());
                                            }
                                            _this._insertSampleInOrder(_this._txtTrack.samples, { type: 3, pts: pes.pts, bytes: byteArray });
                                        }
                                    }
                                }
                            }
                        }
                        else if (payloadSize < expGolombDecoder.bytesAvailable) {
                            for (i = 0; i < payloadSize; i++) {
                                expGolombDecoder.readUByte();
                            }
                        }
                    }
                    break;
                // SPS
                case 7:
                    push = true;
                    spsfound = true;
                    if (debug && avcSample) {
                        avcSample.debug += 'SPS ';
                    }
                    if (!track.sps) {
                        expGolombDecoder = new exp_golomb_reader_1.default(unit.data);
                        var config = expGolombDecoder.readSPS();
                        track.width = config.width;
                        track.height = config.height;
                        track.pixelRatio = config.pixelRatio;
                        track.sps = [unit.data];
                        track.duration = _this._duration;
                        var codecarray = unit.data.subarray(1, 4);
                        var codecstring = 'avc1.';
                        for (i = 0; i < 3; i++) {
                            var h = codecarray[i].toString(16);
                            if (h.length < 2) {
                                h = '0' + h;
                            }
                            codecstring += h;
                        }
                        track.codec = codecstring;
                    }
                    break;
                // PPS
                case 8:
                    push = true;
                    if (debug && avcSample) {
                        avcSample.debug += 'PPS ';
                    }
                    if (!track.pps) {
                        track.pps = [unit.data];
                    }
                    break;
                // AUD
                case 9:
                    push = false;
                    track.audFound = true;
                    if (avcSample) {
                        pushAccesUnit(avcSample, track);
                    }
                    avcSample = _this.avcSample = createAVCSample(false, pes.pts, pes.dts, debug ? 'AUD ' : '');
                    break;
                // Filler Data
                case 12:
                    push = false;
                    break;
                default:
                    push = false;
                    if (avcSample) {
                        avcSample.debug += 'unknown NAL ' + unit.type + ' ';
                    }
                    break;
            }
            if (avcSample && push) {
                var units_1 = avcSample.units;
                units_1.push(unit);
            }
        });
        // if last PES packet, push samples
        if (last && avcSample) {
            pushAccesUnit(avcSample, track);
            this.avcSample = null;
        }
    };
    TSDemuxer.prototype._insertSampleInOrder = function (arr, data) {
        var len = arr.length;
        if (len > 0) {
            if (data.pts >= arr[len - 1].pts) {
                arr.push(data);
            }
            else {
                for (var pos = len - 1; pos >= 0; pos--) {
                    if (data.pts < arr[pos].pts) {
                        arr.splice(pos, 0, data);
                        break;
                    }
                }
            }
        }
        else {
            arr.push(data);
        }
    };
    TSDemuxer.prototype._getLastNalUnit = function () {
        var avcSample = this.avcSample;
        var lastUnit;
        // try to fallback to previous sample if current one is empty
        if (!avcSample || avcSample.units.length === 0) {
            var track = this._avcTrack;
            var samples = track.samples;
            avcSample = samples[samples.length - 1];
        }
        if (avcSample) {
            var units = avcSample.units;
            lastUnit = units[units.length - 1];
        }
        return lastUnit;
    };
    TSDemuxer.prototype._parseAVCNALu = function (array) {
        var i = 0;
        var len = array.byteLength;
        var value;
        var overflow;
        var track = this._avcTrack;
        var state = track.naluState || 0;
        var lastState = state;
        var units = [];
        var unit;
        var unitType;
        var lastUnitStart = -1;
        var lastUnitType;
        // log('PES:' + Hex.hexDump(array));
        if (state === -1) {
            // special use case where we found 3 or 4-byte start codes exactly at the end of previous PES packet
            lastUnitStart = 0;
            // NALu type is value read from offset 0
            lastUnitType = array[0] & 0x1f;
            state = 0;
            i = 1;
        }
        while (i < len) {
            value = array[i++];
            // optimization. state 0 and 1 are the predominant case. let's handle them outside of the switch/case
            if (!state) {
                state = value ? 0 : 1;
                continue;
            }
            if (state === 1) {
                state = value ? 0 : 2;
                continue;
            }
            // here we have state either equal to 2 or 3
            if (!value) {
                state = 3;
            }
            else if (value === 1) {
                if (lastUnitStart >= 0) {
                    unit = { data: array.subarray(lastUnitStart, i - state - 1), type: lastUnitType };
                    // log('pushing NALU, type/size:' + unit.type + '/' + unit.data.byteLength);
                    units.push(unit);
                }
                else {
                    // lastUnitStart is undefined => this is the first start code found in this PES packet
                    // first check if start code delimiter is overlapping between 2 PES packets,
                    // ie it started in last packet (lastState not zero)
                    // and ended at the beginning of this PES packet (i <= 4 - lastState)
                    var lastUnit = this._getLastNalUnit();
                    if (lastUnit) {
                        if (lastState && (i <= 4 - lastState)) {
                            // start delimiter overlapping between PES packets
                            // strip start delimiter bytes from the end of last NAL unit
                            // check if lastUnit had a state different from zero
                            if (lastUnit.state) {
                                // strip last bytes
                                lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState);
                            }
                        }
                        // If NAL units are not starting right at the beginning of the PES packet, push preceding data into previous NAL unit.
                        overflow = i - state - 1;
                        if (overflow > 0) {
                            // log('first NALU found with overflow:' + overflow);
                            var tmp = new Uint8Array(lastUnit.data.byteLength + overflow);
                            tmp.set(lastUnit.data, 0);
                            tmp.set(array.subarray(0, overflow), lastUnit.data.byteLength);
                            lastUnit.data = tmp;
                        }
                    }
                }
                // check if we can read unit type
                if (i < len) {
                    unitType = array[i] & 0x1f;
                    // log('find NALU @ offset:' + i + ',type:' + unitType);
                    lastUnitStart = i;
                    lastUnitType = unitType;
                    state = 0;
                }
                else {
                    // not enough byte to read unit type. let's read it on next PES parsing
                    state = -1;
                }
            }
            else {
                state = 0;
            }
        }
        if (lastUnitStart >= 0 && state >= 0) {
            unit = { data: array.subarray(lastUnitStart, len), type: lastUnitType, state: state };
            units.push(unit);
            // log('pushing NALU, type/size/state:' + unit.type + '/' + unit.data.byteLength + '/' + state);
        }
        // no NALu found
        if (units.length === 0) {
            // append pes.data to previous NAL unit
            var lastUnit = this._getLastNalUnit();
            if (lastUnit) {
                var tmp = new Uint8Array(lastUnit.data.byteLength + array.byteLength);
                tmp.set(lastUnit.data, 0);
                tmp.set(array, lastUnit.data.byteLength);
                lastUnit.data = tmp;
            }
        }
        track.naluState = state;
        return units;
    };
    /**
     * remove Emulation Prevention bytes from a RBSP
     */
    TSDemuxer.prototype.discardEPB = function (data) {
        var length = data.byteLength;
        var EPBPositions = [];
        var i = 1;
        var newLength;
        var newData;
        // Find all `Emulation Prevention Bytes`
        while (i < length - 2) {
            if (data[i] === 0 &&
                data[i + 1] === 0 &&
                data[i + 2] === 0x03) {
                EPBPositions.push(i + 2);
                i += 2;
            }
            else {
                i++;
            }
        }
        // If no Emulation Prevention Bytes were found just return the original
        // array
        if (EPBPositions.length === 0) {
            return data;
        }
        // Create a new array to hold the NAL unit data
        newLength = length - EPBPositions.length;
        newData = new Uint8Array(newLength);
        var sourceIndex = 0;
        for (i = 0; i < newLength; sourceIndex++, i++) {
            if (sourceIndex === EPBPositions[0]) {
                // Skip this byte
                sourceIndex++;
                // Remove this position index
                EPBPositions.shift();
            }
            newData[i] = data[sourceIndex];
        }
        return newData;
    };
    TSDemuxer.prototype._parseAACPES = function (pes) {
        var track = this._audioTrack;
        var data = pes.data;
        var pts = pes.pts;
        var startOffset = 0;
        var aacOverFlow = this.aacOverFlow;
        var aacLastPTS = this.aacLastPTS;
        var frameDuration;
        var frameIndex;
        var offset;
        var stamp;
        var len;
        if (aacOverFlow) {
            var tmp = new Uint8Array(aacOverFlow.byteLength + data.byteLength);
            tmp.set(aacOverFlow, 0);
            tmp.set(data, aacOverFlow.byteLength);
            // log(`AAC: append overflowing ${aacOverFlow.byteLength} bytes to beginning of new PES`);
            data = tmp;
        }
        // look for ADTS header (0xFFFx)
        for (offset = startOffset, len = data.length; offset < len - 1; offset++) {
            if (ADTS.isHeader(data, offset)) {
                break;
            }
        }
        // if ADTS header does not start straight from the beginning of the PES payload, raise an error
        if (offset) {
            var reason = void 0;
            var fatal = void 0;
            if (offset < len - 1) {
                reason = "AAC PES did not start with ADTS header,offset:" + offset;
                fatal = false;
            }
            else {
                reason = 'no ADTS header found in AAC PES';
                fatal = true;
            }
            warn("parsing error:" + reason);
            error({ fatal: fatal, reason: reason });
            if (fatal) {
                return;
            }
        }
        ADTS.initTrackConfig(track, data, offset, null); // FIXME: pass in known audio codec info (mimetype + details) here
        frameIndex = 0;
        frameDuration = ADTS.getFrameDuration(track.samplerate);
        // if last AAC frame is overflowing, we should ensure timestamps are contiguous:
        // first sample PTS should be equal to last sample PTS + frameDuration
        if (aacOverFlow && aacLastPTS) {
            var newPTS = aacLastPTS + frameDuration;
            if (Math.abs(newPTS - pts) > 1) {
                log("AAC: align PTS for overlapping frames by " + Math.round((newPTS - pts) / 90));
                pts = newPTS;
            }
        }
        // scan for aac samples
        while (offset < len) {
            if (ADTS.isHeader(data, offset) && (offset + 5) < len) {
                var frame = ADTS.appendFrame(track, data, offset, pts, frameIndex);
                if (frame) {
                    // log(`${Math.round(frame.sample.pts)} : AAC`);
                    offset += frame.length;
                    stamp = frame.sample.pts;
                    frameIndex++;
                }
                else {
                    // log('Unable to parse AAC frame');
                    break;
                }
            }
            else {
                // nothing found, keep looking
                offset++;
            }
        }
        if (offset < len) {
            aacOverFlow = data.subarray(offset, len);
            // log(`AAC: overflow detected:${len-offset}`);
        }
        else {
            aacOverFlow = null;
        }
        this.aacOverFlow = aacOverFlow;
        this.aacLastPTS = stamp;
    };
    TSDemuxer.prototype._parseMPEGPES = function (pes) {
        var data = pes.data;
        var length = data.length;
        var frameIndex = 0;
        var offset = 0;
        var pts = pes.pts;
        while (offset < length) {
            if (mpeg_audio_parser_1.default.isHeader(data, offset)) {
                var frame = mpeg_audio_parser_1.default.appendFrame(this._audioTrack, data, offset, pts, frameIndex);
                if (frame) {
                    offset += frame.length;
                    frameIndex++;
                }
                else {
                    // log('Unable to parse Mpeg audio frame');
                    break;
                }
            }
            else {
                // nothing found, keep looking
                offset++;
            }
        }
    };
    TSDemuxer.prototype._parseID3PES = function (pes) {
        this._id3Track.samples.push(pes);
    };
    return TSDemuxer;
}());
exports.TSDemuxer = TSDemuxer;
exports.default = TSDemuxer;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *  ADTS parser helper
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getAudioConfig(data, offset, audioCodec) {
    var adtsObjectType;
    // :int
    var adtsSampleingIndex;
    // :int
    var adtsExtensionSampleingIndex;
    // :int
    var adtsChanelConfig;
    // :int
    var config;
    var userAgent = navigator.userAgent.toLowerCase();
    var manifestCodec = audioCodec;
    var adtsSampleingRates = [
        96000, 88200,
        64000, 48000,
        44100, 32000,
        24000, 22050,
        16000, 12000,
        11025, 8000,
        7350
    ];
    // byte 2
    adtsObjectType = ((data[offset + 2] & 0xC0) >>> 6) + 1;
    adtsSampleingIndex = ((data[offset + 2] & 0x3C) >>> 2);
    if (adtsSampleingIndex > adtsSampleingRates.length - 1) {
        // observer.trigger(Event.ERROR, { type: ErrorType.MEDIA_ERROR, details: ErrorDetail.FRAG_PARSING_ERROR, fatal: true, reason: `invalid ADTS sampling index:${adtsSampleingIndex}` });
        console.error('Error in ADTS data');
        return;
    }
    adtsChanelConfig = ((data[offset + 2] & 0x01) << 2);
    // byte 3
    adtsChanelConfig |= ((data[offset + 3] & 0xC0) >>> 6);
    // logger.log(`manifest codec:${audioCodec},ADTS data:type:${adtsObjectType},sampleingIndex:${adtsSampleingIndex}[${adtsSampleingRates[adtsSampleingIndex]}Hz],channelConfig:${adtsChanelConfig}`);
    // firefox: freq less than 24kHz = AAC SBR (HE-AAC)
    if (/firefox/i.test(userAgent)) {
        if (adtsSampleingIndex >= 6) {
            adtsObjectType = 5;
            config = new Array(4);
            // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
            // there is a factor 2 between frame sample rate and output sample rate
            // multiply frequency by 2 (see table below, equivalent to substract 3)
            adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
        }
        else {
            adtsObjectType = 2;
            config = new Array(2);
            adtsExtensionSampleingIndex = adtsSampleingIndex;
        }
        // Android : always use AAC
    }
    else if (userAgent.indexOf('android') !== -1) {
        adtsObjectType = 2;
        config = new Array(2);
        adtsExtensionSampleingIndex = adtsSampleingIndex;
    }
    else {
        /*  for other browsers (Chrome/Vivaldi/Opera ...)
            always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
        */
        adtsObjectType = 5;
        config = new Array(4);
        // if (manifest codec is HE-AAC or HE-AACv2) OR (manifest codec not specified AND frequency less than 24kHz)
        if ((audioCodec && ((audioCodec.indexOf('mp4a.40.29') !== -1) ||
            (audioCodec.indexOf('mp4a.40.5') !== -1))) ||
            (!audioCodec && adtsSampleingIndex >= 6)) {
            // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
            // there is a factor 2 between frame sample rate and output sample rate
            // multiply frequency by 2 (see table below, equivalent to substract 3)
            adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
        }
        else {
            // if (manifest codec is AAC) AND (frequency less than 24kHz AND nb channel is 1) OR (manifest codec not specified and mono audio)
            // Chrome fails to play back with low frequency AAC LC mono when initialized with HE-AAC.  This is not a problem with stereo.
            if (audioCodec && audioCodec.indexOf('mp4a.40.2') !== -1 && ((adtsSampleingIndex >= 6 && adtsChanelConfig === 1) ||
                /vivaldi/i.test(userAgent)) ||
                (!audioCodec && adtsChanelConfig === 1)) {
                adtsObjectType = 2;
                config = new Array(2);
            }
            adtsExtensionSampleingIndex = adtsSampleingIndex;
        }
    }
    /* refer to http://wiki.multimedia.cx/index.php?title=MPEG-4_Audio#Audio_Specific_Config
        ISO 14496-3 (AAC).pdf - Table 1.13 — Syntax of AudioSpecificConfig()
      Audio Profile / Audio Object Type
      0: Null
      1: AAC Main
      2: AAC LC (Low Complexity)
      3: AAC SSR (Scalable Sample Rate)
      4: AAC LTP (Long Term Prediction)
      5: SBR (Spectral Band Replication)
      6: AAC Scalable
     sampling freq
      0: 96000 Hz
      1: 88200 Hz
      2: 64000 Hz
      3: 48000 Hz
      4: 44100 Hz
      5: 32000 Hz
      6: 24000 Hz
      7: 22050 Hz
      8: 16000 Hz
      9: 12000 Hz
      10: 11025 Hz
      11: 8000 Hz
      12: 7350 Hz
      13: Reserved
      14: Reserved
      15: frequency is written explictly
      Channel Configurations
      These are the channel configurations:
      0: Defined in AOT Specifc Config
      1: 1 channel: front-center
      2: 2 channels: front-left, front-right
    */
    // audioObjectType = profile => profile, the MPEG-4 Audio Object Type minus 1
    config[0] = adtsObjectType << 3;
    // samplingFrequencyIndex
    config[0] |= (adtsSampleingIndex & 0x0E) >> 1;
    config[1] |= (adtsSampleingIndex & 0x01) << 7;
    // channelConfiguration
    config[1] |= adtsChanelConfig << 3;
    if (adtsObjectType === 5) {
        // adtsExtensionSampleingIndex
        config[1] |= (adtsExtensionSampleingIndex & 0x0E) >> 1;
        config[2] = (adtsExtensionSampleingIndex & 0x01) << 7;
        // adtsObjectType (force to 2, chrome is checking that object type is less than 5 ???
        //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc
        config[2] |= 2 << 2;
        config[3] = 0;
    }
    return { config: config, samplerate: adtsSampleingRates[adtsSampleingIndex], channelCount: adtsChanelConfig, codec: ('mp4a.40.' + adtsObjectType), manifestCodec: manifestCodec };
}
exports.getAudioConfig = getAudioConfig;
function isHeaderPattern(data, offset) {
    return data[offset] === 0xff && (data[offset + 1] & 0xf6) === 0xf0;
}
exports.isHeaderPattern = isHeaderPattern;
function getHeaderLength(data, offset) {
    return (data[offset + 1] & 0x01 ? 7 : 9);
}
exports.getHeaderLength = getHeaderLength;
function getFullFrameLength(data, offset) {
    return ((data[offset + 3] & 0x03) << 11) |
        (data[offset + 4] << 3) |
        ((data[offset + 5] & 0xE0) >>> 5);
}
exports.getFullFrameLength = getFullFrameLength;
function isHeader(data, offset) {
    // Look for ADTS header | 1111 1111 | 1111 X00X | where X can be either 0 or 1
    // Layer bits (position 14 and 15) in header should be always 0 for ADTS
    // More info https://wiki.multimedia.cx/index.php?title=ADTS
    if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
        return true;
    }
    return false;
}
exports.isHeader = isHeader;
function probe(data, offset) {
    // same as isHeader but we also check that ADTS frame follows last ADTS frame
    // or end of data is reached
    if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
        // ADTS header Length
        var headerLength = getHeaderLength(data, offset);
        // ADTS frame Length
        var frameLength = headerLength;
        if (offset + 5 < data.length) {
            frameLength = getFullFrameLength(data, offset);
        }
        var newOffset = offset + frameLength;
        if (newOffset === data.length || (newOffset + 1 < data.length && isHeaderPattern(data, newOffset))) {
            return true;
        }
    }
    return false;
}
exports.probe = probe;
function initTrackConfig(track, data, offset, audioCodec) {
    if (!track.samplerate) {
        var config = getAudioConfig(data, offset, audioCodec);
        track.config = config.config;
        track.samplerate = config.samplerate;
        track.channelCount = config.channelCount;
        track.codec = config.codec;
        track.manifestCodec = config.manifestCodec;
        // logger.log(`parsed codec:${track.codec},rate:${config.samplerate},nb channel:${config.channelCount}`);
    }
}
exports.initTrackConfig = initTrackConfig;
function getFrameDuration(samplerate) {
    return 1024 * 90000 / samplerate;
}
exports.getFrameDuration = getFrameDuration;
function parseFrameHeader(data, offset, pts, frameIndex, frameDuration) {
    var headerLength;
    var frameLength;
    var stamp;
    var length = data.length;
    // The protection skip bit tells us if we have 2 bytes of CRC data at the end of the ADTS header
    headerLength = getHeaderLength(data, offset);
    // retrieve frame size
    frameLength = getFullFrameLength(data, offset);
    frameLength -= headerLength;
    if ((frameLength > 0) && ((offset + headerLength + frameLength) <= length)) {
        stamp = pts + frameIndex * frameDuration;
        // logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
        return { headerLength: headerLength, frameLength: frameLength, stamp: stamp };
    }
    return undefined;
}
exports.parseFrameHeader = parseFrameHeader;
function appendFrame(track, data, offset, pts, frameIndex) {
    var frameDuration = getFrameDuration(track.samplerate);
    var header = parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
    if (header) {
        var stamp = header.stamp;
        var headerLength = header.headerLength;
        var frameLength = header.frameLength;
        // logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
        var aacSample = {
            unit: data.subarray(offset + headerLength, offset + headerLength + frameLength),
            pts: stamp,
            dts: stamp
        };
        track.samples.push(aacSample);
        track.len += frameLength;
        return { sample: aacSample, length: frameLength + headerLength };
    }
    return undefined;
}
exports.appendFrame = appendFrame;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *  MPEG parser helper
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MpegAudio = {
    BitratesMap: [
        32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448,
        32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384,
        32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
        32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256,
        8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160
    ],
    SamplingRateMap: [44100, 48000, 32000, 22050, 24000, 16000, 11025, 12000, 8000],
    SamplesCoefficients: [
        // MPEG 2.5
        [
            0,
            72,
            144,
            12 // Layer1
        ],
        // Reserved
        [
            0,
            0,
            0,
            0 // Layer1
        ],
        // MPEG 2
        [
            0,
            72,
            144,
            12 // Layer1
        ],
        // MPEG 1
        [
            0,
            144,
            144,
            12 // Layer1
        ]
    ],
    BytesInSlot: [
        0,
        1,
        1,
        4 // Layer1
    ],
    appendFrame: function (track, data, offset, pts, frameIndex) {
        // Using http://www.datavoyage.com/mpgscript/mpeghdr.htm as a reference
        if (offset + 24 > data.length) {
            return undefined;
        }
        var header = this.parseHeader(data, offset);
        if (header && offset + header.frameLength <= data.length) {
            var frameDuration = header.samplesPerFrame * 90000 / header.sampleRate;
            var stamp = pts + frameIndex * frameDuration;
            var sample = { unit: data.subarray(offset, offset + header.frameLength), pts: stamp, dts: stamp };
            track.config = [];
            track.channelCount = header.channelCount;
            track.samplerate = header.sampleRate;
            track.samples.push(sample);
            track.len += header.frameLength;
            return { sample: sample, length: header.frameLength };
        }
        return undefined;
    },
    parseHeader: function (data, offset) {
        var headerB = (data[offset + 1] >> 3) & 3;
        var headerC = (data[offset + 1] >> 1) & 3;
        var headerE = (data[offset + 2] >> 4) & 15;
        var headerF = (data[offset + 2] >> 2) & 3;
        var headerG = (data[offset + 2] >> 1) & 1;
        if (headerB !== 1 && headerE !== 0 && headerE !== 15 && headerF !== 3) {
            var columnInBitrates = headerB === 3 ? (3 - headerC) : (headerC === 3 ? 3 : 4);
            var bitRate = MpegAudio.BitratesMap[columnInBitrates * 14 + headerE - 1] * 1000;
            var columnInSampleRates = headerB === 3 ? 0 : headerB === 2 ? 1 : 2;
            var sampleRate = MpegAudio.SamplingRateMap[columnInSampleRates * 3 + headerF];
            var channelCount = data[offset + 3] >> 6 === 3 ? 1 : 2; // If bits of channel mode are `11` then it is a single channel (Mono)
            var sampleCoefficient = MpegAudio.SamplesCoefficients[headerB][headerC];
            var bytesInSlot = MpegAudio.BytesInSlot[headerC];
            var samplesPerFrame = sampleCoefficient * 8 * bytesInSlot;
            var frameLength = parseInt(sampleCoefficient * bitRate / sampleRate + headerG, 10) * bytesInSlot;
            return { sampleRate: sampleRate, channelCount: channelCount, frameLength: frameLength, samplesPerFrame: samplesPerFrame };
        }
        return undefined;
    },
    isHeaderPattern: function (data, offset) {
        return data[offset] === 0xff && (data[offset + 1] & 0xe0) === 0xe0 && (data[offset + 1] & 0x06) !== 0x00;
    },
    isHeader: function (data, offset) {
        // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
        // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
        // More info http://www.mp3-tech.org/programmer/frame_header.html
        if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
            return true;
        }
        return false;
    },
    probe: function (data, offset) {
        // same as isHeader but we also check that MPEG frame follows last MPEG frame
        // or end of data is reached
        if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
            // MPEG header Length
            var headerLength = 4;
            // MPEG frame Length
            var header = this.parseHeader(data, offset);
            var frameLength = headerLength;
            if (header && header.frameLength) {
                frameLength = header.frameLength;
            }
            var newOffset = offset + frameLength;
            if (newOffset === data.length || (newOffset + 1 < data.length && this.isHeaderPattern(data, newOffset))) {
                return true;
            }
        }
        return false;
    }
};
exports.default = MpegAudio;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ExpGolomb = /** @class */ (function () {
    function ExpGolomb(data) {
        this.data = data;
        // the number of bytes left to examine in this.data
        this.bytesAvailable = data.byteLength;
        // the current word being examined
        this.word = 0; // :uint
        // the number of bits left to examine in the current word
        this.bitsAvailable = 0; // :uint
    }
    // ():void
    ExpGolomb.prototype.loadWord = function () {
        var data = this.data;
        var bytesAvailable = this.bytesAvailable;
        var position = data.byteLength - bytesAvailable;
        var workingBytes = new Uint8Array(4);
        var availableBytes = Math.min(4, bytesAvailable);
        if (availableBytes === 0) {
            throw new Error('no bytes available');
        }
        workingBytes.set(data.subarray(position, position + availableBytes));
        this.word = new DataView(workingBytes.buffer).getUint32(0);
        // track the amount of this.data that has been processed
        this.bitsAvailable = availableBytes * 8;
        this.bytesAvailable -= availableBytes;
    };
    // (count:int):void
    ExpGolomb.prototype.skipBits = function (count) {
        var skipBytes; // :int
        if (this.bitsAvailable > count) {
            this.word <<= count;
            this.bitsAvailable -= count;
        }
        else {
            count -= this.bitsAvailable;
            skipBytes = count >> 3;
            count -= (skipBytes >> 3);
            this.bytesAvailable -= skipBytes;
            this.loadWord();
            this.word <<= count;
            this.bitsAvailable -= count;
        }
    };
    // (size:int):uint
    ExpGolomb.prototype.readBits = function (size) {
        var bits = Math.min(this.bitsAvailable, size);
        // :uint
        var valu = this.word >>> (32 - bits); // :uint
        if (size > 32) {
            console.error('Cannot read more than 32 bits at a time');
        }
        this.bitsAvailable -= bits;
        if (this.bitsAvailable > 0) {
            this.word <<= bits;
        }
        else if (this.bytesAvailable > 0) {
            this.loadWord();
        }
        bits = size - bits;
        if (bits > 0 && this.bitsAvailable) {
            return valu << bits | this.readBits(bits);
        }
        else {
            return valu;
        }
    };
    // ():uint
    ExpGolomb.prototype.skipLZ = function () {
        var leadingZeroCount; // :uint
        for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
            if ((this.word & (0x80000000 >>> leadingZeroCount)) !== 0) {
                // the first bit of working word is 1
                this.word <<= leadingZeroCount;
                this.bitsAvailable -= leadingZeroCount;
                return leadingZeroCount;
            }
        }
        // we exhausted word and still have not found a 1
        this.loadWord();
        return leadingZeroCount + this.skipLZ();
    };
    // ():void
    ExpGolomb.prototype.skipUEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    // ():void
    ExpGolomb.prototype.skipEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    // ():uint
    ExpGolomb.prototype.readUEG = function () {
        var clz = this.skipLZ(); // :uint
        return this.readBits(clz + 1) - 1;
    };
    // ():int
    ExpGolomb.prototype.readEG = function () {
        var valu = this.readUEG(); // :int
        if (0x01 & valu) {
            // the number is odd if the low order bit is set
            return (1 + valu) >>> 1; // add 1 to make it even, and divide by 2
        }
        else {
            return -1 * (valu >>> 1); // divide by two then make it negative
        }
    };
    // Some convenience functions
    // :Boolean
    ExpGolomb.prototype.readBoolean = function () {
        return this.readBits(1) === 1;
    };
    // ():int
    ExpGolomb.prototype.readUByte = function () {
        return this.readBits(8);
    };
    // ():int
    ExpGolomb.prototype.readUShort = function () {
        return this.readBits(16);
    };
    // ():int
    ExpGolomb.prototype.readUInt = function () {
        return this.readBits(32);
    };
    /**
     * Advance the ExpGolomb decoder past a scaling list. The scaling
     * list is optionally transmitted as part of a sequence parameter
     * set and is not relevant to transmuxing.
    count {number} the number of entries in this scaling list
     * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
     */
    ExpGolomb.prototype.skipScalingList = function (count) {
        var lastScale = 8;
        var nextScale = 8;
        var j;
        var deltaScale;
        for (j = 0; j < count; j++) {
            if (nextScale !== 0) {
                deltaScale = this.readEG();
                nextScale = (lastScale + deltaScale + 256) % 256;
            }
            lastScale = (nextScale === 0) ? lastScale : nextScale;
        }
    };
    /**
     * Read a sequence parameter set and return some interesting video
     * properties. A sequence parameter set is the H264 metadata that
     * describes the properties of upcoming video frames.
    data {Uint8Array} the bytes of a sequence parameter set
    {object} an object with configuration parsed from the
     * sequence parameter set, including the dimensions of the
     * associated video frames.
     */
    ExpGolomb.prototype.readSPS = function () {
        var frameCropLeftOffset = 0;
        var frameCropRightOffset = 0;
        var frameCropTopOffset = 0;
        var frameCropBottomOffset = 0;
        var profileIdc;
        var profileCompat;
        var levelIdc;
        var numRefFramesInPicOrderCntCycle;
        var picWidthInMbsMinus1;
        var picHeightInMapUnitsMinus1;
        var frameMbsOnlyFlag;
        var scalingListCount;
        var i;
        var readUByte = this.readUByte.bind(this);
        var readBits = this.readBits.bind(this);
        var readUEG = this.readUEG.bind(this);
        var readBoolean = this.readBoolean.bind(this);
        var skipBits = this.skipBits.bind(this);
        var skipEG = this.skipEG.bind(this);
        var skipUEG = this.skipUEG.bind(this);
        var skipScalingList = this.skipScalingList.bind(this);
        readUByte();
        profileIdc = readUByte(); // profile_idc
        profileCompat = readBits(5); // constraint_set[0-4]_flag, u(5)
        skipBits(3); // reserved_zero_3bits u(3),
        levelIdc = readUByte(); // level_idc u(8)
        skipUEG(); // seq_parameter_set_id
        // some profiles have more optional data we don't need
        if (profileIdc === 100 ||
            profileIdc === 110 ||
            profileIdc === 122 ||
            profileIdc === 244 ||
            profileIdc === 44 ||
            profileIdc === 83 ||
            profileIdc === 86 ||
            profileIdc === 118 ||
            profileIdc === 128) {
            var chromaFormatIdc = readUEG();
            if (chromaFormatIdc === 3) {
                skipBits(1);
            } // separate_colour_plane_flag
            skipUEG(); // bit_depth_luma_minus8
            skipUEG(); // bit_depth_chroma_minus8
            skipBits(1); // qpprime_y_zero_transform_bypass_flag
            if (readBoolean()) { // seq_scaling_matrix_present_flag
                scalingListCount = (chromaFormatIdc !== 3) ? 8 : 12;
                for (i = 0; i < scalingListCount; i++) {
                    if (readBoolean()) { // seq_scaling_list_present_flag[ i ]
                        if (i < 6) {
                            skipScalingList(16);
                        }
                        else {
                            skipScalingList(64);
                        }
                    }
                }
            }
        }
        skipUEG(); // log2_max_frame_num_minus4
        var picOrderCntType = readUEG();
        if (picOrderCntType === 0) {
            readUEG(); // log2_max_pic_order_cnt_lsb_minus4
        }
        else if (picOrderCntType === 1) {
            skipBits(1); // delta_pic_order_always_zero_flag
            skipEG(); // offset_for_non_ref_pic
            skipEG(); // offset_for_top_to_bottom_field
            numRefFramesInPicOrderCntCycle = readUEG();
            for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
                skipEG();
            } // offset_for_ref_frame[ i ]
        }
        skipUEG(); // max_num_ref_frames
        skipBits(1); // gaps_in_frame_num_value_allowed_flag
        picWidthInMbsMinus1 = readUEG();
        picHeightInMapUnitsMinus1 = readUEG();
        frameMbsOnlyFlag = readBits(1);
        if (frameMbsOnlyFlag === 0) {
            skipBits(1);
        } // mb_adaptive_frame_field_flag
        skipBits(1); // direct_8x8_inference_flag
        if (readBoolean()) { // frame_cropping_flag
            frameCropLeftOffset = readUEG();
            frameCropRightOffset = readUEG();
            frameCropTopOffset = readUEG();
            frameCropBottomOffset = readUEG();
        }
        var pixelRatio = [1, 1];
        if (readBoolean()) {
            // vui_parameters_present_flag
            if (readBoolean()) {
                // aspect_ratio_info_present_flag
                var aspectRatioIdc = readUByte();
                switch (aspectRatioIdc) {
                    case 1:
                        pixelRatio = [1, 1];
                        break;
                    case 2:
                        pixelRatio = [12, 11];
                        break;
                    case 3:
                        pixelRatio = [10, 11];
                        break;
                    case 4:
                        pixelRatio = [16, 11];
                        break;
                    case 5:
                        pixelRatio = [40, 33];
                        break;
                    case 6:
                        pixelRatio = [24, 11];
                        break;
                    case 7:
                        pixelRatio = [20, 11];
                        break;
                    case 8:
                        pixelRatio = [32, 11];
                        break;
                    case 9:
                        pixelRatio = [80, 33];
                        break;
                    case 10:
                        pixelRatio = [18, 11];
                        break;
                    case 11:
                        pixelRatio = [15, 11];
                        break;
                    case 12:
                        pixelRatio = [64, 33];
                        break;
                    case 13:
                        pixelRatio = [160, 99];
                        break;
                    case 14:
                        pixelRatio = [4, 3];
                        break;
                    case 15:
                        pixelRatio = [3, 2];
                        break;
                    case 16:
                        pixelRatio = [2, 1];
                        break;
                    case 255: {
                        pixelRatio = [readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte()];
                        break;
                    }
                }
            }
        }
        return {
            width: Math.ceil((((picWidthInMbsMinus1 + 1) * 16) - frameCropLeftOffset * 2 - frameCropRightOffset * 2)),
            height: ((2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16) - ((frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset)),
            pixelRatio: pixelRatio
        };
    };
    ExpGolomb.prototype.readSliceType = function () {
        // skip NALu type
        this.readUByte();
        // discard first_mb_in_slice
        this.readUEG();
        // return slice_type
        return this.readUEG();
    };
    return ExpGolomb;
}());
exports.default = ExpGolomb;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * SAMPLE-AES decrypter
*/
Object.defineProperty(exports, "__esModule", { value: true });
var decrypter_1 = __webpack_require__(23);
var SampleAesDecrypter = /** @class */ (function () {
    function SampleAesDecrypter(observer, config, decryptdata, discardEPB) {
        this.decryptdata = decryptdata;
        this.discardEPB = discardEPB;
        this.decrypter = new decrypter_1.default(observer, config, { removePKCS7Padding: false });
    }
    SampleAesDecrypter.prototype.decryptBuffer = function (encryptedData, callback) {
        this.decrypter.decrypt(encryptedData, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, callback);
    };
    // AAC - encrypt all full 16 bytes blocks starting from offset 16
    SampleAesDecrypter.prototype.decryptAacSample = function (samples, sampleIndex, callback, sync) {
        var curUnit = samples[sampleIndex].unit;
        var encryptedData = curUnit.subarray(16, curUnit.length - curUnit.length % 16);
        var encryptedBuffer = encryptedData.buffer.slice(encryptedData.byteOffset, encryptedData.byteOffset + encryptedData.length);
        var localthis = this;
        this.decryptBuffer(encryptedBuffer, function (decryptedData) {
            decryptedData = new Uint8Array(decryptedData);
            curUnit.set(decryptedData, 16);
            if (!sync) {
                localthis.decryptAacSamples(samples, sampleIndex + 1, callback);
            }
        });
    };
    SampleAesDecrypter.prototype.decryptAacSamples = function (samples, sampleIndex, callback) {
        for (;; sampleIndex++) {
            if (sampleIndex >= samples.length) {
                callback();
                return;
            }
            if (samples[sampleIndex].unit.length < 32) {
                continue;
            }
            var sync = this.decrypter.isSync();
            this.decryptAacSample(samples, sampleIndex, callback, sync);
            if (!sync) {
                return;
            }
        }
    };
    // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
    SampleAesDecrypter.prototype.getAvcEncryptedData = function (decodedData) {
        var encryptedDataLen = Math.floor((decodedData.length - 48) / 160) * 16 + 16;
        var encryptedData = new Int8Array(encryptedDataLen);
        var outputPos = 0;
        for (var inputPos = 32; inputPos <= decodedData.length - 16; inputPos += 160, outputPos += 16) {
            encryptedData.set(decodedData.subarray(inputPos, inputPos + 16), outputPos);
        }
        return encryptedData;
    };
    SampleAesDecrypter.prototype.getAvcDecryptedUnit = function (decodedData, decryptedData) {
        decryptedData = new Uint8Array(decryptedData);
        var inputPos = 0;
        for (var outputPos = 32; outputPos <= decodedData.length - 16; outputPos += 160, inputPos += 16) {
            decodedData.set(decryptedData.subarray(inputPos, inputPos + 16), outputPos);
        }
        return decodedData;
    };
    SampleAesDecrypter.prototype.decryptAvcSample = function (samples, sampleIndex, unitIndex, callback, curUnit, sync) {
        var decodedData = this.discardEPB(curUnit.data);
        var encryptedData = this.getAvcEncryptedData(decodedData);
        var localthis = this;
        this.decryptBuffer(encryptedData.buffer, function (decryptedData) {
            curUnit.data = localthis.getAvcDecryptedUnit(decodedData, decryptedData);
            if (!sync) {
                localthis.decryptAvcSamples(samples, sampleIndex, unitIndex + 1, callback);
            }
        });
    };
    SampleAesDecrypter.prototype.decryptAvcSamples = function (samples, sampleIndex, unitIndex, callback) {
        for (;; sampleIndex++, unitIndex = 0) {
            if (sampleIndex >= samples.length) {
                callback();
                return;
            }
            var curUnits = samples[sampleIndex].units;
            for (;; unitIndex++) {
                if (unitIndex >= curUnits.length) {
                    break;
                }
                var curUnit = curUnits[unitIndex];
                if (curUnit.length <= 48 || (curUnit.type !== 1 && curUnit.type !== 5)) {
                    continue;
                }
                var sync = this.decrypter.isSync();
                this.decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync);
                if (!sync) {
                    return;
                }
            }
        }
    };
    return SampleAesDecrypter;
}());
exports.default = SampleAesDecrypter;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aes_crypto_1 = __webpack_require__(24);
var fast_aes_key_1 = __webpack_require__(25);
var aes_decryptor_1 = __webpack_require__(26);
var Decrypter = /** @class */ (function () {
    function Decrypter(observer, config, _a) {
        var _b = (_a === void 0 ? {} : _a).removePKCS7Padding, removePKCS7Padding = _b === void 0 ? true : _b;
        this.logEnabled = true;
        this.observer = observer;
        this.config = config;
        this.removePKCS7Padding = removePKCS7Padding;
        // built in decryptor expects PKCS7 padding
        if (removePKCS7Padding) {
            try {
                var browserCrypto = self.crypto;
                if (browserCrypto) {
                    this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
                }
            }
            catch (e) { }
        }
        this.disableWebCrypto = !this.subtle;
    }
    Decrypter.prototype.isSync = function () {
        return (this.disableWebCrypto && this.config.enableSoftwareAES);
    };
    Decrypter.prototype.decrypt = function (data, key, iv, callback) {
        var _this = this;
        if (this.disableWebCrypto && this.config.enableSoftwareAES) {
            if (this.logEnabled) {
                this.logEnabled = false;
            }
            var decryptor = this.decryptor;
            if (!decryptor) {
                this.decryptor = decryptor = new aes_decryptor_1.default();
            }
            decryptor.expandKey(key);
            callback(decryptor.decrypt(data, 0, iv, this.removePKCS7Padding));
        }
        else {
            if (this.logEnabled) {
                this.logEnabled = false;
            }
            var subtle_1 = this.subtle;
            if (this.key !== key) {
                this.key = key;
                this.fastAesKey = new fast_aes_key_1.default(subtle_1, key);
            }
            this.fastAesKey.expandKey()
                .then(function (aesKey) {
                // decrypt using web crypto
                var crypto = new aes_crypto_1.default(subtle_1, iv);
                crypto.decrypt(data, aesKey)
                    .catch(function (err) {
                    _this.onWebCryptoError(err, data, key, iv, callback);
                })
                    .then(function (result) {
                    callback(result);
                });
            })
                .catch(function (err) {
                _this.onWebCryptoError(err, data, key, iv, callback);
            });
        }
    };
    Decrypter.prototype.onWebCryptoError = function (err, data, key, iv, callback) {
        if (this.config.enableSoftwareAES) {
            logger.log('WebCrypto Error, disable WebCrypto API');
            this.disableWebCrypto = true;
            this.logEnabled = true;
            this.decrypt(data, key, iv, callback);
        }
        else {
            logger.error("decrypting error : " + err.message);
            console.error({ fatal: true, reason: err.message });
        }
    };
    Decrypter.prototype.destroy = function () {
        var decryptor = this.decryptor;
        if (decryptor) {
            decryptor.destroy();
            this.decryptor = undefined;
        }
    };
    return Decrypter;
}());
exports.default = Decrypter;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AESCrypto = /** @class */ (function () {
    function AESCrypto(subtle, iv) {
        this.subtle = subtle;
        this.aesIV = iv;
    }
    AESCrypto.prototype.decrypt = function (data, key) {
        return this.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, key, data);
    };
    return AESCrypto;
}());
exports.default = AESCrypto;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FastAESKey = /** @class */ (function () {
    function FastAESKey(subtle, key) {
        this.subtle = subtle;
        this.key = key;
    }
    FastAESKey.prototype.expandKey = function () {
        return this.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
    };
    return FastAESKey;
}());
exports.default = FastAESKey;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// PKCS7
function removePadding(buffer) {
    var outputBytes = buffer.byteLength;
    var paddingBytes = outputBytes && (new DataView(buffer)).getUint8(outputBytes - 1);
    if (paddingBytes) {
        return buffer.slice(0, outputBytes - paddingBytes);
    }
    else {
        return buffer;
    }
}
exports.removePadding = removePadding;
var AESDecryptor = /** @class */ (function () {
    function AESDecryptor() {
        // Static after running initTable
        this.rcon = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
        this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
        this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
        this.sBox = new Uint32Array(256);
        this.invSBox = new Uint32Array(256);
        // Changes during runtime
        this.key = new Uint32Array(0);
        this.initTable();
    }
    // Using view.getUint32() also swaps the byte order.
    AESDecryptor.prototype.uint8ArrayToUint32Array_ = function (arrayBuffer) {
        var view = new DataView(arrayBuffer);
        var newArray = new Uint32Array(4);
        for (var i_1 = 0; i_1 < 4; i_1++) {
            newArray[i_1] = view.getUint32(i_1 * 4);
        }
        return newArray;
    };
    AESDecryptor.prototype.initTable = function () {
        var sBox = this.sBox;
        var invSBox = this.invSBox;
        var subMix = this.subMix;
        var subMix0 = subMix[0];
        var subMix1 = subMix[1];
        var subMix2 = subMix[2];
        var subMix3 = subMix[3];
        var invSubMix = this.invSubMix;
        var invSubMix0 = invSubMix[0];
        var invSubMix1 = invSubMix[1];
        var invSubMix2 = invSubMix[2];
        var invSubMix3 = invSubMix[3];
        var d = new Uint32Array(256);
        var x = 0;
        var xi = 0;
        var i = 0;
        for (i = 0; i < 256; i++) {
            if (i < 128) {
                d[i] = i << 1;
            }
            else {
                d[i] = (i << 1) ^ 0x11b;
            }
        }
        for (i = 0; i < 256; i++) {
            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
            sBox[x] = sx;
            invSBox[sx] = x;
            // Compute multiplication
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            // Compute sub/invSub bytes, mix columns tables
            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
            subMix0[x] = (t << 24) | (t >>> 8);
            subMix1[x] = (t << 16) | (t >>> 16);
            subMix2[x] = (t << 8) | (t >>> 24);
            subMix3[x] = t;
            // Compute inv sub bytes, inv mix columns tables
            t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
            invSubMix0[sx] = (t << 24) | (t >>> 8);
            invSubMix1[sx] = (t << 16) | (t >>> 16);
            invSubMix2[sx] = (t << 8) | (t >>> 24);
            invSubMix3[sx] = t;
            // Compute next counter
            if (!x) {
                x = xi = 1;
            }
            else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
            }
        }
    };
    AESDecryptor.prototype.expandKey = function (keyBuffer) {
        // convert keyBuffer to Uint32Array
        var key = this.uint8ArrayToUint32Array_(keyBuffer);
        var sameKey = true;
        var offset = 0;
        while (offset < key.length && sameKey) {
            sameKey = (key[offset] === this.key[offset]);
            offset++;
        }
        if (sameKey) {
            return;
        }
        this.key = key;
        var keySize = this.keySize = key.length;
        if (keySize !== 4 && keySize !== 6 && keySize !== 8) {
            throw new Error('Invalid aes key size=' + keySize);
        }
        var ksRows = this.ksRows = (keySize + 6 + 1) * 4;
        var ksRow;
        var invKsRow;
        var keySchedule = this.keySchedule = new Uint32Array(ksRows);
        var invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows);
        var sbox = this.sBox;
        var rcon = this.rcon;
        var invSubMix = this.invSubMix;
        var invSubMix0 = invSubMix[0];
        var invSubMix1 = invSubMix[1];
        var invSubMix2 = invSubMix[2];
        var invSubMix3 = invSubMix[3];
        var prev;
        var t;
        for (ksRow = 0; ksRow < ksRows; ksRow++) {
            if (ksRow < keySize) {
                prev = keySchedule[ksRow] = key[ksRow];
                continue;
            }
            t = prev;
            if (ksRow % keySize === 0) {
                // Rot word
                t = (t << 8) | (t >>> 24);
                // Sub word
                t = (sbox[t >>> 24] << 24) | (sbox[(t >>> 16) & 0xff] << 16) | (sbox[(t >>> 8) & 0xff] << 8) | sbox[t & 0xff];
                // Mix Rcon
                t ^= rcon[(ksRow / keySize) | 0] << 24;
            }
            else if (keySize > 6 && ksRow % keySize === 4) {
                // Sub word
                t = (sbox[t >>> 24] << 24) | (sbox[(t >>> 16) & 0xff] << 16) | (sbox[(t >>> 8) & 0xff] << 8) | sbox[t & 0xff];
            }
            keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0;
        }
        for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
            ksRow = ksRows - invKsRow;
            if (invKsRow & 3) {
                t = keySchedule[ksRow];
            }
            else {
                t = keySchedule[ksRow - 4];
            }
            if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
            }
            else {
                invKeySchedule[invKsRow] = invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[(t >>> 16) & 0xff]] ^ invSubMix2[sbox[(t >>> 8) & 0xff]] ^ invSubMix3[sbox[t & 0xff]];
            }
            invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
        }
    };
    // Adding this as a method greatly improves performance.
    AESDecryptor.prototype.networkToHostOrderSwap = function (word) {
        return (word << 24) | ((word & 0xff00) << 8) | ((word & 0xff0000) >> 8) | (word >>> 24);
    };
    AESDecryptor.prototype.decrypt = function (inputArrayBuffer, offset, aesIV, removePKCS7Padding) {
        var nRounds = this.keySize + 6;
        var invKeySchedule = this.invKeySchedule;
        var invSBOX = this.invSBox;
        var invSubMix = this.invSubMix;
        var invSubMix0 = invSubMix[0];
        var invSubMix1 = invSubMix[1];
        var invSubMix2 = invSubMix[2];
        var invSubMix3 = invSubMix[3];
        var initVector = this.uint8ArrayToUint32Array_(aesIV);
        var initVector0 = initVector[0];
        var initVector1 = initVector[1];
        var initVector2 = initVector[2];
        var initVector3 = initVector[3];
        var inputInt32 = new Int32Array(inputArrayBuffer);
        var outputInt32 = new Int32Array(inputInt32.length);
        var t0;
        var t1;
        var t2;
        var t3;
        var s0;
        var s1;
        var s2;
        var s3;
        var inputWords0;
        var inputWords1;
        var inputWords2;
        var inputWords3;
        var ksRow;
        var i;
        var swapWord = this.networkToHostOrderSwap;
        while (offset < inputInt32.length) {
            inputWords0 = swapWord(inputInt32[offset]);
            inputWords1 = swapWord(inputInt32[offset + 1]);
            inputWords2 = swapWord(inputInt32[offset + 2]);
            inputWords3 = swapWord(inputInt32[offset + 3]);
            s0 = inputWords0 ^ invKeySchedule[0];
            s1 = inputWords3 ^ invKeySchedule[1];
            s2 = inputWords2 ^ invKeySchedule[2];
            s3 = inputWords1 ^ invKeySchedule[3];
            ksRow = 4;
            // Iterate through the rounds of decryption
            for (i = 1; i < nRounds; i++) {
                t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[(s1 >> 16) & 0xff] ^ invSubMix2[(s2 >> 8) & 0xff] ^ invSubMix3[s3 & 0xff] ^ invKeySchedule[ksRow];
                t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[(s2 >> 16) & 0xff] ^ invSubMix2[(s3 >> 8) & 0xff] ^ invSubMix3[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
                t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[(s3 >> 16) & 0xff] ^ invSubMix2[(s0 >> 8) & 0xff] ^ invSubMix3[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
                t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[(s0 >> 16) & 0xff] ^ invSubMix2[(s1 >> 8) & 0xff] ^ invSubMix3[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
                ksRow = ksRow + 4;
            }
            // Shift rows, sub bytes, add round key
            t0 = ((invSBOX[s0 >>> 24] << 24) ^ (invSBOX[(s1 >> 16) & 0xff] << 16) ^ (invSBOX[(s2 >> 8) & 0xff] << 8) ^ invSBOX[s3 & 0xff]) ^ invKeySchedule[ksRow];
            t1 = ((invSBOX[s1 >>> 24] << 24) ^ (invSBOX[(s2 >> 16) & 0xff] << 16) ^ (invSBOX[(s3 >> 8) & 0xff] << 8) ^ invSBOX[s0 & 0xff]) ^ invKeySchedule[ksRow + 1];
            t2 = ((invSBOX[s2 >>> 24] << 24) ^ (invSBOX[(s3 >> 16) & 0xff] << 16) ^ (invSBOX[(s0 >> 8) & 0xff] << 8) ^ invSBOX[s1 & 0xff]) ^ invKeySchedule[ksRow + 2];
            t3 = ((invSBOX[s3 >>> 24] << 24) ^ (invSBOX[(s0 >> 16) & 0xff] << 16) ^ (invSBOX[(s1 >> 8) & 0xff] << 8) ^ invSBOX[s2 & 0xff]) ^ invKeySchedule[ksRow + 3];
            ksRow = ksRow + 3;
            // Write
            outputInt32[offset] = swapWord(t0 ^ initVector0);
            outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
            outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
            outputInt32[offset + 3] = swapWord(t1 ^ initVector3);
            // reset initVector to last 4 unsigned int
            initVector0 = inputWords0;
            initVector1 = inputWords1;
            initVector2 = inputWords2;
            initVector3 = inputWords3;
            offset = offset + 4;
        }
        return removePKCS7Padding ? removePadding(outputInt32.buffer) : outputInt32.buffer;
    };
    AESDecryptor.prototype.destroy = function () {
        this.key = undefined;
        this.keySize = undefined;
        this.ksRows = undefined;
        this.sBox = undefined;
        this.invSBox = undefined;
        this.subMix = undefined;
        this.invSubMix = undefined;
        this.keySchedule = undefined;
        this.invKeySchedule = undefined;
        this.rcon = undefined;
    };
    return AESDecryptor;
}());
exports.default = AESDecryptor;


/***/ })
/******/ ]);
});
//# sourceMappingURL=MMProcessorTaskWorker.umd.js.map