import { NavLink} from "react-router-dom";
import './App.css'
const active = ({isActive}) => isActive ? 'active' : ''

export const menu = [
    {
        label: <NavLink to='/' className={active}>Home</NavLink>,
        key: 'home',
    },
    {
        label: <NavLink to='/counter' className={active}>Counter</NavLink>,
        key: 'counter',
    },
    {
        label: <NavLink to='/quiz' className={active}>Quiz</NavLink>,
        key: 'quiz',
    }
]