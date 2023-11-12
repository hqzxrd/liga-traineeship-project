import React, { FC } from 'react';
import { TErrorProps } from './Error.types';
import styles from './Error.module.css';

const Error: FC<TErrorProps> = ({ errorClass, children }) => {
  return <div className={`${styles.error} ${errorClass}`}>{children}</div>;
};

export default Error;
