import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import AddMessage from './addMessage/AddMessage';

const Dialogs = (props) => {
    let dialogs = props.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messages = props.messages.map(m =>  <Messages interlocutor={m.interlocutor} message={m.massage} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                { dialogs }
            </div>
            <div className={c.messages}>
                { messages }
                <AddMessage
                    dispatch={props.dispatch}
                    textNewMessageData={props.textNewMessageData}
                />
            </div>
        </div>
    );
};

export default Dialogs