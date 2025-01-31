"use client";

import React, { useEffect, useState } from 'react';
import TopMenu from '../../components/TopMenu';
import Sidebar from '../../components/Sidebar';
import MainFrameComponent from '@/components/MainFrameComponent';
import { useSession } from 'next-auth/react';
import { LinearProgress, List, ListItem, ListItemText } from '@mui/material';
import UsersMainPage from '@/components/users/UsersMainPage';

const UsersPage = () => {

    const { data: session, status } = useSession();
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (status === "authenticated") {
            fetchUsers();
        }
    }, [status]);

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch("/api/users");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError("Error loading users");
        } finally {
            setLoading(false);
        }
        setLoading(false)
    };


    return (
        loading ? <LinearProgress /> :
            <>
                <MainFrameComponent title='Kullanıcılar'>
                    <UsersMainPage loading={loading} users={users} />
                </MainFrameComponent>
            </>
    );
};

export default UsersPage; 