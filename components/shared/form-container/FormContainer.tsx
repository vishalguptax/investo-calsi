"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./formContainer.module.css";
import calculateSIP from "@/utils/calculateSIP";
import { calculateLumpsum } from "@/utils/calculateLumpsum";
import UserValueForm from "../user-value-form/UserValueForm";

interface FormContainerProps {
  setResult: Dispatch<SetStateAction<InvestmentStatsType>>;
  mode: string;
}

export type InvestmentStatsType = {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
};

export const FormContainer = ({ setResult, mode }: FormContainerProps) => {
  const [investment, setInvestment] = useState<number>(5000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [duration, setDuration] = useState<number>(15);

  const handleInvestmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setInvestment(newValue);
    calculateAndSetResult(newValue, returnRate, duration);
  };

  const handleRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setReturnRate(newValue);
    calculateAndSetResult(investment, newValue, duration);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setDuration(newValue);
    calculateAndSetResult(investment, returnRate, newValue);
  };

  const calculateAndSetResult = useMemo(
    () => (investment: number, returnRate: number, duration: number) => {
      if (mode === "sip") {
        const result = calculateSIP(investment, returnRate, duration);
        setResult(result);
      }
      if (mode === "lumpsum") {
        const result = calculateLumpsum(investment, returnRate, duration);
        setResult(result);
      }
    },
    [mode]
  );

  useEffect(() => {
    calculateAndSetResult(investment, returnRate, duration);
  }, [mode]);

  return (
    <div className={styles.form_container}>
      <UserValueForm
        labelName={mode === "sip" ? "Monthly Investment" : "Total Investment"}
        min={100}
        max={mode === "sip" ? 1000000 : 100000000}
        step={50}
        prefix="₹"
        handleChange={handleInvestmentChange}
        value={investment}
      />
      <UserValueForm
        labelName={"Expected Return Rate"}
        min={1}
        step={1}
        max={50}
        suffix="%"
        handleChange={handleRateChange}
        value={returnRate}
      />
      <UserValueForm
        labelName={"Investment Duration"}
        min={1}
        step={1}
        max={50}
        suffix="Years"
        handleChange={handleDurationChange}
        value={duration}
      />
    </div>
  );
};
