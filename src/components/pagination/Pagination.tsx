import { FC } from 'react';
import styles from './Pagination.module.css';
import { useAppDispatch } from 'store/store';
import { setPageTaskAction } from 'store/task';
import { useTypedSelector } from 'utils/useTypedSelector';

export const Pagination: FC = () => {
  const { value: tasks, currentPage, perPage } = useTypedSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const pages = Math.ceil(tasks.length / perPage);

  if (pages === 1) return <div></div>;

  return (
    <div className={styles.pagination}>
      {[...Array(pages)].map((item, i) => {
        return (
          <div
            className={i + 1 === currentPage ? styles.active : ``}
            onClick={() => dispatch(setPageTaskAction(i + 1))}
            key={i}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};
