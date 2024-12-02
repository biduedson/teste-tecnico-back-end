import { IUser } from "../user/IUser";

export interface ILoginResponse {
  user: Omit<IUser, "password">;
  token: string;
}
