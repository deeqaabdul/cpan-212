import React from 'react';

function Library() {
  const playlists = [
    { title: "Chill Beats", type: "Playlist" },
    { title: "Workout Hits", type: "Playlist" },
    { title: "Classic Albums", type: "Collection" },
  ];

  return (
    <div className="library">
      <h1 className="title">Your Library</h1>
      <div className="library-grid">
        {playlists.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
