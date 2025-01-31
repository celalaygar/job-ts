import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import axios from "axios";

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const response = await axios.get("http://localhost:8080/api/auth/user/all", {
            headers: {
                Authorization: session.accessToken, // Spring Boot JWT'yi buraya ekliyoruz
                "Content-Type": "application/json",
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users " + error }, { status: 500 });
    }
}
