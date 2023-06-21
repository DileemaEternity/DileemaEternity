import MessageReducer from "./MessageReducer"
import ProfileReducer from "./ProfileReducer"
import SidebarReducer from "./SidebarReducer"


let store = {
    _state: {
        ProfilePage: {
            PostsList: [
                { id: 1, post: 'Я читаю книги и работаю в космошопе)', likesCount: 23 },
                { id: 2, post: 'Я работаю официантом в ресторане, люблю чипсы', likesCount: 11 },
                { id: 2, post: 'Был в Москве, пытался устроиться на работу сушистом или кальянщиком', likesCount: 50 },
                { id: 2, post: 'Играю в доту 24/7, брал несколько Всерос. туриков', likesCount: 118 },
            ],
            NewPostText: 'Eternity'
        },
        MessagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State invis')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.MessagesPage = MessageReducer(this._state.MessagesPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}



export default store;
window.store = store