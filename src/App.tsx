import Header from "./components/Header/Header";
import styles from "./App.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import SocialsCard from "./components/SocialsCard/SocialsCard";
import ThingsILike from "./components/ThingsILike/ThingsILike";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

function App() {
  return (
    <>
      <Header />

      <div className={`container ${styles["main-content"]}`}>
        <div className={styles["grid-content"]}>
          <div className={styles["grid-left-col"]}>
            <SocialsCard />
          </div>
          <div className={styles["grid-right-col"]}>
            <AboutMe />
            <ThingsILike />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
