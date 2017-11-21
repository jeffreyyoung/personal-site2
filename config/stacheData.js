const mdFilesToJson = require('./mdFilesToJson');
const data = require('static-data');

async function getData() {
	const mdFiles = await mdFilesToJson();
	const blogFiles = mdFiles
		.filter(m => m.path.startsWith('/blog'))
		.map( (m,i) => ({
			key: m.path.replace('.md', ''),
			getData: () => ({
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
			if (i == mdFiles.length - 1) {
				nextProject = mdFiles[0];
			} else {
				nextProject = mdFiles[i+1];
			}
			const key = m.path.replace('.md', '');
			const getData = async () => ({
				project: {
					html: m.html,
					meta: m.meta
				},
				nextProject: {
					title: nextProject.meta.title,
					image: nextProject.meta.image,
					imageDescription: nextProject.meta.imageDescription,
					description: nextProject.meta.description,
					url: nextProject.path.replace('.md','')
				}
			});
			return {key, getData}
		});
	return [
		{
			key: 'about',
			getData: async () => {
				return {'hello': 'world'}
			}
		}, {
			key: 'projects',
			getData: async () => {
				const projects = mdFiles
					.filter(m => m.path.startsWith('/projects'))
					.map(m => {
						return {
							title: m.meta.title,
							image: m.meta.image,
							imageDescription: m.meta.imageDescription,
							description: m.meta.description,
							url: m.path.replace('.md','')
						}
					});
				return {projects};
			}
		}, {
			key: 'blog',
			getData: async () => {
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
		},
		...individaulProjectFiles,
		...blogFiles
	]
}

data.set(getData, __dirname +'/../public/data');