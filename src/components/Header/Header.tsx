import styles from "./Header.module.css";
import avatarImg from "../../assets/images/profile-img-old-improved.jpeg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <img
            className={styles.avatar}
            src={avatarImg}
            alt="profile picture"
          />
          <h1 className={styles.name}>Luis Roberto Peña</h1>
          <p className={styles.career}>Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
