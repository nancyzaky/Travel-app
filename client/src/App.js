import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Rooms from "./Rooms";
import Details from "./Details";
import Cart from "./Cart";
import Three from "./Three";
import Booking from "./Booking";
import Attractions from "./Attractions";
import Flight from "./Flight";
import Activities from "./Activities";
import Footer from "./Footer";
import Weather from "./Weather";
function App() {
  const [user, setUser] = useState({ name: "", id: null });
  const changeUser = (user) => {
    setUser(user);
  };
  useEffect(() => {
    fetch("/api/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            changeUser({ name: data.name, id: data.id });
          }
        });
      }
    });
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Nav user={user} changeUser={changeUser} />

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
            <Route exact path="/hotel/:id/rooms">
              <Rooms user={user} />
            </Route>

            <Route exact path="/hotel/:id/attractions">
              <Attractions user={user} />
            </Route>
            <Route exact path="/hotel/:id">
              <Details />
            </Route>
            <Route exact path="/hotel/:id/flights">
              <Flight />
            </Route>
            <Route exact path="/hotel/:id/weather">
              <Weather />
            </Route>
            <Route path="/book">
              <Booking user={user} />
            </Route>
            <Route path="/activity">
              <Activities user={user} />
            </Route>
            {/* <Route path="/:id/cart">
              <Cart />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
