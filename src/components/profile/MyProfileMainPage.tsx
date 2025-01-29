import projects from '@/data/project';
import tasks from '@/data/tasks';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



type MainFrameProps = {
};

const MyProfileMainPage: React.FC<MainFrameProps> = () => {
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

        <>
            <div className="grid grid-cols-2 gap-4 bg-white text-black">
                <>
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
                </>
            </div>
        </>
    );
};

export default MyProfileMainPage; 