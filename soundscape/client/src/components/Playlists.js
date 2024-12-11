import React, { useEffect, useState } from "react";
import { getPlaylists, getSongs } from "./utils/api";
import "./Playlists.css";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const accessToken = "your_access_token_here";

  const fetchPlaylists = async () => {
    try {
      setLoading(true);
      const data = await getPlaylists(accessToken);
      setPlaylists(data.items);
    } catch (err) {
      setError("Failed to fetch playlists");
    } finally {
      setLoading(false);
    }
  };

  const fetchSongs = async () => {
    try {
      const data = await getSongs();
      setSongs(data);
    } catch (err) {
      setError("Failed to fetch songs");
    }
  };

  useEffect(() => {
    fetchPlaylists();
    fetchSongs();
  }, [accessToken]);

  const handleAddSongs = () => {
    setIsAdding(true);
  };

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  const handleAddToPlaylist = async (playlistId) => {
    if (!selectedSong) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/spotify/playlists/${playlistId}/add`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ songId: selectedSong.id }),
        }
      );

      if (response.ok) {
        alert("Song added to playlist successfully!");
        setSelectedSong(null);
        setIsAdding(false);
      } else {
        throw new Error("Failed to add song to playlist");
      }
    } catch (error) {
      console.error("Error adding song to playlist:", error);
      alert("Failed to add song to playlist");
    }
  };

  return (
    <div className="playlists">
      <h1>Your Playlists</h1>

      {loading ? (
        <p>Loading playlists...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="playlist-list">
          {playlists.map((playlist) => (
            <div className="playlist-item" key={playlist.id}>
              <h3>{playlist.name}</h3>
              <img src={playlist.images[0]?.url} alt={playlist.name} />
              <button className="add-songs-button" onClick={handleAddSongs}>
                Add Songs to Playlist
              </button>

              {isAdding && (
                <div className="song-list">
                  <h2>Select Songs</h2>
                  {songs.map((song) => (
                    <div
                      key={song.id}
                      className={`song-item ${
                        selectedSong?.id === song.id ? "selected" : ""
                      }`}
                      onClick={() => handleSelectSong(song)}
                    >
                      <h3>{song.title}</h3>
                      <p>{song.artist}</p>
                    </div>
                  ))}
                  <button
                    className="add-button"
                    onClick={() => handleAddToPlaylist(playlist.id)}
                  >
                    Add to Playlist
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Playlists;
