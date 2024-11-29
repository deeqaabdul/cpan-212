const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteSongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }],
    playlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
});

module.exports = mongoose.model('User', userSchema);
