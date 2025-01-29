import projects from '@/data/project';
import tasks from '@/data/tasks';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



type MainFrameProps = {
    taskId: number;
};

const TaskDetalMainPage: React.FC<MainFrameProps> = ({ taskId }) => {

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
        <>
            <div className=" bg-white shadow-lg rounded-lg mt-2 p-6">
                <h1 className="text-lg font-bold mb-4">{task.title}</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 border-2 border-black-500 shadow-xl mt-2">
                    <div className="md:w-8/12 justify-items-start p-5">
                        <div className="grid grid-cols-1 ">
                            <div className="col-span-1 text-sm  rounded-lg mb-2 ">
                                <strong>Task No: </strong> {task.taskNumber}
                            </div>
                            <div className="descriptionDiv col-span-1 mb-2 text-wrap p-2 max-w-full w-full md:w-[45rem]">
                                <p>
                                    <strong>Açıklama:</strong> {task.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/12 grid justify-items-end py-2 px-6 ">
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
                                className={`p-2 rounded-lg ${task.priority === option ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'}`}
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
                                className={`p-2 rounded-lg ${task.status === option ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'}`}
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
                                className={`p-2 rounded-lg ${task.type === option ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'}`}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-2 border-black-500 shadow-xl mt-5 p-6">
                    <h2 className="text-xl font-semibold mb-2">Yorumlar</h2>
                    {task.comments.length > 0 ? (
                        task.comments.map((comment, index) => (
                            <div key={index} className=" shadow-xl bg-gray-200  mb-2 p-2 border-2 border-gray-300 rounded">
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
        </>
    );
};

export default TaskDetalMainPage; 