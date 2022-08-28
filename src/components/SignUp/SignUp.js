import React, { useState, useEffect, useContext, useRef } from 'react';
import { Card, Side, Content, Buttons } from "../Login/styles";
import { MainSignUp, SignUpButton } from './styled';
import { validate } from './validate';
import { StartApp } from '../../App';
import InputsDiv from '../InputsDiv';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config';
import toast, { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { changeHandler, focusHandler, toastHandler } from '../functions';

const SignUp = () => {
  const myContext = useContext(StartApp);
  const navigate = useNavigate();
  const [slide, setSlide ] = useState({
    amount: "-100%"
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    password: "",
    repeatPassword: "",
    isAccepted: false,
  })
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const isInitialMount = useRef(true);
  const [toasts, setToasts] = useState({
    error: "",
    icon: ""
  })
  const [signUpBtnInfo, setSignUpBtnInfo] = useState({
    display: false,
    value: "Sign In"
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setSlide({amount: "0%"});
        myContext.setScaleX(1);
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      toast(toasts.error,
      {
        icon: toasts.icon,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          position: "relative"
        },
      });
    }
  }, [toasts])

  useEffect(() => {
    setErrors(validate(signUpData));
  }, [signUpData, touched]);

  const goToLogin = () => {
    setSlide({amount: "-100%"});
    setTimeout(() => {
      navigate("/login");
    }, 500)
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length)  {
      setSignUpBtnInfo({display: true, value: <ScaleLoader height={11} margin={2} speedMultiplier={2} width={2} color="#ffffff"/>})
      try {
        await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
        await updateProfile(auth.currentUser, {
          displayName: signUpData.userName
        })
        setSlide({amount: "-100%"});
        setTimeout(() => {
          navigate("/");
        }, 500)
      } catch (error) {
        toastHandler(error, setToasts);
      }
      setSignUpBtnInfo({display: false, value: "Sign Up"})
    } else {
      setTouched({
        email: true,
        userName: true,
        password: true,
        repeatPassword: true,
        isAccepted: true
      })
    }
  };

  return (
    <Card>
      <div><Toaster/></div>
      <MainSignUp amount={slide.amount}>
        <Side />
        <Content>
          <h1>Sign Up</h1>
          <form onSubmit={submitHandler}>
            <div className='top'>
              <InputsDiv inputID="Email" inputValue="Email" name="email" errors={errors} touched={touched} onChange={(event) => changeHandler(event, signUpData, setSignUpData)} onFocus={(event) => focusHandler(event, event, signUpData, setSignUpData)} data={signUpData} />
              <InputsDiv inputID="Username" inputValue="Username" name="userName" errors={errors} touched={touched} onChange={(event) => changeHandler(event, signUpData, setSignUpData)} onFocus={(event) => focusHandler(event, event, signUpData, setSignUpData)} data={signUpData} />
              <InputsDiv inputID="Password" inputValue="Password" name="password" errors={errors} touched={touched} onChange={(event) => changeHandler(event, signUpData, setSignUpData)} onFocus={(event) => focusHandler(event, event, signUpData, setSignUpData)} data={signUpData} />
              <InputsDiv inputID="repeatPassword" inputValue="Repeat Your Password" name="repeatPassword" errors={errors} touched={touched} onChange={(event) => changeHandler(event, signUpData, setSignUpData)} onFocus={(event) => focusHandler(event, signUpData, setSignUpData)} data={signUpData} />

              <div style={{position: "relative"}}>
                <input className="inp-cbx" id="cbx"  value={signUpData.isAccepted} name="isAccepted" onChange={(event) => changeHandler(event, signUpData, setSignUpData)} onFocus={focusHandler}  type="checkbox" />
                <label className="cbx" htmlFor='cbx'>
                  <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                  </span>
                  <span className='message'>By registering, you accept the Terms of Service and Privacy Notice</span>
                </label>
                {errors.isAccepted && touched.isAccepted && <span className='red'>{errors.isAccepted}</span>}
              </div>
            </div>
            <Buttons>
              <button className='login' type='button' onClick={goToLogin} ><HiArrowNarrowLeft /> Login</button>
              <SignUpButton status={signUpBtnInfo.display}>{signUpBtnInfo.value}</SignUpButton>
            </Buttons>
          </form>
        </Content>
      </MainSignUp>
    </Card>
  );
};

export default SignUp;