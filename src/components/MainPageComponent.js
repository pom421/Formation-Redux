import React, { Component } from 'react';
import SearchComponent from "./SearchComponent"
import AddComponent from "./AddComponent"
import ConnectedListComponent from "../containers/ConnectedListComponent"

class MainPageComponent extends Component {

  constructor(props) {
    super(props)
  
  }


  render() {
      return (
          <div>
            <SearchComponent />
            {/*<AddComponent /> */}
            <ConnectedListComponent />
        </div>
      )
  }
}

export default MainPageComponent

