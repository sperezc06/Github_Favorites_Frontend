import SignIn from "./components/Sign_in";
import Login from "./components/Log_in";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import MainHome from "./components/Main_Home";
import Mainscreen from "./components/Main_screen";
import FavRepos from "./components/Favorites_repositories";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:4000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:4000/users", {
          headers: { "x-auth-token": token },
        });
        dispatch({
          type: "log-user",
          user: userRes.data,
          token,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home/github" component={Mainscreen} />
          <Route exact path="/home/github/fav" component={FavRepos} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={SignIn} />
          <Route exact path="/home" component={MainHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
