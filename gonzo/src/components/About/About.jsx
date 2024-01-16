import styles from "./about.module.css";
import image from "../../assets/gonzi.png";
import Slider from "../Slider/Slider";

const stack = [
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

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <div className={styles.imageContainer}>
              <img src={image} alt="image" className={styles.image} />
            </div>
            <div className={styles.bioContainer}>
              <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                illo consequuntur nostrum rem nihil eius tenetur delectus
                pariatur facilis cupiditate ipsam quos labore quisquam adipisci
                dolorum sunt, suscipit, veniam unde? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Totam nesciunt, culpa autem,
                laudantium vitae assumenda animi blanditiis magni accusamus
                temporibus sint ad laboriosam obcaecati similique vel. Cumque
                facere at nulla!
              </p>
            </div>
          </div>
          <button className={styles.button}>
              Descargar CV
          </button>
          <div className={styles.sliderContainer}>
            {stack.map((item, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.heading}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
