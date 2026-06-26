import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 

export async function proxy(request) {
    const pathname = request.nextUrl.pathname;
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user; 

    const logoutPath = pathname==='/dashboard/lessons-details/:path'
                    || pathname==='/dashboard/my-favorites'

    // if(!user){
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    
    if(!user?.isAdmin && pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(user?.isAdmin && (pathname.startsWith("/dashboard") || pathname === '/')){
        return NextResponse.redirect(new URL('/admin', request.url))
    }

}
 
export const config = {
    matcher: [
        '/',
        '/login',
        '/register',
        '/admin/:path*',
        '/dashboard/:path*',
        

    ],

}