const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_KEY;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully 🎉"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const RAPIDAPI_KEY = "ce66475e86msh7317aae2f418e98p15b3dajsnc88b4f252451";
const RAPIDAPI_HOST = "spotify23.p.rapidapi.com";

const spotifyRoutes = express.Router();

spotifyRoutes.get("/album/:id", async (req, res) => {
  const albumId = req.params.id;

  const url = `https://spotify23.p.rapidapi.com/albums/?ids=${albumId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.get(url, options);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching album details:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch album details from RapidAPI" });
  }
});

spotifyRoutes.get("/playlists", async (req, res) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1];
  if (!accessToken) {
    return res
      .status(401)
      .json({ error: "Access token is missing or expired" });
  }

  const url = "https://spotify23.p.rapidapi.com/playlist_details";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": RAPIDAPI_HOST,
    },
    params: {
      playlist_id: "0OvGzOZ6Zri8uIwqJWvKuC",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching playlists:", err);
    res.status(500).json({ error: "Failed to fetch playlists from RapidAPI" });
  }
});

app.use("/api/spotify", spotifyRoutes);

const userRoutes = require("./routes/userRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const songRoutes = require("./routes/songRoutes");

app.use("/api/users", userRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/songs", songRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
