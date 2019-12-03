import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
