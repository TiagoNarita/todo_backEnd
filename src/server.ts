import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

const app = express();
app.use(express.json());

//serve para habilitar qualquer url e qualquer ip conseguir fazer as req
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return resp.status(400).json({
      error: err.message,
    });
  }

  return resp.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen("3333", () => console.log("server on-line!"));
