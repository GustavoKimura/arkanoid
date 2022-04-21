// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lpcHr":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _canvasView = require("./view/CanvasView");
var _paddle = require("./sprites/Paddle");
var _ball = require("./sprites/Ball");
var _collision = require("./Collision");
var _paddlePng = require("./images/paddle.png");
var _paddlePngDefault = parcelHelpers.interopDefault(_paddlePng);
var _ballPng = require("./images/ball.png");
var _ballPngDefault = parcelHelpers.interopDefault(_ballPng);
var _setup = require("./setup");
var _helpers = require("./helpers");
let gameOver = false;
let score = 0;
function setGameOver(view1) {
    view1.drawInformation('Game Over!');
    gameOver = false;
}
function setGameWin(view2) {
    view2.drawInformation('Game Won!');
    gameOver = false;
}
function gameLoop(view3, bricks, paddle, ball, collision) {
    view3.clear();
    view3.drawBricks(bricks);
    view3.drawSprite(paddle);
    view3.drawSprite(ball);
    ball.moveBall();
    if (paddle.getMovingLeft() && paddle.getPosition().x > 0 || paddle.getMovingRight() && paddle.getPosition().x < view3.canvas.width - paddle.getWidth()) paddle.movePaddle();
    collision.checkBallCollision(ball, paddle, view3);
    const isCollidingWithBricks = collision.isCollidingWithBricks(ball, bricks);
    if (isCollidingWithBricks) view3.drawScore(++score);
    if (ball.getPosition().y > view3.canvas.height) gameOver = true;
    if (bricks.length === 0) return setGameWin(view3);
    if (gameOver) return setGameOver(view3);
    requestAnimationFrame(()=>gameLoop(view3, bricks, paddle, ball, collision)
    );
}
function startGame(view4) {
    score = 0;
    view4.drawInformation('');
    view4.drawScore(0);
    const bricks = _helpers.createBricks();
    const paddle = new _paddle.Paddle(_setup.PADDLE_SPEED, _setup.PADDLE_WIDTH, _setup.PADDLE_HEIGHT, {
        x: _setup.PADDLE_STARTX,
        y: view4.canvas.height - _setup.PADDLE_HEIGHT - 5
    }, _paddlePngDefault.default);
    const ball = new _ball.Ball(_setup.BALL_SPEED, _setup.BALL_SIZE, {
        x: _setup.BALL_STARTX,
        y: _setup.BALL_STARTY
    }, _ballPngDefault.default);
    const collision = new _collision.Collision();
    gameLoop(view4, bricks, paddle, ball, collision);
}
const view = new _canvasView.CanvasView('#playField');
view.initializeStartButton(startGame);

},{"./view/CanvasView":"5noQJ","./sprites/Paddle":"lwmcw","./images/paddle.png":"9qJSi","./setup":"1ctuX","./helpers":"adjmJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./images/ball.png":"1hIWQ","./sprites/Ball":"17CCB","./Collision":"fOL5u"}],"5noQJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasView", ()=>CanvasView
);
class CanvasView {
    constructor(canvasName){
        this.canvas = document.querySelector(canvasName);
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.startButton = document.querySelector('#start');
        this.information = document.querySelector('#info');
    }
    clear() {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    initializeStartButton(startFunction) {
        this.startButton?.addEventListener('click', ()=>startFunction(this)
        );
    }
    drawScore(score) {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }
    drawInformation(text) {
        if (this.information) this.information.innerHTML = text;
    }
    drawSprite(sprite) {
        if (sprite) this.context?.drawImage(sprite.getImage(), sprite.getPosition().x, sprite.getPosition().y, sprite.getWidth(), sprite.getHeight());
    }
    drawBricks(bricks) {
        bricks.forEach((brick)=>this.drawSprite(brick)
        );
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lwmcw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Paddle", ()=>Paddle
);
class Paddle {
    constructor(speed, width, height, position, imageSource){
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.position = position;
        this.image = new Image();
        this.movingLeft = false;
        this.movingRight = false;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.position = position;
        this.image.src = imageSource;
        document.addEventListener('keydown', (event)=>this.handleKeyDown(event)
        );
        document.addEventListener('keyup', (event)=>this.handleKeyUp(event)
        );
    }
    getSpeed() {
        return this.speed;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getPosition() {
        return this.position;
    }
    getImage() {
        return this.image;
    }
    getMovingLeft() {
        return this.movingLeft;
    }
    getMovingRight() {
        return this.movingRight;
    }
    movePaddle() {
        if (this.movingLeft) this.position.x -= this.speed;
        if (this.movingRight) this.position.x += this.speed;
    }
    handleKeyDown(event) {
        if (event.code === 'ArrowLeft' || event.key === 'ArrowLeft') this.movingLeft = true;
        if (event.code === 'ArrowRight' || event.key === 'ArrowRight') this.movingRight = true;
    }
    handleKeyUp(event) {
        if (event.code === 'ArrowLeft' || event.key === 'ArrowLeft') this.movingLeft = false;
        if (event.code === 'ArrowRight' || event.key === 'ArrowRight') this.movingRight = false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qJSi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "paddle.db428d2d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1ctuX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STAGE_PADDING", ()=>STAGE_PADDING
);
parcelHelpers.export(exports, "STAGE_ROWS", ()=>STAGE_ROWS
);
parcelHelpers.export(exports, "STAGE_COLS", ()=>STAGE_COLS
);
parcelHelpers.export(exports, "BRICK_PADDING", ()=>BRICK_PADDING
);
parcelHelpers.export(exports, "BRICK_WIDTH", ()=>BRICK_WIDTH
);
parcelHelpers.export(exports, "BRICK_HEIGHT", ()=>BRICK_HEIGHT
);
parcelHelpers.export(exports, "PADDLE_WIDTH", ()=>PADDLE_WIDTH
);
parcelHelpers.export(exports, "PADDLE_HEIGHT", ()=>PADDLE_HEIGHT
);
parcelHelpers.export(exports, "PADDLE_STARTX", ()=>PADDLE_STARTX
);
parcelHelpers.export(exports, "PADDLE_SPEED", ()=>PADDLE_SPEED
);
parcelHelpers.export(exports, "BALL_SPEED", ()=>BALL_SPEED
);
parcelHelpers.export(exports, "BALL_SIZE", ()=>BALL_SIZE
);
parcelHelpers.export(exports, "BALL_STARTX", ()=>BALL_STARTX
);
parcelHelpers.export(exports, "BALL_STARTY", ()=>BALL_STARTY
);
parcelHelpers.export(exports, "BRICK_IMAGES", ()=>BRICK_IMAGES
);
parcelHelpers.export(exports, "BRICK_ENERGY", ()=>BRICK_ENERGY
);
parcelHelpers.export(exports, "LEVEL", ()=>LEVEL
);
var _brickRedPng = require("./images/brick-red.png");
var _brickRedPngDefault = parcelHelpers.interopDefault(_brickRedPng);
var _brickBluePng = require("./images/brick-blue.png");
var _brickBluePngDefault = parcelHelpers.interopDefault(_brickBluePng);
var _brickGreenPng = require("./images/brick-green.png");
var _brickGreenPngDefault = parcelHelpers.interopDefault(_brickGreenPng);
var _brickYellowPng = require("./images/brick-yellow.png");
var _brickYellowPngDefault = parcelHelpers.interopDefault(_brickYellowPng);
var _brickPurplePng = require("./images/brick-purple.png");
var _brickPurplePngDefault = parcelHelpers.interopDefault(_brickPurplePng);
// Grab the canvas element for calculating the brick width
// depending on canvas width
const canvas = document.querySelector('#playField');
const STAGE_PADDING = 10;
const STAGE_ROWS = 20;
const STAGE_COLS = 10;
const BRICK_PADDING = 5;
const BRICK_WIDTH = canvas ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING : 100;
const BRICK_HEIGHT = canvas ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING : 30;
const PADDLE_WIDTH = 150;
const PADDLE_HEIGHT = 25;
const PADDLE_STARTX = 450;
const PADDLE_SPEED = 10;
const BALL_SPEED = 5;
const BALL_SIZE = 20;
const BALL_STARTX = 500;
const BALL_STARTY = 400;
const BRICK_IMAGES = {
    1: _brickRedPngDefault.default,
    2: _brickGreenPngDefault.default,
    3: _brickYellowPngDefault.default,
    4: _brickBluePngDefault.default,
    5: _brickPurplePngDefault.default
};
const BRICK_ENERGY = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3 // Purple brick
};
const LEVEL = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    0,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    5,
    5,
    0,
    0, 
];

},{"./images/brick-red.png":"dZSTp","./images/brick-blue.png":"7FQuu","./images/brick-green.png":"7ACfp","./images/brick-yellow.png":"dAZ6p","./images/brick-purple.png":"gFgdV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZSTp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "brick-red.93b1aeab.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7FQuu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "brick-blue.515be4d7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7ACfp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "brick-green.0f9bc967.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dAZ6p":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "brick-yellow.701b8c45.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gFgdV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "brick-purple.cbd6284a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"adjmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBricks", ()=>createBricks
);
var _brick = require("./sprites/Brick");
var _setup = require("./setup");
function createBricks() {
    return _setup.LEVEL.reduce((acumulator, element, index)=>{
        const row = Math.floor((index + 1) / _setup.STAGE_COLS);
        const column = index % _setup.STAGE_COLS;
        const x = _setup.STAGE_PADDING + column * (_setup.BRICK_WIDTH + _setup.BRICK_PADDING);
        const y = _setup.STAGE_PADDING + row * (_setup.BRICK_HEIGHT + _setup.BRICK_PADDING);
        if (element !== 0) return [
            ...acumulator,
            new _brick.Brick(_setup.BRICK_WIDTH, _setup.BRICK_HEIGHT, {
                x,
                y
            }, _setup.BRICK_ENERGY[element], _setup.BRICK_IMAGES[element])
        ];
        else return acumulator;
    }, []);
}

},{"./sprites/Brick":"lHB0T","./setup":"1ctuX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHB0T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Brick", ()=>Brick
);
class Brick {
    constructor(width, height, position, energy, imageSource){
        this.width = width;
        this.height = height;
        this.position = position;
        this.energy = energy;
        this.image = new Image();
        this.width = width;
        this.height = height;
        this.position = position;
        this.energy = energy;
        this.image.src = imageSource;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getPosition() {
        return this.position;
    }
    getEnergy() {
        return this.energy;
    }
    getImage() {
        return this.image;
    }
    setEnergy(value) {
        this.energy = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hIWQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "ball.9af8dd59.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"17CCB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ball", ()=>Ball
);
class Ball {
    constructor(speed, size, position, imageSource){
        this.size = size;
        this.position = position;
        this.image = new Image();
        this.speed = {
            x: speed,
            y: -speed
        };
        this.size = size;
        this.position = position;
        this.image.src = imageSource;
    }
    getSpeed() {
        return this.speed;
    }
    getWidth() {
        return this.size;
    }
    getHeight() {
        return this.size;
    }
    getPosition() {
        return this.position;
    }
    getImage() {
        return this.image;
    }
    changeYDirection() {
        this.speed.y = -this.speed.y;
    }
    changeXDirection() {
        this.speed.x = -this.speed.x;
    }
    moveBall() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOL5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collision", ()=>Collision
);
class Collision {
    checkBallCollision(ball, paddle, view) {
        if (ball.getPosition().x + ball.getWidth() > paddle.getPosition().x && ball.getPosition().x < paddle.getPosition().x + paddle.getWidth() && ball.getPosition().y + ball.getHeight() === paddle.getPosition().y) ball.changeYDirection();
        if (ball.getPosition().x > view.canvas.width - ball.getWidth() || ball.getPosition().x < 0) ball.changeXDirection();
        if (ball.getPosition().y < 0) ball.changeYDirection();
    }
    isCollidingWithBrick(ball, brick) {
        return ball.getPosition().x < brick.getPosition().x + brick.getWidth() && ball.getPosition().x + ball.getWidth() > brick.getPosition().x && ball.getPosition().y < brick.getPosition().y + brick.getHeight() && ball.getPosition().y + ball.getHeight() > brick.getPosition().y;
    }
    isCollidingWithBricks(ball, bricks) {
        let colliding = false;
        bricks.forEach((brick, index)=>{
            if (this.isCollidingWithBrick(ball, brick)) {
                ball.changeYDirection();
                if (brick.getEnergy() === 1) bricks.splice(index, 1);
                else brick.setEnergy(brick.getEnergy() - 1);
                colliding = true;
            }
        });
        return colliding;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lpcHr","jeorp"], "jeorp", "parcelRequire2b52")

//# sourceMappingURL=index.b7a05eb9.js.map
