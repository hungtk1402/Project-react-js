import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
    const location = useLocation();
    const activeTab = location.pathname;

    return (
        <div className="admin-tab">
            <ul>
                <li>
                    <Link to="/admin" className={`nav-link ${activeTab === '/admin' ? 'active' : ''}`}>
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/product" className={`nav-link ${activeTab === '/admin/product' ? 'active' : ''}`}>
                        <i className="fas fa-box"></i> Product Management
                    </Link>
                </li>
                <li>
                    <Link to="/admin/user" className={`nav-link ${activeTab === '/admin/user' ? 'active' : ''}`}>
                        <i className="fas fa-users"></i> User Management
                    </Link>
                </li>
                <li>
                    <Link to="/admin/order" className={`nav-link ${activeTab === '/admin/order' ? 'active' : ''}`}>
                        <i className="fas fa-shopping-cart"></i> Order Management
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarComponent;
