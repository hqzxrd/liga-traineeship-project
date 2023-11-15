import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './List.module.css';
import { TTask } from 'types/task.type';
import { useTypedSelector } from 'utils/useTypedSelector';
import { useAppDispatch } from 'store/store';
import { getAllTaskThunk } from 'store/task/Task.thunk';
import { Loader } from 'components/lodaer/Loader';
import { Error } from 'components/error';
import { Task } from 'app/taskList/components';

export const List: FC = () => {
  const { search } = useLocation();
  const dispatch = useAppDispatch();
  const { value: tasks, isLoading, error } = useTypedSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTaskThunk(search));
  }, [search]);

  if (error)
    return (
      <Error>
        <p>{error}</p>
      </Error>
    );

  if (isLoading) return <Loader />;

  return (
    <div className={styles.tasks}>
      {tasks.map((task: TTask, i) => {
        return <Task key={task.id} index={i + 1} task={task} />;
      })}
    </div>
  );
};
