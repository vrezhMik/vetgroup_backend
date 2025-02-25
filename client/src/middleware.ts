import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const jwt = req.cookies.get("jwt");

  // Allow requests to static files, API routes, and Next.js internal routes
  if (
    req.nextUrl.pathname.startsWith("/_next/") ||
    req.nextUrl.pathname.startsWith("/static/") ||
    req.nextUrl.pathname.startsWith("/api/") ||
    /\.(.*)$/.test(req.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  // Allow unauthenticated access to /login
  if (req.nextUrl.pathname.startsWith("/login") && !jwt) {
    return NextResponse.next();
  }

  // Redirect users with JWT trying to access /login to /
  if (req.nextUrl.pathname.startsWith("/login") && jwt) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect users without JWT trying to access protected routes to /login
  if (!jwt) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}
