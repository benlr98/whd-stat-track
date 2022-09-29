const Player = require('./models/player');

class FakeDb {
    constructor() {
        this.players = [{
            "username": "sblenkinsop0",
            "firstname": "Shaylah",
            "lastname": "Blenkinsop",
            "email": "sblenkinsop0@youtube.com",
            "rookie": false,
            "height": 64,
          }, {
            "username": "lvigars1",
            "firstname": "Lainey",
            "lastname": "Vigars",
            "email": "lvigars1@cbc.ca",
            "rookie": false,
            "height": 85,
        },
    ]};

    async cleanDb() {
        const deleteObject = await Player.deleteMany({});
        return deleteObject
    }

    pushPlayersToDb() {
        this.players.forEach((player) => {
            const newPlayer = new Player(player);

            newPlayer.save();
            console.log('New Player saved');
        })
    }

    seedDb() {
        this.cleanDb().then((deleteResponse) => {
            console.log(deleteResponse);
            this.pushPlayersToDb();
        });
    }
}

module.exports = FakeDb;