import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router"
import MainPageComponent from "./components/MainPageComponent"
import SearchComponent from './components/SearchComponent';
import AddFormPageComponent from './components/AddFormPageComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <p><Link to="/search">Search</Link></p>
          <p><Link to="/add">Add song</Link></p>
        </ul>
      </div>
    );
  }
}

export default App;
