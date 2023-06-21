import { NavLink } from 'react-router-dom';
import ps from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={ps.dialog + ' ' + ps.active}>
            <NavLink to={path}>{props.nickname}</NavLink>
        </div>
    )
}

export default DialogItem;