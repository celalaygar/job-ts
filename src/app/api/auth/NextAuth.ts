// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const res = await fetch("http://localhost:8080/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const user = await res.json();

                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.accessToken = user.token;
            }
            return token;
        },
        async session(session, token) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
});