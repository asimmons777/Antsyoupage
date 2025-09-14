import React from "react";
import NavBar from "../components/NavBar";
import footer from "../components/Footer";
import "./landingpage.css";

const Resume: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1>Resume</h1>
      <p>Content of the Resume page goes here.</p>
      <footer />
    </div>
  );
};

export default Resume;
