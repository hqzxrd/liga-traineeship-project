import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

export function Checkbox({ label, checked, onChange, disabled, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        className={styles.customCheckbox}
        type="checkbox"
        value=""
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
