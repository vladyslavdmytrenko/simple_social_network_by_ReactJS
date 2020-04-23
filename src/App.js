import React from 'react';
import {Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar dataFriends={props.dataFriends}/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() =>
                    (<Profile
                        dispatch={props.dispatch}
                        dataProfile={props.dataProfile}
                    />)
                }/>
                <Route path={'/dialogs'} render={() =>
                    (<Dialogs
                        dispatch={props.dispatch}
                        dataDialogs={props.dataDialogs}
                        dataMessages={props.dataMessages}
                    />)}
                />
                <Route path={'/news'} render={() => <News />}/>
                <Route path={'/setting'} render={() => <Setting />}/>
            </div>
        </div>
    )
};

export default App;
