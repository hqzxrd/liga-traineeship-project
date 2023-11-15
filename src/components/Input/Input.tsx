import { FC } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({ onClickReset, inputClassName, ...rest }) => {
  return (
    <div className={styles.search}>
      <input {...rest} className={`${styles.searchInput} ${inputClassName}`} />
      {onClickReset && (
        <button type="button" className={styles.reset} onClick={() => onClickReset()}>
          <i className="fa fa-close"></i>
        </button>
      )}
    </div>
  );
};
