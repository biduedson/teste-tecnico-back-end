import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  ValidateNested,
} from "class-validator";
import "reflect-metadata";
import { Type } from "class-transformer";
import { CreateTaskDTO } from "./task/CreateTaskDTO";

export class UserDTO {
  @IsString({ message: "O e-mail do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O e-mail do usuário não pode estar vazio." })
  @IsEmail({}, { message: "O e-mail fornecido não tem um formato válido." })
  email: string;

  @IsString({ message: "A senha do usuário deve ser uma string." })
  @IsNotEmpty({ message: "A senha não pode estar vazia." })
  password: string;

  @ValidateNested({ each: true })
  @Type(() => CreateTaskDTO)
  @IsOptional()
  tasks?: CreateTaskDTO[];

  constructor(email: string, password: string, tasks?: CreateTaskDTO[]) {
    this.email = email;
    this.password = password;
    this.tasks = tasks;
  }
}
