import React, { useState, useEffect, useContext, useRef } from 'react';
import { Card, Content, Side, Main, LoginButton, Buttons} from './styles';
import { validate } from './validate';
import {HiArrowNarrowRight} from "react-icons/hi";
import {useNavigate } from 'react-router-dom';
import { StartApp } from '../../App';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import InputsDiv from '../InputsDiv';
import { toast, Toaster } from "react-hot-toast";
import { ScaleLoader } from 'react-spinners';
import GoogleSignIn from "../google/GoogleSignIn";
import { changeHandler, focusHandler, toastHandler } from '../functions';
const Login = () => {
  const myContext = useContext(StartApp);
  const navigate = useNavigate();
  const isInitialMount = useRef(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [slide, setSlide ] = useState({
    amount: "-100%"
  });
  const [toasts, setToasts] = useState({
    error: "",
    icon: ""
  })
  
  const [loginBtnInfo, setLoginBtnInfo] = useState({
    display: false,
    value: "Login"
  });

  useEffect(() => {
    setError(validate(loginData));
  }, [loginData, touched]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setSlide({amount: "0%"});
        myContext.setScaleX(-1);
      }
    });
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



  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length)  {
      setLoginBtnInfo({display: true, value: <ScaleLoader height={11} margin={2} speedMultiplier={2} width={2} color="#ffffff"/>})
      try {
        await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        setSlide({amount: "-100%"});
        setTimeout(() => {
          navigate("/");
        }, 500)
      } catch (error) {
        toastHandler(error, setToasts);
      }
        setLoginBtnInfo({display: false, value: "Login"});
    } else {
      setTouched({
        email: true,
        password: true
      })
    }
  };

  const goToSignUp = () => {
    setSlide({amount: "-100%"});
    setTimeout(() => {
      navigate("/signup");
    }, 500)
  };

  return (
    <Card>
      <div><Toaster/></div>
      <Main amount={slide.amount}>
        <Content>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div className='top'>
              <InputsDiv inputID="Email" inputValue="Email" name="email" errors={errors} touched={touched} onChange={
                (event) => changeHandler(event, loginData, setLoginData)} onFocus={(event) => focusHandler(event, touched, setTouched)} data={loginData} />
              <InputsDiv inputID="Password" inputValue="Password" name="password" errors={errors} touched={touched} onChange={
                (event) => changeHandler(event, loginData, setLoginData)} onFocus={(event) => focusHandler(event, touched, setTouched)} data={loginData} />
              <GoogleSignIn />
            </div>
            <Buttons>
              <LoginButton status={loginBtnInfo.display}>{loginBtnInfo.value}</LoginButton>
              <button className='signup' type='button' onClick={goToSignUp}>Sign Up <HiArrowNarrowRight /></button>
            </Buttons>
          </form>
        </Content>
        <Side />
      </Main>
    </Card>
  );
};

export default Login;