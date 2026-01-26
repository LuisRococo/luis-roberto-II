import Header from "./components/Header/Header";
import styles from "./App.module.css";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />

      <div className={`container ${styles["main-content"]}`}>
        <div className={styles["grid-content"]}>
          <div className={styles["grid-left-col"]}>hola</div>
          <div className={styles["grid-right-col"]}>
            <AboutMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
