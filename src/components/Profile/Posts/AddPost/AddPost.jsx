import React from 'react';
import c from './AddPost.module.css';
import {addPost, updateNewPostData} from "../../../../redux/state";

const AddPost = (props) => {
    const ref = React.createRef();
    const add = () =>{
        const newPost = addPost();
        props.dispatch(newPost)
    };
    const onPostChange = () => {
        const newText = updateNewPostData(ref.current.value);
        props.dispatch(newText)
    };

    return (
        <div className={c.add_post}>
            <textarea
                onChange={onPostChange}
                ref={ref}
                value={props.textNewPostData}
            />
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AddPost