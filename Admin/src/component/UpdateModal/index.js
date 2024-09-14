import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateModal = ({ show, handleClose, product, onUpdateProduct }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product || {})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Call the onUpdateProduct function passed as a prop
        onUpdateProduct(updatedProduct);
        handleClose(); // Close the modal after updating
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {Object.keys(product).map((key) => {
                        if (key !== "_id") {
                            return (
                                <Form.Group controlId={`form-${key}`} key={key}>
                                    <Form.Label>{key.replace('_', ' ').toUpperCase()}</Form.Label>
                                    <Form.Control
                                        type={typeof product[key] === "number" ? "number" : "text"}
                                        name={key}
                                        value={updatedProduct[key]}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            );
                        }
                        return null;
                    })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal;
