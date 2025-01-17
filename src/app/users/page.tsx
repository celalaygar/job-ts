"use client";

import React from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';

const UsersPage = () => {
    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Kullanıcılar</h1>
                    {/* Kullanıcılar ile ilgili içerik buraya gelecek */}
                </div>
            </div>
        </div>
    );
};

export default UsersPage; 