// FrontendWeb/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Si no necesitas lógica aún, deja el middleware como no-op y usa un matcher válido
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

// Evita aplicar middleware a assets estáticos e imágenes. Ajusta según tus rutas.
export const config = {
  matcher: [
    
    "/((?!_next/static|_next/image|favicon.ico|assets|.*\\.(?:png|jpg|jpeg|gif|svg|ico|css|js|woff2?)).*)",
  ],
};
