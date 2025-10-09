// FrontendWeb/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Middleware no-op seguro; si falla por cualquier motivo, continúa la cadena
export function middleware(_req: NextRequest) {
  try {
    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

// Patrón recomendado por Next para evitar estáticos y API
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/home/:path*", "/login/:path*"],
};
