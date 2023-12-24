"use client";
import { ChangeEvent, memo } from "react";
import { Card } from "@/components/ui/card/Card";
import styles from "./userValueForm.module.css";

interface UserValueFormProps {
  labelName: string;
  min: number;
  max: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number | string | undefined;
  step: number;
  prefix?: string;
  suffix?: string;
}

function UserValueForm({
  labelName,
  min,
  max,
  handleChange,
  value,
  step,
  prefix,
  suffix,
}: UserValueFormProps) {
  return (
    <div className={styles.form_container}>
      <Card className={styles.card}>
        <div className={styles.input_container}>
          <label className={styles.label} htmlFor="investment-amount">
            {labelName}
          </label>
          <div className={styles.input_wrapper}>
            {prefix && <span>{prefix}</span>}
            <input
              value={value}
              onChange={handleChange}
              className={styles.number_input}
              type="number"
              placeholder={"Enter amount"}
              min={min}
              id="investment-amount"
            />
            {suffix && <span>{suffix}</span>}
          </div>
        </div>
        <input
          type="range"
          className={styles.range_input}
          value={value}
          id="investment-amount"
          onChange={handleChange}
          step={step}
          min={min}
          max={max}
        />
      </Card>
    </div>
  );
}

export default memo(UserValueForm);
