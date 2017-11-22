import React from 'react'
import classNames from 'classnames'
export default (ComposedComponent) => {
	return class extends React.Component {
		
		componentWillEnter(cb) {
			console.log('YAYYYY');
	// animate stuff, then call cb();
	//const element = findDOMNode(this);
	cb();
}

componentWillLeave(cb) {
	console.log('YAYYYY');
	// animate stuff, then call cb();
	//const element = findDOMNode(this);
	cb();
}

		
		render() {
			return (<div key={this.props.key} className={classNames(/*'pt-page',*/ {
				/*'pt-page-current':true*/
			})}>
				<ComposedComponent {...this.props} />
			</div>)
		}
	}
}