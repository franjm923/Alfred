// FrontendWeb/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Middleware no-op seguro; si falla por cualquier motivo, continúa la cadena
export function middleware(req: NextRequest) {
  try {
    // Endpoint de prueba del middleware
    if (req.nextUrl.pathname.startsWith("/__mw")) {
      return new Response("middleware ok", { status: 200 });
    }
    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

// Patrón recomendado por Next para evitar estáticos y API
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  // Restringimos el alcance para aislar el problema
  matcher: ["/home/:path*", "/login/:path*", "/__mw"],
};
