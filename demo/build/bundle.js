/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var tpl = __webpack_require__(1);
	console.log(tpl({
		name: '<div>伯方</div>',
		list:[
			{name:1},
			{name:'bf'}
		]
	}));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function (_, _method) {_method={};_method.__escapehtml={"escapehash":{"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#x27;","/":"&#x2f;"},"escapereplace":function (k) {
	            return __escapehtml.escapehash[k];
	        },"escaping":function (str) {
	            return typeof(str) !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
	        },"detection":function (data) {
	            return typeof(data) === 'undefined' ? '' : data;
	        }};_method.__throw=function (error) {
	        if(typeof(console) !== 'undefined') {
	            if(console.warn) {
	                console.warn(error);
	                return;
	            }

	            if(console.log) {
	                console.log(error);
	                return;
	            }
	        }

	        throw(error);
	    }
	'use strict';var _=_||{};var _out='';_out+=''; try { _out+=''; var list=_.list;var name=_.name;var item=_.item;var k=_.k;var div=_.div;var My=_.My; _out+=' <div>   My name is ';_out+= (_method.__escapehtml.detection(name)) ;_out+='   '; ~function() {for(var i0 in list) {if(list.hasOwnProperty(i0)) {var item=list[i0];var k=i0; _out+='    <div>';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(item.name)) ;_out+=',';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(k)) ;_out+='</div>   '; }}}(); _out+='  </div>'; } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} _out+='';return _out;
	}

/***/ }
/******/ ]);