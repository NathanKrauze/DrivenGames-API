import { Router } from "express";
import cartRouter from "./cart.routes.js";
import gameRouter from "./games.routes.js";


const router = Router();

router.use(cartRouter);
router.use(gameRouter);

export default router;