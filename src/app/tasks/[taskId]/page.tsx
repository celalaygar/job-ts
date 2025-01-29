"use client";

import React from 'react';
import tasks from '../../../data/tasks';
import { useParams } from 'next/navigation';
import MainFrameComponent from '@/components/MainFrameComponent';
import TaskDetalMainPage from '@/components/tasks/TaskDetalMainPage';

const TaskDetailPage = () => {
    const { taskId } = useParams();

    // Ensure taskId is defined before proceeding
    if (!taskId) {
        return <div>Yükleniyor...</div>;
    }


    return (
        <>
            <MainFrameComponent title='Task Detail'>
                <TaskDetalMainPage taskId={taskId} />
            </MainFrameComponent>
        </>
    );
};

export default TaskDetailPage; 