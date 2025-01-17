"use client";

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import links from '../../data/links'; // Linkleri içe aktar
import { getCookie } from 'cookies-next'; // Çerezleri almak için
import Sidebar from '../../components/Sidebar'; // Yeni Sidebar bileşeni
import TopMenu from '../../components/TopMenu'; // Yeni TopMenu bileşeni

const Dashboard = () => {
    

    return (
        <Box>
            <TopMenu /> {/* Üst menüyü burada kullanıyoruz */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1, padding: '16px' }}>
                    <h1 className="text-2xl font-bold mb-4">Gösterge Paneli</h1>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard; 