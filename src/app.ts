import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routes/UserRoutes";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

export default app;
