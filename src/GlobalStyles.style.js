import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
    :root {
    --black: #000000;
    --white: #fff;
    --orange: #F1A501;
    --dark-purple: #181E4B;
    --orange-red: #DF6951;
    --gray: #5E6282;
    --gray-purple: #5E6282;
    }

    * {
    font-family: 'Poppins';
    box-sizing: border-box;
    }

    body {
        margin: 0;
    }
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
`;
