export const validateEmail = (email: string) => {
  const err: string[] = [];
  // Validation: email empty
  if (!email) {
    err.push("email-empty");
  }
  // Validation: email format
  const emailFormat: RegExp =
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailFormat.test(email)) {
    err.push("email-format");
  }

  return err;
};