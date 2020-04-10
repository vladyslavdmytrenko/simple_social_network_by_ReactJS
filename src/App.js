import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
