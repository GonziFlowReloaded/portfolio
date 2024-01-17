import styles from "./contact.module.css";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import Email from "@mui/icons-material/Email";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Trabajemos juntos!</h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.itemsContainer}>
            <ul>
              <li>
                <LocationOnIcon
                  className={styles.icon}
                  style={{ fontSize: 45 }}
                />
                Corrientes, Corrientes. Argentina
              </li>
              <li>
                <PhoneAndroidIcon
                  className={styles.icon}
                  style={{ fontSize: 45 }}
                />
                +543 794 405832
              </li>
              <li>
                <Email className={styles.icon} style={{ fontSize: 45 }} />
                gonzalojoses@hotmail.com
              </li>
            </ul>
          </div>
          <div className={styles.formContainer}>
            <form
              // onSubmit={handleSubmit}
              className={styles.form}
            >
              <input
                type="text"
                name="name"
                // value={formData.name}
                placeholder="Nombre"
                className={styles.input}
                // onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                // value={formData.email}
                placeholder="Email"
                className={styles.input}
                // onChange={handleChange}
              />
              <textarea
                name="message"
                rows={8}
                // value={formData.message}
                placeholder="Mensaje"
                className={styles.textarea}
                // onChange={handleChange}
              />
              <button className={styles.button}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
