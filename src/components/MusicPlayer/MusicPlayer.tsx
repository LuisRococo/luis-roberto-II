import styles from "./MusicPlayer.module.css";
import sugarAlbumCover from "../../assets/songs/this-girl/this-girl.jpeg";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";

const MusicPlayer = () => {
  return (
    <div className={styles.player}>
      <div className={styles.header}>
        <p className={styles.title}>This Girl</p>
        <p className={styles.artist}>Kungs</p>
      </div>

      <div className={styles["img-wrapper"]}>
        <img src={sugarAlbumCover} alt="song album cover" />
      </div>

      <div className={styles["control-cont"]}>
        <div className={styles["control-btn"]}>
          <MdSkipPrevious />
        </div>
        <div className={styles["pause-btn"]}>
          {true ? <FaPlay /> : <FaPause />}
        </div>
        <div className={styles["control-btn"]}>
          <MdSkipNext />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
