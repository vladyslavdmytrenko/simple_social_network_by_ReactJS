import React from 'react';
import c from './AddPost.module.css';

const AddPost = (props) => {
    return (
        <div className={c.add_post}>
            <label>text</label>
            <input type="text" />
            <button>Add</button>
        </div>
    );
};

export default AddPost