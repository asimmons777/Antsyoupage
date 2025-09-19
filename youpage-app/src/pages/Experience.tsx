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
                <h2>Communities</h2>
                <h3>IC.stars</h3>
                <p>IC.stars is a non-profit organization that I took 
                part in from May 2025 to August 2025. Their main goal is to empower underprivileged people in the tech industry by teaching them Tech skills, providing resources, mentorship, and networking opportunities.IC.stars helped me grow my skills in tech, business, and leadership, which I believe will be invaluable in my future endeavors. while there I worked on tech projects such as full stack applications with a team of interns like myself and also worked on solo applications.These experiences taught me things like collaboration, problem-solving, and adaptability. My time at IC.stars was incredibly rewarding and I am grateful for the opportunity to contribute to such a meaningful cause.</p>
                <h2> Business Ventures </h2>
                <p>Throughout my life ive always had a heart and mindset of an entreprenuer and have always been interested in starting businesses. 
                To this day I still have that mindset and am always looking for new 
                oppurtunities to add new pipelies of income to my portfolio of businesses and investments.</p>
                <h3>Codehaven</h3>
                <p>CodeHaven is a software development company I plan on starting 
                    in the near future. The purpose of me making this company was
                    mainly to represent my love for tech and programing and to also
                    adapt to the future. This company will mainly focus on AI automation and building applications for businesses.
                </p>
                <h3>Amway| status: Active</h3>
                <p>
                    Amway is a network marketing company that im currently dabbling in so that i can learn more about sales and marketing. This experience so far has given me lots of insight and knowledge on how to operate my own businesses.
                </p>
                <h3></h3>
                </main>
            <Footer/>
            </>
    );
};

export default Experience;