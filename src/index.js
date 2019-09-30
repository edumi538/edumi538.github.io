import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {firebaseMessaging} from '../src/utils/firebaseUtils'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
