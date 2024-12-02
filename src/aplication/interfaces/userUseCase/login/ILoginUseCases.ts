import { ILoginResponse } from "../../httpResponses/ILoginResponse";

export interface ILoginUseCases {
  login(email: string, password: string): Promise<ILoginResponse>;
}
