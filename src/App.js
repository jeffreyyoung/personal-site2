
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import page from './hocs/page';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import getAnimation from './util/getAnimation'

const App = withRouter(class AppMeow extends React.Component {
	constructor(...args) {
		super(...args);
		this.animationIndex = 5;
		this.lastPathName = this.props.location.pathname;
	}
	
	checkLocation() {
		if (this.lastPathName !== this.props.location.pathname) {
			this.lastPathName = this.props.location.pathname;
			this.animationIndex++;
		}
	}
	
	updateSpecialScript() {
		var script = document.createElement("script");
		// Add script content
		script.innerHTML = this.props.location.pathname;
		// Append
		document.head.appendChild(script);
	}
	
	
	getAnimationClassNames(pathname) {
		// switch(pathname) {
		// 	// case '/':
		// 	// 	return {
		// 	// 	 exit: 'pt-page-rotateCubeLeftOut',
		// 	// 	 enter: 'pt-page-rotateCubeLeftIn pt-page-ontop',
		// 	// 	}
		// 	// case '/about':
		// 	// 	return {
		// 	// 		exit: 'pt-page-rotateCubeRightOut',
		// 	// 		enter: 'pt-page-rotateCubeRightIn pt-page-ontop',
		// 	// 	}
		// 	// case '/projects':
		// 	// 	return {
		// 	// 		exit: 'pt-page-rotateCubeTopOut',
		// 	// 		enter: 'pt-page-rotateCubeTopIn pt-page-ontop',
		// 	// 	}
		// 	// case '/resume':
		// 	// 	return {
		// 	// 		exit: 'pt-page-rotateCubeBottomOut',
		// 	// 		enter: 'pt-page-rotateCubeBottomIn pt-page-ontop',
		// 	// 	}
		// 	default:
		// 		return {
		// 			exit: 'pt-page-rotateCubeLeftOut',
		// 			enter: 'pt-page-rotateCubeLeftIn pt-page-ontop',
		// 		}
		// }

		return getAnimation(this.animationIndex);
	}
	
	childFactory(child) {
		console.log('CHILD FACTORY', child.props.classNames);
		let transitionState = {
			key:this.props.location.key,
			enter:this.getAnimationClassNames(this.props.location.pathname).enter,
			exit:this.getAnimationClassNames(this.props.location.pathname).exit,
			timeout:1000,
		}
		return React.cloneElement(child, {
			transitionState,
		})
	}
	
	render() {
		this.checkLocation();
		let {location} = this.props
		return (
				<TransitionGroup className='pt-perspective sans-serif' childFactory={this.childFactory.bind(this)}>
					<CSSTransition
						key={location.key}
						classNames={this.getAnimationClassNames(this.props.location.pathname)}
						timeout={1000}
					>
						<Switch location={location}>
							<Route exact path='/' component={page(Home)} />
							<Route exact path='/about' component={page(About)} />
							<Route exact path='/projects' component={page(Projects)} />
							<Route exact path='/resume' component={page(Resume)} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
		)
	}
	
})

export default function() {
	return (
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	)
}

