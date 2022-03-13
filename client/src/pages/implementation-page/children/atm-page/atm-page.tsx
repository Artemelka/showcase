import React, {
  memo,
  useCallback,
  useState
} from 'react';
import { Page } from '../../../../components';
import { fastClassNames } from '../../../../utils';
import { ErrorBlock, Form, Table } from './_components';
import { getAmountFromResult, getCash } from './utils';
import { CashType } from './types';
import style from './atm-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Atm-page';

const ATM_STACK = {
  denomination: [10, 50, 100, 500, 1000, 5000],
  availability: [4, 2, 6, 3, 9, 2],
};
const DEFAULT_ERROR_STATE = { isError: false, errorMessage: ''};

const AtmPage = () => {
  const [result, setResult] = useState<CashType>([]);
  const [error, setError] = useState(DEFAULT_ERROR_STATE);
  const [amount, setAmount] = useState('');

  const handleClick = useCallback(() => {
    setError(DEFAULT_ERROR_STATE);
  }, []);

  const setErrorHelper = useCallback((errorMessage: string) => {
    setError({ isError: true, errorMessage });
    setResult([]);
    setAmount('');
  }, []);

  const setResponse = useCallback((response) => {
    const sum = getAmountFromResult(response);

    setResult(response);
    setAmount(`${sum}`);
  }, []);

  const handleSubmit = useCallback((value: string) => {
    const response = getCash(+value, ATM_STACK.denomination, ATM_STACK.availability);

    if (response.length === 0) {
      setErrorHelper('Enter amount less');
      return;
    }

    setResponse(response)
  }, [setErrorHelper, setResponse]);

  return (
    <Page
      headTitle="ATM"
      title="An example of an ATM operation code"
    >
      <div className={cn(CLASS_NAME)}>
        {error.isError
          ? <ErrorBlock onClick={handleClick} title={error.errorMessage}/>
          : <Form onSubmit={handleSubmit}/>
        }
        <Table items={result} amount={amount}/>
      </div>
    </Page>

  );
};

export default memo(AtmPage);