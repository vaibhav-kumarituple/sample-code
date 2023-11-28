import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const getNoCache = async (url: string, token?: string) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
  });

  const result = (await response.json()) || {};
  if (!response.ok) {
    throw new Error(
      `${response.status}: ${response.statusText} : ${result.message} for url ${url}`
    );
  }
  return result;
};

export const getWithCache = async (url: string, tags: string[]) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${_getAccessToken()}`,
    },
    next: {
      tags,
    },
  });
  const result = (await response.json()) || {};

  if (!response.ok) {
    throw new Error(
      `${response.status}: ${response.statusText} : ${result?.message} for url ${url}`
    );
  }
  return result;
};

export const getUnsecured = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-cache",
  });
  const result = (await response.json()) || {};
  if (!response.ok) {
    console.log("error in getUnsecured url", url, result);
    throw new Error(
      `${response.status}: ${response.statusText} : ${result.message} for url ${url}`
    );
  }
  return result;
};

export const patchWithCache = async (
  url: string,
  requestBody: any,
  tag: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    body: JSON.stringify(requestBody),
  });

  const result = (await response.json()) || {};
  if (!response.ok) {
    const errorData = {
      code: response.status,
      message: result.message ? result.message : result.fieldErrors[0].message,
    };
    throw new Error(errorData.message);
  }
  if (tag) {
    revalidateTag(tag);
  }
  return result;
};

export const patchNoCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
    body: JSON.stringify(body),
  });
  const result = (await response.json()) || {};

  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};

export const patchWithCacheWithoutBody = async (
  url: string,
  tags: string[],
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    next: {
      tags,
    },
  });

  const result = (await response.json()) || {};
  if (!response.ok) {
    const errorData = {
      code: response.status,
      message: result.message ? result.message : result.fieldErrors[0].message,
    };
    throw new Error(errorData.message);
  }
  return result;
};

export const postWithCache = async (
  url: string,
  body: any,
  tag: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    body: JSON.stringify(body),
  });

  const result = (await response.json()) || {};
  if (!response.ok) {
    const errorData = {
      code: response.status,
      message: result.message ? result.message : result.fieldErrors[0].message,
    };
    throw new Error(errorData.message);
  }
  if (tag) {
    revalidateTag(tag);
  }
  return result;
};

export const postNoCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
    body: JSON.stringify(body),
  });
  console.log("result in dbutils before json ", response);
  const result = (await response.json()) || {};
  console.log("result in dbutils after json ", result);
  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};

export const deleteNoCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
    body: JSON.stringify(body),
  });
  const result = (await response.json()) || {};

  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};

export const deleteWithCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    body: JSON.stringify(body),
  });
  const result = (await response.json()) || {};

  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};
export const putNoCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
    body: JSON.stringify(body),
  });
  console.log("result in dbutils before json ", response);
  const result = (await response.json()) || {};

  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};
export const putWithCache = async (
  url: string,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${_token}`,
    },
    body: JSON.stringify(body),
  });
  console.log("result in dbutils before json ", response);
  const result = (await response.json()) || {};

  if (!response.ok) {
    const message = result.message
      ? result.message
      : result.fieldErrors[0].message;
    console.log(message);
    throw new Error(message);
  }
  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }
  return result;
};

export const getWithCacheNoToken = async (url: string, tags: string[]) => {
  const response = await fetch(url, {
    next: {
      tags,
    },
  });
  const result = (await response.json()) || {};

  if (!response.ok) {
    throw new Error(
      `${response.status}: ${response.statusText} : ${result?.message} for url ${url}`
    );
  }
  return result;
};
/**
 * This function is used to get the access token from the cookie store.
 * Token is needed to make the API calls to the backend NodeJS server.
 **/
const _getAccessToken = (): string => {
  const cookieStore = cookies();
  const token = cookieStore.get("_token")?.value || "";
  return token;
};

export const postWithImage = async (
  url: string,
  // imageFile: File,
  body: any,
  revalidateTags?: string,
  token?: string
) => {
  const _token = token || _getAccessToken();
  const formData = new FormData();
  formData.append("file", body);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${_token}`,
    },
    cache: "no-cache",
    // body: JSON.stringify(body),
    body: formData,
  });
  console.log("inside dbUtils post with image body", body, formData);
  // console.log('the response of image post is ',response)
  const result = (await response.json()) || {};
  console.log("the result of image upload is ", result);
  if (!response.ok) {
    const errorData = {
      code: response.status,
      message: result.message ? result.message : result.fieldErrors[0].message,
    };
    throw new Error(errorData.message);
  }

  if (revalidateTags) {
    revalidateTag(revalidateTags);
  }

  return result;
};
