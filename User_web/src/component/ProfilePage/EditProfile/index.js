import { useState } from 'react';
import ProfileImage from './ProfileImage';
import ProfileModal from './ProfileModal';

const EditProfileForm = ({
    profileImage,
    handleImageChange,
    handleEditProfileChange,
    handleEditProfileSubmit,
    handleDeleteImage,
    editProfileData,
    message,
    messageType,
}) => {

    const [showModal, setShowModal] = useState(false);

    const labelProfile = [
        { label: "Full Name", name: "name" },
        { label: "Company", name: "company" },
        { label: "Job", name: "job" },
        { label: "Country", name: "country" },
        { label: "Address", name: "address" },
        { label: "Phone", name: "phone" },
        { label: "Email", name: "email", type: "email" }
    ]

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);


    return (
        <div className="profile-section">
            {message && (
                <div className={`alert alert-${messageType === 'success' ? 'success' : 'danger'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleEditProfileSubmit}>
                <ProfileImage
                    profileImage={profileImage}
                    handleShowModal={handleShowModal}
                    handleDeleteImage={handleDeleteImage}
                />
                {labelProfile.map(({ label, name, type = "text" }) => (
                    <div className="form-group text-left" key={name}>
                        <label htmlFor={name} className="form-label">{label}</label>
                        {type === "textarea" ? (
                            <textarea
                                className="form-control"
                                id={name}
                                name={name}
                                value={editProfileData[name] || ''}
                                onChange={handleEditProfileChange}
                            />
                        ) : (
                            <input
                                type={type}
                                className="form-control"
                                id={name}
                                name={name}
                                value={editProfileData[name] || ''}
                                onChange={handleEditProfileChange}
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>

            <ProfileModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleImageChange={handleImageChange}
            />
        </div>
    );
};

export default EditProfileForm;
