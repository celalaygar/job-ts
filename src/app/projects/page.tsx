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
import ProjectsMainPage from '@/components/projects/ProjectsMainPage';
import MainFrameComponent from '@/components/MainFrameComponent';

const Projects = () => {

    return (
        <>
            <MainFrameComponent title='Projeler'>
                <ProjectsMainPage />
            </MainFrameComponent>
        </>
    );
};

export default Projects; 