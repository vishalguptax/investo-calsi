import { Card } from "@/components/ui/card/Card";
import { InvestmentStatsType } from "../formContainer/FormContainer";
import { formatNumber } from "@/utils/formatNumber";
import styles from "./investmentStatsCard.module.css";
export const InvestmentStatsCard = (data: InvestmentStatsType) => {
  return (
    <Card className={styles.stat_card}>
      <div className={styles.stat_container}>
        <p>Total Returns</p> <p>₹ {formatNumber(data.totalReturns)}</p>
      </div>
      <div className={styles.stat_container}>
        <p>Total Investment</p> <p>₹ {formatNumber(data.totalInvestment)}</p>
      </div>
      <div className={styles.stat_container}>
        <p>Total Value</p> <p>₹ {formatNumber(data.totalValue)}</p>
      </div>
    </Card>
  );
};
