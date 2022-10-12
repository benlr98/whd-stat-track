const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    getDb: function () {
        console.log(_db);
        return _db;
    },

    connectToServer: async function() {
        try {
            await client.connect();

            await listDatabases(client);
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
};


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};