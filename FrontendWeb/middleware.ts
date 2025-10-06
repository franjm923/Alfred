// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Rutas públicas: no requieren cookie
 * (agregá aquí tu landing si la sirves desde Next: /landing)
 */
const PUBLIC_PATHS = [
  "/login",
  "/api/oauth/google/callback",
];

export function middleware(req: NextRequest) {
  try {
    const token = req.cookies.get("alfred_token")?.value;
    const { pathname } = req.nextUrl;

    // Si la URL es pública, dejá pasar
    const isPublic = PUBLIC_PATHS.some(p => pathname.startsWith(p));
    if (isPublic) return NextResponse.next();

    // Si no hay token, redirigí a /login
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.search = "";
      return NextResponse.redirect(url);
    }

    // Si ya hay token y el user intenta ir a /login, mandalo al Home
    if (token && pathname.startsWith("/login")) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      url.search = "";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (err) {
    // Evitá un 500 si algo raro ocurre: log y dejá pasar
    console.error("[middleware] error:", err);
    return NextResponse.next();
  }
}

/**
 * ¡Importante!
 * El matcher debe usar paths reales de URL, NO nombres de route groups.
 * Excluimos assets y APIs para no interferir.
 */
export const config = {
  matcher: [
    // Aplica a todo salvo assets estáticos y APIs
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
