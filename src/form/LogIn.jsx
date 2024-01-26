import React, { useState } from 'react';
import { auth } from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //todo: log in existing user
    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/mainPage');
          } catch (err) {
            alert("Wrong Email or Password");
          }
      };

  return (
    <>
        <form>
        <h1>Good to see you ...👋</h1>
        <h3>Log In here</h3>
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
        <button onClick={handleLogIn}>Log in</button>
        <p>Need to <Link to ='/'>Sign Up</Link>?</p>
      </form>
    </>
  )
}

export default LogIn