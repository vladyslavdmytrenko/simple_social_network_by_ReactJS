import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import './index.css';

export let rerender = (props)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    dataProfile={props.dataProfile}
                    dataFriends={props.friends}
                    dataDialogs={props.dataDialogs}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    )};

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state)
});