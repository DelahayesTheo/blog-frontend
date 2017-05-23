import React from 'react';
import ReactDOM from 'react-dom';

import RouterComponent from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './style/css/bootstrap.css';

ReactDOM.render(
	<RouterComponent />,
	document.getElementById('root'));
registerServiceWorker();
