import React from "react";

function Contact({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  text,
  setText,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((firstName, lastName, email, text))
      console.log(firstName, lastName, email, text);
  };

  return (
    <div>
      <h2>this is content</h2>
      <form>
        <label htmlFor="first_name">Vorname</label>
        <input
          name="first_name"
          type="text"
          id="firt_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="last_name">Nachname</label>
        <input
          name="last_name"
          type="text"
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="userText">Email</label>
        <textarea
          name="text"
          id="userText"
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
