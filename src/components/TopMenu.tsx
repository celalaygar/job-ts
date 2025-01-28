import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import links from '../data/links'; // Linkleri içe aktar
import { setCookie, deleteCookie, getCookie } from 'cookies-next'; // Çerezleri ayarlamak, silmek ve almak için

const TopMenu = () => {
    const [user, setUser] = useState<{ firstName?: string; lastName?: string, email: string }>({}); // Kullanıcı bilgilerini saklamak için state oluştur

    useEffect(() => {
        const response = JSON.parse(getCookie('loginResponse') || '{}');
        if (response && response.user) {
            setUser({
                firstName: response.user.firstname,
                lastName: response.user.lastname,
                email: response.user.email
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
        <AppBar position="static" style={{ backgroundColor: '#eeecee ', color: "#000000" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                {user.firstName && user.lastName && user.email && (
                    <>
                        <div className="text-black m-4">
                            {user.email}
                        </div>
                        <div className="text-black m-4">
                            {user.firstName} {user.lastName}
                        </div>
                    </>
                )}
                <Button color="inherit" onClick={handleLogout}>Çıkış Yap</Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu; 