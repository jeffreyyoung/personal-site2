var ghpages = require('gh-pages');
console.log('DEPLOYING');
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/jeffreyyoung/jeffreyyoung.github.io.git'
}, function(e) {
	console.log('ERROR', e);
});