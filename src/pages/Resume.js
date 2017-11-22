import React from 'react';
import NavBar from './../components/NavBar';
import Helmet from 'react-helmet'

export default ({resume}) => {
	return (
		<section className='bg-white'>
			<div className='black-90 center min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				{/*<h1 className='f1'>Resume</h1>*/}
				{resume && <article className='lh-copy markdown-post' dangerouslySetInnerHTML={{__html: resume.html}} />}
			</div>
      <Helmet>
        <title>Jeffrey's Resume</title>
        <meta name="description" content={'Where Jeffrey Young has worked and where he went to shcool'} />
      </Helmet>
		</section>
	)
}