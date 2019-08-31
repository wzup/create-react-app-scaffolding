import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Muses</h2>
        </header>
        <div className='App-contents'>
          <button>FETCH MUSIC</button>
        </div>
      </div>
    );
  }
}

export default App;
