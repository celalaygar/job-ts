import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';
import links from './data/links';

// Middleware fonksiyonu
export function middleware(request: NextRequest) {
    console.log('Middleware çalışıyor...');
    const cookies = parse(request.headers.get('cookie') || '');
    const loginResponse = cookies.loginResponse;

    //console.log('Login Response Cookie:', loginResponse);
    console.log('request.nextUrl.pathname:', request.nextUrl.pathname);

    // Kullanıcı giriş yapmışsa, login sayfasına erişimini engelle
    if (loginResponse && request.nextUrl.pathname === links.home) {
        return NextResponse.redirect(new URL(links.dashboard, request.url));
    }

    // Kullanıcı giriş yapmamışsa, giriş yapılması gereken sayfalara erişimini engelle
    if (!loginResponse && request.nextUrl.pathname !== links.home && request.nextUrl.pathname !== links.register) {
        return NextResponse.redirect(new URL(links.home, request.url));
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
        '/users',
        '/sprints',
        '/backlog',
    ],
};

