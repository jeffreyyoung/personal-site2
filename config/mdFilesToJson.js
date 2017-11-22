//get file paths
const glob = require('glob');

//read files
const fs = require('fs');

//read font-matter (.md headings)
const matter = require('gray-matter');

//convert .md to .html
const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setFlavor('github');

module.exports = async function() {
	return parseMdFiles();
}

async function getContainingFolderPath() {
	//TODO fix this
	return '/Users/jeyoung/Source/personal-site-page-transitions/posts'
}

function getFilePaths() {
	var filePattern = __dirname + '/../posts/**/*.md';
	return new Promise( (resolve, reject) => {
		glob(filePattern, {}, function(er, filePaths) {
			if (er) {
				reject(er);
			}
			resolve(filePaths);
		});
	});
}

async function readFilesToString(filePaths) {
	function readFile(filePath) {
		return new Promise( (resolve, reject) => {
			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			})
		});
	}
	
	return Promise.all(filePaths.map(readFile));
}

async function parseMdFiles() {
	const containerFolderPath = await getContainingFolderPath();
	let filePaths = await getFilePaths();
	let files = await readFilesToString(filePaths);
	return files
		.map(matter) //parse out font matter
		.map((matterData, i) => {
			const fullFilePath = filePaths[i];
			const html = converter.makeHtml(matterData.content);
			const relativePath = fullFilePath.replace(containerFolderPath, '');
			return {
				html,
				path: relativePath,
				meta: { ...matterData.data }
			}
		})
}

parseMdFiles();