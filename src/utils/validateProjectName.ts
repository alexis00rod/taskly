export const validateProjectName = (name: string) => {
  const err: string[] = [];
  // Validation: name empty
  if (!name) {
    err.push("name-empty");
  }

  return err;
};
