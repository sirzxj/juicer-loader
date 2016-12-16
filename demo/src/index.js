var tpl = require('./hello.juicer.html');
console.log(tpl({
	name: '<div>伯方</div>',
	list:[
		{name:1},
		{name:'bf'}
	]
}));