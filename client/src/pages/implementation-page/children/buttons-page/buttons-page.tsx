import React, {
  FC,
  memo,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Page } from '@/components';
import { appLogger } from '@/services/app-logger';
import { fastClassNames } from '@/utils';
import style from './buttons-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Buttons-page';

const BUTTONS = [...new Array(4)].map((_num, id) => ({
  id: `${id}`,
  value: `${id + 1}`,
  disabled: id === 2,
}));

type ClickEvent = {
  event: SyntheticEvent<HTMLButtonElement>;
  id: string;
};

type ButtonProps = {
  disabled: boolean;
  id: string;
  onClick: (clickEvent: ClickEvent) => void;
  value: string;
};

const ButtonComponent: FC<ButtonProps> = ({ disabled, id, onClick, value }) => {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onClick({ event, id });
  };
  appLogger.log('=== render ===');

  return (
    <button
      className={cn(`${CLASS_NAME}__button`)}
      data-id={id}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      {value}
    </button>
  );
};

const MemoButtonComponent = memo(ButtonComponent);

const ButtonsPage: FC = () => {
  const [tabId, setTabId] = useState('1');

  const handleClick = useCallback(({ event }: ClickEvent) => {
    setTabId(event.currentTarget.dataset.id || '');
  }, []);

  const handleGoodClick = useCallback(({ id }: ClickEvent) => {
    setTabId(id);
  }, []);

  const memoButtons = useMemo(
    () =>
      BUTTONS.map((item) => (
        <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
          <ButtonComponent
            disabled={item.disabled}
            id={item.id}
            onClick={() => setTabId(item.id)}
            value={item.value}
          />
        </li>
      )),
    [],
  );

  const buttons = BUTTONS.map((item) => (
    <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
      <ButtonComponent
        disabled={item.disabled}
        id={item.id}
        onClick={handleClick}
        value={item.value}
      />
    </li>
  ));

  return (
    <Page headTitle="Buttons" title="Buttons dataset">
      <div className={cn(CLASS_NAME)}>
        <h4>button in const</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>{buttons}</ul>
        <h4>button in memo const</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>{memoButtons}</ul>
        <h4>button with data attr</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map((item) => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <ButtonComponent
                disabled={item.disabled}
                id={item.id}
                onClick={handleClick}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <h4>button with arrow callback</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map((item) => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <ButtonComponent
                disabled={item.disabled}
                id={item.id}
                onClick={() => setTabId(item.id)}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <h4>memo button with arrow callback</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map((item) => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <MemoButtonComponent
                disabled={item.disabled}
                id={item.id}
                onClick={() => setTabId(item.id)}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <h4>memo button with memo callback</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map((item) => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <MemoButtonComponent
                disabled={item.disabled}
                id={item.id}
                onClick={handleGoodClick}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <div className={cn(`${CLASS_NAME}__content`)}>tab id: {tabId}</div>
        {tabId === '2' && (
          <div className={cn(`${CLASS_NAME}__gift`)}>surprise</div>
        )}
      </div>
    </Page>
  );
};

export default memo(ButtonsPage);
