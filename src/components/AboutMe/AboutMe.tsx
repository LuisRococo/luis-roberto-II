import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div>
      <h2 className={styles.header}>About me</h2>
      <div className={styles.content}>
        <p>
          I am a software Engineer that finds peace with good friends and living
          the life. I think deep connections with the people we care is really
          important
        </p>
        <p>I love finding solutions to problems through code.</p>
        <p>
          I stand out on Web Development 👨‍💻 areas like Backend, Frontend and
          Databases. I have worked in Mobile Development 📱 and Arduino 🤖.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
