import { IsString, IsNotEmpty, IsIn } from "class-validator";
import "reflect-metadata";

export class UpdateTaskStatusDTO {
  @IsString({ message: "O id da tarefa deve ser uma string." })
  @IsNotEmpty({ message: "O id da tarefa não pode estar vazio." })
  id: string;

  @IsNotEmpty({ message: "O status da tarefa não pode estar vazio." })
  @IsString({ message: "O status da tarefa deve ser uma string." })
  @IsIn(["PENDING", "COMPLETE"], {
    message: "O status deve ser 'PENDING' ou 'COMPLETE'.",
  })
  status: "PENDING" | "COMPLETE";

  constructor(id: string, status: "PENDING" | "COMPLETE") {
    this.id = id;
    this.status = status;
  }
}
