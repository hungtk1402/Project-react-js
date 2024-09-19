import { useState } from "react";
import HeaderComponent from "../HeaderAndFooter/HeaderComponent";
import FooterComponent from "../HeaderAndFooter/FooterComponent";
import SearchBar from "../SearchBar";
import UserTable from "./UserTable";
import NavbarComponent from "../NavbarComponent";

const UserManagement = ({ setIsAuthenticated }) => {
    // Fake dữ liệu người dùng
    const [users, setUsers] = useState([
        { id: 1, fullName: "User name 1", email: "username1@gmail.com", phone: "123-456-7890", password: "password123", showPassword: false },
        { id: 2, fullName: "User name 2", email: "username2@gmail.com", phone: "098-765-4321", password: "abc12345", showPassword: false },
        { id: 3, fullName: "User name 3", email: "username3@gmail.com", phone: "555-555-5555", password: "qwerty789", showPassword: false },
    ]);
    const [filteredUsers, setFilteredUsers] = useState(users);
    // Xoá người dùng
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
        setFilteredUsers(filteredUsers.filter(user => user.id !== id)); // Xóa người dùng khỏi danh sách tìm kiếm
    };

    // Hiển thị hoặc ẩn mật khẩu
    const togglePasswordVisibility = (id) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, showPassword: !user.showPassword } : user
        ));
        setFilteredUsers(filteredUsers.map(user =>
            user.id === id ? { ...user, showPassword: !user.showPassword } : user
        )); // Đồng bộ hóa trạng thái với kết quả tìm kiếm
    };


    // Tìm kiếm người dùng
    const handleSearch = (searchTerm) => {
        const filtered = users.filter(user =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <>
            <HeaderComponent ></HeaderComponent>
            <div className="user_tab">
                <div className="row">
                    <div className="col-sm-2">
                        <NavbarComponent></NavbarComponent>
                    </div>
                    <div className="col-sm-10">
                        <div className="container">
                            <h2 className="text-center mb-4">User Management</h2>
                            <SearchBar
                                onSearch={handleSearch}
                                placeholder="Search by full name or email..."
                            />
    
                            <UserTable
                                users={filteredUsers}
                                onDelete={deleteUser}
                                onTogglePassword={togglePasswordVisibility}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </>
    );
};

export default UserManagement;
