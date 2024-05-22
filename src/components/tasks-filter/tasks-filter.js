import { Component } from 'react';
import './tasks-filter.css';

export default class TasksFilter extends Component {
  render() {
    const { setFilter, activeFilter } = this.props;
    const onAllClickHandler = () => setFilter('all');
    const onActiveClickHandler = () => setFilter('active');
    const onCompletedClickHandler = () => setFilter('completed');

    return (
      <ul className="filters">
        <li>
          <button className={activeFilter === 'all' ? 'selected' : ''} onClick={onAllClickHandler}>
            All
          </button>
        </li>
        <li>
          <button className={activeFilter === 'active' ? 'selected' : ''} onClick={onActiveClickHandler}>
            Active
          </button>
        </li>
        <li>
          <button className={activeFilter === 'completed' ? 'selected' : ''} onClick={onCompletedClickHandler}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
