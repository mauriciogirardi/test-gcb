import styled from 'styled-components';

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

export const Nav = styled.nav`
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
    display: none;
  }
`;
