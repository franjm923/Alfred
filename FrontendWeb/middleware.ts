import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("alfred_token")?.value;
  const { pathname } = req.nextUrl;

  const isLogin = pathname.startsWith("/login");
  const isDashboard = pathname === "/" || pathname.startsWith("/home") || pathname.startsWith("/(dashboard)");

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (token && isLogin) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/(dashboard)/(.*)", "/login"],
};
