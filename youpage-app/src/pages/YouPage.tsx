import './landingpage.css'; // Page‑specific styles (scoped by selectors used below)
import NavBar from '../components/NavBar'; // Reusable navigation bar
import Footer from '../components/Footer';

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
                        <p>Phone: 773-627-8527</p>
                        <p>Email: <a href="mailto:aasimmons777@gmail.com">aasimmons777@gmail.com</a></p>
                        <p>linkedin: <a href="https://www.linkedin.com/in/anthony-simmons-0964a6365/" target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                </div>

                {/* Image column */}
                <div id="image-container">
                      <img src="/images/Anthony Simmons Headshot.png" alt="Anthony headshot" />
                </div>
            </div>

            {/* Site footer with dynamic current year */}
            <footer>
                <p>© {new Date().getFullYear()} Ant's YouPage. All rights reserved.</p>
            </footer>
        </>
    );
};

export default YouPage; // Export for use in App