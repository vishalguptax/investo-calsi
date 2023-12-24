import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <header>
        <h1 className={styles.logo}>investoCalsi</h1>
        <Link href={"#"} className={styles.author_link}>
          by Vishal Gupta
        </Link>
      </header>
    </nav>
  );
};

export default Navbar;
