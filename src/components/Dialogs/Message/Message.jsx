import ps from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={ps.message}>{props.message}</div>
    )
}

export default Message;