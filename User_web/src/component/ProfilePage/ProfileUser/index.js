import AvatarUser from '../../../img/avatarUser.jpg'

const ProfileUser = ({ user }) => {
    return (
        <div className="profile-section text-center">
            <img src={user.profileImage || AvatarUser} alt="Profile" className="profile-pic" />
            <h3 className="mb-0">{user.name}</h3>
            <p className="text-muted">{user.job || 'No job specified'}</p>
            <div className="text-left mt-4">
                <p><strong>Full Name: </strong>{user.name}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Country: </strong>{user.country || 'N/A'}</p>
                <p><strong>Phone: </strong>{user.phone || 'N/A'}</p>
                <p><strong>Address: </strong>{user.address || 'N/A'}</p>
            </div>
        </div>
    );
};

export default ProfileUser;
