import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(AuthContext);

  useEffect(() => {
    setAuthErrors([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, props.history);
  };
  if (authLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      {authErrors.length > 0 && <p>{authErrors[0]}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="text"
          required
          placeholder="Type your email here."
          name="email"
          value="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          required
          placeholder="Type your password here."
          name="password"
          value="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;
