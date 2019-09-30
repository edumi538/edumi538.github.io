import React from 'react';
import icon from './icon.png';
import './App.css';
import { askForPermissionToReceiveNotifications } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={icon} className="App-logo" alt="icon" />
      <h1 className="App-title">Welcome to the push-notification demo !</h1>
    </header>
    <button onClick={askForPermissionToReceiveNotifications} >
      Click here to receive notifications
    </button>
  </div>
);

export default App;