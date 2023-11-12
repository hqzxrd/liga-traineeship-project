import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './TaskForm.module.css';
import { Button } from 'components/Button';
import { useTypedSelector } from 'utils/useTypedSelector';
import { createTaskThunk, updateTaskThunk } from 'store/task/Task.thunk';
import { useAppDispatch } from 'store/store';
import { Input } from 'components/Input/Input';
import { Checkbox } from 'components/Checkbox/Checkbox';

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const tasks = useTypedSelector((state) => state.tasks.value);
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState(``);
  const [info, setInfo] = useState(``);
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const addTask = () => {
    if (!name && !info) return;

    dispatch(createTaskThunk({ name, info, isImportant, isCompleted }));
    nav(`/`, { replace: true });
  };

  const changeTask = () => {
    if (!name && !info) return;

    if (id) {
      const taskId = +id;
      dispatch(updateTaskThunk(taskId, { name, info, isImportant, isCompleted }));
      nav(`/`, { replace: true });
    }
  };

  useEffect(() => {
    if (!id) return;

    tasks.forEach((task) => {
      if (task.id !== +id) return;

      setName(task.name);
      setInfo(task.info);
      setIsImportant(task.isImportant);
      setIsCompleted(task.isCompleted);
    });
  }, []);

  return (
    <form className={styles.form}>
      <h4>{id ? `Change` : `Add`} task</h4>
      <label htmlFor="Title">Title</label>
      <Input onChange={(e) => setName(e.target.value)} value={name} />
      <label htmlFor="Description">Description</label>
      <Input onChange={(e) => setInfo(e.target.value)} value={info} />
      <Checkbox label="Important" onChange={() => setIsImportant(!isImportant)} checked={isImportant} />
      <Checkbox label="Complete" onChange={() => setIsCompleted(!isCompleted)} checked={isCompleted} />
      {id ? (
        <Button addClassName={styles.button} type="button" onClick={() => changeTask()}>
          Change
        </Button>
      ) : (
        <Button addClassName={styles.button} type="button" onClick={() => addTask()}>
          Add
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
