import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <HeaderContainer>
      <header className={styles.header}>
        <Link to="/">
          <section className={styles.logoContainer}>
            <img src={logo} alt="Logo Alura Flix" />
          </section>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/new-video"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Novo Vídeo
            </NavLink>
          </div>
        </nav>
      </header>
    </HeaderContainer>
  );
}
