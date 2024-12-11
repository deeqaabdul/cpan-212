import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState(''); // state for user input
  const [results, setResults] = useState([]); // state for search results
  const [error, setError] = useState(null); // state for error messages

  // the  function to get access token from Spotify
  const getAccessToken = async () => {
    const clientId = '9db88ba45c2f4c7daf6317a0eb88cca5';
    const clientSecret = '5dbfab1144994ab8af10bc89e853f775';
    const authString = `${clientId}:${clientSecret}`;
    const base64AuthString = btoa(authString);

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
          'Authorization': `Basic ${base64AuthString}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          grant_type: 'client_credentials',
        },
      });

      return response.data.access_token; // returns the access token
    } catch (error) {
      console.error('Error fetching access token:', error);
      return null; // returns null if error
    }
  };

  // function to handle search
  const handleSearch = async (e) => {
    e.preventDefault(); // prevents  page refresh on form submission
    setError(null); // resets error on each search attempt

    const accessToken = await getAccessToken();

    if (!accessToken) {
      setError('Could not retrieve access token.'); // handle error if token fails
      return;
    }

    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'artist,album,track',
        },
      });

      setResults(response.data.tracks.items);
    } catch (err) {
      setError('Could not fetch results. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="search-page">
      <h2>Search for Music</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // updates query on input change
          placeholder="Enter artist, album, or title"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="results">
        {results.length > 0 ? (
          results.map((track) => (
            <div key={track.id} className="result-item">
              <h3>{track.name}</h3>
              <p>Artist: {track.artists[0].name}</p>
              <p>Album: {track.album.name}</p>
              <p>Year: {new Date(track.album.release_date).getFullYear()}</p>
              <img src={track.album.images[0]?.url} alt={`${track.name} cover`} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
