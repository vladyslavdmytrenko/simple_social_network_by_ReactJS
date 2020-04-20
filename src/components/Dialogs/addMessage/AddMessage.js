import React from 'react';

const AddMessage = () => {
    const ref = React.createRef();
    const add = () => {alert(ref.current.value)};
    return (
        <div>
            <textarea ref={ref}></textarea>
            <button onClick={add}>Send</button>
        </div>
    )
};

export default  AddMessage