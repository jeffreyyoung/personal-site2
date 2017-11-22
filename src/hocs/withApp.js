import React from 'react';
import loader from './../util/jsonDataLoader'; 

const app = {
	loadJson: loader.load.bind(loader)
}

export default (ComposedComponent) => {
	return (props) => (
		<ComposedComponent {...props} app={app}/>
	)
}