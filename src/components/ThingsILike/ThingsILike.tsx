import { FaHeart } from "react-icons/fa";
import likes from "../../data/likes";
import styles from "./ThingsILike.module.css";

const ThingsILike = () => {
  return (
    <div className={styles.container}>
      <h2>Things I like</h2>

      <div className={styles.list}>
        {likes.map((item) => {
          return (
            <div key={item} className={styles["list-item"]}>
              <FaHeart className={styles.icon} />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThingsILike;
