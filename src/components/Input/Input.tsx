import styles from './Input.module.css';
import { InputProps } from './Input.types';

export function Input({ onClickReset, ...rest }: InputProps) {
  return (
    <div className={styles.search}>
      <input {...rest} className={styles.searchInput} />
      {onClickReset && (
        <button type="button" className={styles.reset} onClick={() => onClickReset()}>
          <i className="fa fa-close"></i>
        </button>
      )}
    </div>
  );
}
