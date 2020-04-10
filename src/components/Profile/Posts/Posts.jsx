import React from 'react';
import AddPost from './AddPost/AddPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
    return (
        <div className={c.posts}>
            <AddPost />
            <Post message='Hi, how are you' likes='3'/>
            <Post message='Fine' likes='2'/>
            <Post message='hello' likes='5'/>
        </div>
    );
};

export default Posts