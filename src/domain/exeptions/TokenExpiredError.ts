export class TokenExpiredError extends Error {
  public readonly statusCode: number;

  constructor() {
    super("Periodo de autenticação expirado. Efetue o login novamente.");
    this.statusCode = 401;
    this.name = "TokenExpiredError";
  }
}
