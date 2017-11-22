var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/jeffreyyoung/jeffreyyoung.github.io.git'
}, function(e) {
	console.log('HEREEE', e);
});