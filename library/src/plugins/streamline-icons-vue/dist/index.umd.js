(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["streamline-icons-vue"] = factory();
	else
		root["streamline-icons-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("405b")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c89fd45-vue-loader-template"}!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/StreamlineIcon.vue?vue&type=template&id=8fe102fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"Streamline_Icon",class:{
    'Streamline_Icon_Spin': _vm.spin,
    'Streamline_Icon_Pulse': _vm.pulse,
    'Streamline_Animation_Infinite': _vm.infinite,
    'Streamline_Icon_Fast': _vm.fast,
    'Streamline_Icon_EaseInOut': _vm.easeInOut,
    'Streamline_Icon_Animated': _vm.spin || _vm.pulse
  }},[_c('svg',{style:(("width: " + (_vm.computedSize.width) + "; height: " + (_vm.computedSize.height))),attrs:{"viewBox":("0 0 " + (_vm.computedSize.width) + " " + (_vm.computedSize.height)),"width":_vm.computedSize.width,"height":_vm.computedSize.height}},[(!_vm.computedSize.isDefault)?_c('g',{attrs:{"transform":("scale(" + (_vm.computedSize.width / _vm.icon[1]) + "," + (_vm.computedSize.height / _vm.icon[2]) + ")")}},_vm._l((_vm.icon[4]),function(path,index){return _c('icon-path',{key:index,attrs:{"icon":_vm.icon,"path":path,"index":index,"stroke":_vm.stroke,"fill":_vm.fill}})}),1):_c('svg',_vm._l((_vm.icon[4]),function(path,index){return _c('icon-path',{key:index,attrs:{"icon":_vm.icon,"path":path,"index":index,"stroke":_vm.stroke,"fill":_vm.fill}})}),1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StreamlineIcon.vue?vue&type=template&id=8fe102fc&

// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c89fd45-vue-loader-template"}!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/IconPath.vue?vue&type=template&id=03c71225&
var IconPathvue_type_template_id_03c71225_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('path',_vm._b({key:Math.random().toString(),attrs:{"d":_vm.path}},'path',_vm.options,false))}
var IconPathvue_type_template_id_03c71225_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/IconPath.vue?vue&type=template&id=03c71225&

// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/IconPath.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var IconPathvue_type_script_lang_js_ = ({
  props: {
    icon: {
      type: [String, Number, Array, Object]
    },
    index: {
      type: Number
    },
    path: {
      type: String
    },
    stroke: {
      type: String
    },
    fill: {
      type: String
    }
  },
  computed: {
    options () {
      const tempIcon = this.icon[3]

      const tempOptions = { ...tempIcon[this.index] }
      tempOptions.stroke = this.stroke || tempIcon[this.index].stroke
      tempOptions.fill = this.fill || tempIcon[this.index].fill

      return tempOptions
    }
  }
});

// CONCATENATED MODULE: ./src/components/IconPath.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IconPathvue_type_script_lang_js_ = (IconPathvue_type_script_lang_js_); 
// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/IconPath.vue





/* normalize component */

var component = normalizeComponent(
  components_IconPathvue_type_script_lang_js_,
  IconPathvue_type_template_id_03c71225_render,
  IconPathvue_type_template_id_03c71225_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconPath = (component.exports);
// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/StreamlineIcon.vue?vue&type=script&lang=js&
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



/* harmony default export */ var StreamlineIconvue_type_script_lang_js_ = ({
  components: {
    IconPath: IconPath
  },
  props: {
    icon: {
      type: [String, Number, Array, Object]
    },
    fill: {
      type: String
    },
    stroke: {
      type: String
    },
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    spin: {
      type: Boolean,
      default: false
    },
    pulse: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Boolean,
      default: false
    },
    fast: {
      type: Boolean,
      default: false
    },
    easeInOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedSize () {
      const { icon, size } = this
      const sizeObject = {
        width: icon[1],
        height: icon[2],
        isDefault: true
      }

      if (size !== 24) {
        sizeObject.isDefault = (size === sizeObject.width)
        sizeObject.height = size
        sizeObject.width = size
      } else {
        if (this.height && parseInt(this.height) !== sizeObject.height) {
          sizeObject.height = this.height
          sizeObject.isDefault = false
        }

        if (this.width && parseInt(this.width) !== sizeObject.width) {
          sizeObject.width = this.width
          sizeObject.isDefault = false
        }
      }

      return sizeObject
    }
  }
});

// CONCATENATED MODULE: ./src/components/StreamlineIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StreamlineIconvue_type_script_lang_js_ = (StreamlineIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StreamlineIcon.vue?vue&type=style&index=0&lang=css&
var StreamlineIconvue_type_style_index_0_lang_css_ = __webpack_require__("f143");

// CONCATENATED MODULE: ./src/components/StreamlineIcon.vue






/* normalize component */

var StreamlineIcon_component = normalizeComponent(
  components_StreamlineIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StreamlineIcon = (StreamlineIcon_component.exports);
// CONCATENATED MODULE: /Users/csauvage/Github/Webalys/packages/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (StreamlineIcon);



/***/ }),

/***/ "405b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "73cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f143":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamlineIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("73cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamlineIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamlineIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamlineIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.umd.js.map