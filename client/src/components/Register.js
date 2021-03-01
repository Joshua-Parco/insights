import { useState, useContext, useEffect, } from 'react';

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
        <input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          label="Confirm Password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  )
}
