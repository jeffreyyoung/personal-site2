import React from 'react';
import Link from './Link';

export default () => (
	<nav className='blue flex flex-wrap flex-row justify-end'>
		<Link to='/' className='pb3 pb0-ns blue no-underline underline-hover'><span aria-label='house' role="img">🏠</span> Home</Link>
		<Link to='/projects' loadJson className='pb3-s pb0-ns pl4 blue no-underline underline-hover'><span aria-label='laptop' role="img">💻</span> Projects</Link>
		<Link to='/about' className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='boy emoji' role="img">👦</span> About Me</Link>
		<Link to='/resume' loadJson className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='clipboard' role="img">📋</span> Resume</Link>
		<Link to='/blog' loadJson className='pb3 pb0-ns pl4 blue no-underline underline-hover'><span aria-label='book' role="img">📖</span> Blog</Link>
	</nav>
)