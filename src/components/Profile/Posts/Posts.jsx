import React from 'react';
import AddPost from './AddPost/AddPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
    const AllPosts = props.dataProfile.map( el => <Post
        name={el.name}
        img={el.img}
        message={el.message}
        likes={el.likes}/>);
    return (
        <div className={c.posts}>
            <AddPost />
            {AllPosts}
        </div>
    );
};

export default Posts