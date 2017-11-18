import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
	<nav className='blue flex flex-row justify-end'>
		<Link to='/' className='blue no-underline underline-hover'>🏠 Home</Link>
		<Link to='/projects' className='pl4 blue no-underline underline-hover'>💻 Projects</Link>
		<Link to='/about' className='pl4 blue no-underline underline-hover'>👦 About Me</Link>
		<Link to='/resume' className='pl4 blue no-underline underline-hover'>📋 Resume</Link>
		<Link to='/blog' className='pl4 blue no-underline underline-hover'>📖 Blog</Link>
	</nav>
)