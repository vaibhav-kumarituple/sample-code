import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  console.log("logout api route called");
  try {
    await fetch(`${process.env.NEXT_PUBLIC_TOKEN_FETCH_URL}/api/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies().get("_token")?.value || "",
      },
    });
  } catch (e) {
    console.log("error in logout", e);
  }
  console.log("logout fetch api called");

  cookies().delete("_token");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(
    new URL("/login", baseUrl).toString(),
    "after logout request redirect url"
  );
  return NextResponse.redirect(new URL("/login", baseUrl).toString());
}
