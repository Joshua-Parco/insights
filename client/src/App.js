import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </FetchUser>
    </>
  );
}

export default App;
