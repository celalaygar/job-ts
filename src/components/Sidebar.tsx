import React, { useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { People, Assignment, Timeline, ListAlt, Home, Person } from '@mui/icons-material';
import Link from 'next/link';
import sidebarLinks from '../data/sidebarLinks';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const icons = {
        Home: <Home className="text-white" />,
        Person: <Person className="text-white" />,
        People: <People className="text-white" />,
        Assignment: <Assignment className="text-white" />,
        Timeline: <Timeline className="text-white" />,
        ListAlt: <ListAlt className="text-white" />,
    };

    return (
        <div className={`bg-gray-800 p-4 ${isCollapsed ? 'w-16' : 'w-60'} transition-width duration-300`}>
            <button onClick={toggleSidebar} className="text-white mb-4">
                {isCollapsed ? '>' : '<'}
            </button>
            <div className={`h-screen flex flex-col `}>
                {sidebarLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="flex items-center p-2 hover:bg-gray-700 rounded text-white">
                        <ListItemIcon className={`${isCollapsed ? 'pt-1.5' : ''}`}>
                            {icons[link.icon]}
                        </ListItemIcon>
                        {!isCollapsed && <ListItemText primary={link.label} className="text-white" />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar; 