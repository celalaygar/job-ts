"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import tasks from '../../data/tasks'; // Import tasks data
import Link from 'next/link'; // Import Link for navigation

const TasksPage = () => {
    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Tasks</h1>
                    <div className="grid grid-cols-1 gap-4">
                        {tasks.map((task) => (
                            <div 
                                key={task.taskNumber} 
                                className="bg-white shadow-lg rounded-lg p-6 transition duration-200 ease-in-out hover:bg-gray-200"
                            >
                                <div className="flex flex-col md:flex-row md:space-x-4 ">
                                    <div className="w-1/2 grid justify-items-start">
                                        <h5 className="text-xl font-bold">{task.title}  {task.taskNumber}</h5>
                                    </div>
                                    <div className="w-1/2 grid justify-items-end">
                                        <p className="mb-2"><strong>Atanan:</strong> {task.assigned}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:space-x-4 ">
                                    <div className="w-1/2 grid justify-items-start">
                                        <p className="mb-2"><strong>Öncelik:</strong> {task.priority}</p>
                                    </div>
                                    <div className="w-1/2 grid justify-items-end">
                                        <p className="mb-2"><strong>Tip:</strong> {task.type}</p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:space-x-4  ">
                                    <div className="w-1/2 grid justify-items-start">
                                        <Link href={`/tasks/${task.taskNumber}`}>
                                            <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">İncele</button>
                                        </Link>
                                    </div>
                                    <div className="w-1/2 grid justify-items-end">
                                        <p className="mb-2"><strong>Oluşturulma Tarihi:</strong> {task.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TasksPage; 