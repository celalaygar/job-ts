import projects from '@/data/project';
import tasks from '@/data/tasks';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



type MainFrameProps = {
};

const ProjectsMainPage: React.FC<MainFrameProps> = () => {

    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                {projects && projects.map((project) => (
                    <div
                        key={project.id}
                        className="h-28 bg-white shadow-lg rounded-lg p-4 mb-2 transition duration-200 ease-in-out hover:bg-gray-100"
                    >
                        <div className="flex flex-col md:flex-row md:space-x-4 ">
                            <div className="w-1/2 grid justify-items-start">
                                <h6 className="text-md font-bold">{project.name}</h6>
                            </div>
                            <div className="w-1/2 grid justify-items-end">
                                <p className="mb-2 text-sm "><strong>Oluşturulma Tarihi : </strong> {project.createdAt}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-4  ">
                            <div className="w-1/2 grid justify-items-start">
                                <p className="mb-2 text-sm"><strong>Project Code : </strong> {project.projectCode}</p>
                            </div>
                            <div className="w-1/2 grid justify-items-end">
                                <Link
                                    href={``}
                                >
                                    <button className="mt-2 bg-gray-300 text-black rounded px-4 py-2 text-sm">İncele</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectsMainPage; 