import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div>
        Copyright © {new Date().getFullYear()}{" "}
        <span className={styles.logo}>investoCalsi</span>
      </div>
      <Link href={"#"} className={styles.github_link}>
        <Image
          src={"./images/github-mark.svg"}
          alt="github-icon"
          width={16}
          height={16}
        />
        Github Repo
      </Link>
    </footer>
  );
};
