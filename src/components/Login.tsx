"use client";

import React, { useState } from 'react';
import { TextField, Button, Alert, Collapse } from '@mui/material';
import dummyUser from '../data/dummyUser';
import links from '../data/links';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const router = useRouter();
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = useState(false);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (res?.error) {
            setError("Invalid email or password");
            setOpen(true)
        } else {
            router.push("/dashboard")
        }
        setLoading(false)

        /*
        if (email === dummyUser.email && password === dummyUser.password) {
            setCookie('loginResponse', JSON.stringify(loginResponse));
            //window.location.href = '/dashboard';
            router.push("/dashboard")
        } else {
            alert('Geçersiz e-posta veya şifre');
        }
        */
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
            {error &&
                <Collapse in={open}>
                    <Alert severity="error" onClose={() => { setOpen(false); }}>
                        {error}
                    </Alert>
                </Collapse>
            }
            <div className="flex justify-end mt-4">
                <Button disabled={loading} variant="contained" color="primary" onClick={handleLogin}>Giriş Yap</Button>
            </div>
        </div>
    );
};

export default Login; 