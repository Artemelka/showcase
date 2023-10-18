import { useCallback, useState } from 'react';

type Params<P, R, E> = {
  onError: (error: E) => void;
  onSuccess: (response: R) => void;
  request: (params: P) => Promise<R>;
};

type ReturnValue<P> = {
  isLoading: boolean;
  sendRequest: (params: P) => void;
};

export const useRequest = <P, R, E>({
  onError,
  onSuccess,
  request,
}: Params<P, R, E>): ReturnValue<P> => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (params) => {
      setIsLoading(true);

      try {
        const response = await request(params);

        onSuccess(response);
      } catch (error) {
        onError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [onError, onSuccess, request],
  );

  return { isLoading, sendRequest };
};
