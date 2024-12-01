export interface ITask {
  id: string;
  title: string;
  description: string;
  status: "PENDING" | "COMPLETE";
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
}
