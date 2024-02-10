import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#FFE0FA",
  button: "#D39EE3",
  hover: "#B989C7",
  text: "#FFF",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
    list-style: none;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${colors.background};
  }
`;

export default GlobalStyle;
