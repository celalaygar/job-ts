import projects from '@/data/project';
import tasks from '@/data/tasks';
import Link from 'next/link';
import React, { useState } from 'react';



type MainFrameProps = {
};

const DashboardMainPage: React.FC<MainFrameProps> = () => {

    return (
        <>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1 gap-4">
                    <div className="shadow-lg bg-white rounded-lg py-2 pl-5 mb-5 ">
                        <h5 className="text-lg font-bold mb-4">My Project</h5>
                    </div>
                    {projects && projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-lg rounded-lg p-4 mb-1 transition duration-200 ease-in-out hover:bg-gray-100"
                        >
                            <div className="flex flex-col md:flex-row md:space-x-2 text-wrap">
                                <div className=" grid justify-items-start">
                                    <div className="text-sm">{project.name} </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-span-4 gap-4">
                    <div className="shadow-lg bg-white rounded-lg py-2 pl-5 mb-5 ">
                        <h5 className="text-lg font-bold mb-4">My Tasks</h5>
                    </div>
                    {tasks.map((task) => (
                        <div
                            key={task.taskNumber}
                            className="h-40 bg-white shadow-lg rounded-lg p-6 mb-1 transition duration-200 ease-in-out hover:bg-gray-100"
                        >
                            <div className="flex flex-col md:flex-row md:space-x-4 ">
                                <div className="w-1/2 grid justify-items-start">
                                    <h5 className="text-lg font-bold">{task.title}  {task.taskNumber}</h5>
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
                                        <button className="mt-2 bg-gray-200 text-black rounded px-4 py-2">İncele</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DashboardMainPage; 