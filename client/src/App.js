import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [user, setUser] = useState("");
  const changeUser = (user) => {
    setUser(user);
  };
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            changeUser(data.name);
          }
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login changeUser={changeUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
