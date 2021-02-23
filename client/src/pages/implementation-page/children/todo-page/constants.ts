import { ButtonGroupItem, DropdownItemParams } from '@artemelka/react-components';

export const BUTTONS: Array<ButtonGroupItem> = [
  {
    id: 'all',
    value: 'All',
  }, {
    id: 'Epic',
    value: 'Epic',
  }, {
    id: 'User story',
    value: 'User story',
  }, {
    id: 'Task',
    value: 'Task',
  }, {
    id: 'Subtask',
    value: 'Subtask',
  },
];

export const FILTER_OPTIONS: Array<DropdownItemParams> = [
  {
    id: 'todo',
    value: 'todo'
  }, {
    id: 'ready',
    value: 'ready'
  }, {
    id: 'in-progress',
    value: 'in-progress'
  }, {
    id: 'testing',
    value: 'testing'
  }, {
    id: 'reopen',
    value: 'reopen'
  }, {
    id: 'done',
    value: 'done'
  }, {
    id: 'resolved',
    value: 'resolved'
  }
];

export const ROWS_OPTIONS: Array<DropdownItemParams> = [
  {
    id: 'five',
    value: '5'
  }, {
    id: 'ten',
    value: '10'
  }, {
    id: 'twenty',
    value: '20',
  }, {
    id: 'fifty',
    value: '50',
  }
];