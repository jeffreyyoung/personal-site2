import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
	return (
		<section className='bg-white'>
			<div className='center min-vh-100 pa3 flex flex-column justify-between mw-1024'>
				<div className='flex-grow'>
					<h1 className='reveal f1 f-subheadline-ns'>Hi.<span role='img' aria-label='wave-emoji'>👋</span> I'm Jeffrey</h1>
					<h3 className='reveal f3 f1-ns'>I work at Adobe as a Software Engineer</h3>
					<h3 className='reveal f3 f1-ns'>I like doing freelance web and mobile development</h3>
				</div>
				<div className='w-100 flex justify-between flex-wrap'>
					<Link to='/projects' className='reveal no-underline black grow f4 tc pointer'>Projects <span role='img' aria-label='point-down'>☝️💻</span></Link>
					<Link to='/resume' className='reveal no-underline black grow f4 tc pointer'>Resume <span role='img' aria-label='point-down'>👇📋</span></Link>
					<Link to='/about' className='reveal no-underline black grow f4 tc pointer'>About Me <span role='img' aria-label='point-down'>👈👦</span></Link>
					<Link to='/blog' className='reveal no-underline black grow f4 tc pointer'>Blog <span role='img' aria-label='point-down'>👉📖</span></Link>
					<Link to='/journal' className='dn reveal no-underline black grow f4 tc pointer'>Blog <span role='img' aria-label='point-down'>👉📖</span></Link>
					
				</div>
			</div>
		</section>
	)
}

