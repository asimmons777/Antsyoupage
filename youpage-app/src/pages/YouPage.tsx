import './landingpage.css'; // Page‑specific styles (scoped by selectors used below)
import NavBar from '../components/NavBar'; // Reusable navigation bar
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'; // Icons for contact info

// Functional component representing the personal landing page.
const YouPage: React.FC = () => {
    return (
        <>
            {/* Navigation hub at the top */}
            <NavBar />

            {/* Main flex container (styled in CSS) holding text + image */}
            <div id="main-content">
                {/* Text column */}
                <div id="text-container">
                    <div>
                        <h1>Hi I'm Ant!</h1> {/* Primary greeting heading */}
                        <h4>Software Engineer</h4> {/* Subtitle / role */}
                        <div id="contact-info">
                          <FaPhone className="contact-icon phone" />
                          <FaEnvelope className="contact-icon email" />
                          <a href="https://www.linkedin.com/in/anthony-simmons77/"><FaLinkedin className="contact-icon linkedin" /></a>
                          <a href="https://github.com/asimmons777"><FaGithub className="contact-icon github" /></a>
                        </div>
                    </div>
                </div>

                {/* Image column */}
                <div id="image-container">
                      <img src="/images/Anthony Simmons Headshot.png" alt="Anthony headshot" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default YouPage; // Export for use in App