import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import HeaderComponent from '../HeaderAndFooter/HeaderComponent';
import FooterComponent from '../HeaderAndFooter/FooterComponent';
import './CheckOut.css'
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import ConfirmationModal from './ConfirmationModal';

const CheckoutPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [form, setForm] = useState({
        fullName: user?.name || '',
        email: user?.email || '',
        phone: '',
        address: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    // Xác thực biểu mẫu khi dữ liệu biểu mẫu thay đổi
    useEffect(() => {
        const { fullName, email, phone, address } = form;
        if (fullName && email && phone && address) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [form]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    const confirmOrder = () => {
        setIsOrderPlaced(true);
        setShowConfirmation(false);

        // Clear cart and reset form
        setCart([]); // Clear the cart after placing order
        setForm({
            fullName: '',
            email: '',
            phone: '',
            address: ''
        });

        // Chuyển hướng đến HomePage sau khi confirm oder
        setTimeout(() => {
            navigate('/'); 
        }, 3000); // Trì hoãn 3 giây trước khi chuyển hướng
    };

    return (
        <div className="container-fluid">
            <HeaderComponent />
            <div className="container checkout-container">
                <div className="checkout-header">
                    <h2>CHECKOUT</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {!isOrderPlaced ? (
                            <CheckoutForm
                                form={form}
                                handleInputChange={handleInputChange}
                                handlePlaceOrder={handlePlaceOrder}
                                isFormValid={isFormValid}
                            />
                        ) : (
                            <div className="alert alert-success mt-3">
                                Order placed successfully! Redirecting to home...
                            </div>
                        )}
                    </div>

                    <div className="col-md-4">
                        <OrderSummary cart={cart} totalAmount={totalAmount} />
                    </div>
                </div>
            </div>

            <ConfirmationModal
                showConfirmation={showConfirmation}
                confirmOrder={confirmOrder}
                setShowConfirmation={setShowConfirmation}
            />
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default CheckoutPage;
