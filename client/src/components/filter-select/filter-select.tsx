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
const CLASS_NAME = 'Filter-filter-select';
const ICON_CONFIG = {
  iconClose: <ArrowDropUp fontSize="inherit" />,
  iconOpen: <ArrowDropDown fontSize="inherit" />,
};

type FilterSelectProps = {
  id: string;
  isMultiSelect?: boolean;
  label: string;
  name: string;
  onChange: (selectEvent: SelectChangeEvent) => void;
  options: Array<DropdownItemParams>;
  placeholder?: string;
  size?: 'small' | 'medium' | 'big';
  values: Array<DropdownItemParams>;
}

export const FilterSelectComponent = ({
  id,
  isMultiSelect,
  label,
  name,
  onChange,
  options,
  placeholder,
  size = 'small',
  values,
}: FilterSelectProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__label`)}>
        <Label htmlFor={id} size="small">{label}</Label>
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Select
          iconConfig={ICON_CONFIG}
          id={id}
          isMultiSelect={isMultiSelect}
          name={name}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          size={size}
          themeColor="primary"
          values={values}
          variant="filled"
        />
      </div>
    </div>
  );
};

export const FilterSelect = memo(FilterSelectComponent);