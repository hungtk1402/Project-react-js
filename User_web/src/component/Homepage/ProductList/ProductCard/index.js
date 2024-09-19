import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${product._id.$oid}`);
    }
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);

    return (
        <div className="col-md-3 mb-4" >
            <div
                className="card cardHomePage d-flex flex-column h-100"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <img
                    src={product.img1}
                    className="card-img-top product-img"
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{formattedPrice} VND</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;