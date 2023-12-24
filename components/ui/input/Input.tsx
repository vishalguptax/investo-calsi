import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, value, type, ...rest } = props;

  const inputClass = classNames(className, styles.input_container);
  const inputRangeClass = classNames(className, styles.input_range_container);

  return (
    <input
      {...rest}
      type={type}
      className={type === "range" ? inputRangeClass : inputClass}
    />
  );
};
