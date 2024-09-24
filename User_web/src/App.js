import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './component/Context/UserContext/index'

import SignInForm from './component/SignInForm/index'
import SignUpForm from './component/SignUpForm/index'

import HeaderComponent from './component/HeaderAndFooter/HeaderComponent';
import FooterComponent from './component/HeaderAndFooter/FooterComponent';

import HomePage from './component/Homepage';
import ShopPage from './component/shopPage/shopPage';
import ProductDetail from './component/ProductDetail';
import CartPage from './component/CartPage';
import CheckoutPage from './component/CheckOutPage';
import ContactPage from './component/ContactPage/ContactPage';
import ProfilePage from './component/ProfilePage/ProfilePage';

function App() {
  const { user } = useContext(UserContext);

  // Nếu người dùng đã đăng nhập, hiển thị các trang
  if (user) {
    return (
      <>
        <div className="container-fluid">
          <HeaderComponent/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <FooterComponent/>
        </div>
      </>
    );
  }

  // Nếu chưa đăng nhập, chỉ hiển thị trang đăng nhập và đăng ký
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </div>
  );
}

export default App;
