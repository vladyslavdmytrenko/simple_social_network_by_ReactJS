import React from 'react';
import c from './AddPost.module.css';

const AddPost = (props) => {
    const add = () =>{
        alert(ref.current.value)
    };
    const ref = React.createRef();

    return (
        <div className={c.add_post}>
            <textarea ref={ref}/>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AddPost