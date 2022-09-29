const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');


const connectMongo = async () => {
    mongoose.connect(config.DB_URI);

    const fakeDb = await new FakeDb();
    fakeDb.seedDb();
}

connectMongo();

const app = express();

app.get('/teams', (req, res) => {
    res.json({"success": 200});
});

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('I am running...')
});