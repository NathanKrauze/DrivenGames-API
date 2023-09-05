import { Router } from "express";
import { getPay, postPay } from "../controllers/pay.controllers.js";

const cartRouter = Router()

cartRouter.get('/cart', getPay)
cartRouter.post('/cart', postPay)

export default cartRouter;