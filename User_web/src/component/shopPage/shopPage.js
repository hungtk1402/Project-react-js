import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderComponent from "../HeaderAndFooter/HeaderComponent"
import FooterComponent from "../HeaderAndFooter/FooterComponent"
import NavbarShopPage from "./NavBar"
import CardGirdShopPage from './CardGirdShopPage';
import SearchBar from '../SearchBar';
import './shopPage.css'
const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(
        'All',
        'iphone',
        'macbook',
        'airpod',
        'watch',
        'mouse',
        'keyboard',
        'other'
    );

    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default'); 

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const selectedCategory = queryParams.get('category') || 'All';
        setCategory(selectedCategory);

        fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [location.search]);

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase()); 
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory); // Set the category
        setSearchQuery(''); // Xóa search quuery khi thay đổi danh mục.
    };


    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    
    const filteredProducts = products
        .filter(product => {
            const matchesCategory = category === 'All' || product.category === category;
            
            const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearchQuery;
        })
        .sort((a, b) => {
            if (sortOrder === 'priceAsc') {
                return a.price - b.price;
            } else if (sortOrder === 'priceDesc') {
                return b.price - a.price;
            } else {
                return 0; // Default order
            }
        });


    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <div className='container mb-4 mt-4'>
                <div className='row'>
                    <NavbarShopPage setCategory={handleCategoryChange} />
                    <div className="col-md-9">
                        <SearchBar onSearch={handleSearch} placeholder="Search products..." />
                        <div className="sort-options mt-3 mb-3">
                            <select className="form-select" value={sortOrder} onChange={handleSortChange}>
                                <option value="default">Default</option>
                                <option value="priceAsc">Price: Low to High</option>
                                <option value="priceDesc">Price: High to Low</option>
                            </select>
                        </div>
                        {loading ? (
                            <div className='spinner-container'>
                                <div className='spinner-border'></div>
                            </div>
                        ) : (
                            <CardGirdShopPage
                                products={filteredProducts}
                            />
                        )}
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}
export default ShopPage