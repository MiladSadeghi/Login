export const validate = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email Address Is Invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password Required";
  } else {
    delete errors.password;
  }

  return errors;
}