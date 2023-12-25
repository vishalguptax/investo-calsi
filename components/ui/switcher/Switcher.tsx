"use client";

import { ChangeEvent } from "react";
import styles from "./switcher.module.css";

type SwitcherProps = {
  handleChange: (arg0: string) => void;
  mode: string;
};

export default function Switcher({ handleChange, mode }: SwitcherProps) {
  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <div className={styles.switcher}>
      <label htmlFor="sip">
        <input
          value="sip"
          checked={mode === "sip"}
          type="radio"
          name="switcher"
          id="sip"
          onChange={handleModeChange}
        />
        SIP
      </label>
      <label htmlFor="lumpsum">
        <input
          value="lumpsum"
          checked={mode === "lumpsum"}
          type="radio"
          name="switcher"
          id="lumpsum"
          onChange={handleModeChange}
        />
        Lumpsum
      </label>
    </div>
  );
}
