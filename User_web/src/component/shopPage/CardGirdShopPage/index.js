import CardShopPage from "../cardShopPage";

const CardGirdShopPage = ({ products, onProductClick }) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                    <CardShopPage product={product} onClick={() => onProductClick(product._id)} />
                </div>
            ))}
        </div>
    );
};

export default CardGirdShopPage;