import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    body {
        display: flex;
        flex: 1;

        height: 100vh;
        margin: 0;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto', sans-serif;
        overflow: hidden;
    }
`;

export default GlobalStyles;
