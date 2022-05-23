import React, { useState } from "react";
import { Row, Col } from 'antd';
import { authService, firebaseInstance } from "firebase-config";
import 'antd/dist/antd.css';
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();
    try {
      //let data;
      if (newAccount) {
        // create account
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // log in
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <Row justify="center">
      <Col style={{marginTop: "30px", marginBottom: "30px", width:"50%"}}>
        <h1 style = {{marginTop: "30px", marginBottom: "30px", width:"50%", fontSize:"30px"}}> {newAccount ? "회원가입" : "로그인"} </h1>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
          {error}
        </form>
        <Col>
          <button onClick={toggleAccount}>
            {newAccount ? "로그인" : "회원가입"}
          </button>
          <button onClick={onSocialClick} name="google">
            Google 계정으로 로그인하기
          </button>
        </Col>
      </Col>
    </Row>
  );
};

export default AuthForm;
