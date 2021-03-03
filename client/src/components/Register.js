import { useState, useContext, useEffect, } from 'react';
import { AuthContext } from "../providers/AuthProvider";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { handleRegister, authLoading, authErrors, setAuthErrors } = useContext(AuthContext);

  useEffect(() => {
    setAuthErrors([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      handleRegister({email, password}, history);
    } else {
      alert("Password does not match.");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      {authErrors && authErrors.map((error) => <p>{error}</p>)}
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password: </label>
        <input
          label="Confirm Password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
