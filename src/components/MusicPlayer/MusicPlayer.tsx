import styles from "./MusicPlayer.module.css";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import { songs } from "../../data/songs";
import { useClassTemporizer } from "../../hooks/classTemporizer";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    startReset: resetAlbumPosition,
    isActive: isTurningStopped,
  } = useClassTemporizer(200);
  const {
    startReset: startAlbumBlink,
    isActive: isAlbumHidden,
  } = useClassTemporizer(200);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % songs.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    resetAlbumPosition();
    startAlbumBlink();
  };

  const prevTrack = () => {
    const prevIndex =
      currentTrackIndex === 0 ? songs.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
    resetAlbumPosition();
    startAlbumBlink();
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={songs[currentTrackIndex].song}
        autoPlay={isPlaying}
        onEnded={nextTrack}
      />

      <div className={styles.header}>
        <p className={styles.title}>{songs[currentTrackIndex].songName}</p>
        <p className={styles.artist}>{songs[currentTrackIndex].artist}</p>
      </div>

      <div className={styles["img-wrapper"]}>
        <img
          className={`${isTurningStopped ? "" : styles["rotate-anim"]} ${
            isAlbumHidden ? styles["opacity-0"] : ""
          }`}
          style={!isPlaying ? { animationPlayState: "paused" } : {}}
          src={songs[currentTrackIndex].image}
          alt="song album cover"
        />
      </div>

      <div className={styles["control-cont"]}>
        <div className={styles["control-btn"]} onClick={prevTrack}>
          <MdSkipPrevious />
        </div>
        <div className={styles["pause-btn"]} onClick={togglePlay}>
          {!isPlaying ? <FaPlay /> : <FaPause />}
        </div>
        <div className={styles["control-btn"]} onClick={nextTrack}>
          <MdSkipNext />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
