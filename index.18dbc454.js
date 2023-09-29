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
})({"gEwwu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var Buffer = require("66f832b723e38c23").Buffer;
const fontkit = require("5a74cf0fcb91ff18");
var originalPalette = [];
var customizedPalette = [];
var paletteCode = "";
var shareURL = window.location.href;
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
// For example, converter rgba(67, 255, 100, 255) to #43ff64
function rgbaToHexColor(rgbaColorArray) {
    return "#" + rgbaColorArray.slice(0, 3).map((ele)=>ele.toString(16)).map((ele)=>ele.length == 1 ? "0" + ele : ele) //padding zero to two digits
    .join("");
}
function emojiToUnicode(emoji) {
    var comp;
    if (emoji.length === 1) comp = emoji.charCodeAt(0);
    comp = (emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000;
    if (comp < 0) comp = emoji.charCodeAt(0);
    return `U+${comp.toString("16").toUpperCase()}`;
}
function unicodeToEmoji(unicode) {
    const codePoint = unicode.replace("U+", "");
    const intCodePoint = parseInt(codePoint, 16);
    const character = String.fromCodePoint(intCodePoint);
    return character;
}
// Check if two RGBA colors are equal
function areColorsEqual(rgba1, rgba2) {
    return rgba1.every((component, index)=>component === rgba2[index]);
}
function encodeURL(url) {
    return url.replaceAll(" ", "").replaceAll("rgba", "").replaceAll(",", "*");
}
function decodeURL(url) {
    return url.replaceAll("*", ", ").replaceAll("(", " rgba(");
}
// Get the CSS override colors
function getOverrideStyleString() {
    // Format Example:
    // override-colors:
    // 0 rgba(184, 126, 50, 255),
    // 1 rgba(120, 8, 150, 255),
    // ...
    return customizedPalette.map((rgbaColorArray, idx)=>`${idx} rgba(${rgbaColorArray.join(", ")})`)// If customize colors are different from default colors, record them into overrides 
    .filter((_, idx)=>!areColorsEqual(customizedPalette[idx], originalPalette[idx])).join(", ");
}
// Update the CSS palette
function setOverridePaletteStyle(overrideColors) {
    document.getElementById("palette-overrides-style").innerHTML = `
		@font-palette-values --palette {
			font-family: "Noto Color Emoji";
			base-palette: 0;
			override-colors: ${overrideColors};
		}
		`;
}
function getRGBAFromPicker(paletteIndex, rgbColor) {
    [
        0,
        1,
        2
    ].forEach((idx)=>{
        customizedPalette[paletteIndex][idx] = parseInt(rgbColor.substring(idx * 2, idx * 2 + 2), 16);
    });
}
// Update a palette from input entry
function updateEmojiAndURL() {
    const overrideColors = getOverrideStyleString();
    const thisEmoji = document.getElementById("customized-emoji").innerHTML;
    setOverridePaletteStyle(overrideColors);
    window.location.hash = `${emojiToUnicode(thisEmoji)}-${encodeURIComponent(encodeURL(overrideColors))}`;
    shareURL = window.location.href;
}
async function updateEmoji(thisEmoji, keepPalette) {
    // Fetch Google Font Noto Sans Emoji CSS
    const fontResponse = await fetch("https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&text=" + encodeURIComponent(thisEmoji));
    const fontStyle = await fontResponse.text();
    // Reset CSS style
    document.getElementById("emoji-style").innerHTML = fontStyle;
    document.getElementById("customized-emoji").innerHTML = thisEmoji;
    if (!keepPalette) document.getElementById("palette-overrides-style").innerHTML = "";
    // Get the URL of the woff2 file and convert to binary
    const fontURL = fontStyle.split("\n").filter((ele)=>ele.indexOf("src:") != -1)[0].match(/src:\s+url\(([^)]+)\)/)[1];
    const fontBinary = await (await fetch(fontURL)).arrayBuffer();
    const fontBuffer = new Buffer.from(fontBinary);
    const thisFont = fontkit.create(fontBuffer);
    // Copy default palette to customized palette
    originalPalette = thisFont.CPAL.colorRecords.slice(thisFont.CPAL.colorRecordIndices[0], thisFont.CPAL.colorRecordIndices[0] + thisFont.CPAL.numPaletteEntries).map((ele)=>[
            ele.red,
            ele.green,
            ele.blue,
            ele.alpha
        ]);
    customizedPalette = originalPalette.map((rgbaColorArray)=>[
            ...rgbaColorArray
        ]);
    // Reset color color-pickers
    const colorPickers = document.getElementById("color-pickers");
    while(colorPickers.firstChild)colorPickers.removeChild(colorPickers.firstChild);
    // Check if color picker should be override
    var modifiedColorPickers = {};
    if (paletteCode.length !== 0) paletteCode.split("), ").forEach((rgbColor, _)=>{
        const match = rgbColor.match(/\d+/g).map((str)=>parseInt(str));
        modifiedColorPickers[match[0]] = [
            match[1],
            match[2],
            match[3],
            match[4]
        ];
    });
    // Add each color picker under color-picker DOM
    customizedPalette.forEach((rgbaColorArray, idx)=>{
        const picker = document.createElement("input");
        picker.setAttribute("class", "color-block");
        picker.setAttribute("id", `color-block-${idx}`);
        picker.type = "color";
        if (idx in modifiedColorPickers && keepPalette) picker.value = rgbaToHexColor(modifiedColorPickers[idx]);
        else picker.value = rgbaToHexColor(rgbaColorArray);
        colorPickers.appendChild(picker);
        picker.addEventListener("input", (event)=>{
            getRGBAFromPicker(idx, event.target.value.substring(1));
            updateEmojiAndURL();
        });
    });
    const loadPromises = Array.from(document.fonts.values()).map((fontFace)=>fontFace.load());
    await Promise.all(loadPromises);
    if (!keepPalette) window.location.hash = emojiToUnicode(thisEmoji);
    updateCanvas("reference-canvas", thisEmoji);
}
function updateCanvas(domIdName, thisEmoji) {
    const canvas = document.getElementById(domIdName);
    const ctx = canvas.getContext("2d");
    const scaleProp = 10;
    if (domIdName == "result-canvas") {
        canvas.width = document.getElementById("customized-emoji").clientWidth * scaleProp;
        canvas.height = document.getElementById("customized-emoji").clientHeight * scaleProp;
        ctx.scale(scaleProp, scaleProp);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Get font size from px to em
    const childFontSizePx = parseFloat(window.getComputedStyle(document.getElementById("customized-emoji")).getPropertyValue("font-size"));
    const parentFontSizePx = parseFloat(window.getComputedStyle(document.getElementById("customized-emoji").parentElement).getPropertyValue("font-size"));
    const realFontSizeEm = childFontSizePx / parentFontSizePx;
    // Set canvas
    ctx.font = `${realFontSizeEm}em "Noto Color Emoji"`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    if (domIdName == "result-canvas") ctx.fillText(thisEmoji, canvas.width / (2 * scaleProp), canvas.height / (2 * scaleProp));
    else ctx.fillText(thisEmoji, canvas.width / 2, canvas.height / 2);
}
function getRandomColor() {
    const minVal = 0;
    const maxVal = 255;
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function selectRandomColor() {
    numPicker = document.querySelectorAll(".color-block").length;
    customizedPalette.forEach((_, idx)=>{
        customizedPalette[idx] = [
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            255
        ];
        document.getElementById(`color-block-${idx}`).value = rgbaToHexColor(customizedPalette[idx]);
    });
    updateEmojiAndURL();
}
function selectedFromPicker(thisEmoji) {
    const emojiPickerContainer = document.getElementById("emoji-picker-container");
    if (emojiPickerContainer.style.display === "none") emojiPickerContainer.style.display = "block";
    else emojiPickerContainer.style.display = "none";
    updateEmoji(thisEmoji, false);
}
// See https://github.com/missive/emoji-mart for more info and settings
document.addEventListener("DOMContentLoaded", function() {
    const emojiPickerOptionsDesktop = {
        onEmojiSelect: (res, _)=>selectedFromPicker(res["native"]),
        set: "google",
        emojiSize: 36,
        perLine: 8
    };
    const emojiPickerDesktop = new EmojiMart.Picker(emojiPickerOptionsDesktop);
    document.getElementById("emoji-picker").appendChild(emojiPickerDesktop);
    // RWD
    const emojiPickerButton = document.getElementById("emoji-picker-button");
    const emojiPickerContainer = document.getElementById("emoji-picker-container");
    const emojiPickerOptionsMobile = {
        onEmojiSelect: (res, _)=>selectedFromPicker(res["native"]),
        set: "google",
        emojiSize: 36,
        perLine: 8
    };
    const emojiPickerMobile = new EmojiMart.Picker(emojiPickerOptionsMobile);
    emojiPickerContainer.appendChild(emojiPickerMobile);
    emojiPickerButton.addEventListener("click", function() {
        if (emojiPickerContainer.style.display === "none") emojiPickerContainer.style.display = "block";
        else emojiPickerContainer.style.display = "none";
    });
});
Array.from(document.getElementsByClassName("random-emoji-button")).forEach(function(element) {
    element.addEventListener("click", function() {
        console.log("...\uD83C\uDFB2 Random Select an Emoji \uD83C\uDFB2...");
        updateEmoji(getRandomEmoji(), false);
    });
});
Array.from(document.getElementsByClassName("random-color-button")).forEach(function(element) {
    element.addEventListener("click", function() {
        console.log("...\uD83C\uDFA8 Random Set Colors \uD83C\uDFA8...");
        selectRandomColor();
    });
});
Array.from(document.getElementsByClassName("reset-button")).forEach(function(element) {
    element.addEventListener("click", function() {
        console.log("...\uD83E\uDE84 Restore Palette \uD83E\uDE84...");
        const thisEmoji = document.getElementById("customized-emoji").innerHTML;
        updateEmoji(thisEmoji, false);
    });
});
Array.from(document.getElementsByClassName("download-button")).forEach(function(element) {
    element.addEventListener("click", function() {
        const resultCanvas = document.getElementById("result-canvas");
        updateCanvas("result-canvas", document.getElementById("customized-emoji").innerHTML);
        const dataURL = resultCanvas.toDataURL("image/png");
        // Create an anchor element to trigger the download
        const downloadLink = document.createElement("a");
        console.log(`...💾 Now Downloading Your ${document.getElementById("customized-emoji").innerHTML} 💾 ...`);
        downloadLink.href = dataURL;
        downloadLink.download = `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiOOTD.png`;
        downloadLink.click();
    });
});
Array.from(document.getElementsByClassName("share-facebook")).forEach(function(element) {
    element.addEventListener("click", function() {
        const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`;
        window.open(facebookShareURL, "_blank");
    });
});
Array.from(document.getElementsByClassName("share-twitter")).forEach(function(element) {
    element.addEventListener("click", function() {
        const message = `#EmojiSalon ${shareURL}`;
        const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        window.open(twitterShareURL, "_blank");
    });
});
Array.from(document.getElementsByClassName("share-line")).forEach(function(element) {
    element.addEventListener("click", function() {
        const lineShareURL = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareURL)}`;
        window.open(lineShareURL, "_blank");
    });
});
function showSupportIssueModal() {
    const modal = document.getElementById("supportIssue");
    const closeButton = modal.querySelector(".close");
    modal.style.display = "block";
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === modal) modal.style.display = "none";
    };
}
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    showSupportIssueModal();
    console.log("Oops, your browser seems to not support OpenType COLR/CPALv1 font, please change another browser such as Desktop Chrome or FireFox.");
} else console.log("Great, your browser support OpenType COLR/CPALv1 font!");
// default Emoji
function getRandomEmoji() {
    const defaultEmojis = [
        "\uD83D\uDE00",
        "\uD83D\uDE19",
        "\uD83D\uDE0E",
        "\uD83D\uDE2A",
        "\uD83E\uDD24",
        "\uD83D\uDE34",
        "\uD83D\uDE30",
        "\uD83E\uDEC1",
        "\uD83E\uDDB7",
        "\uD83E\uDDB4",
        "\uD83D\uDC40",
        "\uD83D\uDE80",
        "\uD83D\uDC4D",
        "\uD83E\uDD1F",
        "\uD83E\uDD18",
        "\uD83E\uDD19",
        "\uD83E\uDDDA‍♀️",
        "\uD83E\uDDDA",
        "\uD83E\uDDDA‍♂️",
        "\uD83E\uDDD1‍⚕️",
        "\uD83D\uDC68‍⚕️",
        "\uD83D\uDC69‍⚕️",
        "\uD83E\uDDD1‍\uD83C\uDF93",
        "\uD83D\uDC68‍\uD83C\uDF93",
        "\uD83D\uDC69‍\uD83C\uDF93",
        "\uD83E\uDDD1‍\uD83C\uDFEB",
        "\uD83D\uDC68‍\uD83C\uDFEB",
        "\uD83D\uDC69‍\uD83C\uDFEB",
        "\uD83E\uDDD1‍⚖️",
        "\uD83D\uDC68‍⚖️",
        "\uD83D\uDC69‍⚖️",
        "\uD83C\uDF1F",
        "\uD83E\uDDE4",
        "\uD83C\uDF63",
        "\uD83C\uDF64",
        "\uD83C\uDF65",
        "\uD83E\uDD6E",
        "\uD83C\uDF61",
        "\uD83E\uDD5F",
        "\uD83C\uDF54",
        "\uD83D\uDC08",
        "\uD83D\uDC08‍⬛",
        "\uD83D\uDC1F",
        "\uD83C\uDF55",
        "\uD83C\uDF89",
        "\uD83D\uDC13",
        "\uD83D\uDC31",
        "\uD83C\uDF3A",
        "\uD83C\uDF4E",
        "\uD83C\uDFDB",
        "\uD83D\uDC2D",
        "\uD83D\uDC2E",
        "\uD83D\uDC2F",
        "\uD83D\uDC30",
        "\uD83D\uDC32",
        "\uD83D\uDC0D",
        "\uD83D\uDC34",
        "\uD83D\uDC0F",
        "\uD83D\uDC35",
        "\uD83D\uDC14",
        "\uD83D\uDC36",
        "\uD83D\uDC37",
        "\uD83D\uDC15",
        "\uD83D\uDC11",
        "\uD83D\uDC24",
        "\uD83E\uDD95",
        "\uD83E\uDD96",
        "\uD83D\uDC33",
        "\uD83D\uDC0B",
        "\uD83D\uDC2C",
        "\uD83E\uDD8B",
        "\uD83C\uDF40",
        "\uD83C\uDF52",
        "\uD83C\uDF2D",
        "\uD83C\uDF69",
        "\uD83C\uDFC5",
        "\uD83D\uDE82",
        "\uD83D\uDE97",
        "\uD83C\uDFCD️",
        "\uD83D\uDEF3️",
        "☃️",
        "\uD83E\uDD7B",
        "\uD83E\uDDE5",
        "\uD83D\uDC5C",
        "\uD83D\uDC62",
        "\uD83D\uDCF1",
        "\uD83E\uDDEE",
        "\uD83D\uDDC3️",
        "\uD83D\uDECB️",
        "\uD83E\uDE74",
        "\uD83C\uDFAE",
        "\uD83C\uDFA0",
        "\uD83D\uDEDD",
        "\uD83C\uDFA1",
        "\uD83C\uDFA2",
        "\uD83D\uDC88",
        "\uD83C\uDFAA"
    ];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}
// Set canvas dimensions based on customized-emoji size
const originalCanvas = document.getElementById("reference-canvas");
originalCanvas.width = document.getElementById("customized-emoji").clientWidth;
originalCanvas.height = document.getElementById("customized-emoji").clientHeight;
if (window.location.hash) {
    inputString = window.location.hash.substring(1);
    const parts = inputString.split("-");
    // If url has Emoji info, use it
    document.getElementById("customized-emoji").innerHTML = unicodeToEmoji(parts[0]);
    updateEmoji(unicodeToEmoji(parts[0]), true);
    // If irl has palette info, use it
    if (parts.length > 1) {
        paletteCode = decodeURIComponent(decodeURL(parts[1]));
        setOverridePaletteStyle(paletteCode);
    }
} else updateEmoji(getRandomEmoji(), true);

},{"66f832b723e38c23":"bFT03","5a74cf0fcb91ff18":"5Ty4e"}],"bFT03":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("5d2ce52638114663");
const ieee754 = require("8970417cb9c0302c");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"5d2ce52638114663":"6v4vZ","8970417cb9c0302c":"7GqhP"}],"6v4vZ":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"7GqhP":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"5Ty4e":[function(require,module,exports) {
var $gfJaN$restructure = require("f21b476b3755c378");
var $gfJaN$swchelperslib_define_propertyjs = require("ff6728da855c7440");
var $gfJaN$swchelperslib_ts_decoratejs = require("6aa66445f242ca61");
var $gfJaN$fastdeepequal = require("512c7b618d747e29");
var $gfJaN$unicodeproperties = require("4c80a4567e3a20c2");
var $gfJaN$unicodetrie = require("5389545d6ddd3821");
var $gfJaN$dfa = require("bffd1a7b85ce30bb");
var $gfJaN$clone = require("b4fd531a03fcb1a9");
var $gfJaN$tinyinflate = require("998fb3c74b159a7f");
var $gfJaN$brotlidecompressjs = require("6035591d530ded93");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
var $59aa4ed98453e1d4$exports = {};
$parcel$export($59aa4ed98453e1d4$exports, "logErrors", ()=>$59aa4ed98453e1d4$export$bd5c5d8b8dcafd78);
$parcel$export($59aa4ed98453e1d4$exports, "registerFormat", ()=>$59aa4ed98453e1d4$export$36b2f24e97d43be);
$parcel$export($59aa4ed98453e1d4$exports, "create", ()=>$59aa4ed98453e1d4$export$185802fd694ee1f5);
$parcel$export($59aa4ed98453e1d4$exports, "defaultLanguage", ()=>$59aa4ed98453e1d4$export$42940898df819940);
$parcel$export($59aa4ed98453e1d4$exports, "setDefaultLanguage", ()=>$59aa4ed98453e1d4$export$5157e7780d44cc36);
let $59aa4ed98453e1d4$export$bd5c5d8b8dcafd78 = false;
let $59aa4ed98453e1d4$var$formats = [];
function $59aa4ed98453e1d4$export$36b2f24e97d43be(format) {
    $59aa4ed98453e1d4$var$formats.push(format);
}
function $59aa4ed98453e1d4$export$185802fd694ee1f5(buffer, postscriptName) {
    for(let i = 0; i < $59aa4ed98453e1d4$var$formats.length; i++){
        let format = $59aa4ed98453e1d4$var$formats[i];
        if (format.probe(buffer)) {
            let font = new format(new $gfJaN$restructure.DecodeStream(buffer));
            if (postscriptName) return font.getFont(postscriptName);
            return font;
        }
    }
    throw new Error("Unknown font format");
}
let $59aa4ed98453e1d4$export$42940898df819940 = "en";
function $59aa4ed98453e1d4$export$5157e7780d44cc36(lang = "en") {
    $59aa4ed98453e1d4$export$42940898df819940 = lang;
}
function $3bda6911913b43f0$export$69a3209f1a06c04d(target, key1, descriptor) {
    if (descriptor.get) {
        let get = descriptor.get;
        descriptor.get = function() {
            let value = get.call(this);
            Object.defineProperty(this, key1, {
                value: value
            });
            return value;
        };
    } else if (typeof descriptor.value === "function") {
        let fn = descriptor.value;
        return {
            get () {
                let cache1 = new Map;
                function memoized(...args) {
                    let key = args.length > 0 ? args[0] : "value";
                    if (cache1.has(key)) return cache1.get(key);
                    let result = fn.apply(this, args);
                    cache1.set(key, result);
                    return result;
                }
                Object.defineProperty(this, key1, {
                    value: memoized
                });
                return memoized;
            }
        };
    }
}
let $e4ae0436c91af89f$var$SubHeader = new $gfJaN$restructure.Struct({
    firstCode: $gfJaN$restructure.uint16,
    entryCount: $gfJaN$restructure.uint16,
    idDelta: $gfJaN$restructure.int16,
    idRangeOffset: $gfJaN$restructure.uint16
});
let $e4ae0436c91af89f$var$CmapGroup = new $gfJaN$restructure.Struct({
    startCharCode: $gfJaN$restructure.uint32,
    endCharCode: $gfJaN$restructure.uint32,
    glyphID: $gfJaN$restructure.uint32
});
let $e4ae0436c91af89f$var$UnicodeValueRange = new $gfJaN$restructure.Struct({
    startUnicodeValue: $gfJaN$restructure.uint24,
    additionalCount: $gfJaN$restructure.uint8
});
let $e4ae0436c91af89f$var$UVSMapping = new $gfJaN$restructure.Struct({
    unicodeValue: $gfJaN$restructure.uint24,
    glyphID: $gfJaN$restructure.uint16
});
let $e4ae0436c91af89f$var$DefaultUVS = new $gfJaN$restructure.Array($e4ae0436c91af89f$var$UnicodeValueRange, $gfJaN$restructure.uint32);
let $e4ae0436c91af89f$var$NonDefaultUVS = new $gfJaN$restructure.Array($e4ae0436c91af89f$var$UVSMapping, $gfJaN$restructure.uint32);
let $e4ae0436c91af89f$var$VarSelectorRecord = new $gfJaN$restructure.Struct({
    varSelector: $gfJaN$restructure.uint24,
    defaultUVS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $e4ae0436c91af89f$var$DefaultUVS, {
        type: "parent"
    }),
    nonDefaultUVS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $e4ae0436c91af89f$var$NonDefaultUVS, {
        type: "parent"
    })
});
let $e4ae0436c91af89f$var$CmapSubtable = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    0: {
        length: $gfJaN$restructure.uint16,
        language: $gfJaN$restructure.uint16,
        codeMap: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint8, 256)
    },
    2: {
        length: $gfJaN$restructure.uint16,
        language: $gfJaN$restructure.uint16,
        subHeaderKeys: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, 256),
        subHeaderCount: (t)=>Math.max.apply(Math, t.subHeaderKeys),
        subHeaders: new $gfJaN$restructure.LazyArray($e4ae0436c91af89f$var$SubHeader, "subHeaderCount"),
        glyphIndexArray: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "subHeaderCount")
    },
    4: {
        length: $gfJaN$restructure.uint16,
        language: $gfJaN$restructure.uint16,
        segCountX2: $gfJaN$restructure.uint16,
        segCount: (t)=>t.segCountX2 >> 1,
        searchRange: $gfJaN$restructure.uint16,
        entrySelector: $gfJaN$restructure.uint16,
        rangeShift: $gfJaN$restructure.uint16,
        endCode: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "segCount"),
        reservedPad: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        startCode: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "segCount"),
        idDelta: new $gfJaN$restructure.LazyArray($gfJaN$restructure.int16, "segCount"),
        idRangeOffset: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "segCount"),
        glyphIndexArray: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, (t)=>(t.length - t._currentOffset) / 2)
    },
    6: {
        length: $gfJaN$restructure.uint16,
        language: $gfJaN$restructure.uint16,
        firstCode: $gfJaN$restructure.uint16,
        entryCount: $gfJaN$restructure.uint16,
        glyphIndices: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "entryCount")
    },
    8: {
        reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        length: $gfJaN$restructure.uint32,
        language: $gfJaN$restructure.uint16,
        is32: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint8, 8192),
        nGroups: $gfJaN$restructure.uint32,
        groups: new $gfJaN$restructure.LazyArray($e4ae0436c91af89f$var$CmapGroup, "nGroups")
    },
    10: {
        reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        length: $gfJaN$restructure.uint32,
        language: $gfJaN$restructure.uint32,
        firstCode: $gfJaN$restructure.uint32,
        entryCount: $gfJaN$restructure.uint32,
        glyphIndices: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "numChars")
    },
    12: {
        reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        length: $gfJaN$restructure.uint32,
        language: $gfJaN$restructure.uint32,
        nGroups: $gfJaN$restructure.uint32,
        groups: new $gfJaN$restructure.LazyArray($e4ae0436c91af89f$var$CmapGroup, "nGroups")
    },
    13: {
        reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        length: $gfJaN$restructure.uint32,
        language: $gfJaN$restructure.uint32,
        nGroups: $gfJaN$restructure.uint32,
        groups: new $gfJaN$restructure.LazyArray($e4ae0436c91af89f$var$CmapGroup, "nGroups")
    },
    14: {
        length: $gfJaN$restructure.uint32,
        numRecords: $gfJaN$restructure.uint32,
        varSelectors: new $gfJaN$restructure.LazyArray($e4ae0436c91af89f$var$VarSelectorRecord, "numRecords")
    }
});
let $e4ae0436c91af89f$var$CmapEntry = new $gfJaN$restructure.Struct({
    platformID: $gfJaN$restructure.uint16,
    encodingID: $gfJaN$restructure.uint16,
    table: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $e4ae0436c91af89f$var$CmapSubtable, {
        type: "parent",
        lazy: true
    })
});
var $e4ae0436c91af89f$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numSubtables: $gfJaN$restructure.uint16,
    tables: new $gfJaN$restructure.Array($e4ae0436c91af89f$var$CmapEntry, "numSubtables")
});
var $55a60976afb7c261$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.int32,
    revision: $gfJaN$restructure.int32,
    checkSumAdjustment: $gfJaN$restructure.uint32,
    magicNumber: $gfJaN$restructure.uint32,
    flags: $gfJaN$restructure.uint16,
    unitsPerEm: $gfJaN$restructure.uint16,
    created: new $gfJaN$restructure.Array($gfJaN$restructure.int32, 2),
    modified: new $gfJaN$restructure.Array($gfJaN$restructure.int32, 2),
    xMin: $gfJaN$restructure.int16,
    yMin: $gfJaN$restructure.int16,
    xMax: $gfJaN$restructure.int16,
    yMax: $gfJaN$restructure.int16,
    macStyle: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
        "bold",
        "italic",
        "underline",
        "outline",
        "shadow",
        "condensed",
        "extended"
    ]),
    lowestRecPPEM: $gfJaN$restructure.uint16,
    fontDirectionHint: $gfJaN$restructure.int16,
    indexToLocFormat: $gfJaN$restructure.int16,
    glyphDataFormat: $gfJaN$restructure.int16 // 0 for current format
});
var $dde72b7b5b650596$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.int32,
    ascent: $gfJaN$restructure.int16,
    descent: $gfJaN$restructure.int16,
    lineGap: $gfJaN$restructure.int16,
    advanceWidthMax: $gfJaN$restructure.uint16,
    minLeftSideBearing: $gfJaN$restructure.int16,
    minRightSideBearing: $gfJaN$restructure.int16,
    xMaxExtent: $gfJaN$restructure.int16,
    caretSlopeRise: $gfJaN$restructure.int16,
    caretSlopeRun: $gfJaN$restructure.int16,
    caretOffset: $gfJaN$restructure.int16,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.int16, 4),
    metricDataFormat: $gfJaN$restructure.int16,
    numberOfMetrics: $gfJaN$restructure.uint16 // Number of advance widths in 'hmtx' table
});
let $a7c40184072c9a5b$var$HmtxEntry = new $gfJaN$restructure.Struct({
    advance: $gfJaN$restructure.uint16,
    bearing: $gfJaN$restructure.int16
});
var $a7c40184072c9a5b$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    metrics: new $gfJaN$restructure.LazyArray($a7c40184072c9a5b$var$HmtxEntry, (t)=>t.parent.hhea.numberOfMetrics),
    bearings: new $gfJaN$restructure.LazyArray($gfJaN$restructure.int16, (t)=>t.parent.maxp.numGlyphs - t.parent.hhea.numberOfMetrics)
});
var $521197722369f691$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.int32,
    numGlyphs: $gfJaN$restructure.uint16,
    maxPoints: $gfJaN$restructure.uint16,
    maxContours: $gfJaN$restructure.uint16,
    maxComponentPoints: $gfJaN$restructure.uint16,
    maxComponentContours: $gfJaN$restructure.uint16,
    maxZones: $gfJaN$restructure.uint16,
    maxTwilightPoints: $gfJaN$restructure.uint16,
    maxStorage: $gfJaN$restructure.uint16,
    maxFunctionDefs: $gfJaN$restructure.uint16,
    maxInstructionDefs: $gfJaN$restructure.uint16,
    maxStackElements: $gfJaN$restructure.uint16,
    maxSizeOfInstructions: $gfJaN$restructure.uint16,
    maxComponentElements: $gfJaN$restructure.uint16,
    maxComponentDepth: $gfJaN$restructure.uint16 // Maximum levels of recursion; 1 for simple components
});
function $e2613b812f052cbe$export$badc544e0651b6b1(platformID, encodingID, languageID = 0) {
    if (platformID === 1 && $e2613b812f052cbe$export$479e671907f486d1[languageID]) return $e2613b812f052cbe$export$479e671907f486d1[languageID];
    return $e2613b812f052cbe$export$6fef87b7618bdf0b[platformID][encodingID];
}
const $e2613b812f052cbe$var$SINGLE_BYTE_ENCODINGS = new Set([
    "x-mac-roman",
    "x-mac-cyrillic",
    "iso-8859-6",
    "iso-8859-8"
]);
const $e2613b812f052cbe$var$MAC_ENCODINGS = {
    "x-mac-croatian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ… \xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ",
    "x-mac-gaelic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb… \xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ",
    "x-mac-greek": "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb… ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad",
    "x-mac-icelandic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb… \xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
    "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
    "x-mac-ce": "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb… ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",
    "x-mac-romanian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb… \xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
    "x-mac-turkish": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb… \xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ"
};
const $e2613b812f052cbe$var$encodingCache = new Map();
function $e2613b812f052cbe$export$1dceb3c14ed68bee(encoding) {
    let cached = $e2613b812f052cbe$var$encodingCache.get(encoding);
    if (cached) return cached;
    // These encodings aren't supported by TextDecoder.
    let mapping = $e2613b812f052cbe$var$MAC_ENCODINGS[encoding];
    if (mapping) {
        let res = new Map();
        for(let i = 0; i < mapping.length; i++)res.set(mapping.charCodeAt(i), 0x80 + i);
        $e2613b812f052cbe$var$encodingCache.set(encoding, res);
        return res;
    }
    // Only single byte encodings can be mapped 1:1.
    if ($e2613b812f052cbe$var$SINGLE_BYTE_ENCODINGS.has(encoding)) {
        // TextEncoder only supports utf8, whereas TextDecoder supports legacy encodings.
        // Use this to create a mapping of code points.
        let decoder = new TextDecoder(encoding);
        let mapping = new Uint8Array(0x80);
        for(let i = 0; i < 0x80; i++)mapping[i] = 0x80 + i;
        let res = new Map();
        let s = decoder.decode(mapping);
        for(let i1 = 0; i1 < 0x80; i1++)res.set(s.charCodeAt(i1), 0x80 + i1);
        $e2613b812f052cbe$var$encodingCache.set(encoding, res);
        return res;
    }
}
const $e2613b812f052cbe$export$6fef87b7618bdf0b = [
    // unicode
    [
        "utf16be",
        "utf16be",
        "utf16be",
        "utf16be",
        "utf16be",
        "utf16be"
    ],
    // macintosh
    // Mappings available at http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/
    // 0	Roman                 17	Malayalam
    // 1	Japanese	            18	Sinhalese
    // 2	Traditional Chinese	  19	Burmese
    // 3	Korean	              20	Khmer
    // 4	Arabic	              21	Thai
    // 5	Hebrew	              22	Laotian
    // 6	Greek	                23	Georgian
    // 7	Russian	              24	Armenian
    // 8	RSymbol	              25	Simplified Chinese
    // 9	Devanagari	          26	Tibetan
    // 10	Gurmukhi	            27	Mongolian
    // 11	Gujarati	            28	Geez
    // 12	Oriya	                29	Slavic
    // 13	Bengali	              30	Vietnamese
    // 14	Tamil	                31	Sindhi
    // 15	Telugu	              32	(Uninterpreted)
    // 16	Kannada
    [
        "x-mac-roman",
        "shift-jis",
        "big5",
        "euc-kr",
        "iso-8859-6",
        "iso-8859-8",
        "x-mac-greek",
        "x-mac-cyrillic",
        "x-mac-symbol",
        "x-mac-devanagari",
        "x-mac-gurmukhi",
        "x-mac-gujarati",
        "Oriya",
        "Bengali",
        "Tamil",
        "Telugu",
        "Kannada",
        "Malayalam",
        "Sinhalese",
        "Burmese",
        "Khmer",
        "iso-8859-11",
        "Laotian",
        "Georgian",
        "Armenian",
        "hz-gb-2312",
        "Tibetan",
        "Mongolian",
        "Geez",
        "x-mac-ce",
        "Vietnamese",
        "Sindhi"
    ],
    // ISO (deprecated)
    [
        "ascii"
    ],
    // windows
    // Docs here: http://msdn.microsoft.com/en-us/library/system.text.encoding(v=vs.110).aspx
    [
        "symbol",
        "utf16be",
        "shift-jis",
        "gb18030",
        "big5",
        "x-cp20949",
        "johab",
        null,
        null,
        null,
        "utf16be"
    ]
];
const $e2613b812f052cbe$export$479e671907f486d1 = {
    15: "x-mac-icelandic",
    17: "x-mac-turkish",
    18: "x-mac-croatian",
    24: "x-mac-ce",
    25: "x-mac-ce",
    26: "x-mac-ce",
    27: "x-mac-ce",
    28: "x-mac-ce",
    30: "x-mac-icelandic",
    37: "x-mac-romanian",
    38: "x-mac-ce",
    39: "x-mac-ce",
    40: "x-mac-ce",
    143: "x-mac-inuit",
    146: "x-mac-gaelic"
};
const $e2613b812f052cbe$export$2092376fd002e13 = [
    // unicode
    [],
    {
        0: "en",
        30: "fo",
        60: "ks",
        90: "rw",
        1: "fr",
        31: "fa",
        61: "ku",
        91: "rn",
        2: "de",
        32: "ru",
        62: "sd",
        92: "ny",
        3: "it",
        33: "zh",
        63: "bo",
        93: "mg",
        4: "nl",
        34: "nl-BE",
        64: "ne",
        94: "eo",
        5: "sv",
        35: "ga",
        65: "sa",
        128: "cy",
        6: "es",
        36: "sq",
        66: "mr",
        129: "eu",
        7: "da",
        37: "ro",
        67: "bn",
        130: "ca",
        8: "pt",
        38: "cz",
        68: "as",
        131: "la",
        9: "no",
        39: "sk",
        69: "gu",
        132: "qu",
        10: "he",
        40: "si",
        70: "pa",
        133: "gn",
        11: "ja",
        41: "yi",
        71: "or",
        134: "ay",
        12: "ar",
        42: "sr",
        72: "ml",
        135: "tt",
        13: "fi",
        43: "mk",
        73: "kn",
        136: "ug",
        14: "el",
        44: "bg",
        74: "ta",
        137: "dz",
        15: "is",
        45: "uk",
        75: "te",
        138: "jv",
        16: "mt",
        46: "be",
        76: "si",
        139: "su",
        17: "tr",
        47: "uz",
        77: "my",
        140: "gl",
        18: "hr",
        48: "kk",
        78: "km",
        141: "af",
        19: "zh-Hant",
        49: "az-Cyrl",
        79: "lo",
        142: "br",
        20: "ur",
        50: "az-Arab",
        80: "vi",
        143: "iu",
        21: "hi",
        51: "hy",
        81: "id",
        144: "gd",
        22: "th",
        52: "ka",
        82: "tl",
        145: "gv",
        23: "ko",
        53: "mo",
        83: "ms",
        146: "ga",
        24: "lt",
        54: "ky",
        84: "ms-Arab",
        147: "to",
        25: "pl",
        55: "tg",
        85: "am",
        148: "el-polyton",
        26: "hu",
        56: "tk",
        86: "ti",
        149: "kl",
        27: "es",
        57: "mn-CN",
        87: "om",
        150: "az",
        28: "lv",
        58: "mn",
        88: "so",
        151: "nn",
        29: "se",
        59: "ps",
        89: "sw"
    },
    // ISO (deprecated)
    [],
    {
        0x0436: "af",
        0x4009: "en-IN",
        0x0487: "rw",
        0x0432: "tn",
        0x041C: "sq",
        0x1809: "en-IE",
        0x0441: "sw",
        0x045B: "si",
        0x0484: "gsw",
        0x2009: "en-JM",
        0x0457: "kok",
        0x041B: "sk",
        0x045E: "am",
        0x4409: "en-MY",
        0x0412: "ko",
        0x0424: "sl",
        0x1401: "ar-DZ",
        0x1409: "en-NZ",
        0x0440: "ky",
        0x2C0A: "es-AR",
        0x3C01: "ar-BH",
        0x3409: "en-PH",
        0x0454: "lo",
        0x400A: "es-BO",
        0x0C01: "ar",
        0x4809: "en-SG",
        0x0426: "lv",
        0x340A: "es-CL",
        0x0801: "ar-IQ",
        0x1C09: "en-ZA",
        0x0427: "lt",
        0x240A: "es-CO",
        0x2C01: "ar-JO",
        0x2C09: "en-TT",
        0x082E: "dsb",
        0x140A: "es-CR",
        0x3401: "ar-KW",
        0x0809: "en-GB",
        0x046E: "lb",
        0x1C0A: "es-DO",
        0x3001: "ar-LB",
        0x0409: "en",
        0x042F: "mk",
        0x300A: "es-EC",
        0x1001: "ar-LY",
        0x3009: "en-ZW",
        0x083E: "ms-BN",
        0x440A: "es-SV",
        0x1801: "ary",
        0x0425: "et",
        0x043E: "ms",
        0x100A: "es-GT",
        0x2001: "ar-OM",
        0x0438: "fo",
        0x044C: "ml",
        0x480A: "es-HN",
        0x4001: "ar-QA",
        0x0464: "fil",
        0x043A: "mt",
        0x080A: "es-MX",
        0x0401: "ar-SA",
        0x040B: "fi",
        0x0481: "mi",
        0x4C0A: "es-NI",
        0x2801: "ar-SY",
        0x080C: "fr-BE",
        0x047A: "arn",
        0x180A: "es-PA",
        0x1C01: "aeb",
        0x0C0C: "fr-CA",
        0x044E: "mr",
        0x3C0A: "es-PY",
        0x3801: "ar-AE",
        0x040C: "fr",
        0x047C: "moh",
        0x280A: "es-PE",
        0x2401: "ar-YE",
        0x140C: "fr-LU",
        0x0450: "mn",
        0x500A: "es-PR",
        0x042B: "hy",
        0x180C: "fr-MC",
        0x0850: "mn-CN",
        0x0C0A: "es",
        0x044D: "as",
        0x100C: "fr-CH",
        0x0461: "ne",
        0x040A: "es",
        0x082C: "az-Cyrl",
        0x0462: "fy",
        0x0414: "nb",
        0x540A: "es-US",
        0x042C: "az",
        0x0456: "gl",
        0x0814: "nn",
        0x380A: "es-UY",
        0x046D: "ba",
        0x0437: "ka",
        0x0482: "oc",
        0x200A: "es-VE",
        0x042D: "eu",
        0x0C07: "de-AT",
        0x0448: "or",
        0x081D: "sv-FI",
        0x0423: "be",
        0x0407: "de",
        0x0463: "ps",
        0x041D: "sv",
        0x0845: "bn",
        0x1407: "de-LI",
        0x0415: "pl",
        0x045A: "syr",
        0x0445: "bn-IN",
        0x1007: "de-LU",
        0x0416: "pt",
        0x0428: "tg",
        0x201A: "bs-Cyrl",
        0x0807: "de-CH",
        0x0816: "pt-PT",
        0x085F: "tzm",
        0x141A: "bs",
        0x0408: "el",
        0x0446: "pa",
        0x0449: "ta",
        0x047E: "br",
        0x046F: "kl",
        0x046B: "qu-BO",
        0x0444: "tt",
        0x0402: "bg",
        0x0447: "gu",
        0x086B: "qu-EC",
        0x044A: "te",
        0x0403: "ca",
        0x0468: "ha",
        0x0C6B: "qu",
        0x041E: "th",
        0x0C04: "zh-HK",
        0x040D: "he",
        0x0418: "ro",
        0x0451: "bo",
        0x1404: "zh-MO",
        0x0439: "hi",
        0x0417: "rm",
        0x041F: "tr",
        0x0804: "zh",
        0x040E: "hu",
        0x0419: "ru",
        0x0442: "tk",
        0x1004: "zh-SG",
        0x040F: "is",
        0x243B: "smn",
        0x0480: "ug",
        0x0404: "zh-TW",
        0x0470: "ig",
        0x103B: "smj-NO",
        0x0422: "uk",
        0x0483: "co",
        0x0421: "id",
        0x143B: "smj",
        0x042E: "hsb",
        0x041A: "hr",
        0x045D: "iu",
        0x0C3B: "se-FI",
        0x0420: "ur",
        0x101A: "hr-BA",
        0x085D: "iu-Latn",
        0x043B: "se",
        0x0843: "uz-Cyrl",
        0x0405: "cs",
        0x083C: "ga",
        0x083B: "se-SE",
        0x0443: "uz",
        0x0406: "da",
        0x0434: "xh",
        0x203B: "sms",
        0x042A: "vi",
        0x048C: "prs",
        0x0435: "zu",
        0x183B: "sma-NO",
        0x0452: "cy",
        0x0465: "dv",
        0x0410: "it",
        0x1C3B: "sms",
        0x0488: "wo",
        0x0813: "nl-BE",
        0x0810: "it-CH",
        0x044F: "sa",
        0x0485: "sah",
        0x0413: "nl",
        0x0411: "ja",
        0x1C1A: "sr-Cyrl-BA",
        0x0478: "ii",
        0x0C09: "en-AU",
        0x044B: "kn",
        0x0C1A: "sr",
        0x046A: "yo",
        0x2809: "en-BZ",
        0x043F: "kk",
        0x181A: "sr-Latn-BA",
        0x1009: "en-CA",
        0x0453: "km",
        0x081A: "sr-Latn",
        0x2409: "en-029",
        0x0486: "quc",
        0x046C: "nso"
    }
];
let $51a9f4feb3a3b2b1$var$NameRecord = new $gfJaN$restructure.Struct({
    platformID: $gfJaN$restructure.uint16,
    encodingID: $gfJaN$restructure.uint16,
    languageID: $gfJaN$restructure.uint16,
    nameID: $gfJaN$restructure.uint16,
    length: $gfJaN$restructure.uint16,
    string: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $gfJaN$restructure.String("length", (t)=>$e2613b812f052cbe$export$badc544e0651b6b1(t.platformID, t.encodingID, t.languageID)), {
        type: "parent",
        relativeTo: (ctx)=>ctx.parent.stringOffset,
        allowNull: false
    })
});
let $51a9f4feb3a3b2b1$var$LangTagRecord = new $gfJaN$restructure.Struct({
    length: $gfJaN$restructure.uint16,
    tag: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $gfJaN$restructure.String("length", "utf16be"), {
        type: "parent",
        relativeTo: (ctx)=>ctx.stringOffset
    })
});
var $51a9f4feb3a3b2b1$var$NameTable = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    0: {
        count: $gfJaN$restructure.uint16,
        stringOffset: $gfJaN$restructure.uint16,
        records: new $gfJaN$restructure.Array($51a9f4feb3a3b2b1$var$NameRecord, "count")
    },
    1: {
        count: $gfJaN$restructure.uint16,
        stringOffset: $gfJaN$restructure.uint16,
        records: new $gfJaN$restructure.Array($51a9f4feb3a3b2b1$var$NameRecord, "count"),
        langTagCount: $gfJaN$restructure.uint16,
        langTags: new $gfJaN$restructure.Array($51a9f4feb3a3b2b1$var$LangTagRecord, "langTagCount")
    }
});
var $51a9f4feb3a3b2b1$export$2e2bcd8739ae039 = $51a9f4feb3a3b2b1$var$NameTable;
const $51a9f4feb3a3b2b1$var$NAMES = [
    "copyright",
    "fontFamily",
    "fontSubfamily",
    "uniqueSubfamily",
    "fullName",
    "version",
    "postscriptName",
    "trademark",
    "manufacturer",
    "designer",
    "description",
    "vendorURL",
    "designerURL",
    "license",
    "licenseURL",
    null,
    "preferredFamily",
    "preferredSubfamily",
    "compatibleFull",
    "sampleText",
    "postscriptCIDFontName",
    "wwsFamilyName",
    "wwsSubfamilyName"
];
$51a9f4feb3a3b2b1$var$NameTable.process = function(stream) {
    var records = {};
    for (let record of this.records){
        // find out what language this is for
        let language = $e2613b812f052cbe$export$2092376fd002e13[record.platformID][record.languageID];
        if (language == null && this.langTags != null && record.languageID >= 0x8000) language = this.langTags[record.languageID - 0x8000].tag;
        if (language == null) language = record.platformID + "-" + record.languageID;
        // if the nameID is >= 256, it is a font feature record (AAT)
        let key = record.nameID >= 256 ? "fontFeatures" : $51a9f4feb3a3b2b1$var$NAMES[record.nameID] || record.nameID;
        if (records[key] == null) records[key] = {};
        let obj = records[key];
        if (record.nameID >= 256) obj = obj[record.nameID] || (obj[record.nameID] = {});
        if (typeof record.string === "string" || typeof obj[language] !== "string") obj[language] = record.string;
    }
    this.records = records;
};
$51a9f4feb3a3b2b1$var$NameTable.preEncode = function() {
    if (Array.isArray(this.records)) return;
    this.version = 0;
    let records = [];
    for(let key in this.records){
        let val = this.records[key];
        if (key === "fontFeatures") continue;
        records.push({
            platformID: 3,
            encodingID: 1,
            languageID: 0x409,
            nameID: $51a9f4feb3a3b2b1$var$NAMES.indexOf(key),
            length: val.en.length * 2,
            string: val.en
        });
        if (key === "postscriptName") records.push({
            platformID: 1,
            encodingID: 0,
            languageID: 0,
            nameID: $51a9f4feb3a3b2b1$var$NAMES.indexOf(key),
            length: val.en.length,
            string: val.en
        });
    }
    this.records = records;
    this.count = records.length;
    this.stringOffset = $51a9f4feb3a3b2b1$var$NameTable.size(this, null, false);
};
var $114ea85db469b435$var$OS2 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    header: {
        xAvgCharWidth: $gfJaN$restructure.int16,
        usWeightClass: $gfJaN$restructure.uint16,
        usWidthClass: $gfJaN$restructure.uint16,
        fsType: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
            null,
            "noEmbedding",
            "viewOnly",
            "editable",
            null,
            null,
            null,
            null,
            "noSubsetting",
            "bitmapOnly"
        ]),
        ySubscriptXSize: $gfJaN$restructure.int16,
        ySubscriptYSize: $gfJaN$restructure.int16,
        ySubscriptXOffset: $gfJaN$restructure.int16,
        ySubscriptYOffset: $gfJaN$restructure.int16,
        ySuperscriptXSize: $gfJaN$restructure.int16,
        ySuperscriptYSize: $gfJaN$restructure.int16,
        ySuperscriptXOffset: $gfJaN$restructure.int16,
        ySuperscriptYOffset: $gfJaN$restructure.int16,
        yStrikeoutSize: $gfJaN$restructure.int16,
        yStrikeoutPosition: $gfJaN$restructure.int16,
        sFamilyClass: $gfJaN$restructure.int16,
        panose: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, 10),
        ulCharRange: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, 4),
        vendorID: new $gfJaN$restructure.String(4),
        fsSelection: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
            "italic",
            "underscore",
            "negative",
            "outlined",
            "strikeout",
            "bold",
            "regular",
            "useTypoMetrics",
            "wws",
            "oblique"
        ]),
        usFirstCharIndex: $gfJaN$restructure.uint16,
        usLastCharIndex: $gfJaN$restructure.uint16 // The maximum Unicode index in this font
    },
    // The Apple version of this table ends here, but the Microsoft one continues on...
    0: {},
    1: {
        typoAscender: $gfJaN$restructure.int16,
        typoDescender: $gfJaN$restructure.int16,
        typoLineGap: $gfJaN$restructure.int16,
        winAscent: $gfJaN$restructure.uint16,
        winDescent: $gfJaN$restructure.uint16,
        codePageRange: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, 2)
    },
    2: {
        // these should be common with version 1 somehow
        typoAscender: $gfJaN$restructure.int16,
        typoDescender: $gfJaN$restructure.int16,
        typoLineGap: $gfJaN$restructure.int16,
        winAscent: $gfJaN$restructure.uint16,
        winDescent: $gfJaN$restructure.uint16,
        codePageRange: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, 2),
        xHeight: $gfJaN$restructure.int16,
        capHeight: $gfJaN$restructure.int16,
        defaultChar: $gfJaN$restructure.uint16,
        breakChar: $gfJaN$restructure.uint16,
        maxContent: $gfJaN$restructure.uint16
    },
    5: {
        typoAscender: $gfJaN$restructure.int16,
        typoDescender: $gfJaN$restructure.int16,
        typoLineGap: $gfJaN$restructure.int16,
        winAscent: $gfJaN$restructure.uint16,
        winDescent: $gfJaN$restructure.uint16,
        codePageRange: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, 2),
        xHeight: $gfJaN$restructure.int16,
        capHeight: $gfJaN$restructure.int16,
        defaultChar: $gfJaN$restructure.uint16,
        breakChar: $gfJaN$restructure.uint16,
        maxContent: $gfJaN$restructure.uint16,
        usLowerOpticalPointSize: $gfJaN$restructure.uint16,
        usUpperOpticalPointSize: $gfJaN$restructure.uint16
    }
});
let $114ea85db469b435$var$versions = $114ea85db469b435$var$OS2.versions;
$114ea85db469b435$var$versions[3] = $114ea85db469b435$var$versions[4] = $114ea85db469b435$var$versions[2];
var $114ea85db469b435$export$2e2bcd8739ae039 = $114ea85db469b435$var$OS2;
var $f93b30299e1ea0f5$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.fixed32, {
    header: {
        italicAngle: $gfJaN$restructure.fixed32,
        underlinePosition: $gfJaN$restructure.int16,
        underlineThickness: $gfJaN$restructure.int16,
        isFixedPitch: $gfJaN$restructure.uint32,
        minMemType42: $gfJaN$restructure.uint32,
        maxMemType42: $gfJaN$restructure.uint32,
        minMemType1: $gfJaN$restructure.uint32,
        maxMemType1: $gfJaN$restructure.uint32 // Maximum memory usage when a TrueType font is downloaded as a Type 1 font
    },
    1: {},
    2: {
        numberOfGlyphs: $gfJaN$restructure.uint16,
        glyphNameIndex: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numberOfGlyphs"),
        names: new $gfJaN$restructure.Array(new $gfJaN$restructure.String($gfJaN$restructure.uint8))
    },
    2.5: {
        numberOfGlyphs: $gfJaN$restructure.uint16,
        offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, "numberOfGlyphs")
    },
    3: {},
    4: {
        map: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, (t)=>t.parent.maxp.numGlyphs)
    }
});
var $8fb09b0f473d61a0$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    controlValues: new $gfJaN$restructure.Array($gfJaN$restructure.int16)
});
var // These instructions are known as the font program. The main use of this table
// is for the definition of functions that are used in many different glyph programs.
$873d79fea57d3161$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    instructions: new $gfJaN$restructure.Array($gfJaN$restructure.uint8)
});
let $83c4155666d50c37$var$loca = new $gfJaN$restructure.VersionedStruct("head.indexToLocFormat", {
    0: {
        offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint16)
    },
    1: {
        offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint32)
    }
});
$83c4155666d50c37$var$loca.process = function() {
    if (this.version === 0 && !this._processed) {
        for(let i = 0; i < this.offsets.length; i++)this.offsets[i] <<= 1;
        this._processed = true;
    }
};
$83c4155666d50c37$var$loca.preEncode = function() {
    if (this.version === 0 && this._processed !== false) {
        for(let i = 0; i < this.offsets.length; i++)this.offsets[i] >>>= 1;
        this._processed = false;
    }
};
var $83c4155666d50c37$export$2e2bcd8739ae039 = $83c4155666d50c37$var$loca;
var $b12598db7cdf7042$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    controlValueProgram: new $gfJaN$restructure.Array($gfJaN$restructure.uint8)
});
var $7707bdf21a3d89cc$export$2e2bcd8739ae039 = new $gfJaN$restructure.Array(new $gfJaN$restructure.Buffer);
class $9eaea3754914a290$export$2e2bcd8739ae039 {
    getCFFVersion(ctx) {
        while(ctx && !ctx.hdrSize)ctx = ctx.parent;
        return ctx ? ctx.version : -1;
    }
    decode(stream, parent) {
        let version = this.getCFFVersion(parent);
        let count = version >= 2 ? stream.readUInt32BE() : stream.readUInt16BE();
        if (count === 0) return [];
        let offSize = stream.readUInt8();
        let offsetType;
        if (offSize === 1) offsetType = $gfJaN$restructure.uint8;
        else if (offSize === 2) offsetType = $gfJaN$restructure.uint16;
        else if (offSize === 3) offsetType = $gfJaN$restructure.uint24;
        else if (offSize === 4) offsetType = $gfJaN$restructure.uint32;
        else throw new Error(`Bad offset size in CFFIndex: ${offSize} ${stream.pos}`);
        let ret = [];
        let startPos = stream.pos + (count + 1) * offSize - 1;
        let start = offsetType.decode(stream);
        for(let i = 0; i < count; i++){
            let end = offsetType.decode(stream);
            if (this.type != null) {
                let pos = stream.pos;
                stream.pos = startPos + start;
                parent.length = end - start;
                ret.push(this.type.decode(stream, parent));
                stream.pos = pos;
            } else ret.push({
                offset: startPos + start,
                length: end - start
            });
            start = end;
        }
        stream.pos = startPos + start;
        return ret;
    }
    size(arr, parent) {
        let size = 2;
        if (arr.length === 0) return size;
        let type = this.type || new $gfJaN$restructure.Buffer;
        // find maximum offset to detminine offset type
        let offset = 1;
        for(let i = 0; i < arr.length; i++){
            let item = arr[i];
            offset += type.size(item, parent);
        }
        let offsetType;
        if (offset <= 0xff) offsetType = $gfJaN$restructure.uint8;
        else if (offset <= 0xffff) offsetType = $gfJaN$restructure.uint16;
        else if (offset <= 0xffffff) offsetType = $gfJaN$restructure.uint24;
        else if (offset <= 0xffffffff) offsetType = $gfJaN$restructure.uint32;
        else throw new Error("Bad offset in CFFIndex");
        size += 1 + offsetType.size() * (arr.length + 1);
        size += offset - 1;
        return size;
    }
    encode(stream, arr, parent) {
        stream.writeUInt16BE(arr.length);
        if (arr.length === 0) return;
        let type = this.type || new $gfJaN$restructure.Buffer;
        // find maximum offset to detminine offset type
        let sizes = [];
        let offset = 1;
        for (let item of arr){
            let s = type.size(item, parent);
            sizes.push(s);
            offset += s;
        }
        let offsetType;
        if (offset <= 0xff) offsetType = $gfJaN$restructure.uint8;
        else if (offset <= 0xffff) offsetType = $gfJaN$restructure.uint16;
        else if (offset <= 0xffffff) offsetType = $gfJaN$restructure.uint24;
        else if (offset <= 0xffffffff) offsetType = $gfJaN$restructure.uint32;
        else throw new Error("Bad offset in CFFIndex");
        // write offset size
        stream.writeUInt8(offsetType.size());
        // write elements
        offset = 1;
        offsetType.encode(stream, offset);
        for (let size of sizes){
            offset += size;
            offsetType.encode(stream, offset);
        }
        for (let item1 of arr)type.encode(stream, item1, parent);
        return;
    }
    constructor(type){
        this.type = type;
    }
}
const $f77b592c17132d70$var$FLOAT_EOF = 0xf;
const $f77b592c17132d70$var$FLOAT_LOOKUP = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "E",
    "E-",
    null,
    "-"
];
const $f77b592c17132d70$var$FLOAT_ENCODE_LOOKUP = {
    ".": 10,
    "E": 11,
    "E-": 12,
    "-": 14
};
class $f77b592c17132d70$export$2e2bcd8739ae039 {
    static decode(stream, value) {
        if (32 <= value && value <= 246) return value - 139;
        if (247 <= value && value <= 250) return (value - 247) * 256 + stream.readUInt8() + 108;
        if (251 <= value && value <= 254) return -(value - 251) * 256 - stream.readUInt8() - 108;
        if (value === 28) return stream.readInt16BE();
        if (value === 29) return stream.readInt32BE();
        if (value === 30) {
            let str = "";
            while(true){
                let b = stream.readUInt8();
                let n1 = b >> 4;
                if (n1 === $f77b592c17132d70$var$FLOAT_EOF) break;
                str += $f77b592c17132d70$var$FLOAT_LOOKUP[n1];
                let n2 = b & 15;
                if (n2 === $f77b592c17132d70$var$FLOAT_EOF) break;
                str += $f77b592c17132d70$var$FLOAT_LOOKUP[n2];
            }
            return parseFloat(str);
        }
        return null;
    }
    static size(value) {
        // if the value needs to be forced to the largest size (32 bit)
        // e.g. for unknown pointers, set to 32768
        if (value.forceLarge) value = 32768;
        if ((value | 0) !== value) {
            let str = "" + value;
            return 1 + Math.ceil((str.length + 1) / 2);
        } else if (-107 <= value && value <= 107) return 1;
        else if (108 <= value && value <= 1131 || -1131 <= value && value <= -108) return 2;
        else if (-32768 <= value && value <= 32767) return 3;
        else return 5;
    }
    static encode(stream, value) {
        // if the value needs to be forced to the largest size (32 bit)
        // e.g. for unknown pointers, save the old value and set to 32768
        let val = Number(value);
        if (value.forceLarge) {
            stream.writeUInt8(29);
            return stream.writeInt32BE(val);
        } else if ((val | 0) !== val) {
            stream.writeUInt8(30);
            let str = "" + val;
            for(let i = 0; i < str.length; i += 2){
                let c1 = str[i];
                let n1 = $f77b592c17132d70$var$FLOAT_ENCODE_LOOKUP[c1] || +c1;
                if (i === str.length - 1) var n2 = $f77b592c17132d70$var$FLOAT_EOF;
                else {
                    let c2 = str[i + 1];
                    var n2 = $f77b592c17132d70$var$FLOAT_ENCODE_LOOKUP[c2] || +c2;
                }
                stream.writeUInt8(n1 << 4 | n2 & 15);
            }
            if (n2 !== $f77b592c17132d70$var$FLOAT_EOF) return stream.writeUInt8($f77b592c17132d70$var$FLOAT_EOF << 4);
        } else if (-107 <= val && val <= 107) return stream.writeUInt8(val + 139);
        else if (108 <= val && val <= 1131) {
            val -= 108;
            stream.writeUInt8((val >> 8) + 247);
            return stream.writeUInt8(val & 0xff);
        } else if (-1131 <= val && val <= -108) {
            val = -val - 108;
            stream.writeUInt8((val >> 8) + 251);
            return stream.writeUInt8(val & 0xff);
        } else if (-32768 <= val && val <= 32767) {
            stream.writeUInt8(28);
            return stream.writeInt16BE(val);
        } else {
            stream.writeUInt8(29);
            return stream.writeInt32BE(val);
        }
    }
}
class $efe622f40a9c35bd$export$2e2bcd8739ae039 {
    decodeOperands(type, stream, ret, operands) {
        if (Array.isArray(type)) return operands.map((op, i)=>this.decodeOperands(type[i], stream, ret, [
                op
            ]));
        else if (type.decode != null) return type.decode(stream, ret, operands);
        else switch(type){
            case "number":
            case "offset":
            case "sid":
                return operands[0];
            case "boolean":
                return !!operands[0];
            default:
                return operands;
        }
    }
    encodeOperands(type, stream, ctx, operands) {
        if (Array.isArray(type)) return operands.map((op, i)=>this.encodeOperands(type[i], stream, ctx, op)[0]);
        else if (type.encode != null) return type.encode(stream, operands, ctx);
        else if (typeof operands === "number") return [
            operands
        ];
        else if (typeof operands === "boolean") return [
            +operands
        ];
        else if (Array.isArray(operands)) return operands;
        else return [
            operands
        ];
    }
    decode(stream, parent) {
        let end = stream.pos + parent.length;
        let ret = {};
        let operands = [];
        // define hidden properties
        Object.defineProperties(ret, {
            parent: {
                value: parent
            },
            _startOffset: {
                value: stream.pos
            }
        });
        // fill in defaults
        for(let key in this.fields){
            let field = this.fields[key];
            ret[field[1]] = field[3];
        }
        while(stream.pos < end){
            let b = stream.readUInt8();
            if (b < 28) {
                if (b === 12) b = b << 8 | stream.readUInt8();
                let field = this.fields[b];
                if (!field) throw new Error(`Unknown operator ${b}`);
                let val = this.decodeOperands(field[2], stream, ret, operands);
                if (val != null) {
                    if (val instanceof $gfJaN$restructure.PropertyDescriptor) Object.defineProperty(ret, field[1], val);
                    else ret[field[1]] = val;
                }
                operands = [];
            } else operands.push($f77b592c17132d70$export$2e2bcd8739ae039.decode(stream, b));
        }
        return ret;
    }
    size(dict, parent, includePointers = true) {
        let ctx = {
            parent: parent,
            val: dict,
            pointerSize: 0,
            startOffset: parent.startOffset || 0
        };
        let len = 0;
        for(let k in this.fields){
            let field = this.fields[k];
            let val = dict[field[1]];
            if (val == null || $parcel$interopDefault($gfJaN$fastdeepequal)(val, field[3])) continue;
            let operands = this.encodeOperands(field[2], null, ctx, val);
            for (let op of operands)len += $f77b592c17132d70$export$2e2bcd8739ae039.size(op);
            let key = Array.isArray(field[0]) ? field[0] : [
                field[0]
            ];
            len += key.length;
        }
        if (includePointers) len += ctx.pointerSize;
        return len;
    }
    encode(stream, dict, parent) {
        let ctx = {
            pointers: [],
            startOffset: stream.pos,
            parent: parent,
            val: dict,
            pointerSize: 0
        };
        ctx.pointerOffset = stream.pos + this.size(dict, ctx, false);
        for (let field of this.ops){
            let val = dict[field[1]];
            if (val == null || $parcel$interopDefault($gfJaN$fastdeepequal)(val, field[3])) continue;
            let operands = this.encodeOperands(field[2], stream, ctx, val);
            for (let op of operands)$f77b592c17132d70$export$2e2bcd8739ae039.encode(stream, op);
            let key = Array.isArray(field[0]) ? field[0] : [
                field[0]
            ];
            for (let op1 of key)stream.writeUInt8(op1);
        }
        let i = 0;
        while(i < ctx.pointers.length){
            let ptr = ctx.pointers[i++];
            ptr.type.encode(stream, ptr.val, ptr.parent);
        }
        return;
    }
    constructor(ops = []){
        this.ops = ops;
        this.fields = {};
        for (let field of ops){
            let key = Array.isArray(field[0]) ? field[0][0] << 8 | field[0][1] : field[0];
            this.fields[key] = field;
        }
    }
}
class $4aa1b0749c2770f8$export$2e2bcd8739ae039 extends $gfJaN$restructure.Pointer {
    decode(stream, parent, operands) {
        this.offsetType = {
            decode: ()=>operands[0]
        };
        return super.decode(stream, parent, operands);
    }
    encode(stream, value, ctx) {
        if (!stream) {
            // compute the size (so ctx.pointerSize is correct)
            this.offsetType = {
                size: ()=>0
            };
            this.size(value, ctx);
            return [
                new $4aa1b0749c2770f8$var$Ptr(0)
            ];
        }
        let ptr = null;
        this.offsetType = {
            encode: (stream, val)=>ptr = val
        };
        super.encode(stream, value, ctx);
        return [
            new $4aa1b0749c2770f8$var$Ptr(ptr)
        ];
    }
    constructor(type, options = {}){
        if (options.type == null) options.type = "global";
        super(null, type, options);
    }
}
class $4aa1b0749c2770f8$var$Ptr {
    valueOf() {
        return this.val;
    }
    constructor(val){
        this.val = val;
        this.forceLarge = true;
    }
}
class $15a0cbb3d09cf7ee$var$CFFBlendOp {
    static decode(stream, parent, operands) {
        let numBlends = operands.pop();
        // TODO: actually blend. For now just consume the deltas
        // since we don't use any of the values anyway.
        while(operands.length > numBlends)operands.pop();
    }
}
var $15a0cbb3d09cf7ee$export$2e2bcd8739ae039 = new $efe622f40a9c35bd$export$2e2bcd8739ae039([
    // key       name                    type                                          default
    [
        6,
        "BlueValues",
        "delta",
        null
    ],
    [
        7,
        "OtherBlues",
        "delta",
        null
    ],
    [
        8,
        "FamilyBlues",
        "delta",
        null
    ],
    [
        9,
        "FamilyOtherBlues",
        "delta",
        null
    ],
    [
        [
            12,
            9
        ],
        "BlueScale",
        "number",
        0.039625
    ],
    [
        [
            12,
            10
        ],
        "BlueShift",
        "number",
        7
    ],
    [
        [
            12,
            11
        ],
        "BlueFuzz",
        "number",
        1
    ],
    [
        10,
        "StdHW",
        "number",
        null
    ],
    [
        11,
        "StdVW",
        "number",
        null
    ],
    [
        [
            12,
            12
        ],
        "StemSnapH",
        "delta",
        null
    ],
    [
        [
            12,
            13
        ],
        "StemSnapV",
        "delta",
        null
    ],
    [
        [
            12,
            14
        ],
        "ForceBold",
        "boolean",
        false
    ],
    [
        [
            12,
            17
        ],
        "LanguageGroup",
        "number",
        0
    ],
    [
        [
            12,
            18
        ],
        "ExpansionFactor",
        "number",
        0.06
    ],
    [
        [
            12,
            19
        ],
        "initialRandomSeed",
        "number",
        0
    ],
    [
        20,
        "defaultWidthX",
        "number",
        0
    ],
    [
        21,
        "nominalWidthX",
        "number",
        0
    ],
    [
        22,
        "vsindex",
        "number",
        0
    ],
    [
        23,
        "blend",
        $15a0cbb3d09cf7ee$var$CFFBlendOp,
        null
    ],
    [
        19,
        "Subrs",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039(new $9eaea3754914a290$export$2e2bcd8739ae039, {
            type: "local"
        }),
        null
    ]
]);
var // not edit. Length should be 391.
$860d3574d7fa3a51$export$2e2bcd8739ae039 = [
    ".notdef",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "questiondown",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "AE",
    "ordfeminine",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "ae",
    "dotlessi",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
    "onesuperior",
    "logicalnot",
    "mu",
    "trademark",
    "Eth",
    "onehalf",
    "plusminus",
    "Thorn",
    "onequarter",
    "divide",
    "brokenbar",
    "degree",
    "thorn",
    "threequarters",
    "twosuperior",
    "registered",
    "minus",
    "eth",
    "multiply",
    "threesuperior",
    "copyright",
    "Aacute",
    "Acircumflex",
    "Adieresis",
    "Agrave",
    "Aring",
    "Atilde",
    "Ccedilla",
    "Eacute",
    "Ecircumflex",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Ntilde",
    "Oacute",
    "Ocircumflex",
    "Odieresis",
    "Ograve",
    "Otilde",
    "Scaron",
    "Uacute",
    "Ucircumflex",
    "Udieresis",
    "Ugrave",
    "Yacute",
    "Ydieresis",
    "Zcaron",
    "aacute",
    "acircumflex",
    "adieresis",
    "agrave",
    "aring",
    "atilde",
    "ccedilla",
    "eacute",
    "ecircumflex",
    "edieresis",
    "egrave",
    "iacute",
    "icircumflex",
    "idieresis",
    "igrave",
    "ntilde",
    "oacute",
    "ocircumflex",
    "odieresis",
    "ograve",
    "otilde",
    "scaron",
    "uacute",
    "ucircumflex",
    "udieresis",
    "ugrave",
    "yacute",
    "ydieresis",
    "zcaron",
    "exclamsmall",
    "Hungarumlautsmall",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "Dotaccentsmall",
    "Macronsmall",
    "figuredash",
    "hypheninferior",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall",
    "001.000",
    "001.001",
    "001.002",
    "001.003",
    "Black",
    "Bold",
    "Book",
    "Light",
    "Medium",
    "Regular",
    "Roman",
    "Semibold"
];
let $c4ffe47cba1d7f36$export$dee0027060fa13bd = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "",
    "questiondown",
    "",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "",
    "ring",
    "cedilla",
    "",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "AE",
    "",
    "ordfeminine",
    "",
    "",
    "",
    "",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "",
    "",
    "",
    "",
    "",
    "ae",
    "",
    "",
    "",
    "dotlessi",
    "",
    "",
    "lslash",
    "oslash",
    "oe",
    "germandbls"
];
let $c4ffe47cba1d7f36$export$4f58f497e14a53c3 = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclamsmall",
    "Hungarumlautsmall",
    "",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "",
    "",
    "isuperior",
    "",
    "",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "",
    "",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "",
    "",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "",
    "Dotaccentsmall",
    "",
    "",
    "Macronsmall",
    "",
    "",
    "figuredash",
    "hypheninferior",
    "",
    "",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "",
    "",
    "",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "",
    "",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall"
];
let $1e7c7c16984e4427$export$c33b50336c234f16 = [
    ".notdef",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "questiondown",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "AE",
    "ordfeminine",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "ae",
    "dotlessi",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
    "onesuperior",
    "logicalnot",
    "mu",
    "trademark",
    "Eth",
    "onehalf",
    "plusminus",
    "Thorn",
    "onequarter",
    "divide",
    "brokenbar",
    "degree",
    "thorn",
    "threequarters",
    "twosuperior",
    "registered",
    "minus",
    "eth",
    "multiply",
    "threesuperior",
    "copyright",
    "Aacute",
    "Acircumflex",
    "Adieresis",
    "Agrave",
    "Aring",
    "Atilde",
    "Ccedilla",
    "Eacute",
    "Ecircumflex",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Ntilde",
    "Oacute",
    "Ocircumflex",
    "Odieresis",
    "Ograve",
    "Otilde",
    "Scaron",
    "Uacute",
    "Ucircumflex",
    "Udieresis",
    "Ugrave",
    "Yacute",
    "Ydieresis",
    "Zcaron",
    "aacute",
    "acircumflex",
    "adieresis",
    "agrave",
    "aring",
    "atilde",
    "ccedilla",
    "eacute",
    "ecircumflex",
    "edieresis",
    "egrave",
    "iacute",
    "icircumflex",
    "idieresis",
    "igrave",
    "ntilde",
    "oacute",
    "ocircumflex",
    "odieresis",
    "ograve",
    "otilde",
    "scaron",
    "uacute",
    "ucircumflex",
    "udieresis",
    "ugrave",
    "yacute",
    "ydieresis",
    "zcaron"
];
let $1e7c7c16984e4427$export$3ed0f9e1fee8d489 = [
    ".notdef",
    "space",
    "exclamsmall",
    "Hungarumlautsmall",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "Dotaccentsmall",
    "Macronsmall",
    "figuredash",
    "hypheninferior",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall"
];
let $1e7c7c16984e4427$export$dc28be11139d4120 = [
    ".notdef",
    "space",
    "dollaroldstyle",
    "dollarsuperior",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "hyphensuperior",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "centoldstyle",
    "figuredash",
    "hypheninferior",
    "onequarter",
    "onehalf",
    "threequarters",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior"
];
//########################
// Scripts and Languages #
//########################
let $b6dd765146ad212a$var$LangSysTable = new $gfJaN$restructure.Struct({
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    reqFeatureIndex: $gfJaN$restructure.uint16,
    featureCount: $gfJaN$restructure.uint16,
    featureIndexes: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "featureCount")
});
let $b6dd765146ad212a$var$LangSysRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    langSys: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$LangSysTable, {
        type: "parent"
    })
});
let $b6dd765146ad212a$var$Script = new $gfJaN$restructure.Struct({
    defaultLangSys: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$LangSysTable),
    count: $gfJaN$restructure.uint16,
    langSysRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LangSysRecord, "count")
});
let $b6dd765146ad212a$var$ScriptRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    script: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$Script, {
        type: "parent"
    })
});
let $b6dd765146ad212a$export$3e15fc05ce864229 = new $gfJaN$restructure.Array($b6dd765146ad212a$var$ScriptRecord, $gfJaN$restructure.uint16);
//#######################
// Features and Lookups #
//#######################
let $b6dd765146ad212a$var$FeatureParams = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    nameID: $gfJaN$restructure.uint16
});
let $b6dd765146ad212a$export$6e91cf7616333d5 = new $gfJaN$restructure.Struct({
    featureParams: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$FeatureParams),
    lookupCount: $gfJaN$restructure.uint16,
    lookupListIndexes: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "lookupCount")
});
let $b6dd765146ad212a$var$FeatureRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    feature: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$6e91cf7616333d5, {
        type: "parent"
    })
});
let $b6dd765146ad212a$export$aa18130def4b6cb4 = new $gfJaN$restructure.Array($b6dd765146ad212a$var$FeatureRecord, $gfJaN$restructure.uint16);
let $b6dd765146ad212a$var$LookupFlags = new $gfJaN$restructure.Struct({
    markAttachmentType: $gfJaN$restructure.uint8,
    flags: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint8, [
        "rightToLeft",
        "ignoreBaseGlyphs",
        "ignoreLigatures",
        "ignoreMarks",
        "useMarkFilteringSet"
    ])
});
function $b6dd765146ad212a$export$df0008c6ff2da22a(SubTable) {
    let Lookup = new $gfJaN$restructure.Struct({
        lookupType: $gfJaN$restructure.uint16,
        flags: $b6dd765146ad212a$var$LookupFlags,
        subTableCount: $gfJaN$restructure.uint16,
        subTables: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, SubTable), "subTableCount"),
        markFilteringSet: new $gfJaN$restructure.Optional($gfJaN$restructure.uint16, (t)=>t.flags.flags.useMarkFilteringSet)
    });
    return new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, Lookup), $gfJaN$restructure.uint16);
}
//#################
// Coverage Table #
//#################
let $b6dd765146ad212a$var$RangeRecord = new $gfJaN$restructure.Struct({
    start: $gfJaN$restructure.uint16,
    end: $gfJaN$restructure.uint16,
    startCoverageIndex: $gfJaN$restructure.uint16
});
let $b6dd765146ad212a$export$17608c3f81a6111 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        glyphCount: $gfJaN$restructure.uint16,
        glyphs: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "glyphCount")
    },
    2: {
        rangeCount: $gfJaN$restructure.uint16,
        rangeRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$RangeRecord, "rangeCount")
    }
});
//#########################
// Class Definition Table #
//#########################
let $b6dd765146ad212a$var$ClassRangeRecord = new $gfJaN$restructure.Struct({
    start: $gfJaN$restructure.uint16,
    end: $gfJaN$restructure.uint16,
    class: $gfJaN$restructure.uint16
});
let $b6dd765146ad212a$export$843d551fbbafef71 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        startGlyph: $gfJaN$restructure.uint16,
        glyphCount: $gfJaN$restructure.uint16,
        classValueArray: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "glyphCount")
    },
    2: {
        classRangeCount: $gfJaN$restructure.uint16,
        classRangeRecord: new $gfJaN$restructure.Array($b6dd765146ad212a$var$ClassRangeRecord, "classRangeCount")
    }
});
let $b6dd765146ad212a$export$8215d14a63d9fb10 = new $gfJaN$restructure.Struct({
    a: $gfJaN$restructure.uint16,
    b: $gfJaN$restructure.uint16,
    deltaFormat: $gfJaN$restructure.uint16
});
//#############################################
// Contextual Substitution/Positioning Tables #
//#############################################
let $b6dd765146ad212a$var$LookupRecord = new $gfJaN$restructure.Struct({
    sequenceIndex: $gfJaN$restructure.uint16,
    lookupListIndex: $gfJaN$restructure.uint16
});
let $b6dd765146ad212a$var$Rule = new $gfJaN$restructure.Struct({
    glyphCount: $gfJaN$restructure.uint16,
    lookupCount: $gfJaN$restructure.uint16,
    input: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.glyphCount - 1),
    lookupRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LookupRecord, "lookupCount")
});
let $b6dd765146ad212a$var$RuleSet = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$Rule), $gfJaN$restructure.uint16);
let $b6dd765146ad212a$var$ClassRule = new $gfJaN$restructure.Struct({
    glyphCount: $gfJaN$restructure.uint16,
    lookupCount: $gfJaN$restructure.uint16,
    classes: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.glyphCount - 1),
    lookupRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LookupRecord, "lookupCount")
});
let $b6dd765146ad212a$var$ClassSet = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$ClassRule), $gfJaN$restructure.uint16);
let $b6dd765146ad212a$export$841858b892ce1f4c = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        ruleSetCount: $gfJaN$restructure.uint16,
        ruleSets: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$RuleSet), "ruleSetCount")
    },
    2: {
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        classDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
        classSetCnt: $gfJaN$restructure.uint16,
        classSet: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$ClassSet), "classSetCnt")
    },
    3: {
        glyphCount: $gfJaN$restructure.uint16,
        lookupCount: $gfJaN$restructure.uint16,
        coverages: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "glyphCount"),
        lookupRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LookupRecord, "lookupCount")
    }
});
//######################################################
// Chaining Contextual Substitution/Positioning Tables #
//######################################################
let $b6dd765146ad212a$var$ChainRule = new $gfJaN$restructure.Struct({
    backtrackGlyphCount: $gfJaN$restructure.uint16,
    backtrack: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "backtrackGlyphCount"),
    inputGlyphCount: $gfJaN$restructure.uint16,
    input: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.inputGlyphCount - 1),
    lookaheadGlyphCount: $gfJaN$restructure.uint16,
    lookahead: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "lookaheadGlyphCount"),
    lookupCount: $gfJaN$restructure.uint16,
    lookupRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LookupRecord, "lookupCount")
});
let $b6dd765146ad212a$var$ChainRuleSet = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$ChainRule), $gfJaN$restructure.uint16);
let $b6dd765146ad212a$export$5e6d09e6861162f6 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        chainCount: $gfJaN$restructure.uint16,
        chainRuleSets: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$ChainRuleSet), "chainCount")
    },
    2: {
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        backtrackClassDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
        inputClassDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
        lookaheadClassDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
        chainCount: $gfJaN$restructure.uint16,
        chainClassSet: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$var$ChainRuleSet), "chainCount")
    },
    3: {
        backtrackGlyphCount: $gfJaN$restructure.uint16,
        backtrackCoverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "backtrackGlyphCount"),
        inputGlyphCount: $gfJaN$restructure.uint16,
        inputCoverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "inputGlyphCount"),
        lookaheadGlyphCount: $gfJaN$restructure.uint16,
        lookaheadCoverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "lookaheadGlyphCount"),
        lookupCount: $gfJaN$restructure.uint16,
        lookupRecords: new $gfJaN$restructure.Array($b6dd765146ad212a$var$LookupRecord, "lookupCount")
    }
});
/*******************
 * Variation Store *
 *******************/ let $2e4adcda047b3383$var$F2DOT14 = new $gfJaN$restructure.Fixed(16, "BE", 14);
let $2e4adcda047b3383$var$RegionAxisCoordinates = new $gfJaN$restructure.Struct({
    startCoord: $2e4adcda047b3383$var$F2DOT14,
    peakCoord: $2e4adcda047b3383$var$F2DOT14,
    endCoord: $2e4adcda047b3383$var$F2DOT14
});
let $2e4adcda047b3383$var$VariationRegionList = new $gfJaN$restructure.Struct({
    axisCount: $gfJaN$restructure.uint16,
    regionCount: $gfJaN$restructure.uint16,
    variationRegions: new $gfJaN$restructure.Array(new $gfJaN$restructure.Array($2e4adcda047b3383$var$RegionAxisCoordinates, "axisCount"), "regionCount")
});
let $2e4adcda047b3383$var$DeltaSet = new $gfJaN$restructure.Struct({
    shortDeltas: new $gfJaN$restructure.Array($gfJaN$restructure.int16, (t)=>t.parent.shortDeltaCount),
    regionDeltas: new $gfJaN$restructure.Array($gfJaN$restructure.int8, (t)=>t.parent.regionIndexCount - t.parent.shortDeltaCount),
    deltas: (t)=>t.shortDeltas.concat(t.regionDeltas)
});
let $2e4adcda047b3383$var$ItemVariationData = new $gfJaN$restructure.Struct({
    itemCount: $gfJaN$restructure.uint16,
    shortDeltaCount: $gfJaN$restructure.uint16,
    regionIndexCount: $gfJaN$restructure.uint16,
    regionIndexes: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "regionIndexCount"),
    deltaSets: new $gfJaN$restructure.Array($2e4adcda047b3383$var$DeltaSet, "itemCount")
});
let $2e4adcda047b3383$export$fe1b122a2710f241 = new $gfJaN$restructure.Struct({
    format: $gfJaN$restructure.uint16,
    variationRegionList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$var$VariationRegionList),
    variationDataCount: $gfJaN$restructure.uint16,
    itemVariationData: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$var$ItemVariationData), "variationDataCount")
});
/**********************
 * Feature Variations *
 **********************/ let $2e4adcda047b3383$var$ConditionTable = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        axisIndex: $gfJaN$restructure.uint16,
        axisIndex: $gfJaN$restructure.uint16,
        filterRangeMinValue: $2e4adcda047b3383$var$F2DOT14,
        filterRangeMaxValue: $2e4adcda047b3383$var$F2DOT14
    }
});
let $2e4adcda047b3383$var$ConditionSet = new $gfJaN$restructure.Struct({
    conditionCount: $gfJaN$restructure.uint16,
    conditionTable: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$var$ConditionTable), "conditionCount")
});
let $2e4adcda047b3383$var$FeatureTableSubstitutionRecord = new $gfJaN$restructure.Struct({
    featureIndex: $gfJaN$restructure.uint16,
    alternateFeatureTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $b6dd765146ad212a$export$6e91cf7616333d5, {
        type: "parent"
    })
});
let $2e4adcda047b3383$var$FeatureTableSubstitution = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    substitutionCount: $gfJaN$restructure.uint16,
    substitutions: new $gfJaN$restructure.Array($2e4adcda047b3383$var$FeatureTableSubstitutionRecord, "substitutionCount")
});
let $2e4adcda047b3383$var$FeatureVariationRecord = new $gfJaN$restructure.Struct({
    conditionSet: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$var$ConditionSet, {
        type: "parent"
    }),
    featureTableSubstitution: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$var$FeatureTableSubstitution, {
        type: "parent"
    })
});
let $2e4adcda047b3383$export$441b70b7971dd419 = new $gfJaN$restructure.Struct({
    majorVersion: $gfJaN$restructure.uint16,
    minorVersion: $gfJaN$restructure.uint16,
    featureVariationRecordCount: $gfJaN$restructure.uint32,
    featureVariationRecords: new $gfJaN$restructure.Array($2e4adcda047b3383$var$FeatureVariationRecord, "featureVariationRecordCount")
});
// Checks if an operand is an index of a predefined value,
// otherwise delegates to the provided type.
class $5b547cf9e5da519b$var$PredefinedOp {
    decode(stream, parent, operands) {
        if (this.predefinedOps[operands[0]]) return this.predefinedOps[operands[0]];
        return this.type.decode(stream, parent, operands);
    }
    size(value, ctx) {
        return this.type.size(value, ctx);
    }
    encode(stream, value, ctx) {
        let index = this.predefinedOps.indexOf(value);
        if (index !== -1) return index;
        return this.type.encode(stream, value, ctx);
    }
    constructor(predefinedOps, type){
        this.predefinedOps = predefinedOps;
        this.type = type;
    }
}
class $5b547cf9e5da519b$var$CFFEncodingVersion extends $gfJaN$restructure.Number {
    decode(stream) {
        return $gfJaN$restructure.uint8.decode(stream) & 0x7f;
    }
    constructor(){
        super("UInt8");
    }
}
let $5b547cf9e5da519b$var$Range1 = new $gfJaN$restructure.Struct({
    first: $gfJaN$restructure.uint16,
    nLeft: $gfJaN$restructure.uint8
});
let $5b547cf9e5da519b$var$Range2 = new $gfJaN$restructure.Struct({
    first: $gfJaN$restructure.uint16,
    nLeft: $gfJaN$restructure.uint16
});
let $5b547cf9e5da519b$var$CFFCustomEncoding = new $gfJaN$restructure.VersionedStruct(new $5b547cf9e5da519b$var$CFFEncodingVersion(), {
    0: {
        nCodes: $gfJaN$restructure.uint8,
        codes: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, "nCodes")
    },
    1: {
        nRanges: $gfJaN$restructure.uint8,
        ranges: new $gfJaN$restructure.Array($5b547cf9e5da519b$var$Range1, "nRanges")
    }
});
let $5b547cf9e5da519b$var$CFFEncoding = new $5b547cf9e5da519b$var$PredefinedOp([
    $c4ffe47cba1d7f36$export$dee0027060fa13bd,
    $c4ffe47cba1d7f36$export$4f58f497e14a53c3
], new $4aa1b0749c2770f8$export$2e2bcd8739ae039($5b547cf9e5da519b$var$CFFCustomEncoding, {
    lazy: true
}));
// Decodes an array of ranges until the total
// length is equal to the provided length.
class $5b547cf9e5da519b$var$RangeArray extends $gfJaN$restructure.Array {
    decode(stream, parent) {
        let length = (0, $gfJaN$restructure.resolveLength)(this.length, stream, parent);
        let count = 0;
        let res = [];
        while(count < length){
            let range = this.type.decode(stream, parent);
            range.offset = count;
            count += range.nLeft + 1;
            res.push(range);
        }
        return res;
    }
}
let $5b547cf9e5da519b$var$CFFCustomCharset = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint8, {
    0: {
        glyphs: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.parent.CharStrings.length - 1)
    },
    1: {
        ranges: new $5b547cf9e5da519b$var$RangeArray($5b547cf9e5da519b$var$Range1, (t)=>t.parent.CharStrings.length - 1)
    },
    2: {
        ranges: new $5b547cf9e5da519b$var$RangeArray($5b547cf9e5da519b$var$Range2, (t)=>t.parent.CharStrings.length - 1)
    }
});
let $5b547cf9e5da519b$var$CFFCharset = new $5b547cf9e5da519b$var$PredefinedOp([
    $1e7c7c16984e4427$export$c33b50336c234f16,
    $1e7c7c16984e4427$export$3ed0f9e1fee8d489,
    $1e7c7c16984e4427$export$dc28be11139d4120
], new $4aa1b0749c2770f8$export$2e2bcd8739ae039($5b547cf9e5da519b$var$CFFCustomCharset, {
    lazy: true
}));
let $5b547cf9e5da519b$var$FDRange3 = new $gfJaN$restructure.Struct({
    first: $gfJaN$restructure.uint16,
    fd: $gfJaN$restructure.uint8
});
let $5b547cf9e5da519b$var$FDRange4 = new $gfJaN$restructure.Struct({
    first: $gfJaN$restructure.uint32,
    fd: $gfJaN$restructure.uint16
});
let $5b547cf9e5da519b$var$FDSelect = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint8, {
    0: {
        fds: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, (t)=>t.parent.CharStrings.length)
    },
    3: {
        nRanges: $gfJaN$restructure.uint16,
        ranges: new $gfJaN$restructure.Array($5b547cf9e5da519b$var$FDRange3, "nRanges"),
        sentinel: $gfJaN$restructure.uint16
    },
    4: {
        nRanges: $gfJaN$restructure.uint32,
        ranges: new $gfJaN$restructure.Array($5b547cf9e5da519b$var$FDRange4, "nRanges"),
        sentinel: $gfJaN$restructure.uint32
    }
});
let $5b547cf9e5da519b$var$ptr = new $4aa1b0749c2770f8$export$2e2bcd8739ae039($15a0cbb3d09cf7ee$export$2e2bcd8739ae039);
class $5b547cf9e5da519b$var$CFFPrivateOp {
    decode(stream, parent, operands) {
        parent.length = operands[0];
        return $5b547cf9e5da519b$var$ptr.decode(stream, parent, [
            operands[1]
        ]);
    }
    size(dict, ctx) {
        return [
            $15a0cbb3d09cf7ee$export$2e2bcd8739ae039.size(dict, ctx, false),
            $5b547cf9e5da519b$var$ptr.size(dict, ctx)[0]
        ];
    }
    encode(stream, dict, ctx) {
        return [
            $15a0cbb3d09cf7ee$export$2e2bcd8739ae039.size(dict, ctx, false),
            $5b547cf9e5da519b$var$ptr.encode(stream, dict, ctx)[0]
        ];
    }
}
let $5b547cf9e5da519b$var$FontDict = new $efe622f40a9c35bd$export$2e2bcd8739ae039([
    // key       name                   type(s)                                 default
    [
        18,
        "Private",
        new $5b547cf9e5da519b$var$CFFPrivateOp,
        null
    ],
    [
        [
            12,
            38
        ],
        "FontName",
        "sid",
        null
    ],
    [
        [
            12,
            7
        ],
        "FontMatrix",
        "array",
        [
            0.001,
            0,
            0,
            0.001,
            0,
            0
        ]
    ],
    [
        [
            12,
            5
        ],
        "PaintType",
        "number",
        0
    ]
]);
let $5b547cf9e5da519b$var$CFFTopDict = new $efe622f40a9c35bd$export$2e2bcd8739ae039([
    // key       name                   type(s)                                 default
    [
        [
            12,
            30
        ],
        "ROS",
        [
            "sid",
            "sid",
            "number"
        ],
        null
    ],
    [
        0,
        "version",
        "sid",
        null
    ],
    [
        1,
        "Notice",
        "sid",
        null
    ],
    [
        [
            12,
            0
        ],
        "Copyright",
        "sid",
        null
    ],
    [
        2,
        "FullName",
        "sid",
        null
    ],
    [
        3,
        "FamilyName",
        "sid",
        null
    ],
    [
        4,
        "Weight",
        "sid",
        null
    ],
    [
        [
            12,
            1
        ],
        "isFixedPitch",
        "boolean",
        false
    ],
    [
        [
            12,
            2
        ],
        "ItalicAngle",
        "number",
        0
    ],
    [
        [
            12,
            3
        ],
        "UnderlinePosition",
        "number",
        -100
    ],
    [
        [
            12,
            4
        ],
        "UnderlineThickness",
        "number",
        50
    ],
    [
        [
            12,
            5
        ],
        "PaintType",
        "number",
        0
    ],
    [
        [
            12,
            6
        ],
        "CharstringType",
        "number",
        2
    ],
    [
        [
            12,
            7
        ],
        "FontMatrix",
        "array",
        [
            0.001,
            0,
            0,
            0.001,
            0,
            0
        ]
    ],
    [
        13,
        "UniqueID",
        "number",
        null
    ],
    [
        5,
        "FontBBox",
        "array",
        [
            0,
            0,
            0,
            0
        ]
    ],
    [
        [
            12,
            8
        ],
        "StrokeWidth",
        "number",
        0
    ],
    [
        14,
        "XUID",
        "array",
        null
    ],
    [
        15,
        "charset",
        $5b547cf9e5da519b$var$CFFCharset,
        $1e7c7c16984e4427$export$c33b50336c234f16
    ],
    [
        16,
        "Encoding",
        $5b547cf9e5da519b$var$CFFEncoding,
        $c4ffe47cba1d7f36$export$dee0027060fa13bd
    ],
    [
        17,
        "CharStrings",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039(new $9eaea3754914a290$export$2e2bcd8739ae039),
        null
    ],
    [
        18,
        "Private",
        new $5b547cf9e5da519b$var$CFFPrivateOp,
        null
    ],
    [
        [
            12,
            20
        ],
        "SyntheticBase",
        "number",
        null
    ],
    [
        [
            12,
            21
        ],
        "PostScript",
        "sid",
        null
    ],
    [
        [
            12,
            22
        ],
        "BaseFontName",
        "sid",
        null
    ],
    [
        [
            12,
            23
        ],
        "BaseFontBlend",
        "delta",
        null
    ],
    // CID font specific
    [
        [
            12,
            31
        ],
        "CIDFontVersion",
        "number",
        0
    ],
    [
        [
            12,
            32
        ],
        "CIDFontRevision",
        "number",
        0
    ],
    [
        [
            12,
            33
        ],
        "CIDFontType",
        "number",
        0
    ],
    [
        [
            12,
            34
        ],
        "CIDCount",
        "number",
        8720
    ],
    [
        [
            12,
            35
        ],
        "UIDBase",
        "number",
        null
    ],
    [
        [
            12,
            37
        ],
        "FDSelect",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039($5b547cf9e5da519b$var$FDSelect),
        null
    ],
    [
        [
            12,
            36
        ],
        "FDArray",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039(new $9eaea3754914a290$export$2e2bcd8739ae039($5b547cf9e5da519b$var$FontDict)),
        null
    ],
    [
        [
            12,
            38
        ],
        "FontName",
        "sid",
        null
    ]
]);
let $5b547cf9e5da519b$var$VariationStore = new $gfJaN$restructure.Struct({
    length: $gfJaN$restructure.uint16,
    itemVariationStore: $2e4adcda047b3383$export$fe1b122a2710f241
});
let $5b547cf9e5da519b$var$CFF2TopDict = new $efe622f40a9c35bd$export$2e2bcd8739ae039([
    [
        [
            12,
            7
        ],
        "FontMatrix",
        "array",
        [
            0.001,
            0,
            0,
            0.001,
            0,
            0
        ]
    ],
    [
        17,
        "CharStrings",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039(new $9eaea3754914a290$export$2e2bcd8739ae039),
        null
    ],
    [
        [
            12,
            37
        ],
        "FDSelect",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039($5b547cf9e5da519b$var$FDSelect),
        null
    ],
    [
        [
            12,
            36
        ],
        "FDArray",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039(new $9eaea3754914a290$export$2e2bcd8739ae039($5b547cf9e5da519b$var$FontDict)),
        null
    ],
    [
        24,
        "vstore",
        new $4aa1b0749c2770f8$export$2e2bcd8739ae039($5b547cf9e5da519b$var$VariationStore),
        null
    ],
    [
        25,
        "maxstack",
        "number",
        193
    ]
]);
let $5b547cf9e5da519b$var$CFFTop = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.fixed16, {
    1: {
        hdrSize: $gfJaN$restructure.uint8,
        offSize: $gfJaN$restructure.uint8,
        nameIndex: new $9eaea3754914a290$export$2e2bcd8739ae039(new $gfJaN$restructure.String("length")),
        topDictIndex: new $9eaea3754914a290$export$2e2bcd8739ae039($5b547cf9e5da519b$var$CFFTopDict),
        stringIndex: new $9eaea3754914a290$export$2e2bcd8739ae039(new $gfJaN$restructure.String("length")),
        globalSubrIndex: new $9eaea3754914a290$export$2e2bcd8739ae039
    },
    2: {
        hdrSize: $gfJaN$restructure.uint8,
        length: $gfJaN$restructure.uint16,
        topDict: $5b547cf9e5da519b$var$CFF2TopDict,
        globalSubrIndex: new $9eaea3754914a290$export$2e2bcd8739ae039
    }
});
var $5b547cf9e5da519b$export$2e2bcd8739ae039 = $5b547cf9e5da519b$var$CFFTop;
class $f717432b360040c7$var$CFFFont {
    static decode(stream) {
        return new $f717432b360040c7$var$CFFFont(stream);
    }
    decode() {
        let start = this.stream.pos;
        let top = $5b547cf9e5da519b$export$2e2bcd8739ae039.decode(this.stream);
        for(let key in top){
            let val = top[key];
            this[key] = val;
        }
        if (this.version < 2) {
            if (this.topDictIndex.length !== 1) throw new Error("Only a single font is allowed in CFF");
            this.topDict = this.topDictIndex[0];
        }
        this.isCIDFont = this.topDict.ROS != null;
        return this;
    }
    string(sid) {
        if (this.version >= 2) return null;
        if (sid < $860d3574d7fa3a51$export$2e2bcd8739ae039.length) return $860d3574d7fa3a51$export$2e2bcd8739ae039[sid];
        return this.stringIndex[sid - $860d3574d7fa3a51$export$2e2bcd8739ae039.length];
    }
    get postscriptName() {
        if (this.version < 2) return this.nameIndex[0];
        return null;
    }
    get fullName() {
        return this.string(this.topDict.FullName);
    }
    get familyName() {
        return this.string(this.topDict.FamilyName);
    }
    getCharString(glyph) {
        this.stream.pos = this.topDict.CharStrings[glyph].offset;
        return this.stream.readBuffer(this.topDict.CharStrings[glyph].length);
    }
    getGlyphName(gid) {
        // CFF2 glyph names are in the post table.
        if (this.version >= 2) return null;
        // CID-keyed fonts don't have glyph names
        if (this.isCIDFont) return null;
        let { charset: charset } = this.topDict;
        if (Array.isArray(charset)) return charset[gid];
        if (gid === 0) return ".notdef";
        gid -= 1;
        switch(charset.version){
            case 0:
                return this.string(charset.glyphs[gid]);
            case 1:
            case 2:
                for(let i = 0; i < charset.ranges.length; i++){
                    let range = charset.ranges[i];
                    if (range.offset <= gid && gid <= range.offset + range.nLeft) return this.string(range.first + (gid - range.offset));
                }
                break;
        }
        return null;
    }
    fdForGlyph(gid) {
        if (!this.topDict.FDSelect) return null;
        switch(this.topDict.FDSelect.version){
            case 0:
                return this.topDict.FDSelect.fds[gid];
            case 3:
            case 4:
                let { ranges: ranges } = this.topDict.FDSelect;
                let low = 0;
                let high = ranges.length - 1;
                while(low <= high){
                    let mid = low + high >> 1;
                    if (gid < ranges[mid].first) high = mid - 1;
                    else if (mid < high && gid >= ranges[mid + 1].first) low = mid + 1;
                    else return ranges[mid].fd;
                }
            default:
                throw new Error(`Unknown FDSelect version: ${this.topDict.FDSelect.version}`);
        }
    }
    privateDictForGlyph(gid) {
        if (this.topDict.FDSelect) {
            let fd = this.fdForGlyph(gid);
            if (this.topDict.FDArray[fd]) return this.topDict.FDArray[fd].Private;
            return null;
        }
        if (this.version < 2) return this.topDict.Private;
        return this.topDict.FDArray[0].Private;
    }
    constructor(stream){
        this.stream = stream;
        this.decode();
    }
}
var $f717432b360040c7$export$2e2bcd8739ae039 = $f717432b360040c7$var$CFFFont;
let $8cb7ae73ed7aa7d8$var$VerticalOrigin = new $gfJaN$restructure.Struct({
    glyphIndex: $gfJaN$restructure.uint16,
    vertOriginY: $gfJaN$restructure.int16
});
var $8cb7ae73ed7aa7d8$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    majorVersion: $gfJaN$restructure.uint16,
    minorVersion: $gfJaN$restructure.uint16,
    defaultVertOriginY: $gfJaN$restructure.int16,
    numVertOriginYMetrics: $gfJaN$restructure.uint16,
    metrics: new $gfJaN$restructure.Array($8cb7ae73ed7aa7d8$var$VerticalOrigin, "numVertOriginYMetrics")
});
let $20e0c7bbecb76d75$export$16b227cb15d716a0 = new $gfJaN$restructure.Struct({
    height: $gfJaN$restructure.uint8,
    width: $gfJaN$restructure.uint8,
    horiBearingX: $gfJaN$restructure.int8,
    horiBearingY: $gfJaN$restructure.int8,
    horiAdvance: $gfJaN$restructure.uint8,
    vertBearingX: $gfJaN$restructure.int8,
    vertBearingY: $gfJaN$restructure.int8,
    vertAdvance: $gfJaN$restructure.uint8
});
let $20e0c7bbecb76d75$export$62c53e75f69bfe12 = new $gfJaN$restructure.Struct({
    height: $gfJaN$restructure.uint8,
    width: $gfJaN$restructure.uint8,
    bearingX: $gfJaN$restructure.int8,
    bearingY: $gfJaN$restructure.int8,
    advance: $gfJaN$restructure.uint8
});
let $20e0c7bbecb76d75$var$EBDTComponent = new $gfJaN$restructure.Struct({
    glyph: $gfJaN$restructure.uint16,
    xOffset: $gfJaN$restructure.int8,
    yOffset: $gfJaN$restructure.int8
});
class $20e0c7bbecb76d75$var$ByteAligned {
}
class $20e0c7bbecb76d75$var$BitAligned {
}
let $20e0c7bbecb76d75$export$f1f5ddeb20d14f = new $gfJaN$restructure.VersionedStruct("version", {
    1: {
        metrics: $20e0c7bbecb76d75$export$62c53e75f69bfe12,
        data: $20e0c7bbecb76d75$var$ByteAligned
    },
    2: {
        metrics: $20e0c7bbecb76d75$export$62c53e75f69bfe12,
        data: $20e0c7bbecb76d75$var$BitAligned
    },
    // format 3 is deprecated
    // format 4 is not supported by Microsoft
    5: {
        data: $20e0c7bbecb76d75$var$BitAligned
    },
    6: {
        metrics: $20e0c7bbecb76d75$export$16b227cb15d716a0,
        data: $20e0c7bbecb76d75$var$ByteAligned
    },
    7: {
        metrics: $20e0c7bbecb76d75$export$16b227cb15d716a0,
        data: $20e0c7bbecb76d75$var$BitAligned
    },
    8: {
        metrics: $20e0c7bbecb76d75$export$62c53e75f69bfe12,
        pad: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8),
        numComponents: $gfJaN$restructure.uint16,
        components: new $gfJaN$restructure.Array($20e0c7bbecb76d75$var$EBDTComponent, "numComponents")
    },
    9: {
        metrics: $20e0c7bbecb76d75$export$16b227cb15d716a0,
        pad: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8),
        numComponents: $gfJaN$restructure.uint16,
        components: new $gfJaN$restructure.Array($20e0c7bbecb76d75$var$EBDTComponent, "numComponents")
    },
    17: {
        metrics: $20e0c7bbecb76d75$export$62c53e75f69bfe12,
        dataLen: $gfJaN$restructure.uint32,
        data: new $gfJaN$restructure.Buffer("dataLen")
    },
    18: {
        metrics: $20e0c7bbecb76d75$export$16b227cb15d716a0,
        dataLen: $gfJaN$restructure.uint32,
        data: new $gfJaN$restructure.Buffer("dataLen")
    },
    19: {
        dataLen: $gfJaN$restructure.uint32,
        data: new $gfJaN$restructure.Buffer("dataLen")
    }
});
let $035bb95c0cdb1f6d$var$SBitLineMetrics = new $gfJaN$restructure.Struct({
    ascender: $gfJaN$restructure.int8,
    descender: $gfJaN$restructure.int8,
    widthMax: $gfJaN$restructure.uint8,
    caretSlopeNumerator: $gfJaN$restructure.int8,
    caretSlopeDenominator: $gfJaN$restructure.int8,
    caretOffset: $gfJaN$restructure.int8,
    minOriginSB: $gfJaN$restructure.int8,
    minAdvanceSB: $gfJaN$restructure.int8,
    maxBeforeBL: $gfJaN$restructure.int8,
    minAfterBL: $gfJaN$restructure.int8,
    pad: new $gfJaN$restructure.Reserved($gfJaN$restructure.int8, 2)
});
let $035bb95c0cdb1f6d$var$CodeOffsetPair = new $gfJaN$restructure.Struct({
    glyphCode: $gfJaN$restructure.uint16,
    offset: $gfJaN$restructure.uint16
});
let $035bb95c0cdb1f6d$var$IndexSubtable = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    header: {
        imageFormat: $gfJaN$restructure.uint16,
        imageDataOffset: $gfJaN$restructure.uint32
    },
    1: {
        offsetArray: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, (t)=>t.parent.lastGlyphIndex - t.parent.firstGlyphIndex + 1)
    },
    2: {
        imageSize: $gfJaN$restructure.uint32,
        bigMetrics: $20e0c7bbecb76d75$export$16b227cb15d716a0
    },
    3: {
        offsetArray: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.parent.lastGlyphIndex - t.parent.firstGlyphIndex + 1)
    },
    4: {
        numGlyphs: $gfJaN$restructure.uint32,
        glyphArray: new $gfJaN$restructure.Array($035bb95c0cdb1f6d$var$CodeOffsetPair, (t)=>t.numGlyphs + 1)
    },
    5: {
        imageSize: $gfJaN$restructure.uint32,
        bigMetrics: $20e0c7bbecb76d75$export$16b227cb15d716a0,
        numGlyphs: $gfJaN$restructure.uint32,
        glyphCodeArray: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numGlyphs")
    }
});
let $035bb95c0cdb1f6d$var$IndexSubtableArray = new $gfJaN$restructure.Struct({
    firstGlyphIndex: $gfJaN$restructure.uint16,
    lastGlyphIndex: $gfJaN$restructure.uint16,
    subtable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $035bb95c0cdb1f6d$var$IndexSubtable)
});
let $035bb95c0cdb1f6d$var$BitmapSizeTable = new $gfJaN$restructure.Struct({
    indexSubTableArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($035bb95c0cdb1f6d$var$IndexSubtableArray, 1), {
        type: "parent"
    }),
    indexTablesSize: $gfJaN$restructure.uint32,
    numberOfIndexSubTables: $gfJaN$restructure.uint32,
    colorRef: $gfJaN$restructure.uint32,
    hori: $035bb95c0cdb1f6d$var$SBitLineMetrics,
    vert: $035bb95c0cdb1f6d$var$SBitLineMetrics,
    startGlyphIndex: $gfJaN$restructure.uint16,
    endGlyphIndex: $gfJaN$restructure.uint16,
    ppemX: $gfJaN$restructure.uint8,
    ppemY: $gfJaN$restructure.uint8,
    bitDepth: $gfJaN$restructure.uint8,
    flags: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint8, [
        "horizontal",
        "vertical"
    ])
});
var $035bb95c0cdb1f6d$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint32,
    numSizes: $gfJaN$restructure.uint32,
    sizes: new $gfJaN$restructure.Array($035bb95c0cdb1f6d$var$BitmapSizeTable, "numSizes")
});
let $73d13900b55a3c0c$var$ImageTable = new $gfJaN$restructure.Struct({
    ppem: $gfJaN$restructure.uint16,
    resolution: $gfJaN$restructure.uint16,
    imageOffsets: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, "void"), (t)=>t.parent.parent.maxp.numGlyphs + 1)
});
var // It includes several image tables with images for each bitmap glyph
// of several different sizes.
$73d13900b55a3c0c$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    flags: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
        "renderOutlines"
    ]),
    numImgTables: $gfJaN$restructure.uint32,
    imageTables: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $73d13900b55a3c0c$var$ImageTable), "numImgTables")
});
let $97f6b8be3a347a8f$var$LayerRecord = new $gfJaN$restructure.Struct({
    gid: $gfJaN$restructure.uint16,
    paletteIndex: $gfJaN$restructure.uint16 // Index value to use in the appropriate palette. This value must
}); // be less than numPaletteEntries in the CPAL table, except for
// the special case noted below. Each palette entry is 16 bits.
// A palette index of 0xFFFF is a special case indicating that
// the text foreground color should be used.
let $97f6b8be3a347a8f$var$BaseGlyphRecord = new $gfJaN$restructure.Struct({
    gid: $gfJaN$restructure.uint16,
    // and is not rendered for color.
    firstLayerIndex: $gfJaN$restructure.uint16,
    // There will be numLayers consecutive entries for this base glyph.
    numLayers: $gfJaN$restructure.uint16
});
var $97f6b8be3a347a8f$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numBaseGlyphRecords: $gfJaN$restructure.uint16,
    baseGlyphRecord: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($97f6b8be3a347a8f$var$BaseGlyphRecord, "numBaseGlyphRecords")),
    layerRecords: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($97f6b8be3a347a8f$var$LayerRecord, "numLayerRecords"), {
        lazy: true
    }),
    numLayerRecords: $gfJaN$restructure.uint16
});
let $16ca60ecbdee30ea$var$ColorRecord = new $gfJaN$restructure.Struct({
    blue: $gfJaN$restructure.uint8,
    green: $gfJaN$restructure.uint8,
    red: $gfJaN$restructure.uint8,
    alpha: $gfJaN$restructure.uint8
});
var $16ca60ecbdee30ea$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    header: {
        numPaletteEntries: $gfJaN$restructure.uint16,
        numPalettes: $gfJaN$restructure.uint16,
        numColorRecords: $gfJaN$restructure.uint16,
        colorRecords: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($16ca60ecbdee30ea$var$ColorRecord, "numColorRecords")),
        colorRecordIndices: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numPalettes")
    },
    0: {},
    1: {
        offsetPaletteTypeArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($gfJaN$restructure.uint32, "numPalettes")),
        offsetPaletteLabelArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numPalettes")),
        offsetPaletteEntryLabelArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numPaletteEntries"))
    }
});
let $7327e41706f9d5c7$var$BaseCoord = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        coordinate: $gfJaN$restructure.int16 // X or Y value, in design units
    },
    2: {
        coordinate: $gfJaN$restructure.int16,
        referenceGlyph: $gfJaN$restructure.uint16,
        baseCoordPoint: $gfJaN$restructure.uint16 // Index of contour point on the referenceGlyph
    },
    3: {
        coordinate: $gfJaN$restructure.int16,
        deviceTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10) // Device table for X or Y value
    }
});
let $7327e41706f9d5c7$var$BaseValues = new $gfJaN$restructure.Struct({
    defaultIndex: $gfJaN$restructure.uint16,
    baseCoordCount: $gfJaN$restructure.uint16,
    baseCoords: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseCoord), "baseCoordCount")
});
let $7327e41706f9d5c7$var$FeatMinMaxRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    minCoord: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseCoord, {
        type: "parent"
    }),
    maxCoord: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseCoord, {
        type: "parent"
    }) // May be NULL
});
let $7327e41706f9d5c7$var$MinMax = new $gfJaN$restructure.Struct({
    minCoord: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseCoord),
    maxCoord: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseCoord),
    featMinMaxCount: $gfJaN$restructure.uint16,
    featMinMaxRecords: new $gfJaN$restructure.Array($7327e41706f9d5c7$var$FeatMinMaxRecord, "featMinMaxCount") // In alphabetical order
});
let $7327e41706f9d5c7$var$BaseLangSysRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    minMax: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$MinMax, {
        type: "parent"
    })
});
let $7327e41706f9d5c7$var$BaseScript = new $gfJaN$restructure.Struct({
    baseValues: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseValues),
    defaultMinMax: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$MinMax),
    baseLangSysCount: $gfJaN$restructure.uint16,
    baseLangSysRecords: new $gfJaN$restructure.Array($7327e41706f9d5c7$var$BaseLangSysRecord, "baseLangSysCount") // in alphabetical order by BaseLangSysTag
});
let $7327e41706f9d5c7$var$BaseScriptRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    script: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseScript, {
        type: "parent"
    })
});
let $7327e41706f9d5c7$var$BaseScriptList = new $gfJaN$restructure.Array($7327e41706f9d5c7$var$BaseScriptRecord, $gfJaN$restructure.uint16);
// Array of 4-byte baseline identification tags-must be in alphabetical order
let $7327e41706f9d5c7$var$BaseTagList = new $gfJaN$restructure.Array(new $gfJaN$restructure.String(4), $gfJaN$restructure.uint16);
let $7327e41706f9d5c7$var$Axis = new $gfJaN$restructure.Struct({
    baseTagList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseTagList),
    baseScriptList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$BaseScriptList)
});
var $7327e41706f9d5c7$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint32, {
    header: {
        horizAxis: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$Axis),
        vertAxis: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7327e41706f9d5c7$var$Axis) // May be NULL
    },
    0x00010000: {},
    0x00010001: {
        itemVariationStore: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$export$fe1b122a2710f241)
    }
});
let $7e48bbe9e5345664$var$AttachPoint = new $gfJaN$restructure.Array($gfJaN$restructure.uint16, $gfJaN$restructure.uint16);
let $7e48bbe9e5345664$var$AttachList = new $gfJaN$restructure.Struct({
    coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
    glyphCount: $gfJaN$restructure.uint16,
    attachPoints: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$AttachPoint), "glyphCount")
});
let $7e48bbe9e5345664$var$CaretValue = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        coordinate: $gfJaN$restructure.int16
    },
    2: {
        caretValuePoint: $gfJaN$restructure.uint16
    },
    3: {
        coordinate: $gfJaN$restructure.int16,
        deviceTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10)
    }
});
let $7e48bbe9e5345664$var$LigGlyph = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$CaretValue), $gfJaN$restructure.uint16);
let $7e48bbe9e5345664$var$LigCaretList = new $gfJaN$restructure.Struct({
    coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
    ligGlyphCount: $gfJaN$restructure.uint16,
    ligGlyphs: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$LigGlyph), "ligGlyphCount")
});
let $7e48bbe9e5345664$var$MarkGlyphSetsDef = new $gfJaN$restructure.Struct({
    markSetTableFormat: $gfJaN$restructure.uint16,
    markSetCount: $gfJaN$restructure.uint16,
    coverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $b6dd765146ad212a$export$17608c3f81a6111), "markSetCount")
});
var $7e48bbe9e5345664$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint32, {
    header: {
        glyphClassDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
        attachList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$AttachList),
        ligCaretList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$LigCaretList),
        markAttachClassDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71)
    },
    0x00010000: {},
    0x00010002: {
        markGlyphSetsDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$MarkGlyphSetsDef)
    },
    0x00010003: {
        markGlyphSetsDef: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $7e48bbe9e5345664$var$MarkGlyphSetsDef),
        itemVariationStore: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$export$fe1b122a2710f241)
    }
});
let $b687332511a4da75$var$ValueFormat = new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
    "xPlacement",
    "yPlacement",
    "xAdvance",
    "yAdvance",
    "xPlaDevice",
    "yPlaDevice",
    "xAdvDevice",
    "yAdvDevice"
]);
let $b687332511a4da75$var$types = {
    xPlacement: $gfJaN$restructure.int16,
    yPlacement: $gfJaN$restructure.int16,
    xAdvance: $gfJaN$restructure.int16,
    yAdvance: $gfJaN$restructure.int16,
    xPlaDevice: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10, {
        type: "global",
        relativeTo: (ctx)=>ctx.rel
    }),
    yPlaDevice: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10, {
        type: "global",
        relativeTo: (ctx)=>ctx.rel
    }),
    xAdvDevice: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10, {
        type: "global",
        relativeTo: (ctx)=>ctx.rel
    }),
    yAdvDevice: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10, {
        type: "global",
        relativeTo: (ctx)=>ctx.rel
    })
};
class $b687332511a4da75$var$ValueRecord {
    buildStruct(parent) {
        let struct = parent;
        while(!struct[this.key] && struct.parent)struct = struct.parent;
        if (!struct[this.key]) return;
        let fields = {};
        fields.rel = ()=>struct._startOffset;
        let format = struct[this.key];
        for(let key in format)if (format[key]) fields[key] = $b687332511a4da75$var$types[key];
        return new $gfJaN$restructure.Struct(fields);
    }
    size(val, ctx) {
        return this.buildStruct(ctx).size(val, ctx);
    }
    decode(stream, parent) {
        let res = this.buildStruct(parent).decode(stream, parent);
        delete res.rel;
        return res;
    }
    constructor(key = "valueFormat"){
        this.key = key;
    }
}
let $b687332511a4da75$var$PairValueRecord = new $gfJaN$restructure.Struct({
    secondGlyph: $gfJaN$restructure.uint16,
    value1: new $b687332511a4da75$var$ValueRecord("valueFormat1"),
    value2: new $b687332511a4da75$var$ValueRecord("valueFormat2")
});
let $b687332511a4da75$var$PairSet = new $gfJaN$restructure.Array($b687332511a4da75$var$PairValueRecord, $gfJaN$restructure.uint16);
let $b687332511a4da75$var$Class2Record = new $gfJaN$restructure.Struct({
    value1: new $b687332511a4da75$var$ValueRecord("valueFormat1"),
    value2: new $b687332511a4da75$var$ValueRecord("valueFormat2")
});
let $b687332511a4da75$var$Anchor = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    1: {
        xCoordinate: $gfJaN$restructure.int16,
        yCoordinate: $gfJaN$restructure.int16
    },
    2: {
        xCoordinate: $gfJaN$restructure.int16,
        yCoordinate: $gfJaN$restructure.int16,
        anchorPoint: $gfJaN$restructure.uint16
    },
    3: {
        xCoordinate: $gfJaN$restructure.int16,
        yCoordinate: $gfJaN$restructure.int16,
        xDeviceTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10),
        yDeviceTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$8215d14a63d9fb10)
    }
});
let $b687332511a4da75$var$EntryExitRecord = new $gfJaN$restructure.Struct({
    entryAnchor: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$Anchor, {
        type: "parent"
    }),
    exitAnchor: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$Anchor, {
        type: "parent"
    })
});
let $b687332511a4da75$var$MarkRecord = new $gfJaN$restructure.Struct({
    class: $gfJaN$restructure.uint16,
    markAnchor: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$Anchor, {
        type: "parent"
    })
});
let $b687332511a4da75$var$MarkArray = new $gfJaN$restructure.Array($b687332511a4da75$var$MarkRecord, $gfJaN$restructure.uint16);
let $b687332511a4da75$var$BaseRecord = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$Anchor), (t)=>t.parent.classCount);
let $b687332511a4da75$var$BaseArray = new $gfJaN$restructure.Array($b687332511a4da75$var$BaseRecord, $gfJaN$restructure.uint16);
let $b687332511a4da75$var$ComponentRecord = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$Anchor), (t)=>t.parent.parent.classCount);
let $b687332511a4da75$var$LigatureAttach = new $gfJaN$restructure.Array($b687332511a4da75$var$ComponentRecord, $gfJaN$restructure.uint16);
let $b687332511a4da75$var$LigatureArray = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$LigatureAttach), $gfJaN$restructure.uint16);
let $b687332511a4da75$export$73a8cfb19cd43a0f = new $gfJaN$restructure.VersionedStruct("lookupType", {
    1: new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
        1: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            valueFormat: $b687332511a4da75$var$ValueFormat,
            value: new $b687332511a4da75$var$ValueRecord()
        },
        2: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            valueFormat: $b687332511a4da75$var$ValueFormat,
            valueCount: $gfJaN$restructure.uint16,
            values: new $gfJaN$restructure.LazyArray(new $b687332511a4da75$var$ValueRecord(), "valueCount")
        }
    }),
    2: new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
        1: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            valueFormat1: $b687332511a4da75$var$ValueFormat,
            valueFormat2: $b687332511a4da75$var$ValueFormat,
            pairSetCount: $gfJaN$restructure.uint16,
            pairSets: new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$PairSet), "pairSetCount")
        },
        2: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            valueFormat1: $b687332511a4da75$var$ValueFormat,
            valueFormat2: $b687332511a4da75$var$ValueFormat,
            classDef1: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
            classDef2: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$843d551fbbafef71),
            class1Count: $gfJaN$restructure.uint16,
            class2Count: $gfJaN$restructure.uint16,
            classRecords: new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.LazyArray($b687332511a4da75$var$Class2Record, "class2Count"), "class1Count")
        }
    }),
    3: {
        format: $gfJaN$restructure.uint16,
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        entryExitCount: $gfJaN$restructure.uint16,
        entryExitRecords: new $gfJaN$restructure.Array($b687332511a4da75$var$EntryExitRecord, "entryExitCount")
    },
    4: {
        format: $gfJaN$restructure.uint16,
        markCoverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        baseCoverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        classCount: $gfJaN$restructure.uint16,
        markArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$MarkArray),
        baseArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$BaseArray)
    },
    5: {
        format: $gfJaN$restructure.uint16,
        markCoverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        ligatureCoverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        classCount: $gfJaN$restructure.uint16,
        markArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$MarkArray),
        ligatureArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$LigatureArray)
    },
    6: {
        format: $gfJaN$restructure.uint16,
        mark1Coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        mark2Coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        classCount: $gfJaN$restructure.uint16,
        mark1Array: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$MarkArray),
        mark2Array: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b687332511a4da75$var$BaseArray)
    },
    7: $b6dd765146ad212a$export$841858b892ce1f4c,
    8: $b6dd765146ad212a$export$5e6d09e6861162f6,
    9: {
        posFormat: $gfJaN$restructure.uint16,
        lookupType: $gfJaN$restructure.uint16,
        extension: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, null)
    }
});
// Fix circular reference
$b687332511a4da75$export$73a8cfb19cd43a0f.versions[9].extension.type = $b687332511a4da75$export$73a8cfb19cd43a0f;
var $b687332511a4da75$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint32, {
    header: {
        scriptList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$3e15fc05ce864229),
        featureList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$aa18130def4b6cb4),
        lookupList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $b6dd765146ad212a$export$df0008c6ff2da22a($b687332511a4da75$export$73a8cfb19cd43a0f))
    },
    0x00010000: {},
    0x00010001: {
        featureVariations: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$export$441b70b7971dd419)
    }
});
let $99ccad60b96f92fb$var$Sequence = new $gfJaN$restructure.Array($gfJaN$restructure.uint16, $gfJaN$restructure.uint16);
let $99ccad60b96f92fb$var$AlternateSet = $99ccad60b96f92fb$var$Sequence;
let $99ccad60b96f92fb$var$Ligature = new $gfJaN$restructure.Struct({
    glyph: $gfJaN$restructure.uint16,
    compCount: $gfJaN$restructure.uint16,
    components: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.compCount - 1)
});
let $99ccad60b96f92fb$var$LigatureSet = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $99ccad60b96f92fb$var$Ligature), $gfJaN$restructure.uint16);
let $99ccad60b96f92fb$var$GSUBLookup = new $gfJaN$restructure.VersionedStruct("lookupType", {
    1: new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
        1: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            deltaGlyphID: $gfJaN$restructure.int16
        },
        2: {
            coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
            glyphCount: $gfJaN$restructure.uint16,
            substitute: new $gfJaN$restructure.LazyArray($gfJaN$restructure.uint16, "glyphCount")
        }
    }),
    2: {
        substFormat: $gfJaN$restructure.uint16,
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        count: $gfJaN$restructure.uint16,
        sequences: new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $99ccad60b96f92fb$var$Sequence), "count")
    },
    3: {
        substFormat: $gfJaN$restructure.uint16,
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        count: $gfJaN$restructure.uint16,
        alternateSet: new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $99ccad60b96f92fb$var$AlternateSet), "count")
    },
    4: {
        substFormat: $gfJaN$restructure.uint16,
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        count: $gfJaN$restructure.uint16,
        ligatureSets: new $gfJaN$restructure.LazyArray(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $99ccad60b96f92fb$var$LigatureSet), "count")
    },
    5: $b6dd765146ad212a$export$841858b892ce1f4c,
    6: $b6dd765146ad212a$export$5e6d09e6861162f6,
    7: {
        substFormat: $gfJaN$restructure.uint16,
        lookupType: $gfJaN$restructure.uint16,
        extension: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, null)
    },
    8: {
        substFormat: $gfJaN$restructure.uint16,
        coverage: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111),
        backtrackCoverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "backtrackGlyphCount"),
        lookaheadGlyphCount: $gfJaN$restructure.uint16,
        lookaheadCoverage: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$17608c3f81a6111), "lookaheadGlyphCount"),
        glyphCount: $gfJaN$restructure.uint16,
        substitutes: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "glyphCount")
    }
});
// Fix circular reference
$99ccad60b96f92fb$var$GSUBLookup.versions[7].extension.type = $99ccad60b96f92fb$var$GSUBLookup;
var $99ccad60b96f92fb$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint32, {
    header: {
        scriptList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$3e15fc05ce864229),
        featureList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $b6dd765146ad212a$export$aa18130def4b6cb4),
        lookupList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $b6dd765146ad212a$export$df0008c6ff2da22a($99ccad60b96f92fb$var$GSUBLookup))
    },
    0x00010000: {},
    0x00010001: {
        featureVariations: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$export$441b70b7971dd419)
    }
});
let $573d5042c76c4940$var$JstfGSUBModList = new $gfJaN$restructure.Array($gfJaN$restructure.uint16, $gfJaN$restructure.uint16);
let $573d5042c76c4940$var$JstfPriority = new $gfJaN$restructure.Struct({
    shrinkageEnableGSUB: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    shrinkageDisableGSUB: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    shrinkageEnableGPOS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    shrinkageDisableGPOS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    shrinkageJstfMax: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $b6dd765146ad212a$export$df0008c6ff2da22a($b687332511a4da75$export$73a8cfb19cd43a0f)),
    extensionEnableGSUB: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    extensionDisableGSUB: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    extensionEnableGPOS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    extensionDisableGPOS: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfGSUBModList),
    extensionJstfMax: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $b6dd765146ad212a$export$df0008c6ff2da22a($b687332511a4da75$export$73a8cfb19cd43a0f))
});
let $573d5042c76c4940$var$JstfLangSys = new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfPriority), $gfJaN$restructure.uint16);
let $573d5042c76c4940$var$JstfLangSysRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    jstfLangSys: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfLangSys)
});
let $573d5042c76c4940$var$JstfScript = new $gfJaN$restructure.Struct({
    extenderGlyphs: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $gfJaN$restructure.Array($gfJaN$restructure.uint16, $gfJaN$restructure.uint16)),
    defaultLangSys: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfLangSys),
    langSysCount: $gfJaN$restructure.uint16,
    langSysRecords: new $gfJaN$restructure.Array($573d5042c76c4940$var$JstfLangSysRecord, "langSysCount")
});
let $573d5042c76c4940$var$JstfScriptRecord = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    script: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $573d5042c76c4940$var$JstfScript, {
        type: "parent"
    })
});
var $573d5042c76c4940$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint32,
    scriptCount: $gfJaN$restructure.uint16,
    scriptList: new $gfJaN$restructure.Array($573d5042c76c4940$var$JstfScriptRecord, "scriptCount")
});
// TODO: add this to restructure
class $a5875b80d6087f61$var$VariableSizeNumber {
    decode(stream, parent) {
        switch(this.size(0, parent)){
            case 1:
                return stream.readUInt8();
            case 2:
                return stream.readUInt16BE();
            case 3:
                return stream.readUInt24BE();
            case 4:
                return stream.readUInt32BE();
        }
    }
    size(val, parent) {
        return (0, $gfJaN$restructure.resolveLength)(this._size, null, parent);
    }
    constructor(size){
        this._size = size;
    }
}
let $a5875b80d6087f61$var$MapDataEntry = new $gfJaN$restructure.Struct({
    entry: new $a5875b80d6087f61$var$VariableSizeNumber((t)=>((t.parent.entryFormat & 0x0030) >> 4) + 1),
    outerIndex: (t)=>t.entry >> (t.parent.entryFormat & 0x000F) + 1,
    innerIndex: (t)=>t.entry & (1 << (t.parent.entryFormat & 0x000F) + 1) - 1
});
let $a5875b80d6087f61$var$DeltaSetIndexMap = new $gfJaN$restructure.Struct({
    entryFormat: $gfJaN$restructure.uint16,
    mapCount: $gfJaN$restructure.uint16,
    mapData: new $gfJaN$restructure.Array($a5875b80d6087f61$var$MapDataEntry, "mapCount")
});
var $a5875b80d6087f61$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    majorVersion: $gfJaN$restructure.uint16,
    minorVersion: $gfJaN$restructure.uint16,
    itemVariationStore: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $2e4adcda047b3383$export$fe1b122a2710f241),
    advanceWidthMapping: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $a5875b80d6087f61$var$DeltaSetIndexMap),
    LSBMapping: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $a5875b80d6087f61$var$DeltaSetIndexMap),
    RSBMapping: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $a5875b80d6087f61$var$DeltaSetIndexMap)
});
let $4423bc1ac09bbbd1$var$Signature = new $gfJaN$restructure.Struct({
    format: $gfJaN$restructure.uint32,
    length: $gfJaN$restructure.uint32,
    offset: $gfJaN$restructure.uint32
});
let $4423bc1ac09bbbd1$var$SignatureBlock = new $gfJaN$restructure.Struct({
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16, 2),
    cbSignature: $gfJaN$restructure.uint32,
    signature: new $gfJaN$restructure.Buffer("cbSignature")
});
var $4423bc1ac09bbbd1$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    ulVersion: $gfJaN$restructure.uint32,
    usNumSigs: $gfJaN$restructure.uint16,
    usFlag: $gfJaN$restructure.uint16,
    signatures: new $gfJaN$restructure.Array($4423bc1ac09bbbd1$var$Signature, "usNumSigs"),
    signatureBlocks: new $gfJaN$restructure.Array($4423bc1ac09bbbd1$var$SignatureBlock, "usNumSigs")
});
let $7b50e3f8d83263de$var$GaspRange = new $gfJaN$restructure.Struct({
    rangeMaxPPEM: $gfJaN$restructure.uint16,
    rangeGaspBehavior: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint16, [
        "grayscale",
        "gridfit",
        "symmetricSmoothing",
        "symmetricGridfit" // only in version 1, for ClearType
    ])
});
var $7b50e3f8d83263de$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numRanges: $gfJaN$restructure.uint16,
    gaspRanges: new $gfJaN$restructure.Array($7b50e3f8d83263de$var$GaspRange, "numRanges") // Sorted by ppem
});
let $7bf92ec372cd2307$var$DeviceRecord = new $gfJaN$restructure.Struct({
    pixelSize: $gfJaN$restructure.uint8,
    maximumWidth: $gfJaN$restructure.uint8,
    widths: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, (t)=>t.parent.parent.maxp.numGlyphs)
});
var $7bf92ec372cd2307$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numRecords: $gfJaN$restructure.int16,
    sizeDeviceRecord: $gfJaN$restructure.int32,
    records: new $gfJaN$restructure.Array($7bf92ec372cd2307$var$DeviceRecord, "numRecords")
});
let $a3f544bcf76542d1$var$KernPair = new $gfJaN$restructure.Struct({
    left: $gfJaN$restructure.uint16,
    right: $gfJaN$restructure.uint16,
    value: $gfJaN$restructure.int16
});
let $a3f544bcf76542d1$var$ClassTable = new $gfJaN$restructure.Struct({
    firstGlyph: $gfJaN$restructure.uint16,
    nGlyphs: $gfJaN$restructure.uint16,
    offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "nGlyphs"),
    max: (t)=>t.offsets.length && Math.max.apply(Math, t.offsets)
});
let $a3f544bcf76542d1$var$Kern2Array = new $gfJaN$restructure.Struct({
    off: (t)=>t._startOffset - t.parent.parent._startOffset,
    len: (t)=>((t.parent.leftTable.max - t.off) / t.parent.rowWidth + 1) * (t.parent.rowWidth / 2),
    values: new $gfJaN$restructure.LazyArray($gfJaN$restructure.int16, "len")
});
let $a3f544bcf76542d1$var$KernSubtable = new $gfJaN$restructure.VersionedStruct("format", {
    0: {
        nPairs: $gfJaN$restructure.uint16,
        searchRange: $gfJaN$restructure.uint16,
        entrySelector: $gfJaN$restructure.uint16,
        rangeShift: $gfJaN$restructure.uint16,
        pairs: new $gfJaN$restructure.Array($a3f544bcf76542d1$var$KernPair, "nPairs")
    },
    2: {
        rowWidth: $gfJaN$restructure.uint16,
        leftTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $a3f544bcf76542d1$var$ClassTable, {
            type: "parent"
        }),
        rightTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $a3f544bcf76542d1$var$ClassTable, {
            type: "parent"
        }),
        array: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $a3f544bcf76542d1$var$Kern2Array, {
            type: "parent"
        })
    },
    3: {
        glyphCount: $gfJaN$restructure.uint16,
        kernValueCount: $gfJaN$restructure.uint8,
        leftClassCount: $gfJaN$restructure.uint8,
        rightClassCount: $gfJaN$restructure.uint8,
        flags: $gfJaN$restructure.uint8,
        kernValue: new $gfJaN$restructure.Array($gfJaN$restructure.int16, "kernValueCount"),
        leftClass: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, "glyphCount"),
        rightClass: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, "glyphCount"),
        kernIndex: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, (t)=>t.leftClassCount * t.rightClassCount)
    }
});
let $a3f544bcf76542d1$var$KernTable = new $gfJaN$restructure.VersionedStruct("version", {
    0: {
        subVersion: $gfJaN$restructure.uint16,
        length: $gfJaN$restructure.uint16,
        format: $gfJaN$restructure.uint8,
        coverage: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint8, [
            "horizontal",
            "minimum",
            "crossStream",
            "override" // If set to 1 the value in this table replaces the accumulated value
        ]),
        subtable: $a3f544bcf76542d1$var$KernSubtable,
        padding: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8, (t)=>t.length - t._currentOffset)
    },
    1: {
        length: $gfJaN$restructure.uint32,
        coverage: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint8, [
            null,
            null,
            null,
            null,
            null,
            "variation",
            "crossStream",
            "vertical" // Set if table has vertical kerning values
        ]),
        format: $gfJaN$restructure.uint8,
        tupleIndex: $gfJaN$restructure.uint16,
        subtable: $a3f544bcf76542d1$var$KernSubtable,
        padding: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8, (t)=>t.length - t._currentOffset)
    }
});
var $a3f544bcf76542d1$export$2e2bcd8739ae039 = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
    0: {
        nTables: $gfJaN$restructure.uint16,
        tables: new $gfJaN$restructure.Array($a3f544bcf76542d1$var$KernTable, "nTables")
    },
    1: {
        reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
        nTables: $gfJaN$restructure.uint32,
        tables: new $gfJaN$restructure.Array($a3f544bcf76542d1$var$KernTable, "nTables")
    }
});
var // Records the ppem for each glyph at which the scaling becomes linear again,
// despite instructions effecting the advance width
$86687befb45925d0$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numGlyphs: $gfJaN$restructure.uint16,
    yPels: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, "numGlyphs")
});
var // NOTE: The PCLT table is strongly discouraged for OpenType fonts with TrueType outlines
$91429006e51e0fe8$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    fontNumber: $gfJaN$restructure.uint32,
    pitch: $gfJaN$restructure.uint16,
    xHeight: $gfJaN$restructure.uint16,
    style: $gfJaN$restructure.uint16,
    typeFamily: $gfJaN$restructure.uint16,
    capHeight: $gfJaN$restructure.uint16,
    symbolSet: $gfJaN$restructure.uint16,
    typeface: new $gfJaN$restructure.String(16),
    characterComplement: new $gfJaN$restructure.String(8),
    fileName: new $gfJaN$restructure.String(6),
    strokeWeight: new $gfJaN$restructure.String(1),
    widthType: new $gfJaN$restructure.String(1),
    serifStyle: $gfJaN$restructure.uint8,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8)
});
// VDMX tables contain ascender/descender overrides for certain (usually small)
// sizes. This is needed in order to match font metrics on Windows.
let $627850fc9deed59a$var$Ratio = new $gfJaN$restructure.Struct({
    bCharSet: $gfJaN$restructure.uint8,
    xRatio: $gfJaN$restructure.uint8,
    yStartRatio: $gfJaN$restructure.uint8,
    yEndRatio: $gfJaN$restructure.uint8 // Ending y-Ratio value
});
let $627850fc9deed59a$var$vTable = new $gfJaN$restructure.Struct({
    yPelHeight: $gfJaN$restructure.uint16,
    yMax: $gfJaN$restructure.int16,
    yMin: $gfJaN$restructure.int16 // Minimum value (in pels) for this yPelHeight
});
let $627850fc9deed59a$var$VdmxGroup = new $gfJaN$restructure.Struct({
    recs: $gfJaN$restructure.uint16,
    startsz: $gfJaN$restructure.uint8,
    endsz: $gfJaN$restructure.uint8,
    entries: new $gfJaN$restructure.Array($627850fc9deed59a$var$vTable, "recs") // The VDMX records
});
var $627850fc9deed59a$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    numRecs: $gfJaN$restructure.uint16,
    numRatios: $gfJaN$restructure.uint16,
    ratioRanges: new $gfJaN$restructure.Array($627850fc9deed59a$var$Ratio, "numRatios"),
    offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numRatios"),
    groups: new $gfJaN$restructure.Array($627850fc9deed59a$var$VdmxGroup, "numRecs") // The actual VDMX groupings
});
var $65c33f5f068fc77f$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    ascent: $gfJaN$restructure.int16,
    descent: $gfJaN$restructure.int16,
    lineGap: $gfJaN$restructure.int16,
    advanceHeightMax: $gfJaN$restructure.int16,
    minTopSideBearing: $gfJaN$restructure.int16,
    minBottomSideBearing: $gfJaN$restructure.int16,
    yMaxExtent: $gfJaN$restructure.int16,
    caretSlopeRise: $gfJaN$restructure.int16,
    caretSlopeRun: $gfJaN$restructure.int16,
    caretOffset: $gfJaN$restructure.int16,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.int16, 4),
    metricDataFormat: $gfJaN$restructure.int16,
    numberOfMetrics: $gfJaN$restructure.uint16 // Number of advance heights in the Vertical Metrics table
});
let $597d739523b65bb3$var$VmtxEntry = new $gfJaN$restructure.Struct({
    advance: $gfJaN$restructure.uint16,
    bearing: $gfJaN$restructure.int16 // The top sidebearing of the glyph
});
var $597d739523b65bb3$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    metrics: new $gfJaN$restructure.LazyArray($597d739523b65bb3$var$VmtxEntry, (t)=>t.parent.vhea.numberOfMetrics),
    bearings: new $gfJaN$restructure.LazyArray($gfJaN$restructure.int16, (t)=>t.parent.maxp.numGlyphs - t.parent.vhea.numberOfMetrics)
});
let $35aa0c87d9c3d3a0$var$shortFrac = new $gfJaN$restructure.Fixed(16, "BE", 14);
let $35aa0c87d9c3d3a0$var$Correspondence = new $gfJaN$restructure.Struct({
    fromCoord: $35aa0c87d9c3d3a0$var$shortFrac,
    toCoord: $35aa0c87d9c3d3a0$var$shortFrac
});
let $35aa0c87d9c3d3a0$var$Segment = new $gfJaN$restructure.Struct({
    pairCount: $gfJaN$restructure.uint16,
    correspondence: new $gfJaN$restructure.Array($35aa0c87d9c3d3a0$var$Correspondence, "pairCount")
});
var $35aa0c87d9c3d3a0$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    axisCount: $gfJaN$restructure.uint32,
    segment: new $gfJaN$restructure.Array($35aa0c87d9c3d3a0$var$Segment, "axisCount")
});
class $22801616bd931ca3$var$UnboundedArrayAccessor {
    getItem(index) {
        if (this._items[index] == null) {
            let pos = this.stream.pos;
            this.stream.pos = this.base + this.type.size(null, this.parent) * index;
            this._items[index] = this.type.decode(this.stream, this.parent);
            this.stream.pos = pos;
        }
        return this._items[index];
    }
    inspect() {
        return `[UnboundedArray ${this.type.constructor.name}]`;
    }
    constructor(type, stream, parent){
        this.type = type;
        this.stream = stream;
        this.parent = parent;
        this.base = this.stream.pos;
        this._items = [];
    }
}
class $22801616bd931ca3$export$c5af1eebc882e39a extends $gfJaN$restructure.Array {
    decode(stream, parent) {
        return new $22801616bd931ca3$var$UnboundedArrayAccessor(this.type, stream, parent);
    }
    constructor(type){
        super(type, 0);
    }
}
let $22801616bd931ca3$export$8351f8c2ae2f103c = function(ValueType = $gfJaN$restructure.uint16) {
    // Helper class that makes internal structures invisible to pointers
    class Shadow {
        decode(stream, ctx) {
            ctx = ctx.parent.parent;
            return this.type.decode(stream, ctx);
        }
        size(val, ctx) {
            ctx = ctx.parent.parent;
            return this.type.size(val, ctx);
        }
        encode(stream, val, ctx) {
            ctx = ctx.parent.parent;
            return this.type.encode(stream, val, ctx);
        }
        constructor(type){
            this.type = type;
        }
    }
    ValueType = new Shadow(ValueType);
    let BinarySearchHeader = new $gfJaN$restructure.Struct({
        unitSize: $gfJaN$restructure.uint16,
        nUnits: $gfJaN$restructure.uint16,
        searchRange: $gfJaN$restructure.uint16,
        entrySelector: $gfJaN$restructure.uint16,
        rangeShift: $gfJaN$restructure.uint16
    });
    let LookupSegmentSingle = new $gfJaN$restructure.Struct({
        lastGlyph: $gfJaN$restructure.uint16,
        firstGlyph: $gfJaN$restructure.uint16,
        value: ValueType
    });
    let LookupSegmentArray = new $gfJaN$restructure.Struct({
        lastGlyph: $gfJaN$restructure.uint16,
        firstGlyph: $gfJaN$restructure.uint16,
        values: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $gfJaN$restructure.Array(ValueType, (t)=>t.lastGlyph - t.firstGlyph + 1), {
            type: "parent"
        })
    });
    let LookupSingle = new $gfJaN$restructure.Struct({
        glyph: $gfJaN$restructure.uint16,
        value: ValueType
    });
    return new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint16, {
        0: {
            values: new $22801616bd931ca3$export$c5af1eebc882e39a(ValueType) // length == number of glyphs maybe?
        },
        2: {
            binarySearchHeader: BinarySearchHeader,
            segments: new $gfJaN$restructure.Array(LookupSegmentSingle, (t)=>t.binarySearchHeader.nUnits)
        },
        4: {
            binarySearchHeader: BinarySearchHeader,
            segments: new $gfJaN$restructure.Array(LookupSegmentArray, (t)=>t.binarySearchHeader.nUnits)
        },
        6: {
            binarySearchHeader: BinarySearchHeader,
            segments: new $gfJaN$restructure.Array(LookupSingle, (t)=>t.binarySearchHeader.nUnits)
        },
        8: {
            firstGlyph: $gfJaN$restructure.uint16,
            count: $gfJaN$restructure.uint16,
            values: new $gfJaN$restructure.Array(ValueType, "count")
        }
    });
};
function $22801616bd931ca3$export$79f7d93d790934ba(entryData = {}, lookupType = $gfJaN$restructure.uint16) {
    let entry = Object.assign({
        newState: $gfJaN$restructure.uint16,
        flags: $gfJaN$restructure.uint16
    }, entryData);
    let Entry = new $gfJaN$restructure.Struct(entry);
    let StateArray = new $22801616bd931ca3$export$c5af1eebc882e39a(new $gfJaN$restructure.Array($gfJaN$restructure.uint16, (t)=>t.nClasses));
    let StateHeader = new $gfJaN$restructure.Struct({
        nClasses: $gfJaN$restructure.uint32,
        classTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$8351f8c2ae2f103c(lookupType)),
        stateArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, StateArray),
        entryTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$c5af1eebc882e39a(Entry))
    });
    return StateHeader;
}
function $22801616bd931ca3$export$105027425199cc51(entryData = {}, lookupType = $gfJaN$restructure.uint16) {
    let ClassLookupTable = new $gfJaN$restructure.Struct({
        version () {
            return 8;
        },
        firstGlyph: $gfJaN$restructure.uint16,
        values: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, $gfJaN$restructure.uint16)
    });
    let entry = Object.assign({
        newStateOffset: $gfJaN$restructure.uint16,
        // convert offset to stateArray index
        newState: (t)=>(t.newStateOffset - (t.parent.stateArray.base - t.parent._startOffset)) / t.parent.nClasses,
        flags: $gfJaN$restructure.uint16
    }, entryData);
    let Entry = new $gfJaN$restructure.Struct(entry);
    let StateArray = new $22801616bd931ca3$export$c5af1eebc882e39a(new $gfJaN$restructure.Array($gfJaN$restructure.uint8, (t)=>t.nClasses));
    let StateHeader1 = new $gfJaN$restructure.Struct({
        nClasses: $gfJaN$restructure.uint16,
        classTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, ClassLookupTable),
        stateArray: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, StateArray),
        entryTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $22801616bd931ca3$export$c5af1eebc882e39a(Entry))
    });
    return StateHeader1;
}
let $3a5ca96d3e3aaf20$var$BslnSubtable = new $gfJaN$restructure.VersionedStruct("format", {
    0: {
        deltas: new $gfJaN$restructure.Array($gfJaN$restructure.int16, 32)
    },
    1: {
        deltas: new $gfJaN$restructure.Array($gfJaN$restructure.int16, 32),
        mappingData: new $22801616bd931ca3$export$8351f8c2ae2f103c($gfJaN$restructure.uint16)
    },
    2: {
        standardGlyph: $gfJaN$restructure.uint16,
        controlPoints: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, 32)
    },
    3: {
        standardGlyph: $gfJaN$restructure.uint16,
        controlPoints: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, 32),
        mappingData: new $22801616bd931ca3$export$8351f8c2ae2f103c($gfJaN$restructure.uint16)
    }
});
var $3a5ca96d3e3aaf20$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    format: $gfJaN$restructure.uint16,
    defaultBaseline: $gfJaN$restructure.uint16,
    subtable: $3a5ca96d3e3aaf20$var$BslnSubtable
});
let $8d4241d96b2b0589$var$Setting = new $gfJaN$restructure.Struct({
    setting: $gfJaN$restructure.uint16,
    nameIndex: $gfJaN$restructure.int16,
    name: (t)=>t.parent.parent.parent.name.records.fontFeatures[t.nameIndex]
});
let $8d4241d96b2b0589$var$FeatureName = new $gfJaN$restructure.Struct({
    feature: $gfJaN$restructure.uint16,
    nSettings: $gfJaN$restructure.uint16,
    settingTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array($8d4241d96b2b0589$var$Setting, "nSettings"), {
        type: "parent"
    }),
    featureFlags: new $gfJaN$restructure.Bitfield($gfJaN$restructure.uint8, [
        null,
        null,
        null,
        null,
        null,
        null,
        "hasDefault",
        "exclusive"
    ]),
    defaultSetting: $gfJaN$restructure.uint8,
    nameIndex: $gfJaN$restructure.int16,
    name: (t)=>t.parent.parent.name.records.fontFeatures[t.nameIndex]
});
var $8d4241d96b2b0589$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    featureNameCount: $gfJaN$restructure.uint16,
    reserved1: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    reserved2: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint32),
    featureNames: new $gfJaN$restructure.Array($8d4241d96b2b0589$var$FeatureName, "featureNameCount")
});
let $a79cd5132b1cf476$var$Axis = new $gfJaN$restructure.Struct({
    axisTag: new $gfJaN$restructure.String(4),
    minValue: $gfJaN$restructure.fixed32,
    defaultValue: $gfJaN$restructure.fixed32,
    maxValue: $gfJaN$restructure.fixed32,
    flags: $gfJaN$restructure.uint16,
    nameID: $gfJaN$restructure.uint16,
    name: (t)=>t.parent.parent.name.records.fontFeatures[t.nameID]
});
let $a79cd5132b1cf476$var$Instance = new $gfJaN$restructure.Struct({
    nameID: $gfJaN$restructure.uint16,
    name: (t)=>t.parent.parent.name.records.fontFeatures[t.nameID],
    flags: $gfJaN$restructure.uint16,
    coord: new $gfJaN$restructure.Array($gfJaN$restructure.fixed32, (t)=>t.parent.axisCount),
    postscriptNameID: new $gfJaN$restructure.Optional($gfJaN$restructure.uint16, (t)=>t.parent.instanceSize - t._currentOffset > 0)
});
var $a79cd5132b1cf476$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    offsetToData: $gfJaN$restructure.uint16,
    countSizePairs: $gfJaN$restructure.uint16,
    axisCount: $gfJaN$restructure.uint16,
    axisSize: $gfJaN$restructure.uint16,
    instanceCount: $gfJaN$restructure.uint16,
    instanceSize: $gfJaN$restructure.uint16,
    axis: new $gfJaN$restructure.Array($a79cd5132b1cf476$var$Axis, "axisCount"),
    instance: new $gfJaN$restructure.Array($a79cd5132b1cf476$var$Instance, "instanceCount")
});
let $3f36f1a5e6989457$var$shortFrac = new $gfJaN$restructure.Fixed(16, "BE", 14);
class $3f36f1a5e6989457$var$Offset {
    static decode(stream, parent) {
        // In short format, offsets are multiplied by 2.
        // This doesn't seem to be documented by Apple, but it
        // is implemented this way in Freetype.
        return parent.flags ? stream.readUInt32BE() : stream.readUInt16BE() * 2;
    }
}
let $3f36f1a5e6989457$var$gvar = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    axisCount: $gfJaN$restructure.uint16,
    globalCoordCount: $gfJaN$restructure.uint16,
    globalCoords: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $gfJaN$restructure.Array(new $gfJaN$restructure.Array($3f36f1a5e6989457$var$shortFrac, "axisCount"), "globalCoordCount")),
    glyphCount: $gfJaN$restructure.uint16,
    flags: $gfJaN$restructure.uint16,
    offsetToData: $gfJaN$restructure.uint32,
    offsets: new $gfJaN$restructure.Array(new $gfJaN$restructure.Pointer($3f36f1a5e6989457$var$Offset, "void", {
        relativeTo: (ctx)=>ctx.offsetToData,
        allowNull: false
    }), (t)=>t.glyphCount + 1)
});
var $3f36f1a5e6989457$export$2e2bcd8739ae039 = $3f36f1a5e6989457$var$gvar;
let $0bd8fe7a6d1d9fb4$var$ClassTable = new $gfJaN$restructure.Struct({
    length: $gfJaN$restructure.uint16,
    coverage: $gfJaN$restructure.uint16,
    subFeatureFlags: $gfJaN$restructure.uint32,
    stateTable: new $22801616bd931ca3$export$105027425199cc51
});
let $0bd8fe7a6d1d9fb4$var$WidthDeltaRecord = new $gfJaN$restructure.Struct({
    justClass: $gfJaN$restructure.uint32,
    beforeGrowLimit: $gfJaN$restructure.fixed32,
    beforeShrinkLimit: $gfJaN$restructure.fixed32,
    afterGrowLimit: $gfJaN$restructure.fixed32,
    afterShrinkLimit: $gfJaN$restructure.fixed32,
    growFlags: $gfJaN$restructure.uint16,
    shrinkFlags: $gfJaN$restructure.uint16
});
let $0bd8fe7a6d1d9fb4$var$WidthDeltaCluster = new $gfJaN$restructure.Array($0bd8fe7a6d1d9fb4$var$WidthDeltaRecord, $gfJaN$restructure.uint32);
let $0bd8fe7a6d1d9fb4$var$ActionData = new $gfJaN$restructure.VersionedStruct("actionType", {
    0: {
        lowerLimit: $gfJaN$restructure.fixed32,
        upperLimit: $gfJaN$restructure.fixed32,
        order: $gfJaN$restructure.uint16,
        glyphs: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, $gfJaN$restructure.uint16)
    },
    1: {
        addGlyph: $gfJaN$restructure.uint16
    },
    2: {
        substThreshold: $gfJaN$restructure.fixed32,
        addGlyph: $gfJaN$restructure.uint16,
        substGlyph: $gfJaN$restructure.uint16
    },
    3: {},
    4: {
        variationAxis: $gfJaN$restructure.uint32,
        minimumLimit: $gfJaN$restructure.fixed32,
        noStretchValue: $gfJaN$restructure.fixed32,
        maximumLimit: $gfJaN$restructure.fixed32
    },
    5: {
        flags: $gfJaN$restructure.uint16,
        glyph: $gfJaN$restructure.uint16
    }
});
let $0bd8fe7a6d1d9fb4$var$Action = new $gfJaN$restructure.Struct({
    actionClass: $gfJaN$restructure.uint16,
    actionType: $gfJaN$restructure.uint16,
    actionLength: $gfJaN$restructure.uint32,
    actionData: $0bd8fe7a6d1d9fb4$var$ActionData,
    padding: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8, (t)=>t.actionLength - t._currentOffset)
});
let $0bd8fe7a6d1d9fb4$var$PostcompensationAction = new $gfJaN$restructure.Array($0bd8fe7a6d1d9fb4$var$Action, $gfJaN$restructure.uint32);
let $0bd8fe7a6d1d9fb4$var$PostCompensationTable = new $gfJaN$restructure.Struct({
    lookupTable: new $22801616bd931ca3$export$8351f8c2ae2f103c(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$PostcompensationAction))
});
let $0bd8fe7a6d1d9fb4$var$JustificationTable = new $gfJaN$restructure.Struct({
    classTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$ClassTable, {
        type: "parent"
    }),
    wdcOffset: $gfJaN$restructure.uint16,
    postCompensationTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$PostCompensationTable, {
        type: "parent"
    }),
    widthDeltaClusters: new $22801616bd931ca3$export$8351f8c2ae2f103c(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$WidthDeltaCluster, {
        type: "parent",
        relativeTo: (ctx)=>ctx.wdcOffset
    }))
});
var $0bd8fe7a6d1d9fb4$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint32,
    format: $gfJaN$restructure.uint16,
    horizontal: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$JustificationTable),
    vertical: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $0bd8fe7a6d1d9fb4$var$JustificationTable)
});
let $ef40c6dc80fd50a2$var$LigatureData = {
    action: $gfJaN$restructure.uint16
};
let $ef40c6dc80fd50a2$var$ContextualData = {
    markIndex: $gfJaN$restructure.uint16,
    currentIndex: $gfJaN$restructure.uint16
};
let $ef40c6dc80fd50a2$var$InsertionData = {
    currentInsertIndex: $gfJaN$restructure.uint16,
    markedInsertIndex: $gfJaN$restructure.uint16
};
let $ef40c6dc80fd50a2$var$SubstitutionTable = new $gfJaN$restructure.Struct({
    items: new $22801616bd931ca3$export$c5af1eebc882e39a(new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$8351f8c2ae2f103c))
});
let $ef40c6dc80fd50a2$var$SubtableData = new $gfJaN$restructure.VersionedStruct("type", {
    0: {
        stateTable: new $22801616bd931ca3$export$79f7d93d790934ba
    },
    1: {
        stateTable: new $22801616bd931ca3$export$79f7d93d790934ba($ef40c6dc80fd50a2$var$ContextualData),
        substitutionTable: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $ef40c6dc80fd50a2$var$SubstitutionTable)
    },
    2: {
        stateTable: new $22801616bd931ca3$export$79f7d93d790934ba($ef40c6dc80fd50a2$var$LigatureData),
        ligatureActions: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$c5af1eebc882e39a($gfJaN$restructure.uint32)),
        components: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$c5af1eebc882e39a($gfJaN$restructure.uint16)),
        ligatureList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$c5af1eebc882e39a($gfJaN$restructure.uint16))
    },
    4: {
        lookupTable: new $22801616bd931ca3$export$8351f8c2ae2f103c
    },
    5: {
        stateTable: new $22801616bd931ca3$export$79f7d93d790934ba($ef40c6dc80fd50a2$var$InsertionData),
        insertionActions: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, new $22801616bd931ca3$export$c5af1eebc882e39a($gfJaN$restructure.uint16))
    }
});
let $ef40c6dc80fd50a2$var$Subtable = new $gfJaN$restructure.Struct({
    length: $gfJaN$restructure.uint32,
    coverage: $gfJaN$restructure.uint24,
    type: $gfJaN$restructure.uint8,
    subFeatureFlags: $gfJaN$restructure.uint32,
    table: $ef40c6dc80fd50a2$var$SubtableData,
    padding: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8, (t)=>t.length - t._currentOffset)
});
let $ef40c6dc80fd50a2$var$FeatureEntry = new $gfJaN$restructure.Struct({
    featureType: $gfJaN$restructure.uint16,
    featureSetting: $gfJaN$restructure.uint16,
    enableFlags: $gfJaN$restructure.uint32,
    disableFlags: $gfJaN$restructure.uint32
});
let $ef40c6dc80fd50a2$var$MorxChain = new $gfJaN$restructure.Struct({
    defaultFlags: $gfJaN$restructure.uint32,
    chainLength: $gfJaN$restructure.uint32,
    nFeatureEntries: $gfJaN$restructure.uint32,
    nSubtables: $gfJaN$restructure.uint32,
    features: new $gfJaN$restructure.Array($ef40c6dc80fd50a2$var$FeatureEntry, "nFeatureEntries"),
    subtables: new $gfJaN$restructure.Array($ef40c6dc80fd50a2$var$Subtable, "nSubtables")
});
var $ef40c6dc80fd50a2$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint16,
    unused: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    nChains: $gfJaN$restructure.uint32,
    chains: new $gfJaN$restructure.Array($ef40c6dc80fd50a2$var$MorxChain, "nChains")
});
let $ab24dea08b58a7cc$var$OpticalBounds = new $gfJaN$restructure.Struct({
    left: $gfJaN$restructure.int16,
    top: $gfJaN$restructure.int16,
    right: $gfJaN$restructure.int16,
    bottom: $gfJaN$restructure.int16
});
var $ab24dea08b58a7cc$export$2e2bcd8739ae039 = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.fixed32,
    format: $gfJaN$restructure.uint16,
    lookupTable: new $22801616bd931ca3$export$8351f8c2ae2f103c($ab24dea08b58a7cc$var$OpticalBounds)
});
let $5825c04ce8f7102d$var$tables = {};
var $5825c04ce8f7102d$export$2e2bcd8739ae039 = $5825c04ce8f7102d$var$tables;
$5825c04ce8f7102d$var$tables.cmap = $e4ae0436c91af89f$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.head = $55a60976afb7c261$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.hhea = $dde72b7b5b650596$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.hmtx = $a7c40184072c9a5b$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.maxp = $521197722369f691$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.name = $51a9f4feb3a3b2b1$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables["OS/2"] = $114ea85db469b435$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.post = $f93b30299e1ea0f5$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.fpgm = $873d79fea57d3161$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.loca = $83c4155666d50c37$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.prep = $b12598db7cdf7042$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables["cvt "] = $8fb09b0f473d61a0$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.glyf = $7707bdf21a3d89cc$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables["CFF "] = $f717432b360040c7$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables["CFF2"] = $f717432b360040c7$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.VORG = $8cb7ae73ed7aa7d8$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.EBLC = $035bb95c0cdb1f6d$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.CBLC = $5825c04ce8f7102d$var$tables.EBLC;
$5825c04ce8f7102d$var$tables.sbix = $73d13900b55a3c0c$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.COLR = $97f6b8be3a347a8f$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.CPAL = $16ca60ecbdee30ea$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.BASE = $7327e41706f9d5c7$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.GDEF = $7e48bbe9e5345664$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.GPOS = $b687332511a4da75$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.GSUB = $99ccad60b96f92fb$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.JSTF = $573d5042c76c4940$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.HVAR = $a5875b80d6087f61$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.DSIG = $4423bc1ac09bbbd1$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.gasp = $7b50e3f8d83263de$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.hdmx = $7bf92ec372cd2307$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.kern = $a3f544bcf76542d1$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.LTSH = $86687befb45925d0$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.PCLT = $91429006e51e0fe8$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.VDMX = $627850fc9deed59a$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.vhea = $65c33f5f068fc77f$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.vmtx = $597d739523b65bb3$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.avar = $35aa0c87d9c3d3a0$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.bsln = $3a5ca96d3e3aaf20$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.feat = $8d4241d96b2b0589$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.fvar = $a79cd5132b1cf476$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.gvar = $3f36f1a5e6989457$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.just = $0bd8fe7a6d1d9fb4$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.morx = $ef40c6dc80fd50a2$export$2e2bcd8739ae039;
$5825c04ce8f7102d$var$tables.opbd = $ab24dea08b58a7cc$export$2e2bcd8739ae039;
let $df50e1efe10a1247$var$TableEntry = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    checkSum: $gfJaN$restructure.uint32,
    offset: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, "void", {
        type: "global"
    }),
    length: $gfJaN$restructure.uint32
});
let $df50e1efe10a1247$var$Directory = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    numTables: $gfJaN$restructure.uint16,
    searchRange: $gfJaN$restructure.uint16,
    entrySelector: $gfJaN$restructure.uint16,
    rangeShift: $gfJaN$restructure.uint16,
    tables: new $gfJaN$restructure.Array($df50e1efe10a1247$var$TableEntry, "numTables")
});
$df50e1efe10a1247$var$Directory.process = function() {
    let tables = {};
    for (let table of this.tables)tables[table.tag] = table;
    this.tables = tables;
};
$df50e1efe10a1247$var$Directory.preEncode = function() {
    if (!Array.isArray(this.tables)) {
        let tables = [];
        for(let tag in this.tables){
            let table = this.tables[tag];
            if (table) tables.push({
                tag: tag,
                checkSum: 0,
                offset: new $gfJaN$restructure.VoidPointer($5825c04ce8f7102d$export$2e2bcd8739ae039[tag], table),
                length: $5825c04ce8f7102d$export$2e2bcd8739ae039[tag].size(table)
            });
        }
        this.tables = tables;
    }
    this.tag = "true";
    this.numTables = this.tables.length;
    let maxExponentFor2 = Math.floor(Math.log(this.numTables) / Math.LN2);
    let maxPowerOf2 = Math.pow(2, maxExponentFor2);
    this.searchRange = maxPowerOf2 * 16;
    this.entrySelector = Math.log(maxPowerOf2) / Math.LN2;
    this.rangeShift = this.numTables * 16 - this.searchRange;
};
var $df50e1efe10a1247$export$2e2bcd8739ae039 = $df50e1efe10a1247$var$Directory;
function $66a5b9fb5318558a$export$2e0ae67339d5f1ac(arr, cmp) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let mid = min + max >> 1;
        let res = cmp(arr[mid]);
        if (res < 0) max = mid - 1;
        else if (res > 0) min = mid + 1;
        else return mid;
    }
    return -1;
}
function $66a5b9fb5318558a$export$d02631cccf789723(index, end) {
    let range1 = [];
    while(index < end)range1.push(index++);
    return range1;
}
const $66a5b9fb5318558a$export$3d28c1996ced1f14 = new TextDecoder("ascii");
// Based on https://github.com/niklasvh/base64-arraybuffer. MIT license.
const $66a5b9fb5318558a$var$CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const $66a5b9fb5318558a$var$LOOKUP = new Uint8Array(256);
for(let i = 0; i < $66a5b9fb5318558a$var$CHARS.length; i++)$66a5b9fb5318558a$var$LOOKUP[$66a5b9fb5318558a$var$CHARS.charCodeAt(i)] = i;
function $66a5b9fb5318558a$export$94fdf11bafc8de6b(base64) {
    let bufferLength = base64.length * 0.75;
    if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }
    let bytes = new Uint8Array(bufferLength);
    let p = 0;
    for(let i1 = 0, len = base64.length; i1 < len; i1 += 4){
        let encoded1 = $66a5b9fb5318558a$var$LOOKUP[base64.charCodeAt(i1)];
        let encoded2 = $66a5b9fb5318558a$var$LOOKUP[base64.charCodeAt(i1 + 1)];
        let encoded3 = $66a5b9fb5318558a$var$LOOKUP[base64.charCodeAt(i1 + 2)];
        let encoded4 = $66a5b9fb5318558a$var$LOOKUP[base64.charCodeAt(i1 + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return bytes;
}
class $0d6e160064c86e50$export$2e2bcd8739ae039 {
    findSubtable(cmapTable, pairs) {
        for (let [platformID, encodingID] of pairs)for (let cmap of cmapTable.tables){
            if (cmap.platformID === platformID && cmap.encodingID === encodingID) return cmap.table;
        }
        return null;
    }
    lookup(codepoint, variationSelector) {
        // If there is no Unicode cmap in this font, we need to re-encode
        // the codepoint in the encoding that the cmap supports.
        if (this.encoding) codepoint = this.encoding.get(codepoint) || codepoint;
        else if (variationSelector) {
            let gid = this.getVariationSelector(codepoint, variationSelector);
            if (gid) return gid;
        }
        let cmap = this.cmap;
        switch(cmap.version){
            case 0:
                return cmap.codeMap.get(codepoint) || 0;
            case 4:
                {
                    let min = 0;
                    let max = cmap.segCount - 1;
                    while(min <= max){
                        let mid = min + max >> 1;
                        if (codepoint < cmap.startCode.get(mid)) max = mid - 1;
                        else if (codepoint > cmap.endCode.get(mid)) min = mid + 1;
                        else {
                            let rangeOffset = cmap.idRangeOffset.get(mid);
                            let gid;
                            if (rangeOffset === 0) gid = codepoint + cmap.idDelta.get(mid);
                            else {
                                let index = rangeOffset / 2 + (codepoint - cmap.startCode.get(mid)) - (cmap.segCount - mid);
                                gid = cmap.glyphIndexArray.get(index) || 0;
                                if (gid !== 0) gid += cmap.idDelta.get(mid);
                            }
                            return gid & 0xffff;
                        }
                    }
                    return 0;
                }
            case 8:
                throw new Error("TODO: cmap format 8");
            case 6:
            case 10:
                return cmap.glyphIndices.get(codepoint - cmap.firstCode) || 0;
            case 12:
            case 13:
                {
                    let min = 0;
                    let max = cmap.nGroups - 1;
                    while(min <= max){
                        let mid = min + max >> 1;
                        let group = cmap.groups.get(mid);
                        if (codepoint < group.startCharCode) max = mid - 1;
                        else if (codepoint > group.endCharCode) min = mid + 1;
                        else {
                            if (cmap.version === 12) return group.glyphID + (codepoint - group.startCharCode);
                            else return group.glyphID;
                        }
                    }
                    return 0;
                }
            case 14:
                throw new Error("TODO: cmap format 14");
            default:
                throw new Error(`Unknown cmap format ${cmap.version}`);
        }
    }
    getVariationSelector(codepoint, variationSelector) {
        if (!this.uvs) return 0;
        let selectors = this.uvs.varSelectors.toArray();
        let i = $66a5b9fb5318558a$export$2e0ae67339d5f1ac(selectors, (x)=>variationSelector - x.varSelector);
        let sel = selectors[i];
        if (i !== -1 && sel.defaultUVS) i = $66a5b9fb5318558a$export$2e0ae67339d5f1ac(sel.defaultUVS, (x)=>codepoint < x.startUnicodeValue ? -1 : codepoint > x.startUnicodeValue + x.additionalCount ? 1 : 0);
        if (i !== -1 && sel.nonDefaultUVS) {
            i = $66a5b9fb5318558a$export$2e0ae67339d5f1ac(sel.nonDefaultUVS, (x)=>codepoint - x.unicodeValue);
            if (i !== -1) return sel.nonDefaultUVS[i].glyphID;
        }
        return 0;
    }
    getCharacterSet() {
        let cmap = this.cmap;
        switch(cmap.version){
            case 0:
                return $66a5b9fb5318558a$export$d02631cccf789723(0, cmap.codeMap.length);
            case 4:
                {
                    let res = [];
                    let endCodes = cmap.endCode.toArray();
                    for(let i = 0; i < endCodes.length; i++){
                        let tail = endCodes[i] + 1;
                        let start = cmap.startCode.get(i);
                        res.push(...$66a5b9fb5318558a$export$d02631cccf789723(start, tail));
                    }
                    return res;
                }
            case 8:
                throw new Error("TODO: cmap format 8");
            case 6:
            case 10:
                return $66a5b9fb5318558a$export$d02631cccf789723(cmap.firstCode, cmap.firstCode + cmap.glyphIndices.length);
            case 12:
            case 13:
                {
                    let res = [];
                    for (let group of cmap.groups.toArray())res.push(...$66a5b9fb5318558a$export$d02631cccf789723(group.startCharCode, group.endCharCode + 1));
                    return res;
                }
            case 14:
                throw new Error("TODO: cmap format 14");
            default:
                throw new Error(`Unknown cmap format ${cmap.version}`);
        }
    }
    codePointsForGlyph(gid) {
        let cmap = this.cmap;
        switch(cmap.version){
            case 0:
                {
                    let res = [];
                    for(let i = 0; i < 256; i++)if (cmap.codeMap.get(i) === gid) res.push(i);
                    return res;
                }
            case 4:
                {
                    let res = [];
                    for(let i = 0; i < cmap.segCount; i++){
                        let end = cmap.endCode.get(i);
                        let start = cmap.startCode.get(i);
                        let rangeOffset = cmap.idRangeOffset.get(i);
                        let delta = cmap.idDelta.get(i);
                        for(var c = start; c <= end; c++){
                            let g = 0;
                            if (rangeOffset === 0) g = c + delta;
                            else {
                                let index = rangeOffset / 2 + (c - start) - (cmap.segCount - i);
                                g = cmap.glyphIndexArray.get(index) || 0;
                                if (g !== 0) g += delta;
                            }
                            if (g === gid) res.push(c);
                        }
                    }
                    return res;
                }
            case 12:
                {
                    let res = [];
                    for (let group of cmap.groups.toArray())if (gid >= group.glyphID && gid <= group.glyphID + (group.endCharCode - group.startCharCode)) res.push(group.startCharCode + (gid - group.glyphID));
                    return res;
                }
            case 13:
                {
                    let res = [];
                    for (let group of cmap.groups.toArray())if (gid === group.glyphID) res.push(...$66a5b9fb5318558a$export$d02631cccf789723(group.startCharCode, group.endCharCode + 1));
                    return res;
                }
            default:
                throw new Error(`Unknown cmap format ${cmap.version}`);
        }
    }
    constructor(cmapTable){
        // Attempt to find a Unicode cmap first
        this.encoding = null;
        this.cmap = this.findSubtable(cmapTable, [
            // 32-bit subtables
            [
                3,
                10
            ],
            [
                0,
                6
            ],
            [
                0,
                4
            ],
            // 16-bit subtables
            [
                3,
                1
            ],
            [
                0,
                3
            ],
            [
                0,
                2
            ],
            [
                0,
                1
            ],
            [
                0,
                0
            ]
        ]);
        // If not unicode cmap was found, take the first table with a supported encoding.
        if (!this.cmap) for (let cmap of cmapTable.tables){
            let encoding = $e2613b812f052cbe$export$badc544e0651b6b1(cmap.platformID, cmap.encodingID, cmap.table.language - 1);
            let mapping = $e2613b812f052cbe$export$1dceb3c14ed68bee(encoding);
            if (mapping) {
                this.cmap = cmap.table;
                this.encoding = mapping;
            }
        }
        if (!this.cmap) throw new Error("Could not find a supported cmap table");
        this.uvs = this.findSubtable(cmapTable, [
            [
                0,
                5
            ]
        ]);
        if (this.uvs && this.uvs.version !== 14) this.uvs = null;
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0d6e160064c86e50$export$2e2bcd8739ae039.prototype, "getCharacterSet", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0d6e160064c86e50$export$2e2bcd8739ae039.prototype, "codePointsForGlyph", null);
class $4646d52c2a559cdb$export$2e2bcd8739ae039 {
    process(glyphs, positions) {
        for(let glyphIndex = 0; glyphIndex < glyphs.length - 1; glyphIndex++){
            let left = glyphs[glyphIndex].id;
            let right = glyphs[glyphIndex + 1].id;
            positions[glyphIndex].xAdvance += this.getKerning(left, right);
        }
    }
    getKerning(left, right) {
        let res = 0;
        for (let table of this.kern.tables){
            if (table.coverage.crossStream) continue;
            switch(table.version){
                case 0:
                    if (!table.coverage.horizontal) continue;
                    break;
                case 1:
                    if (table.coverage.vertical || table.coverage.variation) continue;
                    break;
                default:
                    throw new Error(`Unsupported kerning table version ${table.version}`);
            }
            let val = 0;
            let s = table.subtable;
            switch(table.format){
                case 0:
                    let pairIdx = $66a5b9fb5318558a$export$2e0ae67339d5f1ac(s.pairs, function(pair) {
                        return left - pair.left || right - pair.right;
                    });
                    if (pairIdx >= 0) val = s.pairs[pairIdx].value;
                    break;
                case 2:
                    let leftOffset = 0, rightOffset = 0;
                    if (left >= s.leftTable.firstGlyph && left < s.leftTable.firstGlyph + s.leftTable.nGlyphs) leftOffset = s.leftTable.offsets[left - s.leftTable.firstGlyph];
                    else leftOffset = s.array.off;
                    if (right >= s.rightTable.firstGlyph && right < s.rightTable.firstGlyph + s.rightTable.nGlyphs) rightOffset = s.rightTable.offsets[right - s.rightTable.firstGlyph];
                    let index = (leftOffset + rightOffset - s.array.off) / 2;
                    val = s.array.values.get(index);
                    break;
                case 3:
                    if (left >= s.glyphCount || right >= s.glyphCount) return 0;
                    val = s.kernValue[s.kernIndex[s.leftClass[left] * s.rightClassCount + s.rightClass[right]]];
                    break;
                default:
                    throw new Error(`Unsupported kerning sub-table format ${table.format}`);
            }
            // Microsoft supports the override flag, which resets the result
            // Otherwise, the sum of the results from all subtables is returned
            if (table.coverage.override) res = val;
            else res += val;
        }
        return res;
    }
    constructor(font){
        this.kern = font.kern;
    }
}
class $a57a26817cd35108$export$2e2bcd8739ae039 {
    positionGlyphs(glyphs, positions) {
        // find each base + mark cluster, and position the marks relative to the base
        let clusterStart = 0;
        let clusterEnd = 0;
        for(let index = 0; index < glyphs.length; index++){
            let glyph = glyphs[index];
            if (glyph.isMark) clusterEnd = index;
            else {
                if (clusterStart !== clusterEnd) this.positionCluster(glyphs, positions, clusterStart, clusterEnd);
                clusterStart = clusterEnd = index;
            }
        }
        if (clusterStart !== clusterEnd) this.positionCluster(glyphs, positions, clusterStart, clusterEnd);
        return positions;
    }
    positionCluster(glyphs, positions, clusterStart, clusterEnd) {
        let base = glyphs[clusterStart];
        let baseBox = base.cbox.copy();
        // adjust bounding box for ligature glyphs
        if (base.codePoints.length > 1) baseBox.minX += (base.codePoints.length - 1) * baseBox.width / base.codePoints.length;
        let xOffset = -positions[clusterStart].xAdvance;
        let yOffset = 0;
        let yGap = this.font.unitsPerEm / 16;
        // position each of the mark glyphs relative to the base glyph
        for(let index = clusterStart + 1; index <= clusterEnd; index++){
            let mark = glyphs[index];
            let markBox = mark.cbox;
            let position = positions[index];
            let combiningClass = this.getCombiningClass(mark.codePoints[0]);
            if (combiningClass !== "Not_Reordered") {
                position.xOffset = position.yOffset = 0;
                // x positioning
                switch(combiningClass){
                    case "Double_Above":
                    case "Double_Below":
                        // LTR. TODO: RTL support.
                        position.xOffset += baseBox.minX - markBox.width / 2 - markBox.minX;
                        break;
                    case "Attached_Below_Left":
                    case "Below_Left":
                    case "Above_Left":
                        // left align
                        position.xOffset += baseBox.minX - markBox.minX;
                        break;
                    case "Attached_Above_Right":
                    case "Below_Right":
                    case "Above_Right":
                        // right align
                        position.xOffset += baseBox.maxX - markBox.width - markBox.minX;
                        break;
                    default:
                        // center align
                        position.xOffset += baseBox.minX + (baseBox.width - markBox.width) / 2 - markBox.minX;
                }
                // y positioning
                switch(combiningClass){
                    case "Double_Below":
                    case "Below_Left":
                    case "Below":
                    case "Below_Right":
                    case "Attached_Below_Left":
                    case "Attached_Below":
                        // add a small gap between the glyphs if they are not attached
                        if (combiningClass === "Attached_Below_Left" || combiningClass === "Attached_Below") baseBox.minY += yGap;
                        position.yOffset = -baseBox.minY - markBox.maxY;
                        baseBox.minY += markBox.height;
                        break;
                    case "Double_Above":
                    case "Above_Left":
                    case "Above":
                    case "Above_Right":
                    case "Attached_Above":
                    case "Attached_Above_Right":
                        // add a small gap between the glyphs if they are not attached
                        if (combiningClass === "Attached_Above" || combiningClass === "Attached_Above_Right") baseBox.maxY += yGap;
                        position.yOffset = baseBox.maxY - markBox.minY;
                        baseBox.maxY += markBox.height;
                        break;
                }
                position.xAdvance = position.yAdvance = 0;
                position.xOffset += xOffset;
                position.yOffset += yOffset;
            } else {
                xOffset -= position.xAdvance;
                yOffset -= position.yAdvance;
            }
        }
        return;
    }
    getCombiningClass(codePoint) {
        let combiningClass = (0, $gfJaN$unicodeproperties.getCombiningClass)(codePoint);
        // Thai / Lao need some per-character work
        if ((codePoint & -256) === 0x0e00) {
            if (combiningClass === "Not_Reordered") switch(codePoint){
                case 0x0e31:
                case 0x0e34:
                case 0x0e35:
                case 0x0e36:
                case 0x0e37:
                case 0x0e47:
                case 0x0e4c:
                case 0x0e3d:
                case 0x0e4e:
                    return "Above_Right";
                case 0x0eb1:
                case 0x0eb4:
                case 0x0eb5:
                case 0x0eb6:
                case 0x0eb7:
                case 0x0ebb:
                case 0x0ecc:
                case 0x0ecd:
                    return "Above";
                case 0x0ebc:
                    return "Below";
            }
            else if (codePoint === 0x0e3a) return "Below_Right";
        }
        switch(combiningClass){
            // Hebrew
            case "CCC10":
            case "CCC11":
            case "CCC12":
            case "CCC13":
            case "CCC14":
            case "CCC15":
            case "CCC16":
            case "CCC17":
            case "CCC18":
            case "CCC20":
            case "CCC22":
                return "Below";
            case "CCC23":
                return "Attached_Above";
            case "CCC24":
                return "Above_Right";
            case "CCC25":
            case "CCC19":
                return "Above_Left";
            case "CCC26":
                return "Above";
            case "CCC21":
                break;
            // Arabic and Syriac
            case "CCC27":
            case "CCC28":
            case "CCC30":
            case "CCC31":
            case "CCC33":
            case "CCC34":
            case "CCC35":
            case "CCC36":
                return "Above";
            case "CCC29":
            case "CCC32":
                return "Below";
            // Thai
            case "CCC103":
                return "Below_Right";
            case "CCC107":
                return "Above_Right";
            // Lao
            case "CCC118":
                return "Below";
            case "CCC122":
                return "Above";
            // Tibetan
            case "CCC129":
            case "CCC132":
                return "Below";
            case "CCC130":
                return "Above";
        }
        return combiningClass;
    }
    constructor(font){
        this.font = font;
    }
}
class $0e2da1c4ce69e8ad$export$2e2bcd8739ae039 {
    /**
   * The width of the bounding box
   * @type {number}
   */ get width() {
        return this.maxX - this.minX;
    }
    /**
   * The height of the bounding box
   * @type {number}
   */ get height() {
        return this.maxY - this.minY;
    }
    addPoint(x, y) {
        if (Math.abs(x) !== Infinity) {
            if (x < this.minX) this.minX = x;
            if (x > this.maxX) this.maxX = x;
        }
        if (Math.abs(y) !== Infinity) {
            if (y < this.minY) this.minY = y;
            if (y > this.maxY) this.maxY = y;
        }
    }
    copy() {
        return new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039(this.minX, this.minY, this.maxX, this.maxY);
    }
    constructor(minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity){
        /**
     * The minimum X position in the bounding box
     * @type {number}
     */ this.minX = minX;
        /**
     * The minimum Y position in the bounding box
     * @type {number}
     */ this.minY = minY;
        /**
     * The maxmimum X position in the bounding box
     * @type {number}
     */ this.maxX = maxX;
        /**
     * The maxmimum Y position in the bounding box
     * @type {number}
     */ this.maxY = maxY;
    }
}
// This maps the Unicode Script property to an OpenType script tag
// Data from http://www.microsoft.com/typography/otspec/scripttags.htm
// and http://www.unicode.org/Public/UNIDATA/PropertyValueAliases.txt.
const $e38a1a895f6aeb54$var$UNICODE_SCRIPTS = {
    Caucasian_Albanian: "aghb",
    Arabic: "arab",
    Imperial_Aramaic: "armi",
    Armenian: "armn",
    Avestan: "avst",
    Balinese: "bali",
    Bamum: "bamu",
    Bassa_Vah: "bass",
    Batak: "batk",
    Bengali: [
        "bng2",
        "beng"
    ],
    Bopomofo: "bopo",
    Brahmi: "brah",
    Braille: "brai",
    Buginese: "bugi",
    Buhid: "buhd",
    Chakma: "cakm",
    Canadian_Aboriginal: "cans",
    Carian: "cari",
    Cham: "cham",
    Cherokee: "cher",
    Coptic: "copt",
    Cypriot: "cprt",
    Cyrillic: "cyrl",
    Devanagari: [
        "dev2",
        "deva"
    ],
    Deseret: "dsrt",
    Duployan: "dupl",
    Egyptian_Hieroglyphs: "egyp",
    Elbasan: "elba",
    Ethiopic: "ethi",
    Georgian: "geor",
    Glagolitic: "glag",
    Gothic: "goth",
    Grantha: "gran",
    Greek: "grek",
    Gujarati: [
        "gjr2",
        "gujr"
    ],
    Gurmukhi: [
        "gur2",
        "guru"
    ],
    Hangul: "hang",
    Han: "hani",
    Hanunoo: "hano",
    Hebrew: "hebr",
    Hiragana: "hira",
    Pahawh_Hmong: "hmng",
    Katakana_Or_Hiragana: "hrkt",
    Old_Italic: "ital",
    Javanese: "java",
    Kayah_Li: "kali",
    Katakana: "kana",
    Kharoshthi: "khar",
    Khmer: "khmr",
    Khojki: "khoj",
    Kannada: [
        "knd2",
        "knda"
    ],
    Kaithi: "kthi",
    Tai_Tham: "lana",
    Lao: "lao ",
    Latin: "latn",
    Lepcha: "lepc",
    Limbu: "limb",
    Linear_A: "lina",
    Linear_B: "linb",
    Lisu: "lisu",
    Lycian: "lyci",
    Lydian: "lydi",
    Mahajani: "mahj",
    Mandaic: "mand",
    Manichaean: "mani",
    Mende_Kikakui: "mend",
    Meroitic_Cursive: "merc",
    Meroitic_Hieroglyphs: "mero",
    Malayalam: [
        "mlm2",
        "mlym"
    ],
    Modi: "modi",
    Mongolian: "mong",
    Mro: "mroo",
    Meetei_Mayek: "mtei",
    Myanmar: [
        "mym2",
        "mymr"
    ],
    Old_North_Arabian: "narb",
    Nabataean: "nbat",
    Nko: "nko ",
    Ogham: "ogam",
    Ol_Chiki: "olck",
    Old_Turkic: "orkh",
    Oriya: [
        "ory2",
        "orya"
    ],
    Osmanya: "osma",
    Palmyrene: "palm",
    Pau_Cin_Hau: "pauc",
    Old_Permic: "perm",
    Phags_Pa: "phag",
    Inscriptional_Pahlavi: "phli",
    Psalter_Pahlavi: "phlp",
    Phoenician: "phnx",
    Miao: "plrd",
    Inscriptional_Parthian: "prti",
    Rejang: "rjng",
    Runic: "runr",
    Samaritan: "samr",
    Old_South_Arabian: "sarb",
    Saurashtra: "saur",
    Shavian: "shaw",
    Sharada: "shrd",
    Siddham: "sidd",
    Khudawadi: "sind",
    Sinhala: "sinh",
    Sora_Sompeng: "sora",
    Sundanese: "sund",
    Syloti_Nagri: "sylo",
    Syriac: "syrc",
    Tagbanwa: "tagb",
    Takri: "takr",
    Tai_Le: "tale",
    New_Tai_Lue: "talu",
    Tamil: [
        "tml2",
        "taml"
    ],
    Tai_Viet: "tavt",
    Telugu: [
        "tel2",
        "telu"
    ],
    Tifinagh: "tfng",
    Tagalog: "tglg",
    Thaana: "thaa",
    Thai: "thai",
    Tibetan: "tibt",
    Tirhuta: "tirh",
    Ugaritic: "ugar",
    Vai: "vai ",
    Warang_Citi: "wara",
    Old_Persian: "xpeo",
    Cuneiform: "xsux",
    Yi: "yi  ",
    Inherited: "zinh",
    Common: "zyyy",
    Unknown: "zzzz"
};
const $e38a1a895f6aeb54$var$OPENTYPE_SCRIPTS = {};
for(let script in $e38a1a895f6aeb54$var$UNICODE_SCRIPTS){
    let tag = $e38a1a895f6aeb54$var$UNICODE_SCRIPTS[script];
    if (Array.isArray(tag)) for (let t of tag)$e38a1a895f6aeb54$var$OPENTYPE_SCRIPTS[t] = script;
    else $e38a1a895f6aeb54$var$OPENTYPE_SCRIPTS[tag] = script;
}
function $e38a1a895f6aeb54$export$b32f0b5f69d65e51(script1) {
    return $e38a1a895f6aeb54$var$UNICODE_SCRIPTS[script1];
}
function $e38a1a895f6aeb54$export$ce50e82f12a827a4(tag) {
    return $e38a1a895f6aeb54$var$OPENTYPE_SCRIPTS[tag];
}
function $e38a1a895f6aeb54$export$e5cb25e204fb8450(string) {
    let len = string.length;
    let idx = 0;
    while(idx < len){
        let code = string.charCodeAt(idx++);
        // Check if this is a high surrogate
        if (0xd800 <= code && code <= 0xdbff && idx < len) {
            let next = string.charCodeAt(idx);
            // Check if this is a low surrogate
            if (0xdc00 <= next && next <= 0xdfff) {
                idx++;
                code = ((code & 0x3FF) << 10) + (next & 0x3FF) + 0x10000;
            }
        }
        let script2 = (0, $gfJaN$unicodeproperties.getScript)(code);
        if (script2 !== "Common" && script2 !== "Inherited" && script2 !== "Unknown") return $e38a1a895f6aeb54$var$UNICODE_SCRIPTS[script2];
    }
    return $e38a1a895f6aeb54$var$UNICODE_SCRIPTS.Unknown;
}
function $e38a1a895f6aeb54$export$16fab0757cfc223d(codePoints) {
    for(let i = 0; i < codePoints.length; i++){
        let codePoint = codePoints[i];
        let script3 = (0, $gfJaN$unicodeproperties.getScript)(codePoint);
        if (script3 !== "Common" && script3 !== "Inherited" && script3 !== "Unknown") return $e38a1a895f6aeb54$var$UNICODE_SCRIPTS[script3];
    }
    return $e38a1a895f6aeb54$var$UNICODE_SCRIPTS.Unknown;
}
// The scripts in this map are written from right to left
const $e38a1a895f6aeb54$var$RTL = {
    arab: true,
    hebr: true,
    syrc: true,
    thaa: true,
    cprt: true,
    khar: true,
    phnx: true,
    "nko ": true,
    lydi: true,
    avst: true,
    armi: true,
    phli: true,
    prti: true,
    sarb: true,
    orkh: true,
    samr: true,
    mand: true,
    merc: true,
    mero: true,
    // Unicode 7.0 (not listed on http://www.microsoft.com/typography/otspec/scripttags.htm)
    mani: true,
    mend: true,
    nbat: true,
    narb: true,
    palm: true,
    phlp: true // Psalter Pahlavi
};
function $e38a1a895f6aeb54$export$9fddb9d0dd7d8a54(script4) {
    if ($e38a1a895f6aeb54$var$RTL[script4]) return "rtl";
    return "ltr";
}
class $b19c79ec7a94fa39$export$2e2bcd8739ae039 {
    /**
   * The total advance width of the run.
   * @type {number}
   */ get advanceWidth() {
        let width = 0;
        for (let position of this.positions)width += position.xAdvance;
        return width;
    }
    /**
  * The total advance height of the run.
  * @type {number}
  */ get advanceHeight() {
        let height = 0;
        for (let position of this.positions)height += position.yAdvance;
        return height;
    }
    /**
  * The bounding box containing all glyphs in the run.
  * @type {BBox}
  */ get bbox() {
        let bbox = new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039;
        let x = 0;
        let y = 0;
        for(let index = 0; index < this.glyphs.length; index++){
            let glyph = this.glyphs[index];
            let p = this.positions[index];
            let b = glyph.bbox;
            bbox.addPoint(b.minX + x + p.xOffset, b.minY + y + p.yOffset);
            bbox.addPoint(b.maxX + x + p.xOffset, b.maxY + y + p.yOffset);
            x += p.xAdvance;
            y += p.yAdvance;
        }
        return bbox;
    }
    constructor(glyphs, features, script, language, direction){
        /**
     * An array of Glyph objects in the run
     * @type {Glyph[]}
     */ this.glyphs = glyphs;
        /**
     * An array of GlyphPosition objects for each glyph in the run
     * @type {GlyphPosition[]}
     */ this.positions = null;
        /**
     * The script that was requested for shaping. This was either passed in or detected automatically.
     * @type {string}
     */ this.script = script;
        /**
     * The language requested for shaping, as passed in. If `null`, the default language for the
     * script was used.
     * @type {string}
     */ this.language = language || null;
        /**
     * The direction requested for shaping, as passed in (either ltr or rtl).
     * If `null`, the default direction of the script is used.
     * @type {string}
     */ this.direction = direction || $e38a1a895f6aeb54$export$9fddb9d0dd7d8a54(script);
        /**
     * The features requested during shaping. This is a combination of user
     * specified features and features chosen by the shaper.
     * @type {object}
     */ this.features = {};
        // Convert features to an object
        if (Array.isArray(features)) for (let tag of features)this.features[tag] = true;
        else if (typeof features === "object") this.features = features;
    }
}
class $9195cf1266c12ea5$export$2e2bcd8739ae039 {
    constructor(xAdvance = 0, yAdvance = 0, xOffset = 0, yOffset = 0){
        /**
     * The amount to move the virtual pen in the X direction after rendering this glyph.
     * @type {number}
     */ this.xAdvance = xAdvance;
        /**
     * The amount to move the virtual pen in the Y direction after rendering this glyph.
     * @type {number}
     */ this.yAdvance = yAdvance;
        /**
     * The offset from the pen position in the X direction at which to render this glyph.
     * @type {number}
     */ this.xOffset = xOffset;
        /**
     * The offset from the pen position in the Y direction at which to render this glyph.
     * @type {number}
     */ this.yOffset = yOffset;
    }
}
// see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html
// and /System/Library/Frameworks/CoreText.framework/Versions/A/Headers/SFNTLayoutTypes.h on a Mac
const $2b7f887ebcb5888a$var$features = {
    allTypographicFeatures: {
        code: 0,
        exclusive: false,
        allTypeFeatures: 0
    },
    ligatures: {
        code: 1,
        exclusive: false,
        requiredLigatures: 0,
        commonLigatures: 2,
        rareLigatures: 4,
        // logos: 6
        rebusPictures: 8,
        diphthongLigatures: 10,
        squaredLigatures: 12,
        abbrevSquaredLigatures: 14,
        symbolLigatures: 16,
        contextualLigatures: 18,
        historicalLigatures: 20
    },
    cursiveConnection: {
        code: 2,
        exclusive: true,
        unconnected: 0,
        partiallyConnected: 1,
        cursive: 2
    },
    letterCase: {
        code: 3,
        exclusive: true
    },
    // upperAndLowerCase: 0          # deprecated
    // allCaps: 1                    # deprecated
    // allLowerCase: 2               # deprecated
    // smallCaps: 3                  # deprecated
    // initialCaps: 4                # deprecated
    // initialCapsAndSmallCaps: 5    # deprecated
    verticalSubstitution: {
        code: 4,
        exclusive: false,
        substituteVerticalForms: 0
    },
    linguisticRearrangement: {
        code: 5,
        exclusive: false,
        linguisticRearrangement: 0
    },
    numberSpacing: {
        code: 6,
        exclusive: true,
        monospacedNumbers: 0,
        proportionalNumbers: 1,
        thirdWidthNumbers: 2,
        quarterWidthNumbers: 3
    },
    smartSwash: {
        code: 8,
        exclusive: false,
        wordInitialSwashes: 0,
        wordFinalSwashes: 2,
        // lineInitialSwashes: 4
        // lineFinalSwashes: 6
        nonFinalSwashes: 8
    },
    diacritics: {
        code: 9,
        exclusive: true,
        showDiacritics: 0,
        hideDiacritics: 1,
        decomposeDiacritics: 2
    },
    verticalPosition: {
        code: 10,
        exclusive: true,
        normalPosition: 0,
        superiors: 1,
        inferiors: 2,
        ordinals: 3,
        scientificInferiors: 4
    },
    fractions: {
        code: 11,
        exclusive: true,
        noFractions: 0,
        verticalFractions: 1,
        diagonalFractions: 2
    },
    overlappingCharacters: {
        code: 13,
        exclusive: false,
        preventOverlap: 0
    },
    typographicExtras: {
        code: 14,
        exclusive: false,
        // hyphensToEmDash: 0
        // hyphenToEnDash: 2
        slashedZero: 4
    },
    // formInterrobang: 6
    // smartQuotes: 8
    // periodsToEllipsis: 10
    mathematicalExtras: {
        code: 15,
        exclusive: false,
        // hyphenToMinus: 0
        // asteristoMultiply: 2
        // slashToDivide: 4
        // inequalityLigatures: 6
        // exponents: 8
        mathematicalGreek: 10
    },
    ornamentSets: {
        code: 16,
        exclusive: true,
        noOrnaments: 0,
        dingbats: 1,
        piCharacters: 2,
        fleurons: 3,
        decorativeBorders: 4,
        internationalSymbols: 5,
        mathSymbols: 6
    },
    characterAlternatives: {
        code: 17,
        exclusive: true,
        noAlternates: 0
    },
    // user defined options
    designComplexity: {
        code: 18,
        exclusive: true,
        designLevel1: 0,
        designLevel2: 1,
        designLevel3: 2,
        designLevel4: 3,
        designLevel5: 4
    },
    styleOptions: {
        code: 19,
        exclusive: true,
        noStyleOptions: 0,
        displayText: 1,
        engravedText: 2,
        illuminatedCaps: 3,
        titlingCaps: 4,
        tallCaps: 5
    },
    characterShape: {
        code: 20,
        exclusive: true,
        traditionalCharacters: 0,
        simplifiedCharacters: 1,
        JIS1978Characters: 2,
        JIS1983Characters: 3,
        JIS1990Characters: 4,
        traditionalAltOne: 5,
        traditionalAltTwo: 6,
        traditionalAltThree: 7,
        traditionalAltFour: 8,
        traditionalAltFive: 9,
        expertCharacters: 10,
        JIS2004Characters: 11,
        hojoCharacters: 12,
        NLCCharacters: 13,
        traditionalNamesCharacters: 14
    },
    numberCase: {
        code: 21,
        exclusive: true,
        lowerCaseNumbers: 0,
        upperCaseNumbers: 1
    },
    textSpacing: {
        code: 22,
        exclusive: true,
        proportionalText: 0,
        monospacedText: 1,
        halfWidthText: 2,
        thirdWidthText: 3,
        quarterWidthText: 4,
        altProportionalText: 5,
        altHalfWidthText: 6
    },
    transliteration: {
        code: 23,
        exclusive: true,
        noTransliteration: 0
    },
    // hanjaToHangul: 1
    // hiraganaToKatakana: 2
    // katakanaToHiragana: 3
    // kanaToRomanization: 4
    // romanizationToHiragana: 5
    // romanizationToKatakana: 6
    // hanjaToHangulAltOne: 7
    // hanjaToHangulAltTwo: 8
    // hanjaToHangulAltThree: 9
    annotation: {
        code: 24,
        exclusive: true,
        noAnnotation: 0,
        boxAnnotation: 1,
        roundedBoxAnnotation: 2,
        circleAnnotation: 3,
        invertedCircleAnnotation: 4,
        parenthesisAnnotation: 5,
        periodAnnotation: 6,
        romanNumeralAnnotation: 7,
        diamondAnnotation: 8,
        invertedBoxAnnotation: 9,
        invertedRoundedBoxAnnotation: 10
    },
    kanaSpacing: {
        code: 25,
        exclusive: true,
        fullWidthKana: 0,
        proportionalKana: 1
    },
    ideographicSpacing: {
        code: 26,
        exclusive: true,
        fullWidthIdeographs: 0,
        proportionalIdeographs: 1,
        halfWidthIdeographs: 2
    },
    unicodeDecomposition: {
        code: 27,
        exclusive: false,
        canonicalComposition: 0,
        compatibilityComposition: 2,
        transcodingComposition: 4
    },
    rubyKana: {
        code: 28,
        exclusive: false,
        // noRubyKana: 0     # deprecated - use rubyKanaOff instead
        // rubyKana: 1     # deprecated - use rubyKanaOn instead
        rubyKana: 2
    },
    CJKSymbolAlternatives: {
        code: 29,
        exclusive: true,
        noCJKSymbolAlternatives: 0,
        CJKSymbolAltOne: 1,
        CJKSymbolAltTwo: 2,
        CJKSymbolAltThree: 3,
        CJKSymbolAltFour: 4,
        CJKSymbolAltFive: 5
    },
    ideographicAlternatives: {
        code: 30,
        exclusive: true,
        noIdeographicAlternatives: 0,
        ideographicAltOne: 1,
        ideographicAltTwo: 2,
        ideographicAltThree: 3,
        ideographicAltFour: 4,
        ideographicAltFive: 5
    },
    CJKVerticalRomanPlacement: {
        code: 31,
        exclusive: true,
        CJKVerticalRomanCentered: 0,
        CJKVerticalRomanHBaseline: 1
    },
    italicCJKRoman: {
        code: 32,
        exclusive: false,
        // noCJKItalicRoman: 0     # deprecated - use CJKItalicRomanOff instead
        // CJKItalicRoman: 1     # deprecated - use CJKItalicRomanOn instead
        CJKItalicRoman: 2
    },
    caseSensitiveLayout: {
        code: 33,
        exclusive: false,
        caseSensitiveLayout: 0,
        caseSensitiveSpacing: 2
    },
    alternateKana: {
        code: 34,
        exclusive: false,
        alternateHorizKana: 0,
        alternateVertKana: 2
    },
    stylisticAlternatives: {
        code: 35,
        exclusive: false,
        noStylisticAlternates: 0,
        stylisticAltOne: 2,
        stylisticAltTwo: 4,
        stylisticAltThree: 6,
        stylisticAltFour: 8,
        stylisticAltFive: 10,
        stylisticAltSix: 12,
        stylisticAltSeven: 14,
        stylisticAltEight: 16,
        stylisticAltNine: 18,
        stylisticAltTen: 20,
        stylisticAltEleven: 22,
        stylisticAltTwelve: 24,
        stylisticAltThirteen: 26,
        stylisticAltFourteen: 28,
        stylisticAltFifteen: 30,
        stylisticAltSixteen: 32,
        stylisticAltSeventeen: 34,
        stylisticAltEighteen: 36,
        stylisticAltNineteen: 38,
        stylisticAltTwenty: 40
    },
    contextualAlternates: {
        code: 36,
        exclusive: false,
        contextualAlternates: 0,
        swashAlternates: 2,
        contextualSwashAlternates: 4
    },
    lowerCase: {
        code: 37,
        exclusive: true,
        defaultLowerCase: 0,
        lowerCaseSmallCaps: 1,
        lowerCasePetiteCaps: 2
    },
    upperCase: {
        code: 38,
        exclusive: true,
        defaultUpperCase: 0,
        upperCaseSmallCaps: 1,
        upperCasePetiteCaps: 2
    },
    languageTag: {
        code: 39,
        exclusive: true
    },
    CJKRomanSpacing: {
        code: 103,
        exclusive: true,
        halfWidthCJKRoman: 0,
        proportionalCJKRoman: 1,
        defaultCJKRoman: 2,
        fullWidthCJKRoman: 3
    }
};
const $2b7f887ebcb5888a$var$feature = (name, selector)=>[
        $2b7f887ebcb5888a$var$features[name].code,
        $2b7f887ebcb5888a$var$features[name][selector]
    ];
const $2b7f887ebcb5888a$var$OTMapping = {
    rlig: $2b7f887ebcb5888a$var$feature("ligatures", "requiredLigatures"),
    clig: $2b7f887ebcb5888a$var$feature("ligatures", "contextualLigatures"),
    dlig: $2b7f887ebcb5888a$var$feature("ligatures", "rareLigatures"),
    hlig: $2b7f887ebcb5888a$var$feature("ligatures", "historicalLigatures"),
    liga: $2b7f887ebcb5888a$var$feature("ligatures", "commonLigatures"),
    hist: $2b7f887ebcb5888a$var$feature("ligatures", "historicalLigatures"),
    smcp: $2b7f887ebcb5888a$var$feature("lowerCase", "lowerCaseSmallCaps"),
    pcap: $2b7f887ebcb5888a$var$feature("lowerCase", "lowerCasePetiteCaps"),
    frac: $2b7f887ebcb5888a$var$feature("fractions", "diagonalFractions"),
    dnom: $2b7f887ebcb5888a$var$feature("fractions", "diagonalFractions"),
    numr: $2b7f887ebcb5888a$var$feature("fractions", "diagonalFractions"),
    afrc: $2b7f887ebcb5888a$var$feature("fractions", "verticalFractions"),
    // aalt
    // abvf, abvm, abvs, akhn, blwf, blwm, blws, cfar, cjct, cpsp, falt, isol, jalt, ljmo, mset?
    // ltra, ltrm, nukt, pref, pres, pstf, psts, rand, rkrf, rphf, rtla, rtlm, size, tjmo, tnum?
    // unic, vatu, vhal, vjmo, vpal, vrt2
    // dist -> trak table?
    // kern, vkrn -> kern table
    // lfbd + opbd + rtbd -> opbd table?
    // mark, mkmk -> acnt table?
    // locl -> languageTag + ltag table
    case: $2b7f887ebcb5888a$var$feature("caseSensitiveLayout", "caseSensitiveLayout"),
    ccmp: $2b7f887ebcb5888a$var$feature("unicodeDecomposition", "canonicalComposition"),
    cpct: $2b7f887ebcb5888a$var$feature("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
    valt: $2b7f887ebcb5888a$var$feature("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
    swsh: $2b7f887ebcb5888a$var$feature("contextualAlternates", "swashAlternates"),
    cswh: $2b7f887ebcb5888a$var$feature("contextualAlternates", "contextualSwashAlternates"),
    curs: $2b7f887ebcb5888a$var$feature("cursiveConnection", "cursive"),
    c2pc: $2b7f887ebcb5888a$var$feature("upperCase", "upperCasePetiteCaps"),
    c2sc: $2b7f887ebcb5888a$var$feature("upperCase", "upperCaseSmallCaps"),
    init: $2b7f887ebcb5888a$var$feature("smartSwash", "wordInitialSwashes"),
    fin2: $2b7f887ebcb5888a$var$feature("smartSwash", "wordFinalSwashes"),
    medi: $2b7f887ebcb5888a$var$feature("smartSwash", "nonFinalSwashes"),
    med2: $2b7f887ebcb5888a$var$feature("smartSwash", "nonFinalSwashes"),
    fin3: $2b7f887ebcb5888a$var$feature("smartSwash", "wordFinalSwashes"),
    fina: $2b7f887ebcb5888a$var$feature("smartSwash", "wordFinalSwashes"),
    pkna: $2b7f887ebcb5888a$var$feature("kanaSpacing", "proportionalKana"),
    half: $2b7f887ebcb5888a$var$feature("textSpacing", "halfWidthText"),
    halt: $2b7f887ebcb5888a$var$feature("textSpacing", "altHalfWidthText"),
    hkna: $2b7f887ebcb5888a$var$feature("alternateKana", "alternateHorizKana"),
    vkna: $2b7f887ebcb5888a$var$feature("alternateKana", "alternateVertKana"),
    // hngl: feature 'transliteration', 'hanjaToHangulSelector' # deprecated
    ital: $2b7f887ebcb5888a$var$feature("italicCJKRoman", "CJKItalicRoman"),
    lnum: $2b7f887ebcb5888a$var$feature("numberCase", "upperCaseNumbers"),
    onum: $2b7f887ebcb5888a$var$feature("numberCase", "lowerCaseNumbers"),
    mgrk: $2b7f887ebcb5888a$var$feature("mathematicalExtras", "mathematicalGreek"),
    // nalt: not enough info. what type of annotation?
    // ornm: ditto, which ornament style?
    calt: $2b7f887ebcb5888a$var$feature("contextualAlternates", "contextualAlternates"),
    vrt2: $2b7f887ebcb5888a$var$feature("verticalSubstitution", "substituteVerticalForms"),
    vert: $2b7f887ebcb5888a$var$feature("verticalSubstitution", "substituteVerticalForms"),
    tnum: $2b7f887ebcb5888a$var$feature("numberSpacing", "monospacedNumbers"),
    pnum: $2b7f887ebcb5888a$var$feature("numberSpacing", "proportionalNumbers"),
    sups: $2b7f887ebcb5888a$var$feature("verticalPosition", "superiors"),
    subs: $2b7f887ebcb5888a$var$feature("verticalPosition", "inferiors"),
    ordn: $2b7f887ebcb5888a$var$feature("verticalPosition", "ordinals"),
    pwid: $2b7f887ebcb5888a$var$feature("textSpacing", "proportionalText"),
    hwid: $2b7f887ebcb5888a$var$feature("textSpacing", "halfWidthText"),
    qwid: $2b7f887ebcb5888a$var$feature("textSpacing", "quarterWidthText"),
    twid: $2b7f887ebcb5888a$var$feature("textSpacing", "thirdWidthText"),
    fwid: $2b7f887ebcb5888a$var$feature("textSpacing", "proportionalText"),
    palt: $2b7f887ebcb5888a$var$feature("textSpacing", "altProportionalText"),
    trad: $2b7f887ebcb5888a$var$feature("characterShape", "traditionalCharacters"),
    smpl: $2b7f887ebcb5888a$var$feature("characterShape", "simplifiedCharacters"),
    jp78: $2b7f887ebcb5888a$var$feature("characterShape", "JIS1978Characters"),
    jp83: $2b7f887ebcb5888a$var$feature("characterShape", "JIS1983Characters"),
    jp90: $2b7f887ebcb5888a$var$feature("characterShape", "JIS1990Characters"),
    jp04: $2b7f887ebcb5888a$var$feature("characterShape", "JIS2004Characters"),
    expt: $2b7f887ebcb5888a$var$feature("characterShape", "expertCharacters"),
    hojo: $2b7f887ebcb5888a$var$feature("characterShape", "hojoCharacters"),
    nlck: $2b7f887ebcb5888a$var$feature("characterShape", "NLCCharacters"),
    tnam: $2b7f887ebcb5888a$var$feature("characterShape", "traditionalNamesCharacters"),
    ruby: $2b7f887ebcb5888a$var$feature("rubyKana", "rubyKana"),
    titl: $2b7f887ebcb5888a$var$feature("styleOptions", "titlingCaps"),
    zero: $2b7f887ebcb5888a$var$feature("typographicExtras", "slashedZero"),
    ss01: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltOne"),
    ss02: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltTwo"),
    ss03: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltThree"),
    ss04: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltFour"),
    ss05: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltFive"),
    ss06: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltSix"),
    ss07: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltSeven"),
    ss08: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltEight"),
    ss09: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltNine"),
    ss10: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltTen"),
    ss11: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltEleven"),
    ss12: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltTwelve"),
    ss13: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltThirteen"),
    ss14: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltFourteen"),
    ss15: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltFifteen"),
    ss16: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltSixteen"),
    ss17: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltSeventeen"),
    ss18: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltEighteen"),
    ss19: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltNineteen"),
    ss20: $2b7f887ebcb5888a$var$feature("stylisticAlternatives", "stylisticAltTwenty")
};
// salt: feature 'stylisticAlternatives', 'stylisticAltOne' # hmm, which one to choose
// Add cv01-cv99 features
for(let i = 1; i <= 99; i++)$2b7f887ebcb5888a$var$OTMapping[`cv${`00${i}`.slice(-2)}`] = [
    $2b7f887ebcb5888a$var$features.characterAlternatives.code,
    i
];
// create inverse mapping
let $2b7f887ebcb5888a$var$AATMapping = {};
for(let ot in $2b7f887ebcb5888a$var$OTMapping){
    let aat = $2b7f887ebcb5888a$var$OTMapping[ot];
    if ($2b7f887ebcb5888a$var$AATMapping[aat[0]] == null) $2b7f887ebcb5888a$var$AATMapping[aat[0]] = {};
    $2b7f887ebcb5888a$var$AATMapping[aat[0]][aat[1]] = ot;
}
function $2b7f887ebcb5888a$export$b813f7d2a1677c16(features1) {
    let res = {};
    for(let k in features1){
        let r;
        if (r = $2b7f887ebcb5888a$var$OTMapping[k]) {
            if (res[r[0]] == null) res[r[0]] = {};
            res[r[0]][r[1]] = features1[k];
        }
    }
    return res;
}
// Maps strings in a [featureType, featureSetting]
// to their equivalent number codes
function $2b7f887ebcb5888a$var$mapFeatureStrings(f) {
    let [type, setting] = f;
    if (isNaN(type)) var typeCode = $2b7f887ebcb5888a$var$features[type] && $2b7f887ebcb5888a$var$features[type].code;
    else var typeCode = type;
    if (isNaN(setting)) var settingCode = $2b7f887ebcb5888a$var$features[type] && $2b7f887ebcb5888a$var$features[type][setting];
    else var settingCode = setting;
    return [
        typeCode,
        settingCode
    ];
}
function $2b7f887ebcb5888a$export$bd6df347a4f391c4(features2) {
    let res = {};
    if (Array.isArray(features2)) for(let k = 0; k < features2.length; k++){
        let r;
        let f = $2b7f887ebcb5888a$var$mapFeatureStrings(features2[k]);
        if (r = $2b7f887ebcb5888a$var$AATMapping[f[0]] && $2b7f887ebcb5888a$var$AATMapping[f[0]][f[1]]) res[r] = true;
    }
    else if (typeof features2 === "object") for(let type in features2){
        let feature1 = features2[type];
        for(let setting in feature1){
            let r;
            let f = $2b7f887ebcb5888a$var$mapFeatureStrings([
                type,
                setting
            ]);
            if (feature1[setting] && (r = $2b7f887ebcb5888a$var$AATMapping[f[0]] && $2b7f887ebcb5888a$var$AATMapping[f[0]][f[1]])) res[r] = true;
        }
    }
    return Object.keys(res);
}
class $f3d63ae925545400$export$2e2bcd8739ae039 {
    lookup(glyph) {
        switch(this.table.version){
            case 0:
                return this.table.values.getItem(glyph);
            case 2:
            case 4:
                {
                    let min = 0;
                    let max = this.table.binarySearchHeader.nUnits - 1;
                    while(min <= max){
                        var mid = min + max >> 1;
                        var seg = this.table.segments[mid];
                        // special end of search value
                        if (seg.firstGlyph === 0xffff) return null;
                        if (glyph < seg.firstGlyph) max = mid - 1;
                        else if (glyph > seg.lastGlyph) min = mid + 1;
                        else {
                            if (this.table.version === 2) return seg.value;
                            else return seg.values[glyph - seg.firstGlyph];
                        }
                    }
                    return null;
                }
            case 6:
                {
                    let min = 0;
                    let max = this.table.binarySearchHeader.nUnits - 1;
                    while(min <= max){
                        var mid = min + max >> 1;
                        var seg = this.table.segments[mid];
                        // special end of search value
                        if (seg.glyph === 0xffff) return null;
                        if (glyph < seg.glyph) max = mid - 1;
                        else if (glyph > seg.glyph) min = mid + 1;
                        else return seg.value;
                    }
                    return null;
                }
            case 8:
                return this.table.values[glyph - this.table.firstGlyph];
            default:
                throw new Error(`Unknown lookup table format: ${this.table.version}`);
        }
    }
    glyphsForValue(classValue) {
        let res = [];
        switch(this.table.version){
            case 2:
            case 4:
                for (let segment of this.table.segments)if (this.table.version === 2 && segment.value === classValue) res.push(...$66a5b9fb5318558a$export$d02631cccf789723(segment.firstGlyph, segment.lastGlyph + 1));
                else {
                    for(let index = 0; index < segment.values.length; index++)if (segment.values[index] === classValue) res.push(segment.firstGlyph + index);
                }
                break;
            case 6:
                for (let segment1 of this.table.segments)if (segment1.value === classValue) res.push(segment1.glyph);
                break;
            case 8:
                for(let i = 0; i < this.table.values.length; i++)if (this.table.values[i] === classValue) res.push(this.table.firstGlyph + i);
                break;
            default:
                throw new Error(`Unknown lookup table format: ${this.table.version}`);
        }
        return res;
    }
    constructor(table){
        this.table = table;
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $f3d63ae925545400$export$2e2bcd8739ae039.prototype, "glyphsForValue", null);
const $860c6347bb941b91$var$START_OF_TEXT_STATE = 0;
const $860c6347bb941b91$var$START_OF_LINE_STATE = 1;
const $860c6347bb941b91$var$END_OF_TEXT_CLASS = 0;
const $860c6347bb941b91$var$OUT_OF_BOUNDS_CLASS = 1;
const $860c6347bb941b91$var$DELETED_GLYPH_CLASS = 2;
const $860c6347bb941b91$var$END_OF_LINE_CLASS = 3;
const $860c6347bb941b91$var$DONT_ADVANCE = 0x4000;
class $860c6347bb941b91$export$2e2bcd8739ae039 {
    process(glyphs, reverse, processEntry) {
        let currentState = $860c6347bb941b91$var$START_OF_TEXT_STATE; // START_OF_LINE_STATE is used for kashida glyph insertions sometimes I think?
        let index = reverse ? glyphs.length - 1 : 0;
        let dir = reverse ? -1 : 1;
        while(dir === 1 && index <= glyphs.length || dir === -1 && index >= -1){
            let glyph = null;
            let classCode = $860c6347bb941b91$var$OUT_OF_BOUNDS_CLASS;
            let shouldAdvance = true;
            if (index === glyphs.length || index === -1) classCode = $860c6347bb941b91$var$END_OF_TEXT_CLASS;
            else {
                glyph = glyphs[index];
                if (glyph.id === 0xffff) classCode = $860c6347bb941b91$var$DELETED_GLYPH_CLASS;
                else {
                    classCode = this.lookupTable.lookup(glyph.id);
                    if (classCode == null) classCode = $860c6347bb941b91$var$OUT_OF_BOUNDS_CLASS;
                }
            }
            let row = this.stateTable.stateArray.getItem(currentState);
            let entryIndex = row[classCode];
            let entry = this.stateTable.entryTable.getItem(entryIndex);
            if (classCode !== $860c6347bb941b91$var$END_OF_TEXT_CLASS && classCode !== $860c6347bb941b91$var$DELETED_GLYPH_CLASS) {
                processEntry(glyph, entry, index);
                shouldAdvance = !(entry.flags & $860c6347bb941b91$var$DONT_ADVANCE);
            }
            currentState = entry.newState;
            if (shouldAdvance) index += dir;
        }
        return glyphs;
    }
    /**
   * Performs a depth-first traversal of the glyph strings
   * represented by the state machine.
   */ traverse(opts, state = 0, visited = new Set) {
        if (visited.has(state)) return;
        visited.add(state);
        let { nClasses: nClasses, stateArray: stateArray, entryTable: entryTable } = this.stateTable;
        let row = stateArray.getItem(state);
        // Skip predefined classes
        for(let classCode = 4; classCode < nClasses; classCode++){
            let entryIndex = row[classCode];
            let entry = entryTable.getItem(entryIndex);
            // Try all glyphs in the class
            for (let glyph of this.lookupTable.glyphsForValue(classCode)){
                if (opts.enter) opts.enter(glyph, entry);
                if (entry.newState !== 0) this.traverse(opts, entry.newState, visited);
                if (opts.exit) opts.exit(glyph, entry);
            }
        }
    }
    constructor(stateTable){
        this.stateTable = stateTable;
        this.lookupTable = new $f3d63ae925545400$export$2e2bcd8739ae039(stateTable.classTable);
    }
}
// indic replacement flags
const $99be642f82069918$var$MARK_FIRST = 0x8000;
const $99be642f82069918$var$MARK_LAST = 0x2000;
const $99be642f82069918$var$VERB = 0x000F;
// contextual substitution and glyph insertion flag
const $99be642f82069918$var$SET_MARK = 0x8000;
// ligature entry flags
const $99be642f82069918$var$SET_COMPONENT = 0x8000;
const $99be642f82069918$var$PERFORM_ACTION = 0x2000;
// ligature action masks
const $99be642f82069918$var$LAST_MASK = 0x80000000;
const $99be642f82069918$var$STORE_MASK = 0x40000000;
const $99be642f82069918$var$OFFSET_MASK = 0x3FFFFFFF;
const $99be642f82069918$var$VERTICAL_ONLY = 0x800000;
const $99be642f82069918$var$REVERSE_DIRECTION = 0x400000;
const $99be642f82069918$var$HORIZONTAL_AND_VERTICAL = 0x200000;
// glyph insertion flags
const $99be642f82069918$var$CURRENT_IS_KASHIDA_LIKE = 0x2000;
const $99be642f82069918$var$MARKED_IS_KASHIDA_LIKE = 0x1000;
const $99be642f82069918$var$CURRENT_INSERT_BEFORE = 0x0800;
const $99be642f82069918$var$MARKED_INSERT_BEFORE = 0x0400;
const $99be642f82069918$var$CURRENT_INSERT_COUNT = 0x03E0;
const $99be642f82069918$var$MARKED_INSERT_COUNT = 0x001F;
class $99be642f82069918$export$2e2bcd8739ae039 {
    // Processes an array of glyphs and applies the specified features
    // Features should be in the form of {featureType:{featureSetting:boolean}}
    process(glyphs, features = {}) {
        for (let chain of this.morx.chains){
            let flags = chain.defaultFlags;
            // enable/disable the requested features
            for (let feature of chain.features){
                let f;
                if (f = features[feature.featureType]) {
                    if (f[feature.featureSetting]) {
                        flags &= feature.disableFlags;
                        flags |= feature.enableFlags;
                    } else if (f[feature.featureSetting] === false) {
                        flags |= ~feature.disableFlags;
                        flags &= ~feature.enableFlags;
                    }
                }
            }
            for (let subtable of chain.subtables)if (subtable.subFeatureFlags & flags) this.processSubtable(subtable, glyphs);
        }
        // remove deleted glyphs
        let index = glyphs.length - 1;
        while(index >= 0){
            if (glyphs[index].id === 0xffff) glyphs.splice(index, 1);
            index--;
        }
        return glyphs;
    }
    processSubtable(subtable, glyphs) {
        this.subtable = subtable;
        this.glyphs = glyphs;
        if (this.subtable.type === 4) {
            this.processNoncontextualSubstitutions(this.subtable, this.glyphs);
            return;
        }
        this.ligatureStack = [];
        this.markedGlyph = null;
        this.firstGlyph = null;
        this.lastGlyph = null;
        this.markedIndex = null;
        let stateMachine = this.getStateMachine(subtable);
        let process = this.getProcessor();
        let reverse = !!(this.subtable.coverage & $99be642f82069918$var$REVERSE_DIRECTION);
        return stateMachine.process(this.glyphs, reverse, process);
    }
    getStateMachine(subtable) {
        return new $860c6347bb941b91$export$2e2bcd8739ae039(subtable.table.stateTable);
    }
    getProcessor() {
        switch(this.subtable.type){
            case 0:
                return this.processIndicRearragement;
            case 1:
                return this.processContextualSubstitution;
            case 2:
                return this.processLigature;
            case 4:
                return this.processNoncontextualSubstitutions;
            case 5:
                return this.processGlyphInsertion;
            default:
                throw new Error(`Invalid morx subtable type: ${this.subtable.type}`);
        }
    }
    processIndicRearragement(glyph, entry, index) {
        if (entry.flags & $99be642f82069918$var$MARK_FIRST) this.firstGlyph = index;
        if (entry.flags & $99be642f82069918$var$MARK_LAST) this.lastGlyph = index;
        $99be642f82069918$var$reorderGlyphs(this.glyphs, entry.flags & $99be642f82069918$var$VERB, this.firstGlyph, this.lastGlyph);
    }
    processContextualSubstitution(glyph, entry, index) {
        let subsitutions = this.subtable.table.substitutionTable.items;
        if (entry.markIndex !== 0xffff) {
            let lookup = subsitutions.getItem(entry.markIndex);
            let lookupTable = new $f3d63ae925545400$export$2e2bcd8739ae039(lookup);
            glyph = this.glyphs[this.markedGlyph];
            var gid = lookupTable.lookup(glyph.id);
            if (gid) this.glyphs[this.markedGlyph] = this.font.getGlyph(gid, glyph.codePoints);
        }
        if (entry.currentIndex !== 0xffff) {
            let lookup = subsitutions.getItem(entry.currentIndex);
            let lookupTable = new $f3d63ae925545400$export$2e2bcd8739ae039(lookup);
            glyph = this.glyphs[index];
            var gid = lookupTable.lookup(glyph.id);
            if (gid) this.glyphs[index] = this.font.getGlyph(gid, glyph.codePoints);
        }
        if (entry.flags & $99be642f82069918$var$SET_MARK) this.markedGlyph = index;
    }
    processLigature(glyph, entry, index) {
        if (entry.flags & $99be642f82069918$var$SET_COMPONENT) this.ligatureStack.push(index);
        if (entry.flags & $99be642f82069918$var$PERFORM_ACTION) {
            let actions = this.subtable.table.ligatureActions;
            let components = this.subtable.table.components;
            let ligatureList = this.subtable.table.ligatureList;
            let actionIndex = entry.action;
            let last = false;
            let ligatureIndex = 0;
            let codePoints = [];
            let ligatureGlyphs = [];
            while(!last){
                let componentGlyph = this.ligatureStack.pop();
                codePoints.unshift(...this.glyphs[componentGlyph].codePoints);
                let action = actions.getItem(actionIndex++);
                last = !!(action & $99be642f82069918$var$LAST_MASK);
                let store = !!(action & $99be642f82069918$var$STORE_MASK);
                let offset = (action & $99be642f82069918$var$OFFSET_MASK) << 2 >> 2; // sign extend 30 to 32 bits
                offset += this.glyphs[componentGlyph].id;
                let component = components.getItem(offset);
                ligatureIndex += component;
                if (last || store) {
                    let ligatureEntry = ligatureList.getItem(ligatureIndex);
                    this.glyphs[componentGlyph] = this.font.getGlyph(ligatureEntry, codePoints);
                    ligatureGlyphs.push(componentGlyph);
                    ligatureIndex = 0;
                    codePoints = [];
                } else this.glyphs[componentGlyph] = this.font.getGlyph(0xffff);
            }
            // Put ligature glyph indexes back on the stack
            this.ligatureStack.push(...ligatureGlyphs);
        }
    }
    processNoncontextualSubstitutions(subtable, glyphs, index) {
        let lookupTable = new $f3d63ae925545400$export$2e2bcd8739ae039(subtable.table.lookupTable);
        for(index = 0; index < glyphs.length; index++){
            let glyph = glyphs[index];
            if (glyph.id !== 0xffff) {
                let gid = lookupTable.lookup(glyph.id);
                if (gid) glyphs[index] = this.font.getGlyph(gid, glyph.codePoints);
            }
        }
    }
    _insertGlyphs(glyphIndex, insertionActionIndex, count, isBefore) {
        let insertions = [];
        while(count--){
            let gid = this.subtable.table.insertionActions.getItem(insertionActionIndex++);
            insertions.push(this.font.getGlyph(gid));
        }
        if (!isBefore) glyphIndex++;
        this.glyphs.splice(glyphIndex, 0, ...insertions);
    }
    processGlyphInsertion(glyph, entry, index) {
        if (entry.flags & $99be642f82069918$var$SET_MARK) this.markedIndex = index;
        if (entry.markedInsertIndex !== 0xffff) {
            let count = (entry.flags & $99be642f82069918$var$MARKED_INSERT_COUNT) >>> 5;
            let isBefore = !!(entry.flags & $99be642f82069918$var$MARKED_INSERT_BEFORE);
            this._insertGlyphs(this.markedIndex, entry.markedInsertIndex, count, isBefore);
        }
        if (entry.currentInsertIndex !== 0xffff) {
            let count = (entry.flags & $99be642f82069918$var$CURRENT_INSERT_COUNT) >>> 5;
            let isBefore = !!(entry.flags & $99be642f82069918$var$CURRENT_INSERT_BEFORE);
            this._insertGlyphs(index, entry.currentInsertIndex, count, isBefore);
        }
    }
    getSupportedFeatures() {
        let features = [];
        for (let chain of this.morx.chains)for (let feature of chain.features)features.push([
            feature.featureType,
            feature.featureSetting
        ]);
        return features;
    }
    generateInputs(gid) {
        if (!this.inputCache) this.generateInputCache();
        return this.inputCache[gid] || [];
    }
    generateInputCache() {
        this.inputCache = {};
        for (let chain of this.morx.chains){
            let flags = chain.defaultFlags;
            for (let subtable of chain.subtables)if (subtable.subFeatureFlags & flags) this.generateInputsForSubtable(subtable);
        }
    }
    generateInputsForSubtable(subtable) {
        // Currently, only supporting ligature subtables.
        if (subtable.type !== 2) return;
        let reverse = !!(subtable.coverage & $99be642f82069918$var$REVERSE_DIRECTION);
        if (reverse) throw new Error("Reverse subtable, not supported.");
        this.subtable = subtable;
        this.ligatureStack = [];
        let stateMachine = this.getStateMachine(subtable);
        let process = this.getProcessor();
        let input = [];
        let stack = [];
        this.glyphs = [];
        stateMachine.traverse({
            enter: (glyph, entry)=>{
                let glyphs = this.glyphs;
                stack.push({
                    glyphs: glyphs.slice(),
                    ligatureStack: this.ligatureStack.slice()
                });
                // Add glyph to input and glyphs to process.
                let g1 = this.font.getGlyph(glyph);
                input.push(g1);
                glyphs.push(input[input.length - 1]);
                // Process ligature substitution
                process(glyphs[glyphs.length - 1], entry, glyphs.length - 1);
                // Add input to result if only one matching (non-deleted) glyph remains.
                let count = 0;
                let found = 0;
                for(let i = 0; i < glyphs.length && count <= 1; i++)if (glyphs[i].id !== 0xffff) {
                    count++;
                    found = glyphs[i].id;
                }
                if (count === 1) {
                    let result = input.map((g)=>g.id);
                    let cache1 = this.inputCache[found];
                    if (cache1) cache1.push(result);
                    else this.inputCache[found] = [
                        result
                    ];
                }
            },
            exit: ()=>{
                ({ glyphs: this.glyphs, ligatureStack: this.ligatureStack } = stack.pop());
                input.pop();
            }
        });
    }
    constructor(font){
        this.processIndicRearragement = this.processIndicRearragement.bind(this);
        this.processContextualSubstitution = this.processContextualSubstitution.bind(this);
        this.processLigature = this.processLigature.bind(this);
        this.processNoncontextualSubstitutions = this.processNoncontextualSubstitutions.bind(this);
        this.processGlyphInsertion = this.processGlyphInsertion.bind(this);
        this.font = font;
        this.morx = font.morx;
        this.inputCache = null;
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $99be642f82069918$export$2e2bcd8739ae039.prototype, "getStateMachine", null);
// swaps the glyphs in rangeA with those in rangeB
// reverse the glyphs inside those ranges if specified
// ranges are in [offset, length] format
function $99be642f82069918$var$swap(glyphs, rangeA, rangeB, reverseA = false, reverseB = false) {
    let end = glyphs.splice(rangeB[0] - (rangeB[1] - 1), rangeB[1]);
    if (reverseB) end.reverse();
    let start = glyphs.splice(rangeA[0], rangeA[1], ...end);
    if (reverseA) start.reverse();
    glyphs.splice(rangeB[0] - (rangeA[1] - 1), 0, ...start);
    return glyphs;
}
function $99be642f82069918$var$reorderGlyphs(glyphs, verb, firstGlyph, lastGlyph) {
    let length = lastGlyph - firstGlyph + 1;
    switch(verb){
        case 0:
            return glyphs;
        case 1:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                1
            ], [
                lastGlyph,
                0
            ]);
        case 2:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                0
            ], [
                lastGlyph,
                1
            ]);
        case 3:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                1
            ], [
                lastGlyph,
                1
            ]);
        case 4:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                0
            ]);
        case 5:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                0
            ], true, false);
        case 6:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                0
            ], [
                lastGlyph,
                2
            ]);
        case 7:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                0
            ], [
                lastGlyph,
                2
            ], false, true);
        case 8:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                1
            ], [
                lastGlyph,
                2
            ]);
        case 9:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                1
            ], [
                lastGlyph,
                2
            ], false, true);
        case 10:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                1
            ]);
        case 11:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                1
            ], true, false);
        case 12:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                2
            ]);
        case 13:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                2
            ], true, false);
        case 14:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                2
            ], false, true);
        case 15:
            return $99be642f82069918$var$swap(glyphs, [
                firstGlyph,
                2
            ], [
                lastGlyph,
                2
            ], true, true);
        default:
            throw new Error(`Unknown verb: ${verb}`);
    }
}
class $860fcbd64bc12fbc$export$2e2bcd8739ae039 {
    substitute(glyphRun) {
        // AAT expects the glyphs to be in visual order prior to morx processing,
        // so reverse the glyphs if the script is right-to-left.
        if (glyphRun.direction === "rtl") glyphRun.glyphs.reverse();
        this.morxProcessor.process(glyphRun.glyphs, $2b7f887ebcb5888a$export$b813f7d2a1677c16(glyphRun.features));
    }
    getAvailableFeatures(script, language) {
        return $2b7f887ebcb5888a$export$bd6df347a4f391c4(this.morxProcessor.getSupportedFeatures());
    }
    stringsForGlyph(gid) {
        let glyphStrings = this.morxProcessor.generateInputs(gid);
        let result = new Set;
        for (let glyphs of glyphStrings)this._addStrings(glyphs, 0, result, "");
        return result;
    }
    _addStrings(glyphs, index, strings, string) {
        let codePoints = this.font._cmapProcessor.codePointsForGlyph(glyphs[index]);
        for (let codePoint of codePoints){
            let s = string + String.fromCodePoint(codePoint);
            if (index < glyphs.length - 1) this._addStrings(glyphs, index + 1, strings, s);
            else strings.add(s);
        }
    }
    constructor(font){
        this.font = font;
        this.morxProcessor = new $99be642f82069918$export$2e2bcd8739ae039(font);
        this.fallbackPosition = false;
    }
}
class $d7e93cca3cf8ce8a$export$2e2bcd8739ae039 {
    /**
   * Adds the given features to the last stage.
   * Ignores features that have already been applied.
   */ _addFeatures(features, global) {
        let stageIndex = this.stages.length - 1;
        let stage = this.stages[stageIndex];
        for (let feature of features)if (this.allFeatures[feature] == null) {
            stage.push(feature);
            this.allFeatures[feature] = stageIndex;
            if (global) this.globalFeatures[feature] = true;
        }
    }
    /**
   * Add features to the last stage
   */ add(arg, global = true) {
        if (this.stages.length === 0) this.stages.push([]);
        if (typeof arg === "string") arg = [
            arg
        ];
        if (Array.isArray(arg)) this._addFeatures(arg, global);
        else if (typeof arg === "object") {
            this._addFeatures(arg.global || [], true);
            this._addFeatures(arg.local || [], false);
        } else throw new Error("Unsupported argument to ShapingPlan#add");
    }
    /**
   * Add a new stage
   */ addStage(arg, global) {
        if (typeof arg === "function") this.stages.push(arg, []);
        else {
            this.stages.push([]);
            this.add(arg, global);
        }
    }
    setFeatureOverrides(features) {
        if (Array.isArray(features)) this.add(features);
        else if (typeof features === "object") for(let tag in features){
            if (features[tag]) this.add(tag);
            else if (this.allFeatures[tag] != null) {
                let stage = this.stages[this.allFeatures[tag]];
                stage.splice(stage.indexOf(tag), 1);
                delete this.allFeatures[tag];
                delete this.globalFeatures[tag];
            }
        }
    }
    /**
   * Assigns the global features to the given glyphs
   */ assignGlobalFeatures(glyphs) {
        for (let glyph of glyphs)for(let feature in this.globalFeatures)glyph.features[feature] = true;
    }
    /**
   * Executes the planned stages using the given OTProcessor
   */ process(processor, glyphs, positions) {
        for (let stage of this.stages){
            if (typeof stage === "function") {
                if (!positions) stage(this.font, glyphs, this);
            } else if (stage.length > 0) processor.applyFeatures(stage, glyphs, positions);
        }
    }
    constructor(font, script, direction){
        this.font = font;
        this.script = script;
        this.direction = direction;
        this.stages = [];
        this.globalFeatures = {};
        this.allFeatures = {};
    }
}
const $d28fb665ee343afc$var$VARIATION_FEATURES = [
    "rvrn"
];
const $d28fb665ee343afc$var$COMMON_FEATURES = [
    "ccmp",
    "locl",
    "rlig",
    "mark",
    "mkmk"
];
const $d28fb665ee343afc$var$FRACTIONAL_FEATURES = [
    "frac",
    "numr",
    "dnom"
];
const $d28fb665ee343afc$var$HORIZONTAL_FEATURES = [
    "calt",
    "clig",
    "liga",
    "rclt",
    "curs",
    "kern"
];
const $d28fb665ee343afc$var$VERTICAL_FEATURES = [
    "vert"
];
const $d28fb665ee343afc$var$DIRECTIONAL_FEATURES = {
    ltr: [
        "ltra",
        "ltrm"
    ],
    rtl: [
        "rtla",
        "rtlm"
    ]
};
class $d28fb665ee343afc$export$2e2bcd8739ae039 {
    static plan(plan, glyphs, features) {
        // Plan the features we want to apply
        this.planPreprocessing(plan);
        this.planFeatures(plan);
        this.planPostprocessing(plan, features);
        // Assign the global features to all the glyphs
        plan.assignGlobalFeatures(glyphs);
        // Assign local features to glyphs
        this.assignFeatures(plan, glyphs);
    }
    static planPreprocessing(plan) {
        plan.add({
            global: [
                ...$d28fb665ee343afc$var$VARIATION_FEATURES,
                ...$d28fb665ee343afc$var$DIRECTIONAL_FEATURES[plan.direction]
            ],
            local: $d28fb665ee343afc$var$FRACTIONAL_FEATURES
        });
    }
    static planFeatures(plan) {
    // Do nothing by default. Let subclasses override this.
    }
    static planPostprocessing(plan, userFeatures) {
        plan.add([
            ...$d28fb665ee343afc$var$COMMON_FEATURES,
            ...$d28fb665ee343afc$var$HORIZONTAL_FEATURES
        ]);
        plan.setFeatureOverrides(userFeatures);
    }
    static assignFeatures(plan, glyphs) {
        // Enable contextual fractions
        for(let i = 0; i < glyphs.length; i++){
            let glyph = glyphs[i];
            if (glyph.codePoints[0] === 0x2044) {
                let start = i;
                let end = i + 1;
                // Apply numerator
                while(start > 0 && (0, $gfJaN$unicodeproperties.isDigit)(glyphs[start - 1].codePoints[0])){
                    glyphs[start - 1].features.numr = true;
                    glyphs[start - 1].features.frac = true;
                    start--;
                }
                // Apply denominator
                while(end < glyphs.length && (0, $gfJaN$unicodeproperties.isDigit)(glyphs[end].codePoints[0])){
                    glyphs[end].features.dnom = true;
                    glyphs[end].features.frac = true;
                    end++;
                }
                // Apply fraction slash
                glyph.features.frac = true;
                i = end - 1;
            }
        }
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)($d28fb665ee343afc$export$2e2bcd8739ae039, "zeroMarkWidths", "AFTER_GPOS");
const $17ba6019f27bfcf9$var$trie = new ($parcel$interopDefault($gfJaN$unicodetrie))($66a5b9fb5318558a$export$94fdf11bafc8de6b("ABABAAAAAACgMQAAAZUBav7t2CtPA0EUBeDZB00pin9AJZIEgyUEj0QhweDAgQOJxCBRBElQSBwSicLgkOAwnNKZ5GaY2c7uzj4o5yZfZrrbefbuIx2nSq3CGmzAWH/+K+UO7MIe7MMhHMMpnMMFXMIVXIt2t3CnP088iPqjqNN8e4Ij7Rle4LUH82rLm6i/92A+RERERERERERNmfz/89GDeRARERERzbN8ceps2Iwt9H0C9/AJ6yOlDkbTczcot5VSm8Pm1vcFWfb7+BKOLTuOd2UlTX4wGP85Eg953lWPFbnuN7PkjtLmalOWbNenkHOSa7T3KmR9MVTZ2zZkVj1kHa68MueVKH0R4zqQ44WEXLM8VjcWHP0PtKLfPzQnMtGn3W4QYf6qxFxceVI394r2xnV+1rih0fV1Vzf3fO1n3evL5J78ruvZ5ptX2Rwy92Tfb1wlEqut3U+sZ3HXOeJ7/zDrbyuP6+Zz0fqa6Nv3vhY7Yu1xWnGevmsvsUpTT/RYIe8waUH/rvHMWKFzLfN8L+rTfp645mfX7ftlnfDtYxN59w0="));
const $17ba6019f27bfcf9$var$FEATURES = [
    "isol",
    "fina",
    "fin2",
    "fin3",
    "medi",
    "med2",
    "init"
];
const $17ba6019f27bfcf9$var$ShapingClasses = {
    Non_Joining: 0,
    Left_Joining: 1,
    Right_Joining: 2,
    Dual_Joining: 3,
    Join_Causing: 3,
    ALAPH: 4,
    "DALATH RISH": 5,
    Transparent: 6
};
const $17ba6019f27bfcf9$var$ISOL = "isol";
const $17ba6019f27bfcf9$var$FINA = "fina";
const $17ba6019f27bfcf9$var$FIN2 = "fin2";
const $17ba6019f27bfcf9$var$FIN3 = "fin3";
const $17ba6019f27bfcf9$var$MEDI = "medi";
const $17ba6019f27bfcf9$var$MED2 = "med2";
const $17ba6019f27bfcf9$var$INIT = "init";
const $17ba6019f27bfcf9$var$NONE = null;
// Each entry is [prevAction, curAction, nextState]
const $17ba6019f27bfcf9$var$STATE_TABLE = [
    //   Non_Joining,        Left_Joining,       Right_Joining,     Dual_Joining,           ALAPH,            DALATH RISH
    // State 0: prev was U,  not willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            6
        ]
    ],
    // State 1: prev was R or ISOL/ALAPH,  not willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$FIN2,
            5
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            6
        ]
    ],
    // State 2: prev was D/L in ISOL form,  willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$INIT,
            $17ba6019f27bfcf9$var$FINA,
            1
        ],
        [
            $17ba6019f27bfcf9$var$INIT,
            $17ba6019f27bfcf9$var$FINA,
            3
        ],
        [
            $17ba6019f27bfcf9$var$INIT,
            $17ba6019f27bfcf9$var$FINA,
            4
        ],
        [
            $17ba6019f27bfcf9$var$INIT,
            $17ba6019f27bfcf9$var$FINA,
            6
        ]
    ],
    // State 3: prev was D in FINA form,  willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$MEDI,
            $17ba6019f27bfcf9$var$FINA,
            1
        ],
        [
            $17ba6019f27bfcf9$var$MEDI,
            $17ba6019f27bfcf9$var$FINA,
            3
        ],
        [
            $17ba6019f27bfcf9$var$MEDI,
            $17ba6019f27bfcf9$var$FINA,
            4
        ],
        [
            $17ba6019f27bfcf9$var$MEDI,
            $17ba6019f27bfcf9$var$FINA,
            6
        ]
    ],
    // State 4: prev was FINA ALAPH,  not willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$MED2,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$MED2,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$MED2,
            $17ba6019f27bfcf9$var$FIN2,
            5
        ],
        [
            $17ba6019f27bfcf9$var$MED2,
            $17ba6019f27bfcf9$var$ISOL,
            6
        ]
    ],
    // State 5: prev was FIN2/FIN3 ALAPH,  not willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$ISOL,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$ISOL,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$ISOL,
            $17ba6019f27bfcf9$var$FIN2,
            5
        ],
        [
            $17ba6019f27bfcf9$var$ISOL,
            $17ba6019f27bfcf9$var$ISOL,
            6
        ]
    ],
    // State 6: prev was DALATH/RISH,  not willing to join.
    [
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$NONE,
            0
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            1
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            2
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$FIN3,
            5
        ],
        [
            $17ba6019f27bfcf9$var$NONE,
            $17ba6019f27bfcf9$var$ISOL,
            6
        ]
    ]
];
class $17ba6019f27bfcf9$export$2e2bcd8739ae039 extends $d28fb665ee343afc$export$2e2bcd8739ae039 {
    static planFeatures(plan) {
        plan.add([
            "ccmp",
            "locl"
        ]);
        for(let i = 0; i < $17ba6019f27bfcf9$var$FEATURES.length; i++){
            let feature = $17ba6019f27bfcf9$var$FEATURES[i];
            plan.addStage(feature, false);
        }
        plan.addStage("mset");
    }
    static assignFeatures(plan, glyphs) {
        super.assignFeatures(plan, glyphs);
        let prev = -1;
        let state = 0;
        let actions = [];
        // Apply the state machine to map glyphs to features
        for(let i = 0; i < glyphs.length; i++){
            let curAction, prevAction;
            var glyph = glyphs[i];
            let type = $17ba6019f27bfcf9$var$getShapingClass(glyph.codePoints[0]);
            if (type === $17ba6019f27bfcf9$var$ShapingClasses.Transparent) {
                actions[i] = $17ba6019f27bfcf9$var$NONE;
                continue;
            }
            [prevAction, curAction, state] = $17ba6019f27bfcf9$var$STATE_TABLE[state][type];
            if (prevAction !== $17ba6019f27bfcf9$var$NONE && prev !== -1) actions[prev] = prevAction;
            actions[i] = curAction;
            prev = i;
        }
        // Apply the chosen features to their respective glyphs
        for(let index = 0; index < glyphs.length; index++){
            let feature;
            var glyph = glyphs[index];
            if (feature = actions[index]) glyph.features[feature] = true;
        }
    }
}
function $17ba6019f27bfcf9$var$getShapingClass(codePoint) {
    let res = $17ba6019f27bfcf9$var$trie.get(codePoint);
    if (res) return res - 1;
    let category = (0, $gfJaN$unicodeproperties.getCategory)(codePoint);
    if (category === "Mn" || category === "Me" || category === "Cf") return $17ba6019f27bfcf9$var$ShapingClasses.Transparent;
    return $17ba6019f27bfcf9$var$ShapingClasses.Non_Joining;
}
class $d6368085223f631e$export$2e2bcd8739ae039 {
    reset(options = {}, index = 0) {
        this.options = options;
        this.flags = options.flags || {};
        this.markAttachmentType = options.markAttachmentType || 0;
        this.index = index;
    }
    get cur() {
        return this.glyphs[this.index] || null;
    }
    shouldIgnore(glyph) {
        return this.flags.ignoreMarks && glyph.isMark || this.flags.ignoreBaseGlyphs && glyph.isBase || this.flags.ignoreLigatures && glyph.isLigature || this.markAttachmentType && glyph.isMark && glyph.markAttachmentType !== this.markAttachmentType;
    }
    move(dir) {
        this.index += dir;
        while(0 <= this.index && this.index < this.glyphs.length && this.shouldIgnore(this.glyphs[this.index]))this.index += dir;
        if (0 > this.index || this.index >= this.glyphs.length) return null;
        return this.glyphs[this.index];
    }
    next() {
        return this.move(1);
    }
    prev() {
        return this.move(-1);
    }
    peek(count = 1) {
        let idx = this.index;
        let res = this.increment(count);
        this.index = idx;
        return res;
    }
    peekIndex(count = 1) {
        let idx = this.index;
        this.increment(count);
        let res = this.index;
        this.index = idx;
        return res;
    }
    increment(count = 1) {
        let dir = count < 0 ? -1 : 1;
        count = Math.abs(count);
        while(count--)this.move(dir);
        return this.glyphs[this.index];
    }
    constructor(glyphs, options){
        this.glyphs = glyphs;
        this.reset(options);
    }
}
const $7b226e6bbeadedeb$var$DEFAULT_SCRIPTS = [
    "DFLT",
    "dflt",
    "latn"
];
class $7b226e6bbeadedeb$export$2e2bcd8739ae039 {
    findScript(script) {
        if (this.table.scriptList == null) return null;
        if (!Array.isArray(script)) script = [
            script
        ];
        for (let s of script)for (let entry of this.table.scriptList){
            if (entry.tag === s) return entry;
        }
        return null;
    }
    selectScript(script, language, direction) {
        let changed = false;
        let entry;
        if (!this.script || script !== this.scriptTag) {
            entry = this.findScript(script);
            if (!entry) entry = this.findScript($7b226e6bbeadedeb$var$DEFAULT_SCRIPTS);
            if (!entry) return this.scriptTag;
            this.scriptTag = entry.tag;
            this.script = entry.script;
            this.language = null;
            this.languageTag = null;
            changed = true;
        }
        if (!direction || direction !== this.direction) this.direction = direction || $e38a1a895f6aeb54$export$9fddb9d0dd7d8a54(script);
        if (language && language.length < 4) language += " ".repeat(4 - language.length);
        if (!language || language !== this.languageTag) {
            this.language = null;
            for (let lang of this.script.langSysRecords)if (lang.tag === language) {
                this.language = lang.langSys;
                this.languageTag = lang.tag;
                break;
            }
            if (!this.language) {
                this.language = this.script.defaultLangSys;
                this.languageTag = null;
            }
            changed = true;
        }
        // Build a feature lookup table
        if (changed) {
            this.features = {};
            if (this.language) for (let featureIndex of this.language.featureIndexes){
                let record = this.table.featureList[featureIndex];
                let substituteFeature = this.substituteFeatureForVariations(featureIndex);
                this.features[record.tag] = substituteFeature || record.feature;
            }
        }
        return this.scriptTag;
    }
    lookupsForFeatures(userFeatures = [], exclude) {
        let lookups = [];
        for (let tag of userFeatures){
            let feature = this.features[tag];
            if (!feature) continue;
            for (let lookupIndex of feature.lookupListIndexes){
                if (exclude && exclude.indexOf(lookupIndex) !== -1) continue;
                lookups.push({
                    feature: tag,
                    index: lookupIndex,
                    lookup: this.table.lookupList.get(lookupIndex)
                });
            }
        }
        lookups.sort((a, b)=>a.index - b.index);
        return lookups;
    }
    substituteFeatureForVariations(featureIndex) {
        if (this.variationsIndex === -1) return null;
        let record = this.table.featureVariations.featureVariationRecords[this.variationsIndex];
        let substitutions = record.featureTableSubstitution.substitutions;
        for (let substitution of substitutions){
            if (substitution.featureIndex === featureIndex) return substitution.alternateFeatureTable;
        }
        return null;
    }
    findVariationsIndex(coords) {
        let variations = this.table.featureVariations;
        if (!variations) return -1;
        let records = variations.featureVariationRecords;
        for(let i = 0; i < records.length; i++){
            let conditions = records[i].conditionSet.conditionTable;
            if (this.variationConditionsMatch(conditions, coords)) return i;
        }
        return -1;
    }
    variationConditionsMatch(conditions, coords) {
        return conditions.every((condition)=>{
            let coord = condition.axisIndex < coords.length ? coords[condition.axisIndex] : 0;
            return condition.filterRangeMinValue <= coord && coord <= condition.filterRangeMaxValue;
        });
    }
    applyFeatures(userFeatures, glyphs, advances) {
        let lookups = this.lookupsForFeatures(userFeatures);
        this.applyLookups(lookups, glyphs, advances);
    }
    applyLookups(lookups, glyphs, positions) {
        this.glyphs = glyphs;
        this.positions = positions;
        this.glyphIterator = new $d6368085223f631e$export$2e2bcd8739ae039(glyphs);
        for (let { feature: feature, lookup: lookup } of lookups){
            this.currentFeature = feature;
            this.glyphIterator.reset(lookup.flags);
            while(this.glyphIterator.index < glyphs.length){
                if (!(feature in this.glyphIterator.cur.features)) {
                    this.glyphIterator.next();
                    continue;
                }
                for (let table of lookup.subTables){
                    let res = this.applyLookup(lookup.lookupType, table);
                    if (res) break;
                }
                this.glyphIterator.next();
            }
        }
    }
    applyLookup(lookup, table) {
        throw new Error("applyLookup must be implemented by subclasses");
    }
    applyLookupList(lookupRecords) {
        let options = this.glyphIterator.options;
        let glyphIndex = this.glyphIterator.index;
        for (let lookupRecord of lookupRecords){
            // Reset flags and find glyph index for this lookup record
            this.glyphIterator.reset(options, glyphIndex);
            this.glyphIterator.increment(lookupRecord.sequenceIndex);
            // Get the lookup and setup flags for subtables
            let lookup = this.table.lookupList.get(lookupRecord.lookupListIndex);
            this.glyphIterator.reset(lookup.flags, this.glyphIterator.index);
            // Apply lookup subtables until one matches
            for (let table of lookup.subTables){
                if (this.applyLookup(lookup.lookupType, table)) break;
            }
        }
        this.glyphIterator.reset(options, glyphIndex);
        return true;
    }
    coverageIndex(coverage, glyph) {
        if (glyph == null) glyph = this.glyphIterator.cur.id;
        switch(coverage.version){
            case 1:
                return coverage.glyphs.indexOf(glyph);
            case 2:
                for (let range of coverage.rangeRecords){
                    if (range.start <= glyph && glyph <= range.end) return range.startCoverageIndex + glyph - range.start;
                }
                break;
        }
        return -1;
    }
    match(sequenceIndex, sequence, fn, matched) {
        let pos = this.glyphIterator.index;
        let glyph = this.glyphIterator.increment(sequenceIndex);
        let idx = 0;
        while(idx < sequence.length && glyph && fn(sequence[idx], glyph)){
            if (matched) matched.push(this.glyphIterator.index);
            idx++;
            glyph = this.glyphIterator.next();
        }
        this.glyphIterator.index = pos;
        if (idx < sequence.length) return false;
        return matched || true;
    }
    sequenceMatches(sequenceIndex, sequence) {
        return this.match(sequenceIndex, sequence, (component, glyph)=>component === glyph.id);
    }
    sequenceMatchIndices(sequenceIndex, sequence) {
        return this.match(sequenceIndex, sequence, (component, glyph)=>{
            // If the current feature doesn't apply to this glyph,
            if (!(this.currentFeature in glyph.features)) return false;
            return component === glyph.id;
        }, []);
    }
    coverageSequenceMatches(sequenceIndex, sequence) {
        return this.match(sequenceIndex, sequence, (coverage, glyph)=>this.coverageIndex(coverage, glyph.id) >= 0);
    }
    getClassID(glyph, classDef) {
        switch(classDef.version){
            case 1:
                let i = glyph - classDef.startGlyph;
                if (i >= 0 && i < classDef.classValueArray.length) return classDef.classValueArray[i];
                break;
            case 2:
                for (let range of classDef.classRangeRecord){
                    if (range.start <= glyph && glyph <= range.end) return range.class;
                }
                break;
        }
        return 0;
    }
    classSequenceMatches(sequenceIndex, sequence, classDef) {
        return this.match(sequenceIndex, sequence, (classID, glyph)=>classID === this.getClassID(glyph.id, classDef));
    }
    applyContext(table) {
        let index, set;
        switch(table.version){
            case 1:
                index = this.coverageIndex(table.coverage);
                if (index === -1) return false;
                set = table.ruleSets[index];
                for (let rule of set){
                    if (this.sequenceMatches(1, rule.input)) return this.applyLookupList(rule.lookupRecords);
                }
                break;
            case 2:
                if (this.coverageIndex(table.coverage) === -1) return false;
                index = this.getClassID(this.glyphIterator.cur.id, table.classDef);
                if (index === -1) return false;
                set = table.classSet[index];
                for (let rule1 of set){
                    if (this.classSequenceMatches(1, rule1.classes, table.classDef)) return this.applyLookupList(rule1.lookupRecords);
                }
                break;
            case 3:
                if (this.coverageSequenceMatches(0, table.coverages)) return this.applyLookupList(table.lookupRecords);
                break;
        }
        return false;
    }
    applyChainingContext(table) {
        let index;
        switch(table.version){
            case 1:
                index = this.coverageIndex(table.coverage);
                if (index === -1) return false;
                let set = table.chainRuleSets[index];
                for (let rule of set){
                    if (this.sequenceMatches(-rule.backtrack.length, rule.backtrack) && this.sequenceMatches(1, rule.input) && this.sequenceMatches(1 + rule.input.length, rule.lookahead)) return this.applyLookupList(rule.lookupRecords);
                }
                break;
            case 2:
                if (this.coverageIndex(table.coverage) === -1) return false;
                index = this.getClassID(this.glyphIterator.cur.id, table.inputClassDef);
                let rules = table.chainClassSet[index];
                if (!rules) return false;
                for (let rule2 of rules){
                    if (this.classSequenceMatches(-rule2.backtrack.length, rule2.backtrack, table.backtrackClassDef) && this.classSequenceMatches(1, rule2.input, table.inputClassDef) && this.classSequenceMatches(1 + rule2.input.length, rule2.lookahead, table.lookaheadClassDef)) return this.applyLookupList(rule2.lookupRecords);
                }
                break;
            case 3:
                if (this.coverageSequenceMatches(-table.backtrackGlyphCount, table.backtrackCoverage) && this.coverageSequenceMatches(0, table.inputCoverage) && this.coverageSequenceMatches(table.inputGlyphCount, table.lookaheadCoverage)) return this.applyLookupList(table.lookupRecords);
                break;
        }
        return false;
    }
    constructor(font, table){
        this.font = font;
        this.table = table;
        this.script = null;
        this.scriptTag = null;
        this.language = null;
        this.languageTag = null;
        this.features = {};
        this.lookups = {};
        // Setup variation substitutions
        this.variationsIndex = font._variationProcessor ? this.findVariationsIndex(font._variationProcessor.normalizedCoords) : -1;
        // initialize to default script + language
        this.selectScript();
        // current context (set by applyFeatures)
        this.glyphs = [];
        this.positions = []; // only used by GPOS
        this.ligatureID = 1;
        this.currentFeature = null;
    }
}
class $f22bb23c9fd478d8$export$2e2bcd8739ae039 {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
        this.substituted = true;
        let GDEF = this._font.GDEF;
        if (GDEF && GDEF.glyphClassDef) {
            // TODO: clean this up
            let classID = $7b226e6bbeadedeb$export$2e2bcd8739ae039.prototype.getClassID(id, GDEF.glyphClassDef);
            this.isBase = classID === 1;
            this.isLigature = classID === 2;
            this.isMark = classID === 3;
            this.markAttachmentType = GDEF.markAttachClassDef ? $7b226e6bbeadedeb$export$2e2bcd8739ae039.prototype.getClassID(id, GDEF.markAttachClassDef) : 0;
        } else {
            this.isMark = this.codePoints.length > 0 && this.codePoints.every($gfJaN$unicodeproperties.isMark);
            this.isBase = !this.isMark;
            this.isLigature = this.codePoints.length > 1;
            this.markAttachmentType = 0;
        }
    }
    copy() {
        return new $f22bb23c9fd478d8$export$2e2bcd8739ae039(this._font, this.id, this.codePoints, this.features);
    }
    constructor(font, id, codePoints = [], features){
        this._font = font;
        this.codePoints = codePoints;
        this.id = id;
        this.features = {};
        if (Array.isArray(features)) for(let i = 0; i < features.length; i++){
            let feature = features[i];
            this.features[feature] = true;
        }
        else if (typeof features === "object") Object.assign(this.features, features);
        this.ligatureID = null;
        this.ligatureComponent = null;
        this.isLigated = false;
        this.cursiveAttachment = null;
        this.markAttachment = null;
        this.shaperInfo = null;
        this.substituted = false;
        this.isMultiplied = false;
    }
}
class $fa1d9fd80dd7279e$export$2e2bcd8739ae039 extends $d28fb665ee343afc$export$2e2bcd8739ae039 {
    static planFeatures(plan) {
        plan.add([
            "ljmo",
            "vjmo",
            "tjmo"
        ], false);
    }
    static assignFeatures(plan, glyphs) {
        let state = 0;
        let i = 0;
        while(i < glyphs.length){
            let action;
            let glyph = glyphs[i];
            let code = glyph.codePoints[0];
            let type = $fa1d9fd80dd7279e$var$getType(code);
            [action, state] = $fa1d9fd80dd7279e$var$STATE_TABLE[state][type];
            switch(action){
                case $fa1d9fd80dd7279e$var$DECOMPOSE:
                    // Decompose the composed syllable if it is not supported by the font.
                    if (!plan.font.hasGlyphForCodePoint(code)) i = $fa1d9fd80dd7279e$var$decompose(glyphs, i, plan.font);
                    break;
                case $fa1d9fd80dd7279e$var$COMPOSE:
                    // Found a decomposed syllable. Try to compose if supported by the font.
                    i = $fa1d9fd80dd7279e$var$compose(glyphs, i, plan.font);
                    break;
                case $fa1d9fd80dd7279e$var$TONE_MARK:
                    // Got a valid syllable, followed by a tone mark. Move the tone mark to the beginning of the syllable.
                    $fa1d9fd80dd7279e$var$reorderToneMark(glyphs, i, plan.font);
                    break;
                case $fa1d9fd80dd7279e$var$INVALID:
                    // Tone mark has no valid syllable to attach to, so insert a dotted circle
                    i = $fa1d9fd80dd7279e$var$insertDottedCircle(glyphs, i, plan.font);
                    break;
            }
            i++;
        }
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)($fa1d9fd80dd7279e$export$2e2bcd8739ae039, "zeroMarkWidths", "NONE");
const $fa1d9fd80dd7279e$var$HANGUL_BASE = 0xac00;
const $fa1d9fd80dd7279e$var$HANGUL_END = 0xd7a4;
const $fa1d9fd80dd7279e$var$HANGUL_COUNT = $fa1d9fd80dd7279e$var$HANGUL_END - $fa1d9fd80dd7279e$var$HANGUL_BASE + 1;
const $fa1d9fd80dd7279e$var$L_BASE = 0x1100; // lead
const $fa1d9fd80dd7279e$var$V_BASE = 0x1161; // vowel
const $fa1d9fd80dd7279e$var$T_BASE = 0x11a7; // trail
const $fa1d9fd80dd7279e$var$L_COUNT = 19;
const $fa1d9fd80dd7279e$var$V_COUNT = 21;
const $fa1d9fd80dd7279e$var$T_COUNT = 28;
const $fa1d9fd80dd7279e$var$L_END = $fa1d9fd80dd7279e$var$L_BASE + $fa1d9fd80dd7279e$var$L_COUNT - 1;
const $fa1d9fd80dd7279e$var$V_END = $fa1d9fd80dd7279e$var$V_BASE + $fa1d9fd80dd7279e$var$V_COUNT - 1;
const $fa1d9fd80dd7279e$var$T_END = $fa1d9fd80dd7279e$var$T_BASE + $fa1d9fd80dd7279e$var$T_COUNT - 1;
const $fa1d9fd80dd7279e$var$DOTTED_CIRCLE = 0x25cc;
const $fa1d9fd80dd7279e$var$isL = (code)=>0x1100 <= code && code <= 0x115f || 0xa960 <= code && code <= 0xa97c;
const $fa1d9fd80dd7279e$var$isV = (code)=>0x1160 <= code && code <= 0x11a7 || 0xd7b0 <= code && code <= 0xd7c6;
const $fa1d9fd80dd7279e$var$isT = (code)=>0x11a8 <= code && code <= 0x11ff || 0xd7cb <= code && code <= 0xd7fb;
const $fa1d9fd80dd7279e$var$isTone = (code)=>0x302e <= code && code <= 0x302f;
const $fa1d9fd80dd7279e$var$isLVT = (code)=>$fa1d9fd80dd7279e$var$HANGUL_BASE <= code && code <= $fa1d9fd80dd7279e$var$HANGUL_END;
const $fa1d9fd80dd7279e$var$isLV = (code)=>code - $fa1d9fd80dd7279e$var$HANGUL_BASE < $fa1d9fd80dd7279e$var$HANGUL_COUNT && (code - $fa1d9fd80dd7279e$var$HANGUL_BASE) % $fa1d9fd80dd7279e$var$T_COUNT === 0;
const $fa1d9fd80dd7279e$var$isCombiningL = (code)=>$fa1d9fd80dd7279e$var$L_BASE <= code && code <= $fa1d9fd80dd7279e$var$L_END;
const $fa1d9fd80dd7279e$var$isCombiningV = (code)=>$fa1d9fd80dd7279e$var$V_BASE <= code && code <= $fa1d9fd80dd7279e$var$V_END;
const $fa1d9fd80dd7279e$var$isCombiningT = (code)=>$fa1d9fd80dd7279e$var$T_BASE + 1 && 1 <= code && code <= $fa1d9fd80dd7279e$var$T_END;
// Character categories
const $fa1d9fd80dd7279e$var$X = 0; // Other character
const $fa1d9fd80dd7279e$var$L = 1; // Leading consonant
const $fa1d9fd80dd7279e$var$V = 2; // Medial vowel
const $fa1d9fd80dd7279e$var$T = 3; // Trailing consonant
const $fa1d9fd80dd7279e$var$LV = 4; // Composed <LV> syllable
const $fa1d9fd80dd7279e$var$LVT = 5; // Composed <LVT> syllable
const $fa1d9fd80dd7279e$var$M = 6; // Tone mark
// This function classifies a character using the above categories.
function $fa1d9fd80dd7279e$var$getType(code) {
    if ($fa1d9fd80dd7279e$var$isL(code)) return $fa1d9fd80dd7279e$var$L;
    if ($fa1d9fd80dd7279e$var$isV(code)) return $fa1d9fd80dd7279e$var$V;
    if ($fa1d9fd80dd7279e$var$isT(code)) return $fa1d9fd80dd7279e$var$T;
    if ($fa1d9fd80dd7279e$var$isLV(code)) return $fa1d9fd80dd7279e$var$LV;
    if ($fa1d9fd80dd7279e$var$isLVT(code)) return $fa1d9fd80dd7279e$var$LVT;
    if ($fa1d9fd80dd7279e$var$isTone(code)) return $fa1d9fd80dd7279e$var$M;
    return $fa1d9fd80dd7279e$var$X;
}
// State machine actions
const $fa1d9fd80dd7279e$var$NO_ACTION = 0;
const $fa1d9fd80dd7279e$var$DECOMPOSE = 1;
const $fa1d9fd80dd7279e$var$COMPOSE = 2;
const $fa1d9fd80dd7279e$var$TONE_MARK = 4;
const $fa1d9fd80dd7279e$var$INVALID = 5;
// Build a state machine that accepts valid syllables, and applies actions along the way.
// The logic this is implementing is documented at the top of the file.
const $fa1d9fd80dd7279e$var$STATE_TABLE = [
    //       X                 L                 V                T                  LV                LVT               M
    // State 0: start state
    [
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            1
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            2
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            3
        ],
        [
            $fa1d9fd80dd7279e$var$INVALID,
            0
        ]
    ],
    // State 1: <L>
    [
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            1
        ],
        [
            $fa1d9fd80dd7279e$var$COMPOSE,
            2
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            2
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            3
        ],
        [
            $fa1d9fd80dd7279e$var$INVALID,
            0
        ]
    ],
    // State 2: <L,V> or <LV>
    [
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            1
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$COMPOSE,
            3
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            2
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            3
        ],
        [
            $fa1d9fd80dd7279e$var$TONE_MARK,
            0
        ]
    ],
    // State 3: <L,V,T> or <LVT>
    [
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            1
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$NO_ACTION,
            0
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            2
        ],
        [
            $fa1d9fd80dd7279e$var$DECOMPOSE,
            3
        ],
        [
            $fa1d9fd80dd7279e$var$TONE_MARK,
            0
        ]
    ]
];
function $fa1d9fd80dd7279e$var$getGlyph(font, code, features) {
    return new $f22bb23c9fd478d8$export$2e2bcd8739ae039(font, font.glyphForCodePoint(code).id, [
        code
    ], features);
}
function $fa1d9fd80dd7279e$var$decompose(glyphs, i, font) {
    let glyph = glyphs[i];
    let code = glyph.codePoints[0];
    let s = code - $fa1d9fd80dd7279e$var$HANGUL_BASE;
    let t = $fa1d9fd80dd7279e$var$T_BASE + s % $fa1d9fd80dd7279e$var$T_COUNT;
    s = s / $fa1d9fd80dd7279e$var$T_COUNT | 0;
    let l = $fa1d9fd80dd7279e$var$L_BASE + s / $fa1d9fd80dd7279e$var$V_COUNT | 0;
    let v = $fa1d9fd80dd7279e$var$V_BASE + s % $fa1d9fd80dd7279e$var$V_COUNT;
    // Don't decompose if all of the components are not available
    if (!font.hasGlyphForCodePoint(l) || !font.hasGlyphForCodePoint(v) || t !== $fa1d9fd80dd7279e$var$T_BASE && !font.hasGlyphForCodePoint(t)) return i;
    // Replace the current glyph with decomposed L, V, and T glyphs,
    // and apply the proper OpenType features to each component.
    let ljmo = $fa1d9fd80dd7279e$var$getGlyph(font, l, glyph.features);
    ljmo.features.ljmo = true;
    let vjmo = $fa1d9fd80dd7279e$var$getGlyph(font, v, glyph.features);
    vjmo.features.vjmo = true;
    let insert = [
        ljmo,
        vjmo
    ];
    if (t > $fa1d9fd80dd7279e$var$T_BASE) {
        let tjmo = $fa1d9fd80dd7279e$var$getGlyph(font, t, glyph.features);
        tjmo.features.tjmo = true;
        insert.push(tjmo);
    }
    glyphs.splice(i, 1, ...insert);
    return i + insert.length - 1;
}
function $fa1d9fd80dd7279e$var$compose(glyphs, i, font) {
    let glyph = glyphs[i];
    let code = glyphs[i].codePoints[0];
    let type = $fa1d9fd80dd7279e$var$getType(code);
    let prev = glyphs[i - 1].codePoints[0];
    let prevType = $fa1d9fd80dd7279e$var$getType(prev);
    // Figure out what type of syllable we're dealing with
    let lv, ljmo, vjmo, tjmo;
    if (prevType === $fa1d9fd80dd7279e$var$LV && type === $fa1d9fd80dd7279e$var$T) {
        // <LV,T>
        lv = prev;
        tjmo = glyph;
    } else {
        if (type === $fa1d9fd80dd7279e$var$V) {
            // <L,V>
            ljmo = glyphs[i - 1];
            vjmo = glyph;
        } else {
            // <L,V,T>
            ljmo = glyphs[i - 2];
            vjmo = glyphs[i - 1];
            tjmo = glyph;
        }
        let l = ljmo.codePoints[0];
        let v = vjmo.codePoints[0];
        // Make sure L and V are combining characters
        if ($fa1d9fd80dd7279e$var$isCombiningL(l) && $fa1d9fd80dd7279e$var$isCombiningV(v)) lv = $fa1d9fd80dd7279e$var$HANGUL_BASE + ((l - $fa1d9fd80dd7279e$var$L_BASE) * $fa1d9fd80dd7279e$var$V_COUNT + (v - $fa1d9fd80dd7279e$var$V_BASE)) * $fa1d9fd80dd7279e$var$T_COUNT;
    }
    let t = tjmo && tjmo.codePoints[0] || $fa1d9fd80dd7279e$var$T_BASE;
    if (lv != null && (t === $fa1d9fd80dd7279e$var$T_BASE || $fa1d9fd80dd7279e$var$isCombiningT(t))) {
        let s = lv + (t - $fa1d9fd80dd7279e$var$T_BASE);
        // Replace with a composed glyph if supported by the font,
        // otherwise apply the proper OpenType features to each component.
        if (font.hasGlyphForCodePoint(s)) {
            let del = prevType === $fa1d9fd80dd7279e$var$V ? 3 : 2;
            glyphs.splice(i - del + 1, del, $fa1d9fd80dd7279e$var$getGlyph(font, s, glyph.features));
            return i - del + 1;
        }
    }
    // Didn't compose (either a non-combining component or unsupported by font).
    if (ljmo) ljmo.features.ljmo = true;
    if (vjmo) vjmo.features.vjmo = true;
    if (tjmo) tjmo.features.tjmo = true;
    if (prevType === $fa1d9fd80dd7279e$var$LV) {
        // Sequence was originally <L,V>, which got combined earlier.
        // Either the T was non-combining, or the LVT glyph wasn't supported.
        // Decompose the glyph again and apply OT features.
        $fa1d9fd80dd7279e$var$decompose(glyphs, i - 1, font);
        return i + 1;
    }
    return i;
}
function $fa1d9fd80dd7279e$var$getLength(code) {
    switch($fa1d9fd80dd7279e$var$getType(code)){
        case $fa1d9fd80dd7279e$var$LV:
        case $fa1d9fd80dd7279e$var$LVT:
            return 1;
        case $fa1d9fd80dd7279e$var$V:
            return 2;
        case $fa1d9fd80dd7279e$var$T:
            return 3;
    }
}
function $fa1d9fd80dd7279e$var$reorderToneMark(glyphs, i, font) {
    let glyph = glyphs[i];
    let code = glyphs[i].codePoints[0];
    // Move tone mark to the beginning of the previous syllable, unless it is zero width
    if (font.glyphForCodePoint(code).advanceWidth === 0) return;
    let prev = glyphs[i - 1].codePoints[0];
    let len = $fa1d9fd80dd7279e$var$getLength(prev);
    glyphs.splice(i, 1);
    return glyphs.splice(i - len, 0, glyph);
}
function $fa1d9fd80dd7279e$var$insertDottedCircle(glyphs, i, font) {
    let glyph = glyphs[i];
    let code = glyphs[i].codePoints[0];
    if (font.hasGlyphForCodePoint($fa1d9fd80dd7279e$var$DOTTED_CIRCLE)) {
        let dottedCircle = $fa1d9fd80dd7279e$var$getGlyph(font, $fa1d9fd80dd7279e$var$DOTTED_CIRCLE, glyph.features);
        // If the tone mark is zero width, insert the dotted circle before, otherwise after
        let idx = font.glyphForCodePoint(code).advanceWidth === 0 ? i : i + 1;
        glyphs.splice(idx, 0, dottedCircle);
        i++;
    }
    return i;
}
var $d22b56f2cf15e5ba$exports = {};
$d22b56f2cf15e5ba$exports = JSON.parse('{"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,14,15,16,17],[0,0,0,18,19,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,28,29,30,31,32,33,0,34,0,0,35,36,0,0,37,0],[0,0,0,38,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,39,0,0,0,40,41,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,12,43,0,0,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,0,43,0,0,0,0],[0,0,0,45,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,50,0,0,51,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0],[0,0,0,53,54,55,56,57,58,0,59,0,0,60,61,0,0,62,0],[0,0,0,4,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,63,64,0,0,40,41,0,9,0,10,0,0,0,42,0,63,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,0,2,16,0],[0,0,0,18,65,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,0,0],[0,0,0,69,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,73,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,75,0,0,0,76,77,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,25,79,0,0,0,0],[0,0,0,18,19,20,74,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,81,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,86,0,0,87,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0],[0,0,0,18,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,89,90,0,0,76,77,0,23,0,24,0,0,0,78,0,89,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,0,0],[0,0,0,94,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,96,0,0,0,97,98,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,35,100,0,0,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,102,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,107,0,0,108,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,109,0,0,0,0,0,0,0,0],[0,0,0,28,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,110,111,0,0,97,98,0,33,0,34,0,0,0,99,0,110,0,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,0,0],[0,0,0,0,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,0,0,115,116,117,118,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,39,0,122,0,123,123,8,9,0,10,0,0,0,42,0,39,0,0],[0,124,64,0,0,0,0,0,0,0,0,0,0,0,0,0,124,0,0],[0,39,0,0,0,121,125,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,126,126,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,47,47,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,128,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,129,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,50,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0],[0,0,0,135,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,136,0,0,0,137,138,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,60,140,0,0,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,0,140,0,0,0,0],[0,0,0,142,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,147,0,0,148,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0],[0,0,0,53,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,150,151,0,0,137,138,0,58,0,59,0,0,0,139,0,150,0,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,0,0],[0,0,0,155,116,156,157,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,75,3,4,5,159,160,8,161,0,162,0,11,12,163,0,75,16,0],[0,0,0,0,0,40,164,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,0,165,0,0,0,0],[0,124,64,0,0,40,164,0,9,0,10,0,0,0,42,0,124,0,0],[0,0,0,0,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,167,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,168,0,0,0,0,0,0,0,0],[0,0,0,0,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,0,79,0,0,0,0],[0,0,0,169,170,171,172,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,75,0,176,0,177,177,22,23,0,24,0,0,0,78,0,75,0,0],[0,178,90,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0],[0,75,0,0,0,175,179,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,180,180,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,83,83,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,182,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,183,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,86,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,188,0,0,0,0,0,0,0,0],[0,0,0,189,170,190,191,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,76,193,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,0,194,0,0,0,0],[0,178,90,0,0,76,193,0,23,0,24,0,0,0,78,0,178,0,0],[0,0,0,0,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,195,196,197,198,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,96,0,202,0,203,203,32,33,0,34,0,0,0,99,0,96,0,0],[0,204,111,0,0,0,0,0,0,0,0,0,0,0,0,0,204,0,0],[0,96,0,0,0,201,205,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,206,206,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,104,104,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,208,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,209,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,107,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,0],[0,0,0,215,196,216,217,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,97,219,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,0,220,0,0,0,0],[0,204,111,0,0,97,219,0,33,0,34,0,0,0,99,0,204,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,223,0,0,0,40,224,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,119,225,0,0,0,0],[0,0,0,115,116,117,222,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,115,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,226,64,0,0,40,224,0,9,0,10,0,0,0,42,0,226,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,39,0,0,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,44,44,8,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,227,0,228,229,0,9,0,10,0,0,230,0,0,0,0,0],[0,39,0,122,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,231,231,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,131,131,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,234,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,235,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,0,0,240,241,242,243,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,136,0,247,0,248,248,57,58,0,59,0,0,0,139,0,136,0,0],[0,249,151,0,0,0,0,0,0,0,0,0,0,0,0,0,249,0,0],[0,136,0,0,0,246,250,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,251,251,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,144,144,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,253,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,254,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,147,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,259,0,0,0,0,0,0,0,0],[0,0,0,260,241,261,262,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,137,264,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,0,265,0,0,0,0],[0,249,151,0,0,137,264,0,58,0,59,0,0,0,139,0,249,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,158,225,0,0,0,0],[0,0,0,155,116,156,222,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,155,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,43,266,266,8,161,0,24,0,0,12,267,0,0,0,0],[0,75,0,176,43,268,268,269,161,0,24,0,0,0,267,0,75,0,0],[0,0,0,0,0,270,0,0,271,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,272,0,0,0,0,0,0,0,0],[0,273,274,0,0,40,41,0,9,0,10,0,0,0,42,0,273,0,0],[0,0,0,40,0,123,123,8,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,121,275,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,276,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,279,0,0,0,76,280,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,173,281,0,0,0,0],[0,0,0,169,170,171,278,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,169,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,282,90,0,0,76,280,0,23,0,24,0,0,0,78,0,282,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,75,0,0,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,80,80,22,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,283,0,284,285,0,23,0,24,0,0,286,0,0,0,0,0],[0,75,0,176,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,287,287,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,288,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,185,185,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,290,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,291,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,192,281,0,0,0,0],[0,0,0,189,170,190,278,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,189,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,76,0,177,177,22,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,175,296,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,299,0,0,0,97,300,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,199,301,0,0,0,0],[0,0,0,195,196,197,298,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,195,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,302,111,0,0,97,300,0,33,0,34,0,0,0,99,0,302,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,96,0,0,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,101,101,32,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,303,0,304,305,0,33,0,34,0,0,306,0,0,0,0,0],[0,96,0,202,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,307,307,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,211,211,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,310,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,311,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,218,301,0,0,0,0],[0,0,0,215,196,216,298,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,215,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,97,0,203,203,32,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,201,316,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,0,225,0,0,0,0],[0,0,0,317,318,319,320,8,9,0,10,0,0,321,322,0,0,16,0],[0,223,0,323,0,123,123,8,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,0,0,121,324,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,325,318,326,327,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,64,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,230,0,0,0,0,0],[0,0,0,227,0,228,121,0,9,0,10,0,0,230,0,0,0,0,0],[0,0,0,227,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0],[0,0,0,0,0,329,329,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,237,237,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,332,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,333,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,337,0,0,0,137,338,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,244,339,0,0,0,0],[0,0,0,240,241,242,336,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,240,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,340,151,0,0,137,338,0,58,0,59,0,0,0,139,0,340,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,136,0,0,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,141,141,57,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,341,0,342,343,0,58,0,59,0,0,344,0,0,0,0,0],[0,136,0,247,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,345,345,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,346,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,256,256,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,348,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,349,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,263,339,0,0,0,0],[0,0,0,260,241,261,336,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,260,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,137,0,248,248,57,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,246,354,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,126,126,8,23,0,0,0,0,0,0,0,0,0,0],[0,355,90,0,0,121,125,0,9,0,10,0,0,0,42,0,355,0,0],[0,0,0,0,0,356,356,269,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,357,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,270,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,363,0,0,0,0,0,0,0,0],[0,0,0,364,116,365,366,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,40,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,0,281,0,0,0,0],[0,0,0,369,370,371,372,22,23,0,24,0,0,373,374,0,0,27,0],[0,279,0,375,0,177,177,22,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,0,0,175,376,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,377,370,378,379,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,90,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,286,0,0,0,0,0],[0,0,0,283,0,284,175,0,23,0,24,0,0,286,0,0,0,0,0],[0,0,0,283,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,0,0],[0,0,0,0,0,381,381,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,382,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,293,293,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,384,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,385,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,76,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,0,301,0,0,0,0],[0,0,0,387,388,389,390,32,33,0,34,0,0,391,392,0,0,37,0],[0,299,0,393,0,203,203,32,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,0,0,201,394,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,395,388,396,397,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,111,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,306,0,0,0,0,0],[0,0,0,303,0,304,201,0,33,0,34,0,0,306,0,0,0,0,0],[0,0,0,303,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,0,0],[0,0,0,0,0,399,399,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,313,313,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,402,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,403,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,97,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,407,0,0,0,40,408,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,321,409,0,0,0,0],[0,0,0,317,318,319,406,8,9,0,10,0,0,321,322,0,0,16,0],[0,0,0,317,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,410,64,0,0,40,408,0,9,0,10,0,0,0,42,0,410,0,0],[0,223,0,0,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,323,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,328,409,0,0,0,0],[0,0,0,325,318,326,406,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,325,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0],[0,0,0,0,0,411,411,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,412,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,413,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,0,339,0,0,0,0],[0,0,0,414,415,416,417,57,58,0,59,0,0,418,419,0,0,62,0],[0,337,0,420,0,248,248,57,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,0,0,246,421,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,422,415,423,424,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,151,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,344,0,0,0,0,0],[0,0,0,341,0,342,246,0,58,0,59,0,0,344,0,0,0,0,0],[0,0,0,341,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,0,0],[0,0,0,0,0,426,426,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,427,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,351,351,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,429,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,430,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,137,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,432,116,433,434,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,0,0,180,180,269,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,359,359,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,437,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,438,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,443,274,0,0,0,0,0,0,0,0,0,0,0,0,0,443,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,367,225,0,0,0,0],[0,0,0,364,116,365,445,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,364,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,448,0,0,0,76,449,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,373,450,0,0,0,0],[0,0,0,369,370,371,447,22,23,0,24,0,0,373,374,0,0,27,0],[0,0,0,369,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,451,90,0,0,76,449,0,23,0,24,0,0,0,78,0,451,0,0],[0,279,0,0,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,375,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,380,450,0,0,0,0],[0,0,0,377,370,378,447,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,377,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0],[0,0,0,0,0,452,452,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,453,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,454,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,457,0,0,0,97,458,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,391,459,0,0,0,0],[0,0,0,387,388,389,456,32,33,0,34,0,0,391,392,0,0,37,0],[0,0,0,387,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,460,111,0,0,97,458,0,33,0,34,0,0,0,99,0,460,0,0],[0,299,0,0,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,393,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,398,459,0,0,0,0],[0,0,0,395,388,396,456,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,395,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0],[0,0,0,0,0,461,461,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,462,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,463,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,0,409,0,0,0,0],[0,0,0,464,465,466,467,8,9,0,10,0,0,468,469,0,0,16,0],[0,407,0,470,0,123,123,8,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,0,0,121,471,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,472,465,473,474,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,0,0,0,0,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,236,0,0],[0,0,0,0,0,0,476,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,479,0,0,0,137,480,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,418,481,0,0,0,0],[0,0,0,414,415,416,478,57,58,0,59,0,0,418,419,0,0,62,0],[0,0,0,414,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,482,151,0,0,137,480,0,58,0,59,0,0,0,139,0,482,0,0],[0,337,0,0,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,420,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,425,481,0,0,0,0],[0,0,0,422,415,423,478,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,422,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0],[0,0,0,0,0,483,483,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,484,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,485,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,435,225,0,0,0,0],[0,0,0,432,116,433,445,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,432,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,486,486,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,487,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,440,440,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,489,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,490,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,495,0,496,497,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,0,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,0,225,0,0,0,0],[0,0,0,0,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,0,450,0,0,0,0],[0,0,0,499,500,501,502,22,23,0,24,0,0,503,504,0,0,27,0],[0,448,0,505,0,177,177,22,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,0,0,175,506,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,507,500,508,509,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,0,0,0,0,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,292,0,0],[0,0,0,0,0,0,511,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,0,459,0,0,0,0],[0,0,0,512,513,514,515,32,33,0,34,0,0,516,517,0,0,37,0],[0,457,0,518,0,203,203,32,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,0,0,201,519,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,520,513,521,522,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,0,0,0,0,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,312,0,0],[0,0,0,0,0,0,524,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,527,0,0,0,40,528,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,468,529,0,0,0,0],[0,0,0,464,465,466,526,8,9,0,10,0,0,468,469,0,0,16,0],[0,0,0,464,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,530,64,0,0,40,528,0,9,0,10,0,0,0,42,0,530,0,0],[0,407,0,0,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,470,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,475,529,0,0,0,0],[0,0,0,472,465,473,526,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,472,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0],[0,0,0,0,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,0,481,0,0,0,0],[0,0,0,531,532,533,534,57,58,0,59,0,0,535,536,0,0,62,0],[0,479,0,537,0,248,248,57,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,0,0,246,538,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,539,532,540,541,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,0,0,0,0,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350,0,0],[0,0,0,0,0,0,543,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,358,0,0],[0,0,0,0,0,544,544,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,545,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,492,492,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,547,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,548,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,274,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,498,0,0,0,0,0],[0,0,0,495,0,496,368,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,495,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,553,0,0,0,76,554,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,503,555,0,0,0,0],[0,0,0,499,500,501,552,22,23,0,24,0,0,503,504,0,0,27,0],[0,0,0,499,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,556,90,0,0,76,554,0,23,0,24,0,0,0,78,0,556,0,0],[0,448,0,0,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,505,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,510,555,0,0,0,0],[0,0,0,507,500,508,552,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,507,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,559,0,0,0,97,560,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,516,561,0,0,0,0],[0,0,0,512,513,514,558,32,33,0,34,0,0,516,517,0,0,37,0],[0,0,0,512,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,562,111,0,0,97,560,0,33,0,34,0,0,0,99,0,562,0,0],[0,457,0,0,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,518,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,523,561,0,0,0,0],[0,0,0,520,513,521,558,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,520,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0],[0,0,0,0,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,0,529,0,0,0,0],[0,0,0,563,66,564,565,8,9,0,10,0,0,566,68,0,0,16,0],[0,527,0,567,0,123,123,8,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,0,0,121,568,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,569,66,570,571,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,575,0,0,0,137,576,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,535,577,0,0,0,0],[0,0,0,531,532,533,574,57,58,0,59,0,0,535,536,0,0,62,0],[0,0,0,531,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,578,151,0,0,137,576,0,58,0,59,0,0,0,139,0,578,0,0],[0,479,0,0,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,537,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,542,577,0,0,0,0],[0,0,0,539,532,540,574,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,539,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,137,0,0],[0,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,439,0,0],[0,0,0,0,0,579,579,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,580,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,581,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,0,555,0,0,0,0],[0,0,0,582,91,583,584,22,23,0,24,0,0,585,93,0,0,27,0],[0,553,0,586,0,177,177,22,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,0,0,175,587,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,588,91,589,590,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,0,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,0,561,0,0,0,0],[0,0,0,592,112,593,594,32,33,0,34,0,0,595,114,0,0,37,0],[0,559,0,596,0,203,203,32,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,0,0,201,597,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,598,112,599,600,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,566,165,0,0,0,0],[0,0,0,563,66,564,67,8,9,0,10,0,0,566,68,0,0,16,0],[0,0,0,563,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,527,0,0,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,567,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,572,165,0,0,0,0],[0,0,0,569,66,570,67,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,569,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,0,577,0,0,0,0],[0,0,0,603,152,604,605,57,58,0,59,0,0,606,154,0,0,62,0],[0,575,0,607,0,248,248,57,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,0,0,246,608,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,609,152,610,611,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,0,0,0,0,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,491,0,0],[0,0,0,0,0,0,613,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,585,194,0,0,0,0],[0,0,0,582,91,583,92,22,23,0,24,0,0,585,93,0,0,27,0],[0,0,0,582,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,553,0,0,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,586,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,591,194,0,0,0,0],[0,0,0,588,91,589,92,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,588,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,595,220,0,0,0,0],[0,0,0,592,112,593,113,32,33,0,34,0,0,595,114,0,0,37,0],[0,0,0,592,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,559,0,0,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,596,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,601,220,0,0,0,0],[0,0,0,598,112,599,113,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,598,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,606,265,0,0,0,0],[0,0,0,603,152,604,153,57,58,0,59,0,0,606,154,0,0,62,0],[0,0,0,603,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,575,0,0,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,607,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,612,265,0,0,0,0],[0,0,0,609,152,610,153,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,609,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,549,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0]],"accepting":[false,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,false,false,true,false,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,false,false,true,true,false,false,true,true,true,false,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,false,true,true,false,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,false,true,true,true,true,true,false,true,true,false,true,true,true],"tags":[[],["broken_cluster"],["consonant_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],[],["broken_cluster"],["symbol_cluster"],[],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["symbol_cluster"],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],[],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],[],[],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],["consonant_syllable"],["vowel_syllable"],["standalone_cluster"]]}');
var $79781f8c452881c2$exports = {};
$79781f8c452881c2$exports = JSON.parse('{"categories":["O","IND","S","GB","B","FM","CGJ","VMAbv","VMPst","VAbv","VPst","CMBlw","VPre","VBlw","H","VMBlw","CMAbv","MBlw","CS","R","SUB","MPst","MPre","FAbv","FPst","FBlw","SMAbv","SMBlw","VMPre","ZWNJ","ZWJ","WJ","VS","N","HN","MAbv"],"decompositions":{"2507":[2503,2494],"2508":[2503,2519],"2888":[2887,2902],"2891":[2887,2878],"2892":[2887,2903],"3018":[3014,3006],"3019":[3015,3006],"3020":[3014,3031],"3144":[3142,3158],"3264":[3263,3285],"3271":[3270,3285],"3272":[3270,3286],"3274":[3270,3266],"3275":[3270,3266,3285],"3402":[3398,3390],"3403":[3399,3390],"3404":[3398,3415],"3546":[3545,3530],"3548":[3545,3535],"3549":[3545,3535,3530],"3550":[3545,3551],"3635":[3661,3634],"3763":[3789,3762],"3955":[3953,3954],"3957":[3953,3956],"3958":[4018,3968],"3959":[4018,3953,3968],"3960":[4019,3968],"3961":[4019,3953,3968],"3969":[3953,3968],"6971":[6970,6965],"6973":[6972,6965],"6976":[6974,6965],"6977":[6975,6965],"6979":[6978,6965],"69934":[69937,69927],"69935":[69938,69927],"70475":[70471,70462],"70476":[70471,70487],"70843":[70841,70842],"70844":[70841,70832],"70846":[70841,70845],"71098":[71096,71087],"71099":[71097,71087]},"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,3,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,17,18,11,19,20,21,22,0,0,23,0,0,2,0,24,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,27,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,39,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,49,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,53,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0]],"accepting":[false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],"tags":[[],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["symbol_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["virama_terminated_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["number_joiner_terminated_cluster"],["standard_cluster"],["standard_cluster"],["numeral_cluster"]]}');
const $79e3b6f2c331d0bf$export$a513ea61a7bee91c = {
    X: 1,
    C: 2,
    V: 4,
    N: 8,
    H: 16,
    ZWNJ: 32,
    ZWJ: 64,
    M: 128,
    SM: 256,
    VD: 512,
    A: 1024,
    Placeholder: 2048,
    Dotted_Circle: 4096,
    RS: 8192,
    Coeng: 16384,
    Repha: 32768,
    Ra: 65536,
    CM: 131072,
    Symbol: 262144 // Avagraha, etc that take marks (SM,A,VD).
};
const $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0 = {
    Start: 1,
    Ra_To_Become_Reph: 2,
    Pre_M: 4,
    Pre_C: 8,
    Base_C: 16,
    After_Main: 32,
    Above_C: 64,
    Before_Sub: 128,
    Below_C: 256,
    After_Sub: 512,
    Before_Post: 1024,
    Post_C: 2048,
    After_Post: 4096,
    Final_C: 8192,
    SMVD: 16384,
    End: 32768
};
const $79e3b6f2c331d0bf$export$8519deaa7de2b07 = $79e3b6f2c331d0bf$export$a513ea61a7bee91c.C | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Ra | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.CM | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.V | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Placeholder | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Dotted_Circle;
const $79e3b6f2c331d0bf$export$bbcd928767338e0d = $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWJ | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWNJ;
const $79e3b6f2c331d0bf$export$ca9599b2a300afc = $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Coeng;
const $79e3b6f2c331d0bf$export$e99d119da76a0fc5 = {
    Default: {
        hasOldSpec: false,
        virama: 0,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Devanagari: {
        hasOldSpec: true,
        virama: 0x094D,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Bengali: {
        hasOldSpec: true,
        virama: 0x09CD,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Sub,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Gurmukhi: {
        hasOldSpec: true,
        virama: 0x0A4D,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Before_Sub,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Gujarati: {
        hasOldSpec: true,
        virama: 0x0ACD,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Oriya: {
        hasOldSpec: true,
        virama: 0x0B4D,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Main,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Tamil: {
        hasOldSpec: true,
        virama: 0x0BCD,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post"
    },
    Telugu: {
        hasOldSpec: true,
        virama: 0x0C4D,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Post,
        rephMode: "Explicit",
        blwfMode: "Post_Only"
    },
    Kannada: {
        hasOldSpec: true,
        virama: 0x0CCD,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Post,
        rephMode: "Implicit",
        blwfMode: "Post_Only"
    },
    Malayalam: {
        hasOldSpec: true,
        virama: 0x0D4D,
        basePos: "Last",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Main,
        rephMode: "Log_Repha",
        blwfMode: "Pre_And_Post"
    },
    // Handled by UniversalShaper
    // Sinhala: {
    //   hasOldSpec: false,
    //   virama: 0x0DCA,
    //   basePos: 'Last_Sinhala',
    //   rephPos: POSITIONS.After_Main,
    //   rephMode: 'Explicit',
    //   blwfMode: 'Pre_And_Post'
    // },
    Khmer: {
        hasOldSpec: false,
        virama: 0x17D2,
        basePos: "First",
        rephPos: $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Ra_To_Become_Reph,
        rephMode: "Vis_Repha",
        blwfMode: "Pre_And_Post"
    }
};
const $79e3b6f2c331d0bf$export$f647c9cfdd77d95a = {
    // Khmer
    0x17BE: [
        0x17C1,
        0x17BE
    ],
    0x17BF: [
        0x17C1,
        0x17BF
    ],
    0x17C0: [
        0x17C1,
        0x17C0
    ],
    0x17C4: [
        0x17C1,
        0x17C4
    ],
    0x17C5: [
        0x17C1,
        0x17C5
    ]
};
const { decompositions: $d203e6b9523d0071$var$decompositions } = /*@__PURE__*/ $parcel$interopDefault($79781f8c452881c2$exports);
const $d203e6b9523d0071$var$trie = new ($parcel$interopDefault($gfJaN$unicodetrie))($66a5b9fb5318558a$export$94fdf11bafc8de6b("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"));
const $d203e6b9523d0071$var$stateMachine = new ($parcel$interopDefault($gfJaN$dfa))(/*@__PURE__*/ $parcel$interopDefault($d22b56f2cf15e5ba$exports));
class $d203e6b9523d0071$export$2e2bcd8739ae039 extends $d28fb665ee343afc$export$2e2bcd8739ae039 {
    static planFeatures(plan) {
        plan.addStage($d203e6b9523d0071$var$setupSyllables);
        plan.addStage([
            "locl",
            "ccmp"
        ]);
        plan.addStage($d203e6b9523d0071$var$initialReordering);
        plan.addStage("nukt");
        plan.addStage("akhn");
        plan.addStage("rphf", false);
        plan.addStage("rkrf");
        plan.addStage("pref", false);
        plan.addStage("blwf", false);
        plan.addStage("abvf", false);
        plan.addStage("half", false);
        plan.addStage("pstf", false);
        plan.addStage("vatu");
        plan.addStage("cjct");
        plan.addStage("cfar", false);
        plan.addStage($d203e6b9523d0071$var$finalReordering);
        plan.addStage({
            local: [
                "init"
            ],
            global: [
                "pres",
                "abvs",
                "blws",
                "psts",
                "haln",
                "dist",
                "abvm",
                "blwm",
                "calt",
                "clig"
            ]
        });
        // Setup the indic config for the selected script
        plan.unicodeScript = $e38a1a895f6aeb54$export$ce50e82f12a827a4(plan.script);
        plan.indicConfig = $79e3b6f2c331d0bf$export$e99d119da76a0fc5[plan.unicodeScript] || $79e3b6f2c331d0bf$export$e99d119da76a0fc5.Default;
        plan.isOldSpec = plan.indicConfig.hasOldSpec && plan.script[plan.script.length - 1] !== "2";
    // TODO: turn off kern (Khmer) and liga features.
    }
    static assignFeatures(plan, glyphs) {
        // Decompose split matras
        // TODO: do this in a more general unicode normalizer
        for(let i = glyphs.length - 1; i >= 0; i--){
            let codepoint = glyphs[i].codePoints[0];
            let d = $79e3b6f2c331d0bf$export$f647c9cfdd77d95a[codepoint] || $d203e6b9523d0071$var$decompositions[codepoint];
            if (d) {
                let decomposed = d.map((c)=>{
                    let g = plan.font.glyphForCodePoint(c);
                    return new $f22bb23c9fd478d8$export$2e2bcd8739ae039(plan.font, g.id, [
                        c
                    ], glyphs[i].features);
                });
                glyphs.splice(i, 1, ...decomposed);
            }
        }
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)($d203e6b9523d0071$export$2e2bcd8739ae039, "zeroMarkWidths", "NONE");
function $d203e6b9523d0071$var$indicCategory(glyph) {
    return $d203e6b9523d0071$var$trie.get(glyph.codePoints[0]) >> 8;
}
function $d203e6b9523d0071$var$indicPosition(glyph) {
    return 1 << ($d203e6b9523d0071$var$trie.get(glyph.codePoints[0]) & 0xff);
}
class $d203e6b9523d0071$var$IndicInfo {
    constructor(category, position, syllableType, syllable){
        this.category = category;
        this.position = position;
        this.syllableType = syllableType;
        this.syllable = syllable;
    }
}
function $d203e6b9523d0071$var$setupSyllables(font, glyphs) {
    let syllable = 0;
    let last = 0;
    for (let [start, end, tags] of $d203e6b9523d0071$var$stateMachine.match(glyphs.map($d203e6b9523d0071$var$indicCategory))){
        if (start > last) {
            ++syllable;
            for(let i = last; i < start; i++)glyphs[i].shaperInfo = new $d203e6b9523d0071$var$IndicInfo($79e3b6f2c331d0bf$export$a513ea61a7bee91c.X, $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.End, "non_indic_cluster", syllable);
        }
        ++syllable;
        // Create shaper info
        for(let i = start; i <= end; i++)glyphs[i].shaperInfo = new $d203e6b9523d0071$var$IndicInfo(1 << $d203e6b9523d0071$var$indicCategory(glyphs[i]), $d203e6b9523d0071$var$indicPosition(glyphs[i]), tags[0], syllable);
        last = end + 1;
    }
    if (last < glyphs.length) {
        ++syllable;
        for(let i = last; i < glyphs.length; i++)glyphs[i].shaperInfo = new $d203e6b9523d0071$var$IndicInfo($79e3b6f2c331d0bf$export$a513ea61a7bee91c.X, $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.End, "non_indic_cluster", syllable);
    }
}
function $d203e6b9523d0071$var$isConsonant(glyph) {
    return glyph.shaperInfo.category & $79e3b6f2c331d0bf$export$8519deaa7de2b07;
}
function $d203e6b9523d0071$var$isJoiner(glyph) {
    return glyph.shaperInfo.category & $79e3b6f2c331d0bf$export$bbcd928767338e0d;
}
function $d203e6b9523d0071$var$isHalantOrCoeng(glyph) {
    return glyph.shaperInfo.category & $79e3b6f2c331d0bf$export$ca9599b2a300afc;
}
function $d203e6b9523d0071$var$wouldSubstitute(glyphs, feature) {
    for (let glyph of glyphs)glyph.features = {
        [feature]: true
    };
    let GSUB = glyphs[0]._font._layoutEngine.engine.GSUBProcessor;
    GSUB.applyFeatures([
        feature
    ], glyphs);
    return glyphs.length === 1;
}
function $d203e6b9523d0071$var$consonantPosition(font, consonant, virama) {
    let glyphs = [
        virama,
        consonant,
        virama
    ];
    if ($d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(0, 2), "blwf") || $d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(1, 3), "blwf")) return $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Below_C;
    else if ($d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(0, 2), "pstf") || $d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(1, 3), "pstf")) return $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Post_C;
    else if ($d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(0, 2), "pref") || $d203e6b9523d0071$var$wouldSubstitute(glyphs.slice(1, 3), "pref")) return $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Post_C;
    return $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C;
}
function $d203e6b9523d0071$var$initialReordering(font, glyphs, plan) {
    let indicConfig = plan.indicConfig;
    let features = font._layoutEngine.engine.GSUBProcessor.features;
    let dottedCircle = font.glyphForCodePoint(0x25cc).id;
    let virama = font.glyphForCodePoint(indicConfig.virama).id;
    if (virama) {
        let info = new $f22bb23c9fd478d8$export$2e2bcd8739ae039(font, virama, [
            indicConfig.virama
        ]);
        for(let i = 0; i < glyphs.length; i++)if (glyphs[i].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C) glyphs[i].shaperInfo.position = $d203e6b9523d0071$var$consonantPosition(font, glyphs[i].copy(), info);
    }
    for(let start = 0, end = $d203e6b9523d0071$var$nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = $d203e6b9523d0071$var$nextSyllable(glyphs, start)){
        let { category: category, syllableType: syllableType } = glyphs[start].shaperInfo;
        if (syllableType === "symbol_cluster" || syllableType === "non_indic_cluster") continue;
        if (syllableType === "broken_cluster" && dottedCircle) {
            let g = new $f22bb23c9fd478d8$export$2e2bcd8739ae039(font, dottedCircle, [
                0x25cc
            ]);
            g.shaperInfo = new $d203e6b9523d0071$var$IndicInfo(1 << $d203e6b9523d0071$var$indicCategory(g), $d203e6b9523d0071$var$indicPosition(g), glyphs[start].shaperInfo.syllableType, glyphs[start].shaperInfo.syllable);
            // Insert after possible Repha.
            let i = start;
            while(i < end && glyphs[i].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Repha)i++;
            glyphs.splice(i++, 0, g);
            end++;
        }
        // 1. Find base consonant:
        //
        // The shaping engine finds the base consonant of the syllable, using the
        // following algorithm: starting from the end of the syllable, move backwards
        // until a consonant is found that does not have a below-base or post-base
        // form (post-base forms have to follow below-base forms), or that is not a
        // pre-base reordering Ra, or arrive at the first consonant. The consonant
        // stopped at will be the base.
        let base = end;
        let limit = start;
        let hasReph = false;
        // If the syllable starts with Ra + Halant (in a script that has Reph)
        // and has more than one consonant, Ra is excluded from candidates for
        // base consonants.
        if (indicConfig.rephPos !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Ra_To_Become_Reph && features.rphf && start + 3 <= end && (indicConfig.rephMode === "Implicit" && !$d203e6b9523d0071$var$isJoiner(glyphs[start + 2]) || indicConfig.rephMode === "Explicit" && glyphs[start + 2].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWJ)) {
            // See if it matches the 'rphf' feature.
            let g = [
                glyphs[start].copy(),
                glyphs[start + 1].copy(),
                glyphs[start + 2].copy()
            ];
            if ($d203e6b9523d0071$var$wouldSubstitute(g.slice(0, 2), "rphf") || indicConfig.rephMode === "Explicit" && $d203e6b9523d0071$var$wouldSubstitute(g, "rphf")) {
                limit += 2;
                while(limit < end && $d203e6b9523d0071$var$isJoiner(glyphs[limit]))limit++;
                base = start;
                hasReph = true;
            }
        } else if (indicConfig.rephMode === "Log_Repha" && glyphs[start].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Repha) {
            limit++;
            while(limit < end && $d203e6b9523d0071$var$isJoiner(glyphs[limit]))limit++;
            base = start;
            hasReph = true;
        }
        switch(indicConfig.basePos){
            case "Last":
                {
                    // starting from the end of the syllable, move backwards
                    let i = end;
                    let seenBelow = false;
                    do {
                        let info = glyphs[--i].shaperInfo;
                        // until a consonant is found
                        if ($d203e6b9523d0071$var$isConsonant(glyphs[i])) {
                            // that does not have a below-base or post-base form
                            // (post-base forms have to follow below-base forms),
                            if (info.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Below_C && (info.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Post_C || seenBelow)) {
                                base = i;
                                break;
                            }
                            // or that is not a pre-base reordering Ra,
                            //
                            // IMPLEMENTATION NOTES:
                            //
                            // Our pre-base reordering Ra's are marked POS_POST_C, so will be skipped
                            // by the logic above already.
                            //
                            // or arrive at the first consonant. The consonant stopped at will
                            // be the base.
                            if (info.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Below_C) seenBelow = true;
                            base = i;
                        } else if (start < i && info.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWJ && glyphs[i - 1].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H) break;
                    }while (i > limit);
                    break;
                }
            case "First":
                // The first consonant is always the base.
                base = start;
                // Mark all subsequent consonants as below.
                for(let i = base + 1; i < end; i++)if ($d203e6b9523d0071$var$isConsonant(glyphs[i])) glyphs[i].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Below_C;
        }
        // If the syllable starts with Ra + Halant (in a script that has Reph)
        // and has more than one consonant, Ra is excluded from candidates for
        // base consonants.
        //
        //  Only do this for unforced Reph. (ie. not for Ra,H,ZWJ)
        if (hasReph && base === start && limit - base <= 2) hasReph = false;
        // 2. Decompose and reorder Matras:
        //
        // Each matra and any syllable modifier sign in the cluster are moved to the
        // appropriate position relative to the consonant(s) in the cluster. The
        // shaping engine decomposes two- or three-part matras into their constituent
        // parts before any repositioning. Matra characters are classified by which
        // consonant in a conjunct they have affinity for and are reordered to the
        // following positions:
        //
        //   o Before first half form in the syllable
        //   o After subjoined consonants
        //   o After post-form consonant
        //   o After main consonant (for above marks)
        //
        // IMPLEMENTATION NOTES:
        //
        // The normalize() routine has already decomposed matras for us, so we don't
        // need to worry about that.
        // 3.  Reorder marks to canonical order:
        //
        // Adjacent nukta and halant or nukta and vedic sign are always repositioned
        // if necessary, so that the nukta is first.
        //
        // IMPLEMENTATION NOTES:
        //
        // We don't need to do this: the normalize() routine already did this for us.
        // Reorder characters
        for(let i1 = start; i1 < base; i1++){
            let info = glyphs[i1].shaperInfo;
            info.position = Math.min($79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_C, info.position);
        }
        if (base < end) glyphs[base].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C;
        // Mark final consonants.  A final consonant is one appearing after a matra,
        // like in Khmer.
        for(let i2 = base + 1; i2 < end; i2++)if (glyphs[i2].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.M) {
            for(let j = i2 + 1; j < end; j++)if ($d203e6b9523d0071$var$isConsonant(glyphs[j])) {
                glyphs[j].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Final_C;
                break;
            }
            break;
        }
        // Handle beginning Ra
        if (hasReph) glyphs[start].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Ra_To_Become_Reph;
        // For old-style Indic script tags, move the first post-base Halant after
        // last consonant.
        //
        // Reports suggest that in some scripts Uniscribe does this only if there
        // is *not* a Halant after last consonant already (eg. Kannada), while it
        // does it unconditionally in other scripts (eg. Malayalam).  We don't
        // currently know about other scripts, so we single out Malayalam for now.
        //
        // Kannada test case:
        // U+0C9A,U+0CCD,U+0C9A,U+0CCD
        // With some versions of Lohit Kannada.
        // https://bugs.freedesktop.org/show_bug.cgi?id=59118
        //
        // Malayalam test case:
        // U+0D38,U+0D4D,U+0D31,U+0D4D,U+0D31,U+0D4D
        // With lohit-ttf-20121122/Lohit-Malayalam.ttf
        if (plan.isOldSpec) {
            let disallowDoubleHalants = plan.unicodeScript !== "Malayalam";
            for(let i = base + 1; i < end; i++)if (glyphs[i].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H) {
                let j;
                for(j = end - 1; j > i; j--){
                    if ($d203e6b9523d0071$var$isConsonant(glyphs[j]) || disallowDoubleHalants && glyphs[j].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H) break;
                }
                if (glyphs[j].shaperInfo.category !== $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H && j > i) {
                    // Move Halant to after last consonant.
                    let t = glyphs[i];
                    glyphs.splice(i, 0, ...glyphs.splice(i + 1, j - i));
                    glyphs[j] = t;
                }
                break;
            }
        }
        // Attach misc marks to previous char to move with them.
        let lastPos = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Start;
        for(let i3 = start; i3 < end; i3++){
            let info = glyphs[i3].shaperInfo;
            if (info.category & ($79e3b6f2c331d0bf$export$bbcd928767338e0d | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.N | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.RS | $79e3b6f2c331d0bf$export$a513ea61a7bee91c.CM | $79e3b6f2c331d0bf$export$ca9599b2a300afc & info.category)) {
                info.position = lastPos;
                if (info.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H && info.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M) {
                    // Uniscribe doesn't move the Halant with Left Matra.
                    // TEST: U+092B,U+093F,U+094DE
                    // We follow.  This is important for the Sinhala
                    // U+0DDA split matra since it decomposes to U+0DD9,U+0DCA
                    // where U+0DD9 is a left matra and U+0DCA is the virama.
                    // We don't want to move the virama with the left matra.
                    // TEST: U+0D9A,U+0DDA
                    for(let j = i3; j > start; j--)if (glyphs[j - 1].shaperInfo.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M) {
                        info.position = glyphs[j - 1].shaperInfo.position;
                        break;
                    }
                }
            } else if (info.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.SMVD) lastPos = info.position;
        }
        // For post-base consonants let them own anything before them
        // since the last consonant or matra.
        let last = base;
        for(let i4 = base + 1; i4 < end; i4++){
            if ($d203e6b9523d0071$var$isConsonant(glyphs[i4])) {
                for(let j = last + 1; j < i4; j++)if (glyphs[j].shaperInfo.position < $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.SMVD) glyphs[j].shaperInfo.position = glyphs[i4].shaperInfo.position;
                last = i4;
            } else if (glyphs[i4].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.M) last = i4;
        }
        let arr = glyphs.slice(start, end);
        arr.sort((a, b)=>a.shaperInfo.position - b.shaperInfo.position);
        glyphs.splice(start, arr.length, ...arr);
        // Find base again
        for(let i5 = start; i5 < end; i5++)if (glyphs[i5].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C) {
            base = i5;
            break;
        }
        // Setup features now
        // Reph
        for(let i6 = start; i6 < end && glyphs[i6].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Ra_To_Become_Reph; i6++)glyphs[i6].features.rphf = true;
        // Pre-base
        let blwf = !plan.isOldSpec && indicConfig.blwfMode === "Pre_And_Post";
        for(let i7 = start; i7 < base; i7++){
            glyphs[i7].features.half = true;
            if (blwf) glyphs[i7].features.blwf = true;
        }
        // Post-base
        for(let i8 = base + 1; i8 < end; i8++){
            glyphs[i8].features.abvf = true;
            glyphs[i8].features.pstf = true;
            glyphs[i8].features.blwf = true;
        }
        if (plan.isOldSpec && plan.unicodeScript === "Devanagari") {
            // Old-spec eye-lash Ra needs special handling.  From the
            // spec:
            //
            // "The feature 'below-base form' is applied to consonants
            // having below-base forms and following the base consonant.
            // The exception is vattu, which may appear below half forms
            // as well as below the base glyph. The feature 'below-base
            // form' will be applied to all such occurrences of Ra as well."
            //
            // Test case: U+0924,U+094D,U+0930,U+094d,U+0915
            // with Sanskrit 2003 font.
            //
            // However, note that Ra,Halant,ZWJ is the correct way to
            // request eyelash form of Ra, so we wouldbn't inhibit it
            // in that sequence.
            //
            // Test case: U+0924,U+094D,U+0930,U+094d,U+200D,U+0915
            for(let i = start; i + 1 < base; i++)if (glyphs[i].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Ra && glyphs[i + 1].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.H && (i + 1 === base || glyphs[i + 2].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWJ)) {
                glyphs[i].features.blwf = true;
                glyphs[i + 1].features.blwf = true;
            }
        }
        let prefLen = 2;
        if (features.pref && base + prefLen < end) for(let i9 = base + 1; i9 + prefLen - 1 < end; i9++){
            let g = [
                glyphs[i9].copy(),
                glyphs[i9 + 1].copy()
            ];
            if ($d203e6b9523d0071$var$wouldSubstitute(g, "pref")) {
                for(let j = 0; j < prefLen; j++)glyphs[i9++].features.pref = true;
                // Mark the subsequent stuff with 'cfar'.  Used in Khmer.
                // Read the feature spec.
                // This allows distinguishing the following cases with MS Khmer fonts:
                // U+1784,U+17D2,U+179A,U+17D2,U+1782
                // U+1784,U+17D2,U+1782,U+17D2,U+179A
                if (features.cfar) for(; i9 < end; i9++)glyphs[i9].features.cfar = true;
                break;
            }
        }
        // Apply ZWJ/ZWNJ effects
        for(let i10 = start + 1; i10 < end; i10++)if ($d203e6b9523d0071$var$isJoiner(glyphs[i10])) {
            let nonJoiner = glyphs[i10].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWNJ;
            let j = i10;
            do {
                j--;
                // ZWJ/ZWNJ should disable CJCT.  They do that by simply
                // being there, since we don't skip them for the CJCT
                // feature (ie. F_MANUAL_ZWJ)
                // A ZWNJ disables HALF.
                if (nonJoiner) delete glyphs[j].features.half;
            }while (j > start && !$d203e6b9523d0071$var$isConsonant(glyphs[j]));
        }
    }
}
function $d203e6b9523d0071$var$finalReordering(font, glyphs, plan) {
    let indicConfig = plan.indicConfig;
    let features = font._layoutEngine.engine.GSUBProcessor.features;
    for(let start = 0, end = $d203e6b9523d0071$var$nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = $d203e6b9523d0071$var$nextSyllable(glyphs, start)){
        // 4. Final reordering:
        //
        // After the localized forms and basic shaping forms GSUB features have been
        // applied (see below), the shaping engine performs some final glyph
        // reordering before applying all the remaining font features to the entire
        // cluster.
        let tryPref = !!features.pref;
        // Find base again
        let base = start;
        for(; base < end; base++)if (glyphs[base].shaperInfo.position >= $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C) {
            if (tryPref && base + 1 < end) {
                for(let i = base + 1; i < end; i++)if (glyphs[i].features.pref) {
                    if (!(glyphs[i].substituted && glyphs[i].isLigated && !glyphs[i].isMultiplied)) {
                        // Ok, this was a 'pref' candidate but didn't form any.
                        // Base is around here...
                        base = i;
                        while(base < end && $d203e6b9523d0071$var$isHalantOrCoeng(glyphs[base]))base++;
                        glyphs[base].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.BASE_C;
                        tryPref = false;
                    }
                    break;
                }
            }
            // For Malayalam, skip over unformed below- (but NOT post-) forms.
            if (plan.unicodeScript === "Malayalam") for(let i = base + 1; i < end; i++){
                while(i < end && $d203e6b9523d0071$var$isJoiner(glyphs[i]))i++;
                if (i === end || !$d203e6b9523d0071$var$isHalantOrCoeng(glyphs[i])) break;
                i++; // Skip halant.
                while(i < end && $d203e6b9523d0071$var$isJoiner(glyphs[i]))i++;
                if (i < end && $d203e6b9523d0071$var$isConsonant(glyphs[i]) && glyphs[i].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Below_C) {
                    base = i;
                    glyphs[base].shaperInfo.position = $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C;
                }
            }
            if (start < base && glyphs[base].shaperInfo.position > $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Base_C) base--;
            break;
        }
        if (base === end && start < base && glyphs[base - 1].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.ZWJ) base--;
        if (base < end) while(start < base && glyphs[base].shaperInfo.category & ($79e3b6f2c331d0bf$export$a513ea61a7bee91c.N | $79e3b6f2c331d0bf$export$ca9599b2a300afc))base--;
        // o Reorder matras:
        //
        // If a pre-base matra character had been reordered before applying basic
        // features, the glyph can be moved closer to the main consonant based on
        // whether half-forms had been formed. Actual position for the matra is
        // defined as “after last standalone halant glyph, after initial matra
        // position and before the main consonant”. If ZWJ or ZWNJ follow this
        // halant, position is moved after it.
        //
        if (start + 1 < end && start < base) {
            // If we lost track of base, alas, position before last thingy.
            let newPos = base === end ? base - 2 : base - 1;
            // Malayalam / Tamil do not have "half" forms or explicit virama forms.
            // The glyphs formed by 'half' are Chillus or ligated explicit viramas.
            // We want to position matra after them.
            if (plan.unicodeScript !== "Malayalam" && plan.unicodeScript !== "Tamil") {
                while(newPos > start && !(glyphs[newPos].shaperInfo.category & ($79e3b6f2c331d0bf$export$a513ea61a7bee91c.M | $79e3b6f2c331d0bf$export$ca9599b2a300afc)))newPos--;
                // If we found no Halant we are done.
                // Otherwise only proceed if the Halant does
                // not belong to the Matra itself!
                if ($d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newPos]) && glyphs[newPos].shaperInfo.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M) {
                    if (newPos + 1 < end && $d203e6b9523d0071$var$isJoiner(glyphs[newPos + 1])) newPos++;
                } else newPos = start; // No move.
            }
            if (start < newPos && glyphs[newPos].shaperInfo.position !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M) {
                // Now go see if there's actually any matras...
                for(let i = newPos; i > start; i--)if (glyphs[i - 1].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M) {
                    let oldPos = i - 1;
                    if (oldPos < base && base <= newPos) base--;
                    let tmp = glyphs[oldPos];
                    glyphs.splice(oldPos, 0, ...glyphs.splice(oldPos + 1, newPos - oldPos));
                    glyphs[newPos] = tmp;
                    newPos--;
                }
            }
        }
        // o Reorder reph:
        //
        // Reph’s original position is always at the beginning of the syllable,
        // (i.e. it is not reordered at the character reordering stage). However,
        // it will be reordered according to the basic-forms shaping results.
        // Possible positions for reph, depending on the script, are; after main,
        // before post-base consonant forms, and after post-base consonant forms.
        // Two cases:
        //
        // - If repha is encoded as a sequence of characters (Ra,H or Ra,H,ZWJ), then
        //   we should only move it if the sequence ligated to the repha form.
        //
        // - If repha is encoded separately and in the logical position, we should only
        //   move it if it did NOT ligate.  If it ligated, it's probably the font trying
        //   to make it work without the reordering.
        if (start + 1 < end && glyphs[start].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Ra_To_Become_Reph && glyphs[start].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.Repha !== (glyphs[start].isLigated && !glyphs[start].isMultiplied)) {
            let newRephPos;
            let rephPos = indicConfig.rephPos;
            let found = false;
            // 1. If reph should be positioned after post-base consonant forms,
            //    proceed to step 5.
            if (rephPos !== $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Post) {
                //  2. If the reph repositioning class is not after post-base: target
                //     position is after the first explicit halant glyph between the
                //     first post-reph consonant and last main consonant. If ZWJ or ZWNJ
                //     are following this halant, position is moved after it. If such
                //     position is found, this is the target position. Otherwise,
                //     proceed to the next step.
                //
                //     Note: in old-implementation fonts, where classifications were
                //     fixed in shaping engine, there was no case where reph position
                //     will be found on this step.
                newRephPos = start + 1;
                while(newRephPos < base && !$d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newRephPos]))newRephPos++;
                if (newRephPos < base && $d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newRephPos])) {
                    // ->If ZWJ or ZWNJ are following this halant, position is moved after it.
                    if (newRephPos + 1 < base && $d203e6b9523d0071$var$isJoiner(glyphs[newRephPos + 1])) newRephPos++;
                    found = true;
                }
                // 3. If reph should be repositioned after the main consonant: find the
                //    first consonant not ligated with main, or find the first
                //    consonant that is not a potential pre-base reordering Ra.
                if (!found && rephPos === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Main) {
                    newRephPos = base;
                    while(newRephPos + 1 < end && glyphs[newRephPos + 1].shaperInfo.position <= $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Main)newRephPos++;
                    found = newRephPos < end;
                }
                // 4. If reph should be positioned before post-base consonant, find
                //    first post-base classified consonant not ligated with main. If no
                //    consonant is found, the target position should be before the
                //    first matra, syllable modifier sign or vedic sign.
                //
                // This is our take on what step 4 is trying to say (and failing, BADLY).
                if (!found && rephPos === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Sub) {
                    newRephPos = base;
                    while(newRephPos + 1 < end && !(glyphs[newRephPos + 1].shaperInfo.position & ($79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Post_C | $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.After_Post | $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.SMVD)))newRephPos++;
                    found = newRephPos < end;
                }
            }
            //  5. If no consonant is found in steps 3 or 4, move reph to a position
            //     immediately before the first post-base matra, syllable modifier
            //     sign or vedic sign that has a reordering class after the intended
            //     reph position. For example, if the reordering position for reph
            //     is post-main, it will skip above-base matras that also have a
            //     post-main position.
            if (!found) {
                // Copied from step 2.
                newRephPos = start + 1;
                while(newRephPos < base && !$d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newRephPos]))newRephPos++;
                if (newRephPos < base && $d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newRephPos])) {
                    // ->If ZWJ or ZWNJ are following this halant, position is moved after it.
                    if (newRephPos + 1 < base && $d203e6b9523d0071$var$isJoiner(glyphs[newRephPos + 1])) newRephPos++;
                    found = true;
                }
            }
            // 6. Otherwise, reorder reph to the end of the syllable.
            if (!found) {
                newRephPos = end - 1;
                while(newRephPos > start && glyphs[newRephPos].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.SMVD)newRephPos--;
                // If the Reph is to be ending up after a Matra,Halant sequence,
                // position it before that Halant so it can interact with the Matra.
                // However, if it's a plain Consonant,Halant we shouldn't do that.
                // Uniscribe doesn't do this.
                // TEST: U+0930,U+094D,U+0915,U+094B,U+094D
                if ($d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newRephPos])) {
                    for(let i = base + 1; i < newRephPos; i++)if (glyphs[i].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.M) newRephPos--;
                }
            }
            let reph = glyphs[start];
            glyphs.splice(start, 0, ...glyphs.splice(start + 1, newRephPos - start));
            glyphs[newRephPos] = reph;
            if (start < base && base <= newRephPos) base--;
        }
        // o Reorder pre-base reordering consonants:
        //
        // If a pre-base reordering consonant is found, reorder it according to
        // the following rules:
        if (tryPref && base + 1 < end) {
            for(let i = base + 1; i < end; i++)if (glyphs[i].features.pref) {
                // 1. Only reorder a glyph produced by substitution during application
                //    of the <pref> feature. (Note that a font may shape a Ra consonant with
                //    the feature generally but block it in certain contexts.)
                // Note: We just check that something got substituted.  We don't check that
                // the <pref> feature actually did it...
                //
                // Reorder pref only if it ligated.
                if (glyphs[i].isLigated && !glyphs[i].isMultiplied) {
                    // 2. Try to find a target position the same way as for pre-base matra.
                    //    If it is found, reorder pre-base consonant glyph.
                    //
                    // 3. If position is not found, reorder immediately before main
                    //    consonant.
                    let newPos = base;
                    // Malayalam / Tamil do not have "half" forms or explicit virama forms.
                    // The glyphs formed by 'half' are Chillus or ligated explicit viramas.
                    // We want to position matra after them.
                    if (plan.unicodeScript !== "Malayalam" && plan.unicodeScript !== "Tamil") {
                        while(newPos > start && !(glyphs[newPos - 1].shaperInfo.category & ($79e3b6f2c331d0bf$export$a513ea61a7bee91c.M | $79e3b6f2c331d0bf$export$ca9599b2a300afc)))newPos--;
                        // In Khmer coeng model, a H,Ra can go *after* matras.  If it goes after a
                        // split matra, it should be reordered to *before* the left part of such matra.
                        if (newPos > start && glyphs[newPos - 1].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.M) {
                            let oldPos = i;
                            for(let j = base + 1; j < oldPos; j++)if (glyphs[j].shaperInfo.category === $79e3b6f2c331d0bf$export$a513ea61a7bee91c.M) {
                                newPos--;
                                break;
                            }
                        }
                    }
                    if (newPos > start && $d203e6b9523d0071$var$isHalantOrCoeng(glyphs[newPos - 1])) {
                        if (newPos < end && $d203e6b9523d0071$var$isJoiner(glyphs[newPos])) newPos++;
                    }
                    let oldPos = i;
                    let tmp = glyphs[oldPos];
                    glyphs.splice(newPos + 1, 0, ...glyphs.splice(newPos, oldPos - newPos));
                    glyphs[newPos] = tmp;
                    if (newPos <= base && base < oldPos) base++;
                }
                break;
            }
        }
        // Apply 'init' to the Left Matra if it's a word start.
        if (glyphs[start].shaperInfo.position === $79e3b6f2c331d0bf$export$1a1f61c9c4dd9df0.Pre_M && (!start || !/Cf|Mn/.test((0, $gfJaN$unicodeproperties.getCategory)(glyphs[start - 1].codePoints[0])))) glyphs[start].features.init = true;
    }
}
function $d203e6b9523d0071$var$nextSyllable(glyphs, start) {
    if (start >= glyphs.length) return start;
    let syllable = glyphs[start].shaperInfo.syllable;
    while(++start < glyphs.length && glyphs[start].shaperInfo.syllable === syllable);
    return start;
}
const { categories: $9b772791ccede8a5$var$categories, decompositions: $9b772791ccede8a5$var$decompositions } = /*@__PURE__*/ $parcel$interopDefault($79781f8c452881c2$exports);
const $9b772791ccede8a5$var$trie = new ($parcel$interopDefault($gfJaN$unicodetrie))($66a5b9fb5318558a$export$94fdf11bafc8de6b("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"));
const $9b772791ccede8a5$var$stateMachine = new ($parcel$interopDefault($gfJaN$dfa))(/*@__PURE__*/ $parcel$interopDefault($79781f8c452881c2$exports));
class $9b772791ccede8a5$export$2e2bcd8739ae039 extends $d28fb665ee343afc$export$2e2bcd8739ae039 {
    static planFeatures(plan) {
        plan.addStage($9b772791ccede8a5$var$setupSyllables);
        // Default glyph pre-processing group
        plan.addStage([
            "locl",
            "ccmp",
            "nukt",
            "akhn"
        ]);
        // Reordering group
        plan.addStage($9b772791ccede8a5$var$clearSubstitutionFlags);
        plan.addStage([
            "rphf"
        ], false);
        plan.addStage($9b772791ccede8a5$var$recordRphf);
        plan.addStage($9b772791ccede8a5$var$clearSubstitutionFlags);
        plan.addStage([
            "pref"
        ]);
        plan.addStage($9b772791ccede8a5$var$recordPref);
        // Orthographic unit shaping group
        plan.addStage([
            "rkrf",
            "abvf",
            "blwf",
            "half",
            "pstf",
            "vatu",
            "cjct"
        ]);
        plan.addStage($9b772791ccede8a5$var$reorder);
        // Topographical features
        // Scripts that need this are handled by the Arabic shaper, not implemented here for now.
        // plan.addStage(['isol', 'init', 'medi', 'fina', 'med2', 'fin2', 'fin3'], false);
        // Standard topographic presentation and positional feature application
        plan.addStage([
            "abvs",
            "blws",
            "pres",
            "psts",
            "dist",
            "abvm",
            "blwm"
        ]);
    }
    static assignFeatures(plan, glyphs) {
        // Decompose split vowels
        // TODO: do this in a more general unicode normalizer
        for(let i = glyphs.length - 1; i >= 0; i--){
            let codepoint = glyphs[i].codePoints[0];
            if ($9b772791ccede8a5$var$decompositions[codepoint]) {
                let decomposed = $9b772791ccede8a5$var$decompositions[codepoint].map((c)=>{
                    let g = plan.font.glyphForCodePoint(c);
                    return new $f22bb23c9fd478d8$export$2e2bcd8739ae039(plan.font, g.id, [
                        c
                    ], glyphs[i].features);
                });
                glyphs.splice(i, 1, ...decomposed);
            }
        }
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)($9b772791ccede8a5$export$2e2bcd8739ae039, "zeroMarkWidths", "BEFORE_GPOS");
function $9b772791ccede8a5$var$useCategory(glyph) {
    return $9b772791ccede8a5$var$trie.get(glyph.codePoints[0]);
}
class $9b772791ccede8a5$var$USEInfo {
    constructor(category, syllableType, syllable){
        this.category = category;
        this.syllableType = syllableType;
        this.syllable = syllable;
    }
}
function $9b772791ccede8a5$var$setupSyllables(font, glyphs) {
    let syllable = 0;
    for (let [start, end, tags] of $9b772791ccede8a5$var$stateMachine.match(glyphs.map($9b772791ccede8a5$var$useCategory))){
        ++syllable;
        // Create shaper info
        for(let i = start; i <= end; i++)glyphs[i].shaperInfo = new $9b772791ccede8a5$var$USEInfo($9b772791ccede8a5$var$categories[$9b772791ccede8a5$var$useCategory(glyphs[i])], tags[0], syllable);
        // Assign rphf feature
        let limit = glyphs[start].shaperInfo.category === "R" ? 1 : Math.min(3, end - start);
        for(let i1 = start; i1 < start + limit; i1++)glyphs[i1].features.rphf = true;
    }
}
function $9b772791ccede8a5$var$clearSubstitutionFlags(font, glyphs) {
    for (let glyph of glyphs)glyph.substituted = false;
}
function $9b772791ccede8a5$var$recordRphf(font, glyphs) {
    for (let glyph of glyphs)if (glyph.substituted && glyph.features.rphf) glyph.shaperInfo.category = "R";
}
function $9b772791ccede8a5$var$recordPref(font, glyphs) {
    for (let glyph of glyphs)if (glyph.substituted) glyph.shaperInfo.category = "VPre";
}
function $9b772791ccede8a5$var$reorder(font, glyphs) {
    let dottedCircle = font.glyphForCodePoint(0x25cc).id;
    for(let start = 0, end = $9b772791ccede8a5$var$nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = $9b772791ccede8a5$var$nextSyllable(glyphs, start)){
        let i, j;
        let info = glyphs[start].shaperInfo;
        let type = info.syllableType;
        // Only a few syllable types need reordering.
        if (type !== "virama_terminated_cluster" && type !== "standard_cluster" && type !== "broken_cluster") continue;
        // Insert a dotted circle glyph in broken clusters.
        if (type === "broken_cluster" && dottedCircle) {
            let g = new $f22bb23c9fd478d8$export$2e2bcd8739ae039(font, dottedCircle, [
                0x25cc
            ]);
            g.shaperInfo = info;
            // Insert after possible Repha.
            for(i = start; i < end && glyphs[i].shaperInfo.category === "R"; i++);
            glyphs.splice(++i, 0, g);
            end++;
        }
        // Move things forward.
        if (info.category === "R" && end - start > 1) for(i = start + 1; i < end; i++){
            info = glyphs[i].shaperInfo;
            if ($9b772791ccede8a5$var$isBase(info) || $9b772791ccede8a5$var$isHalant(glyphs[i])) {
                // If we hit a halant, move before it; otherwise it's a base: move to it's
                // place, and shift things in between backward.
                if ($9b772791ccede8a5$var$isHalant(glyphs[i])) i--;
                glyphs.splice(start, 0, ...glyphs.splice(start + 1, i - start), glyphs[i]);
                break;
            }
        }
        // Move things back.
        for(i = start, j = end; i < end; i++){
            info = glyphs[i].shaperInfo;
            if ($9b772791ccede8a5$var$isBase(info) || $9b772791ccede8a5$var$isHalant(glyphs[i])) // place, and shift things in between backward.
            j = $9b772791ccede8a5$var$isHalant(glyphs[i]) ? i + 1 : i;
            else if ((info.category === "VPre" || info.category === "VMPre") && j < i) glyphs.splice(j, 1, glyphs[i], ...glyphs.splice(j, i - j));
        }
    }
}
function $9b772791ccede8a5$var$nextSyllable(glyphs, start) {
    if (start >= glyphs.length) return start;
    let syllable = glyphs[start].shaperInfo.syllable;
    while(++start < glyphs.length && glyphs[start].shaperInfo.syllable === syllable);
    return start;
}
function $9b772791ccede8a5$var$isHalant(glyph) {
    return glyph.shaperInfo.category === "H" && !glyph.isLigated;
}
function $9b772791ccede8a5$var$isBase(info) {
    return info.category === "B" || info.category === "GB";
}
const $fdb4471fc82bc2c2$var$SHAPERS = {
    arab: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    mong: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    syrc: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    "nko ": $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    phag: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    mand: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    mani: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    phlp: $17ba6019f27bfcf9$export$2e2bcd8739ae039,
    hang: $fa1d9fd80dd7279e$export$2e2bcd8739ae039,
    bng2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    beng: $d203e6b9523d0071$export$2e2bcd8739ae039,
    dev2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    deva: $d203e6b9523d0071$export$2e2bcd8739ae039,
    gjr2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    gujr: $d203e6b9523d0071$export$2e2bcd8739ae039,
    guru: $d203e6b9523d0071$export$2e2bcd8739ae039,
    gur2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    knda: $d203e6b9523d0071$export$2e2bcd8739ae039,
    knd2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    mlm2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    mlym: $d203e6b9523d0071$export$2e2bcd8739ae039,
    ory2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    orya: $d203e6b9523d0071$export$2e2bcd8739ae039,
    taml: $d203e6b9523d0071$export$2e2bcd8739ae039,
    tml2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    telu: $d203e6b9523d0071$export$2e2bcd8739ae039,
    tel2: $d203e6b9523d0071$export$2e2bcd8739ae039,
    khmr: $d203e6b9523d0071$export$2e2bcd8739ae039,
    bali: $9b772791ccede8a5$export$2e2bcd8739ae039,
    batk: $9b772791ccede8a5$export$2e2bcd8739ae039,
    brah: $9b772791ccede8a5$export$2e2bcd8739ae039,
    bugi: $9b772791ccede8a5$export$2e2bcd8739ae039,
    buhd: $9b772791ccede8a5$export$2e2bcd8739ae039,
    cakm: $9b772791ccede8a5$export$2e2bcd8739ae039,
    cham: $9b772791ccede8a5$export$2e2bcd8739ae039,
    dupl: $9b772791ccede8a5$export$2e2bcd8739ae039,
    egyp: $9b772791ccede8a5$export$2e2bcd8739ae039,
    gran: $9b772791ccede8a5$export$2e2bcd8739ae039,
    hano: $9b772791ccede8a5$export$2e2bcd8739ae039,
    java: $9b772791ccede8a5$export$2e2bcd8739ae039,
    kthi: $9b772791ccede8a5$export$2e2bcd8739ae039,
    kali: $9b772791ccede8a5$export$2e2bcd8739ae039,
    khar: $9b772791ccede8a5$export$2e2bcd8739ae039,
    khoj: $9b772791ccede8a5$export$2e2bcd8739ae039,
    sind: $9b772791ccede8a5$export$2e2bcd8739ae039,
    lepc: $9b772791ccede8a5$export$2e2bcd8739ae039,
    limb: $9b772791ccede8a5$export$2e2bcd8739ae039,
    mahj: $9b772791ccede8a5$export$2e2bcd8739ae039,
    // mand: UniversalShaper, // Mandaic
    // mani: UniversalShaper, // Manichaean
    mtei: $9b772791ccede8a5$export$2e2bcd8739ae039,
    modi: $9b772791ccede8a5$export$2e2bcd8739ae039,
    // mong: UniversalShaper, // Mongolian
    // 'nko ': UniversalShaper, // N’Ko
    hmng: $9b772791ccede8a5$export$2e2bcd8739ae039,
    // phag: UniversalShaper, // Phags-pa
    // phlp: UniversalShaper, // Psalter Pahlavi
    rjng: $9b772791ccede8a5$export$2e2bcd8739ae039,
    saur: $9b772791ccede8a5$export$2e2bcd8739ae039,
    shrd: $9b772791ccede8a5$export$2e2bcd8739ae039,
    sidd: $9b772791ccede8a5$export$2e2bcd8739ae039,
    sinh: $d203e6b9523d0071$export$2e2bcd8739ae039,
    sund: $9b772791ccede8a5$export$2e2bcd8739ae039,
    sylo: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tglg: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tagb: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tale: $9b772791ccede8a5$export$2e2bcd8739ae039,
    lana: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tavt: $9b772791ccede8a5$export$2e2bcd8739ae039,
    takr: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tibt: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tfng: $9b772791ccede8a5$export$2e2bcd8739ae039,
    tirh: $9b772791ccede8a5$export$2e2bcd8739ae039,
    latn: $d28fb665ee343afc$export$2e2bcd8739ae039,
    DFLT: $d28fb665ee343afc$export$2e2bcd8739ae039 // Default
};
function $fdb4471fc82bc2c2$export$7877a478dd30fd3d(script) {
    if (!Array.isArray(script)) script = [
        script
    ];
    for (let s of script){
        let shaper = $fdb4471fc82bc2c2$var$SHAPERS[s];
        if (shaper) return shaper;
    }
    return $d28fb665ee343afc$export$2e2bcd8739ae039;
}
class $86bc1883359e094a$export$2e2bcd8739ae039 extends $7b226e6bbeadedeb$export$2e2bcd8739ae039 {
    applyLookup(lookupType, table) {
        switch(lookupType){
            case 1:
                {
                    let index = this.coverageIndex(table.coverage);
                    if (index === -1) return false;
                    let glyph = this.glyphIterator.cur;
                    switch(table.version){
                        case 1:
                            glyph.id = glyph.id + table.deltaGlyphID & 0xffff;
                            break;
                        case 2:
                            glyph.id = table.substitute.get(index);
                            break;
                    }
                    return true;
                }
            case 2:
                {
                    let index = this.coverageIndex(table.coverage);
                    if (index !== -1) {
                        let sequence = table.sequences.get(index);
                        if (sequence.length === 0) {
                            // If the sequence length is zero, delete the glyph.
                            // The OpenType spec disallows this, but seems like Harfbuzz and Uniscribe allow it.
                            this.glyphs.splice(this.glyphIterator.index, 1);
                            return true;
                        }
                        this.glyphIterator.cur.id = sequence[0];
                        this.glyphIterator.cur.ligatureComponent = 0;
                        let features = this.glyphIterator.cur.features;
                        let curGlyph = this.glyphIterator.cur;
                        let replacement = sequence.slice(1).map((gid, i)=>{
                            let glyph = new $f22bb23c9fd478d8$export$2e2bcd8739ae039(this.font, gid, undefined, features);
                            glyph.shaperInfo = curGlyph.shaperInfo;
                            glyph.isLigated = curGlyph.isLigated;
                            glyph.ligatureComponent = i + 1;
                            glyph.substituted = true;
                            glyph.isMultiplied = true;
                            return glyph;
                        });
                        this.glyphs.splice(this.glyphIterator.index + 1, 0, ...replacement);
                        return true;
                    }
                    return false;
                }
            case 3:
                {
                    let index = this.coverageIndex(table.coverage);
                    if (index !== -1) {
                        let USER_INDEX = 0; // TODO
                        this.glyphIterator.cur.id = table.alternateSet.get(index)[USER_INDEX];
                        return true;
                    }
                    return false;
                }
            case 4:
                {
                    let index = this.coverageIndex(table.coverage);
                    if (index === -1) return false;
                    for (let ligature of table.ligatureSets.get(index)){
                        let matched = this.sequenceMatchIndices(1, ligature.components);
                        if (!matched) continue;
                        let curGlyph = this.glyphIterator.cur;
                        // Concatenate all of the characters the new ligature will represent
                        let characters = curGlyph.codePoints.slice();
                        for (let index of matched)characters.push(...this.glyphs[index].codePoints);
                        // Create the replacement ligature glyph
                        let ligatureGlyph = new $f22bb23c9fd478d8$export$2e2bcd8739ae039(this.font, ligature.glyph, characters, curGlyph.features);
                        ligatureGlyph.shaperInfo = curGlyph.shaperInfo;
                        ligatureGlyph.isLigated = true;
                        ligatureGlyph.substituted = true;
                        // From Harfbuzz:
                        // - If it *is* a mark ligature, we don't allocate a new ligature id, and leave
                        //   the ligature to keep its old ligature id.  This will allow it to attach to
                        //   a base ligature in GPOS.  Eg. if the sequence is: LAM,LAM,SHADDA,FATHA,HEH,
                        //   and LAM,LAM,HEH for a ligature, they will leave SHADDA and FATHA with a
                        //   ligature id and component value of 2.  Then if SHADDA,FATHA form a ligature
                        //   later, we don't want them to lose their ligature id/component, otherwise
                        //   GPOS will fail to correctly position the mark ligature on top of the
                        //   LAM,LAM,HEH ligature. See https://bugzilla.gnome.org/show_bug.cgi?id=676343
                        //
                        // - If a ligature is formed of components that some of which are also ligatures
                        //   themselves, and those ligature components had marks attached to *their*
                        //   components, we have to attach the marks to the new ligature component
                        //   positions!  Now *that*'s tricky!  And these marks may be following the
                        //   last component of the whole sequence, so we should loop forward looking
                        //   for them and update them.
                        //
                        //   Eg. the sequence is LAM,LAM,SHADDA,FATHA,HEH, and the font first forms a
                        //   'calt' ligature of LAM,HEH, leaving the SHADDA and FATHA with a ligature
                        //   id and component == 1.  Now, during 'liga', the LAM and the LAM-HEH ligature
                        //   form a LAM-LAM-HEH ligature.  We need to reassign the SHADDA and FATHA to
                        //   the new ligature with a component value of 2.
                        //
                        //   This in fact happened to a font...  See https://bugzilla.gnome.org/show_bug.cgi?id=437633
                        let isMarkLigature = curGlyph.isMark;
                        for(let i = 0; i < matched.length && isMarkLigature; i++)isMarkLigature = this.glyphs[matched[i]].isMark;
                        ligatureGlyph.ligatureID = isMarkLigature ? null : this.ligatureID++;
                        let lastLigID = curGlyph.ligatureID;
                        let lastNumComps = curGlyph.codePoints.length;
                        let curComps = lastNumComps;
                        let idx = this.glyphIterator.index + 1;
                        // Set ligatureID and ligatureComponent on glyphs that were skipped in the matched sequence.
                        // This allows GPOS to attach marks to the correct ligature components.
                        for (let matchIndex of matched){
                            // Don't assign new ligature components for mark ligatures (see above)
                            if (isMarkLigature) idx = matchIndex;
                            else while(idx < matchIndex){
                                var ligatureComponent = curComps - lastNumComps + Math.min(this.glyphs[idx].ligatureComponent || 1, lastNumComps);
                                this.glyphs[idx].ligatureID = ligatureGlyph.ligatureID;
                                this.glyphs[idx].ligatureComponent = ligatureComponent;
                                idx++;
                            }
                            lastLigID = this.glyphs[idx].ligatureID;
                            lastNumComps = this.glyphs[idx].codePoints.length;
                            curComps += lastNumComps;
                            idx++; // skip base glyph
                        }
                        // Adjust ligature components for any marks following
                        if (lastLigID && !isMarkLigature) for(let i1 = idx; i1 < this.glyphs.length; i1++){
                            if (this.glyphs[i1].ligatureID === lastLigID) {
                                var ligatureComponent = curComps - lastNumComps + Math.min(this.glyphs[i1].ligatureComponent || 1, lastNumComps);
                                this.glyphs[i1].ligatureComponent = ligatureComponent;
                            } else break;
                        }
                        // Delete the matched glyphs, and replace the current glyph with the ligature glyph
                        for(let i2 = matched.length - 1; i2 >= 0; i2--)this.glyphs.splice(matched[i2], 1);
                        this.glyphs[this.glyphIterator.index] = ligatureGlyph;
                        return true;
                    }
                    return false;
                }
            case 5:
                return this.applyContext(table);
            case 6:
                return this.applyChainingContext(table);
            case 7:
                return this.applyLookup(table.lookupType, table.extension);
            default:
                throw new Error(`GSUB lookupType ${lookupType} is not supported`);
        }
    }
}
class $79ea6270f0a90256$export$2e2bcd8739ae039 extends $7b226e6bbeadedeb$export$2e2bcd8739ae039 {
    applyPositionValue(sequenceIndex, value) {
        let position = this.positions[this.glyphIterator.peekIndex(sequenceIndex)];
        if (value.xAdvance != null) position.xAdvance += value.xAdvance;
        if (value.yAdvance != null) position.yAdvance += value.yAdvance;
        if (value.xPlacement != null) position.xOffset += value.xPlacement;
        if (value.yPlacement != null) position.yOffset += value.yPlacement;
        // Adjustments for font variations
        let variationProcessor = this.font._variationProcessor;
        let variationStore = this.font.GDEF && this.font.GDEF.itemVariationStore;
        if (variationProcessor && variationStore) {
            if (value.xPlaDevice) position.xOffset += variationProcessor.getDelta(variationStore, value.xPlaDevice.a, value.xPlaDevice.b);
            if (value.yPlaDevice) position.yOffset += variationProcessor.getDelta(variationStore, value.yPlaDevice.a, value.yPlaDevice.b);
            if (value.xAdvDevice) position.xAdvance += variationProcessor.getDelta(variationStore, value.xAdvDevice.a, value.xAdvDevice.b);
            if (value.yAdvDevice) position.yAdvance += variationProcessor.getDelta(variationStore, value.yAdvDevice.a, value.yAdvDevice.b);
        }
    // TODO: device tables
    }
    applyLookup(lookupType, table) {
        switch(lookupType){
            case 1:
                {
                    let index = this.coverageIndex(table.coverage);
                    if (index === -1) return false;
                    switch(table.version){
                        case 1:
                            this.applyPositionValue(0, table.value);
                            break;
                        case 2:
                            this.applyPositionValue(0, table.values.get(index));
                            break;
                    }
                    return true;
                }
            case 2:
                {
                    let nextGlyph = this.glyphIterator.peek();
                    if (!nextGlyph) return false;
                    let index = this.coverageIndex(table.coverage);
                    if (index === -1) return false;
                    switch(table.version){
                        case 1:
                            let set = table.pairSets.get(index);
                            for (let pair of set)if (pair.secondGlyph === nextGlyph.id) {
                                this.applyPositionValue(0, pair.value1);
                                this.applyPositionValue(1, pair.value2);
                                return true;
                            }
                            return false;
                        case 2:
                            let class1 = this.getClassID(this.glyphIterator.cur.id, table.classDef1);
                            let class2 = this.getClassID(nextGlyph.id, table.classDef2);
                            if (class1 === -1 || class2 === -1) return false;
                            var pair1 = table.classRecords.get(class1).get(class2);
                            this.applyPositionValue(0, pair1.value1);
                            this.applyPositionValue(1, pair1.value2);
                            return true;
                    }
                }
            case 3:
                {
                    let nextIndex = this.glyphIterator.peekIndex();
                    let nextGlyph = this.glyphs[nextIndex];
                    if (!nextGlyph) return false;
                    let curRecord = table.entryExitRecords[this.coverageIndex(table.coverage)];
                    if (!curRecord || !curRecord.exitAnchor) return false;
                    let nextRecord = table.entryExitRecords[this.coverageIndex(table.coverage, nextGlyph.id)];
                    if (!nextRecord || !nextRecord.entryAnchor) return false;
                    let entry = this.getAnchor(nextRecord.entryAnchor);
                    let exit = this.getAnchor(curRecord.exitAnchor);
                    let cur = this.positions[this.glyphIterator.index];
                    let next = this.positions[nextIndex];
                    let d;
                    switch(this.direction){
                        case "ltr":
                            cur.xAdvance = exit.x + cur.xOffset;
                            d = entry.x + next.xOffset;
                            next.xAdvance -= d;
                            next.xOffset -= d;
                            break;
                        case "rtl":
                            d = exit.x + cur.xOffset;
                            cur.xAdvance -= d;
                            cur.xOffset -= d;
                            next.xAdvance = entry.x + next.xOffset;
                            break;
                    }
                    if (this.glyphIterator.flags.rightToLeft) {
                        this.glyphIterator.cur.cursiveAttachment = nextIndex;
                        cur.yOffset = entry.y - exit.y;
                    } else {
                        nextGlyph.cursiveAttachment = this.glyphIterator.index;
                        cur.yOffset = exit.y - entry.y;
                    }
                    return true;
                }
            case 4:
                {
                    let markIndex = this.coverageIndex(table.markCoverage);
                    if (markIndex === -1) return false;
                    // search backward for a base glyph
                    let baseGlyphIndex = this.glyphIterator.index;
                    while(--baseGlyphIndex >= 0 && (this.glyphs[baseGlyphIndex].isMark || this.glyphs[baseGlyphIndex].ligatureComponent > 0));
                    if (baseGlyphIndex < 0) return false;
                    let baseIndex = this.coverageIndex(table.baseCoverage, this.glyphs[baseGlyphIndex].id);
                    if (baseIndex === -1) return false;
                    let markRecord = table.markArray[markIndex];
                    let baseAnchor = table.baseArray[baseIndex][markRecord.class];
                    this.applyAnchor(markRecord, baseAnchor, baseGlyphIndex);
                    return true;
                }
            case 5:
                {
                    let markIndex = this.coverageIndex(table.markCoverage);
                    if (markIndex === -1) return false;
                    // search backward for a base glyph
                    let baseGlyphIndex = this.glyphIterator.index;
                    while(--baseGlyphIndex >= 0 && this.glyphs[baseGlyphIndex].isMark);
                    if (baseGlyphIndex < 0) return false;
                    let ligIndex = this.coverageIndex(table.ligatureCoverage, this.glyphs[baseGlyphIndex].id);
                    if (ligIndex === -1) return false;
                    let ligAttach = table.ligatureArray[ligIndex];
                    let markGlyph = this.glyphIterator.cur;
                    let ligGlyph = this.glyphs[baseGlyphIndex];
                    let compIndex = ligGlyph.ligatureID && ligGlyph.ligatureID === markGlyph.ligatureID && markGlyph.ligatureComponent > 0 ? Math.min(markGlyph.ligatureComponent, ligGlyph.codePoints.length) - 1 : ligGlyph.codePoints.length - 1;
                    let markRecord = table.markArray[markIndex];
                    let baseAnchor = ligAttach[compIndex][markRecord.class];
                    this.applyAnchor(markRecord, baseAnchor, baseGlyphIndex);
                    return true;
                }
            case 6:
                {
                    let mark1Index = this.coverageIndex(table.mark1Coverage);
                    if (mark1Index === -1) return false;
                    // get the previous mark to attach to
                    let prevIndex = this.glyphIterator.peekIndex(-1);
                    let prev = this.glyphs[prevIndex];
                    if (!prev || !prev.isMark) return false;
                    let cur = this.glyphIterator.cur;
                    // The following logic was borrowed from Harfbuzz
                    let good = false;
                    if (cur.ligatureID === prev.ligatureID) {
                        if (!cur.ligatureID) good = true;
                        else if (cur.ligatureComponent === prev.ligatureComponent) good = true;
                    } else // itself is a ligature, in which case match.
                    if (cur.ligatureID && !cur.ligatureComponent || prev.ligatureID && !prev.ligatureComponent) good = true;
                    if (!good) return false;
                    let mark2Index = this.coverageIndex(table.mark2Coverage, prev.id);
                    if (mark2Index === -1) return false;
                    let markRecord = table.mark1Array[mark1Index];
                    let baseAnchor = table.mark2Array[mark2Index][markRecord.class];
                    this.applyAnchor(markRecord, baseAnchor, prevIndex);
                    return true;
                }
            case 7:
                return this.applyContext(table);
            case 8:
                return this.applyChainingContext(table);
            case 9:
                return this.applyLookup(table.lookupType, table.extension);
            default:
                throw new Error(`Unsupported GPOS table: ${lookupType}`);
        }
    }
    applyAnchor(markRecord, baseAnchor, baseGlyphIndex) {
        let baseCoords = this.getAnchor(baseAnchor);
        let markCoords = this.getAnchor(markRecord.markAnchor);
        let basePos = this.positions[baseGlyphIndex];
        let markPos = this.positions[this.glyphIterator.index];
        markPos.xOffset = baseCoords.x - markCoords.x;
        markPos.yOffset = baseCoords.y - markCoords.y;
        this.glyphIterator.cur.markAttachment = baseGlyphIndex;
    }
    getAnchor(anchor) {
        // TODO: contour point, device tables
        let x = anchor.xCoordinate;
        let y = anchor.yCoordinate;
        // Adjustments for font variations
        let variationProcessor = this.font._variationProcessor;
        let variationStore = this.font.GDEF && this.font.GDEF.itemVariationStore;
        if (variationProcessor && variationStore) {
            if (anchor.xDeviceTable) x += variationProcessor.getDelta(variationStore, anchor.xDeviceTable.a, anchor.xDeviceTable.b);
            if (anchor.yDeviceTable) y += variationProcessor.getDelta(variationStore, anchor.yDeviceTable.a, anchor.yDeviceTable.b);
        }
        return {
            x: x,
            y: y
        };
    }
    applyFeatures(userFeatures, glyphs, advances) {
        super.applyFeatures(userFeatures, glyphs, advances);
        for(var i = 0; i < this.glyphs.length; i++)this.fixCursiveAttachment(i);
        this.fixMarkAttachment();
    }
    fixCursiveAttachment(i) {
        let glyph = this.glyphs[i];
        if (glyph.cursiveAttachment != null) {
            let j = glyph.cursiveAttachment;
            glyph.cursiveAttachment = null;
            this.fixCursiveAttachment(j);
            this.positions[i].yOffset += this.positions[j].yOffset;
        }
    }
    fixMarkAttachment() {
        for(let i = 0; i < this.glyphs.length; i++){
            let glyph = this.glyphs[i];
            if (glyph.markAttachment != null) {
                let j = glyph.markAttachment;
                this.positions[i].xOffset += this.positions[j].xOffset;
                this.positions[i].yOffset += this.positions[j].yOffset;
                if (this.direction === "ltr") for(let k = j; k < i; k++){
                    this.positions[i].xOffset -= this.positions[k].xAdvance;
                    this.positions[i].yOffset -= this.positions[k].yAdvance;
                }
                else for(let k1 = j + 1; k1 < i + 1; k1++){
                    this.positions[i].xOffset += this.positions[k1].xAdvance;
                    this.positions[i].yOffset += this.positions[k1].yAdvance;
                }
            }
        }
    }
}
class $b2f26a32cb9ab2fa$export$2e2bcd8739ae039 {
    setup(glyphRun) {
        // Map glyphs to GlyphInfo objects so data can be passed between
        // GSUB and GPOS without mutating the real (shared) Glyph objects.
        this.glyphInfos = glyphRun.glyphs.map((glyph)=>new $f22bb23c9fd478d8$export$2e2bcd8739ae039(this.font, glyph.id, [
                ...glyph.codePoints
            ]));
        // Select a script based on what is available in GSUB/GPOS.
        let script = null;
        if (this.GPOSProcessor) script = this.GPOSProcessor.selectScript(glyphRun.script, glyphRun.language, glyphRun.direction);
        if (this.GSUBProcessor) script = this.GSUBProcessor.selectScript(glyphRun.script, glyphRun.language, glyphRun.direction);
        // Choose a shaper based on the script, and setup a shaping plan.
        // This determines which features to apply to which glyphs.
        this.shaper = $fdb4471fc82bc2c2$export$7877a478dd30fd3d(script);
        this.plan = new $d7e93cca3cf8ce8a$export$2e2bcd8739ae039(this.font, script, glyphRun.direction);
        this.shaper.plan(this.plan, this.glyphInfos, glyphRun.features);
        // Assign chosen features to output glyph run
        for(let key in this.plan.allFeatures)glyphRun.features[key] = true;
    }
    substitute(glyphRun) {
        if (this.GSUBProcessor) {
            this.plan.process(this.GSUBProcessor, this.glyphInfos);
            // Map glyph infos back to normal Glyph objects
            glyphRun.glyphs = this.glyphInfos.map((glyphInfo)=>this.font.getGlyph(glyphInfo.id, glyphInfo.codePoints));
        }
    }
    position(glyphRun) {
        if (this.shaper.zeroMarkWidths === "BEFORE_GPOS") this.zeroMarkAdvances(glyphRun.positions);
        if (this.GPOSProcessor) this.plan.process(this.GPOSProcessor, this.glyphInfos, glyphRun.positions);
        if (this.shaper.zeroMarkWidths === "AFTER_GPOS") this.zeroMarkAdvances(glyphRun.positions);
        // Reverse the glyphs and positions if the script is right-to-left
        if (glyphRun.direction === "rtl") {
            glyphRun.glyphs.reverse();
            glyphRun.positions.reverse();
        }
        return this.GPOSProcessor && this.GPOSProcessor.features;
    }
    zeroMarkAdvances(positions) {
        for(let i = 0; i < this.glyphInfos.length; i++)if (this.glyphInfos[i].isMark) {
            positions[i].xAdvance = 0;
            positions[i].yAdvance = 0;
        }
    }
    cleanup() {
        this.glyphInfos = null;
        this.plan = null;
        this.shaper = null;
    }
    getAvailableFeatures(script, language) {
        let features = [];
        if (this.GSUBProcessor) {
            this.GSUBProcessor.selectScript(script, language);
            features.push(...Object.keys(this.GSUBProcessor.features));
        }
        if (this.GPOSProcessor) {
            this.GPOSProcessor.selectScript(script, language);
            features.push(...Object.keys(this.GPOSProcessor.features));
        }
        return features;
    }
    constructor(font){
        this.font = font;
        this.glyphInfos = null;
        this.plan = null;
        this.GSUBProcessor = null;
        this.GPOSProcessor = null;
        this.fallbackPosition = true;
        if (font.GSUB) this.GSUBProcessor = new $86bc1883359e094a$export$2e2bcd8739ae039(font, font.GSUB);
        if (font.GPOS) this.GPOSProcessor = new $79ea6270f0a90256$export$2e2bcd8739ae039(font, font.GPOS);
    }
}
class $9d641258c9d7180d$export$2e2bcd8739ae039 {
    layout(string, features, script, language, direction) {
        // Make the features parameter optional
        if (typeof features === "string") {
            direction = language;
            language = script;
            script = features;
            features = [];
        }
        // Map string to glyphs if needed
        if (typeof string === "string") {
            // Attempt to detect the script from the string if not provided.
            if (script == null) script = $e38a1a895f6aeb54$export$e5cb25e204fb8450(string);
            var glyphs = this.font.glyphsForString(string);
        } else {
            // Attempt to detect the script from the glyph code points if not provided.
            if (script == null) {
                let codePoints = [];
                for (let glyph of string)codePoints.push(...glyph.codePoints);
                script = $e38a1a895f6aeb54$export$16fab0757cfc223d(codePoints);
            }
            var glyphs = string;
        }
        let glyphRun = new $b19c79ec7a94fa39$export$2e2bcd8739ae039(glyphs, features, script, language, direction);
        // Return early if there are no glyphs
        if (glyphs.length === 0) {
            glyphRun.positions = [];
            return glyphRun;
        }
        // Setup the advanced layout engine
        if (this.engine && this.engine.setup) this.engine.setup(glyphRun);
        // Substitute and position the glyphs
        this.substitute(glyphRun);
        this.position(glyphRun);
        this.hideDefaultIgnorables(glyphRun.glyphs, glyphRun.positions);
        // Let the layout engine clean up any state it might have
        if (this.engine && this.engine.cleanup) this.engine.cleanup();
        return glyphRun;
    }
    substitute(glyphRun) {
        // Call the advanced layout engine to make substitutions
        if (this.engine && this.engine.substitute) this.engine.substitute(glyphRun);
    }
    position(glyphRun) {
        // Get initial glyph positions
        glyphRun.positions = glyphRun.glyphs.map((glyph)=>new $9195cf1266c12ea5$export$2e2bcd8739ae039(glyph.advanceWidth));
        let positioned = null;
        // Call the advanced layout engine. Returns the features applied.
        if (this.engine && this.engine.position) positioned = this.engine.position(glyphRun);
        // if there is no GPOS table, use unicode properties to position marks.
        if (!positioned && (!this.engine || this.engine.fallbackPosition)) {
            if (!this.unicodeLayoutEngine) this.unicodeLayoutEngine = new $a57a26817cd35108$export$2e2bcd8739ae039(this.font);
            this.unicodeLayoutEngine.positionGlyphs(glyphRun.glyphs, glyphRun.positions);
        }
        // if kerning is not supported by GPOS, do kerning with the TrueType/AAT kern table
        if ((!positioned || !positioned.kern) && glyphRun.features.kern !== false && this.font.kern) {
            if (!this.kernProcessor) this.kernProcessor = new $4646d52c2a559cdb$export$2e2bcd8739ae039(this.font);
            this.kernProcessor.process(glyphRun.glyphs, glyphRun.positions);
            glyphRun.features.kern = true;
        }
    }
    hideDefaultIgnorables(glyphs, positions) {
        let space = this.font.glyphForCodePoint(0x20);
        for(let i = 0; i < glyphs.length; i++)if (this.isDefaultIgnorable(glyphs[i].codePoints[0])) {
            glyphs[i] = space;
            positions[i].xAdvance = 0;
            positions[i].yAdvance = 0;
        }
    }
    isDefaultIgnorable(ch) {
        // From DerivedCoreProperties.txt in the Unicode database,
        // minus U+115F, U+1160, U+3164 and U+FFA0, which is what
        // Harfbuzz and Uniscribe do.
        let plane = ch >> 16;
        if (plane === 0) switch(ch >> 8){
            case 0x00:
                return ch === 0x00AD;
            case 0x03:
                return ch === 0x034F;
            case 0x06:
                return ch === 0x061C;
            case 0x17:
                return 0x17B4 <= ch && ch <= 0x17B5;
            case 0x18:
                return 0x180B <= ch && ch <= 0x180E;
            case 0x20:
                return 0x200B <= ch && ch <= 0x200F || 0x202A <= ch && ch <= 0x202E || 0x2060 <= ch && ch <= 0x206F;
            case 0xFE:
                return 0xFE00 <= ch && ch <= 0xFE0F || ch === 0xFEFF;
            case 0xFF:
                return 0xFFF0 <= ch && ch <= 0xFFF8;
            default:
                return false;
        }
        else switch(plane){
            case 0x01:
                return 0x1BCA0 <= ch && ch <= 0x1BCA3 || 0x1D173 <= ch && ch <= 0x1D17A;
            case 0x0E:
                return 0xE0000 <= ch && ch <= 0xE0FFF;
            default:
                return false;
        }
    }
    getAvailableFeatures(script, language) {
        let features = [];
        if (this.engine) features.push(...this.engine.getAvailableFeatures(script, language));
        if (this.font.kern && features.indexOf("kern") === -1) features.push("kern");
        return features;
    }
    stringsForGlyph(gid) {
        let result = new Set;
        let codePoints = this.font._cmapProcessor.codePointsForGlyph(gid);
        for (let codePoint of codePoints)result.add(String.fromCodePoint(codePoint));
        if (this.engine && this.engine.stringsForGlyph) for (let string of this.engine.stringsForGlyph(gid))result.add(string);
        return Array.from(result);
    }
    constructor(font){
        this.font = font;
        this.unicodeLayoutEngine = null;
        this.kernProcessor = null;
        // Choose an advanced layout engine. We try the AAT morx table first since more
        // scripts are currently supported because the shaping logic is built into the font.
        if (this.font.morx) this.engine = new $860fcbd64bc12fbc$export$2e2bcd8739ae039(this.font);
        else if (this.font.GSUB || this.font.GPOS) this.engine = new $b2f26a32cb9ab2fa$export$2e2bcd8739ae039(this.font);
    }
}
const $67ee4828d81adb28$var$SVG_COMMANDS = {
    moveTo: "M",
    lineTo: "L",
    quadraticCurveTo: "Q",
    bezierCurveTo: "C",
    closePath: "Z"
};
class $67ee4828d81adb28$export$2e2bcd8739ae039 {
    /**
   * Compiles the path to a JavaScript function that can be applied with
   * a graphics context in order to render the path.
   * @return {string}
   */ toFunction() {
        return (ctx)=>{
            this.commands.forEach((c)=>{
                return ctx[c.command].apply(ctx, c.args);
            });
        };
    }
    /**
   * Converts the path to an SVG path data string
   * @return {string}
   */ toSVG() {
        let cmds = this.commands.map((c)=>{
            let args = c.args.map((arg)=>Math.round(arg * 100) / 100);
            return `${$67ee4828d81adb28$var$SVG_COMMANDS[c.command]}${args.join(" ")}`;
        });
        return cmds.join("");
    }
    /**
   * Gets the "control box" of a path.
   * This is like the bounding box, but it includes all points including
   * control points of bezier segments and is much faster to compute than
   * the real bounding box.
   * @type {BBox}
   */ get cbox() {
        if (!this._cbox) {
            let cbox = new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039;
            for (let command1 of this.commands)for(let i = 0; i < command1.args.length; i += 2)cbox.addPoint(command1.args[i], command1.args[i + 1]);
            this._cbox = Object.freeze(cbox);
        }
        return this._cbox;
    }
    /**
   * Gets the exact bounding box of the path by evaluating curve segments.
   * Slower to compute than the control box, but more accurate.
   * @type {BBox}
   */ get bbox() {
        if (this._bbox) return this._bbox;
        let bbox = new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039;
        let cx = 0, cy = 0;
        let f = (t)=>Math.pow(1 - t, 3) * p0[i] + 3 * Math.pow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * Math.pow(t, 2) * p2[i] + Math.pow(t, 3) * p3[i];
        for (let c of this.commands)switch(c.command){
            case "moveTo":
            case "lineTo":
                let [x, y] = c.args;
                bbox.addPoint(x, y);
                cx = x;
                cy = y;
                break;
            case "quadraticCurveTo":
            case "bezierCurveTo":
                if (c.command === "quadraticCurveTo") {
                    // http://fontforge.org/bezier.html
                    var [qp1x, qp1y, p3x, p3y] = c.args;
                    var cp1x = cx + 2 / 3 * (qp1x - cx); // CP1 = QP0 + 2/3 * (QP1-QP0)
                    var cp1y = cy + 2 / 3 * (qp1y - cy);
                    var cp2x = p3x + 2 / 3 * (qp1x - p3x); // CP2 = QP2 + 2/3 * (QP1-QP2)
                    var cp2y = p3y + 2 / 3 * (qp1y - p3y);
                } else var [cp1x, cp1y, cp2x, cp2y, p3x, p3y] = c.args;
                // http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
                bbox.addPoint(p3x, p3y);
                var p0 = [
                    cx,
                    cy
                ];
                var p1 = [
                    cp1x,
                    cp1y
                ];
                var p2 = [
                    cp2x,
                    cp2y
                ];
                var p3 = [
                    p3x,
                    p3y
                ];
                for(var i = 0; i <= 1; i++){
                    let b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
                    let a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
                    c = 3 * p1[i] - 3 * p0[i];
                    if (a === 0) {
                        if (b === 0) continue;
                        let t = -c / b;
                        if (0 < t && t < 1) {
                            if (i === 0) bbox.addPoint(f(t), bbox.maxY);
                            else if (i === 1) bbox.addPoint(bbox.maxX, f(t));
                        }
                        continue;
                    }
                    let b2ac = Math.pow(b, 2) - 4 * c * a;
                    if (b2ac < 0) continue;
                    let t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                    if (0 < t1 && t1 < 1) {
                        if (i === 0) bbox.addPoint(f(t1), bbox.maxY);
                        else if (i === 1) bbox.addPoint(bbox.maxX, f(t1));
                    }
                    let t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                    if (0 < t2 && t2 < 1) {
                        if (i === 0) bbox.addPoint(f(t2), bbox.maxY);
                        else if (i === 1) bbox.addPoint(bbox.maxX, f(t2));
                    }
                }
                cx = p3x;
                cy = p3y;
                break;
        }
        return this._bbox = Object.freeze(bbox);
    }
    /**
   * Applies a mapping function to each point in the path.
   * @param {function} fn
   * @return {Path}
   */ mapPoints(fn) {
        let path = new $67ee4828d81adb28$export$2e2bcd8739ae039;
        for (let c of this.commands){
            let args = [];
            for(let i = 0; i < c.args.length; i += 2){
                let [x, y] = fn(c.args[i], c.args[i + 1]);
                args.push(x, y);
            }
            path[c.command](...args);
        }
        return path;
    }
    /**
   * Transforms the path by the given matrix.
   */ transform(m0, m1, m2, m3, m4, m5) {
        return this.mapPoints((x, y)=>{
            const tx = m0 * x + m2 * y + m4;
            const ty = m1 * x + m3 * y + m5;
            return [
                tx,
                ty
            ];
        });
    }
    /**
   * Translates the path by the given offset.
   */ translate(x, y) {
        return this.transform(1, 0, 0, 1, x, y);
    }
    /**
   * Rotates the path by the given angle (in radians).
   */ rotate(angle) {
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        return this.transform(cos, sin, -sin, cos, 0, 0);
    }
    /**
   * Scales the path.
   */ scale(scaleX, scaleY = scaleX) {
        return this.transform(scaleX, 0, 0, scaleY, 0, 0);
    }
    constructor(){
        this.commands = [];
        this._bbox = null;
        this._cbox = null;
    }
}
for (let command of [
    "moveTo",
    "lineTo",
    "quadraticCurveTo",
    "bezierCurveTo",
    "closePath"
])$67ee4828d81adb28$export$2e2bcd8739ae039.prototype[command] = function(...args) {
    this._bbox = this._cbox = null;
    this.commands.push({
        command: command,
        args: args
    });
    return this;
};
var $85e16e40023cfb0f$export$2e2bcd8739ae039 = [
    ".notdef",
    ".null",
    "nonmarkingreturn",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quotesingle",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "grave",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "Adieresis",
    "Aring",
    "Ccedilla",
    "Eacute",
    "Ntilde",
    "Odieresis",
    "Udieresis",
    "aacute",
    "agrave",
    "acircumflex",
    "adieresis",
    "atilde",
    "aring",
    "ccedilla",
    "eacute",
    "egrave",
    "ecircumflex",
    "edieresis",
    "iacute",
    "igrave",
    "icircumflex",
    "idieresis",
    "ntilde",
    "oacute",
    "ograve",
    "ocircumflex",
    "odieresis",
    "otilde",
    "uacute",
    "ugrave",
    "ucircumflex",
    "udieresis",
    "dagger",
    "degree",
    "cent",
    "sterling",
    "section",
    "bullet",
    "paragraph",
    "germandbls",
    "registered",
    "copyright",
    "trademark",
    "acute",
    "dieresis",
    "notequal",
    "AE",
    "Oslash",
    "infinity",
    "plusminus",
    "lessequal",
    "greaterequal",
    "yen",
    "mu",
    "partialdiff",
    "summation",
    "product",
    "pi",
    "integral",
    "ordfeminine",
    "ordmasculine",
    "Omega",
    "ae",
    "oslash",
    "questiondown",
    "exclamdown",
    "logicalnot",
    "radical",
    "florin",
    "approxequal",
    "Delta",
    "guillemotleft",
    "guillemotright",
    "ellipsis",
    "nonbreakingspace",
    "Agrave",
    "Atilde",
    "Otilde",
    "OE",
    "oe",
    "endash",
    "emdash",
    "quotedblleft",
    "quotedblright",
    "quoteleft",
    "quoteright",
    "divide",
    "lozenge",
    "ydieresis",
    "Ydieresis",
    "fraction",
    "currency",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "daggerdbl",
    "periodcentered",
    "quotesinglbase",
    "quotedblbase",
    "perthousand",
    "Acircumflex",
    "Ecircumflex",
    "Aacute",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Oacute",
    "Ocircumflex",
    "apple",
    "Ograve",
    "Uacute",
    "Ucircumflex",
    "Ugrave",
    "dotlessi",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "Lslash",
    "lslash",
    "Scaron",
    "scaron",
    "Zcaron",
    "zcaron",
    "brokenbar",
    "Eth",
    "eth",
    "Yacute",
    "yacute",
    "Thorn",
    "thorn",
    "minus",
    "multiply",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "onehalf",
    "onequarter",
    "threequarters",
    "franc",
    "Gbreve",
    "gbreve",
    "Idotaccent",
    "Scedilla",
    "scedilla",
    "Cacute",
    "cacute",
    "Ccaron",
    "ccaron",
    "dcroat"
];
class $0e4f52d7996e478b$export$2e2bcd8739ae039 {
    _getPath() {
        return new $67ee4828d81adb28$export$2e2bcd8739ae039();
    }
    _getCBox() {
        return this.path.cbox;
    }
    _getBBox() {
        return this.path.bbox;
    }
    _getTableMetrics(table) {
        if (this.id < table.metrics.length) return table.metrics.get(this.id);
        let metric = table.metrics.get(table.metrics.length - 1);
        let res = {
            advance: metric ? metric.advance : 0,
            bearing: table.bearings.get(this.id - table.metrics.length) || 0
        };
        return res;
    }
    _getMetrics(cbox) {
        if (this._metrics) return this._metrics;
        let { advance: advanceWidth, bearing: leftBearing } = this._getTableMetrics(this._font.hmtx);
        // For vertical metrics, use vmtx if available, or fall back to global data from OS/2 or hhea
        if (this._font.vmtx) var { advance: advanceHeight, bearing: topBearing } = this._getTableMetrics(this._font.vmtx);
        else {
            let os2;
            if (typeof cbox === "undefined" || cbox === null) ({ cbox: cbox } = this);
            if ((os2 = this._font["OS/2"]) && os2.version > 0) {
                var advanceHeight = Math.abs(os2.typoAscender - os2.typoDescender);
                var topBearing = os2.typoAscender - cbox.maxY;
            } else {
                let { hhea: hhea } = this._font;
                var advanceHeight = Math.abs(hhea.ascent - hhea.descent);
                var topBearing = hhea.ascent - cbox.maxY;
            }
        }
        if (this._font._variationProcessor && this._font.HVAR) advanceWidth += this._font._variationProcessor.getAdvanceAdjustment(this.id, this._font.HVAR);
        return this._metrics = {
            advanceWidth: advanceWidth,
            advanceHeight: advanceHeight,
            leftBearing: leftBearing,
            topBearing: topBearing
        };
    }
    /**
   * The glyph’s control box.
   * This is often the same as the bounding box, but is faster to compute.
   * Because of the way bezier curves are defined, some of the control points
   * can be outside of the bounding box. Where `bbox` takes this into account,
   * `cbox` does not. Thus, cbox is less accurate, but faster to compute.
   * See [here](http://www.freetype.org/freetype2/docs/glyphs/glyphs-6.html#section-2)
   * for a more detailed description.
   *
   * @type {BBox}
   */ get cbox() {
        return this._getCBox();
    }
    /**
   * The glyph’s bounding box, i.e. the rectangle that encloses the
   * glyph outline as tightly as possible.
   * @type {BBox}
   */ get bbox() {
        return this._getBBox();
    }
    /**
   * A vector Path object representing the glyph outline.
   * @type {Path}
   */ get path() {
        // Cache the path so we only decode it once
        // Decoding is actually performed by subclasses
        return this._getPath();
    }
    /**
   * Returns a path scaled to the given font size.
   * @param {number} size
   * @return {Path}
   */ getScaledPath(size) {
        let scale = 1 / this._font.unitsPerEm * size;
        return this.path.scale(scale);
    }
    /**
   * The glyph's advance width.
   * @type {number}
   */ get advanceWidth() {
        return this._getMetrics().advanceWidth;
    }
    /**
   * The glyph's advance height.
   * @type {number}
   */ get advanceHeight() {
        return this._getMetrics().advanceHeight;
    }
    get ligatureCaretPositions() {}
    _getName() {
        let { post: post } = this._font;
        if (!post) return null;
        switch(post.version){
            case 1:
                return $85e16e40023cfb0f$export$2e2bcd8739ae039[this.id];
            case 2:
                let id = post.glyphNameIndex[this.id];
                if (id < $85e16e40023cfb0f$export$2e2bcd8739ae039.length) return $85e16e40023cfb0f$export$2e2bcd8739ae039[id];
                return post.names[id - $85e16e40023cfb0f$export$2e2bcd8739ae039.length];
            case 2.5:
                return $85e16e40023cfb0f$export$2e2bcd8739ae039[this.id + post.offsets[this.id]];
            case 4:
                return String.fromCharCode(post.map[this.id]);
        }
    }
    /**
   * The glyph's name
   * @type {string}
   */ get name() {
        return this._getName();
    }
    /**
   * Renders the glyph to the given graphics context, at the specified font size.
   * @param {CanvasRenderingContext2d} ctx
   * @param {number} size
   */ render(ctx, size) {
        ctx.save();
        let scale = 1 / this._font.head.unitsPerEm * size;
        ctx.scale(scale, scale);
        let fn = this.path.toFunction();
        fn(ctx);
        ctx.fill();
        ctx.restore();
    }
    constructor(id, codePoints, font){
        /**
     * The glyph id in the font
     * @type {number}
     */ this.id = id;
        /**
     * An array of unicode code points that are represented by this glyph.
     * There can be multiple code points in the case of ligatures and other glyphs
     * that represent multiple visual characters.
     * @type {number[]}
     */ this.codePoints = codePoints;
        this._font = font;
        // TODO: get this info from GDEF if available
        this.isMark = this.codePoints.length > 0 && this.codePoints.every($gfJaN$unicodeproperties.isMark);
        this.isLigature = this.codePoints.length > 1;
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "cbox", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "bbox", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "path", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "advanceWidth", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "advanceHeight", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype, "name", null);
// The header for both simple and composite glyphs
let $f680320fa07ef53d$var$GlyfHeader = new $gfJaN$restructure.Struct({
    numberOfContours: $gfJaN$restructure.int16,
    xMin: $gfJaN$restructure.int16,
    yMin: $gfJaN$restructure.int16,
    xMax: $gfJaN$restructure.int16,
    yMax: $gfJaN$restructure.int16
});
// Flags for simple glyphs
const $f680320fa07ef53d$var$ON_CURVE = 1;
const $f680320fa07ef53d$var$X_SHORT_VECTOR = 2;
const $f680320fa07ef53d$var$Y_SHORT_VECTOR = 4;
const $f680320fa07ef53d$var$REPEAT = 8;
const $f680320fa07ef53d$var$SAME_X = 16;
const $f680320fa07ef53d$var$SAME_Y = 32;
// Flags for composite glyphs
const $f680320fa07ef53d$var$ARG_1_AND_2_ARE_WORDS = 1;
const $f680320fa07ef53d$var$ARGS_ARE_XY_VALUES = 2;
const $f680320fa07ef53d$var$ROUND_XY_TO_GRID = 4;
const $f680320fa07ef53d$var$WE_HAVE_A_SCALE = 8;
const $f680320fa07ef53d$var$MORE_COMPONENTS = 32;
const $f680320fa07ef53d$var$WE_HAVE_AN_X_AND_Y_SCALE = 64;
const $f680320fa07ef53d$var$WE_HAVE_A_TWO_BY_TWO = 128;
const $f680320fa07ef53d$var$WE_HAVE_INSTRUCTIONS = 256;
const $f680320fa07ef53d$var$USE_MY_METRICS = 512;
const $f680320fa07ef53d$var$OVERLAP_COMPOUND = 1024;
const $f680320fa07ef53d$var$SCALED_COMPONENT_OFFSET = 2048;
const $f680320fa07ef53d$var$UNSCALED_COMPONENT_OFFSET = 4096;
class $f680320fa07ef53d$export$baf26146a414f24a {
    copy() {
        return new $f680320fa07ef53d$export$baf26146a414f24a(this.onCurve, this.endContour, this.x, this.y);
    }
    constructor(onCurve, endContour, x = 0, y = 0){
        this.onCurve = onCurve;
        this.endContour = endContour;
        this.x = x;
        this.y = y;
    }
}
// Represents a component in a composite glyph
class $f680320fa07ef53d$var$Component {
    constructor(glyphID, dx, dy){
        this.glyphID = glyphID;
        this.dx = dx;
        this.dy = dy;
        this.pos = 0;
        this.scaleX = this.scaleY = 1;
        this.scale01 = this.scale10 = 0;
    }
}
class $f680320fa07ef53d$export$2e2bcd8739ae039 extends $0e4f52d7996e478b$export$2e2bcd8739ae039 {
    // Parses just the glyph header and returns the bounding box
    _getCBox(internal) {
        // We need to decode the glyph if variation processing is requested,
        // so it's easier just to recompute the path's cbox after decoding.
        if (this._font._variationProcessor && !internal) return this.path.cbox;
        let stream = this._font._getTableStream("glyf");
        stream.pos += this._font.loca.offsets[this.id];
        let glyph = $f680320fa07ef53d$var$GlyfHeader.decode(stream);
        let cbox = new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039(glyph.xMin, glyph.yMin, glyph.xMax, glyph.yMax);
        return Object.freeze(cbox);
    }
    // Parses a single glyph coordinate
    _parseGlyphCoord(stream, prev, short, same) {
        if (short) {
            var val = stream.readUInt8();
            if (!same) val = -val;
            val += prev;
        } else if (same) var val = prev;
        else var val = prev + stream.readInt16BE();
        return val;
    }
    // Decodes the glyph data into points for simple glyphs,
    // or components for composite glyphs
    _decode() {
        let glyfPos = this._font.loca.offsets[this.id];
        let nextPos = this._font.loca.offsets[this.id + 1];
        // Nothing to do if there is no data for this glyph
        if (glyfPos === nextPos) return null;
        let stream = this._font._getTableStream("glyf");
        stream.pos += glyfPos;
        let startPos = stream.pos;
        let glyph = $f680320fa07ef53d$var$GlyfHeader.decode(stream);
        if (glyph.numberOfContours > 0) this._decodeSimple(glyph, stream);
        else if (glyph.numberOfContours < 0) this._decodeComposite(glyph, stream, startPos);
        return glyph;
    }
    _decodeSimple(glyph, stream) {
        // this is a simple glyph
        glyph.points = [];
        let endPtsOfContours = new $gfJaN$restructure.Array($gfJaN$restructure.uint16, glyph.numberOfContours).decode(stream);
        glyph.instructions = new $gfJaN$restructure.Array($gfJaN$restructure.uint8, $gfJaN$restructure.uint16).decode(stream);
        let flags = [];
        let numCoords = endPtsOfContours[endPtsOfContours.length - 1] + 1;
        while(flags.length < numCoords){
            var flag = stream.readUInt8();
            flags.push(flag);
            // check for repeat flag
            if (flag & $f680320fa07ef53d$var$REPEAT) {
                let count = stream.readUInt8();
                for(let j = 0; j < count; j++)flags.push(flag);
            }
        }
        for(var i = 0; i < flags.length; i++){
            var flag = flags[i];
            let point = new $f680320fa07ef53d$export$baf26146a414f24a(!!(flag & $f680320fa07ef53d$var$ON_CURVE), endPtsOfContours.indexOf(i) >= 0, 0, 0);
            glyph.points.push(point);
        }
        let px = 0;
        for(var i = 0; i < flags.length; i++){
            var flag = flags[i];
            glyph.points[i].x = px = this._parseGlyphCoord(stream, px, flag & $f680320fa07ef53d$var$X_SHORT_VECTOR, flag & $f680320fa07ef53d$var$SAME_X);
        }
        let py = 0;
        for(var i = 0; i < flags.length; i++){
            var flag = flags[i];
            glyph.points[i].y = py = this._parseGlyphCoord(stream, py, flag & $f680320fa07ef53d$var$Y_SHORT_VECTOR, flag & $f680320fa07ef53d$var$SAME_Y);
        }
        if (this._font._variationProcessor) {
            let points = glyph.points.slice();
            points.push(...this._getPhantomPoints(glyph));
            this._font._variationProcessor.transformPoints(this.id, points);
            glyph.phantomPoints = points.slice(-4);
        }
        return;
    }
    _decodeComposite(glyph, stream, offset = 0) {
        // this is a composite glyph
        glyph.components = [];
        let haveInstructions = false;
        let flags = $f680320fa07ef53d$var$MORE_COMPONENTS;
        while(flags & $f680320fa07ef53d$var$MORE_COMPONENTS){
            flags = stream.readUInt16BE();
            let gPos = stream.pos - offset;
            let glyphID = stream.readUInt16BE();
            if (!haveInstructions) haveInstructions = (flags & $f680320fa07ef53d$var$WE_HAVE_INSTRUCTIONS) !== 0;
            if (flags & $f680320fa07ef53d$var$ARG_1_AND_2_ARE_WORDS) {
                var dx = stream.readInt16BE();
                var dy = stream.readInt16BE();
            } else {
                var dx = stream.readInt8();
                var dy = stream.readInt8();
            }
            var component = new $f680320fa07ef53d$var$Component(glyphID, dx, dy);
            component.pos = gPos;
            if (flags & $f680320fa07ef53d$var$WE_HAVE_A_SCALE) component.scaleX = component.scaleY = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
            else if (flags & $f680320fa07ef53d$var$WE_HAVE_AN_X_AND_Y_SCALE) {
                component.scaleX = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
                component.scaleY = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
            } else if (flags & $f680320fa07ef53d$var$WE_HAVE_A_TWO_BY_TWO) {
                component.scaleX = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
                component.scale01 = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
                component.scale10 = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
                component.scaleY = (stream.readUInt8() << 24 | stream.readUInt8() << 16) / 1073741824;
            }
            glyph.components.push(component);
        }
        if (this._font._variationProcessor) {
            let points = [];
            for(let j = 0; j < glyph.components.length; j++){
                var component = glyph.components[j];
                points.push(new $f680320fa07ef53d$export$baf26146a414f24a(true, true, component.dx, component.dy));
            }
            points.push(...this._getPhantomPoints(glyph));
            this._font._variationProcessor.transformPoints(this.id, points);
            glyph.phantomPoints = points.splice(-4, 4);
            for(let i = 0; i < points.length; i++){
                let point = points[i];
                glyph.components[i].dx = point.x;
                glyph.components[i].dy = point.y;
            }
        }
        return haveInstructions;
    }
    _getPhantomPoints(glyph) {
        let cbox = this._getCBox(true);
        if (this._metrics == null) this._metrics = $0e4f52d7996e478b$export$2e2bcd8739ae039.prototype._getMetrics.call(this, cbox);
        let { advanceWidth: advanceWidth, advanceHeight: advanceHeight, leftBearing: leftBearing, topBearing: topBearing } = this._metrics;
        return [
            new $f680320fa07ef53d$export$baf26146a414f24a(false, true, glyph.xMin - leftBearing, 0),
            new $f680320fa07ef53d$export$baf26146a414f24a(false, true, glyph.xMin - leftBearing + advanceWidth, 0),
            new $f680320fa07ef53d$export$baf26146a414f24a(false, true, 0, glyph.yMax + topBearing),
            new $f680320fa07ef53d$export$baf26146a414f24a(false, true, 0, glyph.yMax + topBearing + advanceHeight)
        ];
    }
    // Decodes font data, resolves composite glyphs, and returns an array of contours
    _getContours() {
        let glyph = this._decode();
        if (!glyph) return [];
        let points = [];
        if (glyph.numberOfContours < 0) for (let component of glyph.components){
            let contours = this._font.getGlyph(component.glyphID)._getContours();
            for(let i = 0; i < contours.length; i++){
                let contour = contours[i];
                for(let j = 0; j < contour.length; j++){
                    let point = contour[j];
                    let x = point.x * component.scaleX + point.y * component.scale01 + component.dx;
                    let y = point.y * component.scaleY + point.x * component.scale10 + component.dy;
                    points.push(new $f680320fa07ef53d$export$baf26146a414f24a(point.onCurve, point.endContour, x, y));
                }
            }
        }
        else points = glyph.points || [];
        // Recompute and cache metrics if we performed variation processing, and don't have an HVAR table
        if (glyph.phantomPoints && !this._font.directory.tables.HVAR) {
            this._metrics.advanceWidth = glyph.phantomPoints[1].x - glyph.phantomPoints[0].x;
            this._metrics.advanceHeight = glyph.phantomPoints[3].y - glyph.phantomPoints[2].y;
            this._metrics.leftBearing = glyph.xMin - glyph.phantomPoints[0].x;
            this._metrics.topBearing = glyph.phantomPoints[2].y - glyph.yMax;
        }
        let contours = [];
        let cur = [];
        for(let k = 0; k < points.length; k++){
            var point = points[k];
            cur.push(point);
            if (point.endContour) {
                contours.push(cur);
                cur = [];
            }
        }
        return contours;
    }
    _getMetrics() {
        if (this._metrics) return this._metrics;
        let cbox = this._getCBox(true);
        super._getMetrics(cbox);
        if (this._font._variationProcessor && !this._font.HVAR) this.path;
        return this._metrics;
    }
    // Converts contours to a Path object that can be rendered
    _getPath() {
        let contours = this._getContours();
        let path = new $67ee4828d81adb28$export$2e2bcd8739ae039;
        for(let i = 0; i < contours.length; i++){
            let contour = contours[i];
            let firstPt = contour[0];
            let lastPt = contour[contour.length - 1];
            let start = 0;
            if (firstPt.onCurve) {
                // The first point will be consumed by the moveTo command, so skip in the loop
                var curvePt = null;
                start = 1;
            } else {
                if (lastPt.onCurve) firstPt = lastPt;
                else firstPt = new $f680320fa07ef53d$export$baf26146a414f24a(false, false, (firstPt.x + lastPt.x) / 2, (firstPt.y + lastPt.y) / 2);
                var curvePt = firstPt;
            }
            path.moveTo(firstPt.x, firstPt.y);
            for(let j = start; j < contour.length; j++){
                let pt = contour[j];
                let prevPt = j === 0 ? firstPt : contour[j - 1];
                if (prevPt.onCurve && pt.onCurve) path.lineTo(pt.x, pt.y);
                else if (prevPt.onCurve && !pt.onCurve) var curvePt = pt;
                else if (!prevPt.onCurve && !pt.onCurve) {
                    let midX = (prevPt.x + pt.x) / 2;
                    let midY = (prevPt.y + pt.y) / 2;
                    path.quadraticCurveTo(prevPt.x, prevPt.y, midX, midY);
                    var curvePt = pt;
                } else if (!prevPt.onCurve && pt.onCurve) {
                    path.quadraticCurveTo(curvePt.x, curvePt.y, pt.x, pt.y);
                    var curvePt = null;
                } else throw new Error("Unknown TTF path state");
            }
            // Connect the first and last points
            if (curvePt) path.quadraticCurveTo(curvePt.x, curvePt.y, firstPt.x, firstPt.y);
            path.closePath();
        }
        return path;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "TTF");
    }
}
class $7ee0705195f3b047$export$2e2bcd8739ae039 extends $0e4f52d7996e478b$export$2e2bcd8739ae039 {
    _getName() {
        if (this._font.CFF2) return super._getName();
        return this._font["CFF "].getGlyphName(this.id);
    }
    bias(s) {
        if (s.length < 1240) return 107;
        else if (s.length < 33900) return 1131;
        else return 32768;
    }
    _getPath() {
        let cff = this._font.CFF2 || this._font["CFF "];
        let { stream: stream } = cff;
        let str = cff.topDict.CharStrings[this.id];
        let end = str.offset + str.length;
        stream.pos = str.offset;
        let path = new $67ee4828d81adb28$export$2e2bcd8739ae039;
        let stack = [];
        let trans = [];
        let width = null;
        let nStems = 0;
        let x1 = 0, y1 = 0;
        let usedGsubrs;
        let usedSubrs;
        let open = false;
        this._usedGsubrs = usedGsubrs = {};
        this._usedSubrs = usedSubrs = {};
        let gsubrs = cff.globalSubrIndex || [];
        let gsubrsBias = this.bias(gsubrs);
        let privateDict = cff.privateDictForGlyph(this.id) || {};
        let subrs = privateDict.Subrs || [];
        let subrsBias = this.bias(subrs);
        let vstore = cff.topDict.vstore && cff.topDict.vstore.itemVariationStore;
        let vsindex = privateDict.vsindex;
        let variationProcessor = this._font._variationProcessor;
        function checkWidth() {
            if (width == null) width = stack.shift() + privateDict.nominalWidthX;
        }
        function parseStems() {
            if (stack.length % 2 !== 0) checkWidth();
            nStems += stack.length >> 1;
            return stack.length = 0;
        }
        function moveTo(x, y) {
            if (open) path.closePath();
            path.moveTo(x, y);
            open = true;
        }
        let parse = function() {
            while(stream.pos < end){
                let op = stream.readUInt8();
                if (op < 32) {
                    let index, subr, phase;
                    switch(op){
                        case 1:
                        case 3:
                        case 18:
                        case 23:
                            parseStems();
                            break;
                        case 4:
                            if (stack.length > 1) checkWidth();
                            y1 += stack.shift();
                            moveTo(x1, y1);
                            break;
                        case 5:
                            while(stack.length >= 2){
                                x1 += stack.shift();
                                y1 += stack.shift();
                                path.lineTo(x1, y1);
                            }
                            break;
                        case 6:
                        case 7:
                            phase = op === 6;
                            while(stack.length >= 1){
                                if (phase) x1 += stack.shift();
                                else y1 += stack.shift();
                                path.lineTo(x1, y1);
                                phase = !phase;
                            }
                            break;
                        case 8:
                            while(stack.length > 0){
                                var c1x = x1 + stack.shift();
                                var c1y = y1 + stack.shift();
                                var c2x = c1x + stack.shift();
                                var c2y = c1y + stack.shift();
                                x1 = c2x + stack.shift();
                                y1 = c2y + stack.shift();
                                path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                            }
                            break;
                        case 10:
                            index = stack.pop() + subrsBias;
                            subr = subrs[index];
                            if (subr) {
                                usedSubrs[index] = true;
                                var p = stream.pos;
                                var e = end;
                                stream.pos = subr.offset;
                                end = subr.offset + subr.length;
                                parse();
                                stream.pos = p;
                                end = e;
                            }
                            break;
                        case 11:
                            if (cff.version >= 2) break;
                            return;
                        case 14:
                            if (cff.version >= 2) break;
                            if (stack.length > 0) checkWidth();
                            if (open) {
                                path.closePath();
                                open = false;
                            }
                            break;
                        case 15:
                            if (cff.version < 2) throw new Error("vsindex operator not supported in CFF v1");
                            vsindex = stack.pop();
                            break;
                        case 16:
                            {
                                if (cff.version < 2) throw new Error("blend operator not supported in CFF v1");
                                if (!variationProcessor) throw new Error("blend operator in non-variation font");
                                let blendVector = variationProcessor.getBlendVector(vstore, vsindex);
                                let numBlends = stack.pop();
                                let numOperands = numBlends * blendVector.length;
                                let delta = stack.length - numOperands;
                                let base = delta - numBlends;
                                for(let i = 0; i < numBlends; i++){
                                    let sum = stack[base + i];
                                    for(let j = 0; j < blendVector.length; j++)sum += blendVector[j] * stack[delta++];
                                    stack[base + i] = sum;
                                }
                                while(numOperands--)stack.pop();
                                break;
                            }
                        case 19:
                        case 20:
                            parseStems();
                            stream.pos += nStems + 7 >> 3;
                            break;
                        case 21:
                            if (stack.length > 2) checkWidth();
                            x1 += stack.shift();
                            y1 += stack.shift();
                            moveTo(x1, y1);
                            break;
                        case 22:
                            if (stack.length > 1) checkWidth();
                            x1 += stack.shift();
                            moveTo(x1, y1);
                            break;
                        case 24:
                            while(stack.length >= 8){
                                var c1x = x1 + stack.shift();
                                var c1y = y1 + stack.shift();
                                var c2x = c1x + stack.shift();
                                var c2y = c1y + stack.shift();
                                x1 = c2x + stack.shift();
                                y1 = c2y + stack.shift();
                                path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                            }
                            x1 += stack.shift();
                            y1 += stack.shift();
                            path.lineTo(x1, y1);
                            break;
                        case 25:
                            while(stack.length >= 8){
                                x1 += stack.shift();
                                y1 += stack.shift();
                                path.lineTo(x1, y1);
                            }
                            var c1x = x1 + stack.shift();
                            var c1y = y1 + stack.shift();
                            var c2x = c1x + stack.shift();
                            var c2y = c1y + stack.shift();
                            x1 = c2x + stack.shift();
                            y1 = c2y + stack.shift();
                            path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                            break;
                        case 26:
                            if (stack.length % 2) x1 += stack.shift();
                            while(stack.length >= 4){
                                c1x = x1;
                                c1y = y1 + stack.shift();
                                c2x = c1x + stack.shift();
                                c2y = c1y + stack.shift();
                                x1 = c2x;
                                y1 = c2y + stack.shift();
                                path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                            }
                            break;
                        case 27:
                            if (stack.length % 2) y1 += stack.shift();
                            while(stack.length >= 4){
                                c1x = x1 + stack.shift();
                                c1y = y1;
                                c2x = c1x + stack.shift();
                                c2y = c1y + stack.shift();
                                x1 = c2x + stack.shift();
                                y1 = c2y;
                                path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                            }
                            break;
                        case 28:
                            stack.push(stream.readInt16BE());
                            break;
                        case 29:
                            index = stack.pop() + gsubrsBias;
                            subr = gsubrs[index];
                            if (subr) {
                                usedGsubrs[index] = true;
                                var p = stream.pos;
                                var e = end;
                                stream.pos = subr.offset;
                                end = subr.offset + subr.length;
                                parse();
                                stream.pos = p;
                                end = e;
                            }
                            break;
                        case 30:
                        case 31:
                            phase = op === 31;
                            while(stack.length >= 4){
                                if (phase) {
                                    c1x = x1 + stack.shift();
                                    c1y = y1;
                                    c2x = c1x + stack.shift();
                                    c2y = c1y + stack.shift();
                                    y1 = c2y + stack.shift();
                                    x1 = c2x + (stack.length === 1 ? stack.shift() : 0);
                                } else {
                                    c1x = x1;
                                    c1y = y1 + stack.shift();
                                    c2x = c1x + stack.shift();
                                    c2y = c1y + stack.shift();
                                    x1 = c2x + stack.shift();
                                    y1 = c2y + (stack.length === 1 ? stack.shift() : 0);
                                }
                                path.bezierCurveTo(c1x, c1y, c2x, c2y, x1, y1);
                                phase = !phase;
                            }
                            break;
                        case 12:
                            op = stream.readUInt8();
                            switch(op){
                                case 3:
                                    let a = stack.pop();
                                    let b = stack.pop();
                                    stack.push(a && b ? 1 : 0);
                                    break;
                                case 4:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a || b ? 1 : 0);
                                    break;
                                case 5:
                                    a = stack.pop();
                                    stack.push(a ? 0 : 1);
                                    break;
                                case 9:
                                    a = stack.pop();
                                    stack.push(Math.abs(a));
                                    break;
                                case 10:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a + b);
                                    break;
                                case 11:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a - b);
                                    break;
                                case 12:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a / b);
                                    break;
                                case 14:
                                    a = stack.pop();
                                    stack.push(-a);
                                    break;
                                case 15:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a === b ? 1 : 0);
                                    break;
                                case 18:
                                    stack.pop();
                                    break;
                                case 20:
                                    let val = stack.pop();
                                    let idx = stack.pop();
                                    trans[idx] = val;
                                    break;
                                case 21:
                                    idx = stack.pop();
                                    stack.push(trans[idx] || 0);
                                    break;
                                case 22:
                                    let s1 = stack.pop();
                                    let s2 = stack.pop();
                                    let v1 = stack.pop();
                                    let v2 = stack.pop();
                                    stack.push(v1 <= v2 ? s1 : s2);
                                    break;
                                case 23:
                                    stack.push(Math.random());
                                    break;
                                case 24:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(a * b);
                                    break;
                                case 26:
                                    a = stack.pop();
                                    stack.push(Math.sqrt(a));
                                    break;
                                case 27:
                                    a = stack.pop();
                                    stack.push(a, a);
                                    break;
                                case 28:
                                    a = stack.pop();
                                    b = stack.pop();
                                    stack.push(b, a);
                                    break;
                                case 29:
                                    idx = stack.pop();
                                    if (idx < 0) idx = 0;
                                    else if (idx > stack.length - 1) idx = stack.length - 1;
                                    stack.push(stack[idx]);
                                    break;
                                case 30:
                                    let n = stack.pop();
                                    let j = stack.pop();
                                    if (j >= 0) while(j > 0){
                                        var t = stack[n - 1];
                                        for(let i = n - 2; i >= 0; i--)stack[i + 1] = stack[i];
                                        stack[0] = t;
                                        j--;
                                    }
                                    else while(j < 0){
                                        var t = stack[0];
                                        for(let i = 0; i <= n; i++)stack[i] = stack[i + 1];
                                        stack[n - 1] = t;
                                        j++;
                                    }
                                    break;
                                case 34:
                                    c1x = x1 + stack.shift();
                                    c1y = y1;
                                    c2x = c1x + stack.shift();
                                    c2y = c1y + stack.shift();
                                    let c3x = c2x + stack.shift();
                                    let c3y = c2y;
                                    let c4x = c3x + stack.shift();
                                    let c4y = c3y;
                                    let c5x = c4x + stack.shift();
                                    let c5y = c4y;
                                    let c6x = c5x + stack.shift();
                                    let c6y = c5y;
                                    x1 = c6x;
                                    y1 = c6y;
                                    path.bezierCurveTo(c1x, c1y, c2x, c2y, c3x, c3y);
                                    path.bezierCurveTo(c4x, c4y, c5x, c5y, c6x, c6y);
                                    break;
                                case 35:
                                    let pts = [];
                                    for(let i = 0; i <= 5; i++){
                                        x1 += stack.shift();
                                        y1 += stack.shift();
                                        pts.push(x1, y1);
                                    }
                                    path.bezierCurveTo(...pts.slice(0, 6));
                                    path.bezierCurveTo(...pts.slice(6));
                                    stack.shift(); // fd
                                    break;
                                case 36:
                                    c1x = x1 + stack.shift();
                                    c1y = y1 + stack.shift();
                                    c2x = c1x + stack.shift();
                                    c2y = c1y + stack.shift();
                                    c3x = c2x + stack.shift();
                                    c3y = c2y;
                                    c4x = c3x + stack.shift();
                                    c4y = c3y;
                                    c5x = c4x + stack.shift();
                                    c5y = c4y + stack.shift();
                                    c6x = c5x + stack.shift();
                                    c6y = c5y;
                                    x1 = c6x;
                                    y1 = c6y;
                                    path.bezierCurveTo(c1x, c1y, c2x, c2y, c3x, c3y);
                                    path.bezierCurveTo(c4x, c4y, c5x, c5y, c6x, c6y);
                                    break;
                                case 37:
                                    let startx = x1;
                                    let starty = y1;
                                    pts = [];
                                    for(let i1 = 0; i1 <= 4; i1++){
                                        x1 += stack.shift();
                                        y1 += stack.shift();
                                        pts.push(x1, y1);
                                    }
                                    if (Math.abs(x1 - startx) > Math.abs(y1 - starty)) {
                                        x1 += stack.shift();
                                        y1 = starty;
                                    } else {
                                        x1 = startx;
                                        y1 += stack.shift();
                                    }
                                    pts.push(x1, y1);
                                    path.bezierCurveTo(...pts.slice(0, 6));
                                    path.bezierCurveTo(...pts.slice(6));
                                    break;
                                default:
                                    throw new Error(`Unknown op: 12 ${op}`);
                            }
                            break;
                        default:
                            throw new Error(`Unknown op: ${op}`);
                    }
                } else if (op < 247) stack.push(op - 139);
                else if (op < 251) {
                    var b1 = stream.readUInt8();
                    stack.push((op - 247) * 256 + b1 + 108);
                } else if (op < 255) {
                    var b1 = stream.readUInt8();
                    stack.push(-(op - 251) * 256 - b1 - 108);
                } else stack.push(stream.readInt32BE() / 65536);
            }
        };
        parse();
        if (open) path.closePath();
        return path;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "CFF");
    }
}
let $55855d6d316b015e$var$SBIXImage = new $gfJaN$restructure.Struct({
    originX: $gfJaN$restructure.uint16,
    originY: $gfJaN$restructure.uint16,
    type: new $gfJaN$restructure.String(4),
    data: new $gfJaN$restructure.Buffer((t)=>t.parent.buflen - t._currentOffset)
});
class $55855d6d316b015e$export$2e2bcd8739ae039 extends $f680320fa07ef53d$export$2e2bcd8739ae039 {
    /**
   * Returns an object representing a glyph image at the given point size.
   * The object has a data property with a Buffer containing the actual image data,
   * along with the image type, and origin.
   *
   * @param {number} size
   * @return {object}
   */ getImageForSize(size) {
        for(let i = 0; i < this._font.sbix.imageTables.length; i++){
            var table = this._font.sbix.imageTables[i];
            if (table.ppem >= size) break;
        }
        let offsets = table.imageOffsets;
        let start = offsets[this.id];
        let end = offsets[this.id + 1];
        if (start === end) return null;
        this._font.stream.pos = start;
        return $55855d6d316b015e$var$SBIXImage.decode(this._font.stream, {
            buflen: end - start
        });
    }
    render(ctx, size) {
        let img = this.getImageForSize(size);
        if (img != null) {
            let scale = size / this._font.unitsPerEm;
            ctx.image(img.data, {
                height: size,
                x: img.originX,
                y: (this.bbox.minY - img.originY) * scale
            });
        }
        if (this._font.sbix.flags.renderOutlines) super.render(ctx, size);
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "SBIX");
    }
}
class $42d9dbd2de9ee2d8$var$COLRLayer {
    constructor(glyph, color){
        this.glyph = glyph;
        this.color = color;
    }
}
class $42d9dbd2de9ee2d8$export$2e2bcd8739ae039 extends $0e4f52d7996e478b$export$2e2bcd8739ae039 {
    _getBBox() {
        let bbox = new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039;
        for(let i = 0; i < this.layers.length; i++){
            let layer = this.layers[i];
            let b = layer.glyph.bbox;
            bbox.addPoint(b.minX, b.minY);
            bbox.addPoint(b.maxX, b.maxY);
        }
        return bbox;
    }
    /**
   * Returns an array of objects containing the glyph and color for
   * each layer in the composite color glyph.
   * @type {object[]}
   */ get layers() {
        let cpal = this._font.CPAL;
        let colr = this._font.COLR;
        let low = 0;
        let high = colr.baseGlyphRecord.length - 1;
        while(low <= high){
            let mid = low + high >> 1;
            var rec = colr.baseGlyphRecord[mid];
            if (this.id < rec.gid) high = mid - 1;
            else if (this.id > rec.gid) low = mid + 1;
            else {
                var baseLayer = rec;
                break;
            }
        }
        // if base glyph not found in COLR table,
        // default to normal glyph from glyf or CFF
        if (baseLayer == null) {
            var g = this._font._getBaseGlyph(this.id);
            var color = {
                red: 0,
                green: 0,
                blue: 0,
                alpha: 255
            };
            return [
                new $42d9dbd2de9ee2d8$var$COLRLayer(g, color)
            ];
        }
        // otherwise, return an array of all the layers
        let layers = [];
        for(let i = baseLayer.firstLayerIndex; i < baseLayer.firstLayerIndex + baseLayer.numLayers; i++){
            var rec = colr.layerRecords[i];
            var color = cpal.colorRecords[rec.paletteIndex];
            var g = this._font._getBaseGlyph(rec.gid);
            layers.push(new $42d9dbd2de9ee2d8$var$COLRLayer(g, color));
        }
        return layers;
    }
    render(ctx, size) {
        for (let { glyph: glyph, color: color } of this.layers){
            ctx.fillColor([
                color.red,
                color.green,
                color.blue
            ], color.alpha / 255 * 100);
            glyph.render(ctx, size);
        }
        return;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "COLR");
    }
}
const $7586bb9ea67c41d8$var$TUPLES_SHARE_POINT_NUMBERS = 0x8000;
const $7586bb9ea67c41d8$var$TUPLE_COUNT_MASK = 0x0fff;
const $7586bb9ea67c41d8$var$EMBEDDED_TUPLE_COORD = 0x8000;
const $7586bb9ea67c41d8$var$INTERMEDIATE_TUPLE = 0x4000;
const $7586bb9ea67c41d8$var$PRIVATE_POINT_NUMBERS = 0x2000;
const $7586bb9ea67c41d8$var$TUPLE_INDEX_MASK = 0x0fff;
const $7586bb9ea67c41d8$var$POINTS_ARE_WORDS = 0x80;
const $7586bb9ea67c41d8$var$POINT_RUN_COUNT_MASK = 0x7f;
const $7586bb9ea67c41d8$var$DELTAS_ARE_ZERO = 0x80;
const $7586bb9ea67c41d8$var$DELTAS_ARE_WORDS = 0x40;
const $7586bb9ea67c41d8$var$DELTA_RUN_COUNT_MASK = 0x3f;
class $7586bb9ea67c41d8$export$2e2bcd8739ae039 {
    normalizeCoords(coords) {
        // the default mapping is linear along each axis, in two segments:
        // from the minValue to defaultValue, and from defaultValue to maxValue.
        let normalized = [];
        for(var i = 0; i < this.font.fvar.axis.length; i++){
            let axis = this.font.fvar.axis[i];
            if (coords[i] < axis.defaultValue) normalized.push((coords[i] - axis.defaultValue + Number.EPSILON) / (axis.defaultValue - axis.minValue + Number.EPSILON));
            else normalized.push((coords[i] - axis.defaultValue + Number.EPSILON) / (axis.maxValue - axis.defaultValue + Number.EPSILON));
        }
        // if there is an avar table, the normalized value is calculated
        // by interpolating between the two nearest mapped values.
        if (this.font.avar) for(var i = 0; i < this.font.avar.segment.length; i++){
            let segment = this.font.avar.segment[i];
            for(let j = 0; j < segment.correspondence.length; j++){
                let pair = segment.correspondence[j];
                if (j >= 1 && normalized[i] < pair.fromCoord) {
                    let prev = segment.correspondence[j - 1];
                    normalized[i] = ((normalized[i] - prev.fromCoord) * (pair.toCoord - prev.toCoord) + Number.EPSILON) / (pair.fromCoord - prev.fromCoord + Number.EPSILON) + prev.toCoord;
                    break;
                }
            }
        }
        return normalized;
    }
    transformPoints(gid, glyphPoints) {
        if (!this.font.fvar || !this.font.gvar) return;
        let { gvar: gvar } = this.font;
        if (gid >= gvar.glyphCount) return;
        let offset = gvar.offsets[gid];
        if (offset === gvar.offsets[gid + 1]) return;
        // Read the gvar data for this glyph
        let { stream: stream } = this.font;
        stream.pos = offset;
        if (stream.pos >= stream.length) return;
        let tupleCount = stream.readUInt16BE();
        let offsetToData = offset + stream.readUInt16BE();
        if (tupleCount & $7586bb9ea67c41d8$var$TUPLES_SHARE_POINT_NUMBERS) {
            var here = stream.pos;
            stream.pos = offsetToData;
            var sharedPoints = this.decodePoints();
            offsetToData = stream.pos;
            stream.pos = here;
        }
        let origPoints = glyphPoints.map((pt)=>pt.copy());
        tupleCount &= $7586bb9ea67c41d8$var$TUPLE_COUNT_MASK;
        for(let i = 0; i < tupleCount; i++){
            let tupleDataSize = stream.readUInt16BE();
            let tupleIndex = stream.readUInt16BE();
            if (tupleIndex & $7586bb9ea67c41d8$var$EMBEDDED_TUPLE_COORD) {
                var tupleCoords = [];
                for(let a = 0; a < gvar.axisCount; a++)tupleCoords.push(stream.readInt16BE() / 16384);
            } else {
                if ((tupleIndex & $7586bb9ea67c41d8$var$TUPLE_INDEX_MASK) >= gvar.globalCoordCount) throw new Error("Invalid gvar table");
                var tupleCoords = gvar.globalCoords[tupleIndex & $7586bb9ea67c41d8$var$TUPLE_INDEX_MASK];
            }
            if (tupleIndex & $7586bb9ea67c41d8$var$INTERMEDIATE_TUPLE) {
                var startCoords = [];
                for(let a = 0; a < gvar.axisCount; a++)startCoords.push(stream.readInt16BE() / 16384);
                var endCoords = [];
                for(let a1 = 0; a1 < gvar.axisCount; a1++)endCoords.push(stream.readInt16BE() / 16384);
            }
            // Get the factor at which to apply this tuple
            let factor = this.tupleFactor(tupleIndex, tupleCoords, startCoords, endCoords);
            if (factor === 0) {
                offsetToData += tupleDataSize;
                continue;
            }
            var here = stream.pos;
            stream.pos = offsetToData;
            if (tupleIndex & $7586bb9ea67c41d8$var$PRIVATE_POINT_NUMBERS) var points = this.decodePoints();
            else var points = sharedPoints;
            // points.length = 0 means there are deltas for all points
            let nPoints = points.length === 0 ? glyphPoints.length : points.length;
            let xDeltas = this.decodeDeltas(nPoints);
            let yDeltas = this.decodeDeltas(nPoints);
            if (points.length === 0) for(let i = 0; i < glyphPoints.length; i++){
                var point = glyphPoints[i];
                point.x += Math.round(xDeltas[i] * factor);
                point.y += Math.round(yDeltas[i] * factor);
            }
            else {
                let outPoints = origPoints.map((pt)=>pt.copy());
                let hasDelta = glyphPoints.map(()=>false);
                for(let i = 0; i < points.length; i++){
                    let idx = points[i];
                    if (idx < glyphPoints.length) {
                        let point = outPoints[idx];
                        hasDelta[idx] = true;
                        point.x += Math.round(xDeltas[i] * factor);
                        point.y += Math.round(yDeltas[i] * factor);
                    }
                }
                this.interpolateMissingDeltas(outPoints, origPoints, hasDelta);
                for(let i1 = 0; i1 < glyphPoints.length; i1++){
                    let deltaX = outPoints[i1].x - origPoints[i1].x;
                    let deltaY = outPoints[i1].y - origPoints[i1].y;
                    glyphPoints[i1].x += deltaX;
                    glyphPoints[i1].y += deltaY;
                }
            }
            offsetToData += tupleDataSize;
            stream.pos = here;
        }
    }
    decodePoints() {
        let stream = this.font.stream;
        let count = stream.readUInt8();
        if (count & $7586bb9ea67c41d8$var$POINTS_ARE_WORDS) count = (count & $7586bb9ea67c41d8$var$POINT_RUN_COUNT_MASK) << 8 | stream.readUInt8();
        let points = new Uint16Array(count);
        let i = 0;
        let point = 0;
        while(i < count){
            let run = stream.readUInt8();
            let runCount = (run & $7586bb9ea67c41d8$var$POINT_RUN_COUNT_MASK) + 1;
            let fn = run & $7586bb9ea67c41d8$var$POINTS_ARE_WORDS ? stream.readUInt16 : stream.readUInt8;
            for(let j = 0; j < runCount && i < count; j++){
                point += fn.call(stream);
                points[i++] = point;
            }
        }
        return points;
    }
    decodeDeltas(count) {
        let stream = this.font.stream;
        let i = 0;
        let deltas = new Int16Array(count);
        while(i < count){
            let run = stream.readUInt8();
            let runCount = (run & $7586bb9ea67c41d8$var$DELTA_RUN_COUNT_MASK) + 1;
            if (run & $7586bb9ea67c41d8$var$DELTAS_ARE_ZERO) i += runCount;
            else {
                let fn = run & $7586bb9ea67c41d8$var$DELTAS_ARE_WORDS ? stream.readInt16BE : stream.readInt8;
                for(let j = 0; j < runCount && i < count; j++)deltas[i++] = fn.call(stream);
            }
        }
        return deltas;
    }
    tupleFactor(tupleIndex, tupleCoords, startCoords, endCoords) {
        let normalized = this.normalizedCoords;
        let { gvar: gvar } = this.font;
        let factor = 1;
        for(let i = 0; i < gvar.axisCount; i++){
            if (tupleCoords[i] === 0) continue;
            if (normalized[i] === 0) return 0;
            if ((tupleIndex & $7586bb9ea67c41d8$var$INTERMEDIATE_TUPLE) === 0) {
                if (normalized[i] < Math.min(0, tupleCoords[i]) || normalized[i] > Math.max(0, tupleCoords[i])) return 0;
                factor = (factor * normalized[i] + Number.EPSILON) / (tupleCoords[i] + Number.EPSILON);
            } else {
                if (normalized[i] < startCoords[i] || normalized[i] > endCoords[i]) return 0;
                else if (normalized[i] < tupleCoords[i]) factor = factor * (normalized[i] - startCoords[i] + Number.EPSILON) / (tupleCoords[i] - startCoords[i] + Number.EPSILON);
                else factor = factor * (endCoords[i] - normalized[i] + Number.EPSILON) / (endCoords[i] - tupleCoords[i] + Number.EPSILON);
            }
        }
        return factor;
    }
    // Interpolates points without delta values.
    // Needed for the Ø and Q glyphs in Skia.
    // Algorithm from Freetype.
    interpolateMissingDeltas(points, inPoints, hasDelta) {
        if (points.length === 0) return;
        let point = 0;
        while(point < points.length){
            let firstPoint = point;
            // find the end point of the contour
            let endPoint = point;
            let pt = points[endPoint];
            while(!pt.endContour)pt = points[++endPoint];
            // find the first point that has a delta
            while(point <= endPoint && !hasDelta[point])point++;
            if (point > endPoint) continue;
            let firstDelta = point;
            let curDelta = point;
            point++;
            while(point <= endPoint){
                // find the next point with a delta, and interpolate intermediate points
                if (hasDelta[point]) {
                    this.deltaInterpolate(curDelta + 1, point - 1, curDelta, point, inPoints, points);
                    curDelta = point;
                }
                point++;
            }
            // shift contour if we only have a single delta
            if (curDelta === firstDelta) this.deltaShift(firstPoint, endPoint, curDelta, inPoints, points);
            else {
                // otherwise, handle the remaining points at the end and beginning of the contour
                this.deltaInterpolate(curDelta + 1, endPoint, curDelta, firstDelta, inPoints, points);
                if (firstDelta > 0) this.deltaInterpolate(firstPoint, firstDelta - 1, curDelta, firstDelta, inPoints, points);
            }
            point = endPoint + 1;
        }
    }
    deltaInterpolate(p1, p2, ref1, ref2, inPoints, outPoints) {
        if (p1 > p2) return;
        let iterable = [
            "x",
            "y"
        ];
        for(let i = 0; i < iterable.length; i++){
            let k = iterable[i];
            if (inPoints[ref1][k] > inPoints[ref2][k]) {
                var p = ref1;
                ref1 = ref2;
                ref2 = p;
            }
            let in1 = inPoints[ref1][k];
            let in2 = inPoints[ref2][k];
            let out1 = outPoints[ref1][k];
            let out2 = outPoints[ref2][k];
            // If the reference points have the same coordinate but different
            // delta, inferred delta is zero.  Otherwise interpolate.
            if (in1 !== in2 || out1 === out2) {
                let scale = in1 === in2 ? 0 : (out2 - out1) / (in2 - in1);
                for(let p = p1; p <= p2; p++){
                    let out = inPoints[p][k];
                    if (out <= in1) out += out1 - in1;
                    else if (out >= in2) out += out2 - in2;
                    else out = out1 + (out - in1) * scale;
                    outPoints[p][k] = out;
                }
            }
        }
    }
    deltaShift(p1, p2, ref, inPoints, outPoints) {
        let deltaX = outPoints[ref].x - inPoints[ref].x;
        let deltaY = outPoints[ref].y - inPoints[ref].y;
        if (deltaX === 0 && deltaY === 0) return;
        for(let p = p1; p <= p2; p++)if (p !== ref) {
            outPoints[p].x += deltaX;
            outPoints[p].y += deltaY;
        }
    }
    getAdvanceAdjustment(gid, table) {
        let outerIndex, innerIndex;
        if (table.advanceWidthMapping) {
            let idx = gid;
            if (idx >= table.advanceWidthMapping.mapCount) idx = table.advanceWidthMapping.mapCount - 1;
            let entryFormat = table.advanceWidthMapping.entryFormat;
            ({ outerIndex: outerIndex, innerIndex: innerIndex } = table.advanceWidthMapping.mapData[idx]);
        } else {
            outerIndex = 0;
            innerIndex = gid;
        }
        return this.getDelta(table.itemVariationStore, outerIndex, innerIndex);
    }
    // See pseudo code from `Font Variations Overview'
    // in the OpenType specification.
    getDelta(itemStore, outerIndex, innerIndex) {
        if (outerIndex >= itemStore.itemVariationData.length) return 0;
        let varData = itemStore.itemVariationData[outerIndex];
        if (innerIndex >= varData.deltaSets.length) return 0;
        let deltaSet = varData.deltaSets[innerIndex];
        let blendVector = this.getBlendVector(itemStore, outerIndex);
        let netAdjustment = 0;
        for(let master = 0; master < varData.regionIndexCount; master++)netAdjustment += deltaSet.deltas[master] * blendVector[master];
        return netAdjustment;
    }
    getBlendVector(itemStore, outerIndex) {
        let varData = itemStore.itemVariationData[outerIndex];
        if (this.blendVectors.has(varData)) return this.blendVectors.get(varData);
        let normalizedCoords = this.normalizedCoords;
        let blendVector = [];
        // outer loop steps through master designs to be blended
        for(let master = 0; master < varData.regionIndexCount; master++){
            let scalar = 1;
            let regionIndex = varData.regionIndexes[master];
            let axes = itemStore.variationRegionList.variationRegions[regionIndex];
            // inner loop steps through axes in this region
            for(let j = 0; j < axes.length; j++){
                let axis = axes[j];
                let axisScalar;
                // compute the scalar contribution of this axis
                // ignore invalid ranges
                if (axis.startCoord > axis.peakCoord || axis.peakCoord > axis.endCoord) axisScalar = 1;
                else if (axis.startCoord < 0 && axis.endCoord > 0 && axis.peakCoord !== 0) axisScalar = 1;
                else if (axis.peakCoord === 0) axisScalar = 1;
                else if (normalizedCoords[j] < axis.startCoord || normalizedCoords[j] > axis.endCoord) axisScalar = 0;
                else {
                    if (normalizedCoords[j] === axis.peakCoord) axisScalar = 1;
                    else if (normalizedCoords[j] < axis.peakCoord) axisScalar = (normalizedCoords[j] - axis.startCoord + Number.EPSILON) / (axis.peakCoord - axis.startCoord + Number.EPSILON);
                    else axisScalar = (axis.endCoord - normalizedCoords[j] + Number.EPSILON) / (axis.endCoord - axis.peakCoord + Number.EPSILON);
                }
                // take product of all the axis scalars
                scalar *= axisScalar;
            }
            blendVector[master] = scalar;
        }
        this.blendVectors.set(varData, blendVector);
        return blendVector;
    }
    constructor(font, coords){
        this.font = font;
        this.normalizedCoords = this.normalizeCoords(coords);
        this.blendVectors = new Map;
    }
}
const $a8ac370803cb82cf$var$resolved = Promise.resolve();
class $a8ac370803cb82cf$export$2e2bcd8739ae039 {
    includeGlyph(glyph) {
        if (typeof glyph === "object") glyph = glyph.id;
        if (this.mapping[glyph] == null) {
            this.glyphs.push(glyph);
            this.mapping[glyph] = this.glyphs.length - 1;
        }
        return this.mapping[glyph];
    }
    constructor(font){
        this.font = font;
        this.glyphs = [];
        this.mapping = {};
        // always include the missing glyph
        this.includeGlyph(0);
    }
}
// Flags for simple glyphs
const $2784eedf0b35a048$var$ON_CURVE = 1;
const $2784eedf0b35a048$var$X_SHORT_VECTOR = 2;
const $2784eedf0b35a048$var$Y_SHORT_VECTOR = 4;
const $2784eedf0b35a048$var$REPEAT = 8;
const $2784eedf0b35a048$var$SAME_X = 16;
const $2784eedf0b35a048$var$SAME_Y = 32;
class $2784eedf0b35a048$var$Point {
    static size(val) {
        return val >= 0 && val <= 255 ? 1 : 2;
    }
    static encode(stream, value) {
        if (value >= 0 && value <= 255) stream.writeUInt8(value);
        else stream.writeInt16BE(value);
    }
}
let $2784eedf0b35a048$var$Glyf = new $gfJaN$restructure.Struct({
    numberOfContours: $gfJaN$restructure.int16,
    xMin: $gfJaN$restructure.int16,
    yMin: $gfJaN$restructure.int16,
    xMax: $gfJaN$restructure.int16,
    yMax: $gfJaN$restructure.int16,
    endPtsOfContours: new $gfJaN$restructure.Array($gfJaN$restructure.uint16, "numberOfContours"),
    instructions: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, $gfJaN$restructure.uint16),
    flags: new $gfJaN$restructure.Array($gfJaN$restructure.uint8, 0),
    xPoints: new $gfJaN$restructure.Array($2784eedf0b35a048$var$Point, 0),
    yPoints: new $gfJaN$restructure.Array($2784eedf0b35a048$var$Point, 0)
});
class $2784eedf0b35a048$export$2e2bcd8739ae039 {
    encodeSimple(path, instructions = []) {
        let endPtsOfContours = [];
        let xPoints = [];
        let yPoints = [];
        let flags = [];
        let same = 0;
        let lastX = 0, lastY = 0, lastFlag = 0;
        let pointCount = 0;
        for(let i = 0; i < path.commands.length; i++){
            let c = path.commands[i];
            for(let j = 0; j < c.args.length; j += 2){
                let x = c.args[j];
                let y = c.args[j + 1];
                let flag = 0;
                // If the ending point of a quadratic curve is the midpoint
                // between the control point and the control point of the next
                // quadratic curve, we can omit the ending point.
                if (c.command === "quadraticCurveTo" && j === 2) {
                    let next = path.commands[i + 1];
                    if (next && next.command === "quadraticCurveTo") {
                        let midX = (lastX + next.args[0]) / 2;
                        let midY = (lastY + next.args[1]) / 2;
                        if (x === midX && y === midY) continue;
                    }
                }
                // All points except control points are on curve.
                if (!(c.command === "quadraticCurveTo" && j === 0)) flag |= $2784eedf0b35a048$var$ON_CURVE;
                flag = this._encodePoint(x, lastX, xPoints, flag, $2784eedf0b35a048$var$X_SHORT_VECTOR, $2784eedf0b35a048$var$SAME_X);
                flag = this._encodePoint(y, lastY, yPoints, flag, $2784eedf0b35a048$var$Y_SHORT_VECTOR, $2784eedf0b35a048$var$SAME_Y);
                if (flag === lastFlag && same < 255) {
                    flags[flags.length - 1] |= $2784eedf0b35a048$var$REPEAT;
                    same++;
                } else {
                    if (same > 0) {
                        flags.push(same);
                        same = 0;
                    }
                    flags.push(flag);
                    lastFlag = flag;
                }
                lastX = x;
                lastY = y;
                pointCount++;
            }
            if (c.command === "closePath") endPtsOfContours.push(pointCount - 1);
        }
        // Close the path if the last command didn't already
        if (path.commands.length > 1 && path.commands[path.commands.length - 1].command !== "closePath") endPtsOfContours.push(pointCount - 1);
        let bbox = path.bbox;
        let glyf = {
            numberOfContours: endPtsOfContours.length,
            xMin: bbox.minX,
            yMin: bbox.minY,
            xMax: bbox.maxX,
            yMax: bbox.maxY,
            endPtsOfContours: endPtsOfContours,
            instructions: instructions,
            flags: flags,
            xPoints: xPoints,
            yPoints: yPoints
        };
        let size = $2784eedf0b35a048$var$Glyf.size(glyf);
        let tail = 4 - size % 4;
        let stream = new $gfJaN$restructure.EncodeStream(size + tail);
        $2784eedf0b35a048$var$Glyf.encode(stream, glyf);
        // Align to 4-byte length
        if (tail !== 0) stream.fill(0, tail);
        return stream.buffer;
    }
    _encodePoint(value, last, points, flag, shortFlag, sameFlag) {
        let diff = value - last;
        if (value === last) flag |= sameFlag;
        else {
            if (-255 <= diff && diff <= 255) {
                flag |= shortFlag;
                if (diff < 0) diff = -diff;
                else flag |= sameFlag;
            }
            points.push(diff);
        }
        return flag;
    }
}
class $fe042f4b88f46896$export$2e2bcd8739ae039 extends $a8ac370803cb82cf$export$2e2bcd8739ae039 {
    _addGlyph(gid) {
        let glyph = this.font.getGlyph(gid);
        let glyf = glyph._decode();
        // get the offset to the glyph from the loca table
        let curOffset = this.font.loca.offsets[gid];
        let nextOffset = this.font.loca.offsets[gid + 1];
        let stream = this.font._getTableStream("glyf");
        stream.pos += curOffset;
        let buffer = stream.readBuffer(nextOffset - curOffset);
        // if it is a compound glyph, include its components
        if (glyf && glyf.numberOfContours < 0) {
            buffer = new Uint8Array(buffer);
            let view = new DataView(buffer.buffer);
            for (let component of glyf.components){
                gid = this.includeGlyph(component.glyphID);
                view.setUint16(component.pos, gid);
            }
        } else if (glyf && this.font._variationProcessor) buffer = this.glyphEncoder.encodeSimple(glyph.path, glyf.instructions);
        this.glyf.push(buffer);
        this.loca.offsets.push(this.offset);
        this.hmtx.metrics.push({
            advance: glyph.advanceWidth,
            bearing: glyph._getMetrics().leftBearing
        });
        this.offset += buffer.length;
        return this.glyf.length - 1;
    }
    encode() {
        // tables required by PDF spec:
        //   head, hhea, loca, maxp, cvt , prep, glyf, hmtx, fpgm
        //
        // additional tables required for standalone fonts:
        //   name, cmap, OS/2, post
        this.glyf = [];
        this.offset = 0;
        this.loca = {
            offsets: [],
            version: this.font.loca.version
        };
        this.hmtx = {
            metrics: [],
            bearings: []
        };
        // include all the glyphs
        // not using a for loop because we need to support adding more
        // glyphs to the array as we go, and CoffeeScript caches the length.
        let i = 0;
        while(i < this.glyphs.length)this._addGlyph(this.glyphs[i++]);
        let maxp = $parcel$interopDefault($gfJaN$clone)(this.font.maxp);
        maxp.numGlyphs = this.glyf.length;
        this.loca.offsets.push(this.offset);
        let head = $parcel$interopDefault($gfJaN$clone)(this.font.head);
        head.indexToLocFormat = this.loca.version;
        let hhea = $parcel$interopDefault($gfJaN$clone)(this.font.hhea);
        hhea.numberOfMetrics = this.hmtx.metrics.length;
        // map = []
        // for index in [0...256]
        //     if index < @numGlyphs
        //         map[index] = index
        //     else
        //         map[index] = 0
        //
        // cmapTable =
        //     version: 0
        //     length: 262
        //     language: 0
        //     codeMap: map
        //
        // cmap =
        //     version: 0
        //     numSubtables: 1
        //     tables: [
        //         platformID: 1
        //         encodingID: 0
        //         table: cmapTable
        //     ]
        // TODO: subset prep, cvt, fpgm?
        return $df50e1efe10a1247$export$2e2bcd8739ae039.toBuffer({
            tables: {
                head: head,
                hhea: hhea,
                loca: this.loca,
                maxp: maxp,
                "cvt ": this.font["cvt "],
                prep: this.font.prep,
                glyf: this.glyf,
                hmtx: this.hmtx,
                fpgm: this.font.fpgm
            }
        });
    }
    constructor(font){
        super(font);
        this.glyphEncoder = new $2784eedf0b35a048$export$2e2bcd8739ae039;
    }
}
class $ec40f80c07a4e08a$export$2e2bcd8739ae039 extends $a8ac370803cb82cf$export$2e2bcd8739ae039 {
    subsetCharstrings() {
        this.charstrings = [];
        let gsubrs = {};
        for (let gid of this.glyphs){
            this.charstrings.push(this.cff.getCharString(gid));
            let glyph = this.font.getGlyph(gid);
            let path = glyph.path; // this causes the glyph to be parsed
            for(let subr in glyph._usedGsubrs)gsubrs[subr] = true;
        }
        this.gsubrs = this.subsetSubrs(this.cff.globalSubrIndex, gsubrs);
    }
    subsetSubrs(subrs, used) {
        let res = [];
        for(let i = 0; i < subrs.length; i++){
            let subr = subrs[i];
            if (used[i]) {
                this.cff.stream.pos = subr.offset;
                res.push(this.cff.stream.readBuffer(subr.length));
            } else res.push(new Uint8Array([
                11
            ])); // return
        }
        return res;
    }
    subsetFontdict(topDict) {
        topDict.FDArray = [];
        topDict.FDSelect = {
            version: 0,
            fds: []
        };
        let used_fds = {};
        let used_subrs = [];
        let fd_select = {};
        for (let gid of this.glyphs){
            let fd = this.cff.fdForGlyph(gid);
            if (fd == null) continue;
            if (!used_fds[fd]) {
                topDict.FDArray.push(Object.assign({}, this.cff.topDict.FDArray[fd]));
                used_subrs.push({});
                fd_select[fd] = topDict.FDArray.length - 1;
            }
            used_fds[fd] = true;
            topDict.FDSelect.fds.push(fd_select[fd]);
            let glyph = this.font.getGlyph(gid);
            let path = glyph.path; // this causes the glyph to be parsed
            for(let subr in glyph._usedSubrs)used_subrs[fd_select[fd]][subr] = true;
        }
        for(let i = 0; i < topDict.FDArray.length; i++){
            let dict = topDict.FDArray[i];
            delete dict.FontName;
            if (dict.Private && dict.Private.Subrs) {
                dict.Private = Object.assign({}, dict.Private);
                dict.Private.Subrs = this.subsetSubrs(dict.Private.Subrs, used_subrs[i]);
            }
        }
        return;
    }
    createCIDFontdict(topDict) {
        let used_subrs = {};
        for (let gid of this.glyphs){
            let glyph = this.font.getGlyph(gid);
            let path = glyph.path; // this causes the glyph to be parsed
            for(let subr in glyph._usedSubrs)used_subrs[subr] = true;
        }
        let privateDict = Object.assign({}, this.cff.topDict.Private);
        if (this.cff.topDict.Private && this.cff.topDict.Private.Subrs) privateDict.Subrs = this.subsetSubrs(this.cff.topDict.Private.Subrs, used_subrs);
        topDict.FDArray = [
            {
                Private: privateDict
            }
        ];
        return topDict.FDSelect = {
            version: 3,
            nRanges: 1,
            ranges: [
                {
                    first: 0,
                    fd: 0
                }
            ],
            sentinel: this.charstrings.length
        };
    }
    addString(string) {
        if (!string) return null;
        if (!this.strings) this.strings = [];
        this.strings.push(string);
        return $860d3574d7fa3a51$export$2e2bcd8739ae039.length + this.strings.length - 1;
    }
    encode() {
        this.subsetCharstrings();
        let charset = {
            version: this.charstrings.length > 255 ? 2 : 1,
            ranges: [
                {
                    first: 1,
                    nLeft: this.charstrings.length - 2
                }
            ]
        };
        let topDict = Object.assign({}, this.cff.topDict);
        topDict.Private = null;
        topDict.charset = charset;
        topDict.Encoding = null;
        topDict.CharStrings = this.charstrings;
        for (let key of [
            "version",
            "Notice",
            "Copyright",
            "FullName",
            "FamilyName",
            "Weight",
            "PostScript",
            "BaseFontName",
            "FontName"
        ])topDict[key] = this.addString(this.cff.string(topDict[key]));
        topDict.ROS = [
            this.addString("Adobe"),
            this.addString("Identity"),
            0
        ];
        topDict.CIDCount = this.charstrings.length;
        if (this.cff.isCIDFont) this.subsetFontdict(topDict);
        else this.createCIDFontdict(topDict);
        let top = {
            version: 1,
            hdrSize: this.cff.hdrSize,
            offSize: 4,
            header: this.cff.header,
            nameIndex: [
                this.cff.postscriptName
            ],
            topDictIndex: [
                topDict
            ],
            stringIndex: this.strings,
            globalSubrIndex: this.gsubrs
        };
        return $5b547cf9e5da519b$export$2e2bcd8739ae039.toBuffer(top);
    }
    constructor(font){
        super(font);
        this.cff = this.font["CFF "];
        if (!this.cff) throw new Error("Not a CFF Font");
    }
}
class $0a8ef2660a6ce4b6$export$2e2bcd8739ae039 {
    static probe(buffer) {
        let format = $66a5b9fb5318558a$export$3d28c1996ced1f14.decode(buffer.slice(0, 4));
        return format === "true" || format === "OTTO" || format === String.fromCharCode(0, 1, 0, 0);
    }
    setDefaultLanguage(lang = null) {
        this.defaultLanguage = lang;
    }
    _getTable(table) {
        if (!(table.tag in this._tables)) try {
            this._tables[table.tag] = this._decodeTable(table);
        } catch (e) {
            if ($59aa4ed98453e1d4$export$bd5c5d8b8dcafd78) {
                console.error(`Error decoding table ${table.tag}`);
                console.error(e.stack);
            }
        }
        return this._tables[table.tag];
    }
    _getTableStream(tag) {
        let table = this.directory.tables[tag];
        if (table) {
            this.stream.pos = table.offset;
            return this.stream;
        }
        return null;
    }
    _decodeDirectory() {
        return this.directory = $df50e1efe10a1247$export$2e2bcd8739ae039.decode(this.stream, {
            _startOffset: 0
        });
    }
    _decodeTable(table) {
        let pos = this.stream.pos;
        let stream = this._getTableStream(table.tag);
        let result = $5825c04ce8f7102d$export$2e2bcd8739ae039[table.tag].decode(stream, this, table.length);
        this.stream.pos = pos;
        return result;
    }
    /**
   * Gets a string from the font's `name` table
   * `lang` is a BCP-47 language code.
   * @return {string}
   */ getName(key, lang = this.defaultLanguage || $59aa4ed98453e1d4$export$42940898df819940) {
        let record = this.name && this.name.records[key];
        if (record) return record[lang] || record[this.defaultLanguage] || record[$59aa4ed98453e1d4$export$42940898df819940] || record["en"] || record[Object.keys(record)[0]] // Seriously, ANY language would be fine
         || null;
        return null;
    }
    /**
   * The unique PostScript name for this font, e.g. "Helvetica-Bold"
   * @type {string}
   */ get postscriptName() {
        return this.getName("postscriptName");
    }
    /**
   * The font's full name, e.g. "Helvetica Bold"
   * @type {string}
   */ get fullName() {
        return this.getName("fullName");
    }
    /**
   * The font's family name, e.g. "Helvetica"
   * @type {string}
   */ get familyName() {
        return this.getName("fontFamily");
    }
    /**
   * The font's sub-family, e.g. "Bold".
   * @type {string}
   */ get subfamilyName() {
        return this.getName("fontSubfamily");
    }
    /**
   * The font's copyright information
   * @type {string}
   */ get copyright() {
        return this.getName("copyright");
    }
    /**
   * The font's version number
   * @type {string}
   */ get version() {
        return this.getName("version");
    }
    /**
   * The font’s [ascender](https://en.wikipedia.org/wiki/Ascender_(typography))
   * @type {number}
   */ get ascent() {
        return this.hhea.ascent;
    }
    /**
   * The font’s [descender](https://en.wikipedia.org/wiki/Descender)
   * @type {number}
   */ get descent() {
        return this.hhea.descent;
    }
    /**
   * The amount of space that should be included between lines
   * @type {number}
   */ get lineGap() {
        return this.hhea.lineGap;
    }
    /**
   * The offset from the normal underline position that should be used
   * @type {number}
   */ get underlinePosition() {
        return this.post.underlinePosition;
    }
    /**
   * The weight of the underline that should be used
   * @type {number}
   */ get underlineThickness() {
        return this.post.underlineThickness;
    }
    /**
   * If this is an italic font, the angle the cursor should be drawn at to match the font design
   * @type {number}
   */ get italicAngle() {
        return this.post.italicAngle;
    }
    /**
   * The height of capital letters above the baseline.
   * See [here](https://en.wikipedia.org/wiki/Cap_height) for more details.
   * @type {number}
   */ get capHeight() {
        let os2 = this["OS/2"];
        return os2 ? os2.capHeight : this.ascent;
    }
    /**
   * The height of lower case letters in the font.
   * See [here](https://en.wikipedia.org/wiki/X-height) for more details.
   * @type {number}
   */ get xHeight() {
        let os2 = this["OS/2"];
        return os2 ? os2.xHeight : 0;
    }
    /**
   * The number of glyphs in the font.
   * @type {number}
   */ get numGlyphs() {
        return this.maxp.numGlyphs;
    }
    /**
   * The size of the font’s internal coordinate grid
   * @type {number}
   */ get unitsPerEm() {
        return this.head.unitsPerEm;
    }
    /**
   * The font’s bounding box, i.e. the box that encloses all glyphs in the font.
   * @type {BBox}
   */ get bbox() {
        return Object.freeze(new $0e2da1c4ce69e8ad$export$2e2bcd8739ae039(this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax));
    }
    get _cmapProcessor() {
        return new $0d6e160064c86e50$export$2e2bcd8739ae039(this.cmap);
    }
    /**
   * An array of all of the unicode code points supported by the font.
   * @type {number[]}
   */ get characterSet() {
        return this._cmapProcessor.getCharacterSet();
    }
    /**
   * Returns whether there is glyph in the font for the given unicode code point.
   *
   * @param {number} codePoint
   * @return {boolean}
   */ hasGlyphForCodePoint(codePoint) {
        return !!this._cmapProcessor.lookup(codePoint);
    }
    /**
   * Maps a single unicode code point to a Glyph object.
   * Does not perform any advanced substitutions (there is no context to do so).
   *
   * @param {number} codePoint
   * @return {Glyph}
   */ glyphForCodePoint(codePoint) {
        return this.getGlyph(this._cmapProcessor.lookup(codePoint), [
            codePoint
        ]);
    }
    /**
   * Returns an array of Glyph objects for the given string.
   * This is only a one-to-one mapping from characters to glyphs.
   * For most uses, you should use font.layout (described below), which
   * provides a much more advanced mapping supporting AAT and OpenType shaping.
   *
   * @param {string} string
   * @return {Glyph[]}
   */ glyphsForString(string) {
        let glyphs = [];
        let len = string.length;
        let idx = 0;
        let last = -1;
        let state = -1;
        while(idx <= len){
            let code = 0;
            let nextState = 0;
            if (idx < len) {
                // Decode the next codepoint from UTF 16
                code = string.charCodeAt(idx++);
                if (0xd800 <= code && code <= 0xdbff && idx < len) {
                    let next = string.charCodeAt(idx);
                    if (0xdc00 <= next && next <= 0xdfff) {
                        idx++;
                        code = ((code & 0x3ff) << 10) + (next & 0x3ff) + 0x10000;
                    }
                }
                // Compute the next state: 1 if the next codepoint is a variation selector, 0 otherwise.
                nextState = 0xfe00 <= code && code <= 0xfe0f || 0xe0100 <= code && code <= 0xe01ef ? 1 : 0;
            } else idx++;
            if (state === 0 && nextState === 1) glyphs.push(this.getGlyph(this._cmapProcessor.lookup(last, code), [
                last,
                code
            ]));
            else if (state === 0 && nextState === 0) glyphs.push(this.glyphForCodePoint(last));
            last = code;
            state = nextState;
        }
        return glyphs;
    }
    get _layoutEngine() {
        return new $9d641258c9d7180d$export$2e2bcd8739ae039(this);
    }
    /**
   * Returns a GlyphRun object, which includes an array of Glyphs and GlyphPositions for the given string.
   *
   * @param {string} string
   * @param {string[]} [userFeatures]
   * @param {string} [script]
   * @param {string} [language]
   * @param {string} [direction]
   * @return {GlyphRun}
   */ layout(string, userFeatures, script, language, direction) {
        return this._layoutEngine.layout(string, userFeatures, script, language, direction);
    }
    /**
   * Returns an array of strings that map to the given glyph id.
   * @param {number} gid - glyph id
   */ stringsForGlyph(gid) {
        return this._layoutEngine.stringsForGlyph(gid);
    }
    /**
   * An array of all [OpenType feature tags](https://www.microsoft.com/typography/otspec/featuretags.htm)
   * (or mapped AAT tags) supported by the font.
   * The features parameter is an array of OpenType feature tags to be applied in addition to the default set.
   * If this is an AAT font, the OpenType feature tags are mapped to AAT features.
   *
   * @type {string[]}
   */ get availableFeatures() {
        return this._layoutEngine.getAvailableFeatures();
    }
    getAvailableFeatures(script, language) {
        return this._layoutEngine.getAvailableFeatures(script, language);
    }
    _getBaseGlyph(glyph, characters = []) {
        if (!this._glyphs[glyph]) {
            if (this.directory.tables.glyf) this._glyphs[glyph] = new $f680320fa07ef53d$export$2e2bcd8739ae039(glyph, characters, this);
            else if (this.directory.tables["CFF "] || this.directory.tables.CFF2) this._glyphs[glyph] = new $7ee0705195f3b047$export$2e2bcd8739ae039(glyph, characters, this);
        }
        return this._glyphs[glyph] || null;
    }
    /**
   * Returns a glyph object for the given glyph id.
   * You can pass the array of code points this glyph represents for
   * your use later, and it will be stored in the glyph object.
   *
   * @param {number} glyph
   * @param {number[]} characters
   * @return {Glyph}
   */ getGlyph(glyph, characters = []) {
        if (!this._glyphs[glyph]) {
            if (this.directory.tables.sbix) this._glyphs[glyph] = new $55855d6d316b015e$export$2e2bcd8739ae039(glyph, characters, this);
            else if (this.directory.tables.COLR && this.directory.tables.CPAL) this._glyphs[glyph] = new $42d9dbd2de9ee2d8$export$2e2bcd8739ae039(glyph, characters, this);
            else this._getBaseGlyph(glyph, characters);
        }
        return this._glyphs[glyph] || null;
    }
    /**
   * Returns a Subset for this font.
   * @return {Subset}
   */ createSubset() {
        if (this.directory.tables["CFF "]) return new $ec40f80c07a4e08a$export$2e2bcd8739ae039(this);
        return new $fe042f4b88f46896$export$2e2bcd8739ae039(this);
    }
    /**
   * Returns an object describing the available variation axes
   * that this font supports. Keys are setting tags, and values
   * contain the axis name, range, and default value.
   *
   * @type {object}
   */ get variationAxes() {
        let res = {};
        if (!this.fvar) return res;
        for (let axis of this.fvar.axis)res[axis.axisTag.trim()] = {
            name: axis.name.en,
            min: axis.minValue,
            default: axis.defaultValue,
            max: axis.maxValue
        };
        return res;
    }
    /**
   * Returns an object describing the named variation instances
   * that the font designer has specified. Keys are variation names
   * and values are the variation settings for this instance.
   *
   * @type {object}
   */ get namedVariations() {
        let res = {};
        if (!this.fvar) return res;
        for (let instance of this.fvar.instance){
            let settings = {};
            for(let i = 0; i < this.fvar.axis.length; i++){
                let axis = this.fvar.axis[i];
                settings[axis.axisTag.trim()] = instance.coord[i];
            }
            res[instance.name.en] = settings;
        }
        return res;
    }
    /**
   * Returns a new font with the given variation settings applied.
   * Settings can either be an instance name, or an object containing
   * variation tags as specified by the `variationAxes` property.
   *
   * @param {object} settings
   * @return {TTFFont}
   */ getVariation(settings) {
        if (!(this.directory.tables.fvar && (this.directory.tables.gvar && this.directory.tables.glyf || this.directory.tables.CFF2))) throw new Error("Variations require a font with the fvar, gvar and glyf, or CFF2 tables.");
        if (typeof settings === "string") settings = this.namedVariations[settings];
        if (typeof settings !== "object") throw new Error("Variation settings must be either a variation name or settings object.");
        // normalize the coordinates
        let coords = this.fvar.axis.map((axis, i)=>{
            let axisTag = axis.axisTag.trim();
            if (axisTag in settings) return Math.max(axis.minValue, Math.min(axis.maxValue, settings[axisTag]));
            else return axis.defaultValue;
        });
        let stream = new $gfJaN$restructure.DecodeStream(this.stream.buffer);
        stream.pos = this._directoryPos;
        let font = new $0a8ef2660a6ce4b6$export$2e2bcd8739ae039(stream, coords);
        font._tables = this._tables;
        return font;
    }
    get _variationProcessor() {
        if (!this.fvar) return null;
        let variationCoords = this.variationCoords;
        // Ignore if no variation coords and not CFF2
        if (!variationCoords && !this.CFF2) return null;
        if (!variationCoords) variationCoords = this.fvar.axis.map((axis)=>axis.defaultValue);
        return new $7586bb9ea67c41d8$export$2e2bcd8739ae039(this, variationCoords);
    }
    // Standardized format plugin API
    getFont(name) {
        return this.getVariation(name);
    }
    constructor(stream, variationCoords = null){
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "TTF");
        this.defaultLanguage = null;
        this.stream = stream;
        this.variationCoords = variationCoords;
        this._directoryPos = this.stream.pos;
        this._tables = {};
        this._glyphs = {};
        this._decodeDirectory();
        // define properties for each table to lazily parse
        for(let tag in this.directory.tables){
            let table = this.directory.tables[tag];
            if ($5825c04ce8f7102d$export$2e2bcd8739ae039[tag] && table.length > 0) Object.defineProperty(this, tag, {
                get: this._getTable.bind(this, table)
            });
        }
    }
}
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "bbox", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "_cmapProcessor", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "characterSet", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "_layoutEngine", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "variationAxes", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "namedVariations", null);
$parcel$interopDefault($gfJaN$swchelperslib_ts_decoratejs)([
    $3bda6911913b43f0$export$69a3209f1a06c04d
], $0a8ef2660a6ce4b6$export$2e2bcd8739ae039.prototype, "_variationProcessor", null);
let $89f72d2d7c9afc0d$var$WOFFDirectoryEntry = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    offset: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, "void", {
        type: "global"
    }),
    compLength: $gfJaN$restructure.uint32,
    length: $gfJaN$restructure.uint32,
    origChecksum: $gfJaN$restructure.uint32
});
let $89f72d2d7c9afc0d$var$WOFFDirectory = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    flavor: $gfJaN$restructure.uint32,
    length: $gfJaN$restructure.uint32,
    numTables: $gfJaN$restructure.uint16,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    totalSfntSize: $gfJaN$restructure.uint32,
    majorVersion: $gfJaN$restructure.uint16,
    minorVersion: $gfJaN$restructure.uint16,
    metaOffset: $gfJaN$restructure.uint32,
    metaLength: $gfJaN$restructure.uint32,
    metaOrigLength: $gfJaN$restructure.uint32,
    privOffset: $gfJaN$restructure.uint32,
    privLength: $gfJaN$restructure.uint32,
    tables: new $gfJaN$restructure.Array($89f72d2d7c9afc0d$var$WOFFDirectoryEntry, "numTables")
});
$89f72d2d7c9afc0d$var$WOFFDirectory.process = function() {
    let tables1 = {};
    for (let table of this.tables)tables1[table.tag] = table;
    this.tables = tables1;
};
var $89f72d2d7c9afc0d$export$2e2bcd8739ae039 = $89f72d2d7c9afc0d$var$WOFFDirectory;
class $8a0a49baaf5d834d$export$2e2bcd8739ae039 extends $0a8ef2660a6ce4b6$export$2e2bcd8739ae039 {
    static probe(buffer) {
        return $66a5b9fb5318558a$export$3d28c1996ced1f14.decode(buffer.slice(0, 4)) === "wOFF";
    }
    _decodeDirectory() {
        this.directory = $89f72d2d7c9afc0d$export$2e2bcd8739ae039.decode(this.stream, {
            _startOffset: 0
        });
    }
    _getTableStream(tag) {
        let table = this.directory.tables[tag];
        if (table) {
            this.stream.pos = table.offset;
            if (table.compLength < table.length) {
                this.stream.pos += 2; // skip deflate header
                let outBuffer = new Uint8Array(table.length);
                let buf = $parcel$interopDefault($gfJaN$tinyinflate)(this.stream.readBuffer(table.compLength - 2), outBuffer);
                return new $gfJaN$restructure.DecodeStream(buf);
            } else return this.stream;
        }
        return null;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "WOFF");
    }
}
class $44b9edca0e403d6d$export$2e2bcd8739ae039 extends $f680320fa07ef53d$export$2e2bcd8739ae039 {
    _decode() {
        // We have to decode in advance (in WOFF2Font), so just return the pre-decoded data.
        return this._font._transformedGlyphs[this.id];
    }
    _getCBox() {
        return this.path.bbox;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "WOFF2");
    }
}
const $2f0bfd9a5c1d7b58$var$Base128 = {
    decode (stream) {
        let result = 0;
        let iterable = [
            0,
            1,
            2,
            3,
            4
        ];
        for(let j = 0; j < iterable.length; j++){
            let i = iterable[j];
            let code = stream.readUInt8();
            // If any of the top seven bits are set then we're about to overflow.
            if (result & 0xe0000000) throw new Error("Overflow");
            result = result << 7 | code & 0x7f;
            if ((code & 0x80) === 0) return result;
        }
        throw new Error("Bad base 128 number");
    }
};
let $2f0bfd9a5c1d7b58$var$knownTags = [
    "cmap",
    "head",
    "hhea",
    "hmtx",
    "maxp",
    "name",
    "OS/2",
    "post",
    "cvt ",
    "fpgm",
    "glyf",
    "loca",
    "prep",
    "CFF ",
    "VORG",
    "EBDT",
    "EBLC",
    "gasp",
    "hdmx",
    "kern",
    "LTSH",
    "PCLT",
    "VDMX",
    "vhea",
    "vmtx",
    "BASE",
    "GDEF",
    "GPOS",
    "GSUB",
    "EBSC",
    "JSTF",
    "MATH",
    "CBDT",
    "CBLC",
    "COLR",
    "CPAL",
    "SVG ",
    "sbix",
    "acnt",
    "avar",
    "bdat",
    "bloc",
    "bsln",
    "cvar",
    "fdsc",
    "feat",
    "fmtx",
    "fvar",
    "gvar",
    "hsty",
    "just",
    "lcar",
    "mort",
    "morx",
    "opbd",
    "prop",
    "trak",
    "Zapf",
    "Silf",
    "Glat",
    "Gloc",
    "Feat",
    "Sill"
];
let $2f0bfd9a5c1d7b58$var$WOFF2DirectoryEntry = new $gfJaN$restructure.Struct({
    flags: $gfJaN$restructure.uint8,
    customTag: new $gfJaN$restructure.Optional(new $gfJaN$restructure.String(4), (t)=>(t.flags & 0x3f) === 0x3f),
    tag: (t)=>t.customTag || $2f0bfd9a5c1d7b58$var$knownTags[t.flags & 0x3f],
    length: $2f0bfd9a5c1d7b58$var$Base128,
    transformVersion: (t)=>t.flags >>> 6 & 0x03,
    transformed: (t)=>t.tag === "glyf" || t.tag === "loca" ? t.transformVersion === 0 : t.transformVersion !== 0,
    transformLength: new $gfJaN$restructure.Optional($2f0bfd9a5c1d7b58$var$Base128, (t)=>t.transformed)
});
let $2f0bfd9a5c1d7b58$var$WOFF2Directory = new $gfJaN$restructure.Struct({
    tag: new $gfJaN$restructure.String(4),
    flavor: $gfJaN$restructure.uint32,
    length: $gfJaN$restructure.uint32,
    numTables: $gfJaN$restructure.uint16,
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint16),
    totalSfntSize: $gfJaN$restructure.uint32,
    totalCompressedSize: $gfJaN$restructure.uint32,
    majorVersion: $gfJaN$restructure.uint16,
    minorVersion: $gfJaN$restructure.uint16,
    metaOffset: $gfJaN$restructure.uint32,
    metaLength: $gfJaN$restructure.uint32,
    metaOrigLength: $gfJaN$restructure.uint32,
    privOffset: $gfJaN$restructure.uint32,
    privLength: $gfJaN$restructure.uint32,
    tables: new $gfJaN$restructure.Array($2f0bfd9a5c1d7b58$var$WOFF2DirectoryEntry, "numTables")
});
$2f0bfd9a5c1d7b58$var$WOFF2Directory.process = function() {
    let tables = {};
    for(let i = 0; i < this.tables.length; i++){
        let table = this.tables[i];
        tables[table.tag] = table;
    }
    return this.tables = tables;
};
var $2f0bfd9a5c1d7b58$export$2e2bcd8739ae039 = $2f0bfd9a5c1d7b58$var$WOFF2Directory;
class $333fb94547d9fb5c$export$2e2bcd8739ae039 extends $0a8ef2660a6ce4b6$export$2e2bcd8739ae039 {
    static probe(buffer) {
        return $66a5b9fb5318558a$export$3d28c1996ced1f14.decode(buffer.slice(0, 4)) === "wOF2";
    }
    _decodeDirectory() {
        this.directory = $2f0bfd9a5c1d7b58$export$2e2bcd8739ae039.decode(this.stream);
        this._dataPos = this.stream.pos;
    }
    _decompress() {
        // decompress data and setup table offsets if we haven't already
        if (!this._decompressed) {
            this.stream.pos = this._dataPos;
            let buffer = this.stream.readBuffer(this.directory.totalCompressedSize);
            let decompressedSize = 0;
            for(let tag in this.directory.tables){
                let entry = this.directory.tables[tag];
                entry.offset = decompressedSize;
                decompressedSize += entry.transformLength != null ? entry.transformLength : entry.length;
            }
            let decompressed = $parcel$interopDefault($gfJaN$brotlidecompressjs)(buffer, decompressedSize);
            if (!decompressed) throw new Error("Error decoding compressed data in WOFF2");
            this.stream = new $gfJaN$restructure.DecodeStream(decompressed);
            this._decompressed = true;
        }
    }
    _decodeTable(table) {
        this._decompress();
        return super._decodeTable(table);
    }
    // Override this method to get a glyph and return our
    // custom subclass if there is a glyf table.
    _getBaseGlyph(glyph, characters = []) {
        if (!this._glyphs[glyph]) {
            if (this.directory.tables.glyf && this.directory.tables.glyf.transformed) {
                if (!this._transformedGlyphs) this._transformGlyfTable();
                return this._glyphs[glyph] = new $44b9edca0e403d6d$export$2e2bcd8739ae039(glyph, characters, this);
            } else return super._getBaseGlyph(glyph, characters);
        }
    }
    _transformGlyfTable() {
        this._decompress();
        this.stream.pos = this.directory.tables.glyf.offset;
        let table = $333fb94547d9fb5c$var$GlyfTable.decode(this.stream);
        let glyphs = [];
        for(let index = 0; index < table.numGlyphs; index++){
            let glyph = {};
            let nContours = table.nContours.readInt16BE();
            glyph.numberOfContours = nContours;
            if (nContours > 0) {
                let nPoints = [];
                let totalPoints = 0;
                for(let i = 0; i < nContours; i++){
                    let r1 = $333fb94547d9fb5c$var$read255UInt16(table.nPoints);
                    totalPoints += r1;
                    nPoints.push(totalPoints);
                }
                glyph.points = $333fb94547d9fb5c$var$decodeTriplet(table.flags, table.glyphs, totalPoints);
                for(let i1 = 0; i1 < nContours; i1++)glyph.points[nPoints[i1] - 1].endContour = true;
                var instructionSize = $333fb94547d9fb5c$var$read255UInt16(table.glyphs);
            } else if (nContours < 0) {
                let haveInstructions = $f680320fa07ef53d$export$2e2bcd8739ae039.prototype._decodeComposite.call({
                    _font: this
                }, glyph, table.composites);
                if (haveInstructions) var instructionSize = $333fb94547d9fb5c$var$read255UInt16(table.glyphs);
            }
            glyphs.push(glyph);
        }
        this._transformedGlyphs = glyphs;
    }
    constructor(...args){
        super(...args);
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "WOFF2");
    }
}
// Special class that accepts a length and returns a sub-stream for that data
class $333fb94547d9fb5c$var$Substream {
    decode(stream, parent) {
        return new $gfJaN$restructure.DecodeStream(this._buf.decode(stream, parent));
    }
    constructor(length){
        this.length = length;
        this._buf = new $gfJaN$restructure.Buffer(length);
    }
}
// This struct represents the entire glyf table
let $333fb94547d9fb5c$var$GlyfTable = new $gfJaN$restructure.Struct({
    version: $gfJaN$restructure.uint32,
    numGlyphs: $gfJaN$restructure.uint16,
    indexFormat: $gfJaN$restructure.uint16,
    nContourStreamSize: $gfJaN$restructure.uint32,
    nPointsStreamSize: $gfJaN$restructure.uint32,
    flagStreamSize: $gfJaN$restructure.uint32,
    glyphStreamSize: $gfJaN$restructure.uint32,
    compositeStreamSize: $gfJaN$restructure.uint32,
    bboxStreamSize: $gfJaN$restructure.uint32,
    instructionStreamSize: $gfJaN$restructure.uint32,
    nContours: new $333fb94547d9fb5c$var$Substream("nContourStreamSize"),
    nPoints: new $333fb94547d9fb5c$var$Substream("nPointsStreamSize"),
    flags: new $333fb94547d9fb5c$var$Substream("flagStreamSize"),
    glyphs: new $333fb94547d9fb5c$var$Substream("glyphStreamSize"),
    composites: new $333fb94547d9fb5c$var$Substream("compositeStreamSize"),
    bboxes: new $333fb94547d9fb5c$var$Substream("bboxStreamSize"),
    instructions: new $333fb94547d9fb5c$var$Substream("instructionStreamSize")
});
const $333fb94547d9fb5c$var$WORD_CODE = 253;
const $333fb94547d9fb5c$var$ONE_MORE_BYTE_CODE2 = 254;
const $333fb94547d9fb5c$var$ONE_MORE_BYTE_CODE1 = 255;
const $333fb94547d9fb5c$var$LOWEST_U_CODE = 253;
function $333fb94547d9fb5c$var$read255UInt16(stream) {
    let code = stream.readUInt8();
    if (code === $333fb94547d9fb5c$var$WORD_CODE) return stream.readUInt16BE();
    if (code === $333fb94547d9fb5c$var$ONE_MORE_BYTE_CODE1) return stream.readUInt8() + $333fb94547d9fb5c$var$LOWEST_U_CODE;
    if (code === $333fb94547d9fb5c$var$ONE_MORE_BYTE_CODE2) return stream.readUInt8() + $333fb94547d9fb5c$var$LOWEST_U_CODE * 2;
    return code;
}
function $333fb94547d9fb5c$var$withSign(flag, baseval) {
    return flag & 1 ? baseval : -baseval;
}
function $333fb94547d9fb5c$var$decodeTriplet(flags, glyphs, nPoints) {
    let y;
    let x = y = 0;
    let res = [];
    for(let i = 0; i < nPoints; i++){
        let dx = 0, dy = 0;
        let flag = flags.readUInt8();
        let onCurve = !(flag >> 7);
        flag &= 0x7f;
        if (flag < 10) {
            dx = 0;
            dy = $333fb94547d9fb5c$var$withSign(flag, ((flag & 14) << 7) + glyphs.readUInt8());
        } else if (flag < 20) {
            dx = $333fb94547d9fb5c$var$withSign(flag, ((flag - 10 & 14) << 7) + glyphs.readUInt8());
            dy = 0;
        } else if (flag < 84) {
            var b0 = flag - 20;
            var b1 = glyphs.readUInt8();
            dx = $333fb94547d9fb5c$var$withSign(flag, 1 + (b0 & 0x30) + (b1 >> 4));
            dy = $333fb94547d9fb5c$var$withSign(flag >> 1, 1 + ((b0 & 0x0c) << 2) + (b1 & 0x0f));
        } else if (flag < 120) {
            var b0 = flag - 84;
            dx = $333fb94547d9fb5c$var$withSign(flag, 1 + (b0 / 12 << 8) + glyphs.readUInt8());
            dy = $333fb94547d9fb5c$var$withSign(flag >> 1, 1 + (b0 % 12 >> 2 << 8) + glyphs.readUInt8());
        } else if (flag < 124) {
            var b1 = glyphs.readUInt8();
            let b2 = glyphs.readUInt8();
            dx = $333fb94547d9fb5c$var$withSign(flag, (b1 << 4) + (b2 >> 4));
            dy = $333fb94547d9fb5c$var$withSign(flag >> 1, ((b2 & 0x0f) << 8) + glyphs.readUInt8());
        } else {
            dx = $333fb94547d9fb5c$var$withSign(flag, glyphs.readUInt16BE());
            dy = $333fb94547d9fb5c$var$withSign(flag >> 1, glyphs.readUInt16BE());
        }
        x += dx;
        y += dy;
        res.push(new $f680320fa07ef53d$export$baf26146a414f24a(onCurve, false, x, y));
    }
    return res;
}
let $e0b2de9958441c02$var$TTCHeader = new $gfJaN$restructure.VersionedStruct($gfJaN$restructure.uint32, {
    0x00010000: {
        numFonts: $gfJaN$restructure.uint32,
        offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, "numFonts")
    },
    0x00020000: {
        numFonts: $gfJaN$restructure.uint32,
        offsets: new $gfJaN$restructure.Array($gfJaN$restructure.uint32, "numFonts"),
        dsigTag: $gfJaN$restructure.uint32,
        dsigLength: $gfJaN$restructure.uint32,
        dsigOffset: $gfJaN$restructure.uint32
    }
});
class $e0b2de9958441c02$export$2e2bcd8739ae039 {
    static probe(buffer) {
        return $66a5b9fb5318558a$export$3d28c1996ced1f14.decode(buffer.slice(0, 4)) === "ttcf";
    }
    getFont(name) {
        for (let offset of this.header.offsets){
            let stream = new $gfJaN$restructure.DecodeStream(this.stream.buffer);
            stream.pos = offset;
            let font = new $0a8ef2660a6ce4b6$export$2e2bcd8739ae039(stream);
            if (font.postscriptName === name || font.postscriptName instanceof Uint8Array && name instanceof Uint8Array && font.postscriptName.every((v, i)=>name[i] === v)) return font;
        }
        return null;
    }
    get fonts() {
        let fonts = [];
        for (let offset of this.header.offsets){
            let stream = new $gfJaN$restructure.DecodeStream(this.stream.buffer);
            stream.pos = offset;
            fonts.push(new $0a8ef2660a6ce4b6$export$2e2bcd8739ae039(stream));
        }
        return fonts;
    }
    constructor(stream){
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "TTC");
        this.stream = stream;
        if (stream.readString(4) !== "ttcf") throw new Error("Not a TrueType collection");
        this.header = $e0b2de9958441c02$var$TTCHeader.decode(stream);
    }
}
let $d0fe640dc6c78783$var$DFontName = new $gfJaN$restructure.String($gfJaN$restructure.uint8);
let $d0fe640dc6c78783$var$DFontData = new $gfJaN$restructure.Struct({
    len: $gfJaN$restructure.uint32,
    buf: new $gfJaN$restructure.Buffer("len")
});
let $d0fe640dc6c78783$var$Ref = new $gfJaN$restructure.Struct({
    id: $gfJaN$restructure.uint16,
    nameOffset: $gfJaN$restructure.int16,
    attr: $gfJaN$restructure.uint8,
    dataOffset: $gfJaN$restructure.uint24,
    handle: $gfJaN$restructure.uint32
});
let $d0fe640dc6c78783$var$Type = new $gfJaN$restructure.Struct({
    name: new $gfJaN$restructure.String(4),
    maxTypeIndex: $gfJaN$restructure.uint16,
    refList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, new $gfJaN$restructure.Array($d0fe640dc6c78783$var$Ref, (t)=>t.maxTypeIndex + 1), {
        type: "parent"
    })
});
let $d0fe640dc6c78783$var$TypeList = new $gfJaN$restructure.Struct({
    length: $gfJaN$restructure.uint16,
    types: new $gfJaN$restructure.Array($d0fe640dc6c78783$var$Type, (t)=>t.length + 1)
});
let $d0fe640dc6c78783$var$DFontMap = new $gfJaN$restructure.Struct({
    reserved: new $gfJaN$restructure.Reserved($gfJaN$restructure.uint8, 24),
    typeList: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, $d0fe640dc6c78783$var$TypeList),
    nameListOffset: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint16, "void")
});
let $d0fe640dc6c78783$var$DFontHeader = new $gfJaN$restructure.Struct({
    dataOffset: $gfJaN$restructure.uint32,
    map: new $gfJaN$restructure.Pointer($gfJaN$restructure.uint32, $d0fe640dc6c78783$var$DFontMap),
    dataLength: $gfJaN$restructure.uint32,
    mapLength: $gfJaN$restructure.uint32
});
class $d0fe640dc6c78783$export$2e2bcd8739ae039 {
    static probe(buffer) {
        let stream = new $gfJaN$restructure.DecodeStream(buffer);
        try {
            var header = $d0fe640dc6c78783$var$DFontHeader.decode(stream);
        } catch (e) {
            return false;
        }
        for (let type of header.map.typeList.types){
            if (type.name === "sfnt") return true;
        }
        return false;
    }
    getFont(name) {
        if (!this.sfnt) return null;
        for (let ref of this.sfnt.refList){
            let pos = this.header.dataOffset + ref.dataOffset + 4;
            let stream = new $gfJaN$restructure.DecodeStream(this.stream.buffer.slice(pos));
            let font = new $0a8ef2660a6ce4b6$export$2e2bcd8739ae039(stream);
            if (font.postscriptName === name || font.postscriptName instanceof Uint8Array && name instanceof Uint8Array && font.postscriptName.every((v, i)=>name[i] === v)) return font;
        }
        return null;
    }
    get fonts() {
        let fonts = [];
        for (let ref of this.sfnt.refList){
            let pos = this.header.dataOffset + ref.dataOffset + 4;
            let stream = new $gfJaN$restructure.DecodeStream(this.stream.buffer.slice(pos));
            fonts.push(new $0a8ef2660a6ce4b6$export$2e2bcd8739ae039(stream));
        }
        return fonts;
    }
    constructor(stream){
        $parcel$interopDefault($gfJaN$swchelperslib_define_propertyjs)(this, "type", "DFont");
        this.stream = stream;
        this.header = $d0fe640dc6c78783$var$DFontHeader.decode(this.stream);
        for (let type of this.header.map.typeList.types){
            for (let ref of type.refList)if (ref.nameOffset >= 0) {
                this.stream.pos = ref.nameOffset + this.header.map.nameListOffset;
                ref.name = $d0fe640dc6c78783$var$DFontName.decode(this.stream);
            } else ref.name = null;
            if (type.name === "sfnt") this.sfnt = type;
        }
    }
}
$59aa4ed98453e1d4$export$36b2f24e97d43be($0a8ef2660a6ce4b6$export$2e2bcd8739ae039);
$59aa4ed98453e1d4$export$36b2f24e97d43be($8a0a49baaf5d834d$export$2e2bcd8739ae039);
$59aa4ed98453e1d4$export$36b2f24e97d43be($333fb94547d9fb5c$export$2e2bcd8739ae039);
$59aa4ed98453e1d4$export$36b2f24e97d43be($e0b2de9958441c02$export$2e2bcd8739ae039);
$59aa4ed98453e1d4$export$36b2f24e97d43be($d0fe640dc6c78783$export$2e2bcd8739ae039);
$parcel$exportWildcard(module.exports, $59aa4ed98453e1d4$exports); //# sourceMappingURL=browser.cjs.map

},{"f21b476b3755c378":"aGb31","ff6728da855c7440":"1bqQL","6aa66445f242ca61":"bQNIL","512c7b618d747e29":"ixZYU","4c80a4567e3a20c2":"iKCjJ","5389545d6ddd3821":"j4VfX","bffd1a7b85ce30bb":"jjAyt","b4fd531a03fcb1a9":"02d7F","998fb3c74b159a7f":"iH0PH","6035591d530ded93":"bgxC5"}],"aGb31":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EncodeStream", ()=>(0, _encodeStreamJs.EncodeStream));
parcelHelpers.export(exports, "DecodeStream", ()=>(0, _decodeStreamJs.DecodeStream));
parcelHelpers.export(exports, "Array", ()=>(0, _arrayJs.Array));
parcelHelpers.export(exports, "LazyArray", ()=>(0, _lazyArrayJs.LazyArray));
parcelHelpers.export(exports, "Bitfield", ()=>(0, _bitfieldJs.Bitfield));
parcelHelpers.export(exports, "Boolean", ()=>(0, _booleanJs.Boolean));
parcelHelpers.export(exports, "Buffer", ()=>(0, _bufferJs.Buffer));
parcelHelpers.export(exports, "Enum", ()=>(0, _enumJs.Enum));
parcelHelpers.export(exports, "Optional", ()=>(0, _optionalJs.Optional));
parcelHelpers.export(exports, "Reserved", ()=>(0, _reservedJs.Reserved));
parcelHelpers.export(exports, "String", ()=>(0, _stringJs.String));
parcelHelpers.export(exports, "Struct", ()=>(0, _structJs.Struct));
parcelHelpers.export(exports, "VersionedStruct", ()=>(0, _versionedStructJs.VersionedStruct));
var _encodeStreamJs = require("./src/EncodeStream.js");
var _decodeStreamJs = require("./src/DecodeStream.js");
var _arrayJs = require("./src/Array.js");
var _lazyArrayJs = require("./src/LazyArray.js");
var _bitfieldJs = require("./src/Bitfield.js");
var _booleanJs = require("./src/Boolean.js");
var _bufferJs = require("./src/Buffer.js");
var _enumJs = require("./src/Enum.js");
var _optionalJs = require("./src/Optional.js");
var _reservedJs = require("./src/Reserved.js");
var _stringJs = require("./src/String.js");
var _structJs = require("./src/Struct.js");
var _versionedStructJs = require("./src/VersionedStruct.js");
var _utilsJs = require("./src/utils.js");
parcelHelpers.exportAll(_utilsJs, exports);
var _numberJs = require("./src/Number.js");
parcelHelpers.exportAll(_numberJs, exports);
var _pointerJs = require("./src/Pointer.js");
parcelHelpers.exportAll(_pointerJs, exports);

},{"./src/EncodeStream.js":"86ypR","./src/DecodeStream.js":"igSB7","./src/Array.js":"4aRu0","./src/LazyArray.js":"chlIy","./src/Bitfield.js":"crSVv","./src/Boolean.js":"dcoYt","./src/Buffer.js":"b42lQ","./src/Enum.js":"2yQzI","./src/Optional.js":"fATpG","./src/Reserved.js":"eksFu","./src/String.js":"kuqIf","./src/Struct.js":"dPdvi","./src/VersionedStruct.js":"jp1Co","./src/utils.js":"dChjf","./src/Number.js":"gxuen","./src/Pointer.js":"dTLSP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86ypR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EncodeStream", ()=>EncodeStream);
var _decodeStreamJs = require("./DecodeStream.js");
const textEncoder = new TextEncoder();
const isBigEndian = new Uint8Array(new Uint16Array([
    0x1234
]).buffer)[0] == 0x12;
class EncodeStream {
    constructor(buffer){
        this.buffer = buffer;
        this.view = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        this.pos = 0;
    }
    writeBuffer(buffer) {
        this.buffer.set(buffer, this.pos);
        this.pos += buffer.length;
    }
    writeString(string, encoding = "ascii") {
        let buf;
        switch(encoding){
            case "utf16le":
            case "utf16-le":
            case "ucs2":
                buf = stringToUtf16(string, isBigEndian);
                break;
            case "utf16be":
            case "utf16-be":
                buf = stringToUtf16(string, !isBigEndian);
                break;
            case "utf8":
                buf = textEncoder.encode(string);
                break;
            case "ascii":
                buf = stringToAscii(string);
                break;
            default:
                throw new Error(`Unsupported encoding: ${encoding}`);
        }
        this.writeBuffer(buf);
    }
    writeUInt24BE(val) {
        this.buffer[this.pos++] = val >>> 16 & 0xff;
        this.buffer[this.pos++] = val >>> 8 & 0xff;
        this.buffer[this.pos++] = val & 0xff;
    }
    writeUInt24LE(val) {
        this.buffer[this.pos++] = val & 0xff;
        this.buffer[this.pos++] = val >>> 8 & 0xff;
        this.buffer[this.pos++] = val >>> 16 & 0xff;
    }
    writeInt24BE(val) {
        if (val >= 0) this.writeUInt24BE(val);
        else this.writeUInt24BE(val + 0xffffff + 1);
    }
    writeInt24LE(val) {
        if (val >= 0) this.writeUInt24LE(val);
        else this.writeUInt24LE(val + 0xffffff + 1);
    }
    fill(val, length) {
        if (length < this.buffer.length) {
            this.buffer.fill(val, this.pos, this.pos + length);
            this.pos += length;
        } else {
            const buf = new Uint8Array(length);
            buf.fill(val);
            this.writeBuffer(buf);
        }
    }
}
function stringToUtf16(string, swap) {
    let buf = new Uint16Array(string.length);
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        if (swap) code = code >> 8 | (code & 0xff) << 8;
        buf[i] = code;
    }
    return new Uint8Array(buf.buffer);
}
function stringToAscii(string) {
    let buf = new Uint8Array(string.length);
    for(let i = 0; i < string.length; i++)// Match node.js behavior - encoding allows 8-bit rather than 7-bit.
    buf[i] = string.charCodeAt(i);
    return buf;
}
for (let key of Object.getOwnPropertyNames(DataView.prototype))if (key.slice(0, 3) === "set") {
    let type = key.slice(3).replace("Ui", "UI");
    if (type === "Float32") type = "Float";
    else if (type === "Float64") type = "Double";
    let bytes = (0, _decodeStreamJs.DecodeStream).TYPES[type];
    EncodeStream.prototype["write" + type + (bytes === 1 ? "" : "BE")] = function(value) {
        this.view[key](this.pos, value, false);
        this.pos += bytes;
    };
    if (bytes !== 1) EncodeStream.prototype["write" + type + "LE"] = function(value) {
        this.view[key](this.pos, value, true);
        this.pos += bytes;
    };
}

},{"./DecodeStream.js":"igSB7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igSB7":[function(require,module,exports) {
// Node back-compat.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DecodeStream", ()=>DecodeStream);
const ENCODING_MAPPING = {
    utf16le: "utf-16le",
    ucs2: "utf-16le",
    utf16be: "utf-16be"
};
class DecodeStream {
    constructor(buffer){
        this.buffer = buffer;
        this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        this.pos = 0;
        this.length = this.buffer.length;
    }
    readString(length, encoding = "ascii") {
        encoding = ENCODING_MAPPING[encoding] || encoding;
        let buf = this.readBuffer(length);
        try {
            let decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
        } catch (err) {
            return buf;
        }
    }
    readBuffer(length) {
        return this.buffer.slice(this.pos, this.pos += length);
    }
    readUInt24BE() {
        return (this.readUInt16BE() << 8) + this.readUInt8();
    }
    readUInt24LE() {
        return this.readUInt16LE() + (this.readUInt8() << 16);
    }
    readInt24BE() {
        return (this.readInt16BE() << 8) + this.readUInt8();
    }
    readInt24LE() {
        return this.readUInt16LE() + (this.readInt8() << 16);
    }
}
DecodeStream.TYPES = {
    UInt8: 1,
    UInt16: 2,
    UInt24: 3,
    UInt32: 4,
    Int8: 1,
    Int16: 2,
    Int24: 3,
    Int32: 4,
    Float: 4,
    Double: 8
};
for (let key of Object.getOwnPropertyNames(DataView.prototype))if (key.slice(0, 3) === "get") {
    let type = key.slice(3).replace("Ui", "UI");
    if (type === "Float32") type = "Float";
    else if (type === "Float64") type = "Double";
    let bytes = DecodeStream.TYPES[type];
    DecodeStream.prototype["read" + type + (bytes === 1 ? "" : "BE")] = function() {
        const ret = this.view[key](this.pos, false);
        this.pos += bytes;
        return ret;
    };
    if (bytes !== 1) DecodeStream.prototype["read" + type + "LE"] = function() {
        const ret = this.view[key](this.pos, true);
        this.pos += bytes;
        return ret;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"4aRu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Array", ()=>ArrayT);
var _baseJs = require("./Base.js");
var _numberJs = require("./Number.js");
var _utilsJs = require("./utils.js");
class ArrayT extends (0, _baseJs.Base) {
    constructor(type, length, lengthType = "count"){
        super();
        this.type = type;
        this.length = length;
        this.lengthType = lengthType;
    }
    decode(stream, parent) {
        let length;
        const { pos } = stream;
        const res = [];
        let ctx = parent;
        if (this.length != null) length = _utilsJs.resolveLength(this.length, stream, parent);
        if (this.length instanceof (0, _numberJs.Number)) {
            // define hidden properties
            Object.defineProperties(res, {
                parent: {
                    value: parent
                },
                _startOffset: {
                    value: pos
                },
                _currentOffset: {
                    value: 0,
                    writable: true
                },
                _length: {
                    value: length
                }
            });
            ctx = res;
        }
        if (length == null || this.lengthType === "bytes") {
            const target = length != null ? stream.pos + length : (parent != null ? parent._length : undefined) ? parent._startOffset + parent._length : stream.length;
            while(stream.pos < target)res.push(this.type.decode(stream, ctx));
        } else for(let i = 0, end = length; i < end; i++)res.push(this.type.decode(stream, ctx));
        return res;
    }
    size(array, ctx, includePointers = true) {
        if (!array) return this.type.size(null, ctx) * _utilsJs.resolveLength(this.length, null, ctx);
        let size = 0;
        if (this.length instanceof (0, _numberJs.Number)) {
            size += this.length.size();
            ctx = {
                parent: ctx,
                pointerSize: 0
            };
        }
        for (let item of array)size += this.type.size(item, ctx);
        if (ctx && includePointers && this.length instanceof (0, _numberJs.Number)) size += ctx.pointerSize;
        return size;
    }
    encode(stream, array, parent) {
        let ctx = parent;
        if (this.length instanceof (0, _numberJs.Number)) {
            ctx = {
                pointers: [],
                startOffset: stream.pos,
                parent
            };
            ctx.pointerOffset = stream.pos + this.size(array, ctx, false);
            this.length.encode(stream, array.length);
        }
        for (let item of array)this.type.encode(stream, item, ctx);
        if (this.length instanceof (0, _numberJs.Number)) {
            let i = 0;
            while(i < ctx.pointers.length){
                const ptr = ctx.pointers[i++];
                ptr.type.encode(stream, ptr.val, ptr.parent);
            }
        }
    }
}

},{"./Base.js":"knBEr","./Number.js":"gxuen","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knBEr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Base", ()=>Base);
var _decodeStreamJs = require("./DecodeStream.js");
var _encodeStreamJs = require("./EncodeStream.js");
class Base {
    fromBuffer(buffer) {
        let stream = new (0, _decodeStreamJs.DecodeStream)(buffer);
        return this.decode(stream);
    }
    toBuffer(value) {
        let size = this.size(value);
        let buffer = new Uint8Array(size);
        let stream = new (0, _encodeStreamJs.EncodeStream)(buffer);
        this.encode(stream, value);
        return buffer;
    }
}

},{"./DecodeStream.js":"igSB7","./EncodeStream.js":"86ypR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxuen":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Number", ()=>NumberT);
parcelHelpers.export(exports, "uint8", ()=>uint8);
parcelHelpers.export(exports, "uint16be", ()=>uint16be);
parcelHelpers.export(exports, "uint16", ()=>uint16);
parcelHelpers.export(exports, "uint16le", ()=>uint16le);
parcelHelpers.export(exports, "uint24be", ()=>uint24be);
parcelHelpers.export(exports, "uint24", ()=>uint24);
parcelHelpers.export(exports, "uint24le", ()=>uint24le);
parcelHelpers.export(exports, "uint32be", ()=>uint32be);
parcelHelpers.export(exports, "uint32", ()=>uint32);
parcelHelpers.export(exports, "uint32le", ()=>uint32le);
parcelHelpers.export(exports, "int8", ()=>int8);
parcelHelpers.export(exports, "int16be", ()=>int16be);
parcelHelpers.export(exports, "int16", ()=>int16);
parcelHelpers.export(exports, "int16le", ()=>int16le);
parcelHelpers.export(exports, "int24be", ()=>int24be);
parcelHelpers.export(exports, "int24", ()=>int24);
parcelHelpers.export(exports, "int24le", ()=>int24le);
parcelHelpers.export(exports, "int32be", ()=>int32be);
parcelHelpers.export(exports, "int32", ()=>int32);
parcelHelpers.export(exports, "int32le", ()=>int32le);
parcelHelpers.export(exports, "floatbe", ()=>floatbe);
parcelHelpers.export(exports, "float", ()=>float);
parcelHelpers.export(exports, "floatle", ()=>floatle);
parcelHelpers.export(exports, "doublebe", ()=>doublebe);
parcelHelpers.export(exports, "double", ()=>double);
parcelHelpers.export(exports, "doublele", ()=>doublele);
parcelHelpers.export(exports, "Fixed", ()=>Fixed);
parcelHelpers.export(exports, "fixed16be", ()=>fixed16be);
parcelHelpers.export(exports, "fixed16", ()=>fixed16);
parcelHelpers.export(exports, "fixed16le", ()=>fixed16le);
parcelHelpers.export(exports, "fixed32be", ()=>fixed32be);
parcelHelpers.export(exports, "fixed32", ()=>fixed32);
parcelHelpers.export(exports, "fixed32le", ()=>fixed32le);
var _decodeStreamJs = require("./DecodeStream.js");
var _baseJs = require("./Base.js");
class NumberT extends (0, _baseJs.Base) {
    constructor(type, endian = "BE"){
        super();
        this.type = type;
        this.endian = endian;
        this.fn = this.type;
        if (this.type[this.type.length - 1] !== "8") this.fn += this.endian;
    }
    size() {
        return (0, _decodeStreamJs.DecodeStream).TYPES[this.type];
    }
    decode(stream) {
        return stream[`read${this.fn}`]();
    }
    encode(stream, val) {
        return stream[`write${this.fn}`](val);
    }
}
const uint8 = new NumberT("UInt8");
const uint16be = new NumberT("UInt16", "BE");
const uint16 = uint16be;
const uint16le = new NumberT("UInt16", "LE");
const uint24be = new NumberT("UInt24", "BE");
const uint24 = uint24be;
const uint24le = new NumberT("UInt24", "LE");
const uint32be = new NumberT("UInt32", "BE");
const uint32 = uint32be;
const uint32le = new NumberT("UInt32", "LE");
const int8 = new NumberT("Int8");
const int16be = new NumberT("Int16", "BE");
const int16 = int16be;
const int16le = new NumberT("Int16", "LE");
const int24be = new NumberT("Int24", "BE");
const int24 = int24be;
const int24le = new NumberT("Int24", "LE");
const int32be = new NumberT("Int32", "BE");
const int32 = int32be;
const int32le = new NumberT("Int32", "LE");
const floatbe = new NumberT("Float", "BE");
const float = floatbe;
const floatle = new NumberT("Float", "LE");
const doublebe = new NumberT("Double", "BE");
const double = doublebe;
const doublele = new NumberT("Double", "LE");
class Fixed extends NumberT {
    constructor(size, endian, fracBits = size >> 1){
        super(`Int${size}`, endian);
        this._point = 1 << fracBits;
    }
    decode(stream) {
        return super.decode(stream) / this._point;
    }
    encode(stream, val) {
        return super.encode(stream, val * this._point | 0);
    }
}
const fixed16be = new Fixed(16, "BE");
const fixed16 = fixed16be;
const fixed16le = new Fixed(16, "LE");
const fixed32be = new Fixed(32, "BE");
const fixed32 = fixed32be;
const fixed32le = new Fixed(32, "LE");

},{"./DecodeStream.js":"igSB7","./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dChjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveLength", ()=>resolveLength);
parcelHelpers.export(exports, "PropertyDescriptor", ()=>PropertyDescriptor);
var _numberJs = require("./Number.js");
function resolveLength(length, stream, parent) {
    let res;
    if (typeof length === "number") res = length;
    else if (typeof length === "function") res = length.call(parent, parent);
    else if (parent && typeof length === "string") res = parent[length];
    else if (stream && length instanceof (0, _numberJs.Number)) res = length.decode(stream);
    if (isNaN(res)) throw new Error("Not a fixed size");
    return res;
}
class PropertyDescriptor {
    constructor(opts = {}){
        this.enumerable = true;
        this.configurable = true;
        for(let key in opts){
            const val = opts[key];
            this[key] = val;
        }
    }
}

},{"./Number.js":"gxuen","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chlIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LazyArray", ()=>LazyArray);
var _arrayJs = require("./Array.js");
var _numberJs = require("./Number.js");
var _utilsJs = require("./utils.js");
class LazyArray extends (0, _arrayJs.Array) {
    decode(stream, parent) {
        const { pos } = stream;
        const length = _utilsJs.resolveLength(this.length, stream, parent);
        if (this.length instanceof (0, _numberJs.Number)) parent = {
            parent,
            _startOffset: pos,
            _currentOffset: 0,
            _length: length
        };
        const res = new LazyArrayValue(this.type, length, stream, parent);
        stream.pos += length * this.type.size(null, parent);
        return res;
    }
    size(val, ctx) {
        if (val instanceof LazyArrayValue) val = val.toArray();
        return super.size(val, ctx);
    }
    encode(stream, val, ctx) {
        if (val instanceof LazyArrayValue) val = val.toArray();
        return super.encode(stream, val, ctx);
    }
}
class LazyArrayValue {
    constructor(type, length, stream, ctx){
        this.type = type;
        this.length = length;
        this.stream = stream;
        this.ctx = ctx;
        this.base = this.stream.pos;
        this.items = [];
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (this.items[index] == null) {
            const { pos } = this.stream;
            this.stream.pos = this.base + this.type.size(null, this.ctx) * index;
            this.items[index] = this.type.decode(this.stream, this.ctx);
            this.stream.pos = pos;
        }
        return this.items[index];
    }
    toArray() {
        const result = [];
        for(let i = 0, end = this.length; i < end; i++)result.push(this.get(i));
        return result;
    }
}

},{"./Array.js":"4aRu0","./Number.js":"gxuen","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crSVv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bitfield", ()=>Bitfield);
var _baseJs = require("./Base.js");
class Bitfield extends (0, _baseJs.Base) {
    constructor(type, flags = []){
        super();
        this.type = type;
        this.flags = flags;
    }
    decode(stream) {
        const val = this.type.decode(stream);
        const res = {};
        for(let i = 0; i < this.flags.length; i++){
            const flag = this.flags[i];
            if (flag != null) res[flag] = !!(val & 1 << i);
        }
        return res;
    }
    size() {
        return this.type.size();
    }
    encode(stream, keys) {
        let val = 0;
        for(let i = 0; i < this.flags.length; i++){
            const flag = this.flags[i];
            if (flag != null) {
                if (keys[flag]) val |= 1 << i;
            }
        }
        return this.type.encode(stream, val);
    }
}

},{"./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcoYt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BooleanT", ()=>BooleanT);
parcelHelpers.export(exports, "Boolean", ()=>BooleanT);
var _baseJs = require("./Base.js");
class BooleanT extends (0, _baseJs.Base) {
    constructor(type){
        super();
        this.type = type;
    }
    decode(stream, parent) {
        return !!this.type.decode(stream, parent);
    }
    size(val, parent) {
        return this.type.size(val, parent);
    }
    encode(stream, val, parent) {
        return this.type.encode(stream, +val, parent);
    }
}

},{"./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b42lQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferT", ()=>BufferT);
parcelHelpers.export(exports, "Buffer", ()=>BufferT);
var _baseJs = require("./Base.js");
var _numberJs = require("./Number.js");
var _utilsJs = require("./utils.js");
class BufferT extends (0, _baseJs.Base) {
    constructor(length){
        super();
        this.length = length;
    }
    decode(stream, parent) {
        const length = _utilsJs.resolveLength(this.length, stream, parent);
        return stream.readBuffer(length);
    }
    size(val, parent) {
        if (!val) return _utilsJs.resolveLength(this.length, null, parent);
        let len = val.length;
        if (this.length instanceof (0, _numberJs.Number)) len += this.length.size();
        return len;
    }
    encode(stream, buf, parent) {
        if (this.length instanceof (0, _numberJs.Number)) this.length.encode(stream, buf.length);
        return stream.writeBuffer(buf);
    }
}

},{"./Base.js":"knBEr","./Number.js":"gxuen","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yQzI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Enum", ()=>Enum);
var _baseJs = require("./Base.js");
class Enum extends (0, _baseJs.Base) {
    constructor(type, options = []){
        super();
        this.type = type;
        this.options = options;
    }
    decode(stream) {
        const index = this.type.decode(stream);
        return this.options[index] || index;
    }
    size() {
        return this.type.size();
    }
    encode(stream, val) {
        const index = this.options.indexOf(val);
        if (index === -1) throw new Error(`Unknown option in enum: ${val}`);
        return this.type.encode(stream, index);
    }
}

},{"./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fATpG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Optional", ()=>Optional);
var _baseJs = require("./Base.js");
class Optional extends (0, _baseJs.Base) {
    constructor(type, condition = true){
        super();
        this.type = type;
        this.condition = condition;
    }
    decode(stream, parent) {
        let { condition } = this;
        if (typeof condition === "function") condition = condition.call(parent, parent);
        if (condition) return this.type.decode(stream, parent);
    }
    size(val, parent) {
        let { condition } = this;
        if (typeof condition === "function") condition = condition.call(parent, parent);
        if (condition) return this.type.size(val, parent);
        else return 0;
    }
    encode(stream, val, parent) {
        let { condition } = this;
        if (typeof condition === "function") condition = condition.call(parent, parent);
        if (condition) return this.type.encode(stream, val, parent);
    }
}

},{"./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eksFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Reserved", ()=>Reserved);
var _baseJs = require("./Base.js");
var _utilsJs = require("./utils.js");
class Reserved extends (0, _baseJs.Base) {
    constructor(type, count = 1){
        super();
        this.type = type;
        this.count = count;
    }
    decode(stream, parent) {
        stream.pos += this.size(null, parent);
        return undefined;
    }
    size(data, parent) {
        const count = _utilsJs.resolveLength(this.count, null, parent);
        return this.type.size() * count;
    }
    encode(stream, val, parent) {
        return stream.fill(0, this.size(val, parent));
    }
}

},{"./Base.js":"knBEr","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuqIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "String", ()=>StringT);
var _baseJs = require("./Base.js");
var _numberJs = require("./Number.js");
var _utilsJs = require("./utils.js");
class StringT extends (0, _baseJs.Base) {
    constructor(length, encoding = "ascii"){
        super();
        this.length = length;
        this.encoding = encoding;
    }
    decode(stream, parent) {
        let length, pos;
        if (this.length != null) length = _utilsJs.resolveLength(this.length, stream, parent);
        else {
            let buffer;
            ({ buffer, length, pos } = stream);
            while(pos < length && buffer[pos] !== 0x00)++pos;
            length = pos - stream.pos;
        }
        let { encoding } = this;
        if (typeof encoding === "function") encoding = encoding.call(parent, parent) || "ascii";
        const string = stream.readString(length, encoding);
        if (this.length == null && stream.pos < stream.length) stream.pos++;
        return string;
    }
    size(val, parent) {
        // Use the defined value if no value was given
        if (!val) return _utilsJs.resolveLength(this.length, null, parent);
        let { encoding } = this;
        if (typeof encoding === "function") encoding = encoding.call(parent != null ? parent.val : undefined, parent != null ? parent.val : undefined) || "ascii";
        if (encoding === "utf16be") encoding = "utf16le";
        let size = byteLength(val, encoding);
        if (this.length instanceof (0, _numberJs.Number)) size += this.length.size();
        if (this.length == null) size++;
        return size;
    }
    encode(stream, val, parent) {
        let { encoding } = this;
        if (typeof encoding === "function") encoding = encoding.call(parent != null ? parent.val : undefined, parent != null ? parent.val : undefined) || "ascii";
        if (this.length instanceof (0, _numberJs.Number)) this.length.encode(stream, byteLength(val, encoding));
        stream.writeString(val, encoding);
        if (this.length == null) return stream.writeUInt8(0x00);
    }
}
function byteLength(string, encoding) {
    switch(encoding){
        case "ascii":
            return string.length;
        case "utf8":
            let len = 0;
            for(let i = 0; i < string.length; i++){
                let c = string.charCodeAt(i);
                if (c >= 0xd800 && c <= 0xdbff && i < string.length - 1) {
                    let c2 = string.charCodeAt(++i);
                    if ((c2 & 0xfc00) === 0xdc00) c = ((c & 0x3ff) << 10) + (c2 & 0x3ff) + 0x10000;
                    else // unmatched surrogate.
                    i--;
                }
                if ((c & 0xffffff80) === 0) len++;
                else if ((c & 0xfffff800) === 0) len += 2;
                else if ((c & 0xffff0000) === 0) len += 3;
                else if ((c & 0xffe00000) === 0) len += 4;
            }
            return len;
        case "utf16le":
        case "utf16-le":
        case "utf16be":
        case "utf16-be":
        case "ucs2":
            return string.length * 2;
        default:
            throw new Error("Unknown encoding " + encoding);
    }
}

},{"./Base.js":"knBEr","./Number.js":"gxuen","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dPdvi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Struct", ()=>Struct);
var _baseJs = require("./Base.js");
var _utilsJs = require("./utils.js");
class Struct extends (0, _baseJs.Base) {
    constructor(fields = {}){
        super();
        this.fields = fields;
    }
    decode(stream, parent, length = 0) {
        const res = this._setup(stream, parent, length);
        this._parseFields(stream, res, this.fields);
        if (this.process != null) this.process.call(res, stream);
        return res;
    }
    _setup(stream, parent, length) {
        const res = {};
        // define hidden properties
        Object.defineProperties(res, {
            parent: {
                value: parent
            },
            _startOffset: {
                value: stream.pos
            },
            _currentOffset: {
                value: 0,
                writable: true
            },
            _length: {
                value: length
            }
        });
        return res;
    }
    _parseFields(stream, res, fields) {
        for(let key in fields){
            var val;
            const type = fields[key];
            if (typeof type === "function") val = type.call(res, res);
            else val = type.decode(stream, res);
            if (val !== undefined) {
                if (val instanceof _utilsJs.PropertyDescriptor) Object.defineProperty(res, key, val);
                else res[key] = val;
            }
            res._currentOffset = stream.pos - res._startOffset;
        }
    }
    size(val, parent, includePointers = true) {
        if (val == null) val = {};
        const ctx = {
            parent,
            val,
            pointerSize: 0
        };
        if (this.preEncode != null) this.preEncode.call(val);
        let size = 0;
        for(let key in this.fields){
            const type = this.fields[key];
            if (type.size != null) size += type.size(val[key], ctx);
        }
        if (includePointers) size += ctx.pointerSize;
        return size;
    }
    encode(stream, val, parent) {
        let type;
        if (this.preEncode != null) this.preEncode.call(val, stream);
        const ctx = {
            pointers: [],
            startOffset: stream.pos,
            parent,
            val,
            pointerSize: 0
        };
        ctx.pointerOffset = stream.pos + this.size(val, ctx, false);
        for(let key in this.fields){
            type = this.fields[key];
            if (type.encode != null) type.encode(stream, val[key], ctx);
        }
        let i = 0;
        while(i < ctx.pointers.length){
            const ptr = ctx.pointers[i++];
            ptr.type.encode(stream, ptr.val, ptr.parent);
        }
    }
}

},{"./Base.js":"knBEr","./utils.js":"dChjf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jp1Co":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VersionedStruct", ()=>VersionedStruct);
var _structJs = require("./Struct.js");
const getPath = (object, pathArray)=>{
    return pathArray.reduce((prevObj, key)=>prevObj && prevObj[key], object);
};
class VersionedStruct extends (0, _structJs.Struct) {
    constructor(type, versions = {}){
        super();
        this.type = type;
        this.versions = versions;
        if (typeof type === "string") this.versionPath = type.split(".");
    }
    decode(stream, parent, length = 0) {
        const res = this._setup(stream, parent, length);
        if (typeof this.type === "string") res.version = getPath(parent, this.versionPath);
        else res.version = this.type.decode(stream);
        if (this.versions.header) this._parseFields(stream, res, this.versions.header);
        const fields = this.versions[res.version];
        if (fields == null) throw new Error(`Unknown version ${res.version}`);
        if (fields instanceof VersionedStruct) return fields.decode(stream, parent);
        this._parseFields(stream, res, fields);
        if (this.process != null) this.process.call(res, stream);
        return res;
    }
    size(val, parent, includePointers = true) {
        let key, type;
        if (!val) throw new Error("Not a fixed size");
        if (this.preEncode != null) this.preEncode.call(val);
        const ctx = {
            parent,
            val,
            pointerSize: 0
        };
        let size = 0;
        if (typeof this.type !== "string") size += this.type.size(val.version, ctx);
        if (this.versions.header) for(key in this.versions.header){
            type = this.versions.header[key];
            if (type.size != null) size += type.size(val[key], ctx);
        }
        const fields = this.versions[val.version];
        if (fields == null) throw new Error(`Unknown version ${val.version}`);
        for(key in fields){
            type = fields[key];
            if (type.size != null) size += type.size(val[key], ctx);
        }
        if (includePointers) size += ctx.pointerSize;
        return size;
    }
    encode(stream, val, parent) {
        let key, type;
        if (this.preEncode != null) this.preEncode.call(val, stream);
        const ctx = {
            pointers: [],
            startOffset: stream.pos,
            parent,
            val,
            pointerSize: 0
        };
        ctx.pointerOffset = stream.pos + this.size(val, ctx, false);
        if (typeof this.type !== "string") this.type.encode(stream, val.version);
        if (this.versions.header) for(key in this.versions.header){
            type = this.versions.header[key];
            if (type.encode != null) type.encode(stream, val[key], ctx);
        }
        const fields = this.versions[val.version];
        for(key in fields){
            type = fields[key];
            if (type.encode != null) type.encode(stream, val[key], ctx);
        }
        let i = 0;
        while(i < ctx.pointers.length){
            const ptr = ctx.pointers[i++];
            ptr.type.encode(stream, ptr.val, ptr.parent);
        }
    }
}

},{"./Struct.js":"dPdvi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dTLSP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pointer", ()=>Pointer);
// A pointer whose type is determined at decode time
parcelHelpers.export(exports, "VoidPointer", ()=>VoidPointer);
var _utilsJs = require("./utils.js");
var _baseJs = require("./Base.js");
class Pointer extends (0, _baseJs.Base) {
    constructor(offsetType, type, options = {}){
        super();
        this.offsetType = offsetType;
        this.type = type;
        this.options = options;
        if (this.type === "void") this.type = null;
        if (this.options.type == null) this.options.type = "local";
        if (this.options.allowNull == null) this.options.allowNull = true;
        if (this.options.nullValue == null) this.options.nullValue = 0;
        if (this.options.lazy == null) this.options.lazy = false;
        if (this.options.relativeTo) {
            if (typeof this.options.relativeTo !== "function") throw new Error("relativeTo option must be a function");
            this.relativeToGetter = options.relativeTo;
        }
    }
    decode(stream, ctx) {
        const offset = this.offsetType.decode(stream, ctx);
        // handle NULL pointers
        if (offset === this.options.nullValue && this.options.allowNull) return null;
        let relative;
        switch(this.options.type){
            case "local":
                relative = ctx._startOffset;
                break;
            case "immediate":
                relative = stream.pos - this.offsetType.size();
                break;
            case "parent":
                relative = ctx.parent._startOffset;
                break;
            default:
                var c = ctx;
                while(c.parent)c = c.parent;
                relative = c._startOffset || 0;
        }
        if (this.options.relativeTo) relative += this.relativeToGetter(ctx);
        const ptr = offset + relative;
        if (this.type != null) {
            let val = null;
            const decodeValue = ()=>{
                if (val != null) return val;
                const { pos } = stream;
                stream.pos = ptr;
                val = this.type.decode(stream, ctx);
                stream.pos = pos;
                return val;
            };
            // If this is a lazy pointer, define a getter to decode only when needed.
            // This obviously only works when the pointer is contained by a Struct.
            if (this.options.lazy) return new _utilsJs.PropertyDescriptor({
                get: decodeValue
            });
            return decodeValue();
        } else return ptr;
    }
    size(val, ctx) {
        const parent = ctx;
        switch(this.options.type){
            case "local":
            case "immediate":
                break;
            case "parent":
                ctx = ctx.parent;
                break;
            default:
                while(ctx.parent)ctx = ctx.parent;
        }
        let { type } = this;
        if (type == null) {
            if (!(val instanceof VoidPointer)) throw new Error("Must be a VoidPointer");
            ({ type } = val);
            val = val.value;
        }
        if (val && ctx) {
            // Must be written as two separate lines rather than += in case `type.size` mutates ctx.pointerSize.
            let size = type.size(val, parent);
            ctx.pointerSize += size;
        }
        return this.offsetType.size();
    }
    encode(stream, val, ctx) {
        let relative;
        const parent = ctx;
        if (val == null) {
            this.offsetType.encode(stream, this.options.nullValue);
            return;
        }
        switch(this.options.type){
            case "local":
                relative = ctx.startOffset;
                break;
            case "immediate":
                relative = stream.pos + this.offsetType.size(val, parent);
                break;
            case "parent":
                ctx = ctx.parent;
                relative = ctx.startOffset;
                break;
            default:
                relative = 0;
                while(ctx.parent)ctx = ctx.parent;
        }
        if (this.options.relativeTo) relative += this.relativeToGetter(parent.val);
        this.offsetType.encode(stream, ctx.pointerOffset - relative);
        let { type } = this;
        if (type == null) {
            if (!(val instanceof VoidPointer)) throw new Error("Must be a VoidPointer");
            ({ type } = val);
            val = val.value;
        }
        ctx.pointers.push({
            type,
            val,
            parent
        });
        return ctx.pointerOffset += type.size(val, parent);
    }
}
class VoidPointer {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}

},{"./utils.js":"dChjf","./Base.js":"knBEr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bqQL":[function(require,module,exports) {
module.exports = require("22c5fd25e4d753f4");

},{"22c5fd25e4d753f4":"lzaEV"}],"lzaEV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _defineProperty;
    }
});
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{}],"bQNIL":[function(require,module,exports) {
module.exports = require("6b10ee8598f405e5");

},{"6b10ee8598f405e5":"dDyyx"}],"dDyyx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _tslib["__decorate"];
    }
});
var _tslib = require("d48bdc6418109143");

},{"d48bdc6418109143":"lRdW5"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixZYU":[function(require,module,exports) {
"use strict";
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};

},{}],"iKCjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCategory", ()=>$747425b437e121da$export$410364bbb673ddbc);
parcelHelpers.export(exports, "getCombiningClass", ()=>$747425b437e121da$export$c03b919c6651ed55);
parcelHelpers.export(exports, "getScript", ()=>$747425b437e121da$export$941569448d136665);
parcelHelpers.export(exports, "getEastAsianWidth", ()=>$747425b437e121da$export$92f6187db8ca6d26);
parcelHelpers.export(exports, "getNumericValue", ()=>$747425b437e121da$export$7d1258ebb7625a0d);
parcelHelpers.export(exports, "isAlphabetic", ()=>$747425b437e121da$export$52c8ea63abd07594);
parcelHelpers.export(exports, "isDigit", ()=>$747425b437e121da$export$727d9dbc4fbb948f);
parcelHelpers.export(exports, "isPunctuation", ()=>$747425b437e121da$export$a5b49f4dc6a07d2c);
parcelHelpers.export(exports, "isLowerCase", ()=>$747425b437e121da$export$7b6804e8df61fcf5);
parcelHelpers.export(exports, "isUpperCase", ()=>$747425b437e121da$export$aebd617640818cda);
parcelHelpers.export(exports, "isTitleCase", ()=>$747425b437e121da$export$de8b4ee23b2cf823);
parcelHelpers.export(exports, "isWhiteSpace", ()=>$747425b437e121da$export$3c52dd84024ae72c);
parcelHelpers.export(exports, "isBaseForm", ()=>$747425b437e121da$export$a11bdcffe109e74b);
parcelHelpers.export(exports, "isMark", ()=>$747425b437e121da$export$e33ad6871e762338);
parcelHelpers.export(exports, "default", ()=>$747425b437e121da$export$2e2bcd8739ae039);
var _base64Js = require("base64-js");
var _base64JsDefault = parcelHelpers.interopDefault(_base64Js);
var _unicodeTrie = require("unicode-trie");
var _unicodeTrieDefault = parcelHelpers.interopDefault(_unicodeTrie);
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
var $f4087201da764553$exports = {};
$f4087201da764553$exports = JSON.parse('{"categories":["Cc","Zs","Po","Sc","Ps","Pe","Sm","Pd","Nd","Lu","Sk","Pc","Ll","So","Lo","Pi","Cf","No","Pf","Lt","Lm","Mn","Me","Mc","Nl","Zl","Zp","Cs","Co"],"combiningClasses":["Not_Reordered","Above","Above_Right","Below","Attached_Above_Right","Attached_Below","Overlay","Iota_Subscript","Double_Below","Double_Above","Below_Right","Above_Left","CCC10","CCC11","CCC12","CCC13","CCC14","CCC15","CCC16","CCC17","CCC18","CCC19","CCC20","CCC21","CCC22","CCC23","CCC24","CCC25","CCC30","CCC31","CCC32","CCC27","CCC28","CCC29","CCC33","CCC34","CCC35","CCC36","Nukta","Virama","CCC84","CCC91","CCC103","CCC107","CCC118","CCC122","CCC129","CCC130","CCC132","Attached_Above","Below_Left","Left","Kana_Voicing","CCC26","Right"],"scripts":["Common","Latin","Bopomofo","Inherited","Greek","Coptic","Cyrillic","Armenian","Hebrew","Arabic","Syriac","Thaana","Nko","Samaritan","Mandaic","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","Hangul","Ethiopic","Cherokee","Canadian_Aboriginal","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","Tai_Le","New_Tai_Lue","Buginese","Tai_Tham","Balinese","Sundanese","Batak","Lepcha","Ol_Chiki","Braille","Glagolitic","Tifinagh","Han","Hiragana","Katakana","Yi","Lisu","Vai","Bamum","Syloti_Nagri","Phags_Pa","Saurashtra","Kayah_Li","Rejang","Javanese","Cham","Tai_Viet","Meetei_Mayek","null","Linear_B","Lycian","Carian","Old_Italic","Gothic","Old_Permic","Ugaritic","Old_Persian","Deseret","Shavian","Osmanya","Osage","Elbasan","Caucasian_Albanian","Linear_A","Cypriot","Imperial_Aramaic","Palmyrene","Nabataean","Hatran","Phoenician","Lydian","Meroitic_Hieroglyphs","Meroitic_Cursive","Kharoshthi","Old_South_Arabian","Old_North_Arabian","Manichaean","Avestan","Inscriptional_Parthian","Inscriptional_Pahlavi","Psalter_Pahlavi","Old_Turkic","Old_Hungarian","Hanifi_Rohingya","Old_Sogdian","Sogdian","Elymaic","Brahmi","Kaithi","Sora_Sompeng","Chakma","Mahajani","Sharada","Khojki","Multani","Khudawadi","Grantha","Newa","Tirhuta","Siddham","Modi","Takri","Ahom","Dogra","Warang_Citi","Nandinagari","Zanabazar_Square","Soyombo","Pau_Cin_Hau","Bhaiksuki","Marchen","Masaram_Gondi","Gunjala_Gondi","Makasar","Cuneiform","Egyptian_Hieroglyphs","Anatolian_Hieroglyphs","Mro","Bassa_Vah","Pahawh_Hmong","Medefaidrin","Miao","Tangut","Nushu","Duployan","SignWriting","Nyiakeng_Puachue_Hmong","Wancho","Mende_Kikakui","Adlam"],"eaw":["N","Na","A","W","H","F"]}');
const $747425b437e121da$var$trie = new (0, _unicodeTrieDefault.default)((0, _base64JsDefault.default).toByteArray("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"));
const $747425b437e121da$var$log2 = Math.log2 || ((n)=>Math.log(n) / Math.LN2);
const $747425b437e121da$var$bits = (n)=>$747425b437e121da$var$log2(n) + 1 | 0;
// compute the number of bits stored for each field
const $747425b437e121da$var$CATEGORY_BITS = $747425b437e121da$var$bits(/*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).categories.length - 1);
const $747425b437e121da$var$COMBINING_BITS = $747425b437e121da$var$bits(/*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).combiningClasses.length - 1);
const $747425b437e121da$var$SCRIPT_BITS = $747425b437e121da$var$bits(/*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).scripts.length - 1);
const $747425b437e121da$var$EAW_BITS = $747425b437e121da$var$bits(/*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).eaw.length - 1);
const $747425b437e121da$var$NUMBER_BITS = 10;
// compute shift and mask values for each field
const $747425b437e121da$var$CATEGORY_SHIFT = $747425b437e121da$var$COMBINING_BITS + $747425b437e121da$var$SCRIPT_BITS + $747425b437e121da$var$EAW_BITS + $747425b437e121da$var$NUMBER_BITS;
const $747425b437e121da$var$COMBINING_SHIFT = $747425b437e121da$var$SCRIPT_BITS + $747425b437e121da$var$EAW_BITS + $747425b437e121da$var$NUMBER_BITS;
const $747425b437e121da$var$SCRIPT_SHIFT = $747425b437e121da$var$EAW_BITS + $747425b437e121da$var$NUMBER_BITS;
const $747425b437e121da$var$EAW_SHIFT = $747425b437e121da$var$NUMBER_BITS;
const $747425b437e121da$var$CATEGORY_MASK = (1 << $747425b437e121da$var$CATEGORY_BITS) - 1;
const $747425b437e121da$var$COMBINING_MASK = (1 << $747425b437e121da$var$COMBINING_BITS) - 1;
const $747425b437e121da$var$SCRIPT_MASK = (1 << $747425b437e121da$var$SCRIPT_BITS) - 1;
const $747425b437e121da$var$EAW_MASK = (1 << $747425b437e121da$var$EAW_BITS) - 1;
const $747425b437e121da$var$NUMBER_MASK = (1 << $747425b437e121da$var$NUMBER_BITS) - 1;
function $747425b437e121da$export$410364bbb673ddbc(codePoint) {
    const val = $747425b437e121da$var$trie.get(codePoint);
    return /*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).categories[val >> $747425b437e121da$var$CATEGORY_SHIFT & $747425b437e121da$var$CATEGORY_MASK];
}
function $747425b437e121da$export$c03b919c6651ed55(codePoint) {
    const val = $747425b437e121da$var$trie.get(codePoint);
    return /*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).combiningClasses[val >> $747425b437e121da$var$COMBINING_SHIFT & $747425b437e121da$var$COMBINING_MASK];
}
function $747425b437e121da$export$941569448d136665(codePoint) {
    const val = $747425b437e121da$var$trie.get(codePoint);
    return /*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).scripts[val >> $747425b437e121da$var$SCRIPT_SHIFT & $747425b437e121da$var$SCRIPT_MASK];
}
function $747425b437e121da$export$92f6187db8ca6d26(codePoint) {
    const val = $747425b437e121da$var$trie.get(codePoint);
    return /*@__PURE__*/ $parcel$interopDefault($f4087201da764553$exports).eaw[val >> $747425b437e121da$var$EAW_SHIFT & $747425b437e121da$var$EAW_MASK];
}
function $747425b437e121da$export$7d1258ebb7625a0d(codePoint) {
    let val = $747425b437e121da$var$trie.get(codePoint);
    let num = val & $747425b437e121da$var$NUMBER_MASK;
    if (num === 0) return null;
    else if (num <= 50) return num - 1;
    else if (num < 0x1e0) {
        const numerator = (num >> 4) - 12;
        const denominator = (num & 0xf) + 1;
        return numerator / denominator;
    } else if (num < 0x300) {
        val = (num >> 5) - 14;
        let exp = (num & 0x1f) + 2;
        while(exp > 0){
            val *= 10;
            exp--;
        }
        return val;
    } else {
        val = (num >> 2) - 0xbf;
        let exp = (num & 3) + 1;
        while(exp > 0){
            val *= 60;
            exp--;
        }
        return val;
    }
}
function $747425b437e121da$export$52c8ea63abd07594(codePoint) {
    const category = $747425b437e121da$export$410364bbb673ddbc(codePoint);
    return category === "Lu" || category === "Ll" || category === "Lt" || category === "Lm" || category === "Lo" || category === "Nl";
}
function $747425b437e121da$export$727d9dbc4fbb948f(codePoint) {
    return $747425b437e121da$export$410364bbb673ddbc(codePoint) === "Nd";
}
function $747425b437e121da$export$a5b49f4dc6a07d2c(codePoint) {
    const category = $747425b437e121da$export$410364bbb673ddbc(codePoint);
    return category === "Pc" || category === "Pd" || category === "Pe" || category === "Pf" || category === "Pi" || category === "Po" || category === "Ps";
}
function $747425b437e121da$export$7b6804e8df61fcf5(codePoint) {
    return $747425b437e121da$export$410364bbb673ddbc(codePoint) === "Ll";
}
function $747425b437e121da$export$aebd617640818cda(codePoint) {
    return $747425b437e121da$export$410364bbb673ddbc(codePoint) === "Lu";
}
function $747425b437e121da$export$de8b4ee23b2cf823(codePoint) {
    return $747425b437e121da$export$410364bbb673ddbc(codePoint) === "Lt";
}
function $747425b437e121da$export$3c52dd84024ae72c(codePoint) {
    const category = $747425b437e121da$export$410364bbb673ddbc(codePoint);
    return category === "Zs" || category === "Zl" || category === "Zp";
}
function $747425b437e121da$export$a11bdcffe109e74b(codePoint) {
    const category = $747425b437e121da$export$410364bbb673ddbc(codePoint);
    return category === "Nd" || category === "No" || category === "Nl" || category === "Lu" || category === "Ll" || category === "Lt" || category === "Lm" || category === "Lo" || category === "Me" || category === "Mc";
}
function $747425b437e121da$export$e33ad6871e762338(codePoint) {
    const category = $747425b437e121da$export$410364bbb673ddbc(codePoint);
    return category === "Mn" || category === "Me" || category === "Mc";
}
var $747425b437e121da$export$2e2bcd8739ae039 = {
    getCategory: $747425b437e121da$export$410364bbb673ddbc,
    getCombiningClass: $747425b437e121da$export$c03b919c6651ed55,
    getScript: $747425b437e121da$export$941569448d136665,
    getEastAsianWidth: $747425b437e121da$export$92f6187db8ca6d26,
    getNumericValue: $747425b437e121da$export$7d1258ebb7625a0d,
    isAlphabetic: $747425b437e121da$export$52c8ea63abd07594,
    isDigit: $747425b437e121da$export$727d9dbc4fbb948f,
    isPunctuation: $747425b437e121da$export$a5b49f4dc6a07d2c,
    isLowerCase: $747425b437e121da$export$7b6804e8df61fcf5,
    isUpperCase: $747425b437e121da$export$aebd617640818cda,
    isTitleCase: $747425b437e121da$export$de8b4ee23b2cf823,
    isWhiteSpace: $747425b437e121da$export$3c52dd84024ae72c,
    isBaseForm: $747425b437e121da$export$a11bdcffe109e74b,
    isMark: $747425b437e121da$export$e33ad6871e762338
};

},{"base64-js":"eIiSV","unicode-trie":"j4VfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"j4VfX":[function(require,module,exports) {
const inflate = require("8ae222e01e363bff");
const { swap32LE } = require("16e27bed1474c3a6");
// Shift size for getting the index-1 table offset.
const SHIFT_1 = 11;
// Shift size for getting the index-2 table offset.
const SHIFT_2 = 5;
// Difference between the two shift sizes,
// for getting an index-1 offset from an index-2 offset. 6=11-5
const SHIFT_1_2 = SHIFT_1 - SHIFT_2;
// Number of index-1 entries for the BMP. 32=0x20
// This part of the index-1 table is omitted from the serialized form.
const OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;
// Number of entries in an index-2 block. 64=0x40
const INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;
// Mask for getting the lower bits for the in-index-2-block offset. */
const INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;
// Shift size for shifting left the index array values.
// Increases possible data size with 16-bit index values at the cost
// of compactability.
// This requires data blocks to be aligned by DATA_GRANULARITY.
const INDEX_SHIFT = 2;
// Number of entries in a data block. 32=0x20
const DATA_BLOCK_LENGTH = 1 << SHIFT_2;
// Mask for getting the lower bits for the in-data-block offset.
const DATA_MASK = DATA_BLOCK_LENGTH - 1;
// The part of the index-2 table for U+D800..U+DBFF stores values for
// lead surrogate code _units_ not code _points_.
// Values for lead surrogate code _points_ are indexed with this portion of the table.
// Length=32=0x20=0x400>>SHIFT_2. (There are 1024=0x400 lead surrogates.)
const LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;
const LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;
// Count the lengths of both BMP pieces. 2080=0x820
const INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;
// The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
// Length 32=0x20 for lead bytes C0..DF, regardless of SHIFT_2.
const UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;
const UTF8_2B_INDEX_2_LENGTH = 32; // U+0800 is the first code point after 2-byte UTF-8
// The index-1 table, only used for supplementary code points, at offset 2112=0x840.
// Variable length, for code points up to highStart, where the last single-value range starts.
// Maximum length 512=0x200=0x100000>>SHIFT_1.
// (For 0x100000 supplementary code points U+10000..U+10ffff.)
//
// The part of the index-2 table for supplementary code points starts
// after this index-1 table.
//
// Both the index-1 table and the following part of the index-2 table
// are omitted completely if there is only BMP data.
const INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;
// The alignment size of a data block. Also the granularity for compaction.
const DATA_GRANULARITY = 1 << INDEX_SHIFT;
class UnicodeTrie {
    constructor(data){
        const isBuffer = typeof data.readUInt32BE === "function" && typeof data.slice === "function";
        if (isBuffer || data instanceof Uint8Array) {
            // read binary format
            let uncompressedLength;
            if (isBuffer) {
                this.highStart = data.readUInt32LE(0);
                this.errorValue = data.readUInt32LE(4);
                uncompressedLength = data.readUInt32LE(8);
                data = data.slice(12);
            } else {
                const view = new DataView(data.buffer);
                this.highStart = view.getUint32(0, true);
                this.errorValue = view.getUint32(4, true);
                uncompressedLength = view.getUint32(8, true);
                data = data.subarray(12);
            }
            // double inflate the actual trie data
            data = inflate(data, new Uint8Array(uncompressedLength));
            data = inflate(data, new Uint8Array(uncompressedLength));
            // swap bytes from little-endian
            swap32LE(data);
            this.data = new Uint32Array(data.buffer);
        } else // pre-parsed data
        ({ data: this.data, highStart: this.highStart, errorValue: this.errorValue } = data);
    }
    get(codePoint) {
        let index;
        if (codePoint < 0 || codePoint > 0x10ffff) return this.errorValue;
        if (codePoint < 0xd800 || codePoint > 0xdbff && codePoint <= 0xffff) {
            // Ordinary BMP code point, excluding leading surrogates.
            // BMP uses a single level lookup.  BMP index starts at offset 0 in the index.
            // data is stored in the index array itself.
            index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
            return this.data[index];
        }
        if (codePoint <= 0xffff) {
            // Lead Surrogate Code Point.  A Separate index section is stored for
            // lead surrogate code units and code points.
            //   The main index has the code unit data.
            //   For this function, we need the code point data.
            index = (this.data[LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
            return this.data[index];
        }
        if (codePoint < this.highStart) {
            // Supplemental code point, use two-level lookup.
            index = this.data[INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> SHIFT_1)];
            index = this.data[index + (codePoint >> SHIFT_2 & INDEX_2_MASK)];
            index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
            return this.data[index];
        }
        return this.data[this.data.length - DATA_GRANULARITY];
    }
}
module.exports = UnicodeTrie;

},{"8ae222e01e363bff":"iH0PH","16e27bed1474c3a6":"alr7d"}],"iH0PH":[function(require,module,exports) {
var TINF_OK = 0;
var TINF_DATA_ERROR = -3;
function Tree() {
    this.table = new Uint16Array(16); /* table of code length counts */ 
    this.trans = new Uint16Array(288); /* code -> symbol translation table */ 
}
function Data(source, dest) {
    this.source = source;
    this.sourceIndex = 0;
    this.tag = 0;
    this.bitcount = 0;
    this.dest = dest;
    this.destLen = 0;
    this.ltree = new Tree(); /* dynamic length/symbol tree */ 
    this.dtree = new Tree(); /* dynamic distance tree */ 
}
/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */ var sltree = new Tree();
var sdtree = new Tree();
/* extra bits and base tables for length codes */ var length_bits = new Uint8Array(30);
var length_base = new Uint16Array(30);
/* extra bits and base tables for distance codes */ var dist_bits = new Uint8Array(30);
var dist_base = new Uint16Array(30);
/* special ordering of code length codes */ var clcidx = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
/* used by tinf_decode_trees, avoids allocations every call */ var code_tree = new Tree();
var lengths = new Uint8Array(320);
/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */ /* build extra bits and base tables */ function tinf_build_bits_base(bits, base, delta, first) {
    var i, sum;
    /* build bits table */ for(i = 0; i < delta; ++i)bits[i] = 0;
    for(i = 0; i < 30 - delta; ++i)bits[i + delta] = i / delta | 0;
    /* build base table */ for(sum = first, i = 0; i < 30; ++i){
        base[i] = sum;
        sum += 1 << bits[i];
    }
}
/* build the fixed huffman trees */ function tinf_build_fixed_trees(lt, dt) {
    var i;
    /* build fixed length tree */ for(i = 0; i < 7; ++i)lt.table[i] = 0;
    lt.table[7] = 24;
    lt.table[8] = 152;
    lt.table[9] = 112;
    for(i = 0; i < 24; ++i)lt.trans[i] = 256 + i;
    for(i = 0; i < 144; ++i)lt.trans[24 + i] = i;
    for(i = 0; i < 8; ++i)lt.trans[168 + i] = 280 + i;
    for(i = 0; i < 112; ++i)lt.trans[176 + i] = 144 + i;
    /* build fixed distance tree */ for(i = 0; i < 5; ++i)dt.table[i] = 0;
    dt.table[5] = 32;
    for(i = 0; i < 32; ++i)dt.trans[i] = i;
}
/* given an array of code lengths, build a tree */ var offs = new Uint16Array(16);
function tinf_build_tree(t, lengths, off, num) {
    var i, sum;
    /* clear code length count table */ for(i = 0; i < 16; ++i)t.table[i] = 0;
    /* scan symbol lengths, and sum code length counts */ for(i = 0; i < num; ++i)t.table[lengths[off + i]]++;
    t.table[0] = 0;
    /* compute offset table for distribution sort */ for(sum = 0, i = 0; i < 16; ++i){
        offs[i] = sum;
        sum += t.table[i];
    }
    /* create code->symbol translation table (symbols sorted by code) */ for(i = 0; i < num; ++i)if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
}
/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */ /* get one bit from source stream */ function tinf_getbit(d) {
    /* check if tag is empty */ if (!d.bitcount--) {
        /* load next tag */ d.tag = d.source[d.sourceIndex++];
        d.bitcount = 7;
    }
    /* shift bit out of tag */ var bit = d.tag & 1;
    d.tag >>>= 1;
    return bit;
}
/* read a num bit value from a stream and add base */ function tinf_read_bits(d, num, base) {
    if (!num) return base;
    while(d.bitcount < 24){
        d.tag |= d.source[d.sourceIndex++] << d.bitcount;
        d.bitcount += 8;
    }
    var val = d.tag & 0xffff >>> 16 - num;
    d.tag >>>= num;
    d.bitcount -= num;
    return val + base;
}
/* given a data stream and a tree, decode a symbol */ function tinf_decode_symbol(d, t) {
    while(d.bitcount < 24){
        d.tag |= d.source[d.sourceIndex++] << d.bitcount;
        d.bitcount += 8;
    }
    var sum = 0, cur = 0, len = 0;
    var tag = d.tag;
    /* get more bits while code value is above sum */ do {
        cur = 2 * cur + (tag & 1);
        tag >>>= 1;
        ++len;
        sum += t.table[len];
        cur -= t.table[len];
    }while (cur >= 0);
    d.tag = tag;
    d.bitcount -= len;
    return t.trans[sum + cur];
}
/* given a data stream, decode dynamic trees from it */ function tinf_decode_trees(d, lt, dt) {
    var hlit, hdist, hclen;
    var i, num, length;
    /* get 5 bits HLIT (257-286) */ hlit = tinf_read_bits(d, 5, 257);
    /* get 5 bits HDIST (1-32) */ hdist = tinf_read_bits(d, 5, 1);
    /* get 4 bits HCLEN (4-19) */ hclen = tinf_read_bits(d, 4, 4);
    for(i = 0; i < 19; ++i)lengths[i] = 0;
    /* read code lengths for code length alphabet */ for(i = 0; i < hclen; ++i){
        /* get 3 bits code length (0-7) */ var clen = tinf_read_bits(d, 3, 0);
        lengths[clcidx[i]] = clen;
    }
    /* build code length tree */ tinf_build_tree(code_tree, lengths, 0, 19);
    /* decode code lengths for the dynamic trees */ for(num = 0; num < hlit + hdist;){
        var sym = tinf_decode_symbol(d, code_tree);
        switch(sym){
            case 16:
                /* copy previous code length 3-6 times (read 2 bits) */ var prev = lengths[num - 1];
                for(length = tinf_read_bits(d, 2, 3); length; --length)lengths[num++] = prev;
                break;
            case 17:
                /* repeat code length 0 for 3-10 times (read 3 bits) */ for(length = tinf_read_bits(d, 3, 3); length; --length)lengths[num++] = 0;
                break;
            case 18:
                /* repeat code length 0 for 11-138 times (read 7 bits) */ for(length = tinf_read_bits(d, 7, 11); length; --length)lengths[num++] = 0;
                break;
            default:
                /* values 0-15 represent the actual code lengths */ lengths[num++] = sym;
                break;
        }
    }
    /* build dynamic trees */ tinf_build_tree(lt, lengths, 0, hlit);
    tinf_build_tree(dt, lengths, hlit, hdist);
}
/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */ /* given a stream and two trees, inflate a block of data */ function tinf_inflate_block_data(d, lt, dt) {
    while(true){
        var sym = tinf_decode_symbol(d, lt);
        /* check for end of block */ if (sym === 256) return TINF_OK;
        if (sym < 256) d.dest[d.destLen++] = sym;
        else {
            var length, dist, offs;
            var i;
            sym -= 257;
            /* possibly get more bits from length code */ length = tinf_read_bits(d, length_bits[sym], length_base[sym]);
            dist = tinf_decode_symbol(d, dt);
            /* possibly get more bits from distance code */ offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);
            /* copy match */ for(i = offs; i < offs + length; ++i)d.dest[d.destLen++] = d.dest[i];
        }
    }
}
/* inflate an uncompressed block of data */ function tinf_inflate_uncompressed_block(d) {
    var length, invlength;
    var i;
    /* unread from bitbuffer */ while(d.bitcount > 8){
        d.sourceIndex--;
        d.bitcount -= 8;
    }
    /* get length */ length = d.source[d.sourceIndex + 1];
    length = 256 * length + d.source[d.sourceIndex];
    /* get one's complement of length */ invlength = d.source[d.sourceIndex + 3];
    invlength = 256 * invlength + d.source[d.sourceIndex + 2];
    /* check length */ if (length !== (~invlength & 0x0000ffff)) return TINF_DATA_ERROR;
    d.sourceIndex += 4;
    /* copy block */ for(i = length; i; --i)d.dest[d.destLen++] = d.source[d.sourceIndex++];
    /* make sure we start next block on a byte boundary */ d.bitcount = 0;
    return TINF_OK;
}
/* inflate stream from source to dest */ function tinf_uncompress(source, dest) {
    var d = new Data(source, dest);
    var bfinal, btype, res;
    do {
        /* read final block flag */ bfinal = tinf_getbit(d);
        /* read block type (2 bits) */ btype = tinf_read_bits(d, 2, 0);
        /* decompress block */ switch(btype){
            case 0:
                /* decompress uncompressed block */ res = tinf_inflate_uncompressed_block(d);
                break;
            case 1:
                /* decompress block with fixed huffman trees */ res = tinf_inflate_block_data(d, sltree, sdtree);
                break;
            case 2:
                /* decompress block with dynamic huffman trees */ tinf_decode_trees(d, d.ltree, d.dtree);
                res = tinf_inflate_block_data(d, d.ltree, d.dtree);
                break;
            default:
                res = TINF_DATA_ERROR;
        }
        if (res !== TINF_OK) throw new Error("Data error");
    }while (!bfinal);
    if (d.destLen < d.dest.length) {
        if (typeof d.dest.slice === "function") return d.dest.slice(0, d.destLen);
        else return d.dest.subarray(0, d.destLen);
    }
    return d.dest;
}
/* -------------------- *
 * -- initialization -- *
 * -------------------- */ /* build fixed huffman trees */ tinf_build_fixed_trees(sltree, sdtree);
/* build extra bits and base tables */ tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);
/* fix a special case */ length_bits[28] = 0;
length_base[28] = 258;
module.exports = tinf_uncompress;

},{}],"alr7d":[function(require,module,exports) {
const isBigEndian = new Uint8Array(new Uint32Array([
    0x12345678
]).buffer)[0] === 0x12;
const swap = (b, n, m)=>{
    let i = b[n];
    b[n] = b[m];
    b[m] = i;
};
const swap32 = (array)=>{
    const len = array.length;
    for(let i = 0; i < len; i += 4){
        swap(array, i, i + 3);
        swap(array, i + 1, i + 2);
    }
};
const swap32LE = (array)=>{
    if (isBigEndian) swap32(array);
};
module.exports = {
    swap32LE: swap32LE
};

},{}],"jjAyt":[function(require,module,exports) {
"use strict";
var INITIAL_STATE = 1;
var FAIL_STATE = 0;
/**
 * A StateMachine represents a deterministic finite automaton.
 * It can perform matches over a sequence of values, similar to a regular expression.
 */ class StateMachine {
    constructor(dfa){
        this.stateTable = dfa.stateTable;
        this.accepting = dfa.accepting;
        this.tags = dfa.tags;
    }
    /**
   * Returns an iterable object that yields pattern matches over the input sequence.
   * Matches are of the form [startIndex, endIndex, tags].
   */ match(str) {
        var self = this;
        return {
            *[Symbol.iterator] () {
                var state = INITIAL_STATE;
                var startRun = null;
                var lastAccepting = null;
                var lastState = null;
                for(var p = 0; p < str.length; p++){
                    var c = str[p];
                    lastState = state;
                    state = self.stateTable[state][c];
                    if (state === FAIL_STATE) {
                        // yield the last match if any
                        if (startRun != null && lastAccepting != null && lastAccepting >= startRun) yield [
                            startRun,
                            lastAccepting,
                            self.tags[lastState]
                        ];
                         // reset the state as if we started over from the initial state
                        state = self.stateTable[INITIAL_STATE][c];
                        startRun = null;
                    } // start a run if not in the failure state
                    if (state !== FAIL_STATE && startRun == null) startRun = p;
                     // if accepting, mark the potential match end
                    if (self.accepting[state]) lastAccepting = p;
                     // reset the state to the initial state if we get into the failure state
                    if (state === FAIL_STATE) state = INITIAL_STATE;
                } // yield the last match if any
                if (startRun != null && lastAccepting != null && lastAccepting >= startRun) yield [
                    startRun,
                    lastAccepting,
                    self.tags[state]
                ];
            }
        };
    }
    /**
   * For each match over the input sequence, action functions matching
   * the tag definitions in the input pattern are called with the startIndex,
   * endIndex, and sub-match sequence.
   */ apply(str, actions) {
        for (var [start, end, tags] of this.match(str)){
            for (var tag of tags)if (typeof actions[tag] === "function") actions[tag](start, end, str.slice(start, end + 1));
        }
    }
}
module.exports = StateMachine;

},{}],"02d7F":[function(require,module,exports) {
var Buffer = require("6a12806bba69ad08").Buffer;
var clone = function() {
    "use strict";
    function _instanceof(obj, type) {
        return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
        nativeMap = Map;
    } catch (_) {
        // maybe a reference error because no `Map`. Give it a dummy value that no
        // value will ever be an instanceof.
        nativeMap = function() {};
    }
    var nativeSet;
    try {
        nativeSet = Set;
    } catch (_) {
        nativeSet = function() {};
    }
    var nativePromise;
    try {
        nativePromise = Promise;
    } catch (_) {
        nativePromise = function() {};
    }
    /**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/ function clone(parent, circular, depth, prototype, includeNonEnumerable) {
        if (typeof circular === "object") {
            depth = circular.depth;
            prototype = circular.prototype;
            includeNonEnumerable = circular.includeNonEnumerable;
            circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != "undefined";
        if (typeof circular == "undefined") circular = true;
        if (typeof depth == "undefined") depth = Infinity;
        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
            // cloning null always returns null
            if (parent === null) return null;
            if (depth === 0) return parent;
            var child;
            var proto;
            if (typeof parent != "object") return parent;
            if (_instanceof(parent, nativeMap)) child = new nativeMap();
            else if (_instanceof(parent, nativeSet)) child = new nativeSet();
            else if (_instanceof(parent, nativePromise)) child = new nativePromise(function(resolve, reject) {
                parent.then(function(value) {
                    resolve(_clone(value, depth - 1));
                }, function(err) {
                    reject(_clone(err, depth - 1));
                });
            });
            else if (clone.__isArray(parent)) child = [];
            else if (clone.__isRegExp(parent)) {
                child = new RegExp(parent.source, __getRegExpFlags(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (clone.__isDate(parent)) child = new Date(parent.getTime());
            else if (useBuffer && Buffer.isBuffer(parent)) {
                if (Buffer.allocUnsafe) // Node.js >= 4.5.0
                child = Buffer.allocUnsafe(parent.length);
                else // Older Node.js versions
                child = new Buffer(parent.length);
                parent.copy(child);
                return child;
            } else if (_instanceof(parent, Error)) child = Object.create(parent);
            else if (typeof prototype == "undefined") {
                proto = Object.getPrototypeOf(parent);
                child = Object.create(proto);
            } else {
                child = Object.create(prototype);
                proto = prototype;
            }
            if (circular) {
                var index = allParents.indexOf(parent);
                if (index != -1) return allChildren[index];
                allParents.push(parent);
                allChildren.push(child);
            }
            if (_instanceof(parent, nativeMap)) parent.forEach(function(value, key) {
                var keyChild = _clone(key, depth - 1);
                var valueChild = _clone(value, depth - 1);
                child.set(keyChild, valueChild);
            });
            if (_instanceof(parent, nativeSet)) parent.forEach(function(value) {
                var entryChild = _clone(value, depth - 1);
                child.add(entryChild);
            });
            for(var i in parent){
                var attrs;
                if (proto) attrs = Object.getOwnPropertyDescriptor(proto, i);
                if (attrs && attrs.set == null) continue;
                child[i] = _clone(parent[i], depth - 1);
            }
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(parent);
                for(var i = 0; i < symbols.length; i++){
                    // Don't need to worry about cloning a symbol because it is a primitive,
                    // like a number or string.
                    var symbol = symbols[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) continue;
                    child[symbol] = _clone(parent[symbol], depth - 1);
                    if (!descriptor.enumerable) Object.defineProperty(child, symbol, {
                        enumerable: false
                    });
                }
            }
            if (includeNonEnumerable) {
                var allPropertyNames = Object.getOwnPropertyNames(parent);
                for(var i = 0; i < allPropertyNames.length; i++){
                    var propertyName = allPropertyNames[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
                    if (descriptor && descriptor.enumerable) continue;
                    child[propertyName] = _clone(parent[propertyName], depth - 1);
                    Object.defineProperty(child, propertyName, {
                        enumerable: false
                    });
                }
            }
            return child;
        }
        return _clone(parent, depth);
    }
    /**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */ clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c = function() {};
        c.prototype = parent;
        return new c();
    };
    // private utility functions
    function __objToStr(o) {
        return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
        return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
        return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
}();
if (0, module.exports) module.exports = clone;

},{"6a12806bba69ad08":"bFT03"}],"bgxC5":[function(require,module,exports) {
module.exports = require("e749e0bd4b2ed991").BrotliDecompressBuffer;

},{"e749e0bd4b2ed991":"dYjRX"}],"dYjRX":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/ var BrotliInput = require("e78da4f881c045fc").BrotliInput;
var BrotliOutput = require("e78da4f881c045fc").BrotliOutput;
var BrotliBitReader = require("8ead054b5aa5fe7b");
var BrotliDictionary = require("972dabfef886f9ef");
var HuffmanCode = require("3a26f72c03db659e").HuffmanCode;
var BrotliBuildHuffmanTable = require("3a26f72c03db659e").BrotliBuildHuffmanTable;
var Context = require("ec89e1d307370091");
var Prefix = require("b64dbc814ce2ff4a");
var Transform = require("3133426e058893de");
var kDefaultCodeLength = 8;
var kCodeLengthRepeatCode = 16;
var kNumLiteralCodes = 256;
var kNumInsertAndCopyCodes = 704;
var kNumBlockLengthCodes = 26;
var kLiteralContextBits = 6;
var kDistanceContextBits = 2;
var HUFFMAN_TABLE_BITS = 8;
var HUFFMAN_TABLE_MASK = 0xff;
/* Maximum possible Huffman table size for an alphabet size of 704, max code
 * length 15 and root table bits 8. */ var HUFFMAN_MAX_TABLE_SIZE = 1080;
var CODE_LENGTH_CODES = 18;
var kCodeLengthCodeOrder = new Uint8Array([
    1,
    2,
    3,
    4,
    0,
    5,
    17,
    6,
    16,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
]);
var NUM_DISTANCE_SHORT_CODES = 16;
var kDistanceShortCodeIndexOffset = new Uint8Array([
    3,
    2,
    1,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    2,
    2,
    2,
    2,
    2,
    2
]);
var kDistanceShortCodeValueOffset = new Int8Array([
    0,
    0,
    0,
    0,
    -1,
    1,
    -2,
    2,
    -3,
    3,
    -1,
    1,
    -2,
    2,
    -3,
    3
]);
var kMaxHuffmanTableSize = new Uint16Array([
    256,
    402,
    436,
    468,
    500,
    534,
    566,
    598,
    630,
    662,
    694,
    726,
    758,
    790,
    822,
    854,
    886,
    920,
    952,
    984,
    1016,
    1048,
    1080
]);
function DecodeWindowBits(br) {
    var n;
    if (br.readBits(1) === 0) return 16;
    n = br.readBits(3);
    if (n > 0) return 17 + n;
    n = br.readBits(3);
    if (n > 0) return 8 + n;
    return 17;
}
/* Decodes a number in the range [0..255], by reading 1 - 11 bits. */ function DecodeVarLenUint8(br) {
    if (br.readBits(1)) {
        var nbits = br.readBits(3);
        if (nbits === 0) return 1;
        else return br.readBits(nbits) + (1 << nbits);
    }
    return 0;
}
function MetaBlockLength() {
    this.meta_block_length = 0;
    this.input_end = 0;
    this.is_uncompressed = 0;
    this.is_metadata = false;
}
function DecodeMetaBlockLength(br) {
    var out = new MetaBlockLength;
    var size_nibbles;
    var size_bytes;
    var i;
    out.input_end = br.readBits(1);
    if (out.input_end && br.readBits(1)) return out;
    size_nibbles = br.readBits(2) + 4;
    if (size_nibbles === 7) {
        out.is_metadata = true;
        if (br.readBits(1) !== 0) throw new Error("Invalid reserved bit");
        size_bytes = br.readBits(2);
        if (size_bytes === 0) return out;
        for(i = 0; i < size_bytes; i++){
            var next_byte = br.readBits(8);
            if (i + 1 === size_bytes && size_bytes > 1 && next_byte === 0) throw new Error("Invalid size byte");
            out.meta_block_length |= next_byte << i * 8;
        }
    } else for(i = 0; i < size_nibbles; ++i){
        var next_nibble = br.readBits(4);
        if (i + 1 === size_nibbles && size_nibbles > 4 && next_nibble === 0) throw new Error("Invalid size nibble");
        out.meta_block_length |= next_nibble << i * 4;
    }
    ++out.meta_block_length;
    if (!out.input_end && !out.is_metadata) out.is_uncompressed = br.readBits(1);
    return out;
}
/* Decodes the next Huffman code from bit-stream. */ function ReadSymbol(table, index, br) {
    var start_index = index;
    var nbits;
    br.fillBitWindow();
    index += br.val_ >>> br.bit_pos_ & HUFFMAN_TABLE_MASK;
    nbits = table[index].bits - HUFFMAN_TABLE_BITS;
    if (nbits > 0) {
        br.bit_pos_ += HUFFMAN_TABLE_BITS;
        index += table[index].value;
        index += br.val_ >>> br.bit_pos_ & (1 << nbits) - 1;
    }
    br.bit_pos_ += table[index].bits;
    return table[index].value;
}
function ReadHuffmanCodeLengths(code_length_code_lengths, num_symbols, code_lengths, br) {
    var symbol = 0;
    var prev_code_len = kDefaultCodeLength;
    var repeat = 0;
    var repeat_code_len = 0;
    var space = 32768;
    var table = [];
    for(var i = 0; i < 32; i++)table.push(new HuffmanCode(0, 0));
    BrotliBuildHuffmanTable(table, 0, 5, code_length_code_lengths, CODE_LENGTH_CODES);
    while(symbol < num_symbols && space > 0){
        var p = 0;
        var code_len;
        br.readMoreInput();
        br.fillBitWindow();
        p += br.val_ >>> br.bit_pos_ & 31;
        br.bit_pos_ += table[p].bits;
        code_len = table[p].value & 0xff;
        if (code_len < kCodeLengthRepeatCode) {
            repeat = 0;
            code_lengths[symbol++] = code_len;
            if (code_len !== 0) {
                prev_code_len = code_len;
                space -= 32768 >> code_len;
            }
        } else {
            var extra_bits = code_len - 14;
            var old_repeat;
            var repeat_delta;
            var new_len = 0;
            if (code_len === kCodeLengthRepeatCode) new_len = prev_code_len;
            if (repeat_code_len !== new_len) {
                repeat = 0;
                repeat_code_len = new_len;
            }
            old_repeat = repeat;
            if (repeat > 0) {
                repeat -= 2;
                repeat <<= extra_bits;
            }
            repeat += br.readBits(extra_bits) + 3;
            repeat_delta = repeat - old_repeat;
            if (symbol + repeat_delta > num_symbols) throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");
            for(var x = 0; x < repeat_delta; x++)code_lengths[symbol + x] = repeat_code_len;
            symbol += repeat_delta;
            if (repeat_code_len !== 0) space -= repeat_delta << 15 - repeat_code_len;
        }
    }
    if (space !== 0) throw new Error("[ReadHuffmanCodeLengths] space = " + space);
    for(; symbol < num_symbols; symbol++)code_lengths[symbol] = 0;
}
function ReadHuffmanCode(alphabet_size, tables, table, br) {
    var table_size = 0;
    var simple_code_or_skip;
    var code_lengths = new Uint8Array(alphabet_size);
    br.readMoreInput();
    /* simple_code_or_skip is used as follows:
     1 for simple code;
     0 for no skipping, 2 skips 2 code lengths, 3 skips 3 code lengths */ simple_code_or_skip = br.readBits(2);
    if (simple_code_or_skip === 1) {
        /* Read symbols, codes & code lengths directly. */ var i;
        var max_bits_counter = alphabet_size - 1;
        var max_bits = 0;
        var symbols = new Int32Array(4);
        var num_symbols = br.readBits(2) + 1;
        while(max_bits_counter){
            max_bits_counter >>= 1;
            ++max_bits;
        }
        for(i = 0; i < num_symbols; ++i){
            symbols[i] = br.readBits(max_bits) % alphabet_size;
            code_lengths[symbols[i]] = 2;
        }
        code_lengths[symbols[0]] = 1;
        switch(num_symbols){
            case 1:
                break;
            case 3:
                if (symbols[0] === symbols[1] || symbols[0] === symbols[2] || symbols[1] === symbols[2]) throw new Error("[ReadHuffmanCode] invalid symbols");
                break;
            case 2:
                if (symbols[0] === symbols[1]) throw new Error("[ReadHuffmanCode] invalid symbols");
                code_lengths[symbols[1]] = 1;
                break;
            case 4:
                if (symbols[0] === symbols[1] || symbols[0] === symbols[2] || symbols[0] === symbols[3] || symbols[1] === symbols[2] || symbols[1] === symbols[3] || symbols[2] === symbols[3]) throw new Error("[ReadHuffmanCode] invalid symbols");
                if (br.readBits(1)) {
                    code_lengths[symbols[2]] = 3;
                    code_lengths[symbols[3]] = 3;
                } else code_lengths[symbols[0]] = 2;
                break;
        }
    } else {
        var i;
        var code_length_code_lengths = new Uint8Array(CODE_LENGTH_CODES);
        var space = 32;
        var num_codes = 0;
        /* Static Huffman code for the code length code lengths */ var huff = [
            new HuffmanCode(2, 0),
            new HuffmanCode(2, 4),
            new HuffmanCode(2, 3),
            new HuffmanCode(3, 2),
            new HuffmanCode(2, 0),
            new HuffmanCode(2, 4),
            new HuffmanCode(2, 3),
            new HuffmanCode(4, 1),
            new HuffmanCode(2, 0),
            new HuffmanCode(2, 4),
            new HuffmanCode(2, 3),
            new HuffmanCode(3, 2),
            new HuffmanCode(2, 0),
            new HuffmanCode(2, 4),
            new HuffmanCode(2, 3),
            new HuffmanCode(4, 5)
        ];
        for(i = simple_code_or_skip; i < CODE_LENGTH_CODES && space > 0; ++i){
            var code_len_idx = kCodeLengthCodeOrder[i];
            var p = 0;
            var v;
            br.fillBitWindow();
            p += br.val_ >>> br.bit_pos_ & 15;
            br.bit_pos_ += huff[p].bits;
            v = huff[p].value;
            code_length_code_lengths[code_len_idx] = v;
            if (v !== 0) {
                space -= 32 >> v;
                ++num_codes;
            }
        }
        if (!(num_codes === 1 || space === 0)) throw new Error("[ReadHuffmanCode] invalid num_codes or space");
        ReadHuffmanCodeLengths(code_length_code_lengths, alphabet_size, code_lengths, br);
    }
    table_size = BrotliBuildHuffmanTable(tables, table, HUFFMAN_TABLE_BITS, code_lengths, alphabet_size);
    if (table_size === 0) throw new Error("[ReadHuffmanCode] BuildHuffmanTable failed: ");
    return table_size;
}
function ReadBlockLength(table, index, br) {
    var code;
    var nbits;
    code = ReadSymbol(table, index, br);
    nbits = Prefix.kBlockLengthPrefixCode[code].nbits;
    return Prefix.kBlockLengthPrefixCode[code].offset + br.readBits(nbits);
}
function TranslateShortCodes(code, ringbuffer, index) {
    var val;
    if (code < NUM_DISTANCE_SHORT_CODES) {
        index += kDistanceShortCodeIndexOffset[code];
        index &= 3;
        val = ringbuffer[index] + kDistanceShortCodeValueOffset[code];
    } else val = code - NUM_DISTANCE_SHORT_CODES + 1;
    return val;
}
function MoveToFront(v, index) {
    var value = v[index];
    var i = index;
    for(; i; --i)v[i] = v[i - 1];
    v[0] = value;
}
function InverseMoveToFrontTransform(v, v_len) {
    var mtf = new Uint8Array(256);
    var i;
    for(i = 0; i < 256; ++i)mtf[i] = i;
    for(i = 0; i < v_len; ++i){
        var index = v[i];
        v[i] = mtf[index];
        if (index) MoveToFront(mtf, index);
    }
}
/* Contains a collection of huffman trees with the same alphabet size. */ function HuffmanTreeGroup(alphabet_size, num_htrees) {
    this.alphabet_size = alphabet_size;
    this.num_htrees = num_htrees;
    this.codes = new Array(num_htrees + num_htrees * kMaxHuffmanTableSize[alphabet_size + 31 >>> 5]);
    this.htrees = new Uint32Array(num_htrees);
}
HuffmanTreeGroup.prototype.decode = function(br) {
    var i;
    var table_size;
    var next = 0;
    for(i = 0; i < this.num_htrees; ++i){
        this.htrees[i] = next;
        table_size = ReadHuffmanCode(this.alphabet_size, this.codes, next, br);
        next += table_size;
    }
};
function DecodeContextMap(context_map_size, br) {
    var out = {
        num_htrees: null,
        context_map: null
    };
    var use_rle_for_zeros;
    var max_run_length_prefix = 0;
    var table;
    var i;
    br.readMoreInput();
    var num_htrees = out.num_htrees = DecodeVarLenUint8(br) + 1;
    var context_map = out.context_map = new Uint8Array(context_map_size);
    if (num_htrees <= 1) return out;
    use_rle_for_zeros = br.readBits(1);
    if (use_rle_for_zeros) max_run_length_prefix = br.readBits(4) + 1;
    table = [];
    for(i = 0; i < HUFFMAN_MAX_TABLE_SIZE; i++)table[i] = new HuffmanCode(0, 0);
    ReadHuffmanCode(num_htrees + max_run_length_prefix, table, 0, br);
    for(i = 0; i < context_map_size;){
        var code;
        br.readMoreInput();
        code = ReadSymbol(table, 0, br);
        if (code === 0) {
            context_map[i] = 0;
            ++i;
        } else if (code <= max_run_length_prefix) {
            var reps = 1 + (1 << code) + br.readBits(code);
            while(--reps){
                if (i >= context_map_size) throw new Error("[DecodeContextMap] i >= context_map_size");
                context_map[i] = 0;
                ++i;
            }
        } else {
            context_map[i] = code - max_run_length_prefix;
            ++i;
        }
    }
    if (br.readBits(1)) InverseMoveToFrontTransform(context_map, context_map_size);
    return out;
}
function DecodeBlockType(max_block_type, trees, tree_type, block_types, ringbuffers, indexes, br) {
    var ringbuffer = tree_type * 2;
    var index = tree_type;
    var type_code = ReadSymbol(trees, tree_type * HUFFMAN_MAX_TABLE_SIZE, br);
    var block_type;
    if (type_code === 0) block_type = ringbuffers[ringbuffer + (indexes[index] & 1)];
    else if (type_code === 1) block_type = ringbuffers[ringbuffer + (indexes[index] - 1 & 1)] + 1;
    else block_type = type_code - 2;
    if (block_type >= max_block_type) block_type -= max_block_type;
    block_types[tree_type] = block_type;
    ringbuffers[ringbuffer + (indexes[index] & 1)] = block_type;
    ++indexes[index];
}
function CopyUncompressedBlockToOutput(output, len, pos, ringbuffer, ringbuffer_mask, br) {
    var rb_size = ringbuffer_mask + 1;
    var rb_pos = pos & ringbuffer_mask;
    var br_pos = br.pos_ & BrotliBitReader.IBUF_MASK;
    var nbytes;
    /* For short lengths copy byte-by-byte */ if (len < 8 || br.bit_pos_ + (len << 3) < br.bit_end_pos_) {
        while(len-- > 0){
            br.readMoreInput();
            ringbuffer[rb_pos++] = br.readBits(8);
            if (rb_pos === rb_size) {
                output.write(ringbuffer, rb_size);
                rb_pos = 0;
            }
        }
        return;
    }
    if (br.bit_end_pos_ < 32) throw new Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32");
    /* Copy remaining 0-4 bytes from br.val_ to ringbuffer. */ while(br.bit_pos_ < 32){
        ringbuffer[rb_pos] = br.val_ >>> br.bit_pos_;
        br.bit_pos_ += 8;
        ++rb_pos;
        --len;
    }
    /* Copy remaining bytes from br.buf_ to ringbuffer. */ nbytes = br.bit_end_pos_ - br.bit_pos_ >> 3;
    if (br_pos + nbytes > BrotliBitReader.IBUF_MASK) {
        var tail = BrotliBitReader.IBUF_MASK + 1 - br_pos;
        for(var x = 0; x < tail; x++)ringbuffer[rb_pos + x] = br.buf_[br_pos + x];
        nbytes -= tail;
        rb_pos += tail;
        len -= tail;
        br_pos = 0;
    }
    for(var x = 0; x < nbytes; x++)ringbuffer[rb_pos + x] = br.buf_[br_pos + x];
    rb_pos += nbytes;
    len -= nbytes;
    /* If we wrote past the logical end of the ringbuffer, copy the tail of the
     ringbuffer to its beginning and flush the ringbuffer to the output. */ if (rb_pos >= rb_size) {
        output.write(ringbuffer, rb_size);
        rb_pos -= rb_size;
        for(var x = 0; x < rb_pos; x++)ringbuffer[x] = ringbuffer[rb_size + x];
    }
    /* If we have more to copy than the remaining size of the ringbuffer, then we
     first fill the ringbuffer from the input and then flush the ringbuffer to
     the output */ while(rb_pos + len >= rb_size){
        nbytes = rb_size - rb_pos;
        if (br.input_.read(ringbuffer, rb_pos, nbytes) < nbytes) throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");
        output.write(ringbuffer, rb_size);
        len -= nbytes;
        rb_pos = 0;
    }
    /* Copy straight from the input onto the ringbuffer. The ringbuffer will be
     flushed to the output at a later time. */ if (br.input_.read(ringbuffer, rb_pos, len) < len) throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");
    /* Restore the state of the bit reader. */ br.reset();
}
/* Advances the bit reader position to the next byte boundary and verifies
   that any skipped bits are set to zero. */ function JumpToByteBoundary(br) {
    var new_bit_pos = br.bit_pos_ + 7 & -8;
    var pad_bits = br.readBits(new_bit_pos - br.bit_pos_);
    return pad_bits == 0;
}
function BrotliDecompressedSize(buffer) {
    var input = new BrotliInput(buffer);
    var br = new BrotliBitReader(input);
    DecodeWindowBits(br);
    var out = DecodeMetaBlockLength(br);
    return out.meta_block_length;
}
exports.BrotliDecompressedSize = BrotliDecompressedSize;
function BrotliDecompressBuffer(buffer, output_size) {
    var input = new BrotliInput(buffer);
    if (output_size == null) output_size = BrotliDecompressedSize(buffer);
    var output_buffer = new Uint8Array(output_size);
    var output = new BrotliOutput(output_buffer);
    BrotliDecompress(input, output);
    if (output.pos < output.buffer.length) output.buffer = output.buffer.subarray(0, output.pos);
    return output.buffer;
}
exports.BrotliDecompressBuffer = BrotliDecompressBuffer;
function BrotliDecompress(input, output) {
    var i;
    var pos = 0;
    var input_end = 0;
    var window_bits = 0;
    var max_backward_distance;
    var max_distance = 0;
    var ringbuffer_size;
    var ringbuffer_mask;
    var ringbuffer;
    var ringbuffer_end;
    /* This ring buffer holds a few past copy distances that will be used by */ /* some special distance codes. */ var dist_rb = [
        16,
        15,
        11,
        4
    ];
    var dist_rb_idx = 0;
    /* The previous 2 bytes used for context. */ var prev_byte1 = 0;
    var prev_byte2 = 0;
    var hgroup = [
        new HuffmanTreeGroup(0, 0),
        new HuffmanTreeGroup(0, 0),
        new HuffmanTreeGroup(0, 0)
    ];
    var block_type_trees;
    var block_len_trees;
    var br;
    /* We need the slack region for the following reasons:
       - always doing two 8-byte copies for fast backward copying
       - transforms
       - flushing the input ringbuffer when decoding uncompressed blocks */ var kRingBufferWriteAheadSlack = 128 + BrotliBitReader.READ_SIZE;
    br = new BrotliBitReader(input);
    /* Decode window size. */ window_bits = DecodeWindowBits(br);
    max_backward_distance = (1 << window_bits) - 16;
    ringbuffer_size = 1 << window_bits;
    ringbuffer_mask = ringbuffer_size - 1;
    ringbuffer = new Uint8Array(ringbuffer_size + kRingBufferWriteAheadSlack + BrotliDictionary.maxDictionaryWordLength);
    ringbuffer_end = ringbuffer_size;
    block_type_trees = [];
    block_len_trees = [];
    for(var x = 0; x < 3 * HUFFMAN_MAX_TABLE_SIZE; x++){
        block_type_trees[x] = new HuffmanCode(0, 0);
        block_len_trees[x] = new HuffmanCode(0, 0);
    }
    while(!input_end){
        var meta_block_remaining_len = 0;
        var is_uncompressed;
        var block_length = [
            268435456,
            268435456,
            268435456
        ];
        var block_type = [
            0
        ];
        var num_block_types = [
            1,
            1,
            1
        ];
        var block_type_rb = [
            0,
            1,
            0,
            1,
            0,
            1
        ];
        var block_type_rb_index = [
            0
        ];
        var distance_postfix_bits;
        var num_direct_distance_codes;
        var distance_postfix_mask;
        var num_distance_codes;
        var context_map = null;
        var context_modes = null;
        var num_literal_htrees;
        var dist_context_map = null;
        var num_dist_htrees;
        var context_offset = 0;
        var context_map_slice = null;
        var literal_htree_index = 0;
        var dist_context_offset = 0;
        var dist_context_map_slice = null;
        var dist_htree_index = 0;
        var context_lookup_offset1 = 0;
        var context_lookup_offset2 = 0;
        var context_mode;
        var htree_command;
        for(i = 0; i < 3; ++i){
            hgroup[i].codes = null;
            hgroup[i].htrees = null;
        }
        br.readMoreInput();
        var _out = DecodeMetaBlockLength(br);
        meta_block_remaining_len = _out.meta_block_length;
        if (pos + meta_block_remaining_len > output.buffer.length) {
            /* We need to grow the output buffer to fit the additional data. */ var tmp = new Uint8Array(pos + meta_block_remaining_len);
            tmp.set(output.buffer);
            output.buffer = tmp;
        }
        input_end = _out.input_end;
        is_uncompressed = _out.is_uncompressed;
        if (_out.is_metadata) {
            JumpToByteBoundary(br);
            for(; meta_block_remaining_len > 0; --meta_block_remaining_len){
                br.readMoreInput();
                /* Read one byte and ignore it. */ br.readBits(8);
            }
            continue;
        }
        if (meta_block_remaining_len === 0) continue;
        if (is_uncompressed) {
            br.bit_pos_ = br.bit_pos_ + 7 & -8;
            CopyUncompressedBlockToOutput(output, meta_block_remaining_len, pos, ringbuffer, ringbuffer_mask, br);
            pos += meta_block_remaining_len;
            continue;
        }
        for(i = 0; i < 3; ++i){
            num_block_types[i] = DecodeVarLenUint8(br) + 1;
            if (num_block_types[i] >= 2) {
                ReadHuffmanCode(num_block_types[i] + 2, block_type_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
                ReadHuffmanCode(kNumBlockLengthCodes, block_len_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
                block_length[i] = ReadBlockLength(block_len_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
                block_type_rb_index[i] = 1;
            }
        }
        br.readMoreInput();
        distance_postfix_bits = br.readBits(2);
        num_direct_distance_codes = NUM_DISTANCE_SHORT_CODES + (br.readBits(4) << distance_postfix_bits);
        distance_postfix_mask = (1 << distance_postfix_bits) - 1;
        num_distance_codes = num_direct_distance_codes + (48 << distance_postfix_bits);
        context_modes = new Uint8Array(num_block_types[0]);
        for(i = 0; i < num_block_types[0]; ++i){
            br.readMoreInput();
            context_modes[i] = br.readBits(2) << 1;
        }
        var _o1 = DecodeContextMap(num_block_types[0] << kLiteralContextBits, br);
        num_literal_htrees = _o1.num_htrees;
        context_map = _o1.context_map;
        var _o2 = DecodeContextMap(num_block_types[2] << kDistanceContextBits, br);
        num_dist_htrees = _o2.num_htrees;
        dist_context_map = _o2.context_map;
        hgroup[0] = new HuffmanTreeGroup(kNumLiteralCodes, num_literal_htrees);
        hgroup[1] = new HuffmanTreeGroup(kNumInsertAndCopyCodes, num_block_types[1]);
        hgroup[2] = new HuffmanTreeGroup(num_distance_codes, num_dist_htrees);
        for(i = 0; i < 3; ++i)hgroup[i].decode(br);
        context_map_slice = 0;
        dist_context_map_slice = 0;
        context_mode = context_modes[block_type[0]];
        context_lookup_offset1 = Context.lookupOffsets[context_mode];
        context_lookup_offset2 = Context.lookupOffsets[context_mode + 1];
        htree_command = hgroup[1].htrees[0];
        while(meta_block_remaining_len > 0){
            var cmd_code;
            var range_idx;
            var insert_code;
            var copy_code;
            var insert_length;
            var copy_length;
            var distance_code;
            var distance;
            var context;
            var j;
            var copy_dst;
            br.readMoreInput();
            if (block_length[1] === 0) {
                DecodeBlockType(num_block_types[1], block_type_trees, 1, block_type, block_type_rb, block_type_rb_index, br);
                block_length[1] = ReadBlockLength(block_len_trees, HUFFMAN_MAX_TABLE_SIZE, br);
                htree_command = hgroup[1].htrees[block_type[1]];
            }
            --block_length[1];
            cmd_code = ReadSymbol(hgroup[1].codes, htree_command, br);
            range_idx = cmd_code >> 6;
            if (range_idx >= 2) {
                range_idx -= 2;
                distance_code = -1;
            } else distance_code = 0;
            insert_code = Prefix.kInsertRangeLut[range_idx] + (cmd_code >> 3 & 7);
            copy_code = Prefix.kCopyRangeLut[range_idx] + (cmd_code & 7);
            insert_length = Prefix.kInsertLengthPrefixCode[insert_code].offset + br.readBits(Prefix.kInsertLengthPrefixCode[insert_code].nbits);
            copy_length = Prefix.kCopyLengthPrefixCode[copy_code].offset + br.readBits(Prefix.kCopyLengthPrefixCode[copy_code].nbits);
            prev_byte1 = ringbuffer[pos - 1 & ringbuffer_mask];
            prev_byte2 = ringbuffer[pos - 2 & ringbuffer_mask];
            for(j = 0; j < insert_length; ++j){
                br.readMoreInput();
                if (block_length[0] === 0) {
                    DecodeBlockType(num_block_types[0], block_type_trees, 0, block_type, block_type_rb, block_type_rb_index, br);
                    block_length[0] = ReadBlockLength(block_len_trees, 0, br);
                    context_offset = block_type[0] << kLiteralContextBits;
                    context_map_slice = context_offset;
                    context_mode = context_modes[block_type[0]];
                    context_lookup_offset1 = Context.lookupOffsets[context_mode];
                    context_lookup_offset2 = Context.lookupOffsets[context_mode + 1];
                }
                context = Context.lookup[context_lookup_offset1 + prev_byte1] | Context.lookup[context_lookup_offset2 + prev_byte2];
                literal_htree_index = context_map[context_map_slice + context];
                --block_length[0];
                prev_byte2 = prev_byte1;
                prev_byte1 = ReadSymbol(hgroup[0].codes, hgroup[0].htrees[literal_htree_index], br);
                ringbuffer[pos & ringbuffer_mask] = prev_byte1;
                if ((pos & ringbuffer_mask) === ringbuffer_mask) output.write(ringbuffer, ringbuffer_size);
                ++pos;
            }
            meta_block_remaining_len -= insert_length;
            if (meta_block_remaining_len <= 0) break;
            if (distance_code < 0) {
                var context;
                br.readMoreInput();
                if (block_length[2] === 0) {
                    DecodeBlockType(num_block_types[2], block_type_trees, 2, block_type, block_type_rb, block_type_rb_index, br);
                    block_length[2] = ReadBlockLength(block_len_trees, 2 * HUFFMAN_MAX_TABLE_SIZE, br);
                    dist_context_offset = block_type[2] << kDistanceContextBits;
                    dist_context_map_slice = dist_context_offset;
                }
                --block_length[2];
                context = (copy_length > 4 ? 3 : copy_length - 2) & 0xff;
                dist_htree_index = dist_context_map[dist_context_map_slice + context];
                distance_code = ReadSymbol(hgroup[2].codes, hgroup[2].htrees[dist_htree_index], br);
                if (distance_code >= num_direct_distance_codes) {
                    var nbits;
                    var postfix;
                    var offset;
                    distance_code -= num_direct_distance_codes;
                    postfix = distance_code & distance_postfix_mask;
                    distance_code >>= distance_postfix_bits;
                    nbits = (distance_code >> 1) + 1;
                    offset = (2 + (distance_code & 1) << nbits) - 4;
                    distance_code = num_direct_distance_codes + (offset + br.readBits(nbits) << distance_postfix_bits) + postfix;
                }
            }
            /* Convert the distance code to the actual distance by possibly looking */ /* up past distnaces from the ringbuffer. */ distance = TranslateShortCodes(distance_code, dist_rb, dist_rb_idx);
            if (distance < 0) throw new Error("[BrotliDecompress] invalid distance");
            if (pos < max_backward_distance && max_distance !== max_backward_distance) max_distance = pos;
            else max_distance = max_backward_distance;
            copy_dst = pos & ringbuffer_mask;
            if (distance > max_distance) {
                if (copy_length >= BrotliDictionary.minDictionaryWordLength && copy_length <= BrotliDictionary.maxDictionaryWordLength) {
                    var offset = BrotliDictionary.offsetsByLength[copy_length];
                    var word_id = distance - max_distance - 1;
                    var shift = BrotliDictionary.sizeBitsByLength[copy_length];
                    var mask = (1 << shift) - 1;
                    var word_idx = word_id & mask;
                    var transform_idx = word_id >> shift;
                    offset += word_idx * copy_length;
                    if (transform_idx < Transform.kNumTransforms) {
                        var len = Transform.transformDictionaryWord(ringbuffer, copy_dst, offset, copy_length, transform_idx);
                        copy_dst += len;
                        pos += len;
                        meta_block_remaining_len -= len;
                        if (copy_dst >= ringbuffer_end) {
                            output.write(ringbuffer, ringbuffer_size);
                            for(var _x = 0; _x < copy_dst - ringbuffer_end; _x++)ringbuffer[_x] = ringbuffer[ringbuffer_end + _x];
                        }
                    } else throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance + " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
                } else throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance + " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
            } else {
                if (distance_code > 0) {
                    dist_rb[dist_rb_idx & 3] = distance;
                    ++dist_rb_idx;
                }
                if (copy_length > meta_block_remaining_len) throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance + " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
                for(j = 0; j < copy_length; ++j){
                    ringbuffer[pos & ringbuffer_mask] = ringbuffer[pos - distance & ringbuffer_mask];
                    if ((pos & ringbuffer_mask) === ringbuffer_mask) output.write(ringbuffer, ringbuffer_size);
                    ++pos;
                    --meta_block_remaining_len;
                }
            }
            /* When we get here, we must have inserted at least one literal and */ /* made a copy of at least length two, therefore accessing the last 2 */ /* bytes is valid. */ prev_byte1 = ringbuffer[pos - 1 & ringbuffer_mask];
            prev_byte2 = ringbuffer[pos - 2 & ringbuffer_mask];
        }
        /* Protect pos from overflow, wrap it around at every GB of input data */ pos &= 0x3fffffff;
    }
    output.write(ringbuffer, pos & ringbuffer_mask);
}
exports.BrotliDecompress = BrotliDecompress;
BrotliDictionary.init();

},{"e78da4f881c045fc":"3SZk6","8ead054b5aa5fe7b":"cuJHt","972dabfef886f9ef":"6Dbse","3a26f72c03db659e":"Zd7OG","ec89e1d307370091":"9FbqM","b64dbc814ce2ff4a":"l14mL","3133426e058893de":"bcPhP"}],"3SZk6":[function(require,module,exports) {
function BrotliInput(buffer) {
    this.buffer = buffer;
    this.pos = 0;
}
BrotliInput.prototype.read = function(buf, i, count) {
    if (this.pos + count > this.buffer.length) count = this.buffer.length - this.pos;
    for(var p = 0; p < count; p++)buf[i + p] = this.buffer[this.pos + p];
    this.pos += count;
    return count;
};
exports.BrotliInput = BrotliInput;
function BrotliOutput(buf) {
    this.buffer = buf;
    this.pos = 0;
}
BrotliOutput.prototype.write = function(buf, count) {
    if (this.pos + count > this.buffer.length) throw new Error("Output buffer is not large enough");
    this.buffer.set(buf.subarray(0, count), this.pos);
    this.pos += count;
    return count;
};
exports.BrotliOutput = BrotliOutput;

},{}],"cuJHt":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Bit reading helpers
*/ var BROTLI_READ_SIZE = 4096;
var BROTLI_IBUF_SIZE = 2 * BROTLI_READ_SIZE + 32;
var BROTLI_IBUF_MASK = 2 * BROTLI_READ_SIZE - 1;
var kBitMask = new Uint32Array([
    0,
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
    1023,
    2047,
    4095,
    8191,
    16383,
    32767,
    65535,
    131071,
    262143,
    524287,
    1048575,
    2097151,
    4194303,
    8388607,
    16777215
]);
/* Input byte buffer, consist of a ringbuffer and a "slack" region where */ /* bytes from the start of the ringbuffer are copied. */ function BrotliBitReader(input) {
    this.buf_ = new Uint8Array(BROTLI_IBUF_SIZE);
    this.input_ = input; /* input callback */ 
    this.reset();
}
BrotliBitReader.READ_SIZE = BROTLI_READ_SIZE;
BrotliBitReader.IBUF_MASK = BROTLI_IBUF_MASK;
BrotliBitReader.prototype.reset = function() {
    this.buf_ptr_ = 0; /* next input will write here */ 
    this.val_ = 0; /* pre-fetched bits */ 
    this.pos_ = 0; /* byte position in stream */ 
    this.bit_pos_ = 0; /* current bit-reading position in val_ */ 
    this.bit_end_pos_ = 0; /* bit-reading end position from LSB of val_ */ 
    this.eos_ = 0; /* input stream is finished */ 
    this.readMoreInput();
    for(var i = 0; i < 4; i++){
        this.val_ |= this.buf_[this.pos_] << 8 * i;
        ++this.pos_;
    }
    return this.bit_end_pos_ > 0;
};
/* Fills up the input ringbuffer by calling the input callback.

   Does nothing if there are at least 32 bytes present after current position.

   Returns 0 if either:
    - the input callback returned an error, or
    - there is no more input and the position is past the end of the stream.

   After encountering the end of the input stream, 32 additional zero bytes are
   copied to the ringbuffer, therefore it is safe to call this function after
   every 32 bytes of input is read.
*/ BrotliBitReader.prototype.readMoreInput = function() {
    if (this.bit_end_pos_ > 256) return;
    else if (this.eos_) {
        if (this.bit_pos_ > this.bit_end_pos_) throw new Error("Unexpected end of input " + this.bit_pos_ + " " + this.bit_end_pos_);
    } else {
        var dst = this.buf_ptr_;
        var bytes_read = this.input_.read(this.buf_, dst, BROTLI_READ_SIZE);
        if (bytes_read < 0) throw new Error("Unexpected end of input");
        if (bytes_read < BROTLI_READ_SIZE) {
            this.eos_ = 1;
            /* Store 32 bytes of zero after the stream end. */ for(var p = 0; p < 32; p++)this.buf_[dst + bytes_read + p] = 0;
        }
        if (dst === 0) {
            /* Copy the head of the ringbuffer to the slack region. */ for(var p = 0; p < 32; p++)this.buf_[(BROTLI_READ_SIZE << 1) + p] = this.buf_[p];
            this.buf_ptr_ = BROTLI_READ_SIZE;
        } else this.buf_ptr_ = 0;
        this.bit_end_pos_ += bytes_read << 3;
    }
};
/* Guarantees that there are at least 24 bits in the buffer. */ BrotliBitReader.prototype.fillBitWindow = function() {
    while(this.bit_pos_ >= 8){
        this.val_ >>>= 8;
        this.val_ |= this.buf_[this.pos_ & BROTLI_IBUF_MASK] << 24;
        ++this.pos_;
        this.bit_pos_ = this.bit_pos_ - 8 >>> 0;
        this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
    }
};
/* Reads the specified number of bits from Read Buffer. */ BrotliBitReader.prototype.readBits = function(n_bits) {
    if (32 - this.bit_pos_ < n_bits) this.fillBitWindow();
    var val = this.val_ >>> this.bit_pos_ & kBitMask[n_bits];
    this.bit_pos_ += n_bits;
    return val;
};
module.exports = BrotliBitReader;

},{}],"6Dbse":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Collection of static dictionary words.
*/ var data = require("cc4e303e4d9de88b");
exports.init = function() {
    exports.dictionary = data.init();
};
exports.offsetsByLength = new Uint32Array([
    0,
    0,
    0,
    0,
    0,
    4096,
    9216,
    21504,
    35840,
    44032,
    53248,
    63488,
    74752,
    87040,
    93696,
    100864,
    104704,
    106752,
    108928,
    113536,
    115968,
    118528,
    119872,
    121280,
    122016
]);
exports.sizeBitsByLength = new Uint8Array([
    0,
    0,
    0,
    0,
    10,
    10,
    11,
    11,
    10,
    10,
    10,
    10,
    10,
    9,
    9,
    8,
    7,
    7,
    8,
    7,
    7,
    6,
    6,
    5,
    5
]);
exports.minDictionaryWordLength = 4;
exports.maxDictionaryWordLength = 24;

},{"cc4e303e4d9de88b":"boPQM"}],"boPQM":[function(require,module,exports) {
var base64 = require("ca5b90775bbb49d4");
/**
 * The normal dictionary-data.js is quite large, which makes it 
 * unsuitable for browser usage. In order to make it smaller, 
 * we read dictionary.bin, which is a compressed version of
 * the dictionary, and on initial load, Brotli decompresses 
 * it's own dictionary. 😜
 */ exports.init = function() {
    var BrotliDecompressBuffer = require("88e0068b448e70dd").BrotliDecompressBuffer;
    var compressed = base64.toByteArray(require("5f847a6a03eeb1d8"));
    return BrotliDecompressBuffer(compressed);
};

},{"ca5b90775bbb49d4":"eIiSV","88e0068b448e70dd":"dYjRX","5f847a6a03eeb1d8":"014Gq"}],"014Gq":[function(require,module,exports) {
module.exports = "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";

},{}],"Zd7OG":[function(require,module,exports) {
function HuffmanCode(bits, value) {
    this.bits = bits; /* number of bits used for this symbol */ 
    this.value = value; /* symbol value or table offset */ 
}
exports.HuffmanCode = HuffmanCode;
var MAX_LENGTH = 15;
/* Returns reverse(reverse(key, len) + 1, len), where reverse(key, len) is the
   bit-wise reversal of the len least significant bits of key. */ function GetNextKey(key, len) {
    var step = 1 << len - 1;
    while(key & step)step >>= 1;
    return (key & step - 1) + step;
}
/* Stores code in table[0], table[step], table[2*step], ..., table[end] */ /* Assumes that end is an integer multiple of step */ function ReplicateValue(table, i, step, end, code) {
    do {
        end -= step;
        table[i + end] = new HuffmanCode(code.bits, code.value);
    }while (end > 0);
}
/* Returns the table width of the next 2nd level table. count is the histogram
   of bit lengths for the remaining symbols, len is the code length of the next
   processed symbol */ function NextTableBitSize(count, len, root_bits) {
    var left = 1 << len - root_bits;
    while(len < MAX_LENGTH){
        left -= count[len];
        if (left <= 0) break;
        ++len;
        left <<= 1;
    }
    return len - root_bits;
}
exports.BrotliBuildHuffmanTable = function(root_table, table, root_bits, code_lengths, code_lengths_size) {
    var start_table = table;
    var code; /* current table entry */ 
    var len; /* current code length */ 
    var symbol; /* symbol index in original or sorted table */ 
    var key; /* reversed prefix code */ 
    var step; /* step size to replicate values in current table */ 
    var low; /* low bits for current root entry */ 
    var mask; /* mask for low bits */ 
    var table_bits; /* key length of current table */ 
    var table_size; /* size of current table */ 
    var total_size; /* sum of root table size and 2nd level table sizes */ 
    var sorted; /* symbols sorted by code length */ 
    var count = new Int32Array(MAX_LENGTH + 1); /* number of codes of each length */ 
    var offset = new Int32Array(MAX_LENGTH + 1); /* offsets in sorted table for each length */ 
    sorted = new Int32Array(code_lengths_size);
    /* build histogram of code lengths */ for(symbol = 0; symbol < code_lengths_size; symbol++)count[code_lengths[symbol]]++;
    /* generate offsets into sorted symbol table by code length */ offset[1] = 0;
    for(len = 1; len < MAX_LENGTH; len++)offset[len + 1] = offset[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(symbol = 0; symbol < code_lengths_size; symbol++)if (code_lengths[symbol] !== 0) sorted[offset[code_lengths[symbol]]++] = symbol;
    table_bits = root_bits;
    table_size = 1 << table_bits;
    total_size = table_size;
    /* special case code with only one value */ if (offset[MAX_LENGTH] === 1) {
        for(key = 0; key < total_size; ++key)root_table[table + key] = new HuffmanCode(0, sorted[0] & 0xffff);
        return total_size;
    }
    /* fill in root table */ key = 0;
    symbol = 0;
    for(len = 1, step = 2; len <= root_bits; ++len, step <<= 1)for(; count[len] > 0; --count[len]){
        code = new HuffmanCode(len & 0xff, sorted[symbol++] & 0xffff);
        ReplicateValue(root_table, table + key, step, table_size, code);
        key = GetNextKey(key, len);
    }
    /* fill in 2nd level tables and add pointers to root table */ mask = total_size - 1;
    low = -1;
    for(len = root_bits + 1, step = 2; len <= MAX_LENGTH; ++len, step <<= 1)for(; count[len] > 0; --count[len]){
        if ((key & mask) !== low) {
            table += table_size;
            table_bits = NextTableBitSize(count, len, root_bits);
            table_size = 1 << table_bits;
            total_size += table_size;
            low = key & mask;
            root_table[start_table + low] = new HuffmanCode(table_bits + root_bits & 0xff, table - start_table - low & 0xffff);
        }
        code = new HuffmanCode(len - root_bits & 0xff, sorted[symbol++] & 0xffff);
        ReplicateValue(root_table, table + (key >> root_bits), step, table_size, code);
        key = GetNextKey(key, len);
    }
    return total_size;
};

},{}],"9FbqM":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Lookup table to map the previous two bytes to a context id.

   There are four different context modeling modes defined here:
     CONTEXT_LSB6: context id is the least significant 6 bits of the last byte,
     CONTEXT_MSB6: context id is the most significant 6 bits of the last byte,
     CONTEXT_UTF8: second-order context model tuned for UTF8-encoded text,
     CONTEXT_SIGNED: second-order context model tuned for signed integers.

   The context id for the UTF8 context model is calculated as follows. If p1
   and p2 are the previous two bytes, we calcualte the context as

     context = kContextLookup[p1] | kContextLookup[p2 + 256].

   If the previous two bytes are ASCII characters (i.e. < 128), this will be
   equivalent to

     context = 4 * context1(p1) + context2(p2),

   where context1 is based on the previous byte in the following way:

     0  : non-ASCII control
     1  : \t, \n, \r
     2  : space
     3  : other punctuation
     4  : " '
     5  : %
     6  : ( < [ {
     7  : ) > ] }
     8  : , ; :
     9  : .
     10 : =
     11 : number
     12 : upper-case vowel
     13 : upper-case consonant
     14 : lower-case vowel
     15 : lower-case consonant

   and context2 is based on the second last byte:

     0 : control, space
     1 : punctuation
     2 : upper-case letter, number
     3 : lower-case letter

   If the last byte is ASCII, and the second last byte is not (in a valid UTF8
   stream it will be a continuation byte, value between 128 and 191), the
   context is the same as if the second last byte was an ASCII control or space.

   If the last byte is a UTF8 lead byte (value >= 192), then the next byte will
   be a continuation byte and the context id is 2 or 3 depending on the LSB of
   the last byte and to a lesser extent on the second last byte if it is ASCII.

   If the last byte is a UTF8 continuation byte, the second last byte can be:
     - continuation byte: the next byte is probably ASCII or lead byte (assuming
       4-byte UTF8 characters are rare) and the context id is 0 or 1.
     - lead byte (192 - 207): next byte is ASCII or lead byte, context is 0 or 1
     - lead byte (208 - 255): next byte is continuation byte, context is 2 or 3

   The possible value combinations of the previous two bytes, the range of
   context ids and the type of the next byte is summarized in the table below:

   |--------\-----------------------------------------------------------------|
   |         \                         Last byte                              |
   | Second   \---------------------------------------------------------------|
   | last byte \    ASCII            |   cont. byte        |   lead byte      |
   |            \   (0-127)          |   (128-191)         |   (192-)         |
   |=============|===================|=====================|==================|
   |  ASCII      | next: ASCII/lead  |  not valid          |  next: cont.     |
   |  (0-127)    | context: 4 - 63   |                     |  context: 2 - 3  |
   |-------------|-------------------|---------------------|------------------|
   |  cont. byte | next: ASCII/lead  |  next: ASCII/lead   |  next: cont.     |
   |  (128-191)  | context: 4 - 63   |  context: 0 - 1     |  context: 2 - 3  |
   |-------------|-------------------|---------------------|------------------|
   |  lead byte  | not valid         |  next: ASCII/lead   |  not valid       |
   |  (192-207)  |                   |  context: 0 - 1     |                  |
   |-------------|-------------------|---------------------|------------------|
   |  lead byte  | not valid         |  next: cont.        |  not valid       |
   |  (208-)     |                   |  context: 2 - 3     |                  |
   |-------------|-------------------|---------------------|------------------|

   The context id for the signed context mode is calculated as:

     context = (kContextLookup[512 + p1] << 3) | kContextLookup[512 + p2].

   For any context modeling modes, the context ids can be calculated by |-ing
   together two lookups from one table using context model dependent offsets:

     context = kContextLookup[offset1 + p1] | kContextLookup[offset2 + p2].

   where offset1 and offset2 are dependent on the context mode.
*/ var CONTEXT_LSB6 = 0;
var CONTEXT_MSB6 = 1;
var CONTEXT_UTF8 = 2;
var CONTEXT_SIGNED = 3;
/* Common context lookup table for all context modes. */ exports.lookup = new Uint8Array([
    /* CONTEXT_UTF8, last byte. */ /* ASCII range. */ 0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    4,
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
    0,
    0,
    0,
    0,
    0,
    0,
    8,
    12,
    16,
    12,
    12,
    20,
    12,
    16,
    24,
    28,
    12,
    12,
    32,
    12,
    36,
    12,
    44,
    44,
    44,
    44,
    44,
    44,
    44,
    44,
    44,
    44,
    32,
    32,
    24,
    40,
    28,
    12,
    12,
    48,
    52,
    52,
    52,
    48,
    52,
    52,
    52,
    48,
    52,
    52,
    52,
    52,
    52,
    48,
    52,
    52,
    52,
    52,
    52,
    48,
    52,
    52,
    52,
    52,
    52,
    24,
    12,
    28,
    12,
    12,
    12,
    56,
    60,
    60,
    60,
    56,
    60,
    60,
    60,
    56,
    60,
    60,
    60,
    60,
    60,
    56,
    60,
    60,
    60,
    60,
    60,
    56,
    60,
    60,
    60,
    60,
    60,
    24,
    12,
    28,
    12,
    0,
    /* UTF8 continuation byte range. */ 0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    /* UTF8 lead byte range. */ 2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    /* CONTEXT_UTF8 second last byte. */ /* ASCII range. */ 0,
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
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    0,
    /* UTF8 continuation byte range. */ 0,
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
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    /* UTF8 lead byte range. */ 0,
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
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    /* CONTEXT_SIGNED, second last byte. */ 0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    7,
    /* CONTEXT_SIGNED, last byte, same as the above values shifted by 3 bits. */ 0,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    48,
    56,
    /* CONTEXT_LSB6, last byte. */ 0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    /* CONTEXT_MSB6, last byte. */ 0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    25,
    25,
    25,
    25,
    26,
    26,
    26,
    26,
    27,
    27,
    27,
    27,
    28,
    28,
    28,
    28,
    29,
    29,
    29,
    29,
    30,
    30,
    30,
    30,
    31,
    31,
    31,
    31,
    32,
    32,
    32,
    32,
    33,
    33,
    33,
    33,
    34,
    34,
    34,
    34,
    35,
    35,
    35,
    35,
    36,
    36,
    36,
    36,
    37,
    37,
    37,
    37,
    38,
    38,
    38,
    38,
    39,
    39,
    39,
    39,
    40,
    40,
    40,
    40,
    41,
    41,
    41,
    41,
    42,
    42,
    42,
    42,
    43,
    43,
    43,
    43,
    44,
    44,
    44,
    44,
    45,
    45,
    45,
    45,
    46,
    46,
    46,
    46,
    47,
    47,
    47,
    47,
    48,
    48,
    48,
    48,
    49,
    49,
    49,
    49,
    50,
    50,
    50,
    50,
    51,
    51,
    51,
    51,
    52,
    52,
    52,
    52,
    53,
    53,
    53,
    53,
    54,
    54,
    54,
    54,
    55,
    55,
    55,
    55,
    56,
    56,
    56,
    56,
    57,
    57,
    57,
    57,
    58,
    58,
    58,
    58,
    59,
    59,
    59,
    59,
    60,
    60,
    60,
    60,
    61,
    61,
    61,
    61,
    62,
    62,
    62,
    62,
    63,
    63,
    63,
    63,
    /* CONTEXT_{M,L}SB6, second last byte, */ 0,
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
    0,
    0,
    0
]);
exports.lookupOffsets = new Uint16Array([
    /* CONTEXT_LSB6 */ 1024,
    1536,
    /* CONTEXT_MSB6 */ 1280,
    1536,
    /* CONTEXT_UTF8 */ 0,
    256,
    /* CONTEXT_SIGNED */ 768,
    512
]);

},{}],"l14mL":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Lookup tables to map prefix codes to value ranges. This is used during
   decoding of the block lengths, literal insertion lengths and copy lengths.
*/ /* Represents the range of values belonging to a prefix code: */ /* [offset, offset + 2^nbits) */ function PrefixCodeRange(offset, nbits) {
    this.offset = offset;
    this.nbits = nbits;
}
exports.kBlockLengthPrefixCode = [
    new PrefixCodeRange(1, 2),
    new PrefixCodeRange(5, 2),
    new PrefixCodeRange(9, 2),
    new PrefixCodeRange(13, 2),
    new PrefixCodeRange(17, 3),
    new PrefixCodeRange(25, 3),
    new PrefixCodeRange(33, 3),
    new PrefixCodeRange(41, 3),
    new PrefixCodeRange(49, 4),
    new PrefixCodeRange(65, 4),
    new PrefixCodeRange(81, 4),
    new PrefixCodeRange(97, 4),
    new PrefixCodeRange(113, 5),
    new PrefixCodeRange(145, 5),
    new PrefixCodeRange(177, 5),
    new PrefixCodeRange(209, 5),
    new PrefixCodeRange(241, 6),
    new PrefixCodeRange(305, 6),
    new PrefixCodeRange(369, 7),
    new PrefixCodeRange(497, 8),
    new PrefixCodeRange(753, 9),
    new PrefixCodeRange(1265, 10),
    new PrefixCodeRange(2289, 11),
    new PrefixCodeRange(4337, 12),
    new PrefixCodeRange(8433, 13),
    new PrefixCodeRange(16625, 24)
];
exports.kInsertLengthPrefixCode = [
    new PrefixCodeRange(0, 0),
    new PrefixCodeRange(1, 0),
    new PrefixCodeRange(2, 0),
    new PrefixCodeRange(3, 0),
    new PrefixCodeRange(4, 0),
    new PrefixCodeRange(5, 0),
    new PrefixCodeRange(6, 1),
    new PrefixCodeRange(8, 1),
    new PrefixCodeRange(10, 2),
    new PrefixCodeRange(14, 2),
    new PrefixCodeRange(18, 3),
    new PrefixCodeRange(26, 3),
    new PrefixCodeRange(34, 4),
    new PrefixCodeRange(50, 4),
    new PrefixCodeRange(66, 5),
    new PrefixCodeRange(98, 5),
    new PrefixCodeRange(130, 6),
    new PrefixCodeRange(194, 7),
    new PrefixCodeRange(322, 8),
    new PrefixCodeRange(578, 9),
    new PrefixCodeRange(1090, 10),
    new PrefixCodeRange(2114, 12),
    new PrefixCodeRange(6210, 14),
    new PrefixCodeRange(22594, 24)
];
exports.kCopyLengthPrefixCode = [
    new PrefixCodeRange(2, 0),
    new PrefixCodeRange(3, 0),
    new PrefixCodeRange(4, 0),
    new PrefixCodeRange(5, 0),
    new PrefixCodeRange(6, 0),
    new PrefixCodeRange(7, 0),
    new PrefixCodeRange(8, 0),
    new PrefixCodeRange(9, 0),
    new PrefixCodeRange(10, 1),
    new PrefixCodeRange(12, 1),
    new PrefixCodeRange(14, 2),
    new PrefixCodeRange(18, 2),
    new PrefixCodeRange(22, 3),
    new PrefixCodeRange(30, 3),
    new PrefixCodeRange(38, 4),
    new PrefixCodeRange(54, 4),
    new PrefixCodeRange(70, 5),
    new PrefixCodeRange(102, 5),
    new PrefixCodeRange(134, 6),
    new PrefixCodeRange(198, 7),
    new PrefixCodeRange(326, 8),
    new PrefixCodeRange(582, 9),
    new PrefixCodeRange(1094, 10),
    new PrefixCodeRange(2118, 24)
];
exports.kInsertRangeLut = [
    0,
    0,
    8,
    8,
    0,
    16,
    8,
    16,
    16
];
exports.kCopyRangeLut = [
    0,
    8,
    0,
    8,
    16,
    0,
    16,
    8,
    16
];

},{}],"bcPhP":[function(require,module,exports) {
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Transformations on dictionary words.
*/ var BrotliDictionary = require("45d18961111db3ce");
var kIdentity = 0;
var kOmitLast1 = 1;
var kOmitLast2 = 2;
var kOmitLast3 = 3;
var kOmitLast4 = 4;
var kOmitLast5 = 5;
var kOmitLast6 = 6;
var kOmitLast7 = 7;
var kOmitLast8 = 8;
var kOmitLast9 = 9;
var kUppercaseFirst = 10;
var kUppercaseAll = 11;
var kOmitFirst1 = 12;
var kOmitFirst2 = 13;
var kOmitFirst3 = 14;
var kOmitFirst4 = 15;
var kOmitFirst5 = 16;
var kOmitFirst6 = 17;
var kOmitFirst7 = 18;
var kOmitFirst8 = 19;
var kOmitFirst9 = 20;
function Transform(prefix, transform, suffix) {
    this.prefix = new Uint8Array(prefix.length);
    this.transform = transform;
    this.suffix = new Uint8Array(suffix.length);
    for(var i = 0; i < prefix.length; i++)this.prefix[i] = prefix.charCodeAt(i);
    for(var i = 0; i < suffix.length; i++)this.suffix[i] = suffix.charCodeAt(i);
}
var kTransforms = [
    new Transform("", kIdentity, ""),
    new Transform("", kIdentity, " "),
    new Transform(" ", kIdentity, " "),
    new Transform("", kOmitFirst1, ""),
    new Transform("", kUppercaseFirst, " "),
    new Transform("", kIdentity, " the "),
    new Transform(" ", kIdentity, ""),
    new Transform("s ", kIdentity, " "),
    new Transform("", kIdentity, " of "),
    new Transform("", kUppercaseFirst, ""),
    new Transform("", kIdentity, " and "),
    new Transform("", kOmitFirst2, ""),
    new Transform("", kOmitLast1, ""),
    new Transform(", ", kIdentity, " "),
    new Transform("", kIdentity, ", "),
    new Transform(" ", kUppercaseFirst, " "),
    new Transform("", kIdentity, " in "),
    new Transform("", kIdentity, " to "),
    new Transform("e ", kIdentity, " "),
    new Transform("", kIdentity, '"'),
    new Transform("", kIdentity, "."),
    new Transform("", kIdentity, '">'),
    new Transform("", kIdentity, "\n"),
    new Transform("", kOmitLast3, ""),
    new Transform("", kIdentity, "]"),
    new Transform("", kIdentity, " for "),
    new Transform("", kOmitFirst3, ""),
    new Transform("", kOmitLast2, ""),
    new Transform("", kIdentity, " a "),
    new Transform("", kIdentity, " that "),
    new Transform(" ", kUppercaseFirst, ""),
    new Transform("", kIdentity, ". "),
    new Transform(".", kIdentity, ""),
    new Transform(" ", kIdentity, ", "),
    new Transform("", kOmitFirst4, ""),
    new Transform("", kIdentity, " with "),
    new Transform("", kIdentity, "'"),
    new Transform("", kIdentity, " from "),
    new Transform("", kIdentity, " by "),
    new Transform("", kOmitFirst5, ""),
    new Transform("", kOmitFirst6, ""),
    new Transform(" the ", kIdentity, ""),
    new Transform("", kOmitLast4, ""),
    new Transform("", kIdentity, ". The "),
    new Transform("", kUppercaseAll, ""),
    new Transform("", kIdentity, " on "),
    new Transform("", kIdentity, " as "),
    new Transform("", kIdentity, " is "),
    new Transform("", kOmitLast7, ""),
    new Transform("", kOmitLast1, "ing "),
    new Transform("", kIdentity, "\n	"),
    new Transform("", kIdentity, ":"),
    new Transform(" ", kIdentity, ". "),
    new Transform("", kIdentity, "ed "),
    new Transform("", kOmitFirst9, ""),
    new Transform("", kOmitFirst7, ""),
    new Transform("", kOmitLast6, ""),
    new Transform("", kIdentity, "("),
    new Transform("", kUppercaseFirst, ", "),
    new Transform("", kOmitLast8, ""),
    new Transform("", kIdentity, " at "),
    new Transform("", kIdentity, "ly "),
    new Transform(" the ", kIdentity, " of "),
    new Transform("", kOmitLast5, ""),
    new Transform("", kOmitLast9, ""),
    new Transform(" ", kUppercaseFirst, ", "),
    new Transform("", kUppercaseFirst, '"'),
    new Transform(".", kIdentity, "("),
    new Transform("", kUppercaseAll, " "),
    new Transform("", kUppercaseFirst, '">'),
    new Transform("", kIdentity, '="'),
    new Transform(" ", kIdentity, "."),
    new Transform(".com/", kIdentity, ""),
    new Transform(" the ", kIdentity, " of the "),
    new Transform("", kUppercaseFirst, "'"),
    new Transform("", kIdentity, ". This "),
    new Transform("", kIdentity, ","),
    new Transform(".", kIdentity, " "),
    new Transform("", kUppercaseFirst, "("),
    new Transform("", kUppercaseFirst, "."),
    new Transform("", kIdentity, " not "),
    new Transform(" ", kIdentity, '="'),
    new Transform("", kIdentity, "er "),
    new Transform(" ", kUppercaseAll, " "),
    new Transform("", kIdentity, "al "),
    new Transform(" ", kUppercaseAll, ""),
    new Transform("", kIdentity, "='"),
    new Transform("", kUppercaseAll, '"'),
    new Transform("", kUppercaseFirst, ". "),
    new Transform(" ", kIdentity, "("),
    new Transform("", kIdentity, "ful "),
    new Transform(" ", kUppercaseFirst, ". "),
    new Transform("", kIdentity, "ive "),
    new Transform("", kIdentity, "less "),
    new Transform("", kUppercaseAll, "'"),
    new Transform("", kIdentity, "est "),
    new Transform(" ", kUppercaseFirst, "."),
    new Transform("", kUppercaseAll, '">'),
    new Transform(" ", kIdentity, "='"),
    new Transform("", kUppercaseFirst, ","),
    new Transform("", kIdentity, "ize "),
    new Transform("", kUppercaseAll, "."),
    new Transform("\xc2\xa0", kIdentity, ""),
    new Transform(" ", kIdentity, ","),
    new Transform("", kUppercaseFirst, '="'),
    new Transform("", kUppercaseAll, '="'),
    new Transform("", kIdentity, "ous "),
    new Transform("", kUppercaseAll, ", "),
    new Transform("", kUppercaseFirst, "='"),
    new Transform(" ", kUppercaseFirst, ","),
    new Transform(" ", kUppercaseAll, '="'),
    new Transform(" ", kUppercaseAll, ", "),
    new Transform("", kUppercaseAll, ","),
    new Transform("", kUppercaseAll, "("),
    new Transform("", kUppercaseAll, ". "),
    new Transform(" ", kUppercaseAll, "."),
    new Transform("", kUppercaseAll, "='"),
    new Transform(" ", kUppercaseAll, ". "),
    new Transform(" ", kUppercaseFirst, '="'),
    new Transform(" ", kUppercaseAll, "='"),
    new Transform(" ", kUppercaseFirst, "='")
];
exports.kTransforms = kTransforms;
exports.kNumTransforms = kTransforms.length;
function ToUpperCase(p, i) {
    if (p[i] < 0xc0) {
        if (p[i] >= 97 && p[i] <= 122) p[i] ^= 32;
        return 1;
    }
    /* An overly simplified uppercasing model for utf-8. */ if (p[i] < 0xe0) {
        p[i + 1] ^= 32;
        return 2;
    }
    /* An arbitrary transform for three byte characters. */ p[i + 2] ^= 5;
    return 3;
}
exports.transformDictionaryWord = function(dst, idx, word, len, transform) {
    var prefix = kTransforms[transform].prefix;
    var suffix = kTransforms[transform].suffix;
    var t = kTransforms[transform].transform;
    var skip = t < kOmitFirst1 ? 0 : t - (kOmitFirst1 - 1);
    var i = 0;
    var start_idx = idx;
    var uppercase;
    if (skip > len) skip = len;
    var prefix_pos = 0;
    while(prefix_pos < prefix.length)dst[idx++] = prefix[prefix_pos++];
    word += skip;
    len -= skip;
    if (t <= kOmitLast9) len -= t;
    for(i = 0; i < len; i++)dst[idx++] = BrotliDictionary.dictionary[word + i];
    uppercase = idx - len;
    if (t === kUppercaseFirst) ToUpperCase(dst, uppercase);
    else if (t === kUppercaseAll) while(len > 0){
        var step = ToUpperCase(dst, uppercase);
        uppercase += step;
        len -= step;
    }
    var suffix_pos = 0;
    while(suffix_pos < suffix.length)dst[idx++] = suffix[suffix_pos++];
    return idx - start_idx;
};

},{"45d18961111db3ce":"6Dbse"}]},["gEwwu","1SICI"], "1SICI", "parcelRequire8eee")

//# sourceMappingURL=index.18dbc454.js.map
