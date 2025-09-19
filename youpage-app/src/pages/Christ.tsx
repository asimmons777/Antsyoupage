import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './landingpage.css';

const Christ:React.FC = () => {
    return (
    <>
      <NavBar />
      <h1>Welcome to the Christ Page</h1>
      <p>I decided to add an area in my youpage for Christ as well because I try to 
        include Christ in all things I do and am.
      </p>
      <h2>My favorite verse</h2>
      <p>Job 38:2 “Who do you think you are? Why do you ask questions about my wisdom? You speak many words, but you do not understand anything.”</p>
      <p>In this verse, God is speaking to Job, reminding him of the limitations of human understanding in comparison to divine wisdom. When I Read this for the first time I thought to myself that we truly dont know the workings of god but we do know that we are his creations and that he loves us so i think of this verse often when I am having hard times because this verse reassures me that it's okay to not have all the answers I just need to trust that he works out of love for his creations.</p>
      <Footer />
    </>
    );
}

export default Christ;

