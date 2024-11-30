import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from "class-validator";
import "reflect-metadata";

export class DeleteUserDTO {
  @IsString({ message: "O e-mail do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O e-mail do usuário não pode estar vazio." })
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
