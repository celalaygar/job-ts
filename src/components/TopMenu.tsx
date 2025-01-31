"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";

type MainFrameProps = {
    bgColor: string;
};

const TopMenu: React.FC<MainFrameProps> = ({ bgColor }) => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState(session?.user);

    const handleLogout = async () => {
        try {

            const currentOrigin = window.location.origin;
            sessionStorage.removeItem("globalActiveKey")
            let callbackUrl = currentOrigin + "/";
            console.log("callbackUrl");
            console.log(callbackUrl);
            await fetch("/api/auth/logout");
            await signOut({ callbackUrl: callbackUrl });
        } catch (error) {
            console.error("Çıkış yaparken hata oluştu:", error);
        }
    };
    return (
        <AppBar position="static" style={{ backgroundColor: bgColor ? bgColor : "#fffffe", color: "#000000" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                {session?.user && (
                    <>
                        <div className="text-black m-4">{session?.user?.email}</div>
                        <div className="text-black m-4">
                            {session?.user?.firstName} {session?.user?.lastName}
                        </div>
                    </>
                )}
                <Button color="inherit" onClick={handleLogout}>
                    Çıkış Yap
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;
