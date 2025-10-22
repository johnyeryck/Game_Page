import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import router from "./routes/routes.js";
import type HandleError from "./errorHandle/errorsDefault.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(router);

app.use(
  (
    err: Error & HandleError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const statusCode = err.statuscode ?? 500;
    const message = err.message ?? "server internal error";
    return res.status(statusCode).send(message);
  }
);

app.listen(4000, () => {
  console.log("is running");
});

export default app;
