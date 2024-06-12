export const validatePassword = (password: string) => {
  const err: string[] = [];
  // Validation: password empty
  if (!password) {
    err.push("password-empty");
  }
  // Validation: password format
  const passwordFormat: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  if (!passwordFormat.test(password)) {
    err.push("password-format");
  }

  return err;
};
