import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";

function App() {
  return (
    <>
      <FetchUser>
        <Login />
      </FetchUser>
    </>
  );
}

export default App;
