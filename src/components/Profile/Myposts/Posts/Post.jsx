import ps from './Post.module.css'

const Post = (props) => {
    return <div className={ps.item}>
        <img src="../kartinki/kartinki_postov/Reincarnation.png" alt="eqwe" />
        {props.message}
        <div>{props.likesCount}</div>
    </div>
}

export default Post;