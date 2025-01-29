import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Sidebar from './Sidebar';



const themeColor = {
    mainColor: "#eaf8fa",
    childrenColor: "#ffffff",
    topmenuColor: "#fcfdfe",
    sidebarColor: "#fcfdfe",
}

type MainFrameProps = {
    title: string;
    children: React.ReactNode;
};

const MainFrameComponent: React.FC<MainFrameProps> = ({ title, children }) => {

    return (
        <div style={{ backgroundColor: themeColor.mainColor }}>
            <TopMenu bgColor={themeColor.topmenuColor} />
            <div className="flex">
                <Sidebar bgColor={themeColor.sidebarColor} />
                <div className="flex-grow p-2 ml-2 mt-2">
                    <div
                        style={{ backgroundColor: themeColor.childrenColor, height: "100%" }}
                        className="grid grid-cols-1 gap-4 px-4">
                        <div className="gap-4">
                            {title && title !== "" && <div className='bg-white text-black font-bold px-4 py-5 my-2 shadow-md'>{title}</div>}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFrameComponent; 