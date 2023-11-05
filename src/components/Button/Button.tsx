import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export function Button({ addClassName, children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`${styles.button} ${addClassName}`}>
      {children}
    </button>
  );
}
