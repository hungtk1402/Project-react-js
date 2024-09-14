import { Link } from 'react-router-dom'
import CartIcon from "./CartIcon"
import UserDropdown from "./UserDropdown"
import './Header.css'
const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-around">
      <div>
        <Link className="navbar-brand" to="/">BOUTIQUE</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="row">
        <CartIcon />
        <UserDropdown />
      </div>
    </nav>
  )
}
export default HeaderComponent