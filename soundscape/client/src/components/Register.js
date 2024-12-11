import React from 'react';

function Register() {
  return (
    <div className="form-container">
      <h1 className="title">Create an Account</h1>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="button">Register</button>
    </div>
  );
}

export default Register;
