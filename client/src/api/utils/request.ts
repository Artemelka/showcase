import { ApiResponse } from './types';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
} as const;

const BASE_PARAMS: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'cors',
};
const BASE_URL = 'http://localhost:8080/api';

type RequestParams = RequestInit & { method: keyof typeof METHOD };

export async function request<D>(url: string, params: RequestParams): Promise<ApiResponse<D>> {
  const response = await fetch(`${BASE_URL}/${url}`, {
    ...params,
    ...BASE_PARAMS,
  });

  return response.json();
}