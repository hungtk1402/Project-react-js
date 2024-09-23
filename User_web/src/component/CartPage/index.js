import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderAndFooter/HeaderComponent';
import FooterComponent from '../HeaderAndFooter/FooterComponent';
import "./CartPage.css"

const CartPage = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);


    return (
        <div className="container-fluid">
            <HeaderComponent />
            <div className="container cart-container">
                <h1 className="cart-header">Cart</h1>

                <div className='row'>
                    {cart.length === 0 ? (
                        <div className="col-sm-8">
                            <h2>Your cart is empty</h2>
                            <Link to="/shop" className="btn btn-dark mt-3">
                                <span className='fas fa-chevron-left'></span>
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="col-sm-8">
                            {cart.map((item, index) => (
                                <div className="cart-item row align-items-center" key={index}>
                                    <div className="col">
                                        <img src={item.product.img1} alt={item.product.name} />
                                    </div>
                                    <div className="col-3 cart-item-name">
                                        {item.product.name}
                                    </div>
                                    <div className="col">
                                        {new Intl.NumberFormat('vi-VN').format(item.product.price)} VND
                                    </div>
                                    <div className="col">
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => {
                                                const newQuantity = Math.max(1, parseInt(e.target.value));
                                                newQuantity > item.quantity
                                                    ? increaseQuantity(item.product._id.$oid)
                                                    : decreaseQuantity(item.product._id.$oid);
                                            }}
                                        />
                                    </div>
                                    <div className="col">
                                        {new Intl.NumberFormat('vi-VN').format(item.product.price * item.quantity)} VND
                                    </div>
                                    <div className="col text-right">
                                        <span
                                            className="fas fa-trash-alt remove-item"
                                            onClick={() => removeFromCart(item.product._id.$oid)}
                                            style={{ cursor: 'pointer' }}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                            <Link to="/shop" className="btn btn-dark mt-3">
                                <span className='fas fa-chevron-left'></span>
                                Continue Shopping
                            </Link>
                        </div>
                    )}
                    <div className="col-sm-4">
                        <div className="cart-total">
                            <h5>Cart Total</h5>
                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span>{new Intl.NumberFormat('vi-VN').format(totalAmount)} VND</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Total</span>
                                <span>{new Intl.NumberFormat('vi-VN').format(totalAmount)} VND</span>
                            </div>
                            <input type="text" className="form-control mt-3 coupon-input" placeholder="Enter your coupon" />
                            <button className="btn btn-outline-secondary mt-2">Apply coupon</button>
                            <Link
                                to="/checkout"
                                className={`btn btn-success mt-3 ${cart.length === 0 ? 'disabled-link' : ''}`}
                                onClick={(e) => {
                                    if (cart.length === 0) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default CartPage;
