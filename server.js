import express from 'express';
import 'dotenv/config';
import { MongoClient } from 'mongodb';

const app = express();

const PORT = process.env.SECRET_EXAMPLE_PORT || 3000;
const KEY = process.env.SECRET_EXAMPLE_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DATABASE_NAME;


app.get('/', (req, res) => {
    res.send(`Hallo vom Backendserver! Der geheime Schlüssel ist: ${KEY}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});