import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskList } from 'app/taskList';
import { TaskForm } from 'app/taskForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="task_form" element={<TaskForm />} />
        <Route path="task_form/:id" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
