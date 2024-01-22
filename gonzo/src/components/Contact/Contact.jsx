import styles from "./contact.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Email from "@mui/icons-material/Email";
import Footer from "../Footer/Footer";

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

const linksVariants = {
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

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardsVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef();
  const pRef = useRef();
  const ref = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const succesNotify = () => {
    toast.success("Gracias por comunicarte. Estaré en contacto pronto.");
  };

  const errorNotify = () => {
    toast.error("Hubo un error. Por favor intenta de nuevo.");
  };

  const warnNotify = () => {
    toast.error("Asegúrate de haber completado todos los campos.");
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      warnNotify();
      return;
    }

    await emailjs
      .sendForm(
        "service_e84c8xl",
        "template_c256ezi",
        // formRef.current,
        event.target,
        "FmzHi7GI51Ka4fn86"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          succesNotify();
        },
        (error) => {
          errorNotify();
        }
      );
  };

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
            Trabajemos juntos!
          </motion.h1>
        </div>
        <div className={styles.subContainer}>
          <motion.div
            className={styles.itemsContainer}
            variants={linksVariants}
            initial="initial"
            ref={pRef}
            animate={isInView ? "animate" : undefined}
          >
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
          </motion.div>
          <div className={styles.formContainer}>
            <motion.form
              variants={containerVariants}
              initial="initial"
              animate={isInView ? "animate" : undefined}
              ref={ref}
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className={styles.input}
                variants={cardsVariants}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
                variants={cardsVariants}
                animate={isInView ? "animate" : undefined}
                ref={ref}
              />
              <motion.textarea
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                className={styles.textarea}
                variants={cardsVariants}
                animate={isInView ? "animate" : undefined}
                ref={ref}
              />
              <motion.button
                className={styles.button}
                variants={cardsVariants}
                animate={isInView ? "animate" : undefined}
                ref={ref}
              >
                Enviar
              </motion.button>
              <Toaster
                position="top-center"
                toastOptions={{
                  className: "",
                  style: {
                    border: "2px solid #2B273D",
                    padding: "10px",
                    color: "#ececec",
                    background: "#2B273D",
                    marginTop: "50px",
                    fontFamily: "Azonix, sans-serif",
                    fontSize: "12px",
                  },
                  duration: 5000,
                }}
              />
            </motion.form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
