import React, { memo } from 'react';
import classNames from 'classnames/bind';
import {
  Button,
  Input,
  Label,
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { FilterSelect } from '../../../../../../components';
import style from './form.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Form';
const FILTER_OPTIONS: Array<DropdownItemParams> = [{
  id: 'allTasks',
  value: 'all'
}, {
  id: 'createdTasks',
  value: 'create',
}, {
  id: 'doneTasks',
  value: 'done',
}, {
  id: 'errorTasks',
  value: 'error',
}, {
  id: 'progressTasks',
  value: 'progress',
}, {
  id: 'sendingTask',
  value: 'sending',
}];

type FormProps = {
  onCountChange: (inputEvent: InputChangeEvent) => void;
  onQuantityChange: (inputEvent: InputChangeEvent) => void;
  createTaskQuantity: string;
  maxRequestCount: string;
  onCreateTasks: () => void;
  onClearForm: () => void;
  onRunTasks: () => void;
  onFilterChange: (selectEvent: SelectChangeEvent) => void;
  filterValue: Array<DropdownItemParams>;
};

export const Form = memo(({
  createTaskQuantity,
  onCountChange,
  onQuantityChange,
  maxRequestCount,
  onCreateTasks,
  onClearForm,
  onRunTasks,
  onFilterChange,
  filterValue,
}: FormProps) => (
  <form className={cn(`${CLASS_NAME}`)}>
    <div className={cn(`${CLASS_NAME}__field`)}>
      <div className={cn(`${CLASS_NAME}__label`)}>
        <Label htmlFor="createTaskQuantity" position="left">Task quantity</Label>
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Input
          id="createTaskQuantity"
          name="createTaskQuantity"
          onChange={onQuantityChange}
          themeColor="primary"
          type="number"
          value={createTaskQuantity}
        />
      </div>
    </div>
    <div className={cn(`${CLASS_NAME}__field`)}>
      <div className={cn(`${CLASS_NAME}__label`)}>
        <Label htmlFor="maxRequestCount" position="left">Request quantity</Label>
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Input
          id="maxRequestCount"
          name="maxRequestCount"
          onChange={onCountChange}
          themeColor='primary'
          type="number"
          value={maxRequestCount}
        />
      </div>
    </div>
    <div className={cn(`${CLASS_NAME}__actions`)}>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button
          value="Create tasks"
          onClick={onCreateTasks}
          themeColor="primary"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button
          value="Clear form"
          onClick={onClearForm}
          themeColor="error"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button
          value="Run task"
          onClick={onRunTasks}
          themeColor="primary"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__filter`)}>
        <div className={cn(`${CLASS_NAME}__filter-input`)}>
          <FilterSelect
            id="taskFilter"
            name="task-filter"
            onChange={onFilterChange}
            options={FILTER_OPTIONS}
            values={filterValue}
            label="Filter status"
          />
        </div>
      </div>
    </div>
  </form>
));
