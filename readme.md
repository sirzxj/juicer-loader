# juicer-loader


> A [webpack](https://github.com/webpack/webpack) loader to pre-build juicer.

## Usage

### 1、 Install `juicer-loader`

```shell
npm install juicer-loader --save-dev
```

### 2、Write juicer filename `hello.juicer.html`

```html 
<div>
	My name is $${name}
	{@each list as item,k}
		<div>${item.name},${k}</div>
	{@/each}
</div>
```
### 3、Include your juicer file in js

```
var tpl = require('./hello.juicer.html');
console.log(tpl({
	name: '<div>伯方</div>',
	list:[
		{name:1},
		{name:'bf'}
	]
}));
```



### 4、Add loader into your `webpack.config.js`:

```javascript
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.juicer.html$/,
			loader: 'juicer-loader'
		}]
	}
};
```


## reference

[gulp-juicer2js](https://github.com/daizch/gulp-juicer2js)