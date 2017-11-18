import React from 'react';
import { Link } from 'react-router-dom'
import './ProjectCard.css'
export default ({title, description, image, imageDescription, url}) => (
	<Link className='no-underline' to={url}>
		<div className='ProjectCard pointer grow' >
			<div className='bg-white-50 br2 w-100 img-wrapper'>
				<img src={image} className='br2 br--top w-100 img-wrapper' alt={imageDescription}/>
			</div>
			<div className='pt3 text-wrapper'>
				<h2 className='fw5 ma0 mb3 black-80'>{title}</h2>
				<p className='fw4 black-80 black-80 flex-auto'>{description}</p>
			</div>
		</div>
	</Link>
)