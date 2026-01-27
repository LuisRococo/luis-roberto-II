import { SocialIcon } from "react-social-icons";
import styles from "./Footer.module.css";
import { socials } from "../../data/socials";

const Footer = () => {
  return (
    <footer>
      <div className={styles["phrase-cont"]}>
        <p className={styles.phrase}>
          "Be who you were created to be, and you will set the world on fire"
        </p>
        <p className={styles.author}>St. Catherine of Siena</p>
      </div>

      <div className={styles.socials}>
        {socials.map((social) => (
          <div className={styles["icon-cont"]}>
            <SocialIcon url={social.url} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
