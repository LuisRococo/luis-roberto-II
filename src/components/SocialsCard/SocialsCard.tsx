import { SocialIcon } from "react-social-icons";
import styles from "./SocialsCards.module.css";
import { socials } from "../../data/socials";

const SocialsCard = () => {
  return (
    <div className={styles.card}>
      <h2>Socials</h2>
      <div className={styles["icons-cont"]}>
        {socials.map((social) => (
          <SocialIcon style={{ width: 50, height: 50 }} url={social.url} />
        ))}
      </div>
    </div>
  );
};

export default SocialsCard;
