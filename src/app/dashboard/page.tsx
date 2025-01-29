"use client";

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import links from '../../data/links'; // Linkleri içe aktar
import { getCookie } from 'cookies-next'; // Çerezleri almak için
import Sidebar from '../../components/Sidebar'; // Yeni Sidebar bileşeni
import TopMenu from '../../components/TopMenu'; // Yeni TopMenu bileşeni
import tasks from '@/data/tasks';
import Link from 'next/link';
import projects from '@/data/project';
import DashboardMainPage from '@/components/dashboard/DashboardMainPage';
import MainFrameComponent from '@/components/MainFrameComponent';




const Dashboard: React.FC = () => {


    return (
        <>
            <MainFrameComponent title=''>
                <DashboardMainPage />
            </MainFrameComponent>
        </>
    );
};

export default Dashboard; 