import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateModal from '../../UpdateModal';

const ProductCard = ({ product, onUpdate }) => {
    const navigate = useNavigate();
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);

    const handleCardClick = () => {
        navigate(`/admin/product/${product._id.$oid}`);
    };

    const handleUpdateProduct = (updatedProduct) => {
        onUpdate(updatedProduct);  // Gọi hàm onUpdate từ props để cập nhật danh sách sản phẩm
        setShowUpdateModal(false);
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
                        <p className="card-text text-center">{formattedPrice} VND</p>
                    </div>
                </div>
                <button className="btn btn-dark btn-block" onClick={() => setShowUpdateModal(true)}>Update</button>
                <button className="btn btn-danger btn-block mt-2">Delete</button>
            </div>

            <UpdateModal
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={product}
                onUpdateProduct={handleUpdateProduct}
            ></UpdateModal>
        </>
    )
}

export default ProductCard