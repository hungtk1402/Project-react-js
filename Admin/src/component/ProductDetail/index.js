import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderComponent from '../HeaderAndFooter/HeaderComponent';
import FooterComponent from '../HeaderAndFooter/FooterComponent';
import ImageGallery from './ImageGallery';
import UpdateModal from '../UpdateModal';


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDescription, setShowDescription] = useState(false);
    const [quantity, setQuantity] = useState(10);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProductDetail(productId);
    }, [productId]);

    const fetchProductDetail = async (id) => {
        try {
            const response = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
            const data = await response.json();
            const foundProduct = data.find(p => p._id.$oid === id);
            setProduct(foundProduct);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product data:", error);
            setLoading(false);
        }
    };



    if (loading) {
        return (
            <div className='spinner-container'>
                <div className='spinner-border'></div>
            </div>);
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleUpdateProduct = (updatedProduct) => {
        // Xử lý API hoặc cập nhật state của sản phẩm tại đây
        setProduct(updatedProduct);  // Cập nhật sản phẩm trong state
    };

    const handleDeleteProduct = () => {
        // Implement API call to delete the product (mocked here)
        alert(`Product ${product.name} has been deleted!`);
        navigate('/admin/product');  // Redirect to product management after deletion
    };

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <div className="container-fluid">
            <HeaderComponent />
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
                            <label htmlFor="quantity"><strong>Quantity:</strong></label>
                            <input type="number" id="quantity" name="quantity" min="1" max="100" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
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
            <FooterComponent />


            <UpdateModal
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={product}
                onUpdateProduct={handleUpdateProduct}
            ></UpdateModal>
        </div>
    );
};

export default ProductDetail;
