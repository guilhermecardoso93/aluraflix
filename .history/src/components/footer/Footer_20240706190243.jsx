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
  background-color: ${({ theme }) => theme.escuro};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.primero};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
  }
`;
