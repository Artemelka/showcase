import { getQueryString } from './get-query-string';
import {
  RequestGetParams,
  RequestPostParams,
  ApiResponse,
  RequestParams,
} from './types';

const METHOD = {
  GET: 'GET',
  POST: 'POST',
} as const;

const BASE_PARAMS: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
};

type RequestServiceConfig = {
  endpoint: string;
};

class RequestService {
  private readonly baseUrl: string;

  constructor(config: RequestServiceConfig) {
    this.baseUrl = config.endpoint;
  }

  private request = async <D>(
    urlTail: string,
    params: RequestParams,
  ): Promise<ApiResponse<D>> => {
    const fullUrl = params.isFullUrl ? urlTail : `${this.baseUrl}/${urlTail}`;

    const response = await fetch(fullUrl, {
      ...BASE_PARAMS,
      ...params,
    });

    if (!response.ok) {
      return Promise.reject(
        new Error(`${response.status} ${response.statusText}`),
      );
    }

    return response.json();
  };

  public get = <D>(
    url: string,
    params?: RequestGetParams,
  ): Promise<ApiResponse<D>> => {
    const { queryParams, ...restParams } = params || {};
    const queryString = queryParams ? getQueryString(queryParams) : '';
    const fullUrl = `${url}${queryString}`;

    return this.request(fullUrl, {
      ...restParams,
      method: METHOD.GET,
    });
  };

  public post = <D>(
    url: string,
    { body, ...params }: RequestPostParams,
  ): Promise<ApiResponse<D>> => {
    return this.request(url, {
      ...params,
      method: METHOD.POST,
      body: JSON.stringify(body),
    });
  };
}

export const ApiRequest = new RequestService({
  endpoint: 'http://localhost:8080/api',
});
