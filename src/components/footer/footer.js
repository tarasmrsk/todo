import TodoCount from '../todo-count';
import TasksFilter from '../tasks-filter';
import ClearCompleted from '../clear-completed';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <TodoCount />
        <TasksFilter />
        <ClearCompleted />
    </footer>
  );
};

export default Footer