import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  constructor(props) {
    super(props)
    const { label, dateCreated } = this.props
    this.state = {
      editedText: label,
      isEditing: false,
      timeElapsed: formatDistanceToNow(dateCreated, { includeSeconds: true }),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTimeElapsed(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }))
  }

  handleInputChange = (e) => {
    this.setState({ editedText: e.target.value })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSave()
    }
  }

  handleSave = () => {
    const { editItem } = this.props
    const { editedText } = this.state
    
    editItem(editedText)
    this.setState({ isEditing: false })
  }

  updateTimeElapsed = () => {
    const { dateCreated } = this.props
    this.setState({
      timeElapsed: formatDistanceToNow(dateCreated, { includeSeconds: true }),
    })
  }

  render() {
    const { label, deleteItem, onToggleDone, done } = this.props
    const { isEditing, editedText, timeElapsed } = this.state

    return (
      <div className="view">
        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editedText}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
          />
        ) : (
          <>
            <input className="toggle" type="checkbox" onChange={onToggleDone} />
            <label htmlFor="inputElement">
              <span className={done ? 'label done' : 'label'}>{label}</span>
              <span className="created">created {timeElapsed} ago</span>
            </label>
          </>
        )}
        <button type="button" className="icon icon-edit" onClick={this.handleEdit} />
        <button type="button" className="icon icon-destroy" onClick={deleteItem} />
      </div>
    )
  }
}

TodoListItem.defaultProps = {
  label: 'Default Label',
  dateCreated: new Date(),
  editItem: () => {},
  deleteItem: () => {},
  onToggleDone: () => {},
  done: false,
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  dateCreated: PropTypes.instanceOf(Date),
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
}
