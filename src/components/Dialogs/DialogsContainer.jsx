import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/MessageReducer'
import React from 'react'
import Dialogs from './Dialogs'
import Context from '../../context'


const DialogsContainer = () => {

    // let state = props.store.getState().MessagesPage

    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }

    // let onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }

    return (
        <Context.Consumer>
            {
                (store) => {
                    debugger
                    let state = store.getState().MessagesPage

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return (
                        <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} MessagesPage={state} />
                    )
                }
            }
        </Context.Consumer>
    )
}

export default DialogsContainer;