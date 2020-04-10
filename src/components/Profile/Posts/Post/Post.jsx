import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.post}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU"
                alt=""/>
            <h3>Name</h3>
            <p>{props.message}</p>
            <div>
                <span>Like: {props.likes}</span>
            </div>
        </div>
    );
};

export default Post