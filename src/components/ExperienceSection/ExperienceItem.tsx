import type { FC } from "react";
import {type IExperience} from "../../data/experience";
import styles from "./Experience.module.css";

interface props {
    experience: IExperience
}

const ExperienceItem: FC<props> = ({experience}) => {
  return <div className={styles.item}>
    <p className={styles["date-range"]}>{experience.dateRange}</p>
    <div className={styles.content}>
        <img className={styles.img} src={experience.icon} alt="company icon" />
        <div className={styles["info-cont"]}>
            <p className={styles.company}>{experience.company}</p>
            <p className={styles.position}>{experience.position}</p>
        </div>
    </div>
  </div>;
};

export default ExperienceItem;
