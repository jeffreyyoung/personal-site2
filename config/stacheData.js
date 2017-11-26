const mdFilesToJson = require('./mdFilesToJson');
const data = require('write-json-files');
async function getFiles() {
	const mdFiles = await mdFilesToJson();
	const blogFiles = mdFiles
		.filter(m => m.path.startsWith('/blog'))
		.map( (m,i) => ({
			path: m.path.replace('.md', ''),
			getJson: () => ({
				post: {
					html: m.html,
					meta: m.meta
				}
			})
		}));
		
	const individaulProjectFiles = mdFiles
		.filter(m => m.path.startsWith('/projects'))
		.map( (m, i) => {
			let nextProject;
			if (i === mdFiles.filter(m => m.path.startsWith('/projects')).length - 1) {
				nextProject = mdFiles[0];
			} else {
				nextProject = mdFiles[i+1];
			}
			const path = m.path.replace('.md', '');
			const getJson = async () => ({
				project: {
					html: m.html,
					meta: m.meta
				},
				nextProject: {
					title: nextProject.meta.title,
					image: nextProject.meta.image,
					imagePlaceholder: nextProject.meta.imagePlaceholder,
					imageDescription: nextProject.meta.imageDescription,
					description: nextProject.meta.description,
					url: nextProject.path.replace('.md','')
				}
			});
			return {path, getJson}
		});
	return [
		{
			path: 'about',
			getJson: async () => {
				return {'hello': 'world'}
			}
		}, {
			path: 'projects',
			getJson: async () => {
				const projects = mdFiles
					.filter(m => m.path.startsWith('/projects'))
					.map(m => {
						console.log('HEREEE?', m)
						return {
							title: m.meta.title,
							image: m.meta.image,
							imagePlaceholder: m.meta.imagePlaceholder,
							imageDescription: m.meta.imageDescription,
							description: m.meta.description,
							url: m.path.replace('.md','')
						}
					});
				return {projects};
			}
		}, {
			path: 'blog',
			getJson: async () => {
				const posts = mdFiles
					.filter(m => m.path.startsWith('/blog'))
					.map(m => {
						return {
							title: m.meta.title,
							url: m.path.replace('.md', '')
						}
					});
				return {posts}
			}
		}, {
			path: 'resume',
			getJson: async () => {
				console.log('HEREEEEEEEEEEEE');
				const resume = mdFiles.filter(m => m.path.startsWith('/resume'))[0];
				return {resume}
			}
		},
		...individaulProjectFiles,
		...blogFiles
	]
}

function main() {
	console.log('GET FILES!!!');
	data.set(getFiles, {
		pathPrefix: __dirname +'/../public/data/',
		pathSuffix: '.json'
	});
}
main();
module.exports = main;