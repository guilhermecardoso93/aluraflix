import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo Alurafix" />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: var(--color-banner);
  padding: 2rem 0;
  border-top: 1px solid var(--color-blue);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
  }
`;
