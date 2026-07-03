import styles from "./Navbar.module.css";

export default function Logo() {
  return (
    <a href="#home" className={styles.logo}>
      <span>V</span>
      <span>S</span>
    </a>
  );
}