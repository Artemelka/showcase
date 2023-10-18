export type RequestMethod = 'GET' | 'POST';

export type QueryParams = Record<string, string>;

type AppRequestParams = Partial<Omit<RequestInit, 'body' | 'method'>>;

export type RequestGetParams = AppRequestParams & {
  queryParams?: QueryParams;
};

export type RequestPostParams = AppRequestParams & {
  body: Record<string, any>;
};

export type ApiResponse<D = unknown> = {
  isError: boolean;
  errorMessage: string;
  data: D;
};
