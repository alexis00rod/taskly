export const validateLogin = (user: string) => {
  const err: string[] = [];
  // Validation: email empty
  if (!user) {
    err.push("email-empty");
  }
  // Validation: email format
  const emailFormat: RegExp =
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailFormat.test(user)) {
    err.push("email-format");
  }

  return err;
};
