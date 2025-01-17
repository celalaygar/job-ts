import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import links from '../data/links'; // Linkleri içe aktar
import { setCookie, deleteCookie, getCookie } from 'cookies-next'; // Çerezleri ayarlamak, silmek ve almak için

const TopMenu = () => {
    const [user, setUser] = useState<{ firstName?: string; lastName?: string }>({}); // Kullanıcı bilgilerini saklamak için state oluştur

    useEffect(() => {
        const response = JSON.parse(getCookie('loginResponse') || '{}');
        if (response && response.user) {
            setUser({
                firstName: response.user.firstname,
                lastName: response.user.lastname
            });
        } else {
            console.error("Kullanıcı verileri loginResponse'da mevcut değil");
        }
    }, []);
    const handleLogout = () => {
        deleteCookie('loginResponse'); // Çerezdeki 'loginResponse' değerini sil
        window.location.href = links.home; // Ana sayfaya yönlendir
    };

    return (
        <AppBar position="static" sx={{ bgcolor: '#1e1e2f' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                {user.firstName && user.lastName && (
                    <Typography variant="body1" sx={{ marginRight: 2 }}>
                        {user.firstName} {user.lastName}
                    </Typography>
                )}
                <Button color="inherit" onClick={handleLogout}>Çıkış Yap</Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu; 