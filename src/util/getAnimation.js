const routeAnimations = {
	'/': {
		forward: {
			exit: 'pt-page-moveToLeft',
			enter: 'pt-page-moveFromRight',
		},
		backward: {
			exit: 'pt-page-moveToRight',
			enter: 'pt-page-moveFromLeft',
		}
	},
	'/resume': { //cube top
		forward: {
			exit: 'pt-page-rotateCubeTopOut pt-page-ontop',
			enter: 'pt-page-rotateCubeTopIn',
		},
		backward: {
			exit: 'pt-page-rotateCubeBottomOut pt-page-ontop',
			enter: 'pt-page-rotateCubeBottomIn',
		}
	}, 
	'/projects': { //cube bottom
		forward: {
			exit: 'pt-page-rotateCubeBottomOut pt-page-ontop',
			enter: 'pt-page-rotateCubeBottomIn',
		},
		backward: {
			exit: 'pt-page-rotateCubeTopOut pt-page-ontop',
			enter: 'pt-page-rotateCubeTopIn',
		}
	},
	'/blog': { //cube left
		forward: {
			exit: 'pt-page-rotateCubeLeftOut pt-page-ontop',
			enter: 'pt-page-rotateCubeLeftIn',
		},
		backward: {
			enter: 'pt-page-rotateCubeRightIn',
			exit: 'pt-page-rotateCubeRightOut pt-page-ontop',
		}
	},
	'/about': { //cube right
		forward: {
			enter: 'pt-page-rotateCubeRightIn',
			exit: 'pt-page-rotateCubeRightOut pt-page-ontop',
		},
		backward: {
			exit: 'pt-page-rotateCubeLeftOut pt-page-ontop',
			enter: 'pt-page-rotateCubeLeftIn',
		}
	},
	'/projects/:id': {
		forward: {
			exit: 'pt-page-moveToLeft',
			enter: 'pt-page-moveFromRight',
		},
		backward: {
			exit: 'pt-page-moveToRight',
			enter: 'pt-page-moveFromLeft',
		}
	},
	'/blog/:id': {
		forward: {
			exit: 'pt-page-moveToLeft',
			enter: 'pt-page-moveFromRight',
		},
		backward: {
			exit: 'pt-page-moveToRight',
			enter: 'pt-page-moveFromLeft',
		}
	}
}
let lastPath;
const paths = ['/projects','/resume','/about','/blog']
const pathsSet = new Set(paths);
function getPathKey(nextPath) {
	nextPath = String(nextPath);
	if (nextPath.endsWith('/') && nextPath.length > 1) {
		nextPath = nextPath.substring(0, nextPath.length - 1);
	}
	if (pathsSet.has(nextPath)) {
		return nextPath
	} else {
		const bestPaths = paths.filter(p => nextPath.indexOf(p) !== -1);
		if (bestPaths.length > 0) {
			return bestPaths[0]+'/:id';
		}
	}
	return '/';
}



export default function getAnimation(nextPath, action) {
	const nextPathKey = getPathKey(nextPath);
	const lastPathKey = getPathKey(lastPath)
	let nextAnimation = routeAnimations[nextPathKey].forward
	
	if (lastPathKey.endsWith(':id') || nextPathKey === '/') {
		nextAnimation = routeAnimations[lastPathKey].backward
	}
	console.log('LAST PATH', lastPathKey, 'NEXT PATH', nextPathKey)
	setTimeout(() => lastPath = nextPath, 100);
	return nextAnimation;
}

// 
// export default (animation) => {
// 	console.log('ARGS', animation)
// 	let exit = '';
// 	let enter = '';
// 	switch( animation ) {
// 		case 1:
// 			exit = 'pt-page-moveToLeft';
// 			enter = 'pt-page-moveFromRight';
// 			break;
// 		case 2:
// 			exit = 'pt-page-moveToRight';
// 			enter = 'pt-page-moveFromLeft';
// 			break;
// 		case 3:
// 			exit = 'pt-page-moveToTop';
// 			enter = 'pt-page-moveFromBottom';
// 			break;
// 		case 4:
// 			exit = 'pt-page-moveToBottom';
// 			enter = 'pt-page-moveFromTop';
// 			break;
// 		case 5:
// 			exit = 'pt-page-fade';
// 			enter = 'pt-page-moveFromRight pt-page-ontop';
// 			break;
// 		case 6:
// 			exit = 'pt-page-fade';
// 			enter = 'pt-page-moveFromLeft pt-page-ontop';
// 			break;
// 		case 7:
// 			exit = 'pt-page-fade';
// 			enter = 'pt-page-moveFromBottom pt-page-ontop';
// 			break;
// 		case 8:
// 			exit = 'pt-page-fade';
// 			enter = 'pt-page-moveFromTop pt-page-ontop';
// 			break;
// 		case 9:
// 			exit = 'pt-page-moveToLeftFade';
// 			enter = 'pt-page-moveFromRightFade';
// 			break;
// 		case 10:
// 			exit = 'pt-page-moveToRightFade';
// 			enter = 'pt-page-moveFromLeftFade';
// 			break;
// 		case 11:
// 			exit = 'pt-page-moveToTopFade';
// 			enter = 'pt-page-moveFromBottomFade';
// 			break;
// 		case 12:
// 			exit = 'pt-page-moveToBottomFade';
// 			enter = 'pt-page-moveFromTopFade';
// 			break;
// 		case 13:
// 			exit = 'pt-page-moveToLeftEasing pt-page-ontop';
// 			enter = 'pt-page-moveFromRight';
// 			break;
// 		case 14:
// 			exit = 'pt-page-moveToRightEasing pt-page-ontop';
// 			enter = 'pt-page-moveFromLeft';
// 			break;
// 		case 15:
// 			exit = 'pt-page-moveToTopEasing pt-page-ontop';
// 			enter = 'pt-page-moveFromBottom';
// 			break;
// 		case 16:
// 			exit = 'pt-page-moveToBottomEasing pt-page-ontop';
// 			enter = 'pt-page-moveFromTop';
// 			break;
// 		case 17:
// 			exit = 'pt-page-scaleDown';
// 			enter = 'pt-page-moveFromRight pt-page-ontop';
// 			break;
// 		case 18:
// 			exit = 'pt-page-scaleDown';
// 			enter = 'pt-page-moveFromLeft pt-page-ontop';
// 			break;
// 		case 19:
// 			exit = 'pt-page-scaleDown';
// 			enter = 'pt-page-moveFromBottom pt-page-ontop';
// 			break;
// 		case 20:
// 			exit = 'pt-page-scaleDown';
// 			enter = 'pt-page-moveFromTop pt-page-ontop';
// 			break;
// 		case 21:
// 			exit = 'pt-page-scaleDown';
// 			enter = 'pt-page-scaleUpDown pt-page-delay300';
// 			break;
// 		case 22:
// 			exit = 'pt-page-scaleDownUp';
// 			enter = 'pt-page-scaleUp pt-page-delay300';
// 			break;
// 		case 23:
// 			exit = 'pt-page-moveToLeft pt-page-ontop';
// 			enter = 'pt-page-scaleUp';
// 			break;
// 		case 24:
// 			exit = 'pt-page-moveToRight pt-page-ontop';
// 			enter = 'pt-page-scaleUp';
// 			break;
// 		case 25:
// 			exit = 'pt-page-moveToTop pt-page-ontop';
// 			enter = 'pt-page-scaleUp';
// 			break;
// 		case 26:
// 			exit = 'pt-page-moveToBottom pt-page-ontop';
// 			enter = 'pt-page-scaleUp';
// 			break;
// 		case 27:
// 			exit = 'pt-page-scaleDownCenter';
// 			enter = 'pt-page-scaleUpCenter pt-page-delay400';
// 			break;
// 		case 28:
// 			exit = 'pt-page-rotateRightSideFirst';
// 			enter = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
// 			break;
// 		case 29:
// 			exit = 'pt-page-rotateLeftSideFirst';
// 			enter = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
// 			break;
// 		case 30:
// 			exit = 'pt-page-rotateTopSideFirst';
// 			enter = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
// 			break;
// 		case 31:
// 			exit = 'pt-page-rotateBottomSideFirst';
// 			enter = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
// 			break;
// 		case 32:
// 			exit = 'pt-page-flipOutRight';
// 			enter = 'pt-page-flipInLeft pt-page-delay500';
// 			break;
// 		case 33:
// 			exit = 'pt-page-flipOutLeft';
// 			enter = 'pt-page-flipInRight pt-page-delay500';
// 			break;
// 		case 34:
// 			exit = 'pt-page-flipOutTop';
// 			enter = 'pt-page-flipInBottom pt-page-delay500';
// 			break;
// 		case 35:
// 			exit = 'pt-page-flipOutBottom';
// 			enter = 'pt-page-flipInTop pt-page-delay500';
// 			break;
// 		case 36:
// 			exit = 'pt-page-rotateFall pt-page-ontop';
// 			enter = 'pt-page-scaleUp';
// 			break;
// 		case 37:
// 			exit = 'pt-page-rotateOutNewspaper';
// 			enter = 'pt-page-rotateInNewspaper pt-page-delay500';
// 			break;
// 		case 38:
// 			exit = 'pt-page-rotatePushLeft';
// 			enter = 'pt-page-moveFromRight';
// 			break;
// 		case 39:
// 			exit = 'pt-page-rotatePushRight';
// 			enter = 'pt-page-moveFromLeft';
// 			break;
// 		case 40:
// 			exit = 'pt-page-rotatePushTop';
// 			enter = 'pt-page-moveFromBottom';
// 			break;
// 		case 41:
// 			exit = 'pt-page-rotatePushBottom';
// 			enter = 'pt-page-moveFromTop';
// 			break;
// 		case 42:
// 			exit = 'pt-page-rotatePushLeft';
// 			enter = 'pt-page-rotatePullRight pt-page-delay180';
// 			break;
// 		case 43:
// 			exit = 'pt-page-rotatePushRight';
// 			enter = 'pt-page-rotatePullLeft pt-page-delay180';
// 			break;
// 		case 44:
// 			exit = 'pt-page-rotatePushTop';
// 			enter = 'pt-page-rotatePullBottom pt-page-delay180';
// 			break;
// 		case 45:
// 			exit = 'pt-page-rotatePushBottom';
// 			enter = 'pt-page-rotatePullTop pt-page-delay180';
// 			break;
// 		case 46:
// 			exit = 'pt-page-rotateFoldLeft';
// 			enter = 'pt-page-moveFromRightFade';
// 			break;
// 		case 47:
// 			exit = 'pt-page-rotateFoldRight';
// 			enter = 'pt-page-moveFromLeftFade';
// 			break;
// 		case 48:
// 			exit = 'pt-page-rotateFoldTop';
// 			enter = 'pt-page-moveFromBottomFade';
// 			break;
// 		case 49:
// 			exit = 'pt-page-rotateFoldBottom';
// 			enter = 'pt-page-moveFromTopFade';
// 			break;
// 		case 50:
// 			exit = 'pt-page-moveToRightFade';
// 			enter = 'pt-page-rotateUnfoldLeft';
// 			break;
// 		case 51:
// 			exit = 'pt-page-moveToLeftFade';
// 			enter = 'pt-page-rotateUnfoldRight';
// 			break;
// 		case 52:
// 			exit = 'pt-page-moveToBottomFade';
// 			enter = 'pt-page-rotateUnfoldTop';
// 			break;
// 		case 53:
// 			exit = 'pt-page-moveToTopFade';
// 			enter = 'pt-page-rotateUnfoldBottom';
// 			break;
// 		case 54:
// 			exit = 'pt-page-rotateRoomLeftOut pt-page-ontop';
// 			enter = 'pt-page-rotateRoomLeftIn';
// 			break;
// 		case 55:
// 			exit = 'pt-page-rotateRoomRightOut pt-page-ontop';
// 			enter = 'pt-page-rotateRoomRightIn';
// 			break;
// 		case 56:
// 			exit = 'pt-page-rotateRoomTopOut pt-page-ontop';
// 			enter = 'pt-page-rotateRoomTopIn';
// 			break;
// 		case 57:
// 			exit = 'pt-page-rotateRoomBottomOut pt-page-ontop';
// 			enter = 'pt-page-rotateRoomBottomIn';
// 			break;
// 		case 58:
// 			exit = 'pt-page-rotateCubeLeftOut pt-page-ontop';
// 			enter = 'pt-page-rotateCubeLeftIn';
// 			break;
// 		case 59:
// 			exit = 'pt-page-rotateCubeRightOut pt-page-ontop';
// 			enter = 'pt-page-rotateCubeRightIn';
// 			break;
// 		case 60:
// 			exit = 'pt-page-rotateCubeTopOut pt-page-ontop';
// 			enter = 'pt-page-rotateCubeTopIn';
// 			break;
// 		case 61:
// 			exit = 'pt-page-rotateCubeBottomOut pt-page-ontop';
// 			enter = 'pt-page-rotateCubeBottomIn';
// 			break;
// 		case 62:
// 			exit = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
// 			enter = 'pt-page-rotateCarouselLeftIn';
// 			break;
// 		case 63:
// 			exit = 'pt-page-rotateCarouselRightOut pt-page-ontop';
// 			enter = 'pt-page-rotateCarouselRightIn';
// 			break;
// 		case 64:
// 			exit = 'pt-page-rotateCarouselTopOut pt-page-ontop';
// 			enter = 'pt-page-rotateCarouselTopIn';
// 			break;
// 		case 65:
// 			exit = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
// 			enter = 'pt-page-rotateCarouselBottomIn';
// 			break;
// 		case 66:
// 			exit = 'pt-page-rotateSidesOut';
// 			enter = 'pt-page-rotateSidesIn pt-page-delay200';
// 			break;
// 		case 67:
// 			exit = 'pt-page-rotateSlideOut';
// 			enter = 'pt-page-rotateSlideIn';
// 			break;
// 		default:
// 			exit = 'pt-page-rotateSlideOut';
// 			enter = 'pt-page-rotateSlideIn';
// 			break;
// 	}
// 	return { exit, enter }
// }