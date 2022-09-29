const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const playerRoutes = require('./routes/players');


const connectMongo = async () => {
    mongoose.connect(config.DB_URI);

    const fakeDb = await new FakeDb();
    fakeDb.seedDb();
}

connectMongo();

const app = express();

app.use('/api/v1/players', playerRoutes);

/** 
app.get('/teams', (req, res) => {
    res.json({"success": 200});
});
*/

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('I am running...')
});