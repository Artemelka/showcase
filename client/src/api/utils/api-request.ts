import { getQueryString } from './getQueryString';
import { request } from './request';
import {
  RequestMethod,
  RequestGetParams,
  RequestPostParams,
  ApiResponse,
} from './types';

const METHOD: Record<RequestMethod, RequestMethod> = {
  GET: 'GET',
  POST: 'POST',
}

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