import { Component } from 'react'

import TodoListItem from '../todo-list-item'
import './todo-list.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoList extends Component {
  render() {
    const { todos, onToggleDone, toggleEditMode, editItem, deleteItem } = this.props

    const elements = todos.map((item) => {
      const { id, label, done } = item

      return (
        <li key={id}>
          <TodoListItem
            id={id}
            label={label}
            done={done}
            onToggleDone={() => onToggleDone(id)}
            toggleEditMode={() => toggleEditMode(id)}
            editItem={(newText) => editItem(id, newText)}
            deleteItem={() => deleteItem(id)}
          />
        </li>
      )
    })

    return <ul className="todo-list">{elements}</ul>
  }
}