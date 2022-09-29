const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('', (req, res) => {
    Player.find({}, (err, foundPlayers) => {
        res.json(foundPlayers);
    });
});

router.get('/:id', (req, res) => {
    const playerId = req.params.id;

    Player.findById(playerId, (err, foundPlayer) => {
        if (err) {
            res.status(422).send({errors: [{title: 'Player Error!', detail: 'Could not find Player!'}]}); 
        }
        res.json(foundPlayer);
    });
})

module.exports = router;