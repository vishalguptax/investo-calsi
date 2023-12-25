import styles from "./greet.module.css";

export const Greet = () => {
  const hours = new Date().getHours();

  return (
    <h6 className={styles.greet_message}>
      {hours < 12
        ? "Good morning!"
        : hours < 18
        ? "Good afternoon!"
        : "Good evening!"}
    </h6>
  );
};
