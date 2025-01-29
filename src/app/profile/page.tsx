"use client";

import React, { useEffect, useState } from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import { getCookie } from 'cookies-next'; // Çerezleri almak için
import MainFrameComponent from '@/components/MainFrameComponent';
import MyProfileMainPage from '@/components/profile/MyProfileMainPage';

const ProfilePage = () => {


    return (
        <>
            <MainFrameComponent title='Profilim'>
                <MyProfileMainPage />
            </MainFrameComponent>
        </>
    );
};

export default ProfilePage; 