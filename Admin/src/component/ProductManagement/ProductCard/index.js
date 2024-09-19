import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateModal from '../../Modal/UpdateModal';
import DeleteModal from '../../Modal/DeleteModal';

const ProductCard = ({ product, onUpdate, onDelete }) => {
    const navigate = useNavigate();
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);

    const handleCardClick = () => {
        navigate(`/admin/product/${product._id.$oid}`);
    };

    const handleUpdateProduct = (updatedProduct) => {
        onUpdate(updatedProduct);  // Gọi hàm onUpdate từ props để cập nhật danh sách sản phẩm
        setShowUpdateModal(false);
    };


    const handleDeleteProduct = () => {
        setShowDeleteModal(true);  // Hiển thị DeleteModal
    };

    return (
        <>
            <div className="card product-card h-100" style={{ cursor: 'pointer' }}>
                <div onClick={handleCardClick}>
                    <div className="card-img-wrapper">
                        <img src={product.img1} className="card-img-top" alt={product.name} />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title text-center">{product.name}</h5>
                        <p className="card-text"> <strong>Price:</strong> {formattedPrice} VND</p>
                        <p><strong>Quantity:</strong> {product.quantity}</p>
                    </div>
                </div>
                <button className="btn btn-dark btn-block" onClick={() => setShowUpdateModal(true)}>Update</button>
                <button className="btn btn-danger btn-block mt-2" onClick={handleDeleteProduct}>Delete</button>
            </div>



            <UpdateModal
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={product}
                onUpdateProduct={handleUpdateProduct}
            />

            <DeleteModal
                show={showDeleteModal}  // Hiển thị DeleteModal
                handleClose={() => setShowDeleteModal(false)}  // Đóng modal
                product={product}
                onDeleteProduct={onDelete}  // Hàm xóa sản phẩm từ props
            />
        </>
    )
}

export default ProductCard