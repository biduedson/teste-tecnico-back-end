import { IsString, IsNotEmpty, IsIn } from "class-validator";
import "reflect-metadata";

export class CreateTaskDTO {
  @IsString({ message: "O título da tarefa deve ser uma string." })
  @IsNotEmpty({ message: "O título da tarefa não pode estar vazio." })
  title: string;

  @IsString({ message: "A descrição da tarefa deve ser uma string." })
  @IsNotEmpty({ message: "A descrição da tarefa não pode estar vazia." })
  description: string;

  @IsString({ message: "O status da tarefa deve ser uma string." })
  @IsNotEmpty({ message: "O status não pode estar vazio." })
  @IsIn(["PENDING", "COMPLETE"], {
    message: "O status deve ser 'PENDING' ou 'COMPLETE'.",
  })
  status?: "PENDING" | "COMPLETE";

  @IsString({ message: "O ID do usuário deve ser uma string." })
  @IsNotEmpty({ message: "O ID do usuário não pode estar vazio." })
  userId?: string;

  constructor(
    title: string,
    description: string,
    status?: "PENDING" | "COMPLETE",
    userId?: string
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
  }
}
