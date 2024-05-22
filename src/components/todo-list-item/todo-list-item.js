import { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    editedText: this.props.label,
    isEditing: false,
    timeElapsed: formatDistanceToNow(this.props.dateCreated, { includeSeconds: true }),
  };

  static defaultProps = {
    label: 'Default Label',
    dateCreated: new Date(),
    editItem: () => {},
    deleteItem: () => {},
    onToggleDone: () => {},
    done: false,
  };

  static propTypes = {
    label: PropTypes.string,
    dateCreated: PropTypes.instanceOf(Date),
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
  };

  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleInputChange = (e) => {
    this.setState({ editedText: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSave();
    }
  };

  handleSave = () => {
    const { editedText } = this.state;
    this.props.editItem(editedText);
    this.setState({ isEditing: false });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTimeElapsed(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTimeElapsed = () => {
    this.setState({
      timeElapsed: formatDistanceToNow(this.props.dateCreated, { includeSeconds: true }),
    });
  };

  render() {
    const { label, deleteItem, onToggleDone, done } = this.props;
    const { isEditing, editedText, timeElapsed } = this.state;

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
            <label>
              <span className={done ? 'label done' : 'label'}>{label}</span>
              <span className="created">created {timeElapsed} ago</span>
            </label>
          </>
        )}
        <button className="icon icon-edit" onClick={this.handleEdit}></button>
        <button className="icon icon-destroy" onClick={deleteItem}></button>
      </div>
    );
  }
}
