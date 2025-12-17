import { NextRequest, NextResponse } from "next/server"

const isSignedIn = true

export function middleware(req: NextRequest) {
    if (!isSignedIn) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/contacts/create'
}