"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import tasks from '../../data/tasks';
import Link from 'next/link';
import MainFrameComponent from '@/components/MainFrameComponent';
import BacklogMainPage from '@/components/backlog/BacklogMainPage';

const BacklogPage = () => {
    return (
        <>
            <MainFrameComponent title='Backlog'>
                <BacklogMainPage />
            </MainFrameComponent>
        </>
    );
};

export default BacklogPage; 