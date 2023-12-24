"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import styles from "./formContainer.module.css";
import { InvestmentStatsCard } from "../investmentStatsCard/InvestmentStatsCard";
import StatChart from "../statChart/StatChart";
import UserValueForm from "../userValueForm/UserValueForm";

export type InvestmentStatsType = {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
};

export const FormContainer = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [duration, setDuration] = useState(15);
  const [sipResult, setSipResult] = useState<InvestmentStatsType>({
    totalInvestment: 600000,
    totalReturns: 561695,
    totalValue: 1161695,
  });
  const handleMonthlyInvestmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setMonthlyInvestment(newValue);
  };

  const handleRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setReturnRate(newValue);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setDuration(newValue);
  };

  const calculateSipResult = useMemo(
    () =>
      debounce(
        (monthlyInvestment: number, returnRate: number, duration: number) => {
          const P = monthlyInvestment;
          const Y = duration;
          const R = returnRate;
          const n = Y * 12;
          const i = R / 100 / 12;

          let M = (P * ((1 + i) ** n - 1) * (1 + i)) / i;

          M = Math.ceil(M);

          const totalInvestment = P * n;
          const totalReturns = M - totalInvestment;
          const totalValue = M;

          setSipResult({
            totalInvestment,
            totalReturns,
            totalValue,
          });
        },
        300
      ),
    []
  );

  useEffect(() => {
    calculateSipResult(monthlyInvestment, returnRate, duration);
    return () => calculateSipResult.cancel();
  }, [duration, returnRate, monthlyInvestment]);

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form}>
        <div className={styles.form_container}>
          <UserValueForm
            labelName={"Monthly investment"}
            min={100}
            max={1000000}
            step={50}
            prefix="₹"
            handleChange={handleMonthlyInvestmentChange}
            value={monthlyInvestment}
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
        <StatChart data={sipResult} />
      </div>
      <InvestmentStatsCard {...sipResult} />
    </div>
  );
};
