import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminContext} from './component/Context/AdminContext'
import SignInAdmin from './component/SigninAdmin/index'
import SignUpAdmin from './component/SignUpAdmin/index'
import DashboardPage from './component/DashboardPage/index'
import ProductManagenment from './component/ProductManagement';
import UserManagement from './component/UserManagement/UserManagement';
import OrderManagement from './component/OrderManagement';
import ProductDetail from './component/ProductDetail';


function App() {
  const { admin } = useContext(AdminContext);

  // Nếu admin đã đăng nhập, hiển thị các trang admin
  if (admin) {
    return (
      <>
        <div className="container-fluid">
          <Routes>
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/admin/product" element={<ProductManagenment />} />
            <Route path="/admin/product/:productId" element={<ProductDetail />} />
            <Route path="/admin/user" element={<UserManagement />} />
            <Route path="/admin/order" element={<OrderManagement />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </Routes>
        </div>
      </>
    );
  }

  // Nếu chưa đăng nhập, chỉ hiển thị trang đăng nhập và đăng ký
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/admin/signin" element={<SignInAdmin />} />
        <Route path="/admin/signup" element={<SignUpAdmin />} />
        <Route path="*" element={<Navigate to="/admin/signin" />} />
      </Routes>
    </div>
  );
}

export default App;
