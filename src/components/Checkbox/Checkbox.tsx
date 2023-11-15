import { FC } from 'react';
import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange, disabled, containerClassName = '' }) => {
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
      <label className={disabled ? styles.labelDisabled : ``} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
