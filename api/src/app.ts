import express from "express";

import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import { authMiddleware } from "./middlewares";
import userRouter from "./routers/users.router";
import foodRouter from "./routers/food.router";

const app = express();

app.use(cors());
app.use(json());

// app.use(authMiddleware);

app.use("/", authRouter);

app.use("/users", userRouter);

app.use("/foods", foodRouter);

app.use(authMiddleware);

export default app;
