import { useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate, Link } from 'react-router-dom';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Vui lòng nhập thông tin tài khoản');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            login(user);
            navigate('/');
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className='loginComponent'>
            <div ></div>
            <div className="form-container text-center">
                <h2 className='title_login'>Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Sign In</button>
                </form>
                {/* <p className="mt-3">Don't have an account? <button onClick={() => toggleForm('signup')}>Sign up</button></p> */}
                <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    );
};

export default SignInForm;
