export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: "pending" | "completed",
    public userId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  updateStatus(newStatus: "pending" | "completed") {
    this.status = newStatus;
    this.updatedAt = new Date();
  }

  updateTask(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.updatedAt = new Date();
  }
}
