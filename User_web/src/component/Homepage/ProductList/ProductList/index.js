import { useEffect, useState } from 'react';
import ProductCard from "../ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            .then(response => response.json())
            .then(data => {
                // Giới hạn hạn 8 sản phẩm dầu tiên
                const firstEightProducts = data.slice(0, 8);
                setProducts(firstEightProducts);
            });
    }, []);

    return (
        <div className="container">
            <h6 className="pt-5">MADE THE HARD WAY</h6>
            <h3 className="pb-3">Top Trending Products</h3>
            <div className="row">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;