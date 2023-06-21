import DialogItem from './DialogItem/DialogItem'
import ps from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'


const Dialogs = (props) => {

    let state = props.MessagesPage

    let DialogsElements =
        state.DialogsList.map(d => <DialogItem nickname={d.nickname} id={d.id} />)

    let MessagesElements =
        state.MessagesList.map(m => <Message message={m.message} />)

    let newMessageBody = state.MessageBody

    let onSendMessageClick = () => {
        debugger
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div>
            <div className={ps.dialogs}>
                <div className={ps.dialogs_items}>
                    {DialogsElements}
                </div>
                <div className={ps.messages}>
                    <div>{MessagesElements}</div>
                    <div>
                        <div><textarea onChange={onNewMessageChange} placeholder='Enter your message' value={newMessageBody}></textarea></div>
                        <div><button onClick={onSendMessageClick}>Push</button></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;