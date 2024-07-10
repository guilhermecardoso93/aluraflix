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

  .link {
    font-size: clamp(0.7rem, 1.042vw, 1.25rem);
    font-weight: bold;
    padding: 0.85rem;
    color: var(--color-white);
    border-radius: 0.625rem;
    border: 2px solid var(--color-white);
    margin: 0 0.8rem;
    text-decoration: none;
    text-align: center;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.35rem;
  }

  .link:hover {
    filter: brightness(1.4);
    color: var(--color-blue-light);
  }

  .activeLink {
    background-color: var(--color-black);
    color: var(--color-blue);
    border: 2px solid var(--color-blue);
    border-radius: 0.625rem;
    box-shadow: inset 0 0 10px 5px var(--color-blue-light);
  }

  @media (max-width: 600px) {
    .link {
      border-radius: 0;
      border: none;
      border-bottom: 2px solid var(--color-white);
    }

    .link:hover {
      color: var(--color-blue-light);
      border-bottom: 2px solid var(--color-blue-light);
    }

    .activeLink {
      border-bottom: 2px solid var(--color-blue);
    }
  }
`;
