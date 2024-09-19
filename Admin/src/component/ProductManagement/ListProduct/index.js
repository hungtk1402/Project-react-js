import ProductCard from "../ProductCard";

const ListProduct = ({ products, onUpdate, onDelete }) => {
    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <ProductCard product={product} onUpdate={onUpdate} onDelete={onDelete} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListProduct