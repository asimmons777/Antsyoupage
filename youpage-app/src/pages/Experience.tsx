import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './landingpage.css'; 

const Experience: React.FC = () => {
    return (
        <>
            <NavBar/>
            <main id="Experience-main">
                <h1>Experiences</h1>
                <p>This is where Ill be documenting all of my experiences 
                related to my career and personal life that I think are worth sharing. This page will include experiences with me
                building businesses, working with others, personal growth,
                writing code, and more.</p>
                <h2>IC.stars</h2>
                <p>IC.stars is a non-profit organization that I took 
                part in from May 2025 to August 2025. Their main goal is to empower underprivileged people in the tech industry by teaching them Tech skills, providing resources, mentorship, and networking opportunities.IC.stars helped me grow my skills in tech, business, and leadership, which I believe will be invaluable in my future endeavors. while there I worked on tech projects such as full stack applications with a team of interns like myself and also worked on solo applications.These experiences taught me things like collaboration, problem-solving, and adaptability. My time at IC.stars was incredibly rewarding and I am grateful for the opportunity to contribute to such a meaningful cause.</p>
                <h2>amway|status:notstarted</h2>

                </main>
            <Footer/>
            </>
    );
};

export default Experience;