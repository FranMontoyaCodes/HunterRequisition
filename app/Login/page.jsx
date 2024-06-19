// components/LoginForm.js
"use client";
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      // Send email and password to your backend server for authentication
    } else {
      // Handle password recovery logic here
      // Send recoveryEmail to your backend server to initiate the recovery process
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLogin ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button type="button" onClick={() => setIsLogin(false)}>
            Forgot Password?
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
            required
          />
          <button type="submit">Recover Password</button>
          <button type="button" onClick={() => setIsLogin(true)}>
            Back to Login
          </button>
        </>
      )}
    </form>
  );
};

export default LoginForm;