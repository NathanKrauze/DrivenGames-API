import express from 'express';
import cors from 'cors';
import gameRouter from './routes/games.routes.js';

const app = express();
app.use(cors())
app.use(express.json());

app.use(gameRouter);

const port = process.env.PORT || 5000
app.listen(port, '127.0.0.1',() => {
	console.log(`Server running on port ${port}`)
});