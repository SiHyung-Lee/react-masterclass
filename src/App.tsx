import Router from "./Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    /* Reset CSS v2.0 */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Remove default margin and padding */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements */
    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }

    /* Make images easier to work with */
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    /* Remove built-in form typography styles */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Avoid text overflows */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* Reset tables */
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Reset anchor text decoration */
    a {
        text-decoration: none;
        color: inherit;
    }

    /* Remove default button styles */
    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    /* Set default font family */
    body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
