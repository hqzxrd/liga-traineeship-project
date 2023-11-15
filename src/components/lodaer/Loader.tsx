import React, { FC } from 'react';
import { LoaderProps } from './Loader.types';
import styles from './Loader.module.css';

export const Loader: FC<LoaderProps> = ({ variant = 'circle' }) => {
  const loaderClass = variant === 'dot' ? 'spinner-grow spinner-grow-sm' : 'spinner-border text-primary';

  return (
    <div className={styles.loaderWrapper}>
      <div className={`${loaderClass} ${styles.loader}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
