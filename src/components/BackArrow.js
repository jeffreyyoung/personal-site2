import React from 'react';
import { Link } from 'react-router-dom'
import backarrow from './thin-arrow-pointing-left.svg';
import './BackArrow.css'
export default ({to,children, className}) => (
	<nav className={className}>
		<Link className='BackArrow no-underline underline-hover blue' to={to}>
			<img className='backarrowicon' alt='' src={backarrow}/>{children}
		</Link>
	</nav>
)