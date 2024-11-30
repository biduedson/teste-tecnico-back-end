import bcrypt from "bcrypt";

export class User {
  // O construtor agora aceita a data de criação e atualização como valores padrão
  constructor(
    public id: string,
    public email: string,
    private password: string, // Senha privada, que será armazenada como hash
    public createdAt: Date,
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
  // Getter para acessar a senha de forma segura (em hash)
  getpassword(): string {
    return this.password;
  }

  // Método para definir a senha com hashing
  async setPassword(password: string): Promise<void> {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds); // Aplica o hash à senha
    this.updatedAt = new Date(); // Atualiza a data de modificação
  }

  // Método para verificar a senha (ao tentar logar, por exemplo)
  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password); // Compara o hash da senha fornecida com o hash armazenado
  }

  // Método para atualizar o e-mail e a senha do usuário
  async updateUser(email: string, password?: string): Promise<void> {
    this.email = email;
    if (password) {
      await this.setPassword(password); // Se a senha for fornecida, atualiza o hash da senha
    }
    this.updatedAt = new Date(); // Atualiza a data de modificação
  }
}
