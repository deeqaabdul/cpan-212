import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const playlists = [
    {
      title: "The Neighbourhood - W.D.Y.W.F.M.?",
      description: "Explore the sound of The Neighbourhood.",
      image:
        "https://images.genius.com/384e89225e662195b83ade8b9165a381.660x660x1.jpg",
      link: "https://open.spotify.com/track/2nMeu6UenVvwUktBCpLMK9?si=0ccfe780b6e54e72", // Add Spotify link
    },
    {
      title: "Lana Del Rey - Young and Beautiful",
      description: "A classic from Lana Del Rey.",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87e6d50e-2277-497a-be2d-61d60cb04e86/d63n79h-1d7571f2-cd01-492f-afaa-84c24448bcff.png/v1/fill/w_800,h_800,q_80,strp/young_and_beautiful___lana_del_rey_by_vocalmaker_d63n79h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvODdlNmQ1MGUtMjI3Ny00OTdhLWJlMmQtNjFkNjBjYjA0ZTg2XC9kNjNuNzloLTFkNzU3MWYyLWNkMDEtNDkyZi1hZmFhLTg0YzI0NDQ4YmNmZi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.MgPEIV_1LXIG0Met_OS5g_56zrVsny7QvDLIOxRHDBg",
      link: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst?si=9e9a20227091401d", // Add Spotify link
    },
    {
      title: "Arctic Monkeys - Do I Wanna Know?",
      description: "Similar vibes to Lana's style.",
      image:
        "https://i0.wp.com/cornellsun.com/wp-content/uploads/2024/10/AM__Arctic_Monkeys.jpg?fit=440%2C446&ssl=1/150",
      link: "https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?si=11abd9c4dfa64cd3", // Add Spotify link
    },
    {
      title: "The 1975 - Somebody Else",
      description: "Dreamy soundscapes and relatable lyrics.",
      image: "https://upload.wikimedia.org/wikipedia/en/2/28/SomebodyElse.jpg",
      link: "https://open.spotify.com/track/1CS7Sd1u5tWkstBhpssyjP?si=34b8323331b948ec", // Add Spotify link
    },
    {
      title: "Hozier - Take Me to Church",
      description: "A powerful ballad with deep lyrics.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e5/Hozier_Take_Me_to_Church.jpg",
      link: "https://open.spotify.com/track/1CS7Sd1u5tWkstBhpssyjP?si=34b8323331b948ec", // Add Spotify link
    },
    {
      title: "Lorde - Royals",
      description: "A unique pop sound that stands out.",
      image: "https://i.scdn.co/image/ab67616d0000b273187331e276c898d39764cc98",
      link: "https://open.spotify.com/track/2nMeu6UenVvwUktBCpLMK9?si=0ccfe780b6e54e72",
    },
    {
      title: "The Neighbourhood - Chip Chrome & The Mono-Tones",
      description: "A unique album from The Neighbourhood.",
      image: "https://i.scdn.co/image/ab67616d0000b2733552d3f419afe41cf9b0bd0a",
      link: "https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?si=11abd9c4dfa64cd3",
    },
  ];

  const handleExploreNow = () => {
    navigate("/playlists");
  };

  const handlePlaySong = (songLink) => {
    window.open(songLink, "_blank");
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Soundscape</h1>
        <p>Discover new music and playlists.</p>
        <button className="explore-button" onClick={handleExploreNow}>
          Explore Now
        </button>
      </div>
      <div className="featured-section">
        <h2>Featured Playlists</h2>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <div
              className="playlist-card"
              key={index}
              onClick={() => handlePlaySong(playlist.link)}
            >
              <img src={playlist.image} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
