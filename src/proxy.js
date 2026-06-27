import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
// import { headers } from 'next/headers'
 

export async function proxy(request) {
    const pathname = request.nextUrl.pathname;
    const session = await auth.api.getSession({
        headers: request.headers,
    });
    const user = session?.user; 


    if(!user && ((pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) && pathname !== "/dashboard/public-lessons")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    if(!user?.isAdmin && pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(user?.isAdmin && (pathname.startsWith("/dashboard") || pathname === '/')){
        return NextResponse.redirect(new URL('/admin', request.url))
    }
    
    if(user?.isPremium && pathname.startsWith("/dashboard/plans")){
        return NextResponse.redirect(new URL('/', request.url))
    }

}
 
export const config = {
    matcher: [
        '/',
        '/login',
        '/register',
        '/admin',
        '/admin/:path*',
        '/dashboard',
        '/dashboard/:path*',
    ],

}