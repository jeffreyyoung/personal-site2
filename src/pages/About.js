import React from 'react';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';
export default class extends React.Component {
	componentWillAppear(callback) {
		console.log('will appear');
		callback();
}
componentDidAppear() {
		console.log('did appear');
}

componentWillEnter(callback) {
		callback();
		console.log('will enter');
}
componentDidEnter() {
		console.log('did enter');
}
componentWillLeave(callback) {
		callback();
		console.log('wiil leave');
}
componentDidLeave() {
		console.log('did leave');
}
componentWillUnmount() {
		console.log('will unmount');
}
	
	render() {
	return (
		<section className='bg-yellow black-90'>
			<Helmet>
				<title>hiiiii</title>
			</Helmet>
			<div className='center min-vh-100 pa3 flex flex-column justify-between mw-1024'>
				<div className='flex-grow'>
					<h1 className='reveal f1 f-subheadline-ns'>Hi.<span role='img' aria-label='wave-emoji'>👋</span> I'm Jeffrey</h1>
					<h3 className='reveal f3 f1-ns'>I work at Adobe as a Software Engineer</h3>
					<h3 className='reveal f3 f1-ns'>I like doing freelance web and mobile development</h3>
				</div>
				<div className='w-100 flex justify-center flex-wrap'>
					<Link to='/' className='reveal grow f4 tc pointer'>View Home <span role='img' aria-label='point-down'>👇</span></Link>
				</div>
			</div>
		</section>
	)}
}