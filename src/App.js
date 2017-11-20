
import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import page from './hocs/page';
import withProps from './hocs/withProps';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Resume from './pages/Resume';
import getAnimation from './util/getAnimation'
import Journal from './pages/Journal';
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
						onEntered={el => el.className = 'pt-page-current pt-page'}
						onExit={el => el.className += ' '+this.getAnimationClassNames(this.props.location.pathname).exit}
					>
						<Switch location={location}>
							<Route key={1} exact path='/' component={page(Home)} />
							<Route key={2} exact path='/about' component={page(About)} />
							<Route key={3} exact path='/projects' component={page(withProps(Projects))} />
							<Route exact path='/blog' component={page(Blog)} />
							<Route exact path='/journal' component={page(Journal)} />
							<Route key={4} exact path='/resume' component={page(Resume)} />
							<Route exact path='/projects/:project' component={page(withProps(Project))} />
							
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

