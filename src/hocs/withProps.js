import React from 'react'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router-dom'
import routePropsLoader from './../util/routePropsLoader'

export default (ComposedComponent) => {
	return withRouter(class extends React.Component {
		constructor(...args) {
			super(...args);
			this.jsonPath = routePropsLoader.getJsonPath(this.props.location.pathname);
			const propsAreCached = routePropsLoader.isCached(this.jsonPathe);
			const childProps = propsAreCached ? routePropsLoader.loadFromCache(this.jsonPath) : {};
			this.state = {
				loading: !propsAreCached,
				childProps
			};
			this.propsAreCached = propsAreCached;
		}
		
		
		componentDidMount() {
			if (!this.propsAreCached) {
				routePropsLoader.load(this.jsonPath).then(childProps => {
					//console.log('CHILD RPOPS', childProps);
					this.setState({childProps, loading:false})
				});
			} else {
				//console.log('FROM CACHE', routePropsLoader.loadFromCache(this.jsonPath))
			}
		}
		
		getHelmetComponent() {
			if (this.state.loading || this.propsAreCached) {
				return <noscript />
			}
			
			return (
				<Helmet key={345898095}>
					<script>{`
						if (window && !window._jCache) { window._jCache = {};}
						window._jCache['${this.jsonPath}'] = ${JSON.stringify(this.state.childProps)}
					`}</script>
				</Helmet>
			)
		}
		
		render() {
			return [(<ComposedComponent key={this.props.key || 3495098} {...this.props} loading={this.state.loading} {...this.state.childProps} />),
				this.getHelmetComponent()
			]
		}
	})
}