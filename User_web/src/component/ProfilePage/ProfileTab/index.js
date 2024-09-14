import React from 'react';

const ProfileTab = ({ activeTab, setActiveTab }) => {
    return (
        <div className="profile-tab">
            <ul>
                <li>
                    <button
                        className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <i className="fas fa-user"></i> My Profile
                    </button>
                </li>
                <li>
                    <button
                        className={`nav-link ${activeTab === 'edit-profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('edit-profile')}
                    >
                        <i className="fas fa-edit"></i> Edit Profile
                    </button>
                </li>
                <li>
                    <button
                        className={`nav-link ${activeTab === 'change-password' ? 'active' : ''}`}
                        onClick={() => setActiveTab('change-password')}
                    >
                        <i className="fas fa-key"></i> Change Password
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileTab;
