import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateModal = ({ show, handleClose, product, onUpdateProduct }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product || {});

    // Đồng bộ sản phẩm đã cập nhật khi thuộc tính sản phẩm thay đổi
    useEffect(() => {
        if (product) {
            setUpdatedProduct(product); // Điền sẵn dữ liệu sản phẩm hiện tại vào modal
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'price' || name === 'quantity') {
            const validValue = Math.max(0, Number(value)); // không cho số âm 
            setUpdatedProduct(prevState => ({
                ...prevState,
                [name]: validValue
            }));
        } else {
            setUpdatedProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = () => {
        onUpdateProduct(updatedProduct); // Gọi hàm để cập nhật sản phẩm
        handleClose(); 
    };

    // Define product fields (in the same order as AddModal)
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
                <Modal.Title>Update Product</Modal.Title>
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
                                value={updatedProduct[field.name] || ""}
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
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal;
