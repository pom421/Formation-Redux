import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from "react-router"
import { searchSongs } from "../actions/actions"
import ListComponent from "./ListComponent"

class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }

        this.updateTerm = this.updateTerm.bind(this)
        this.search = this.search.bind(this)

    }

    updateTerm(e) {
        this.setState({ term: e.target.value })
    }

    search() {
        if (this.state.term) {
            const regex = new RegExp(this.state.term, "gi")
            const songs = this.props.allSongs.filter(song => regex.test(song.title))

            this.props.dispatch(
                searchSongs(songs)
            )

            this.setState({ term: "" })
        }

    }

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>

                <input type="text" name="term" value={this.state.term} onChange={this.updateTerm} />
                <button onClick={this.search}>OK</button>
                <ListComponent {...this.props}></ListComponent>
            </div>
        )
    }
}

function mapStateToProp(applicationState) {
    return {
        allSongs: applicationState.songsState,
        songs: applicationState.searchState
    }
}


export default connect(mapStateToProp)(SearchComponent)

