import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../headerLink/HeaderLink";
import { HeaderContainer, Nav } from "./styles";


export function Header() {
  return (
    <header className={styles.header}>
      <HeaderContainer>
        <img src={logo} alt="Logo Alurafix" />
        <Nav>
          <Link to="/" className="links">
            <button>Home</button>
          </Link>
          <Link to="/new-video" className="links">
            <button>Novo Vídeo</button>
          </Link>
        </Nav>
      </HeaderContainer>

      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Alura" />
        </section>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <HeaderLink url="./">INICIO</HeaderLink>
          <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
        </div>
      </nav>
    </header>
  );
}
