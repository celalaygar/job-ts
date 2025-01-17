"use client";

import React from 'react';
import tasks from '../../../data/tasks';
import TopMenu from '../../../components/TopMenu';
import Sidebar from '../../../components/Sidebar';
import { useParams } from 'next/navigation';

const TaskDetailPage = () => {
    const { taskId } = useParams();

    // Ensure taskId is defined before proceeding
    if (!taskId) {
        return <div>Yükleniyor...</div>; // Show loading state or similar
    }

    const task = tasks.find(t => t.taskNumber === taskId);

    if (!task) {
        return <div>Task bulunamadı.</div>;
    }

    // Define the priority, status, and type options
    const priorityOptions = ['Highest', 'High', 'Medium', 'Low', 'Lowest'];
    const statusOptions = ['To Do', 'In Progress', 'Done', 'Test', 'Dev', 'Prod'];
    const typeOptions = ['Story', 'Feature', 'Bug'];

    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Tasks Details</h1>
                    <div className="w-full bg-white shadow-lg rounded-lg mt-2 p-6">
                        <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
                        <div className=" text-lg p-4 rounded-lg mb-4 w-64 ">
                            <strong>Task No: {task.taskNumber}</strong> 
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 border-2 border-black-500 shadow-xl mt-2  p-6">
                            <div className="md:w-7/12 grid justify-items-start">
                                <p className="mb-2"><strong>Açıklama:</strong> {task.description}</p>
                            </div>
                            <div className="md:w-5/12 grid justify-items-end">
                                <p className="mb-2"><strong>Atanan:</strong> {task.assigned}</p>
                                <p className="mb-2"><strong>Oluşturulma Tarihi:</strong> {task.createdAt}</p>
                            </div>
                        </div>
                        <div className="border-2 border-black-500 shadow-xl mt-2  p-6">
                            <h2 className="text-xl font-semibold mb-2">Öncelik Durumu</h2>
                            <div className="flex space-x-2">
                                {priorityOptions.map((option) => (
                                    <div
                                        key={option}
                                        className={`p-2 rounded-lg ${task.priority === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-2 border-black-500 shadow-xl mt-2  p-6">
                            <h2 className="text-xl font-semibold mb-2">Task Durumu</h2>
                            <div className="flex space-x-2">
                                {statusOptions.map((option) => (
                                    <div
                                        key={option}
                                        className={`p-2 rounded-lg ${task.status === option ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-2 border-black-500 shadow-xl mt-2 p-6">
                            <h2 className="text-xl font-semibold mb-2">Task Tipi</h2>
                            <div className="flex space-x-2">
                                {typeOptions.map((option) => (
                                    <div
                                        key={option}
                                        className={`p-2 rounded-lg ${task.type === option ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-2 border-black-500 shadow-xl mt-2 p-6">
                            <h2 className="text-xl font-semibold mb-2">Yorumlar</h2>
                            {task.comments.length > 0 ? (
                                task.comments.map((comment, index) => (
                                    <div key={index} className=" shadow-xl  mb-2 p-2 border-2 border-gray-300 rounded">
                                        <p><strong>{comment.user}:</strong></p>
                                        <p>{comment.comment}</p>
                                        <p className="text-sm text-gray-500 mt-5">{comment.createdDate}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Henüz bu konuda yorum yok.</p>
                            )}
                            <textarea className="shadow-xl w-full h-48 border rounded p-2 mt-5" placeholder="Yorum ekle..."></textarea>
                            <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">Gönder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailPage; 