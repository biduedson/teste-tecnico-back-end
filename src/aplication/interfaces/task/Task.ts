export interface ITask {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
}
