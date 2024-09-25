import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import './ProfilePage.css'
import ProfileTab from './ProfileTab';
import ProfileUser from './ProfileUser';
import EditProfileForm from './EditProfile';
import ChangePasswordForm from './ChangePassword';

const ProfilePage = () => {
    const { user, updateProfile, changePassword } = useContext(UserContext);
    const [activeTab, setActiveTab] = useState('overview');
    const [editProfileData, setEditProfileData] = useState(user || {});
    const [profileImage, setProfileImage] = useState(user?.profileImage || null);
    const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Reset message khi chuyển tab
    useEffect(() => {
        setMessage('');
        setMessageType('');
    }, [activeTab]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setProfileImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleEditProfileChange = (e) => {
        const { name, value } = e.target;
        setEditProfileData({ ...editProfileData, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleEditProfileSubmit = (e) => {
        e.preventDefault();
        // Gọi hàm updateProfile từ context
        updateProfile({ ...editProfileData, profileImage }, setMessage, setMessageType);
    };

    const handleDeleteImage = () => {
        setProfileImage(null); // Đặt hình ảnh thành null khi xóa.
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmNewPassword) {
            setMessage('Passwords do not match!');
            setMessageType('error');
            return;
        }
        // Gọi hàm changePassword từ context
        changePassword(passwordData.currentPassword, passwordData.newPassword, setMessage, setMessageType);
    };

    return (
        <>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileTab activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            {activeTab === 'overview' && <ProfileUser user={user} />}
                            {activeTab === 'edit-profile' && (
                                <EditProfileForm
                                    profileImage={profileImage}
                                    handleImageChange={handleImageChange}
                                    handleEditProfileChange={handleEditProfileChange}
                                    handleEditProfileSubmit={handleEditProfileSubmit}
                                    handleDeleteImage={handleDeleteImage}
                                    editProfileData={editProfileData}
                                    message={message}
                                    messageType={messageType}
                                    setProfileImage={setProfileImage}
                                />
                            )}
                            {activeTab === 'change-password' && (
                                <ChangePasswordForm
                                    passwordData={passwordData}
                                    handlePasswordChange={handlePasswordChange}
                                    handlePasswordSubmit={handlePasswordSubmit}
                                    message={message}
                                    messageType={messageType}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
