import React from "react";
import "./About.css";
function About() {
  const myContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolor! Dicta perferendis consectetur magnam cumque ipsa quidem hic tempore voluptate mollitia distinctio sequi eligendi, excepturi in placeat aperiam odio sed.";
  return (
    <div className="about">
      <h2 className="about__title">This is About</h2>
      <p className="about__welcomeText">{myContent}</p>
    </div>
  );
}

export default About;
