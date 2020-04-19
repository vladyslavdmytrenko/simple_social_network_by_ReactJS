import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogItem.module.css';


const DialogItem = (prop) => {
    return (
        <div className={c.dialoItem}>
            <img src={prop.img} alt="" className={c.dialogItemImg}/>
            <NavLink to={'/dialogs/'+ prop.id + ''}  activeClassName={c.activeLink}>{prop.name}</NavLink>
        </div>
    );
};

export default DialogItem