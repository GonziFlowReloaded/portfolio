import React from "https://cdn.skypack.dev/react";
import styles from "./slider.module.css";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];

const TAGS = [
  "PYTHON",
  "VERCEL",
  "NETLIFY",
  "ANACONDA",
  "MYSQL",
  "SQL SERVER",
  "MONGODB",
  "SQLITE",
  "PYTORCH",
  "KERAS",
  "NUMPY",
  "PANDAS",
  "PLOTLY",
  // "SCIKIT-LEARN",
  "SCIPY",
  "TENSORFLOW",
  "TRELLO",
];

const DURATION = 25000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className={styles.loopSlider}
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => (
  <div className={styles.tag} style={{ "--color": color }}>
    <span>#</span> {text}
  </div>
);

const Slider = () => (
  <div className="app">
    <div className={styles.tagList}>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className={styles.fade} />
    </div>
  </div>
);

export default Slider;
