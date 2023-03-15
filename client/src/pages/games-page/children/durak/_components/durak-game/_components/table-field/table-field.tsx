import React, { memo } from 'react';
import { fastClassNames } from "@/utils";
import { CardBank } from '../card-bank';
import styles from './table-field.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-field';

type TableFieldProps = {};

export const TableFieldComponent = ({}: TableFieldProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      TableField
      <div className={cn(`${CLASS_NAME}__bank`)}>
        <CardBank cards={[]} isDisabledCard />
      </div>
      <div className={cn(`${CLASS_NAME}__bank`)}>
        <CardBank cards={[]} isDisabledCard />
      </div>
    </div>
  );
};

export const TableField = memo(TableFieldComponent);