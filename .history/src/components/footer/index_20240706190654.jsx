import { styled } from "styled-components";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo Alurafix" />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #191919;
  padding: 2rem 0;
  border-top: 1px solid #2a7ae4;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
  }
`;
