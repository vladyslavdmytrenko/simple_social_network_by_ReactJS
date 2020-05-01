import React from 'react';
import {Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar dataFriends={props.dataFriends}/>s
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() =><ProfileContainer store={props.store}/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/news'} render={() => <News />}/>
                <Route path={'/setting'} render={() => <Setting />}/>
            </div>
        </div>
    )
};

export default App;
