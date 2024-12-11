export const getPlaylists = async (accessToken) => {
  const response = await fetch("http://localhost:5000/api/spotify/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return await response.json();
};

export const getSongs = async () => {
  const response = await fetch("http://localhost:5000/api/songs");
  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }
  return await response.json();
};
