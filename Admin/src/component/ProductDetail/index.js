import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../Context/ProductContext';
import ImageGallery from './ImageGallery';
import UpdateModal from '../Modal/UpdateModal';
import DeleteModal from '../Modal/DeleteModal';


const ProductDetail = () => {
    const { productId } = useParams();
    const { products, updateProduct, deleteProduct } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProductDetail = (id) => {
            const foundProduct = products.find(p => p._id.$oid === id);
            setProduct(foundProduct);
            setLoading(false); // Chỉ dừng loading sau khi tìm sản phẩm
        };

        if (products.length > 0) {
            fetchProductDetail(productId);
        } else {
            setLoading(true); // Đảm bảo loading đúng nếu chưa có sản phẩm
        }
    }, [productId, products]); // Tải lại chi tiết sản phẩm khi sản phẩm hoặc trạng thái tải thay đổi



    const handleDeleteProduct = () => {
        setShowDeleteModal(true); // Hiển thị DeleteModal
    };

    const confirmDelete = (id) => {
        deleteProduct(id);  // Xóa sản phẩm
        setProduct(null);
    };

    if (loading) {
        return (
            <div className='spinner-container'>
                <div className='spinner-border'></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container not-found-container">
                <h1 className="not-found-title">404</h1>
                <h4 className="not-found-subtitle">Page not found</h4>
                <button className="btn btn-primary not-found-button" onClick={() => navigate('/admin/product')}>
                    Back to Product Management
                </button>
            </div>
        );
    }

    const handleUpdateProduct = (updatedProduct) => {
        updateProduct(updatedProduct);
        setProduct(updatedProduct);
    };


    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <>
            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <ImageGallery
                            img1={product.img1}
                            img2={product.img2}
                            img3={product.img3}
                            img4={product.img4}
                        />
                    </div>
                    <div className='col-md-6'>
                        <h2>{product.name}</h2>
                        <p>{new Intl.NumberFormat('vi-VN').format(product.price)} VND</p>
                        <p>{product.short_desc}</p>
                        <div className="quantity pb-3">
                            <p><strong>Quantity:</strong> {product.quantity}</p>
                        </div>
                        <button className="btn btn-dark btn-block" onClick={() => setShowUpdateModal(true)}>Update Product</button>
                        <button className="btn btn-danger btn-block mt-2" onClick={handleDeleteProduct}>Delete Product</button>
                    </div>
                </div>
                <div className='description pt-5 pb-5'>
                    <button className='btn btn-dark btn-block' onClick={toggleDescription}>Description</button>
                    {showDescription && (
                        <div className="product-description pt-2">
                            <h2>Product Description</h2>
                            <p>{product.long_desc}</p>
                        </div>
                    )}
                </div>
            </div>

            <UpdateModal
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={product}
                onUpdateProduct={handleUpdateProduct}
            ></UpdateModal>

            <DeleteModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                product={product}
                onDeleteProduct={confirmDelete}
            ></DeleteModal>
        </>

    );
};

export default ProductDetail;
