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

    pushPlayersToDb() {
        this.players.forEach((player) => {
            const newPlayer = new Player(player);

            newPlayer.save();
        })
    }

    seedDb() {
        this.pushPlayersToDb();
    }
}

module.exports = FakeDb;