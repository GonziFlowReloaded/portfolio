import styles from "./projects.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { h1Variants, subTitleVariants } from "../../utils/motions/projectNavbar";
import Carousel from "../Carousel/Carousel";
import Cards from "../Cards/Cards";

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef();
  const pRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = h1Ref.current;
      const pElement = pRef.current;

      if (h1Element && pElement) {
        const h1Rect = h1Element.getBoundingClientRect();
        const pRect = pElement.getBoundingClientRect();

        setIsInView(
          h1Rect.top < window.innerHeight && pRect.top < window.innerHeight
        );
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <motion.h1
            className={styles.title}
            variants={h1Variants}
            initial="initial"
            animate={isInView ? "animate" : undefined}
            ref={h1Ref}
          >
            Proyectos
          </motion.h1>
        </div>
        <div
          className={styles.subTitleContainer}
          variants={h1Variants}
          initial="initial"
          animate={isInView ? "animate" : undefined}
          ref={h1Ref}
        >
          <motion.h3
            className={styles.subTitle}
            variants={subTitleVariants}
            initial="initial"
            ref={pRef}
            animate={isInView ? "animate" : undefined}
          >
            <a href="https://github.com/GonziFlowReloaded">
              Ver mis últimos proyectos
            </a>
          </motion.h3>
        </div>
        <div className={styles.cardsContainer}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;
