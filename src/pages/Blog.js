import React from 'react';
import NavBar from './../components/NavBar';
import Link from './../components/Link';
export default (props) => {
	console.log('BLOG PROPS', props);
	const {posts} = props;
	return (
		<section className='bg-white'>
			<div className='center black-90 min-vh-100 pa3 pt5 flex flex-column mw-1024'>
				<NavBar />
				<h1 className='f1'>Blog</h1>
				{posts && posts.map(p => <Link loadJson className='blue' to={p.url}>{p.title}</Link>)}
			</div>
		</section>
	)
}