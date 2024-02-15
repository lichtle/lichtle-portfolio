import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#11001c",
  hover: "#a06cd5",
  footerHover: "#72369d",
  text: "#FFF",
};

export const breakpoints = {
  mobile: "640px",
  tablet: "1024px",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
    list-style: none;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
    color: ${colors.text};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  
`;

export default GlobalStyle;
