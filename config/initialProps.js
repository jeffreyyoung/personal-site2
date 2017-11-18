const mdFilesToJson = require('./mdFilesToJson');

module.exports = {
	routes: [
		{
			path: '/',
			getProps: async (path) => {
				return; //these have no props to load
			}
		},
		{
			path: '/about',
			getProps: async (path) => {
				return; //also have no props to load
			}
		},
		{
			path: '/projects',
			getProps: async (path) => {
				const mdFiles = await mdFilesToJson();
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
			},
			getChildRoutes: async (path) => {
				const mdFiles = (await mdFilesToJson()).filter(m => m.path.startsWith('/projects'));
				return mdFiles
					.map((m,i) => {
						let nextProject;
						if (i == mdFiles.length - 1) {
							nextProject = mdFiles[0];
						} else {
							nextProject = mdFiles[i+1];
						}
						
						return {
							path: m.path.replace('/projects', '').replace('.md', ''),
							getProps: async (path) => {
								return {
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
								}
							}
						}
					})
			}
		}
	],
	destination: __dirname +'/../public/data'
}