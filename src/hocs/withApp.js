import React from 'react';
import createLoader from 'static-data/dist/loader';

const loader = createLoader('');
const app = {
	loadJson: loader.load.bind(loader)
}

export default (ComposedComponent) => {
	return (props) => (
		<ComposedComponent {...props} app={app}/>
	)
}