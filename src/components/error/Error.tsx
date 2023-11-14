import React, { FC } from 'react';
import { TErrorProps } from './Error.types';
import styles from './Error.module.css';

const Error: FC<TErrorProps> = ({ errorClass, children }) => {
  return (
    <div className={`${styles.error} ${errorClass}`}>
      <h4 className={styles.errorTitle}>An error has occurred:</h4>
      {children}
    </div>
  );
};

export default Error;
