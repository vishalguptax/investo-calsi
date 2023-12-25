import { Card } from "@/components/ui";
import { referralLink } from "@/constants/referral-links";
import Image from "next/image";
import Link from "next/link";
import styles from "./referralCard.module.css";

export const ReferralCard = () => {
  return (
    <Card className={styles.card}>
      <div className={styles.card_header}>
        <h4>Start Investing</h4>
        <p>Open demat account to invest</p>
      </div>
      <div className={styles.links}>
        {referralLink.map((i) => (
          <Link key={i.link} href={i.link} target="_blank">
            <Image src={i.logo} alt={i.name} width={100} height={100} />
          </Link>
        ))}
      </div>
    </Card>
  );
};
