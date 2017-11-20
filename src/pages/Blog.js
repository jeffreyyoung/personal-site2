import React from 'react';
import NavBar from './../components/NavBar';

export default () => {
	return (
		<section className='bg-white'>
			<div className='center min-vh-100 pa3 pt5 flex flex-column justify-between mw-1024'>
				<NavBar />
				<h1 className='f1'>Blog</h1>
			</div>
		</section>
	)
}