import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        // Cập nhật localStorage khi người dùng thay đổi
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('User logged in:', userData)
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = (updatedUserData, setMessage, setMessageType) => {
        // Lấy danh sách người dùng từ localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Kiểm tra nếu email mới đã tồn tại trong danh sách users nhưng không phải của người dùng hiện tại
        const emailExists = users.some(u => u.email === updatedUserData.email && u.email !== user.email);

        if (emailExists) {
            // Nếu email đã tồn tại, thông báo lỗi
            setMessage('Email đã tồn tại. Vui lòng sử dụng email khác.');
            setMessageType('error'); 
            return; 
        }

        // Nếu email không tồn tại, tiếp tục cập nhật thông tin
        const updatedUser = { ...user, ...updatedUserData };
        setUser(updatedUser);

        // Cập nhật thông tin người dùng hiện tại trong localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));


        // Tìm vị trí của người dùng hiện tại trong danh sách users
        const updatedUsers = users.map(u => {
            if (u.email === user.email) {
                return updatedUser;  // Cập nhật thông tin người dùng
            }
            return u;
        });

        // Cập nhật lại danh sách người dùng trong localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setMessage('Profile updated successfully!');
        setMessageType('success');  // Thiết lập kiểu thông báo là thành công
    };


    const changePassword = (currentPassword, newPassword, setMessage, setMessageType) => {
        if (currentPassword === user.password) {
            const updatedUser = { ...user, password: newPassword };
            setUser(updatedUser);

            // Cập nhật mật khẩu người dùng hiện tại trong localStorage
            localStorage.setItem('user', JSON.stringify(updatedUser));

            // Lấy danh sách người dùng từ localStorage và cập nhật mật khẩu
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const updatedUsers = users.map(u => {
                if (u.email === user.email) {
                    return updatedUser;  // Cập nhật mật khẩu của người dùng
                }
                return u;
            });

            // Cập nhật lại danh sách người dùng trong localStorage
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setMessage('Password changed successfully!');
            setMessageType('success');

        } else {
            setMessage('Current password is incorrect!');
            setMessageType('error');
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateProfile, changePassword }}>
            {children}
        </UserContext.Provider>
    );
};
