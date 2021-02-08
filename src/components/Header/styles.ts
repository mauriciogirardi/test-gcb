import styled, { keyframes } from 'styled-components';

interface NavProps {
  isOpen: boolean;
}

const animateMenu = keyframes`
  0% {
    opacity: 1;
    transform: translateX(100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1092px;
  width: 100%;
  margin: 0 auto;
  height: 7rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #badc58;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }

  @media screen and (max-width: 540px) {
    align-items: flex-start;
    padding-top: 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Toggle = styled.button`
  display: none;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: block;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 0.4rem;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      color: #ff0;
      border-color: #ff0;
    }
  }
`;

export const Nav = styled.nav<NavProps>`
  max-width: 458px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;

    li {
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        display: block;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;

        :hover {
          border-bottom: 2px solid #fdd43b;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 5rem;
    right: 0;
    max-width: 50%;

    z-index: 1000;
    ul {
      background: #badc58;
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      flex-direction: column;
      align-items: center;
      list-style: none;
      padding: 2rem 1.5rem;
      animation: ${animateMenu} 1s;
      border-radius: 0 20rem;

      li {
        a {
          display: inline-block;
        }

        & + li {
          margin-top: 2rem;
          margin-left: 3rem;
        }
      }

      li:nth-last-of-type(1) {
        margin-left: 9rem;
      }

      li:nth-last-of-type(2) {
        margin-left: 6rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
    top: 3rem;
  }
`;
