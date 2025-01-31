"use client";

import projects from '@/data/project';
import tasks from '@/data/tasks';
import { getCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export interface UserProfile {
    firstName?: string | null; // Kullanıcının adı (isteğe bağlı)
    lastName?: string | null;  // Kullanıcının soyadı (isteğe bağlı)
    email?: string | null;     // Kullanıcının e-posta adresi (isteğe bağlı)
}

type MainFrameProps = {
};

const MyProfileMainPage: React.FC<MainFrameProps> = () => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<UserProfile | undefined>(session?.user);

    return (

        <>
            <div className="grid grid-cols-2 gap-4 bg-white text-black">
                <>
                    {user && user.firstName && user.lastName ? (
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
                </>
            </div>
        </>
    );
};

export default MyProfileMainPage; 