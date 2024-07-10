import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderContainer, Nav } from "./Header-styles";
import styles from "./Header.module.css";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logo Alurafix" />
      </Link>

      <Nav>
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
      </Nav>
    </HeaderContainer>
  );
}
