import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/auth";

// // This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const requestedURL = request.nextUrl.pathname;
  const token = request.cookies.get("_token")?.value || "";
  const authenticated = await isAuthenticated(token);
  console.log("middleware", requestedURL, authenticated);

  if (requestedURL === "/login" && authenticated) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!authenticated && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/logs/:path*",
    "/login",
    "/user-management",
    "/permissions",
    "/logs",
    "/roles",
    "/question-bank",
    "/question-paper",
    "/configurations",
    "/batch",
    "/student",
    "/profile",
  ],
};
