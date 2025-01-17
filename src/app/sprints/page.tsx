"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';

const SprintsPage = () => {
    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Sprints</h1>
                    <div className="w-full bg-white shadow-lg rounded-lg mt-2 p-6">
                        {/* Sprintler ile ilgili içerik buraya gelecek */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SprintsPage; 