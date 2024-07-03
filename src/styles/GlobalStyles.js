import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    font-family: "Rubik", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

  body {
    font-optical-sizing: auto;
    font-style: normal;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    transition: background-color 300ms ease, color 300ms ease;
  }

  img {
  width: 40px;
  height: 40px;
}
`;
