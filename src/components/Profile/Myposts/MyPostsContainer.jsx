import Context from '../../../context'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer'
import Myposts from './MyPosts'
import React from 'react'


const MypostsContainer = () => {
    // let state = props.store.getState()

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }

    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text)
    //     props.store.dispatch(action)
    // }

    return (
        <Context.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <Myposts updateNewPostText={onPostChange} addPost={addPost} posts={state.ProfilePage.PostsList} NewPostText={state.ProfilePage.NewPostText} />
                    )
                }
            }
        </Context.Consumer>
    )
}

export default MypostsContainer;