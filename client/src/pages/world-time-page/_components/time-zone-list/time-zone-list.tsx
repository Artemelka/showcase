import React, { memo } from 'react';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { TimeZoneListItem } from './_components';
import style from './time-zone-list.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'time-zone-list';

type TimeZoneListProps = {
  items: Array<string>;
  isGoBackDisabled: boolean;
  onGoBack: () => void;
  onSelect: (timeZone: string) => void;
};

export const TimeZoneListComponent = ({
  items,
  isGoBackDisabled,
  onGoBack,
  onSelect,
}: TimeZoneListProps) => {
  return (
    <section className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
        <Button
          disabled={isGoBackDisabled}
          onClick={onGoBack}
          value="go back"
        />
      </header>
      <main className={cn(`${CLASS_NAME}__content`)}>
        <ul className={cn(`${CLASS_NAME}__zone-list`)}>
          {items.map((item, index) => (
            <li key={item + index} className={cn(`${CLASS_NAME}__zone-item`)}>
              <TimeZoneListItem item={item} onClick={onSelect} />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export const TimeZoneList = memo(TimeZoneListComponent);
