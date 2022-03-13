import { getQueryString } from './getQueryString';
import { request, METHOD } from './request';
import {
  RequestGetParams,
  RequestPostParams,
  ApiResponse,
} from './types';

class Request {
  get = <D>(url: string, params?: RequestGetParams): Promise<ApiResponse<D>> => {
    const { queryParams, ...restParams } = params || {};
    const queryString = queryParams ? getQueryString(queryParams) : '';
    const fullUrl = `${url}${queryString}`;

    return request(fullUrl, {
      ...restParams,
      method: METHOD.GET,
    });
  }

  post = <D>(url: string, { body, ...params }: RequestPostParams): Promise<ApiResponse<D>> => {
    return request(url, {
      ...params,
      method: METHOD.POST,
      body: JSON.stringify(body),
    })
  }
}

export const ApiRequest = new Request();