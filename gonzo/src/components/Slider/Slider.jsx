// En el archivo Slider.js
import React from "react";
import styles from "./slider.module.css";
import stacks from "../../utils/stacks";
import svg from "../../utils/svg";

const Slider = () => {
  const infiniteStacks = [...stacks, ...stacks];

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
