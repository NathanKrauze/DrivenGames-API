import { Router } from "express";
import userRouter from "./users.routes.js";
import gameRouter from "./games.routes.js";


const router = Router();

router.use(userRouter);
router.use(gameRouter);

export default router;