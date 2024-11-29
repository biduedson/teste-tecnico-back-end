export class InternalServerError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
    this.name = "InternalServerError";
  }
}
