import { useState, useContext, useEffect, useRef } from "react";
import { AdminContext } from "../../../Context";

const AdminDropdown = ({ setIsAuthenticated }) => {
    const { admin, logout } = useContext(AdminContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

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
                    <span className="p-2">{admin?.fullName}</span>
                </div>
                <button
                    type="button"
                    className="btn dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                />
                <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    <div className="btn" style={{ color: "white" }} onClick={logout}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default AdminDropdown