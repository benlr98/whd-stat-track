const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    getDb: function () {
        return _db;
    },

    connectToServer: async function() {
        try {
            const db = await client.connect();
            if (db) {
                _db = db.db('whd-app');
                console.log(_db);
                console.log('Successfully connected to MongoDB');
            }
        } catch (e) {
            console.error(e);
        }
    }
};


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};