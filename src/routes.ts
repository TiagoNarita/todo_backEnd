import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
const router = Router();

import { isAuthenticated } from "./middlewares/isAuthenticated";

// user routes
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);
export { router };
