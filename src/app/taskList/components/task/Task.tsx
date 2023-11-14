import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './Task.module.css';
import { ITaskProps } from './Task.types';
import { Button } from 'components/Button';
import { deleteTaskThunk } from 'store/task/Task.thunk';
import { useAppDispatch } from 'store/store';

const Task: FC<ITaskProps> = ({ task, index }) => {
  const dispatch = useAppDispatch();

  const deleteTask = () => {
    dispatch(deleteTaskThunk(task.id));
  };

  return (
    <div className={styles.task}>
      <div className={styles.taskWrapper}>
        <div className={styles.main}>
          <h4>№{`${index}. ${task.name}`}</h4>
          <p>{task.info}</p>
          <div className={styles.lables}>
            {task.isCompleted ? <div className={styles.done}>Done</div> : <div className={styles.active}>Active</div>}
            {task.isImportant && <div className={styles.important}>Important</div>}
          </div>
        </div>
        <div className={styles.taskInteractionBtns}>
          <Button>
            <Link to={`task_form/${task.id}`}>Change</Link>
          </Button>
          <Button type="button" onClick={() => deleteTask()}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
