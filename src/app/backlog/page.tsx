"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import tasks from '../../data/tasks';
import Link from 'next/link';

const BacklogPage = () => {
    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Backlog</h1>
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Task Numarası</th>
                                <th className="border border-gray-300 p-2">Task Başlığı</th>
                                <th className="border border-gray-300 p-2">Atanan</th>
                                <th className="border border-gray-300 p-2">Oluşturulma Tarihi</th>
                                <th className="border border-gray-300 p-2">Durum</th>
                                <th className="border border-gray-300 p-2">Tip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.taskNumber}>
                                    <td className="border border-gray-300 p-2 text-blue-500">
                                        <Link href={`/tasks/${task.taskNumber}`}>
                                            {task.taskNumber}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 p-2">{task.title}</td>
                                    <td className="border border-gray-300 p-2">{task.assigned}</td>
                                    <td className="border border-gray-300 p-2">{task.createdAt}</td>
                                    <td className="border border-gray-300 p-2">{task.status}</td>
                                    <td className="border border-gray-300 p-2">{task.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BacklogPage; 