"use client";

import React, { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import Login from '../components/Login';
import Register from '../components/Register';
import ClientLayout from './ClientLayout';
import links from '../data/links';

const HomePage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ClientLayout>
            <Box
                sx={{
                    width: '100%',
                    typography: 'body1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10px'
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="giriş ve kayıt sekmeleri">
                    <Tab label="Giriş" />
                    <Tab label="Kayıt Ol" />
                </Tabs>
                {value === 0 && <Login />}
                {value === 1 && <Register />}
            </Box>
        </ClientLayout>
    );
};

export default HomePage;
