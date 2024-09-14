import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Hàm xử lý điều hướng đến trang giỏ hàng
    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <button className="btn" onClick={goToCart} data-toggle="modal" data-target="#cartModal">
            <i className='fas fa-shopping-cart'></i> (<span id="cartCount">{totalItems}</span>)
        </button>
    );
};

export default CartIcon;