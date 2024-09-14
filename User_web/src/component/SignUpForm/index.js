import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !phone) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }
        if (password.length < 8) {
            alert('Mật khẩu tối thiểu 8 ký tự');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.find(user => user.email === email);
        const phoneExists = users.find(user => user.phone === phone);

        if (emailExists) {
            alert('Email đã được đăng ký');
        } else if (phoneExists) {
            alert('Số điện thoại đã được đăng ký');
        } else {
            const newUser = { name, email, password, phone };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Đăng ký thành công!');
            navigate('/signin');  // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
        }
    };

    return (
        <div className='loginComponent'>
            <div className="form-container text-center">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                </form>
                <p className="mt-3">Have an account? <Link to="/signin">Sign in</Link></p>
            </div>
        </div>
    );
};

export default SignUpForm;
