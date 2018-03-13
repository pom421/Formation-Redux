import React, { Component } from 'react';

class ListComponent extends Component {

    render() {

        const songs = this.props.songs.map(song =>
            <li key={song.id}><b>{song.title}</b> {song.author} ({song.year})</li>
        )

        return (
            <ul>
                {songs}
            </ul>
        )
    }
}

export default ListComponent