import React, { useState } from "react";
import { auth, googleProvider } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //todo: Sign in with Email & password
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      alert("Your Account has been Created");
      navigate('/mainPage')
    } catch (err) {
      alert("Failed to Sign in");
    }
  };

  //todo: Google Login
  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/mainPage')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form>
        <h1>Welcome</h1>
        <h3>Sign in here</h3>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button onClick={handleSignIn}>Sign in</button>
        <p>OR</p>
        <button onClick={handleGoogle}>Sign in with Google</button>
        <p>
          Already Signed Up?<Link to="/logIn"> Log In here</Link>{" "}
        </p>
      </form>
    </>
  );
};

export default Form;
