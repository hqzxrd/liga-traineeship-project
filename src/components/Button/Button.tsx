import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ addClassName, children, ...rest }) => {
  return (
    <button {...rest} className={`${styles.button} ${addClassName}`}>
      {children}
    </button>
  );
};
