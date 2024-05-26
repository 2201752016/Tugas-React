import React, { useState } from 'react';
import { login } from '../../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
