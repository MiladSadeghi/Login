import styled from "styled-components";
import { Main } from "../Login/styles";

export const MainSignUp = styled(Main)`
  right: ${props => `${props.amount}`};
  transition: right .3s ease-in-out;
  opacity: 1;
  left: unset;

  .inputsDiv {
    margin: 6px 0 !important;
    input {
      padding: 6px 10px !important;
    }
  }

  .cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;

    span {
      display: inline-block;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);
    }
    span:first-child {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid #9098A9;
      transition: all 0.2s ease;
    }

    span:first-child svg {
      position: absolute;
      top: 3px;
      left: 2px;
      fill: none;
      stroke: #FFFFFF;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }

    span:first-child:before {
      content: "";
      width: 100%;
      height: 100%;
      background: #506EEC;
      display: block;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
    }
    span:last-child {
      padding-left: 8px;
    }

    &:hover span:first-child {
      border-color: #506EEC;
    }

    .message {
      color: #fff;
    }
  }
  .inp-cbx {
    position: absolute;
    z-index: 10;
    width: 18px;
    height: 18px;
    margin-top: 3px;
    opacity: 0;
    cursor: pointer;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
  }
  .inp-cbx:checked + .cbx span:first-child {
    background: #506EEC;
    border-color: #506EEC;
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }
  @keyframes wave {
    50% {
      transform: scale(0.9);
  }
}

  .login {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    background: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    svg {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
`

export const SignUpButton = styled.button.attrs(() => ({
  type: "submit"
}))`
  padding: 10px 45px;
  background: rgba( 50, 117, 199, 0.8 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 5px;
  border: 1px solid rgba( 255, 255, 255, 0.25 );
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: .9rem;
`

