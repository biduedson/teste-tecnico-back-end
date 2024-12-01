import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routes/UserRoutes";
import { taskRoutes } from "./routes/TaskRoutes";
import { JwtAuthorizationMiddlewares } from "./infrastructure/http/middlewares/JwtAuthorizationMiddlewares";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.use("/api", JwtAuthorizationMiddlewares, taskRoutes);

//app.use("/api", taskRoutes);

export default app;
