import styled, {createGlobalStyle} from "styled-components";
import bgImg from "../images/background.gif";
import OpenSans from "../fonts/OpenSans-VariableFont_wdth,wght.ttf";
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
  }

  @font-face {
    font-family: '';
    src: url(${OpenSans}) format('ttf');
    font-style: normal;
  }
`

const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    background: #080808;
    top: 0;
    left: 0;
    content: "";
    height: 100vh;
    width: 100vw;
    position: absolute;
  }
  &:after {
    background: url(${bgImg}) 50%/ cover padding-box content-box ;
    background-repeat: no-repeat;
    background-position: right;
    animation: removeBlur .8s linear;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    transform: ${props => `scaleX(${props.scaleX})`};
    transition: transform .5s ease-in-out;
  }

  @keyframes removeBlur {
    0% {
      box-shadow: 0px 0px 0px 20px #000;
      filter: blur(10px);
    }
    100% {
      filter: blur(0px);
      box-shadow: 0px 0px 0px 0px #000;
    }
  }
`

const Container = styled.div`
  @media screen and (max-width: 576px) {
    width: 100%;  
  }
  @media screen and (min-width: 576px) {
    width: 576px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 992px) {
    width: 992px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`


export { GlobalStyle, MainDiv, Container }