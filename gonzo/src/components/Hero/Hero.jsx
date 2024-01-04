import React from "react";
import ParticlesBackground from "../Particles/ParticlesBackground";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heroContainer}>
          <ParticlesBackground className={styles.particles} />
          <h1 className={styles.name}>Jose Gonzalo Scali</h1>
          <h2>Data Scientist</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
