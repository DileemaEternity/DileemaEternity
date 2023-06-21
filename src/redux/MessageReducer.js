const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    DialogsList: [
        { id: 1, nickname: 'Collapse' },
        { id: 2, nickname: 'Miposhka' },
        { id: 3, nickname: 'Mira' },
        { id: 4, nickname: 'Yatoro' },
        { id: 5, nickname: 'Torontotokyo' },
        { id: 6, nickname: 'Korben' },
    ],
    MessagesList: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Вчера выйграли Gaiming Gladiators' },
        { id: 3, message: 'А сегодня игра против Team Liquid' },
        { id: 4, message: 'Победили' },
        { id: 5, message: 'На магнусе повозил' },
        { id: 6, message: 'й' },
    ],
    NewMessageBody: ''
}

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.NewMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.NewMessageBody
            state.MessagesList.push({ id: 6, message: body })
            state.NewMessageBody = ''
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default MessageReducer