const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

router.post('/songs', async (req, res) => {
    const { title, artist, album, genre, releaseDate } = req.body;
    const newSong = new Song({ title, artist, album, genre, releaseDate });
    try {
        const song = await newSong.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
