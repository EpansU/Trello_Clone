import React, { Component } from 'react';
import Card from './components/List/Card'
import './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Card/>
      
      </div>
    );
  }
}

export default App;
