import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './landingpage.css';

const Christ:React.FC = () => {
    return (
    <>
      <NavBar />
      <h1>Welcome to the Christ Page</h1>
      <p>This is the Christ page content.</p>
      <Footer />
    </>
    );
}

export default Christ;

