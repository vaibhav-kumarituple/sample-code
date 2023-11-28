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
  searchText?: string;
  level?: string;
  deliveryDateStart?: string;
  deliveryDateEnd?: string;
}

export interface ErrorLogs {
  _id: string;
  level?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  message?: string;
  responseTime?: number;
  timestamp?: string;
  resBody?: any;
}

export interface ErrorLogsResult {
  errorLogs: ErrorLogs[];
  total: number;
}

export const getErrorLogs = async (
  params: ErrorLogsParams
): Promise<ErrorLogsResult> => {
  let reqUrl = `${apiUrl}?${buildQueryString(params)}`;
  if (params.searchText) {
    reqUrl = `${apiUrl}/search?${buildQueryString(params)}`;
  }
  console.log(reqUrl);
  const result = await getNoCache(reqUrl);

  const errorLogs: any = result.data;
  const total: number = result.meta.pagination.total;

  return {
    errorLogs,
    total,
  };
};

export async function getErrorLogById(id: string): Promise<ErrorLogs | null> {
  console.log("get error log by id in lib called");
  if (!id) {
    return null;
  }
  let reqUrl = `${apiUrl}/${id}`;
  console.log("req url of error get by id", reqUrl);
  const errorLog = await getNoCache(reqUrl);
  console.log(errorLog);
  return errorLog;
}

const buildQueryString = (params: ErrorLogsParams) => {
  const queryParams: QueryParameters = {};

  queryParams["searchText"] = params.searchText;

  queryParams["sort"] = `${params.sortColumn}:${params.sortOrder}`;

  queryParams["pagination[pageSize]"] = params.rowsPerPage?.toString();

  queryParams["pagination[page]"] = params.page?.toString();

  queryParams["filters[level][$eq]"] = params.level;

  let deliveryDateEnd = params.deliveryDateEnd;
  if (!deliveryDateEnd) {
    deliveryDateEnd = params.deliveryDateStart;
  }
  if (params.deliveryDateStart) {
    queryParams["filters[timestamp][$between]"] =
      "dt" + params.deliveryDateStart + "," + deliveryDateEnd;
  }

  return qs.stringify(queryParams, {
    arrayFormat: "comma",
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  });
};
