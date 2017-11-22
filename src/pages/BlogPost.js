import React from 'react';
import BackArrow from './../components/BackArrow'
import './Project.css'
import { withRouter } from 'react-router-dom'
import DisqusThread from './../components/Disqus';

export default withRouter(({post, location}) => {
	if (!post) {
		return <noscript />
	}
	return (
		<section className='Project bg-white'>
			<div className='center black-90 min-vh-100 pa3 pt5 measure-wide'>
				<BackArrow to='/blog'> Blog</BackArrow>
        {post && <div>
				<h1 className='f1'>{post.meta.title}</h1>
				<h3 className='f3 red'>{post.meta.description}</h3>
				<article className='lh-copy markdown-post markdown-body pb5' dangerouslySetInnerHTML={{__html: post.html}} />
        
        <p>Anything you would have done differently? Anything that could be done better?</p>
        <hr />
        <DisqusThread id={post.id}
              title={post.title}
              path={location.pathname} />
        </div>}
			</div>
		</section>
	)
})