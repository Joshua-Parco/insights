import { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    if (user) {
      return (
        <div>
          <div onClick={() => handleLogout(history)}>Log out</div>
        </div>
      )
    } else {
      return (
        <div>
          <Link to "/login">Log in</Link>
          <Link to "/register">Register</Link>
        </div>
      )
    }
  } 

  return (
    <div>
      <Link to "/">Home</Link>
      {rightNavItems}
    </div>
  )
}

export default NavBar;
