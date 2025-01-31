"use client";

import projects from '@/data/project';
import tasks from '@/data/tasks';
import { LinearProgress } from '@mui/material';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



type MainFrameProps = {
    users: any[];
    loading: boolean;
};

const UsersMainPage: React.FC<MainFrameProps> = ({ users, loading }) => {

    return (
        loading ? <LinearProgress /> :
            <>
                <div className="grid grid-cols-1 gap-4">
                    {users && users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white shadow-lg rounded-lg p-6 transition duration-200 ease-in-out hover:bg-gray-100"
                        >
                            <div className="flex flex-col md:flex-row md:space-x-4 ">
                                <div className="w-1/2 grid justify-items-start">
                                    <h5 className="text-md font-bold">{user.firstname + " " + user.lastname} </h5>
                                </div>
                                <div className="w-1/2 grid justify-items-end">
                                    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4 ">
                                <div className="w-1/2 grid justify-items-start">
                                    <h5 className="text-md "><strong>Role:</strong> {user.role}</h5>
                                </div>
                                <div className="w-1/2 grid justify-items-end">
                                    <p className="mb-2 text-sm"><strong>Premium Type:</strong> {user.premium?.premiumType}</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:space-x-4  ">
                                <div className="w-1/2 grid justify-items-start">
                                    <p className="mb-2 text-sm"><strong>Premium start Date:</strong> {user.premium?.startDate}</p>
                                    <p className="mb-2 text-sm"><strong>Premium end Date:</strong> {user.premium?.endDate}</p>
                                </div>
                                <div className="w-1/2 grid justify-items-end">
                                    <Link href={``}>
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

export default UsersMainPage; 