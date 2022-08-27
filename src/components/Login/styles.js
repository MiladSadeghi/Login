import styled from "styled-components";
import sideBg from "../../images/side_gif.gif";
const Card = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Main = styled.div`
  display: flex;
  backdrop-filter: blur( 1.5px );
  left: ${props => `${props.amount}`};
  -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.45 );
  z-index: 10;
  background: rgba( 255, 255, 255, 0.45 );
  position: absolute;
  opacity: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: left ease-in-out 0.3s;
`

const Content = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  h1 {
    color: white;
    text-shadow: 0px 0px 10px #000;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .top {
    .inputsDiv {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      label {
        font-weight: bold;
        text-shadow: 0px 0px 4px #000;
        color: #fff;
      }
  
      input {
        border: none;
        outline: none;
        color: #000;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 3px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        padding: 10px;
    
        &:hover, &:focus, &:focus-visible {
          outline: none;
        }
    
      }
    }
    .red {
      color: red;
      display: block;
    }
  }
`

const Side = styled.div`
  background: url(${sideBg});
  width: 100%;
  height: 100%;
  z-index: 10;
  background-position: center;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    & {
      display: none;
    }
  }
`

const LoginButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.status,
}))`
  padding: 10px 45px;
  background: rgba( 50, 117, 199, 0.8 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 5px;
  border: 1px solid rgba( 255, 255, 255, 0.25 );
  ${props => !props.status? "cursor: pointer; opacity: 1;": "opacity: 0.7;"};
  color: #fff;
  font-weight: bold;
  font-size: .9rem;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .signup {
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
      margin-left: 10px;
      vertical-align: middle;
    }
  }
`

export {Card, Content, Side, Main, LoginButton, Buttons}