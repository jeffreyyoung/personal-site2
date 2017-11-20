import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
	<nav className='blue flex flex-row justify-end'>
		<Link to='/' className='blue no-underline underline-hover'><span aria-label='house' role="img">🏠</span> Home</Link>
		<Link to='/projects' className='pl4 blue no-underline underline-hover'><span aria-label='laptop' role="img">💻</span> Projects</Link>
		<Link to='/about' className='pl4 blue no-underline underline-hover'><span aria-label='boy emoji' role="img">👦</span> About Me</Link>
		<Link to='/resume' className='pl4 blue no-underline underline-hover'><span aria-label='clipboard' role="img">📋</span> Resume</Link>
		<Link to='/blog' className='pl4 blue no-underline underline-hover'><span aria-label='book' role="img">📖</span> Blog</Link>
	</nav>
)