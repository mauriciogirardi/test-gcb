import styled from 'styled-components';
import illustrationSVG from 'assets/Illustration.svg';

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;

export const ContainerHeader = styled.div`
  background: url(${illustrationSVG}) no-repeat right top;
  background-size: contain;
  min-height: 636px;
  height: 100%;

  form {
    max-width: 1092px;
    width: 100%;
    margin: 0 auto;
    margin-top: 5rem;

    h1 {
      color: #1d164d;
      font-size: 3rem;
      font-weight: bold;
      width: 22rem;
      line-height: 4rem;
      margin-bottom: 2.3rem;
    }

    > div {
      display: flex;
      align-items: center;

      button {
        width: 3.4rem;
        height: 3.4rem;
        margin-left: 1rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    background-position-x: 320px;
    form {
      max-width: 100%;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    background-position-x: 200px;
    min-height: 100%;

    form {
      margin-top: 0rem;

      h1 {
        font-size: 2.5rem;
        width: 18rem;
        line-height: 3rem;
      }

      > div {
        display: flex;
        align-items: center;
        input {
          width: 100%;
        }

        button {
          width: 3.4rem;
          height: 3.4rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

export const BgSection = styled.section`
  background-color: #fafafc;
`;

export const Recipes = styled.section`
  max-width: 1095px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0 6rem 0;
  margin-top: 1rem;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const RecipesContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 1rem;

  h1 {
    color: #1d164d;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: #9e98af;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const RecipesCards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.4rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Service = styled.section`
  width: 100%;
  min-height: 727px;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    min-height: 100%;
    margin: 4rem 0;
    justify-content: center;
    img {
      display: none;
    }
  }
`;

export const ServiceContent = styled.section`
  max-width: 420px;
  width: 100%;

  h1 {
    color: #2d3561;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 3.5rem;
  }

  p {
    color: #9e98af;
    line-height: 2rem;

    & + p {
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 2rem;
    background-color: #badc58;
    -webkit-box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 0.3),
      -30px -16px 12px -30px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px gba(0, 0, 0, 0.3),
      -30px -16px 12px -30px rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
    padding: 0 1rem;

    h1 {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    p {
      line-height: 1.5rem;

      & + p {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const Blog = styled.section`
  max-width: 1095px;
  width: 100%;
  margin: 0 auto;
  padding-top: 4rem;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const BlogContent = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  h1 {
    color: #1d164d;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: #9e98af;
    line-height: 1.6rem;
  }
`;

export const BlogContainerCard = styled.div`
  padding-bottom: 6rem;
  margin-left: 8rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    margin-left: 1.5rem;
  }
`;

export const Membership = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    z-index: 1;

    img {
      opacity: 0.1;
    }
  }
`;

export const MembershipContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  form {
    h1 {
      font-size: 2rem;
      color: #2d3561;
      line-height: 2.8rem;
      margin-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;

      button {
        width: 5.5rem;
        margin-left: 1rem;
      }
    }

    @media screen and (max-width: 500px) {
      > div {
        display: flex;
        align-items: center;

        input {
          width: 100%;
        }

        button {
          margin-left: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    z-index: 10000;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
