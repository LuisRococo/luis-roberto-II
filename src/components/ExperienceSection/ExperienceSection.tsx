import experience from "../../data/experience";
import styles from "./Experience.module.css";
import ExperienceItem from "./ExperienceItem";
import joanOfArcPhraseImg from "../../assets/images/joan_of_arc_phrase_3.jpg";

const ExperienceSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Experience</h2>

        <div className={styles["experience-list"]}>
          {experience.map((item) => {
            return <ExperienceItem experience={item} />;
          })}
        </div>
      </div>

      <img
        className={styles["motivational-img"]}
        src={joanOfArcPhraseImg}
        alt="Saint Joan Of Arc Phrase"
      />
    </div>
  );
};

export default ExperienceSection;
