import styles from "./ToolsSection.module.css";
import { tools } from "../../data/tools";

const ToolsSection = () => {
  return (
    <div>
      <h2 className={styles.header}>Tools</h2>

      <div className={styles["tools-cont"]}>
        {tools.map((tool) => {
          return (
            <div className={styles.item}>
              <div className={styles["icon-cont"]}>
                <tool.icon className={styles.icon} />
              </div>
              <p>{tool.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsSection;
