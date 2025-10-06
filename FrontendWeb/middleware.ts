// FrontendWeb/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Rutas públicas (no requieren cookie)
const PUBLIC = ["/login", "/api/oauth/google/callback"];

export const config = { matcher: [] };
export function middleware() {
  return new Response(null);
}
