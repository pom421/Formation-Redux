import React from 'react';
import { connect } from "react-redux"

function addSong() {
    console.log("clic sur add song")
    this.props.dispatch(addSong())
    
}

function AddComponent(props) {
    return (
        <button onClick={addSong}>+ Add song</button>
    )
}

export default connect()(AddComponent)