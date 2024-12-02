import bcrypt from "bcrypt";

export class User {
  constructor(
    public id: string,
    public email: string,
    private password: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  user(
    id: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    createdAt = createdAt;
    updatedAt = updatedAt;
  }

  getpassword(): string {
    return this.password;
  }
}
