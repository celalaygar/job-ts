"use client";

import React, { useEffect, useState } from 'react';
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