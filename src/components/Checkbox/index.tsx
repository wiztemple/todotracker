import { FC } from 'react';
import { CheckboxProps } from '../../types';
import "./Checkbox.css";

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark"></span>
    </label>
  );
};
