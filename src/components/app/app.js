import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import { formatDistanceStrict } from 'date-fns';
import './app.css'

const App = () => {

  const distance = formatDistanceStrict(
    new Date(2024, 4, 12, 12, 10, 35),
    new Date()
  );

  const todoData = [
    { id: 1, description: 'Completed task', created: `${distance} ago`, completed: true, editing: false },
    { id: 2, description: 'Editing task', created: `${distance} ago`, completed: false, editing: true },
    { id: 3, description: 'Active task', created: `${distance} ago`, completed: false, editing: false }
  ];

  return (
    <div className="todoapp">
      <div className="main">
        <NewTaskForm />
        <TaskList todos = {todoData} />
        <Footer />
      </div>
    </div>
  );
};

export default App