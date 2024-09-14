import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext/index'
import HeaderComponent from '../HeaderAndFooter/HeaderComponent';
import FooterComponent from '../HeaderAndFooter/FooterComponent';
import CardGirdShopPage from '../shopPage/CardGirdShopPage';
import ImageGallery from './ImageGallery';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDescription, setShowDescription] = useState(false);
    const { addToCart } = useContext(CartContext);  // Sử dụng context để cập nhật giỏ hàng

    useEffect(() => {
        fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => {
                const foundProduct = data.find(p => p._id.$oid === productId);
                setProduct(foundProduct);

                // Lọc các sản phẩm liên quan theo category
                const related = data.filter(p => p.category === foundProduct.category && p._id.$oid !== productId);
                setRelatedProducts(related);

                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return (
            <div className='spinner-container'>
                <div className='spinner-border'></div>
            </div>);
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    // Hàm để xử lý việc hiển thị mô tả
    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    // Hàm để thêm sản phẩm vào giỏ hàng
    const handleAddToCart = () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(product, quantity);
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
                        <p><strong>Category:</strong> {product.category}</p>
                        <div className="quantity pb-3">
                            <label htmlFor="quantity"><strong>Quantity:</strong></label>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" />
                        </div>
                        <button className="btn btn-dark btn-block" onClick={handleAddToCart}>Add to cart</button>
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
                <div className="related-products">
                    <h4>Related Products</h4>
                    <CardGirdShopPage products={relatedProducts} />
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default ProductDetail;
