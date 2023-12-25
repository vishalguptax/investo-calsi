"use client";

import { useState } from "react";
import styles from "./main.module.css";
import Switcher from "@/components/ui/switcher/Switcher";
import { Greet } from "@/components/shared/greet/Greet";
import { FormContainer } from "@/components/shared/form-container/FormContainer";
import StatsChart from "@/components/shared/stats-chart/StatsChart";
import { InvestmentStatsCard } from "@/components/shared/investment-stats-card/InvestmentStatsCard";
import { ReferralCard } from "@/components/shared/referral-card/ReferralCard";

export type InvestmentStatsType = {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
};

const Main = () => {
  const [mode, setMode] = useState<string>("sip");
  const [result, setResult] = useState<InvestmentStatsType>({
    totalInvestment: 600000,
    totalReturns: 561695,
    totalValue: 1161695,
  });

  const handleModeChange = (value: string) => {
    setMode(value);
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.main_header}>
        <Switcher handleChange={handleModeChange} mode={mode} />
        <Greet />
      </div>
      <div className={styles.main_middle}>
        <FormContainer setResult={setResult} mode={mode} />
        <StatsChart data={result} />
      </div>
      <div className={styles.main_bottom}>
        <InvestmentStatsCard {...result} />
        <ReferralCard />
      </div>
    </section>
  );
};

export default Main;
