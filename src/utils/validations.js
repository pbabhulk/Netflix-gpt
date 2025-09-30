export const checkValidData = (email, password) => {
  const emailError = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordError =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

  if (!emailError) return "Email ID is not valid";
  if (!passwordError) return "Password is not valid";
  return null;
};
