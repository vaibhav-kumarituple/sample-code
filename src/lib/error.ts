import { getNoCache } from "@/lib/common/dbutils";
import qs from "query-string";

const apiUrl = process.env.NEXT_PUBLIC_LOG_BASE_URL;

interface QueryParameters {
  [key: string]: string | undefined | string[];
}

export interface ErrorLogsParams {
  sortColumn?: string;
  sortOrder?: string;
  page?: number;
  rowsPerPage?: number;
}

export interface ErrorLogs {
  _id: string;
  level?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  responseTime?: number;
  timestamp?: string;
}

export interface ErrorLogsResult {
  errorLogs: ErrorLogs[];
  total: number;
}

export const getErrorLogs = async (
  params: ErrorLogsParams
): Promise<ErrorLogsResult> => {
  const reqUrl = `${apiUrl}?${buildQueryString(params)}`;
  console.log(reqUrl);
  const result = await getNoCache(reqUrl);

  const errorLogs: any = result[0].data;
  const total: number = result[0].meta.pagination.total;

  return {
    errorLogs,
    total,
  };
};

const buildQueryString = (params: ErrorLogsParams) => {
  const queryParams: QueryParameters = {};

  queryParams["sort"] = `${params.sortColumn}:${params.sortOrder}`;

  queryParams["pagination[pageSize]"] = params.rowsPerPage?.toString();

  queryParams["pagination[page]"] = params.page?.toString();

  return qs.stringify(queryParams, {
    arrayFormat: "comma",
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  });
};
