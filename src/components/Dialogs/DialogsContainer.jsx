import React from 'react';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let dialogs = props.store.getState().dataDialogs.dialogItems;
    let messages = props.store.getState().dataDialogs.messageItems;

    return <Dialogs
        dialogs={dialogs}
        messages={messages}
        dispatch={props.store.dispatch}
        textNewMessageData={props.store.getState().dataDialogs.textNewMessageData}
    />
};

export default DialogsContainer