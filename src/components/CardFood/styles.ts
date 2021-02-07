import styled from 'styled-components';

export const Container = styled.div`
  max-width: 528px;
  width: 100%;
  height: 225px;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  -webkit-box-shadow: 6px 7px 20px 5px rgba(29, 22, 77, 0.21);
  box-shadow: 6px 7px 20px 5px rgba(29, 22, 77, 0.21);

  img {
    width: 253px;
    height: 225px;
    object-fit: cover;
    margin-right: 2rem;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 150px;
      margin-right: 1rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  button {
    width: 143px;
    height: 48px;
    background: #badc58;
    font-size: 1rem;
    font-weight: 500;
  }

  h3 {
    color: #1d164d;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 2.3rem;
    width: 14rem;
  }

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 1.3rem;
      line-height: 2rem;
      width: 12rem;
    }
  }

  @media screen and (max-width: 320px) {
    width: 10rem;

    h3 {
      width: 100%;
      font-size: 1rem;
      line-height: 1.8rem;
    }

    button {
      width: 7rem;
    }
  }
`;
