import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const links = {
  github: "https://github.com/GonziFlowReloaded",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-gonzalo-scali-68b0191b5/",
  mail: "mailto;gonzalojoses@hotmail.com",
  instagram: "https://www.instagram.com/gonzo.rar/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=%2B5493794405832&text&type=phone_number&app_absent=0",
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.dataContainer}>
          &copy; {new Date().getFullYear()}: Jose Gonzalo Scali
        </div>
        <div className={styles.linkContainer}>
          <a href={links.github}>
            <GitHubIcon className={styles.icon} />
          </a>
          <a href={links.linkedin}>
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href={links.mail}>
            <EmailIcon className={styles.icon} />
          </a>
          <a href={links.instagram}>
            <InstagramIcon className={styles.icon} />
          </a>
          <a href={links.whatsapp}>
            <WhatsAppIcon className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
