import styled from "styled-components";
import { signInWithGoogle } from "../firebase-config";

const Google = styled.button.attrs(() => ({
  type: "button"
}))`
  .g-sign-in-button {
    display: inline-block;
    height: 50px;
    background-color: #4285f4;
    color: #fff;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    transition: background-color .218s, border-color .218s, box-shadow .218s;
}

  .g-sign-in-button:hover {
      cursor: pointer;
      -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
      box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
  }

  .g-sign-in-button:active {
      background-color: #3367D6;
      transition: background-color 0.2s;
  }

  .g-sign-in-button .content-wrapper {
      height: 100%;
      width: 100%;
      border: 1px solid transparent;
  }

  .g-sign-in-button img {
      width: 18px;
      height: 18px;
  }

  .g-sign-in-button .logo-wrapper {
      padding: 15px;
      background: #fff;
      width: 48px;
      height: 100%;
      border-radius: 1px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
  }

  .g-sign-in-button .text-container {
      font-weight: 500;
      letter-spacing: .21px;
      font-size: 16px;
      line-height: 48px;
      vertical-align: top;
      border: none;
      display: inline-block;
      text-align: center;
      width: 180px;
  }
`

const GoogleSignIn = () => {
  return (
    <Google onClick={signInWithGoogle}>
      <div className='g-sign-in-button'>
        <div className='content-wrapper'>
            <div className='logo-wrapper'>
                <img src='https://developers.google.com/identity/images/g-logo.png' alt="google"/>
            </div>
            <span className='text-container'>
          <span>Sign in with Google</span>
        </span>
        </div>
      </div>
    </Google>
  );
}

export default GoogleSignIn;
