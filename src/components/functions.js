import { AiFillWarning } from "react-icons/ai";

export const toastHandler = (error, setState) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      setState({error: "Email Available!", icon: "❌"});
      break;
    case "auth/network-request-failed":
      setState({error: "Check Your Connection!.", icon: <AiFillWarning/>})
      break;
    case "auth/user-not-found":
      setState({error: "You Should Sign Up First!.", icon: "❌"});
      break;
    case "auth/wrong-password":
      setState({error: "Check Your Password, Or Login With Google Sign In", icon: <AiFillWarning/>})
      break;
    default:
      break;
  }
};

export const changeHandler = (event, state, setState) => {
  setState({...state, [event.target.name]: event.target.value})
};

export const focusHandler = (event, state, setState) => {
  setState({...state, [event.target.name]: true})
};
