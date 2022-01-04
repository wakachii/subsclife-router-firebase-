import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "./AuthProvider";
import './SignUp.css'

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  //AuthContextからsignup関数を受け取る
  const [email,setEmail]= useState('')
  const[password, setPassword]=useState('')


  const handleSubmit = () => {
    // event.preventDefault();
    // const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
      <div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
          {/*e-mail*/} 
          <div>
            <label>E-mail Address</label>
            <input name="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email@gmail.com" />
          </div>
          {/*パスワード*/}
          <div>
            <label>Password</label>
            <input name="password" type="password" value={password}  placeholder="Password"/>
          </div>
          {/*SignUpボタン*/}
            <button className="signup_button" type="button" onClick={handleSubmit}>SIGN UP</button>
            <Link to="/login">SignInへ戻る</Link>
        </form>
        {/*リンク*/}
      </div>
  );
};

export default withRouter(SignUp);