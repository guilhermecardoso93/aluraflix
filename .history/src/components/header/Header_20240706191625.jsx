import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderContainer, Nav } from "./styles";

export function Header() {
  return (
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
  );
}
