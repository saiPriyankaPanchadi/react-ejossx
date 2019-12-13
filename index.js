import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Hello/>

      </div>
    );
  }
}

render(
  <Router>
  <App />
  </Router>, document.getElementById('root'));
