import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  img {
    width: 169px;
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  button {
    background-color: transparent;
    color: #fff;

    width: 11rem;
    height: 3.5rem;

    border: solid 2px #fff;
    border-radius: 10px;

    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;

    .links {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button:hover {
    border: solid 2px #2271d1;
    box-shadow: inset 0px 0px 10px #2271d1;
    color: #2271d1;
  }
`;
