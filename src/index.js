import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
