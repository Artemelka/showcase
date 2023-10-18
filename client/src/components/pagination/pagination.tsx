import React, { memo, useCallback } from 'react';
import {
  Button,
  Input,
  InputChangeEvent,
  Text,
} from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import style from './pagination.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Pagination';

type PaginationProps = {
  limit: number;
  offset: number;
  onChange: (offset: number) => void;
  total: number;
};

export const PaginationComponent = ({
  limit,
  offset,
  onChange,
  total,
}: PaginationProps) => {
  const pagesCount = Math.ceil(total / limit);
  const pageNumber = Math.ceil(offset / limit) + 1;

  const handlePrevChange = useCallback(() => {
    onChange(offset - limit);
  }, [limit, offset, onChange]);

  const handleNextChange = useCallback(() => {
    onChange(offset + limit);
  }, [limit, offset, onChange]);

  const handleInputChange = useCallback(
    ({ value }: InputChangeEvent) => {
      const numValue = Number(value);

      onChange(limit * (numValue - 1));
    },
    [limit, onChange],
  );

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__prev`)}>
        <Button
          disabled={pageNumber === 1}
          onClick={handlePrevChange}
          size="small"
          themeColor="primary"
          value="Prev"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__page-number`)}>
        <Input
          name="page-number"
          onChange={handleInputChange}
          size="small"
          themeColor="primary"
          type="number"
          value={`${pageNumber}`}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__pref`)}>
        <Text>из</Text>
      </div>
      <div className={cn(`${CLASS_NAME}__total`)}>
        <Text>{pagesCount}</Text>
      </div>
      <div className={cn(`${CLASS_NAME}__next`)}>
        <Button
          disabled={pageNumber === pagesCount}
          onClick={handleNextChange}
          size="small"
          themeColor="primary"
          value="next"
        />
      </div>
    </div>
  );
};

export const Pagination = memo(PaginationComponent);
