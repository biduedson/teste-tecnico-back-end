import bcypt from "bcrypt";

const cryptGeneratePassword = (password: string): string => {
  const passwordBcrypt = bcypt.hashSync(password, 10);
  return passwordBcrypt;
};
