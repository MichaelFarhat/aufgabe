import React, { useEffect } from "react";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Tracker from "./Tracker";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    // <Tracker />

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              text={text}
              setText={setText}
            />
          </Route>
          <Route>
            <About path="/about" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
