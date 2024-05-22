import { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
  render() {
    const { todos, onToggleDone, toggleEditMode, editItem, deleteItem } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id}>
          <TodoListItem
            {...itemProps}
            onToggleDone={() => onToggleDone(id)}
            toggleEditMode={() => toggleEditMode(id)}
            editItem={(newText) => editItem(id, newText)}
            deleteItem={() => deleteItem(id)}
          />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
