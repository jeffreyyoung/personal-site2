import React from 'react'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router-dom'
import routePropsLoader from './../util/jsonDataLoader'

export default (ComposedComponent) => {
	return withRouter(class extends React.Component {
		constructor(...args) {
			super(...args);
			const propsAreCached = routePropsLoader.isCached(this.location);

			const childProps = propsAreCached ? routePropsLoader.loadFromCache(this.location) : {};
			this.state = {
				loading: !propsAreCached,
				childProps
			};
			this.propsAreCached = propsAreCached;
		}
		
		get location() {
			return this.props.location.pathname;
		}
		
		componentDidMount() {
			if (!this.propsAreCached) {
				routePropsLoader.load(this.location).then(childProps => {
					//TODO HANDLE CASE WHERE CURRENT COMPONENT IS UNMOUNTED
					this.setState({childProps, loading:false})
				});
			} else {
			}
		}
		
		getHelmetComponent() {
			if (this.state.loading || this.propsAreCached) {
				return <noscript />
			}
			
			return (
				<Helmet key={345898095}>
					<script>{`
						if (window && !window.__j_cache) { window.__j_cache = {};}
						window.__j_cache['${window.location.pathname}'] = ${JSON.stringify(this.state.childProps)}
						
						console.log('mew')
					`}</script>
				</Helmet>
			)
		}
		
		render() {
			return [(<ComposedComponent key={8453908534} {...this.props} loading={this.state.loading} {...this.state.childProps} />),
				this.getHelmetComponent()
			]
		}
	})
}