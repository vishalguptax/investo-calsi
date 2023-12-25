"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import styles from "./formContainer.module.css";
import { InvestmentStatsCard } from "../investmentStatsCard/InvestmentStatsCard";
import StatChart from "../statChart/StatChart";
import UserValueForm from "../userValueForm/UserValueForm";
import calculateSIP from "@/utils/calculateSIP";
import Switcher from "@/components/ui/switcher/Switcher";
import { calculateLumpsum } from "@/utils/calculateLumpsum";

export type InvestmentStatsType = {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
};

export const FormContainer = () => {
  const hours = new Date().getHours();
  const [mode, setMode] = useState<string>("sip");
  const [investment, setInvestment] = useState<number>(5000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [duration, setDuration] = useState<number>(15);
  const [result, setResult] = useState<InvestmentStatsType>({
    totalInvestment: 600000,
    totalReturns: 561695,
    totalValue: 1161695,
  });

  const handleModeChange = (value: string) => {
    setMode(value);
  };

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
    <div className={styles.form_wrapper}>
      <div className={styles.form_header}>
        <Switcher handleChange={handleModeChange} mode={mode} />
        <h6>
          {hours < 12
            ? "Good morning!"
            : hours < 18
            ? "Good afternoon!"
            : "Good evening!"}
        </h6>
      </div>
      <div className={styles.form}>
        <div className={styles.form_container}>
          <UserValueForm
            labelName={
              mode === "sip" ? "Monthly Investment" : "Total Investment"
            }
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
        <div>
          <StatChart data={result} />
        </div>
      </div>
      <InvestmentStatsCard {...result} />
    </div>
  );
};
