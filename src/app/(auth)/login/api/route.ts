import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { loginWithGoogleMicrosoft } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get("scope")?.includes("google") ? "google" : "microsoft";
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const result = await loginWithGoogleMicrosoft(provider, code);
    _setAuthCookie(result.token);
    return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`, request.url));
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

function _setAuthCookie(token: string) {
  cookies().set({
    name: "_token",
    value: token,
    httpOnly: true,
    path: "/",
  });
}
