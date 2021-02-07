import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1095px;
  margin: 0 auto;
  height: 6rem;

  p {
    color: #1d164d;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;

    p {
      font-size: 0.7rem;
    }
  }
`;
export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    li {
      a {
        color: #9e9baf;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: #1d164d;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      width: 14rem;

      li {
        a {
          font-size: 0.7rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      display: block;
      width: 8rem;

      li {
        a {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
