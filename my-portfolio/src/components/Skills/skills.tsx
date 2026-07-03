import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "GSAP",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Axios",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Firebase",
      "NoSQL",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "React Navigation",
      "Redux Toolkit",
      "Context API",
      "NativeWind",
      "React Native Paper",
      "AsyncStorage",
      "Push Notifications",
      "Deep Linking",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Arduino",
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">

      <p className={styles.smallTitle}>SKILLS</p>
      <div className={styles.titleLine}></div>

      <h2 className={styles.heading}>
        SKILLS & EXPERTISE
      </h2>

      

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.card}>

            <h3>{category.title}</h3>

            <div className={styles.skillList}>
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}