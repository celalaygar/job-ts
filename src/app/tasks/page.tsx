"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import tasks from '../../data/tasks'; // Import tasks data
import Link from 'next/link'; // Import Link for navigation
import MainFrameComponent from '@/components/MainFrameComponent';
import TaskMainPage from '@/components/tasks/TaskMainPage';

const TasksPage = () => {
    return (
        <>
            <MainFrameComponent title='Tasks'>
                <TaskMainPage />
            </MainFrameComponent>
        </>
    );
};

export default TasksPage; 