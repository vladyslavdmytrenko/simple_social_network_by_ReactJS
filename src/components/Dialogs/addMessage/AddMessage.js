import React from 'react';

const AddMessage = (props) => {
    const ref = React.createRef();
    const add = () => {props.addMessage()};
    const onChangeData = () => {props.updateNewMessageData(ref.current.value)};

    return (
        <div>
            <textarea
                onChange={onChangeData}
                value={props.textNewMessageData}
                ref={ref}
            />
            <button onClick={add}>Send</button>
        </div>
    )
};

export default  AddMessage