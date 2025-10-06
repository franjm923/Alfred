import { NextResponse } from "next/server";
const BACKEND_URL = process.env.BACKEND_URL!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const code = url.searchParams.get("code");

  if (token) {
    const resp = NextResponse.redirect(new URL("/", req.url));
    resp.cookies.set("alfred_token", token, {
      httpOnly: true, secure: process.env.NODE_ENV === "production",
      sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7,
    });
    return resp;
  }

  if (code) {
    const res = await fetch(`${BACKEND_URL}/api/auth/google/exchange?code=${encodeURIComponent(code)}`);
    const data = await res.json().catch(()=> ({}));
    if (res.ok && data?.token) {
      const resp = NextResponse.redirect(new URL("/", req.url));
      resp.cookies.set("alfred_token", data.token, {
        httpOnly: true, secure: process.env.NODE_ENV === "production",
        sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7,
      });
      return resp;
    }
  }

  return NextResponse.redirect(new URL("/login?e=1", req.url));
}
