import TodoCount from '../todo-count';
import TasksFilter from '../tasks-filter';
import ClearCompleted from '../clear-completed';
import './footer.css';

const Footer = ({ doneCount, currentTab, setFilter, activeFilter, deleteCompletedItem }) => {
  return (
    <footer className="footer">
      <TodoCount doneCount={doneCount} />
      <TasksFilter currentTab={currentTab} setFilter={setFilter} activeFilter={activeFilter} />
      <ClearCompleted deleteCompletedItem={deleteCompletedItem} />
    </footer>
  );
};

export default Footer;
