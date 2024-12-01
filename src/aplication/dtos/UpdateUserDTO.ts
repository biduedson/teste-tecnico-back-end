import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

import "reflect-metadata";

export class UpdateUserDTO {
  @IsString({ message: "O id do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O id do usuário não pode estar vazio." })
  id: string;

  @IsOptional()
  @IsString({ message: "O e-mail do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O e-mail do usuário não pode estar vazio." })
  @IsEmail({}, { message: "O e-mail fornecido não tem um formato válido." })
  @Transform(({ value }) => (value === "" ? undefined : value))
  email?: string;

  @IsOptional()
  @IsString({ message: "A senha do usuário deve ser uma string." })
  @IsNotEmpty({ message: "A senha não pode estar vazia." })
  @Transform(({ value }) => (value === "" ? undefined : value))
  password?: string;

  constructor(email: string, password: string, id: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
