import React, { Component } from 'react';
import { connect } from "react-redux"
import { searchSongs } from "../actions/actions"

class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }

        this.updateTerm = this.updateTerm.bind(this)
        this.search = this.search.bind(this)

        this.songs = [
            {
                id: "albums" + 1,
                title: "God only knows",
                category: "pop",
                album: "Pet Sounds",
                author: "The Beach Boys",
                year: 1969
            },
            {
                id: "albums" + 2,
                title: "Getting better",
                category: "pop",
                album: "Sergent Pepper's Lonely Hearts Club Band",
                author: "The Beatles",
                year: 1969
            }
        ]
    }

    updateTerm(e) {
        this.setState({ term: e.target.value })
    }
    
    search() {
        if (this.state.term) {
            const regex = new RegExp(this.state.term, "gi")
            
            const songs = this.songs.filter(song => regex.test(song.title))
            
            this.props.dispatch(
                searchSongs(songs)
            )
            
            this.setState({ term: "" })
        }
        
    }

    render() {
        return (
            <div>
                <input type="text" name="term" value={this.state.term} onChange={this.updateTerm} />
                <button onClick={this.search}>OK</button>
            </div>
        )
    }
}

export default connect()(SearchComponent)

