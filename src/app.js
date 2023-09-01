import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('server ok');
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});