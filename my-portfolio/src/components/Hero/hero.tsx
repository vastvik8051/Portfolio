import styles from "./hero.module.css";
import raven from "../../assets/img/raven.png";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <p className={styles.intro}>HELLO, I'M</p>

        <h1 className={styles.name}>
          <span>V</span>A<span>S</span>T<span>V</span>I<span>K</span>
          <br />
          S<span>H</span>A<span>R</span>M<span>A</span>
        </h1>

        <p className={styles.description}>
  I BUILD PREMIUM DIGITAL EXPERIENCES
</p>

<p className={styles.description_two}>
  THAT ARE FAST, INTERACTIVE & IMPACTFUL.
</p>

        <button className={styles.button}>Explore My Work →</button>
      </div>

      <div className={styles.right}>
        <img src={raven} alt="raven" className={styles.raven} />
      </div>
    </section>
  );
}