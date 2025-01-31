import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';
import links from './data/links';
import { getToken } from 'next-auth/jwt';

// Middleware fonksiyonu
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: "your-secret-key" });
    console.log('Middleware çalışıyor...');
    console.log("token");
    console.log(token);
    const cookies = parse(request.headers.get('cookie') || '');
    const loginResponse = cookies.loginResponse;

    console.log("cookies");
    console.log(cookies);

    //console.log('Login Response Cookie:', loginResponse);
    console.log('request.nextUrl.pathname:', request.nextUrl.pathname);

    // Kullanıcı giriş yapmışsa, login sayfasına erişimini engelle
    if (token && request.nextUrl.pathname === links.login) {
        return NextResponse.redirect(new URL(links.dashboard, request.url));
    }

    // Kullanıcı giriş yapmamışsa, giriş yapılması gereken sayfalara erişimini engelle
    if (!token && request.nextUrl.pathname !== links.login && request.nextUrl.pathname !== links.register) {
        return NextResponse.redirect(new URL(links.login, request.url));
    }

    // Diğer durumlarda isteği devam ettir
    return NextResponse.next();
}


export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/profile',
        '/tasks',
        '/tasks/:taskId([a-zA-Z0-9\-]+)',
        '/projects',
        '/users',
        '/sprints',
        '/backlog',
    ],
};

