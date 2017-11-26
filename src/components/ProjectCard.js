import React from 'react';
import Link from './Link'
import './ProjectCard.css'
import Image from './Image';
export default ({title, description, image, imageDescription, imagePlaceholder, url}) => (
	<Link loadJson className='no-underline' to={url}>
		<div className='ProjectCard pointer grow' >
			<Image src={image} placeholder={imagePlaceholder} alt={imageDescription} className={'br2 br--top w-100 img-wrapper'} />
			<div className='pt3 text-wrapper'>
				<h2 className='fw5 ma0 mb3 black-80'>{title}</h2>
				<p className='fw4 black-80 black-80 flex-auto'>{description}</p>
			</div>
		</div>
	</Link>
)