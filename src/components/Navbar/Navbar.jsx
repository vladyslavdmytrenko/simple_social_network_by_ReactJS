import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
            <NavLink to='/dialogs' activeClassName={c.activeLink}>Massages</NavLink>
            <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
            <NavLink to='/setting' activeClassName={c.activeLink}>Setting</NavLink>
        </nav>
    );
};

export default Navbar