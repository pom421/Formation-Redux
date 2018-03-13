import React, { Component } from 'react';
import SearchComponent from "./SearchComponent"
import AddFormPageComponent from "./AddFormPageComponent"
import ConnectedListComponent from "../containers/ConnectedListComponent"
import { Link } from "react-router"

class MainPageComponent extends Component {

  render() {
      return (
          <div>
            <SearchComponent />
            {/*<AddFormPageComponent />*/}
            <ConnectedListComponent />
        </div>
      )
  }
}

export default MainPageComponent

