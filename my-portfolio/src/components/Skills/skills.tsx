import styles from "./Skills.module.css";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">

      <p className={styles.smallTitle}>SKILLS</p>
      <div className={styles.titleLine}></div>

     <div className={styles.headingRow}>
  <h2 className={styles.heading}>
    SKILLS & EXPERTISE
  </h2>

  <p className={styles.joke}>
    {"// It compiled... don't touch anything."}
  </p>
</div>



      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.card}>
            <h3>{category.title}</h3>

            <div className={styles.skillList}>
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span key={skill.name} className={styles.pill}>
                    {Icon && (
                      <Icon
                        className={styles.icon}
                        style={{ color: skill.color }}
                      />
                    )}

                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}