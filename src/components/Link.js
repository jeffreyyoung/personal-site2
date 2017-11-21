import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { createLocation } from 'history'
import withApp from './../hocs/withApp';

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

/**
 * The public API for rendering a history-aware <a>.
 */
class Link extends React.Component {
	static propTypes = {
		onClick: PropTypes.func,
		target: PropTypes.string,
		to: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object
		]).isRequired,
		innerRef: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func
		])
	}

	static defaultProps = {
		replace: false
	}

	handleClick = async (event) => {
		if (this.props.onClick) {
			this.props.onClick(event)
		}

		if (
			!event.defaultPrevented && // onClick prevented default
			event.button === 0 && // ignore everything but left clicks
			!this.props.target && // let browser handle "target=_blank" etc.
			!isModifiedEvent(event) // ignore clicks with modifier keys
		) {
			event.preventDefault()
			
			if (this.props.loadJson) {
				console.log('LOADING JSON');
				try {
					await this.props.app.loadJson(this.props.to);
				} catch (e) {
					console.error(e);
				}
				
			}
			
			const { history } = this.props
			const { replace, to } = this.props

			if (replace) {
				history.replace(to)
			} else {
				history.push(to)
			}
		}
	}

	render() {
		const { replace, to, innerRef, ...props } = this.props // eslint-disable-line no-unused-vars


		const { history } = this.props;
		const location = typeof to === 'string' ? createLocation(to, null, null, history.location) : to

		const href = history.createHref(location)
		return <a {...props} onClick={this.handleClick} href={href} ref={innerRef}/>
	}
}

export default withRouter(withApp(Link))