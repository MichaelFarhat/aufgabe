import React from "react";
import "./Contact.css";

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
    if (firstName && lastName && email && text)
      console.log(firstName, lastName, email, text);
  };

  return (
    <div className="contact">
      <h2 className="contact__header">This is contact</h2>
      <form>
        <div className="contact__formControl">
          <label htmlFor="first_name">Vorname</label>
          <input
            name="first_name"
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="contact__formControl">
          <label htmlFor="last_name">Nachname</label>
          <input
            name="last_name"
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="contact__formControl">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact__formControl">
          <label htmlFor="userText">Your Comment</label>
          <textarea
            name="text"
            id="userText"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
