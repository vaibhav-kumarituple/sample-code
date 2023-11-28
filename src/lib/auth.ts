import { getNoCache, getUnsecured } from "@/lib/common/dbutils";

const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;
const AUTH_SERVER_URL_LOCAL = process.env.NEXT_PUBLIC_TOKEN_FETCH_URL;
export const isAuthenticated = async (token: string) => {
  if (!token) {
    return false;
  }
  try {
    const URL = `${AUTH_SERVER_URL}/api/auth/is-authenticated`;
    console.log("checking Auth response", URL);
    await getNoCache(URL, token);
    return true;
  } catch (e) {
    console.log("error in isAuthenticated auth.ts", e);
    return false;
  }
};

export const loginWithGoogleMicrosoft = async (provider: any, code: any) => {
  const URL = `${AUTH_SERVER_URL_LOCAL}/api/auth/${provider}/signin?code=${code}`;
  console.log("loginWithGoogleMicrosoft", URL);
  const response = await getUnsecured(URL);
  console.log("loginWithGoogleMicrosoft response", response);
  return response;
};
