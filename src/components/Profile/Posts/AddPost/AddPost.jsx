import React from 'react';
import c from './AddPost.module.css';

const AddPost = (props) => {
    const ref = React.createRef();
    const add = () =>{props.addPost()};
    const onPostChanege = () => {props.updateNewPostData(ref.current.value)};

    return (
        <div className={c.add_post}>
            <textarea
                onChange={onPostChanege}
                ref={ref}
                value={props.textNewPostData}
            />
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AddPost