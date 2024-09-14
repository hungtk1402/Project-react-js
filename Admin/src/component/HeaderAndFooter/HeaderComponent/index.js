import { Link } from 'react-router-dom'
import './header.css'
import AdminDropdown from './admindropdown'

const HeaderComponent = () => {


    return (
        <nav className="navbar navbar-expand-sm bg-light justify-content-between">
            {/* <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/product">Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/user">User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/order">Order</Link>
                </li>
            </ul> */}
            <div>
                <Link className="navbar-brand" to="/admin">BOUTIQUE ADMIN</Link>
            </div>
            <AdminDropdown ></AdminDropdown>
        </nav>
    )
}

export default HeaderComponent