import styles from "./carousel.module.css";
import projects from "../../utils/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {projects.data.map((project, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.card}>
                <img src={project.image} alt="image" className={styles.image} />
                <div className={styles.cardContent}>
                  <p className={styles.cardTitle}>{project.name}</p>
                  <div className={styles.cardDescription}>
                    <article className={styles.description}>
                      <p className={styles.p}>Descripción:</p>
                      {project.description}
                    </article>
                    <div className={styles.stackContainer}>
                      <p className={styles.p}>Tecnologías:</p>
                      <article>{project.tools.join(",  ")}</article>
                    </div>
                  </div>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className={styles.icon} />
                    </a>
                  )}
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
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
