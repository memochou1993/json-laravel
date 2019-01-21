(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheToolbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TheToolbar.vue */ "./resources/js/components/TheToolbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TheFooter.vue */ "./resources/js/components/TheFooter.vue");
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
  name: 'App',
  components: {
    TheToolbar: _components_TheToolbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/index.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Cache */ "./resources/js/helpers/Cache.js");
/* harmony import */ var _AppEditorPivot_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEditorPivot.vue */ "./resources/js/components/AppEditorPivot.vue");
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
  components: {
    AppEditorPivot: _AppEditorPivot_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {//
    };
  },
  computed: {
    data: function data() {
      return this.$store.state.editor.data;
    },
    error: function error() {
      return this.$store.state.editor.error;
    }
  },
  watch: {
    data: function data(value) {
      _helpers_Cache__WEBPACK_IMPORTED_MODULE_1__["default"].set('data', value);

      if (this.error !== '') {
        this.setError('');
      }
    }
  },
  created: function created() {
    this.setData(_helpers_Cache__WEBPACK_IMPORTED_MODULE_1__["default"].get('data'));
  },
  mounted: function mounted() {
    var _ref = [this.$refs.code, this.$refs.tree],
        code = _ref[0],
        tree = _ref[1];
    var codeEditor = this.initEditor(code, 'code');
    var treeEditor = this.initEditor(tree, 'tree');
    this.setEditor('code', codeEditor);
    this.setEditor('tree', treeEditor);
    this.setEditorData('code', this.data);
    this.setEditorData('tree', this.data);
  },
  methods: {
    initEditor: function initEditor(container, mode) {
      var _this = this;

      var options = {
        mode: mode,
        onChangeText: function onChangeText(data) {
          try {
            _this.setData(data);
          } catch (error) {
            _this.setError(error);
          }
        },
        onError: function onError(error) {
          _this.setError(error);
        }
      };
      return new jsoneditor__WEBPACK_IMPORTED_MODULE_0___default.a(container, options);
    },
    setEditor: function setEditor(mode, editor) {
      this.$store.dispatch('setEditor', {
        mode: mode,
        editor: editor
      });
    },
    setEditorData: function setEditorData(to, data) {
      this.$store.dispatch('setEditorData', {
        to: to,
        data: data
      });
    },
    setData: function setData(data) {
      this.$store.dispatch('setData', typeof data === 'string' ? JSON.parse(data) : data);
    },
    setError: function setError(error) {
      this.$store.dispatch('setError', typeof error === 'string' ? error : error.toString());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    icons: {
      type: Array,
      required: true
    },
    br: {
      type: Boolean,
      required: false
    }
  },
  data: function data() {
    return {
      color: 'primary lighten-2',
      spacing: 'ma-3'
    };
  },
  computed: {
    codeEditor: function codeEditor() {
      return this.$store.state.editor.codeEditor;
    },
    treeEditor: function treeEditor() {
      return this.$store.state.editor.treeEditor;
    }
  },
  methods: {
    getEditorData: function getEditorData(from) {
      switch (from) {
        case 'code':
          return this.codeEditor.get();

        case 'tree':
          return this.treeEditor.get();

        default:
          return {};
      }
    },
    passEditorData: function passEditorData(from, to) {
      try {
        this.$store.dispatch('setEditorData', {
          to: to,
          data: this.getEditorData(from)
        });
      } catch (error) {
        this.$emit('setError', error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {//
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheToolbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheToolbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      drawer: false,
      links: [{
        title: 'Home',
        to: {
          name: 'home'
        },
        icon: 'fas fa-home'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppEditor.vue */ "./resources/js/components/AppEditor.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    AppEditor: _components_AppEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/assets/css/app.styl":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/stylus-loader!./resources/js/assets/css/app.styl ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.jsoneditor {\n  height: 75vh;\n  z-index: 0;\n}\ndiv.jsoneditor,\ndiv.jsoneditor-menu {\n  border-color: #5c6bc0;\n}\ndiv.jsoneditor-menu {\n  background-color: #5c6bc0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/stylus/main.styl":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/stylus-loader!./resources/js/stylus/main.styl ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        [
          _c("TheToolbar"),
          _vm._v(" "),
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "" } },
                [_c("v-flex", [_c("router-view")], 1)],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("TheFooter")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-layout",
        {
          attrs: { row: "", wrap: "", "align-center": "", "justify-center": "" }
        },
        [
          _c("v-flex", { attrs: { md5: "", xs12: "" } }, [
            _c("div", { ref: "code", staticClass: "editor" })
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { md1: "", xs12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { "justify-center": "" } },
                [
                  _c("AppEditorPivot", {
                    staticClass: "hidden-sm-and-down",
                    attrs: {
                      icons: ["fas fa-arrow-right", "fas fa-arrow-left"],
                      br: true
                    }
                  }),
                  _vm._v(" "),
                  _c("AppEditorPivot", {
                    staticClass: "hidden-md-and-up",
                    attrs: {
                      icons: ["fas fa-arrow-up", "fas fa-arrow-down"],
                      br: false
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { md5: "", xs12: "" } }, [
            _c("div", { ref: "tree", staticClass: "editor" })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-icon",
        {
          class: [_vm.spacing],
          attrs: { large: "", color: _vm.color },
          on: {
            click: function($event) {
              _vm.passEditorData("code", "tree")
            }
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.icons[0]) + "\n  ")]
      ),
      _vm._v(" "),
      _vm.br ? _c("br") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-icon",
        {
          class: [_vm.spacing],
          attrs: { large: "", color: _vm.color },
          on: {
            click: function($event) {
              _vm.passEditorData("tree", "code")
            }
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.icons[1]) + "\n  ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-footer", {
        attrs: { app: "", fixed: "", color: "primary lighten-2" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-navigation-drawer",
        {
          staticClass: "hidden-md-and-up",
          attrs: {
            app: "",
            right: "",
            clipped: "",
            "disable-resize-watcher": ""
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            _vm._l(_vm.links, function(link, index) {
              return _c(
                "v-list-tile",
                { key: index, attrs: { to: link.to, exact: "" } },
                [
                  _c(
                    "v-list-tile-action",
                    [
                      _c("v-icon", [
                        _vm._v(
                          "\n            " + _vm._s(link.icon) + "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    { staticClass: "subheading" },
                    [
                      _c("v-list-tile-title", [
                        _vm._v(
                          "\n            " + _vm._s(link.title) + "\n          "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        {
          attrs: {
            app: "",
            dark: "",
            "clipped-right": "",
            color: "primary lighten-1"
          }
        },
        [
          _c("v-toolbar-title", { staticClass: "headline" }, [
            _vm._v("\n      JSON Editor\n    ")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-toolbar-side-icon", {
            staticClass: "hidden-md-and-up",
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            { staticClass: "hidden-sm-and-down" },
            _vm._l(_vm.links, function(link, index) {
              return _c(
                "v-btn",
                {
                  key: index,
                  staticClass: "title font-weight-light",
                  attrs: { to: link.to, flat: "", exact: "" }
                },
                [_vm._v("\n        " + _vm._s(link.title) + "\n      ")]
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("AppEditor")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a& */ "./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f348271a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue */ "./resources/js/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/index */ "./resources/js/store/index.js");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/vuetify */ "./resources/js/plugins/vuetify.js");
/* harmony import */ var _stylus_main_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylus/main.styl */ "./resources/js/stylus/main.styl");
/* harmony import */ var _stylus_main_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylus_main_styl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jsoneditor_dist_jsoneditor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jsoneditor/dist/jsoneditor.css */ "./node_modules/jsoneditor/dist/jsoneditor.css");
/* harmony import */ var jsoneditor_dist_jsoneditor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jsoneditor_dist_jsoneditor_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_app_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/app.styl */ "./resources/js/assets/css/app.styl");
/* harmony import */ var _assets_css_app_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_app_styl__WEBPACK_IMPORTED_MODULE_9__);










new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  store: _store_index__WEBPACK_IMPORTED_MODULE_5__["default"],
  axios: axios__WEBPACK_IMPORTED_MODULE_1___default.a,
  VueAxios: vue_axios__WEBPACK_IMPORTED_MODULE_2___default.a,
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./resources/js/assets/css/app.styl":
/*!******************************************!*\
  !*** ./resources/js/assets/css/app.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/stylus-loader!./app.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/assets/css/app.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/AppEditor.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppEditor.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppEditor.vue?vue&type=template&id=29342e13& */ "./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13&");
/* harmony import */ var _AppEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/AppEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AppEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditor.vue?vue&type=template&id=29342e13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditor.vue?vue&type=template&id=29342e13&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_template_id_29342e13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/AppEditorPivot.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AppEditorPivot.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppEditorPivot.vue?vue&type=template&id=6487b1c2& */ "./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2&");
/* harmony import */ var _AppEditorPivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppEditorPivot.vue?vue&type=script&lang=js& */ "./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppEditorPivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppEditorPivot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditorPivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditorPivot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditorPivot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditorPivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppEditorPivot.vue?vue&type=template&id=6487b1c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppEditorPivot.vue?vue&type=template&id=6487b1c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditorPivot_vue_vue_type_template_id_6487b1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TheFooter.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=2a04c4de& */ "./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=2a04c4de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheFooter.vue?vue&type=template&id=2a04c4de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_2a04c4de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TheToolbar.vue":
/*!************************************************!*\
  !*** ./resources/js/components/TheToolbar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheToolbar.vue?vue&type=template&id=bbd22d16& */ "./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16&");
/* harmony import */ var _TheToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/TheToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheToolbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/TheToolbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TheToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TheToolbar.vue?vue&type=template&id=bbd22d16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TheToolbar.vue?vue&type=template&id=bbd22d16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheToolbar_vue_vue_type_template_id_bbd22d16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/Cache.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/Cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);
  }

  _createClass(Cache, null, [{
    key: "set",
    value: function set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "get",
    value: function get(key) {
      return JSON.parse(localStorage.getItem(key)) || {};
    }
  }]);

  return Cache;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cache);

/***/ }),

/***/ "./resources/js/plugins/vuetify.js":
/*!*****************************************!*\
  !*** ./resources/js/plugins/vuetify.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuetify_lib_util_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/util/colors */ "./node_modules/vuetify/lib/util/colors.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__);




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: {
    primary: vuetify_lib_util_colors__WEBPACK_IMPORTED_MODULE_2__["default"].orange,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'fa'
});

/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ "./resources/js/views/Home.vue");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: [{
    path: '/',
    name: 'home',
    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }]
}));

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editor */ "./resources/js/store/modules/editor.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    editor: _modules_editor__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./resources/js/store/modules/editor.js":
/*!**********************************************!*\
  !*** ./resources/js/store/modules/editor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import axios from 'axios';
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    codeEditor: {},
    treeEditor: {},
    data: {},
    error: ''
  },
  mutations: {
    setEditor: function setEditor(state, _ref) {
      var mode = _ref.mode,
          editor = _ref.editor;

      switch (mode) {
        case 'code':
          state.codeEditor = editor;
          break;

        case 'tree':
          state.treeEditor = editor;
          break;

        default:
          break;
      }
    },
    setEditorData: function setEditorData(state, _ref2) {
      var to = _ref2.to,
          data = _ref2.data;

      switch (to) {
        case 'code':
          state.codeEditor.set(data);
          state.codeEditor.focus();
          break;

        case 'tree':
          state.treeEditor.set(data);
          state.treeEditor.expandAll();
          break;

        default:
          break;
      }
    },
    setData: function setData(state, data) {
      state.data = data;
    },
    setError: function setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    setEditor: function setEditor(context, editor) {
      context.commit('setEditor', editor);
    },
    setEditorData: function setEditorData(context, _ref3) {
      var to = _ref3.to,
          data = _ref3.data;
      context.commit('setEditorData', {
        to: to,
        data: data
      });
    },
    setData: function setData(context, data) {
      context.commit('setData', data);
    },
    setError: function setError(context, error) {
      context.commit('setError', error);
    }
  }
});

/***/ }),

/***/ "./resources/js/stylus/main.styl":
/*!***************************************!*\
  !*** ./resources/js/stylus/main.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/stylus-loader!./main.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/stylus/main.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\William\Projects\laravel-vuetify\resources\js\app.js */"./resources/js/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);