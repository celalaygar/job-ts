"use client";



import React, { useEffect, useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { People, Assignment, Timeline, ListAlt, Home, Person } from '@mui/icons-material';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Link from 'next/link';
import sidebarLinks, { SidebarLink } from '../data/sidebarLinks';
import MenuIcon from '@mui/icons-material/Menu';


type MainFrameProps = {
    bgColor: string;
};
const Sidebar: React.FC<MainFrameProps> = ({ bgColor }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [globalActiveKey, setGlobalActiveKey] = React.useState<string>("home");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setGlobalActiveKey(sessionStorage.getItem("globalActiveKey") || "home");
        }
    }, []);

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
        PermMediaIcon: <PermMediaIcon className="text-black" />,

    };

    return (
        <div
            className={`mt-2  p-4 ${isCollapsed ? 'w-20' : 'w-60'} transition-width duration-300 mt-4`}
            style={{ backgroundColor: bgColor ? bgColor : '#fffffe', color: "#000000" }}>
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