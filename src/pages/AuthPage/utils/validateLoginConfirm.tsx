export const validateLoginConfirm = (user: string) => {
  const err: string[] = [];
  // Validation: password empty
  if (!user) {
    err.push("password-empty");
  }

  return err;
};
