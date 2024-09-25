import { useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate, Link } from 'react-router-dom';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage('Vui lòng nhập thông tin tài khoản');
            setMessageType('error');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            login(user);
            navigate('/');
        } else {
            setMessage('Tài khoản hoặc mật khẩu không đúng');
            setMessageType('error');
        }
    };

    return (
        <div className='loginComponent'>
            <div className="form-container text-center">
                <h2 className='title_login'>Sign In</h2>
                {message && (
                    <div className={`alert alert-${messageType === 'success' ? 'success' : 'danger'}`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">Sign In</button>
                </form>
                <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    );
};

export default SignInForm;
