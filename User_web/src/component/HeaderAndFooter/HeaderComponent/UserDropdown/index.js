import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../Context/UserContext";
import { CartContext } from "../../../Context/CartContext";
const UserDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { user } = useContext(UserContext);
    const { handleLogout } = useContext(CartContext);
    const dropdownRef = useRef(null);


    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleProfileClick = () => {
        setIsDropdownOpen(false);
        navigate('/profile');
    };

    // Đóng dropdown nếu nhấp chuột bên ngoài vùng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="dropdown" ref={dropdownRef} onClick={toggleDropdown}>
            <div className="btn-group">
                <div className="navbar-text ">
                    <div className="fa fa-user"></div>
                    <button className="btn p-1">{user?.name}</button>
                </div>
                <button
                    type="button"
                    className="btn dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                />
                <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    {user &&
                        <div className="menu_user">
                            <div className="dropdown-item" onClick={handleProfileClick}>
                                <span className="fas fa-user-circle p-2"></span>
                                My profile
                            </div>
                            <div className="dropdown-item" onClick={handleLogout}>
                                <span className="fas fa-sign-out-alt p-2"></span>
                                Logout
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserDropdown;