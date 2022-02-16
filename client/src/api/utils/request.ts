import { ApiResponse } from './types';

const BASE_PARAMS: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'cors',
};

export async function request<D>(url: string, params: RequestInit): Promise<ApiResponse<D>> {
  const response = await fetch(url, {
    ...params,
    ...BASE_PARAMS,
  });

  return response.json();
}