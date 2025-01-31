"use client";

import React, { useEffect, useState } from 'react';
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