import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Sitebar.module.css';

const Sitebar =  (props) => {
    return (
        <NavLink to={'/friends' + props.id} className={c.link}>
            <img src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1382917/910/607/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1466426985&s=9c232cc7dfe7b4e1f9252f29e16456e7" alt=""/>
            <p>Name</p>
        </NavLink>
    )
}

export default Sitebar