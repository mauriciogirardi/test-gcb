import styled from 'styled-components';
import illustrationSVG from 'assets/Illustration.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  form {
    width: 32rem;

    button {
      width: 16rem;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
    height: 100%;
    form {
      button {
        width: 100%;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    color: #1d164d;
  }

  a {
    text-decoration: none;
    color: #1d164d;
    transition: all 0.2s;

    &:hover {
      font-weight: 500;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;

  > div {
    width: 16rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: auto;
    gap: 0;

    > div {
      width: 100%;
    }
  }
`;

export const Background = styled.div`
  background: url(${illustrationSVG}) no-repeat right top;
  background-size: cover;
  width: 50%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
