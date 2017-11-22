import React from 'react';
import { Link } from 'react-router-dom'
import './BackArrow.css'
export default ({to,children, className}) => (
	<nav className={className}>
		<Link className='BackArrow no-underline underline-hover blue' to={to}>
			<span role='img' aria-label='back'>👈</span>{children}
		</Link>
	</nav>
)