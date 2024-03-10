import { ApiRequest } from '../utils';

export const TEST = {
  Success: () =>
    ApiRequest.get('https://jsonplaceholder.typicode.com/users', {
      isFullUrl: true,
    }),
  Failed: () =>
    ApiRequest.get('https://jsonplaceholder.typicode.com/usersss', {
      isFullUrl: true,
    }),
};
