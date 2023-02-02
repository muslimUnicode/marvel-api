import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="portal-name"><div className="marvel">Marvel</div>information portal</div>
            <div className="nav-links"> 
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/characters'>Characters</NavLink>
                <span className="splitter">/</span>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/comics'>Comics</NavLink>
            </div>
        </div>
    )
}

export default Navbar