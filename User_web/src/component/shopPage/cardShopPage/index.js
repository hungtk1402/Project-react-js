import { useNavigate } from 'react-router-dom';
const CardShopPage = ({ product }) => {
    const navigate = useNavigate();

    const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);

    const handleCardClick = () => {
        navigate(`/product/${product._id.$oid}`);
    };



    return (
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
        </div>
    );
};

export default CardShopPage;