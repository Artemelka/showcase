import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TodoItemPageComponent extends Component {
  render() {
    return (
      <div>
        Item
      </div>
    );
  }
}

export const TodoItemPage = connect()(TodoItemPageComponent);