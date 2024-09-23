import { useState, useEffect, useRef } from 'react';

const StatusDropdown = ({ order, handleStatusChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (order.status !== 'Cancelled' && order.status !== 'Completed') {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleStatusSelection = (newStatus) => {
        handleStatusChange(order.orderId, newStatus);
        setIsDropdownOpen(false);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button
                className={`btn btn-secondary dropdown-toggle status-${order.status.toLowerCase()}`}
                type="button"
                onClick={toggleDropdown}
                disabled={order.status === 'Cancelled' || order.status === 'Completed'}
            >
                {order.status}
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <button className="dropdown-item" onClick={() => handleStatusSelection('Pending')}>Pending</button>
                <button className="dropdown-item" onClick={() => handleStatusSelection('Completed')}>Completed</button>
                <button className="dropdown-item" onClick={() => handleStatusSelection('Cancelled')}>Cancelled</button>
            </div>
        </div>
    );
};

export default StatusDropdown;
