import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers/reducers"
import { Router, Route, browserHistory, Link } from "react-router"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"

import registerServiceWorker from './registerServiceWorker';
import SearchComponent from './components/SearchComponent';
import AddFormPageComponent from './components/AddFormPageComponent';
import MainPageComponent from './components/MainPageComponent';

let initialAppState = {
    songsState: [
        {
            id: "song_" + 1,
            title: "God only knows",
            category: "pop",
            album: "Pet Sounds",
            author: "The Beach Boys",
            year: 1969
        },
        {
            id: "song_" + 2,
            title: "Getting better",
            category: "pop",
            album: "Sergent Pepper's Lonely Hearts Club Band",
            author: "The Beatles",
            year: 1969
        }
    ],
    searchState: [

    ]

}

let store = createStore(reducers, initialAppState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/search" component={SearchComponent} />
            <Route path="/add" component={AddFormPageComponent} />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
