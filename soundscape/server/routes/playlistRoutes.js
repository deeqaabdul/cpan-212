const express = require('express');
const Playlist = require('../models/Playlist');
const router = express.Router();

router.post('/playlists', async (req, res) => {
    const { name, user, songs } = req.body;
    const newPlaylist = new Playlist({ name, user, songs });
    try {
        const playlist = await newPlaylist.save();
        res.status(201).json(playlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('songs');
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
