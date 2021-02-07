import styled from 'styled-components';

export const Container = styled.button`
  width: 27%;
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  min-height: 450px;
  height: 100%;
  -webkit-box-shadow: 5px 5px 14px -1px rgba(0, 0, 0, 0.19);
  box-shadow: 5px 5px 14px -1px rgba(0, 0, 0, 0.19);

  & + button {
    margin-left: 2rem;
  }

  > img {
    width: 100%;
    object-fit: cover;
  }

  scroll-snap-align: start;
  flex: none;

  @media screen and (max-width: 1024px) {
    width: 34%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 540px) {
    width: 64%;
  }

  @media screen and (max-width: 500px) {
    width: 86%;
  }
`;

export const Content = styled.div`
  text-align: left;
  padding: 1.7rem 1.3rem;

  h3 {
    font-size: 1.5rem;
    color: #1d164d;
    line-height: 2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  span {
    color: #9e9baf;
  }
`;
