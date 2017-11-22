import React from 'react';
import ProjectCard from './../components/ProjectCard'
import classnames from 'classnames'
import NavBar from './../components/NavBar';
import Helmet from 'react-helmet'

export default ({projects}) => {
	return (
		<div className='Projects bg-white'>
			<div className='center black-90 min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				<h1 className='f1'>Projects</h1>
				<div className='flex flex-wrap mw-1024 center'>
					{projects && projects.map((post, i) => (<div key={i} className={classnames('w-50-ns w-50-m pb4',{
						'pr3-ns': (i%2 === 0),
						'pl3-ns': (i%2 !== 0)
					})}><ProjectCard {...post}/></div>))}
				</div>
        <Helmet>
          <title>Projects by Jeffrey</title>
          <meta name="description" content={'A list of freelance, just for fun, and work projects'} />
        </Helmet>
			</div>
		</div>
	)
}