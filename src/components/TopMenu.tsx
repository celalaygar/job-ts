"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import links from "../data/links"; // Linkleri içe aktar
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type MainFrameProps = {
    bgColor: string;
};

const TopMenu: React.FC<MainFrameProps> = ({ bgColor }) => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState(session?.user);
    const router = useRouter();

    const handleLogout = async () => {
        try {

            console.log("router.basePath");
            console.log(router);
            const currentOrigin = window.location.origin; // Mevcut portu dinamik olarak al
            console.log("currentOrigin");
            console.log(currentOrigin);
            sessionStorage.removeItem("globalActiveKey")
            await fetch("/api/auth/logout");
            await signOut({ callbackUrl: currentOrigin + "/" }); // Çıkış yaptıktan sonra o porta yönlendir
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
