import { combineReducers, legacy_createStore as createStore } from "redux"
import MessageReducer from "./MessageReducer"
import ProfileReducer from "./ProfileReducer"
import SidebarReducer from "./SidebarReducer"


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagesPage: MessageReducer,
    sidebar: SidebarReducer
})


let store = createStore(reducers)

export default store