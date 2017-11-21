import React from 'react';
import BackArrow from './../components/BackArrow'
import './Project.css'

export default ({post}) => {
	if (!post) {
		return <noscript />
	}
	return (
		<section className='Project bg-white'>
			<div className='center min-vh-100 pa3 pt5 measure-wide'>
				<BackArrow to='/blog'> Blog</BackArrow>
				<h1 className='f1'>{post.meta.title}</h1>
				<h3 className='f3 red'>{post.meta.description}</h3>
				<article className='lh-copy markdown-post' dangerouslySetInnerHTML={{__html: post.html}} />
			</div>
		</section>
	)
}