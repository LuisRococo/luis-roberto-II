import experience from "../../data/experience";
import styles from "./Experience.module.css";
import ExperienceItem from "./ExperienceItem";
import CodingFunImg from "../../assets/images/coding-fun.webp";

const ExperienceSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <h2>Experience</h2>

        <div className={styles["experience-list"]}>
          {experience.map((item) => {
            return <ExperienceItem key={item.company} experience={item} />;
          })}
        </div>
      </div>

      <div className={styles["right-side"]}>
        <img
          className={styles["motivational-img"]}
          src={CodingFunImg}
          alt="Saint Joan Of Arc Phrase"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
