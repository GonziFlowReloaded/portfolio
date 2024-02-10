import React from "react";
import styles from "./slider.module.css";
import stacks from "../../utils/stacks";
import svgs from "../../utils/svgs";

const Slider = () => {
  const infiniteStacks = [...svgs, ...svgs];

  return (
    <div className={styles.slider}>
      <div className={styles.row}>
        <div className={styles.slide}>
          {infiniteStacks.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Stack ${index}`}
              className={styles.image}
            />
          ))}
        </div>

        <div className={styles.slide}>
          {infiniteStacks.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Stack ${index}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
