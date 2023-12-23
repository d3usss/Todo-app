import {createGlobalStyle} from "styled-components"
import {normalize} from "styled-normalize"
import bgMobileLight from "./images/bg-mobile-light.jpg"
import bgDesktopLight from "./images/bg-desktop-light.jpg"
import bgMobileDark from "./images/bg-mobile-dark.jpg"
import bgDesktopDark from "./images/bg-desktop-dark.jpg"
import JoesefinSansBold2 from "./fonts/JosefinSans-Bold.woff2"
import JoesefinSansBold from "./fonts/JosefinSans-Bold.woff"
import JoesefinSansRegular2 from "./fonts/JosefinSans-Regular.woff2"
import JoesefinSansRegular from "./fonts/JosefinSans-Regular.woff"

const GlobalStyle = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JoesefinSansBold2}) format('woff2'),
            url(${JoesefinSansBold}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JoesefinSansRegular2}) format('woff2'),
            url(${JoesefinSansRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    html {
        --heading-color: #FFF;
        --link-color-active: #3A7CFD;
        font-size: 10px;
        font-family: 'Josefin Sans';
    }  

    body {
        --text-color-main: #494C6B;
        --text-color-completed: #D1D2DA;
        --bg-color: #FAFAFA;

        background-color: var(--bg-color);
    }

    body.dark {
        --main-color: #393A4B;
        --text-color-main: #C8CBE7;
        --text-color-completed: #4D5067;
        --bg-color: #000;

        background-color: var(--bg-color);
    }

    #root {
        width: 375px;
        margin: 0 auto;
        overflow: hidden;

        background-color: var(--bg-color);
        background-repeat: no-repeat;
        
        @media(max-width: 768px) { 
            background-image: url(${bgMobileLight});
        }

        @media(min-width: 768px) { 
            background-image: url(${bgDesktopLight});
            width: 1440px;
        }
    }

    #root.dark {
        @media(max-width: 768px) { 
            background-image: url(${bgMobileDark});
        }

        @media(min-width: 768px) { 
            background-image: url(${bgDesktopDark});
        }
    }
`

export default GlobalStyle
