import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import "firebase/auth";
import './Login.css'
import {Se


const Login = ({ history }) => {
  const { login } = useContext(AuthContext);
  const [email,setEmail]= useState('')
  const[password, setPassword]=useState('')
  //AuthContextからlogin関数を受け取る
  const selected = React.useContext(SelectedContext);

  const handleSubmit = () => {
    // event.preventDefault();
    // const { email, password } = event.target.elements;
    login(email, password, history);
  };

  return (
      <div className="auth-container">
        <form className="auth-form">
        <h1>Login</h1>
          <div className="auth-form-item">
            <label>E-mail Address</label>
            <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@gmail.com" />
          </div>
          <div className="auth-form-item">
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <button className="signin_button" type="button" onClick={()=>handleSubmit()}>Login</button>
          </div>
            <Link to="/signup" className="auth-bottom" >SignUpはこちら</Link>
        </form>
    </div>
  );
};
export default withRouter(Login)