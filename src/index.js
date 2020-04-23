import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/state';

export let rerender = (props)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostData={store.updateNewPostData.bind(store)}
                    //addMessage={store.addMessage.bind(store)}
                    //updateNewMessageData={store.updateNewMessageData.bind(store)}

                    dataProfile={props.dataProfile}
                    dataFriends={props.friends}
                    dataDialogs={props.dataDialogs}
                    dataMessages={props.dataMessages}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    )};

rerender(store.getState());

store.subscribe(rerender);