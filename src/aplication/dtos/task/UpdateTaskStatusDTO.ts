import { IsString, IsNotEmpty, IsIn } from "class-validator";
import "reflect-metadata";

export class UpdateTaskStatusDTO {
  @IsString({ message: "O status da tarefa deve ser uma string." })
  @IsNotEmpty({ message: "O status da tarefa não pode estar vazio." })
  @IsIn(["PENDING", "COMPLETE"], {
    message: "O status deve ser 'PENDING' ou 'COMPLETE'.",
  })
  status: "PENDING" | "COMPLETE";

  constructor(status: "PENDING" | "COMPLETE") {
    this.status = status;
  }
}
