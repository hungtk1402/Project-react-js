import { Link } from 'react-router-dom'
import './header.css'
import AdminDropdown from './admindropdown'

const HeaderComponent = () => {


    return (
        <nav className="navbar navbar-expand-sm bg-light justify-content-between fixed-top">
            <div>
                <Link className="navbar-brand" to="/admin">BOUTIQUE ADMIN</Link>
            </div>
            <AdminDropdown ></AdminDropdown>
        </nav>
    )
}

export default HeaderComponent