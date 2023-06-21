import { NavLink } from 'react-router-dom';
import clases from './Navbar.module.css'


const Navbar = () => {
    return <nav className={clases.navigation}>
        <div className={`${clases.item} ${clases.active}`}>
            <NavLink to='/Profile/Profile' className={navData => navData.isActive ? clases.activeLink : clases.item}>Profile</NavLink>
        </div>
        <div className={clases.item}>
            <NavLink to='/Dialogs/Dialogs' className={navData => navData.isActive ? clases.activeLink : clases.item}>Message</NavLink>
        </div>
        <div className={clases.item}>
            <NavLink to='/News/News'>News</NavLink>
        </div>
        <div className={clases.item}>
            <NavLink to='/Music/Music'>Music</NavLink>
        </div>
        <div className={clases.item}>
            <NavLink to='/Settings/Settings'>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;