import { useState, useEffect } from 'react';
import HeaderComponent from "../HeaderAndFooter/HeaderComponent"
import NavbarComponent from "../NavbarComponent"
import SearchBar from "../SearchBar"
import './ProductManagement.css'
import ListProduct from "./ListProduct"
const ProductManagenment = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };


    // Hàm cập nhật sản phẩm
    const handleProductUpdate = (updatedProduct) => {
        const updatedProducts = products.map(product =>
            product._id.$oid === updatedProduct._id.$oid ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts); // Cập nhật cả danh sách đã lọc
    };
    
    // Hàm xử lý tìm kiếm sản phẩm
    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredProducts(products); // Nếu ô tìm kiếm rỗng, hiển thị tất cả sản phẩm
        } else {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className="row">
                <div className='col-sm-2'>
                    <NavbarComponent></NavbarComponent>
                </div>
                <div className="col-sm-10">
                    <div className='container'>
                        <h2 className="text-center mb-4">Product management</h2>
                        <SearchBar
                            onSearch={handleSearch}
                            placeholder="Search product..."
                        />
                        {loading ? (
                            <div className='spinner-container'>
                                <div className='spinner-border'></div>
                            </div>
                        ) : (
                            <ListProduct products={filteredProducts} onUpdate={handleProductUpdate} />
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductManagenment