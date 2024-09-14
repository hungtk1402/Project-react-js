const ChangePasswordForm = ({
    passwordData,
    handlePasswordChange,
    handlePasswordSubmit,
    message,
    messageType
}) => {
    return (
        <div className="profile-section changePassword">
            {message && (
                <div className={`alert alert-${messageType === 'success' ? 'success' : 'danger'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handlePasswordSubmit}>
                <div className="form-group text-left">
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="confirmNewPassword" className="form-label">Re-enter New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        value={passwordData.confirmNewPassword}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
