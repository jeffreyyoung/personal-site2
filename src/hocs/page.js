import React from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router-dom'
export default (ComposedComponent) => {
	return withRouter(class extends React.Component {
		constructor(...args) {
			super(...args);
			this.state = {};
		}
		componentDidMount() {
			
			
		}
		
		render() {
			return (<div className={classNames('pt-page', {
				'pt-page-current':true
			})}>
				{this.state.loadedData ? <Helmet>
					<script>{`
						if (window && !window._jCache) { window._jCache = {};}
						window._jCache[${`this.props.location.pathname`}] = ${this.state.loadedData}
					`}</script>
				</Helmet> : null}
				<ComposedComponent {...this.props} />
			</div>)
		}
	})
}