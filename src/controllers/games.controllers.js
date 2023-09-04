import { db } from '../database/database.connection.js';
import { gameSchema } from '../schemas/game.schemas.js';

export async function addGames(req, res){
    const { authorization } = req.headers;

    //o codigo para criar o token ainda não foi adicionado, entao vcs tem que criar um token manualmente;
    //eu fiz da seguinte maneira:
    //mongosh
    //use DrivenGames
    //db.sessions.insertOne({token: "blablabla"})
    //aí na hora de fazer a requisição no thunder client, no headers adiciona um authorization, com o token: Bearer blablabla
    const token = authorization?.replace("Bearer ", "");
    if (!token) return response.status(401).send("Token not sended");

    const validation = gameSchema.validate(req.body, {abortEarly: false});
    if(validation.error) return res.status(422).send('Invalid or incorrect information');

    try{
        const session = await db.collection('sessions').findOne({token});
        if(!session) return res.status(401).send('Unauthorized');

        await db.collection('games').insertOne(req.body);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function getGames(req, res){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return response.status(401).send("Token not sended");

    try{
        const session = await db.collection('sessions').findOne({token});
        if(!session) return res.status(401).send('Unauthorized');

        const games = await db.collection('games').find().toArray();
        res.status(200).send(games);
    } catch (err) {
        res.status(500).send(err.message);
    }

}