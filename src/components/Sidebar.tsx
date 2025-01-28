import React, { useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { People, Assignment, Timeline, ListAlt, Home, Person } from '@mui/icons-material';
import Link from 'next/link';
import sidebarLinks, { SidebarLink } from '../data/sidebarLinks';
import MenuIcon from '@mui/icons-material/Menu';
const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [globalActiveKey, setGlobalActiveKey] = React.useState<string>(sessionStorage.getItem("globalActiveKey") || "home");

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const setActiveMenu = (activeKey: string) => {
        setGlobalActiveKey(activeKey)
        sessionStorage.setItem("globalActiveKey", activeKey)
    };

    const icons = {
        Home: <Home className="text-black" />,
        Person: <Person className="text-black" />,
        People: <People className="text-black" />,
        Assignment: <Assignment className="text-black" />,
        Timeline: <Timeline className="text-black" />,
        ListAlt: <ListAlt className="text-black" />,
    };

    return (
        <div
            className={`mt-2 bg-gray-800 p-4 ${isCollapsed ? 'w-20' : 'w-60'} transition-width duration-300`
            }
            style={{ backgroundColor: '#eeecee ', color: "#000000" }}>
            <button onClick={toggleSidebar} className="mb-4 ml-2">
                <MenuIcon />
            </button>
            <div className={`h-screen flex flex-col `}>
                {sidebarLinks.map((link: SidebarLink) => (
                    <Link key={link.label} href={link.href}
                        onClick={e => setActiveMenu(link.activeKey)}
                        style={{ padding: `${isCollapsed ? ' 10px 10px 11px 10px ' : ' 6px 10px 7px 10px '}` }}
                        className={`${link.activeKey === sessionStorage.getItem("globalActiveKey") ? ' bg-gray-300 ' : '  '}` +
                            'flex items-center  hover:bg-gray-300 rounded '}>
                        <ListItemIcon > {icons[link.icon]} </ListItemIcon>
                        {!isCollapsed && <ListItemText primary={link.label} className="" />}
                    </Link>
                ))}
            </div>
        </div >
    );
};

export default Sidebar; 