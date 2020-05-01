import React from 'react';
import {addMessageActionCreator, updateNewMessageDataActionCreator} from "../../../redux/dialogs-reducer";

const AddMessage = (props) => {
    const ref = React.createRef();
    const add = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    };
    const onChangeData = () => {
        let action = updateNewMessageDataActionCreator(ref.current.value);
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