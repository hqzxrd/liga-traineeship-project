import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from 'app/taskList/TaskList';
import TaskForm from 'app/taskForm/TaskForm';
import './assets/styles/global.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="task_form" element={<TaskForm />} />
          <Route path="task_form/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
