import React from 'react';
import elephantimg from './elephant.png';
import './Elephant.css'

function animateProgress(duration /*duration of animation*/, animateElement /*callback function to animate our javascript element*/) {
  var start = null;

  function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    var timeSinceAnimationStart = timestamp - start;
    var percentProgress = timeSinceAnimationStart / duration;

    animateElement(percentProgress);
    if (timeSinceAnimationStart < duration) {
      requestAnimationFrame(step);
    } else {
      animateElement(1); //animation is Finished :D
    }
  }

  requestAnimationFrame(step);
}
/**
  from - initial value of animated element at beginning of animation
  to - final value of animated element at end of animation
  duration - time in milliseconds of animation
  animateElement - call back to animate element
*/
function animate(from, to, duration, animateElement) {
  animateProgress(duration, function(percentProgress) {
    var nextValue = from + (to - from) * percentProgress;
    animateElement(nextValue);
  })
}

const ANIMATION_DURATION = 15000;

export default class extends React.Component {
	componentDidMount() {
		this.animate();
		setInterval(this.animate.bind(this), ANIMATION_DURATION);
	}
	
	animate() {
		let element = document.querySelector('.magicElephant');
		animate(0, window.innerWidth - 200, ANIMATION_DURATION, nextValue => {
			console.log('NEXT VALUE', nextValue);
			element.style.left = nextValue + 'px'
		});
	}
	
	render() {
		return (<img src={elephantimg} className='magicElephant'/>)
	}
}
//export default () => (<img src={elephantimg} className='magicElephant'/>)
