import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post("http://localhost:8080/api/auth/login", {
                        email: credentials?.email,
                        password: credentials?.password
                    });

                    if (response.status === 200) {
                        const { token, user } = response.data;
                        return { user: { ...user }, token };
                    }
                } catch (error) {
                    throw new Error("Invalid credentials");
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
                token.user = user.user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        }
    },
    secret: "your-secret-key",
    pages: {
        signIn: "/auth/login",
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
