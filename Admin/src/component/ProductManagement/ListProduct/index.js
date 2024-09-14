import ProductCard from "../ProductCard";

const ListProduct = ({ products, onUpdate }) => {
    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <ProductCard product={product} onUpdate={onUpdate} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListProduct