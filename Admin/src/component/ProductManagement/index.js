import { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './ProductManagement.css'
import SearchBar from "../SearchBar"
import ListProduct from "./ListProduct"
import AddModal from '../Modal/AddModal';

const ProductManagement = () => {
    const { products, updateProduct, deleteProduct, addProduct } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(products);  // lấy thông tin sản phẩm sau khi việc tải hoàn tất
            setLoading(false)
        }
    }, [products]);


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


    // Xử lý thêm sản phẩm mới
    const handleAddProduct = (newProduct) => {
        // Gán một ID cho các sản phẩm mới
        newProduct._id = { $oid: (Math.random() * 100000).toFixed(0) };
        addProduct(newProduct);
    };

    return (
        <>
            <div className='container'>
                <h2 className="text-center mb-4">Product management</h2>
                <SearchBar onSearch={handleSearch} placeholder="Search product..." />
                <div className='add_product'>
                    <button className="btn btn_add mb-4" onClick={() => setShowAddModal(true)} >
                        Add product
                    </button>
                </div>
                {loading ? (
                    <div className='spinner-container'>
                        <div className='spinner-border'></div>
                    </div>
                ) : (
                    <ListProduct products={filteredProducts} onUpdate={updateProduct} onDelete={deleteProduct} />
                )}
            </div>
            <AddModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                onAddProduct={handleAddProduct}
            />
        </>
    )
}

export default ProductManagement