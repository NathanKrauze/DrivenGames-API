import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config(); 

const mongoClient = new MongoClient(process.env.DATA_BASE_URL);

try {
    await mongoClient.connect()
} catch (err) {
    console.log(err.message)
};

export const db = mongoClient.db();