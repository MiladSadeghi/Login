import React, { useState, useEffect, useContext, useRef } from 'react';
import { Card, Content, Side, Main, LoginButton, Buttons} from './styles';
import { validate } from './validate';
import {HiArrowNarrowRight} from "react-icons/hi";
import {AiFillWarning} from "react-icons/ai";
import {useNavigate } from 'react-router-dom';
import { StartApp } from '../../App';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import InputsDiv from '../InputsDiv';
import { toast, Toaster } from "react-hot-toast";
import { ScaleLoader } from 'react-spinners';
import GoogleSignIn from "../google/GoogleSignIn";
const Login = () => {
  const myContext = useContext(StartApp);
  const navigate = useNavigate();
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
  const isInitialMount = useRef(true);
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

  const changeHandler = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value})
  };

  const focusHandler = (event) => {
    setTouched({...touched, [event.target.name]: true})
  };

  const toastHandler = (error) => {
    switch (error.code) {
      case "auth/user-not-found":
        setToasts({error: "You Should Sign Up First!.", icon: "❌"});
        break;
      case "auth/network-request-failed":
        setToasts({error: "Check Your Connection!.", icon: <AiFillWarning/>})
        break;
      case "auth/wrong-password":
        setToasts({error: "Check Your Password, Or Login With Google Sign In", icon: <AiFillWarning/>})
        break;
      default:
        break;
    }
  };

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
          toastHandler(error);
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
              <InputsDiv inputID="Email" inputValue="Email" name="email" errors={errors} touched={touched} onChange={changeHandler} onFocus={focusHandler} data={loginData} />
              <InputsDiv inputID="Password" inputValue="Password" name="password" errors={errors} touched={touched} onChange={changeHandler} onFocus={focusHandler} data={loginData} />
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