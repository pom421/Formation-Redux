import React, { Component } from 'react';
import './App.css';
import MainPageComponent from "./components/MainPageComponent"
import AddFormPageComponent from "./components/AddFormPageComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPageComponent />
        {/*<AddFormPageComponent />*/}
      </div>
    );
  }
}

export default App;
