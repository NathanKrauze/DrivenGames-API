import { Router } from "express";
import { signIn, signUp } from "../controllers/users.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/users.schemas.js";

const userRouter = Router();

userRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
userRouter.post("/sign-in", validateSchema(signInSchema), signIn);

export default userRouter;