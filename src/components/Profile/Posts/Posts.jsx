import React from 'react';
import AddPost from './AddPost/AddPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
    const AllPosts = props.dataProfile.dataProfileItems.map( el => <Post
        name={el.name}
        img={el.img}
        message={el.message}
        likes={el.likes}/>);

    return (
        <div className={c.posts}>
            <AddPost
                dispatch={props.dispatch}
                // addPost={props.addPost}
                // updateNewPostData={props.updateNewPostData}
                textNewPostData={props.dataProfile.textNewPostData}
            />
            {AllPosts}
        </div>
    );
};

export default Posts