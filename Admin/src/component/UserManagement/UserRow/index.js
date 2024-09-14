import React from "react";

const UserRow = ({ user, onDelete, onTogglePassword }) => {
    return (
        <tr>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                {user.showPassword ? user.password : "••••••••"}
                <button
                    className="btn btn-sm btn-link"
                    onClick={() => onTogglePassword(user.id)}
                >
                    {user.showPassword ?
                        (
                            <div className="fas fa-eye-slash"></div>
                        ) : (
                            <div className="fas fa-eye"></div>
                        )
                    }
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(user.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
