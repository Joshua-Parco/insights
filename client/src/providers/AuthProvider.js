import { useState, } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authErrors, setAuthErrors] = useState([]);
  const [authLoading, setAuthLoading] = useState(false);

  const resetProvider = () => {
    setAuthLoading(true);
    setAuthErrors([]);
  }

  const handleRegister = async (user, history) => {
    try {
      resetProvider();
      let res = await axios.post("/api/auth", user);
      setUser(res.data.data);
      history.push("/");
    } catch (error) {
      // put error handling here
      setAuthErrors(error.response.data.errors.full_messages);
    } finally { 
      setAuthLoading(false);
    }
  }

  const handleLogin = async (user, history) => {
    try {
      resetProvider();
      let res = await axios.post("/api/auth/sign_in", user);
      setUser(res.data.data);
      history.push("/");
    } catch (error) {
      setAuthErrors(error.response.data.errors);
    } finally {
      setAuthLoading(false);
    }
  }

  const handleLogout = async (user, history) => {
    try {
      resetProvider();
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/");
    } catch (error) {
      setAuthErrors(error.response.data);
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authErrors,
        authLoading,
        setAuthErrors,
        authenticated: user !== null,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        setUser: (user) => setUser(user),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
