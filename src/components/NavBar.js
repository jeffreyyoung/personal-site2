import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
	<nav className='blue flex flex-wrap flex-row justify-end'>
		<Link to='/' className='pb3 pb0-ns blue no-underline underline-hover'><span aria-label='house' role="img">🏠</span> Home</Link>
		<Link to='/projects' className='pb3-s pb0-ns pl4 blue no-underline underline-hover'><span aria-label='laptop' role="img">💻</span> Projects</Link>
		<Link to='/about' className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='boy emoji' role="img">👦</span> About Me</Link>
		<Link to='/resume' className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='clipboard' role="img">📋</span> Resume</Link>
		<Link to='/blog' className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='book' role="img">📖</span> Blog</Link>
	</nav>
)