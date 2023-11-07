import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './TaskForm.module.css';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { changeTaskAction, createTaskAction } from 'store/actions/Task.action';
import { useTypedSelector } from 'utils/useTypedSelector';
import { Checkbox } from 'components/Checkbox';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { tasks } = useTypedSelector((state) => state);
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState(``);
  const [info, setInfo] = useState(``);
  const [isImportant, setIsImportant] = useState(false);

  const addTask = () => {
    if (!name && !info) return;

    dispatch(createTaskAction({ name, info, isImportant }));
    nav(`/`, { replace: true });
  };

  const changeTask = () => {
    if (!name && !info) return;

    if (id) {
      const taskId = +id;
      dispatch(changeTaskAction({ id: taskId, name, info, isImportant }));
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
