import { useEffect, useState } from "react";

import Logo from "./logo";
import NavLinks from "./navLinks";
import MenuButton from "./menuButtons";
import Container from "../container/container";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <NavLinks />
          <MenuButton />
        </div>
      </Container>
    </header>
  );
}