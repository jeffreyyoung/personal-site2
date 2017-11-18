import React from 'react';
//import ReactDOM from 'react-dom';
//import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

//render(<App />, document.getElementById('root'));
registerServiceWorker();
