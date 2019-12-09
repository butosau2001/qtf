import { createGlobalStyle } from "styled-components";
import colors from "./styles";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    display: flex;
    flex: 1;

    height: 100vh;
    margin: 0;
    justify-content: center;

    font-family: 'Roboto', sans-serif;

    background-color: ${colors.background};


    overflow: ${props => (props.activePage === "/goal" ? "hidden" : "auto")};
    overflow-x: hidden !important;

  }
`;

export default GlobalStyles;
