import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

    let dialog = props.dataDialogs.map(d =>  <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messages = props.dataMessages.map(m =>  <Messages interlocutor={m.interlocutor} message={m.massage} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                { dialog }
            </div>
            <div className={c.messages}>
                { messages }
            </div>
        </div>
    );
};

export default Dialogs