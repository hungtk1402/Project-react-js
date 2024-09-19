import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import { Link } from 'react-router-dom';


const SignInAdmin = ({ setIsAuthenticated }) => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AdminContext);  // Context đăng nhập cho admin
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!employeeId || !password) {
            alert('Vui lòng nhập thông tin tài khoản');
            return;
        }

        const admins = JSON.parse(localStorage.getItem('admins')) || [];
        const admin = admins.find(admin => admin.employeeId === employeeId && admin.password === password);
        if (admin) {
            login(admin);
            navigate('/admin');  // Điều hướng đến trang admin sau khi đăng nhập thành công
        } else {
            alert('Mã nhân viên hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className='loginComponent'>
            <div className="form-container text-center">
                <h2 className='title_login'>Admin Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Sign In</button>
                </form>
                <p className="mt-3">Don't have an account? <Link to="/admin/signup">Sign up</Link></p>
            </div>
        </div>
    );
};

export default SignInAdmin;
