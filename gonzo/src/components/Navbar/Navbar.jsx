import styles from "./navbar.module.css";
import { Link } from "react-scroll";

const navLinks = [
  { title: "inicio", href: "home" },
  { title: "Sobre Mi", href: "about" },
  { title: "Proyectos", href: "projects" },
  { title: "Contacto", href: "contact" },
];

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        {/* <img src="" alt="" /> */}
        <h1 className={styles.name}>Gonzi</h1>
        <div>
          <ul className={styles.itemsContainer}>
            <Link to="home">
              <li>Inicio</li>
            </Link>
            <Link to="about">
              <li>Sobre Mi</li>
            </Link>
            <Link to="projects">
              <li>Proyectos</li>
            </Link>
            <Link to="contact">
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
