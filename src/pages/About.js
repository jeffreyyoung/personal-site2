import React from 'react';
import NavBar from './../components/NavBar';
export default (props) => {
	return (
		<section className='bg-white'>
			<div className='center min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				<h1 className='f1'>About</h1>
				
			</div>
		</section>
	)
}