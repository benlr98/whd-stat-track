const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    firstname: String,
    lastname: String,
    email: String,
    team: String,
    rookie: Boolean,
    height: {type: Number, max: [96, 'too tall']}
});

module.exports = mongoose.model('Player', playerSchema);