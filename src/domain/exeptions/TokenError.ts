export class TokenError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 401;
    this.message = message;
    this.name = "TokenError";
  }
}
