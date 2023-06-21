const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    PostsList: [
        { id: 1, post: 'Я читаю книги и работаю в космошопе)', likesCount: 23 },
        { id: 2, post: 'Я работаю официантом в ресторане, люблю чипсы', likesCount: 11 },
        { id: 2, post: 'Был в Москве, пытался устроиться на работу сушистом или кальянщиком', likesCount: 50 },
        { id: 2, post: 'Играю в доту 24/7, брал несколько Всерос. туриков', likesCount: 118 },
    ],
    NewPostText: 'Eternity'
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.NewPostText,
                likesCount: 0
            };
            state.PostsList.push(newPost)
            state.NewPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default ProfileReducer