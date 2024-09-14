import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user, logout } = useContext(UserContext);
    const [cart, setCart] = useState([]);

    console.log('user', user);

    // Lấy giỏ hàng từ localStorage khi người dùng đăng nhập
    useEffect(() => {
        if (user) {
            const storedCart = localStorage.getItem(`cart_${user.email}`);
            setCart(storedCart ? JSON.parse(storedCart) : []);
            console.log('cart', user.email)
        } else {
            setCart([]);  // Làm trống giỏ hàng khi không có người dùng
        }
    }, [user]);

    // Lưu giỏ hàng vào localStorage khi giỏ hàng thay đổi và có người dùng đăng nhập
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
        }
    }, [cart, user]);


    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.product._id.$oid === product._id.$oid);

            if (existingProduct) {
                // Cập nhật số lượng nếu sản phẩm đã có trong giỏ hàng
                return prevCart.map(item =>
                    item.product._id.$oid === product._id.$oid
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Thêm sản phẩm mới vào giỏ hàng
                return [...prevCart, { product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.product._id.$oid !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.product._id.$oid === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.product._id.$oid === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // reset lại giỏ hàng khi người dùng đăng xuất
    const handleLogout = () => {
        setCart([]);  // Xóa giỏ hàng khi người dùng đăng xuất
        logout();  // Gọi hàm logout từ UserContext
    };

    return (
        <CartContext.Provider value={{ cart,setCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, handleLogout }}>
            {children}
        </CartContext.Provider>
    );
};
