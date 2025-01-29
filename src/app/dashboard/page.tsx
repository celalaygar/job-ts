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

const Dashboard = () => {


    return (
        <Box>
            <TopMenu /> {/* Üst menüyü burada kullanıyoruz */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">My DashBoard</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="gap-4">
                            <div className="shadow-lg rounded-lg py-5 pl-5 mb-5 bg-gray-200">
                                <h5 className="text-2xl font-bold mb-4">My Project</h5>
                            </div>
                            {projects && projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="h-40 bg-white shadow-lg rounded-lg p-6 mb-5 transition duration-200 ease-in-out hover:bg-gray-200"
                                >
                                    <div className="flex flex-col md:flex-row md:space-x-4 ">
                                        <div className="w-1/2 grid justify-items-start">
                                            <h6 className="text-lg font-bold">{project.name}</h6>
                                        </div>
                                        <div className="w-1/2 grid justify-items-end">
                                            <p className="mb-2"><strong>Oluşturulma Tarihi : </strong> {project.createdAt}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:space-x-4  ">
                                        <div className="w-1/2 grid justify-items-start">
                                            <p className="mb-2"><strong>Project Code : </strong> {project.projectCode}</p>
                                        </div>
                                        <div className="w-1/2 grid justify-items-end">
                                            <Link
                                                href={``}
                                            >
                                                <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">İncele</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="shadow-lg rounded-lg py-5 pl-5 mb-5 bg-gray-200">
                                <h5 className="text-2xl font-bold mb-4">My Tasks</h5>
                            </div>
                            {tasks.map((task) => (
                                <div
                                    key={task.taskNumber}
                                    className="h-60 bg-white shadow-lg rounded-lg p-6 transition duration-200 ease-in-out hover:bg-gray-200"
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
            </Box>
        </Box>
    );
};

export default Dashboard; 