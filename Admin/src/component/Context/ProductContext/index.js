import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Kiểm tra xem có sản phẩm nào được lưu trữ cục bộ không
                const storedProducts = localStorage.getItem('products');
                if (storedProducts) {
                    setProducts(JSON.parse(storedProducts)); // Tải từ localStorage nếu có sẵn
                } else {
                    const response = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74");
                    const data = await response.json();
                    setProducts(data); 
                    localStorage.setItem('products', JSON.stringify(data)); 
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } 
        };

        fetchProducts();
    }, []); 


    const addProduct = (newProduct) => {
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts)); 
    };

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map(product =>
            product._id.$oid === updatedProduct._id.$oid ? updatedProduct : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts)); 
    };

    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product._id.$oid !== id);
        setProducts(updatedProducts);
    };


    return (
        <ProductContext.Provider value={{ products, updateProduct, deleteProduct, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
}