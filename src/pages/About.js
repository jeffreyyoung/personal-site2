import React from 'react';
import NavBar from './../components/NavBar';
import Helmet from 'react-helmet'

export default (props) => {
	return (
		<section className='bg-white'>
			<div className='center black-90 min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				<h1 className='f1'>About</h1>
				
			</div>
      <Helmet>
        <title>About Jeffrey</title>
        <meta name="description" content="I grew up in Washington, now live in Utah.  I like cycling, writing code, and other stuff." />
      </Helmet>
		</section>
	)
}