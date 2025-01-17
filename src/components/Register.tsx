import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleRegister = () => {
        if (!email || !password || !firstName || !lastName || !birthDate) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        // Proceed with registration logic
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Format the date to dd/mm/yyyy
        const [year, month, day] = value.split('-');
        setBirthDate(`${day}/${month}/${year}`);
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
            <TextField 
                label="Ad" 
                fullWidth 
                margin="normal" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size="small"
            />
            <TextField 
                label="Soyad" 
                fullWidth 
                margin="normal" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size="small"
            />
            <TextField 
                label="Doğum Tarihi" 
                type="date" 
                fullWidth 
                margin="normal" 
                InputLabelProps={{ shrink: true }} 
                value={birthDate.split('/').reverse().join('-')}
                onChange={handleDateChange}
                size="small"
            />
            <div className="flex justify-end mt-4">
                <Button variant="contained" color="primary" onClick={handleRegister}>Kayıt Ol</Button>
            </div>
        </div>
    );
};

export default Register; 