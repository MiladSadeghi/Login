export const validate = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email Address Is Invalid";
  } else {
    delete errors.email;
  }

  if (!data.userName) {
    errors.userName = "Username Required.";
  } else if (data.userName.length < 3) {
    errors.userName = "You Must Enter Valid Username.";
  } else {
    delete errors.userName;
  }

  if (!data.password) {
    errors.password = "Password Required.";
  } else if (data.password.length < 6) {
    errors.password = "Enter Stronger Password.";
  } else {
    delete errors.password;
  }

  if (!data.repeatPassword) {
    errors.repeatPassword = "This Field Is Required.";
  } else if (data.repeatPassword !== data.password) {
    errors.repeatPassword = "Passwords Must Match.";
  } else {
    delete errors.repeatPassword;
  }
  
  if (!data.isAccepted) {
    errors.isAccepted = "You Most Accept!.";
  } else {
    delete errors.isAccepted;
  }

  return errors;
}