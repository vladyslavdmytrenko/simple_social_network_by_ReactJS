import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.post}>
            <img
                src={props.img}
                alt=""/>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <div>
                <span>Like: {props.likes}</span>
            </div>
        </div>
    );
};

export default Post