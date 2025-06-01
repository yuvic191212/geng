import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Exclude /auth, / (home page), and /test
    if (
        pathname.startsWith("/auth") ||
        pathname === "/" ||
        pathname.startsWith("/test")
    ) {
        return NextResponse.next();
    }

    const token = request.cookies.get("auth_token");
    if (!token) {
        const url = request.nextUrl.clone();
        url.pathname = "/auth";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}