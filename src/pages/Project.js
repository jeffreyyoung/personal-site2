import React from 'react';
import BackArrow from './../components/BackArrow'
import ProjectCard from './../components/ProjectCard';
import './Project.css'

export default ({project, nextProject}) => {
	if (!project) {
		return <noscript />
	}
	return (
		<section className='Project bg-white'>
			<div className='center min-vh-100 pa3 pt5 black-90 measure-wide'>
				<BackArrow to='/projects'> Projects</BackArrow>
				<h1 className='f1'>{project.meta.title}</h1>
				<h3 className='f3 red'>{project.meta.description}</h3>
				<article className='lh-copy markdown-post' dangerouslySetInnerHTML={{__html: project.html}} />
				<div className='mt6'>
					<hr />
					<p>See another project...</p>
					<ProjectCard {...nextProject}/>
				</div>
			</div>
		</section>
	)
}