var watch = require('node-watch');
var stache = require('./config/stacheData');


watch('posts', { recursive: true }, function(evt, name) {
	console.log('changed file: ', name);
	stache();
});