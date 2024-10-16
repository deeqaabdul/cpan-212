const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const upload_directory = path.join(__dirname, "../uploads");
const _ = require("lodash");

router.get("/single", (req, res) => {
    let files_array = fs.readdirSync(upload_directory);
    
    if (files_array.length === 0) {
        return res.status(503).send({
            message: "No images",
        });
    }

    let filename = _.sample(files_array);
    res.sendFile(path.join(upload_directory, filename));
});

router.get("/multiple", (req, res) => {
    let files_array = fs.readdirSync(upload_directory);

    if (files_array.length === 0) {
        return res.status(503).send({
            message: "No images",
        });
    }

    const numberOfFilesToFetch = 3;
    let randomFiles = _.sampleSize(files_array, numberOfFilesToFetch);
    let fileUrls = randomFiles.map(file => `${req.protocol}://${req.get('host')}/uploads/${file}`);
    
    res.json(fileUrls);
});


module.exports = router;
