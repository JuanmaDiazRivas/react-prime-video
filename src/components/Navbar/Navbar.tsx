import styles from "./Navbar.module.scss";
import logo from "src/assets/svg/logo.svg";
import searchIcon from "src/assets/svg/search-icon.svg";
import avatar from "src/assets/img/avatar.png";

const Navbar = () => (
  <div className={styles.Navbar}>
    <img src={logo} />
    <div className={styles.menu}>
      <ul>
        <li>Inicio</li>
        <li>Tienda</li>
        <li>Canales</li>
        <li className={styles.drop}>Categorías</li>
        <li>Mi espacio</li>
      </ul>
    </div>

    <div className={styles.explore}>
      <span>Explorar</span>
      <div className={styles.drop}></div>
    </div>

    <div className={styles.search}>
      <img src={searchIcon}></img>
    </div>
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar} />
      <span className={styles.name}>Juan</span>
      <div className={styles.drop}></div>
    </div>
  </div>
);

export default Navbar;
