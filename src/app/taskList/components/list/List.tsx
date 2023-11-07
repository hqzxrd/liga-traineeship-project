import { FC } from 'react';
import Task from '../task/Task';
import styles from './List.module.css';
import { TTask } from 'types/task.type';
import { useTypedSelector } from 'utils/useTypedSelector';

const List: FC = () => {
  const tasks = useTypedSelector((state) => state.tasks);

  return (
    <div className={styles.tasks}>
      {tasks.map((task: TTask, i) => {
        return <Task key={task.id} index={i + 1} task={task} />;
      })}
    </div>
  );
};

export default List;
