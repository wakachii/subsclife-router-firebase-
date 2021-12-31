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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
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
            <SignUpButton type="submit">SIGN UP</SignUpButton>
        </form>
        {/*/}
        <Link to="/login">SignInへ戻る</Link>
      </div>
    </div>
  );
};

export default withRouter(SignUp);