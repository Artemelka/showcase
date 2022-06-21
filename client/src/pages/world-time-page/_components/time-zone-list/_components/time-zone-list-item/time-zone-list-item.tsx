import React, { memo, useCallback } from 'react';
import { fastClassNames } from '@/utils';
import style from './time-zone-list-item.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'time-zone-list-item';

type TimeZoneListItemProps = {
  item: any;
  onClick: (id: string) => void;
};

export const TimeZoneListItemComponent = ({ item, onClick }: TimeZoneListItemProps) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <button
      className={cn(CLASS_NAME)}
      onClick={handleClick}
      type="button"
    >
      {item}
    </button>
  );
};

export const TimeZoneListItem = memo(TimeZoneListItemComponent);