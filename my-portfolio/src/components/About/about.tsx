import styles from "./About.module.css";
import profile from "../../assets/img/me.jpeg";

export default function About() {
    return (
        <section className={styles.about} id="about">

            <div className={styles.imageSection}>
    <img src={profile} alt="Vastvik Sharma" className={styles.profile} />
</div>

            <div className={styles.content}>
                <p className={styles.smallTitle}>ABOUT ME</p>

                <div className={styles.titleLine}></div>

                <h2>Crafting Premium Digital Experiences.</h2>

                <p className={styles.text}>
                    I'm a Full Stack Developer passionate about creating beautiful,
                    performant and interactive web applications.
                </p>
                <p className={styles.signature}>Vastvik Sharma</p>

                <button className={styles.button}>
                    More About Me →
                </button>
            </div>

            <div className={styles.stats}>

                <div className={styles.card}>
                    <h3>3+</h3>
                    <p>Years Experience</p>
                </div>

                <div className={styles.card}>
                    <h3>25+</h3>
                    <p>Projects</p>
                </div>

                <div className={styles.card}>
                    <h3>15+</h3>
                    <p>Technologies</p>
                </div>

                <div className={styles.card}>
                    <h3>100%</h3>
                    <p>Client Satisfaction</p>
                </div>

            </div>

        </section>
    );
}