import React from 'react';
import c from './AddPost.module.css';
import {addPostActionCreator, updateNewPostDataActionCreator} from "../../../../redux/profile-reducer";

const AddPost = (props) => {
    const ref = React.createRef();
    const add = () =>{
        const newPost = addPostActionCreator();
        props.dispatch(newPost)
    };
    const onPostChange = () => {
        const newText = updateNewPostDataActionCreator(ref.current.value);
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