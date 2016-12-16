
var juicer = require('juicer');

function obj2str(obj) {
	var result = '{';
	var keys = Object.keys(obj);
	var flag = false;
	keys.forEach(function(key) {
		result += flag ? ',' : '';
		flag = true;
		result += JSON.stringify(key) + ':';
		if (typeof obj[key] === 'object') {
			result += obj2str(obj[key]);
		} else if (typeof obj[key] !== 'function') {
			result += JSON.stringify(obj[key].toString());
		} else {
			result += obj[key].toString();
		}
	});
	result += '}'
	return result;
}

module.exports = function(source) {
	var method_body = '_method={};_method.__escapehtml=' + obj2str(juicer.options._method.__escapehtml) + ';' + '_method.__throw=' + juicer.options._method.__throw.toString();

	var result = juicer.compile(source)._render.toString().replace(/^function anonymous[^{]*?{([\s\S]*?)}$/igm, function($, fn_body) {
		return 'function ' + '(_, _method) {' + method_body + fn_body + '}';
	});
	return 'module.exports = ' + result;
}