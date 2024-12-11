import React from 'react';

function Login() {
  return (
    <div className="form-container">
      <h1 className="title">Login to Soundscape</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="button">Login</button>
    </div>
  );
}

export default Login;
