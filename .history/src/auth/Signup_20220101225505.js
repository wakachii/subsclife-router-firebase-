import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "./AuthProvider";
import './SignUp.css'

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  //AuthContextからsignup関数を受け取る

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
      <div>
        
        <form className="auth" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
          {/*e-mail*/}
          <div>
            <label>E-mail Address</label>
            <input name="email" type="email" placeholder="email@gmail.com" />
          </div>
          {/*パスワード*/}
          <div>
            <label>Password</label>
            <input name="password" type="password" placeholder="Password"/>
          </div>
          {/*SignUpボタン*/}
            <button className="signup_button" type="submit" onClick={SignUp}>SIGN UP</button>
        </form>
        {/*リンク*/}
        <Link to="/login">SignInへ戻る</Link>
      </div>
  );
};

export default withRouter(SignUp);