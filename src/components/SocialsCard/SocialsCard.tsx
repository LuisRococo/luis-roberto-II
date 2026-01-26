import { SocialIcon } from "react-social-icons";
import styles from "./SocialsCards.module.css";

const SocialsCard = () => {
  return (
    <div className={styles.card}>
      <h2>Socials</h2>
      <div className={styles["icons-cont"]}>
        <SocialIcon style={{ width: 50, height: 50 }} url="www.instagram.com" />
        <SocialIcon style={{ width: 50, height: 50 }} url="www.linkedin.com" />
        <SocialIcon style={{ width: 50, height: 50 }} url="www.github.com" />
      </div>
    </div>
  );
};

export default SocialsCard;
