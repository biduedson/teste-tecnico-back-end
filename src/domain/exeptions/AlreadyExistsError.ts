export class AlreadyExistsError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 409;
    this.name = "AlreadyExistsError";
  }
}
