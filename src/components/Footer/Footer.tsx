import styles from "./Footer.module.scss";
import logo from "src/assets/svg/logo.svg";

const Footer = () => (
  <div className={styles.Footer}>
    <img src={logo} alt="logo-pie" />
    <div className={styles.information}>
      <span>Términos y Aviso de privacidad</span>
      <div>
        <span>Envíanos tus comentarios</span>
        <span>Ayuda</span>
      </div>
      <span className={styles.credits}>
        ©1996-2021, Amazon.com, Inc. o sus filiales
      </span>
    </div>
  </div>
);

export default Footer;
