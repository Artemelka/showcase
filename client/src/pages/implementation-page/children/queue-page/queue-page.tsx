import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Action } from 'redux';
import { connect } from 'react-redux';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import {
  DropdownItemParams,
  InputChangeEvent,
  SelectChangeEvent,
  Text
} from '@artemelka/react-components';
import { BaseAction } from '../../../../app/redux';
import { Page } from '../../../../components';
import {
  addTasks,
  AppStoreWithQueue,
  changeCreateTaskQuantity,
  changeFilter,
  changeRequestCount,
  CHECK_QUEUE_WATCHER_SAGA_NAME,
  checkQueueWatcherSaga,
  getResolvedTaskWatcherSaga,
  GET_RESOLVED_TASK_WATCHER_SAGA_NAME,
  QUEUE_REDUCER_NAME,
  queueCreateTasksQuantitySelector,
  queueFilteredTasksSelector,
  queueFilterValuesSelector,
  queueMaxRequestCountSelector,
  queueTasksSelector,
  queueReducer,
  replaceTasks,
  SEND_TASK_WATCHER_SAGA_NAME,
  sendTaskWatcherSaga,
  queueSendTaskActionSaga,
  checkQueueActionSaga,
  TaskItem,
} from './redux';
import { Accordion, Form } from './_components';
import { generateTaskItems } from './utils/generateTaskItems';
import style from './queue-page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Queue-page';

const asyncReducers: Array<AsyncReducerItem> = [{
  name: QUEUE_REDUCER_NAME,
  reducer: queueReducer,
}];
const asyncSagas: Array<AsyncSagaItem> = [
    {
    name: CHECK_QUEUE_WATCHER_SAGA_NAME,
    saga: checkQueueWatcherSaga,
  }, {
    name: SEND_TASK_WATCHER_SAGA_NAME,
    saga: sendTaskWatcherSaga,
  }, {
    name: GET_RESOLVED_TASK_WATCHER_SAGA_NAME,
    saga: getResolvedTaskWatcherSaga,
  }
];

type MapStateToProps = {
  allTasks: Array<TaskItem>;
  createTaskQuantity: number;
  filteredTasks: Array<TaskItem>;
  filterValue: DropdownItemParams;
  maxRequestCount: number;
}
type MapDispatchToProps = {
  addTasks: (payload: Array<TaskItem>) => BaseAction<Array<TaskItem>>;
  changeQuantity: (payload: number) => BaseAction<number>;
  changeFilter: (payload: DropdownItemParams) => BaseAction<DropdownItemParams>;
  changeCounter: (payload: number) => BaseAction<number>;
  replaceTasks: (payload: Array<TaskItem>) => BaseAction<Array<TaskItem>>;
  // runTasks: () => Action<string>;
  sendTask: () => Action<string>;
  checkQueue: () => Action<string>;
}
type QueuePageProps = MapStateToProps & MapDispatchToProps;

export class QueuePageContainer extends Component<QueuePageProps>{
  handleClear = () => {
    this.props.changeCounter(0);
    this.props.changeQuantity(0);
  }

  handleCountChange = ({ value }: InputChangeEvent) => {
    this.props.changeCounter(Number(value));
  }

  handleCreateTasks = () => {
    const startIndex = this.props.allTasks.length - 1;
    const list = generateTaskItems(this.props.createTaskQuantity, startIndex);

    this.props.addTasks(list);
  }

  handleFilterChange = ({ items }: SelectChangeEvent) => {
    this.props.changeFilter(items[0]);
  }

  handleQuantityChange = ({ value }: InputChangeEvent) => {
    this.props.changeQuantity(Number(value));
  }

  handleRunTasks = () => {
    const pendingList: Array<TaskItem> = this.props.allTasks.map((item) =>
      item.status === 'create'
        ? { ...item, status: 'pending' }
        : item
    );

    this.props.replaceTasks(pendingList);
    this.props.checkQueue();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <Page title="Queue">
          <div className={cn(CLASS_NAME)}>
            <Form
              onQuantityChange={this.handleQuantityChange}
              onCountChange={this.handleCountChange}
              createTaskQuantity={`${this.props.createTaskQuantity}`}
              maxRequestCount={`${this.props.maxRequestCount}`}
              onCreateTasks={this.handleCreateTasks}
              onClearForm={this.handleClear}
              onRunTasks={this.handleRunTasks}
              onFilterChange={this.handleFilterChange}
              filterValue={[this.props.filterValue]}
            />
            <Text align="center" fontWeight="bold" tagName="h3">Tasks</Text>
            <Accordion items={this.props.filteredTasks} />
          </div>
        </Page>
      </StoreInjectorConsumer>
    );
  }
}

const mapStateToProps = (state: AppStoreWithQueue): MapStateToProps => ({
  allTasks: queueTasksSelector(state),
  createTaskQuantity: queueCreateTasksQuantitySelector(state),
  filteredTasks: queueFilteredTasksSelector(state),
  maxRequestCount: queueMaxRequestCountSelector(state),
  filterValue: queueFilterValuesSelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  addTasks,
  changeCounter: changeRequestCount,
  changeFilter,
  changeQuantity: changeCreateTaskQuantity,
  replaceTasks,
  sendTask: queueSendTaskActionSaga,
  checkQueue: checkQueueActionSaga,
}

export const QueuePage = connect(mapStateToProps, mapDispatchToProps)(QueuePageContainer);