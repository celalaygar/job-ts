"use client";

import projects from '@/data/project';
import tasks from '@/data/tasks';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



type MainFrameProps = {
};

const TaskMainPage: React.FC<MainFrameProps> = () => {

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.taskNumber}
                        className="bg-white shadow-lg rounded-lg p-6 transition duration-200 ease-in-out hover:bg-gray-100"
                    >
                        <div className="flex flex-col md:flex-row md:space-x-4 ">
                            <div className="w-1/2 grid justify-items-start">
                                <h5 className="text-md font-bold">{task.title} </h5>
                            </div>
                            <div className="w-1/2 grid justify-items-end">
                                <p className="mb-2"><strong>Atanan:</strong> {task.assigned}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 ">
                            <div className="w-1/2 grid justify-items-start">
                                <h5 className="text-md "><strong>Task No:</strong> {task.taskNumber}</h5>
                            </div>
                            <div className="w-1/2 grid justify-items-end">
                                <p className="mb-2 text-sm"><strong>Tip:</strong> {task.type}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-4  ">
                            <div className="w-1/2 grid justify-items-start">
                                <p className="mb-2 text-sm"><strong>Öncelik:</strong> {task.priority}</p>
                            </div>
                            <div className="w-1/2 grid justify-items-end">
                                <Link href={`/tasks/${task.taskNumber}`}>
                                    <button className="mt-2 bg-gray-200 text-black rounded px-4 py-2 text-sm">İncele</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TaskMainPage; 