import { Component } from 'react';
import './clear-completed.css';

export default class ClearCompleted extends Component {
  render() {
    const { deleteCompletedItem } = this.props;

    return (
      <button className="clear-completed" onClick={deleteCompletedItem}>
        Clear completed
      </button>
    );
  }
}
