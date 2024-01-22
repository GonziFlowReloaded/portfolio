import styles from "./about.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image from "../../assets/gonzi.png";
import Slider from "../Slider/Slider";
import resume from "../../assets/jose_gonzalo_scali_resume.pdf";

const h1Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const spanVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
        <div className={styles.mainContainer}>
          <motion.h1
            className={styles.title}
            variants={h1Variants}
            initial="initial"
            animate={isInView && "animate"}
            ref={h1Ref}
          >
            Sobre mi
          </motion.h1>
          <div className={styles.textContainer}>
            <div className={styles.imageContainer}>
              <motion.img
                src={image}
                alt="image"
                className={`${styles.image} ${
                  imageLoaded ? styles.imageLoaded : ""
                }`}
                onLoad={() => setImageLoaded(true)}
                variants={imageVariants}
                initial="initial"
                animate={isInView && "animate"}
              />
            </div>
            <div className={styles.bioContainer}>
              <motion.p
                className={styles.text}
                variants={spanVariants}
                initial="initial"
                ref={pRef}
                animate={isInView && "animate"}
              >
                Analista en Sistemas, Desarrollador Python y Data Scientist. Con
                más de 2 años de experiencia trabajando con clientes
                particulares y 7 meses de experiencia como Data Scientist,
                siempre en constante aprendizaje y trabajando en proyectos que
                demuestren mi potencial.
              </motion.p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <motion.button
              className={styles.button}
              variants={spanVariants}
              initial="initial"
              ref={pRef}
              animate={isInView && "animate"}
            >
              <a href={resume} download="scaliResume.pdf">
                Descargar CV
              </a>
            </motion.button>
          </div>
          <div className={styles.sliderContainer}>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
