import styles from "./carousel.module.css";
import { useState } from "react";
import projects from "../../utils/projects.json";
import settings from "../../utils/sliderSettings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgb(43, 39, 61)",
  borderRadius: "10px",
  p: 2,
};

const Carousel = () => {
  const [openModals, setOpenModals] = useState(
    new Array(projects.data.length).fill(false)
  );

  const handleOpenModal = (index) => {
    const newModals = [...openModals];
    newModals[index] = true;
    setOpenModals(newModals);
  };

  const handleCloseModal = (index) => {
    const newModals = [...openModals];
    newModals[index] = false;
    setOpenModals(newModals);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {projects.data.map((project, index) => (
              <div className={styles.cardContainer} key={index}>
                <div className={styles.card}>
                  <img
                    src={project.image}
                    alt="image"
                    className={styles.image}
                  />
                  <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>{project.name}</p>
                    <div className={styles.buttonContainer}>
                      <button
                        onClick={() => handleOpenModal(index)}
                        className={styles.buttonModal}
                      >
                        Ver más
                      </button>
                    </div>
                    <Modal
                      open={openModals[index]}
                      onClose={() => handleCloseModal(index)}
                    >
                      <Box sx={style}>
                        <div className={styles.buttonCloseContainer}>
                          <button
                            onClick={() => handleCloseModal(index)}
                            className={styles.closeButton}
                          >
                            <CloseIcon />
                          </button>
                        </div>
                        <div className={styles.cardDescription}>
                          <article className={styles.description}>
                            <p className={styles.p}>Descripción:</p>
                            {project.description}
                          </article>
                          <div className={styles.stackContainer}>
                            <p className={styles.p}>Tecnologías:</p>
                            <article>{project.tools.join(",  ")}</article>
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
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
