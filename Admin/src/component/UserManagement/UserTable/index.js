import React from "react";
import UserRow from "../UserRow";

const UserTable = ({ users, onDelete, onTogglePassword }) => {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <UserRow
              key={user.id}
              user={user}
              onDelete={onDelete}
              onTogglePassword={onTogglePassword}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
