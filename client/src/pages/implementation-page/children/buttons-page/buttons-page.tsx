import React, { memo, SyntheticEvent, useCallback, useState } from 'react';
import { Page } from '../../../../components';
import { fastClassNames3 } from '../../../../utils';
import style from './buttons-page.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Buttons-page';

const BUTTONS = [
  {
    id: '1',
    value: '1'
  }, {
    id: '2',
    value: '2'
  }, {
    disabled: true,
    id: '3',
    value: '3',
  },
];

const ButtonsPage = memo(() => {
  const [tabId, setTabId] = useState('1');

  const handleClick = useCallback((event: SyntheticEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id || '1';

    setTabId(id);
  }, []);

  return (
    <Page title="Buttons dataset">
      <div className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {BUTTONS.map(item => (
            <li key={item.id} className={cn(`${CLASS_NAME}__list-item`)}>
              <button
                className={cn(`${CLASS_NAME}__button`)}
                data-id={item.id}
                disabled={item.disabled}
                onClick={handleClick}
              >
                {item.value}
              </button>
            </li>
          ))}
        </ul>
        <div className={cn(`${CLASS_NAME}__content`)}>
          tab id: {tabId}
        </div>
        {tabId === '3' && (
          <div className={cn(`${CLASS_NAME}__gift`)}>surprise</div>
        )}
      </div>
    </Page>

  );
});

export default ButtonsPage;