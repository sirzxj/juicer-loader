var juicer = require('juicer');
		
module.exports = function(source) {
	var method_body = `_method= _method || {},_method.__escapehtml={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return _method.__escapehtml.escapehash[e]},escaping:function(e){return"string"!=typeof e?e:e.replace(/[&<>"']/gim,this.escapereplace)},detection:function(e){return"undefined"==typeof e?"":e}},_method.__throw=function(e){if("undefined"!=typeof console){if(console.warn)return void console.warn(e);if(console.log)return void console.log(e)}throw e};`;
	var result = juicer.compile(source)._render.toString().replace(/^function anonymous[^{]*?{([\s\S]*?)}$/igm, function($, fn_body) {
		return 'function ' + '(_, _method) {' + method_body + fn_body + '}';
	});
	return 'module.exports = ' + result;
}