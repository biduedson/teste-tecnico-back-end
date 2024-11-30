import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from "class-validator";
import "reflect-metadata";

export class UserDTO {
  @IsString({ message: "O e-mail do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O e-mail do usuário não pode estar vazio." })
  @IsEmail({}, { message: "O e-mail fornecido não tem um formato válido." })
  email: string;

  @IsString({ message: "A senha do usuário deve ser uma string." })
  @IsNotEmpty({ message: "A senha não pode estar vazia." })
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
