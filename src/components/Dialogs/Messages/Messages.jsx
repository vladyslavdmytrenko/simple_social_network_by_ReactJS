import React from 'react';
import c from './Messages.module.css';

const Masseges = (props) => {
    return (
        <div className={props.interlocutor ? c.main + ' ' + c.left : c.main + ' ' +  c.right}>
            <p>{props.message}</p>
        </div>
    );
};

export default Masseges