"use client";

import React, { useEffect, useState } from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import { getCookie } from 'cookies-next'; // Çerezleri almak için

const ProfilePage = () => {
    const [user, setUser] = useState<{ firstName?: string; lastName?: string; email?: string }>({});

    useEffect(() => {
        const response = JSON.parse(getCookie('loginResponse') || '{}');
        if (response && response.user) {
            setUser({
                firstName: response.user.firstname,
                lastName: response.user.lastname,
                email: response.user.email
            });
        } else {
            console.error("Kullanıcı verileri loginResponse'da mevcut değil");
        }
    }, []);

    return (
        <div>
            <TopMenu />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Profilim</h1>
                    {user.firstName && user.lastName ? (
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Alan</th>
                                    <th className="border border-gray-300 p-2">Değer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Ad</td>
                                    <td className="border border-gray-300 p-2">{user.firstName}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Soyad</td>
                                    <td className="border border-gray-300 p-2">{user.lastName}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">E-posta</td>
                                    <td className="border border-gray-300 p-2">{user.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>Kullanıcı bilgileri mevcut değil.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage; 