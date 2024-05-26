import React, { useState } from 'react';
import { register } from '../../services/api';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register({ email, password });
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleRegister}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Register;
