import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUpAdmin = () => {
    const [fullName, setFullName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!fullName || !employeeId || !email || !phone || !password) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }
        if (password.length < 8) {
            alert('Mật khẩu tối thiểu 8 ký tự');
            return;
        }

        const admins = JSON.parse(localStorage.getItem('admins')) || [];
        const emailExists = admins.find(admin => admin.email === email);
        const employeeIdExists = admins.find(admin => admin.employeeId === employeeId);

        if (emailExists) {
            alert('Email đã được đăng ký');
        } else if (employeeIdExists) {
            alert('Mã nhân viên đã được đăng ký');
        } else {
            const newAdmin = { fullName, employeeId, email, phone, password };
            admins.push(newAdmin);
            localStorage.setItem('admins', JSON.stringify(admins));
            alert('Đăng ký thành công!');
            navigate('/admin/signin');  // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
        }
    };

    return (
        <div className='loginComponent'>
            <div className="form-container text-center">
                <h2>Admin Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                </form>
                <p className="mt-3">Don't have an account? <Link to="/admin/signin">Sign in</Link></p>
            </div>
        </div>
    );
};

export default SignUpAdmin;
