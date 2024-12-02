import bcypt from "bcrypt";

const encryptPassword = (password: string): string => {
  const passwordBcrypt = bcypt.hashSync(password, 10);
  return passwordBcrypt;
};
