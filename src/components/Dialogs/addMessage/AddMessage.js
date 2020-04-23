import React from 'react';
import {addMessage, updateNewMessageData} from "../../../redux/state";

const AddMessage = (props) => {
    const ref = React.createRef();
    const add = () => {
        let action = addMessage();
        props.dispatch(action);
    };
    const onChangeData = () => {
        let action = updateNewMessageData(ref.current.value);
        props.dispatch(action);
    };

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