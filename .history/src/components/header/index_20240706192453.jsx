import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../headerLink/HeaderLink";
import { HeaderContainer, Nav } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
          <img src={logo} alt="Logo Alurafix" />
      </Link>

      <Nav>
        <Link to="/" className="links">
          <button>Home</button>
        </Link>
        <Link to="/newVideo" className="links">
          <button>Novo Vídeo</button>
        </Link>
      </Nav>

     
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <HeaderLink url="./">INICIO</HeaderLink>
          <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
