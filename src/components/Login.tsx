import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import dummyUser from '../data/dummyUser';
import loginResponse from '../data/loginResponse';
import links from '../data/links';
import { setCookie } from 'cookies-next';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === dummyUser.email && password === dummyUser.password) {
            setCookie('loginResponse', JSON.stringify(loginResponse));
            window.location.href = '/dashboard';
        } else {
            alert('Geçersiz e-posta veya şifre');
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto shadow-lg border p-4">
            <TextField 
                label="E-posta" 
                type="email" 
                fullWidth 
                margin="normal" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
            />
            <TextField 
                label="Şifre" 
                type="password" 
                fullWidth 
                margin="normal" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
            />
            <div className="flex justify-end mt-4">
                <Button variant="contained" color="primary" onClick={handleLogin}>Giriş Yap</Button>
            </div>
        </div>
    );
};

export default Login; 