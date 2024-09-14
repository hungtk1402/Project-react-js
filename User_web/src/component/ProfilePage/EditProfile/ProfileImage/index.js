import React from 'react';
import AvatarUser from '../../../../img/avatarUser.jpg';

const ProfileImage = ({ profileImage, handleShowModal, handleDeleteImage }) => {
    return (
        <div className="form-group text-left">
            <label htmlFor="profileImage" className="form-label">Profile Image</label>
            <div className="profile-container">
                <img
                    src={profileImage || AvatarUser}
                    alt="Profile Preview"
                    className="img-fluid rounded-circle profile-image"
                    width="120"
                    height="120"
                />
                <div className="button-container mt-3">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm mr-2"
                        onClick={handleShowModal}
                    >
                        Upload
                    </button>
                    {profileImage && (
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={handleDeleteImage}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;
