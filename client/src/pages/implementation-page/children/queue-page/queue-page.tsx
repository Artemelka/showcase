import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AsyncReducerItem,
  AsyncSagaItem,
  StoreInjectorConsumer,
} from '@artemelka/redux-store-injector';
import {
  InputChangeEvent,
  SelectChangeEvent,
  Text,
} from '@artemelka/react-components';
import { AppStore } from '@/types';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import {
  addTasks,
  changeCreateTaskQuantity,
  changeFilter,
  changeRequestCount,
  CHECK_QUEUE_INJECT_SAGA_CONFIG,
  checkQueueActionSaga,
  GET_RESOLVED_TASK_INJECT_SAGA_CONFIG,
  QUEUE_REDUCER_NAME,
  queueCreatedTasksSelector,
  queueCreateTasksQuantitySelector,
  queueFilteredTasksSelector,
  queueFilterValuesSelector,
  queueMaxRequestCountSelector,
  queueReducer,
  queueSendTaskActionSaga,
  queueTasksArraySelector,
  SEND_TASK_INJECT_SAGA_CONFIG,
  TaskItem,
  updateTasks,
} from './redux';
import { Accordion, Form } from './_components';
import { generateTaskItems, setPendingStatus } from './utils';
import style from './queue-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Queue-page';

const asyncReducers: Array<AsyncReducerItem> = [
  {
    name: QUEUE_REDUCER_NAME,
    reducer: queueReducer,
  },
];
const asyncSagas: Array<AsyncSagaItem> = [
  CHECK_QUEUE_INJECT_SAGA_CONFIG,
  SEND_TASK_INJECT_SAGA_CONFIG,
  GET_RESOLVED_TASK_INJECT_SAGA_CONFIG,
];

const mapStateToProps = (state: AppStore) => ({
  allTasks: queueTasksArraySelector(state),
  createdTasks: queueCreatedTasksSelector(state),
  createTaskQuantity: queueCreateTasksQuantitySelector(state),
  filteredTasks: queueFilteredTasksSelector(state),
  filterValue: queueFilterValuesSelector(state),
  maxRequestCount: queueMaxRequestCountSelector(state),
});

const mapDispatchToProps = {
  addTasks,
  changeCounter: changeRequestCount,
  changeFilter,
  changeQuantity: changeCreateTaskQuantity,
  checkQueue: checkQueueActionSaga,
  sendTask: queueSendTaskActionSaga,
  updateTasks,
};

type QueuePageProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class QueuePage extends Component<QueuePageProps> {
  handleClear = () => {
    this.props.changeCounter(0);
    this.props.changeQuantity(0);
  };

  handleCountChange = ({ value }: InputChangeEvent) => {
    this.props.changeCounter(Number(value));
  };

  handleCreateTasks = () => {
    const startIndex = this.props.allTasks.length - 1;
    const list = generateTaskItems(this.props.createTaskQuantity, startIndex);

    this.props.addTasks(list);
  };

  handleFilterChange = ({ items }: SelectChangeEvent) => {
    this.props.changeFilter(items[0]);
  };

  handleQuantityChange = ({ value }: InputChangeEvent) => {
    this.props.changeQuantity(Number(value));
  };

  handleRunTasks = () => {
    const pendingList: Array<TaskItem> = setPendingStatus(
      this.props.createdTasks,
    );

    this.props.updateTasks(pendingList);
    this.props.checkQueue();
  };

  render() {
    return (
      <StoreInjectorConsumer
        asyncReducers={asyncReducers}
        asyncSagas={asyncSagas}
        withEjectReducers
      >
        <Page headTitle="Queue" title="Queue">
          <div className={cn(CLASS_NAME)}>
            <Form
              createTaskQuantity={`${this.props.createTaskQuantity}`}
              filterValue={[this.props.filterValue]}
              maxRequestCount={`${this.props.maxRequestCount}`}
              onClearForm={this.handleClear}
              onCountChange={this.handleCountChange}
              onCreateTasks={this.handleCreateTasks}
              onFilterChange={this.handleFilterChange}
              onQuantityChange={this.handleQuantityChange}
              onRunTasks={this.handleRunTasks}
            />
            <Text align="center" fontWeight="bold" tagName="h3">
              Tasks
            </Text>
            <Accordion items={this.props.filteredTasks} />
          </div>
        </Page>
      </StoreInjectorConsumer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueuePage);
