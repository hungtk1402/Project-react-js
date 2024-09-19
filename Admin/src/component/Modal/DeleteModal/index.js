import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ show, handleClose, product, onDeleteProduct }) => {
    const handleDelete = () => {
        // Gọi hàm onDeleteProduct đã được truyền từ props để thực hiện xóa sản phẩm
        onDeleteProduct(product._id.$oid);
        handleClose(); // Đóng modal sau khi xóa
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the product <strong>{product.name}</strong>?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
