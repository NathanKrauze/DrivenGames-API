import express from 'express';
import cors from 'cors';
import gameRouter from './routes/games.routes.js';
import router from './routes/index.routes.js';

const app = express();
app.use(cors())
app.use(express.json());

app.use(router);
app.use(gameRouter);

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});
