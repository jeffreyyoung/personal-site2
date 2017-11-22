import React from 'react';
import NavBar from './../components/NavBar';
import Link from './../components/Link';
export default ({resume}) => {
	return (
		<section className='bg-white'>
			<div className='center min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				{/*<h1 className='f1'>Resume</h1>*/}
				{resume && <article className='lh-copy markdown-post' dangerouslySetInnerHTML={{__html: resume.html}} />}
			</div>
		</section>
	)
}