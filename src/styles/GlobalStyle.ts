import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body,input,button, select {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
