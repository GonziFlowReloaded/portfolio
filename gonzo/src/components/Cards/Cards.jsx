import styles from "./cards.module.css";
import projects from "../../utils/projects.json";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const Cards = () => {
  return (
    <div className={styles.container}>
      {projects.data.map((project, index) => (
        <div className={styles.cardContainer} key={index}>
          <div className={styles.card}>
            <img src={project.image} alt="image" className={styles.img} />
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>{project.name}</p>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className={styles.icon} />
              </a>
              <p className={styles.cardDescription}>

              </p>
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LanguageIcon className={styles.icon} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
