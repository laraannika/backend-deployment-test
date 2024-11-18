import express from 'express';
import 'dotenv/config';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.SECRET_EXAMPLE_URI;

const app = express();
const PORT = process.env.SECRET_EXAMPLE_PORT || 3000;
const KEY = process.env.SECRET_EXAMPLE_KEY;

app.get('/', (req, res) => {
    res.send(`Hallo vom Backendserver! Der geheime Schlüssel ist: ${KEY}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});