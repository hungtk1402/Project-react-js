import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddModal = ({ show, handleClose, onAddProduct }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        category: "",
        short_desc: "",
        long_desc: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        quantity: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'price' || name === 'quantity') {
            const validValue = Math.max(0, Number(value)); // không cho số âm 
            setNewProduct(prevState => ({
                ...prevState,
                [name]: validValue
            }));
        } else {
            setNewProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = () => {
        onAddProduct(newProduct); // Gọi hàm để thêm sản phẩm
        handleClose(); 
    };

    const fields = [
        { label: "Name", type: "text", name: "name" },
        { label: "Price", type: "number", name: "price" },
        { label: "Category", type: "text", name: "category" },
        { label: "Short Description", type: "textarea", name: "short_desc", rows: 3 },
        { label: "Long Description", type: "textarea", name: "long_desc", rows: 5 },
        { label: "Image URL 1", type: "text", name: "img1" },
        { label: "Image URL 2", type: "text", name: "img2" },
        { label: "Image URL 3", type: "text", name: "img3" },
        { label: "Image URL 4", type: "text", name: "img4" },
        { label: "Quantity", type: "number", name: "quantity" }
    ];

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {fields.map(field => (
                        <Form.Group controlId={`form-${field.name}`} key={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                as={field.type === "textarea" ? "textarea" : "input"}
                                type={field.type !== "textarea" ? field.type : undefined}
                                name={field.name}
                                value={newProduct[field.name]}
                                onChange={handleChange}
                                rows={field.rows || 1}
                            />
                        </Form.Group>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Product
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddModal;
