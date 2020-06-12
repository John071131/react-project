import React, { Component } from 'react';
import Welcome from './components/welcome'
import { render } from 'react-dom';

import './style.css';

class App extends Component {


  render() {
    return (
      <div>
       
        <p>
         start editing
        </p>
        <Welcome/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
