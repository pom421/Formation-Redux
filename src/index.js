import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers/reducers"

import registerServiceWorker from './registerServiceWorker';

let initialAppState = {
    songsState: []
}

let store = createStore(reducers, initialAppState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
