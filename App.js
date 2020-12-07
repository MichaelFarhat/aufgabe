import React from "react";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <Home />
      <About />
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
    </div>
  );
}

export default App;
