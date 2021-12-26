import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor:none;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }


  .cursor {
    width: 10px;
    height: 10px;
    background-color:#fff;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    z-index:200;
    }

    .cursor::after {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      border: 2px solid #A939FD;
      border-radius: 50%;
      opacity: .5;
      top: -150%;
      left: -12.60px;
    }

    @keyframes cursorAnim {
    0% {
    transform: scale(1);
    }
    50% {
    transform: scale(5);
    }
    100% {
    transform: scale(1);
    opacity: 0;
    }
    }
    .expand {
    animation: cursorAnim .5s forwards;
    }

`;

export default GlobalStyles;