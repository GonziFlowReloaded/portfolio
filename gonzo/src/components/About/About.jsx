import styles from "./about.module.css";
import image from "../../assets/gonzi.png";
import Slider from "../Slider/Slider";
import resume from "../../assets/jose_gonzalo_scali_resume.pdf";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Sobre mi</h1>
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
            <a href={resume} download="scaliResume.pdf">
              Descargar CV
            </a>
          </button>
          <div className={styles.sliderContainer}>
            {/* {stack.map((item, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.heading}>{item}</p>
              </div>
            ))} */}
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
