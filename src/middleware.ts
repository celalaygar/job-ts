import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(request: NextRequest) {
    console.log('Middleware çalışıyor...');
    const cookies = parse(request.headers.get('cookie') || '');
    const loginResponse = cookies.loginResponse;
    
    console.log('Login Response Cookie:', loginResponse);

    // Eğer kullanıcı giriş yapmışsa, login sayfasına erişimi engelle
    if (loginResponse && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Eğer kullanıcı giriş yapmamışsa, dashboard sayfasına erişimi engelle
    if (!loginResponse && request.nextUrl.pathname === '/dashboard') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard'], // Middleware'in çalışacağı yollar
}; 