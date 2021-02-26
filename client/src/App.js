import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <FetchUser>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </FetchUser>
    </>
  );
}

export default App;
