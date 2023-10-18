export type FieldNames = 'userName' | 'password' | 'repeatPassword';

export type FormItem = {
  id: FieldNames;
  name: FieldNames;
  placeholder: string;
  type?: 'password';
};

export type InputsState = Record<FieldNames, string>;
