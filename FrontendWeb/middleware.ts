// FrontendWeb/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Rutas públicas (no requieren cookie)
const PUBLIC = ["/login", "/api/oauth/google/callback"];

export function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;

    // Dejar pasar assets, _next y APIs
    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname === "/favicon.ico" ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml"
    ) {
      return NextResponse.next();
    }

    // Dejar pasar rutas públicas
    if (PUBLIC.some((p) => pathname.startsWith(p))) {
      return NextResponse.next();
    }

    // Proteger el resto
    const token = req.cookies.get("alfred_token")?.value;
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.search = "";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (e) {
    // Nunca tirar la app por el middleware
    console.error("[middleware] ", e);
    return NextResponse.next();
  }
}

export const config = {
  // Aplica a todo salvo lo excluido arriba en el cuerpo
  matcher: ["/:path*"],
};
