import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #879fc7;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    background-color: #a8c3b3;
    cursor: pointer;

    &:hover {
      background-color: #fff59d;
    }
  }
`;
