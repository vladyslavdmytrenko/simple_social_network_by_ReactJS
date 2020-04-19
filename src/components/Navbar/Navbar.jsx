import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sitebar from './Sitebar/Sitebar'

const Navbar = (props) => {
    const Friends = props.dataFriends.map( el => <Sitebar id={el.id} img={el.img} name={el.name}/>);

    return (
        <div className={c.container}>
            <nav className={c.nav}>
                <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
                <NavLink to='/dialogs' activeClassName={c.activeLink}>Massages</NavLink>
                <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
                <NavLink to='/setting' activeClassName={c.activeLink}>Setting</NavLink>
            </nav>
            <div className={c.containerFriends}>
                <h3>Friends</h3>
                <div className={c.friends}>
                    {Friends}
                </div>
            </div>
        </div>

    );
};

export default Navbar