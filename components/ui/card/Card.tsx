import { FC } from "react";
import styles from "./card.module.css";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { children, className } = props;

  const cardClassName = classNames(className, styles.card);

  return <div className={cardClassName}>{children}</div>;
};
