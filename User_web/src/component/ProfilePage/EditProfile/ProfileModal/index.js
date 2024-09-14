import { Modal, Button } from 'react-bootstrap';

const ProfileModal = ({ showModal, handleCloseModal, handleImageChange }) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header >
                <Modal.Title>Upload Profile Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="file"
                    className="form-control"
                    id="profileImage"
                    onChange={(e) => {
                        handleImageChange(e);
                        handleCloseModal(); // Close modal after image selection
                    }}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProfileModal;
