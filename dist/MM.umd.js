(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MM"] = factory();
	else
		root["MM"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var Atom = /** @class */ (function () {
    function Atom(type, size) {
        this.type = type;
        this.size = size;
    }
    Atom.isContainerBox = function (type) {
        return type === Atom.moov || type === Atom.trak || type === Atom.mdia
            || type === Atom.minf || type === Atom.stbl || type === Atom.moof
            || type === Atom.traf || type === Atom.mvex || type === Atom.stsd
            || type === Atom.mp4a || type === Atom.avc1 || type === Atom.dref
            || type === Atom.dinf;
    };
    Atom.ftyp = 'ftyp';
    Atom.styp = 'styp';
    Atom.avc1 = 'avc1';
    Atom.avc3 = 'avc3';
    Atom.hvc1 = 'hvc1';
    Atom.hev1 = 'hev1';
    Atom.s263 = 's263';
    Atom.d263 = 'd263';
    Atom.vp08 = 'vp08';
    Atom.vp09 = 'vp09';
    Atom.mdat = 'mdat';
    Atom.mp4a = 'mp4a';
    Atom.wave = 'wave';
    Atom.ac_3 = 'ac-3';
    Atom.dac3 = 'dac3';
    Atom.ec_3 = 'ec-3';
    Atom.dec3 = 'dec3';
    Atom.dtsc = 'dtsc';
    Atom.dtsh = 'dtsh';
    Atom.dtsl = 'dtsl';
    Atom.dtse = 'dtse';
    Atom.ddts = 'ddts';
    Atom.tfdt = 'tfdt';
    Atom.tfhd = 'tfhd';
    Atom.trex = 'trex';
    Atom.trun = 'trun';
    Atom.sidx = 'sidx';
    Atom.moov = 'moov';
    Atom.mvhd = 'mvhd';
    Atom.trak = 'trak';
    Atom.mdia = 'mdia';
    Atom.minf = 'minf';
    Atom.stbl = 'stbl';
    Atom.avcC = 'avcC';
    Atom.hvcC = 'hvcC';
    Atom.vpcC = 'vpcC';
    Atom.esds = 'esds';
    Atom.moof = 'moof';
    Atom.traf = 'traf';
    Atom.mvex = 'mvex';
    Atom.tkhd = 'tkhd';
    Atom.edts = 'edts';
    Atom.elst = 'elst';
    Atom.mdhd = 'mdhd';
    Atom.hdlr = 'hdlr';
    Atom.stsd = 'stsd';
    Atom.pssh = 'pssh';
    Atom.sinf = 'sinf';
    Atom.schm = 'schm';
    Atom.schi = 'schi';
    Atom.tenc = 'tenc';
    Atom.encv = 'encv';
    Atom.enca = 'enca';
    Atom.frma = 'frma';
    Atom.saiz = 'saiz';
    Atom.saio = 'saio';
    Atom.uuid = 'uuid';
    Atom.senc = 'senc';
    Atom.pasp = 'pasp';
    Atom.TTML = 'TTML';
    Atom.vmhd = 'vmhd';
    Atom.mp4v = 'mp4v';
    Atom.stts = 'stts';
    Atom.stss = 'stss';
    Atom.ctts = 'ctts';
    Atom.stsc = 'stsc';
    Atom.stsz = 'stsz';
    Atom.stco = 'stco';
    Atom.co64 = 'co64';
    Atom.tx3g = 'tx3g';
    Atom.wvtt = 'wvtt';
    Atom.stpp = 'stpp';
    Atom.samr = 'samr';
    Atom.sawb = 'sawb';
    Atom.dinf = 'dinf';
    Atom.dref = 'dref';
    Atom.url = 'url ';
    Atom.smhd = 'smhd';
    Atom.mfhd = 'mfhd';
    Atom.emsg = 'emsg';
    return Atom;
}());
exports.Atom = Atom;
var ContainerAtom = /** @class */ (function (_super) {
    __extends(ContainerAtom, _super);
    function ContainerAtom(type, size) {
        var _this = _super.call(this, type, size) || this;
        _this.containerDataOffset = 0;
        return _this;
    }
    return ContainerAtom;
}(Atom));
exports.ContainerAtom = ContainerAtom;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ByteParserUtils = /** @class */ (function () {
    function ByteParserUtils() {
    }
    ByteParserUtils.parseStringWithLength = function (buffer, offset, end) {
        var result = '';
        var strLength = buffer[offset];
        var maxOffset = Math.min(offset + strLength + 1, end);
        for (var i_1 = offset + 1; i_1 < maxOffset && buffer[i_1] !== 0; i_1++) {
            result += String.fromCharCode(buffer[i_1]);
        }
        return result;
    };
    ByteParserUtils.parseString = function (buffer, offset, end) {
        return String.fromCharCode.apply(null, buffer.subarray(offset, end));
    };
    ByteParserUtils.parseUTF8String = function (buffer, offset, end) {
        var str = String.fromCharCode.apply(null, buffer.subarray(offset, end));
        return decodeURIComponent(escape(str));
    };
    ByteParserUtils.parseNullTerminatedString = function (buffer, offset, end) {
        var result = '';
        for (var i_2 = offset + 1; i_2 < end && buffer[i_2] !== 0; i_2++) {
            result += String.fromCharCode(buffer[i_2]);
        }
        return result;
    };
    ByteParserUtils.parseFloat = function (buffer, offset, len) {
        var v = new DataView(buffer.buffer, buffer.byteOffset, len);
        if (len === 8) {
            return v.getFloat64(offset);
        }
        return v.getFloat32(offset);
    };
    ByteParserUtils.parseInt = function (buffer, offset, len) {
        var value = 0;
        for (var i_3 = 0; i_3 < len; i_3++) {
            value |= (buffer[offset + i_3] << ((len - i_3 - 1) * 8));
        }
        return value;
    };
    ByteParserUtils.parseUint = function (buffer, offset, len) {
        var value = 0;
        for (var i_4 = 0; i_4 < len; i_4++) {
            value |= (buffer[offset + i_4] << ((len - i_4 - 1) * 8)) >>> 0;
        }
        return value;
    };
    ByteParserUtils.parseUint16 = function (buffer, offset) {
        return ByteParserUtils.parseUint(buffer, offset, 2);
    };
    ByteParserUtils.parseUint32 = function (buffer, offset) {
        return ByteParserUtils.parseUint(buffer, offset, 4);
    };
    ByteParserUtils.parseLong64 = function (buffer, offset) {
        return ByteParserUtils.parseUint(buffer, offset, 8);
    };
    ByteParserUtils.parseIsoBoxType = function (buffer, offset) {
        var result = '';
        result += String.fromCharCode(buffer[offset++]);
        result += String.fromCharCode(buffer[offset++]);
        result += String.fromCharCode(buffer[offset++]);
        result += String.fromCharCode(buffer[offset]);
        return result;
    };
    ByteParserUtils.parseIsoBoxDate = function (seconds) {
        return new Date(seconds * 1000 - 2082844800000);
    };
    ByteParserUtils.parseIsoBoxSampleFlags = function (flags) {
        return {
            isLeading: (flags[0] & 0x0c) >>> 2,
            dependsOn: flags[0] & 0x03,
            isDependedOn: (flags[1] & 0xc0) >>> 6,
            hasRedundancy: (flags[1] & 0x30) >>> 4,
            paddingValue: (flags[1] & 0x0e) >>> 1,
            isNonSyncSample: flags[1] & 0x01,
            degradationPriority: (flags[2] << 8) | flags[3]
        };
    };
    ByteParserUtils.parseBufferToHex = function (buffer, offset, end) {
        var str = '';
        for (var i_5 = offset; i_5 < end; i_5++) {
            str += buffer[i_5].toString(16);
        }
        return str;
    };
    return ByteParserUtils;
}());
exports.default = ByteParserUtils;


/***/ }),
/* 2 */
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
/* 3 */
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
var eventemitter3_1 = __webpack_require__(13);
var payload_description_1 = __webpack_require__(7);
var packet_1 = __webpack_require__(6);
var logger_1 = __webpack_require__(2);
var signal_1 = __webpack_require__(26);
var common_utils_1 = __webpack_require__(5);
var _a = logger_1.getLogger('Socket', logger_1.LoggerLevel.ERROR), log = _a.log, error = _a.error;
var SocketType;
(function (SocketType) {
    SocketType[SocketType["INPUT"] = 0] = "INPUT";
    SocketType[SocketType["OUTPUT"] = 1] = "OUTPUT";
})(SocketType = exports.SocketType || (exports.SocketType = {}));
var SocketEvent;
(function (SocketEvent) {
    SocketEvent["ANY_PACKET_RECEIVED"] = "any-packet-received";
    SocketEvent["DATA_PACKET_RECEIVED"] = "data-packet-received";
    SocketEvent["EOS_PACKET_RECEIVED"] = "eos-packet-received";
})(SocketEvent = exports.SocketEvent || (exports.SocketEvent = {}));
var SocketState = /** @class */ (function () {
    function SocketState() {
        this.transferring = false;
    }
    return SocketState;
}());
exports.SocketState = SocketState;
var SocketDescriptor = /** @class */ (function () {
    function SocketDescriptor(payloads) {
        this.payloads = payloads || [];
    }
    SocketDescriptor.fromMimeType = function (mimeType) {
        return SocketDescriptor.fromMimeTypes(mimeType);
    };
    SocketDescriptor.fromMimeTypes = function () {
        var mimeTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mimeTypes[_i] = arguments[_i];
        }
        return new SocketDescriptor(mimeTypes.map(function (mimeType) { return new payload_description_1.PayloadDescriptor(mimeType); }));
    };
    // TODO: also allow to directly bind this to proc templateSocketDescriptor method on construction
    SocketDescriptor.createTemplateGenerator = function (inputSd, outputSd) {
        return (function (st) {
            switch (st) {
                case SocketType.INPUT: return inputSd;
                case SocketType.OUTPUT: return outputSd;
            }
        });
    };
    SocketDescriptor.prototype.isVoid = function () {
        return this.payloads.length === 0;
    };
    return SocketDescriptor;
}());
exports.SocketDescriptor = SocketDescriptor;
var SocketOwner = /** @class */ (function () {
    function SocketOwner() {
    }
    return SocketOwner;
}());
exports.SocketOwner = SocketOwner;
var Socket = /** @class */ (function (_super) {
    __extends(Socket, _super);
    function Socket(type, descriptor) {
        var _this = _super.call(this) || this;
        _this.signalHandler_ = null;
        _this.isReady_ = false;
        _this.isReadyArmed_ = false;
        _this.owner = null;
        _this.type_ = type;
        _this.descriptor_ = descriptor;
        _this.state_ = new SocketState();
        return _this;
    }
    Socket.prototype.close = function () { };
    Socket.prototype.type = function () {
        return this.type_;
    };
    Socket.prototype.descriptor = function () {
        return this.descriptor_;
    };
    Socket.prototype.payload = function (index) {
        if (index === void 0) { index = 0; }
        return this.descriptor_.payloads[index];
    };
    Socket.prototype.payloads = function () {
        return this.descriptor_.payloads;
    };
    /**
     * Read transferring flag of socket state.
     */
    Socket.prototype.isTransferring = function () {
        return this.state_.transferring;
    };
    /**
     * A utility method to manage the readyness state synchroneously.
     * For every socket-instance we are then retrieving the whenReady promise
     * *once* and tracking the ready-state through it.
     */
    Socket.prototype.isReady = function () {
        var _this = this;
        if (!this.isReadyArmed_) {
            this.whenReady().then(function () {
                _this.isReady_ = true;
            }).catch(function (e) {
                error('caught error on readyness-promise:', e);
            });
            this.isReadyArmed_ = true;
        }
        return this.isReady_;
    };
    /**
     * MAY be implemented by subclasses to indicate async I/O resource initialization readyness
     * when applicable (for example for file-system or MediaSource socket).
     *
     * The default implementation works for any socket impl that is ready "in-sync" with the constructor
     * as it returns an already resolve promise.
     *
     * Further specification constraints:
     *
     * 1) When the readyness-promise hasn't been resolved yet, the socket MAY crash
     * when it gets transferred data or signals cast.
     *
     * 2) The socket MUST be connectable upon creation however.
     * Ideally, a pipeline (or the respective branch) should first make sure that all it's I/O sockets are
     * "ready" before enabling any data-flow.
     *
     * 3) Socket implemention SHOULD never buffer/queue-up any data in the integration layer,
     * as it is a task that processors are more suited to do and that is independent of socket.
     *
     * 4) Queuing data in proc while downstream sockets become ready MAY be the best solution in certain
     * cases of pipeline restructering.
     *
     * 5) I/O "reading" output-sockets MAY become ready async and not cause further harm by not implementing `whenReady` method.
     *
     * 6) A socket MUST never go back to something "not ready" when it was ready once.
     *
     * FIXME: implement "dispose" method
     *
     */
    Socket.prototype.whenReady = function () {
        return Promise.resolve();
    };
    /*
    whenDisposed(): Promise<void> {
      return Promise.resolve();
    }
    */
    /**
     * For subclasses only. Set the transfering flag of the socket state.
     */
    Socket.prototype.setTransferring_ = function (b) {
        this.state_.transferring = b;
    };
    /**
     * Wraps transferSync in an async call and returns a promise
     * @param p
     */
    Socket.prototype.transfer = function (p) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            common_utils_1.dispatchAsyncTask(function () {
                try {
                    resolve(_this.transferSync(p));
                }
                catch (e) {
                    error('Error upon packet-transfer execution:', e);
                    reject(e);
                }
            });
        });
    };
    /**
     * Passes the signal to the handler.
     * The default implementation is a synchroneous call,
     * but this may be anything asynchrneous and/or RPC'd in sub-classes,
     * since the SignalHandler is designed to return a Promise.
     *
     * The idea by default is that sockets pass signal on to their internal handler,
     * which can be set by anyone to allow handling signals on this socket.
     *
     * Typically the signal-handler of an input-socket will have to be set by it's peer output socket,
     * to allow for signals to travel through in up direction. If one would override that, one is also in charge
     * of signal communication up from input to ouput between these two sockets. Since an output-socket can also
     * peer an output socket, this is also the case for their communication of up signals.
     *
     * Note that the base class of Socket does not cast to the socket owner per-se.
     *
     * This is a detail that is implemeneted by the i/o sockets (and can be opted-in when implementing
     * from abstract socket).
     *
     */
    Socket.prototype.cast = function (signal) {
        if (this.signalHandler_) {
            return this.signalHandler_(signal);
        }
    };
    Socket.prototype.setSignalHandler = function (signalHandler) {
        this.signalHandler_ = signalHandler;
    };
    Socket.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Socket.prototype.getOwner = function () {
        return this.owner;
    };
    Socket.prototype.emit = function (e) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        throw new Error('Illegal call');
    };
    Socket.prototype.on = function (event, handler) {
        _super.prototype.on.call(this, event, handler);
        return this;
    };
    Socket.prototype.once = function (event, handler) {
        _super.prototype.once.call(this, event, handler);
        return this;
    };
    Socket.prototype.off = function (event, handler) {
        _super.prototype.off.call(this, event, handler);
        return this;
    };
    Socket.prototype._emit = function (event) {
        _super.prototype.emit.call(this, event, event);
    };
    return Socket;
}(eventemitter3_1.EventEmitter));
exports.Socket = Socket;
var InputSocket = /** @class */ (function (_super) {
    __extends(InputSocket, _super);
    function InputSocket(onReceive, descriptor) {
        var _this = _super.call(this, SocketType.INPUT, descriptor) || this;
        _this.onReceive_ = onReceive;
        return _this;
    }
    InputSocket.fromUnsafe = function (s) {
        return s;
    };
    InputSocket.fromFunction = function (func) {
        return new InputSocket(func, new SocketDescriptor());
    };
    InputSocket.prototype.transferSync = function (p) {
        this.setTransferring_(true);
        var b = this.onReceive_(p);
        this._onTransfer(p);
        this.setTransferring_(false);
        return b;
    };
    /**
     * Overloads Socket cast method and also casts signal to owner as well as calling
     * super class cast, which call handler.
     */
    InputSocket.prototype.cast = function (s) {
        return signal_1.collectSignalReceiverCastResults([
            this.owner.cast(s),
            _super.prototype.cast.call(this, s)
        ]);
    };
    InputSocket.prototype._onTransfer = function (p) {
        this._emit(SocketEvent.ANY_PACKET_RECEIVED);
        if (p.isSymbolic()) {
            switch (p.symbol) {
                case packet_1.PacketSymbol.EOS:
                    this._emit(SocketEvent.EOS_PACKET_RECEIVED);
                    break;
                default:
                    break;
            }
        }
        else {
            this._emit(SocketEvent.DATA_PACKET_RECEIVED);
        }
    };
    return InputSocket;
}(Socket));
exports.InputSocket = InputSocket;
var OutputSocket = /** @class */ (function (_super) {
    __extends(OutputSocket, _super);
    function OutputSocket(descriptor) {
        var _this = _super.call(this, SocketType.OUTPUT, descriptor) || this;
        _this.peers_ = [];
        return _this;
    }
    OutputSocket.fromUnsafe = function (s) {
        return s;
    };
    OutputSocket.prototype.transferSync = function (p) {
        var _this = this;
        log(logger_1.makeLogTimestamped('OutputSocket.transfer packet'));
        var b;
        this.setTransferring_(true);
        this.peers_.forEach(function (s) {
            log('call transfer on peer socket');
            b = s.transferSync(p);
            _this.onPacketTransferred_(s, b);
        });
        this.setTransferring_(false);
        return b;
    };
    /**
     * {Socket} Another socket to which this socket transfers data ownership to.
     */
    OutputSocket.prototype.connect = function (s) {
        if (!s) {
            throw new Error('Socket connect called with ' + s);
        }
        if (this.isConnectedTo(s)) {
            throw new Error('Socket is already connected to peer');
        }
        this.peers_.push(s);
        // when we peer with a socket we set our internal handler
        s.setSignalHandler(this._onPeerSignalCast.bind(this, s));
        return this;
    };
    /**
     * Disconnects this socket from peer socket s (which this had previously connected with `connect` method)
     * If `null` or default is passed, all peer sockets are disconnected.
     * If socket passed is not a peer socket, will throw an error.
     * @param s
     */
    OutputSocket.prototype.disconnect = function (s) {
        if (s === void 0) { s = null; }
        if (!s) {
            if (this.hasPeers()) {
                this.peers_.splice(0, this.peers_.length);
            }
            return;
        }
        var index = this.peers_.indexOf(s);
        if (index < 0) {
            throw new Error('Socket can not be disconnected as its not connected');
        }
        this.peers_.splice(index, 1);
        return this;
    };
    OutputSocket.prototype.isConnectedTo = function (s) {
        var index = this.peers_.indexOf(s);
        return index >= 0;
    };
    OutputSocket.prototype.getPeerSockets = function () {
        return this.peers_;
    };
    OutputSocket.prototype.getNumberOfPeers = function () {
        return this.peers_.length;
    };
    OutputSocket.prototype.hasPeers = function () {
        return this.getNumberOfPeers() > 0;
    };
    /**
     * Cast a signal from this socket.
     *
     * When signal travels down, broadcast to all peer sockets.
     *
     * All other cases (zero or up direction), broadcast to owner.
     *
     * Also calls the super-class implementation and collects results together.
     */
    OutputSocket.prototype.cast = function (signal) {
        var peersOrOwner;
        if (signal.isDirectionDown()) {
            peersOrOwner = signal.emit(this.peers_);
        }
        else {
            peersOrOwner = this.owner.cast(signal);
        }
        return signal_1.collectSignalReceiverCastResults([
            _super.prototype.cast.call(this, signal),
            peersOrOwner
        ]);
    };
    /**
     * Handler set on all peer sockets, called when they cast a signal.
     *
     * When the signal is up, we cast it to our socket owner.
     *
     * When it travels down, we don't need to do anything and return a
     * negative result (since we did not handle the signal)
     *
     */
    OutputSocket.prototype._onPeerSignalCast = function (peerSocket, signal) {
        if (signal.isDirectionUp()) {
            return this.owner.cast(signal);
        }
        else {
            return Promise.resolve(false);
        }
    };
    OutputSocket.prototype.onPacketTransferred_ = function (peerSocket, peerTransferReturnVal) {
        switch (peerSocket.type()) {
            case SocketType.INPUT:
                this.onPacketTransferredToPeerInput_(peerTransferReturnVal);
                break;
            case SocketType.OUTPUT:
                this.onPacketTransferredToPeerOutput_(peerTransferReturnVal);
                break;
        }
    };
    OutputSocket.prototype.onPacketTransferredToPeerInput_ = function (peerTransferReturnVal) { };
    OutputSocket.prototype.onPacketTransferredToPeerOutput_ = function (peerTransferReturnVal) { };
    return OutputSocket;
}(Socket));
exports.OutputSocket = OutputSocket;
var SeekableOutputSocket = /** @class */ (function (_super) {
    __extends(SeekableOutputSocket, _super);
    function SeekableOutputSocket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeekableOutputSocket;
}(OutputSocket));
exports.SeekableOutputSocket = SeekableOutputSocket;


/***/ }),
/* 4 */
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
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var eventemitter3_1 = __webpack_require__(13);
var logger_1 = __webpack_require__(2);
var env_1 = __webpack_require__(14);
var _a = logger_1.getLogger('Processor'), debug = _a.debug, error = _a.error;
// import WorkerLoader from "worker-loader!../base.worker";
var ProcessorEvent;
(function (ProcessorEvent) {
    ProcessorEvent["ANY_SOCKET_CREATED"] = "processor:socket-created";
    ProcessorEvent["INPUT_SOCKET_CREATED"] = "processor:input-socket-created";
    ProcessorEvent["OUTPUT_SOCKET_CREATED"] = "processor:output-socket-created";
    ProcessorEvent["SYMBOLIC_PACKET"] = "processor:symbolic-packet";
    ProcessorEvent["SIGNAL"] = "processor:signal";
    ProcessorEvent["ERROR"] = "processor:error";
})(ProcessorEvent = exports.ProcessorEvent || (exports.ProcessorEvent = {}));
var ProcessorErrorCode;
(function (ProcessorErrorCode) {
    ProcessorErrorCode[ProcessorErrorCode["GENERIC"] = 0] = "GENERIC";
    ProcessorErrorCode[ProcessorErrorCode["BAD_FORMAT"] = 1] = "BAD_FORMAT";
})(ProcessorErrorCode = exports.ProcessorErrorCode || (exports.ProcessorErrorCode = {}));
exports.PROCESSOR_RPC_INVOKE_PACKET_HANDLER = 'mmjs:processor:RPC:invokePacketHandler';
var Processor = /** @class */ (function (_super) {
    __extends(Processor, _super);
    function Processor(onSignal_, socketTemplate_) {
        if (onSignal_ === void 0) { onSignal_ = null; }
        if (socketTemplate_ === void 0) { socketTemplate_ = null; }
        var _this = _super.call(this) || this;
        _this.onSignal_ = onSignal_;
        _this.socketTemplate_ = socketTemplate_;
        // FIXME: crashes with "Object prototype may only be an Object or null"
        /*
        static createWorkerShell(onReady: VoidCallback = noop): ProcessorProxy {
          const name = this.getName();
          if (!name) {
            throw new Error('Can not use factory, static name is not defined');
          }
          return new ProcessorProxy(name, onReady);
        };
        */
        _this.inputs_ = [];
        _this.outputs_ = [];
        _this.taskWorker_ = null;
        // TODO: internalize EE instance to avoid polluting interface (we should only expose on/once/off)
        // private eventEmitter_: typeof EventEmitter = new EventEmitter();
        _this.enableSymbolProxying = true;
        _this.muteSymbolProcessing = false;
        /**
         * RPC-compatible wrapper for processTransfer_. Avoids to recover a Socket-type object on the remote
         * for which we don't ensure tranferability i.e for which we don't have a proxy.
         *
         * Not supposed to be directly called but to be invoked remotely.
         *
         * @param p
         * @param inputIndex
         */
        _this[exports.PROCESSOR_RPC_INVOKE_PACKET_HANDLER] = function (p, inputIndex) {
            _this.onReceiveFromInput_(_this.in[inputIndex], packet_1.Packet.fromTransferable(p), inputIndex);
        };
        return _this;
    }
    Processor.getName = function () { return null; };
    Processor.prototype.terminate = function () {
        if (this.taskWorker_) {
            this.taskWorker_.terminate();
        }
    };
    // maybe better call protoSocketDescriptor as in prototype pattern?
    Processor.prototype.templateSocketDescriptor = function (socketType) {
        if (!this.socketTemplate_) {
            throw new Error('No socket-template generator function set');
        }
        return this.socketTemplate_(socketType);
    };
    Processor.prototype.createEvent = function (event, eventProps) {
        return Object.assign({
            event: event,
            processor: this,
        }, eventProps);
    };
    Processor.prototype.createErrorEvent = function (code) {
        return Object.assign({
            event: ProcessorEvent.ERROR,
            processor: this,
        }, { code: code });
    };
    Processor.prototype.emit = function (event, data) {
        if (event !== data.event) {
            throw new Error('Event emitted must be identic the one carried in event data');
        }
        if (data.processor !== this) {
            throw new Error('Event data must point to this');
        }
        return _super.prototype.emit.call(this, event, data);
    };
    Processor.prototype.on = function (event, handler) {
        _super.prototype.on.call(this, event, handler);
        return this;
    };
    Processor.prototype.once = function (event, handler) {
        _super.prototype.once.call(this, event, handler);
        return this;
    };
    Processor.prototype.off = function (event, handler) {
        _super.prototype.off.call(this, event, handler);
        return this;
    };
    Processor.prototype.getOwnSockets = function () {
        return new Set(Array.prototype.concat(this.inputs_, this.outputs_));
    };
    Processor.prototype.cast = function (signal) {
        var _this = this;
        return this.onSignalCast_(signal).then(function (result) {
            if (result) {
                return Promise.resolve(true);
            }
            else {
                if (signal.isDirectionDown()) {
                    return signal.emit(_this.out);
                }
                else if (signal.isDirectionUp()) {
                    return signal.emit(_this.in);
                }
                else {
                    return Promise.resolve(false);
                }
            }
        });
    };
    /**
     * Returns a copy of internal array, safe to manipulate
     * {InputSocket[]}
     */
    Processor.prototype.inputs = function () {
        return this.inputs_.slice();
    };
    /**
     * Returns a copy of internal array, safe to manipulate
     * {OutputSocket[]}
     */
    Processor.prototype.outputs = function () {
        return this.outputs_.slice();
    };
    Object.defineProperty(Processor.prototype, "in", {
        /**
         * Read-only internal array ref
         * {InputSocket[]}
         */
        get: function () {
            return this.inputs_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Processor.prototype, "out", {
        /**
         * Read-only internal array ref
         * {OutputSocket[]}
         */
        get: function () {
            return this.outputs_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new input socket with the given descriptor (or from default template)
     * {SocketDescriptor} sd optional
     */
    Processor.prototype.createInput = function (sd) {
        var _this = this;
        var inputIndex = this.inputs_.length;
        var s = new socket_1.InputSocket(function (p) {
            return _this.onReceiveFromInput_(s, p, inputIndex);
        }, sd || this.wrapTemplateSocketDescriptor_(socket_1.SocketType.INPUT));
        this.inputs_.push(s);
        this.emit(ProcessorEvent.ANY_SOCKET_CREATED, {
            processor: this,
            event: ProcessorEvent.ANY_SOCKET_CREATED,
            socket: s
        });
        this.emit(ProcessorEvent.INPUT_SOCKET_CREATED, {
            processor: this,
            event: ProcessorEvent.INPUT_SOCKET_CREATED,
            socket: s
        });
        return s;
    };
    /**
     * Adds a new output socket with the given descriptor (or from default template)
     * {SocketDescriptor} sd optional
     */
    Processor.prototype.createOutput = function (sd) {
        var s = new socket_1.OutputSocket(sd || this.wrapTemplateSocketDescriptor_(socket_1.SocketType.OUTPUT));
        this.outputs_.push(s);
        this.emit(ProcessorEvent.ANY_SOCKET_CREATED, {
            processor: this,
            event: ProcessorEvent.ANY_SOCKET_CREATED,
            socket: s
        });
        this.emit(ProcessorEvent.OUTPUT_SOCKET_CREATED, {
            processor: this,
            event: ProcessorEvent.OUTPUT_SOCKET_CREATED,
            socket: s
        });
        return s;
    };
    Processor.prototype.getTaskWorker = function () {
        var _this = this;
        if (!this.taskWorker_) {
            this.taskWorker_ = new Worker(env_1.EnvironmentVars.TASK_WORKER_PATH);
            this.taskWorker_.addEventListener('message', function (event) {
                _this.onTaskWorkerMessage(event);
            });
        }
        return this.taskWorker_;
    };
    /**
     * @returns True when packet was forwarded
     */
    Processor.prototype.onSymbolicPacketReceived_ = function (p) {
        this.emit(ProcessorEvent.SYMBOLIC_PACKET, {
            processor: this,
            event: ProcessorEvent.SYMBOLIC_PACKET,
            symbol: p.symbol,
            packet: p
        });
        var proxy = this.handleSymbolicPacket_(p.symbol);
        if (proxy && this.enableSymbolProxying) {
            this.transferPacketToAllOutputs_(p);
            return true;
        }
        return this.muteSymbolProcessing;
    };
    /**
     * p packet to transfer to all outputs
     */
    Processor.prototype.transferPacketToAllOutputs_ = function (p) {
        this.out.forEach(function (socket) {
            socket.transfer(p);
        });
    };
    Processor.prototype.onReceiveFromInput_ = function (inS, p, inputIndex) {
        if (p.isSymbolic() &&
            this.onSymbolicPacketReceived_(p)) {
            return true; // when packet was forwarded we don't pass it on for processing
        }
        var result = false;
        try {
            result = this.processTransfer_(inS, p, inputIndex);
        }
        catch (err) {
            error("There was a fatal error processing a packet: " + err.message + ". Stacktrace:");
            debug(err);
        }
        return result;
    };
    Processor.prototype.wrapTemplateSocketDescriptor_ = function (type, sd) {
        return (sd || this.templateSocketDescriptor(type));
    };
    Processor.prototype.onSignalCast_ = function (signal) {
        this.emit(ProcessorEvent.SIGNAL, {
            processor: this,
            event: ProcessorEvent.SIGNAL,
            signal: signal
        });
        if (this.onSignal_) {
            return this.onSignal_(signal);
        }
        else {
            return Promise.resolve(false);
        }
    };
    Processor.prototype.onTaskWorkerMessage = function (event) {
        console.warn('Processor should implement onWorkerMessage');
        console.warn('Worker event not handled:', event);
    };
    Processor.prototype.dispatchTask = function (name, packet) {
        var task = {
            workerContext: null,
            packet: packet,
            name: name
        };
        this.getTaskWorker()
            .postMessage(task, task.packet.mapArrayBuffers());
    };
    /**
     * FIXME: explain this better
     *
     * At the same time handler for symbols, as well as
     * arbiter function to determine if this proc proxies or not specific symbols.
     *
     * Default proxies all non-VOID symbols.
     *
     * Per design this merely passes in the symbol, not the actual packet.
     *
     * Symbolic packets are only supposed to be a shell for the symbol itself,
     * their other properties should be ignored in that case. They also should
     * not carry any data.
     *
     * Returning false will have this packet carrying the symbol be passed into `processTransfer_`.
     *
     * Setting the Processor instance property `enableSymbolProxying` to false (default true)
     * will disable proxying generally for all packets. That way, proxying can be disabled while
     * packets with symbols will also not be passed into the processing scope.
     *
     * NOTE: Transferring the packet with the symbol to all output sockets "manually" is de-facto performing proxying.
     *
     * @returns True if the symbolic packet should be proxied, false if we want to handle this manually in the processing scope (when symbol-proxying enabled)
     */
    Processor.prototype.handleSymbolicPacket_ = function (symbol) {
        return symbol !== packet_1.PacketSymbol.VOID;
    };
    /**
     * Needed by proxy shell
     * @param st
     */
    Processor.prototype.overrideSocketTemplate = function (st) {
        this.socketTemplate_ = st;
    };
    return Processor;
}(eventemitter3_1.EventEmitter));
exports.Processor = Processor;


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = __webpack_require__(11);
var payload_description_1 = __webpack_require__(7);
var buffer_props_1 = __webpack_require__(9);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_utils_1 = __webpack_require__(5);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timescale_1 = __webpack_require__(16);
var Track = /** @class */ (function () {
    function Track(id, type /* fixme: make enum type */, mimeType) {
        this.id = id;
        this.type = type;
        this.mimeType = mimeType;
        this.frames = [];
        this.duration = NaN;
        this.frames = [];
    }
    Track.prototype.isVideo = function () {
        return this.type === Track.TYPE_VIDEO;
    };
    Track.prototype.isAudio = function () {
        return this.type === Track.TYPE_AUDIO;
    };
    Track.prototype.isText = function () {
        return this.type === Track.TYPE_TEXT;
    };
    Track.prototype.isOther = function () {
        return this.type !== Track.TYPE_TEXT
            && this.type !== Track.TYPE_AUDIO
            && this.type !== Track.TYPE_VIDEO;
    };
    Track.prototype.getFrames = function () {
        return this.frames;
    };
    Track.prototype.getDuration = function () {
        return this.duration;
    };
    Track.prototype.getDurationInSeconds = function () {
        return timescale_1.toSecondsFromMicros(this.getDuration());
    };
    Track.prototype.getMetadata = function () {
        return {};
    };
    Track.prototype.update = function () {
        this.frames = this.getFrames().sort(function (a, b) {
            return a.timeUs - b.timeUs;
        });
        this.duration = this.getDuration();
    };
    // FIXME: should be an enum type
    Track.TYPE_VIDEO = 'video';
    Track.TYPE_AUDIO = 'audio';
    Track.TYPE_TEXT = 'text';
    Track.TYPE_COMPLEX = 'complex';
    Track.TYPE_LOGO = 'logo';
    Track.TYPE_BUTTONS = 'buttons';
    Track.TYPE_CONTROL = 'control';
    Track.TYPE_UNKNOWN = 'unknown';
    // Here we don't need an enum
    Track.MIME_TYPE_AAC = 'audio/mp4a-latm';
    Track.MIME_TYPE_AVC = 'video/avc';
    Track.MIME_TYPE_HEVC = 'video/hevc';
    Track.MIME_TYPE_MPEG = 'audio/mpeg';
    Track.MIME_TYPE_MPEG_L1 = 'audio/mpeg-L1';
    Track.MIME_TYPE_MPEG_l2 = 'audio/mpeg-L2';
    Track.MIME_TYPE_ID3 = 'application/id3';
    Track.MIME_TYPE_UNKNOWN = 'unknown';
    return Track;
}());
exports.Track = Track;


/***/ }),
/* 9 */
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
var payload_description_1 = __webpack_require__(7);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timescale_1 = __webpack_require__(16);
var Frame = /** @class */ (function () {
    function Frame(frameType, timeUs, size, duration, bytesOffset, presentationTimeOffsetUs) {
        if (duration === void 0) { duration = NaN; }
        if (bytesOffset === void 0) { bytesOffset = NaN; }
        if (presentationTimeOffsetUs === void 0) { presentationTimeOffsetUs = 0; }
        this.frameType = frameType;
        this.timeUs = timeUs;
        this.size = size;
        this.duration = duration;
        this.bytesOffset = bytesOffset;
        // normalized micros value
        this.presentationTimeUs = 0;
        // ideally have unnormalized integer values
        this.timescale = NaN;
        this.scaledDecodingTime = NaN;
        this.scaledPresentationTimeOffset = NaN;
        this.scaledDuration = NaN;
        this.setPresentationTimeOffsetUs(presentationTimeOffsetUs);
    }
    Frame.prototype.hasUnnormalizedIntegerTiming = function () {
        return Number.isFinite(this.timescale)
            && Number.isFinite(this.scaledDecodingTime)
            && Number.isFinite(this.scaledPresentationTimeOffset)
            && Number.isFinite(this.scaledDuration);
    };
    Frame.prototype.getDecodingTimeUs = function () {
        return this.timeUs;
    };
    Frame.prototype.getPresentationTimeUs = function () {
        return this.presentationTimeUs;
    };
    Frame.prototype.setPresentationTimeOffsetUs = function (presentationTimeOffsetUs) {
        this.presentationTimeUs = this.timeUs + presentationTimeOffsetUs;
    };
    Frame.prototype.getPresentationTimestampInSeconds = function () {
        return timescale_1.toSecondsFromMicros(this.getPresentationTimeUs());
    };
    Frame.prototype.getDecodingTimestampInSeconds = function () {
        return timescale_1.toSecondsFromMicros(this.getDecodingTimeUs());
    };
    Frame.prototype.getDurationInSeconds = function () {
        return timescale_1.toSecondsFromMicros(this.duration);
    };
    // fixme: should be an enum
    Frame.IDR_FRAME = 'I';
    Frame.P_FRAME = 'P';
    Frame.B_FRAME = 'B';
    Frame.UNFLAGGED_FRAME = '/';
    return Frame;
}());
exports.Frame = Frame;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var common_utils_1 = __webpack_require__(5);
var buffer_props_1 = __webpack_require__(9);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50).Buffer))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PayloadReader = /** @class */ (function () {
    function PayloadReader() {
        this.firstTimestamp = -1;
        this.timeUs = -1;
        this.frames = [];
        this.reset();
    }
    PayloadReader.prototype.append = function (packet) {
        if (isNaN(this.firstPacketDataOffset)) {
            console.log('first packet data offset:', packet.buffer.byteOffset + packet.bytesOffset());
            this.firstPacketDataOffset = packet.buffer.byteOffset + packet.bytesOffset();
        }
        var dataToAppend = packet.buffer.subarray(packet.bytesOffset());
        if (!this.dataBuffer) {
            this.dataBuffer = dataToAppend;
        }
        else {
            var newLen = this.dataBuffer.byteLength + packet.remainingBytes();
            var temp = new Uint8Array(newLen);
            temp.set(this.dataBuffer, 0);
            temp.set(dataToAppend, this.dataBuffer.byteLength);
            this.dataBuffer = temp;
        }
    };
    PayloadReader.prototype.reset = function () {
        this.frames = [];
        this.dataOffset = 0;
        this.firstTimestamp = -1;
        this.timeUs = -1;
    };
    PayloadReader.prototype.flush = function (pts) {
        if (this.dataBuffer && this.dataBuffer.byteLength > 0) {
            this.consumeData(pts);
            this.dataBuffer = null;
        }
        this.dataOffset = 0;
    };
    PayloadReader.prototype.getMimeType = function () {
        return 'Unknown';
    };
    PayloadReader.prototype.getDuration = function () {
        return this.getLastPTS() - this.getFirstPTS();
    };
    PayloadReader.prototype.getFirstPTS = function () {
        return this.firstTimestamp;
    };
    PayloadReader.prototype.getLastPTS = function () {
        return this.timeUs;
    };
    PayloadReader.prototype.getFirstPacketDataOffset = function () {
        return this.firstPacketDataOffset;
    };
    return PayloadReader;
}());
exports.PayloadReader = PayloadReader;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defaults
 */
var PROXY_WORKER_PATH = '/dist/MMProcessorProxyWorker.umd.js';
var TASK_WORKER_PATH = 'dist/MMProcessorTaskWorker.umd.js';
var FFMPEG_BIN_PATH = '/vendor/ffmpeg.js/ffmpeg-mp4.js';
var EnvironmentVar;
(function (EnvironmentVar) {
    EnvironmentVar["PROXY_WORKER_PATH"] = "proxy-worker-path";
    EnvironmentVar["TASK_WORKER_PATH"] = "task-worker-path";
    EnvironmentVar["FFMPEG_BIN_PATH"] = "ffmpeg-bin-path";
})(EnvironmentVar = exports.EnvironmentVar || (exports.EnvironmentVar = {}));
exports.EnvironmentVars = {
    TASK_WORKER_PATH: TASK_WORKER_PATH,
    PROXY_WORKER_PATH: PROXY_WORKER_PATH,
    FFMPEG_BIN_PATH: FFMPEG_BIN_PATH
};
function setEnvironmentVar(name, value) {
    exports.EnvironmentVars[name] = value;
}
exports.setEnvironmentVar = setEnvironmentVar;
function getEnvironmentVar(name) {
    if (!exports.EnvironmentVars[name]) {
        throw new Error('No such environment variable exists: ' + name);
    }
    return exports.EnvironmentVars[name];
}
exports.getEnvironmentVar = getEnvironmentVar;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitReader = /** @class */ (function () {
    function BitReader(buffer) {
        this.buffer = buffer;
        this.workingBytesAvailable = buffer.byteLength;
        this.workingWord = 0;
        this.workingBitsAvailable = 0;
        this.loadWord();
    }
    BitReader.prototype.destroy = function () {
        this.buffer = null;
    };
    BitReader.prototype.remainingBytes = function () {
        return this.workingBytesAvailable + this.workingBitsAvailable / 8;
    };
    BitReader.prototype.bitsAvailable = function () {
        return (8 * this.workingBytesAvailable) + this.workingBitsAvailable;
    };
    BitReader.prototype.bytesOffset = function () {
        return this.buffer.byteLength - this.remainingBytes();
    };
    BitReader.prototype.skipBytes = function (count) {
        this.skipBits(count * 8);
    };
    BitReader.prototype.skipBits = function (count) {
        var skipBytes;
        if (this.workingBitsAvailable > count) {
            this.workingWord <<= count;
            this.workingBitsAvailable -= count;
        }
        else {
            count -= this.workingBitsAvailable;
            skipBytes = Math.floor(count / 8);
            count -= (skipBytes * 8);
            this.workingBytesAvailable -= skipBytes;
            this.loadWord();
            this.workingWord <<= count;
            this.workingBitsAvailable -= count;
        }
    };
    BitReader.prototype.skipUEG = function () {
        this.skipBits(1 + this.skipLeadingZeros());
    };
    BitReader.prototype.skipSEG = function () {
        this.skipBits(1 + this.skipLeadingZeros());
    };
    BitReader.prototype.readUEG = function () {
        var clz = this.skipLeadingZeros();
        return this.readBits(clz + 1) - 1;
    };
    BitReader.prototype.readSEG = function () {
        var val = this.readUEG();
        if (0x01 & val) {
            return (1 + val) >>> 1;
        }
        return -1 * (val >>> 1);
    };
    BitReader.prototype.readBool = function () {
        return this.readBits(1) === 1;
    };
    BitReader.prototype.readByte = function () {
        return this.readBits(8);
    };
    ;
    BitReader.prototype.readBits = function (size) {
        var bits = Math.min(this.workingBitsAvailable, size);
        var val = this.workingWord >>> (32 - bits);
        this.workingBitsAvailable -= bits;
        if (this.workingBitsAvailable > 0) {
            this.workingWord <<= bits;
        }
        else if (this.workingBytesAvailable > 0) {
            this.loadWord();
        }
        bits = size - bits;
        if (bits > 0) {
            return (val << bits | this.readBits(bits)) >>> 0;
        }
        return val;
    };
    BitReader.prototype.loadWord = function () {
        var position = this.buffer.byteLength - this.workingBytesAvailable;
        var workingBytes = new Uint8Array(4);
        var availableBytes = Math.min(4, this.remainingBytes());
        if (availableBytes === 0) {
            throw new Error('No bytes available');
        }
        workingBytes.set(this.buffer.subarray(position, position + availableBytes));
        this.workingWord = new DataView(workingBytes.buffer).getUint32(0);
        this.workingBitsAvailable = availableBytes * 8;
        this.workingBytesAvailable -= availableBytes;
    };
    BitReader.prototype.skipLeadingZeros = function () {
        var leadingZeroCount;
        for (leadingZeroCount = 0; leadingZeroCount < this.workingBitsAvailable; ++leadingZeroCount) {
            if ((this.workingWord & (0x80000000 >>> leadingZeroCount)) !== 0) {
                this.workingWord <<= leadingZeroCount;
                this.workingBitsAvailable -= leadingZeroCount;
                return leadingZeroCount;
            }
        }
        this.loadWord();
        return leadingZeroCount + this.skipLeadingZeros();
    };
    return BitReader;
}());
exports.BitReader = BitReader;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MICROSECOND_TIMESCALE = 1000000;
function toMicroseconds(value, timescale) {
    return exports.MICROSECOND_TIMESCALE * value / timescale;
}
exports.toMicroseconds = toMicroseconds;
function toSecondsFromMicros(us) {
    return us / exports.MICROSECOND_TIMESCALE;
}
exports.toSecondsFromMicros = toSecondsFromMicros;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Move to Objec-TS long-term
Object.defineProperty(exports, "__esModule", { value: true });
var PREFIX_ROOT = '1nspect0r.js';
var noop = function () { };
var getPrefix = function (type, category) {
    var prefix = "[" + PREFIX_ROOT + "]:[" + type + "]:[" + category + "] >";
    return prefix;
};
function checkLogLevel(level, catLevel) {
    switch (catLevel) {
        case LoggerLevels.INFO: return (level >= LoggerLevels.INFO) && console.info;
        case LoggerLevels.LOG: return (level >= LoggerLevels.LOG) && console.log;
        case LoggerLevels.DEBUG: return (level >= LoggerLevels.DEBUG) && console.debug;
        case LoggerLevels.WARN: return (level >= LoggerLevels.WARN) && console.warn;
        case LoggerLevels.ERROR: return (level >= LoggerLevels.ERROR) && console.error;
    }
}
exports.checkLogLevel = checkLogLevel;
var LoggerLevels;
(function (LoggerLevels) {
    LoggerLevels[LoggerLevels["ON"] = Infinity] = "ON";
    LoggerLevels[LoggerLevels["LOG"] = 5] = "LOG";
    LoggerLevels[LoggerLevels["INFO"] = 4] = "INFO";
    LoggerLevels[LoggerLevels["DEBUG"] = 3] = "DEBUG";
    LoggerLevels[LoggerLevels["WARN"] = 2] = "WARN";
    LoggerLevels[LoggerLevels["ERROR"] = 1] = "ERROR";
    LoggerLevels[LoggerLevels["OFF"] = 0] = "OFF";
})(LoggerLevels = exports.LoggerLevels || (exports.LoggerLevels = {}));
exports.getLogger = function (category, level) {
    if (level === void 0) { level = LoggerLevels.ON; }
    var window = self; // Needed for WebWorker compat
    return {
        info: checkLogLevel(level, LoggerLevels.INFO) ? console.info.bind(window['console'], getPrefix('i', category)) : noop,
        log: checkLogLevel(level, LoggerLevels.LOG) ? console.log.bind(window['console'], getPrefix('l', category)) : noop,
        debug: checkLogLevel(level, LoggerLevels.DEBUG) ? console.debug.bind(window['console'], getPrefix('d', category)) : noop,
        warn: checkLogLevel(level, LoggerLevels.WARN) ? console.warn.bind(window['console'], getPrefix('w', category)) : noop,
        error: checkLogLevel(level, LoggerLevels.ERROR) ? console.error.bind(window['console'], getPrefix('e', category)) : noop
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
/* 18 */
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
var socket_1 = __webpack_require__(3);
var xhr_1 = __webpack_require__(114);
var packet_1 = __webpack_require__(6);
var logger_1 = __webpack_require__(2);
var _a = logger_1.getLogger('XhrSocket'), log = _a.log, warn = _a.warn, error = _a.error;
var XhrSocket = /** @class */ (function (_super) {
    __extends(XhrSocket, _super);
    function XhrSocket(url) {
        var _this = _super.call(this, new socket_1.SocketDescriptor()) || this;
        _this._xhr = null;
        _this._xhr = new xhr_1.XHR(url, _this._xhrCallback.bind(_this), xhr_1.XHRMethod.GET, xhr_1.XHRResponseType.ARRAY_BUFFER);
        return _this;
    }
    XhrSocket.prototype.seek = function (start, end) {
        throw new Error('Method not implemented.');
    };
    XhrSocket.prototype._xhrCallback = function (xhr, isProgressUpdate) {
        if (isProgressUpdate) {
            return; // TODO
        }
        if (xhr.xhrState === xhr_1.XHRState.DONE) {
            log('got data for url:', this._xhr.responseURL);
            this.transfer(packet_1.Packet.fromArrayBuffer(xhr.responseData));
            log('transferring EOS symbol');
            // EOS
            this.transfer(packet_1.Packet.newEos());
        }
    };
    return XhrSocket;
}(socket_1.SeekableOutputSocket));
exports.XhrSocket = XhrSocket;


/***/ }),
/* 19 */
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
/* 20 */
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
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
/*
import { H264Reader } from '../ext-mod/inspector.js/src/demuxer/ts/payload/h264-reader';
import { BitReader } from '../ext-mod/inspector.js/src/utils/bit-reader';
*/
var h264_1 = __webpack_require__(57);
var nalu_1 = __webpack_require__(28);
var logger_1 = __webpack_require__(2);
var _a = logger_1.getLogger('H264ParseProcessor', logger_1.LoggerLevel.LOG), debug = _a.debug, log = _a.log, warn = _a.warn, error = _a.error;
var H264ParseProcessor = /** @class */ (function (_super) {
    __extends(H264ParseProcessor, _super);
    function H264ParseProcessor() {
        var _this = _super.call(this) || this;
        // private h264Reader: H264Reader;
        _this.h264Parser = new h264_1.H264Parser();
        // this.on(ProcessorEvent.ANY_SOCKET_CREATED, () => {debugger});
        _this.createInput();
        _this.createOutput();
        return _this;
    }
    H264ParseProcessor.getName = function () { return 'H264ParseProcessor'; };
    H264ParseProcessor.prototype.templateSocketDescriptor = function (st) {
        return new socket_1.SocketDescriptor();
    };
    H264ParseProcessor.prototype.processTransfer_ = function (inS, p) {
        p.forEachBufferSlice(this._onBufferSlice.bind(this, p), this._onProcessingError.bind(this), this);
        debug('transfer packet:', p.toString());
        // NOTE: atm the h264 parser only "inspects" the data and then passes through each packet unmodified
        this.out[0].transfer(p
        /*
          Packet.fromSlice(
            bufferSlice // naluSlice // <- that would "unframe" the NALU bytes, like this we just pass through after parsing
          )
          // */
        // Packet.fromArrayBuffer()
        );
        return true;
    };
    H264ParseProcessor.prototype._onProcessingError = function (bufferSlice, err) {
        error('H264Parse error:', err);
        return false;
    };
    H264ParseProcessor.prototype._onBufferSlice = function (p, bufferSlice) {
        var avcStream = bufferSlice.getUint8Array();
        var avcView = bufferSlice.getDataView();
        var length;
        // console.log('got buffer of length:', avcStream.length)
        for (var i_1 = 0; i_1 < avcStream.length; i_1 += length) {
            length = avcView.getUint32(i_1);
            if (length > avcStream.length) {
                warn('no NALUs found in this packet! Forwarding and ignoring:', p);
                debug('transfer ignored packet:', p.toString());
                // this.out[0].transfer(p);
                break;
            }
            i_1 += 4;
            var naluSlice = bufferSlice.unwrap(i_1, length);
            var naluBytes = naluSlice.getUint8Array();
            var nalu = new nalu_1.NALU(naluBytes);
            var type = nalu.type();
            // console.log(naluBytes.byteLength)
            // console.log(nalu.toString())
            if (type === nalu_1.NALU.IDR || type === nalu_1.NALU.SPS || type === nalu_1.NALU.PPS) {
                log(nalu.toString(), p.toString());
            }
            if (type === nalu_1.NALU.IDR) {
                p.data[0].props = p.data[0].props.clone();
                p.data[0].props.isKeyframe = true;
            }
            naluSlice.props.isKeyframe = (type === nalu_1.NALU.IDR);
        }
    };
    return H264ParseProcessor;
}(processor_1.Processor));
exports.H264ParseProcessor = H264ParseProcessor;


/***/ }),
/* 21 */
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
var processor_1 = __webpack_require__(4);
var packet_1 = __webpack_require__(6);
var socket_1 = __webpack_require__(3);
// This version of our mp4-mux processor is based on the mozilla rtmpjs code
var mp4mux_1 = __webpack_require__(60);
var common_utils_1 = __webpack_require__(5);
var logger_1 = __webpack_require__(2);
var _a = logger_1.getLogger('MP4MuxProcessor(Moz)', logger_1.LoggerLevel.LOG), log = _a.log, debug = _a.debug, warn = _a.warn;
function getCodecId(codec) {
    switch (codec) {
        case MP4MuxProcessorSupportedCodecs.AAC:
            return mp4mux_1.AAC_SOUND_CODEC_ID;
        case MP4MuxProcessorSupportedCodecs.MP3:
            return mp4mux_1.MP3_SOUND_CODEC_ID;
        case MP4MuxProcessorSupportedCodecs.AVC:
            return mp4mux_1.AVC_VIDEO_CODEC_ID;
        case MP4MuxProcessorSupportedCodecs.VP6:
            return mp4mux_1.VP6_VIDEO_CODEC_ID;
    }
}
function isVideoCodec(codec) {
    switch (codec) {
        case MP4MuxProcessorSupportedCodecs.AAC:
        case MP4MuxProcessorSupportedCodecs.MP3:
            return false;
        case MP4MuxProcessorSupportedCodecs.AVC:
        case MP4MuxProcessorSupportedCodecs.VP6:
            return true;
    }
}
var getSocketDescriptor = socket_1.SocketDescriptor.createTemplateGenerator(socket_1.SocketDescriptor.fromMimeTypes('audio/mpeg', 'audio/aac', 'video/aac'), // valid inputs
socket_1.SocketDescriptor.fromMimeTypes('audio/mp4', 'video/mp4')); // possible output
var MP4MuxProcessorSupportedCodecs;
(function (MP4MuxProcessorSupportedCodecs) {
    MP4MuxProcessorSupportedCodecs["AVC"] = "avc";
    MP4MuxProcessorSupportedCodecs["AAC"] = "mp4a";
    MP4MuxProcessorSupportedCodecs["MP3"] = "mp3";
    MP4MuxProcessorSupportedCodecs["VP6"] = "vp6f";
})(MP4MuxProcessorSupportedCodecs = exports.MP4MuxProcessorSupportedCodecs || (exports.MP4MuxProcessorSupportedCodecs = {}));
var FORCE_MP3 = false;
var MP4MuxProcessor = /** @class */ (function (_super) {
    __extends(MP4MuxProcessor, _super);
    function MP4MuxProcessor() {
        var _this = _super.call(this) || this;
        _this.hasBeenClosed_ = false;
        _this.mp4Muxer_ = null;
        _this.mp4Metadata_ = null;
        _this.keyFramePushed_ = false;
        _this.lastCodecInfo_ = [];
        _this.flushCounter_ = 0;
        _this.videoPacketQueue_ = [];
        _this.audioPacketQueue_ = [];
        _this.socketToTrackIndexMap_ = {};
        _this.createOutput();
        _this._initMP4Metadata();
        _this.on(processor_1.ProcessorEvent.INPUT_SOCKET_CREATED, function (eventData) { return _this._onInputCreated(eventData); });
        return _this;
    }
    MP4MuxProcessor.getName = function () { return 'MP4MuxProcessor'; };
    MP4MuxProcessor.prototype.templateSocketDescriptor = function (st) {
        return getSocketDescriptor(st);
    };
    MP4MuxProcessor.prototype.processTransfer_ = function (inputSocket, p, inputIndex) {
        debug("received packet: " + p.toString() + "; on input: " + inputIndex);
        if (!p.defaultPayloadInfo) {
            warn('no default payload info:', p);
            return false;
        }
        if (p.defaultPayloadInfo.isAudio()) {
            this.audioPacketQueue_.push(p);
            if (this.mp4Metadata_.tracks[this.socketToTrackIndexMap_[inputIndex]]) {
                return true;
            }
            this.audioTrackIndex_
                = this.socketToTrackIndexMap_[inputIndex]
                    = this.mp4Metadata_.tracks.length;
            // FIXME: get actual infos here from input packets
            this._addAudioTrack(FORCE_MP3 ? MP4MuxProcessorSupportedCodecs.MP3 : MP4MuxProcessorSupportedCodecs.AAC, p.defaultPayloadInfo.getSamplingRate(), p.defaultPayloadInfo.sampleDepth, p.defaultPayloadInfo.details.numChannels, p.defaultPayloadInfo.details.sequenceDurationInSeconds);
            return true;
        }
        else if (p.defaultPayloadInfo.isVideo()) {
            this.videoPacketQueue_.push(p);
            if (this.mp4Metadata_.tracks[this.socketToTrackIndexMap_[inputIndex]]) {
                return true;
            }
            this.videoTrackIndex_
                = this.socketToTrackIndexMap_[inputIndex]
                    = this.mp4Metadata_.tracks.length;
            this._addVideoTrack(MP4MuxProcessorSupportedCodecs.AVC, 
            // FIXME: get actual infos here from input packets
            p.defaultPayloadInfo.getSamplingRate(), // fps
            p.defaultPayloadInfo.details.width, p.defaultPayloadInfo.details.height, // resolution
            p.defaultPayloadInfo.details.sequenceDurationInSeconds);
            return true;
        }
        return true;
    };
    MP4MuxProcessor.prototype.handleSymbolicPacket_ = function (symbol) {
        switch (symbol) {
            case packet_1.PacketSymbol.RESUME:
                log('resume symbol received, closing state');
                this._close();
                break;
            case packet_1.PacketSymbol.EOS:
                this.flushCounter_++;
                if (this.flushCounter_ !== this.in.length) {
                    break;
                }
                log('received EOS symbols count equal to inputs width, flushing');
                this._flush();
                this.flushCounter_ = 0;
            default:
                break;
        }
        return _super.prototype.handleSymbolicPacket_.call(this, symbol);
    };
    MP4MuxProcessor.prototype._processVideoPacket = function (p) {
        var _this = this;
        var videoTrackMetadata = this.mp4Metadata_.tracks[this.videoTrackIndex_];
        var timescale = videoTrackMetadata.timescale;
        p.forEachBufferSlice(function (bufferSlice) {
            var mp4Muxer = _this.mp4Muxer_;
            var data = bufferSlice.getUint8Array();
            if (bufferSlice.props.isBitstreamHeader) {
                log('got bitstream header at:', p.toString());
            }
            else {
                debug('video packet:', p.toString());
            }
            if (bufferSlice.props.isKeyframe) {
                log('got keyframe at:', p.toString());
            }
            mp4Muxer.pushPacket(mp4mux_1.MP4MuxPacketType.VIDEO_PACKET, mp4mux_1.AVC_VIDEO_CODEC_ID, data, p.getScaledDts(timescale), true, bufferSlice.props.isBitstreamHeader, bufferSlice.props.isKeyframe, p.getScaledCto(timescale));
            if (!_this.keyFramePushed_ &&
                bufferSlice.props.isKeyframe) {
                _this.keyFramePushed_ = true;
            }
        });
    };
    MP4MuxProcessor.prototype._processAudioPacket = function (p) {
        var _this = this;
        var audioTrackMetadata = this.mp4Metadata_.tracks[this.audioTrackIndex_];
        var timescale = audioTrackMetadata.timescale;
        var audioDetails = {
            sampleDepth: audioTrackMetadata.samplesize,
            sampleRate: audioTrackMetadata.samplerate,
            samplesPerFrame: mp4mux_1.AAC_SAMPLES_PER_FRAME,
            numChannels: audioTrackMetadata.channels
        };
        p.forEachBufferSlice(function (bufferSlice) {
            var mp4Muxer = _this.mp4Muxer_;
            var data = bufferSlice.getUint8Array();
            if (bufferSlice.props.isBitstreamHeader) {
                log('got audio codec init data');
            }
            debug('audio packet:', p.toString());
            mp4Muxer.pushPacket(mp4mux_1.MP4MuxPacketType.AUDIO_PACKET, FORCE_MP3 ? mp4mux_1.MP3_SOUND_CODEC_ID : mp4mux_1.AAC_SOUND_CODEC_ID, data, p.getScaledDts(timescale), true, bufferSlice.props.isBitstreamHeader, bufferSlice.props.isKeyframe, p.getScaledCto(timescale), audioDetails);
            if (!_this.keyFramePushed_ &&
                bufferSlice.props.isKeyframe) {
                _this.keyFramePushed_ = true;
            }
        });
    };
    MP4MuxProcessor.prototype._onInputCreated = function (eventData) {
        log('input socket created');
    };
    MP4MuxProcessor.prototype._initMP4Metadata = function () {
        this.mp4Metadata_ = {
            tracks: [],
            duration: 0,
            audioTrackId: NaN,
            videoTrackId: NaN
        };
    };
    MP4MuxProcessor.prototype._initMuxer = function () {
        log('initMuxer() called with mp4 metadata model:', this.mp4Metadata_);
        var mp4Muxer = this.mp4Muxer_ = new mp4mux_1.MP4Mux(this.mp4Metadata_, false);
        mp4Muxer.ondata = this.onMp4MuxerData_.bind(this);
        mp4Muxer.oncodecinfo = this.onMp4MuxerCodecInfo_.bind(this);
        this.hasBeenClosed_ = true;
    };
    MP4MuxProcessor.prototype._getNextTrackId = function () {
        return (this.mp4Metadata_.tracks.length + 1);
    };
    MP4MuxProcessor.prototype._close = function () {
        var _this = this;
        log('closing state');
        if (!this.hasBeenClosed_) {
            this._initMuxer();
        }
        log('processing video packet queue', this.videoPacketQueue_);
        this.videoPacketQueue_.forEach(function (packet) {
            _this._processVideoPacket(packet);
        });
        this.videoPacketQueue_ = [];
        this.audioPacketQueue_.forEach(function (packet) {
            _this._processAudioPacket(packet);
        });
        this.audioPacketQueue_ = [];
    };
    MP4MuxProcessor.prototype._flush = function () {
        log('flush called');
        this._close();
        log('will flush internal muxer engine');
        this.mp4Muxer_.flush();
    };
    MP4MuxProcessor.prototype._addAudioTrack = function (audioCodec, sampleRate, sampleSize, numChannels, durationSeconds, language) {
        if (language === void 0) { language = 'und'; }
        if (isVideoCodec(audioCodec)) {
            throw new Error('Not an audio codec: ' + audioCodec);
        }
        var audioTrack = {
            duration: durationSeconds >= 0 ? durationSeconds * sampleRate : -1,
            codecDescription: audioCodec,
            codecId: getCodecId(audioCodec),
            language: language,
            timescale: sampleRate,
            samplerate: sampleRate,
            channels: numChannels,
            samplesize: sampleSize
        };
        log('creating audio track:', audioCodec);
        this.mp4Metadata_.audioTrackId = this._getNextTrackId();
        this.mp4Metadata_.tracks.push(audioTrack);
        return audioTrack;
    };
    MP4MuxProcessor.prototype._addVideoTrack = function (videoCodec, frameRate, width, height, durationSeconds) {
        if (!isVideoCodec(videoCodec)) {
            throw new Error('Not a video codec: ' + videoCodec);
        }
        var videoTrack = {
            duration: durationSeconds >= 0 ? durationSeconds * frameRate : -1,
            codecDescription: videoCodec,
            codecId: getCodecId(videoCodec),
            timescale: frameRate,
            framerate: frameRate,
            width: width,
            height: height,
            language: 'und'
        };
        log('creating video track:', videoCodec);
        this.mp4Metadata_.videoTrackId = this._getNextTrackId();
        this.mp4Metadata_.tracks.push(videoTrack);
        if (!common_utils_1.isNumber(this.mp4Metadata_.duration) && common_utils_1.isNumber(videoTrack.duration)) {
            this.mp4Metadata_.duration = videoTrack.duration;
            log('set top-level metadata duration based on video-track:', this.mp4Metadata_.duration);
        }
        return videoTrack;
    };
    MP4MuxProcessor.prototype.onMp4MuxerData_ = function (data) {
        var p = packet_1.Packet.fromArrayBuffer(data.buffer, 'video/mp4; codecs="avc1.64001f,mp4a.40.2"');
        log('transferring new mp4 data:', p);
        this.out[0].transfer(p);
    };
    MP4MuxProcessor.prototype.onMp4MuxerCodecInfo_ = function (codecInfo) {
        log('got new codec info:', codecInfo);
        this.lastCodecInfo_ = codecInfo;
    };
    return MP4MuxProcessor;
}(processor_1.Processor));
exports.MP4MuxProcessor = MP4MuxProcessor;


/***/ }),
/* 22 */
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
var processor_1 = __webpack_require__(4);
var packet_1 = __webpack_require__(6);
var socket_1 = __webpack_require__(3);
var logger_1 = __webpack_require__(2);
var src_1 = __webpack_require__(33);
var mp4_track_1 = __webpack_require__(41);
var payload_description_1 = __webpack_require__(7);
var buffer_1 = __webpack_require__(11);
var buffer_props_1 = __webpack_require__(9);
var _a = logger_1.getLogger('MP4DemuxProcessor', logger_1.LoggerLevel.LOG), log = _a.log, warn = _a.warn, debug = _a.debug;
exports.AUDIO_SAMPLING_RATES_LUT = [5500, 11025, 22050, 44100];
exports.AAC_SAMPLES_PER_FRAME = 1024;
var getSocketDescriptor = socket_1.SocketDescriptor.createTemplateGenerator(socket_1.SocketDescriptor.fromMimeTypes('audio/mp4', 'video/mp4'), // valid inputs
socket_1.SocketDescriptor.fromMimeTypes('audio/mpeg', 'audio/aac', 'video/aac') // output
);
var MP4DemuxProcessor = /** @class */ (function (_super) {
    __extends(MP4DemuxProcessor, _super);
    function MP4DemuxProcessor() {
        var _this = _super.call(this) || this;
        _this._trackIdToOutputs = {};
        _this.createInput();
        _this._demuxer = src_1.createMp4Demuxer();
        return _this;
    }
    MP4DemuxProcessor.getName = function () { return 'MP4DemuxProcessor'; };
    MP4DemuxProcessor.prototype.templateSocketDescriptor = function (st) {
        return getSocketDescriptor(st);
    };
    MP4DemuxProcessor.prototype._ensureOutputForTrack = function (track) {
        var payloadDescriptor = new payload_description_1.PayloadDescriptor(track.mimeType);
        var sd = new socket_1.SocketDescriptor([
            payloadDescriptor
        ]);
        if (!this._trackIdToOutputs[track.id]) {
            this._trackIdToOutputs[track.id] = this.createOutput(sd);
        }
        return this._trackIdToOutputs[track.id];
    };
    MP4DemuxProcessor.prototype.handleSymbolicPacket_ = function (s) {
        log('handling symbol:', s);
        return _super.prototype.handleSymbolicPacket_.call(this, s);
    };
    MP4DemuxProcessor.prototype.processTransfer_ = function (inS, p) {
        var _this = this;
        p.data.forEach(function (bufferSlice) {
            _this._demuxer.append(bufferSlice.getUint8Array());
            _this._demuxer.end();
            var tracks = _this._demuxer.tracks;
            var _loop_1 = function (trackId) {
                var track = tracks[trackId];
                log('mime-type:', track.mimeType, 'id:', track.id, 'duration:', track.getDuration(), 'type:', track.type, 'timescale:', track.getTimescale());
                if (track.isVideo()) {
                    log('video-track:', track.getResolution());
                }
                log('defaults:', track.getDefaults());
                if (!track.getDefaults()) {
                    warn('no track defaults');
                }
                var output = _this._ensureOutputForTrack(track);
                // let frameRate: number = NaN; // add a Mp4Track property for this and extract inside inspector.js
                var sampleDepth = NaN;
                var sampleRate = NaN;
                var sampleDurationNum = 1;
                var numChannels = NaN;
                var samplesCount = 1;
                var constantBitrate = NaN;
                var codecData = null;
                if (track.type === mp4_track_1.Mp4Track.TYPE_VIDEO) {
                    var videoAtom = track.getMetadataAtom();
                    // FIXME: support HEVC too
                    var avcC = track.getReferenceAtom();
                    if (!avcC) {
                        warn('no codec data found for video track with id:', track.id);
                        return "continue";
                    }
                    var avcCodecData = avcC.data;
                    var spsParsed = avcC.spsParsed[0];
                    sampleRate = spsParsed.frameRate.fpsNum;
                    sampleDurationNum = spsParsed.frameRate.fpsDen;
                    sampleDepth = spsParsed.bitDepth;
                    if (avcC.numOfSequenceParameterSets > 1) {
                        warn('more than one SPS found, but only handling one here');
                    }
                    if (avcC.numOfPictureParameterSets > 1 || avcC.numOfSequenceParameterSets > 1) {
                        throw new Error('No support for more than one sps/pps pair');
                    }
                    codecData = avcCodecData;
                    /*
                    const sps: Uint8Array[] = avcC.sps;
                    const pps: Uint8Array[] = avcC.pps;
                    console.log('pushing SPS data')
                    output.transfer(Packet.fromSlice(BufferSlice.fromTypedArray(sps[0], initProps)));
                    console.log('pushing PPS data')
                    output.transfer(Packet.fromSlice(BufferSlice.fromTypedArray(pps[0], initProps)));
                    */
                }
                else if (track.type === mp4_track_1.Mp4Track.TYPE_AUDIO) {
                    var audioAtom = track.getMetadataAtom();
                    sampleDepth = audioAtom.sampleSize;
                    numChannels = audioAtom.channelCount;
                    sampleRate = audioAtom.sampleRate;
                    log('channels:', numChannels, 'sample-rate:', sampleRate, 'sample-depth:', sampleDepth);
                    // FIXME: support MP3 too (this is for AAC only)
                    var esds = track.getReferenceAtom();
                    if (!esds) {
                        warn('no codec data found for audio track with id:', track.id);
                        return "continue";
                    }
                    var audioDecoderConfig = esds.decoderConfig;
                    log('found ESDS/AAC decoder config:', audioDecoderConfig);
                    constantBitrate = audioDecoderConfig.avgBitrate;
                    log('cbr:', constantBitrate, 'b/s');
                    log('flagged ESDS-atom-data packet as bitstream header');
                    var esdsData = esds.data;
                    codecData = esdsData;
                }
                var sampleDuration = track.getDefaults() ? track.getDefaults().sampleDuration : 1;
                log('sample-duration found:', sampleDuration);
                var protoProps = new buffer_props_1.BufferProperties(track.mimeType, sampleRate, sampleDepth, sampleDurationNum, samplesCount);
                protoProps.details.sequenceDurationInSeconds = track.getDurationInSeconds();
                if (track.isVideo()) {
                    protoProps.details.width = track.getResolution()[0];
                    protoProps.details.height = track.getResolution()[1];
                    protoProps.details.samplesPerFrame = 1;
                    protoProps.codec = 'avc';
                }
                else if (track.isAudio()) {
                    protoProps.details.numChannels = numChannels;
                    protoProps.details.constantBitrate = constantBitrate;
                    protoProps.details.samplesPerFrame = exports.AAC_SAMPLES_PER_FRAME;
                    protoProps.codec = 'aac';
                }
                if (codecData) {
                    var initProps = protoProps.clone();
                    initProps.isBitstreamHeader = true;
                    log('created/transferring codec data packet; flagged bitstream header');
                    output.transfer(packet_1.Packet.fromSlice(buffer_1.BufferSlice.fromTypedArray(codecData, initProps)));
                }
                track.getFrames().forEach(function (frame) {
                    var props = protoProps;
                    if (frame.frameType === src_1.Frame.IDR_FRAME) {
                        log('got idr-frame at:', frame.timeUs, '[us]');
                        props = protoProps.clone();
                        props.isKeyframe = true;
                    }
                    var frameSlice = bufferSlice.unwrap(frame.bytesOffset, frame.size, props);
                    var p = packet_1.Packet.fromSlice(frameSlice);
                    // timestamps of this packet
                    p.timestamp = frame.scaledDecodingTime;
                    p.presentationTimeOffset = frame.scaledPresentationTimeOffset;
                    p.setTimescale(frame.timescale);
                    // log('timescale:', frame.timescale)
                    debug('pushing packet with:', frameSlice.toString());
                    output.transfer(p);
                });
            };
            // tslint:disable-next-line: forin
            for (var trackId in tracks) {
                _loop_1(trackId);
            }
        });
        return true;
    };
    return MP4DemuxProcessor;
}(processor_1.Processor));
exports.MP4DemuxProcessor = MP4DemuxProcessor;


/***/ }),
/* 23 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var VideoAtom = /** @class */ (function (_super) {
    __extends(VideoAtom, _super);
    function VideoAtom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoAtom.fillVideoAtom = function (atom, data) {
        atom.containerDataOffset = 78;
        atom.dataReferenceIndex = byte_parser_utils_1.default.parseUint16(data, 6);
        atom.temporalQuality = byte_parser_utils_1.default.parseUint32(data, 16);
        atom.spatialQuality = byte_parser_utils_1.default.parseUint32(data, 20);
        atom.width = byte_parser_utils_1.default.parseUint16(data, 24);
        atom.height = byte_parser_utils_1.default.parseUint16(data, 26);
        atom.horizontalResolution = byte_parser_utils_1.default.parseUint16(data, 28) +
            byte_parser_utils_1.default.parseUint16(data, 30) / 16;
        atom.verticalResolution = byte_parser_utils_1.default.parseUint16(data, 32) +
            byte_parser_utils_1.default.parseUint16(data, 34) / 16;
        atom.frameCount = byte_parser_utils_1.default.parseUint16(data, 40);
        atom.compressorName = byte_parser_utils_1.default.parseStringWithLength(data, 42, 74);
        atom.depth = byte_parser_utils_1.default.parseUint16(data, 74);
        return atom;
    };
    return VideoAtom;
}(atom_1.ContainerAtom));
exports.VideoAtom = VideoAtom;


/***/ }),
/* 24 */
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
var eventemitter3_1 = __webpack_require__(13);
var FlowState;
(function (FlowState) {
    FlowState["VOID"] = "void";
    FlowState["WAITING"] = "waiting";
    // socket to reach this state, and then no more data gets transferred
    FlowState["FLOWING"] = "flowing";
    FlowState["COMPLETED"] = "completed"; // this is when all external input socket data is consumed
    // or otherwise not available anymore, and the last EOS has reached the terminating output sockets
})(FlowState = exports.FlowState || (exports.FlowState = {}));
var FlowCompletionResultCode;
(function (FlowCompletionResultCode) {
    FlowCompletionResultCode["NONE"] = "none";
    FlowCompletionResultCode["OK"] = "ok";
    FlowCompletionResultCode["FAILED"] = "failed";
})(FlowCompletionResultCode = exports.FlowCompletionResultCode || (exports.FlowCompletionResultCode = {}));
var FlowErrorType;
(function (FlowErrorType) {
    FlowErrorType["CORE"] = "core";
    FlowErrorType["PROC"] = "proc";
    FlowErrorType["RUNTIME"] = "runtime";
})(FlowErrorType = exports.FlowErrorType || (exports.FlowErrorType = {}));
var FlowEvent;
(function (FlowEvent) {
    FlowEvent["STATE_CHANGE_PENDING"] = "flow:state-change-pending";
    FlowEvent["STATE_CHANGE_ABORTED"] = "flow:state-change-aborted";
    FlowEvent["STATE_CHANGED"] = "flow:state-changed";
})(FlowEvent = exports.FlowEvent || (exports.FlowEvent = {}));
// TODO: create generic Set class in objec-ts
var Flow = /** @class */ (function (_super) {
    __extends(Flow, _super);
    function Flow(onStateChangePerformed, onStateChangeAborted) {
        var _this = _super.call(this) || this;
        _this.onStateChangePerformed = onStateChangePerformed;
        _this.onStateChangeAborted = onStateChangeAborted;
        _this._state = FlowState.VOID;
        _this._pendingState = null;
        _this._prevState = null;
        _this._processors = new Set();
        _this._extSockets = new Set();
        _this._whenDoneResolve = null;
        _this._whenDoneReject = null;
        _this._completionResultCode = FlowCompletionResultCode.NONE;
        _this._whenDone = new Promise(function (resolve, reject) {
            _this._whenDoneResolve = resolve;
            _this._whenDoneReject = reject;
        });
        return _this;
    }
    Object.defineProperty(Flow.prototype, "procList", {
        get: function () {
            return Array.from(this._processors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Flow.prototype, "externalSockets", {
        get: function () {
            return Array.from(this.getExternalSockets());
        },
        enumerable: true,
        configurable: true
    });
    Flow.prototype.add = function () {
        var _this = this;
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        p.forEach(function (proc) {
            _this._processors.add(proc);
        });
    };
    Flow.prototype.remove = function () {
        var _this = this;
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        p.forEach(function (proc) {
            if (!_this._processors.delete(proc)) {
                throw new Error('Set delete method returned false');
            }
        });
    };
    Flow.prototype.whenCompleted = function () {
        return this._whenDone;
    };
    Flow.prototype.getCurrentState = function () {
        return this._state;
    };
    Flow.prototype.getPendingState = function () {
        return this._pendingState;
    };
    Flow.prototype.getPreviousState = function () {
        return this._prevState;
    };
    Flow.prototype.abortPendingStateChange = function (reason) {
        this.onStateChangeAborted_(reason);
        this._pendingState = null;
        this.onStateChangeAborted(reason);
        this.emit(FlowEvent.STATE_CHANGE_ABORTED);
    };
    Flow.prototype.getExternalSockets = function () {
        return this._extSockets;
    };
    Flow.prototype.getCompletionResult = function () {
        return this._completionResultCode;
    };
    Object.defineProperty(Flow.prototype, "state", {
        // more of a convenience since the setter exists but can't be public therefore
        // (Typescript wants accessors to agree in visibility)
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (this._pendingState) {
                throw new Error('Flow state-change still pending: ' + this._pendingState);
            }
            if (newState === FlowState.COMPLETED
                && this._completionResultCode === FlowCompletionResultCode.NONE) {
                throw new Error('state change to COMPLETED has to be triggered by setCompleted');
            }
            // update pending state
            this._pendingState = newState;
            this.emit(FlowEvent.STATE_CHANGE_PENDING);
            var cb = this.onStateChangePerformed_.bind(this, this._state, newState);
            // we can go to completed from any state
            if (newState === FlowState.COMPLETED) {
                this.onCompleted_(cb);
                return;
            }
            var currentState = this._state;
            switch (currentState) {
                case FlowState.COMPLETED:
                    fail();
                    break;
                case FlowState.VOID:
                    if (newState !== FlowState.WAITING) {
                        fail();
                    }
                    this.onVoidToWaiting_(cb);
                    break;
                case FlowState.WAITING:
                    if (newState === FlowState.FLOWING) {
                        this.onWaitingToFlowing_(cb);
                    }
                    else if (newState === FlowState.VOID) {
                        this.onWaitingToVoid_(cb);
                    }
                    else {
                        fail();
                    }
                    break;
                case FlowState.FLOWING:
                    if (newState !== FlowState.WAITING) {
                        fail();
                    }
                    this.onFlowingToWaiting_(cb);
                    break;
            }
            function fail() {
                this._pendingState = null;
                throw new Error("Can not transition from flow state " + currentState + " to " + newState);
            }
        },
        enumerable: true,
        configurable: true
    });
    Flow.prototype.setCompleted = function (completionResult, error) {
        if (error === void 0) { error = null; }
        this._completionResultCode = completionResult.code;
        // enforce state change to completed
        this.state = FlowState.COMPLETED;
        switch (this._completionResultCode) {
            case FlowCompletionResultCode.NONE:
                throw new Error('Can not complete with no result');
            case FlowCompletionResultCode.OK:
                this._whenDoneResolve(completionResult);
                break;
            case FlowCompletionResultCode.FAILED:
                this._whenDoneReject(error);
                break;
        }
    };
    Flow.prototype.onStateChangePerformed_ = function (previousState, newState) {
        this._prevState = previousState;
        this._state = newState;
        this._pendingState = null;
        this.onStateChangePerformed(this._prevState, this._state);
        this.emit(FlowEvent.STATE_CHANGED);
    };
    return Flow;
}(eventemitter3_1.EventEmitter));
exports.Flow = Flow;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

Copyright (c) Stephan Hesse 2015 <tchakabam@gmail.com>

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var lambda_processor_1 = __webpack_require__(49);
var mp3_parse_processor_1 = __webpack_require__(27);
var h264_parse_processor_1 = __webpack_require__(20);
var ffmpeg_convert_processor_1 = __webpack_require__(29);
var mp4_mux_mozilla_processor_1 = __webpack_require__(21);
var mp4_mux_hlsjs_processor_1 = __webpack_require__(32);
var mp4_demux_processor_1 = __webpack_require__(22);
var mpeg_ts_demux_processor_1 = __webpack_require__(45);
var broadway_processor_1 = __webpack_require__(112);
var http_to_media_source_flow_1 = __webpack_require__(113);
var combine_mp4s_to_mov_flow_1 = __webpack_require__(117);
var Utils = __webpack_require__(5);
var Crypto = __webpack_require__(121);
var xhr_socket_1 = __webpack_require__(18);
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var buffer_1 = __webpack_require__(11);
var buffer_props_1 = __webpack_require__(9);
var payload_description_1 = __webpack_require__(7);
var signal_1 = __webpack_require__(26);
var flow_1 = __webpack_require__(24);
var web_file_chooser_socket_1 = __webpack_require__(125);
var html5_media_source_buffer_socket_1 = __webpack_require__(46);
var web_file_download_socket_1 = __webpack_require__(47);
exports.Common = {
    Utils: Utils,
    Crypto: Crypto,
    MimeTypes: payload_description_1.CommonMimeTypes,
    MimetypePrefix: payload_description_1.MimetypePrefix
};
exports.Core = {
    Processor: processor_1.Processor,
    ProcessorEvent: processor_1.ProcessorEvent,
    Socket: socket_1.Socket,
    SocketEvent: socket_1.SocketEvent,
    SocketDescriptor: socket_1.SocketDescriptor,
    InputSocket: socket_1.InputSocket,
    OutputSocket: socket_1.OutputSocket,
    Packet: packet_1.Packet,
    BufferSlice: buffer_1.BufferSlice,
    BufferProperties: buffer_props_1.BufferProperties,
    PayloadDescriptor: payload_description_1.PayloadDescriptor,
    PayloadDetails: payload_description_1.PayloadDetails,
    Signal: signal_1.Signal,
    Flow: flow_1.Flow, FlowErrorType: flow_1.FlowErrorType, FlowEvent: flow_1.FlowEvent, FlowState: flow_1.FlowState
};
exports.Processors = {
    H264ParseProcessor: h264_parse_processor_1.H264ParseProcessor,
    MP3ParseProcessor: mp3_parse_processor_1.MP3ParseProcessor,
    MP4MuxProcessor: mp4_mux_mozilla_processor_1.MP4MuxProcessor,
    MP4MuxHlsjsProcessor: mp4_mux_hlsjs_processor_1.MP4MuxHlsjsProcessor,
    MP4DemuxProcessor: mp4_demux_processor_1.MP4DemuxProcessor,
    MPEGTSDemuxProcessor: mpeg_ts_demux_processor_1.MPEGTSDemuxProcessor,
    BroadwayProcessor: broadway_processor_1.BroadwayProcessor,
    LambdaProcessor: lambda_processor_1.LambdaProcessor,
    FFmpegConvertProcessor: ffmpeg_convert_processor_1.FFmpegConvertProcessor
};
exports.IoSockets = {
    XhrSocket: xhr_socket_1.XhrSocket,
    WebFileChooserSocket: web_file_chooser_socket_1.WebFileChooserSocket,
    WebFileDownloadSocket: web_file_download_socket_1.WebFileDownloadSocket,
    HTML5MediaSourceBufferSocket: html5_media_source_buffer_socket_1.HTML5MediaSourceBufferSocket,
};
exports.Flows = {
    HttpToMediaSourceFlow: http_to_media_source_flow_1.HttpToMediaSourceFlow,
    CombineMp4sToMovFlow: combine_mp4s_to_mov_flow_1.CombineMp4sToMovFlow
};
var env_1 = __webpack_require__(14);
exports.EnvironmentVars = env_1.EnvironmentVars;
exports.setEnvironmentVar = env_1.setEnvironmentVar;
exports.getEnvironmentVar = env_1.getEnvironmentVar;
var logger_1 = __webpack_require__(2);
exports.setLocalLoggerLevel = logger_1.setLocalLoggerLevel;
exports.getLocalLoggerConfig = logger_1.createAndGetLocalLoggerConfig;
exports.removeLocalLoggerConfig = logger_1.removeLocalLoggerConfig;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module
 *
 * Signals allow us to implement an asynchroneous chain-of-resp pattern
 * along the data-path. This should allow to "cast" queries or an acknowledgable information
 * to components up or down the path. The direction of propagation has to be chosen when creating a signal.
 *
 * Signals can be emitted to a group of SignalReceivers. The receivers return a Promise<boolean> which can
 * be resolved or rejected asynchroneously (but must not). A receiver MUST resolve or reject the promise,
 * and also return some valid Promise in the first place (the return value is not nullable).
 *
 * See the SignalReceiver interface and `cast` method.
 *
 * Delegation within receiver implementation can be eased using the SignalHandler type.
 *
 * When casting one signal to many receivers (using the `emit` method) the results of all `cast`
 * calls, the Promise<boolean> aka SignalReceiverCastResult, are collected as an array of results.
 * The results are collected and resolved as all Promises of the receiver group are resolved,
 * and applied an OR logic, meaning if one of the receivers result Promise resolved true, then
 * the result of that cast call will be true. In any other case it will be false.
 *
 * In order to handle failures of components not resolving/rejecting Promises at all,
 * either the components implementing SignalReceiver can wrap their Promise with a timeout,
 * so that they will get automatically rejected. Alternatively, a Signal can be subclassed
 * so that it's emit method, and the subsequent result collector method incorporate such a timeout,
 * and then only aggregate the Promises which have rejected/resolved within that time.
 *
 * The fact a Promise can be resolved/rejected and the result flag (boolean) on the Promise template type
 * allow for exactly four possible "characters" of results to a `cast` call on a receiver. As we will see,
 * this collapses to three effective cases that are meaningful to implement.
 *
 * The idea of a Signal usually is to be able to query something from components within a hiearchical chain,
 * or graph, while trying to make sure that some component in the chain will be able to handle the query
 * or acknowledge the information. When a the result promise gets rejected, we assume that no component CANT
 * handle the signal. When it get's resolved, the respective receiver is assumed that it CAN handle it.
 *
 * Only in the resolve case, the result value (boolean) is actually useful. It indicates, given that
 * a component can handle the signal, wether it actually will do that. This is useful if upon emitting a Signal
 * we want to establish wether for example a resource driver that might respond to the signal "could" actually
 * handle it but is currently busy (result is "false") or wether the resource is not capable or inexistent.
 *
 * For example think of a RTSP receiver that is asked to seek to a position, and is sent a relevant Signal.
 * Of course it will resolve the Promise because it CAN do that in principle. Let's say the receiver just lost
 * it's connection to the server and is unable to re-establish that after several retries. Eventually it will
 * resolve the Promise with `false`.
 *
 * Wether the Signal class itself is actually used as such is completely up the implementation
 * of the SignalReceiver. The class here only defines how the interface is, its async-ness, how the receiver
 * is being called, and how its results are collected and aggregated.
 *
 * The chain-of-resp is in the end formed from the receivers themselves encapsulating references or some sort
 * of loose coupling to each others that defines their hiearchy or graph relationships.
 *
 * When Signal.emit is called, the signal only can know about the first direct group of receivers which
 * are all on the same level.
 *
 * Alike, the cast result does not give any information as to which component(s) have actually resolved
 * the Promise (the results get collected and aggregated anyway). Also note that in principle many
 * components can resolve positively/negatively within one call. Signals are, by default, not a "race",
 * they ideally let every receiver an equal chance (a given timeout for example). However, it is not impossible
 * to implement Signal subclasses which will decide to actually race receivers against each others
 * (and receivers may encapsulate each others in such way when handling signals, or having several internal
 * signal handlers racing).
 *
 * We are not returning references back from the chain-of-resp of the receivers, because a) that would
 * break the encapsulation and loose coupling across receivers, and b) it would actually not be useful
 * for the emitter of the Signals to receive references under the SignalReceiver type anyway.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SignalDirection;
(function (SignalDirection) {
    SignalDirection[SignalDirection["UP"] = -1] = "UP";
    SignalDirection[SignalDirection["DOWN"] = 1] = "DOWN";
    SignalDirection[SignalDirection["ZERO"] = 0] = "ZERO"; // no propagation
})(SignalDirection = exports.SignalDirection || (exports.SignalDirection = {}));
function collectSignalReceiverCastResults(results) {
    if (results.length === 0) {
        return Promise.resolve(false);
    }
    return Promise.all(results).then(function (results) {
        return results.some(function (res) { return res === true; });
    });
}
exports.collectSignalReceiverCastResults = collectSignalReceiverCastResults;
var Signal = /** @class */ (function () {
    function Signal(_direction) {
        this._direction = _direction;
    }
    Signal.prototype.direction = function () {
        return this._direction;
    };
    Signal.prototype.isDirectionUp = function () {
        return this._direction === SignalDirection.UP;
    };
    Signal.prototype.isDirectionDown = function () {
        return this._direction === SignalDirection.DOWN;
    };
    Signal.prototype.isDirectionZero = function () {
        return this._direction === SignalDirection.ZERO;
    };
    /**
     * Broadcast method
     */
    Signal.prototype.emit = function (receivers) {
        var _this = this;
        return collectSignalReceiverCastResults(receivers.map(function (receiver) { return receiver.cast(_this); }));
    };
    return Signal;
}());
exports.Signal = Signal;


/***/ }),
/* 27 */
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
var processor_1 = __webpack_require__(4);
var packet_1 = __webpack_require__(6);
var socket_1 = __webpack_require__(3);
var payload_description_1 = __webpack_require__(7);
var mp3_parser_1 = __webpack_require__(54);
var buffer_1 = __webpack_require__(11);
var logger_1 = __webpack_require__(2);
var buffer_props_1 = __webpack_require__(9);
var _a = logger_1.getLogger('MP3ParseProcessor', logger_1.LoggerLevel.LOG), log = _a.log, debug = _a.debug, error = _a.error;
var MP3ParseProcessor = /** @class */ (function (_super) {
    __extends(MP3ParseProcessor, _super);
    function MP3ParseProcessor() {
        var _this = _super.call(this) || this;
        _this.createInput();
        _this.createOutput();
        return _this;
    }
    MP3ParseProcessor.getName = function () { return 'MP3ParseProcessor'; };
    MP3ParseProcessor.prototype.templateSocketDescriptor = function (st) {
        return new socket_1.SocketDescriptor();
    };
    MP3ParseProcessor.prototype.processTransfer_ = function (inS, p) {
        p.forEachBufferSlice(this._onBufferSlice, this._onProcessingError, this);
        return true;
    };
    MP3ParseProcessor.prototype._onProcessingError = function (bufferSlice, err) {
        error('MP3Parse error:', err);
        return true;
    };
    MP3ParseProcessor.prototype._onBufferSlice = function (bufferSlice) {
        // log('onBufferSlice');
        var _this = this;
        var res = mp3_parser_1.MP3Parser.parse(bufferSlice.getUint8Array());
        log('parsed mp3 frames:', res.mp3Frames.length);
        var timestamp = 0;
        debug('parser result:', res);
        res.mp3Frames.forEach(function (frame) {
            var p = packet_1.Packet.fromSlice(buffer_1.BufferSlice.fromTypedArray(frame.data), timestamp, 0);
            var samplesPerFrame = frame.frameDuration / frame.sampleDuration;
            var sampleRate = frame.headerRef.sampleRate;
            var props = new buffer_props_1.BufferProperties(payload_description_1.CommonMimeTypes.AUDIO_MP3, sampleRate, 16, 1, samplesPerFrame, false, true);
            props.codec = 'mp3a'; // .mp3?
            props.details.samplesPerFrame = samplesPerFrame;
            props.details.numChannels = frame.headerRef.channelCount;
            props.details.constantBitrate = (8 * frame.data.byteLength) / (samplesPerFrame / sampleRate);
            log('new mp3 frame props:', props.toString());
            p.data[0].props = props;
            timestamp += frame.frameDuration;
            log('created new mp3 packet @:', p.timestamp);
            _this.out[0].transfer(p);
        });
    };
    return MP3ParseProcessor;
}(processor_1.Processor));
exports.MP3ParseProcessor = MP3ParseProcessor;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NALU = /** @class */ (function () {
    function NALU(data) {
        this.payload = data;
        this.nri = (this.payload[0] & 0x60) >> 5;
        this.ntype = this.payload[0] & 0x1f;
    }
    Object.defineProperty(NALU, "NDR", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "IDR", {
        get: function () {
            return 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "SEI", {
        get: function () {
            return 6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "SPS", {
        get: function () {
            return 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "PPS", {
        get: function () {
            return 8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "AUD", {
        get: function () {
            return 9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NALU, "TYPES", {
        get: function () {
            return _a = {},
                _a[NALU.IDR] = 'IDR',
                _a[NALU.SEI] = 'SEI',
                _a[NALU.SPS] = 'SPS',
                _a[NALU.PPS] = 'PPS',
                _a[NALU.NDR] = 'NDR',
                _a[NALU.AUD] = 'AUD',
                _a;
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    NALU.type = function (nalu) {
        if (nalu.ntype in NALU.TYPES) {
            return NALU.TYPES[nalu.ntype];
        }
        else {
            return 'UNKNOWN';
        }
    };
    NALU.prototype.toString = function () {
        return NALU.type(this) + ": NRI: " + this.getNri();
    };
    NALU.prototype.getNri = function () {
        return this.nri >> 6;
    };
    NALU.prototype.type = function () {
        return this.ntype;
    };
    NALU.prototype.isKeyframe = function () {
        // tslint:disable-next-line: triple-equals
        return this.ntype == NALU.IDR;
    };
    NALU.prototype.getSize = function () {
        return 4 + this.payload.byteLength;
    };
    NALU.prototype.getData = function () {
        var result = new Uint8Array(this.getSize());
        var view = new DataView(result.buffer);
        view.setUint32(0, this.getSize() - 4);
        result.set(this.payload, 4);
        return result;
    };
    return NALU;
}());
exports.NALU = NALU;


/***/ }),
/* 29 */
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
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var ffmpeg_tool_1 = __webpack_require__(59);
var buffer_1 = __webpack_require__(11);
var buffer_props_1 = __webpack_require__(9);
var FFmpegConvertProcessor = /** @class */ (function (_super) {
    __extends(FFmpegConvertProcessor, _super);
    function FFmpegConvertProcessor(_audioConfig, _videoConfig, _defaultInputFileExt) {
        if (_audioConfig === void 0) { _audioConfig = null; }
        if (_videoConfig === void 0) { _videoConfig = null; }
        if (_defaultInputFileExt === void 0) { _defaultInputFileExt = 'dat'; }
        var _this = _super.call(this) || this;
        _this._audioConfig = _audioConfig;
        _this._videoConfig = _videoConfig;
        _this._defaultInputFileExt = _defaultInputFileExt;
        _this.ffmpeg_ = null;
        if (!_audioConfig && !_videoConfig) {
            throw new Error('Need at least audio or video config');
        }
        if (!self.ffmpeg) {
            console.warn('`ffmpeg` not found in global scope');
        }
        else {
            // TODO: allow to set/init this in a deferred way and with deps-injection
            _this.ffmpeg_ = new ffmpeg_tool_1.FFmpegTool(ffmpeg);
        }
        _this.createInput();
        _this.createOutput();
        return _this;
    }
    FFmpegConvertProcessor.getName = function () { return 'FFmpegConvertProcessor'; };
    FFmpegConvertProcessor.prototype.templateSocketDescriptor = function (socketType) {
        return new socket_1.SocketDescriptor();
    };
    FFmpegConvertProcessor.prototype.processTransfer_ = function (inS, p, inputIndex) {
        var _this = this;
        var inputFileExt = p.defaultPayloadInfo.getMediaSubtype();
        if (inputFileExt === '*') {
            inputFileExt = this._defaultInputFileExt;
        }
        if (!this.ffmpeg_) {
            throw new Error("FFmpeg tool wrapper not initialized");
        }
        p.forEachBufferSlice(function (bs) {
            var outData = _this.ffmpeg_.convertAVFile(bs.getUint8Array(), inputFileExt, _this._audioConfig, _this._videoConfig);
            if (!outData) {
                return;
            }
            var outputMimeType = null;
            // TODO: improve the mapping here
            if (_this._videoConfig) {
                outputMimeType = 'video/' + _this._videoConfig.targetFiletypeExt;
            }
            else if (_this._audioConfig) {
                outputMimeType = 'audio/' + _this._audioConfig.targetFiletypeExt;
            }
            _this.out[0].transfer(packet_1.Packet.fromSlice(buffer_1.BufferSlice.fromTypedArray(outData, new buffer_props_1.BufferProperties(outputMimeType))));
        });
        return true;
    };
    return FFmpegConvertProcessor;
}(processor_1.Processor));
exports.FFmpegConvertProcessor = FFmpegConvertProcessor;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var common_utils_1 = __webpack_require__(5);
var mp4iso_base_1 = __webpack_require__(31);
exports.START_DATE = -2082844800000; /* midnight after Jan. 1, 1904 */
exports.DEFAULT_MOVIE_MATRIX = [1.0, 0, 0, 0, 1.0, 0, 0, 0, 1.0];
exports.DEFAULT_OP_COLOR = [0, 0, 0];
var FileTypeBox = /** @class */ (function (_super) {
    __extends(FileTypeBox, _super);
    function FileTypeBox(majorBrand, minorVersion, compatibleBrands) {
        var _this = _super.call(this, 'ftype') || this;
        _this.majorBrand = majorBrand;
        _this.minorVersion = minorVersion;
        _this.compatibleBrands = compatibleBrands;
        return _this;
    }
    FileTypeBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 8 + (4 * this.compatibleBrands.length);
        return this.size;
    };
    FileTypeBox.prototype.write = function (data) {
        var _this = this;
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.decodeInt32(this.majorBrand));
        offset += common_utils_1.writeInt32(data, this.offset + offset, this.minorVersion);
        this.compatibleBrands.forEach(function (brand) {
            offset += common_utils_1.writeInt32(data, _this.offset + offset, common_utils_1.decodeInt32(brand));
        });
        return offset;
    };
    return FileTypeBox;
}(mp4iso_base_1.Box));
exports.FileTypeBox = FileTypeBox;
var MovieBox = /** @class */ (function (_super) {
    __extends(MovieBox, _super);
    function MovieBox(header, tracks, extendsBox, userData) {
        var _this = _super.call(this, 'moov', common_utils_1.concatArrays([header], tracks, extendsBox ? [extendsBox] : [], userData ? [userData] : [])) || this;
        _this.header = header;
        _this.tracks = tracks;
        _this.extendsBox = extendsBox;
        _this.userData = userData;
        return _this;
    }
    return MovieBox;
}(mp4iso_base_1.BoxContainerBox));
exports.MovieBox = MovieBox;
var MovieHeaderBox = /** @class */ (function (_super) {
    __extends(MovieHeaderBox, _super);
    function MovieHeaderBox(timescale, duration, nextTrackId, rate, volume, matrix, creationTime, modificationTime) {
        if (rate === void 0) { rate = 1.0; }
        if (volume === void 0) { volume = 1.0; }
        if (matrix === void 0) { matrix = exports.DEFAULT_MOVIE_MATRIX; }
        if (creationTime === void 0) { creationTime = exports.START_DATE; }
        if (modificationTime === void 0) { modificationTime = exports.START_DATE; }
        var _this = _super.call(this, 'mvhd', 0, 0) || this;
        _this.timescale = timescale;
        _this.duration = duration;
        _this.nextTrackId = nextTrackId;
        _this.rate = rate;
        _this.volume = volume;
        _this.matrix = matrix;
        _this.creationTime = creationTime;
        _this.modificationTime = modificationTime;
        return _this;
    }
    MovieHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 16 + 4 + 2 + 2 + 8 + 36 + 24 + 4;
        return this.size;
    };
    MovieHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        // Only version 0
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeDate(this.creationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeDate(this.modificationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 8, this.timescale);
        common_utils_1.writeInt32(data, this.offset + offset + 12, this.duration);
        offset += 16;
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeFloat_16_16(this.rate));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeFloat_8_8(this.volume) << 16);
        common_utils_1.writeInt32(data, this.offset + offset + 8, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        offset += 16;
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeFloat_16_16(this.matrix[0]));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeFloat_16_16(this.matrix[1]));
        common_utils_1.writeInt32(data, this.offset + offset + 8, common_utils_1.encodeFloat_16_16(this.matrix[2]));
        common_utils_1.writeInt32(data, this.offset + offset + 12, common_utils_1.encodeFloat_16_16(this.matrix[3]));
        common_utils_1.writeInt32(data, this.offset + offset + 16, common_utils_1.encodeFloat_16_16(this.matrix[4]));
        common_utils_1.writeInt32(data, this.offset + offset + 20, common_utils_1.encodeFloat_16_16(this.matrix[5]));
        common_utils_1.writeInt32(data, this.offset + offset + 24, common_utils_1.encodeFloat_2_30(this.matrix[6]));
        common_utils_1.writeInt32(data, this.offset + offset + 28, common_utils_1.encodeFloat_2_30(this.matrix[7]));
        common_utils_1.writeInt32(data, this.offset + offset + 32, common_utils_1.encodeFloat_2_30(this.matrix[8]));
        offset += 36;
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 8, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 16, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 20, 0);
        offset += 24;
        common_utils_1.writeInt32(data, this.offset + offset, this.nextTrackId);
        offset += 4;
        return offset;
    };
    return MovieHeaderBox;
}(mp4iso_base_1.FullBox));
exports.MovieHeaderBox = MovieHeaderBox;
var TrackHeaderFlags;
(function (TrackHeaderFlags) {
    TrackHeaderFlags[TrackHeaderFlags["TRACK_ENABLED"] = 1] = "TRACK_ENABLED";
    TrackHeaderFlags[TrackHeaderFlags["TRACK_IN_MOVIE"] = 2] = "TRACK_IN_MOVIE";
    TrackHeaderFlags[TrackHeaderFlags["TRACK_IN_PREVIEW"] = 4] = "TRACK_IN_PREVIEW";
})(TrackHeaderFlags = exports.TrackHeaderFlags || (exports.TrackHeaderFlags = {}));
var TrackHeaderBox = /** @class */ (function (_super) {
    __extends(TrackHeaderBox, _super);
    function TrackHeaderBox(flags, trackId, duration, width, height, volume, alternateGroup, layer, matrix, creationTime, modificationTime) {
        if (alternateGroup === void 0) { alternateGroup = 0; }
        if (layer === void 0) { layer = 0; }
        if (matrix === void 0) { matrix = exports.DEFAULT_MOVIE_MATRIX; }
        if (creationTime === void 0) { creationTime = exports.START_DATE; }
        if (modificationTime === void 0) { modificationTime = exports.START_DATE; }
        var _this = _super.call(this, 'tkhd', 0, flags) || this;
        _this.trackId = trackId;
        _this.duration = duration;
        _this.width = width;
        _this.height = height;
        _this.volume = volume;
        _this.alternateGroup = alternateGroup;
        _this.layer = layer;
        _this.matrix = matrix;
        _this.creationTime = creationTime;
        _this.modificationTime = modificationTime;
        return _this;
    }
    TrackHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 20 + 8 + 6 + 2 + 36 + 8;
        return this.size;
    };
    TrackHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        // Only version 0
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeDate(this.creationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeDate(this.modificationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 8, this.trackId);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 16, this.duration);
        offset += 20;
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 8, (this.layer << 16) | this.alternateGroup);
        common_utils_1.writeInt32(data, this.offset + offset + 12, common_utils_1.encodeFloat_8_8(this.volume) << 16);
        offset += 16;
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeFloat_16_16(this.matrix[0]));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeFloat_16_16(this.matrix[1]));
        common_utils_1.writeInt32(data, this.offset + offset + 8, common_utils_1.encodeFloat_16_16(this.matrix[2]));
        common_utils_1.writeInt32(data, this.offset + offset + 12, common_utils_1.encodeFloat_16_16(this.matrix[3]));
        common_utils_1.writeInt32(data, this.offset + offset + 16, common_utils_1.encodeFloat_16_16(this.matrix[4]));
        common_utils_1.writeInt32(data, this.offset + offset + 20, common_utils_1.encodeFloat_16_16(this.matrix[5]));
        common_utils_1.writeInt32(data, this.offset + offset + 24, common_utils_1.encodeFloat_2_30(this.matrix[6]));
        common_utils_1.writeInt32(data, this.offset + offset + 28, common_utils_1.encodeFloat_2_30(this.matrix[7]));
        common_utils_1.writeInt32(data, this.offset + offset + 32, common_utils_1.encodeFloat_2_30(this.matrix[8]));
        offset += 36;
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeFloat_16_16(this.width));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeFloat_16_16(this.height));
        offset += 8;
        return offset;
    };
    return TrackHeaderBox;
}(mp4iso_base_1.FullBox));
exports.TrackHeaderBox = TrackHeaderBox;
var MediaHeaderBox = /** @class */ (function (_super) {
    __extends(MediaHeaderBox, _super);
    function MediaHeaderBox(timescale, duration, language, creationTime, modificationTime) {
        if (language === void 0) { language = 'unk'; }
        if (creationTime === void 0) { creationTime = exports.START_DATE; }
        if (modificationTime === void 0) { modificationTime = exports.START_DATE; }
        var _this = _super.call(this, 'mdhd', 0, 0) || this;
        _this.timescale = timescale;
        _this.duration = duration;
        _this.language = language;
        _this.creationTime = creationTime;
        _this.modificationTime = modificationTime;
        return _this;
    }
    MediaHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 16 + 4;
        return this.size;
    };
    MediaHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        // Only version 0
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeDate(this.creationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeDate(this.modificationTime));
        common_utils_1.writeInt32(data, this.offset + offset + 8, this.timescale);
        common_utils_1.writeInt32(data, this.offset + offset + 12, this.duration);
        common_utils_1.writeInt32(data, this.offset + offset + 16, common_utils_1.encodeLang(this.language) << 16);
        return offset + 20;
    };
    return MediaHeaderBox;
}(mp4iso_base_1.FullBox));
exports.MediaHeaderBox = MediaHeaderBox;
var HandlerBox = /** @class */ (function (_super) {
    __extends(HandlerBox, _super);
    function HandlerBox(handlerType, name) {
        var _this = _super.call(this, 'hdlr', 0, 0) || this;
        _this.handlerType = handlerType;
        _this.name = name;
        _this._encodedName = common_utils_1.utf8decode(_this.name);
        return _this;
    }
    HandlerBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 8 + 12 + (this._encodedName.length + 1);
        return this.size;
    };
    HandlerBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.decodeInt32(this.handlerType));
        common_utils_1.writeInt32(data, this.offset + offset + 8, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 16, 0);
        offset += 20;
        data.set(this._encodedName, this.offset + offset);
        data[this.offset + offset + this._encodedName.length] = 0;
        offset += this._encodedName.length + 1;
        return offset;
    };
    return HandlerBox;
}(mp4iso_base_1.FullBox));
exports.HandlerBox = HandlerBox;
var SoundMediaHeaderBox = /** @class */ (function (_super) {
    __extends(SoundMediaHeaderBox, _super);
    function SoundMediaHeaderBox(balance) {
        if (balance === void 0) { balance = 0.0; }
        var _this = _super.call(this, 'smhd', 0, 0) || this;
        _this.balance = balance;
        return _this;
    }
    SoundMediaHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4;
        return this.size;
    };
    SoundMediaHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, common_utils_1.encodeFloat_8_8(this.balance) << 16);
        return offset + 4;
    };
    return SoundMediaHeaderBox;
}(mp4iso_base_1.FullBox));
exports.SoundMediaHeaderBox = SoundMediaHeaderBox;
var VideoMediaHeaderBox = /** @class */ (function (_super) {
    __extends(VideoMediaHeaderBox, _super);
    function VideoMediaHeaderBox(graphicsMode, opColor) {
        if (graphicsMode === void 0) { graphicsMode = 0; }
        if (opColor === void 0) { opColor = exports.DEFAULT_OP_COLOR; }
        var _this = _super.call(this, 'vmhd', 0, 0) || this;
        _this.graphicsMode = graphicsMode;
        _this.opColor = opColor;
        return _this;
    }
    VideoMediaHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 8;
        return this.size;
    };
    VideoMediaHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, (this.graphicsMode << 16) | this.opColor[0]);
        common_utils_1.writeInt32(data, this.offset + offset + 4, (this.opColor[1] << 16) | this.opColor[2]);
        return offset + 8;
    };
    return VideoMediaHeaderBox;
}(mp4iso_base_1.FullBox));
exports.VideoMediaHeaderBox = VideoMediaHeaderBox;
exports.SELF_CONTAINED_DATA_REFERENCE_FLAG = 0x000001;
var DataEntryUrlBox = /** @class */ (function (_super) {
    __extends(DataEntryUrlBox, _super);
    function DataEntryUrlBox(flags, location) {
        if (location === void 0) { location = null; }
        var _this = _super.call(this, 'url ', 0, flags) || this;
        _this.location = location;
        if (!(flags & exports.SELF_CONTAINED_DATA_REFERENCE_FLAG)) {
            _this._encodedLocation = common_utils_1.utf8decode(location);
        }
        return _this;
    }
    DataEntryUrlBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset);
        if (this._encodedLocation) {
            size += this._encodedLocation.length + 1;
        }
        return (this.size = size);
    };
    DataEntryUrlBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        if (this._encodedLocation) {
            data.set(this._encodedLocation, this.offset + offset);
            data[this.offset + offset + this._encodedLocation.length] = 0;
            offset += this._encodedLocation.length;
        }
        return offset;
    };
    return DataEntryUrlBox;
}(mp4iso_base_1.FullBox));
exports.DataEntryUrlBox = DataEntryUrlBox;
var DataReferenceBox = /** @class */ (function (_super) {
    __extends(DataReferenceBox, _super);
    function DataReferenceBox(entries) {
        var _this = _super.call(this, 'dref', 0, 0) || this;
        _this.entries = entries;
        return _this;
    }
    DataReferenceBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset) + 4;
        this.entries.forEach(function (entry) {
            size += entry.layout(offset + size);
        });
        return (this.size = size);
    };
    DataReferenceBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, this.entries.length);
        this.entries.forEach(function (entry) {
            offset += entry.write(data);
        });
        return offset;
    };
    return DataReferenceBox;
}(mp4iso_base_1.FullBox));
exports.DataReferenceBox = DataReferenceBox;
var DataInformationBox = /** @class */ (function (_super) {
    __extends(DataInformationBox, _super);
    function DataInformationBox(dataReference) {
        var _this = _super.call(this, 'dinf', [dataReference]) || this;
        _this.dataReference = dataReference;
        return _this;
    }
    return DataInformationBox;
}(mp4iso_base_1.BoxContainerBox));
exports.DataInformationBox = DataInformationBox;
var SampleDescriptionBox = /** @class */ (function (_super) {
    __extends(SampleDescriptionBox, _super);
    function SampleDescriptionBox(entries) {
        var _this = _super.call(this, 'stsd', 0, 0) || this;
        _this.entries = entries;
        return _this;
    }
    SampleDescriptionBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset);
        size += 4;
        this.entries.forEach(function (entry) {
            size += entry.layout(offset + size);
        });
        return (this.size = size);
    };
    SampleDescriptionBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, this.entries.length);
        offset += 4;
        this.entries.forEach(function (entry) {
            offset += entry.write(data);
        });
        return offset;
    };
    return SampleDescriptionBox;
}(mp4iso_base_1.FullBox));
exports.SampleDescriptionBox = SampleDescriptionBox;
var DecodingTimeToSampleBox = /** @class */ (function (_super) {
    __extends(DecodingTimeToSampleBox, _super);
    function DecodingTimeToSampleBox(flags, entries) {
        var _this = _super.call(this, 'stts', 0, flags) || this;
        _this.entries = entries;
        return _this;
    }
    DecodingTimeToSampleBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4 + (this.entries.length * 2 * 4);
        return this.size;
    };
    DecodingTimeToSampleBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries.length);
        for (var i_1 = 0; i_1 < this.entries.length; i_1++) {
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_1].sampleCount);
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_1].sampleDelta);
        }
        return offset;
    };
    return DecodingTimeToSampleBox;
}(mp4iso_base_1.FullBox));
exports.DecodingTimeToSampleBox = DecodingTimeToSampleBox;
var CompositionTimeToSampleBox = /** @class */ (function (_super) {
    __extends(CompositionTimeToSampleBox, _super);
    function CompositionTimeToSampleBox(flags, entries) {
        var _this = _super.call(this, 'ctts', 0, flags) || this;
        _this.entries = entries;
        return _this;
    }
    CompositionTimeToSampleBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4 + (this.entries.length * 2 * 4);
        return this.size;
    };
    CompositionTimeToSampleBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries.length);
        for (var i_2 = 0; i_2 < this.entries.length; i_2++) {
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_2].sampleCount);
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_2].sampleOffset);
        }
        return offset;
    };
    return CompositionTimeToSampleBox;
}(mp4iso_base_1.FullBox));
exports.CompositionTimeToSampleBox = CompositionTimeToSampleBox;
/**
 * This box contains the sample count and a table giving the size in bytes of each sample.
 * This allows the media data itself to be unframed.
 * The total number of samples in the media is always indicated in the sample count.
 */
var SampleSizeBox = /** @class */ (function (_super) {
    __extends(SampleSizeBox, _super);
    function SampleSizeBox(sampleSizes, sampleCount, defaultSampleSize) {
        if (sampleSizes === void 0) { sampleSizes = []; }
        if (sampleCount === void 0) { sampleCount = sampleSizes.length; }
        if (defaultSampleSize === void 0) { defaultSampleSize = 0; }
        var _this = _super.call(this, 'stsz', 0, 0) || this;
        _this.sampleSizes = sampleSizes;
        _this.sampleCount = sampleCount;
        _this.defaultSampleSize = defaultSampleSize;
        if (sampleSizes.length > 0 && defaultSampleSize !== 0) {
            throw new Error('Should not have default sample size unequal zero but sample-size list length > 0');
        }
        return _this;
    }
    SampleSizeBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 2 * 4 + (this.sampleSizes.length * 4);
        return this.size;
    };
    SampleSizeBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.defaultSampleSize);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.sampleCount);
        if (this.defaultSampleSize === 0) {
            for (var i_3 = 0; i_3 < this.sampleSizes.length; i_3++) {
                offset += common_utils_1.writeUint32(data, this.offset + offset, this.sampleSizes[i_3]);
            }
        }
        return offset;
    };
    return SampleSizeBox;
}(mp4iso_base_1.FullBox));
exports.SampleSizeBox = SampleSizeBox;
var SampleToChunkBox = /** @class */ (function (_super) {
    __extends(SampleToChunkBox, _super);
    function SampleToChunkBox(entries) {
        var _this = _super.call(this, 'stsc', 0, 0) || this;
        _this.entries = entries;
        return _this;
    }
    SampleToChunkBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4 + (this.entries.length * 3 * 4);
        return this.size;
    };
    SampleToChunkBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries.length);
        for (var i_4 = 0; i_4 < this.entries.length; i_4++) {
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_4].firstChunk);
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_4].samplesPerChunk);
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.entries[i_4].sampleDescriptionIndex);
        }
        return offset;
    };
    return SampleToChunkBox;
}(mp4iso_base_1.FullBox));
exports.SampleToChunkBox = SampleToChunkBox;
/**
 * The chunk offset table gives the index of each chunk into the containing file.
 *
 * There are two variants, permitting the use of 32-bit or 64-bit offsets.
 *
 * The latter is useful when managing very large presentations.
 * At most one of these variants will occur in any single instance of a sample table.
 * Offsets are file offsets, not the offset into any box within the file (e.g. Media Data Box).
 * This permits referring to media data in files without any box structure.
 * It does also mean that care must be taken when constructing a self-contained ISO file with its metadata (Movie Box) at the front,
 * as the size of the Movie Box will affect the chunk offsets to the media data.
 */
var ChunkOffsetBox = /** @class */ (function (_super) {
    __extends(ChunkOffsetBox, _super);
    function ChunkOffsetBox(chunkOffsets) {
        var _this = _super.call(this, 'stco', 0, 0) || this;
        _this.chunkOffsets = chunkOffsets;
        return _this;
    }
    ChunkOffsetBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4 + this.chunkOffsets.length * 4;
        return this.size;
    };
    ChunkOffsetBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.chunkOffsets.length);
        for (var i_5 = 0; i_5 < this.chunkOffsets.length; i_5++) {
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.chunkOffsets[i_5]);
        }
        return offset;
    };
    return ChunkOffsetBox;
}(mp4iso_base_1.FullBox));
exports.ChunkOffsetBox = ChunkOffsetBox;
var SyncSampleBox = /** @class */ (function (_super) {
    __extends(SyncSampleBox, _super);
    function SyncSampleBox(syncSampleNumbers) {
        var _this = _super.call(this, 'stss', 0, 0) || this;
        _this.syncSampleNumbers = syncSampleNumbers;
        return _this;
    }
    SyncSampleBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4 + this.syncSampleNumbers.length * 4;
        return this.size;
    };
    SyncSampleBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += common_utils_1.writeUint32(data, this.offset + offset, this.syncSampleNumbers.length);
        for (var i_6 = 0; i_6 < this.syncSampleNumbers.length; i_6++) {
            offset += common_utils_1.writeUint32(data, this.offset + offset, this.syncSampleNumbers[i_6]);
        }
        return offset;
    };
    return SyncSampleBox;
}(mp4iso_base_1.FullBox));
exports.SyncSampleBox = SyncSampleBox;
/**
 * This box provides a compact marking of the random access points within the stream.
 *
 * The table is arranged in strictly increasing order of sample number.
 *
 * If the sync sample box is not present, every sample is a random access point.
 *
 * entry_count is an integer that gives the number of entries in the following table.
 *
 * If entry_count is zero, there are no random access points within the stream and the following table is empty.
 *
 * sample_number gives the numbers of the samples that are random access points in the stream.
 */
var SampleTableBox = /** @class */ (function (_super) {
    __extends(SampleTableBox, _super);
    function SampleTableBox(sampleDescriptions, timeToSample, compositionOffsetBox, sampleToChunk, sampleSizes, chunkOffset, syncSamples) {
        var _this = _super.call(this, 'stbl', syncSamples ?
            [sampleDescriptions, timeToSample, compositionOffsetBox, sampleToChunk, sampleSizes, chunkOffset, syncSamples]
            : [sampleDescriptions, timeToSample, compositionOffsetBox, sampleToChunk, sampleSizes, chunkOffset]) || this;
        _this.sampleDescriptions = sampleDescriptions;
        _this.timeToSample = timeToSample;
        _this.compositionOffsetBox = compositionOffsetBox;
        _this.sampleToChunk = sampleToChunk;
        _this.sampleSizes = sampleSizes;
        _this.chunkOffset = chunkOffset;
        _this.syncSamples = syncSamples;
        return _this;
    }
    return SampleTableBox;
}(mp4iso_base_1.BoxContainerBox));
exports.SampleTableBox = SampleTableBox;
var MediaInformationBox = /** @class */ (function (_super) {
    __extends(MediaInformationBox, _super);
    function MediaInformationBox(header, // SoundMediaHeaderBox|VideoMediaHeaderBox
    info, sampleTable) {
        var _this = _super.call(this, 'minf', [header, info, sampleTable]) || this;
        _this.header = header;
        _this.info = info;
        _this.sampleTable = sampleTable;
        return _this;
    }
    return MediaInformationBox;
}(mp4iso_base_1.BoxContainerBox));
exports.MediaInformationBox = MediaInformationBox;
var MediaBox = /** @class */ (function (_super) {
    __extends(MediaBox, _super);
    function MediaBox(header, handler, info) {
        var _this = _super.call(this, 'mdia', [header, handler, info]) || this;
        _this.header = header;
        _this.handler = handler;
        _this.info = info;
        return _this;
    }
    return MediaBox;
}(mp4iso_base_1.BoxContainerBox));
exports.MediaBox = MediaBox;
var TrackBox = /** @class */ (function (_super) {
    __extends(TrackBox, _super);
    function TrackBox(header, media) {
        var _this = _super.call(this, 'trak', [header, media]) || this;
        _this.header = header;
        _this.media = media;
        return _this;
    }
    return TrackBox;
}(mp4iso_base_1.BoxContainerBox));
exports.TrackBox = TrackBox;
var TrackExtendsBox = /** @class */ (function (_super) {
    __extends(TrackExtendsBox, _super);
    function TrackExtendsBox(trackId, defaultSampleDescriptionIndex, defaultSampleDuration, defaultSampleSize, defaultSampleFlags) {
        var _this = _super.call(this, 'trex', 0, 0) || this;
        _this.trackId = trackId;
        _this.defaultSampleDescriptionIndex = defaultSampleDescriptionIndex;
        _this.defaultSampleDuration = defaultSampleDuration;
        _this.defaultSampleSize = defaultSampleSize;
        _this.defaultSampleFlags = defaultSampleFlags;
        return _this;
    }
    TrackExtendsBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 20;
        return this.size;
    };
    TrackExtendsBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, this.trackId);
        common_utils_1.writeInt32(data, this.offset + offset + 4, this.defaultSampleDescriptionIndex);
        common_utils_1.writeInt32(data, this.offset + offset + 8, this.defaultSampleDuration);
        common_utils_1.writeInt32(data, this.offset + offset + 12, this.defaultSampleSize);
        common_utils_1.writeInt32(data, this.offset + offset + 16, this.defaultSampleFlags);
        return offset + 20;
    };
    return TrackExtendsBox;
}(mp4iso_base_1.FullBox));
exports.TrackExtendsBox = TrackExtendsBox;
var MovieExtendsBox = /** @class */ (function (_super) {
    __extends(MovieExtendsBox, _super);
    function MovieExtendsBox(header, tracDefaults, levels) {
        var _this = _super.call(this, 'mvex', common_utils_1.concatArrays([header], tracDefaults, [levels])) || this;
        _this.header = header;
        _this.tracDefaults = tracDefaults;
        _this.levels = levels;
        return _this;
    }
    return MovieExtendsBox;
}(mp4iso_base_1.BoxContainerBox));
exports.MovieExtendsBox = MovieExtendsBox;
var MetaBox = /** @class */ (function (_super) {
    __extends(MetaBox, _super);
    function MetaBox(handler, otherBoxes) {
        var _this = _super.call(this, 'meta', 0, 0) || this;
        _this.handler = handler;
        _this.otherBoxes = otherBoxes;
        return _this;
    }
    MetaBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset);
        size += this.handler.layout(offset + size);
        this.otherBoxes.forEach(function (box) {
            size += box.layout(offset + size);
        });
        return (this.size = size);
    };
    MetaBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        offset += this.handler.write(data);
        this.otherBoxes.forEach(function (box) {
            offset += box.write(data);
        });
        return offset;
    };
    return MetaBox;
}(mp4iso_base_1.FullBox));
exports.MetaBox = MetaBox;
var MovieFragmentHeaderBox = /** @class */ (function (_super) {
    __extends(MovieFragmentHeaderBox, _super);
    function MovieFragmentHeaderBox(sequenceNumber) {
        var _this = _super.call(this, 'mfhd', 0, 0) || this;
        _this.sequenceNumber = sequenceNumber;
        return _this;
    }
    MovieFragmentHeaderBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4;
        return this.size;
    };
    MovieFragmentHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, this.sequenceNumber);
        return offset + 4;
    };
    return MovieFragmentHeaderBox;
}(mp4iso_base_1.FullBox));
exports.MovieFragmentHeaderBox = MovieFragmentHeaderBox;
var TrackFragmentFlags;
(function (TrackFragmentFlags) {
    TrackFragmentFlags[TrackFragmentFlags["BASE_DATA_OFFSET_PRESENT"] = 1] = "BASE_DATA_OFFSET_PRESENT";
    TrackFragmentFlags[TrackFragmentFlags["SAMPLE_DESCRIPTION_INDEX_PRESENT"] = 2] = "SAMPLE_DESCRIPTION_INDEX_PRESENT";
    TrackFragmentFlags[TrackFragmentFlags["DEFAULT_SAMPLE_DURATION_PRESENT"] = 8] = "DEFAULT_SAMPLE_DURATION_PRESENT";
    TrackFragmentFlags[TrackFragmentFlags["DEFAULT_SAMPLE_SIZE_PRESENT"] = 16] = "DEFAULT_SAMPLE_SIZE_PRESENT";
    TrackFragmentFlags[TrackFragmentFlags["DEFAULT_SAMPLE_FLAGS_PRESENT"] = 32] = "DEFAULT_SAMPLE_FLAGS_PRESENT";
})(TrackFragmentFlags = exports.TrackFragmentFlags || (exports.TrackFragmentFlags = {}));
var TrackFragmentHeaderBox = /** @class */ (function (_super) {
    __extends(TrackFragmentHeaderBox, _super);
    function TrackFragmentHeaderBox(flags, trackId, baseDataOffset, sampleDescriptionIndex, defaultSampleDuration, defaultSampleSize, defaultSampleFlags) {
        var _this = _super.call(this, 'tfhd', 0, flags) || this;
        _this.trackId = trackId;
        _this.baseDataOffset = baseDataOffset;
        _this.sampleDescriptionIndex = sampleDescriptionIndex;
        _this.defaultSampleDuration = defaultSampleDuration;
        _this.defaultSampleSize = defaultSampleSize;
        _this.defaultSampleFlags = defaultSampleFlags;
        return _this;
    }
    TrackFragmentHeaderBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset) + 4;
        var flags = this.flags;
        if (flags & TrackFragmentFlags.BASE_DATA_OFFSET_PRESENT) {
            size += 8;
        }
        if (flags & TrackFragmentFlags.SAMPLE_DESCRIPTION_INDEX_PRESENT) {
            size += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_DURATION_PRESENT) {
            size += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_SIZE_PRESENT) {
            size += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT) {
            size += 4;
        }
        return (this.size = size);
    };
    TrackFragmentHeaderBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        var flags = this.flags;
        common_utils_1.writeInt32(data, this.offset + offset, this.trackId);
        offset += 4;
        if (flags & TrackFragmentFlags.BASE_DATA_OFFSET_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, 0);
            common_utils_1.writeInt32(data, this.offset + offset + 4, this.baseDataOffset);
            offset += 8;
        }
        if (flags & TrackFragmentFlags.SAMPLE_DESCRIPTION_INDEX_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.sampleDescriptionIndex);
            offset += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_DURATION_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.defaultSampleDuration);
            offset += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_SIZE_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.defaultSampleSize);
            offset += 4;
        }
        if (flags & TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.defaultSampleFlags);
            offset += 4;
        }
        return offset;
    };
    return TrackFragmentHeaderBox;
}(mp4iso_base_1.FullBox));
exports.TrackFragmentHeaderBox = TrackFragmentHeaderBox;
var TrackFragmentBaseMediaDecodeTimeBox = /** @class */ (function (_super) {
    __extends(TrackFragmentBaseMediaDecodeTimeBox, _super);
    function TrackFragmentBaseMediaDecodeTimeBox(baseMediaDecodeTime) {
        var _this = _super.call(this, 'tfdt', 0, 0) || this;
        _this.baseMediaDecodeTime = baseMediaDecodeTime;
        return _this;
    }
    TrackFragmentBaseMediaDecodeTimeBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4;
        return this.size;
    };
    TrackFragmentBaseMediaDecodeTimeBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, this.baseMediaDecodeTime);
        return offset + 4;
    };
    return TrackFragmentBaseMediaDecodeTimeBox;
}(mp4iso_base_1.FullBox));
exports.TrackFragmentBaseMediaDecodeTimeBox = TrackFragmentBaseMediaDecodeTimeBox;
var TrackFragmentBox = /** @class */ (function (_super) {
    __extends(TrackFragmentBox, _super);
    function TrackFragmentBox(header, decodeTime, // move after run?
    run) {
        var _this = _super.call(this, 'traf', [header, decodeTime, run]) || this;
        _this.header = header;
        _this.decodeTime = decodeTime;
        _this.run = run;
        return _this;
    }
    return TrackFragmentBox;
}(mp4iso_base_1.BoxContainerBox));
exports.TrackFragmentBox = TrackFragmentBox;
var SampleFlags;
(function (SampleFlags) {
    SampleFlags[SampleFlags["IS_LEADING_MASK"] = 201326592] = "IS_LEADING_MASK";
    SampleFlags[SampleFlags["SAMPLE_DEPENDS_ON_MASK"] = 50331648] = "SAMPLE_DEPENDS_ON_MASK";
    SampleFlags[SampleFlags["SAMPLE_DEPENDS_ON_OTHER"] = 16777216] = "SAMPLE_DEPENDS_ON_OTHER";
    SampleFlags[SampleFlags["SAMPLE_DEPENDS_ON_NO_OTHERS"] = 33554432] = "SAMPLE_DEPENDS_ON_NO_OTHERS";
    SampleFlags[SampleFlags["SAMPLE_IS_DEPENDED_ON_MASK"] = 12582912] = "SAMPLE_IS_DEPENDED_ON_MASK";
    SampleFlags[SampleFlags["SAMPLE_HAS_REDUNDANCY_MASK"] = 3145728] = "SAMPLE_HAS_REDUNDANCY_MASK";
    SampleFlags[SampleFlags["SAMPLE_PADDING_VALUE_MASK"] = 917504] = "SAMPLE_PADDING_VALUE_MASK";
    SampleFlags[SampleFlags["SAMPLE_IS_NOT_SYNC"] = 65536] = "SAMPLE_IS_NOT_SYNC";
    SampleFlags[SampleFlags["SAMPLE_DEGRADATION_PRIORITY_MASK"] = 65535] = "SAMPLE_DEGRADATION_PRIORITY_MASK";
})(SampleFlags = exports.SampleFlags || (exports.SampleFlags = {}));
var TrackRunFlags;
(function (TrackRunFlags) {
    TrackRunFlags[TrackRunFlags["DATA_OFFSET_PRESENT"] = 1] = "DATA_OFFSET_PRESENT";
    TrackRunFlags[TrackRunFlags["FIRST_SAMPLE_FLAGS_PRESENT"] = 4] = "FIRST_SAMPLE_FLAGS_PRESENT";
    TrackRunFlags[TrackRunFlags["SAMPLE_DURATION_PRESENT"] = 256] = "SAMPLE_DURATION_PRESENT";
    TrackRunFlags[TrackRunFlags["SAMPLE_SIZE_PRESENT"] = 512] = "SAMPLE_SIZE_PRESENT";
    TrackRunFlags[TrackRunFlags["SAMPLE_FLAGS_PRESENT"] = 1024] = "SAMPLE_FLAGS_PRESENT";
    TrackRunFlags[TrackRunFlags["SAMPLE_COMPOSITION_TIME_OFFSET"] = 2048] = "SAMPLE_COMPOSITION_TIME_OFFSET";
})(TrackRunFlags = exports.TrackRunFlags || (exports.TrackRunFlags = {}));
var TrackRunBox = /** @class */ (function (_super) {
    __extends(TrackRunBox, _super);
    function TrackRunBox(flags, samples, dataOffset, firstSampleFlags) {
        var _this = _super.call(this, 'trun', 1, flags) || this;
        _this.samples = samples;
        _this.dataOffset = dataOffset;
        _this.firstSampleFlags = firstSampleFlags;
        return _this;
    }
    TrackRunBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset) + 4;
        var samplesCount = this.samples.length;
        var flags = this.flags;
        if (flags & TrackRunFlags.DATA_OFFSET_PRESENT) {
            size += 4;
        }
        if (flags & TrackRunFlags.FIRST_SAMPLE_FLAGS_PRESENT) {
            size += 4;
        }
        if (flags & TrackRunFlags.SAMPLE_DURATION_PRESENT) {
            size += 4 * samplesCount;
        }
        if (flags & TrackRunFlags.SAMPLE_SIZE_PRESENT) {
            size += 4 * samplesCount;
        }
        if (flags & TrackRunFlags.SAMPLE_FLAGS_PRESENT) {
            size += 4 * samplesCount;
        }
        if (flags & TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET) {
            size += 4 * samplesCount;
        }
        return (this.size = size);
    };
    TrackRunBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        var samplesCount = this.samples.length;
        var flags = this.flags;
        common_utils_1.writeInt32(data, this.offset + offset, samplesCount);
        offset += 4;
        if (flags & TrackRunFlags.DATA_OFFSET_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.dataOffset);
            offset += 4;
        }
        if (flags & TrackRunFlags.FIRST_SAMPLE_FLAGS_PRESENT) {
            common_utils_1.writeInt32(data, this.offset + offset, this.firstSampleFlags);
            offset += 4;
        }
        for (var i_7 = 0; i_7 < samplesCount; i_7++) {
            var sample = this.samples[i_7];
            if (flags & TrackRunFlags.SAMPLE_DURATION_PRESENT) {
                common_utils_1.writeInt32(data, this.offset + offset, sample.duration);
                offset += 4;
            }
            if (flags & TrackRunFlags.SAMPLE_SIZE_PRESENT) {
                common_utils_1.writeInt32(data, this.offset + offset, sample.size);
                offset += 4;
            }
            if (flags & TrackRunFlags.SAMPLE_FLAGS_PRESENT) {
                common_utils_1.writeInt32(data, this.offset + offset, sample.flags);
                offset += 4;
            }
            if (flags & TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET) {
                common_utils_1.writeInt32(data, this.offset + offset, sample.compositionTimeOffset);
                offset += 4;
            }
        }
        return offset;
    };
    return TrackRunBox;
}(mp4iso_base_1.FullBox));
exports.TrackRunBox = TrackRunBox;
var MovieFragmentBox = /** @class */ (function (_super) {
    __extends(MovieFragmentBox, _super);
    function MovieFragmentBox(header, trafs) {
        var _this = _super.call(this, 'moof', common_utils_1.concatArrays([header], trafs)) || this;
        _this.header = header;
        _this.trafs = trafs;
        return _this;
    }
    return MovieFragmentBox;
}(mp4iso_base_1.BoxContainerBox));
exports.MovieFragmentBox = MovieFragmentBox;
var MediaDataBox = /** @class */ (function (_super) {
    __extends(MediaDataBox, _super);
    function MediaDataBox(chunks) {
        var _this = _super.call(this, 'mdat') || this;
        _this.chunks = chunks;
        return _this;
    }
    MediaDataBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset);
        this.chunks.forEach(function (chunk) {
            size += chunk.length;
        });
        return (this.size = size);
    };
    MediaDataBox.prototype.write = function (data) {
        var _this = this;
        var offset = _super.prototype.write.call(this, data);
        this.chunks.forEach(function (chunk) {
            data.set(chunk, _this.offset + offset);
            offset += chunk.length;
        }, this);
        return offset;
    };
    return MediaDataBox;
}(mp4iso_base_1.Box));
exports.MediaDataBox = MediaDataBox;
var SampleEntry = /** @class */ (function (_super) {
    __extends(SampleEntry, _super);
    function SampleEntry(format, dataReferenceIndex) {
        var _this = _super.call(this, format) || this;
        _this.dataReferenceIndex = dataReferenceIndex;
        return _this;
    }
    SampleEntry.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 8;
        return this.size;
    };
    SampleEntry.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, this.dataReferenceIndex);
        return offset + 8;
    };
    return SampleEntry;
}(mp4iso_base_1.Box));
exports.SampleEntry = SampleEntry;
var AudioSampleEntry = /** @class */ (function (_super) {
    __extends(AudioSampleEntry, _super);
    function AudioSampleEntry(codingName, dataReferenceIndex, channelCount, sampleSize, sampleRate, otherBoxes) {
        if (channelCount === void 0) { channelCount = 2; }
        if (sampleSize === void 0) { sampleSize = 16; }
        if (sampleRate === void 0) { sampleRate = 44100; }
        if (otherBoxes === void 0) { otherBoxes = null; }
        var _this = _super.call(this, codingName, dataReferenceIndex) || this;
        _this.channelCount = channelCount;
        _this.sampleSize = sampleSize;
        _this.sampleRate = sampleRate;
        _this.otherBoxes = otherBoxes;
        return _this;
    }
    AudioSampleEntry.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset) + 20;
        this.otherBoxes && this.otherBoxes.forEach(function (box) {
            size += box.layout(offset + size);
        });
        return (this.size = size);
    };
    AudioSampleEntry.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 8, (this.channelCount << 16) | this.sampleSize);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 16, (this.sampleRate << 16));
        offset += 20;
        this.otherBoxes && this.otherBoxes.forEach(function (box) {
            offset += box.write(data);
        });
        return offset;
    };
    return AudioSampleEntry;
}(SampleEntry));
exports.AudioSampleEntry = AudioSampleEntry;
exports.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH = 0x0018;
var VideoSampleEntry = /** @class */ (function (_super) {
    __extends(VideoSampleEntry, _super);
    function VideoSampleEntry(codingName, dataReferenceIndex, width, height, compressorName, horizResolution, vertResolution, frameCount, depth, otherBoxes) {
        if (compressorName === void 0) { compressorName = ''; }
        if (horizResolution === void 0) { horizResolution = 72; }
        if (vertResolution === void 0) { vertResolution = 72; }
        if (frameCount === void 0) { frameCount = 1; }
        if (depth === void 0) { depth = exports.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH; }
        if (otherBoxes === void 0) { otherBoxes = null; }
        var _this = _super.call(this, codingName, dataReferenceIndex) || this;
        _this.width = width;
        _this.height = height;
        _this.compressorName = compressorName;
        _this.horizResolution = horizResolution;
        _this.vertResolution = vertResolution;
        _this.frameCount = frameCount;
        _this.depth = depth;
        _this.otherBoxes = otherBoxes;
        if (compressorName.length > 31) {
            throw new Error('invalid compressor name');
        }
        return _this;
    }
    VideoSampleEntry.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset) + 16 + 12 + 4 + 2 + 32 + 2 + 2;
        this.otherBoxes && this.otherBoxes.forEach(function (box) {
            size += box.layout(offset + size);
        });
        return (this.size = size);
    };
    VideoSampleEntry.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 8, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 12, 0);
        offset += 16;
        common_utils_1.writeInt32(data, this.offset + offset, (this.width << 16) | this.height);
        common_utils_1.writeInt32(data, this.offset + offset + 4, common_utils_1.encodeFloat_16_16(this.horizResolution));
        common_utils_1.writeInt32(data, this.offset + offset + 8, common_utils_1.encodeFloat_16_16(this.vertResolution));
        offset += 12;
        common_utils_1.writeInt32(data, this.offset + offset, 0);
        common_utils_1.writeInt32(data, this.offset + offset + 4, (this.frameCount << 16));
        offset += 6; // weird offset
        data[this.offset + offset] = this.compressorName.length;
        for (var i_8 = 0; i_8 < 31; i_8++) {
            data[this.offset + offset + i_8 + 1] = i_8 < this.compressorName.length ? (this.compressorName.charCodeAt(i_8) & 127) : 0;
        }
        offset += 32;
        common_utils_1.writeInt32(data, this.offset + offset, (this.depth << 16) | 0xFFFF);
        offset += 4;
        this.otherBoxes && this.otherBoxes.forEach(function (box) {
            offset += box.write(data);
        });
        return offset;
    };
    return VideoSampleEntry;
}(SampleEntry));
exports.VideoSampleEntry = VideoSampleEntry;
var RawTag = /** @class */ (function (_super) {
    __extends(RawTag, _super);
    function RawTag(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    RawTag.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + this.data.length;
        return this.size;
    };
    RawTag.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        data.set(this.data, this.offset + offset);
        return offset + this.data.length;
    };
    return RawTag;
}(mp4iso_base_1.Box));
exports.RawTag = RawTag;
// }


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var common_utils_1 = __webpack_require__(5);
var Box = /** @class */ (function () {
    function Box(boxtype, extendedType) {
        this.boxtype = boxtype;
        if (boxtype === 'uuid') {
            this.userType = extendedType;
        }
    }
    /**
    offset Position where writing will start in the output array
    {number} Size of the written data
     */
    Box.prototype.layout = function (offset) {
        this.offset = offset;
        var size = 8;
        if (this.userType) {
            size += 16;
        }
        this.size = size;
        return size;
    };
    /**
    data Output array
    {number} Amount of written bytes by this Box and its children only.
     */
    Box.prototype.write = function (data) {
        common_utils_1.writeInt32(data, this.offset, this.size);
        common_utils_1.writeInt32(data, this.offset + 4, common_utils_1.decodeInt32(this.boxtype));
        if (!this.userType) {
            return 8;
        }
        data.set(this.userType, this.offset + 8);
        return 24;
    };
    Box.prototype.toUint8Array = function () {
        var size = this.layout(0);
        var data = new Uint8Array(size);
        this.write(data);
        return data;
    };
    return Box;
}());
exports.Box = Box;
var BoxContainerBox = /** @class */ (function (_super) {
    __extends(BoxContainerBox, _super);
    function BoxContainerBox(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    BoxContainerBox.prototype.layout = function (offset) {
        var size = _super.prototype.layout.call(this, offset);
        this.children.forEach(function (child) {
            if (!child) {
                return; // skipping undefined <- FIXME: weird
            }
            size += child.layout(offset + size);
        });
        return (this.size = size);
    };
    BoxContainerBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        this.children.forEach(function (child) {
            if (!child) {
                return; // skipping undefined <- FIXME: weird
            }
            offset += child.write(data);
        });
        return offset;
    };
    return BoxContainerBox;
}(Box));
exports.BoxContainerBox = BoxContainerBox;
var FullBox = /** @class */ (function (_super) {
    __extends(FullBox, _super);
    function FullBox(boxtype, version, flags) {
        if (version === void 0) { version = 0; }
        if (flags === void 0) { flags = 0; }
        var _this = _super.call(this, boxtype) || this;
        _this.version = version;
        _this.flags = flags;
        return _this;
    }
    FullBox.prototype.layout = function (offset) {
        this.size = _super.prototype.layout.call(this, offset) + 4;
        return this.size;
    };
    FullBox.prototype.write = function (data) {
        var offset = _super.prototype.write.call(this, data);
        common_utils_1.writeInt32(data, this.offset + offset, (this.version << 24) | this.flags);
        return offset + 4;
    };
    return FullBox;
}(Box));
exports.FullBox = FullBox;


/***/ }),
/* 32 */
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
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var mp4_remuxer_1 = __webpack_require__(62);
var buffer_1 = __webpack_require__(11);
var logger_1 = __webpack_require__(2);
var payload_description_1 = __webpack_require__(7);
var common_utils_1 = __webpack_require__(5);
var buffer_props_1 = __webpack_require__(9);
var log = logger_1.getLogger('MP4MuxHlsjsProcessor').log;
var config = {
    maxBufferHole: 1.5,
    maxAudioFramesDrift: 2,
    stretchShortVideoTrack: false
};
var getSocketDescriptor = socket_1.SocketDescriptor.createTemplateGenerator(socket_1.SocketDescriptor.fromMimeTypes('audio/mpeg', 'audio/aac', 'video/aac'), // valid inputs
socket_1.SocketDescriptor.fromMimeTypes('audio/mp4', 'video/mp4')); // possible output
var MP4MuxHlsjsProcessor = /** @class */ (function (_super) {
    __extends(MP4MuxHlsjsProcessor, _super);
    function MP4MuxHlsjsProcessor() {
        var _this = _super.call(this) || this;
        _this._fmp4Remux = new mp4_remuxer_1.Fmp4Remuxer(_this._onFmp4RemuxerEvent.bind(_this), config);
        _this._videoTrack = {
            type: 'video',
            id: 1,
            duration: 10,
            samples: [],
            inputTimeScale: 90000,
            timescale: 90000,
            sps: null,
            pps: null,
            codec: null,
            width: 0,
            height: 0,
            dropped: 0,
            sequenceNumber: 0,
            pixelRatio: [1, 1],
            len: 0,
            nbNalu: 0
        };
        _this._audioTrack = {
            type: 'audio',
            id: 2,
            duration: 10,
            codec: null,
            timescale: 90000,
            samples: [],
            config: null,
            samplerate: 44100,
            isAAC: true,
            channelCount: 2,
            inputTimeScale: 90000,
            sequenceNumber: 0,
            manifestCodec: null,
            len: 0,
            nbNalu: 0
        };
        _this._videoTrackPacketIndex = 0;
        _this._audioTrackPacketIndex = 0;
        _this._flushSymbolCnt = 0;
        _this._firstVideoDts = null;
        _this._firstAudioDts = null;
        _this.createOutput();
        return _this;
    }
    MP4MuxHlsjsProcessor.getName = function () { return 'MP4MuxHlsjsProcessor'; };
    MP4MuxHlsjsProcessor.prototype.templateSocketDescriptor = function (st) {
        return getSocketDescriptor(st);
    };
    MP4MuxHlsjsProcessor.prototype.processTransfer_ = function (inS, p) {
        var _this = this;
        p.forEachBufferSlice(function (bufferSlice) {
            var codec = bufferSlice.props.codec;
            if (payload_description_1.PayloadCodec.isAvc(codec)) {
                if (bufferSlice.props.isBitstreamHeader) {
                    // note: per spec, sps/pps can be several buffers
                    if (bufferSlice.props.tags.has('sps')) {
                        _this._videoTrack.sps = [bufferSlice.getUint8Array()];
                    }
                    else if (bufferSlice.props.tags.has('pps')) {
                        _this._videoTrack.pps = [bufferSlice.getUint8Array()];
                    }
                    _this._videoTrack.width = bufferSlice.props.details.width;
                    _this._videoTrack.height = bufferSlice.props.details.height;
                    _this._videoTrack.codec = bufferSlice.props.codec;
                    // outside of setting codec/metadata on our track model
                    // we don't need to do anything with this
                    return;
                }
                if (_this._firstVideoDts === null) {
                    log('first video dts:', p.getNormalizedDts(), p.presentationTimeOffset);
                    _this._firstVideoDts = p.timestamp;
                }
                _this._videoTrack.samples.push({
                    pts: p.getPresentationTimestamp(),
                    dts: p.timestamp,
                    length: 1,
                    id: _this._videoTrackPacketIndex,
                    units: [{ data: bufferSlice.getUint8Array() }],
                    key: bufferSlice.props.isKeyframe
                });
                // this._videoTrack.len++; // FIXME
                _this._videoTrackPacketIndex++;
            }
            else if (payload_description_1.PayloadCodec.isAac(codec)) {
                // log(p, bufferSlice);
                // FIXME: we are resetting this on every sample, once would be enough
                //
                _this._audioTrack.codec = codec;
                _this._audioTrack.manifestCodec = codec;
                _this._audioTrack.config = bufferSlice.props.details.codecConfigurationData;
                if (_this._firstAudioDts === null) {
                    log('first audio dts:', p.getNormalizedDts(), p.presentationTimeOffset);
                    _this._firstAudioDts = p.timestamp;
                }
                _this._audioTrack.samples.push({
                    pts: p.getPresentationTimestamp(),
                    dts: p.timestamp,
                    length: 1,
                    id: _this._audioTrackPacketIndex,
                    units: [{ data: bufferSlice.getUint8Array() }],
                    key: bufferSlice.props.isKeyframe
                });
                _this._audioTrack.len += bufferSlice.length; // FIXME
                _this._audioTrackPacketIndex++;
            }
            else if (true /* TODO: support mp3/mpegaudio */) {
                _this._audioTrack.isAAC = false;
            }
        });
        return true;
    };
    /**
     * @override
    symbol
     */
    MP4MuxHlsjsProcessor.prototype.handleSymbolicPacket_ = function (symbol) {
        if (symbol === packet_1.PacketSymbol.FLUSH) {
            this._flushSymbolCnt++;
            log('received flush symbol');
            if (this._flushSymbolCnt === this.in.length) {
                this._flushSymbolCnt = 0;
                this._flush();
            }
        }
        return false;
        // return super.handleSymbolicPacket_(symbol);
    };
    MP4MuxHlsjsProcessor.prototype._onFmp4RemuxerEvent = function (event, data) {
        switch (event) {
            case mp4_remuxer_1.Fmp4RemuxerEvent.GOT_INIT_PTS_VALUE:
                log('got init-pts value:', data);
                break;
            case mp4_remuxer_1.Fmp4RemuxerEvent.WROTE_INIT_SEGMENT: {
                var tracks = data.tracks;
                if (tracks.audio) {
                    log('got init data for a new audio track');
                    var bs = buffer_1.BufferSlice.fromTypedArray(tracks.audio.initSegment);
                    var props = new buffer_props_1.BufferProperties(tracks.audio.container);
                    props.codec = tracks.audio.codec;
                    props.details.numChannels = tracks.audio.metadata.channelCount;
                    bs.props = props;
                    var p = packet_1.Packet.fromSlice(bs);
                    p.timestamp = 0;
                    log('transferring init-data mp4 audio packet of', p.getTotalBytes(), 'bytes');
                    this.out[0].transfer(p);
                }
                if (tracks.video) {
                    log('got init data for a new video track');
                    var bs = buffer_1.BufferSlice.fromTypedArray(tracks.video.initSegment);
                    var props = new buffer_props_1.BufferProperties(tracks.video.container);
                    props.codec = tracks.video.codec;
                    props.details.width = tracks.video.metadata.width;
                    props.details.height = tracks.video.metadata.height;
                    bs.props = props;
                    var p = packet_1.Packet.fromSlice(bs);
                    p.timestamp = 0;
                    log('transferring init-data mp4 video packet of', p.getTotalBytes(), 'bytes');
                    this.out[0].transfer(p);
                }
                break;
            }
            case mp4_remuxer_1.Fmp4RemuxerEvent.WROTE_PAYLOAD_SEGMENT: {
                var payloadData = data;
                log('got mp4 fragment-data with payload-type:', payloadData.payloadType);
                var props = new buffer_props_1.BufferProperties(payloadData.payloadType + '/mp4');
                props.codec = payloadData.codec;
                props.samplesCount = payloadData.nbOfSamples;
                var moof = buffer_1.BufferSlice.fromTypedArray(payloadData.fragmentHeader, props);
                var mdat = buffer_1.BufferSlice.fromTypedArray(payloadData.fragmentData, props);
                var p = packet_1.Packet.fromSlices(0, 0, moof, mdat);
                log('transferring payload-data mp4 packet of', p.getTotalBytes(), 'bytes, type:', payloadData.payloadType);
                this.out[0].transfer(p);
                break;
            }
        }
    };
    MP4MuxHlsjsProcessor.prototype._flush = function () {
        var _this = this;
        if (this._videoTrackPacketIndex === 0) {
            return;
        }
        log('flushing at a/v packets:', this._videoTrackPacketIndex, this._audioTrackPacketIndex);
        common_utils_1.dispatchAsyncTask(function () { return _this._fmp4Remux.process(_this._audioTrack, _this._videoTrack, null, null, 0, true, true); });
    };
    return MP4MuxHlsjsProcessor;
}(processor_1.Processor));
exports.MP4MuxHlsjsProcessor = MP4MuxHlsjsProcessor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var mpegts_demuxer_1 = __webpack_require__(34);
var mp4_demuxer_1 = __webpack_require__(40);
var webm_demuxer_1 = __webpack_require__(43);
var web_worker_1 = __webpack_require__(111);
var mpegts_demuxer_2 = __webpack_require__(34);
exports.MpegTSDemuxer = mpegts_demuxer_2.MpegTSDemuxer;
var mp4_demuxer_2 = __webpack_require__(40);
exports.Mp4Demuxer = mp4_demuxer_2.Mp4Demuxer;
var webm_demuxer_2 = __webpack_require__(43);
exports.WebMDemuxer = webm_demuxer_2.WebMDemuxer;
var video_types_1 = __webpack_require__(38);
exports.FrameRate = video_types_1.FrameRate;
exports.Size = video_types_1.Size;
var track_1 = __webpack_require__(8);
exports.Track = track_1.Track;
var frame_1 = __webpack_require__(10);
exports.Frame = frame_1.Frame;
var atom_1 = __webpack_require__(0);
exports.Atom = atom_1.Atom;
exports.ContainerAtom = atom_1.ContainerAtom;
var ts_track_1 = __webpack_require__(39);
exports.TSTrack = ts_track_1.TSTrack;
function createMpegTSDemuxer() {
    return new mpegts_demuxer_1.MpegTSDemuxer();
}
exports.createMpegTSDemuxer = createMpegTSDemuxer;
function createMp4Demuxer() {
    return new mp4_demuxer_1.Mp4Demuxer();
}
exports.createMp4Demuxer = createMp4Demuxer;
function createWebMDemuxer() {
    return new webm_demuxer_1.WebMDemuxer();
}
exports.createWebMDemuxer = createWebMDemuxer;
var InspectorActionType;
(function (InspectorActionType) {
    InspectorActionType["CREATE_MP4_DEMUX_JOB"] = "CREATE_MP4_DEMUX_JOB";
    InspectorActionType["CREATE_MP4_DEMUX_JOB_RESPONSE"] = "CREATE_MP4_DEMUX_JOB_RESPONSE";
    InspectorActionType["CREATE_MPEGTS_DEMUX_JOB"] = "CREATE_MPEGTS_DEMUX_JOB";
    InspectorActionType["CREATE_MPEGTS_DEMUX_JOB_RESPONSE"] = "CREATE_MPEGTS_DEMUX_JOB_RESPONSE";
    InspectorActionType["CREATE_WEBM_DEMUX_JOB"] = "CREATE_WEBM_DEMUX_JOB";
    InspectorActionType["CREATE_WEBM_DEMUX_JOB_RESPONSE"] = "CREATE_WEBM_DEMUX_JOB_RESPONSE";
    InspectorActionType["EXECUTE_JOB_APPEND"] = "EXECUTE_JOB_APPEND";
    InspectorActionType["EXECUTE_JOB_APPEND_RESPONSE"] = "EXECUTE_JOB_APPEND_RESPONSE";
    InspectorActionType["END_JOB"] = "END_JOB";
    InspectorActionType["END_JOB_RESPONSE"] = "END_JOB_RESPONSE";
})(InspectorActionType = exports.InspectorActionType || (exports.InspectorActionType = {}));
global.onmessage = web_worker_1.WebWorker.onMessage;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bit_reader_1 = __webpack_require__(15);
var pes_reader_1 = __webpack_require__(68);
var ts_track_1 = __webpack_require__(39);
var track_1 = __webpack_require__(8);
var CONTAINER_TYPE;
(function (CONTAINER_TYPE) {
    CONTAINER_TYPE[CONTAINER_TYPE["UNKNOWN"] = 1] = "UNKNOWN";
    CONTAINER_TYPE[CONTAINER_TYPE["MPEG_TS"] = 2] = "MPEG_TS";
    CONTAINER_TYPE[CONTAINER_TYPE["RAW_AAC"] = 3] = "RAW_AAC";
    CONTAINER_TYPE[CONTAINER_TYPE["RAW_MPEG_AUDIO"] = 4] = "RAW_MPEG_AUDIO";
})(CONTAINER_TYPE || (CONTAINER_TYPE = {}));
var MpegTSDemuxer = /** @class */ (function () {
    function MpegTSDemuxer() {
        this.containerType = CONTAINER_TYPE.UNKNOWN;
        this.pmtParsed = false;
        this.packetsCount = 0;
        this.pmtId = -1;
        this.tracks = {};
    }
    MpegTSDemuxer.prototype.append = function (data) {
        if (!this.data || this.data.byteLength === 0 || this.dataOffset >= this.data.byteLength) {
            this.data = data;
            this.dataOffset = 0;
        }
        else {
            var newLen = this.data.byteLength + data.byteLength;
            var temp = new Uint8Array(newLen);
            temp.set(this.data, 0);
            temp.set(data, this.data.byteLength);
            this.data = temp;
        }
        this.parse();
        if (this.dataOffset > 0) {
            this.data = this.data.subarray(this.dataOffset);
            this.dataOffset = 0;
        }
        this.updateTracks();
    };
    MpegTSDemuxer.prototype.end = function () {
        for (var trackId in this.tracks) {
            if (this.tracks.hasOwnProperty(trackId)) {
                this.tracks[trackId].pes.flush();
                this.tracks[trackId].update();
            }
        }
        this.data = null;
    };
    MpegTSDemuxer.prototype.parse = function () {
        this.findContainerType();
        if (this.containerType === CONTAINER_TYPE.MPEG_TS) {
            this.readHeader();
            this.readSamples();
        }
        else { // FIXME: support raw mpeg audio
            var dataParser = new bit_reader_1.BitReader(this.data);
            this.tracks[0] = new ts_track_1.TSTrack(0, track_1.Track.TYPE_AUDIO, track_1.Track.MIME_TYPE_AAC, new pes_reader_1.PESReader(0, pes_reader_1.PESReader.TS_STREAM_TYPE_AAC));
            this.tracks[0].pes.appendData(false, dataParser);
        }
    };
    MpegTSDemuxer.prototype.updateTracks = function () {
        for (var trackId in this.tracks) {
            if (this.tracks.hasOwnProperty(trackId)) {
                this.tracks[trackId].update();
            }
        }
    };
    MpegTSDemuxer.prototype.resetTracks = function () {
        for (var id in this.tracks) {
            if (this.tracks.hasOwnProperty(id)) {
                this.tracks[id].pes.reset();
            }
        }
    };
    MpegTSDemuxer.prototype.findContainerType = function () {
        while (this.dataOffset < this.data.byteLength) {
            if (this.data[this.dataOffset] === MpegTSDemuxer.MPEGTS_SYNC) {
                this.containerType = CONTAINER_TYPE.MPEG_TS;
                break;
            }
            else if ((this.data.byteLength - this.dataOffset) >= 4) {
                var dataRead = (this.data[this.dataOffset] << 8) | (this.data[this.dataOffset + 1]);
                if (dataRead === 0x4944 || (dataRead & 0xfff6) === 0xfff0) {
                    this.containerType = CONTAINER_TYPE.RAW_AAC;
                    break;
                }
            }
            this.dataOffset++;
        }
        if (this.containerType === CONTAINER_TYPE.UNKNOWN) {
            throw new Error('Format not supported');
        }
    };
    MpegTSDemuxer.prototype.readHeader = function () {
        while (this.dataOffset < this.data.byteLength - 1) {
            var byteRead = this.data[this.dataOffset];
            this.dataOffset++;
            if (byteRead === MpegTSDemuxer.MPEGTS_SYNC
                && (this.data.byteLength - this.dataOffset) >= MpegTSDemuxer.MPEGTS_PACKET_SIZE) {
                var packet = this.data.subarray(this.dataOffset, this.dataOffset + MpegTSDemuxer.MPEGTS_PACKET_SIZE);
                this.dataOffset += MpegTSDemuxer.MPEGTS_PACKET_SIZE;
                this.processTSPacket(packet);
                if (this.pmtParsed) {
                    break;
                }
            }
        }
    };
    MpegTSDemuxer.prototype.readSamples = function () {
        while (this.dataOffset < this.data.byteLength - 1) {
            var byteRead = this.data[this.dataOffset++];
            if (byteRead === MpegTSDemuxer.MPEGTS_SYNC
                && (this.data.byteLength - this.dataOffset) >= MpegTSDemuxer.MPEGTS_PACKET_SIZE) {
                var packet = this.data.subarray(this.dataOffset, this.dataOffset
                    + MpegTSDemuxer.MPEGTS_PACKET_SIZE);
                this.dataOffset += MpegTSDemuxer.MPEGTS_PACKET_SIZE;
                this.processTSPacket(packet);
            }
        }
    };
    MpegTSDemuxer.prototype.processTSPacket = function (packet) {
        console.log('packet found at offset:', packet.byteOffset);
        this.packetsCount++;
        var packetParser = new bit_reader_1.BitReader(packet);
        packetParser.skipBits(1);
        var payloadUnitStartIndicator = (packetParser.readBits(1) !== 0);
        packetParser.skipBits(1);
        var pid = packetParser.readBits(13);
        var adaptationField = (packetParser.readByte() & 0x30) >> 4;
        if (adaptationField > 1) {
            var length_1 = packetParser.readByte();
            if (length_1 > 0) {
                packetParser.skipBytes(length_1);
            }
        }
        if (adaptationField === 1 || adaptationField === 3) {
            if (pid === 0) {
                this.parseProgramId(payloadUnitStartIndicator, packetParser);
            }
            else if (pid === this.pmtId) {
                this.parseProgramTable(payloadUnitStartIndicator, packetParser);
            }
            else {
                var track = this.tracks[pid];
                if (track && track.pes) {
                    track.pes.appendData(payloadUnitStartIndicator, packetParser);
                }
            }
        }
    };
    MpegTSDemuxer.prototype.parseProgramId = function (payloadUnitStartIndicator, packetParser) {
        if (payloadUnitStartIndicator) {
            packetParser.skipBytes(packetParser.readByte());
        }
        packetParser.skipBits(27 + 7 * 8);
        this.pmtId = packetParser.readBits(13);
    };
    MpegTSDemuxer.prototype.parseProgramTable = function (payloadUnitStartIndicator, packetParser) {
        if (payloadUnitStartIndicator) {
            packetParser.skipBytes(packetParser.readByte());
        }
        packetParser.skipBits(12);
        var sectionLength = packetParser.readBits(12);
        packetParser.skipBits(4 + 7 * 8);
        var programInfoLength = packetParser.readBits(12);
        packetParser.skipBytes(programInfoLength);
        var bytesRemaining = sectionLength - 9 - programInfoLength - 4;
        while (bytesRemaining > 0) {
            var streamType = packetParser.readBits(8);
            packetParser.skipBits(3);
            var elementaryPid = packetParser.readBits(13);
            packetParser.skipBits(4);
            var infoLength = packetParser.readBits(12);
            packetParser.skipBytes(infoLength);
            bytesRemaining -= infoLength + 5;
            if (!this.tracks[elementaryPid]) {
                var pes = new pes_reader_1.PESReader(elementaryPid, streamType);
                var type = void 0;
                var mimeType = void 0;
                if (streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_AAC) {
                    type = track_1.Track.TYPE_AUDIO;
                    mimeType = track_1.Track.MIME_TYPE_AAC;
                }
                else if (streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_H264) {
                    type = track_1.Track.TYPE_VIDEO;
                    mimeType = track_1.Track.MIME_TYPE_AVC;
                }
                else if (streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_ID3) {
                    type = track_1.Track.TYPE_TEXT;
                    mimeType = track_1.Track.MIME_TYPE_ID3;
                }
                else if (streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_MPA || streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_MPA_LSF) {
                    type = track_1.Track.TYPE_AUDIO;
                    mimeType = track_1.Track.MIME_TYPE_MPEG;
                }
                else if (streamType === pes_reader_1.PESReader.TS_STREAM_TYPE_METADATA) {
                    // do nothing
                }
                else {
                    type = track_1.Track.TYPE_UNKNOWN;
                    mimeType = track_1.Track.MIME_TYPE_UNKNOWN;
                }
                this.tracks[elementaryPid] = new ts_track_1.TSTrack(elementaryPid, type, mimeType, pes);
            }
        }
        this.pmtParsed = true;
    };
    MpegTSDemuxer.MPEGTS_SYNC = 0x47;
    MpegTSDemuxer.MPEGTS_PACKET_SIZE = 187;
    return MpegTSDemuxer;
}());
exports.MpegTSDemuxer = MpegTSDemuxer;


/***/ }),
/* 35 */
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
var bit_reader_1 = __webpack_require__(15);
var payload_reader_1 = __webpack_require__(12);
var frame_1 = __webpack_require__(10);
var track_1 = __webpack_require__(8);
var State;
(function (State) {
    State[State["FIND_SYNC"] = 1] = "FIND_SYNC";
    State[State["READ_HEADER"] = 2] = "READ_HEADER";
    State[State["READ_FRAME"] = 3] = "READ_FRAME";
})(State || (State = {}));
var AdtsReader = /** @class */ (function (_super) {
    __extends(AdtsReader, _super);
    function AdtsReader() {
        var _this = _super.call(this) || this;
        _this.channels = 0;
        _this.sampleRate = 0;
        _this.frameDuration = 0;
        _this.currentFrameSize = 0;
        _this.state = State.FIND_SYNC;
        _this.dataOffset = 0;
        return _this;
    }
    AdtsReader.prototype.getMimeType = function () {
        return track_1.Track.MIME_TYPE_AAC;
    };
    AdtsReader.prototype.consumeData = function (pts) {
        if (!this.dataBuffer) {
            return;
        }
        if (pts >= 0) {
            this.timeUs = pts;
        }
        if (this.firstTimestamp === -1) {
            this.firstTimestamp = this.timeUs;
        }
        while (this.dataOffset < this.dataBuffer.byteLength) {
            if (this.state === State.FIND_SYNC) {
                this.findNextSync();
            }
            else if (this.state === State.READ_HEADER) {
                if (this.dataBuffer.byteLength - this.dataOffset < (AdtsReader.ADTS_HEADER_SIZE +
                    AdtsReader.ADTS_SYNC_SIZE)) {
                    break;
                }
                this.parseAACHeader();
            }
            else if (this.state === State.READ_FRAME) {
                if ((this.dataBuffer.byteLength - this.dataOffset) < (AdtsReader.ADTS_SYNC_SIZE +
                    AdtsReader.ADTS_HEADER_SIZE + this.currentFrameSize)) {
                    break;
                }
                this.frames.push(new frame_1.Frame(frame_1.Frame.IDR_FRAME, this.timeUs, this.currentFrameSize, this.frameDuration, this.dataOffset));
                this.timeUs = this.timeUs + this.frameDuration;
                this.dataOffset += (AdtsReader.ADTS_SYNC_SIZE + AdtsReader.ADTS_HEADER_SIZE +
                    this.currentFrameSize);
                this.state = State.FIND_SYNC;
            }
        }
        this.dataBuffer = this.dataBuffer.subarray(this.dataOffset);
        this.dataOffset = 0;
    };
    AdtsReader.prototype.findNextSync = function () {
        var limit = this.dataBuffer.byteLength - 1;
        for (var i_1 = this.dataOffset; i_1 < limit; i_1++) {
            var dataRead = (((this.dataBuffer[i_1]) << 8) | (this.dataBuffer[i_1 + 1]));
            if ((dataRead & 0xfff6) === 0xfff0) {
                this.dataOffset = i_1;
                if (this.dataOffset < this.dataBuffer.byteLength) {
                    this.state = State.READ_HEADER;
                }
                return;
            }
        }
        this.dataOffset = this.dataBuffer.byteLength;
    };
    AdtsReader.prototype.parseAACHeader = function () {
        var aacHeaderParser = new bit_reader_1.BitReader(this.dataBuffer.subarray(this.dataOffset, this.dataOffset + AdtsReader.ADTS_SYNC_SIZE + AdtsReader.ADTS_HEADER_SIZE));
        aacHeaderParser.skipBits(15);
        var hasCrc = !aacHeaderParser.readBool();
        aacHeaderParser.skipBits(2);
        var sampleRateIndex = aacHeaderParser.readBits(4);
        if (sampleRateIndex < AdtsReader.ADTS_SAMPLE_RATES.length) {
            this.sampleRate = AdtsReader.ADTS_SAMPLE_RATES[sampleRateIndex];
        }
        else {
            this.sampleRate = sampleRateIndex;
        }
        this.frameDuration = (1000000 * 1024) / this.sampleRate;
        aacHeaderParser.skipBits(1);
        this.channels = aacHeaderParser.readBits(3);
        aacHeaderParser.skipBits(4);
        this.currentFrameSize = aacHeaderParser.readBits(13) - AdtsReader.ADTS_HEADER_SIZE
            - AdtsReader.ADTS_SYNC_SIZE;
        if (hasCrc) {
            this.currentFrameSize -= AdtsReader.ADTS_CRC_SIZE;
        }
        this.state = State.READ_FRAME;
    };
    AdtsReader.ADTS_HEADER_SIZE = 5;
    AdtsReader.ADTS_SYNC_SIZE = 2;
    AdtsReader.ADTS_CRC_SIZE = 2;
    AdtsReader.ADTS_SAMPLE_RATES = [96000, 88200, 64000, 48000,
        44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    return AdtsReader;
}(payload_reader_1.PayloadReader));
exports.AdtsReader = AdtsReader;


/***/ }),
/* 36 */
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
var bit_reader_1 = __webpack_require__(15);
var payload_reader_1 = __webpack_require__(12);
var frame_1 = __webpack_require__(10);
var track_1 = __webpack_require__(8);
var sps_parser_1 = __webpack_require__(37);
var NAL_UNIT_TYPE;
(function (NAL_UNIT_TYPE) {
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["SLICE"] = 1] = "SLICE";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["DPA"] = 2] = "DPA";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["DPB"] = 3] = "DPB";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["DPC"] = 4] = "DPC";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["IDR"] = 5] = "IDR";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["SEI"] = 6] = "SEI";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["SPS"] = 7] = "SPS";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["PPS"] = 8] = "PPS";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["AUD"] = 9] = "AUD";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["END_SEQUENCE"] = 10] = "END_SEQUENCE";
    NAL_UNIT_TYPE[NAL_UNIT_TYPE["END_STREAM"] = 11] = "END_STREAM";
})(NAL_UNIT_TYPE || (NAL_UNIT_TYPE = {}));
var SLICE_TYPE;
(function (SLICE_TYPE) {
    SLICE_TYPE[SLICE_TYPE["P"] = 0] = "P";
    SLICE_TYPE[SLICE_TYPE["B"] = 1] = "B";
    SLICE_TYPE[SLICE_TYPE["I"] = 2] = "I";
    SLICE_TYPE[SLICE_TYPE["SP"] = 3] = "SP";
    SLICE_TYPE[SLICE_TYPE["SI"] = 4] = "SI";
})(SLICE_TYPE || (SLICE_TYPE = {}));
var Fraction = /** @class */ (function () {
    function Fraction(num, den) {
        this.num = num;
        this.den = den;
        // do nothing
    }
    return Fraction;
}());
exports.Fraction = Fraction;
var H264Reader = /** @class */ (function (_super) {
    __extends(H264Reader, _super);
    function H264Reader() {
        var _this = _super.call(this) || this;
        _this.pendingBytes = 0;
        return _this;
    }
    H264Reader.prototype.getMimeType = function () {
        return track_1.Track.MIME_TYPE_AVC;
    };
    H264Reader.prototype.flush = function (pts) {
        if (this.dataBuffer.byteLength > 0) {
            this.consumeData(pts);
            if (this.dataBuffer.byteLength > 0) {
                var offset = this.findNextNALUnit(0);
                if (offset < this.dataBuffer.byteLength) {
                    this.frameBytesOffset = this.getFirstPacketDataOffset() + this.dataOffset + offset;
                    this.processNALUnit(offset, this.dataBuffer.byteLength, this.dataBuffer[offset + 3] & 0x1F);
                }
            }
        }
    };
    H264Reader.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.sps = null;
        this.pps = false;
    };
    H264Reader.prototype.consumeData = function (pts) {
        console.log('consumeData');
        if (!this.dataBuffer) {
            return;
        }
        if (this.firstTimestamp === -1) {
            this.timeUs = this.firstTimestamp = pts;
        }
        // process any possible remaining data
        var nextNalUnit = 0;
        var offset = 0;
        if (this.pendingBytes > 0) {
            nextNalUnit = this.findNextNALUnit(this.pendingBytes);
            if (nextNalUnit < this.dataBuffer.byteLength) {
                this.frameBytesOffset = this.getFirstPacketDataOffset() + this.dataOffset + 0;
                this.processNALUnit(0, nextNalUnit, this.dataBuffer[offset + 3] & 0x1F);
                offset = nextNalUnit;
            }
            this.pendingBytes = 0;
        }
        else {
            offset = this.findNextNALUnit(0);
        }
        // process next nal units in the buffer
        if (pts !== -1) {
            this.timeUs = pts;
        }
        if (this.dataBuffer.byteLength > 0) {
            while (nextNalUnit < this.dataBuffer.byteLength) {
                nextNalUnit = this.findNextNALUnit(offset + 3);
                this.frameBytesOffset = this.getFirstPacketDataOffset() + this.dataOffset + offset;
                this.processNALUnit(offset, nextNalUnit, this.dataBuffer[offset + 3] & 0x1F);
                offset = nextNalUnit;
            }
            console.log('shifting buffer:', offset);
            this.dataOffset += offset;
            this.dataBuffer = this.dataBuffer.subarray(offset);
            this.pendingBytes = this.dataBuffer.byteLength;
        }
    };
    H264Reader.prototype.findNextNALUnit = function (index) {
        var limit = this.dataBuffer.byteLength - 3;
        for (var i_1 = index; i_1 < limit; i_1++) {
            if (this.dataBuffer[i_1] === 0 && this.dataBuffer[i_1 + 1] === 0 && this.dataBuffer[i_1 + 2] === 1) {
                return i_1;
            }
        }
        return this.dataBuffer.byteLength;
    };
    H264Reader.prototype.processNALUnit = function (start, limit, nalType) {
        if (nalType === NAL_UNIT_TYPE.SPS) {
            this.parseSPSNALUnit(start, limit);
        }
        else if (nalType === NAL_UNIT_TYPE.PPS) {
            this.pps = true;
        }
        else if (nalType === NAL_UNIT_TYPE.AUD) {
            this.parseAUDNALUnit(start, limit);
        }
        else if (nalType === NAL_UNIT_TYPE.IDR) {
            this.addNewFrame(frame_1.Frame.IDR_FRAME, limit - start, NaN);
        }
        else if (nalType === NAL_UNIT_TYPE.SEI) {
            this.parseSEINALUnit(start, limit);
        }
        else if (nalType === NAL_UNIT_TYPE.SLICE) {
            this.parseSliceNALUnit(start, limit);
        }
    };
    H264Reader.prototype.parseSPSNALUnit = function (start, limit) {
        this.sps = sps_parser_1.SPSParser.parseSPS(this.dataBuffer.subarray(start + 4, limit));
    };
    H264Reader.prototype.skipScalingList = function (parser, size) {
        var lastScale = 8;
        var nextScale = 8;
        for (var i_2 = 0; i_2 < size; i_2++) {
            if (nextScale !== 0) {
                var deltaScale = parser.readSEG();
                nextScale = (lastScale + deltaScale + 256) % 256;
            }
            if (nextScale !== 0) {
                lastScale = nextScale;
            }
        }
    };
    H264Reader.prototype.parseSEINALUnit = function (start, limit) {
        var seiParser = new bit_reader_1.BitReader(this.dataBuffer.subarray(start, limit));
        seiParser.skipBytes(4);
        while (seiParser.remainingBytes() > 0) {
            var data = seiParser.readByte();
            if (data !== 0xFF) {
                break;
            }
        }
        // parse payload size
        while (seiParser.remainingBytes() > 0) {
            var data = seiParser.readByte();
            if (data !== 0xFF) {
                break;
            }
        }
        seiParser.destroy();
        seiParser = null;
    };
    H264Reader.prototype.parseSliceNALUnit = function (start, limit) {
        var sliceParser = new bit_reader_1.BitReader(this.dataBuffer.subarray(start, limit));
        sliceParser.skipBytes(4);
        sliceParser.readUEG();
        var sliceType = sliceParser.readUEG();
        var type = this.getSliceTypeName(sliceType);
        if (this.sps && this.pps) {
            this.addNewFrame(type, limit - start, NaN);
        }
        else {
            // console.warn('Slice ' + type + ' received without sps/pps been set');
        }
        sliceParser.destroy();
        sliceParser = null;
    };
    H264Reader.prototype.parseAUDNALUnit = function (start, limit) {
        // const audParser: BitReader = new BitReader(this.dataBuffer.subarray(start, limit));
        // audParser.skipBytes(4);
    };
    H264Reader.prototype.getSliceTypeName = function (sliceType) {
        if (sliceType > 4) {
            sliceType = sliceType - 5;
        }
        switch (sliceType) {
            case SLICE_TYPE.B:
                return frame_1.Frame.B_FRAME;
            case SLICE_TYPE.I:
                return frame_1.Frame.IDR_FRAME;
            case SLICE_TYPE.P:
                return frame_1.Frame.P_FRAME;
            case SLICE_TYPE.SI:
                return 'SI';
            case SLICE_TYPE.SP:
                return 'SP';
            default:
                return 'Unknown';
        }
    };
    H264Reader.prototype.getNALUnitName = function (nalType) {
        switch (nalType) {
            case NAL_UNIT_TYPE.SLICE:
                return 'SLICE';
            case NAL_UNIT_TYPE.SEI:
                return 'SEI';
            case NAL_UNIT_TYPE.PPS:
                return 'PPS';
            case NAL_UNIT_TYPE.SPS:
                return 'SPS';
            case NAL_UNIT_TYPE.AUD:
                return 'AUD';
            case NAL_UNIT_TYPE.IDR:
                return 'IDR';
            case NAL_UNIT_TYPE.END_SEQUENCE:
                return 'END SEQUENCE';
            case NAL_UNIT_TYPE.END_STREAM:
                return 'END STREAM';
            default:
                return 'Unknown';
        }
    };
    H264Reader.prototype.addNewFrame = function (frameType, frameSize, duration) {
        console.log('frame bytes offset:', this.frameBytesOffset);
        var frame = new frame_1.Frame(frameType, this.timeUs, frameSize, duration, this.frameBytesOffset);
        this.frames.push(frame);
    };
    return H264Reader;
}(payload_reader_1.PayloadReader));
exports.H264Reader = H264Reader;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bit_reader_1 = __webpack_require__(15);
var nal_units_1 = __webpack_require__(70);
var video_types_1 = __webpack_require__(38);
var SPSParser = /** @class */ (function () {
    function SPSParser() {
    }
    SPSParser.parseSPS = function (data) {
        var gb = new bit_reader_1.BitReader(data);
        var profile_idc = gb.readByte();
        gb.readByte();
        var level_idc = gb.readByte();
        gb.readUEG();
        var profile_string = SPSParser.getProfileString(profile_idc);
        var level_string = SPSParser.getLevelString(level_idc);
        var chroma_format_idc = 1;
        var chroma_format = 420;
        var chroma_format_table = [0, 420, 422, 444];
        var bit_depth = 8;
        if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 ||
            profile_idc === 244 || profile_idc === 44 || profile_idc === 83 ||
            profile_idc === 86 || profile_idc === 118 || profile_idc === 128 ||
            profile_idc === 138 || profile_idc === 144) {
            chroma_format_idc = gb.readUEG();
            if (chroma_format_idc === 3) {
                gb.readBits(1);
            }
            if (chroma_format_idc <= 3) {
                chroma_format = chroma_format_table[chroma_format_idc];
            }
            bit_depth = gb.readUEG() + 8;
            gb.readUEG();
            gb.readBits(1);
            if (gb.readBool()) {
                var scaling_list_count = (chroma_format_idc !== 3) ? 8 : 12;
                for (var i_1 = 0; i_1 < scaling_list_count; i_1++) {
                    if (gb.readBool()) {
                        if (i_1 < 6) {
                            SPSParser.skipScalingList(gb, 16);
                        }
                        else {
                            SPSParser.skipScalingList(gb, 64);
                        }
                    }
                }
            }
        }
        gb.readUEG();
        var pic_order_cnt_type = gb.readUEG();
        if (pic_order_cnt_type === 0) {
            gb.readUEG();
        }
        else if (pic_order_cnt_type === 1) {
            gb.readBits(1);
            gb.readSEG();
            gb.readSEG();
            var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
            for (var i_2 = 0; i_2 < num_ref_frames_in_pic_order_cnt_cycle; i_2++) {
                gb.readSEG();
            }
        }
        gb.readUEG();
        gb.readBits(1);
        var pic_width_in_mbs_minus1 = gb.readUEG();
        var pic_height_in_map_units_minus1 = gb.readUEG();
        var frame_mbs_only_flag = gb.readBits(1);
        if (frame_mbs_only_flag === 0) {
            gb.readBits(1);
        }
        gb.readBits(1);
        var frame_crop_left_offset = 0;
        var frame_crop_right_offset = 0;
        var frame_crop_top_offset = 0;
        var frame_crop_bottom_offset = 0;
        var frame_cropping_flag = gb.readBool();
        if (frame_cropping_flag) {
            frame_crop_left_offset = gb.readUEG();
            frame_crop_right_offset = gb.readUEG();
            frame_crop_top_offset = gb.readUEG();
            frame_crop_bottom_offset = gb.readUEG();
        }
        var sar_width = 1, sar_height = 1;
        var fps = 0, fps_fixed = true, fps_num = 0, fps_den = 0;
        var vui_parameters_present_flag = gb.readBool();
        if (vui_parameters_present_flag) {
            if (gb.readBool()) { // aspect_ratio_info_present_flag
                var aspect_ratio_idc = gb.readByte();
                var sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
                var sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
                    sar_width = sar_w_table[aspect_ratio_idc - 1];
                    sar_height = sar_h_table[aspect_ratio_idc - 1];
                }
                else if (aspect_ratio_idc === 255) {
                    sar_width = gb.readByte() << 8 | gb.readByte();
                    sar_height = gb.readByte() << 8 | gb.readByte();
                }
            }
            if (gb.readBool()) {
                gb.readBool();
            }
            if (gb.readBool()) {
                gb.readBits(4);
                if (gb.readBool()) {
                    gb.readBits(24);
                }
            }
            if (gb.readBool()) {
                gb.readUEG();
                gb.readUEG();
            }
            if (gb.readBool()) {
                var num_units_in_tick = gb.readBits(32);
                var time_scale = gb.readBits(32);
                fps_fixed = gb.readBool();
                fps_num = time_scale;
                fps_den = num_units_in_tick * 2;
                fps = fps_num / fps_den;
            }
        }
        var sarScale = 1;
        if (sar_width !== 1 || sar_height !== 1) {
            sarScale = sar_width / sar_height;
        }
        var crop_unit_x = 0, crop_unit_y = 0;
        if (chroma_format_idc === 0) {
            crop_unit_x = 1;
            crop_unit_y = 2 - frame_mbs_only_flag;
        }
        else {
            var sub_wc = (chroma_format_idc === 3) ? 1 : 2;
            var sub_hc = (chroma_format_idc === 1) ? 2 : 1;
            crop_unit_x = sub_wc;
            crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
        }
        var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
        var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
        codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
        codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
        var present_width = Math.ceil(codec_width * sarScale);
        gb.destroy();
        gb = null;
        return new nal_units_1.Sps(profile_string, level_string, bit_depth, chroma_format, SPSParser.getChromaFormatString(chroma_format), new video_types_1.FrameRate(fps_fixed, fps, fps_den, fps_num), new video_types_1.Size(sar_width, sar_height), new video_types_1.Size(codec_width, codec_height), new video_types_1.Size(present_width, codec_height));
    };
    SPSParser.getProfileString = function (profile_idc) {
        switch (profile_idc) {
            case 66:
                return 'Baseline';
            case 77:
                return 'Main';
            case 88:
                return 'Extended';
            case 100:
                return 'High';
            case 110:
                return 'High10';
            case 122:
                return 'High422';
            case 244:
                return 'High444';
            default:
                return 'Unknown';
        }
    };
    SPSParser.getLevelString = function (level_idc) {
        return (level_idc / 10).toFixed(1);
    };
    SPSParser.getChromaFormatString = function (chroma) {
        switch (chroma) {
            case 420:
                return '4:2:0';
            case 422:
                return '4:2:2';
            case 444:
                return '4:4:4';
            default:
                return 'Unknown';
        }
    };
    SPSParser.skipScalingList = function (gb, count) {
        var last_scale = 8, next_scale = 8;
        var delta_scale = 0;
        for (var i_3 = 0; i_3 < count; i_3++) {
            if (next_scale !== 0) {
                delta_scale = gb.readSEG();
                next_scale = (last_scale + delta_scale + 256) % 256;
            }
            last_scale = (next_scale === 0) ? last_scale : next_scale;
        }
    };
    return SPSParser;
}());
exports.SPSParser = SPSParser;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrameRate = /** @class */ (function () {
    function FrameRate(fixed, fps, fpsDen, fpsNum) {
        this.fixed = fixed;
        this.fps = fps;
        this.fpsDen = fpsDen;
        this.fpsNum = fpsNum;
        // do nothing
    }
    return FrameRate;
}());
exports.FrameRate = FrameRate;
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
        // do nothing
    }
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 39 */
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
var track_1 = __webpack_require__(8);
var h264_reader_1 = __webpack_require__(36);
var adts_reader_1 = __webpack_require__(35);
var TSTrack = /** @class */ (function (_super) {
    __extends(TSTrack, _super);
    function TSTrack(id, type, mimeType, pes) {
        var _this = _super.call(this, id, type, mimeType) || this;
        _this.pes = pes;
        return _this;
    }
    TSTrack.prototype.getDuration = function () {
        if (this.pes && this.pes.payloadReader) {
            return this.pes.payloadReader.getDuration();
        }
        return 0;
    };
    TSTrack.prototype.getFrames = function () {
        if (this.pes && this.pes.payloadReader) {
            return this.pes.payloadReader.frames;
        }
        return [];
    };
    TSTrack.prototype.getMetadata = function () {
        if (this.pes && this.pes.payloadReader) {
            if (this.pes.payloadReader instanceof h264_reader_1.H264Reader && this.pes.payloadReader.sps) {
                var sps = this.pes.payloadReader.sps;
                return {
                    profile: sps.profile,
                    level: sps.level,
                    bitDepth: sps.bitDepth,
                    chromaFormat: sps.chromaFormat,
                    frameRate: sps.frameRate,
                    sar: sps.sar,
                    codecSize: sps.codecSize,
                    presentSize: sps.presentSize,
                };
            }
            else if (this.pes.payloadReader instanceof adts_reader_1.AdtsReader) {
                var adtsReader = this.pes.payloadReader;
                return {
                    channels: adtsReader.channels,
                    sampleRate: adtsReader.sampleRate,
                    frameDuration: adtsReader.frameDuration,
                };
            }
        }
        return {};
    };
    return TSTrack;
}(track_1.Track));
exports.TSTrack = TSTrack;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_parser_utils_1 = __webpack_require__(1);
var track_1 = __webpack_require__(8);
var mp4_track_1 = __webpack_require__(41);
var atoms_1 = __webpack_require__(73);
var atom_1 = __webpack_require__(0);
var logger_1 = __webpack_require__(17);
var mp4_sample_table_1 = __webpack_require__(107);
var _a = logger_1.getLogger('Mp4Demuxer', logger_1.LoggerLevels.OFF), log = _a.log, warn = _a.warn;
var Mp4Demuxer = /** @class */ (function () {
    function Mp4Demuxer() {
        this.tracks = {};
        this.atoms = [];
        this.lastAudioVideoAtom = null;
        this.lastCodecDataAtom = null;
        this.lastSampleTable = null;
        this.lastTimescale = null;
        this.atoms = [];
        this.tracks = {};
        this._resetLastTrackInfos();
    }
    Mp4Demuxer.prototype.getAtoms = function () {
        return this.atoms;
    };
    Mp4Demuxer.prototype.append = function (data) {
        this.atoms = this._parseAtoms(data);
        // "HACK" digest any last sample-table
        this._digestSampleTable();
        this._updateTracks();
    };
    Mp4Demuxer.prototype.end = function () {
        this._updateTracks();
    };
    Mp4Demuxer.prototype._updateTracks = function () {
        for (var trackId in this.tracks) {
            if (this.tracks.hasOwnProperty(trackId)) {
                this.tracks[trackId].update();
            }
        }
    };
    Mp4Demuxer.prototype._parseAtoms = function (data, offset) {
        if (offset === void 0) { offset = 0; }
        var atoms = [];
        var dataOffset = offset;
        while (dataOffset < data.byteLength) {
            var size = byte_parser_utils_1.default.parseUint32(data, dataOffset);
            var type = byte_parser_utils_1.default.parseIsoBoxType(data, dataOffset + 4);
            var end = size > 1 ? dataOffset + size : data.byteLength;
            var boxData = data.subarray(dataOffset + 8, end);
            // parse
            var atom = void 0;
            if (atoms_1.boxesParsers[type]) {
                atom = atoms_1.boxesParsers[type](boxData);
            }
            if (!atom) {
                // don't know how to parse this box
                // so let's just add it without parsing its content
                if (atom_1.Atom.isContainerBox(type)) {
                    atom = new atom_1.ContainerAtom(type, boxData.byteLength);
                }
                else {
                    atom = new atom_1.Atom(type, boxData.byteLength);
                }
            }
            atoms.push(atom);
            this._processAtom(atom, dataOffset);
            if (atom instanceof atom_1.ContainerAtom) {
                atom.atoms = this._parseAtoms(boxData, atom.containerDataOffset);
            }
            dataOffset = end;
        }
        return atoms;
    };
    Mp4Demuxer.prototype._processAtom = function (atom, dataOffset) {
        switch (atom.type) {
            // FIXME !!! `trex` box can contain super based set of default sample-duration/flags/size ...
            // (those are often repeated inside the tfhd when it is a fragmented file however, but still ... :)
            case atom_1.Atom.trak:
                this._digestSampleTable();
                this.lastTrackId = -1;
                this.lastTimescale = null;
                this.lastCodecDataAtom = null;
                this.lastAudioVideoAtom = null;
            case atom_1.Atom.ftyp:
            case atom_1.Atom.moov:
            case atom_1.Atom.moof:
                // (only) needed for fragmented mode
                this.lastTrackDataOffset = dataOffset;
                break;
            // Moov box / "initialization"-data and SIDX
            case atom_1.Atom.sidx:
                this._attemptCreateUnknownTrack();
                this._getLastTrackCreated().setSidxAtom(atom);
                break;
            case atom_1.Atom.tkhd:
                this.lastTrackId = atom.trackId;
                break;
            // Inside moov: Codec data -> create "known" tracks
            // stsd-boxed codec identifying atoms
            // AAC
            case atom_1.Atom.mp4a:
                this.lastAudioVideoAtom = atom;
                break;
            // H264
            case atom_1.Atom.avc1:
                this.lastAudioVideoAtom = atom;
                break;
            // H265
            case atom_1.Atom.hev1:
                this.lastAudioVideoAtom = atom;
                break;
            // AVC/HEVC -> H264/5
            case atom_1.Atom.hvcC:
                this.lastCodecDataAtom = atom;
                this._attemptCreateTrack(track_1.Track.TYPE_VIDEO, track_1.Track.MIME_TYPE_HEVC, atom);
                break;
            case atom_1.Atom.avcC:
                this.lastCodecDataAtom = atom;
                this._attemptCreateTrack(track_1.Track.TYPE_VIDEO, track_1.Track.MIME_TYPE_AVC, atom);
                break;
            case atom_1.Atom.esds:
                this._attemptCreateTrack(track_1.Track.TYPE_AUDIO, track_1.Track.MIME_TYPE_AAC, atom);
                this.lastCodecDataAtom = atom;
            // Fragmented-mode ...
            case atom_1.Atom.tfhd:
                // FIXME: should be handled differently by looking at other things inside fragments and mapping eventually to previously parsed moov
                this._attemptCreateUnknownTrack();
                var tfhd = atom;
                this._getLastTrackCreated().setBaseDataOffset(tfhd.baseDataOffset);
                this._getLastTrackCreated().setDefaults({
                    sampleDuration: tfhd.defaultSampleDuration,
                    sampleFlags: tfhd.defaultSampleFlags,
                    sampleSize: tfhd.defaultSampleSize
                });
                break;
            case atom_1.Atom.trun:
                // FIXME: should be handled differently by looking at other things inside fragments and mapping eventually to previously parsed moov
                this._attemptCreateUnknownTrack();
                this._getLastTrackCreated().addTrunAtom(atom);
                break;
            // Plain-old MOV ie unfragmented mode ...
            case atom_1.Atom.mdhd:
                this.lastTimescale = atom.timescale;
                break;
            case atom_1.Atom.stbl:
                if (this.lastSampleTable !== null) {
                    throw new Error('Sample-table should not exist yet');
                }
                break;
            case atom_1.Atom.stts:
                this._haveSampleTable();
                this.lastSampleTable.decodingTimestamps = atom;
                break;
            case atom_1.Atom.stss:
                this._haveSampleTable();
                this.lastSampleTable.syncSamples = atom;
                break;
            case atom_1.Atom.ctts:
                this._haveSampleTable();
                this.lastSampleTable.compositionTimestampOffsets = atom;
                break;
            case atom_1.Atom.stsc:
                this._haveSampleTable();
                this.lastSampleTable.samplesToChunkBox = atom;
                break;
            case atom_1.Atom.stsz:
                this._haveSampleTable();
                this.lastSampleTable.sampleSizes = atom;
                break;
            case atom_1.Atom.stco:
                this._haveSampleTable();
                this.lastSampleTable.chunkOffsetBox = atom;
                break;
            // Sample data ...
            case atom_1.Atom.mdat:
                // in plain old MOV the moov may be at the end of the file (and mdat before)
                if (this._getLastTrackCreated()) {
                    log('updating sample-data offset:', this.lastTrackDataOffset);
                    this._getLastTrackCreated().updateInitialSampleDataOffset(this.lastTrackDataOffset);
                    log('processing current track-run');
                    this._getLastTrackCreated().processTrunAtoms();
                }
                break;
        }
    };
    Mp4Demuxer.prototype._haveSampleTable = function () {
        if (this.lastSampleTable) {
            return;
        }
        this.lastSampleTable = new mp4_sample_table_1.Mp4SampleTable(this._getLastTrackCreated());
    };
    Mp4Demuxer.prototype._digestSampleTable = function () {
        if (this.lastSampleTable) {
            this.lastSampleTable.digest();
            this.lastSampleTable = null;
        }
    };
    Mp4Demuxer.prototype._attemptCreateTrack = function (type, mime, ref) {
        if (this.lastTrackId > 0) {
            log('creating new track:', type, mime);
            var track = new mp4_track_1.Mp4Track(this.lastTrackId, type, mime, ref, this.lastAudioVideoAtom, this.lastTrackDataOffset);
            if (this.lastTimescale !== null) {
                log('got timescale:', this.lastTimescale);
                track.setTimescale(this.lastTimescale);
            }
            this.tracks[this.lastTrackId] = track;
        }
    };
    /**
     * Creates a track in case we haven't found a codec box
     */
    Mp4Demuxer.prototype._attemptCreateUnknownTrack = function () {
        if (!this.lastTrackId || !this.tracks[this.lastTrackId]) {
            warn('creating unknown-typed track');
            this.lastTrackId = 1;
            this.tracks[this.lastTrackId] = new mp4_track_1.Mp4Track(this.lastTrackId, track_1.Track.TYPE_UNKNOWN, track_1.Track.MIME_TYPE_UNKNOWN, null, null, this.lastTrackDataOffset > 0 ? this.lastTrackDataOffset : 0);
        }
    };
    /**
     * Should be called everytime we create a track
     */
    Mp4Demuxer.prototype._resetLastTrackInfos = function () {
        this.lastTrackId = 0;
        this.lastTrackDataOffset = -1;
    };
    Mp4Demuxer.prototype._getLastTrackCreated = function () {
        return this.tracks[this.lastTrackId] || null;
    };
    return Mp4Demuxer;
}());
exports.Mp4Demuxer = Mp4Demuxer;


/***/ }),
/* 41 */
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
var track_1 = __webpack_require__(8);
var frame_1 = __webpack_require__(10);
var trun_1 = __webpack_require__(42);
var logger_1 = __webpack_require__(17);
var timescale_1 = __webpack_require__(16);
var _a = logger_1.getLogger('Mp4Track', 0), log = _a.log, debug = _a.debug, warn = _a.warn;
var Mp4Track = /** @class */ (function (_super) {
    __extends(Mp4Track, _super);
    function Mp4Track(id, type, mimeType, referenceAtom, metadataAtom, dataOffset) {
        var _this = _super.call(this, id, type, mimeType) || this;
        _this.referenceAtom = referenceAtom;
        _this.metadataAtom = metadataAtom;
        _this.dataOffset = dataOffset;
        _this.sidx = null;
        _this.trunInfo = [];
        _this.trunInfoReadIndex = 0;
        _this.lastPts = null;
        _this.lastPtsUnscaledUint = null;
        _this.timescale = null;
        _this.defaults = null;
        _this.defaultSampleFlagsParsed = null;
        _this.baseDataOffset = 0;
        _this.lastPts = 0;
        _this.lastPtsUnscaledUint = 0;
        _this.duration = 0;
        if (_this.dataOffset < 0) {
            throw new Error('Invalid file, no sample-data base-offset can be determined');
        }
        return _this;
    }
    // TODO: make this abstract on Track class
    Mp4Track.prototype.getResolution = function () {
        if (!this.isVideo()) {
            throw new Error('Can not get resolution of non-video track');
        }
        var avc1 = this.metadataAtom;
        return [avc1.width, avc1.height];
    };
    Mp4Track.prototype.getSegmentIndex = function () {
        return this.sidx;
    };
    Mp4Track.prototype.getTrackFragmentsRunInfo = function () {
        return this.trunInfo;
    };
    Mp4Track.prototype.getReferenceAtom = function () {
        return this.referenceAtom;
    };
    Mp4Track.prototype.getMetadataAtom = function () {
        return this.metadataAtom;
    };
    Mp4Track.prototype.getLastPts = function () {
        return this.lastPts;
    };
    Mp4Track.prototype.getTimescale = function () {
        return this.timescale;
    };
    Mp4Track.prototype.setTimescale = function (timescale) {
        this.timescale = timescale;
    };
    Mp4Track.prototype.setDefaults = function (defaults) {
        this.defaults = defaults;
        if (defaults.sampleFlags) {
            this.defaultSampleFlagsParsed = trun_1.Trun.parseFlags(new Uint8Array([
                defaults.sampleFlags & 0xff000000,
                defaults.sampleFlags & 0x00ff0000,
                defaults.sampleFlags & 0x0000ff00,
                defaults.sampleFlags & 0x000000ff,
            ]));
        }
    };
    Mp4Track.prototype.getDefaults = function () {
        return this.defaults;
    };
    /**
     * @param offset value from `tfhd` box
     */
    Mp4Track.prototype.setBaseDataOffset = function (offset) {
        this.baseDataOffset = offset || 0;
    };
    /**
     * @param dataOffset absolute bytes offset inside file to resolve actual sample data
     *
     * As we are adding different `trun`s that are not contiguous boxes (say in multiple fragments)
     * this needs to be called in order to update the internal base offset.
     *
     * Not to be confused with the base offset which maybe be present for each track fragment inside the `tfhd`.
     * That value will be shared for each `trun`.
     */
    Mp4Track.prototype.updateInitialSampleDataOffset = function (dataOffset) {
        this.dataOffset = dataOffset;
    };
    /**
     * Returns the total offset for where to find samples (track-fragment base + file context bytes).
     * Note that this will only lead to the current movie fragment parent box most likely (or to the moov box if unfragmented).
     *
     * Each trun box has it's own offset, which refers to this offset here in order to resolve the absolute position
     * of sample runs.
     */
    Mp4Track.prototype.getFinalSampleDataOffset = function () {
        return this.dataOffset + this.baseDataOffset;
    };
    Mp4Track.prototype.setSidxAtom = function (atom) {
        this.sidx = atom;
        this.lastPtsUnscaledUint = this.sidx.earliestPresentationTime;
        this.lastPts = 1000000 * this.sidx.earliestPresentationTime / this.sidx.timescale;
        this.timescale = this.sidx.timescale;
    };
    Mp4Track.prototype.appendFrame = function (frame) {
        if (!frame.hasUnnormalizedIntegerTiming()) {
            throw new Error('Frame must have unscaled-int sample timing');
        }
        this.lastPtsUnscaledUint += frame.scaledDuration;
        this.lastPts += frame.duration;
        this.duration += frame.duration;
        this.frames.push(frame);
    };
    // TODO: move the truns array and processTrunAtoms to a own container class (like sample-table)
    Mp4Track.prototype.addTrunAtom = function (atom) {
        var trun = atom;
        this.trunInfo.push(trun);
    };
    Mp4Track.prototype.processTrunAtoms = function () {
        var _this = this;
        this.trunInfo.forEach(function (trun, index) {
            if (index < _this.trunInfoReadIndex) {
                return;
            }
            var timescale = _this.sidx ? _this.sidx.timescale : 1;
            var sampleRunDataOffset = trun.dataOffset + _this.getFinalSampleDataOffset();
            var bytesOffset = sampleRunDataOffset;
            for (var _i = 0, _a = trun.samples; _i < _a.length; _i++) {
                var sample = _a[_i];
                var sampleDuration = sample.duration || _this.defaults.sampleDuration;
                if (!sampleDuration) {
                    throw new Error('Invalid file, samples have no duration');
                }
                var duration = timescale_1.toMicroseconds(sampleDuration, timescale);
                var flags = sample.flags || _this.defaultSampleFlagsParsed;
                if (!flags) {
                    warn('no default sample flags in track sample-run');
                    // in fact the trun box parser should provide a fallback instance of flags in this case
                    //throw new Error('Invalid file, sample has no flags');
                }
                var cto = timescale_1.toMicroseconds((sample.compositionTimeOffset || 0), timescale);
                var timeUs = _this.lastPts;
                var newFrame = new frame_1.Frame(flags ? (flags.isSyncFrame ? frame_1.Frame.IDR_FRAME : frame_1.Frame.P_FRAME) : frame_1.Frame.UNFLAGGED_FRAME, timeUs, sample.size, duration, bytesOffset, cto);
                newFrame.scaledDuration = sampleDuration;
                newFrame.scaledDecodingTime = _this.lastPtsUnscaledUint;
                newFrame.scaledPresentationTimeOffset = sample.compositionTimeOffset || 0;
                newFrame.timescale = timescale;
                _this.appendFrame(newFrame);
                debug("frame: @ " + newFrame.timeUs + " [us] -> " + newFrame.bytesOffset + " / " + newFrame.size);
                bytesOffset += sample.size;
            }
        });
        this.trunInfoReadIndex = this.trunInfo.length;
    };
    return Mp4Track;
}(track_1.Track));
exports.Mp4Track = Mp4Track;


/***/ }),
/* 42 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var SampleFlags = /** @class */ (function () {
    function SampleFlags(isLeading, dependsOn, isDependedOn, hasRedundancy, paddingValue, isSyncFrame, degradationPriority) {
        this.isLeading = isLeading;
        this.dependsOn = dependsOn;
        this.isDependedOn = isDependedOn;
        this.hasRedundancy = hasRedundancy;
        this.paddingValue = paddingValue;
        this.isSyncFrame = isSyncFrame;
        this.degradationPriority = degradationPriority;
    }
    return SampleFlags;
}());
exports.SampleFlags = SampleFlags;
var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.toString = function () {
        return "[duration: " + this.duration + ", size: " + this.size + "]";
    };
    return Sample;
}());
exports.Sample = Sample;
var Trun = /** @class */ (function (_super) {
    __extends(Trun, _super);
    function Trun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trun.parse = function (data) {
        var trun = new Trun(atom_1.Atom.trun, data.byteLength);
        trun.version = data[0];
        trun.flags = data.subarray(1, 4);
        var dataOffsetPresent = !!(trun.flags[2] & 0x01);
        var firstSampleFlagsPresent = !!(trun.flags[2] & 0x04);
        var sampleDurationPresent = !!(trun.flags[1] & 0x01);
        var sampleSizePresent = !!(trun.flags[1] & 0x02);
        var sampleFlagsPresent = !!(trun.flags[1] & 0x04);
        var sampleCompositionTimeOffsetPresent = !!(trun.flags[1] & 0x08);
        var sampleCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        trun.samples = [];
        var totalSize = 0;
        if (dataOffsetPresent) {
            trun.dataOffset = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
        }
        if (firstSampleFlagsPresent && sampleCount) {
            var sample = new Sample();
            sample.flags = Trun.parseFlags(data.subarray(offset, offset + 4));
            offset += 4;
            if (sampleDurationPresent) {
                sample.duration = byte_parser_utils_1.default.parseUint32(data, offset);
                offset += 4;
            }
            if (sampleSizePresent) {
                sample.size = byte_parser_utils_1.default.parseUint32(data, offset);
                totalSize += sample.size;
                offset += 4;
            }
            if (sampleCompositionTimeOffsetPresent) {
                sample.compositionTimeOffset = byte_parser_utils_1.default.parseUint32(data, offset);
                offset += 4;
            }
            trun.samples.push(sample);
            sampleCount--;
        }
        while (sampleCount--) {
            var sample = new Sample();
            if (sampleDurationPresent) {
                sample.duration = byte_parser_utils_1.default.parseUint32(data, offset);
                offset += 4;
            }
            if (sampleSizePresent) {
                sample.size = byte_parser_utils_1.default.parseUint32(data, offset);
                totalSize += sample.size;
                offset += 4;
            }
            if (sampleFlagsPresent) {
                sample.flags = Trun.parseFlags(data.subarray(offset, offset + 4));
                offset += 4;
            }
            if (sampleCompositionTimeOffsetPresent) {
                sample.compositionTimeOffset = byte_parser_utils_1.default.parseUint32(data, offset);
                offset += 4;
            }
            trun.samples.push(sample);
        }
        return trun;
    };
    Trun.parseFlags = function (data) {
        return new SampleFlags((data[0] & 0x0c) >>> 2, (data[0] & 0x03), (data[1] & 0xc0) >>> 6, (data[1] & 0x30) >>> 4, (data[1] & 0x0e) >>> 1, (data[1] & 0x01) === 0, (data[2] << 8) | data[3]);
    };
    return Trun;
}(atom_1.Atom));
exports.Trun = Trun;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_parser_utils_1 = __webpack_require__(1);
var ebml_types_1 = __webpack_require__(44);
var schema_1 = __webpack_require__(108);
var ebml_parser_1 = __webpack_require__(109);
var webm_track_1 = __webpack_require__(110);
var WebMDemuxer = /** @class */ (function () {
    function WebMDemuxer() {
        this.tracks = {};
    }
    WebMDemuxer.prototype.append = function (data) {
        this.elements = [];
        if (!this.data || this.data.byteLength === 0 || this.dataOffset >= this.data.byteLength) {
            this.data = data;
            this.dataOffset = 0;
        }
        else {
            var newLen = this.data.byteLength + data.byteLength;
            var temp = new Uint8Array(newLen);
            temp.set(this.data, 0);
            temp.set(data, this.data.byteLength);
            this.data = temp;
        }
        this.elements = this.parseElements(this.data.byteLength);
        console.log(this.elements);
        if (this.dataOffset > 0) {
            this.data = this.data.subarray(this.dataOffset);
            this.dataOffset = 0;
        }
        this.updateTracks();
    };
    WebMDemuxer.prototype.end = function () {
        this.updateTracks();
    };
    WebMDemuxer.prototype.parseElements = function (end) {
        var elements = [];
        while (this.dataOffset < end) {
            var element = this.readElement();
            if (element === null) {
                console.error('There was an issue demuxing a webm file: incorrect format');
                return;
            }
            if (element.type === 'm') {
                element.childs = this.parseElements(element.end);
            }
            elements.push(element);
            this.processElement(element);
        }
        return elements;
    };
    WebMDemuxer.prototype.readElement = function () {
        var id = ebml_parser_1.EbmlParser.readVint(this.data, this.dataOffset);
        if (!id) {
            return null;
        }
        var idStr = byte_parser_utils_1.default.parseBufferToHex(this.data, this.dataOffset, this.dataOffset + id.length);
        var elementInfo = schema_1.getEbmlElementInfo(idStr);
        var element = new ebml_types_1.EbmlElement(idStr, elementInfo.type, elementInfo.name, this.dataOffset, this.dataOffset + id.length);
        this.dataOffset += id.length;
        var size = ebml_parser_1.EbmlParser.readVint(this.data, this.dataOffset);
        this.dataOffset += size.length;
        if (size !== null) {
            element.size = size.value;
            // Manage unknown size case
            if (size.value === -1) {
                element.end = -1;
            }
            else {
                element.end += size.value + size.length;
            }
            // If type is m, we are in a container element
            if (element.type !== 'm') {
                if (element.end !== -1) {
                    var data = this.data.subarray(this.dataOffset, this.dataOffset + element.size);
                    this.parseElementData(element, data);
                }
                this.dataOffset += element.size;
            }
        }
        return element;
    };
    WebMDemuxer.prototype.parseElementData = function (element, data) {
        switch (element.type) {
            case 'u':
                element.data = byte_parser_utils_1.default.parseUint(data, 0, data.byteLength);
                break;
            case 'i':
                element.data = byte_parser_utils_1.default.parseInt(data, 0, data.byteLength);
                break;
            case 's':
                element.data = byte_parser_utils_1.default.parseString(data, 0, data.byteLength);
                break;
            case '8':
                element.data = byte_parser_utils_1.default.parseUTF8String(data, 0, data.byteLength);
                break;
            case 'b':
                element.data = data;
                break;
            case 'f':
                element.data = byte_parser_utils_1.default.parseFloat(data, 0, data.byteLength);
                break;
            case 'd':
                var ns = byte_parser_utils_1.default.parseUint(data, 0, 8);
                var d = new Date(2001, 0, 1, 0, 0, 0, 0);
                d.setSeconds(d.getSeconds() + ns / (1000 * 1000));
                element.data = d;
                break;
        }
    };
    WebMDemuxer.prototype.processElement = function (element) {
        if (element.name === 'EBML') {
            this.ebmlInfo = this.flatChilds(element);
            if (this.ebmlInfo.DocType !== 'webm') {
                console.warn('WebM document doesnt have the right doc type (webm != ' + this.ebmlInfo.DocType + ')');
            }
        }
        else if (element.name === 'Tracks') {
            this.processTracksElement(element);
        }
        else if (element.name === 'Info') {
            this.segmentInfo = this.flatChilds(element);
        }
        else if (element.name === 'Cluster') {
            this.processCluster(element);
        }
    };
    WebMDemuxer.prototype.processTracksElement = function (element) {
        for (var _i = 0, _a = element.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            var trackInfo = this.flatChilds(child);
            var metadataEl = trackInfo.hasOwnProperty('Video') ? this.getChild(child, 'Video') :
                trackInfo.hasOwnProperty('Audio') ? this.getChild(child, 'Audio') : null;
            var metadata = metadataEl ? this.flatChilds(metadataEl) : null;
            var track = new webm_track_1.WebMTrack(trackInfo, metadata);
            this.tracks[track.id] = track;
        }
    };
    WebMDemuxer.prototype.processCluster = function (element) {
        for (var _i = 0, _a = element.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name === 'SimpleBlock' || child.name === 'Block') {
                var trackId = ebml_parser_1.EbmlParser.readVint(child.data, 0);
                if (this.tracks[trackId.value]) {
                    this.tracks[trackId.value].processBlock(trackId, child);
                }
            }
            else if (child.name === 'Timecode') {
                for (var id in this.tracks) {
                    if (this.tracks.hasOwnProperty(id)) {
                        this.tracks[id].setTimecode(child.data);
                    }
                }
            }
        }
    };
    WebMDemuxer.prototype.flatChilds = function (element) {
        var obj = {};
        for (var _i = 0, _a = element.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            obj[child.name] = child.data;
        }
        return obj;
    };
    WebMDemuxer.prototype.getChild = function (element, name) {
        if (!element.childs) {
            return null;
        }
        for (var _i = 0, _a = element.childs; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.name === name) {
                return e;
            }
        }
        return null;
    };
    WebMDemuxer.prototype.updateTracks = function () {
        for (var trackId in this.tracks) {
            if (this.tracks.hasOwnProperty(trackId)) {
                this.tracks[trackId].update();
            }
        }
    };
    return WebMDemuxer;
}());
exports.WebMDemuxer = WebMDemuxer;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vint = /** @class */ (function () {
    function Vint(value, length) {
        this.value = value;
        this.length = length;
    }
    return Vint;
}());
exports.Vint = Vint;
var EbmlElement = /** @class */ (function () {
    function EbmlElement(id, type, name, start, end) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.start = start;
        this.end = end;
        this.childs = [];
    }
    return EbmlElement;
}());
exports.EbmlElement = EbmlElement;


/***/ }),
/* 45 */
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
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var logger_1 = __webpack_require__(2);
var payload_description_1 = __webpack_require__(7);
var log = logger_1.getLogger('MPEGTSDemuxProcessor').log;
var getSocketDescriptor = socket_1.SocketDescriptor.createTemplateGenerator(socket_1.SocketDescriptor.fromMimeTypes('video/mp2t'), // valid inputs
socket_1.SocketDescriptor.fromMimeTypes('audio/mpeg', 'audio/aac', 'video/aac', 'application/cea-608') // output
);
var MPEGTSDemuxProcessor = /** @class */ (function (_super) {
    __extends(MPEGTSDemuxProcessor, _super);
    function MPEGTSDemuxProcessor() {
        var _this = _super.call(this) || this;
        _this._programMap = {};
        _this._haveAudio = false;
        _this._haveVideo = false;
        _this.createInput();
        return _this;
    }
    MPEGTSDemuxProcessor.getName = function () { return 'MPEGTSDemuxProcessor'; };
    MPEGTSDemuxProcessor.prototype.templateSocketDescriptor = function (socketType) {
        return getSocketDescriptor(socketType);
    };
    MPEGTSDemuxProcessor.prototype.onTaskWorkerMessage = function (event) {
        var p = packet_1.Packet.fromTransferable(event.data.packet);
        if (p.isSymbolic()) {
            this.out.forEach(function (os) { return os.transfer(p); });
            return;
        }
        this._processDemuxerOutputPacket(p);
    };
    MPEGTSDemuxProcessor.prototype._processDemuxerOutputPacket = function (p) {
        var bs = p.data[0];
        if (!this._haveVideo && payload_description_1.PayloadCodec.isAvc(bs.props.codec)) {
            this._haveVideo = true;
        }
        else if (!this._haveAudio && payload_description_1.PayloadCodec.isAac(bs.props.codec)) {
            this._haveAudio = true;
        }
        // set mpeg-ts timescale of 90000khz
        p.setTimescale(90000);
        this._getOutputForPayload(bs.props).transfer(p);
    };
    MPEGTSDemuxProcessor.prototype._getOutputForPayload = function (payloadDescriptor) {
        var pid = payloadDescriptor.elementaryStreamId;
        if (this._programMap[pid]) {
            return this._programMap[pid];
        }
        log('creating new output for stream-id (PID):', pid, 'with codec:', payloadDescriptor.codec);
        var s = this._programMap[pid] = this.createOutput(new socket_1.SocketDescriptor([payloadDescriptor]));
        return s;
    };
    MPEGTSDemuxProcessor.prototype.processTransfer_ = function (inS, p) {
        this.dispatchTask('tsdemuxer', p);
        return true;
    };
    return MPEGTSDemuxProcessor;
}(processor_1.Processor));
exports.MPEGTSDemuxProcessor = MPEGTSDemuxProcessor;


/***/ }),
/* 46 */
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
var socket_1 = __webpack_require__(3);
var media_source_controller_1 = __webpack_require__(115);
var logger_1 = __webpack_require__(2);
var _a = logger_1.getLogger('HTML5MediaSourceBufferSocket'), log = _a.log, warn = _a.warn, error = _a.error;
var MEDIA_SOURCE_OPEN_FAILURE_TIMEOUT_MS = 4000;
var HTML5MediaSourceBufferSocket = /** @class */ (function (_super) {
    __extends(HTML5MediaSourceBufferSocket, _super);
    function HTML5MediaSourceBufferSocket(mediaSource, defaultFullMimetype) {
        var _this = _super.call(this, function (p) { return _this._onPacketReceived(p); }, new socket_1.SocketDescriptor()) || this;
        _this._readyPromise = new Promise(function (resolve, reject) {
            if (mediaSource.readyState === 'open') {
                resolve();
            }
            else {
                var mediaSourceFailureTimeout_1 = setTimeout(function () {
                    reject('MediaSource open-failure timeout');
                }, MEDIA_SOURCE_OPEN_FAILURE_TIMEOUT_MS);
                mediaSource.addEventListener('sourceopen', function () {
                    clearTimeout(mediaSourceFailureTimeout_1);
                    resolve();
                });
            }
        });
        _this._readyPromise.then(function () {
            _this.mediaSourceController = new media_source_controller_1.MediaSourceController(mediaSource);
            _this.mediaSourceController.setMediaDuration(60, true); // HACK !!
            if (defaultFullMimetype) {
                _this._enableOneSourceBufferForFullMimetype(defaultFullMimetype);
            }
        });
        return _this;
    }
    HTML5MediaSourceBufferSocket.prototype.whenReady = function () {
        return this._readyPromise;
    };
    HTML5MediaSourceBufferSocket.prototype._enableOneSourceBufferForFullMimetype = function (fullMimeType) {
        if (this.mediaSourceController.hasSourceBufferQueuesForMimeType(fullMimeType)) {
            return false;
        }
        if (!MediaSource.isTypeSupported(fullMimeType)) {
            error("MSE API says requested mime-type (" + fullMimeType + ") is not supported, aborting.");
            return false;
        }
        log('attempting to create an MSE source-buffer for fully-qualified mime-type:', fullMimeType);
        if (!this.mediaSourceController.addSourceBufferQueue(fullMimeType)) {
            throw new Error('Failed to create SourceBuffer for mime-type: ' + fullMimeType);
        }
        return true;
    };
    HTML5MediaSourceBufferSocket.prototype._onPacketReceived = function (p) {
        var _this = this;
        var defaultBufferProps = p.defaultPayloadInfo;
        // TODO: add default handling for this in base-class for easing impl these kind of subclasses
        if (p.isSymbolic()) {
            log('got symbolic packet:', p.symbol);
            return true;
        }
        // TODO: have socket probe check this
        if (!defaultBufferProps) {
            warn('no default buffer props:', p);
            return;
        }
        var fullMimeType = defaultBufferProps.getFullMimeType();
        log('received packet with fully-qualified mime-type:', fullMimeType);
        this._enableOneSourceBufferForFullMimetype(fullMimeType);
        p.forEachBufferSlice(function (bs) {
            var buffer = bs.arrayBuffer;
            var sourceBufferQueue = _this.mediaSourceController.getSourceBufferQueuesByMimeType(fullMimeType)[0];
            if (!sourceBufferQueue) {
                warn('must previously have created surce-buffer for mime-type: ' + fullMimeType);
                warn('ignoring one packet received');
                return;
            }
            sourceBufferQueue.appendBuffer(buffer, 0);
        });
        return true;
    };
    return HTML5MediaSourceBufferSocket;
}(socket_1.InputSocket));
exports.HTML5MediaSourceBufferSocket = HTML5MediaSourceBufferSocket;


/***/ }),
/* 47 */
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
var socket_1 = __webpack_require__(3);
var common_utils_1 = __webpack_require__(5);
var payload_description_1 = __webpack_require__(7);
var logger_1 = __webpack_require__(2);
var FileSaver = __webpack_require__(118);
exports.DEFAULT_FILENAME_TEMPLATE = common_utils_1.makeTemplate('buffer${counter}-${Date.now()}.data');
exports.DEFAULT_HTML_TEMPLATE = common_utils_1.makeTemplate('<p>Download ${filename}</p>');
var _a = logger_1.getLogger('WebFileDownloadSocket'), log = _a.log, debug = _a.debug;
var WebFileDownloadSocket = /** @class */ (function (_super) {
    __extends(WebFileDownloadSocket, _super);
    /**
     *
     * @param _downloadLinkContainer an HTML element to create a link in with the given templates or `null` and then FileSaver will spawn a dialog @see https://github.com/eligrey/FileSaver.js
     * @param _fileNameTemplate can contain the local var `counter` as well as access public and private members via `this`, see default
     * @param _htmlTemplate can contain the local var `filename` which will be whatever the respective template string has eval'd to, see default
     * @param _mimeType mime-type string for the blob object to be created (this sometimes matters for platforms to understand what file-type it is), @see https://developer.mozilla.org/en-US/docs/Web/API/Blob
     * @param _fallbackToSaveAs when no downloadLinkContainer set, we can call the `saveAs` function to trigger a download dialog (if running in a web-like window context)
     */
    function WebFileDownloadSocket(_downloadLinkContainer, _mimeType, // FIXME: this can be a default when packet has no mime-type but we should read the mime-type from the defaultPayload info of the packet
    _fileNameTemplate, _htmlTemplate, _fallbackToSaveAs) {
        if (_mimeType === void 0) { _mimeType = payload_description_1.UNKNOWN_MIMETYPE; }
        if (_fileNameTemplate === void 0) { _fileNameTemplate = exports.DEFAULT_FILENAME_TEMPLATE; }
        if (_htmlTemplate === void 0) { _htmlTemplate = exports.DEFAULT_HTML_TEMPLATE; }
        if (_fallbackToSaveAs === void 0) { _fallbackToSaveAs = true; }
        var _this = _super.call(this, function (p) { return _this._onPacketReceived(p); }, new socket_1.SocketDescriptor()) || this;
        _this._downloadLinkContainer = _downloadLinkContainer;
        _this._mimeType = _mimeType;
        _this._fileNameTemplate = _fileNameTemplate;
        _this._htmlTemplate = _htmlTemplate;
        _this._fallbackToSaveAs = _fallbackToSaveAs;
        _this._accuBuffer = null;
        _this._bufferDownloadCnt = 0;
        /// *
        _this.on(socket_1.SocketEvent.DATA_PACKET_RECEIVED, function () {
            console.warn('data packet received event', _this);
        });
        return _this;
        // */
    }
    WebFileDownloadSocket.prototype._onPacketReceived = function (p) {
        var _this = this;
        debug('received:', p.toString(), 'total bytes:', p.getTotalBytes());
        p.forEachBufferSlice(function (bs) {
            debug('accumulating slice data', bs.size());
            _this._accuBuffer = common_utils_1.concatArrayBuffers(_this._accuBuffer, bs.newArrayBuffer());
            var blob = new Blob([_this._accuBuffer], { type: _this._mimeType });
            var objectUrl = URL.createObjectURL(blob);
            // local template eval vars
            var counter = _this._bufferDownloadCnt++;
            // tslint:disable-next-line: no-eval
            var filename = eval(_this._fileNameTemplate);
            if (!_this._downloadLinkContainer && _this._fallbackToSaveAs) {
                log('invoking save-as function with blob/filename', blob, filename);
                FileSaver.saveAs(blob, filename);
            }
            else {
                var link = document.createElement('a');
                link.href = objectUrl;
                link.download = filename;
                // tslint:disable-next-line: no-eval
                link.innerHTML = eval(_this._htmlTemplate);
                _this._downloadLinkContainer.appendChild(link);
            }
        });
        return true;
    };
    return WebFileDownloadSocket;
}(socket_1.InputSocket));
exports.WebFileDownloadSocket = WebFileDownloadSocket;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(25);
var processor_proxy_1 = __webpack_require__(119);
var common_utils_1 = __webpack_require__(5);
/*
export abstract class FactorizableProcessor extends Processor {
  private constructor() {
    super() // TODO: have protected signal handler setter
  }

  static create(): FactorizableProcessor {
    const name = this.getName();
    return new Processors[name]();
  }
}
*/
/*
export class FactorizableProcessorImpl extends FactorizableProcessor {

  get name() { return null; }

  protected processTransfer_(inS: import("/Users/stephan/Code/emliri/es-libs/multimedia.js/src/core/socket").InputSocket, p: import("/Users/stephan/Code/emliri/es-libs/multimedia.js/src/core/packet").Packet, inputIndex: number): boolean {
    throw new Error("Method not implemented.");
  }
}

export interface FactorizableProcessorImpl extends FactorizableProcessor {

}
*/
function getProcessorConstructorByName(factoryName) {
    return index_1.Processors[factoryName];
}
exports.getProcessorConstructorByName = getProcessorConstructorByName;
function createProcessorFromConstructor(ProcessorConstructor, args) {
    if (args === void 0) { args = []; }
    return new ((_a = ProcessorConstructor).bind.apply(_a, [void 0].concat(args)))();
    var _a;
}
exports.createProcessorFromConstructor = createProcessorFromConstructor;
function createProcessorFromShellName(factoryName, args) {
    return createProcessorFromConstructor(getProcessorConstructorByName(factoryName), args);
}
exports.createProcessorFromShellName = createProcessorFromShellName;
function newProcessorWorkerShell(procConstructor, args, importScriptPaths, onReady) {
    if (onReady === void 0) { onReady = common_utils_1.noop; }
    var name = procConstructor.getName();
    if (!name) {
        throw new Error('Can not use factory, static name is not defined');
    }
    return new processor_proxy_1.ProcessorProxy(name, onReady, args, importScriptPaths);
}
exports.newProcessorWorkerShell = newProcessorWorkerShell;
;
exports.newProc = newProcessorWorkerShell; // shorthand
function createProcessorWorkerShellAsync(factoryName, args, timeoutMs) {
    if (args === void 0) { args = []; }
    if (timeoutMs === void 0) { timeoutMs = 1000; }
    return new Promise(function (resolve, reject) {
        var proc = new processor_proxy_1.ProcessorProxy(factoryName, function () {
            var timeout = setTimeout(function () {
                reject(new Error('Timeout creating processor proxy'));
            }, timeoutMs);
            clearTimeout(timeout);
            resolve(proc);
        }, args);
    });
}
exports.createProcessorWorkerShellAsync = createProcessorWorkerShellAsync;
function checkProcessorType(procType) {
    return typeof procType.getName === 'function' && procType.getName() !== null;
}
exports.checkProcessorType = checkProcessorType;
;
function unsafeProcessorType(procType) {
    return procType;
}
exports.unsafeProcessorType = unsafeProcessorType;


/***/ }),
/* 49 */
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
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var defaultLsdProvider = function () { return new socket_1.SocketDescriptor(); };
exports.defaultLambdaSocketDescriptorProvider = defaultLsdProvider;
var LambdaProcessor = /** @class */ (function (_super) {
    __extends(LambdaProcessor, _super);
    function LambdaProcessor(tf, lsd) {
        if (lsd === void 0) { lsd = defaultLsdProvider; }
        var _this = _super.call(this) || this;
        _this.transferFunc_ = tf;
        _this.lsd_ = lsd;
        return _this;
    }
    LambdaProcessor.getName = function () { return 'LambdaProcessor'; };
    LambdaProcessor.prototype.templateSocketDescriptor = function (st) {
        return this.lsd_(st);
    };
    LambdaProcessor.prototype.processTransfer_ = function (inS, p) {
        return this.transferFunc_(inS, p);
    };
    return LambdaProcessor;
}(processor_1.Processor));
exports.LambdaProcessor = LambdaProcessor;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(51)
var ieee754 = __webpack_require__(52)
var isArray = __webpack_require__(53)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MP3 demuxer
 */
var id3_parser_1 = __webpack_require__(55);
var mpeg_audio_parser_1 = __webpack_require__(56);
exports.ID3_TIMESCALE = 90;
var MP3Parser = /** @class */ (function () {
    function MP3Parser() {
    }
    MP3Parser.probe = function (data) {
        // check if data contains ID3 timestamp and MPEG sync word
        var offset;
        var length;
        var id3Data = id3_parser_1.ID3Parser.getID3Data(data, 0);
        if (id3Data && id3_parser_1.ID3Parser.getTimeStamp(id3Data) !== undefined) {
            // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
            // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
            // More info http://www.mp3-tech.org/programmer/frame_header.html
            for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) {
                if (mpeg_audio_parser_1.MPEGAudioParser.probe(data, offset)) {
                    return true;
                }
            }
        }
        return false;
    };
    MP3Parser.parse = function (data, offset, onlyNext) {
        if (offset === void 0) { offset = 0; }
        if (onlyNext === void 0) { onlyNext = false; }
        var mp3Frames = [];
        var id3Samples = [];
        var length = data.length;
        var pts;
        var id3Data;
        while (offset < length) {
            if (mpeg_audio_parser_1.MPEGAudioParser.isHeader(data, offset)) {
                var frame = mpeg_audio_parser_1.MPEGAudioParser.parseFrame(data, offset);
                if (frame) {
                    mp3Frames.push(frame);
                    offset += frame.data.length;
                    if (onlyNext) {
                        return {
                            endOffset: offset,
                            mp3Frames: mp3Frames,
                            id3Samples: id3Samples
                        };
                    }
                }
                else {
                    break;
                }
            }
            else if (id3_parser_1.ID3Parser.isHeader(data, offset)) {
                id3Data = id3_parser_1.ID3Parser.getID3Data(data, offset);
                pts = exports.ID3_TIMESCALE * id3_parser_1.ID3Parser.getTimeStamp(id3Data);
                id3Samples.push({ pts: pts, dts: pts, data: id3Data });
                offset += id3Data.length;
                if (onlyNext) {
                    return {
                        endOffset: offset,
                        mp3Frames: mp3Frames,
                        id3Samples: id3Samples
                    };
                }
            }
            else {
                // nothing found, keep looking
                offset++;
            }
        }
        return {
            endOffset: offset,
            mp3Frames: mp3Frames,
            id3Samples: id3Samples
        };
    };
    return MP3Parser;
}());
exports.MP3Parser = MP3Parser;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ID3Parser = /** @class */ (function () {
    function ID3Parser() {
    }
    /**
     * Returns true if an ID3 header can be found at offset in data
    {Uint8Array} data - The data to search in
    {number} offset - The offset at which to start searching
    {boolean} - True if an ID3 header is found
     */
    ID3Parser.isHeader = function (data, offset) {
        /*
        * http://ID3Parser.org/id3v2.3.0
        * [0]     = 'I'
        * [1]     = 'D'
        * [2]     = '3'
        * [3,4]   = {Version}
        * [5]     = {Flags}
        * [6-9]   = {ID3 Size}
        *
        * An ID3v2 tag can be detected with the following pattern:
        *  $49 44 33 yy yy xx zz zz zz zz
        * Where yy is less than $FF, xx is the 'flags' byte and zz is less than $80
        */
        if (offset + 10 <= data.length) {
            // look for 'ID3' identifier
            if (data[offset] === 0x49 && data[offset + 1] === 0x44 && data[offset + 2] === 0x33) {
                // check version is within range
                if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
                    // check size is within range
                    if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Returns true if an ID3 footer can be found at offset in data
    {Uint8Array} data - The data to search in
    {number} offset - The offset at which to start searching
    {boolean} - True if an ID3 footer is found
     */
    ID3Parser.isFooter = function (data, offset) {
        /*
        * The footer is a copy of the header, but with a different identifier
        */
        if (offset + 10 <= data.length) {
            // look for '3DI' identifier
            if (data[offset] === 0x33 && data[offset + 1] === 0x44 && data[offset + 2] === 0x49) {
                // check version is within range
                if (data[offset + 3] < 0xFF && data[offset + 4] < 0xFF) {
                    // check size is within range
                    if (data[offset + 6] < 0x80 && data[offset + 7] < 0x80 && data[offset + 8] < 0x80 && data[offset + 9] < 0x80) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Returns any adjacent ID3 tags found in data starting at offset, as one block of data
    {Uint8Array} data - The data to search in
    {number} offset - The offset at which to start searching
    {Uint8Array} - The block of data containing any ID3 tags found
     */
    ID3Parser.getID3Data = function (data, offset) {
        var front = offset;
        var length = 0;
        while (ID3Parser.isHeader(data, offset)) {
            // ID3 header is 10 bytes
            length += 10;
            var size = ID3Parser._readSize(data, offset + 6);
            length += size;
            if (ID3Parser.isFooter(data, offset + 10)) {
                // ID3 footer is 10 bytes
                length += 10;
            }
            offset += length;
        }
        if (length > 0) {
            return data.subarray(front, front + length);
        }
        return undefined;
    };
    ID3Parser._readSize = function (data, offset) {
        var size = 0;
        size = ((data[offset] & 0x7f) << 21);
        size |= ((data[offset + 1] & 0x7f) << 14);
        size |= ((data[offset + 2] & 0x7f) << 7);
        size |= (data[offset + 3] & 0x7f);
        return size;
    };
    /**
     * Searches for the Elementary Stream timestamp found in the ID3 data chunk
    {Uint8Array} data - Block of data containing one or more ID3 tags
    {number} - The timestamp
     */
    ID3Parser.getTimeStamp = function (data) {
        var frames = ID3Parser.getID3Frames(data);
        // tslint:disable-next-line: prefer-for-of
        for (var i_1 = 0; i_1 < frames.length; i_1++) {
            var frame = frames[i_1];
            if (ID3Parser.isTimeStampFrame(frame)) {
                return ID3Parser._readTimeStamp(frame);
            }
        }
        return undefined;
    };
    /**
     * Returns true if the ID3 frame is an Elementary Stream timestamp frame
    {ID3 frame} frame
     */
    ID3Parser.isTimeStampFrame = function (frame) {
        return (frame && frame.key === 'PRIV' && frame.info === 'com.apple.streaming.transportStreamTimestamp');
    };
    ID3Parser._getFrameData = function (data) {
        /*
        Frame ID       $xx xx xx xx (four characters)
        Size           $xx xx xx xx
        Flags          $xx xx
        */
        var type = String.fromCharCode(data[0], data[1], data[2], data[3]);
        var size = ID3Parser._readSize(data, 4);
        // skip frame id, size, and flags
        var offset = 10;
        return { type: type, size: size, data: data.subarray(offset, offset + size) };
    };
    /**
     * Returns an array of ID3 frames found in all the ID3 tags in the id3Data
    {Uint8Array} id3Data - The ID3 data containing one or more ID3 tags
    {ID3 frame[]} - Array of ID3 frame objects
     */
    ID3Parser.getID3Frames = function (id3Data) {
        var offset = 0;
        var frames = [];
        while (ID3Parser.isHeader(id3Data, offset)) {
            var size = ID3Parser._readSize(id3Data, offset + 6);
            // skip past ID3 header
            offset += 10;
            var end = offset + size;
            // loop through frames in the ID3 tag
            while (offset + 8 < end) {
                var frameData = ID3Parser._getFrameData(id3Data.subarray(offset));
                var frame = ID3Parser._decodeFrame(frameData);
                if (frame) {
                    frames.push(frame);
                }
                // skip frame header and frame data
                offset += frameData.size + 10;
            }
            if (ID3Parser.isFooter(id3Data, offset)) {
                offset += 10;
            }
        }
        return frames;
    };
    ID3Parser._decodeFrame = function (frame) {
        if (frame.type === 'PRIV') {
            return ID3Parser._decodePrivFrame(frame);
        }
        else if (frame.type[0] === 'T') {
            return ID3Parser._decodeTextFrame(frame);
        }
        else if (frame.type[0] === 'W') {
            return ID3Parser._decodeURLFrame(frame);
        }
        return undefined;
    };
    ID3Parser._readTimeStamp = function (timeStampFrame) {
        if (timeStampFrame.data.byteLength === 8) {
            var data = new Uint8Array(timeStampFrame.data);
            // timestamp is 33 bit expressed as a big-endian eight-octet number,
            // with the upper 31 bits set to zero.
            var pts33Bit = data[3] & 0x1;
            var timestamp = (data[4] << 23) +
                (data[5] << 15) +
                (data[6] << 7) +
                data[7];
            timestamp /= 45;
            if (pts33Bit) {
                timestamp += 47721858.84; // 2^32 / 90
            }
            return Math.round(timestamp);
        }
        return undefined;
    };
    ID3Parser._decodePrivFrame = function (frame) {
        /*
        Format: <text string>\0<binary data>
        */
        if (frame.size < 2) {
            return undefined;
        }
        var owner = ID3Parser._utf8ArrayToStr(frame.data);
        var privateData = new Uint8Array(frame.data.subarray(owner.length + 1));
        return { key: frame.type, info: owner, data: privateData.buffer };
    };
    ID3Parser._decodeTextFrame = function (frame) {
        if (frame.size < 2) {
            return undefined;
        }
        if (frame.type === 'TXXX') {
            /*
            Format:
            [0]   = {Text Encoding}
            [1-?] = {Description}\0{Value}
            */
            var index = 1;
            var description = ID3Parser._utf8ArrayToStr(frame.data.subarray(index));
            index += description.length + 1;
            var value = ID3Parser._utf8ArrayToStr(frame.data.subarray(index));
            return { key: frame.type, info: description, data: value };
        }
        else {
            /*
            Format:
            [0]   = {Text Encoding}
            [1-?] = {Value}
            */
            var text = ID3Parser._utf8ArrayToStr(frame.data.subarray(1));
            return { key: frame.type, data: text };
        }
    };
    ID3Parser._decodeURLFrame = function (frame) {
        if (frame.type === 'WXXX') {
            /*
            Format:
            [0]   = {Text Encoding}
            [1-?] = {Description}\0{URL}
            */
            if (frame.size < 2) {
                return undefined;
            }
            var index = 1;
            var description = ID3Parser._utf8ArrayToStr(frame.data.subarray(index));
            index += description.length + 1;
            var value = ID3Parser._utf8ArrayToStr(frame.data.subarray(index));
            return { key: frame.type, info: description, data: value };
        }
        else {
            /*
            Format:
            [0-?] = {URL}
            */
            var url = ID3Parser._utf8ArrayToStr(frame.data);
            return { key: frame.type, data: url };
        }
    };
    // http://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript/22373197
    // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
    /* utf.js - UTF-8 <=> UTF-16 convertion
      *
      * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
      * Version: 1.0
      * LastModified: Dec 25 1999
      * This library is free.  You can redistribute it and/or modify it.
      */
    ID3Parser._utf8ArrayToStr = function (array) {
        var char2;
        var char3;
        var out = '';
        var i = 0;
        var length = array.length;
        while (i < length) {
            var c = array[i++];
            switch (c >> 4) {
                case 0:
                    return out;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12:
                case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    };
    return ID3Parser;
}());
exports.ID3Parser = ID3Parser;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module
 * MPEG-Audio parser
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPEGAudioSamplingRates = [44100, 48000, 32000, 22050, 24000, 16000, 11025, 12000, 8000];
exports.MPEGAudioBitratesTable = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448,
    32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384,
    32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
    32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256,
    8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
exports.SAMPLES_PER_FRAME = 1152;
var MPEGAudioParser = /** @class */ (function () {
    function MPEGAudioParser() {
    }
    MPEGAudioParser.parseFrame = function (data, offset) {
        // Using http://www.datavoyage.com/mpgscript/mpeghdr.htm as a reference
        if (offset + 24 > data.length) {
            return null;
        }
        var header = MPEGAudioParser.parseHeader(data, offset);
        if (header && offset + header.frameLength <= data.length) {
            var sampleDuration = 1 / header.sampleRate;
            var frameDuration = exports.SAMPLES_PER_FRAME * sampleDuration;
            return {
                headerRef: header,
                data: data.subarray(offset, offset + header.frameLength),
                frameDuration: frameDuration,
                sampleDuration: sampleDuration
            };
        }
        return null;
    };
    MPEGAudioParser.parseHeader = function (data, offset) {
        var headerB = (data[offset + 1] >> 3) & 3;
        var headerC = (data[offset + 1] >> 1) & 3;
        var headerE = (data[offset + 2] >> 4) & 15;
        var headerF = (data[offset + 2] >> 2) & 3;
        var headerG = !!(data[offset + 2] & 2);
        if (headerB !== 1 && headerE !== 0 && headerE !== 15 && headerF !== 3) {
            var columnInBitrates = headerB === 3 ? (3 - headerC) : (headerC === 3 ? 3 : 4);
            var bitRate = exports.MPEGAudioBitratesTable[columnInBitrates * 14 + headerE - 1] * 1000;
            var columnInSampleRates = headerB === 3 ? 0 : headerB === 2 ? 1 : 2;
            var sampleRate = exports.MPEGAudioSamplingRates[columnInSampleRates * 3 + headerF];
            var padding = headerG ? 1 : 0;
            var channelCount = data[offset + 3] >> 6 === 3 ? 1 : 2; // If bits of channel mode are `11` then it is a single channel (Mono)
            var frameLength = headerC === 3
                ? ((headerB === 3 ? 12 : 6) * bitRate / sampleRate + padding) << 2
                : ((headerB === 3 ? 144 : 72) * bitRate / sampleRate + padding) | 0;
            return { sampleRate: sampleRate, channelCount: channelCount, frameLength: frameLength };
        }
        return null;
    };
    MPEGAudioParser.isHeaderPattern = function (data, offset) {
        return data[offset] === 0xff &&
            (data[offset + 1] & 0xe0) === 0xe0 &&
            (data[offset + 1] & 0x06) !== 0x00;
    };
    MPEGAudioParser.isHeader = function (data, offset) {
        // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
        // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
        // More info http://www.mp3-tech.org/programmer/frame_header.html
        if (offset + 1 < data.length && MPEGAudioParser.isHeaderPattern(data, offset)) {
            return true;
        }
        return false;
    };
    MPEGAudioParser.probe = function (data, offset) {
        // same as isHeader but we also check that MPEG frame follows last MPEG frame
        // or end of data is reached
        if (offset + 1 < data.length && MPEGAudioParser.isHeaderPattern(data, offset)) {
            // MPEG header Length
            var headerLength = 4;
            // MPEG frame Length
            var header = MPEGAudioParser.parseHeader(data, offset);
            var frameLength = headerLength;
            if (header && header.frameLength) {
                frameLength = header.frameLength;
            }
            var newOffset = offset + frameLength;
            if (newOffset === data.length || (newOffset + 1 < data.length && MPEGAudioParser.isHeaderPattern(data, newOffset))) {
                return true;
            }
        }
        return false;
    };
    return MPEGAudioParser;
}());
exports.MPEGAudioParser = MPEGAudioParser;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exp_golomb_1 = __webpack_require__(58);
var nalu_1 = __webpack_require__(28);
var H264Parser = /** @class */ (function () {
    function H264Parser() {
    }
    H264Parser.extractNALu = function (buffer) {
        var i = 0;
        var length = buffer.byteLength;
        var value;
        var state = 0;
        var result = [];
        var lastIndex;
        while (i < length) {
            value = buffer[i++];
            // finding 3 or 4-byte start codes (00 00 01 OR 00 00 00 01)
            switch (state) {
                case 0:
                    if (value === 0) {
                        state = 1;
                    }
                    break;
                case 1:
                    if (value === 0) {
                        state = 2;
                    }
                    else {
                        state = 0;
                    }
                    break;
                case 2:
                case 3:
                    if (value === 0) {
                        state = 3;
                    }
                    else if (value === 1 && i < length) {
                        if (lastIndex) {
                            result.push(buffer.subarray(lastIndex, i - state - 1));
                        }
                        lastIndex = i;
                        state = 0;
                    }
                    else {
                        state = 0;
                    }
                    break;
                default:
                    break;
            }
        }
        if (lastIndex) {
            result.push(buffer.subarray(lastIndex, length));
        }
        return result;
    };
    /**
       * Advance the ExpGolomb decoder past a scaling list. The scaling
       * list is optionally transmitted as part of a sequence parameter
       * set and is not relevant to transmuxing.
    decoder {ExpGolomb} exp golomb decoder
    count {number} the number of entries in this scaling list
       * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
       */
    H264Parser.skipScalingList = function (decoder, count) {
        var lastScale = 8;
        var nextScale = 8;
        var deltaScale;
        for (var j = 0; j < count; j++) {
            if (nextScale !== 0) {
                deltaScale = decoder.readEG();
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
    H264Parser.readSPS = function (data) {
        var decoder = new exp_golomb_1.ExpGolomb(data);
        var frameCropLeftOffset = 0;
        var frameCropRightOffset = 0;
        var frameCropTopOffset = 0;
        var frameCropBottomOffset = 0;
        var sarScale = 1;
        var profileIdc;
        var profileCompat;
        var levelIdc;
        var numRefFramesInPicOrderCntCycle;
        var picWidthInMbsMinus1;
        var picHeightInMapUnitsMinus1;
        var frameMbsOnlyFlag;
        var scalingListCount;
        decoder.readUByte();
        profileIdc = decoder.readUByte(); // profile_idc
        profileCompat = decoder.readBits(5); // constraint_set[0-4]_flag, u(5)
        decoder.skipBits(3); // reserved_zero_3bits u(3),
        levelIdc = decoder.readUByte(); // level_idc u(8)
        decoder.skipUEG(); // seq_parameter_set_id
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
            var chromaFormatIdc = decoder.readUEG();
            if (chromaFormatIdc === 3) {
                decoder.skipBits(1); // separate_colour_plane_flag
            }
            decoder.skipUEG(); // bit_depth_luma_minus8
            decoder.skipUEG(); // bit_depth_chroma_minus8
            decoder.skipBits(1); // qpprime_y_zero_transform_bypass_flag
            if (decoder.readBoolean()) { // seq_scaling_matrix_present_flag
                scalingListCount = (chromaFormatIdc !== 3) ? 8 : 12;
                for (var i_1 = 0; i_1 < scalingListCount; ++i_1) {
                    if (decoder.readBoolean()) { // seq_scaling_list_present_flag[ i ]
                        if (i_1 < 6) {
                            H264Parser.skipScalingList(decoder, 16);
                        }
                        else {
                            H264Parser.skipScalingList(decoder, 64);
                        }
                    }
                }
            }
        }
        decoder.skipUEG(); // log2_max_frame_num_minus4
        var picOrderCntType = decoder.readUEG();
        if (picOrderCntType === 0) {
            decoder.readUEG(); // log2_max_pic_order_cnt_lsb_minus4
        }
        else if (picOrderCntType === 1) {
            decoder.skipBits(1); // delta_pic_order_always_zero_flag
            decoder.skipEG(); // offset_for_non_ref_pic
            decoder.skipEG(); // offset_for_top_to_bottom_field
            numRefFramesInPicOrderCntCycle = decoder.readUEG();
            for (var i_2 = 0; i_2 < numRefFramesInPicOrderCntCycle; ++i_2) {
                decoder.skipEG(); // offset_for_ref_frame[ i ]
            }
        }
        decoder.skipUEG(); // max_num_ref_frames
        decoder.skipBits(1); // gaps_in_frame_num_value_allowed_flag
        picWidthInMbsMinus1 = decoder.readUEG();
        picHeightInMapUnitsMinus1 = decoder.readUEG();
        frameMbsOnlyFlag = decoder.readBits(1);
        if (frameMbsOnlyFlag === 0) {
            decoder.skipBits(1); // mb_adaptive_frame_field_flag
        }
        decoder.skipBits(1); // direct_8x8_inference_flag
        if (decoder.readBoolean()) { // frame_cropping_flag
            frameCropLeftOffset = decoder.readUEG();
            frameCropRightOffset = decoder.readUEG();
            frameCropTopOffset = decoder.readUEG();
            frameCropBottomOffset = decoder.readUEG();
        }
        if (decoder.readBoolean()) {
            // vui_parameters_present_flag
            if (decoder.readBoolean()) {
                // aspect_ratio_info_present_flag
                var sarRatio = void 0;
                var aspectRatioIdc = decoder.readUByte();
                switch (aspectRatioIdc) {
                    case 1:
                        sarRatio = [1, 1];
                        break;
                    case 2:
                        sarRatio = [12, 11];
                        break;
                    case 3:
                        sarRatio = [10, 11];
                        break;
                    case 4:
                        sarRatio = [16, 11];
                        break;
                    case 5:
                        sarRatio = [40, 33];
                        break;
                    case 6:
                        sarRatio = [24, 11];
                        break;
                    case 7:
                        sarRatio = [20, 11];
                        break;
                    case 8:
                        sarRatio = [32, 11];
                        break;
                    case 9:
                        sarRatio = [80, 33];
                        break;
                    case 10:
                        sarRatio = [18, 11];
                        break;
                    case 11:
                        sarRatio = [15, 11];
                        break;
                    case 12:
                        sarRatio = [64, 33];
                        break;
                    case 13:
                        sarRatio = [160, 99];
                        break;
                    case 14:
                        sarRatio = [4, 3];
                        break;
                    case 15:
                        sarRatio = [3, 2];
                        break;
                    case 16:
                        sarRatio = [2, 1];
                        break;
                    case 255: {
                        sarRatio = [decoder.readUByte() << 8 | decoder.readUByte(), decoder.readUByte() << 8 | decoder.readUByte()];
                        break;
                    }
                }
                if (sarRatio) {
                    sarScale = sarRatio[0] / sarRatio[1];
                }
            }
            if (decoder.readBoolean()) {
                decoder.skipBits(1);
            }
            if (decoder.readBoolean()) {
                decoder.skipBits(4);
                if (decoder.readBoolean()) {
                    decoder.skipBits(24);
                }
            }
            if (decoder.readBoolean()) {
                decoder.skipUEG();
                decoder.skipUEG();
            }
            if (decoder.readBoolean()) {
                var unitsInTick = decoder.readUInt();
                var timeScale = decoder.readUInt();
                var fixedFrameRate = decoder.readBoolean();
                var frameDuration = timeScale / (2 * unitsInTick);
            }
        }
        return {
            width: Math.ceil((((picWidthInMbsMinus1 + 1) * 16) - frameCropLeftOffset * 2 - frameCropRightOffset * 2) * sarScale),
            height: ((2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16) - ((frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset))
        };
    };
    H264Parser.prototype.parseSPS = function (sps) {
        var config = H264Parser.readSPS(new Uint8Array(sps)); // why new?
        this.width = config.width;
        this.height = config.height;
        this.sps = [new Uint8Array(sps)];
        this.codec = 'avc1.';
        var codecarray = new DataView(sps.buffer, sps.byteOffset + 1, 4);
        for (var i_3 = 0; i_3 < 3; ++i_3) {
            var h = codecarray.getUint8(i_3).toString(16);
            if (h.length < 2) {
                h = '0' + h;
            }
            this.codec += h;
        }
    };
    H264Parser.prototype.parsePPS = function (pps) {
        this.pps = [new Uint8Array(pps)]; // why new?
    };
    H264Parser.prototype.parseNAL = function (unit) {
        if (!unit) {
            return false;
        }
        var push = false;
        switch (unit.type()) {
            case nalu_1.NALU.NDR:
                push = true;
                break;
            case nalu_1.NALU.IDR:
                push = true;
                break;
            case nalu_1.NALU.PPS:
                if (!this.pps) {
                    this.parsePPS(unit.getData().subarray(4));
                    if (!this.readyToDecode && this.pps && this.sps) {
                        this.readyToDecode = true;
                    }
                }
                push = true;
                break;
            case nalu_1.NALU.SPS:
                if (!this.sps) {
                    this.parseSPS(unit.getData().subarray(4));
                    if (!this.readyToDecode && this.pps && this.sps) {
                        this.readyToDecode = true;
                    }
                }
                push = true;
                break;
            case nalu_1.NALU.AUD:
                if (this.isHDAvailable) {
                    this.isHDAvailable = false;
                }
                break;
            case nalu_1.NALU.SEI:
                break;
            default:
        }
        return push;
    };
    return H264Parser;
}());
exports.H264Parser = H264Parser;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ExpGolomb = /** @class */ (function () {
    function ExpGolomb(data) {
        this.data = data;
        this.index = 0;
        this.bitLength = data.byteLength * 8;
    }
    Object.defineProperty(ExpGolomb.prototype, "bitsAvailable", {
        get: function () {
            return this.bitLength - this.index;
        },
        enumerable: true,
        configurable: true
    });
    ExpGolomb.prototype.skipBits = function (size) {
        // console.log(`  skip bits: size=${size}, ${this.index}.`);
        if (this.bitsAvailable < size) {
            // throw new Error('no bytes available');
            return false;
        }
        this.index += size;
    };
    ExpGolomb.prototype.readBits = function (size, moveIndex) {
        if (moveIndex === void 0) { moveIndex = true; }
        // console.log(`  read bits: size=${size}, ${this.index}.`);
        var result = this.getBits(size, this.index, moveIndex);
        // console.log(`    read bits: result=${result}`);
        return result;
    };
    ExpGolomb.prototype.getBits = function (size, offsetBits, moveIndex) {
        if (moveIndex === void 0) { moveIndex = true; }
        if (this.bitsAvailable < size) {
            // throw new Error('no bytes available');
            return 0;
        }
        var offset = offsetBits % 8;
        var byte = this.data[(offsetBits / 8) | 0] & (0xff >>> offset);
        var bits = 8 - offset;
        if (bits >= size) {
            if (moveIndex) {
                this.index += size;
            }
            return byte >> (bits - size);
        }
        else {
            if (moveIndex) {
                this.index += bits;
            }
            var nextSize = size - bits;
            return (byte << nextSize) | this.getBits(nextSize, offsetBits + bits, moveIndex);
        }
    };
    ExpGolomb.prototype.skipLZ = function () {
        var leadingZeroCount;
        for (leadingZeroCount = 0; leadingZeroCount < this.bitLength - this.index; ++leadingZeroCount) {
            if (this.getBits(1, this.index + leadingZeroCount, false) !== 0) {
                // console.log(`  skip LZ  : size=${leadingZeroCount}, ${this.index}.`);
                this.index += leadingZeroCount;
                return leadingZeroCount;
            }
        }
        return leadingZeroCount;
    };
    ExpGolomb.prototype.skipUEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    ExpGolomb.prototype.skipEG = function () {
        this.skipBits(1 + this.skipLZ());
    };
    ExpGolomb.prototype.readUEG = function () {
        var prefix = this.skipLZ();
        return this.readBits(prefix + 1) - 1;
    };
    ExpGolomb.prototype.readEG = function () {
        var value = this.readUEG();
        if (0x01 & value) {
            // the number is odd if the low order bit is set
            return (1 + value) >>> 1; // add 1 to make it even, and divide by 2
        }
        else {
            return -1 * (value >>> 1); // divide by two then make it negative
        }
    };
    ExpGolomb.prototype.readBoolean = function () {
        return this.readBits(1) === 1;
    };
    ExpGolomb.prototype.readUByte = function (numberOfBytes) {
        if (numberOfBytes === void 0) { numberOfBytes = 1; }
        return this.readBits((numberOfBytes * 8));
    };
    ExpGolomb.prototype.readUShort = function () {
        return this.readBits(16);
    };
    ExpGolomb.prototype.readUInt = function () {
        return this.readBits(32);
    };
    return ExpGolomb;
}());
exports.ExpGolomb = ExpGolomb;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// would be nice but webpack takes looong to compile this :)
Object.defineProperty(exports, "__esModule", { value: true });
// import ffmpegMp4Toolchain from 'ffmpeg.js/ffmpeg-mp4';
/*
import ffmpegWebmToolchain from 'ffmpeg.js/ffmpeg-webm';
*/
// for now let's try to rely on a global install or some other delegation of the problem to the user by dependency injection
var logger_1 = __webpack_require__(2);
var common_utils_1 = __webpack_require__(5);
var _a = logger_1.getLogger('ffmpeg-tool'), debug = _a.debug, log = _a.log, warn = _a.warn, error = _a.error;
// TODO: ...
var FFmpegStdPipeBuffer = /** @class */ (function () {
    function FFmpegStdPipeBuffer() {
    }
    return FFmpegStdPipeBuffer;
}());
exports.FFmpegStdPipeBuffer = FFmpegStdPipeBuffer;
var FFmpegTool = /** @class */ (function () {
    /*
    static get MP4Toolchain(): FFmpegToolchainExeWrapper {
      return ffmpegMp4Toolchain;
    }
  
    static get WEBMToolchain(): FFmpegToolchainBuild {
      return ffmpegWebmToolchain;
    }
    */
    function FFmpegTool(ffmpeg, _onStdErrPipeByte, _onStdOutPipeByte) {
        if (_onStdErrPipeByte === void 0) { _onStdErrPipeByte = null; }
        if (_onStdOutPipeByte === void 0) { _onStdOutPipeByte = null; }
        this.ffmpeg = ffmpeg;
        this._onStdErrPipeByte = _onStdErrPipeByte;
        this._onStdOutPipeByte = _onStdOutPipeByte;
    }
    /**
     * Slightly low-level method, better use a more convenient wrapper if it can fit your purpose.
     *
     * Usage example:
     *
     *  // notice the redundant inputfile pathname information passed here, reason why is somewhere
     *  // inside ffmpeg.s
     *  const args = ['-i', 'input.mp3', '-c:a', 'aac', '-b:a', '128k', 'output.mp4'];
     *  const outData = ffmpegWrapper.runWithOneInputFile(new Uint8Array(data), 'input.mp3', args);
     *
     * @param fileData
     * @param fileName
     * @param ffmpegArguments
     */
    FFmpegTool.prototype.runWithOneInputFile = function (inputFile, ffmpegArguments) {
        // TODO: use FFmpegStdPipeBuffer class
        var _this = this;
        var stdErrBytesCount = 0;
        var stderrData = [];
        var onStdErrChar = function (byte) {
            stdErrBytesCount++;
            stderrData.push(byte);
            // debug(`wrote ${stdErrBytesCount} bytes to stderr`);
            if (_this._onStdErrPipeByte) {
                _this._onStdErrPipeByte(byte, stdErrBytesCount);
            }
        };
        var stdOutBytesCount = 0;
        var stdoutData = [];
        var onStdOutChar = function (byte) {
            stdOutBytesCount++;
            stdoutData.push(byte);
            debug("wrote " + stdOutBytesCount + " bytes to stdout");
            if (_this._onStdOutPipeByte) {
                _this._onStdOutPipeByte(byte, stdErrBytesCount);
            }
        };
        var ffmpeg = this.ffmpeg;
        var out = null;
        try {
            var result = ffmpeg({
                MEMFS: [inputFile],
                arguments: ffmpegArguments,
                // Ignore stdin read requests
                stdin: common_utils_1.noop,
                stdout: onStdOutChar,
                stderr: onStdErrChar
            });
            out = result.MEMFS[0];
        }
        catch (err) {
            error('Running FFmpeg conversion tool failed with an error:', err);
        }
        debug('dumping stderr temp-buffer:', String.fromCharCode.apply(String, stderrData));
        if (!out) {
            // FIXME: this seems to happen with certain x-wav files for some reason
            warn('no memfs item returned, using temp-buffer on stdout to pass out result data (working around known issue with wav files)');
            error('no stdout bytes captured (this is a ffmpeg.js issue most likely)');
            // the approach below would work if we would actually get some data
            /*
            if (bytesCount === 0) {
              error('no bytes written; maybe bad input data, aborting');
              return null;
            }
            out = {
              name: lastOfArray(ffmpegArguments),
              data: new Uint8Array(outputData)
            }
            */
        }
        return out;
    };
    /**
     * see https://www.ffmpeg.org/ffmpeg-codecs.html#Codec-Options
     * @param inputFileData
     * @param inputExtension
     * @param audioConfig
     * @param videoConfig
     * @param extraArgs
     */
    FFmpegTool.prototype.convertAVFile = function (inputFileData, inputExtension, audioConfig, videoConfig, extraArgs) {
        if (extraArgs === void 0) { extraArgs = []; }
        var inputFile = { name: "input." + inputExtension, data: inputFileData };
        var outputFileExt = null;
        if (videoConfig) {
            outputFileExt = videoConfig.targetFiletypeExt;
        }
        else if (audioConfig) {
            outputFileExt = audioConfig.targetFiletypeExt;
        }
        else {
            throw new Error('both audio/video config inexistent');
        }
        var outFilename = "output." + outputFileExt;
        var args = ['-i', inputFile.name];
        if (audioConfig) {
            args = args.concat(['-c:a', audioConfig.targetCodec, '-b:a', audioConfig.targetBitrateKbps + "k"]);
        }
        if (videoConfig) {
            args = args.concat(['-c:v', videoConfig.targetCodec, '-b:v', videoConfig.targetBitrateKbps + "k"]);
        }
        args = args.concat([outFilename], extraArgs);
        log("calling main with args: \"" + args.join(' ') + "\"");
        var outFile = this.runWithOneInputFile(inputFile, args);
        if (!outFile) {
            warn('no output file created');
            return null;
        }
        return outFile.data;
    };
    /**
     *
     * @param inputFileData
     * @param inputExtension without dot
     * @param targetCodec ffmpeg codec identifier, defaults to 'aac'
     * @param targetFiletypeExt without dot, defaults to 'mp4'
     */
    FFmpegTool.prototype.convertAudioFile = function (inputFileData, inputExtension, targetCodec, targetFiletypeExt, targetBitrateKbps) {
        if (targetCodec === void 0) { targetCodec = 'aac'; }
        if (targetFiletypeExt === void 0) { targetFiletypeExt = 'mp4'; }
        if (targetBitrateKbps === void 0) { targetBitrateKbps = 128; }
        var inputFile = { name: "input." + inputExtension, data: inputFileData };
        var outFilename = "output." + targetFiletypeExt;
        var args = ['-i', inputFile.name, '-c:a', targetCodec, '-b:a', targetBitrateKbps + "k", outFilename];
        var outFile = this.runWithOneInputFile(inputFile, args);
        return outFile.data;
    };
    FFmpegTool.prototype.getVersion = function () {
        var stdout = '';
        var stderr = '';
        var ffmpeg = this.ffmpeg;
        return new Promise(function (resolve, reject) {
            // Print FFmpeg's version
            ffmpeg({
                arguments: ['-version'],
                print: function (data) {
                    stdout += data + '\n';
                    debug(data);
                },
                printErr: function (data) {
                    stderr += data + '\n';
                    error(data);
                },
                onExit: function (code) {
                    log('Virtual process exited with code ' + code);
                    if (code === 0) {
                        resolve(stdout);
                    }
                    else {
                        reject(stderr);
                    }
                },
            });
        });
    };
    return FFmpegTool;
}());
exports.FFmpegTool = FFmpegTool;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var mp4iso_boxes_1 = __webpack_require__(30);
var common_utils_1 = __webpack_require__(5);
var logger_1 = __webpack_require__(2);
var mp4iso_base_1 = __webpack_require__(31);
var mp4iso_sample_table_1 = __webpack_require__(61);
var _a = logger_1.getLogger('MP4Mux(moz)'), warn = _a.warn, debug = _a.debug;
var MAX_PACKETS_IN_CHUNK = Infinity;
var SPLIT_AT_KEYFRAMES = true;
exports.AAC_SAMPLES_PER_FRAME = 1024;
exports.SOUNDRATES = [5500, 11025, 22050, 44100];
exports.SOUNDFORMATS = [
    'PCM',
    'ADPCM',
    'MP3',
    'PCM le',
    'Nellymouser16',
    'Nellymouser8',
    'Nellymouser',
    'G.711 A-law',
    'G.711 mu-law',
    null,
    'AAC',
    'Speex',
    'MP3 8khz'
];
exports.MP3_SOUND_CODEC_ID = 2;
exports.AAC_SOUND_CODEC_ID = 10;
var AudioPacketType;
(function (AudioPacketType) {
    AudioPacketType[AudioPacketType["HEADER"] = 0] = "HEADER";
    AudioPacketType[AudioPacketType["RAW"] = 1] = "RAW";
})(AudioPacketType = exports.AudioPacketType || (exports.AudioPacketType = {}));
function parseAudiodata(data) {
    var i = 0;
    var packetType = AudioPacketType.RAW;
    var flags = data[i];
    var codecId = flags >> 4;
    var soundRateId = (flags >> 2) & 3;
    var sampleSize = flags & 2 ? 16 : 8;
    var channels = flags & 1 ? 2 : 1;
    var samples;
    i++;
    switch (codecId) {
        case exports.AAC_SOUND_CODEC_ID:
            var type = data[i++];
            packetType = type;
            samples = exports.AAC_SAMPLES_PER_FRAME; // AAC implementations typically represent 1024 PCM audio samples
            break;
        case exports.MP3_SOUND_CODEC_ID:
            var version = (data[i + 1] >> 3) & 3; // 3 - MPEG 1
            var layer = (data[i + 1] >> 1) & 3; // 3 - Layer I, 2 - II, 1 - III
            samples = layer === 1 ? (version === 3 ? 1152 : 576)
                : (layer === 3 ? 384 : 1152);
            break;
    }
    return {
        codecDescription: exports.SOUNDFORMATS[codecId],
        codecId: codecId,
        data: data.subarray(i),
        rate: exports.SOUNDRATES[soundRateId],
        size: sampleSize,
        channels: channels,
        samples: samples,
        packetType: packetType
    };
}
exports.parseAudiodata = parseAudiodata;
exports.VIDEOCODECS = [null, 'JPEG', 'Sorenson', 'Screen', 'VP6', 'VP6 alpha', 'Screen2', 'AVC'];
exports.VP6_VIDEO_CODEC_ID = 4;
exports.AVC_VIDEO_CODEC_ID = 7;
var VideoFrameType;
(function (VideoFrameType) {
    VideoFrameType[VideoFrameType["KEY"] = 1] = "KEY";
    VideoFrameType[VideoFrameType["INNER"] = 2] = "INNER";
    VideoFrameType[VideoFrameType["DISPOSABLE"] = 3] = "DISPOSABLE";
    VideoFrameType[VideoFrameType["GENERATED"] = 4] = "GENERATED";
    VideoFrameType[VideoFrameType["INFO"] = 5] = "INFO";
})(VideoFrameType = exports.VideoFrameType || (exports.VideoFrameType = {}));
var VideoPacketType;
(function (VideoPacketType) {
    VideoPacketType[VideoPacketType["HEADER"] = 0] = "HEADER";
    VideoPacketType[VideoPacketType["NALU"] = 1] = "NALU";
    VideoPacketType[VideoPacketType["END"] = 2] = "END";
})(VideoPacketType = exports.VideoPacketType || (exports.VideoPacketType = {}));
function parseVideodata(data) {
    var i = 0;
    var frameType = data[i] >> 4;
    var codecId = data[i] & 15;
    i++;
    var result = {
        frameType: frameType,
        codecId: codecId,
        codecDescription: exports.VIDEOCODECS[codecId]
    };
    switch (codecId) {
        case exports.AVC_VIDEO_CODEC_ID:
            var type = data[i++];
            result.packetType = type;
            result.compositionTime = ((data[i] << 24) | (data[i + 1] << 16) | (data[i + 2] << 8)) >> 8;
            i += 3;
            break;
        case exports.VP6_VIDEO_CODEC_ID:
            result.packetType = VideoPacketType.NALU;
            result.horizontalOffset = (data[i] >> 4) & 15;
            result.verticalOffset = data[i] & 15;
            result.compositionTime = 0;
            i++;
            break;
    }
    result.data = data.subarray(i);
    return result;
}
exports.parseVideodata = parseVideodata;
var MP4MuxPacketType;
(function (MP4MuxPacketType) {
    MP4MuxPacketType[MP4MuxPacketType["AUDIO_PACKET"] = 8] = "AUDIO_PACKET";
    MP4MuxPacketType[MP4MuxPacketType["VIDEO_PACKET"] = 9] = "VIDEO_PACKET"; // legacy support numbers, not sure if can be replaced
})(MP4MuxPacketType = exports.MP4MuxPacketType || (exports.MP4MuxPacketType = {}));
;
var MP4MuxState;
(function (MP4MuxState) {
    MP4MuxState[MP4MuxState["CAN_GENERATE_HEADER"] = 0] = "CAN_GENERATE_HEADER";
    MP4MuxState[MP4MuxState["NEED_HEADER_DATA"] = 1] = "NEED_HEADER_DATA";
    MP4MuxState[MP4MuxState["MAIN_PACKETS"] = 2] = "MAIN_PACKETS";
})(MP4MuxState = exports.MP4MuxState || (exports.MP4MuxState = {}));
var MP4Mux = /** @class */ (function () {
    function MP4Mux(metadata, fragmentedMode) {
        var _this = this;
        this.filePos = 0;
        this.cachedPackets = [];
        this.state = null; // FIXME
        this.chunkIndex = 0;
        this.fragmentedMode = true;
        this.oncodecinfo = function (codecs) {
            throw new Error('MP4Mux.oncodecdata is not set');
        };
        this.ondata = function (data) {
            throw new Error('MP4Mux.ondata is not set');
        };
        this.metadata = metadata;
        this.fragmentedMode = fragmentedMode;
        this.trackStates = this.metadata.tracks.map(function (t, index) {
            var state = {
                trackId: index + 1,
                trackInfo: t,
                cachedDuration: 0,
                samplesProcessed: 0,
                initializationData: []
            };
            if (_this.metadata.audioTrackId === state.trackId) {
                _this.audioTrackState = state;
            }
            if (_this.metadata.videoTrackId === state.trackId) {
                _this.videoTrackState = state;
            }
            return state;
        }, this);
        this._checkIfNeedHeaderData();
    }
    MP4Mux.prototype.pushPacket = function (type, codecId, data, timestamp, forceRaw, isInitData, isKeyframe, cto, audioDetails) {
        if (forceRaw === void 0) { forceRaw = false; }
        if (isInitData === void 0) { isInitData = false; }
        if (isKeyframe === void 0) { isKeyframe = false; }
        if (cto === void 0) { cto = 0; }
        if (audioDetails === void 0) { audioDetails = null; }
        if (this.state === MP4MuxState.CAN_GENERATE_HEADER) {
            this._attemptToGenerateMovieHeader();
        }
        switch (type) {
            case MP4MuxPacketType.AUDIO_PACKET: // audio
                var audioTrack = this.audioTrackState;
                var audioPacket = void 0;
                if (forceRaw) {
                    if (!audioDetails) {
                        throw new Error('We need audio-details in raw sample push mode');
                    }
                    var sampleRate = audioDetails.sampleRate, sampleDepth = audioDetails.sampleDepth, samplesPerFrame = audioDetails.samplesPerFrame, numChannels = audioDetails.numChannels;
                    audioPacket = {
                        data: data,
                        codecId: codecId,
                        codecDescription: exports.SOUNDFORMATS[codecId],
                        rate: sampleRate,
                        size: sampleDepth,
                        channels: numChannels,
                        samples: samplesPerFrame,
                        packetType: isInitData ? AudioPacketType.HEADER : AudioPacketType.RAW,
                    };
                }
                else {
                    audioPacket = parseAudiodata(data);
                }
                if (!audioTrack || audioTrack.trackInfo.codecId !== audioPacket.codecId) {
                    throw new Error('Unexpected audio packet codec: ' + audioPacket.codecDescription);
                }
                switch (audioPacket.codecId) {
                    default:
                        throw new Error('Unsupported audio codec: ' + audioPacket.codecDescription);
                    case exports.MP3_SOUND_CODEC_ID:
                        break; // supported codec
                    case exports.AAC_SOUND_CODEC_ID:
                        if (audioPacket.packetType === AudioPacketType.HEADER) {
                            audioTrack.initializationData.push(audioPacket.data);
                            return;
                        }
                        break;
                }
                this.cachedPackets.push({ packet: audioPacket, timestamp: timestamp, trackId: audioTrack.trackId });
                break;
            case MP4MuxPacketType.VIDEO_PACKET:
                var videoTrack = this.videoTrackState;
                var videoPacket = void 0;
                if (forceRaw) {
                    videoPacket = {
                        frameType: isKeyframe ? VideoFrameType.KEY : VideoFrameType.INNER,
                        codecId: exports.AVC_VIDEO_CODEC_ID,
                        codecDescription: exports.VIDEOCODECS[exports.AVC_VIDEO_CODEC_ID],
                        data: data,
                        packetType: isInitData ? VideoPacketType.HEADER : VideoPacketType.NALU,
                        compositionTime: timestamp + cto
                    };
                }
                else {
                    videoPacket = parseVideodata(data);
                }
                if (!videoTrack || videoTrack.trackInfo.codecId !== videoPacket.codecId) {
                    throw new Error('Unexpected video packet codec: ' + videoPacket.codecDescription);
                }
                switch (videoPacket.codecId) {
                    default:
                        throw new Error('unsupported video codec: ' + videoPacket.codecDescription);
                    case exports.VP6_VIDEO_CODEC_ID:
                        break; // supported
                    case exports.AVC_VIDEO_CODEC_ID:
                        if (videoPacket.packetType === VideoPacketType.HEADER) {
                            videoTrack.initializationData.push(videoPacket.data);
                            return;
                        }
                        break;
                }
                this.cachedPackets.push({ packet: videoPacket, timestamp: timestamp, trackId: videoTrack.trackId });
                break;
            default:
                throw new Error('unknown packet type: ' + type);
        }
        if (this.state === MP4MuxState.NEED_HEADER_DATA) {
            this._attemptToGenerateMovieHeader();
        }
        if (this.fragmentedMode
            && this.cachedPackets.length >= MAX_PACKETS_IN_CHUNK &&
            this.state === MP4MuxState.MAIN_PACKETS) {
            this._generateMovieFragment();
        }
    };
    MP4Mux.prototype.flush = function () {
        if (this.cachedPackets.length > 0) {
            if (this.fragmentedMode) {
                this._generateMovieFragment();
            }
            else {
                this._generatePlainMovFile();
            }
        }
    };
    MP4Mux.prototype._checkIfNeedHeaderData = function () {
        if (this.trackStates.some(function (ts) {
            return ts.trackInfo.codecId === exports.AAC_SOUND_CODEC_ID || ts.trackInfo.codecId === exports.AVC_VIDEO_CODEC_ID;
        })) {
            this.state = MP4MuxState.NEED_HEADER_DATA;
        }
        else {
            this.state = MP4MuxState.CAN_GENERATE_HEADER;
        }
    };
    MP4Mux.prototype._generatePlainMovFile = function () {
        var _a = this._createPlainMovMediaData(), mdat = _a[0], sampleTablesData = _a[1];
        var header = this._makeMovHeader(false, sampleTablesData, mdat);
        this.oncodecinfo(this.trackStates.map(function (ts) { return ts.mimeTypeCodec; }));
        this.ondata(header);
    };
    // TODO: make static (is stateless)
    MP4Mux.prototype._createTrackBox = function (trakFlags, trackState, trackInfo, handlerType, handlerName, sampleTable, ordinalIndex) {
        var specificMediaHandlerBox = null;
        var volume = 0;
        var width = 0;
        var height = 0;
        if (handlerType === 'soun') {
            volume = 1.0;
            specificMediaHandlerBox = new mp4iso_boxes_1.SoundMediaHeaderBox(0);
        }
        else if (handlerType === 'vide') {
            width = trackInfo.width;
            height = trackInfo.height;
            specificMediaHandlerBox = new mp4iso_boxes_1.VideoMediaHeaderBox();
        }
        else {
            throw new Error('Unknown handler-type: ' + handlerType);
        }
        // TODO: make these constants
        var trak = new mp4iso_boxes_1.TrackBox(new mp4iso_boxes_1.TrackHeaderBox(trakFlags, trackState.trackId, trackInfo.duration / trackInfo.timescale, // FIXME: use unscaled duration values on external interface
        width, height, volume, ordinalIndex), new mp4iso_boxes_1.MediaBox(new mp4iso_boxes_1.MediaHeaderBox(trackInfo.timescale, trackInfo.duration, trackInfo.language), new mp4iso_boxes_1.HandlerBox(handlerType, handlerName), new mp4iso_boxes_1.MediaInformationBox(specificMediaHandlerBox, new mp4iso_boxes_1.DataInformationBox(new mp4iso_boxes_1.DataReferenceBox([new mp4iso_boxes_1.DataEntryUrlBox(mp4iso_boxes_1.SELF_CONTAINED_DATA_REFERENCE_FLAG)])), sampleTable)));
        return trak;
    };
    MP4Mux.prototype._createPlainMovMediaData = function () {
        var cachedPackets = this.cachedPackets;
        var sampleTablesData = [];
        var chunks = [];
        var samples = null;
        var _loop_1 = function (i_1) {
            var trackState = this_1.trackStates[i_1];
            var trackInfo = trackState.trackInfo;
            var trackId = trackState.trackId;
            // Finding all packets for this track.
            var trackPackets = cachedPackets.filter(function (cp) { return cp.trackId === trackId; });
            if (trackPackets.length === 0) {
                return "continue";
            }
            samples = []; // reset sample list
            chunks.push([]); // init new chunk as empty list of uint8arrays
            var samplesProcessed = trackState.samplesProcessed;
            var dts = 0; // + trackState.cachedDuration ? ... but not really necessary in unfragmented mode
            switch (trackInfo.codecId) {
                case exports.AAC_SOUND_CODEC_ID:
                case exports.MP3_SOUND_CODEC_ID: {
                    for (var j = 0; j < trackPackets.length; j++) {
                        var audioPacket = trackPackets[j].packet;
                        var audioFrameDuration = Math.round(audioPacket.samples * trackInfo.timescale / trackInfo.samplerate);
                        var s = {
                            size: audioPacket.data.length,
                            dts: dts,
                            cts: dts,
                            isRap: true
                        };
                        samples.push(s);
                        chunks[i_1].push(audioPacket.data);
                        samplesProcessed += audioPacket.samples;
                        dts += audioFrameDuration;
                    }
                    trackState.samplesProcessed = samplesProcessed;
                    trackState.cachedDuration
                        = Math.round(trackState.samplesProcessed * trackInfo.timescale / trackInfo.samplerate);
                    break;
                }
                case exports.AVC_VIDEO_CODEC_ID:
                case exports.VP6_VIDEO_CODEC_ID: {
                    var decodeTime = samplesProcessed * trackInfo.timescale / trackInfo.framerate; // ? not really needed in unfragmented mode
                    var lastDecodeTime = Math.round(decodeTime);
                    for (var j = 0; j < trackPackets.length; j++) {
                        var videoPacket = trackPackets[j].packet;
                        var nextDecodeTime = Math.round(samplesProcessed * trackInfo.timescale / trackInfo.framerate);
                        var videoFrameDuration = nextDecodeTime - lastDecodeTime;
                        lastDecodeTime = nextDecodeTime;
                        var compositionTime = (trackInfo.timescale / trackInfo.framerate) + videoPacket.compositionTime;
                        var s = {
                            size: videoPacket.data.length,
                            dts: dts,
                            cts: compositionTime,
                            isRap: videoPacket.frameType === VideoFrameType.KEY
                        };
                        samples.push(s);
                        chunks[i_1].push(videoPacket.data);
                        samplesProcessed++;
                        dts += videoFrameDuration;
                    }
                    trackState.cachedDuration = lastDecodeTime;
                    trackState.samplesProcessed = samplesProcessed;
                    break;
                }
                default:
                    throw new Error('Unknown codec');
            }
            if (!samples) {
                throw new Error('No sample list created when iterating on track-state');
            }
            sampleTablesData.push(samples);
        };
        var this_1 = this;
        for (var i_1 = 0; i_1 < this.trackStates.length; i_1++) {
            _loop_1(i_1);
        }
        var chunkData = common_utils_1.flattenOneDeepNestedArray(chunks);
        return [new mp4iso_boxes_1.MediaDataBox(chunkData), sampleTablesData];
    };
    MP4Mux.prototype._makeMovHeader = function (fragmentedMode, samples, mdat) {
        var _this = this;
        if (fragmentedMode === void 0) { fragmentedMode = true; }
        if (samples === void 0) { samples = null; }
        if (fragmentedMode && mdat) {
            throw new Error('Should not get mdat box in fragmented mode');
        }
        var allInitializationDataExists = this.trackStates.every(function (ts) {
            switch (ts.trackInfo.codecId) {
                case exports.AAC_SOUND_CODEC_ID:
                case exports.AVC_VIDEO_CODEC_ID:
                    return ts.initializationData.length > 0;
                default:
                    return true;
            }
        });
        if (!allInitializationDataExists) {
            // warn('missing some initialization data to create moov atom');
            return; // not enough data, waiting more
        }
        var brands = ['isom'];
        var audioDataReferenceIndex = 1;
        var videoDataReferenceIndex = 1;
        var traks = [];
        var trexs = [];
        var traksData = [];
        for (var i_2 = 0; i_2 < this.trackStates.length; i_2++) {
            var trackState = this.trackStates[i_2];
            var trackInfo = trackState.trackInfo;
            var sampleDescEntry = void 0;
            switch (trackInfo.codecId) {
                case exports.AAC_SOUND_CODEC_ID:
                    var audioSpecificConfig = trackState.initializationData[0];
                    sampleDescEntry = new mp4iso_boxes_1.AudioSampleEntry('mp4a', audioDataReferenceIndex, trackInfo.channels, trackInfo.samplesize, trackInfo.samplerate);
                    var esdsData = audioSpecificConfig;
                    // FIXME: instead of taking the data inside the ES_Descriptor we are using the data contained in esds atom directly
                    // i.e the "framed" ES_Descriptor data
                    /*
                    var esdsData = new Uint8Array(41 + audioSpecificConfig.length);
                    esdsData.set(hexToBytes('0000000003808080'), 0);
                    esdsData[8] = 32 + audioSpecificConfig.length;
                    esdsData.set(hexToBytes('00020004808080'), 9);
                    esdsData[16] = 18 + audioSpecificConfig.length;
                    esdsData.set(hexToBytes('40150000000000FA000000000005808080'), 17);
                    esdsData[34] = audioSpecificConfig.length;
                    esdsData.set(audioSpecificConfig, 35);
                    esdsData.set(hexToBytes('068080800102'), 35 + audioSpecificConfig.length);
                    */
                    sampleDescEntry.otherBoxes = [
                        new mp4iso_boxes_1.RawTag('esds', esdsData)
                    ];
                    var objectType = (audioSpecificConfig[0] >> 3); // TODO 31
                    // mp4a.40.objectType
                    trackState.mimeTypeCodec = 'mp4a.40.' + objectType; // 'mp4a.40.2'
                    break;
                case exports.MP3_SOUND_CODEC_ID:
                    sampleDescEntry = new mp4iso_boxes_1.AudioSampleEntry('.mp3', audioDataReferenceIndex, trackInfo.channels, trackInfo.samplesize, trackInfo.samplerate);
                    trackState.mimeTypeCodec = 'mp3';
                    break;
                case exports.AVC_VIDEO_CODEC_ID:
                    var avcC = trackState.initializationData[0];
                    sampleDescEntry = new mp4iso_boxes_1.VideoSampleEntry('avc1', videoDataReferenceIndex, trackInfo.width, trackInfo.height);
                    sampleDescEntry.otherBoxes = [
                        new mp4iso_boxes_1.RawTag('avcC', avcC)
                    ];
                    var codecProfile = (avcC[1] << 16) | (avcC[2] << 8) | avcC[3];
                    // avc1.XXYYZZ -- XX - profile + YY - constraints + ZZ - level
                    trackState.mimeTypeCodec = 'avc1.' + (0x1000000 | codecProfile).toString(16).substr(1);
                    brands.push('iso2', 'avc1', 'mp41');
                    break;
                case exports.VP6_VIDEO_CODEC_ID:
                    sampleDescEntry = new mp4iso_boxes_1.VideoSampleEntry('VP6F', videoDataReferenceIndex, trackInfo.width, trackInfo.height);
                    sampleDescEntry.otherBoxes = [
                        new mp4iso_boxes_1.RawTag('glbl', common_utils_1.hexToBytes('00'))
                    ];
                    // TODO to lie about codec to get it playing in MSE?
                    trackState.mimeTypeCodec = 'avc1.42001E';
                    break;
                default:
                    throw new Error('not supported track type');
            }
            var trakFlags = mp4iso_boxes_1.TrackHeaderFlags.TRACK_ENABLED | mp4iso_boxes_1.TrackHeaderFlags.TRACK_IN_MOVIE;
            if (!samples && !fragmentedMode) {
                throw new Error('Need sample-table content in unfragmented mode');
            }
            traksData.push({
                trakFlags: trakFlags, trackState: trackState, trackInfo: trackInfo, sampleDescEntry: sampleDescEntry
            });
            var trex = new mp4iso_boxes_1.TrackExtendsBox(trackState.trackId, 0, 0, 0, mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
            trexs.push(trex);
        }
        var mvex = fragmentedMode ? new mp4iso_boxes_1.MovieExtendsBox(null, trexs, null) : null;
        var udat = null;
        if (fragmentedMode) {
            udat = new mp4iso_base_1.BoxContainerBox('udat', [
                new mp4iso_boxes_1.MetaBox(new mp4iso_boxes_1.RawTag('hdlr', common_utils_1.hexToBytes('00000000000000006D6469726170706C000000000000000000')), // notice weird stuff in reserved field
                [new mp4iso_boxes_1.RawTag('ilst', common_utils_1.hexToBytes('00000025A9746F6F0000001D6461746100000001000000004C61766635342E36332E313034'))])
            ]);
        }
        /**
         * We are using the smallest of all track durations to set the movie header duration field and timescale
         */
        var minDurationTrackInfo = this.trackStates
            .sort(function (a, b) { return (a.trackInfo.duration / a.trackInfo.timescale) -
            (b.trackInfo.duration / b.trackInfo.timescale); })[0].trackInfo;
        var mvhd = new mp4iso_boxes_1.MovieHeaderBox(1, // HACK
        minDurationTrackInfo.duration / minDurationTrackInfo.timescale, this.trackStates.length + 1);
        // first we write the ftyp and eventually the wide & mdat boxes
        var fileSizeBytes = 0;
        var ftype = new mp4iso_boxes_1.FileTypeBox('isom', 0x00000200, brands);
        fileSizeBytes += ftype.layout(0);
        var wide = fragmentedMode ? null : new mp4iso_boxes_1.RawTag('wide', common_utils_1.hexToBytes(''));
        if (wide) {
            fileSizeBytes += wide.layout(fileSizeBytes);
        }
        // we store the offset after this, in case we are unfragmented and need to insert mdat now
        // -> we need this offset to write the sample table chunk offsets
        var mdatOffset = fileSizeBytes + 8;
        if (mdat) {
            fileSizeBytes += mdat.layout(fileSizeBytes);
        }
        // -> we can only package the sample-table once we know where the mdat will be
        traksData.forEach(function (_a, i) {
            var trakFlags = _a.trakFlags, trackInfo = _a.trackInfo, trackState = _a.trackState, sampleDescEntry = _a.sampleDescEntry;
            debug('creating sample table with mdat offset:', mdatOffset);
            var sampleTable = fragmentedMode
                ? mp4iso_sample_table_1.SampleTablePackager.createEmptyForFragmentedMode([sampleDescEntry])
                : mp4iso_sample_table_1.SampleTablePackager.createFromSamplesInSingleChunk(sampleDescEntry, samples[i], mdatOffset);
            // sum up all sample-sizes and add them up mdat offset now to shift the offset for the next track
            mdatOffset += samples[i].reduce(function (totalSize, sample) {
                return totalSize + sample.size;
            }, 0);
            var trak = null;
            if (trackState === _this.audioTrackState) {
                trak = _this._createTrackBox(trakFlags, trackState, trackInfo, 'soun', 'SoundHandler', sampleTable, i);
            }
            else if (trackState === _this.videoTrackState) {
                trak = _this._createTrackBox(trakFlags, trackState, trackInfo, 'vide', 'VideoHandler', sampleTable, i);
            }
            if (!trak) {
                throw new Error('There should be a new trak box created, but got null');
            }
            traks.push(trak);
        });
        // and now we can create the moov box
        var moov = new mp4iso_boxes_1.MovieBox(mvhd, traks, mvex, udat);
        fileSizeBytes += moov.layout(fileSizeBytes);
        // finally we can write the file data with the whole structure
        var fileData = new Uint8Array(fileSizeBytes);
        ftype.write(fileData);
        if (wide) {
            wide.write(fileData);
        }
        if (mdat) {
            mdat.write(fileData);
        }
        moov.write(fileData);
        return fileData;
    };
    MP4Mux.prototype._attemptToGenerateMovieHeader = function () {
        if (!this.fragmentedMode) {
            return;
        }
        var header = this._makeMovHeader(true);
        this.oncodecinfo(this.trackStates.map(function (ts) { return ts.mimeTypeCodec; }));
        this.ondata(header);
        this.filePos += header.length;
        this.state = MP4MuxState.MAIN_PACKETS;
    };
    MP4Mux.prototype._generateMovieFragment = function () {
        if (!this.fragmentedMode) {
            return;
        }
        var cachedPackets = this.cachedPackets;
        if (SPLIT_AT_KEYFRAMES && this.videoTrackState) {
            var j = cachedPackets.length - 1;
            var videoTrackId = this.videoTrackState.trackId;
            // Finding last video keyframe.
            while (j > 0 &&
                (cachedPackets[j].trackId !== videoTrackId || cachedPackets[j].packet.frameType !== VideoFrameType.KEY)) {
                j--;
            }
            if (j > 0) {
                // We have keyframes and not only the first frame is a keyframe...
                cachedPackets = cachedPackets.slice(0, j);
            }
        }
        if (cachedPackets.length === 0) {
            return; // No data to produce.
        }
        var tdatParts = [];
        var tdatPosition = 0;
        var trafs = [];
        var trafDataStarts = [];
        var _loop_2 = function (i_3) {
            var trackState = this_2.trackStates[i_3];
            var trackInfo = trackState.trackInfo;
            var trackId = trackState.trackId;
            // Finding all packets for this track.
            var trackPackets = cachedPackets.filter(function (cp) { return cp.trackId === trackId; });
            if (trackPackets.length === 0) {
                return "continue";
            }
            // ??? not sure what this was doing but lets keep it around -> var currentTimestamp = (trackPackets[0].timestamp * trackInfo.timescale / 1000) | 0; ???
            var tfdt = new mp4iso_boxes_1.TrackFragmentBaseMediaDecodeTimeBox(trackState.cachedDuration);
            var trun = void 0;
            var tfhd = void 0;
            var trunSamples = void 0;
            trafDataStarts.push(tdatPosition);
            switch (trackInfo.codecId) {
                case exports.AAC_SOUND_CODEC_ID:
                case exports.MP3_SOUND_CODEC_ID:
                    trunSamples = [];
                    for (var j = 0; j < trackPackets.length; j++) {
                        var audioPacket = trackPackets[j].packet;
                        var audioFrameDuration = Math.round(audioPacket.samples * trackInfo.timescale / trackInfo.samplerate);
                        tdatParts.push(audioPacket.data);
                        tdatPosition += audioPacket.data.length;
                        trunSamples.push({ duration: audioFrameDuration, size: audioPacket.data.length });
                        trackState.samplesProcessed += audioPacket.samples;
                    }
                    tfhdFlags = mp4iso_boxes_1.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                    tfhd = new mp4iso_boxes_1.TrackFragmentHeaderBox(tfhdFlags, trackId, 0 /* offset */, 0 /* index */, 0 /* duration */, 0 /* size */, mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                    trunFlags = mp4iso_boxes_1.TrackRunFlags.DATA_OFFSET_PRESENT |
                        mp4iso_boxes_1.TrackRunFlags.SAMPLE_DURATION_PRESENT | mp4iso_boxes_1.TrackRunFlags.SAMPLE_SIZE_PRESENT;
                    trun = new mp4iso_boxes_1.TrackRunBox(trunFlags, trunSamples, 0 /* data offset */, 0 /* first flags */);
                    trackState.cachedDuration
                        = Math.round(trackState.samplesProcessed * trackInfo.timescale / trackInfo.samplerate);
                    break;
                case exports.AVC_VIDEO_CODEC_ID:
                case exports.VP6_VIDEO_CODEC_ID:
                    trunSamples = [];
                    var samplesProcessed = trackState.samplesProcessed;
                    var decodeTime = samplesProcessed * trackInfo.timescale / trackInfo.framerate;
                    var lastTime = Math.round(decodeTime);
                    for (var j = 0; j < trackPackets.length; j++) {
                        var videoPacket = trackPackets[j].packet;
                        samplesProcessed++;
                        var nextTime = Math.round(samplesProcessed * trackInfo.timescale / trackInfo.framerate);
                        var videoFrameDuration = nextTime - lastTime;
                        lastTime = nextTime;
                        var compositionTime = (trackInfo.timescale / trackInfo.framerate) + videoPacket.compositionTime;
                        // ??? not sure what this was doing but lets keep it around ... Math.round(samplesProcessed * trackInfo.timescale / trackInfo.framerate + videoPacket.compositionTime * trackInfo.timescale / 1000);
                        // -> this seems more senseful given that CT is defined as CT(n)  =  DT(n)  +  CTO(n)
                        var compositionTimeOffset = compositionTime - nextTime;
                        tdatParts.push(videoPacket.data);
                        tdatPosition += videoPacket.data.length;
                        var frameFlags = videoPacket.frameType === VideoFrameType.KEY
                            ? mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS
                            : (mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_OTHER | mp4iso_boxes_1.SampleFlags.SAMPLE_IS_NOT_SYNC);
                        trunSamples.push({ duration: videoFrameDuration,
                            size: videoPacket.data.length,
                            flags: frameFlags,
                            compositionTimeOffset: compositionTimeOffset });
                    }
                    tfhdFlags = mp4iso_boxes_1.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                    tfhd = new mp4iso_boxes_1.TrackFragmentHeaderBox(tfhdFlags, trackId, 0 /* offset */, 0 /* index */, 0 /* duration */, 0 /* size */, mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                    trunFlags = mp4iso_boxes_1.TrackRunFlags.DATA_OFFSET_PRESENT | mp4iso_boxes_1.TrackRunFlags.FIRST_SAMPLE_FLAGS_PRESENT |
                        mp4iso_boxes_1.TrackRunFlags.SAMPLE_DURATION_PRESENT | mp4iso_boxes_1.TrackRunFlags.SAMPLE_SIZE_PRESENT |
                        mp4iso_boxes_1.TrackRunFlags.SAMPLE_FLAGS_PRESENT | mp4iso_boxes_1.TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET;
                    trun = new mp4iso_boxes_1.TrackRunBox(trunFlags, trunSamples, 0 /* data offset */, mp4iso_boxes_1.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                    trackState.cachedDuration = lastTime;
                    trackState.samplesProcessed = samplesProcessed;
                    break;
                default:
                    throw new Error('Unknown codec');
            }
            var traf = new mp4iso_boxes_1.TrackFragmentBox(tfhd, tfdt, trun);
            trafs.push(traf);
        };
        var this_2 = this, tfhdFlags, trunFlags, tfhdFlags, trunFlags;
        for (var i_3 = 0; i_3 < this.trackStates.length; i_3++) {
            _loop_2(i_3);
        }
        this.cachedPackets.splice(0, cachedPackets.length);
        var moofHeader = new mp4iso_boxes_1.MovieFragmentHeaderBox(++this.chunkIndex);
        var moof = new mp4iso_boxes_1.MovieFragmentBox(moofHeader, trafs);
        var moofSize = moof.layout(0);
        var mdat = new mp4iso_boxes_1.MediaDataBox(tdatParts);
        var mdatSize = mdat.layout(moofSize);
        var tdatOffset = moofSize + 8;
        for (var i_4 = 0; i_4 < trafs.length; i_4++) {
            trafs[i_4].run.dataOffset = tdatOffset + trafDataStarts[i_4];
        }
        var chunk = new Uint8Array(moofSize + mdatSize);
        moof.write(chunk);
        mdat.write(chunk);
        this.ondata(chunk);
        this.filePos += chunk.length;
    };
    return MP4Mux;
}());
exports.MP4Mux = MP4Mux;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mp4iso_boxes_1 = __webpack_require__(30);
var logger_1 = __webpack_require__(2);
var log = logger_1.getLogger('MP4SampleTablePackager(moz)').log;
var SampleTablePackager = /** @class */ (function () {
    function SampleTablePackager() {
    }
    SampleTablePackager.createEmptyForFragmentedMode = function (sampleDescriptionEntries) {
        return new mp4iso_boxes_1.SampleTableBox(new mp4iso_boxes_1.SampleDescriptionBox(sampleDescriptionEntries), new mp4iso_boxes_1.DecodingTimeToSampleBox(0, []), new mp4iso_boxes_1.CompositionTimeToSampleBox(0, []), new mp4iso_boxes_1.SampleToChunkBox([]), new mp4iso_boxes_1.SampleSizeBox([]), new mp4iso_boxes_1.ChunkOffsetBox([]));
    };
    /**
     * Assumes all samples be located in a contiguous chunk
     * where every sample is followed by the next one. This means
     * only the original offset needs to be input, and all sample offsets
     * can get derived from the aforementioned sample sizes.
     *
     * @param sampleDescriptionEntry
     * @param samples
     * @param chunkOffset
     */
    SampleTablePackager.createFromSamplesInSingleChunk = function (sampleDescriptionEntry, samples, chunkOffset) {
        log('creating sample table from samples:', samples, 'at offset:', chunkOffset, 'sample description entry:', sampleDescriptionEntry);
        var stts = [];
        var ctts = [];
        // reduce all the indices where a random-access-point is found into a covenient list...
        var stss = samples.reduce(function (array, sample, index) {
            if (sample.isRap) {
                array.push(index + 1);
            }
            return array;
        }, []);
        var stsz = samples.map(function (sample) { return sample.size; });
        // "now must we compress thy deltas & offsets ..."
        {
            // we want to compact the timing information using the following iteration
            // => delta(i+1) = DTS(i+1) - DTS(i)
            var previousSampleDts = null;
            var sampleCount = 0;
            var sampleDelta = null;
            for (var i_1 = 0; i_1 < samples.length; i_1++) {
                var sample = samples[i_1];
                // here we need to a previous sample dts to compute any delta at all
                if (previousSampleDts !== null) {
                    // if we have a new delta coming up push new entry and reset
                    // (only we have had sampleDelta set at all before - init case!)
                    var latestDelta = sample.dts - previousSampleDts;
                    if (latestDelta != sampleDelta && sampleDelta !== null
                        || (i_1 === samples.length - 1)) {
                        if (sampleDelta === null) {
                            sampleDelta = latestDelta;
                        }
                        stts.push({
                            sampleCount: sampleCount,
                            sampleDelta: sampleDelta
                        });
                        // reset sample count after writing an entry
                        sampleCount = 0;
                        // reset / store latest delta
                        sampleDelta = latestDelta;
                    }
                }
                // as long as we are on the same delta, increment sample count
                sampleCount++;
                // store previous dts (even very first)
                previousSampleDts = sample.dts;
            }
        }
        // similar to above ^ but not same. now we are looking at CTO(n) = CTS(n) - DTS(n)
        // so this is coding the difference between the two time-series for (n) as opposed to
        // the difference between n and n+1 in the same series
        {
            var sampleCount = 0;
            var sampleOffset = null;
            for (var i_2 = 0; i_2 < samples.length; i_2++) {
                var sample = samples[i_2];
                // compute cto of this sample position
                var latestPtOffset = sample.cts - sample.dts;
                // check for init case
                if (sampleOffset !== null) { // only go here when previous offset set
                    // if we have a new cto value push an entry and reset counter
                    if (latestPtOffset !== sampleOffset
                        || (i_2 === samples.length - 1)) {
                        // write entry
                        ctts.push({
                            sampleCount: sampleCount,
                            sampleOffset: sampleOffset
                        });
                        // reset counters
                        sampleCount = 0;
                        sampleOffset = latestPtOffset;
                    }
                }
                else {
                    // only for init case
                    sampleOffset = latestPtOffset;
                }
                // increment sample count every time
                sampleCount++;
            }
        }
        var stsc = [{
                firstChunk: 1,
                samplesPerChunk: samples.length,
                sampleDescriptionIndex: 1
            }];
        return new mp4iso_boxes_1.SampleTableBox(new mp4iso_boxes_1.SampleDescriptionBox([sampleDescriptionEntry]), new mp4iso_boxes_1.DecodingTimeToSampleBox(0, stts), new mp4iso_boxes_1.CompositionTimeToSampleBox(0, ctts), new mp4iso_boxes_1.SampleToChunkBox(stsc), new mp4iso_boxes_1.SampleSizeBox(stsz), new mp4iso_boxes_1.ChunkOffsetBox([chunkOffset]), new mp4iso_boxes_1.SyncSampleBox(stss));
    };
    return SampleTablePackager;
}());
exports.SampleTablePackager = SampleTablePackager;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aac_utils_1 = __webpack_require__(63);
var mp4_generator_1 = __webpack_require__(64);
var logger_1 = __webpack_require__(2);
var browser_utils_1 = __webpack_require__(65);
var _a = logger_1.getLogger('Fmp4Remuxer'), log = _a.log, warn = _a.warn, debug = _a.debug;
var logger = {
    warn: warn,
    log: log,
    trace: debug
};
// FIXME: make this config
var MAX_SILENT_FRAME_DURATION = 10 * 1000; // millis
var Fmp4RemuxerEvent;
(function (Fmp4RemuxerEvent) {
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["PARSING_DONE"] = 0] = "PARSING_DONE";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["WROTE_INIT_SEGMENT"] = 1] = "WROTE_INIT_SEGMENT";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["WROTE_PAYLOAD_SEGMENT"] = 2] = "WROTE_PAYLOAD_SEGMENT";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["GOT_METADATA"] = 3] = "GOT_METADATA";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["GOT_USER_DATA"] = 4] = "GOT_USER_DATA";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["GOT_INIT_PTS_VALUE"] = 5] = "GOT_INIT_PTS_VALUE";
    Fmp4RemuxerEvent[Fmp4RemuxerEvent["FAILURE"] = 6] = "FAILURE";
})(Fmp4RemuxerEvent = exports.Fmp4RemuxerEvent || (exports.Fmp4RemuxerEvent = {}));
// local short-hand
var Event = Fmp4RemuxerEvent;
var Fmp4Remuxer = /** @class */ (function () {
    function Fmp4Remuxer(onEvent, config, typeSupported) {
        if (typeSupported === void 0) { typeSupported = {}; }
        this._isSafari = browser_utils_1.isBrowserBrand(browser_utils_1.BrowserBrandname.SAFARI);
        this._initSegmentGenerated = false;
        this._nextAudioPts = 0;
        this._nextAvcDts = 0;
        this._initPts = null;
        this._initDts = null;
        this._observer = {
            trigger: function (event, data) {
                // logger.log('event:', event, data);
                onEvent(event, data);
            }
        };
        this._config = config;
        this._typeSupported = typeSupported;
    }
    Fmp4Remuxer.prototype.destroy = function () { };
    Fmp4Remuxer.prototype.process = function (audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
        // generate Init Segment if needed
        if (!this._initSegmentGenerated) {
            this._generateInitSegment(audioTrack, videoTrack, timeOffset);
        }
        if (this._initSegmentGenerated) {
            var nbAudioSamples = audioTrack.samples.length;
            var nbVideoSamples = videoTrack.samples.length;
            var audioTimeOffset = timeOffset;
            var videoTimeOffset = timeOffset;
            if (nbAudioSamples && nbVideoSamples) {
                // timeOffset is expected to be the offset of the first timestamp of this fragment (first DTS)
                // if first audio DTS is not aligned with first video DTS then we need to take that into account
                // when providing timeOffset to remuxAudio / remuxVideo. if we don't do that, there might be a permanent / small
                // drift between audio and video streams
                var audiovideoDeltaDts = (audioTrack.samples[0].dts - videoTrack.samples[0].dts) / videoTrack.inputTimeScale;
                audioTimeOffset += Math.max(0, audiovideoDeltaDts);
                videoTimeOffset += Math.max(0, -audiovideoDeltaDts);
            }
            // Purposefully remuxing audio before video, so that remuxVideo can use nextAudioPts, which is
            // calculated in remuxAudio.
            logger.log('nb AAC samples:' + audioTrack.samples.length);
            if (nbAudioSamples) {
                // if initSegment was generated without video samples, regenerate it again
                if (!audioTrack.timescale) {
                    logger.warn('regenerate InitSegment as audio detected');
                    this._generateInitSegment(audioTrack, videoTrack, timeOffset);
                }
                var audioData = this._remuxAudio(audioTrack, audioTimeOffset, contiguous, accurateTimeOffset);
                if (nbVideoSamples) {
                    var audioTrackLength = void 0;
                    if (audioData) {
                        audioTrackLength = audioData.endPTS - audioData.startPTS;
                    }
                    // if initSegment was generated without video samples, regenerate it again
                    if (!videoTrack.timescale) {
                        logger.warn('regenerate InitSegment as video detected');
                        this._generateInitSegment(audioTrack, videoTrack, timeOffset);
                    }
                    this._remuxVideo(videoTrack, videoTimeOffset, contiguous, audioTrackLength, accurateTimeOffset);
                }
            }
            else {
                logger.log('nb AVC samples:' + videoTrack.samples.length);
                if (nbVideoSamples) {
                    var videoData = this._remuxVideo(videoTrack, videoTimeOffset, contiguous, 0, accurateTimeOffset);
                    if (videoData && audioTrack.codec) {
                        this._remuxEmptyAudio(audioTrack, audioTimeOffset, contiguous, videoData);
                    }
                }
            }
        }
        logger.log('nb ID3 samples:' + audioTrack.samples.length);
        if (id3Track && id3Track.samples.length) {
            this._remuxID3(id3Track, timeOffset);
        }
        logger.log('nb ID3 samples:' + audioTrack.samples.length);
        if (textTrack && textTrack.samples.length) {
            this._remuxText(textTrack, timeOffset);
        }
        // notify end of parsing
        this._observer.trigger(Event.PARSING_DONE);
    };
    Fmp4Remuxer.prototype._generateInitSegment = function (audioTrack, videoTrack, timeOffset) {
        var observer = this._observer;
        var audioSamples = audioTrack.samples;
        var videoSamples = videoTrack.samples;
        var typeSupported = this._typeSupported;
        var containerMimetype = 'audio/mp4';
        var tracks = {};
        var data = { tracks: tracks };
        var computeInitialSyncTime = (this._initPts === null);
        var initPTS;
        var initDTS;
        if (computeInitialSyncTime) {
            initPTS = initDTS = Infinity;
        }
        if (audioTrack.config && audioSamples.length) {
            // let's use audio sampling rate as MP4 time scale.
            // rationale is that there is a integer nb of audio frames per audio sample (1024 for AAC)
            // using audio sampling rate here helps having an integer MP4 frame duration
            // this avoids potential rounding issue and AV sync issue
            audioTrack.timescale = audioTrack.samplerate;
            logger.log("audio sampling rate : " + audioTrack.samplerate);
            if (!audioTrack.isAAC) {
                if (typeSupported.mpeg) { // Chrome and Safari
                    containerMimetype = 'audio/mpeg';
                    audioTrack.codec = '';
                }
                else if (typeSupported.mp3) { // Firefox
                    audioTrack.codec = 'mp3';
                }
            }
            tracks.audio = {
                container: containerMimetype,
                codec: audioTrack.codec,
                initSegment: !audioTrack.isAAC && typeSupported.mpeg ? new Uint8Array(0) : mp4_generator_1.MP4Generator.initSegment([audioTrack]),
                metadata: {
                    channelCount: audioTrack.channelCount
                }
            };
            if (computeInitialSyncTime) {
                // remember first PTS of this demuxing context. for audio, PTS = DTS
                initPTS = initDTS = audioSamples[0].pts - audioTrack.inputTimeScale * timeOffset;
            }
        }
        if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
            // let's use input time scale as MP4 video timescale
            // we use input time scale straight away to avoid rounding issues on frame duration / cts computation
            var inputTimeScale = videoTrack.inputTimeScale;
            videoTrack.timescale = inputTimeScale;
            tracks.video = {
                container: 'video/mp4',
                codec: videoTrack.codec,
                initSegment: mp4_generator_1.MP4Generator.initSegment([videoTrack]),
                metadata: {
                    width: videoTrack.width,
                    height: videoTrack.height
                }
            };
            if (computeInitialSyncTime) {
                initPTS = Math.min(initPTS, videoSamples[0].pts - inputTimeScale * timeOffset);
                initDTS = Math.min(initDTS, videoSamples[0].dts - inputTimeScale * timeOffset);
                this._observer.trigger(Event.GOT_INIT_PTS_VALUE, initPTS);
            }
        }
        if (Object.keys(tracks).length) {
            observer.trigger(Event.WROTE_INIT_SEGMENT, data);
            this._initSegmentGenerated = true;
            if (computeInitialSyncTime) {
                this._initPts = initPTS;
                this._initDts = initDTS;
            }
        }
        else {
            observer.trigger(Event.FAILURE, 'no audio/video samples found');
        }
    };
    Fmp4Remuxer.prototype._remuxVideo = function (track, timeOffset, contiguous, audioTrackLength, accurateTimeOffset) {
        var offset = 8;
        var timeScale = track.timescale;
        var mp4SampleDuration;
        var mdat;
        var moof;
        var firstPTS;
        var firstDTS;
        var nextDTS;
        var lastPTS;
        var lastDTS;
        var inputSamples = track.samples;
        var outputSamples = [];
        var nbSamples = inputSamples.length;
        var initDTS = this._initDts;
        // for (let i = 0; i < track.samples.length; i++) {
        //   let avcSample = track.samples[i];
        //   let units = avcSample.units;
        //   let unitsString = '';
        //   for (let j = 0; j < units.length ; j++) {
        //     unitsString += units[j].type + ',';
        //     if (units[j].data.length < 500) {
        //       unitsString += Hex.hexDump(units[j].data);
        //     }
        //   }
        //   logger.log(avcSample.pts + '/' + avcSample.dts + ',' + unitsString + avcSample.units.length);
        // }
        // if parsed fragment is contiguous with last one, let's use last DTS value as reference
        var nextAvcDts = this._nextAvcDts;
        var isSafari = this._isSafari;
        if (nbSamples === 0) {
            return;
        }
        // Safari does not like overlapping DTS on consecutive fragments. let's use nextAvcDts to overcome this if fragments are consecutive
        if (isSafari) {
            // also consider consecutive fragments as being contiguous (even if a level switch occurs),
            // for sake of clarity:
            // consecutive fragments are frags with
            //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
            //  - less than 200 ms PTS gaps (timeScale/5)
            contiguous |= (inputSamples.length && nextAvcDts &&
                ((accurateTimeOffset && Math.abs(timeOffset - nextAvcDts / timeScale) < 0.1) ||
                    Math.abs((inputSamples[0].pts - nextAvcDts - initDTS)) < timeScale / 5));
        }
        if (!contiguous) {
            // if not contiguous, let's use target timeOffset
            nextAvcDts = timeOffset * timeScale;
        }
        // PTS is coded on 33bits, and can loop from -2^32 to 2^32
        // ptsNormalize will make PTS/DTS value monotonic, we use last known DTS value as reference value
        inputSamples.forEach(function (sample) {
            sample.pts = _wrapAroundPts(sample.pts - initDTS, nextAvcDts);
            sample.dts = _wrapAroundPts(sample.dts - initDTS, nextAvcDts);
        });
        // sort video samples by DTS then PTS then demux id order
        inputSamples.sort(function (a, b) {
            var deltadts = a.dts - b.dts;
            var deltapts = a.pts - b.pts;
            return deltadts || (deltapts || (a.id - b.id));
        });
        /*
        // handle broken streams with PTS < DTS, tolerance up 200ms (18000 in 90kHz timescale)
        let PTSDTSshift = inputSamples.reduce((prev, curr) => Math.max(Math.min(prev, curr.pts - curr.dts), -18000), 0);
        if (PTSDTSshift < 0) {
          logger.warn(`PTS < DTS detected in video samples, shifting DTS by ${Math.round(PTSDTSshift / 90)} ms to overcome this issue`);
          for (let i = 0; i < inputSamples.length; i++) {
            inputSamples[i].dts += PTSDTSshift;
          }
        }
        */
        // compute first DTS and last DTS, normalize them against reference value
        var sample = inputSamples[0];
        firstDTS = Math.max(sample.dts, 0);
        firstPTS = Math.max(sample.pts, 0);
        // check timestamp continuity accross consecutive fragments (this is to remove inter-fragment gap/hole)
        var delta = Math.round((firstDTS - nextAvcDts) / 90);
        // if fragment are contiguous, detect hole/overlapping between fragments
        if (contiguous) {
            if (delta) {
                if (delta > 1) {
                    logger.log("AVC: " + delta + " ms hole between fragments detected, filling it");
                }
                else if (delta < -1) {
                    logger.log("AVC: " + (-delta) + " ms overlapping between fragments detected");
                }
                // remove hole/gap : set DTS to next expected DTS
                firstDTS = nextAvcDts;
                inputSamples[0].dts = firstDTS;
                // offset PTS as well, ensure that PTS is smaller or equal than new DTS
                firstPTS = Math.max(firstPTS - delta, nextAvcDts);
                inputSamples[0].pts = firstPTS;
                logger.log("Video PTS/DTS adjusted: " + Math.round(firstPTS / 90) + "/" + Math.round(firstDTS / 90) + ",delta:" + delta + " ms");
            }
        }
        nextDTS = firstDTS;
        // compute lastPTS/lastDTS
        sample = inputSamples[inputSamples.length - 1];
        lastDTS = Math.max(sample.dts, 0);
        lastPTS = Math.max(sample.pts, 0, lastDTS);
        // on Safari let's signal the same sample duration for all samples
        // sample duration (as expected by trun MP4 boxes), should be the delta between sample DTS
        // set this constant duration as being the avg delta between consecutive DTS.
        if (isSafari) {
            mp4SampleDuration = Math.round((lastDTS - firstDTS) / (inputSamples.length - 1));
        }
        var nbNalu = 0;
        var naluLen = 0;
        for (var i_1 = 0; i_1 < nbSamples; i_1++) {
            // compute total/avc sample length and nb of NAL units
            var sample_1 = inputSamples[i_1];
            var units = sample_1.units;
            var nbUnits = units.length;
            var sampleLen = 0;
            for (var j = 0; j < nbUnits; j++) {
                sampleLen += units[j].data.length;
            }
            naluLen += sampleLen;
            nbNalu += nbUnits;
            sample_1.length = sampleLen;
            // normalize PTS/DTS
            if (isSafari) {
                // sample DTS is computed using a constant decoding offset (mp4SampleDuration) between samples
                sample_1.dts = firstDTS + i_1 * mp4SampleDuration;
            }
            else {
                // ensure sample monotonic DTS
                sample_1.dts = Math.max(sample_1.dts, firstDTS);
            }
            // ensure that computed value is greater or equal than sample DTS
            sample_1.pts = Math.max(sample_1.pts, sample_1.dts);
        }
        /* concatenate the video data and construct the mdat in place
          (need 8 more bytes to fill length and mpdat type) */
        var mdatSize = naluLen + (4 * nbNalu) + 8;
        try {
            mdat = new Uint8Array(mdatSize);
        }
        catch (err) {
            this._observer.trigger(Event.FAILURE, "failed to allocate video mdat of " + mdatSize + " bytes");
            return;
        }
        var view = new DataView(mdat.buffer);
        view.setUint32(0, mdatSize);
        mdat.set(mp4_generator_1.MP4Generator.types.mdat, 4);
        for (var i_2 = 0; i_2 < nbSamples; i_2++) {
            var avcSample = inputSamples[i_2];
            var avcSampleUnits = avcSample.units;
            var mp4SampleLength = 0;
            var compositionTimeOffset = void 0;
            // convert NALU bitstream to MP4 format (prepend NALU with size field)
            for (var j = 0, nbUnits = avcSampleUnits.length; j < nbUnits; j++) {
                var unit = avcSampleUnits[j];
                var unitData = unit.data;
                var unitDataLen = unit.data.byteLength;
                view.setUint32(offset, unitDataLen);
                offset += 4;
                mdat.set(unitData, offset);
                offset += unitDataLen;
                mp4SampleLength += 4 + unitDataLen;
            }
            if (!isSafari) {
                // expected sample duration is the Decoding Timestamp diff of consecutive samples
                if (i_2 < nbSamples - 1) {
                    mp4SampleDuration = inputSamples[i_2 + 1].dts - avcSample.dts;
                }
                else {
                    var config = this._config;
                    var lastFrameDuration = avcSample.dts - inputSamples[i_2 > 0 ? i_2 - 1 : i_2].dts;
                    if (config.stretchShortVideoTrack) {
                        // In some cases, a segment's audio track duration may exceed the video track duration.
                        // Since we've already remuxed audio, and we know how long the audio track is, we look to
                        // see if the delta to the next segment is longer than maxBufferHole.
                        // If so, playback would potentially get stuck, so we artificially inflate
                        // the duration of the last frame to minimize any potential gap between segments.
                        var maxBufferHole = config.maxBufferHole;
                        var gapTolerance = Math.floor(maxBufferHole * timeScale);
                        var deltaToFrameEnd = (audioTrackLength ? firstPTS + audioTrackLength * timeScale : this._nextAudioPts) - avcSample.pts;
                        if (deltaToFrameEnd > gapTolerance) {
                            // We subtract lastFrameDuration from deltaToFrameEnd to try to prevent any video
                            // frame overlap. maxBufferHole should be >> lastFrameDuration anyway.
                            mp4SampleDuration = deltaToFrameEnd - lastFrameDuration;
                            if (mp4SampleDuration < 0) {
                                mp4SampleDuration = lastFrameDuration;
                            }
                            logger.log("It is approximately " + deltaToFrameEnd / 90 + " ms to the next segment; using duration " + mp4SampleDuration / 90 + " ms for the last video frame.");
                        }
                        else {
                            mp4SampleDuration = lastFrameDuration;
                        }
                    }
                    else {
                        mp4SampleDuration = lastFrameDuration;
                    }
                }
                compositionTimeOffset = Math.round(avcSample.pts - avcSample.dts);
            }
            else {
                compositionTimeOffset = Math.max(0, mp4SampleDuration * Math.round((avcSample.pts - avcSample.dts) / mp4SampleDuration));
            }
            // console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${avcSample.pts}/${avcSample.dts}/${initDTS}/${ptsnorm}/${dtsnorm}/${(avcSample.pts/4294967296).toFixed(3)}');
            outputSamples.push({
                size: mp4SampleLength,
                // constant duration
                duration: mp4SampleDuration,
                cts: compositionTimeOffset,
                flags: {
                    isLeading: 0,
                    isDependedOn: 0,
                    hasRedundancy: 0,
                    degradPrio: 0,
                    dependsOn: avcSample.key ? 2 : 1,
                    isNonSync: avcSample.key ? 0 : 1
                }
            });
        }
        // next AVC sample DTS should be equal to last sample DTS + last sample duration (in PES timescale)
        this._nextAvcDts = lastDTS + mp4SampleDuration;
        var nbOfDroppedSamples = track.dropped;
        track.len = 0;
        track.nbNalu = 0;
        track.dropped = 0;
        if (outputSamples.length && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var flags = outputSamples[0].flags;
            // chrome workaround, mark first sample as being a Random Access Point to avoid sourcebuffer append issue
            // https://code.google.com/p/chromium/issues/detail?id=229412
            flags.dependsOn = 2;
            flags.isNonSync = 0;
        }
        track.samples = outputSamples;
        moof = mp4_generator_1.MP4Generator.moof(track.sequenceNumber++, firstDTS, track);
        track.samples = [];
        var data = {
            payloadType: 'video',
            codec: track.codec,
            startPTS: firstPTS / timeScale,
            endPTS: (lastPTS + mp4SampleDuration) / timeScale,
            startDTS: firstDTS / timeScale,
            endDTS: this._nextAvcDts / timeScale,
            hasAudio: false,
            hasVideo: true,
            nbOfSamples: outputSamples.length,
            nbOfDroppedSamples: nbOfDroppedSamples,
            fragmentHeader: moof,
            fragmentData: mdat
        };
        this._observer.trigger(Event.WROTE_PAYLOAD_SEGMENT, data);
        return data;
    };
    Fmp4Remuxer.prototype._remuxAudio = function (track, timeOffset, contiguous, accurateTimeOffset) {
        var inputTimeScale = track.inputTimeScale;
        var mp4timeScale = track.timescale;
        var scaleFactor = inputTimeScale / mp4timeScale;
        var mp4SampleDuration = track.isAAC ? 1024 : 1152;
        var inputSampleDuration = mp4SampleDuration * scaleFactor;
        var initDTS = this._initDts;
        var rawMPEG = !track.isAAC && this._typeSupported.mpeg;
        var offset;
        var mp4Sample;
        var fillFrame;
        var fragmentData;
        var fragmentHeader;
        var firstPTS;
        var lastPTS;
        var inputSamples = track.samples;
        var outputSamples = [];
        var nextAudioPts = this._nextAudioPts;
        // for audio samples, also consider consecutive fragments as being contiguous (even if a level switch occurs),
        // for sake of clarity:
        // consecutive fragments are frags with
        //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
        //  - less than 20 audio frames distance
        // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
        // this helps ensuring audio continuity
        // and this also avoids audio glitches/cut when switching quality, or reporting wrong duration on first audio frame
        contiguous |= (inputSamples.length && nextAudioPts &&
            ((accurateTimeOffset && Math.abs(timeOffset - nextAudioPts / inputTimeScale) < 0.1) ||
                Math.abs((inputSamples[0].pts - nextAudioPts - initDTS)) < 20 * inputSampleDuration));
        // compute normalized PTS
        inputSamples.forEach(function (sample) {
            sample.pts = sample.dts = _wrapAroundPts(sample.pts - initDTS, timeOffset * inputTimeScale);
        });
        // filter out sample with negative PTS that are not playable anyway
        // if we don't remove these negative samples, they will shift all audio samples forward.
        // leading to audio overlap between current / next fragment
        inputSamples = inputSamples.filter(function (sample) {
            return sample.pts >= 0;
        });
        // in case all samples have negative PTS, and have been filtered out, return now
        if (inputSamples.length === 0) {
            return;
        }
        if (!contiguous) {
            if (!accurateTimeOffset) {
                // if frag are mot contiguous and if we cant trust time offset, let's use first sample PTS as next audio PTS
                nextAudioPts = inputSamples[0].pts;
            }
            else {
                // if timeOffset is accurate, let's use it as predicted next audio PTS
                nextAudioPts = timeOffset * inputTimeScale;
            }
        }
        // If the audio track is missing samples, the frames seem to get "left-shifted" within the
        // resulting mp4 segment, causing sync issues and leaving gaps at the end of the audio segment.
        // In an effort to prevent this from happening, we inject frames here where there are gaps.
        // When possible, we inject a silent frame; when that's not possible, we duplicate the last
        // frame.
        if (track.isAAC) {
            var maxAudioFramesDrift = this._config.maxAudioFramesDrift;
            for (var i_3 = 0, nextPts = nextAudioPts; i_3 < inputSamples.length;) {
                // First, let's see how far off this frame is from where we expect it to be
                var sample = inputSamples[i_3];
                var delta = void 0;
                var pts = sample.pts;
                delta = pts - nextPts;
                var duration = Math.abs(1000 * delta / inputTimeScale);
                // If we're overlapping by more than a duration, drop this sample
                if (delta <= -maxAudioFramesDrift * inputSampleDuration) {
                    logger.warn("Dropping 1 audio frame @ " + (nextPts / inputTimeScale).toFixed(3) + "s due to " + Math.round(duration) + " ms overlap.");
                    inputSamples.splice(i_3, 1);
                    track.len -= sample.units[0].data.length;
                    // Don't touch nextPtsNorm or i
                }
                // Insert missing frames if:
                // 1: We're more than maxAudioFramesDrift frame away
                // 2: Not more than MAX_SILENT_FRAME_DURATION away
                // 3: currentTime (aka nextPtsNorm) is not 0
                // tslint:disable-next-line: one-line
                else if (delta >= maxAudioFramesDrift * inputSampleDuration && duration < MAX_SILENT_FRAME_DURATION && nextPts) {
                    var missing = Math.round(delta / inputSampleDuration);
                    logger.warn("Injecting " + missing + " audio frame @ " + (nextPts / inputTimeScale).toFixed(3) + "s due to " + Math.round(1000 * delta / inputTimeScale) + " ms gap.");
                    for (var j = 0; j < missing; j++) {
                        var newStamp = Math.max(nextPts, 0);
                        fillFrame = aac_utils_1.AACUtils.allocNewSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                        if (!fillFrame) {
                            logger.log('Unable to get silent frame for given audio codec; duplicating last frame instead.');
                            fillFrame = sample.units[0].data.subarray(0);
                        }
                        inputSamples.splice(i_3, 0, {
                            units: [fillFrame],
                            pts: newStamp,
                            dts: newStamp,
                            length: 1,
                            id: 0,
                            key: null
                        });
                        track.len += fillFrame.length;
                        nextPts += inputSampleDuration;
                        i_3++;
                    }
                    // Adjust sample to next expected pts
                    sample.pts = sample.dts = nextPts;
                    nextPts += inputSampleDuration;
                    i_3++;
                }
                else {
                    // Otherwise, just adjust pts
                    if (Math.abs(delta) > (0.1 * inputSampleDuration)) {
                        // logger.log(`Invalid frame delta ${Math.round(delta + inputSampleDuration)} at PTS ${Math.round(pts / 90)} (should be ${Math.round(inputSampleDuration)}).`);
                    }
                    sample.pts = sample.dts = nextPts;
                    nextPts += inputSampleDuration;
                    i_3++;
                }
            }
        }
        for (var j = 0, nbSamples_1 = inputSamples.length; j < nbSamples_1; j++) {
            var audioSample = inputSamples[j];
            var unit = audioSample.units[0].data;
            var pts = audioSample.pts;
            // logger.log(`Audio PTS: ${Math.round(pts)}`);
            // if not first sample
            if (lastPTS !== undefined) {
                mp4Sample.duration = Math.round((pts - lastPTS) / scaleFactor);
            }
            else {
                var delta = Math.round(1000 * (pts - nextAudioPts) / inputTimeScale);
                var numMissingFrames = 0;
                // if fragment are contiguous, detect hole/overlapping between fragments
                // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
                if (contiguous && track.isAAC) {
                    // log delta
                    if (delta) {
                        if (delta > 0 && delta < MAX_SILENT_FRAME_DURATION) {
                            numMissingFrames = Math.round((pts - nextAudioPts) / inputSampleDuration);
                            logger.log(delta + " ms hole between AAC samples detected, filling it");
                            if (numMissingFrames > 0) {
                                fillFrame = aac_utils_1.AACUtils.allocNewSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                                if (!fillFrame) {
                                    fillFrame = unit.subarray(0);
                                }
                                track.len += numMissingFrames * fillFrame.length;
                            }
                            // if we have frame overlap, overlapping for more than half a frame duraion
                        }
                        else if (delta < -12) {
                            // drop overlapping audio frames... browser will deal with it
                            logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (nextAudioPts / inputTimeScale).toFixed(3) + "s/" + (pts / inputTimeScale).toFixed(3) + "s/" + (-delta) + "ms");
                            track.len -= unit.byteLength;
                            continue;
                        }
                        // set PTS/DTS to expected PTS/DTS
                        pts = nextAudioPts;
                    }
                }
                // remember first PTS of our audioSamples
                firstPTS = pts;
                if (track.len > 0) {
                    /* concatenate the audio data and construct the mdat in place
                      (need 8 more bytes to fill length and mdat type) */
                    var mdatSize = rawMPEG ? track.len : track.len + 8;
                    offset = rawMPEG ? 0 : 8;
                    try {
                        fragmentData = new Uint8Array(mdatSize);
                    }
                    catch (err) {
                        this._observer.trigger(Event.FAILURE, "failed to allocate audio mdat of " + mdatSize + " bytes");
                        return;
                    }
                    if (!rawMPEG) {
                        var view = new DataView(fragmentData.buffer);
                        view.setUint32(0, mdatSize);
                        fragmentData.set(mp4_generator_1.MP4Generator.types.mdat, 4);
                    }
                }
                else {
                    // no audio samples
                    return;
                }
                for (var i_4 = 0; i_4 < numMissingFrames; i_4++) {
                    fillFrame = aac_utils_1.AACUtils.allocNewSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                    if (!fillFrame) {
                        logger.log('Unable to get silent frame for given audio codec; duplicating this frame instead.');
                        fillFrame = unit.subarray(0);
                    }
                    fragmentData.set(fillFrame, offset);
                    offset += fillFrame.byteLength;
                    mp4Sample = {
                        size: fillFrame.byteLength,
                        cts: 0,
                        duration: 1024,
                        flags: {
                            isLeading: 0,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradPrio: 0,
                            dependsOn: 1
                        }
                    };
                    outputSamples.push(mp4Sample);
                }
            }
            fragmentData.set(unit, offset);
            var unitLen = unit.byteLength;
            offset += unitLen;
            mp4Sample = {
                size: unitLen,
                cts: 0,
                duration: 0,
                flags: {
                    isLeading: 0,
                    isDependedOn: 0,
                    hasRedundancy: 0,
                    degradPrio: 0,
                    dependsOn: 1
                }
            };
            outputSamples.push(mp4Sample);
            lastPTS = pts;
        }
        var lastSampleDuration = 0;
        var nbSamples = outputSamples.length;
        // set last sample duration as being identical to previous sample
        if (nbSamples >= 2) {
            lastSampleDuration = outputSamples[nbSamples - 2].duration;
            mp4Sample.duration = lastSampleDuration;
        }
        if (nbSamples) {
            // next audio sample PTS should be equal to last sample PTS + duration
            this._nextAudioPts = nextAudioPts = lastPTS + scaleFactor * lastSampleDuration;
            // logger.log('Audio/PTS/PTSend:' + audioSample.pts.toFixed(0) + '/' + this.nextAacDts.toFixed(0));
            track.len = 0;
            track.samples = outputSamples;
            if (rawMPEG) {
                fragmentHeader = new Uint8Array(0);
            }
            else {
                fragmentHeader = mp4_generator_1.MP4Generator.moof(track.sequenceNumber++, firstPTS / scaleFactor, track);
            }
            track.samples = [];
            var start = firstPTS / inputTimeScale;
            var end = nextAudioPts / inputTimeScale;
            var audioData = {
                payloadType: 'audio',
                codec: track.codec,
                startPTS: start,
                endPTS: end,
                startDTS: start,
                endDTS: end,
                hasAudio: true,
                hasVideo: false,
                nbOfSamples: nbSamples,
                fragmentHeader: fragmentHeader,
                fragmentData: fragmentData
            };
            this._observer.trigger(Event.WROTE_PAYLOAD_SEGMENT, audioData);
            return audioData;
        }
        return null;
    };
    Fmp4Remuxer.prototype._remuxEmptyAudio = function (track, timeOffset, contiguous, videoData) {
        var inputTimeScale = track.inputTimeScale;
        var mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale;
        var scaleFactor = inputTimeScale / mp4timeScale;
        var nextAudioPts = this._nextAudioPts;
        // sync with video's timestamp
        var startDTS = (nextAudioPts !== null ? nextAudioPts : videoData.startDTS * inputTimeScale) + this._initDts;
        var endDTS = videoData.endDTS * inputTimeScale + this._initDts;
        // one sample's duration value
        var sampleDuration = 1024;
        var frameDuration = scaleFactor * sampleDuration;
        // samples count of this segment's duration
        var nbSamples = Math.ceil((endDTS - startDTS) / frameDuration);
        // silent frame
        var silentFrame = aac_utils_1.AACUtils.allocNewSilentFrame(track.manifestCodec || track.codec, track.channelCount);
        logger.warn('remux empty Audio');
        // Can't remux if we can't generate a silent frame...
        if (!silentFrame) {
            logger.trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!');
            return;
        }
        var samples = [];
        for (var i_5 = 0; i_5 < nbSamples; i_5++) {
            var stamp = startDTS + i_5 * frameDuration;
            samples.push({ unit: silentFrame, pts: stamp, dts: stamp });
            track.len += silentFrame.length;
        }
        track.samples = samples;
        this._remuxAudio(track, timeOffset, contiguous);
    };
    Fmp4Remuxer.prototype._remuxID3 = function (track, timeOffset) {
        var length = track.samples.length;
        var sample;
        var inputTimeScale = track.inputTimeScale;
        var initPTS = this._initPts;
        var initDTS = this._initDts;
        // consume samples
        if (length) {
            for (var index = 0; index < length; index++) {
                sample = track.samples[index];
                // setting id3 pts, dts to relative time
                // using this._initPTS and this._initDTS to calculate relative time
                sample.pts = ((sample.pts - initPTS) / inputTimeScale);
                sample.dts = ((sample.dts - initDTS) / inputTimeScale);
            }
            this._observer.trigger(Event.GOT_METADATA, {
                samples: track.samples
            });
        }
        track.samples = [];
        timeOffset = timeOffset;
    };
    Fmp4Remuxer.prototype._remuxText = function (track, timeOffset) {
        track.samples.sort(function (a, b) {
            return (a.pts - b.pts);
        });
        var length = track.samples.length;
        var sample;
        var inputTimeScale = track.inputTimeScale;
        var initPTS = this._initPts;
        // consume samples
        if (length) {
            for (var index = 0; index < length; index++) {
                sample = track.samples[index];
                // setting text pts, dts to relative time
                // using this._initPTS and this._initDTS to calculate relative time
                sample.pts = ((sample.pts - initPTS) / inputTimeScale);
            }
            this._observer.trigger(Event.GOT_USER_DATA, {
                samples: track.samples
            });
        }
        track.samples = [];
        timeOffset = timeOffset;
    };
    return Fmp4Remuxer;
}());
exports.Fmp4Remuxer = Fmp4Remuxer;
function _wrapAroundPts(value, reference) {
    var offset;
    if (reference === null || reference === undefined) {
        return value;
    }
    if (reference < value) {
        // - 2^33
        offset = -8589934592;
    }
    else {
        // + 2^33
        offset = 8589934592;
    }
    /* PTS is 33bit (from 0 to 2^33 -1)
      if diff between value and reference is bigger than half of the amplitude (2^32) then it means that
      PTS looping occured. fill the gap */
    while (Math.abs(value - reference) > 4294967296) {
        value += offset;
    }
    return value;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AACUtils = /** @class */ (function () {
    function AACUtils() {
    }
    AACUtils.allocNewSilentFrame = function (codec, channelCount) {
        switch (codec) {
            case 'mp4a.40.2':
                if (channelCount === 1) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
                }
                else if (channelCount === 2) {
                    return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
                }
                else if (channelCount === 3) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
                }
                else if (channelCount === 4) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
                }
                else if (channelCount === 5) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
                }
                else if (channelCount === 6) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
                }
                break;
            // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
            default:
                if (channelCount === 1) {
                    // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
                }
                else if (channelCount === 2) {
                    // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
                }
                else if (channelCount === 3) {
                    // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
                }
                break;
        }
        return null;
    };
    return AACUtils;
}());
exports.AACUtils = AACUtils;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generate MP4 Box
*/
Object.defineProperty(exports, "__esModule", { value: true });
var UINT32_MAX = Math.pow(2, 32) - 1;
var MP4Generator = /** @class */ (function () {
    function MP4Generator() {
    }
    //static types: {[boxType: string]: any}
    MP4Generator.init = function () {
        MP4Generator.types = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            '.mp3': [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
            smhd: []
        };
        var i;
        for (i in MP4Generator.types) {
            if (MP4Generator.types.hasOwnProperty(i)) {
                MP4Generator.types[i] = [
                    i.charCodeAt(0),
                    i.charCodeAt(1),
                    i.charCodeAt(2),
                    i.charCodeAt(3)
                ];
            }
        }
        var videoHdlr = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x76, 0x69, 0x64, 0x65,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x56, 0x69, 0x64, 0x65,
            0x6f, 0x48, 0x61, 0x6e,
            0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
        ]);
        var audioHdlr = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x73, 0x6f, 0x75, 0x6e,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x53, 0x6f, 0x75, 0x6e,
            0x64, 0x48, 0x61, 0x6e,
            0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'SoundHandler'
        ]);
        MP4Generator.HDLR_TYPES = {
            'video': videoHdlr,
            'audio': audioHdlr
        };
        var dref = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x0c,
            0x75, 0x72, 0x6c, 0x20,
            0x00,
            0x00, 0x00, 0x01 // entry_flags
        ]);
        var stco = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00 // entry_count
        ]);
        MP4Generator.STTS = MP4Generator.STSC = MP4Generator.STCO = stco;
        MP4Generator.STSZ = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00 // sample_count
        ]);
        MP4Generator.VMHD = new Uint8Array([
            0x00,
            0x00, 0x00, 0x01,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00 // opcolor
        ]);
        MP4Generator.SMHD = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00 // reserved
        ]);
        MP4Generator.STSD = new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01
        ]); // entry_count
        var majorBrand = new Uint8Array([105, 115, 111, 109]); // isom
        var avc1Brand = new Uint8Array([97, 118, 99, 49]); // avc1
        var minorVersion = new Uint8Array([0, 0, 0, 1]);
        MP4Generator.FTYP = MP4Generator.box(MP4Generator.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand);
        MP4Generator.DINF = MP4Generator.box(MP4Generator.types.dinf, MP4Generator.box(MP4Generator.types.dref, dref));
    };
    MP4Generator.box = function (type) {
        var payload = Array.prototype.slice.call(arguments, 1);
        var size = 8;
        var i = payload.length;
        var len = i;
        var result;
        // calculate the total size we need to allocate
        while (i--) {
            size += payload[i].byteLength;
        }
        result = new Uint8Array(size);
        result[0] = (size >> 24) & 0xff;
        result[1] = (size >> 16) & 0xff;
        result[2] = (size >> 8) & 0xff;
        result[3] = size & 0xff;
        result.set(type, 4);
        // copy the payload into the result
        for (i = 0, size = 8; i < len; i++) {
            // copy payload[i] array @ offset size
            result.set(payload[i], size);
            size += payload[i].byteLength;
        }
        return result;
    };
    MP4Generator.hdlr = function (type) {
        return MP4Generator.box(MP4Generator.types.hdlr, MP4Generator.HDLR_TYPES[type]);
    };
    MP4Generator.mdat = function (data) {
        return MP4Generator.box(MP4Generator.types.mdat, data);
    };
    MP4Generator.mdhd = function (timescale, duration) {
        duration *= timescale;
        var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
        var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
        return MP4Generator.box(MP4Generator.types.mdhd, new Uint8Array([
            0x01,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
            (timescale >> 24) & 0xFF,
            (timescale >> 16) & 0xFF,
            (timescale >> 8) & 0xFF,
            timescale & 0xFF,
            (upperWordDuration >> 24),
            (upperWordDuration >> 16) & 0xFF,
            (upperWordDuration >> 8) & 0xFF,
            upperWordDuration & 0xFF,
            (lowerWordDuration >> 24),
            (lowerWordDuration >> 16) & 0xFF,
            (lowerWordDuration >> 8) & 0xFF,
            lowerWordDuration & 0xFF,
            0x55, 0xc4,
            0x00, 0x00
        ]));
    };
    MP4Generator.mdia = function (track) {
        return MP4Generator.box(MP4Generator.types.mdia, MP4Generator.mdhd(track.timescale, track.duration), MP4Generator.hdlr(track.type), MP4Generator.minf(track));
    };
    MP4Generator.mfhd = function (sequenceNumber) {
        return MP4Generator.box(MP4Generator.types.mfhd, new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            (sequenceNumber >> 24),
            (sequenceNumber >> 16) & 0xFF,
            (sequenceNumber >> 8) & 0xFF,
            sequenceNumber & 0xFF // sequence_number
        ]));
    };
    MP4Generator.minf = function (track) {
        if (track.type === 'audio') {
            return MP4Generator.box(MP4Generator.types.minf, MP4Generator.box(MP4Generator.types.smhd, MP4Generator.SMHD), MP4Generator.DINF, MP4Generator.stbl(track));
        }
        else {
            return MP4Generator.box(MP4Generator.types.minf, MP4Generator.box(MP4Generator.types.vmhd, MP4Generator.VMHD), MP4Generator.DINF, MP4Generator.stbl(track));
        }
    };
    MP4Generator.moof = function (sn, baseMediaDecodeTime, track) {
        return MP4Generator.box(MP4Generator.types.moof, MP4Generator.mfhd(sn), MP4Generator.traf(track, baseMediaDecodeTime));
    };
    /**
    tracks... (optional) {array} the tracks associated with this movie
   */
    MP4Generator.moov = function (tracks) {
        var i = tracks.length;
        var boxes = [];
        while (i--) {
            boxes[i] = MP4Generator.trak(tracks[i]);
        }
        return MP4Generator.box.apply(null, [MP4Generator.types.moov, MP4Generator.mvhd(tracks[0].timescale, tracks[0].duration)].concat(boxes).concat(MP4Generator.mvex(tracks)));
    };
    MP4Generator.mvex = function (tracks) {
        var i = tracks.length;
        var boxes = [];
        while (i--) {
            boxes[i] = MP4Generator.trex(tracks[i]);
        }
        return MP4Generator.box.apply(null, [MP4Generator.types.mvex].concat(boxes));
    };
    MP4Generator.mvhd = function (timescale, duration) {
        duration *= timescale;
        var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
        var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
        var bytes = new Uint8Array([
            0x01,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
            (timescale >> 24) & 0xFF,
            (timescale >> 16) & 0xFF,
            (timescale >> 8) & 0xFF,
            timescale & 0xFF,
            (upperWordDuration >> 24),
            (upperWordDuration >> 16) & 0xFF,
            (upperWordDuration >> 8) & 0xFF,
            upperWordDuration & 0xFF,
            (lowerWordDuration >> 24),
            (lowerWordDuration >> 16) & 0xFF,
            (lowerWordDuration >> 8) & 0xFF,
            lowerWordDuration & 0xFF,
            0x00, 0x01, 0x00, 0x00,
            0x01, 0x00,
            0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0xff, 0xff, 0xff, 0xff // next_track_ID
        ]);
        return MP4Generator.box(MP4Generator.types.mvhd, bytes);
    };
    MP4Generator.sdtp = function (track) {
        var samples = track.samples || [];
        var bytes = new Uint8Array(4 + samples.length);
        var flags;
        var i;
        // leave the full box header (4 bytes) all zero
        // write the sample table
        for (i = 0; i < samples.length; i++) {
            flags = samples[i].flags;
            bytes[i + 4] = (flags.dependsOn << 4) |
                (flags.isDependedOn << 2) |
                (flags.hasRedundancy);
        }
        return MP4Generator.box(MP4Generator.types.sdtp, bytes);
    };
    MP4Generator.stbl = function (track) {
        return MP4Generator.box(MP4Generator.types.stbl, MP4Generator.stsd(track), MP4Generator.box(MP4Generator.types.stts, MP4Generator.STTS), MP4Generator.box(MP4Generator.types.stsc, MP4Generator.STSC), MP4Generator.box(MP4Generator.types.stsz, MP4Generator.STSZ), MP4Generator.box(MP4Generator.types.stco, MP4Generator.STCO));
    };
    MP4Generator.avc1 = function (track) {
        var sps = [];
        var pps = [];
        var i;
        var data;
        var len;
        // assemble the SPSs
        for (i = 0; i < track.sps.length; i++) {
            data = track.sps[i];
            len = data.byteLength;
            sps.push((len >>> 8) & 0xFF);
            sps.push((len & 0xFF));
            // SPS
            sps = sps.concat(Array.prototype.slice.call(data));
        }
        // assemble the PPSs
        for (i = 0; i < track.pps.length; i++) {
            data = track.pps[i];
            len = data.byteLength;
            pps.push((len >>> 8) & 0xFF);
            pps.push((len & 0xFF));
            pps = pps.concat(Array.prototype.slice.call(data));
        }
        var avcc = MP4Generator.box(MP4Generator.types.avcC, new Uint8Array([
            0x01,
            sps[3],
            sps[4],
            sps[5],
            0xfc | 3,
            0xE0 | track.sps.length // 3bit reserved (111) + numOfSequenceParameterSets
        ].concat(sps).concat([
            track.pps.length // numOfPictureParameterSets
        ]).concat(pps)));
        // "PPS"
        var width = track.width;
        var height = track.height;
        var hSpacing = track.pixelRatio[0];
        var vSpacing = track.pixelRatio[1];
        return MP4Generator.box(MP4Generator.types.avc1, new Uint8Array([
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x01,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (width >> 8) & 0xFF,
            width & 0xff,
            (height >> 8) & 0xFF,
            height & 0xff,
            0x00, 0x48, 0x00, 0x00,
            0x00, 0x48, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01,
            0x12,
            0x64, 0x61, 0x69, 0x6C,
            0x79, 0x6D, 0x6F, 0x74,
            0x69, 0x6F, 0x6E, 0x2F,
            0x68, 0x6C, 0x73, 0x2E,
            0x6A, 0x73, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x18,
            0x11, 0x11
        ]), // pre_defined = -1
        avcc, MP4Generator.box(MP4Generator.types.btrt, new Uint8Array([
            0x00, 0x1c, 0x9c, 0x80,
            0x00, 0x2d, 0xc6, 0xc0,
            0x00, 0x2d, 0xc6, 0xc0
        ])), // avgBitrate
        MP4Generator.box(MP4Generator.types.pasp, new Uint8Array([
            (hSpacing >> 24),
            (hSpacing >> 16) & 0xFF,
            (hSpacing >> 8) & 0xFF,
            hSpacing & 0xFF,
            (vSpacing >> 24),
            (vSpacing >> 16) & 0xFF,
            (vSpacing >> 8) & 0xFF,
            vSpacing & 0xFF
        ])));
    };
    MP4Generator.esds = function (track) {
        var configlen = track.config.length;
        return new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            0x03,
            0x17 + configlen,
            0x00, 0x01,
            0x00,
            0x04,
            0x0f + configlen,
            0x40,
            0x15,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x05 // descriptor_type
        ].concat([configlen]).concat(track.config).concat([0x06, 0x01, 0x02])); // GASpecificConfig)); // length + audio config descriptor
    };
    MP4Generator.mp4a = function (track) {
        var samplerate = track.samplerate;
        return MP4Generator.box(MP4Generator.types.mp4a, new Uint8Array([
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, track.channelCount,
            0x00, 0x10,
            0x00, 0x00, 0x00, 0x00,
            (samplerate >> 8) & 0xFF,
            samplerate & 0xff,
            0x00, 0x00
        ]), MP4Generator.box(MP4Generator.types.esds, MP4Generator.esds(track)));
    };
    MP4Generator.mp3 = function (track) {
        var samplerate = track.samplerate;
        return MP4Generator.box(MP4Generator.types['.mp3'], new Uint8Array([
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, track.channelCount,
            0x00, 0x10,
            0x00, 0x00, 0x00, 0x00,
            (samplerate >> 8) & 0xFF,
            samplerate & 0xff,
            0x00, 0x00
        ]));
    };
    MP4Generator.stsd = function (track) {
        if (track.type === 'audio') {
            if (!track.isAAC && track.codec === 'mp3') {
                return MP4Generator.box(MP4Generator.types.stsd, MP4Generator.STSD, MP4Generator.mp3(track));
            }
            return MP4Generator.box(MP4Generator.types.stsd, MP4Generator.STSD, MP4Generator.mp4a(track));
        }
        else {
            return MP4Generator.box(MP4Generator.types.stsd, MP4Generator.STSD, MP4Generator.avc1(track));
        }
    };
    MP4Generator.tkhd = function (track) {
        var id = track.id;
        var duration = track.duration * track.timescale;
        var width = track.width;
        var height = track.height;
        var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
        var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
        return MP4Generator.box(MP4Generator.types.tkhd, new Uint8Array([
            0x01,
            0x00, 0x00, 0x07,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
            (id >> 24) & 0xFF,
            (id >> 16) & 0xFF,
            (id >> 8) & 0xFF,
            id & 0xFF,
            0x00, 0x00, 0x00, 0x00,
            (upperWordDuration >> 24),
            (upperWordDuration >> 16) & 0xFF,
            (upperWordDuration >> 8) & 0xFF,
            upperWordDuration & 0xFF,
            (lowerWordDuration >> 24),
            (lowerWordDuration >> 16) & 0xFF,
            (lowerWordDuration >> 8) & 0xFF,
            lowerWordDuration & 0xFF,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,
            (width >> 8) & 0xFF,
            width & 0xFF,
            0x00, 0x00,
            (height >> 8) & 0xFF,
            height & 0xFF,
            0x00, 0x00 // height
        ]));
    };
    MP4Generator.traf = function (track, baseMediaDecodeTime) {
        var sampleDependencyTable = MP4Generator.sdtp(track);
        var id = track.id;
        var upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
        var lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
        return MP4Generator.box(MP4Generator.types.traf, MP4Generator.box(MP4Generator.types.tfhd, new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            (id >> 24),
            (id >> 16) & 0XFF,
            (id >> 8) & 0XFF,
            (id & 0xFF) // track_ID
        ])), MP4Generator.box(MP4Generator.types.tfdt, new Uint8Array([
            0x01,
            0x00, 0x00, 0x00,
            (upperWordBaseMediaDecodeTime >> 24),
            (upperWordBaseMediaDecodeTime >> 16) & 0XFF,
            (upperWordBaseMediaDecodeTime >> 8) & 0XFF,
            (upperWordBaseMediaDecodeTime & 0xFF),
            (lowerWordBaseMediaDecodeTime >> 24),
            (lowerWordBaseMediaDecodeTime >> 16) & 0XFF,
            (lowerWordBaseMediaDecodeTime >> 8) & 0XFF,
            (lowerWordBaseMediaDecodeTime & 0xFF)
        ])), MP4Generator.trun(track, sampleDependencyTable.length +
            16 + // tfhd
            20 + // tfdt
            8 + // traf header
            16 + // mfhd
            8 + // moof header
            8), // mdat header
        sampleDependencyTable);
    };
    /**
     * Generate a track box.
    track {object} a track definition
    {Uint8Array} the track box
     */
    MP4Generator.trak = function (track) {
        track.duration = track.duration || 0xffffffff;
        return MP4Generator.box(MP4Generator.types.trak, MP4Generator.tkhd(track), MP4Generator.mdia(track));
    };
    MP4Generator.trex = function (track) {
        var id = track.id;
        return MP4Generator.box(MP4Generator.types.trex, new Uint8Array([
            0x00,
            0x00, 0x00, 0x00,
            (id >> 24),
            (id >> 16) & 0XFF,
            (id >> 8) & 0XFF,
            (id & 0xFF),
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x01 // default_sample_flags
        ]));
    };
    MP4Generator.trun = function (track, offset) {
        var samples = track.samples || [];
        var len = samples.length;
        var arraylen = 12 + (16 * len);
        var array = new Uint8Array(arraylen);
        var i;
        var sample;
        var duration;
        var size;
        var flags;
        var cts;
        offset += 8 + arraylen;
        array.set([
            0x00,
            0x00, 0x0f, 0x01,
            (len >>> 24) & 0xFF,
            (len >>> 16) & 0xFF,
            (len >>> 8) & 0xFF,
            len & 0xFF,
            (offset >>> 24) & 0xFF,
            (offset >>> 16) & 0xFF,
            (offset >>> 8) & 0xFF,
            offset & 0xFF // data_offset
        ], 0);
        for (i = 0; i < len; i++) {
            sample = samples[i];
            duration = sample.duration;
            size = sample.size;
            flags = sample.flags;
            cts = sample.cts;
            array.set([
                (duration >>> 24) & 0xFF,
                (duration >>> 16) & 0xFF,
                (duration >>> 8) & 0xFF,
                duration & 0xFF,
                (size >>> 24) & 0xFF,
                (size >>> 16) & 0xFF,
                (size >>> 8) & 0xFF,
                size & 0xFF,
                (flags.isLeading << 2) | flags.dependsOn,
                (flags.isDependedOn << 6) |
                    (flags.hasRedundancy << 4) |
                    (flags.paddingValue << 1) |
                    flags.isNonSync,
                flags.degradPrio & 0xF0 << 8,
                flags.degradPrio & 0x0F,
                (cts >>> 24) & 0xFF,
                (cts >>> 16) & 0xFF,
                (cts >>> 8) & 0xFF,
                cts & 0xFF // sample_composition_time_offset
            ], 12 + 16 * i);
        }
        return MP4Generator.box(MP4Generator.types.trun, array);
    };
    MP4Generator.initSegment = function (tracks) {
        if (!MP4Generator.types) {
            MP4Generator.init();
        }
        var movie = MP4Generator.moov(tracks);
        var result;
        result = new Uint8Array(MP4Generator.FTYP.byteLength + movie.byteLength);
        result.set(MP4Generator.FTYP);
        result.set(movie, MP4Generator.FTYP.byteLength);
        return result;
    };
    return MP4Generator;
}());
exports.MP4Generator = MP4Generator;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bowser = __webpack_require__(66);
var BrowserBrandname;
(function (BrowserBrandname) {
    BrowserBrandname["CHROME"] = "chrome";
    BrowserBrandname["FIREFOX"] = "firefox";
    BrowserBrandname["SAFARI"] = "safari";
    BrowserBrandname["IE"] = "ie";
    BrowserBrandname["EDGE"] = "edge";
})(BrowserBrandname = exports.BrowserBrandname || (exports.BrowserBrandname = {}));
;
// ADD browser rendering-engines detection; see https://github.com/lancedikson/bowser/tree/v1.x
function isBrowserBrand(brandName) {
    return bowser[brandName];
}
exports.isBrowserBrand = isBrowserBrand;
function isMseSupported() {
    return !!window.MediaSource;
}
exports.isMseSupported = isMseSupported;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) __webpack_require__(67)(name, definition)
  else root[name] = definition()
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unknown_reader_1 = __webpack_require__(69);
var adts_reader_1 = __webpack_require__(35);
var h264_reader_1 = __webpack_require__(36);
var id3_reader_1 = __webpack_require__(71);
var mpeg_reader_1 = __webpack_require__(72);
var PESReader = /** @class */ (function () {
    function PESReader(pid, type) {
        this.pid = pid;
        this.type = type;
        this.pid = pid;
        this.type = type;
        this.lastPts = -1;
        this.pesLength = 0;
        if (type === PESReader.TS_STREAM_TYPE_AAC) {
            this.payloadReader = new adts_reader_1.AdtsReader();
        }
        else if (type === PESReader.TS_STREAM_TYPE_H264) {
            this.payloadReader = new h264_reader_1.H264Reader();
        }
        else if (type === PESReader.TS_STREAM_TYPE_ID3) {
            this.payloadReader = new id3_reader_1.ID3Reader();
        }
        else if (type === PESReader.TS_STREAM_TYPE_MPA || type === PESReader.TS_STREAM_TYPE_MPA_LSF) {
            this.payloadReader = new mpeg_reader_1.MpegReader();
        }
        else if (type === PESReader.TS_STREAM_TYPE_METADATA) {
            // do nothing
        }
        else {
            this.payloadReader = new unknown_reader_1.UnknownReader();
        }
    }
    PESReader.ptsToTimeUs = function (pts) {
        return (pts * 1000000) / 90000;
    };
    PESReader.prototype.appendData = function (payloadUnitStartIndicator, packet) {
        if (payloadUnitStartIndicator) {
            if (this.payloadReader) {
                this.payloadReader.consumeData(this.lastPts);
            }
            this.parsePESHeader(packet);
        }
        if (this.payloadReader) {
            this.payloadReader.append(packet);
        }
    };
    PESReader.prototype.parsePESHeader = function (packet) {
        packet.skipBytes(7);
        var timingFlags = packet.readByte();
        if (timingFlags & 0xC0) {
            packet.skipBytes(1);
            var pts = void 0;
            pts = (packet.readByte() & 0x0E) << 27 |
                (packet.readByte() & 0xFF) << 20 |
                (packet.readByte() & 0xFE) << 12 |
                (packet.readByte() & 0xFF) << 5;
            var val = packet.readByte();
            pts |= (val & 0xFE) >>> 3;
            pts = pts << 2;
            pts += (val & 0x06) >>> 1;
            this.lastPts = PESReader.ptsToTimeUs(pts);
        }
    };
    PESReader.prototype.reset = function () {
        if (this.payloadReader) {
            this.payloadReader.reset();
        }
    };
    PESReader.prototype.flush = function () {
        if (this.payloadReader) {
            this.payloadReader.flush(this.lastPts);
        }
    };
    PESReader.TS_STREAM_TYPE_AAC = 0x0F;
    PESReader.TS_STREAM_TYPE_H264 = 0x1B;
    PESReader.TS_STREAM_TYPE_ID3 = 0x15;
    PESReader.TS_STREAM_TYPE_MPA = 0x03;
    PESReader.TS_STREAM_TYPE_MPA_LSF = 0x04;
    PESReader.TS_STREAM_TYPE_METADATA = 0x06;
    return PESReader;
}());
exports.PESReader = PESReader;


/***/ }),
/* 69 */
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
var payload_reader_1 = __webpack_require__(12);
var UnknownReader = /** @class */ (function (_super) {
    __extends(UnknownReader, _super);
    function UnknownReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnknownReader.prototype.getMimeType = function () {
        return 'unknown';
    };
    UnknownReader.prototype.consumeData = function (pts) {
        // do nothing
    };
    return UnknownReader;
}(payload_reader_1.PayloadReader));
exports.UnknownReader = UnknownReader;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sps = /** @class */ (function () {
    function Sps(profile, level, bitDepth, chromaFormat, chromaFormatStr, frameRate, sar, codecSize, presentSize) {
        this.profile = profile;
        this.level = level;
        this.bitDepth = bitDepth;
        this.chromaFormat = chromaFormat;
        this.frameRate = frameRate;
        this.sar = sar;
        this.codecSize = codecSize;
        this.presentSize = presentSize;
        // do nothing
    }
    return Sps;
}());
exports.Sps = Sps;


/***/ }),
/* 71 */
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
var payload_reader_1 = __webpack_require__(12);
var track_1 = __webpack_require__(8);
var ID3Reader = /** @class */ (function (_super) {
    __extends(ID3Reader, _super);
    function ID3Reader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ID3Reader.prototype.getMimeType = function () {
        return track_1.Track.MIME_TYPE_ID3;
    };
    ID3Reader.prototype.consumeData = function (pts) {
        // do nothing
    };
    return ID3Reader;
}(payload_reader_1.PayloadReader));
exports.ID3Reader = ID3Reader;


/***/ }),
/* 72 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var payload_reader_1 = __webpack_require__(12);
var frame_1 = __webpack_require__(10);
var State;
(function (State) {
    State[State["FIND_SYNC"] = 1] = "FIND_SYNC";
    State[State["READ_HEADER"] = 2] = "READ_HEADER";
    State[State["READ_FRAME"] = 3] = "READ_FRAME";
})(State || (State = {}));
var MpegReader = /** @class */ (function (_super) {
    __extends(MpegReader, _super);
    function MpegReader() {
        var _this = _super.call(this) || this;
        _this.channels = 0;
        _this.sampleRate = 0;
        _this.samplesPerFrame = 0;
        _this.currentFrameSize = 0;
        _this.frameDuration = 0;
        _this.mimeType = MpegReader.MIME_TYPE_BY_LAYER[2];
        _this.state = State.FIND_SYNC;
        _this.dataOffset = 0;
        return _this;
    }
    MpegReader.prototype.getMimeType = function () {
        return 'audio/' + this.mimeType;
    };
    MpegReader.prototype.consumeData = function (pts) {
        if (!this.dataBuffer) {
            return;
        }
        if (pts >= 0) {
            this.timeUs = pts;
        }
        if (this.firstTimestamp === -1) {
            this.firstTimestamp = this.timeUs;
        }
        while (this.dataOffset < this.dataBuffer.byteLength) {
            if (this.state === State.FIND_SYNC) {
                this.findHeader();
            }
            else if (this.state === State.READ_HEADER) {
                if (!this.readHeader()) {
                    break;
                }
            }
            else if (this.state === State.READ_FRAME) {
                var len = this.readFrame();
                if (len === 0) {
                    break;
                }
                this.dataOffset += len;
            }
        }
        this.dataBuffer = this.dataBuffer.subarray(this.dataOffset);
        this.dataOffset = 0;
    };
    MpegReader.prototype.findHeader = function () {
        var limit = this.dataBuffer.byteLength - 1;
        var lastByteWasFF = false;
        for (var i_1 = this.dataOffset; i_1 < limit; i_1++) {
            var isFF = ((this.dataBuffer[i_1]) & 0xFF) === 0XFF;
            var found = lastByteWasFF && ((this.dataBuffer[i_1] & 0xE0) === 0xE0);
            lastByteWasFF = isFF;
            if (found) {
                lastByteWasFF = false;
                this.state = State.READ_HEADER;
                this.dataOffset = i_1 - 1;
                return;
            }
        }
        this.dataOffset = this.dataBuffer.byteLength;
    };
    MpegReader.prototype.readHeader = function () {
        if (this.dataBuffer.byteLength - this.dataOffset < MpegReader.HEADER_SIZE) {
            return false;
        }
        var header = byte_parser_utils_1.default.parseUint32(this.dataBuffer, this.dataOffset);
        if (!this.parseHeader(header)) {
            this.state = State.FIND_SYNC;
            this.dataOffset++;
        }
        else {
            this.state = State.READ_FRAME;
        }
        return true;
    };
    MpegReader.prototype.parseHeader = function (header) {
        if ((header & 0xFFE00000) >>> 0 !== 0xFFE00000) {
            console.log(header);
            return false;
        }
        var version = (header >>> 19) & 3;
        if (version === 1) {
            return false;
        }
        var layer = (header >>> 17) & 3;
        if (layer === 0) {
            return false;
        }
        var bitrateIndex = (header >>> 12) & 15;
        var sampleRateIndex = (header >>> 10) & 3;
        if (sampleRateIndex >= MpegReader.SAMPLING_RATE_V1.length) {
            return false;
        }
        var sampleRate = MpegReader.SAMPLING_RATE_V1[sampleRateIndex];
        if (version === 2) {
            this.sampleRate = sampleRate / 2;
        }
        else if (version === 0) {
            this.sampleRate = sampleRate / 4;
        }
        else {
            this.sampleRate = sampleRate;
        }
        var padding = (header >>> 9) & 1;
        this.channels = ((header >> 6) & 3) === 3 ? 1 : 2;
        this.mimeType = MpegReader.MIME_TYPE_BY_LAYER[3 - layer];
        if (layer === 3) {
            this.bitrate = (version === 3) ? MpegReader.BITRATE_V1_L1[bitrateIndex - 1] :
                MpegReader.BITRATE_V2_L1[bitrateIndex - 1];
            this.samplesPerFrame = 384;
            this.currentFrameSize = Math.floor(this.samplesPerFrame * (this.bitrate * 1000 / 8) / this.sampleRate) + padding;
        }
        else {
            if (version === 3) {
                this.bitrate = (layer === 2) ? MpegReader.BITRATE_V1_L2[bitrateIndex - 1] :
                    MpegReader.BITRATE_V1_L3[bitrateIndex - 1];
                this.samplesPerFrame = 1152;
                this.currentFrameSize = Math.floor(this.samplesPerFrame * (this.bitrate * 1000 / 8) / this.sampleRate) + padding;
            }
            else {
                // Version 2 or 2.5.
                this.bitrate = MpegReader.BITRATE_V2[bitrateIndex - 1];
                this.samplesPerFrame = (layer === 1) ? 576 : 1152;
                this.currentFrameSize = Math.floor(this.samplesPerFrame * (this.bitrate * 1000 / 8) / this.sampleRate) + padding;
            }
        }
        this.frameDuration = (1000000 * this.samplesPerFrame) / this.sampleRate;
        return true;
    };
    MpegReader.prototype.readFrame = function () {
        if ((this.dataBuffer.byteLength - this.dataOffset) < (MpegReader.HEADER_SIZE + this.currentFrameSize)) {
            return 0;
        }
        this.state = State.FIND_SYNC;
        this.frames.push(new frame_1.Frame(frame_1.Frame.IDR_FRAME, this.timeUs, this.currentFrameSize));
        this.timeUs = this.timeUs + this.frameDuration;
        return MpegReader.HEADER_SIZE + this.currentFrameSize;
    };
    MpegReader.HEADER_SIZE = 4;
    MpegReader.SAMPLING_RATE_V1 = [44100, 48000, 32000];
    MpegReader.BITRATE_V1_L1 = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448];
    MpegReader.BITRATE_V2_L1 = [32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256];
    MpegReader.BITRATE_V1_L2 = [32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384];
    MpegReader.BITRATE_V1_L3 = [32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
    MpegReader.BITRATE_V2 = [8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
    MpegReader.MIME_TYPE_BY_LAYER = ['mpeg-L1', 'mpeg-L2', 'mpeg'];
    return MpegReader;
}(payload_reader_1.PayloadReader));
exports.MpegReader = MpegReader;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var atom_1 = __webpack_require__(0);
var ftyp_1 = __webpack_require__(74);
var stsd_1 = __webpack_require__(75);
var avc1_1 = __webpack_require__(76);
var avcC_1 = __webpack_require__(77);
var mvhd_1 = __webpack_require__(78);
var trex_1 = __webpack_require__(79);
var tkhd_1 = __webpack_require__(80);
var mdhd_1 = __webpack_require__(81);
var hdlr_1 = __webpack_require__(82);
var vmhd_1 = __webpack_require__(83);
var dref_1 = __webpack_require__(84);
var stts_1 = __webpack_require__(85);
var stsc_1 = __webpack_require__(86);
var stsz_1 = __webpack_require__(87);
var stco_1 = __webpack_require__(88);
var smhd_1 = __webpack_require__(89);
var mp4a_1 = __webpack_require__(90);
var esds_1 = __webpack_require__(92);
var sidx_1 = __webpack_require__(93);
var tfhd_1 = __webpack_require__(94);
var tfdt_1 = __webpack_require__(95);
var trun_1 = __webpack_require__(42);
var mfhd_1 = __webpack_require__(96);
var mdat_1 = __webpack_require__(97);
var emsg_1 = __webpack_require__(98);
var styp_1 = __webpack_require__(99);
var pssh_1 = __webpack_require__(100);
var hvcC_1 = __webpack_require__(101);
var hvc1_1 = __webpack_require__(103);
var hev1_1 = __webpack_require__(104);
var stss_1 = __webpack_require__(105);
var ctts_1 = __webpack_require__(106);
exports.boxesParsers = {};
// Q: can this generalized or abstracted as opposed to explicit registration?
exports.boxesParsers[atom_1.Atom.ftyp] = ftyp_1.Ftyp.parse;
exports.boxesParsers[atom_1.Atom.stsd] = stsd_1.Stsd.parse;
exports.boxesParsers[atom_1.Atom.avc1] = avc1_1.Avc1.parse;
exports.boxesParsers[atom_1.Atom.avcC] = avcC_1.AvcC.parse;
exports.boxesParsers[atom_1.Atom.mvhd] = mvhd_1.Mvhd.parse;
exports.boxesParsers[atom_1.Atom.trex] = trex_1.Trex.parse;
exports.boxesParsers[atom_1.Atom.tkhd] = tkhd_1.Tkhd.parse;
exports.boxesParsers[atom_1.Atom.mdhd] = mdhd_1.Mdhd.parse;
exports.boxesParsers[atom_1.Atom.hdlr] = hdlr_1.Hdlr.parse;
exports.boxesParsers[atom_1.Atom.vmhd] = vmhd_1.Vmhd.parse;
exports.boxesParsers[atom_1.Atom.dref] = dref_1.Dref.parse;
exports.boxesParsers[atom_1.Atom.stts] = stts_1.Stts.parse;
exports.boxesParsers[atom_1.Atom.stss] = stss_1.Stss.parse;
exports.boxesParsers[atom_1.Atom.stsc] = stsc_1.Stsc.parse;
exports.boxesParsers[atom_1.Atom.stsz] = stsz_1.Stsz.parse;
exports.boxesParsers[atom_1.Atom.ctts] = ctts_1.Ctts.parse;
exports.boxesParsers[atom_1.Atom.stco] = stco_1.Stco.parse;
exports.boxesParsers[atom_1.Atom.smhd] = smhd_1.Smhd.parse;
exports.boxesParsers[atom_1.Atom.mp4a] = mp4a_1.Mp4a.parse;
exports.boxesParsers[atom_1.Atom.esds] = esds_1.Esds.parse;
exports.boxesParsers[atom_1.Atom.sidx] = sidx_1.Sidx.parse;
exports.boxesParsers[atom_1.Atom.tfhd] = tfhd_1.Tfhd.parse;
exports.boxesParsers[atom_1.Atom.tfdt] = tfdt_1.Tfdt.parse;
exports.boxesParsers[atom_1.Atom.trun] = trun_1.Trun.parse;
exports.boxesParsers[atom_1.Atom.mfhd] = mfhd_1.Mfhd.parse;
exports.boxesParsers[atom_1.Atom.mdat] = mdat_1.Mdat.parse;
exports.boxesParsers[atom_1.Atom.emsg] = emsg_1.Emsg.parse;
exports.boxesParsers[atom_1.Atom.styp] = styp_1.Styp.parse;
exports.boxesParsers[atom_1.Atom.pssh] = pssh_1.Pssh.parse;
exports.boxesParsers[atom_1.Atom.hvcC] = hvcC_1.HvcC.parse;
exports.boxesParsers[atom_1.Atom.hvc1] = hvc1_1.Hvc1.parse;
exports.boxesParsers[atom_1.Atom.hev1] = hev1_1.Hev1.parse;


/***/ }),
/* 74 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Ftyp = /** @class */ (function (_super) {
    __extends(Ftyp, _super);
    function Ftyp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ftyp.parse = function (data) {
        var ftyp = new Ftyp(atom_1.Atom.ftyp, data.byteLength);
        ftyp.majorBrand = byte_parser_utils_1.default.parseIsoBoxType(data, 0);
        ftyp.minorVersion = byte_parser_utils_1.default.parseUint32(data, 4);
        ftyp.compatibleBrands = [];
        var i = 8;
        while (i < data.byteLength) {
            ftyp.compatibleBrands.push(byte_parser_utils_1.default.parseIsoBoxType(data, i));
            i += 4;
        }
        return ftyp;
    };
    return Ftyp;
}(atom_1.Atom));
exports.Ftyp = Ftyp;


/***/ }),
/* 75 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Stsd = /** @class */ (function (_super) {
    __extends(Stsd, _super);
    function Stsd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stsd.parse = function (data) {
        var stsd = new Stsd(atom_1.Atom.stsd, data.byteLength);
        stsd.containerDataOffset = 8;
        stsd.version = data[0];
        stsd.flags = data.subarray(1, 4);
        stsd.entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        return stsd;
    };
    return Stsd;
}(atom_1.ContainerAtom));
exports.Stsd = Stsd;


/***/ }),
/* 76 */
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
var atom_1 = __webpack_require__(0);
var video_atom_1 = __webpack_require__(23);
var Avc1 = /** @class */ (function (_super) {
    __extends(Avc1, _super);
    function Avc1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avc1.parse = function (data) {
        var atom = new Avc1(atom_1.Atom.avc1, data.byteLength);
        video_atom_1.VideoAtom.fillVideoAtom(atom, data);
        return atom;
    };
    return Avc1;
}(video_atom_1.VideoAtom));
exports.Avc1 = Avc1;


/***/ }),
/* 77 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var sps_parser_1 = __webpack_require__(37);
var AvcC = /** @class */ (function (_super) {
    __extends(AvcC, _super);
    function AvcC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvcC.parse = function (data) {
        var avcC = new AvcC(atom_1.Atom.avcC, data.byteLength);
        avcC.data = data;
        avcC.version = data[0];
        avcC.profile = data[1];
        avcC.profileCompatibility = data[2];
        avcC.level = data[3];
        avcC.lengthSizeMinusOne = data[4] & 0x03;
        avcC.numOfSequenceParameterSets = data[5] & 0x1f;
        avcC.sps = [];
        avcC.spsParsed = [];
        var offset = 6;
        for (var i_1 = 0; i_1 < avcC.numOfSequenceParameterSets; i_1++) {
            var spsSize = byte_parser_utils_1.default.parseUint16(data, offset);
            offset += 2;
            var sps = new Uint8Array(data.subarray(offset, offset + spsSize));
            avcC.sps.push(sps);
            offset += spsSize;
            avcC.spsParsed.push(sps_parser_1.SPSParser.parseSPS(sps.subarray(1, spsSize)));
        }
        avcC.numOfPictureParameterSets = data[offset] & 0x1f;
        avcC.pps = [];
        offset++;
        for (var i_2 = 0; i_2 < avcC.numOfPictureParameterSets; i_2++) {
            var ppsSize = byte_parser_utils_1.default.parseUint16(data, offset);
            offset += 2;
            avcC.pps.push(new Uint8Array(data.subarray(offset, offset + ppsSize)));
            offset += ppsSize;
        }
        return avcC;
    };
    return AvcC;
}(atom_1.Atom));
exports.AvcC = AvcC;


/***/ }),
/* 78 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Mvhd = /** @class */ (function (_super) {
    __extends(Mvhd, _super);
    function Mvhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mvhd.parse = function (data) {
        var mvhd = new Mvhd(atom_1.Atom.mvhd, data.byteLength);
        mvhd.version = data[0];
        mvhd.flags = data.subarray(1, 4);
        var offset = 4;
        if (mvhd.version === 1) {
            offset += 4;
            mvhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 8;
            mvhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mvhd.timescale = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 8;
            mvhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        else {
            mvhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mvhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mvhd.timescale = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
            mvhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        offset += 4;
        mvhd.rate = byte_parser_utils_1.default.parseUint16(data, offset) +
            byte_parser_utils_1.default.parseUint16(data, offset + 2) / 16;
        offset += 4;
        mvhd.volume = data[offset] + data[offset + 1] / 8;
        offset += 12;
        mvhd.matrix = new Uint32Array(data.subarray(offset, offset + (9 * 4)));
        offset += 9 * 4;
        mvhd.previewtime = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.previewDuration = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.posterTime = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.selectionTime = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.selectionDuration = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.currentTime = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        mvhd.nextTrackId = byte_parser_utils_1.default.parseUint32(data, offset);
        return mvhd;
    };
    return Mvhd;
}(atom_1.Atom));
exports.Mvhd = Mvhd;


/***/ }),
/* 79 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Trex = /** @class */ (function (_super) {
    __extends(Trex, _super);
    function Trex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trex.parse = function (data) {
        var trex = new Trex(atom_1.Atom.trex, data.byteLength);
        trex.version = data[0];
        trex.flags = new Uint8Array(data.subarray(1, 4)),
            trex.trackId = byte_parser_utils_1.default.parseUint32(data, 4),
            trex.defaultSampleDescriptionIndex = byte_parser_utils_1.default.parseUint32(data, 8);
        trex.defaultSampleDuration = byte_parser_utils_1.default.parseUint32(data, 12);
        trex.defaultSampleSize = byte_parser_utils_1.default.parseUint32(data, 16);
        trex.sampleDependsOn = data[20] & 0x03;
        trex.sampleIsDependedOn = (data[21] & 0xc0) >> 6;
        trex.sampleHasRedundancy = (data[21] & 0x30) >> 4;
        trex.samplePaddingValue = (data[21] & 0x0e) >> 1;
        trex.sampleIsDifferenceSample = !!(data[21] & 0x01);
        trex.sampleDegradationPriority = byte_parser_utils_1.default.parseUint32(data, 22);
        return trex;
    };
    return Trex;
}(atom_1.Atom));
exports.Trex = Trex;


/***/ }),
/* 80 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Tkhd = /** @class */ (function (_super) {
    __extends(Tkhd, _super);
    function Tkhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tkhd.parse = function (data) {
        var tkhd = new Tkhd(atom_1.Atom.tkhd, data.byteLength);
        tkhd.version = data[0];
        tkhd.flags = data.subarray(1, 4);
        var offset = 4;
        if (tkhd.version === 1) {
            offset += 4;
            tkhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 8;
            tkhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            tkhd.trackId = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 12;
            tkhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        else {
            tkhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            tkhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            tkhd.trackId = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 8;
            tkhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        offset += 12;
        tkhd.layer = byte_parser_utils_1.default.parseUint16(data, offset);
        offset += 2;
        tkhd.alternateGroup = byte_parser_utils_1.default.parseUint16(data, offset);
        offset += 2;
        tkhd.volume = data[offset] + (data[offset + 1] / 8);
        offset += 4;
        tkhd.matrix = new Uint32Array(data.subarray(offset, offset + (9 * 4)));
        offset += 9 * 4;
        tkhd.width = byte_parser_utils_1.default.parseUint16(data, offset) +
            (byte_parser_utils_1.default.parseUint16(data, offset + 2) / 16);
        offset += 4;
        tkhd.height = byte_parser_utils_1.default.parseUint16(data, offset) +
            (byte_parser_utils_1.default.parseUint16(data, offset + 2) / 16);
        return tkhd;
    };
    return Tkhd;
}(atom_1.Atom));
exports.Tkhd = Tkhd;


/***/ }),
/* 81 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Mdhd = /** @class */ (function (_super) {
    __extends(Mdhd, _super);
    function Mdhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mdhd.parse = function (data) {
        var mdhd = new Mdhd(atom_1.Atom.mdhd, data.byteLength);
        mdhd.version = data[0];
        mdhd.flags = data.subarray(1, 4);
        var offset = 4;
        if (mdhd.version === 1) {
            offset += 4;
            mdhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 8;
            mdhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mdhd.timescale = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 8;
            mdhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        else {
            mdhd.creationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mdhd.modificationTime = byte_parser_utils_1.default.parseIsoBoxDate(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
            mdhd.timescale = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
            mdhd.duration = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        offset += 4;
        var langVal = byte_parser_utils_1.default.parseUint16(data, offset);
        mdhd.language = '';
        mdhd.language += String.fromCharCode((langVal >> 10) + 0x60);
        mdhd.language += String.fromCharCode(((langVal & 0x03c0) >> 5) + 0x60);
        mdhd.language += String.fromCharCode((langVal & 0x1f) + 0x60);
        return mdhd;
    };
    return Mdhd;
}(atom_1.Atom));
exports.Mdhd = Mdhd;


/***/ }),
/* 82 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Hdlr = /** @class */ (function (_super) {
    __extends(Hdlr, _super);
    function Hdlr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hdlr.parse = function (data) {
        var hdlr = new Hdlr(atom_1.Atom.hdlr, data.byteLength);
        hdlr.version = data[0];
        hdlr.flags = data.subarray(1, 4);
        hdlr.handlerType = byte_parser_utils_1.default.parseIsoBoxType(data, 8);
        // parse out the name field
        var name = '';
        for (var i_1 = 24; i_1 < data.byteLength; i_1++) {
            if (data[i_1] === 0x00) {
                i_1++;
                break;
            }
            name += String.fromCharCode(data[i_1]);
        }
        hdlr.name = decodeURIComponent(name);
        return hdlr;
    };
    return Hdlr;
}(atom_1.Atom));
exports.Hdlr = Hdlr;


/***/ }),
/* 83 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Vmhd = /** @class */ (function (_super) {
    __extends(Vmhd, _super);
    function Vmhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vmhd.parse = function (data) {
        var vmhd = new Vmhd(atom_1.Atom.vmhd, data.byteLength);
        vmhd.version = data[0];
        vmhd.flags = data.subarray(1, 4);
        vmhd.graphichsMode = byte_parser_utils_1.default.parseUint16(data, 4);
        vmhd.opColor = new Uint16Array([
            byte_parser_utils_1.default.parseUint16(data, 6),
            byte_parser_utils_1.default.parseUint16(data, 8),
            byte_parser_utils_1.default.parseUint16(data, 10)
        ]);
        return vmhd;
    };
    return Vmhd;
}(atom_1.Atom));
exports.Vmhd = Vmhd;


/***/ }),
/* 84 */
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
var atom_1 = __webpack_require__(0);
var Dref = /** @class */ (function (_super) {
    __extends(Dref, _super);
    function Dref() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dref.parse = function (data) {
        var dref = new Dref(atom_1.Atom.dref, data.byteLength);
        dref.containerDataOffset = 8;
        dref.version = data[0];
        dref.flags = data.subarray(1, 4);
        return dref;
    };
    return Dref;
}(atom_1.ContainerAtom));
exports.Dref = Dref;


/***/ }),
/* 85 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var TimeToSampleEntry = /** @class */ (function () {
    function TimeToSampleEntry(sampleCount, sampleDelta) {
        this.sampleCount = sampleCount;
        this.sampleDelta = sampleDelta;
    }
    return TimeToSampleEntry;
}());
exports.TimeToSampleEntry = TimeToSampleEntry;
var Stts = /** @class */ (function (_super) {
    __extends(Stts, _super);
    function Stts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeToSamples = [];
        return _this;
    }
    Stts.parse = function (data) {
        var stts = new Stts(atom_1.Atom.stts, data.byteLength);
        stts.version = data[0];
        stts.flags = data.subarray(1, 4);
        stts.timeToSamples = [];
        var entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        for (var i_1 = 0; i_1 < entryCount; i_1++) {
            stts.timeToSamples.push(new TimeToSampleEntry(byte_parser_utils_1.default.parseUint32(data, offset), byte_parser_utils_1.default.parseUint32(data, offset + 4)));
            offset += 8;
        }
        return stts;
    };
    return Stts;
}(atom_1.Atom));
exports.Stts = Stts;


/***/ }),
/* 86 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var SampleToChunkEntry = /** @class */ (function () {
    function SampleToChunkEntry(firstChunk, samplesPerChunk, sampleDescriptionIndex) {
        this.firstChunk = firstChunk;
        this.samplesPerChunk = samplesPerChunk;
        this.sampleDescriptionIndex = sampleDescriptionIndex;
    }
    return SampleToChunkEntry;
}());
exports.SampleToChunkEntry = SampleToChunkEntry;
var Stsc = /** @class */ (function (_super) {
    __extends(Stsc, _super);
    function Stsc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stsc.parse = function (data) {
        var stsc = new Stsc(atom_1.Atom.stsc, data.byteLength);
        stsc.version = data[0];
        stsc.flags = data.subarray(1, 4);
        stsc.sampleToChunks = [];
        var entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        for (var i_1 = 0; i_1 < entryCount; i_1++) {
            stsc.sampleToChunks.push(new SampleToChunkEntry(byte_parser_utils_1.default.parseUint32(data, offset), byte_parser_utils_1.default.parseUint32(data, offset + 4), byte_parser_utils_1.default.parseUint32(data, offset + 8)));
            offset += 12;
        }
        return stsc;
    };
    return Stsc;
}(atom_1.Atom));
exports.Stsc = Stsc;


/***/ }),
/* 87 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Stsz = /** @class */ (function (_super) {
    __extends(Stsz, _super);
    function Stsz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stsz.parse = function (data) {
        var stsz = new Stsz(atom_1.Atom.stsz, data.byteLength);
        stsz.version = data[0];
        stsz.flags = data.subarray(1, 4);
        stsz.sampleSize = byte_parser_utils_1.default.parseUint32(data, 4);
        stsz.entries = [];
        for (var i_1 = 12; i_1 < data.byteLength; i_1 += 4) {
            stsz.entries.push(byte_parser_utils_1.default.parseUint32(data, i_1));
        }
        return stsz;
    };
    return Stsz;
}(atom_1.Atom));
exports.Stsz = Stsz;


/***/ }),
/* 88 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Stco = /** @class */ (function (_super) {
    __extends(Stco, _super);
    function Stco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stco.parse = function (data) {
        var stco = new Stco(atom_1.Atom.stco, data.byteLength);
        stco.version = data[0];
        stco.flags = data.subarray(1, 4);
        stco.chunkOffsets = [];
        var entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        for (var i_1 = 0; i_1 < entryCount; i_1++) {
            stco.chunkOffsets.push(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 4;
        }
        return stco;
    };
    return Stco;
}(atom_1.Atom));
exports.Stco = Stco;


/***/ }),
/* 89 */
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
var atom_1 = __webpack_require__(0);
var Smhd = /** @class */ (function (_super) {
    __extends(Smhd, _super);
    function Smhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smhd.parse = function (data) {
        var smhd = new Smhd(atom_1.Atom.smhd, data.byteLength);
        smhd.version = data[0];
        smhd.flags = data.subarray(1, 4);
        smhd.balance = data[4] + data[5] / 256;
        return smhd;
    };
    return Smhd;
}(atom_1.Atom));
exports.Smhd = Smhd;


/***/ }),
/* 90 */
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
var atom_1 = __webpack_require__(0);
var audio_atom_1 = __webpack_require__(91);
var Mp4a = /** @class */ (function (_super) {
    __extends(Mp4a, _super);
    function Mp4a() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mp4a.parse = function (data) {
        var atom = new Mp4a(atom_1.Atom.mp4a, data.byteLength);
        audio_atom_1.AudioAtom.fillAudioAtom(atom, data);
        return atom;
    };
    return Mp4a;
}(audio_atom_1.AudioAtom));
exports.Mp4a = Mp4a;


/***/ }),
/* 91 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var AudioAtom = /** @class */ (function (_super) {
    __extends(AudioAtom, _super);
    function AudioAtom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioAtom.fillAudioAtom = function (atom, data) {
        atom.containerDataOffset = 28;
        atom.dataReferenceIndex = byte_parser_utils_1.default.parseUint16(data, 6);
        atom.channelCount = byte_parser_utils_1.default.parseUint16(data, 16);
        atom.sampleSize = byte_parser_utils_1.default.parseUint16(data, 18);
        atom.sampleRate = byte_parser_utils_1.default.parseUint16(data, 24) +
            (byte_parser_utils_1.default.parseUint16(data, 26) >>> 15);
        return atom;
    };
    return AudioAtom;
}(atom_1.ContainerAtom));
exports.AudioAtom = AudioAtom;


/***/ }),
/* 92 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var DecoderConfigDescriptor = /** @class */ (function () {
    function DecoderConfigDescriptor(tag, length, audioObjectType, samplingFrequencyIndex, channelConfiguration) {
        this.tag = tag;
        this.length = length;
        this.audioObjectType = audioObjectType;
        this.samplingFrequencyIndex = samplingFrequencyIndex;
        this.channelConfiguration = channelConfiguration;
    }
    return DecoderConfigDescriptor;
}());
exports.DecoderConfigDescriptor = DecoderConfigDescriptor;
var DecoderConfig = /** @class */ (function () {
    function DecoderConfig(objectProfileIndication, streamType, bufferSize, maxBitrate, avgBitrate, decoderConfigDescriptor) {
        this.objectProfileIndication = objectProfileIndication;
        this.streamType = streamType;
        this.bufferSize = bufferSize;
        this.maxBitrate = maxBitrate;
        this.avgBitrate = avgBitrate;
        this.decoderConfigDescriptor = decoderConfigDescriptor;
    }
    return DecoderConfig;
}());
exports.DecoderConfig = DecoderConfig;
var Esds = /** @class */ (function (_super) {
    __extends(Esds, _super);
    function Esds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Esds.parse = function (data) {
        var esds = new Esds(atom_1.Atom.esds, data.byteLength);
        esds.data = data;
        esds.version = data[0];
        esds.flags = data.subarray(1, 4);
        esds.esId = byte_parser_utils_1.default.parseUint16(data, 6);
        esds.streamPriority = data[8] & 0x1f;
        esds.decoderConfig = new DecoderConfig(data[11], (data[12] >>> 2) & 0x3f, (data[13] << 16) | (data[14] << 8) | data[15], byte_parser_utils_1.default.parseUint32(data, 16), byte_parser_utils_1.default.parseUint32(data, 20), new DecoderConfigDescriptor(data[24], data[25], (data[26] >>> 3) & 0x1f, ((data[26] & 0x07) << 1) | ((data[27] >>> 7) & 0x01), (data[27] >>> 3) & 0x0f));
        return esds;
    };
    return Esds;
}(atom_1.Atom));
exports.Esds = Esds;


/***/ }),
/* 93 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Reference = /** @class */ (function () {
    function Reference(type, size, subsegmentDuration, startsWithSap, sapType, sapDeltaTime) {
        this.type = type;
        this.size = size;
        this.subsegmentDuration = subsegmentDuration;
        this.startsWithSap = startsWithSap;
        this.sapType = sapType;
        this.sapDeltaTime = sapDeltaTime;
    }
    return Reference;
}());
exports.Reference = Reference;
var Sidx = /** @class */ (function (_super) {
    __extends(Sidx, _super);
    function Sidx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidx.parse = function (data) {
        var sidx = new Sidx(atom_1.Atom.sidx, data.byteLength);
        sidx.version = data[0];
        sidx.flags = data.subarray(1, 4);
        sidx.referenceId = byte_parser_utils_1.default.parseUint32(data, 4);
        sidx.timescale = byte_parser_utils_1.default.parseUint32(data, 8);
        var offset;
        if (sidx.version === 0) {
            sidx.earliestPresentationTime = byte_parser_utils_1.default.parseUint32(data, 12);
            sidx.firstOffset = byte_parser_utils_1.default.parseUint32(data, 16);
            offset = 20;
        }
        else {
            sidx.earliestPresentationTime = byte_parser_utils_1.default.parseLong64(data, 12);
            sidx.firstOffset = byte_parser_utils_1.default.parseLong64(data, 20);
            offset = 28;
        }
        offset += 2;
        var referenceCount = byte_parser_utils_1.default.parseUint16(data, offset);
        sidx.references = [];
        offset += 2;
        for (var i_1 = 0; i_1 < referenceCount; i_1++) {
            sidx.references.push(new Reference((data[offset] & 0x80) >>> 7, byte_parser_utils_1.default.parseUint32(data, offset) & 0x7FFFFFFF, byte_parser_utils_1.default.parseUint32(data, offset + 4), !!(data[offset + 8] & 0x80), (data[offset + 8] & 0x70) >>> 4, byte_parser_utils_1.default.parseUint32(data, offset + 8) & 0x0FFFFFFF));
            offset += 12;
        }
        return sidx;
    };
    return Sidx;
}(atom_1.Atom));
exports.Sidx = Sidx;


/***/ }),
/* 94 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Tfhd = /** @class */ (function (_super) {
    __extends(Tfhd, _super);
    function Tfhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tfhd.parse = function (data) {
        var tfhd = new Tfhd(atom_1.Atom.tfhd, data.byteLength);
        tfhd.version = data[0];
        tfhd.flags = data.subarray(1, 4);
        var baseDataOffsetPresent = !!(tfhd.flags[2] & 0x01);
        var sampleDescriptionIndexPresent = !!(tfhd.flags[2] & 0x02);
        var defaultSampleDurationPresent = !!(tfhd.flags[2] & 0x08);
        var defaultSampleSizePresent = !!(tfhd.flags[2] & 0x10);
        var defaultSampleFlagsPresent = !!(tfhd.flags[2] & 0x20);
        var offset = 8;
        if (baseDataOffsetPresent) {
            tfhd.baseDataOffset = byte_parser_utils_1.default.parseLong64(data, 12);
            offset += 8;
        }
        if (sampleDescriptionIndexPresent) {
            tfhd.sampleDescriptionIndex = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
        }
        if (defaultSampleDurationPresent) {
            tfhd.defaultSampleDuration = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
        }
        if (defaultSampleSizePresent) {
            tfhd.defaultSampleSize = byte_parser_utils_1.default.parseUint32(data, offset);
            offset += 4;
        }
        if (defaultSampleFlagsPresent) {
            tfhd.defaultSampleFlags = byte_parser_utils_1.default.parseUint32(data, offset);
        }
        return tfhd;
    };
    return Tfhd;
}(atom_1.Atom));
exports.Tfhd = Tfhd;


/***/ }),
/* 95 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Tfdt = /** @class */ (function (_super) {
    __extends(Tfdt, _super);
    function Tfdt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tfdt.parse = function (data) {
        var tfdt = new Tfdt(atom_1.Atom.tfdt, data.byteLength);
        tfdt.version = data[0];
        tfdt.flags = data.subarray(1, 4);
        tfdt.baseMediaDecodeTime = byte_parser_utils_1.default.parseUint32(data, 4);
        if (tfdt.version === 1) {
            tfdt.baseMediaDecodeTime *= Math.pow(2, 32);
            tfdt.baseMediaDecodeTime += byte_parser_utils_1.default.parseUint32(data, 8);
        }
        return tfdt;
    };
    return Tfdt;
}(atom_1.Atom));
exports.Tfdt = Tfdt;


/***/ }),
/* 96 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Mfhd = /** @class */ (function (_super) {
    __extends(Mfhd, _super);
    function Mfhd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mfhd.parse = function (data) {
        var mfhd = new Mfhd(atom_1.Atom.mfhd, data.byteLength);
        mfhd.version = data[0];
        mfhd.flags = data.subarray(1, 4);
        mfhd.sequenceNumber = byte_parser_utils_1.default.parseUint32(data, 4);
        return mfhd;
    };
    return Mfhd;
}(atom_1.Atom));
exports.Mfhd = Mfhd;


/***/ }),
/* 97 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var logger_1 = __webpack_require__(17);
var _a = logger_1.getLogger('Mdat'), log = _a.log, warn = _a.warn;
var Mdat = /** @class */ (function (_super) {
    __extends(Mdat, _super);
    function Mdat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mdat.parse = function (data) {
        var mdat = new Mdat(atom_1.Atom.mdat, data.byteLength);
        Mdat.parsePayload(data);
        return mdat;
    };
    Mdat.parsePayload = function (data) {
        var length;
        for (var i_1 = 0; i_1 + 4 < data.byteLength; i_1 += length) {
            length = byte_parser_utils_1.default.parseUint32(data, i_1);
            i_1 += 4;
            if (length <= 0) {
                //console.log('is this an H264 stream?');
                //continue;
                // let's break here since otherwise this crashes on AAC data
                warn('aborted parsing mdat');
                break;
            }
            var nalType = data[i_1] & 0x1F;
            // TODO: do something
        }
    };
    return Mdat;
}(atom_1.Atom));
exports.Mdat = Mdat;


/***/ }),
/* 98 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Emsg = /** @class */ (function (_super) {
    __extends(Emsg, _super);
    function Emsg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Emsg.parse = function (data) {
        var emsg = new Emsg(atom_1.Atom.emsg, data.byteLength);
        emsg.version = data[0];
        emsg.flags = data.subarray(1, 4);
        var i = 4;
        emsg.schemeIdUri = byte_parser_utils_1.default.parseNullTerminatedString(data, i, data.byteLength);
        i += emsg.schemeIdUri.length + 1;
        emsg.value = byte_parser_utils_1.default.parseNullTerminatedString(data, i, data.byteLength);
        i += emsg.value.length + 1;
        emsg.timescale = byte_parser_utils_1.default.parseUint32(data, i);
        i += 4;
        emsg.presentationTimeDelta = byte_parser_utils_1.default.parseUint32(data, i);
        i += 4;
        emsg.eventDuration = byte_parser_utils_1.default.parseUint32(data, i);
        i += 4;
        emsg.id = byte_parser_utils_1.default.parseUint32(data, i);
        i += 4;
        if (i < data.byteLength - 1) {
            emsg.data = data.subarray(i);
        }
        return emsg;
    };
    return Emsg;
}(atom_1.Atom));
exports.Emsg = Emsg;


/***/ }),
/* 99 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Styp = /** @class */ (function (_super) {
    __extends(Styp, _super);
    function Styp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Styp.parse = function (data) {
        var styp = new Styp(atom_1.Atom.styp, data.byteLength);
        styp.majorBrand = byte_parser_utils_1.default.parseIsoBoxType(data, 0);
        styp.minorVersion = byte_parser_utils_1.default.parseUint32(data, 4);
        styp.compatibleBrands = [];
        var i = 8;
        while (i < data.byteLength) {
            styp.compatibleBrands.push(byte_parser_utils_1.default.parseIsoBoxType(data, i));
            i += 4;
        }
        return styp;
    };
    return Styp;
}(atom_1.Atom));
exports.Styp = Styp;


/***/ }),
/* 100 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var Pssh = /** @class */ (function (_super) {
    __extends(Pssh, _super);
    function Pssh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pssh.parse = function (data) {
        var pssh = new Pssh(atom_1.Atom.pssh, data.byteLength);
        pssh.version = data[0];
        pssh.flags = data.subarray(1, 4);
        var offset = 4;
        pssh.systemId = data.subarray(offset, offset + 16);
        offset += 16;
        if (pssh.version > 0) {
            var count = byte_parser_utils_1.default.parseUint32(data, 4);
            offset += 4;
            pssh.kId = [];
            for (var i_1 = 0; i_1 < count; i_1++) {
                pssh.kId[i_1] = data.subarray(offset, offset + 16);
                offset += 16;
            }
        }
        var dataSize = byte_parser_utils_1.default.parseUint32(data, offset);
        offset += 4;
        if (dataSize > 0) {
            pssh.data = data.subarray(offset, offset + 16);
        }
        return pssh;
    };
    return Pssh;
}(atom_1.Atom));
exports.Pssh = Pssh;


/***/ }),
/* 101 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var nal_unit_1 = __webpack_require__(102);
var HvcC = /** @class */ (function (_super) {
    __extends(HvcC, _super);
    function HvcC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HvcC.parse = function (data) {
        var hvcC = new HvcC(atom_1.Atom.hvcC, data.byteLength);
        var aux;
        hvcC.version = data[0];
        aux = data[1];
        hvcC.profileSpace = aux >> 6;
        hvcC.tierFlag = (aux & 0x20) >> 5;
        hvcC.profileIdc = (aux & 0x1F);
        hvcC.profileCompatibility = byte_parser_utils_1.default.parseUint32(data, 2);
        hvcC.constraintIndicator = data.subarray(6, 12);
        hvcC.levelIdc = data[12];
        hvcC.spatialSegmentationIdc = byte_parser_utils_1.default.parseUint16(data, 13) & 0xFFF;
        hvcC.parallelismType = (data[15] & 0x3);
        hvcC.chromaFormat = (data[16] & 0x3);
        hvcC.bitDepthLumaMinus8 = (data[17] & 0x7);
        hvcC.bitDepthChromaMinus8 = (data[18] & 0x7);
        hvcC.avgFrameRate = byte_parser_utils_1.default.parseUint16(data, 19);
        aux = data[21];
        hvcC.constantFrameRate = (aux >> 6);
        hvcC.numTemporalLayers = (aux & 0XD) >> 3;
        hvcC.temporalIdNested = (aux & 0X4) >> 2;
        hvcC.lengthSizeMinusOne = (aux & 0X3);
        hvcC.nalUnitsArrays = [];
        var naluArraysCount = data[22];
        var offset = 23;
        for (var i_1 = 0; i_1 < naluArraysCount; i_1++) {
            aux = data[offset++];
            var completeness = (aux & 0x80) >> 7;
            var naluType = (aux & 0x3f);
            var nalusCount = byte_parser_utils_1.default.parseUint16(data, offset);
            offset += 2;
            var naluArray = new nal_unit_1.NalUnitsArray(!!completeness, naluType);
            hvcC.nalUnitsArrays.push(naluArray);
            for (var j = 0; j < nalusCount; j++) {
                var naluLen = byte_parser_utils_1.default.parseUint16(data, offset);
                offset += 2;
                var naluData = data.subarray(offset, offset + naluLen);
                offset += naluLen;
                var nalu = new nal_unit_1.NalUnit(naluType, naluData);
                naluArray.nalUnits.push(nalu);
            }
        }
        return hvcC;
    };
    return HvcC;
}(atom_1.Atom));
exports.HvcC = HvcC;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NalUnit = /** @class */ (function () {
    function NalUnit(type, data) {
        this.type = type;
        this.data = data;
    }
    return NalUnit;
}());
exports.NalUnit = NalUnit;
var NalUnitsArray = /** @class */ (function () {
    function NalUnitsArray(completeness, type) {
        this.completeness = completeness;
        this.type = type;
        this.nalUnits = [];
    }
    return NalUnitsArray;
}());
exports.NalUnitsArray = NalUnitsArray;


/***/ }),
/* 103 */
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
var atom_1 = __webpack_require__(0);
var video_atom_1 = __webpack_require__(23);
var Hvc1 = /** @class */ (function (_super) {
    __extends(Hvc1, _super);
    function Hvc1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hvc1.parse = function (data) {
        var atom = new Hvc1(atom_1.Atom.hvc1, data.byteLength);
        video_atom_1.VideoAtom.fillVideoAtom(atom, data);
        return atom;
    };
    return Hvc1;
}(video_atom_1.VideoAtom));
exports.Hvc1 = Hvc1;


/***/ }),
/* 104 */
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
var atom_1 = __webpack_require__(0);
var video_atom_1 = __webpack_require__(23);
var Hev1 = /** @class */ (function (_super) {
    __extends(Hev1, _super);
    function Hev1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hev1.parse = function (data) {
        var atom = new Hev1(atom_1.Atom.hev1, data.byteLength);
        video_atom_1.VideoAtom.fillVideoAtom(atom, data);
        return atom;
    };
    return Hev1;
}(video_atom_1.VideoAtom));
exports.Hev1 = Hev1;


/***/ }),
/* 105 */
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
var atom_1 = __webpack_require__(0);
var byte_parser_utils_1 = __webpack_require__(1);
var Stss = /** @class */ (function (_super) {
    __extends(Stss, _super);
    function Stss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.syncSampleNumbers = [];
        return _this;
    }
    Stss.parse = function (data) {
        var stss = new Stss(atom_1.Atom.stss, data.byteLength);
        stss.version = data[0];
        stss.flags = data.subarray(1, 4);
        var entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        for (var i_1 = 0; i_1 < entryCount; i_1++) {
            stss.syncSampleNumbers.push(byte_parser_utils_1.default.parseUint32(data, offset));
            offset += 8;
        }
        return stss;
    };
    return Stss;
}(atom_1.Atom));
exports.Stss = Stss;


/***/ }),
/* 106 */
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
var byte_parser_utils_1 = __webpack_require__(1);
var atom_1 = __webpack_require__(0);
var CTimeOffsetToSampleEntry = /** @class */ (function () {
    function CTimeOffsetToSampleEntry(sampleCount, sampleCTimeOffset) {
        this.sampleCount = sampleCount;
        this.sampleCTimeOffset = sampleCTimeOffset;
    }
    return CTimeOffsetToSampleEntry;
}());
exports.CTimeOffsetToSampleEntry = CTimeOffsetToSampleEntry;
var Ctts = /** @class */ (function (_super) {
    __extends(Ctts, _super);
    function Ctts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cTimeOffsetToSamples = [];
        return _this;
    }
    Ctts.parse = function (data) {
        var ctts = new Ctts(atom_1.Atom.ctts, data.byteLength);
        ctts.version = data[0];
        ctts.flags = data.subarray(1, 4);
        ctts.cTimeOffsetToSamples = [];
        var entryCount = byte_parser_utils_1.default.parseUint32(data, 4);
        var offset = 8;
        for (var i_1 = 0; i_1 < entryCount; i_1++) {
            ctts.cTimeOffsetToSamples.push(new CTimeOffsetToSampleEntry(byte_parser_utils_1.default.parseUint32(data, offset), byte_parser_utils_1.default.parseUint32(data, offset + 4)));
            offset += 8;
        }
        return ctts;
    };
    return Ctts;
}(atom_1.Atom));
exports.Ctts = Ctts;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__(10);
var timescale_1 = __webpack_require__(16);
var logger_1 = __webpack_require__(17);
var _a = logger_1.getLogger('Mp4SampleTable', logger_1.LoggerLevels.OFF), log = _a.log, debug = _a.debug;
var Mp4SampleTable = /** @class */ (function () {
    function Mp4SampleTable(_track) {
        this._track = _track;
        if (!_track) {
            throw new Error('Sample-table can not be created without a Track');
        }
    }
    Mp4SampleTable.prototype.digest = function () {
        var _this = this;
        debug('digesting sample table');
        var dts = 0;
        var frameCount = 0;
        var frames = [];
        var chunksDecompressed = [];
        var chunkOffsetsDecompressed = [];
        this.decodingTimestamps.timeToSamples.forEach(function (entry) {
            for (var i_1 = 0; i_1 < entry.sampleCount; i_1++) {
                var isSyncFrame = _this.syncSamples ? (_this.syncSamples.syncSampleNumbers.indexOf(frameCount + 1) >= 0) : false;
                var newFrame = new frame_1.Frame(isSyncFrame ? frame_1.Frame.IDR_FRAME : frame_1.Frame.P_FRAME, timescale_1.toMicroseconds(dts, _this._track.getTimescale()), _this.sampleSizes.sampleSize || _this.sampleSizes.entries[frameCount], timescale_1.toMicroseconds(entry.sampleDelta, _this._track.getTimescale()));
                newFrame.scaledDuration = entry.sampleDelta;
                newFrame.scaledDecodingTime = dts;
                newFrame.scaledPresentationTimeOffset = 0;
                newFrame.timescale = _this._track.getTimescale();
                frames.push(newFrame);
                frameCount++; // note: here we incr the count after using it as an ordinal index
                dts += entry.sampleDelta;
            }
        });
        frameCount = 0;
        this.compositionTimestampOffsets && this.compositionTimestampOffsets.cTimeOffsetToSamples.forEach(function (entry) {
            for (var i_2 = 0; i_2 < entry.sampleCount; i_2++) {
                frames[frameCount]
                    .setPresentationTimeOffsetUs(timescale_1.toMicroseconds(entry.sampleCTimeOffset, _this._track.getTimescale()));
                frames[frameCount].scaledPresentationTimeOffset = entry.sampleCTimeOffset;
                frameCount++; // note: here we incr the count after using it as an ordinal index
            }
        });
        frameCount = 0;
        this.samplesToChunkBox.sampleToChunks.forEach(function (sampleToChunkEntry, index) {
            // the sample-to-chunk box contains a compressed list
            // of possibly repeating properties (samplesPerChunk + sampleDescriptionIndex)
            // we need to decompress this information by looking at firstChunkIndex
            var chunksInThisEntry = 1;
            if (index < _this.samplesToChunkBox.sampleToChunks.length - 1) {
                chunksInThisEntry = _this.samplesToChunkBox.sampleToChunks[index + 1].firstChunk
                    - sampleToChunkEntry.firstChunk;
            }
            for (var i_3 = 0; i_3 < chunksInThisEntry; i_3++) {
                frameCount += _this.samplesToChunkBox.sampleToChunks[index].samplesPerChunk;
                chunksDecompressed.push(sampleToChunkEntry);
            }
        });
        if (frameCount !== frames.length) {
            throw new Error('Sample-to-chunk-list decompression yields inconsistent sample count. Input data may be corrupt.');
        }
        frameCount = 0;
        chunksDecompressed.forEach(function (chunkSampleInfo, index) {
            var sampleOffsetInChunk = 0;
            for (var i_4 = 0; i_4 < chunkSampleInfo.samplesPerChunk; i_4++) {
                var frame = frames[frameCount];
                frame.bytesOffset = _this.chunkOffsetBox.chunkOffsets[index];
                frame.bytesOffset += sampleOffsetInChunk;
                sampleOffsetInChunk += frame.size;
                frameCount++;
            }
        });
        // Finally, append all frames to our track
        frames.forEach(function (frame) {
            _this._track.appendFrame(frame);
        });
        log(frames);
    };
    return Mp4SampleTable;
}());
exports.Mp4SampleTable = Mp4SampleTable;
;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getEbmlElementInfo(id) {
    return schema[id] || { name: 'unknown', type: 'unknown' };
}
exports.getEbmlElementInfo = getEbmlElementInfo;
var schema = {
    '80': {
        'name': 'ChapterDisplay',
        'level': 4,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': true,
        'description': 'Contains all possible strings to use for the chapter display.'
    },
    '83': {
        'name': 'TrackType',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': '1-254',
        'description': 'A set of track types coded on 8 bits (1: video, 2: audio, 3: complex, 0x10: logo, 0x11: subtitle, 0x12: buttons, 0x20: control).'
    },
    '85': {
        'name': 'ChapString',
        'cppname': 'ChapterString',
        'level': 5,
        'type': '8',
        'mandatory': true,
        'minver': 1,
        'webm': true,
        'description': 'Contains the string to use as the chapter atom.'
    },
    '86': {
        'name': 'CodecID',
        'level': 3,
        'type': 's',
        'mandatory': true,
        'minver': 1,
        'description': 'An ID corresponding to the codec, see the codec page for more info.'
    },
    '88': {
        'name': 'FlagDefault',
        'cppname': 'TrackFlagDefault',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'default': '1',
        'range': '0-1',
        'description': 'Set if that track (audio, video or subs) SHOULD be active if no language found matches the user preference. (1 bit)'
    },
    '89': {
        'name': 'ChapterTrackNumber',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'description': 'UID of the Track to apply this chapter too. In the absense of a control track, choosing this chapter will select the listed Tracks and deselect unlisted tracks. Absense of this element indicates that the Chapter should be applied to any currently used Tracks.'
    },
    '91': {
        'name': 'ChapterTimeStart',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': true,
        'description': 'Timestamp of the start of Chapter (not scaled).'
    },
    '92': {
        'name': 'ChapterTimeEnd',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'description': 'Timestamp of the end of Chapter (timestamp excluded, not scaled).'
    },
    '96': {
        'name': 'CueRefTime',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 2,
        'webm': false,
        'description': 'Timestamp of the referenced Block.'
    },
    '97': {
        'name': 'CueRefCluster',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'webm': false,
        'description': 'The Position of the Cluster containing the referenced Block.'
    },
    '98': {
        'name': 'ChapterFlagHidden',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'range': '0-1',
        'description': 'If a chapter is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)'
    },
    '4254': {
        'name': 'ContentCompAlgo',
        'level': 6,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'br': [
            '',
            '',
            '',
            ''
        ],
        'del': [
            '1 - bzlib,',
            '2 - lzo1x'
        ],
        'description': 'The compression algorithm used. Algorithms that have been specified so far are: 0 - zlib,   3 - Header Stripping'
    },
    '4255': {
        'name': 'ContentCompSettings',
        'level': 6,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'Settings that might be needed by the decompressor. For Header Stripping (ContentCompAlgo=3), the bytes that were removed from the beggining of each frames of the track.'
    },
    '4282': {
        'name': 'DocType',
        'level': 1,
        'type': 's',
        'mandatory': true,
        'default': 'matroska',
        'minver': 1,
        'description': 'A string that describes the type of document that follows this EBML header. \'matroska\' in our case or \'webm\' for webm files.'
    },
    '4285': {
        'name': 'DocTypeReadVersion',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '1',
        'minver': 1,
        'description': 'The minimum DocType version an interpreter has to support to read this file.'
    },
    '4286': {
        'name': 'EBMLVersion',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '1',
        'minver': 1,
        'description': 'The version of EBML parser used to create the file.'
    },
    '4287': {
        'name': 'DocTypeVersion',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '1',
        'minver': 1,
        'description': 'The version of DocType interpreter used to create the file.'
    },
    '4444': {
        'name': 'SegmentFamily',
        'level': 2,
        'type': 'b',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'bytesize': 16,
        'description': 'A randomly generated unique ID that all segments related to each other must use (128 bits).'
    },
    '4461': {
        'name': 'DateUTC',
        'level': 2,
        'type': 'd',
        'minver': 1,
        'description': 'Date of the origin of timestamp (value 0), i.e. production date.'
    },
    '4484': {
        'name': 'TagDefault',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '1',
        'range': '0-1',
        'description': 'Indication to know if this is the default/original language to use for the given tag. (1 bit)'
    },
    '4485': {
        'name': 'TagBinary',
        'level': 4,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'The values of the Tag if it is binary. Note that this cannot be used in the same SimpleTag as TagString.'
    },
    '4487': {
        'name': 'TagString',
        'level': 4,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'The value of the Tag.'
    },
    '4489': {
        'name': 'Duration',
        'level': 2,
        'type': 'f',
        'minver': 1,
        'range': '> 0',
        'description': 'Duration of the segment (based on TimecodeScale).'
    },
    '4598': {
        'name': 'ChapterFlagEnabled',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '1',
        'range': '0-1',
        'description': 'Specify wether the chapter is enabled. It can be enabled/disabled by a Control Track. When disabled, the movie should skip all the content between the TimeStart and TimeEnd of this chapter (see flag notes). (1 bit)'
    },
    '4660': {
        'name': 'FileMimeType',
        'level': 3,
        'type': 's',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'MIME type of the file.'
    },
    '4661': {
        'name': 'FileUsedStartTime',
        'level': 3,
        'type': 'u',
        'divx': true,
        'description': 'DivX font extension'
    },
    '4662': {
        'name': 'FileUsedEndTime',
        'level': 3,
        'type': 'u',
        'divx': true,
        'description': 'DivX font extension'
    },
    '4675': {
        'name': 'FileReferral',
        'level': 3,
        'type': 'b',
        'webm': false,
        'description': 'A binary value that a track/codec can refer to when the attachment is needed.'
    },
    '5031': {
        'name': 'ContentEncodingOrder',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'Tells when this modification was used during encoding/muxing starting with 0 and counting upwards. The decoder/demuxer has to start with the highest order number it finds and work its way down. This value has to be unique over all ContentEncodingOrder elements in the segment.'
    },
    '5032': {
        'name': 'ContentEncodingScope',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '1',
        'range': 'not 0',
        'br': [
            '',
            '',
            ''
        ],
        'description': 'A bit field that describes which elements have been modified in this way. Values (big endian) can be OR\'ed. Possible values: 1 - all frame contents, 2 - the track\'s private data, 4 - the next ContentEncoding (next ContentEncodingOrder. Either the data inside ContentCompression and/or ContentEncryption)'
    },
    '5033': {
        'name': 'ContentEncodingType',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'br': [
            '',
            ''
        ],
        'description': 'A value describing what kind of transformation has been done. Possible values: 0 - compression, 1 - encryption'
    },
    '5034': {
        'name': 'ContentCompression',
        'level': 5,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'Settings describing the compression used. Must be present if the value of ContentEncodingType is 0 and absent otherwise. Each block must be decompressable even if no previous block is available in order not to prevent seeking.'
    },
    '5035': {
        'name': 'ContentEncryption',
        'level': 5,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'Settings describing the encryption used. Must be present if the value of ContentEncodingType is 1 and absent otherwise.'
    },
    '5378': {
        'name': 'CueBlockNumber',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '1',
        'range': 'not 0',
        'description': 'Number of the Block in the specified Cluster.'
    },
    '5654': {
        'name': 'ChapterStringUID',
        'level': 4,
        'type': '8',
        'mandatory': false,
        'minver': 3,
        'webm': true,
        'description': 'A unique string ID to identify the Chapter. Use for WebVTT cue identifier storage.'
    },
    '5741': {
        'name': 'WritingApp',
        'level': 2,
        'type': '8',
        'mandatory': true,
        'minver': 1,
        'description': 'Writing application (\'mkvmerge-0.3.3\').'
    },
    '5854': {
        'name': 'SilentTracks',
        'cppname': 'ClusterSilentTracks',
        'level': 2,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'The list of tracks that are not used in that part of the stream. It is useful when using overlay tracks on seeking. Then you should decide what track to use.'
    },
    '6240': {
        'name': 'ContentEncoding',
        'level': 4,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Settings for one content encoding like compression or encryption.'
    },
    '6264': {
        'name': 'BitDepth',
        'cppname': 'AudioBitDepth',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'range': 'not 0',
        'description': 'Bits per sample, mostly used for PCM.'
    },
    '6532': {
        'name': 'SignedElement',
        'level': 3,
        'type': 'b',
        'multiple': true,
        'webm': false,
        'description': 'An element ID whose data will be used to compute the signature.'
    },
    '6624': {
        'name': 'TrackTranslate',
        'level': 3,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'The track identification for the given Chapter Codec.'
    },
    '6911': {
        'name': 'ChapProcessCommand',
        'cppname': 'ChapterProcessCommand',
        'level': 5,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Contains all the commands associated to the Atom.'
    },
    '6922': {
        'name': 'ChapProcessTime',
        'cppname': 'ChapterProcessTime',
        'level': 6,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'Defines when the process command should be handled (0: during the whole chapter, 1: before starting playback, 2: after playback of the chapter).'
    },
    '6924': {
        'name': 'ChapterTranslate',
        'level': 2,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'A tuple of corresponding ID used by chapter codecs to represent this segment.'
    },
    '6933': {
        'name': 'ChapProcessData',
        'cppname': 'ChapterProcessData',
        'level': 6,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'Contains the command information. The data should be interpreted depending on the ChapProcessCodecID value. For ChapProcessCodecID = 1, the data correspond to the binary DVD cell pre/post commands.'
    },
    '6944': {
        'name': 'ChapProcess',
        'cppname': 'ChapterProcess',
        'level': 4,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Contains all the commands associated to the Atom.'
    },
    '6955': {
        'name': 'ChapProcessCodecID',
        'cppname': 'ChapterProcessCodecID',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'Contains the type of the codec used for the processing. A value of 0 means native Matroska processing (to be defined), a value of 1 means the DVD command set is used. More codec IDs can be added later.'
    },
    '7373': {
        'name': 'Tag',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Element containing elements specific to Tracks/Chapters.'
    },
    '7384': {
        'name': 'SegmentFilename',
        'level': 2,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'A filename corresponding to this segment.'
    },
    '7446': {
        'name': 'AttachmentLink',
        'cppname': 'TrackAttachmentLink',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'description': 'The UID of an attachment that is used by this codec.'
    },
    '258688': {
        'name': 'CodecName',
        'level': 3,
        'type': '8',
        'minver': 1,
        'description': 'A human-readable string specifying the codec.'
    },
    '18538067': {
        'name': 'Segment',
        'level': 0,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'This element contains all other top-level (level 1) elements. Typically a Matroska file is composed of 1 segment.'
    },
    '447a': {
        'name': 'TagLanguage',
        'level': 4,
        'type': 's',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': 'und',
        'description': 'Specifies the language of the tag specified, in the Matroska languages form.'
    },
    '45a3': {
        'name': 'TagName',
        'level': 4,
        'type': '8',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The name of the Tag that is going to be stored.'
    },
    '67c8': {
        'name': 'SimpleTag',
        'cppname': 'TagSimple',
        'level': 3,
        'recursive': true,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Contains general information about the target.'
    },
    '63c6': {
        'name': 'TagAttachmentUID',
        'level': 4,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'A unique ID to identify the Attachment(s) the tags belong to. If the value is 0 at this level, the tags apply to all the attachments in the Segment.'
    },
    '63c4': {
        'name': 'TagChapterUID',
        'level': 4,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'A unique ID to identify the Chapter(s) the tags belong to. If the value is 0 at this level, the tags apply to all chapters in the Segment.'
    },
    '63c9': {
        'name': 'TagEditionUID',
        'level': 4,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'A unique ID to identify the EditionEntry(s) the tags belong to. If the value is 0 at this level, the tags apply to all editions in the Segment.'
    },
    '63c5': {
        'name': 'TagTrackUID',
        'level': 4,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'A unique ID to identify the Track(s) the tags belong to. If the value is 0 at this level, the tags apply to all tracks in the Segment.'
    },
    '63ca': {
        'name': 'TargetType',
        'cppname': 'TagTargetType',
        'level': 4,
        'type': 's',
        'minver': 1,
        'webm': false,
        'strong': 'informational',
        'description': 'An  string that can be used to display the logical level of the target like \'ALBUM\', \'TRACK\', \'MOVIE\', \'CHAPTER\', etc (see TargetType).'
    },
    '68ca': {
        'name': 'TargetTypeValue',
        'cppname': 'TagTargetTypeValue',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'default': '50',
        'description': 'A number to indicate the logical level of the target (see TargetType).'
    },
    '63c0': {
        'name': 'Targets',
        'cppname': 'TagTargets',
        'level': 3,
        'type': 'm',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'Contain all UIDs where the specified meta data apply. It is empty to describe everything in the segment.'
    },
    '1254c367': {
        'name': 'Tags',
        'level': 1,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Element containing elements specific to Tracks/Chapters. A list of valid tags can be found here.'
    },
    '450d': {
        'name': 'ChapProcessPrivate',
        'cppname': 'ChapterProcessPrivate',
        'level': 5,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'Some optional data attached to the ChapProcessCodecID information. For ChapProcessCodecID = 1, it is the \'DVD level\' equivalent.'
    },
    '437e': {
        'name': 'ChapCountry',
        'cppname': 'ChapterCountry',
        'level': 5,
        'type': 's',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'The countries corresponding to the string, same 2 octets as in Internet domains.'
    },
    '437c': {
        'name': 'ChapLanguage',
        'cppname': 'ChapterLanguage',
        'level': 5,
        'type': 's',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': true,
        'default': 'eng',
        'description': 'The languages corresponding to the string, in the bibliographic ISO-639-2 form.'
    },
    '8f': {
        'name': 'ChapterTrack',
        'level': 4,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'List of tracks on which the chapter applies. If this element is not present, all tracks apply'
    },
    '63c3': {
        'name': 'ChapterPhysicalEquiv',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'description': 'Specify the physical equivalent of this ChapterAtom like \'DVD\' (60) or \'SIDE\' (50), see complete list of values.'
    },
    '6ebc': {
        'name': 'ChapterSegmentEditionUID',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'description': 'The EditionUID to play from the segment linked in ChapterSegmentUID.'
    },
    '6e67': {
        'name': 'ChapterSegmentUID',
        'level': 4,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'range': '>0',
        'bytesize': 16,
        'description': 'A segment to play in place of this chapter. Edition ChapterSegmentEditionUID should be used for this segment, otherwise no edition is used.'
    },
    '73c4': {
        'name': 'ChapterUID',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': true,
        'range': 'not 0',
        'description': 'A unique ID to identify the Chapter.'
    },
    'b6': {
        'name': 'ChapterAtom',
        'level': 3,
        'recursive': true,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': true,
        'description': 'Contains the atom information to use as the chapter atom (apply to all tracks).'
    },
    '45dd': {
        'name': 'EditionFlagOrdered',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'default': '0',
        'range': '0-1',
        'description': 'Specify if the chapters can be defined multiple times and the order to play them is enforced. (1 bit)'
    },
    '45db': {
        'name': 'EditionFlagDefault',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'range': '0-1',
        'description': 'If a flag is set (1) the edition should be used as the default one. (1 bit)'
    },
    '45bd': {
        'name': 'EditionFlagHidden',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'range': '0-1',
        'description': 'If an edition is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)'
    },
    '45bc': {
        'name': 'EditionUID',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'description': 'A unique ID to identify the edition. It\'s useful for tagging an edition.'
    },
    '45b9': {
        'name': 'EditionEntry',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': true,
        'description': 'Contains all information about a segment edition.'
    },
    '1043a770': {
        'name': 'Chapters',
        'level': 1,
        'type': 'm',
        'minver': 1,
        'webm': true,
        'description': 'A system to define basic menus and partition data. For more detailed information, look at the Chapters Explanation.'
    },
    '46ae': {
        'name': 'FileUID',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'description': 'Unique ID representing the file, as random as possible.'
    },
    '465c': {
        'name': 'FileData',
        'level': 3,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The data of the file.'
    },
    '466e': {
        'name': 'FileName',
        'level': 3,
        'type': '8',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'Filename of the attached file.'
    },
    '467e': {
        'name': 'FileDescription',
        'level': 3,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'A human-friendly name for the attached file.'
    },
    '61a7': {
        'name': 'AttachedFile',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'An attached file.'
    },
    '1941a469': {
        'name': 'Attachments',
        'level': 1,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'Contain attached files.'
    },
    'eb': {
        'name': 'CueRefCodecState',
        'level': 5,
        'type': 'u',
        'webm': false,
        'default': '0',
        'description': 'The position of the Codec State corresponding to this referenced element. 0 means that the data is taken from the initial Track Entry.'
    },
    '535f': {
        'name': 'CueRefNumber',
        'level': 5,
        'type': 'u',
        'webm': false,
        'default': '1',
        'range': 'not 0',
        'description': 'Number of the referenced Block of Track X in the specified Cluster.'
    },
    'db': {
        'name': 'CueReference',
        'level': 4,
        'type': 'm',
        'multiple': true,
        'minver': 2,
        'webm': false,
        'description': 'The Clusters containing the required referenced Blocks.'
    },
    'ea': {
        'name': 'CueCodecState',
        'level': 4,
        'type': 'u',
        'minver': 2,
        'webm': false,
        'default': '0',
        'description': 'The position of the Codec State corresponding to this Cue element. 0 means that the data is taken from the initial Track Entry.'
    },
    'b2': {
        'name': 'CueDuration',
        'level': 4,
        'type': 'u',
        'mandatory': false,
        'minver': 4,
        'webm': false,
        'description': 'The duration of the block according to the segment time base. If missing the track\'s DefaultDuration does not apply and no duration information is available in terms of the cues.'
    },
    'f0': {
        'name': 'CueRelativePosition',
        'level': 4,
        'type': 'u',
        'mandatory': false,
        'minver': 4,
        'webm': false,
        'description': 'The relative position of the referenced block inside the cluster with 0 being the first possible position for an element inside that cluster.'
    },
    'f1': {
        'name': 'CueClusterPosition',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'description': 'The position of the Cluster containing the required Block.'
    },
    'f7': {
        'name': 'CueTrack',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': 'not 0',
        'description': 'The track for which a position is given.'
    },
    'b7': {
        'name': 'CueTrackPositions',
        'level': 3,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Contain positions for different tracks corresponding to the timestamp.'
    },
    'b3': {
        'name': 'CueTime',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'description': 'Absolute timestamp according to the segment time base.'
    },
    'bb': {
        'name': 'CuePoint',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Contains all information relative to a seek point in the segment.'
    },
    '1c53bb6b': {
        'name': 'Cues',
        'level': 1,
        'type': 'm',
        'minver': 1,
        'description': 'A top-level element to speed seeking access. All entries are local to the segment. Should be mandatory for non \'live\' streams.'
    },
    '47e6': {
        'name': 'ContentSigHashAlgo',
        'level': 6,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'default': '0',
        'br': [
            '',
            ''
        ],
        'description': 'The hash algorithm used for the signature. A value of \'0\' means that the contents have not been signed but only encrypted. Predefined values: 1 - SHA1-160 2 - MD5'
    },
    '47e5': {
        'name': 'ContentSigAlgo',
        'level': 6,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'default': '0',
        'br': '',
        'description': 'The algorithm used for the signature. A value of \'0\' means that the contents have not been signed but only encrypted. Predefined values: 1 - RSA'
    },
    '47e4': {
        'name': 'ContentSigKeyID',
        'level': 6,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'This is the ID of the private key the data was signed with.'
    },
    '47e3': {
        'name': 'ContentSignature',
        'level': 6,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'A cryptographic signature of the contents.'
    },
    '47e2': {
        'name': 'ContentEncKeyID',
        'level': 6,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'For public key algorithms this is the ID of the public key the the data was encrypted with.'
    },
    '47e1': {
        'name': 'ContentEncAlgo',
        'level': 6,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'default': '0',
        'br': '',
        'description': 'The encryption algorithm used. The value \'0\' means that the contents have not been encrypted but only signed. Predefined values: 1 - DES, 2 - 3DES, 3 - Twofish, 4 - Blowfish, 5 - AES'
    },
    '6d80': {
        'name': 'ContentEncodings',
        'level': 3,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'Settings for several content encoding mechanisms like compression or encryption.'
    },
    'c4': {
        'name': 'TrickMasterTrackSegmentUID',
        'level': 3,
        'type': 'b',
        'divx': true,
        'bytesize': 16,
        'description': 'DivX trick track extenstions'
    },
    'c7': {
        'name': 'TrickMasterTrackUID',
        'level': 3,
        'type': 'u',
        'divx': true,
        'description': 'DivX trick track extenstions'
    },
    'c6': {
        'name': 'TrickTrackFlag',
        'level': 3,
        'type': 'u',
        'divx': true,
        'default': '0',
        'description': 'DivX trick track extenstions'
    },
    'c1': {
        'name': 'TrickTrackSegmentUID',
        'level': 3,
        'type': 'b',
        'divx': true,
        'bytesize': 16,
        'description': 'DivX trick track extenstions'
    },
    'c0': {
        'name': 'TrickTrackUID',
        'level': 3,
        'type': 'u',
        'divx': true,
        'description': 'DivX trick track extenstions'
    },
    'ed': {
        'name': 'TrackJoinUID',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'multiple': true,
        'minver': 3,
        'webm': false,
        'range': 'not 0',
        'description': 'The trackUID number of a track whose blocks are used to create this virtual track.'
    },
    'e9': {
        'name': 'TrackJoinBlocks',
        'level': 4,
        'type': 'm',
        'minver': 3,
        'webm': false,
        'description': 'Contains the list of all tracks whose Blocks need to be combined to create this virtual track'
    },
    'e6': {
        'name': 'TrackPlaneType',
        'level': 6,
        'type': 'u',
        'mandatory': true,
        'minver': 3,
        'webm': false,
        'description': 'The kind of plane this track corresponds to (0: left eye, 1: right eye, 2: background).'
    },
    'e5': {
        'name': 'TrackPlaneUID',
        'level': 6,
        'type': 'u',
        'mandatory': true,
        'minver': 3,
        'webm': false,
        'range': 'not 0',
        'description': 'The trackUID number of the track representing the plane.'
    },
    'e4': {
        'name': 'TrackPlane',
        'level': 5,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 3,
        'webm': false,
        'description': 'Contains a video plane track that need to be combined to create this 3D track'
    },
    'e3': {
        'name': 'TrackCombinePlanes',
        'level': 4,
        'type': 'm',
        'minver': 3,
        'webm': false,
        'description': 'Contains the list of all video plane tracks that need to be combined to create this 3D track'
    },
    'e2': {
        'name': 'TrackOperation',
        'level': 3,
        'type': 'm',
        'minver': 3,
        'webm': false,
        'description': 'Operation that needs to be applied on tracks to create this virtual track. For more details look at the Specification Notes on the subject.'
    },
    '7d7b': {
        'name': 'ChannelPositions',
        'cppname': 'AudioPosition',
        'level': 4,
        'type': 'b',
        'webm': false,
        'description': 'Table of horizontal angles for each successive channel, see appendix.'
    },
    '9f': {
        'name': 'Channels',
        'cppname': 'AudioChannels',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'default': '1',
        'range': 'not 0',
        'description': 'Numbers of channels in the track.'
    },
    '78b5': {
        'name': 'OutputSamplingFrequency',
        'cppname': 'AudioOutputSamplingFreq',
        'level': 4,
        'type': 'f',
        'minver': 1,
        'default': 'Sampling Frequency',
        'range': '> 0',
        'description': 'Real output sampling frequency in Hz (used for SBR techniques).'
    },
    'b5': {
        'name': 'SamplingFrequency',
        'cppname': 'AudioSamplingFreq',
        'level': 4,
        'type': 'f',
        'mandatory': true,
        'minver': 1,
        'default': '8000.0',
        'range': '> 0',
        'description': 'Sampling frequency in Hz.'
    },
    'e1': {
        'name': 'Audio',
        'cppname': 'TrackAudio',
        'level': 3,
        'type': 'm',
        'minver': 1,
        'description': 'Audio settings.'
    },
    '2383e3': {
        'name': 'FrameRate',
        'cppname': 'VideoFrameRate',
        'level': 4,
        'type': 'f',
        'range': '> 0',
        'strong': 'Informational',
        'description': 'Number of frames per second.  only.'
    },
    '2fb523': {
        'name': 'GammaValue',
        'cppname': 'VideoGamma',
        'level': 4,
        'type': 'f',
        'webm': false,
        'range': '> 0',
        'description': 'Gamma Value.'
    },
    '2eb524': {
        'name': 'ColourSpace',
        'cppname': 'VideoColourSpace',
        'level': 4,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'bytesize': 4,
        'description': 'Same value as in AVI (32 bits).'
    },
    '54b3': {
        'name': 'AspectRatioType',
        'cppname': 'VideoAspectRatio',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'Specify the possible modifications to the aspect ratio (0: free resizing, 1: keep aspect ratio, 2: fixed).'
    },
    '54b2': {
        'name': 'DisplayUnit',
        'cppname': 'VideoDisplayUnit',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'How DisplayWidth & DisplayHeight should be interpreted (0: pixels, 1: centimeters, 2: inches, 3: Display Aspect Ratio).'
    },
    '54ba': {
        'name': 'DisplayHeight',
        'cppname': 'VideoDisplayHeight',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': 'PixelHeight',
        'range': 'not 0',
        'description': 'Height of the video frames to display. The default value is only valid when DisplayUnit is 0.'
    },
    '54b0': {
        'name': 'DisplayWidth',
        'cppname': 'VideoDisplayWidth',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': 'PixelWidth',
        'range': 'not 0',
        'description': 'Width of the video frames to display. The default value is only valid when DisplayUnit is 0.'
    },
    '54dd': {
        'name': 'PixelCropRight',
        'cppname': 'VideoPixelCropRight',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'The number of video pixels to remove on the right of the image.'
    },
    '54cc': {
        'name': 'PixelCropLeft',
        'cppname': 'VideoPixelCropLeft',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'The number of video pixels to remove on the left of the image.'
    },
    '54bb': {
        'name': 'PixelCropTop',
        'cppname': 'VideoPixelCropTop',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'The number of video pixels to remove at the top of the image.'
    },
    '54aa': {
        'name': 'PixelCropBottom',
        'cppname': 'VideoPixelCropBottom',
        'level': 4,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'description': 'The number of video pixels to remove at the bottom of the image (for HDTV content).'
    },
    'ba': {
        'name': 'PixelHeight',
        'cppname': 'VideoPixelHeight',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': 'not 0',
        'description': 'Height of the encoded video frames in pixels.'
    },
    'b0': {
        'name': 'PixelWidth',
        'cppname': 'VideoPixelWidth',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': 'not 0',
        'description': 'Width of the encoded video frames in pixels.'
    },
    '53b9': {
        'name': 'OldStereoMode',
        'level': 4,
        'type': 'u',
        'maxver': 0,
        'webm': false,
        'divx': false,
        'description': 'DEPRECATED, DO NOT USE. Bogus StereoMode value used in old versions of libmatroska. (0: mono, 1: right eye, 2: left eye, 3: both eyes).'
    },
    '53c0': {
        'name': 'AlphaMode',
        'cppname': 'VideoAlphaMode',
        'level': 4,
        'type': 'u',
        'minver': 3,
        'webm': true,
        'default': '0',
        'description': 'Alpha Video Mode. Presence of this element indicates that the BlockAdditional element could contain Alpha data.'
    },
    '53b8': {
        'name': 'StereoMode',
        'cppname': 'VideoStereoMode',
        'level': 4,
        'type': 'u',
        'minver': 3,
        'webm': true,
        'default': '0',
        'description': 'Stereo-3D video mode (0: mono, 1: side by side (left eye is first), 2: top-bottom (right eye is first), 3: top-bottom (left eye is first), 4: checkboard (right is first), 5: checkboard (left is first), 6: row interleaved (right is first), 7: row interleaved (left is first), 8: column interleaved (right is first), 9: column interleaved (left is first), 10: anaglyph (cyan/red), 11: side by side (right eye is first), 12: anaglyph (green/magenta), 13 both eyes laced in one Block (left eye is first), 14 both eyes laced in one Block (right eye is first)) . There are some more details on 3D support in the Specification Notes.'
    },
    '9a': {
        'name': 'FlagInterlaced',
        'cppname': 'VideoFlagInterlaced',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 2,
        'webm': true,
        'default': '0',
        'range': '0-1',
        'description': 'Set if the video is interlaced. (1 bit)'
    },
    'e0': {
        'name': 'Video',
        'cppname': 'TrackVideo',
        'level': 3,
        'type': 'm',
        'minver': 1,
        'description': 'Video settings.'
    },
    '66a5': {
        'name': 'TrackTranslateTrackID',
        'level': 4,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The binary value used to represent this track in the chapter codec data. The format depends on the ChapProcessCodecID used.'
    },
    '66bf': {
        'name': 'TrackTranslateCodec',
        'level': 4,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The chapter codec using this ID (0: Matroska Script, 1: DVD-menu).'
    },
    '66fc': {
        'name': 'TrackTranslateEditionUID',
        'level': 4,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Specify an edition UID on which this translation applies. When not specified, it means for all editions found in the segment.'
    },
    '56bb': {
        'name': 'SeekPreRoll',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'multiple': false,
        'default': '0',
        'minver': 4,
        'webm': true,
        'description': 'After a discontinuity, SeekPreRoll is the duration in nanoseconds of the data the decoder must decode before the decoded data is valid.'
    },
    '56aa': {
        'name': 'CodecDelay',
        'level': 3,
        'type': 'u',
        'multiple': false,
        'default': '0',
        'minver': 4,
        'webm': true,
        'description': 'CodecDelay is The codec-built-in delay in nanoseconds. This value must be subtracted from each block timestamp in order to get the actual timestamp. The value should be small so the muxing of tracks with the same actual timestamp are in the same Cluster.'
    },
    '6fab': {
        'name': 'TrackOverlay',
        'level': 3,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Specify that this track is an overlay track for the Track specified (in the u-integer). That means when this track has a gap (see SilentTracks) the overlay track should be used instead. The order of multiple TrackOverlay matters, the first one is the one that should be used. If not found it should be the second, etc.'
    },
    'aa': {
        'name': 'CodecDecodeAll',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 2,
        'webm': false,
        'default': '1',
        'range': '0-1',
        'description': 'The codec can decode potentially damaged data (1 bit).'
    },
    '26b240': {
        'name': 'CodecDownloadURL',
        'level': 3,
        'type': 's',
        'multiple': true,
        'webm': false,
        'description': 'A URL to download about the codec used.'
    },
    '3b4040': {
        'name': 'CodecInfoURL',
        'level': 3,
        'type': 's',
        'multiple': true,
        'webm': false,
        'description': 'A URL to find information about the codec used.'
    },
    '3a9697': {
        'name': 'CodecSettings',
        'level': 3,
        'type': '8',
        'webm': false,
        'description': 'A string describing the encoding setting used.'
    },
    '63a2': {
        'name': 'CodecPrivate',
        'level': 3,
        'type': 'b',
        'minver': 1,
        'description': 'Private data only known to the codec.'
    },
    '22b59c': {
        'name': 'Language',
        'cppname': 'TrackLanguage',
        'level': 3,
        'type': 's',
        'minver': 1,
        'default': 'eng',
        'description': 'Specifies the language of the track in the Matroska languages form.'
    },
    '536e': {
        'name': 'Name',
        'cppname': 'TrackName',
        'level': 3,
        'type': '8',
        'minver': 1,
        'description': 'A human-readable track name.'
    },
    '55ee': {
        'name': 'MaxBlockAdditionID',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'The maximum value of BlockAdditions for this track.'
    },
    '537f': {
        'name': 'TrackOffset',
        'level': 3,
        'type': 'i',
        'webm': false,
        'default': '0',
        'description': 'A value to add to the Block\'s Timestamp. This can be used to adjust the playback offset of a track.'
    },
    '23314f': {
        'name': 'TrackTimecodeScale',
        'level': 3,
        'type': 'f',
        'mandatory': true,
        'minver': 1,
        'maxver': 3,
        'webm': false,
        'default': '1.0',
        'range': '> 0',
        'description': 'DEPRECATED, DO NOT USE. The scale to apply on this track to work at normal speed in relation with other tracks (mostly used to adjust video speed when the audio length differs).'
    },
    '234e7a': {
        'name': 'DefaultDecodedFieldDuration',
        'cppname': 'TrackDefaultDecodedFieldDuration',
        'level': 3,
        'type': 'u',
        'minver': 4,
        'range': 'not 0',
        'description': 'The period in nanoseconds (not scaled by TimcodeScale)\nbetween two successive fields at the output of the decoding process (see the notes)'
    },
    '23e383': {
        'name': 'DefaultDuration',
        'cppname': 'TrackDefaultDuration',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'range': 'not 0',
        'description': 'Number of nanoseconds (not scaled via TimecodeScale) per frame (\'frame\' in the Matroska sense -- one element put into a (Simple)Block).'
    },
    '6df8': {
        'name': 'MaxCache',
        'cppname': 'TrackMaxCache',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'description': 'The maximum cache size required to store referenced frames in and the current frame. 0 means no cache is needed.'
    },
    '6de7': {
        'name': 'MinCache',
        'cppname': 'TrackMinCache',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'The minimum number of frames a player should be able to cache during playback. If set to 0, the reference pseudo-cache system is not used.'
    },
    '9c': {
        'name': 'FlagLacing',
        'cppname': 'TrackFlagLacing',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'default': '1',
        'range': '0-1',
        'description': 'Set if the track may contain blocks using lacing. (1 bit)'
    },
    '55aa': {
        'name': 'FlagForced',
        'cppname': 'TrackFlagForced',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'default': '0',
        'range': '0-1',
        'description': 'Set if that track MUST be active during playback. There can be many forced track for a kind (audio, video or subs), the player should select the one which language matches the user preference or the default + forced track. Overlay MAY happen between a forced and non-forced track of the same kind. (1 bit)'
    },
    'b9': {
        'name': 'FlagEnabled',
        'cppname': 'TrackFlagEnabled',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 2,
        'webm': true,
        'default': '1',
        'range': '0-1',
        'description': 'Set if the track is usable. (1 bit)'
    },
    '73c5': {
        'name': 'TrackUID',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': 'not 0',
        'description': 'A unique ID to identify the Track. This should be kept the same when making a direct stream copy of the Track to another file.'
    },
    'd7': {
        'name': 'TrackNumber',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'range': 'not 0',
        'description': 'The track number as used in the Block Header (using more than 127 tracks is not encouraged, though the design allows an unlimited number).'
    },
    'ae': {
        'name': 'TrackEntry',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Describes a track with all elements.'
    },
    '1654ae6b': {
        'name': 'Tracks',
        'level': 1,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'description': 'A top-level block of information with many tracks described.'
    },
    'af': {
        'name': 'EncryptedBlock',
        'level': 2,
        'type': 'b',
        'multiple': true,
        'webm': false,
        'description': 'Similar to EncryptedBlock Structure)'
    },
    'ca': {
        'name': 'ReferenceTimeCode',
        'level': 4,
        'type': 'u',
        'multiple': false,
        'mandatory': true,
        'minver': 0,
        'webm': false,
        'divx': true,
        'description': 'DivX trick track extenstions'
    },
    'c9': {
        'name': 'ReferenceOffset',
        'level': 4,
        'type': 'u',
        'multiple': false,
        'mandatory': true,
        'minver': 0,
        'webm': false,
        'divx': true,
        'description': 'DivX trick track extenstions'
    },
    'c8': {
        'name': 'ReferenceFrame',
        'level': 3,
        'type': 'm',
        'multiple': false,
        'minver': 0,
        'webm': false,
        'divx': true,
        'description': 'DivX trick track extenstions'
    },
    'cf': {
        'name': 'SliceDuration',
        'level': 5,
        'type': 'u',
        'default': '0',
        'description': 'The (scaled) duration to apply to the element.'
    },
    'ce': {
        'name': 'Delay',
        'cppname': 'SliceDelay',
        'level': 5,
        'type': 'u',
        'default': '0',
        'description': 'The (scaled) delay to apply to the element.'
    },
    'cb': {
        'name': 'BlockAdditionID',
        'cppname': 'SliceBlockAddID',
        'level': 5,
        'type': 'u',
        'default': '0',
        'description': 'The ID of the BlockAdditional element (0 is the main Block).'
    },
    'cd': {
        'name': 'FrameNumber',
        'cppname': 'SliceFrameNumber',
        'level': 5,
        'type': 'u',
        'default': '0',
        'description': 'The number of the frame to generate from this lace with this delay (allow you to generate many frames from the same Block/Frame).'
    },
    'cc': {
        'name': 'LaceNumber',
        'cppname': 'SliceLaceNumber',
        'level': 5,
        'type': 'u',
        'minver': 1,
        'default': '0',
        'divx': false,
        'description': 'The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc). While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback.'
    },
    'e8': {
        'name': 'TimeSlice',
        'level': 4,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'divx': false,
        'description': 'Contains extra time information about the data contained in the Block. While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback.'
    },
    '8e': {
        'name': 'Slices',
        'level': 3,
        'type': 'm',
        'minver': 1,
        'divx': false,
        'description': 'Contains slices description.'
    },
    '75a2': {
        'name': 'DiscardPadding',
        'level': 3,
        'type': 'i',
        'minver': 4,
        'webm': true,
        'description': 'Duration in nanoseconds of the silent data added to the Block (padding at the end of the Block for positive value, at the beginning of the Block for negative value). The duration of DiscardPadding is not calculated in the duration of the TrackEntry and should be discarded during playback.'
    },
    'a4': {
        'name': 'CodecState',
        'level': 3,
        'type': 'b',
        'minver': 2,
        'webm': false,
        'description': 'The new codec state to use. Data interpretation is private to the codec. This information should always be referenced by a seek entry.'
    },
    'fd': {
        'name': 'ReferenceVirtual',
        'level': 3,
        'type': 'i',
        'webm': false,
        'description': 'Relative position of the data that should be in position of the virtual block.'
    },
    'fb': {
        'name': 'ReferenceBlock',
        'level': 3,
        'type': 'i',
        'multiple': true,
        'minver': 1,
        'description': 'Timestamp of another frame used as a reference (ie: B or P frame). The timestamp is relative to the block its attached to.'
    },
    'fa': {
        'name': 'ReferencePriority',
        'cppname': 'FlagReferenced',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '0',
        'description': 'This frame is referenced and has the specified cache priority. In cache only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced.'
    },
    '9b': {
        'name': 'BlockDuration',
        'level': 3,
        'type': 'u',
        'minver': 1,
        'default': 'TrackDuration',
        'description': 'The duration of the Block (based on TimecodeScale). This element is mandatory when DefaultDuration is set for the track (but can be omitted as other default values). When not written and with no DefaultDuration, the value is assumed to be the difference between the timestamp of this Block and the timestamp of the next Block in \'display\' order (not coding order). This element can be useful at the end of a Track (as there is not other Block available), or when there is a break in a track like for subtitle tracks. When set to 0 that means the frame is not a keyframe.'
    },
    'a5': {
        'name': 'BlockAdditional',
        'level': 5,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'Interpreted by the codec as it wishes (using the BlockAddID).'
    },
    'ee': {
        'name': 'BlockAddID',
        'level': 5,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'default': '1',
        'range': 'not 0',
        'description': 'An ID to identify the BlockAdditional level.'
    },
    'a6': {
        'name': 'BlockMore',
        'level': 4,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Contain the BlockAdditional and some parameters.'
    },
    '75a1': {
        'name': 'BlockAdditions',
        'level': 3,
        'type': 'm',
        'minver': 1,
        'webm': false,
        'description': 'Contain additional blocks to complete the main one. An EBML parser that has no knowledge of the Block structure could still see and use/skip these data.'
    },
    'a2': {
        'name': 'BlockVirtual',
        'level': 3,
        'type': 'b',
        'webm': false,
        'description': 'A Block with no data. It must be stored in the stream at the place the real Block should be in display order. (see Block Virtual)'
    },
    'a1': {
        'name': 'Block',
        'level': 3,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'description': 'Block containing the actual data to be rendered and a timestamp relative to the Cluster Timecode. (see Block Structure)'
    },
    'a0': {
        'name': 'BlockGroup',
        'level': 2,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'description': 'Basic container of information containing a single Block or BlockVirtual, and information specific to that Block/VirtualBlock.'
    },
    'a3': {
        'name': 'SimpleBlock',
        'level': 2,
        'type': 'b',
        'multiple': true,
        'minver': 2,
        'webm': true,
        'divx': true,
        'description': 'Similar to SimpleBlock Structure)'
    },
    'ab': {
        'name': 'PrevSize',
        'cppname': 'ClusterPrevSize',
        'level': 2,
        'type': 'u',
        'minver': 1,
        'description': 'Size of the previous Cluster, in octets. Can be useful for backward playing.'
    },
    'a7': {
        'name': 'Position',
        'cppname': 'ClusterPosition',
        'level': 2,
        'type': 'u',
        'minver': 1,
        'webm': false,
        'description': 'The Position of the Cluster in the segment (0 in live broadcast streams). It might help to resynchronise offset on damaged streams.'
    },
    '58d7': {
        'name': 'SilentTrackNumber',
        'cppname': 'ClusterSilentTrackNumber',
        'level': 3,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'One of the track number that are not used from now on in the stream. It could change later if not specified as silent in a further Cluster.'
    },
    'e7': {
        'name': 'Timecode',
        'cppname': 'ClusterTimecode',
        'level': 2,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'description': 'Absolute timestamp of the cluster (based on TimecodeScale).'
    },
    '1f43b675': {
        'name': 'Cluster',
        'level': 1,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'description': 'The lower level element containing the (monolithic) Block structure.'
    },
    '4d80': {
        'name': 'MuxingApp',
        'level': 2,
        'type': '8',
        'mandatory': true,
        'minver': 1,
        'description': 'Muxing application or library (\'libmatroska-0.4.3\').'
    },
    '7ba9': {
        'name': 'Title',
        'level': 2,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'General name of the segment.'
    },
    '2ad7b2': {
        'name': 'TimecodeScaleDenominator',
        'level': 2,
        'type': 'u',
        'mandatory': true,
        'minver': 4,
        'default': '1000000000',
        'description': 'Timestamp scale numerator, see TimecodeScale.'
    },
    '2ad7b1': {
        'name': 'TimecodeScale',
        'level': 2,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'default': '1000000',
        'description': 'Timestamp scale in nanoseconds (1.000.000 means all timestamps in the segment are expressed in milliseconds).'
    },
    '69a5': {
        'name': 'ChapterTranslateID',
        'level': 3,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The binary value used to represent this segment in the chapter codec data. The format depends on the ChapProcessCodecID used.'
    },
    '69bf': {
        'name': 'ChapterTranslateCodec',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'webm': false,
        'description': 'The chapter codec using this ID (0: Matroska Script, 1: DVD-menu).'
    },
    '69fc': {
        'name': 'ChapterTranslateEditionUID',
        'level': 3,
        'type': 'u',
        'multiple': true,
        'minver': 1,
        'webm': false,
        'description': 'Specify an edition UID on which this correspondance applies. When not specified, it means for all editions found in the segment.'
    },
    '3e83bb': {
        'name': 'NextFilename',
        'level': 2,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'An escaped filename corresponding to the next segment.'
    },
    '3eb923': {
        'name': 'NextUID',
        'level': 2,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'bytesize': 16,
        'description': 'A unique ID to identify the next chained segment (128 bits).'
    },
    '3c83ab': {
        'name': 'PrevFilename',
        'level': 2,
        'type': '8',
        'minver': 1,
        'webm': false,
        'description': 'An escaped filename corresponding to the previous segment.'
    },
    '3cb923': {
        'name': 'PrevUID',
        'level': 2,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'bytesize': 16,
        'description': 'A unique ID to identify the previous chained segment (128 bits).'
    },
    '73a4': {
        'name': 'SegmentUID',
        'level': 2,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'range': 'not 0',
        'bytesize': 16,
        'description': 'A randomly generated unique ID to identify the current segment between many others (128 bits).'
    },
    '1549a966': {
        'name': 'Info',
        'level': 1,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Contains miscellaneous general information and statistics on the file.'
    },
    '53ac': {
        'name': 'SeekPosition',
        'level': 3,
        'type': 'u',
        'mandatory': true,
        'minver': 1,
        'description': 'The position of the element in the segment in octets (0 = first level 1 element).'
    },
    '53ab': {
        'name': 'SeekID',
        'level': 3,
        'type': 'b',
        'mandatory': true,
        'minver': 1,
        'description': 'The binary ID corresponding to the element name.'
    },
    '4dbb': {
        'name': 'Seek',
        'cppname': 'SeekPoint',
        'level': 2,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Contains a single seek entry to an EBML element.'
    },
    '114d9b74': {
        'name': 'SeekHead',
        'cppname': 'SeekHeader',
        'level': 1,
        'type': 'm',
        'multiple': true,
        'minver': 1,
        'description': 'Contains the position of other level 1 elements.'
    },
    '7e7b': {
        'name': 'SignatureElementList',
        'level': 2,
        'type': 'm',
        'multiple': true,
        'webm': false,
        'i': 'Cluster|Block|BlockAdditional',
        'description': 'A list consists of a number of consecutive elements that represent one case where data is used in signature. Ex:  means that the BlockAdditional of all Blocks in all Clusters is used for encryption.'
    },
    '7e5b': {
        'name': 'SignatureElements',
        'level': 1,
        'type': 'm',
        'webm': false,
        'description': 'Contains elements that will be used to compute the signature.'
    },
    '7eb5': {
        'name': 'Signature',
        'level': 1,
        'type': 'b',
        'webm': false,
        'description': 'The signature of the data (until a new.'
    },
    '7ea5': {
        'name': 'SignaturePublicKey',
        'level': 1,
        'type': 'b',
        'webm': false,
        'description': 'The public key to use with the algorithm (in the case of a PKI-based signature).'
    },
    '7e9a': {
        'name': 'SignatureHash',
        'level': 1,
        'type': 'u',
        'webm': false,
        'description': 'Hash algorithm used (1=SHA1-160, 2=MD5).'
    },
    '7e8a': {
        'name': 'SignatureAlgo',
        'level': 1,
        'type': 'u',
        'webm': false,
        'description': 'Signature algorithm used (1=RSA, 2=elliptic).'
    },
    '1b538667': {
        'name': 'SignatureSlot',
        'level': -1,
        'type': 'm',
        'multiple': true,
        'webm': false,
        'description': 'Contain signature of some (coming) elements in the stream.'
    },
    'bf': {
        'name': 'CRC-32',
        'level': -1,
        'type': 'b',
        'minver': 1,
        'webm': false,
        'description': 'The CRC is computed on all the data of the Master element it\'s in. The CRC element should be the first in it\'s parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian'
    },
    'ec': {
        'name': 'Void',
        'level': -1,
        'type': 'b',
        'minver': 1,
        'description': 'Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use.'
    },
    '42f3': {
        'name': 'EBMLMaxSizeLength',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '8',
        'minver': 1,
        'description': 'The maximum length of the sizes you\'ll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid.'
    },
    '42f2': {
        'name': 'EBMLMaxIDLength',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '4',
        'minver': 1,
        'description': 'The maximum length of the IDs you\'ll find in this file (4 or less in Matroska).'
    },
    '42f7': {
        'name': 'EBMLReadVersion',
        'level': 1,
        'type': 'u',
        'mandatory': true,
        'default': '1',
        'minver': 1,
        'description': 'The minimum EBML version a parser has to support to read this file.'
    },
    '1a45dfa3': {
        'name': 'EBML',
        'level': 0,
        'type': 'm',
        'mandatory': true,
        'multiple': true,
        'minver': 1,
        'description': 'Set the EBML characteristics of the data to follow. Each EBML document has to start with this.'
    }
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ebml_types_1 = __webpack_require__(44);
var EbmlParser = /** @class */ (function () {
    function EbmlParser() {
    }
    EbmlParser.readVint = function (buffer, start) {
        if (start === void 0) { start = 0; }
        var len = 1;
        for (; len <= 8; len++) {
            if (buffer[start] >= Math.pow(2, 8 - len)) {
                break;
            }
        }
        if (len > 8 || start + len > buffer.length) {
            return null;
        }
        var value = buffer[start] & (1 << (8 - len)) - 1;
        for (var i_1 = 1; i_1 < len; i_1++) {
            if (i_1 === 7) {
                if (value >= Math.pow(2, 53 - 8) && buffer[start + 7] > 0) {
                    return new ebml_types_1.Vint(-1, len);
                }
            }
            value *= Math.pow(2, 8);
            value += buffer[start + i_1];
        }
        return new ebml_types_1.Vint(value, len);
    };
    return EbmlParser;
}());
exports.EbmlParser = EbmlParser;


/***/ }),
/* 110 */
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
var track_1 = __webpack_require__(8);
var frame_1 = __webpack_require__(10);
var byte_parser_utils_1 = __webpack_require__(1);
var WebMTrack = /** @class */ (function (_super) {
    __extends(WebMTrack, _super);
    function WebMTrack(info, metadata) {
        var _this = this;
        var type = WebMTrack.getType(info.TrackType);
        var codec = info.CodecName || WebMTrack.getCodecNameFromID(info.CodecID);
        _this = _super.call(this, info.TrackNumber, type, type + '/' + codec) || this;
        _this.type = type;
        _this.codec = codec;
        _this.metadata = metadata;
        _this.lastPts = 0;
        _this.nsPerFrame = info.DefaultDuration;
        _this.lastTimecodeBase = 0;
        _this.timecodeScale = info.TrackTimecodeScale;
        return _this;
    }
    WebMTrack.getType = function (type) {
        switch (type) {
            case 1:
                return track_1.Track.TYPE_VIDEO;
            case 2:
                return track_1.Track.TYPE_AUDIO;
            case 3:
                return track_1.Track.TYPE_COMPLEX;
            case 0x10:
                return track_1.Track.TYPE_LOGO;
            case 0x11:
                return track_1.Track.TYPE_TEXT;
            case 0x12:
                return track_1.Track.TYPE_BUTTONS;
            case 0x20:
                return track_1.Track.TYPE_CONTROL;
            default:
                return track_1.Track.TYPE_UNKNOWN;
        }
    };
    WebMTrack.getCodecNameFromID = function (codecID) {
        if (!codecID) {
            return null;
        }
        var pos = codecID.indexOf('_');
        if (pos < 0) {
            return codecID;
        }
        return codecID.substr(pos + 1);
    };
    WebMTrack.prototype.getFrames = function () {
        return this.frames;
    };
    WebMTrack.prototype.getMetadata = function () {
        // We should probably rather try to come up with a generic data-model
        // or at least type this as a string-to-any hash...
        if (!this.metadata) {
            return null;
        }
        if (this.type === track_1.Track.TYPE_VIDEO) {
            return {
                codecSize: {
                    height: this.metadata.PixelHeight,
                    width: this.metadata.PixelWidth
                },
                presentSize: {
                    height: this.metadata.DisplayHeight,
                    width: this.metadata.DisplayWidth,
                }
            };
        }
        else if (this.type === track_1.Track.TYPE_AUDIO) {
            return {
                sampleRate: this.metadata.SamplingFrequency
            };
        }
    };
    WebMTrack.prototype.setTimecode = function (time) {
        this.lastTimecodeBase = time;
    };
    WebMTrack.prototype.processBlock = function (trackId, element) {
        var buffer = element.data;
        var timecode = byte_parser_utils_1.default.parseUint16(buffer, trackId.length);
        var flags = byte_parser_utils_1.default.parseUint(buffer, trackId.length + 2, 1);
        this.lastPts = 1000 * ((this.lastTimecodeBase + timecode) / (this.timecodeScale > 0 ? this.timecodeScale : 1));
        if (element.name === 'SimpleBlock' && flags & 0x80) {
            this.frames.push(new frame_1.Frame(frame_1.Frame.IDR_FRAME, this.lastPts, buffer.length));
        }
        else {
            this.frames.push(new frame_1.Frame(frame_1.Frame.P_FRAME, this.lastPts, buffer.length));
        }
    };
    return WebMTrack;
}(track_1.Track));
exports.WebMTrack = WebMTrack;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index = __webpack_require__(33);
var WebWorker = /** @class */ (function () {
    function WebWorker() {
    }
    WebWorker.createMp4DemuxJob = function (event) {
        var guid = WebWorker.createGuid();
        var demuxer = index.createMp4Demuxer();
        WebWorker.jobs.set(guid, demuxer);
        postMessage({
            type: index.InspectorActionType.CREATE_MP4_DEMUX_JOB_RESPONSE,
            job: guid,
            data: demuxer,
        });
    };
    WebWorker.createMpegTSDemuxJob = function (event) {
        var guid = WebWorker.createGuid();
        var demuxer = index.createMpegTSDemuxer();
        WebWorker.jobs.set(guid, demuxer);
        postMessage({
            type: index.InspectorActionType.CREATE_MPEGTS_DEMUX_JOB_RESPONSE,
            job: guid,
            data: demuxer,
        });
    };
    WebWorker.createWebMDemuxJob = function (event) {
        var guid = WebWorker.createGuid();
        var demuxer = index.createWebMDemuxer();
        WebWorker.jobs.set(guid, demuxer);
        postMessage({
            type: index.InspectorActionType.CREATE_WEBM_DEMUX_JOB_RESPONSE,
            job: guid,
            data: demuxer,
        });
    };
    WebWorker.executeJobAppend = function (event) {
        if (WebWorker.jobs.has(event.data.job)) {
            var demuxer = WebWorker.jobs.get(event.data.job);
            demuxer.append(event.data.data);
            postMessage({
                type: index.InspectorActionType.EXECUTE_JOB_APPEND_RESPONSE,
                job: event.data.job,
                data: demuxer,
            });
        }
    };
    WebWorker.endJob = function (event) {
        if (WebWorker.jobs.has(event.data.job)) {
            var demuxer = WebWorker.jobs.get(event.data.job);
            WebWorker.jobs.get(event.data.job).end();
            WebWorker.jobs.delete(event.data.job);
            postMessage({
                type: index.InspectorActionType.END_JOB_RESPONSE,
                job: event.data.job,
                data: demuxer,
            });
        }
    };
    WebWorker.createGuid = function () {
        return "" + this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
    };
    WebWorker.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    WebWorker.onMessage = (function (event) {
        if (event.data) {
            switch (event.data.type) {
                case index.InspectorActionType.CREATE_MP4_DEMUX_JOB:
                    WebWorker.createMp4DemuxJob(event);
                    break;
                case index.InspectorActionType.CREATE_MPEGTS_DEMUX_JOB:
                    WebWorker.createMpegTSDemuxJob(event);
                    break;
                case index.InspectorActionType.CREATE_WEBM_DEMUX_JOB:
                    WebWorker.createWebMDemuxJob(event);
                    break;
                case index.InspectorActionType.EXECUTE_JOB_APPEND:
                    WebWorker.executeJobAppend(event);
                    break;
                case index.InspectorActionType.END_JOB:
                    WebWorker.endJob(event);
                    break;
                default:
                    break;
            }
        }
    });
    WebWorker.jobs = new Map();
    return WebWorker;
}());
exports.WebWorker = WebWorker;


/***/ }),
/* 112 */
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
var processor_1 = __webpack_require__(4);
// global node-canvas instance, only for testing !
// const { createCanvas } = require('canvas')
// tslint:disable-next-line: no-var-keyword
var BroadwayPlayer = function () { };
// global SUPER DIRTY HACK for testing
BroadwayPlayer.prototype._createBasicCanvasObj = function (options) {
    console.log('create-canvas method overload');
    options = options || {};
    var obj = {};
    var width = options.width;
    if (!width) {
        width = this._config.size.width;
    }
    var height = options.height;
    if (!height) {
        height = this._config.size.height;
    }
    // obj.canvas = createCanvas(); // document.createElement('canvas');
    // console.log(obj.canvas)
    obj.canvas.width = width;
    obj.canvas.height = height;
    obj.canvas.style = Object.create(null);
    obj.canvas.style.backgroundColor = '#0D0E1B';
    return obj;
};
var BroadwayProcessor = /** @class */ (function (_super) {
    __extends(BroadwayProcessor, _super);
    // private _canvas = createCanvas(200, 200);
    function BroadwayProcessor() {
        var _this = _super.call(this) || this;
        _this._player = new BroadwayPlayer({
            useWorker: false,
            reuseMemory: true,
            webgl: false,
            size: {
                width: 640,
                height: 368
            }
        });
        return _this;
    }
    BroadwayProcessor.getName = function () { return 'BroadwayProcessor'; };
    BroadwayProcessor.prototype.templateSocketDescriptor = function (socketType) {
        throw new Error('Method not implemented.');
    };
    BroadwayProcessor.prototype.processTransfer_ = function (inS, p) {
        p.forEachBufferSlice(this._onBufferSlice.bind(this, p), this._onProcessingError, this);
        return true;
    };
    BroadwayProcessor.prototype._onProcessingError = function (bufferSlice, err) {
        console.error('Broadway proc error:', err);
        return true;
    };
    BroadwayProcessor.prototype._onBufferSlice = function (p, bufferSlice) {
    };
    return BroadwayProcessor;
}(processor_1.Processor));
exports.BroadwayProcessor = BroadwayProcessor;


/***/ }),
/* 113 */
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
var xhr_socket_1 = __webpack_require__(18);
var mp4_demux_processor_1 = __webpack_require__(22);
var mpeg_ts_demux_processor_1 = __webpack_require__(45);
var mp4_mux_mozilla_processor_1 = __webpack_require__(21);
var flow_1 = __webpack_require__(24);
var h264_parse_processor_1 = __webpack_require__(20);
var html5_media_source_buffer_socket_1 = __webpack_require__(46);
var processor_1 = __webpack_require__(4);
var mp4_mux_hlsjs_processor_1 = __webpack_require__(32);
var logger_1 = __webpack_require__(2);
var payload_description_1 = __webpack_require__(7);
var log = logger_1.getLogger('HttpToMediaSourceFlow').log;
var HttpToMediaSourceFlow = /** @class */ (function (_super) {
    __extends(HttpToMediaSourceFlow, _super);
    function HttpToMediaSourceFlow(url, mediaSource) {
        var _this = _super.call(this, function (prevState, newState) {
            log('previous state:', prevState, 'new state:', newState);
        }, function (reason) {
            log('state change aborted. reason:', reason);
        }) || this;
        _this._haveVideo = false;
        _this._haveAudio = false;
        var mp4DemuxProc = new mp4_demux_processor_1.MP4DemuxProcessor();
        var tsDemuxProc = new mpeg_ts_demux_processor_1.MPEGTSDemuxProcessor();
        var h264ParseProc = new h264_parse_processor_1.H264ParseProcessor();
        var mp4MuxProc = new mp4_mux_mozilla_processor_1.MP4MuxProcessor();
        var mp4MuxHlsjsProc = new mp4_mux_hlsjs_processor_1.MP4MuxHlsjsProcessor();
        var xhrSocket = _this._xhrSocket = new xhr_socket_1.XhrSocket(url);
        var mediaSourceSocket = new html5_media_source_buffer_socket_1.HTML5MediaSourceBufferSocket(mediaSource); // avc1.4d401f
        var onDemuxOutputCreated = function (data) {
            var demuxOutputSocket = data.socket;
            log('demuxer output created');
            var muxerInputSocket;
            var payloadDescriptor = demuxOutputSocket.payload();
            if (data.processor === mp4DemuxProc) {
                demuxOutputSocket.connect(h264ParseProc.in[0]);
                muxerInputSocket = mp4MuxHlsjsProc.createInput();
                h264ParseProc.out[0].connect(muxerInputSocket);
            }
            else if (data.processor === tsDemuxProc) {
                if (!_this._haveVideo
                    && payload_description_1.PayloadCodec.isAvc(payloadDescriptor.codec)) {
                    _this._haveVideo = true;
                    muxerInputSocket = mp4MuxHlsjsProc.createInput();
                    h264ParseProc.out[0].connect(muxerInputSocket);
                    demuxOutputSocket.connect(h264ParseProc.in[0]);
                }
                else if (!_this._haveAudio
                    && payload_description_1.PayloadCodec.isAac(payloadDescriptor.codec)) {
                    _this._haveAudio = true;
                    muxerInputSocket = mp4MuxHlsjsProc.createInput();
                    demuxOutputSocket.connect(muxerInputSocket);
                }
            }
        };
        _this.add(mp4DemuxProc, mp4MuxHlsjsProc, tsDemuxProc, mp4MuxProc);
        tsDemuxProc.on(processor_1.ProcessorEvent.OUTPUT_SOCKET_CREATED, onDemuxOutputCreated);
        mp4DemuxProc.on(processor_1.ProcessorEvent.OUTPUT_SOCKET_CREATED, onDemuxOutputCreated);
        mp4MuxProc.out[0].connect(mediaSourceSocket);
        mp4MuxHlsjsProc.out[0].connect(mediaSourceSocket);
        if (url.endsWith('.ts')) { // FIXME use mime-type of response
            xhrSocket.connect(tsDemuxProc.in[0]);
        }
        else { // FIXME use mime-type of response
            xhrSocket.connect(mp4DemuxProc.in[0]);
        }
        return _this;
    }
    /**
     * @override
     */
    HttpToMediaSourceFlow.prototype.getExternalSockets = function () {
        return new Set([this._xhrSocket]);
    };
    HttpToMediaSourceFlow.prototype.onCompleted_ = function (done) { };
    HttpToMediaSourceFlow.prototype.onVoidToWaiting_ = function (done) { };
    HttpToMediaSourceFlow.prototype.onWaitingToVoid_ = function (done) { };
    HttpToMediaSourceFlow.prototype.onWaitingToFlowing_ = function (done) { };
    HttpToMediaSourceFlow.prototype.onFlowingToWaiting_ = function (done) { };
    HttpToMediaSourceFlow.prototype.onStateChangeAborted_ = function (reason) { };
    return HttpToMediaSourceFlow;
}(flow_1.Flow));
exports.HttpToMediaSourceFlow = HttpToMediaSourceFlow;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Stephan Hesse <disparat@gmail.com>
 * @module xhr An improvement over the standard XMLHttpRequest API (and with type-safety :)
 *
 * For usage in a Node.js base env (like ts-node) @see https://www.npmjs.com/package/node-http-xhr
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(2);
var log = logger_1.getLogger('xhr').log;
var PROGRESS_UPDATES_ENABLED = true;
var createXHRHeadersMapFromString = function (rawHeaders) {
    var arr = rawHeaders.trim().split(/[\r\n]+/);
    // create an object without a prototype (a plain vanilla "dictionary")
    var map = Object.create(null);
    arr.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        map[header] = value;
    });
    return map;
};
var XHRMethod;
(function (XHRMethod) {
    XHRMethod["GET"] = "GET";
    XHRMethod["POST"] = "POST";
    XHRMethod["PUT"] = "PUT";
    XHRMethod["DELETE"] = "DELETE";
    XHRMethod["OPTIONS"] = "OPTIONS";
    XHRMethod["HEAD"] = "HEAD";
})(XHRMethod = exports.XHRMethod || (exports.XHRMethod = {}));
var XHRResponseType;
(function (XHRResponseType) {
    XHRResponseType["VOID"] = "";
    XHRResponseType["ARRAY_BUFFER"] = "arraybuffer";
    XHRResponseType["BLOB"] = "blob";
    XHRResponseType["DOCUMENT"] = "document";
    XHRResponseType["JSON"] = "json";
    XHRResponseType["TEXT"] = "text"; // 	DOMString
})(XHRResponseType = exports.XHRResponseType || (exports.XHRResponseType = {}));
var XHRState;
(function (XHRState) {
    XHRState[XHRState["UNSENT"] = XMLHttpRequest.UNSENT] = "UNSENT";
    XHRState[XHRState["OPENED"] = XMLHttpRequest.OPENED] = "OPENED";
    XHRState[XHRState["HEADERS_RECEIVED"] = XMLHttpRequest.HEADERS_RECEIVED] = "HEADERS_RECEIVED";
    XHRState[XHRState["LOADING"] = XMLHttpRequest.LOADING] = "LOADING";
    XHRState[XHRState["DONE"] = XMLHttpRequest.DONE] = "DONE";
})(XHRState = exports.XHRState || (exports.XHRState = {}));
var XHRStatusCategory;
(function (XHRStatusCategory) {
    XHRStatusCategory["VOID"] = "void";
    XHRStatusCategory["INFO"] = "info";
    XHRStatusCategory["SUCCESS"] = "success";
    XHRStatusCategory["REDIRECT"] = "redirect";
    XHRStatusCategory["REQUEST_ERROR"] = "request_error";
    XHRStatusCategory["SERVER_ERROR"] = "server_error";
    XHRStatusCategory["CUSTOME_SERVER_ERROR"] = "custom_server_error";
})(XHRStatusCategory = exports.XHRStatusCategory || (exports.XHRStatusCategory = {}));
/**
 *
 * Thin wrapper to keep state of one XHR.
 *
 * This class allows to perform requests, deal with their outcome and intermediate states.
 *
 * Requests are being sent out directly on construction (there is no state in between creating and sending a request).
 *
 * Any state change is signaled via the one callback function passed on construction.
 *
 * Request `xhrState` and HTTP `status` can be read via the respective instance properties.
 *
 * Check the values from within your callback.
 *
 * Same goes for response headers and body data, or eventual errors or abortion flags.
 *
 * The object is not recycleable (lives only for one single request, does not care about retrying and such).
 *
 * @class
 * @constructor
 */
var XHR = /** @class */ (function () {
    function XHR(url, xhrCallback, method, responseType, byteRange, headers, data, withCredentials, timeout, forceXMLMimeType) {
        if (xhrCallback === void 0) { xhrCallback = function () { }; }
        if (method === void 0) { method = XHRMethod.GET; }
        if (responseType === void 0) { responseType = XHRResponseType.VOID; }
        if (byteRange === void 0) { byteRange = null; }
        if (headers === void 0) { headers = null; }
        if (data === void 0) { data = null; }
        if (withCredentials === void 0) { withCredentials = false; }
        if (timeout === void 0) { timeout = 0; }
        if (forceXMLMimeType === void 0) { forceXMLMimeType = false; }
        this._responseHeadersMap = null;
        this._error = null;
        this._state = XHRState.UNSENT;
        this._aborted = false;
        this._loadedBytes = 0;
        this._totalBytes = 0;
        this._progressUpdatesEnabled = PROGRESS_UPDATES_ENABLED;
        this._timeUntilHeaders = NaN;
        this._timeUntilLoading = NaN;
        this._timeUntilDone = NaN;
        /**
         * Enables "Content-Range" request header from given `ByteRange` object in constructor
         */
        this.enableContentRange = false;
        this._createdAt = new Date();
        this._xhrCallback = xhrCallback;
        var xhr = this._xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.responseType = responseType;
        xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        xhr.onerror = this.onError.bind(this);
        xhr.onabort = this.onAbort.bind(this);
        xhr.onprogress = this.onProgress.bind(this);
        if (byteRange) {
            // log('set byte-range:', byteRange.toHttpHeaderValue(), byteRange.toString())
            if (this.enableContentRange) {
                xhr.setRequestHeader('Content-Range', byteRange.toHttpHeaderValue(true));
            }
            xhr.setRequestHeader('Range', byteRange.toHttpHeaderValue(false));
        }
        if (headers) {
            headers.forEach(function (_a) {
                var header = _a[0], value = _a[1];
                xhr.setRequestHeader(header, value);
            });
        }
        if (data === null) {
            data = undefined;
        }
        xhr.timeout = timeout;
        xhr.withCredentials = withCredentials;
        if (forceXMLMimeType) {
            xhr.overrideMimeType('text/xml');
        }
        xhr.send(data);
    }
    XHR.prototype.setProgressUpdatesEnabled = function (enabled) {
        this._progressUpdatesEnabled = enabled;
    };
    Object.defineProperty(XHR.prototype, "isInfo", {
        get: function () {
            return this._xhr.status >= 100 && this._xhr.status <= 199;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isSuccess", {
        /**
        {boolean} Returns `true` when request status code is in range [200-299] (success)
         */
        get: function () {
            return this._xhr.status >= 200 && this._xhr.status <= 299;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isRedirect", {
        /**
        {boolean} Returns `true` when request status code is signaling redirection
         */
        get: function () {
            return this._xhr.status >= 300 && this._xhr.status <= 399;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isRequestError", {
        get: function () {
            return this._xhr.status >= 400 && this._xhr.status <= 499;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isServerError", {
        get: function () {
            return this._xhr.status >= 500 && this._xhr.status <= 599;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isCustomServerError", {
        get: function () {
            return this._xhr.status >= 900 && this._xhr.status <= 999;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isContentRange", {
        get: function () {
            return this._xhr.status === 206;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "isVoidStatus", {
        get: function () {
            return this._xhr.status === 0;
        },
        enumerable: true,
        configurable: true
    });
    XHR.prototype.getStatusCategory = function () {
        if (this.isInfo) {
            return XHRStatusCategory.INFO;
        }
        if (this.isSuccess) {
            return XHRStatusCategory.SUCCESS;
        }
        if (this.isRedirect) {
            return XHRStatusCategory.REDIRECT;
        }
        if (this.isRequestError) {
            return XHRStatusCategory.REQUEST_ERROR;
        }
        if (this.isServerError) {
            return XHRStatusCategory.SERVER_ERROR;
        }
        if (this.isCustomServerError) {
            return XHRStatusCategory.SERVER_ERROR;
        }
        return XHRStatusCategory.VOID;
    };
    Object.defineProperty(XHR.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "upload", {
        /**
         * Native Upload object
         * @readonly
         */
        get: function () {
            return this._xhr.upload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "xhr", {
        /**
         * Native XHR object
         * @readonly
         */
        get: function () {
            return this._xhr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "xhrState", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "status", {
        get: function () {
            return this._xhr.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "statusText", {
        get: function () {
            return this._xhr.statusText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "responseHeaders", {
        get: function () {
            return this._responseHeadersMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "responseData", {
        get: function () {
            return this._xhr.response;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "responseText", {
        get: function () {
            return this._xhr.responseText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "responseDocument", {
        get: function () {
            return this._xhr.responseXML;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "responseURL", {
        get: function () {
            return this._xhr.responseURL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "hasBeenAborted", {
        get: function () {
            return this._aborted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "hasErrored", {
        get: function () {
            return !!this._error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "loadedBytes", {
        get: function () {
            return this._loadedBytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "totalBytes", {
        get: function () {
            return this._totalBytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "secondsUntilHeaders", {
        get: function () {
            return this._timeUntilHeaders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "secondsUntilLoading", {
        get: function () {
            return this._timeUntilLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "secondsUntilDone", {
        get: function () {
            return this._timeUntilDone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHR.prototype, "loadedFraction", {
        /**
        {number}
         */
        get: function () {
            return this._loadedBytes / this._totalBytes;
        },
        enumerable: true,
        configurable: true
    });
    XHR.prototype.abort = function () {
        this._xhr.abort();
    };
    XHR.prototype.onReadyStateChange = function () {
        var xhr = this._xhr;
        this._state = xhr.readyState;
        switch (xhr.readyState) {
            case XMLHttpRequest.UNSENT:
                break;
            case XMLHttpRequest.OPENED:
                break;
            case XMLHttpRequest.HEADERS_RECEIVED:
                this._timeUntilHeaders = this.getSecondsSinceCreated();
                var headers = xhr.getAllResponseHeaders();
                this._responseHeadersMap = createXHRHeadersMapFromString(headers);
                break;
            case XMLHttpRequest.LOADING:
                this._timeUntilLoading = this.getSecondsSinceCreated();
                break;
            case XMLHttpRequest.DONE:
                this._timeUntilDone = this.getSecondsSinceCreated();
                break;
        }
        this._xhrCallback(this, false);
    };
    XHR.prototype.onError = function (event) {
        this._error = event.error;
        this._xhrCallback(this, false);
    };
    XHR.prototype.onAbort = function (event) {
        this._aborted = true;
        this._xhrCallback(this, false);
    };
    XHR.prototype.onProgress = function (event) {
        this._loadedBytes = event.loaded;
        this._totalBytes = event.total;
        if (this._progressUpdatesEnabled) {
            this._xhrCallback(this, true);
        }
    };
    XHR.prototype.getSecondsSinceCreated = function () {
        return (new Date().getTime() - this._createdAt.getTime()) / 1000;
    };
    return XHR;
}());
exports.XHR = XHR;


/***/ }),
/* 115 */
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
var eventemitter3_1 = __webpack_require__(13);
var source_buffer_queue_1 = __webpack_require__(116);
var logger_1 = __webpack_require__(2);
var error = logger_1.getLogger('MediaSourceController').error;
var MediaSourceControllerEvents;
(function (MediaSourceControllerEvents) {
    MediaSourceControllerEvents["MEDIA_CLOCK_UPDATED"] = "media-clock-updated";
    MediaSourceControllerEvents["MEDIA_DURATION_CHANGED"] = "media-duration-changed";
    MediaSourceControllerEvents["MEDIA_STALLED"] = "media-stalling";
})(MediaSourceControllerEvents = exports.MediaSourceControllerEvents || (exports.MediaSourceControllerEvents = {}));
var MediaSourceController = /** @class */ (function (_super) {
    __extends(MediaSourceController, _super);
    function MediaSourceController(mediaSource) {
        var _this = _super.call(this) || this;
        if (!(mediaSource || MediaSource)) {
            throw new Error('Need global default MediaSource constructor or injected interface instance');
        }
        if (!mediaSource) {
            mediaSource = new MediaSource();
        }
        _this.mediaSource_ = mediaSource;
        _this.sourceBufferQueues_ = [];
        _this.mediaDuration_ = null;
        _this.mediaClockTime_ = null;
        _this.mediaClockLastUpdateTime_ = null;
        return _this;
    }
    Object.defineProperty(MediaSourceController.prototype, "mediaDuration", {
        get: function () {
            return this.mediaDuration_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaSourceController.prototype, "mediaClockTime", {
        get: function () {
            return this.mediaClockTime_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaSourceController.prototype, "mediaSource", {
        get: function () {
            return this.mediaSource_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaSourceController.prototype, "sourceBufferQueues", {
        get: function () {
            return this.sourceBufferQueues_;
        },
        enumerable: true,
        configurable: true
    });
    MediaSourceController.prototype.addSourceBufferQueue = function (mimeType) {
        var _this = this;
        if (!MediaSource.isTypeSupported(mimeType)) {
            error('MediaSource not supporting:', mimeType);
            return false;
        }
        if (this.mediaSource.readyState !== 'open') {
            error('MediaSource not open!');
            return false;
        }
        try {
            var sbQueue = new source_buffer_queue_1.SourceBufferQueue(this.mediaSource, mimeType, null, function (sbQueue, eventData) {
                _this.onSourceBufferQueueUpdateCb_(sbQueue, eventData);
            });
            // sbQueue.setModeSequential(true);
            this.sourceBufferQueues_.push(sbQueue);
        }
        catch (err) {
            error(err);
            return false;
        }
        return true;
    };
    MediaSourceController.prototype.hasSourceBufferQueuesForMimeType = function (mimeType) {
        return !!this.getSourceBufferQueuesByMimeType(mimeType).length;
    };
    MediaSourceController.prototype.getSourceBufferQueuesByMimeType = function (mimeType) {
        return this.sourceBufferQueues_.filter(function (sbQ) {
            return sbQ.mimeType === mimeType;
        });
    };
    MediaSourceController.prototype.getBufferedTimeRanges = function (mediaOffset) {
        return this.sourceBufferQueues_.map(function (sbQ) {
            return sbQ.getBufferedTimeranges(mediaOffset);
        });
    };
    MediaSourceController.prototype.getBufferedTimeRangesFromMediaPosition = function () {
        var _this = this;
        return this.sourceBufferQueues_.map(function (sbQ) {
            return sbQ.getBufferedTimeranges(_this.mediaClockTime);
        });
    };
    MediaSourceController.prototype.updateMediaClockTime = function (clockTime) {
        var now = Date.now();
        var wallClockDelta = now - this.mediaClockLastUpdateTime_;
        var mediaTimeDelta = clockTime - this.mediaClockTime_;
        var isForwardProgress = mediaTimeDelta > 0;
        if (this.mediaClockTime_ !== clockTime) {
            this.mediaClockTime_ = clockTime;
            this.mediaClockLastUpdateTime_ = now;
            this.emit(MediaSourceControllerEvents.MEDIA_CLOCK_UPDATED, clockTime);
            // detect discontinuities/jitter in playback here
        }
        else {
            this.emit(MediaSourceControllerEvents.MEDIA_STALLED, clockTime);
        }
    };
    MediaSourceController.prototype.setMediaDuration = function (duration, forceImmediateUpdate) {
        if (forceImmediateUpdate === void 0) { forceImmediateUpdate = false; }
        if (this.mediaDuration_ !== duration) {
            this.mediaDuration_ = duration;
            if (forceImmediateUpdate) {
                this.mediaSource.duration = duration; // TODO: async update
            }
            this.emit(MediaSourceControllerEvents.MEDIA_DURATION_CHANGED, duration);
        }
    };
    MediaSourceController.prototype.onSourceBufferQueueUpdateCb_ = function (SourceBufferQueue, SourceBufferQueueUpdateCallbackData) {
        // TODO
    };
    return MediaSourceController;
}(eventemitter3_1.EventEmitter));
exports.MediaSourceController = MediaSourceController;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(2);
var log = logger_1.getLogger('source-buffer-queue').log;
var SourceBufferQueue = /** @class */ (function () {
    // private bufferMap_: any[];
    function SourceBufferQueue(mediaSource, mimeType_, trackDefaults, onUpdate_) {
        // this.bufferMap_ = [];
        if (trackDefaults === void 0) { trackDefaults = null; }
        if (onUpdate_ === void 0) { onUpdate_ = (function () { }); }
        this.mimeType_ = mimeType_;
        this.onUpdate_ = onUpdate_;
        this.updateStartedTime_ = null;
        this.queue_ = [];
        this.bufferedBytesCount_ = 0;
        this.sourceBuffer_ = null;
        this.initialMode_ = null;
        this.sourceBuffer_ = mediaSource.addSourceBuffer(mimeType_);
        this.initialMode_ = this.sourceBuffer_.mode;
        log('SourceBuffer created with initial mode:', this.initialMode_);
        if (trackDefaults) {
            throw new Error('trackDefaults arg not supported (yet) except null');
            // this.sourceBuffer_.trackDefaults = trackDefaults
        }
        this.sourceBuffer_.addEventListener('updatestart', this.onUpdateStart_.bind(this));
        this.sourceBuffer_.addEventListener('updateend', this.onUpdateEnd_.bind(this));
    }
    Object.defineProperty(SourceBufferQueue.prototype, "mimeType", {
        get: function () {
            return this.mimeType_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceBufferQueue.prototype, "bufferedBytesCount", {
        get: function () {
            return this.bufferedBytesCount_;
        },
        enumerable: true,
        configurable: true
    });
    /*
  
          The mode property of the SourceBuffer interface controls whether media segments can be appended to the SourceBuffer in any order, or in a strict sequence.
  
          The two available values are:
  
          segments: The media segment timestamps determine the order in which the segments are played. The segments can be appended to the SourceBuffer in any order.
          sequence: The order in which the segments are appended to the SourceBuffer determines the order in which they are played. Segment timestamps are generated automatically for the segments that observe this order.
          The mode value is initially set when the SourceBuffer is created using MediaSource.addSourceBuffer(). If timestamps already exist for the media segments, then the value will be set to segments; if they don't, then the value will be set to sequence.
  
          If you try to set the mode property value to segments when the initial value is sequence, an error will be thrown. The existing segment order must be maintained in sequence mode. You can, however, change the value from segments to sequence. It just means the play order will be fixed, and new timestamps generated to reflect this.
  
          This property cannot be changed during while the sourceBuffer is processing either an appendBuffer() or remove() call.
  
      */
    SourceBufferQueue.prototype.isInitialModeSequential = function () {
        return this.initialMode_ === 'sequence';
    };
    SourceBufferQueue.prototype.getMode = function () {
        return this.sourceBuffer_.mode;
    };
    SourceBufferQueue.prototype.setModeSequential = function (sequentialModeEnable) {
        if (this.isUpdating()) {
            throw new Error('Can not set mode when updating');
        }
        if (!sequentialModeEnable) {
            if (this.isInitialModeSequential()) {
                throw new Error('Can not disable sequential model');
            }
            else {
                this.sourceBuffer_.mode = 'segments';
            }
        }
        else {
            this.sourceBuffer_.mode = 'sequence';
        }
    };
    SourceBufferQueue.prototype.isUpdating = function () {
        return this.sourceBuffer_.updating;
    };
    SourceBufferQueue.prototype.getBufferedTimeranges = function (mediaTimeOffset /* TODO: implement offset */) {
        return this.sourceBuffer_.buffered;
    };
    SourceBufferQueue.prototype.getTotalBytesQueued = function () {
        return this.queue_.filter(function (item) {
            return item.method === 'appendBuffer';
        }).reduce(function (accu, item) {
            return accu + item.arrayBuffer.byteLength;
        }, 0);
    };
    SourceBufferQueue.prototype.getTotalBytes = function () {
        return this.bufferedBytesCount + this.getTotalBytesQueued();
    };
    SourceBufferQueue.prototype.getItemsQueuedCount = function (filterMethod) {
        return this.queue_.filter(function (item) {
            if (!filterMethod) {
                return true;
            }
            return filterMethod === item.method;
        }).length;
    };
    SourceBufferQueue.prototype.appendBuffer = function (arrayBuffer, timestampOffset) {
        this.queue_.push({ method: 'appendBuffer', arrayBuffer: arrayBuffer, timestampOffset: timestampOffset });
        this.tryRunQueueOnce_();
    };
    SourceBufferQueue.prototype.appendMediaSegment = function (packet) {
        var bufferSlice = packet.data[0];
        var start = bufferSlice.props.timestampDelta;
        var end = bufferSlice.props.timestampDelta + bufferSlice.props.getSampleDuration();
        var arrayBuffer = bufferSlice.arrayBuffer;
        var timestampOffset = 0;
        this.queue_.push({ method: 'appendBuffer', start: start, end: end, arrayBuffer: arrayBuffer, timestampOffset: timestampOffset });
        this.tryRunQueueOnce_();
    };
    SourceBufferQueue.prototype.remove = function (start, end) {
        this.queue_.push({ method: 'remove', start: start, end: end });
        this.tryRunQueueOnce_();
    };
    SourceBufferQueue.prototype.dropAsync = function () {
        this.queue_.push({ method: 'drop' });
        this.tryRunQueueOnce_();
    };
    SourceBufferQueue.prototype.drop = function (immediateAbort) {
        if (immediateAbort && this.isUpdating()) {
            this.sourceBuffer_.abort();
        }
        this.queue_ = [];
    };
    SourceBufferQueue.prototype.flush = function () {
        this.remove(0, Infinity);
    };
    SourceBufferQueue.prototype.dropAndFlush = function () {
        this.drop(true);
        this.flush();
    };
    /*
    private incrBufferedBytesCnt_ (bytes) {
      this.bufferedBytesCount_ += bytes;
    }
  
    private decBufferedBytesCnt_ (bytes) {
      this.bufferedBytesCount_ -= bytes;
    }
    */
    SourceBufferQueue.prototype.tryRunQueueOnce_ = function () {
        if (this.isUpdating()) {
            return;
        }
        var item = this.queue_.shift();
        if (!item) {
            return;
        }
        var method = item.method, arrayBuffer = item.arrayBuffer, timestampOffset = item.timestampOffset, start = item.start, end = item.end;
        // this.sourceBuffer_.timestampOffset = timestampOffset
        switch (method) {
            case 'appendBuffer':
                log('appending', this.mimeType, 'buffer of', item.arrayBuffer.byteLength, 'bytes');
                this.sourceBuffer_[method](arrayBuffer);
                // this.incrBufferedBytesCnt_(arrayBuffer.bytesLength);
                // TODO: we need to parse the MP4 here to know what duration it is
                break;
            case 'remove':
                log('pruning', this.mimeType, 'buffer on time-interval', start, '-', end);
                this.sourceBuffer_[method](start, end);
                break;
            case 'drop':
                log('dropping all', this.mimeType, 'source-buffer data...');
                this.drop(false);
                break;
        }
    };
    SourceBufferQueue.prototype.onUpdateEnd_ = function () {
        var updateTimeMs = Date.now() - this.updateStartedTime_;
        var callbackData = {
            updateTimeMs: updateTimeMs
        };
        this.updateStartedTime_ = null;
        log('done updating', this.mimeType, 'source-buffer, took', callbackData.updateTimeMs, 'ms');
        this.onUpdate_(this, callbackData);
        this.tryRunQueueOnce_();
    };
    SourceBufferQueue.prototype.onUpdateStart_ = function () {
        // log('onUpdateStart_');
        if (this.updateStartedTime_ !== null) {
            throw new Error('updateStartedTime_ should be null');
        }
        this.updateStartedTime_ = Date.now();
    };
    return SourceBufferQueue;
}());
exports.SourceBufferQueue = SourceBufferQueue;


/***/ }),
/* 117 */
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
var flow_1 = __webpack_require__(24);
var xhr_socket_1 = __webpack_require__(18);
var mp4_demux_processor_1 = __webpack_require__(22);
var h264_parse_processor_1 = __webpack_require__(20);
var mp4_mux_mozilla_processor_1 = __webpack_require__(21);
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var mp3_parse_processor_1 = __webpack_require__(27);
var web_file_download_socket_1 = __webpack_require__(47);
var processor_factory_1 = __webpack_require__(48);
var logger_1 = __webpack_require__(2);
var ffmpeg_convert_processor_1 = __webpack_require__(29);
var common_utils_1 = __webpack_require__(5);
var env_1 = __webpack_require__(14);
var app_input_socket_1 = __webpack_require__(120);
var log = logger_1.getLogger('CombineMp4sToMovFlow').log;
var CombineMp4sToMovFlow = /** @class */ (function (_super) {
    __extends(CombineMp4sToMovFlow, _super);
    /**
     *
     * @param _videoMp4Url
     * @param _audioUrl
     * @param _appInputCallback
     * @param _useFileDonwloadSocket
     * @param _downloadLinkContainer
     * @param _isMp3Audio
     */
    function CombineMp4sToMovFlow(_videoMp4Url, _audioUrl, _useFileDonwloadSocket, _downloadLinkContainer, _isMp3Audio) {
        if (_useFileDonwloadSocket === void 0) { _useFileDonwloadSocket = false; }
        if (_downloadLinkContainer === void 0) { _downloadLinkContainer = null; }
        if (_isMp3Audio === void 0) { _isMp3Audio = false; }
        var _this = _super.call(this, function (prevState, newState) {
            console.log('previous state:', prevState, 'new state:', newState);
        }, function (reason) {
            console.log('state change aborted. reason:', reason);
        }) || this;
        _this._videoMp4Url = _videoMp4Url;
        _this._audioUrl = _audioUrl;
        _this._useFileDonwloadSocket = _useFileDonwloadSocket;
        _this._downloadLinkContainer = _downloadLinkContainer;
        _this._isMp3Audio = _isMp3Audio;
        return _this;
    }
    CombineMp4sToMovFlow.prototype._setup = function () {
        var _this = this;
        {
            var ffmpegAacTranscodeProc = null;
            if (this._isMp3Audio) { // the url might point to a blob so the file extension is not a criteria
                var audioConfig = {
                    targetBitrateKbps: 256,
                    targetCodec: 'aac',
                    targetFiletypeExt: 'mp4'
                };
                log('using ffmpeg.js bin path:', env_1.EnvironmentVars.FFMPEG_BIN_PATH);
                ffmpegAacTranscodeProc = processor_factory_1.newProcessorWorkerShell(processor_factory_1.unsafeProcessorType(ffmpeg_convert_processor_1.FFmpegConvertProcessor), [audioConfig, null], [env_1.EnvironmentVars.FFMPEG_BIN_PATH]);
            }
            var mp4DemuxProcVideo = processor_factory_1.newProcessorWorkerShell(mp4_demux_processor_1.MP4DemuxProcessor);
            var h264ParseProc_1 = processor_factory_1.newProcessorWorkerShell(h264_parse_processor_1.H264ParseProcessor);
            var mp3ParseProc = processor_factory_1.newProcessorWorkerShell(mp3_parse_processor_1.MP3ParseProcessor);
            var mp4MuxProc = processor_factory_1.newProcessorWorkerShell(mp4_mux_mozilla_processor_1.MP4MuxProcessor);
            var muxerVideoInput_1 = mp4MuxProc.createInput();
            var muxerAudioInput_1 = mp4MuxProc.createInput();
            var xhrSocketMovFile = new xhr_socket_1.XhrSocket(this._videoMp4Url);
            var xhrSocketAudioFile = new xhr_socket_1.XhrSocket(this._audioUrl);
            /*
            const mediaSourceSocket: HTML5MediaSourceBufferSocket
                = new HTML5MediaSourceBufferSocket(new MediaSource()); // avc1.4d401f 'video/mp4; codecs=avc1.64001f'
            */
            var downloadSocket = new web_file_download_socket_1.WebFileDownloadSocket(this._downloadLinkContainer, 'video/quicktime', common_utils_1.makeTemplate('buffer${counter}-${Date.now()}.mp4'));
            var appInputSocket = new app_input_socket_1.AppInputSocket(function (blob) {
                _this.setCompleted({ code: flow_1.FlowCompletionResultCode.OK, data: blob });
            }, true, true, 'video/quicktime');
            var mp4DemuxProcAudio = processor_factory_1.newProcessorWorkerShell(mp4_demux_processor_1.MP4DemuxProcessor);
            // hook up transcoding stage
            var mp4AudioOutSocket = xhrSocketAudioFile;
            if (ffmpegAacTranscodeProc) {
                xhrSocketAudioFile.connect(ffmpegAacTranscodeProc.in[0]);
                mp4AudioOutSocket = ffmpegAacTranscodeProc.out[0];
            }
            mp4AudioOutSocket.connect(mp4DemuxProcAudio.in[0]);
            // DEPRECATED: support for mp3 ES in MP4 file (untranscoded)
            // wire up audio data source
            /*
            if (audioUrl.endsWith('.mp3')) {
              xhrSocketAudioFile.connect(mp3ParseProc.in[0]);
              mp3ParseProc.out[0].connect(muxerAudioInput);
            } else { // TODO: check using mimetypes from XHR
              // assuming mp4a
              mp4DemuxProcAudio = newProcessorWorkerShell(MP4DemuxProcessor);
              xhrSocketAudioFile.connect(mp4DemuxProcAudio.in[0]);
            }
            */
            // wire up video
            xhrSocketMovFile.connect(mp4DemuxProcVideo.in[0]);
            // set up
            mp4DemuxProcVideo.on(processor_1.ProcessorEvent.OUTPUT_SOCKET_CREATED, function (eventData) {
                // FIXME: check the socket-descriptor actually is video
                log('mp4 video demux output socket created');
                // FIXME: avoid the unsafe cast here somehow?
                socket_1.OutputSocket.fromUnsafe(eventData.socket).connect(h264ParseProc_1.in[0]);
                h264ParseProc_1.out[0].connect(muxerVideoInput_1);
            });
            mp4DemuxProcAudio.on(processor_1.ProcessorEvent.OUTPUT_SOCKET_CREATED, function (eventData) {
                log('mp4 video demux output socket created');
                socket_1.OutputSocket.fromUnsafe(eventData.socket).connect(muxerAudioInput_1);
            });
            mp4MuxProc.out[0].connect(appInputSocket);
            if (this._useFileDonwloadSocket) {
                mp4MuxProc.out[0].connect(downloadSocket);
            }
            this.getExternalSockets().add(appInputSocket);
        }
    };
    CombineMp4sToMovFlow.prototype.onVoidToWaiting_ = function (cb) {
        cb();
    };
    CombineMp4sToMovFlow.prototype.onWaitingToVoid_ = function (cb) {
        cb();
    };
    CombineMp4sToMovFlow.prototype.onWaitingToFlowing_ = function (cb) {
        this._setup();
        cb();
    };
    CombineMp4sToMovFlow.prototype.onFlowingToWaiting_ = function (cb) {
        cb();
    };
    CombineMp4sToMovFlow.prototype.onCompleted_ = function (cb) {
        cb();
    };
    CombineMp4sToMovFlow.prototype.onStateChangeAborted_ = function (reason) {
    };
    return CombineMp4sToMovFlow;
}(flow_1.Flow));
exports.CombineMp4sToMovFlow = CombineMp4sToMovFlow;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 119 */
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
var logger_1 = __webpack_require__(2);
var processor_1 = __webpack_require__(4);
var socket_1 = __webpack_require__(3);
var packet_1 = __webpack_require__(6);
var processor_factory_1 = __webpack_require__(48);
var env_1 = __webpack_require__(14);
var _a = logger_1.getLogger("ProcessorProxy", logger_1.LoggerLevel.LOG), log = _a.log, debug = _a.debug, warn = _a.warn, error = _a.error;
var ProcessorProxyWorkerMessage;
(function (ProcessorProxyWorkerMessage) {
    ProcessorProxyWorkerMessage["SPAWN"] = "spawn";
    ProcessorProxyWorkerMessage["DESTROY"] = "destroy";
    ProcessorProxyWorkerMessage["CREATE"] = "create";
    ProcessorProxyWorkerMessage["TERMINATE"] = "terminate";
    ProcessorProxyWorkerMessage["INVOKE_METHOD"] = "invoke-method";
})(ProcessorProxyWorkerMessage = exports.ProcessorProxyWorkerMessage || (exports.ProcessorProxyWorkerMessage = {}));
var ProcessorProxyWorkerCallback;
(function (ProcessorProxyWorkerCallback) {
    ProcessorProxyWorkerCallback["SPAWNED"] = "spawned";
    ProcessorProxyWorkerCallback["DESTROYED"] = "destroyed";
    ProcessorProxyWorkerCallback["CREATED"] = "created";
    ProcessorProxyWorkerCallback["TERMINATED"] = "terminated";
    ProcessorProxyWorkerCallback["METHOD_RETURN"] = "return";
    ProcessorProxyWorkerCallback["TRANSFER"] = "transfer";
    ProcessorProxyWorkerCallback["EVENT"] = "event";
})(ProcessorProxyWorkerCallback = exports.ProcessorProxyWorkerCallback || (exports.ProcessorProxyWorkerCallback = {}));
var ProcessorProxyWorker = /** @class */ (function () {
    function ProcessorProxyWorker(_onSpawned, _onCreated, _onTransfer, _onMethodReturn, _onEvent, _onWorkerError) {
        var _this = this;
        this._onSpawned = _onSpawned;
        this._onCreated = _onCreated;
        this._onTransfer = _onTransfer;
        this._onMethodReturn = _onMethodReturn;
        this._onEvent = _onEvent;
        this._onWorkerError = _onWorkerError;
        this._subContextId = null;
        this._gotSpawnCallback = false;
        this._worker = null;
        var PROXY_WORKER_PATH = env_1.EnvironmentVars.PROXY_WORKER_PATH;
        try {
            this._worker = new Worker(PROXY_WORKER_PATH);
            log('created web-worker wrapper from filepath:', PROXY_WORKER_PATH);
        }
        catch (err) {
            error('failed to initialize worker:', err);
            return this;
        }
        this._worker.addEventListener('error', function (event) {
            // trigger error event here to shell proc instance using event callback
            error("error-event on worker: \"" + event.message + "\"");
            _this._onWorkerError(event);
        });
        this._worker.addEventListener('message', function (event) {
            var callbackData = event.data;
            debug('message received:', event);
            switch (callbackData.callback) {
                case ProcessorProxyWorkerCallback.SPAWNED: {
                    _this._subContextId = callbackData.value;
                    _this._gotSpawnCallback = true;
                    _this._onSpawned();
                    break;
                }
                case ProcessorProxyWorkerCallback.CREATED: {
                    _this._onCreated();
                    break;
                }
                case ProcessorProxyWorkerCallback.TRANSFER: {
                    var transferValue = callbackData.value;
                    _this._onTransfer(transferValue);
                    break;
                }
                case ProcessorProxyWorkerCallback.METHOD_RETURN: {
                    _this._onMethodReturn(callbackData.value);
                    break;
                }
                case ProcessorProxyWorkerCallback.EVENT: {
                    _this._onEvent(callbackData.value);
                    break;
                }
                default: throw new Error('unknown callback type: ' + callbackData.callback);
            }
        });
    }
    Object.defineProperty(ProcessorProxyWorker.prototype, "subContextId", {
        get: function () {
            // little hacky trick: we pass 0 instead of the actual subContextId because we only use one context anyway
            // for supporting multiple sub-contexts per worker instance (to share one across several proxied procs) we
            // can only allow async proxy initialization (create only called from the spawned-callback after we have set the subContextId on this the shell side)
            return this._subContextId || 0;
        },
        enumerable: true,
        configurable: true
    });
    ProcessorProxyWorker.prototype.spawn = function (importScriptPaths) {
        if (importScriptPaths === void 0) { importScriptPaths = []; }
        var args = importScriptPaths;
        log('spawn called');
        var message = {
            message: ProcessorProxyWorkerMessage.SPAWN,
            subContextId: null,
            args: args
        };
        this._worker.postMessage(message);
    };
    ProcessorProxyWorker.prototype.destroy = function (subContextId) {
        log('destroy called');
        var message = {
            message: ProcessorProxyWorkerMessage.DESTROY,
            subContextId: subContextId,
            args: null
        };
        this._worker.postMessage(message);
    };
    ProcessorProxyWorker.prototype.create = function (subContextId, procName, procConstructorArgs) {
        log('create called for processor shell-name: ', procName);
        var message = {
            message: ProcessorProxyWorkerMessage.CREATE,
            subContextId: subContextId,
            args: [procName].concat(procConstructorArgs)
        };
        this._worker.postMessage(message);
    };
    ProcessorProxyWorker.prototype.invokeMethod = function (subContextId, methodName, methodArgs, transferrables) {
        debug('invoke method called:', methodName);
        if (!this._gotSpawnCallback) {
            warn("did not get 'spawned' callback message yet, but posting message to remote-invoke method (will be queued): '" + methodName + "'");
        }
        var message = {
            message: ProcessorProxyWorkerMessage.INVOKE_METHOD,
            subContextId: subContextId,
            args: [methodName].concat(methodArgs)
        };
        this._worker.postMessage(message, transferrables);
    };
    return ProcessorProxyWorker;
}());
exports.ProcessorProxyWorker = ProcessorProxyWorker;
var ProcessorProxy = /** @class */ (function (_super) {
    __extends(ProcessorProxy, _super);
    function ProcessorProxy(_processorShellName, // TODO: pass in constructor instead and do factory stuff outside of here
    onReady, _processorArgs, _importScriptPaths) {
        if (_processorArgs === void 0) { _processorArgs = []; }
        if (_importScriptPaths === void 0) { _importScriptPaths = []; }
        var _this = _super.call(this) || this;
        _this._processorShellName = _processorShellName;
        _this._processorArgs = _processorArgs;
        _this._importScriptPaths = _importScriptPaths;
        _this._isReady = false;
        // disable proxying any symbols automatically
        _this.enableSymbolProxying = false;
        // disable passing any symbols to process transfer
        _this.muteSymbolProcessing = true;
        var onSpawned = function () {
            log("worker spawned with sub-context-id " + _this._worker.subContextId);
        };
        var onCreated = function () {
            log("processor-proxy for shell-name " + _processorShellName + " is ready");
            _this._isReady = true;
            onReady();
        };
        var onTransfer = function (transferValue) {
            _this._onTransferFromOutputCallback(transferValue.packet, transferValue.outputIndex);
        };
        var onMethodReturn = function (returnVal) {
            // TODO
            debug('return value from call to proxy processor method: ', returnVal);
        };
        /*
        const decrementSocketCreatedCounter = () => {
          // we are doing this to count down the sockets
          // created by the proto-instance to avoid a double-feedback
          // that would result in creating these sockets twice
          // since ultimately these will also trigger events on the worker side.
          // we only want to mirror the socket creations
          // that we haven't initialized ourselves.
          if (this._protoInstanceSocketsCreated > 0) {
            this._protoInstanceSocketsCreated--
            return false;
          }
          return true;
        }
        */
        var onEvent = function (event) {
            var data;
            var socket;
            // we don't need to reproduce this event, it will be triggered organically from creating the sockets here
            // just as all other events except error
            switch (event) {
                case processor_1.ProcessorEvent.INPUT_SOCKET_CREATED:
                    socket = _super.prototype.createInput.call(_this);
                    break;
                case processor_1.ProcessorEvent.OUTPUT_SOCKET_CREATED:
                    socket = _super.prototype.createOutput.call(_this);
                    break;
                case processor_1.ProcessorEvent.ERROR:
                    _this.emit(processor_1.ProcessorEvent.ERROR, {
                        processor: _this,
                        event: processor_1.ProcessorEvent.ERROR
                    });
                    break;
            }
        };
        var onWorkerError = function (event) {
            _this.emit(processor_1.ProcessorEvent.ERROR, {
                event: processor_1.ProcessorEvent.ERROR,
                processor: _this,
                socket: null
            });
        };
        _this._worker = new ProcessorProxyWorker(onSpawned, onCreated, onTransfer, onMethodReturn, onEvent, onWorkerError);
        // all these "commands" will get queued by the worker thread anyway, we don't need to worry about synchronization at this point
        _this._worker.spawn(_importScriptPaths);
        _this._worker.create(_this._worker.subContextId, _processorShellName, _processorArgs);
        _this._initShellFromProtoInstance();
        return _this;
    }
    Object.defineProperty(ProcessorProxy.prototype, "workerShellProcName", {
        get: function () {
            return this._processorShellName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessorProxy.prototype, "isReady", {
        get: function () {
            return this._isReady;
        },
        enumerable: true,
        configurable: true
    });
    ProcessorProxy.prototype.createInput = function (sd) {
        this._worker.invokeMethod(this._worker.subContextId, 'createInput', [sd]);
        return _super.prototype.createInput.call(this, sd);
    };
    ProcessorProxy.prototype.createOutput = function (sd) {
        this._worker.invokeMethod(this._worker.subContextId, 'createOutput', [sd]);
        return _super.prototype.createOutput.call(this, sd);
    };
    ProcessorProxy.prototype.processTransfer_ = function (inS, p, inputIndex) {
        // we can do this since we made sure that we wont get any symbolic packets in
        var packet = packet_1.Packet.makeTransferableCopy(p);
        this._worker.invokeMethod(this._worker.subContextId, processor_1.PROCESSOR_RPC_INVOKE_PACKET_HANDLER, [packet, inputIndex], packet.mapArrayBuffers());
        return true;
    };
    ProcessorProxy.prototype.handleSymbolicPacket_ = function (symbol) {
        log('symbol handler:', symbol);
        this._worker.invokeMethod(this._worker.subContextId, processor_1.PROCESSOR_RPC_INVOKE_PACKET_HANDLER, [packet_1.Packet.fromSymbol(symbol)]);
        return true; // we return true here because we handle it somehow but generally proxying is disabled
        // since this is something to be determined by the proxied instance
    };
    ProcessorProxy.prototype._onTransferFromOutputCallback = function (p, outputIndex) {
        var packet = packet_1.Packet.fromTransferable(p);
        if (packet.isSymbolic()) {
            log('received symbolic packet from worker with value:', packet.symbol);
        }
        this.out[outputIndex].transfer(packet);
    };
    ProcessorProxy.prototype._initShellFromProtoInstance = function () {
        var _this = this;
        // make a utility like this to "clone" a proc ?
        var protoInstance = processor_factory_1.createProcessorFromShellName(this._processorShellName, this._processorArgs);
        // we are basically probing the proto instance of the proc and creating a clone of its template-generator function
        var socketTemplateGenerator = socket_1.SocketDescriptor.createTemplateGenerator(protoInstance.templateSocketDescriptor(socket_1.SocketType.INPUT), protoInstance.templateSocketDescriptor(socket_1.SocketType.OUTPUT));
        this.overrideSocketTemplate(socketTemplateGenerator);
        // FIXME: apply socket-descriptors
        protoInstance.in.forEach(function () {
            _super.prototype.createInput.call(_this);
        });
        protoInstance.out.forEach(function () {
            _super.prototype.createOutput.call(_this);
        });
    };
    return ProcessorProxy;
}(processor_1.Processor));
exports.ProcessorProxy = ProcessorProxy;


/***/ }),
/* 120 */
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
var socket_1 = __webpack_require__(3);
var AppInputSocket = /** @class */ (function (_super) {
    __extends(AppInputSocket, _super);
    function AppInputSocket(_appCallback, _copyMode, _blobMode, _mimeType) {
        if (_copyMode === void 0) { _copyMode = false; }
        if (_blobMode === void 0) { _blobMode = false; }
        if (_mimeType === void 0) { _mimeType = null; }
        var _this = _super.call(this, function (p) { return _this._onPacketReceived(p); }, new socket_1.SocketDescriptor()) || this;
        _this._appCallback = _appCallback;
        _this._copyMode = _copyMode;
        _this._blobMode = _blobMode;
        _this._mimeType = _mimeType;
        if (_blobMode && !_mimeType) {
            throw new Error('Can not use blob mode with unset mimetype string');
        }
        return _this;
    }
    AppInputSocket.prototype._onPacketReceived = function (p) {
        var _this = this;
        p.forEachBufferSlice(function (bs) {
            var buffer = _this._copyMode ? bs.newArrayBuffer() : bs.arrayBuffer;
            if (_this._blobMode) {
                var blob = new Blob([buffer], { type: _this._mimeType });
                _this._appCallback(blob);
            }
            else {
                _this._appCallback(buffer);
            }
        });
        return true;
    };
    return AppInputSocket;
}(socket_1.InputSocket));
exports.AppInputSocket = AppInputSocket;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuidv1 = __webpack_require__(122);
function makeUUID_v1() {
    return uuidv1();
}
exports.makeUUID_v1 = makeUUID_v1;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(123);
var bytesToUuid = __webpack_require__(124);

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
/* 123 */
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
/* 124 */
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
/* 125 */
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
var socket_1 = __webpack_require__(3);
var xhr_socket_1 = __webpack_require__(18);
var logger_1 = __webpack_require__(2);
var warn = logger_1.getLogger('WebFileChooserSocket').warn;
var WebFileChooserSocket = /** @class */ (function (_super) {
    __extends(WebFileChooserSocket, _super);
    function WebFileChooserSocket(_domRootEl, _accepts, _label) {
        if (_accepts === void 0) { _accepts = '*'; }
        if (_label === void 0) { _label = ''; }
        var _this = _super.call(this, new socket_1.SocketDescriptor()) || this;
        _this._domRootEl = _domRootEl;
        _this._xhrSocket = null;
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = _accepts;
        input.multiple = false;
        input.addEventListener('change', function () {
            if (!input.files[0]) {
                warn('No file selected after change event');
                return;
            }
            if (_this._xhrSocket) {
                _this._xhrSocket.disconnect(_this);
            }
            if (_this._xhrSocket.hasPeers()) {
                throw new Error('Socket should not have any other internal peers');
            }
            _this._xhrSocket = new xhr_socket_1.XhrSocket(URL.createObjectURL(input.files[0]));
            _this._xhrSocket.connect(_this);
        });
        var label = document.createElement('label');
        label.appendChild(document.createTextNode(_label));
        label.appendChild(input);
        _this._domRootEl.appendChild(label);
        return _this;
    }
    return WebFileChooserSocket;
}(socket_1.OutputSocket));
exports.WebFileChooserSocket = WebFileChooserSocket;


/***/ })
/******/ ]);
});
//# sourceMappingURL=MM.umd.js.map