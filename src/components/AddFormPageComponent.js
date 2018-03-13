import React from 'react';

export default function AddFormPageComponent(props) {
    return (
        <form>
            <p>
                <label htmlFor="id">id</label>
                <input id="id" />
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
                <input type="submit" value="OK" />
            </p>

        </form>
    )
}