import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addPost, updateNewPostData, addMessage, updateNewMessageData} from "./redux/state";

export let rerender = (props)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    updateNewPostData={updateNewPostData}
                    addPost={addPost}
                    dataProfile={props.dataProfile}
                    dataFriends={props.friends}
                    dataDialogs={props.dataDialogs}
                    updateNewMessageData={updateNewMessageData}
                    addMessage={addMessage}
                    dataMessages={props.dataMessages}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
)};