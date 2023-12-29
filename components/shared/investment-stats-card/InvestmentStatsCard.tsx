import CountUp from "react-countup";
import { Card } from "@/components/ui/card/Card";
import { InvestmentStatsType } from "../form-container/FormContainer";
import { formatNumber } from "@/utils/formatNumber";
import styles from "./investmentStatsCard.module.css";

export const InvestmentStatsCard = (data: InvestmentStatsType) => {
  return (
    <Card className={styles.stat_card}>
      <div className={styles.stat_container}>
        <p>Total Returns</p>{" "}
        <p>
          ₹ <CountUp end={data.totalReturns} duration={1} />
        </p>
      </div>
      <div className={styles.stat_container}>
        <p>Total Investment</p>{" "}
        <p>
          ₹ <CountUp end={data.totalInvestment} duration={1} />
        </p>
      </div>
      <div className={styles.stat_container}>
        <p>Total Value</p>{" "}
        <p>
          ₹ <CountUp end={data.totalValue} duration={1} />
        </p>
      </div>
    </Card>
  );
};
