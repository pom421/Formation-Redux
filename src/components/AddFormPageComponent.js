import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from "react-router"
import { addSong } from "../actions/actions"

function mkId() {
    return "song_" + Math.floor(Math.random() * 1000000)
}

class AddFormPageComponent extends Component {

    constructor(props) {
        super(props)

        this.add = this.add.bind(this)
    }

    add() {
        const id = mkId()
        const title = document.querySelector("#title").value
        const category = document.querySelector("#category").value
        const album = document.querySelector("#album").value
        const author = document.querySelector("#author").value
        const year = document.querySelector("#year").value

        this.props.dispatch(
            addSong({
                id,
                title,
                category,
                album,
                author,
                year
            })
        )
    }

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>

                <p>
                    <label htmlFor="id">id</label>
                    <input id="id" disabled />
                </p>
                <p>
                    <label htmlFor="title">title</label>
                    <input id="title" />
                </p>
                <p>
                    <label htmlFor="category">category</label>
                    <select id="category">
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="jazz">Jazz</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="album">album</label>
                    <input id="album" />
                </p>
                <p>
                    <label htmlFor="author">author</label>
                    <input id="author" />
                </p>
                <p>
                    <label htmlFor="year">year</label>
                    <input id="year" />
                </p>
                <p>
                    <input type="submit" value="OK" onClick={this.add} />
                </p>
            </div>
        )
    }

}

export default connect()(AddFormPageComponent)