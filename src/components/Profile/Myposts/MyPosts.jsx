import ps from './Myposts.module.css'
import Post from './Posts/Post'
import React from 'react'


const Myposts = (props) => {
    let PostsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={ps.posts_block}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
            </div>
            <div className={ps.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

export default Myposts;