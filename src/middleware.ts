import { NextRequest, NextResponse } from "next/server"

const isSignedIn = true

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/contacts/create' && !isSignedIn) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    console.log("fell on the middleware")

    return NextResponse.next()
}

// export const config = {
//     matcher: '/contacts/create'
// }