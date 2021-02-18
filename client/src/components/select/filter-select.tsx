import React, { memo } from 'react';
import {
  DropdownItemParams,
  Label,
  Select,
  SelectChangeEvent,
} from '@artemelka/react-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import classNames from "classnames/bind";
import style from './filter-select.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Filter-select';
const ICON_CONFIG = {
  iconClose: <ArrowDropUp fontSize="inherit" />,
  iconOpen: <ArrowDropDown fontSize="inherit" />,
};

type FilterSelectProps = {
  id: string;
  name: string;
  onChange: (selectEvent: SelectChangeEvent) => void;
  options: Array<DropdownItemParams>;
  values: Array<DropdownItemParams>;
  label: string;
}

export const FilterSelect = memo(({
  id,
  name,
  onChange,
  options,
  values,
  label,
}: FilterSelectProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__label`)}>
        <Label htmlFor={id} >{label}</Label>
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Select
          iconConfig={ICON_CONFIG}
          id={id}
          name={name}
          onChange={onChange}
          options={options}
          themeColor="primary"
          values={values}
          variant="filled"
        />
      </div>
    </div>
  );
});
