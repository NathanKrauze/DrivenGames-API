import { Router } from "express";
import { addGames, getGames } from "../controllers/games.controllers.js";

const gameRouter = Router();

gameRouter.post('/add-games', addGames);
gameRouter.get('/games', getGames);

export default gameRouter;