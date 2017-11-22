import React from 'react';
import NavBar from './../components/NavBar'
import Helmet from 'react-helmet'

export default (props) => {
	return (
		<section className='bg-white'>
			<div className='center black-90 min-vh-100 pa3 flex flex-column justify-between mw-1024'>
				<NavBar />
				<div className='flex-grow'>
					<h1 className='reveal f1 f-subheadline-ns'>Journal Privacy Policy</h1>
					<p>We promise not to use your data in any way.  Data that you give Journal App access to will not be stored to any Journal Servers and will not be recorded in any way</p>
					<p>All data is your own</p>
					<p>The purpose of Journal is to create a convenient way for people to record their life each day using facebook</p>
				</div>
			</div>
      <Helmet>
        <title>Journal Privacy Policy</title>
        <meta name="description" content={'Journal App Privacy Policy'} />
      </Helmet>
		</section>
	)
}

