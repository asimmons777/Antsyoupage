import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./landingpage.css"; // Reuse landing page styles for consistency

const Projects: React.FC = () => (
    <>
        <NavBar/>
        <main id="Projects-main">
            <h1>Projects</h1>
            <p>This is where I showcase all of my finished and ongoing projects,disclaimer not all projects are coding projects some can be ai bots and others.</p>
            <h2>interactive Arcade game|status:Finished but plan to innovate and improve more on</h2>
            <p>This game i created using a simple stack html,css,and javascript it took about 2 weeks to complete and features games like flappy bird, tetris, space invaders, and others.(note: i plan on adding more games in the future but first ill setup a backend to store and track scores from players and also a feedback survey on what games they want to play next)</p>
            <h2>Youpage|status:In development</h2>
            <p>This is what im currently working on the most right now Im building this site to showcase a multitude of things about myself and what im doing in my career.Im using React.ts for the frontend and I dont know if im going to do a backend for this project just yet since i dont really think a youpage needs to collect data or have specific login credentials.</p>
            <h2>Ai agent|status:Prototype</h2>
            <p>I built a simple ai agent using copilot studio to recommend me good reads based on genres of books I usually read and genres I like for example comics and financial books, The primary uses for this agent is for when im feeling bored and want to discover new books to read I can just ask it for suggestions to get a book im interested in, I used multiple sites to build the knowledge based for the agent so that even manwha or a genre not typically read in the U.S can even be recommended.</p>
        </main>
        <Footer/>
    </>
);

export default Projects; //Export for use in the Application