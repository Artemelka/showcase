type Values = {
  userName: string;
  password: string;
};

export type SignUpResponse = {
  data: { name: string };
  isError: boolean;
  additionalErrors: Array<{ userName: string }>;
};

export class SignUpApi {
  counter = 0;

  signUp = (values: Values): Promise<SignUpResponse> => {
    this.counter++;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.counter % 2 === 0) {
          resolve({
            data: { name: values.userName },
            isError: false,
            additionalErrors: [],
          });
        } else {
          /* eslint-disable prefer-promise-reject-errors */
          reject({
            data: { name: values.userName },
            isError: true,
            additionalErrors: [{ userName: 'Username already exists' }],
          });
        }
      }, 2000);
    });
  };
}
