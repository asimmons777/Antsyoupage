import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./landingpage.css";

const Resume: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1>Resume</h1>
      <p>beneath this text you can download a my base resume.</p>
      <button>Download Resume</button>
      <h2>Technical skills and practices</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>SQL</li>
        <li>Restful APIs</li>
        <li>Excel</li>
        <li>CI/CD</li>
        <li>SDLC</li>
        <li>Agile methodology</li>
        <li>Version control</li>
      </ul>
      <h2>Soft skills</h2>
      <ul>
        <li>Communication</li>
        <li>Problem-solving</li>
        <li>Adaptability</li>
        <li>Collaboration</li>
        <li>Strategic thinking</li>
        <li>Curiosity</li>
      </ul>
      <h2>Skills Working on</h2>
      <ul>
        <li>Leadership</li>
        <li>Sales</li>
        <li>Marketing</li>
        <li>AI automation</li>
        <li>Time management</li>
      </ul>
      <h2>occupations Big and small</h2>
      <p>I've worked jobs since I was a teenager, they werent big jobs but I think that 
        they helped me understand money at a young age and the value of putting your time 
        into something to recieve money in return.
      </p>
      <ul>
        <li>Chef</li>
        <li>Gardener</li>
        <li>Canvasser</li>
        <li>Retail Associate</li>
        <li>Tech intern</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Resume;
