import { ButtonProps } from './Button.types';
import './Button.css';

export function Button({ buttonClassName = '', children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`customButton ${buttonClassName}`}>
      {children}
    </button>
  );
}
