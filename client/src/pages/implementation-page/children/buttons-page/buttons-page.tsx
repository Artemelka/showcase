import React, {
  memo,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState
} from 'react';
import { Page } from '../../../../components';
import { fastClassNames3 } from '../../../../utils';
import style from './buttons-page.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Buttons-page';

const BUTTONS = [...new Array(4)].map((_, id) => ({
  id: `${id}`,
  value: `${id + 1}`,
  disabled: id === 2
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

const ButtonComponent = ({ disabled, id, onClick, value }: ButtonProps) => {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onClick({ event, id });
  };
  console.log('=== render ===');

  return (
    <button
      className={cn(`${CLASS_NAME}__button`)}
      data-id={id}
      disabled={disabled}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

const MemoButtonComponent = memo(ButtonComponent);

const ButtonsPage = () => {
  const [tabId, setTabId] = useState('1');

  const handleClick = useCallback(({ event }: ClickEvent) => {
    setTabId(event.currentTarget.dataset.id || '');
  }, []);

  const handleGoodClick = useCallback(({ id }: ClickEvent) => {
      setTabId(id);
  }, []);

  const memoButtons = useMemo(() => BUTTONS.map(item => (
    <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
      <ButtonComponent
        id={item.id}
        disabled={item.disabled}
        onClick={() => setTabId(item.id)}
        value={item.value}
      />
    </li>
  )), []);

  const buttons = BUTTONS.map(item => (
    <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
      <ButtonComponent
        id={item.id}
        disabled={item.disabled}
        onClick={handleClick}
        value={item.value}
      />
    </li>
  ));

  return (
    <Page headTitle="Buttons" title="Buttons dataset">
      <div className={cn(CLASS_NAME)}>
        <h4>button in const</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {buttons}
        </ul>
        <h4>button in memo const</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {memoButtons}
        </ul>
        <h4>button with data attr</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map(item => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <ButtonComponent
                id={item.id}
                disabled={item.disabled}
                onClick={handleClick}
                value={item.value}
              />
            </li>
          ))}
        </ul>
        <h4>button with arrow callback</h4>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map(item => (
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
          {BUTTONS.map(item => (
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
          {BUTTONS.map(item => (
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
        <div className={cn(`${CLASS_NAME}__content`)}>
          tab id: {tabId}
        </div>
        {tabId === '2' && (
          <div className={cn(`${CLASS_NAME}__gift`)}>surprise</div>
        )}
      </div>
    </Page>
  );
};

export default memo(ButtonsPage);