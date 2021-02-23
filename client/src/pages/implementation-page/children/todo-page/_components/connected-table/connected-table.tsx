import React, {Component} from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Overlay, WindowLoader } from '@artemelka/react-components';
import {
  AppStoreWithTodo,
  todoIsLoadingSelector,
  TodoItem,
  todoListSelector,
  todoTotalSelector,
} from '../../redux';
import style from './connected-table.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Table';

type MapStateToProps = {
  isLoading: boolean;
  list: Array<TodoItem>;
  total: number;
}

type ConnectedTableProps = MapStateToProps;

export class ConnectedTableComponent extends Component<ConnectedTableProps> {
  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__header`)}>
          header
        </div>
        <div className={cn(`${CLASS_NAME}__content`)}>
          {this.props.isLoading
            ? (
              <Overlay inContainer>
                <WindowLoader />
              </Overlay>
            ) : (
              <ul className={cn(`${CLASS_NAME}__list`)}>
                {this.props.list.map(item => (
                  <li key={item.id} className={cn(`${CLASS_NAME}__item`)}>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{item.status}</p>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
        <div className={cn(`${CLASS_NAME}__footer`)}>
          table total: {this.props.total}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStoreWithTodo): MapStateToProps => ({
  isLoading: todoIsLoadingSelector(state),
  list: todoListSelector(state),
  total: todoTotalSelector(state),
});

export const ConnectedTable = connect(mapStateToProps)(ConnectedTableComponent);