
import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import page from './hocs/page';
import withProps from './hocs/withProps';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
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
		// 	case '/':
		// 		return {
		// 		 exit: 'pt-page-rotateCubeLeftOut',
		// 		 enter: 'pt-page-rotateCubeLeftIn pt-page-ontop',
		// 		}
		// 	case '/about':
		// 		return {
		// 			exit: 'pt-page-rotateCubeRightOut',
		// 			enter: 'pt-page-rotateCubeRightIn pt-page-ontop',
		// 		}
		// 	case '/projects':
		// 		return {
		// 			exit: 'pt-page-rotateCubeTopOut',
		// 			enter: 'pt-page-rotateCubeTopIn pt-page-ontop',
		// 		}
		// 	case '/resume':
		// 		return {
		// 			exit: 'pt-page-rotateCubeBottomOut',
		// 			enter: 'pt-page-rotateCubeBottomIn pt-page-ontop',
		// 		}
		// 	default:
		// 		return {
		// 			exit: 'pt-page-rotateCubeLeftOut',
		// 			enter: 'pt-page-rotateCubeLeftIn pt-page-ontop',
		// 		}
		// }

		return getAnimation(this.animationIndex);
	}

	render() {
		this.checkLocation();
		let {location} = this.props
		return (
				<TransitionGroup className='pt-perspective sans-serif'>
					<Transition
						key={location.key}
						classNames={this.getAnimationClassNames(this.props.location.pathname)}
						timeout={1000}
						onEnter={el => el.className += ' '+this.getAnimationClassNames(this.props.location.pathname).enter}
						onExit={el => el.className += ' '+this.getAnimationClassNames(this.props.location.pathname).exit}
					>
						<Switch location={location}>
							<Route key={1} exact path='/' component={page(Home)} />
							<Route key={2} exact path='/about' component={page(About)} />
							<Route key={3} exact path='/projects' component={page(withProps(Projects))} />
							<Route key={4} exact path='/resume' component={page(Resume)} />
							<Route exact path='/projects/:project' component={page(withProps(Project))} />
							<Route exact path='*' component={page(() => (<h1>not found</h1>))} />
						</Switch>
					</Transition>
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

