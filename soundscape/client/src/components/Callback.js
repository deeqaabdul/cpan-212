import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('spotifyAccessToken', accessToken);

      window.location.href = '/';
    }
  }, []);

  return <div>Loading...</div>;
};

export default Callback;
