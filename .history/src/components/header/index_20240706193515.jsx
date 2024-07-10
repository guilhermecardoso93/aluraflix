import { Link } from "react-router-dom";
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
        <Link
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          <button>Home</button>
        </Link>
        <Link
          to="/newVideo"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          <button className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }>Novo Vídeo</button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}
