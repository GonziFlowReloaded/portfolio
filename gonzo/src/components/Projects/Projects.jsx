import styles from "./projects.module.css";
import Carousel from "../Carousel/Carousel";
import Cards from "../Cards/Cards";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Proyectos</h1>
        </div>
        <div className={styles.cardsContainer}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;
